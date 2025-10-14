import LandingNavbar from '../../Components/UI/LandingNavbar';
import {
  GOLDEN_PACKAGE_TEXT,
  LANDING_FAQS,
  LANDING_TEXT,
} from '../../Items/landingText';
import Whatsapp from '../../Components/UI/Icons/Whatsapp';
import Telegram from '../../Components/UI/Icons/Telegram';
import LandingCard from '../../Components/LandingCard';
import Accordion from '../../Components/UI/Accordion';
import MainButton from '../../Components/UI/MainButton';
import LandingForm from '../../Components/LandingForm';
import { usePersianNums } from '../../hooks/usePersianNums';
import CustomerSatisfaction from '../../Components/UI/CustomerSatisfaction';

const Landing = () => {
  return (
    <div className='relative flex flex-col gap-6 min-h-screen text-gray-900 subHero:text-center p-4'>
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: "url('/images/landing-bg.png')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          zIndex: -2,
        }}
      />
      <div
        className='absolute inset-0 bg-[#f3f3f3] opacity-95'
        style={{ zIndex: -1 }}
      ></div>

      <LandingNavbar />
      <main className='flex flex-col gap-12 relative z-10'>
        <section className='flex tips:flex-col gap-6 justify-center items-stretch'>
          <div className='flex flex-1 flex-col gap-4 items-center text-right bg-white p-6 rounded-2xl shadow-lg border-r-4 border-red-50'>
            <h2 className='text-xl font-bold text-gray-800'>
              اگه می‌خوای بالاخره حرفات شنیده بشه، بخونش{' '}
            </h2>
            <div className='flex flex-col gap-3'>
              <p className='text-red-600 font-semibold'>
                احتمالاً دنبال فن بیان اومدی چون:
              </p>
              {LANDING_TEXT.map((text) => (
                <p className='text-gray-700 leading-7' key={text.id}>
                  {text.text}
                </p>
              ))}
            </div>
          </div>
          <div className='flex-1 w-full'>
            <LandingForm
              title={`${usePersianNums(
                '1150'
              )} نفر قبل از شما شمارشونو گذاشتن و رایگان مشاوره گرفتن`}
            />
          </div>
        </section>

        <section className='flex flex-col gap-4 items-center justify-center'>
          <div className='w-full flex flex-col gap-4 items-center justify-center bg-sky-100 p-7 rounded-2xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-red-700 text-center'>
              آینده و مسیر زندگیتون و درآمدیتون با یادگیری همین آموزش تغییر
              میکنه
            </h2>
            <p className='text-xl font-semibold text-center'>
              ما به ساده ترین روش ممکن بهتون آموزش میدیم
            </p>
            <div className='flex items-center justify-center flex-wrap gap-4 mt-4'>
              <a
                href='https://wa.me/message/U6DNQG63OTZ6N1'
                target='_blank'
                rel='noopener noreferrer'
              >
                <MainButton
                  intent='black'
                  size='medium'
                  className='bg-green-600 text-white flex items-center gap-2'
                  text={
                    <>
                      پیام در واتساپ
                      <Whatsapp className='w-5 h-5' />
                    </>
                  }
                />
              </a>
              <a
                href='https://t.me/Saberzarei_support2'
                target='_blank'
                rel='noopener noreferrer'
              >
                <MainButton
                  size='medium'
                  className='bg-sky-600 text-white flex items-center gap-2'
                  text={
                    <>
                      پیام در تلگرام
                      <Telegram className='w-5 h-5' />
                    </>
                  }
                />
              </a>
            </div>
          </div>
          <div className='w-full flex sumComment:flex-col justify-center items-center gap-6'>
            <div className='relative w-full max-w-3xl aspect-[16/9] mx-auto'>
              <iframe
                src='https://www.aparat.com/video/video/embed/videohash/wozl8xr/vt/frame'
                className='absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg'
                allowFullScreen
                title='Aparat Video'
              ></iframe>
            </div>
            <div className='flex flex-col gap-4 items-center justify-center bg-white shadow-lg rounded-lg p-12 w-full'>
              <h3 className='text-2xl font-bold text-yellow-600'>
                💎 بسته طلایی: مسیر نجات فن‌بیان
              </h3>
              <p className='text-lg font-semibold text-gray-700'>
                ✨ مسیر کامل از استرس تا تسلط در حرف‌زدن ✨
              </p>
              <ul className='text-gray-600 leading-relaxed '>
                {GOLDEN_PACKAGE_TEXT.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <LandingCard />

        <section className='flex userSummary:flex-col gap-2 items-center'>
          <div className='flex flex-col gap-3 flex-1 h-full' id='faq'>
            <div className='space-y-3'>
              {LANDING_FAQS.map(({ id, q, a }) => (
                <Accordion
                  key={id}
                  head={<span className='font-semibold'>{q}</span>}
                  content={<p className='text-gray-700'>{a}</p>}
                  bg='bg-white'
                />
              ))}
            </div>
          </div>
          <div className='flex-1'>
            <LandingForm title='اگر تا اینجا سوالی داری شمارتو بزار تا سریع بهت زنگ بزنم!' />
          </div>
        </section>

        <CustomerSatisfaction />
      </main>
    </div>
  );
};

export default Landing;
