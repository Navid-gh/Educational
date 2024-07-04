import { useRef, useState, useEffect, ChangeEvent } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addView, editView, removeView } from "../../api/setters/mainViewsAPI";
import { getViews } from "../../api/getters/mainViewsAPI";
import toast from "react-hot-toast";
import WithLoaderAndError from "../../Components/WithLoaderAndError";
import { View } from "../../Types/apiTypes";
import useAuth from "../../hooks/useAuth";
import { useAuthHooks } from "../../hooks/useAuthHooks";

const ManageViews = () => {
  const userRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLInputElement | null>(null);
  const courseRef = useRef<HTMLInputElement | null>(null);
  const { token } = useAuth();
  const auth = useAuthHooks();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["views", "admin"],
    queryFn: getViews,
  });
  const [items, setItems] = useState<View[] | undefined>(data);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const queryClient = useQueryClient();

  const deleteViewMutation = useMutation({
    mutationFn: (id: string) => removeView(id, { token, ...auth }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["views", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });

  const editViewMutation = useMutation({
    mutationFn: (idx: number) => {
      const item = items![idx];
      return editView(
        item._id,
        {
          description: item.description,
          nameCourse: item.nameCourse,
          nameUser: item.nameUser,
        },
        { token, ...auth }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["views", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  const addViewMutation = useMutation({
    mutationFn: () =>
      addView(
        {
          description: textRef.current!.value,
          nameCourse: courseRef.current!.value,
          nameUser: userRef.current!.value,
        },
        { token, ...auth }
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["views", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  const handleChange = (
    key: string,
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const updatedItems = items?.map((item) => {
      if (item._id === id) {
        return { ...item, [key]: e.target.value };
      }
      return item;
    });
    setItems(updatedItems);
  };
  return (
    <WithLoaderAndError {...{ data, isLoading, isError, error }}>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <span>اضافه کردن کامنت</span>
          <div className="flex flex-col gap-2">
            <input type="text" ref={userRef} placeholder="اسم یوزر" />
            <input type="text" ref={textRef} placeholder="نوشته و متن" />
            <input type="text" ref={courseRef} placeholder="اسم دوره" />
            <button
              className="max-w-fit bg-pink"
              onClick={() => {
                addViewMutation.mutate();
              }}
            >
              اضافه
            </button>
          </div>
        </div>
        <ul>
          {items?.map(({ _id, description, nameCourse, nameUser }, idx) => (
            <li key={_id} className="flex flex-col gap-1">
              <div className="flex flex-col gap-1">
                <span>اسم یوزر</span>
                <input
                  type="text"
                  value={nameUser}
                  onChange={(e) => handleChange("nameUser", e, _id)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span>نوشته و متن</span>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => handleChange("description", e, _id)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span>اسم دوره</span>
                <input
                  type="text"
                  value={nameCourse}
                  onChange={(e) => handleChange("nameCourse", e, _id)}
                />
              </div>
              <div className="flex gap-2">
                <button
                  className="bg-pink max-w-fit"
                  onClick={() => editViewMutation.mutate(idx)}
                >
                  تغییر
                </button>
                <button
                  className="max-w-fit bg-red-500"
                  onClick={() => deleteViewMutation.mutate(_id)}
                >
                  حذف
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </WithLoaderAndError>
  );
};

export default ManageViews;
