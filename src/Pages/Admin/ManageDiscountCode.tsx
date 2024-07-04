import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { addCode, getCodes, removeCode } from "../../api/basket/discountAPI";
import toast from "react-hot-toast";
import WithLoaderAndError from "../../Components/WithLoaderAndError";

const ManageDiscountCode = () => {
  const percentRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["codes", "admin"],
    queryFn: getCodes,
  });

  const addCodeMutation = useMutation({
    mutationFn: () => addCode(percentRef.current!.value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["codes", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  const removeCodeMutation = useMutation({
    mutationFn: (id: string) => removeCode(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["codes", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span>درصد تخفیف مورد نظر خود را وارد کنید</span>
        <input type="text" ref={percentRef} />
        <button
          className="bg-yellow max-w-fit"
          onClick={() => addCodeMutation.mutate()}
        >
          اضافه
        </button>
      </div>
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        <div>
          <ul>
            {data?.map(({ code, percent, _id }) => (
              <li
                key={_id}
                className="flex flex-col gap-2 border-b border-black"
              >
                <span>درصد تخفیف : {percent}</span>
                <span>کد : {code}</span>
                <button
                  className="bg-red-500 max-w-fit"
                  onClick={() => removeCodeMutation.mutate(_id)}
                >
                  حذف
                </button>
              </li>
            ))}
          </ul>
        </div>
      </WithLoaderAndError>
    </main>
  );
};

export default ManageDiscountCode;
