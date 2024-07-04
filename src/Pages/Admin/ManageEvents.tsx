import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { useAuthHooks } from "../../hooks/useAuthHooks";
import WithLoaderAndError from "../../Components/WithLoaderAndError";
import { getEvents } from "../../api/getters/eventAPI";
import toast from "react-hot-toast";
import { addEvent, removeEvent } from "../../api/setters/eventAPI";
import { useRef, useState } from "react";
import { addImages } from "../../api/setters/imageAPI";
import { BASE_URL } from "../../api/axios";

const ManageEvents = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLInputElement>(null);
  const coursesRef = useRef<HTMLTextAreaElement>(null);
  const booksRef = useRef<HTMLTextAreaElement>(null);
  const imagesRef = useRef<HTMLInputElement>(null);
  const [imgUrls, setImgUrls] = useState<string[] | null>(null);
  const { token } = useAuth();
  const auth = useAuthHooks();
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", "admin"],
    queryFn: () => getEvents(),
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

  const removeEventMutation = useMutation({
    mutationFn: (id: string) => removeEvent({ token, ...auth }, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });

  const addCodeMutation = useMutation({
    mutationFn: () => {
      const coursesVal = coursesRef.current!.value;
      const booksVal = booksRef.current!.value;
      return addEvent(
        { token, ...auth },
        {
          title: titleRef.current!.value,
          text: textRef.current!.value,
          courses: coursesVal !== "" ? coursesVal.split("-") : [],
          books: booksVal !== "" ? booksVal.split("-") : [],
          images: imgUrls ? imgUrls : [],
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });

  return (
    <main className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1>اضافه کردن رویداد</h1>
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
        </div>
        <div className="flex gap-4">
          <label htmlFor="title">عنوان</label>
          <input id="title" type="text" ref={titleRef} />
        </div>
        <div className="flex gap-4">
          <label htmlFor="text">نوشته و متن</label>
          <input id="text" type="text" ref={textRef} />
        </div>
        <span>
          توجه : بخش عنوان ها را با - از همدیگر جدا کنید بدون هیچ فاصله ای
        </span>
        <div className="flex gap-4">
          <label htmlFor="courses">عنوان دوره ها</label>
          <textarea id="courses" ref={coursesRef} />
        </div>
        <div className="flex gap-4">
          <label htmlFor="books">عنوان کتاب ها</label>
          <textarea id="books" ref={booksRef} />
        </div>
        <button
          className="bg-yellow max-w-fit"
          onClick={() => addCodeMutation.mutate()}
        >
          اضافه
        </button>
      </div>
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        <div className="flex flex-col gap-6">
          <h1>لیست تمامی رویداد ها</h1>
          <ul className="flex flex-col gap-4 list-decimal px-2">
            {data?.map(({ _id, images, products, text, title }) => (
              <li key={_id}>
                <div className="flex flex-col gap-2 border-b border-black">
                  <span>عکس ها :</span>
                  <div className="flex flex-col gap-2">
                    {images.map((img, idx) => (
                      <img src={BASE_URL + img} alt="image" key={idx} />
                    ))}
                  </div>
                  <span>محصولات : </span>
                  {products.map((product) => (
                    <div className="flex flex-col gap-2" key={product?._id}>
                      <span>اسم : {product?.title}</span>
                    </div>
                  ))}
                  <span>عنوان : {title}</span>
                  <span>متن : {text}</span>
                  <button
                    className="max-w-fit bg-red-500"
                    onClick={() => removeEventMutation.mutate(_id)}
                  >
                    حذف
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </WithLoaderAndError>
    </main>
  );
};

export default ManageEvents;
