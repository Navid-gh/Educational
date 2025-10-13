import LeftArrow from './UI/Icons/LeftArrow';
import { usePersianNums } from '../hooks/usePersianNums';
import MainButton from './UI/MainButton';
import { GOLDEN_COURSE_ID, landingFeatures } from '../Items/landingText';
import { useAppDispatch, useAppSelector } from '../hooks/useReduxHooks';
import useAddToBasket from '../hooks/useAddToBasket';
import { useQuery } from '@tanstack/react-query';
import { getCourse } from '../api/getters/courseAPI';
import { useCallback } from 'react';

const LandingCard = () => {
  const dispatch = useAppDispatch();
  const addToBasket = useAddToBasket();
  const { Auth } = useAppSelector((state) => state.user);

  const { data } = useQuery({
    queryKey: ['course', GOLDEN_COURSE_ID],
    queryFn: () => getCourse(GOLDEN_COURSE_ID as string),
  });

  const buyHandler = useCallback(() => {
    addToBasket(Auth, dispatch, data!, 'course');
  }, [Auth, addToBasket, data, dispatch]);

  return (
    <section className='flex userSummary:flex-col gap-4 items-center justify-center'>
      <div className='relative flex flex-col gap-4 items-center bg-white shadow-lg rounded-lg p-12'>
        <div className='absolute top-2 -translate-y-1/2 -rotate-90 flex flex-col gap-8'>
          {[...Array(4)].map((_, idx) => (
            <LeftArrow key={idx} className='w-8 h-8' fill='#e0dada' />
          ))}
        </div>

        <h2 className='font-semibold text-xl'>الان وقت تصمیم گیری هست</h2>
        <div className='text-center'>
          <span className='text-green-600 font-semibold'>
            فقط امروز ۶ میلیون تخفیف{' '}
          </span>
          <span className='text-gray-800'>بیشتر می‌گیری ازمون</span>
        </div>
        <span>صفر تا صد آموزش فن بیان</span>
        <div className='w-full flex items-center justify-around gap-3'>
          <div className='flex flex-col items-start w-full'>
            <span className='text-red-600 line-through'>
              {usePersianNums('9,870,000')} تومان
            </span>
            <span className='text-green-600 text-2xl font-bold'>
              {usePersianNums('3,800,000')} تومان
            </span>
          </div>
          <MainButton
            text={
              <span className='flex items-center gap-2'>
                خرید آنلاین
                <LeftArrow className='w-2 h-2' fill='#fff' />
              </span>
            }
            size={'login'}
            className='bg-green-600 text-white flex justify-center'
            onClick={buyHandler}
          />
        </div>
      </div>

      <div className='max-w-2xl grid grid-cols-2 gap-6'>
        {landingFeatures.map(({ title, desc, Icon, id }) => (
          <div
            key={id}
            className='flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-12 hover:scale-105 transition-transform text-center'
          >
            <Icon className='w-10 h-10 text-green-600 mb-3' />
            <h4 className='text-gray-800 font-semibold text-base mb-2'>
              {title}
            </h4>
            <p className='text-gray-600 text-sm'>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingCard;
