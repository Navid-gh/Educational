import { forwardRef } from "react";
import BasketTick from "./Icons/BasketTick";

type Props = {
  onClick: () => void;
};

const DiscountInput = forwardRef<HTMLInputElement, Props>(
  ({ onClick }, ref) => {
    return (
      <div className="flex">
        <input
          type="text"
          className="border border-purple px-2 py-1 bg-transparent rounded-tr-full rounded-br-full outline-none text-sm w-full"
          ref={ref}
          placeholder="کد تخفیف را وارد کنید"
        />
        <div
          className="p-2 bg-purple rounded-tl-full rounded-bl-full cursor-pointer"
          onClick={onClick}
        >
          <BasketTick className="w-4 h-4 fill-white" id="tick" />
        </div>
      </div>
    );
  }
);

export default DiscountInput;
