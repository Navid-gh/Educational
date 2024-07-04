import { useParams, useLocation } from "react-router-dom";
import { Comment } from "../../Types/apiTypes";
import { setStatus } from "../../api/setters/commentAPI";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useAuthHooks } from "../../hooks/useAuthHooks";

type State = {
  id: string;
  comments: Comment[];
};

const mapper = {
  Courses: "course",
  Books: "book",
  Articles: "blog",
} as const;

const ManageComments = () => {
  const { token } = useAuth();
  const auth = useAuthHooks();
  const { parent } = useParams<{ parent: "Courses" | "Books" | "Articles" }>();
  const { comments }: State = useLocation().state;
  const handleCommentStatus = async (commentId: string, status: boolean) => {
    try {
      await setStatus(
        { token, ...auth },
        {
          id: commentId,
          status,
          type: mapper[parent!],
        }
      );
      toast.success("موفقیت آمیز");
    } catch (error) {
      console.log(error);
      toast.error("خطا در برقراری ارتباط");
    }
  };
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {comments?.map(({ _id, comment, isShowAdmin }) => {
          if (isShowAdmin) return;
          return (
            <li key={_id} className="flex flex-col gap-2">
              <span>{comment}</span>
              <div className="flex gap-3">
                <button
                  className="max-w-fit bg-pink"
                  onClick={() => handleCommentStatus(_id, true)}
                >
                  تایید
                </button>
                <button
                  className="max-w-fit bg-red-500"
                  onClick={() => handleCommentStatus(_id, false)}
                >
                  رد نظر
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ManageComments;
