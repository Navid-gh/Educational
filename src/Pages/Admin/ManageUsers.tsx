import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AllUsersUserType, getUsers } from "../../api/getters/userAPI";
import useAuth from "../../hooks/useAuth";
import { useAuthHooks } from "../../hooks/useAuthHooks";
import WithLoaderAndError from "../../Components/WithLoaderAndError";

const ManageUsers = () => {
  const [items, setItems] = useState<AllUsersUserType[]>([]);
  const phoneRef = useRef<HTMLInputElement>(null);
  const { token } = useAuth();
  const auth = useAuthHooks();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", "admin"],
    queryFn: () => getUsers({ token, ...auth }),
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newItems = data!.filter((item) =>
      item.phone.includes(e.target.value)
    );
    setItems(newItems);
  };

  useEffect(() => {
    if (data) setItems(data);
  }, [data]);
  return (
    <WithLoaderAndError {...{ data, isLoading, isError, error }}>
      <div className="flex flex-col gap-6">
        <h1>لیست تمامی کاربران</h1>
        <div className="flex gap-2">
          <span>جستجو برحسب شماره تلفن</span>
          <input
            type="text"
            ref={phoneRef}
            className="border border-black"
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <ul className="flex flex-col gap-4 list-decimal px-2">
          {items?.map(({ email, first_name, _id, last_name, phone }) => (
            <li key={_id}>
              <div className="flex flex-col gap-2 border-b border-black">
                <span>اسم : {first_name + " " + last_name}</span>
                <span>ایمیل : {email}</span>
                <span>شماره همراه : {phone}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      ;
    </WithLoaderAndError>
  );
};

export default ManageUsers;
