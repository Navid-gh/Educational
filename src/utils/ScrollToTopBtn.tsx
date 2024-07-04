import useScrollBtn from "../hooks/useScrollBtn";
import LeftArrow from "../Components/UI/Icons/LeftArrow";
import { cn } from "./lib/Cn";

function ScrollToTopButton() {
  const { showButton, scrollToTop } = useScrollBtn();

  return (
    <div
      className={cn(
        "fixed bottom-3 left-7 w-8 h-8 opacity-0 animate-bounce scale-0 transition-all duration-300 bg-purple p-2 rounded-xl cursor-pointer z-50",
        { "scale-100 opacity-100": showButton }
      )}
      onClick={scrollToTop}
    >
      <span className="">
        <LeftArrow
          className="rotate-90 w-full h-full fill-white"
          id="arrow-svg"
        />
      </span>
    </div>
  );
}

export default ScrollToTopButton;
