import { Course, Book } from "../Types/apiTypes";
import toast from "react-hot-toast";
import { useAppDispatch } from "./useReduxHooks";
import { addToBasket } from "../redux/basket/basketSlice";

const useAddToBasket = (
  Auth: boolean,
  dispatch: ReturnType<typeof useAppDispatch>,
  product: Course | Book,
  type: "course" | "book"
) => {
  if (!Auth) {
    toast.error("لطفا وارد حساب کاربری خود شوید");
    return;
  }
  if (type === "book") {
    dispatch(addToBasket({ type: "book", data: product as Book }));
  } else {
    dispatch(addToBasket({ type: "course", data: product as Course }));
  }
  toast.success("محصول با موفقیت به سبد شما اضافه شد");
};

export default useAddToBasket;
