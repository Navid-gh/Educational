import { CUSTOMER_VIDEOS } from '../../Items/landingText';
import MainHeader from './MainHeader';

const CustomerSatisfaction = () => {

  return (
    <section className='flex flex-col gap-6 p-4 justify-center items-center'>
      <MainHeader>
        رضایت برخی از هنرجوهای پرتلاشمون از دوره فن بیان
      </MainHeader>
      {CUSTOMER_VIDEOS.map((src, index) => (
        <div
          key={index}
          className='relative w-full max-w-3xl aspect-[16/9] mx-auto'
        >
          <iframe
            src={src}
            className='absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg'
            allowFullScreen
            title={`Aparat Video ${index + 1}`}
          ></iframe>
        </div>
      ))}
    </section>
  );
};

export default CustomerSatisfaction;
