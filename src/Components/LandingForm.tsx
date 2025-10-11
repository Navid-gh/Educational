import { useRef } from 'react';
import MainButton from './UI/MainButton';
import MainInput from './UI/MainInput';
import { addContact } from '../api/contactUs/contactAPI';
import { useEnglishNums } from '../hooks/usePersianNums';
import toast from 'react-hot-toast';
import useInputValidator from '../hooks/useInputValidator';
import MainHeader from './UI/MainHeader';

const LandingForm = ({ title }: { title: String }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

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
    const loader = toast.loading('در حال ثبت درخواست شما');
    try {
      await addContact({
        name,
        phone,
        subject: '',
        text: '',
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
    <div className='flex flex-1 flex-col gap-4 items-center text-right bg-white p-16 rounded-2xl tips2:p-6 shadow-lg border-r-4 border-red-50'>
      <MainHeader size={'main'} intent={'plain'} className='font-semibold'>
        {title}
      </MainHeader>
      <MainInput
        ref={nameRef}
        placeHolder='نام و نام خانوادگی'
        id='name'
        intent='login'
        inputSize='medium'
      />
      <MainInput
        ref={phoneRef}
        placeHolder='شماره همراه'
        id='phone'
        intent='login'
        inputSize='medium'
      />
      <MainButton
        onClick={submitHandler}
        intent='purple'
        size='medium'
        text='درخواست مشاوره + مشاوره رایگان'
        className='bg-green-600'
      />
    </div>
  );
};

export default LandingForm;
