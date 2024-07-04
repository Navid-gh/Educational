import { useRef } from "react";
import MainHeader from "./UI/MainHeader";
import OwnerProfile from "./UI/OwnerProfile";
import MainButton from "./UI/MainButton";
import MainTextArea from "./UI/MainTextArea";
import { CardTypes } from "../Types/cardTypes";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addComment } from "../api/setters/commentAPI";
import useAuth from "../hooks/useAuth";
import { useAuthHooks } from "../hooks/useAuthHooks";

type Props = {
  type: CardTypes;
  id: string;
  parentId?: string;
};

const AddComment = ({ id, type, parentId }: Props) => {
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const loadNotifRef = useRef<ReturnType<typeof toast.loading>>("");
  const { Auth, token } = useAuth();
  const auth = useAuthHooks();
  const addCommentMutation = useMutation({
    mutationFn: () => {
      loadNotifRef.current = toast.loading("درحال ثبت نظر شما");
      return addComment(
        type,
        { token, ...auth },
        {
          comment: commentRef.current!.value,
          id,
          parent: parentId ?? "",
        }
      );
    },
    onSuccess: () => {
      toast.success("نظر شما با موفقیت ثبت شد");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
    onSettled() {
      toast.dismiss(loadNotifRef.current);
    },
  });
  return (
    <div className="flex flex-col gap-4">
      <MainHeader
        intent="bgBlack"
        size="main"
        className="bg-transparent after:bg-transparent text-black"
      >
        نظر شما
      </MainHeader>
      {Auth ? (
        <>
          <OwnerProfile name="" profile="" />
          <div className="flex flex-col gap-3 max-w-[30rem]">
            <MainTextArea
              cols={30}
              rows={10}
              placeholder="نظر خود را اینجا بنویسید"
              ref={commentRef}
            />
            <MainButton
              className="self-end"
              text={`ارسال نظر`}
              intent="purple"
              size="medium"
              disabled={addCommentMutation.isPending}
              onClick={() => addCommentMutation.mutate()}
            />
          </div>
        </>
      ) : (
        <>
          <p>برای نوشتن نظر لطفا اول وارد اکانت خود شوید.</p>
        </>
      )}
    </div>
  );
};

export default AddComment;
