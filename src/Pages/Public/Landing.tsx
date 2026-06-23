import LandingNavbar from '../../Components/UI/LandingNavbar';
import Whatsapp from '../../Components/UI/Icons/Whatsapp';
import Telegram from '../../Components/UI/Icons/Telegram';
import LandingCard from '../../Components/LandingCard';
import Accordion from '../../Components/UI/Accordion';
import MainButton from '../../Components/UI/MainButton';
import LandingForm from '../../Components/LandingForm';
import CustomerSatisfaction from '../../Components/UI/CustomerSatisfaction';
import { getLanding } from '../../api/getters/landingAPI';
import { useQuery } from '@tanstack/react-query';
import WithLoaderAndError from '../../Components/WithLoaderAndError';
import TelegramFloatingBox from '../../Components/UI/TelegramFloatingBox';

const Landing = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['landing'],
    queryFn: getLanding,
  });

  const landing = data?.[0];

  const videosList = [
    landing?.videos[2].url!,
    landing?.videos[3].url!,
    landing?.videos[4].url!,
  ];

  return (
    <div className="relative flex flex-col gap-6 min-h-screen text-gray-900 subHero:text-center p-4 mb-14">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/landing-bg.png')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          zIndex: -2,
        }}
      />
      <div
        className="absolute inset-0 bg-[#f3f3f3] opacity-95"
        style={{ zIndex: -1 }}
      ></div>

      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        <LandingNavbar
          title={landing?.title!}
          subtitle={landing?.subtitle!}
          video={landing?.videos[0].url!}
        />
        <main className="flex flex-col gap-12 relative z-10">
          <section className="flex tips:flex-col gap-6 justify-center items-stretch">
            <div className="flex flex-1 flex-col gap-4 items-center bg-white p-6 rounded-2xl shadow-lg border-r-4 border-red-50">
              <h2 className="text-xl font-bold text-gray-800">
                {landing?.section1Title}{' '}
              </h2>
              <div className="flex flex-col gap-3 items-center justify-center text-center">
                <p className="text-red-600 font-semibold">
                  {landing?.section1Text1}
                </p>
                {landing?.section1Text2?.map((text, index) => (
                  <p className="text-gray-700 leading-7" key={index}>
                    {text}
                  </p>
                ))}
                <p className="text-gray-700 font-semibold">
                  {landing?.section1Text3}
                </p>
              </div>
            </div>
            {landing?.showTopForm && (
              <div className="flex-1 w-full">
                <LandingForm title={landing?.formTitle!} />
              </div>
            )}
          </section>

          <section className="flex flex-col gap-4 items-center justify-center">
            <div className="w-full flex flex-col gap-4 items-center justify-center bg-sky-100 p-7 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center">
                آینده و مسیر زندگیتون و درآمدیتون با یادگیری همین آموزش تغییر
                میکنه
              </h2>
              <p className="text-xl font-semibold text-center">
                ما به ساده ترین روش ممکن بهتون آموزش میدیم
              </p>
              <div className="flex items-center justify-center flex-wrap gap-4 mt-4">
                {landing?.showWatsupButton ? (
                  <a
                    href="https://wa.me/message/U6DNQG63OTZ6N1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MainButton
                      intent="black"
                      size="medium"
                      className="bg-green-600 text-white flex items-center gap-2"
                      text={
                        <>
                          پیام در واتساپ
                          <Whatsapp className="w-5 h-5" />
                        </>
                      }
                    />
                  </a>
                ) : (
                  ''
                )}
                {landing?.showTelegramButton ? (
                  <a
                    href="https://t.me/Saberzarei_support2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MainButton
                      size="medium"
                      className="bg-sky-600 text-white flex items-center gap-2"
                      text={
                        <>
                          پیام در تلگرام
                          <Telegram className="w-5 h-5" />
                        </>
                      }
                    />
                  </a>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="w-full flex sumComment:flex-col justify-center items-center gap-6">
              <div className="relative w-full max-w-3xl aspect-[16/9] mx-auto">
                <iframe
                  src={landing?.videos[1].url}
                  className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
                  allowFullScreen
                  title="Aparat Video"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center bg-white shadow-lg rounded-lg p-12 w-full">
                <h3 className="text-2xl font-bold text-yellow-600">
                  {landing?.packTitle}
                </h3>
                <p className="text-lg font-semibold text-gray-700">
                  {landing?.packText1}
                </p>
                <ul className="text-gray-600 leading-relaxed ">
                  {landing?.packText2.map((item, index) => (
                    <li key={index}>. {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <LandingCard
            title={landing?.courseTitle!}
            text1={landing?.courseText1!}
            text2={landing?.courseText2!}
            text3={landing?.courseText3!}
            price={landing?.coursePrice!}
            priceWithDiscount={landing?.coursePriceWithDiscount!}
          />

          <section className="flex userSummary:flex-col gap-2 items-center">
            <div className="flex flex-col gap-3 flex-1 h-full" id="faq">
              <div className="space-y-3">
                {landing?.faqs?.map(({ q, a }, index) => (
                  <Accordion
                    key={index}
                    head={<span className="font-semibold">{q}</span>}
                    content={<p className="text-gray-700">{a}</p>}
                    bg="bg-white"
                  />
                ))}
              </div>
            </div>
            {landing?.showBottomForm && (
              <div className="flex-1">
                <LandingForm title="اگر تا اینجا سوالی داری شمارتو بزار تا سریع بهت زنگ بزنم!" />
              </div>
            )}
          </section>

          <CustomerSatisfaction videosList={videosList} />
        </main>
        <TelegramFloatingBox />
      </WithLoaderAndError>
    </div>
  );
};

export default Landing;
