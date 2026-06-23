import MainHeader from './MainHeader';

type CustomerSatisfactionProps = {
  videosList: string[];
};

const CustomerSatisfaction = ({ videosList }: CustomerSatisfactionProps) => {
  return (
    <section className="flex flex-col gap-6 justify-center items-center">
      <MainHeader className="font-extrabold text-red-600">
        رضایت برخی از هنرجوهای پرتلاشمون از دوره فن بیان
      </MainHeader>
      {videosList.map((item, index) => (
        <div
          key={index}
          className="relative w-full max-w-3xl aspect-[16/9] mx-auto"
        >
          <iframe
            src={item}
            className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
            allowFullScreen
            title={`Aparat Video ${index + 1}`}
            loading="lazy"
          ></iframe>
        </div>
      ))}
    </section>
  );
};

export default CustomerSatisfaction;
