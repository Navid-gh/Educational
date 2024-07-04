import { useRef } from "react";
import HeadTitle from "./UI/HeadTitle";
import ContactImage from "./UI/images/ContactImage";
import MainInput from "./UI/MainInput";
import { RadioGroup, RadioGroupItem } from "./UI/RadioGroup";
import { usePersianNums } from "../hooks/usePersianNums";
import MainButton from "./UI/MainButton";
import toast from "react-hot-toast";
import { addContact } from "../api/contactUs/contactAPI";
import type { ContactTimes } from "../Types/ContactTimeType";
import MainTextArea from "./UI/MainTextArea";
import useInputValidator from "../hooks/useInputValidator";

type Props = {
  type: "home" | "contactUs";
};

const ContactForm = ({ type }: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<ContactTimes>("morning");
  const textRef = useRef<HTMLTextAreaElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const handleTimeChange = (val: ContactTimes) => {
    timeRef.current = val;
  };

  const submitHandler = async () => {
    const name = nameRef.current!.value;
    const phone = phoneRef.current!.value;
    const time = timeRef.current;
    const subject = subjectRef.current?.value ?? "";
    const text = textRef.current?.value ?? "";
    const nameMsg = useInputValidator(name);
    if (nameMsg) {
      toast.error(nameMsg);
      return;
    }
    const phoneMsg = useInputValidator(phone, "phone");
    if (phoneMsg) {
      toast.error(phoneMsg);
      return;
    }
    const subjectMsg = useInputValidator(subject);
    if (subjectMsg && type === "contactUs") {
      toast.error(subjectMsg);
      return;
    }
    const textMsg = useInputValidator(text);
    if (textMsg && type === "contactUs") {
      toast.error(textMsg);
      return;
    }
    const loader = toast.loading("در حال ثبت درخواست شما");
    try {
      await addContact({
        name,
        phone,
        time,
        subject,
        text,
      });
      toast.success("درخواست شما با موفقیت ثبت شد");
    } catch (error) {
      console.log(error);
      toast.error("خطا در برقرای ارتباط");
    } finally {
      toast.dismiss(loader);
    }
  };
  return (
    <section className="flex flex-col gap-4 px-8">
      <HeadTitle>فرم درخواست مشاوره</HeadTitle>
      <div className="flex gap-4 p-4 px-8 shadow-contactForm rounded-2xl tips:flex-col tips:gap-1">
        <ContactImage className="flex-1" id="contact-page-contact" />
        <div className="flex-1 flex flex-col gap-4">
          <MainInput
            label="نام و نام خانوادگی"
            id="name"
            intent="login"
            inputSize="base"
            key="1"
            ref={nameRef}
          />
          {type === "home" ? (
            <MainInput
              label="شماره همراه"
              id="phone"
              intent="login"
              inputSize="base"
              key="2"
              ref={phoneRef}
            />
          ) : (
            <>
              <div className="flex gap-4 subHero:flex-col">
                <MainInput
                  label="شماره همراه"
                  id="phone"
                  intent="login"
                  inputSize="base"
                  key="2"
                  ref={phoneRef}
                  className="flex-1"
                />
                <MainInput
                  label="موضوع"
                  id="subject"
                  intent="login"
                  inputSize="base"
                  key="3"
                  ref={subjectRef}
                  className="flex-1"
                />
              </div>
              <MainTextArea ref={textRef} label="پیام شما" />
            </>
          )}
          <div className="flex flex-col gap-2">
            <h2>زمان پیشنهادی تماس با شما</h2>
            <RadioGroup
              defaultValue="morning"
              className="flex gap-3 books:flex-col"
              onValueChange={(val) => handleTimeChange(val as ContactTimes)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="morning" id="morning" key={"morning"} />
                <label htmlFor="morning">{usePersianNums("9-12")}</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="after-noon"
                  id="after-noon"
                  key={"after-noon"}
                />
                <label htmlFor="after-noon">{usePersianNums("12-15")}</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="evening" id="evening" key={"evening"} />
                <label htmlFor="evening">{usePersianNums("15-18")}</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="night" id="night" key={"night"} />
                <label htmlFor="night">{usePersianNums("18-21")}</label>
              </div>
            </RadioGroup>
          </div>
          <MainButton
            intent="purple"
            size="login"
            text="ثبت درخواست"
            onClick={submitHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
