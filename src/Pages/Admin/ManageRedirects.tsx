import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { useAuthHooks } from '../../hooks/useAuthHooks';
import WithLoaderAndError from '../../Components/WithLoaderAndError';
import { getRedirects } from '../../api/getters/redirectAPI';
import { addRedirect, removeRedirect } from '../../api/setters/redirectAPI';

const ManageRedirects = () => {
  const { token } = useAuth();
  const auth = useAuthHooks();
  const [oldUrl, setOldUrl] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['redirects'],

    queryFn: () =>
      getRedirects({
        token,

        ...auth,
      }),
  });

  const submit = async () => {
    try {
      await addRedirect(
        { token, ...auth },
        {
          oldUrl: oldUrl,
          newUrl: newUrl,
          statusCode: 301,
        },
      );
      toast.success('ثبت شد');
      setOldUrl('');
      setNewUrl('');
      refetch();
    } catch {
      toast.error('خطا');
    }
  };

  const remove = async (id: string) => {
    await removeRedirect(
      {
        token,
        ...auth,
      },
      id,
    );

    refetch();
  };

  return (
    <WithLoaderAndError {...{ data, isLoading, isError, error }}>
      <div className="flex flex-col gap-6">
        <h1>مدیریت Redirect</h1>

        <input
          value={oldUrl}
          onChange={(e) => setOldUrl(e.target.value)}
          placeholder="/blog/old-post"
        />

        <input
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          placeholder="/blog/new-post"
        />

        <button onClick={submit}>ثبت</button>

        <ul>
          {data?.map((item) => (
            <li key={item._id}>
              <div>{item.oldUrl}</div>

              <div>{item.newUrl}</div>

              <button onClick={() => remove(item._id)}>حذف</button>
            </li>
          ))}
        </ul>
      </div>
    </WithLoaderAndError>
  );
};

export default ManageRedirects;
