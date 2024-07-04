import ParallaxHeader from "../../Components/ParallaxHeader";
import { textItems } from "../../Items/footerItems";
import SeoTags from "../../utils/lib/Helmet";

const AboutUs = () => {
  return (
    <>
      <SeoTags
        titleTemplate={`درباره ما`}
        description={`درباره گروه آکادمی فن بیان صابر زارعی و صابر زراعی`}
        Url={window.location.href}
      />
      <main className="flex flex-col gap-4 ">
        <ParallaxHeader bg="/images/About-us.jpg" className="flex items-center">
          <div className="flex flex-col text-white gap-6 px-12 w-full z-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">
                درباره آکادمی فن بیان صابر زارعی
              </h1>
              <h2 className="text-2xl font-bold">
                آکادمی فن بیان صابر زارعی از کجا و چجوری شروع شد؟
              </h2>
            </div>
          </div>
        </ParallaxHeader>
        <section className="min-h-[80svh] p-4 px-8">
          <div className="max-w-[56rem] flex flex-col gap-9 font-semibold text-lg text-[#636363]">
            <h3>
              آکادمی فن بیان صابر زارعی، مدرسه فن بیان و مهارت‌های فردی با صابر
              زارعی، مدرس و کوچ تخصصی فن بیان و مهارت های فردی
            </h3>
            <h3>مهارت‌های خود را متحول کنید</h3>
            <h3>آیا می‌خواهید در زندگی و کار خود موفق شوید؟</h3>
            <h3>
              آیا می‌خواهید اعتماد به نفس خود را افزایش دهید و ارتباطات موثرتری
              برقرار کنید؟
            </h3>
            <h3>
              آیا می‌خواهید مهارت‌های حل مسئله، تصمیم گیری، کار تیمی و آداب
              معاشرت سازمانی خود را بهبود بخشید؟
            </h3>
            <h3>
              اگر پاسخ شما به هر یک از این سوالات مثبت است، پس دوره‌های آموزشی
              آکادمی فن بیان صابر زارعی را از دست ندهید.
            </h3>
            <h3>
              در آکادمی فن بیان صابر زارعی، شما می‌توانید با آموزش‌های کاربردی و
              مفید صابر زارعی، مدرس و کوچ تخصصی فن بیان و مهارت های فردی،
              مهارت‌های خود را در تمام جوانب زندگی متحول کنید.
            </h3>
            <h3>
              با شرکت در دوره‌های آکادمی فن بیان صابر زارعی، شما می‌توانید:
            </h3>
            <div className="flex flex-col gap-2">
              <ul className="flex flex-col gap-3 pr-9 list-disc">
                {textItems.map(({ key, text }) => (
                  <li key={key} className="flex items-start gap-2">
                    <span>*</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <h3>
              دوره‌های آموزشی آکادمی فن بیان صابر زارعی به صورت حضوری، آنلاین و
              آفلاین برگزار می‌شوند.
            </h3>
            <h3>
              با ما تماس بگیرید تا در مورد دوره‌های آموزشی ما بیشتر بدانید
            </h3>
            <h3>آکادمی فن بیان صابر زارعی، مدرسه فن بیان و مهارت‌های فردی</h3>
            <h3>متحول شوید!</h3>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
