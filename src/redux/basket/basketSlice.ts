import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Book, Course } from "../../Types/apiTypes";
import { useLocalStorage } from "../../hooks/useStorage";

// Define a type for the slice state
interface UserState {
  products: (Book | Course)[];
  qty: number;
  total: number;
}

type AddPayload =
  | {
      type: "course";
      data: Course;
    }
  | {
      type: "book";
      data: Book;
    };
type UpdatePayload = UserState;

type RemovePayload = {
  id: string;
  price: number | string;
};

// Define the initial state using that type
const initialState: UserState = {
  products: [],
  qty: 0,
  total: 0,
};

export const basketSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<AddPayload>) => {
      state.products.push(action.payload.data);
      state.qty += 1;
      const [_, setValue] = useLocalStorage("products", []);

      if (action.payload.type === "book") {
        state.total += Number(action.payload.data.finalPricePhysical);
      } else {
        state.total += Number(action.payload.data.finalPrice);
      }
      setValue(state.products);
    },
    // addQty: (state, action) => {
    //   state.products[action.payload.idx].quantity += 1;
    //   state.total += action.payload.price;
    //   localStorage.setItem("products", JSON.stringify(state.products));
    // },
    // decQty: (state, action) => {
    //   state.products[action.payload.idx].quantity -= 1;
    //   state.total -= action.payload.price;
    //   localStorage.setItem("products", JSON.stringify(state.products));
    // },
    removeProduct: (state, action: PayloadAction<RemovePayload>) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload.id
      );
      state.qty -= 1;
      state.total -= Number(action.payload.price);
      const [_, setValue] = useLocalStorage("products", []);
      setValue(state.products);
    },
    updateProduct: (state, action: PayloadAction<UpdatePayload>) => {
      state.products = action.payload.products;
      state.qty = action.payload.qty;
      state.total = action.payload.total;
    },
  },
});
export const { addToBasket, updateProduct, removeProduct } =
  basketSlice.actions;
// export const { addToBasket, addQty, decQty, removeProduct, updateProduct } =
//   basketSlice.actions;
export default basketSlice.reducer;
