import { useRef } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import MainHeader from '../../Components/UI/MainHeader';
import MainInput from '../../Components/UI/MainInput';
import MainButton from '../../Components/UI/MainButton';
import useAuth from '../../hooks/useAuth';
import { useAuthHooks } from '../../hooks/useAuthHooks';
import { getSitemapUrls } from '../../api/getters/sitemapAPI';
import { addSitemapUrl, removeSitemapUrl } from '../../api/setters/sitemapAPI';
import { SitemapChangeFreq, SitemapItemType } from '../../Types/apiTypes';

const Sitemap = () => {
  const queryClient = useQueryClient();
  const { token } = useAuth();
  const auth = useAuthHooks();

  const urlRef = useRef<HTMLInputElement | null>(null);
  const priorityRef = useRef<HTMLInputElement | null>(null);
  const changefreqRef = useRef<HTMLSelectElement | null>(null);

  const { data: urls } = useQuery<SitemapItemType[]>({
    queryKey: ['sitemap'],
    queryFn: () => getSitemapUrls({ token, ...auth }),
  });

  const changefreq =
    (changefreqRef.current?.value as SitemapChangeFreq) || 'daily';

  const addMutation = useMutation({
    mutationFn: () =>
      addSitemapUrl(
        { token, ...auth },
        {
          url: urlRef.current?.value || '',
          priority: Number(priorityRef.current?.value || 0),
          changefreq,
        },
      ),
    onSuccess: () => {
      toast.success('لینک اضافه شد');

      if (urlRef.current) urlRef.current.value = '';
      if (priorityRef.current) priorityRef.current.value = '';
      if (changefreqRef.current) changefreqRef.current.value = 'daily';

      queryClient.invalidateQueries({ queryKey: ['sitemap'] });
    },
    onError: () => toast.error('خطا در افزودن لینک'),
  });

  const removeMutation = useMutation({
    mutationFn: (id: string) => removeSitemapUrl({ token, ...auth }, id),
    onSuccess: () => {
      toast.success('حذف شد');
      queryClient.invalidateQueries({ queryKey: ['sitemap'] });
    },
    onError: () => toast.error('خطا در حذف لینک'),
  });

  return (
    <div className="flex flex-col gap-10 p-6">
      <MainHeader>مدیریت سایت مپ</MainHeader>
      <div className="bg-white border rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
        <h2 className="text-lg font-semibold">افزودن لینک جدید</h2>
        <MainInput
          ref={urlRef}
          placeholder="https://example.com/page"
          inputSize="medium"
        />

        <MainInput
          ref={priorityRef}
          placeholder="priority (0 - 1)"
          inputSize="medium"
          type="number"
        />

        <select
          ref={changefreqRef}
          className="border rounded-xl p-3 outline-none"
        >
          <option value="monthly">always</option>
          <option value="monthly">hourly</option>
          <option value="daily">daily</option>
          <option value="weekly">weekly</option>
          <option value="monthly">monthly</option>
          <option value="yearly">yearly</option>
          <option value="never">never</option>
        </select>

        <MainButton
          intent="purple"
          size="medium"
          text="افزودن به سایت مپ"
          onClick={() => addMutation.mutate()}
        />
      </div>
      <div className="bg-white border rounded-2xl p-6 shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">لینک‌های سایت مپ</h2>

          <div className="flex gap-2">
            <a
              href="https://api.saberzarei.com/sitemap.xml"
              target="_blank"
              rel="noreferrer"
              className="text-purple-600 hover:underline"
            >
              مشاهده Sitemap.xml
            </a>
            {','}
            <a
              href="https://saberzarei.com/robots.txt"
              target="_blank"
              rel="noreferrer"
              className="text-purple-600 hover:underline"
            >
              مشاهده Robots.txt
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {urls?.map((item: any) => (
            <div
              key={item._id}
              className="border rounded-xl p-4 flex items-center justify-between hover:bg-gray-50 transition"
            >
              <div className="flex flex-col gap-1">
                <span className="font-medium break-all">{item.url}</span>

                <div className="text-sm text-gray-500 flex gap-4">
                  <span>priority: {item.priority}</span>
                  <span>changefreq: {item.changefreq}</span>
                </div>
              </div>
              <MainButton
                intent="white"
                size="small"
                text="حذف"
                onClick={() => removeMutation.mutate(item._id)}
              />
            </div>
          ))}

          {!urls?.length && (
            <div className="text-center text-gray-500 py-8">
              هنوز لینکی ثبت نشده
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
