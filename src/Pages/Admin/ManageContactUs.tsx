import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import WithLoaderAndError from "../../Components/WithLoaderAndError";
import {
  getAllContacts,
  setContactStatus,
} from "../../api/contactUs/contactAPI";
import { ContactTimeConvertor } from "../../utils/ContactTimeConvertor";

const ManageContactUs = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["contacts", "admin"],
    queryFn: getAllContacts,
  });

  const setStatusContactMutation = useMutation({
    mutationFn: (id: string) => setContactStatus(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  return (
    <main className="flex flex-col gap-4">
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        <div>
          <ul>
            {data?.map(({ name, phone, status, subject, text, time, _id }) => {
              if (status === true) return;
              return (
                <li
                  key={_id}
                  className="flex flex-col gap-2 border-b border-black"
                >
                  <span>نام : {name}</span>
                  <span>شماره همراه : {phone}</span>
                  <span>زمان تماس : {ContactTimeConvertor(time)}</span>
                  {subject !== "" ? (
                    <>
                      <span>موضوع : {subject}</span>
                      <span>پیام : {text}</span>
                    </>
                  ) : null}
                  <button
                    className="bg-lowYellow max-w-fit"
                    onClick={() => setStatusContactMutation.mutate(_id)}
                  >
                    خوانده شد
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </WithLoaderAndError>
    </main>
  );
};

export default ManageContactUs;
