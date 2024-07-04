import HeadTitle from "./UI/HeadTitle";
import Tick from "./UI/Icons/Tick";
import Dart from "./UI/images/Dart";
import { subHerTexts } from "../Items/SubHeroText";

const SubHero = () => {
  return (
    <section className="flex gap-4 items-center subHero:flex-col">
      <div className="flex-1 h-[18.75rem] subHero:w-full subHero:h-auto">
        <Dart id="dart-svg" className="w-full h-full" />
      </div>
      <div className="flex-1 flex flex-col gap-6 items-center subHero:w-full">
        <HeadTitle>چهار ویژگی برتر آکادمی فن بیان صابر زارعی</HeadTitle>
        <ul className="list-none flex flex-col gap-2 text-black subHero:w-full">
          {subHerTexts.map(({ id, text }) => (
            <li className="flex gap-2 items-center" key={id}>
              <div>
                <Tick id="tick-svg" className="w-8 h-8" />
              </div>
              <h2 className="font-semibold text-xl navbar:text-base tips2:text-[.8rem]">
                {text}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SubHero;
