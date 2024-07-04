import { useRef, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Article, Book, Course } from "../../Types/apiTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editArticle } from "../../api/setters/articleAPI";
import { editCourse } from "../../api/setters/courseAPI";
import { editBook } from "../../api/setters/bookAPI";
import useAuth from "../../hooks/useAuth";
import { useAuthHooks } from "../../hooks/useAuthHooks";
import { editImages } from "../../api/setters/imageAPI";

const Edit = () => {
  const { parent } = useParams();
  const location = useLocation();
  const queryClient = useQueryClient();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const urlTitleRef = useRef<HTMLInputElement | null>(null);
  const urlGoogleRef = useRef<HTMLInputElement | null>(null);
  const shortTextRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [imgUrls, setImgUrls] = useState<string[] | null>(null);
  const imagesRef = useRef<HTMLInputElement | null>(null);
  const { token } = useAuth();
  const auth = useAuthHooks();

  const submitImages = async (id: string) => {
    if (imagesRef.current?.files) {
      const images = Array.from(imagesRef.current.files);
      const loadToast = toast.loading("درحال بارگذاری");
      try {
        const res = await editImages({ token, ...auth }, id, images);
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

  if (parent === "Articles") {
    const details = location.state as Article;

    const editArticleMutation = useMutation({
      mutationFn: (id: string) =>
        editArticle({ token, ...auth }, id, {
          short_text: shortTextRef.current!.value,
          text: textRef.current!.value,
          title: titleRef.current!.value,
          urlTitle: urlTitleRef.current!.value,
          urlGoogle: urlGoogleRef.current!.value,
          category: "",
          images: imgUrls!,
          status: true,
        }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["articles", "admin"] });
        toast.success("موفقیت آمیز");
      },
      onError: (err) => {
        toast.error("خطا در برقراری ارتباط");
        console.log(err);
      },
    });
    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <span>عکس های خود را اپلود کنید</span>
          <span>
            عکس اول برای نشان دادن مقاله در صفحات اصلی و عکس دوم برای عکس بزرگ
            اول صفحه در صفحه خود مقاله
          </span>
          <input type="file" ref={imagesRef} multiple />
          <button
            className="bg-pink max-w-fit"
            onClick={() => submitImages(details._id)}
          >
            ثبت عکس ها
          </button>
          <ul className="flex flex-col gap-2">
            {imgUrls?.map((img, idx) => (
              <li key={idx}>{img}</li>
            ))}
          </ul>
        </div>
        <input
          type="text"
          placeholder="title"
          defaultValue={details.title}
          ref={titleRef}
        />
        <input
          type="text"
          defaultValue={details?.urlTitle}
          placeholder="url title"
          ref={urlTitleRef}
        />
        <input
          type="text"
          defaultValue={details?.urlGoogle}
          placeholder="url google"
          ref={urlGoogleRef}
        />
        <input
          type="text"
          placeholder="متنی کوتاه برای نمایش در کنار سر تیتر"
          defaultValue={details.short_text}
          ref={shortTextRef}
        />
        <textarea
          placeholder="مقاله ی خود را در فرمت مارکداون بنویسید"
          cols={30}
          rows={10}
          defaultValue={details.text}
          ref={textRef}
        ></textarea>
        <button
          className="bg-pink max-w-fit"
          disabled={editArticleMutation.isPending}
          onClick={() => {
            editArticleMutation.mutate(details._id);
          }}
        >
          تایید
        </button>
      </div>
    );
  } else if (parent === "Courses") {
    const priceRef = useRef<HTMLInputElement | null>(null);
    const discountRef = useRef<HTMLInputElement | null>(null);
    const typeRef = useRef<HTMLSelectElement | null>(null);
    const levelRef = useRef<HTMLSelectElement | null>(null);
    const spotRef = useRef<HTMLInputElement | null>(null);
    const details = location.state as Course;

    const editCourseMutation = useMutation({
      mutationFn: (id: string) =>
        editCourse({ token, ...auth }, id, {
          short_text: shortTextRef.current!.value,
          text: textRef.current!.value,
          title: titleRef.current!.value,
          urlTitle: urlTitleRef.current!.value,
          urlGoogle: urlGoogleRef.current!.value,
          category: "",
          images: imgUrls!,
          discount: discountRef.current!.value,
          level: levelRef.current!.value,
          price: priceRef.current!.value,
          type: typeRef.current!.value as "online" | "offline",
          spotPlayerID: spotRef.current!.value,
        }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["courses", "admin"] });
        toast.success("موفقیت آمیز");
      },
      onError: () => {
        toast.error("خطا در برقراری ارتباط");
      },
    });
    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <span>عکس های خود را اپلود کنید</span>
          <span>
            عکس اول برای نشان دادن مقاله در صفحات اصلی و عکس دوم برای عکس بزرگ
            اول صفحه در صفحه خود مقاله
          </span>
          <input type="file" ref={imagesRef} multiple />
          <button
            className="bg-pink max-w-fit"
            onClick={() => submitImages(details._id)}
          >
            ثبت عکس ها
          </button>
          <ul className="flex flex-col gap-2">
            {imgUrls?.map((img, idx) => (
              <li key={idx}>{img}</li>
            ))}
          </ul>
        </div>
        <input
          type="text"
          placeholder="title"
          defaultValue={details.title}
          ref={titleRef}
        />
        <input
          type="text"
          defaultValue={details?.urlTitle}
          placeholder="url title"
          ref={urlTitleRef}
        />
        <input
          type="text"
          defaultValue={details?.urlGoogle}
          placeholder="url google"
          ref={urlGoogleRef}
        />
        <input
          type="text"
          placeholder="متنی کوتاه برای نمایش در کنار سر تیتر"
          defaultValue={details.short_text}
          ref={shortTextRef}
        />
        <textarea
          placeholder="توضیحات دوره خود را در فرمت مارکداون بنویسید"
          cols={30}
          rows={10}
          defaultValue={details.text}
          ref={textRef}
        ></textarea>
        <input
          type="number"
          placeholder="قیمت اصلی دوره"
          defaultValue={details.price}
          ref={priceRef}
        />
        <input
          type="number"
          placeholder="تخفیف"
          defaultValue={details.discount}
          ref={discountRef}
        />
        <select
          placeholder="نوع دوره"
          ref={typeRef}
          defaultValue={details.type}
        >
          <option value="offline">اسپات پلیر</option>
          <option value="online">انلاین</option>
          <option value="inPerson">حضوری</option>
        </select>
        <select
          placeholder="سطح دوره"
          ref={levelRef}
          defaultValue={details.level}
        >
          <option value="مبتدی">مبتدی</option>
          <option value="متوسط">متوسط</option>
          <option value="پیشرفته">پیشرفته</option>
        </select>
        <input
          type="text"
          placeholder="ایدی اسپات پلیر"
          ref={spotRef}
          defaultValue={details.spotPlayerID}
        />
        <button
          className="bg-pink max-w-fit"
          disabled={editCourseMutation.isPending}
          onClick={() => {
            editCourseMutation.mutate(details._id);
          }}
        >
          تایید
        </button>
      </div>
    );
  } else {
    const virPriceRef = useRef<HTMLInputElement | null>(null);
    const phPriceRef = useRef<HTMLInputElement | null>(null);
    const discountRef = useRef<HTMLInputElement | null>(null);
    const pageNumRef = useRef<HTMLInputElement | null>(null);
    const publicationRef = useRef<HTMLInputElement | null>(null);
    const LinkRef = useRef<HTMLInputElement | null>(null);
    const details = location.state as Book;

    const editBookMutation = useMutation({
      mutationFn: (id: string) =>
        editBook({ token, ...auth }, id, {
          short_text: shortTextRef.current!.value,
          text: textRef.current!.value,
          title: titleRef.current!.value,
          urlTitle: urlTitleRef.current!.value,
          urlGoogle: urlGoogleRef.current!.value,
          category: "",
          images: imgUrls!,
          discount: discountRef.current!.value,
          pricePhysical: phPriceRef.current!.value,
          priceVirtual: virPriceRef.current!.value,
          numberOfPages: pageNumRef.current!.value,
          yearOfPublication: publicationRef.current!.value,
          link: LinkRef.current!.value,
        }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["courses", "admin"] });
        toast.success("موفقیت آمیز");
      },
      onError: () => {
        toast.error("خطا در برقراری ارتباط");
      },
    });
    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <span>عکس های خود را اپلود کنید</span>
          <span>
            عکس اول برای نشان دادن مقاله در صفحات اصلی و عکس دوم برای عکس بزرگ
            اول صفحه در صفحه خود مقاله
          </span>
          <input type="file" ref={imagesRef} multiple />
          <button
            className="bg-pink max-w-fit"
            onClick={() => submitImages(details._id)}
          >
            ثبت عکس ها
          </button>
          <ul className="flex flex-col gap-2">
            {imgUrls?.map((img, idx) => (
              <li key={idx}>{img}</li>
            ))}
          </ul>
        </div>
        <input
          type="text"
          placeholder="title"
          defaultValue={details.title}
          ref={titleRef}
        />
        <input
          type="text"
          defaultValue={details?.urlTitle}
          placeholder="url title"
          ref={urlTitleRef}
        />
        <input
          type="text"
          defaultValue={details?.urlGoogle}
          placeholder="url google"
          ref={urlGoogleRef}
        />
        <input
          type="text"
          placeholder="متنی کوتاه برای نمایش در کنار سر تیتر"
          defaultValue={details.short_text}
          ref={shortTextRef}
        />
        <textarea
          placeholder="توضیحات کتاب خود را در فرمت مارکداون بنویسید"
          cols={30}
          rows={10}
          defaultValue={details.text}
          ref={textRef}
        ></textarea>
        <input
          type="number"
          placeholder="قیمت فیزیکی کتاب"
          defaultValue={details.pricePhysical}
          ref={phPriceRef}
        />
        <input
          type="number"
          placeholder="قیمت مجازی کتاب"
          defaultValue={details.priceVirtual}
          ref={virPriceRef}
        />
        <input
          type="number"
          placeholder="تخفیف"
          defaultValue={details.discount}
          ref={discountRef}
        />
        <input
          type="number"
          placeholder="تعداد صفحات"
          defaultValue={details.numberOfPages}
          ref={pageNumRef}
        />
        <input
          type="number"
          placeholder="سال انتشار"
          defaultValue={details.yearOfPublication}
          ref={publicationRef}
        />
        <input
          type="text"
          placeholder="لینک pdf"
          defaultValue={details.link}
          ref={publicationRef}
        />
        <button
          className="bg-pink max-w-fit"
          disabled={editBookMutation.isPending}
          onClick={() => {
            editBookMutation.mutate(details._id);
          }}
        >
          تایید
        </button>
      </div>
    );
  }
};

export default Edit;
