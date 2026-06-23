import { useEffect } from 'react';

const Free = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://survey.porsline.ir/embed/eyJ3aWR0aCI6IjEwMCUiLCJoZWlnaHQiOiIxMDAlIiwiYm9yZGVyIjoibm9uZSJ9/kka9q8iB';

    // Get the target element
    const targetDiv = document.getElementById('kka9q8iB');

    // Append the script if the div exists
    if (targetDiv) {
      targetDiv.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (targetDiv && script.parentNode === targetDiv) {
        targetDiv.removeChild(script);
      }
    };
  }, []);
  return (
    <>
      <section className="flex flex-col gap-4">
        <h1 className="font-bold text-purple">دوره های هدیه گرفته شده</h1>
        <div className="flex flex-col gap-4">
          <h2>مینی دوره فن بیان و اعتماد به نفس</h2>
          <video width={'100%'} height={'auto'} controls autoPlay>
            <source
              src="https://s21.uupload.ir/files/saberzarei/Sequence%20001_960x540.mp4?play"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-col gap-2 items-center text-center">
            <h2 className="text-2xl font-bold">
              فرم نیازسنجی و نظرسنجی برای بهبود مهارت‌های ارتباطی و فن بیان
            </h2>
            <p>
              با تکمیل این فرم کوتاه، علاوه بر دریافت مشاوره رایگان و تخفیف
              ویژه، به وبینار آنلاین رایگان دعوت خواهید شد و در قرعه‌کشی ماهانه
              برای مشاوره رایگان فن بیان و توسعه فردی شرکت داده می‌شوید
            </p>
            <div
              id="kka9q8iB"
              style={{
                minHeight: '480px',
                position: 'relative',
                width: '100%',
              }}
            ></div>
            <p className="mb-4">
              پیشنهاد ویژه برای شما که مینی دوره را به پایان رسانده‌اید!
              <br />
              برای دوره‌های کامل‌تر آکادمی صابر زارعی، 10٪ تخفیف بگیرید.
              <br />
              برای دریافت این تخفیف، همین حالا تماس بگیرید یا پیام دهید:
              <br />
              <a href="tel:+09330042028">09330042028</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Free;
