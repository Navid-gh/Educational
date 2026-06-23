import { useRef, useState } from 'react';
import LogoIcon from './UI/Icons/Logo';
import SearchInput from './UI/SearchInput';
import { Link } from 'react-router-dom';
import MainButton from './UI/MainButton';
import Tab from './UI/Tab';
import BuyComp from './UI/BuyComp';
import Hamburger from './UI/Icons/Hamburger';
import User from './UI/Icons/User';
import { tabs } from '../Items/navbarTabs';
import useCurrentUrlTab from '../hooks/useCurrentUrlTab';
import useCurrentTab from '../hooks/useCurrentTab';
import IconWrapper from './UI/IconWrapper';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import { cn } from '../utils/lib/Cn';
import { useAppSelector } from '../hooks/useReduxHooks';
import useAuth from '../hooks/useAuth';
import Popup from './Popup';
import HeadTitle from './UI/HeadTitle';
import MainInput from './UI/MainInput';
import toast from 'react-hot-toast';
import useInputValidator from '../hooks/useInputValidator';
import { addContact } from '../api/contactUs/contactAPI';
import { useEnglishNums, usePersianNums } from '../hooks/usePersianNums';
import { RadioGroup, RadioGroupItem } from './UI/RadioGroup';
import { ContactTimes } from '../Types/ContactTimeType';

const Navbar = () => {
  const [popUpState, setPopUpState] = useState<boolean>(true);
  const currentTabIndex = useCurrentUrlTab(tabs);
  const { activeTab, handleMouseEnter, handleMouseLeave } =
    useCurrentTab(currentTabIndex);

  //Popup
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<ContactTimes>('morning');

  const [sideBar, setSideBar] = useState<boolean>(false);

  const { Auth, role } = useAuth();
  const { products } = useAppSelector((state) => state.basket);

  const { pathname } = useLocation();
  let isSticky = true;
  let hidden = false;
  if (pathname.includes('Course')) {
    isSticky = false;
  } else if (pathname.includes('Book')) {
    isSticky = false;
  } else if (pathname.includes('Article')) {
    isSticky = false;
  } else if (pathname.includes('Login')) {
    hidden = true;
  }

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
      setPopUpState(false);
    } catch (error) {
      console.log(error);
      toast.error('خطا در برقرای ارتباط');
    } finally {
      toast.dismiss(loader);
    }
  };

  return (
    <>
      <header
        className={cn(
          'flex flex-col gap-3 bg-white sticky top-0 p-[.5em] z-50 shadow-main',
          { static: !isSticky, hidden },
        )}
      >
        <div className="flex justify-between h-7 items-center navbar:h-auto">
          <div className="flex items-center gap-4">
            <Hamburger
              className="w-8 h-8 hidden navbar:block cursor-pointer"
              onClick={() => setSideBar((prev) => !prev)}
            />
            <Link to="/">
              <LogoIcon
                id="logo-svg"
                className="w-8 h-8 rounded-lg overflow-hidden"
              />
            </Link>
          </div>
          <div className="flex gap-3">
            <div className="navbar:hidden">
              <SearchInput type="navbar" placeHolder="جستجو ..." />
            </div>
            <Link to="Basket">
              {Auth ? (
                <BuyComp intent="navbar" size="small" qty={products?.length} />
              ) : (
                <BuyComp intent="navbar" size="small" />
              )}
            </Link>
            {Auth ? (
              role === 'USER' ? (
                <>
                  <Link to="User" className="hidden navbar:block">
                    <IconWrapper className="relative">
                      <User className=" w-4 h-4" />
                    </IconWrapper>
                  </Link>
                  <Link to="User" className="navbar:hidden">
                    <MainButton
                      intent="primary"
                      text="پنل کاربری"
                      size="small"
                      className="px-5"
                    />
                  </Link>
                </>
              ) : (
                <>
                  <Link to="Admin" className="hidden navbar:block">
                    <IconWrapper className="relative">
                      <User className=" w-4 h-4" />
                    </IconWrapper>
                  </Link>
                  <Link to="Admin" className="navbar:hidden">
                    <MainButton
                      intent="primary"
                      text="پنل ادمین"
                      size="small"
                      className="px-3"
                    />
                  </Link>
                </>
              )
            ) : (
              <>
                <Link to="Login" className="hidden navbar:block">
                  <IconWrapper>
                    <User className=" w-4 h-4" />
                  </IconWrapper>
                </Link>
                <Link to="Login" className="navbar:hidden">
                  <MainButton
                    intent="primary"
                    text="ورود/ثبت نام"
                    size="small"
                  />
                </Link>
              </>
            )}
          </div>
        </div>
        <nav className="navbar:hidden">
          <ul className="flex gap-4 items-center">
            {tabs.map((tab, idx) => (
              <Tab
                isActive={idx === activeTab || idx === currentTabIndex}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                key={tab.id}
                url={tab.url}
                isDropdown={tab.isDropdown ? true : false}
                links={tab.links}
              >
                {tab.name}
              </Tab>
            ))}
          </ul>
        </nav>
        <Sidebar show={sideBar} func={() => setSideBar((prev) => !prev)} />
      </header>
      <Popup zIndex={100} parentStateControl={popUpState}>
        <div className="flex flex-col gap-8 items-center text-center max-w-[24.375rem] min-w-[20rem] tips2:min-w-[15rem]">
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
                  <RadioGroupItem
                    value="morning"
                    id="morning"
                    key={'morning'}
                  />
                  <label htmlFor="morning">{usePersianNums('9-14')}</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="evening"
                    id="evening"
                    key={'evening'}
                  />
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
        </div>
      </Popup>
    </>
  );
};

export default Navbar;
