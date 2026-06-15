import { usePersianNums } from '../../hooks/usePersianNums';

const TelegramFloatingBox = () => {
  return (
    <div className='fixed w-full right-0 left-0 bottom-0 z-10'>
      <a
        href="tel:09330042028"
        rel='noopener noreferrer'
        className='flex items-center justify-center gap-2 bg-gradient-to-r rounded-t-2xl from-sky-500 to-sky-600 text-white px-3 py-4  text-xl'
      >
        <span className=''>تماس مستقیم با ما :</span>
        <span className=''>{usePersianNums('09330042028')}</span>
      </a>
    </div>
  );
};

export default TelegramFloatingBox;
