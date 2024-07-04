import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useAuthHooks } from "../../hooks/useAuthHooks";
import { useRef, useState } from "react";
import { addImages } from "../../api/setters/imageAPI";
import { addSlide, removeSlide } from "../../api/setters/slidesAPI";
import { getSlides } from "../../api/getters/slidesAPI";

const ManageSlides = () => {
  const [imgUrls, setImgUrls] = useState<string[] | null>(null);
  const imagesRef = useRef<HTMLInputElement | null>(null);
  const queryClient = useQueryClient();

  const { token } = useAuth();
  const auth = useAuthHooks();

  const { data, isLoading } = useQuery({
    queryKey: ["slides"],
    queryFn: () => getSlides(),
  });

  const submitImages = async () => {
    if (imagesRef.current?.files) {
      const images = Array.from(imagesRef.current.files);
      const loadToast = toast.loading("درحال بارگذاری");
      try {
        const res = await addImages({ token, ...auth }, images);
        toast.success("بارگذاری شد");
        setImgUrls([...res]);
      } catch (err) {
        console.log(err);
        toast.error("خطا در بارگذاری");
      } finally {
        toast.dismiss(loadToast);
      }
    }
  };

  const addSlideMutation = useMutation({
    mutationFn: () => addSlide({ token, ...auth }, imgUrls!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["slides"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  const removeSlideMutation = useMutation({
    mutationFn: (id: string) => removeSlide({ token, ...auth }, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["slides"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <span>عکس های خود را اپلود کنید</span>
        <input type="file" ref={imagesRef} multiple />
        <button className="bg-pink max-w-fit" onClick={submitImages}>
          ثبت عکس ها
        </button>
        <ul className="flex flex-col gap-2">
          {imgUrls?.map((img, idx) => (
            <li key={idx}>{img}</li>
          ))}
        </ul>
        <button
          className="max-w-fit bg-pink"
          onClick={() => addSlideMutation.mutate()}
        >
          اضافه
        </button>
      </div>
      <ul className="flex flex-col gap-6">
        {!isLoading &&
          data?.map(({ _id, images }) => (
            <li key={_id} className="flex flex-col gap-3">
              <img src={images[0]} alt="images" className="w-44 h-44" />
              <div className="flex gap-4">
                <button
                  className="max-w-fit bg-pink"
                  onClick={() => removeSlideMutation.mutate(_id)}
                >
                  حذف
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ManageSlides;
