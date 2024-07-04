import { Link } from "react-router-dom";
import ImageBox from "./UI/images/ImageBox";
import YellowBulb from "./UI/images/YellowBulb";

const Bio = () => {
  return (
    <section className="relative h-[37.5rem] [@media(max-width:980px)]:h-auto">
      <YellowBulb
        id="bulb-svg"
        className="absolute inset-0 -z-10 w-full h-full tips:hidden"
      />
      <div className="flex gap-4 z-10 relative text-black pt-[10%] pr-[5%] yellowTop:pt-[19%] tips:bg-yellow tips:p-8 rounded-xl tips:flex-col">
        <div className="relative w-80 h-80 min-w-[20rem] min-h-[20rem] rounded-full tips:self-center tips2:min-w-0 tips2:min-h-0 tips2:h-[14rem] tips2:w-[14rem]">
          <ImageBox id="imagebox-svg" className="absolute inset-0" />
          <img
            className="w-full h-full rounded-full p-3 pr-5 pt-5 z-10 relative object-cover"
            src="/images/saber.jpg"
            alt="profile"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span>صابر زارعی</span>
            <span>بنیانگذار آکادمی آکادمی فن بیان صابر زارعی</span>
          </div>
          <span className="max-w-[60%] tips:max-w-none">
            مدرس فن بیان و نویسنده کتاب فیل بیان، سابقه فروش تخصصی از سال ۱۳۸۶
            در صنعت تبلیغات، بیمه، پخش سراسری و آموزش کشور، با سمت های بازاریاب،
            سرپرست فروش، مدیر فروش و مدرس
          </span>
          <div className="flex gap-6">
            <span>کتاب های صابر زارعی</span>
            <div className="flex gap-4 max-w-[8rem] [@media(max-width:850px)]:max-w-[4rem]">
              <Link to="https://saberzarei.com/Book/65d5e065e47ef690c8408f43/%DA%A9%D8%AA%D8%A7%D8%A8-%D9%81%DB%8C%D9%84-%D9%81%D9%86-%D8%A8%DB%8C%D8%A7%D9%86">
                <img
                  className="aspect-[3/4] rounded-xl shadow-book-shadow transition duration-300 hover:scale-105"
                  src="/images/book.jpg"
                  alt="book"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
