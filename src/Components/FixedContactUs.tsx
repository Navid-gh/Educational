import ContactUsCharachter from "./UI/images/ContactUsCharachter";
import { cn } from "../utils/lib/Cn";
import PhoneIcon from "./UI/Icons/PhoneIcon";
import MessageIcon from "./UI/Icons/MessageIcon";
import useClickActive from "../hooks/useClickActive";
import Close from "./UI/Icons/Close";
import Itaa from "./UI/Icons/Itaa";
import GrayWhatsapp from "./UI/Icons/GrayWhatsapp";

const FixedContactUs = () => {
  const { isActive, toggleActive } = useClickActive(true);
  const { isActive: phoneActive, toggleActive: togglePhoneActive } =
    useClickActive(true);
  const { isActive: msgActive, toggleActive: toggleMsgActive } =
    useClickActive(true);
  const { isActive: telegramActive, toggleActive: toggleTelegramActive } =
    useClickActive(true);
  const { isActive: itaaActive, toggleActive: toggleItaaActive } =
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
          "absolute z-50 bottom-[110%] right-[50%] pointer-events-none transition-all duration-300 translate-x-1/2 w-14 rounded-full flex flex-col gap-4 opacity-0 translate-y-4",
          { "opacity-100 translate-y-0 pointer-events-auto": isActive }
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
              "p-2 bg-black rounded-full transition-all duration-500 hover:bg-[#64a964] shadow-contactCard opacity-30 -translate-x-3",
              {
                "opacity-100 translate-x-0": isActive,
                "bg-[#64a964]": telegramActive,
              }
            )}
            onClick={toggleTelegramActive}
          >
            <GrayWhatsapp id="main-Whatsapp" />
          </div>
          <div
            className={cn(
              "p-2 bg-black rounded-full transition-all duration-500 hover:bg-[#64a964] shadow-contactCard opacity-30 -translate-x-3",
              {
                "opacity-100 translate-x-0": isActive,
                "bg-[#64a964]": itaaActive,
              }
            )}
            onClick={toggleItaaActive}
          >
            <Itaa id="main-Telegram" />
          </div>
          <div
            className={cn(
              "p-2 bg-black rounded-full transition-all duration-500 hover:bg-[#64a964] shadow-contactCard opacity-30 translate-x-3",
              {
                "opacity-100 translate-x-0": isActive,
                "bg-[#64a964]": phoneActive,
              }
            )}
            onClick={togglePhoneActive}
          >
            <PhoneIcon id="main-PhoneIcon" />
          </div>
          <div
            className={cn(
              "p-2 bg-black rounded-full transition-all duration-500 hover:bg-[#64a964] shadow-contactCard opacity-30 -translate-x-3",
              {
                "opacity-100 translate-x-0": isActive,
                "bg-[#64a964]": msgActive,
              }
            )}
            onClick={toggleMsgActive}
          >
            <MessageIcon id="main-MessageIcon" />
          </div>
        </div>
      </div>
      <a
        href={`https://wa.me/message/3ECCGRVEYQWBL1`}
        rel="noopener noreferrer"
        target="_blank"
        className={cn(
          "absolute left-[60%] -top-[200px] flex pointer-events-none justify-end min-w-max z-10 px-6 pr-9 py-2 rounded-full bg-[#64a964] text-white opacity-0 transition-all duration-300 translate-x-2",
          {
            "opacity-100 translate-x-0 pointer-events-auto": telegramActive,
            "opacity-0 translate-x-2 pointer-events-none": !isActive,
          }
        )}
      >
        <span>چت با پشتیبان در واتس آپ (کلیک کنید)</span>
      </a>
      <a
        href={`https://eitaa.com/Saberzarei_support`}
        rel="noopener noreferrer"
        target="_blank"
        className={cn(
          "absolute left-[60%] -top-[155px] flex pointer-events-none justify-end min-w-max z-10 px-6 pr-9 py-2 rounded-full bg-[#64a964] text-white opacity-0 transition-all duration-300 translate-x-2",
          {
            "opacity-100 translate-x-0 pointer-events-auto": itaaActive,
            "opacity-0 translate-x-2 pointer-events-none": !isActive,
          }
        )}
      >
        <span>چت با پشتیبان در ایتا (کلیک کنید)</span>
      </a>
      <div
        className={cn(
          "absolute left-[60%] -top-[105px] flex pointer-events-none justify-end min-w-max z-10 px-6 pr-9 py-2 rounded-full bg-[#64a964] text-white opacity-0 transition-all duration-300 translate-x-2",
          {
            "opacity-100 translate-x-0 pointer-events-auto": phoneActive,
            "opacity-0 translate-x-2 pointer-events-none": !isActive,
          }
        )}
      >
        <a className="flex flex-col" href="tel:+989330042028">
          <span>تماس با پشتیبان (کلیک کنید)</span>
          <span>09330042028</span>
        </a>
      </div>
      <div
        className={cn(
          "absolute left-[60%] -top-[55px] flex pointer-events-none justify-end min-w-max z-10 px-6 pr-9 py-2 rounded-full bg-[#64a964] text-white opacity-0 transition-all duration-300 translate-x-2",
          {
            "opacity-100 translate-x-0 pointer-events-auto": msgActive,
            "opacity-0 translate-x-2 pointer-events-none": !isActive,
          }
        )}
      >
        <a
          href={`sms:09330042028;?&body=${"سلام%20آقای%20زارعی لطفاً%20می‌تونید%20در%20مورد%20دوره%20هاتون%20به%20من%20توضیح%20بدید؟"}`}
          className="flex flex-col"
          rel="nofollow noopener"
        >
          <span>پیامک به پشتیبان (کلیک کنید)</span>
          <span>09330042028</span>
        </a>
      </div>
    </div>
  );
};

export default FixedContactUs;
