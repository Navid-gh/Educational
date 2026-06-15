type LandingNavbarType = {
  title: string;
  subtitle: string;
  video: string;
};

const LandingNavbar = ({ title, subtitle, video }: LandingNavbarType) => {
  return (
    <nav className='flex flex-col gap-5 items-center'>
      <h2 className='text-3xl md:text-4xl font-bold text-red-700'>{title}</h2>
      <p className='text-lg text-gray-700 mb-6'>{subtitle}</p>
      <div className='relative w-full aspect-video'>
        <iframe
          src={video}
          className='absolute top-0 left-0 w-full h-full rounded-md'
          allowFullScreen
          title='Aparat Video'
          loading='lazy'
        ></iframe>
      </div>
    </nav>
  );
};

export default LandingNavbar;
