import { useRef } from 'react';
import { ContactTimes } from '../../Types/ContactTimeType';
import useInputValidator from '../../hooks/useInputValidator';
import { useEnglishNums, usePersianNums } from '../../hooks/usePersianNums';
import toast from 'react-hot-toast';
import { addContact } from '../../api/contactUs/contactAPI';
import HeadTitle from '../../Components/UI/HeadTitle';
import MainInput from '../../Components/UI/MainInput';
import MainButton from '../../Components/UI/MainButton';
import { RadioGroup, RadioGroupItem } from '../../Components/UI/RadioGroup';

const Help = () => {
  //Popup
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<ContactTimes>('morning');

  const handleTimeChange = (val: ContactTimes) => {
    timeRef.current = val;
  };

  const submitHandler = async () => {
    const name = nameRef.current!.value;
    const nameMsg = useInputValidator(name);
    if (nameMsg) {
      toast.error(nameMsg);
      return;
    }
    const phone = useEnglishNums(phoneRef.current!.value);
    const phoneMsg = useInputValidator(phone, 'phone');
    if (phoneMsg) {
      toast.error(phoneMsg);
      return;
    }
    const time = timeRef.current;
    const loader = toast.loading('در حال ثبت درخواست شما');
    try {
      await addContact({
        name,
        phone,
        time,
        subject: '',
        text: '',
        type: 'home',
      });
      toast.success('درخواست شما با موفقیت ثبت شد');
    } catch (error) {
      console.log(error);
      toast.error('خطا در برقرای ارتباط');
    } finally {
      toast.dismiss(loader);
    }
  };
  return (
    <main className="flex items-center text-center justify-center w-full p-12">
      <section className="flex flex-col gap-8">
        <HeadTitle fontSize="1.1rem">
          🚀 یک تصمیم هوشمندانه برای آینده شما!
        </HeadTitle>
        <p className="text-base">
          💡 مشاوره رایگان + تخفیف ویژه برای انتخاب بهترین مسیر رشد و موفقیت
        </p>
        <p className="flex flex-col gap-1">
          <span>🎯 مهارت‌های ضروری برای پیشرفت:</span>
          <span>✅ ارتباط مؤثر و فن بیان</span>
          <span>✅ اعتماد به نفس و رشد فردی</span>
          <span>✅ هوش مصنوعی و آینده شغلی</span>
        </p>
        <p>
          📌 همین حالا اطلاعات خود را وارد کنید تا از مشاوره رایگان بهره‌مند
          شوید!
        </p>
        <div className="flex flex-col gap-2 w-full">
          <MainInput
            ref={nameRef}
            className="flex-1 w-full max-w-none"
            placeHolder="نام و نام خانوادگی"
            id="name"
            intent="login"
            inputSize="small"
          />
          <MainInput
            ref={phoneRef}
            className="flex-1 w-full max-w-none"
            placeHolder="شماره همراه"
            id="phone"
            intent="login"
            inputSize="small"
          />
          <div className="flex flex-col gap-2 items-center">
            <h2>زمان پیشنهادی تماس با شما</h2>
            <RadioGroup
              defaultValue="morning"
              className="flex gap-3 books:flex-col"
              onValueChange={(val) => handleTimeChange(val as ContactTimes)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="morning" id="morning" key={'morning'} />
                <label htmlFor="morning">{usePersianNums('9-14')}</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="evening" id="evening" key={'evening'} />
                <label htmlFor="evening">{usePersianNums('16-21')}</label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <MainButton
          className="max-w-none"
          onClick={submitHandler}
          intent="purple"
          size="small"
          text="ثبت درخواست"
        />
      </section>
    </main>
  );
};

export default Help;
