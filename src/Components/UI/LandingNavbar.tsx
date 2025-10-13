const LandingNavbar = () => {
  return (
    <nav className='flex flex-col gap-5 items-center py-7 px-1'>
      <h2 className='text-3xl md:text-4xl font-bold text-red-700'>
        ما اینجا فقط خوب حرف زدن یاد نمیدیم، یاد میدیم چطور اثرگذار باشی
      </h2>
      <p className='text-lg text-gray-700 mb-6'>
        این ویدیو رو ببین تا بفهمی چرا صدای تو می‌تونه زندگیت رو عوض کنه!
      </p>
      <div className="relative w-3/4 aspect-video">
        <iframe
          src="https://www.aparat.com/video/video/embed/videohash/elhyc4q/vt/frame"
          className="absolute top-0 left-0 w-full h-full rounded-md"
          allowFullScreen
          title="Aparat Video"
        ></iframe>
      </div>
    </nav>
  );
};

export default LandingNavbar;
