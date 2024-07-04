import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getBooks } from "../../api/getters/bookAPI";
import WithLoaderAndError from "../../Components/WithLoaderAndError";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { removeBook } from "../../api/setters/bookAPI";
import useAuth from "../../hooks/useAuth";
import { useAuthHooks } from "../../hooks/useAuthHooks";

const Books = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["books", "admin"],
    queryFn: getBooks,
  });

  const { token } = useAuth();
  const auth = useAuthHooks();

  const queryClient = useQueryClient();

  const deleteBookMutation = useMutation({
    mutationFn: (id: string) => removeBook({ token, ...auth }, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });

  return (
    <WithLoaderAndError {...{ data, isLoading, isError, error }}>
      <div className="flex flex-col gap-12">
        <Link to={"Add"} className="border-b border-purple max-w-fit">
          اضافه کردن کتاب جدید
        </Link>
        <ul className="flex flex-col gap-6">
          {data?.map((item) => {
            const url = `/Book/${item?._id}/${encodeURIComponent(
              item?.urlGoogle ?? item?.title
            ).replace(/%20/g, "-")}`;
            return (
              <li
                key={item._id}
                className="flex flex-col border-b-2 border-black"
              >
                <Link to={url} className="text-blue max-w-fit">
                  صفحه ی کتاب
                </Link>
                <span>{item.title}</span>
                <span>{item.short_text}</span>
                <span>آیدی : {item._id}</span>
                <button
                  className="text-red-500 cursor-pointer max-w-fit"
                  disabled={deleteBookMutation.isPending}
                  onClick={() => {
                    deleteBookMutation.mutate(item._id);
                  }}
                >
                  حذف کتاب
                </button>
                <Link
                  to={`Edit`}
                  className="text-yellow max-w-fit"
                  state={item}
                >
                  <span>تغییر کتاب</span>
                </Link>
                <Link
                  to={"Manage-Comments"}
                  className="text-yellow max-w-fit"
                  state={{ id: item._id, comments: item.comments }}
                >
                  <span>مدیریت کامنت ها</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </WithLoaderAndError>
  );
};

export default Books;
