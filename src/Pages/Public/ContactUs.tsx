import ContactForm from "../../Components/ContactForm";
import ParallaxHeader from "../../Components/ParallaxHeader";
import ContactLink from "../../Components/UI/ContactLink";
import SocialMediaWrapper from "../../Components/UI/SocialMediaWrapper";
import { usePersianNums } from "../../hooks/usePersianNums";
import SeoTags from "../../utils/lib/Helmet";

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
        <section className="p-4 px-8 max-w-[56rem] flex flex-col gap-9 font-semibold text-lg text-[#636363]">
          <div>
            <h3>مشاوره از ما : </h3>
            <h4>
              جهت مشاوره و ارتباط با ما و خدمات آموزشی کوچ و مشاوره فن بیان با
              ما تماس بگیرید
            </h4>
          </div>
          <div>
            <span>شماره همراه جهت تماس و ارتباط در تلگرام و واتساپ : </span>
            <span>{usePersianNums("09330042028")}</span>
          </div>
          <div className="flex flex-col gap-4">
            <span>راه های ارتباطی با ما در فضای مجازی : </span>
            <SocialMediaWrapper />
          </div>
          <div>
            <span>راه ارتباطی ایمیل : </span>
            <ContactLink type="mail" mail="saber.zarei99@gmail.com">
              saber.zarei99@gmail.com
            </ContactLink>
          </div>
        </section>
        <ContactForm type="contactUs" />
      </main>
    </>
  );
};

export default ContactUs;
