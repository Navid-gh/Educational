import { Link } from "react-router-dom";
import { Article, Book, Course } from "../../Types/apiTypes";
import { BASE_URL } from "../../api/axios";
import { cn } from "../../utils/lib/Cn";
import Loader from "./Loader";

type Props = {
  data: (Course | Book | Article)[];
  loading: boolean;
  show: boolean;
  sidebar: boolean;
};

const SearchResults = ({ data, loading, show, sidebar }: Props) => {
  return (
    <div
      className={cn(
        "p-2 absolute top-[105%] left-0 bg-lowPink hidden w-full max-h-[12.5rem] h-[12.5rem] scroll-y overflow-y-auto rounded-lg shadow-main z-50",
        {
          block: show,
          "min-w-[16rem] right-0 left-auto": sidebar,
        }
      )}
    >
      {loading ? (
        <Loader />
      ) : data.length > 0 ? (
        <ul className="flex flex-col gap-3">
          {data?.map((item) => {
            let url = "";
            let type = "";
            if (item.item_type === "blog") {
              url = `/Article/${item._id}/${encodeURIComponent(
                item?.urlGoogle ?? item?.title
              ).replace(/%20/g, "-")}`;
              type = "مقاله";
            } else if (item.item_type === "book") {
              url = `/Book/${item._id}/${encodeURIComponent(
                item?.urlGoogle ?? item?.title
              ).replace(/%20/g, "-")}`;
              type = "کتاب";
            } else {
              url = `/Course/${item._id}/${encodeURIComponent(
                item?.urlGoogle ?? item?.title
              ).replace(/%20/g, "-")}`;
              type = "دوره";
            }
            return (
              <li key={item._id}>
                <Link
                  to={url}
                  className="w-full flex gap-2 cursor-pointer p-1 py-2 pr-2 rounded-lg hover:bg-white transition-all duration-300"
                >
                  <figure className="w-12 h-16">
                    <img
                      className="w-full h-full rounded-lg"
                      src={`${BASE_URL}${item.images[1]}`}
                      alt="item-image"
                    />
                  </figure>
                  <div className="self-center flex gap-4 text-xs">
                    <span>{type}</span>
                    <span>{item.title}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>متاسفانه نتیجه ای برای جستجو شما پیدا نشد.</p>
      )}
    </div>
  );
};

export default SearchResults;
