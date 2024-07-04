import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addImages } from "../../api/setters/imageAPI";
import toast from "react-hot-toast";
import { addArticle } from "../../api/setters/articleAPI";
import { addCourse } from "../../api/setters/courseAPI";
import { addBook } from "../../api/setters/bookAPI";
import useAuth from "../../hooks/useAuth";
import { useAuthHooks } from "../../hooks/useAuthHooks";

const Add = () => {
  const [imgUrls, setImgUrls] = useState<string[] | null>(null);
  const { parent } = useParams();
  const queryClient = useQueryClient();
  const imagesRef = useRef<HTMLInputElement | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const urlTitleRef = useRef<HTMLInputElement | null>(null);
  const urlGoogleRef = useRef<HTMLInputElement | null>(null);
  const shortTextRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const { token } = useAuth();
  const auth = useAuthHooks();

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
  if (parent === "Articles") {
    const addArticleMutation = useMutation({
      mutationFn: () =>
        addArticle(
          { token, ...auth },
          {
            short_text: shortTextRef.current!.value,
            text: textRef.current!.value,
            title: titleRef.current!.value,
            urlTitle: urlTitleRef.current!.value,
            urlGoogle: urlGoogleRef.current!.value,
            category: "",
            images: imgUrls!,
            status: true,
          }
        ),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["articles", "admin"] });
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
          <button className="bg-pink max-w-fit" onClick={submitImages}>
            ثبت عکس ها
          </button>
          <ul className="flex flex-col gap-2">
            {imgUrls?.map((img, idx) => (
              <li key={idx}>{img}</li>
            ))}
          </ul>
        </div>
        <input type="text" placeholder="title" ref={titleRef} />
        <input type="text" placeholder="url title" ref={urlTitleRef} />
        <input type="text" placeholder="url google" ref={urlGoogleRef} />
        <input
          type="text"
          placeholder="متنی کوتاه برای نمایش در کنار سر تیتر"
          ref={shortTextRef}
        />
        <textarea
          placeholder="مقاله ی خود را در فرمت مارکداون بنویسید"
          cols={30}
          rows={10}
          ref={textRef}
        ></textarea>
        <button
          className="bg-pink max-w-fit"
          disabled={addArticleMutation.isPending}
          onClick={() => {
            addArticleMutation.mutate();
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
    const addCourseMutation = useMutation({
      mutationFn: () =>
        addCourse(
          { token, ...auth },
          {
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
          }
        ),
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
          <button className="bg-pink max-w-fit" onClick={submitImages}>
            ثبت عکس ها
          </button>
          <ul className="flex flex-col gap-2">
            {imgUrls?.map((img, idx) => (
              <li key={idx}>{img}</li>
            ))}
          </ul>
        </div>
        <input type="text" placeholder="title" ref={titleRef} />
        <input type="text" placeholder="url title" ref={urlTitleRef} />
        <input type="text" placeholder="url google" ref={urlGoogleRef} />
        <input
          type="text"
          placeholder="متنی کوتاه برای نمایش در کنار سر تیتر"
          ref={shortTextRef}
        />
        <textarea
          placeholder="توضیحات دوره خود را در فرمت مارکداون بنویسید"
          cols={30}
          rows={10}
          ref={textRef}
        ></textarea>
        <input type="number" placeholder="قیمت اصلی دوره" ref={priceRef} />
        <input type="number" placeholder="تخفیف" ref={discountRef} />
        <select placeholder="نوع دوره" ref={typeRef} defaultValue="offline">
          <option value="offline">اسپات پلیر</option>
          <option value="online">انلاین</option>
          <option value="inPerson">حضوری</option>
        </select>
        <select placeholder="سطح دوره" ref={levelRef} defaultValue="مبتدی">
          <option value="مبتدی">مبتدی</option>
          <option value="متوسط">متوسط</option>
          <option value="پیشرفته">پیشرفته</option>
        </select>
        <input type="text" placeholder="ایدی اسپات پلیر" ref={spotRef} />
        <button
          className="bg-pink max-w-fit"
          disabled={addCourseMutation.isPending}
          onClick={() => {
            addCourseMutation.mutate();
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

    const addBookMutation = useMutation({
      mutationFn: () =>
        addBook(
          { token, ...auth },
          {
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
          }
        ),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["books", "admin"] });
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
          <button className="bg-pink max-w-fit" onClick={submitImages}>
            ثبت عکس ها
          </button>
          <ul className="flex flex-col gap-2">
            {imgUrls?.map((img, idx) => (
              <li key={idx}>{img}</li>
            ))}
          </ul>
        </div>
        <input type="text" placeholder="title" ref={titleRef} />
        <input type="text" placeholder="url title" ref={urlTitleRef} />
        <input type="text" placeholder="url google" ref={urlGoogleRef} />
        <input
          type="text"
          placeholder="متنی کوتاه برای نمایش در کنار سر تیتر"
          ref={shortTextRef}
        />
        <textarea
          placeholder="توضیحات کتاب خود را در فرمت مارکداون بنویسید"
          cols={30}
          rows={10}
          ref={textRef}
        ></textarea>
        <input type="number" placeholder="قیمت فیزیکی کتاب" ref={phPriceRef} />
        <input type="number" placeholder="قیمت مجازی کتاب" ref={virPriceRef} />
        <input type="number" placeholder="تخفیف" ref={discountRef} />
        <input type="number" placeholder="تعداد صفحات" ref={pageNumRef} />
        <input type="number" placeholder="سال انتشار" ref={publicationRef} />
        <input type="text" placeholder="لینک pdf" ref={LinkRef} />
        <button
          className="bg-pink max-w-fit"
          disabled={addBookMutation.isPending}
          onClick={() => {
            addBookMutation.mutate();
          }}
        >
          تایید
        </button>
      </div>
    );
  }
};

export default Add;
