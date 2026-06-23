import ContactUsCharachter from './UI/images/ContactUsCharachter';
import { cn } from '../utils/lib/Cn';
import PhoneIcon from './UI/Icons/PhoneIcon';
import useClickActive from '../hooks/useClickActive';
import Close from './UI/Icons/Close';
import Bale from './UI/Icons/Bale';
import GrayWhatsapp from './UI/Icons/GrayWhatsapp';
import Instagram from './UI/Icons/Instagram';

const FixedContactUs = () => {
  const { isActive, toggleActive } = useClickActive(true);
  const { isActive: phoneActive, toggleActive: togglePhoneActive } =
    useClickActive(true);
  const { isActive: telegramActive, toggleActive: toggleTelegramActive } =
    useClickActive(true);
  const { isActive: itaaActive, toggleActive: toggleItaaActive } =
    useClickActive(true);
  const { isActive: instaActive, toggleActive: toggleInstaActive } =
    useClickActive(true);
  return (
    <div className="fixed bottom-16 left-1 w-20 h-20 cursor-pointer z-50 text-xs">
      <div
        className="p-[1px] bg-black rounded-full shadow-contactCard"
        onClick={toggleActive}
      >
        <ContactUsCharachter id="contact-img" />
      </div>
      <div
        className={cn(
          'absolute z-50 bottom-[110%] right-[50%] pointer-events-none transition-all duration-300 translate-x-1/2 w-14 rounded-full flex flex-col gap-4 opacity-0 translate-y-4',
          { 'opacity-100 translate-y-0 pointer-events-auto': isActive },
        )}
      >
        <div
          className="p-2 bg-black bg-opacity-60 rounded-full w-8 self-center transition-all duration-300 hover:scale-105 hover:bg-opacity-80 shadow-contactCard"
          onClick={toggleActive}
        >
          <Close className="fill-white" id="main-close" />
        </div>
        <div className="bg-black flex flex-col gap-2 shadow-contactCard w-14 rounded-full p-2">
          <div
            className={cn(
              'p-2 bg-black rounded-full transition-all duration-500 hover:bg-[#FF9800] shadow-contactCard opacity-30 translate-x-3',
              {
                'opacity-100 translate-x-0': isActive,
                'bg-[#FF9800]': phoneActive,
              },
            )}
            onClick={togglePhoneActive}
          >
            <PhoneIcon id="main-PhoneIcon" />
          </div>
          <div
            className={cn(
              'p-2 bg-black rounded-full transition-all duration-500 hover:bg-[#25D366] shadow-contactCard opacity-30 -translate-x-3',
              {
                'opacity-100 translate-x-0': isActive,
                'bg-[#25D366]': telegramActive,
              },
            )}
            onClick={toggleTelegramActive}
          >
            <GrayWhatsapp id="main-Whatsapp" />
          </div>
          <div
            className={cn(
              'p-2 bg-black rounded-full transition-all duration-500 hover:bg-[#BDBDBD] shadow-contactCard opacity-30 -translate-x-3',
              {
                'opacity-100 translate-x-0': isActive,
                'bg-[#BDBDBD]': itaaActive,
              },
            )}
            onClick={toggleItaaActive}
          >
            <Bale id="main-Telegram" />
          </div>
          <div
            className={cn(
              'p-2 bg-black rounded-full transition-all duration-500 hover:bg-[#64a964] shadow-contactCard opacity-30 -translate-x-3',
              {
                'opacity-100 translate-x-0': isActive,
                'bg-gradient-to-t from-[#F58529] to-[#DD2A7B]': instaActive,
              },
            )}
            onClick={toggleInstaActive}
          >
            <Instagram id="main-insta" fill="white" />
          </div>
        </div>
      </div>
      <div
        className={cn(
          'absolute left-[60%] -top-[200px] flex pointer-events-none justify-end min-w-max z-10 px-6 pr-9 py-2 rounded-full bg-[#FF9800] text-white opacity-0 transition-all duration-300 translate-x-2',
          {
            'opacity-100 translate-x-0 pointer-events-auto': phoneActive,
            'opacity-0 translate-x-2 pointer-events-none': !isActive,
          },
        )}
      >
        <a className="flex items-center gap-1" href="tel:+989330042028">
          <span>📞 تماس مستقیم با ما</span>
          <span>|</span>
          <span>09330042028</span>
        </a>
      </div>
      <a
        href={`https://wa.me/message/U6DNQG63OTZ6N1`}
        rel="noopener noreferrer"
        target="_blank"
        className={cn(
          'absolute left-[60%] -top-[155px] flex pointer-events-none justify-end min-w-max z-10 px-6 pr-9 py-2 rounded-full bg-[#25D366] text-black opacity-0 transition-all duration-300 translate-x-2',
          {
            'opacity-100 translate-x-0 pointer-events-auto': telegramActive,
            'opacity-0 translate-x-2 pointer-events-none': !isActive,
          },
        )}
      >
        <span>📱 واتساپ | 09330053028</span>
      </a>
      <a
        href={`https://ble.ir/saberzareisupport`}
        rel="noopener noreferrer"
        target="_blank"
        className={cn(
          'absolute left-[60%] -top-[105px] flex pointer-events-none justify-end min-w-max z-10 px-6 pr-9 py-2 rounded-full bg-[#BDBDBD] text-white opacity-0 transition-all duration-300 translate-x-2',
          {
            'opacity-100 translate-x-0 pointer-events-auto': itaaActive,
            'opacity-0 translate-x-2 pointer-events-none': !isActive,
          },
        )}
      >
        <span>💬 بله | 09330053028</span>
      </a>
      <a
        href={`https://www.instagram.com/saberzarei.ir?igsh=NWY2azhjNnVxZ25y`}
        rel="noopener noreferrer"
        target="_blank"
        className={cn(
          'absolute left-[60%] -top-[55px] flex pointer-events-none justify-end min-w-max z-10 px-6 pr-9 py-2 rounded-full bg-gradient-to-t from-[#F58529] to-[#DD2A7B] text-white opacity-0 transition-all duration-300 translate-x-2',
          {
            'opacity-100 translate-x-0 pointer-events-auto': instaActive,
            'opacity-0 translate-x-2 pointer-events-none': !isActive,
          },
        )}
      >
        <span>📷 اینستاگرام صابر زارعی</span>
      </a>
    </div>
  );
};

export default FixedContactUs;
