import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import StressHeader from '../../Components/StressHeader';
import StressPractices from '../../Components/StressPractices';
import ImageSlide from '../../Components/UI/ImageSlide';
import { usePersianNums } from '../../hooks/usePersianNums';
import {
  STRESS_COURSE_HERF,
  STRESS_COURSE_ID,
  stressItems,
} from '../../Items/stressItems';
import { getPurchasedOnline } from '../../api/getters/userAPI';
import { useAuthHooks } from '../../hooks/useAuthHooks';
import useAuth from '../../hooks/useAuth';
import WithLoaderAndError from '../../Components/WithLoaderAndError';

const Stress = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const auth = useAuthHooks();

  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ['onlineCourses', 'user'],
    queryFn: () => getPurchasedOnline({ token, ...auth }, 5),
  });

  const stressCourse = data?.find((course) => course?._id === STRESS_COURSE_ID);

  useEffect(() => {
    if (isSuccess && !stressCourse) {
      navigate(STRESS_COURSE_HERF);
    }
  }, [isSuccess, stressCourse, navigate]);
  return (
    <WithLoaderAndError {...{ data, isLoading, error, isError }}>
      <section className="flex flex-col gap-6">
        <StressHeader />
        <div className="flex flex-col gap-4">
          {stressItems &&
            stressItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center gap-3 w-2/4 min-h-[460px] tips:w-11/12 p-4 border border-gray-500 rounded-lg shadow-card"
              >
                <ImageSlide image={item.image} />
                <span>
                  📅 {item.day} — {item.title}
                </span>
                <div className="flex flex-col gap-2">
                  <span>📝 تمرین ها :</span>
                  {[
                    item.practices?.practice1,
                    item.practices?.practice2,
                    item.practices?.practice3,
                    item.practices?.practice4,
                  ].map(
                    (practice, index) =>
                      practice && (
                        <p key={index} className="whitespace-pre-line">
                          {usePersianNums(index + 1) + '. ' + practice}
                        </p>
                      ),
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <span>✅ جمله لنگر امشب :</span>
                  <p>{item.anchor}</p>
                </div>
                <audio
                  controls
                  className="w-full"
                  aria-label={`پخش فایل صوتی مربوط به ${item.day}`}
                >
                  <source src={item.audioUrl} type="audio/ogg" />
                  مرورگر شما از فایل صوتی پشتیبانی نمی کند.
                </audio>
              </div>
            ))}

          <div className="flex flex-col justify-center gap-3 w-2/4 min-h-[320px] tips:w-11/12 p-4 border border-gray-500 rounded-lg shadow-card">
            <span className="text-lg font-semibold">
              مدیتیشن ذهن‌آگاه 🧠✨🧘🏾‍♂️
            </span>

            <p className="whitespace-pre-line">
              ✅️ مدیتیشنِ حواس پنج‌گانه :{'\n'}
              از لمس شروع کن، بعد صدا، مزه، بو و در آخر تصویر پشت پلک. فقط ۲
              دقیقه، بدون هیچ وسیله‌ای، فقط با ذهن
            </p>

            <div className="flex flex-col gap-1">
              <span>✅ کاهش فوری اضطراب 😰</span>
              <span>✅ بازگشت تمرکز به لحظه 🎯</span>
              <span>✅ قابل انجام در هر زمان و مکان 🏟️🏠🗼</span>
            </div>

            <audio controls className="w-full">
              <source
                src="https://s5.uupload.ir/files/cyberplaystore/Track-40 20260409-164809.m4a?play"
                type="audio/mp4"
              />
              مرورگر شما از فایل صوتی پشتیبانی نمی کند.
            </audio>
          </div>
        </div>
        <StressPractices />
      </section>
    </WithLoaderAndError>
  );
};

export default Stress;
