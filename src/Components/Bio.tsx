import { Link } from 'react-router-dom';
import ImageBox from './UI/images/ImageBox';

const Bio = () => {
  return (
    <section className="relative [@media(max-width:980px)]:h-auto">
      <div className="flex gap-4 z-10 relative py-6 px-4 text-black bg-yellow border-2 border-black tips:p-8 rounded-xl tips:flex-col">
        <div className="relative w-80 h-80 min-w-[20rem] min-h-[20rem] rounded-full tips:self-center tips2:min-w-0 tips2:min-h-0 tips2:h-[14rem] tips2:w-[14rem]">
          <ImageBox id="imagebox-svg" className="absolute inset-0" />
          <img
            className="w-full h-full rounded-full p-3 pr-5 pt-5 z-10 relative object-cover"
            src="/images/saber-bio.jpg"
            alt="profile"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="max-w-[60%] tips:max-w-none">
            صابر زارعی کیست؟
            <br />
            صابر زارعی، مدرس بین‌المللی فن بیان، بنیان‌گذار آکادمی صابر زارعی و
            نویسنده کتاب پرفروش “فیل بیان”، با بیش از ۲۰ سال تجربه در آموزش
            مهارت‌های ارتباطی و توسعه فردی، یکی از چهره‌های تاثیرگذار این حوزه
            در ایران و جهان است. او دارای مدارک بین‌المللی پداگوژی و مربیگری
            مهارت‌های ارتباطی و با سابقه همکاری با بیش از ۵۰ آموزشگاه و سازمان
            معتبر، مسیر یادگیری را برای هزاران فارسی‌زبان در سراسر دنیا هموار
            کرده است.
            <br />
            رویکرد و رسالت آموزشی:
            <br />
            صابر زارعی با ابداع متد ادراک، تلاش می‌کند تا چالش‌های ارتباطی افراد
            را از ریشه حل کند. رسالت او آموزش به فارسی‌زبانان جهان است تا
            بتوانند با تسلط بر کلمات، بیان و درک صحیح، در تمام ابعاد زندگی خود
            رشد کنند.
            <br />
            خدمات و نوآوری‌ها:
            <br />
            • آموزش فن بیان برای کودکان، نوجوانان و بزرگسالان به روش‌های آنلاین،
            آفلاین و حضوری
            <br />
            • مشاوره تخصصی مهارت‌های ارتباطی و سخنرانی برای افراد و سازمان‌ها
            <br />
            • ابداع سیستم باشگاه فن بیان؛ اولین باشگاه تخصصی فن بیان در ایران،
            ویژه فارغ‌التحصیلان دوره‌های فن بیان با هدف تمرین و عملگرایی
            <br />
            دستاوردها و تاثیر گذاری:
            <br />
            • بیش از ۳۰۰۰ هنرجو از کشورهای ایران، آمریکا، افغانستان، ترکیه،
            امارات، استرالیا و عمان با آموزش‌های او مهارت‌های ارتباطی خود را
            ارتقا داده‌اند.
            <br />
            • بهبود اعتماد به نفس، مهارت‌های مذاکره و سخنرانی و درخشش در
            محیط‌های اجتماعی و کاری، نتایجی ملموس از دوره‌های آموزشی او هستند.
            <br />
            • راه‌اندازی اولین وب‌سایت تخصصی فن بیان در ایران، فرصتی برای دسترسی
            آسان به آموزش‌های استاندارد برای فارسی‌زبانان سراسر جهان.
            <br />
            کتاب و فلسفه آموزشی:
            <br />
            📚 "فیل بیان"؛ کتابی کاربردی که راهنمای شما برای تسلط بر فن بیان و
            ارتباطات مؤثر است.
            <br />
            "ادراک صحیح و بیان قدرتمند، می‌تواند زندگی شما را متحول کند."
          </span>
          <div className="flex gap-6">
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
