import { basketNavItems } from "../Items/basketNav";
import { usePersianNums } from "../hooks/usePersianNums";
import { cn } from "../utils/lib/Cn";

type Props = {
  currentUrl: string;
};

const BasketNav = ({ currentUrl }: Props) => {
  return (
    <nav className="overflow-auto scroll-x">
      <ul className="flex justify-between py-6 px-12 bg-lowPink rounded-full min-w-[31.25rem]">
        {basketNavItems.map(({ id, link, name }, idx) => {
          const newlink = link === "" ? link : "/" + link;
          return (
            <div key={id} className="flex gap-3">
              <span
                className={cn(
                  "flex items-center justify-center w-6 h-6 border border-black rounded-full text-black",
                  { "bg-purple text-white": currentUrl === newlink }
                )}
              >
                {usePersianNums(idx + 1)}
              </span>
              <span
                className={cn("text-black", {
                  "text-purple": currentUrl === newlink,
                })}
              >
                {name}
              </span>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default BasketNav;
