import { useRef, useState } from 'react';
import MainButton from '../../Components/UI/MainButton';
import MainInput from '../../Components/UI/MainInput';
import { useEnglishNums } from '../../hooks/usePersianNums';
import useInputValidator from '../../hooks/useInputValidator';
import toast from 'react-hot-toast';
import { addContact } from '../../api/contactUs/contactAPI';
import HeadTitle from '../../Components/UI/HeadTitle';

const BaleForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const [showMessage, setShowMessage] = useState(false);

  const submitHandler = async () => {
    const name = nameRef.current!.value;
    const phone = useEnglishNums(phoneRef.current!.value);

    const nameMsg = useInputValidator(name);
    if (nameMsg) {
      toast.error(nameMsg);
      return;
    }

    const phoneMsg = useInputValidator(phone, 'phone');
    if (phoneMsg) {
      toast.error(phoneMsg);
      return;
    }

    const loader = toast.loading('در حال ثبت درخواست شما');

    try {
      await addContact({
        name,
        phone,
        type: 'landing',
        time: 'morning',
      });

      setShowMessage(true);
      toast.success('درخواست شما با موفقیت ثبت شد');
    } catch (error) {
      console.log(error);
      toast.error('خطا در برقرای ارتباط');
    } finally {
      toast.dismiss(loader);
    }
  };

  if (showMessage) {
    return (
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink to-lowPink">
        <div className="flex flex-col gap-4 p-6 px-8 leading-7 shadow-contactForm rounded-2xl max-w-md w-full text-center">
          <p>
            لطفاً اپلیکیشن یا وبِ «بله» را روی موبایل خود فعال داشته باشید.
            <br />
            (در صورت مشکل یا عدم دسترسی به ما پیام دهید: 09330042028)
          </p>

          <p className="font-semibold">لینک کانال دوره «۷ روز تا آرامش» 👇</p>

          <a
            href="https://ble.ir/join/8izZiiszhZ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue font-bold text-lg"
          >
            ble.ir/join/8izZiiszhZ
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink to-lowPink">
      <div className="flex flex-col gap-4 p-6 px-8 shadow-contactForm rounded-2xl max-w-md w-full text-center">
        <HeadTitle>دریافت دوره‌ مدیریت استرس</HeadTitle>
        <h2 className="font-bold">
          آکادمی فن بیان و رشد فردی استاد صابر زارعی
        </h2>
        <div className="flex flex-col gap-4">
          <MainInput
            label="نام و نام خانوادگی"
            id="name"
            intent="login"
            inputSize="base"
            ref={nameRef}
          />
          <MainInput
            label="شماره همراه"
            id="phone"
            intent="login"
            inputSize="base"
            ref={phoneRef}
          />
          <MainButton
            intent="purple"
            size="login"
            text={'ارسال'}
            onClick={submitHandler}
          />
        </div>
        <p className="text-md text-gray-600">
          «پس از دکمه ارسال، لینک ورود به کانال دوره مدیریت استرس نمایش داده
          می‌شود. لطفاً وارد کانال شوید.»
        </p>
      </div>
    </section>
  );
};

export default BaleForm;
