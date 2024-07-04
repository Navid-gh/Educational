import { useRef, useState } from "react";
import UserEditInfoBox from "../../Components/UserEditInfoBox";
import MainInput from "../../Components/UI/MainInput";
import MainButton from "../../Components/UI/MainButton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../Components/UI/AlertDialog";
import MainTextArea from "../../Components/UI/MainTextArea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Data, editUser } from "../../api/setters/userAPI";
import { useAuthHooks } from "../../hooks/useAuthHooks";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useInputValidator from "../../hooks/useInputValidator";

const Info = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const fnameRef = useRef<HTMLInputElement>(null);
  const lnameRef = useRef<HTMLInputElement>(null);
  const fixPhoneRef = useRef<HTMLInputElement>(null);
  const postalCodeRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLTextAreaElement>(null);
  const queryClient = useQueryClient();

  const { token, data } = useAuth();
  const auth = useAuthHooks();
  const [phone, setPhone] = useState(data.phone);

  const editUserMutation = useMutation({
    mutationFn: (data: Data) => editUser({ token, ...auth }, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", "user"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });

  const handleEditPhoneEmail = (email?: string, phone?: string) => {
    if (email) {
      const msg = useInputValidator(email, "email");
      if (msg) {
        toast.error(msg);
        return;
      }
      editUserMutation.mutate({
        email,
      });
    } else {
      const msg = useInputValidator(phone, "phone");
      if (msg) {
        toast.error(msg);
        return;
      }
      editUserMutation.mutate({
        phone,
      });
    }
  };
  return (
    <section className="flex flex-col gap-4">
      <h1 className="font-bold text-purple">مشخصات</h1>
      <UserEditInfoBox header="تغییر شماره همراه و ایمیل" key={"phone-email"}>
        <div className="flex flex-col gap-2 p-2">
          <div className="flex flex-col gap-1">
            <span>شماره همراه</span>
            <div className="flex justify-between items-center books:flex-col books:gap-3">
              <MainInput
                id="mobile"
                intent="login"
                inputSize="editUser"
                key={"phone"}
                className="max-w-[60%] hero:max-w-[95%]"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <AlertDialog>
                <AlertDialogTrigger className="flex-none">
                  <MainButton
                    intent="purple"
                    size="login"
                    text="تغییر شماره همراه"
                    className="max-w-fit py-2 hover:bg-black min-w-[8.31rem]"
                    key={"btn-ph"}
                  />
                </AlertDialogTrigger>
                <AlertDialogContent className="rounded-xl bg-white shadow-main py-12">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      از این فرایند اطمینان دارید؟
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      {`از تغییر شماره همراه خود به ${phone} اطمینان دارید؟`}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex flex-row gap-4">
                    <AlertDialogCancel className="flex-1">
                      <MainButton
                        intent="black"
                        size="login"
                        text="بله"
                        className="max-w-fit py-2 hover:bg-black min-w-[8.31rem]"
                        key={"modal-yes"}
                        onClick={() => handleEditPhoneEmail(undefined, phone)}
                      />
                    </AlertDialogCancel>
                    <AlertDialogAction className="flex-1">
                      <MainButton
                        intent="white"
                        size="login"
                        text="خیر"
                        className="max-w-fit py-2 min-w-[8.31rem]"
                        key={"modal-no"}
                      />
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span>ایمیل</span>
            <div className="flex justify-between items-center books:flex-col books:gap-3">
              <MainInput
                id="email"
                intent="login"
                inputSize="editUser"
                ref={emailRef}
                key={"email"}
                className="max-w-[60%] hero:max-w-[95%]"
                defaultValue={data?.email}
              />
              <MainButton
                intent="purple"
                size="login"
                text="تغییر ایمیل"
                onClick={() =>
                  handleEditPhoneEmail(emailRef.current!.value, undefined)
                }
                className="max-w-fit py-2 hover:bg-black min-w-[8.31rem]"
                key={"btn-email"}
              />
            </div>
          </div>
        </div>
      </UserEditInfoBox>
      <UserEditInfoBox header="مشخصات" key={"info"}>
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 tips2:flex-col">
            <MainInput
              label="نام"
              id="fname"
              intent="login"
              inputSize="editUser"
              ref={fnameRef}
              key={"fname"}
              className="flex-1"
              defaultValue={data?.first_name}
            />
            <MainInput
              label="نام خانوادگی"
              id="lname"
              intent="login"
              inputSize="editUser"
              ref={lnameRef}
              key={"lname"}
              className="flex-1"
              defaultValue={data?.last_name}
            />
          </div>
          <div className="flex gap-4 tips2:flex-col">
            <MainInput
              label="تلفن ثابت"
              id="fix-phone"
              intent="login"
              inputSize="editUser"
              ref={fixPhoneRef}
              key={"fix-phone"}
              className="flex-1"
              defaultValue={data?.fixPhone}
            />
            <MainInput
              label="کد پستی"
              id="postal-code"
              intent="login"
              inputSize="editUser"
              ref={postalCodeRef}
              key={"postal-code"}
              className="flex-1"
              defaultValue={data?.codePostal}
            />
          </div>
          <MainTextArea
            intent="primary"
            inputSize="base"
            cols={30}
            rows={5}
            label="آدرس"
            ref={addressRef}
            defaultValue={data?.address}
          />
          <MainButton
            intent="purple"
            size="login"
            text="تغییر اطلاعات"
            onClick={() =>
              editUserMutation.mutate({
                address: addressRef.current!.value,
                codePostal: postalCodeRef.current!.value,
                first_name: fnameRef.current!.value,
                last_name: lnameRef.current!.value,
              })
            }
            className="max-w-fit py-2 hover:bg-black min-w-[8.31rem]"
            key={"btn-edit-info"}
          />
        </div>
      </UserEditInfoBox>
    </section>
  );
};

export default Info;
