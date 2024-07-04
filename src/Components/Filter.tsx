import { useState, memo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./UI/DropDown";
import SearchInput from "./UI/SearchInput";
import LeftArrow from "./UI/Icons/LeftArrow";

type Props = {
  queryParameters: URLSearchParams;
  handleParamsChange: (key: "search" | "sort", value: string) => void;
};

const Filter = ({ queryParameters, handleParamsChange }: Props) => {
  const [position, setPosition] = useState("");
  return (
    <div className="flex gap-8 items-center h-10 tips2:flex-col tips2:h-auto">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-between items-center border-0 outline-0 bg-pink text-black px-12 py-2 rounded-full shadow-main w-56">
          مرتب سازی
          <LeftArrow className="w-4 h-4 -rotate-90" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          style={{ direction: "rtl" }}
          className="w-56 bg-pink rounded-2xl px-4 "
        >
          <DropdownMenuLabel>مرتب سازی بر اساس</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem
              value="top"
              className="cursor-pointer hover:translate-x-1 transition-all duration-300 max-w-fit"
              onClick={() => handleParamsChange("sort", "sale")}
            >
              پرفروش ترین ها
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="bottom"
              className="cursor-pointer hover:translate-x-1 transition-all duration-300 max-w-fit"
              onClick={() => handleParamsChange("sort", "new")}
            >
              چدیدترین ها
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="right"
              className="cursor-pointer hover:translate-x-1 transition-all duration-300 max-w-fit"
              onClick={() => handleParamsChange("sort", "view")}
            >
              پربازدید ترین ها
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <SearchInput
        type="filter"
        className="h-full tips2:h-auto tips2:p-0"
        placeHolder="جستجوی محصول"
        value={queryParameters.get("search") ?? ""}
        onChange={(e) => handleParamsChange("search", e.target.value)}
      />
    </div>
  );
};

export default memo(Filter);
