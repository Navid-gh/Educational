import { useRef } from 'react';
import MainButton from './UI/MainButton';
import MainInput from './UI/MainInput';
import { addContact } from '../api/contactUs/contactAPI';
import { useEnglishNums, usePersianNums } from '../hooks/usePersianNums';
import toast from 'react-hot-toast';
import useInputValidator from '../hooks/useInputValidator';
import MainHeader from './UI/MainHeader';
import { ContactTimes } from '../Types/ContactTimeType';
import { RadioGroup } from '@radix-ui/react-radio-group';
import { RadioGroupItem } from './UI/RadioGroup';

const LandingForm = ({ title }: { title: String }) => {
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
    <div className='flex flex-1 flex-col gap-4 items-center text-right bg-white p-10 rounded-2xl tips2:p-6 shadow-lg border-r-4 border-red-50'>
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
      <div className='flex flex-col gap-2 items-center'>
        <h2>زمان پیشنهادی تماس با شما</h2>
        <RadioGroup
          defaultValue='morning'
          className='flex gap-3 books:flex-col'
          onValueChange={(val) => handleTimeChange(val as ContactTimes)}
        >
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='morning' id='morning' key={'morning'} />
            <label htmlFor='morning'>{usePersianNums('9-14')}</label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='evening' id='evening' key={'evening'} />
            <label htmlFor='evening'>{usePersianNums('16-21')}</label>
          </div>
        </RadioGroup>
      </div>
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
