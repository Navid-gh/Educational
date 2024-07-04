import { useEffect } from "react";
import { useAppDispatch } from "./useReduxHooks";
import useAuth from "./useAuth";
import { useLocalStorage } from "./useStorage";
import { updateProduct } from "../redux/basket/basketSlice";

const useInitialBasketProducts = () => {
  const dispatch = useAppDispatch();
  const { Auth } = useAuth();
  const [value] = useLocalStorage("products", []);

  useEffect(() => {
    const setProducts = () => {
      if (Auth && value) {
        let totlaPrice = 0;
        value.forEach((item) => {
          if ("finalPricePhysical" in item) {
            totlaPrice += Number(item.finalPricePhysical);
          } else {
            totlaPrice += Number(item.finalPrice);
          }
        });
        dispatch(
          updateProduct({
            products: value,
            qty: value.length,
            total: totlaPrice,
          })
        );
      }
    };

    setProducts();
  }, [Auth]);
};

export default useInitialBasketProducts;
