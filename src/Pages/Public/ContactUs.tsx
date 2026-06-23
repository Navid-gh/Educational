import ContactForm from '../../Components/ContactForm';
import ParallaxHeader from '../../Components/ParallaxHeader';
import SeoTags from '../../utils/lib/Helmet';

const ContactUs = () => {
  return (
    <>
      <SeoTags
        titleTemplate={`تماس با ما`}
        description={`تماس با گروه آکادمی فن بیان صابر زارعی و صابر زراعی`}
        Url={window.location.href}
      />
      <main className="flex flex-col gap-4 ">
        <ParallaxHeader
          bg="/images/cover-contact-us.jpg"
          className="flex items-center"
        >
          <div className="flex flex-col text-white gap-6 px-12 w-full z-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">تماس با ما</h1>
              <h2 className="text-2xl font-bold">راه های ارتباطی با ما</h2>
            </div>
          </div>
        </ParallaxHeader>
        <section className="p-4 px-8 max-w-[56rem] flex flex-col gap-9 font-semibold text-lg text-[#636363] leading-relaxed">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-black font-bold">
              می‌خوای صدات شنیده بشه؟ از همین‌جا شروع کن.
            </h3>
            <p>
              آکادمی رسمی فن بیان «صابر زارعی» برای کودکان، نوجوانان و بزرگسالان
              دوره‌های تخصصی برگزار می‌کند تا هرکس بتواند واضح، قاطع و با
              اعتمادبه‌نفس حرف بزند؛ در خانه، محل تحصیل، محل کار و …
            </p>
            <p>
              دوره‌ها به سه شکل برگزار می‌شوند:
              <br />✅ حضوری
              <br />✅ آنلاین زنده از سراسر کشور
              <br />✅ آفلاین همراه با پشتیبانی مستقیم استاد
            </p>
            <p>
              اگر می‌خواهی درباره‌ی دوره‌ی مناسب سن، زمان‌بندی یا شهریه اطلاعات
              بگیری، فرم زیر را پر کن تا مشاور آکادمی با شما تماس بگیرد.
              <br />
              اطلاعاتت کاملاً محرمانه است و فقط برای هماهنگی استفاده می‌شود.
            </p>
          </div>
        </section>
        <ContactForm type="contactUs" />
      </main>
    </>
  );
};

export default ContactUs;
