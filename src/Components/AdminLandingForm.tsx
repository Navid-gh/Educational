import { useRef, useEffect } from 'react';
import toast from 'react-hot-toast';
import MainInput from './UI/MainInput';
import MainTextArea from './UI/MainTextArea';
import MainButton from './UI/MainButton';

export const AdminLandingForm = ({
  selectedLanding,
  setSelectedLanding,
  addMutation,
  editMutation,
}: any) => {
  const refs = {
    title: useRef<HTMLInputElement | null>(null),
    subtitle: useRef<HTMLInputElement | null>(null),
    section1Title: useRef<HTMLInputElement | null>(null),
    section1Text1: useRef<HTMLInputElement | null>(null),
    section1Text2: useRef<HTMLInputElement | null>(null),
    section1Text3: useRef<HTMLInputElement | null>(null),
    formTitle: useRef<HTMLInputElement | null>(null),
    formTitle2: useRef<HTMLInputElement | null>(null),
    packTitle: useRef<HTMLInputElement | null>(null),
    packText1: useRef<HTMLInputElement | null>(null),
    packText2: useRef<HTMLInputElement | null>(null),
    courseTitle: useRef<HTMLInputElement | null>(null),
    courseText1: useRef<HTMLInputElement | null>(null),
    courseText2: useRef<HTMLInputElement | null>(null),
    courseText3: useRef<HTMLInputElement | null>(null),
    courseId: useRef<HTMLInputElement | null>(null),
    price: useRef<HTMLInputElement | null>(null),
    discount: useRef<HTMLInputElement | null>(null),
    faqs: useRef<HTMLTextAreaElement | null>(null),
    videos: useRef<HTMLTextAreaElement | null>(null),
    showTopForm: useRef<HTMLInputElement | null>(null),
    showBottomForm: useRef<HTMLInputElement | null>(null),
    showTelegramButton: useRef<HTMLInputElement | null>(null),
    showWatsupButton: useRef<HTMLInputElement | null>(null),
  };

  useEffect(() => {
    if (selectedLanding) {
      Object.entries(refs).forEach(([key, ref]: any) => {
        if (!ref.current) return;

        switch (key) {
          case 'section1Text2':
            ref.current.value = Array.isArray(selectedLanding.section1Text2)
              ? selectedLanding.section1Text2.join(', ')
              : '';
            break;

          case 'packText2':
            ref.current.value = Array.isArray(selectedLanding.packText2)
              ? selectedLanding.packText2.join(', ')
              : '';
            break;

          case 'faqs':
            ref.current.value = JSON.stringify(
              (selectedLanding.faqs || []).map(({ q, a }: any) => ({ q, a })),
              null,
              2,
            );
            break;

          case 'videos':
            ref.current.value = JSON.stringify(
              (selectedLanding.videos || []).map(({ url }: any) => ({ url })),
              null,
              2,
            );
            break;

          case 'price':
            ref.current.value = selectedLanding.coursePrice || '';
            break;

          case 'discount':
            ref.current.value = selectedLanding.coursePriceWithDiscount || '';
            break;

          case 'showTopForm':
          case 'showBottomForm':
          case 'showTelegramButton':
          case 'showWatsupButton':
            ref.current.checked = Boolean(selectedLanding[key]);
            break;

          default:
            ref.current.value = selectedLanding[key] || '';
            break;
        }
      });
    } else {
      Object.entries(refs).forEach(([key, ref]: any) => {
        if (!ref.current) return;
        if (
          [
            'showTopForm',
            'showBottomForm',
            'showTelegramButton',
            'showWatsupButton',
          ].includes(key)
        ) {
          ref.current.checked = false;
        } else {
          ref.current.value = '';
        }
      });
    }
  }, [selectedLanding]);

  const handleSubmit = () => {
    let section1Text2: string[] = [];
    let packText2: string[] = [];

    if (refs.section1Text2.current?.value) {
      section1Text2 = refs.section1Text2.current.value
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
    }

    if (refs.packText2.current?.value) {
      packText2 = refs.packText2.current.value
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
    }

    let faqs = [];
    let videos = [];

    try {
      faqs = refs.faqs.current?.value
        ? JSON.parse(refs.faqs.current.value)
        : [];
    } catch {
      toast.error('فرمت JSON برای faqs اشتباه است');
    }

    try {
      videos = refs.videos.current?.value
        ? JSON.parse(refs.videos.current.value)
        : [];
    } catch {
      toast.error('فرمت JSON برای videos اشتباه است');
    }

    const payload = {
      title: refs.title.current?.value || '',
      subtitle: refs.subtitle.current?.value || '',
      section1Title: refs.section1Title.current?.value || '',
      section1Text1: refs.section1Text1.current?.value || '',
      section1Text2,
      section1Text3: refs.section1Text3.current?.value || '',
      formTitle: refs.formTitle.current?.value || '',
      formTitle2: refs.formTitle2.current?.value || '',
      packTitle: refs.packTitle.current?.value || '',
      packText1: refs.packText1.current?.value || '',
      packText2,
      courseTitle: refs.courseTitle.current?.value || '',
      courseText1: refs.courseText1.current?.value || '',
      courseText2: refs.courseText2.current?.value || '',
      courseText3: refs.courseText3.current?.value || '',
      courseId: refs.courseId.current?.value || '',
      coursePrice: Number(refs.price.current?.value || 0),
      coursePriceWithDiscount: Number(refs.discount.current?.value || 0),
      faqs,
      videos,
      showTopForm: refs.showTopForm.current?.checked || false,
      showBottomForm: refs.showBottomForm.current?.checked || false,
      showTelegramButton: refs.showTelegramButton.current?.checked || false,
      showWatsupButton: refs.showWatsupButton.current?.checked || false,
    };

    if (selectedLanding) editMutation.mutate(payload);
    else addMutation.mutate(payload);
  };

  return (
    <div className="flex flex-col gap-4 border p-4 rounded-2xl">
      <h2 className="text-lg font-semibold">
        {selectedLanding ? 'ویرایش لندینگ' : 'افزودن لندینگ'}
      </h2>

      {Object.entries(refs).map(([key, ref]: any) => {
        if (['faqs', 'videos', 'section1Text2', 'packText2'].includes(key)) {
          return (
            <MainTextArea
              key={key}
              ref={ref}
              placeholder={`${key} (JSON)`}
              rows={5}
            />
          );
        }

        if (
          [
            'showTopForm',
            'showBottomForm',
            'showTelegramButton',
            'showWatsupButton',
          ].includes(key)
        ) {
          return (
            <label key={key} className="flex items-center gap-2">
              <input type="checkbox" ref={ref} />
              <span>{key}</span>
            </label>
          );
        }

        return (
          <MainInput key={key} ref={ref} placeholder={key} inputSize="medium" />
        );
      })}

      <MainButton
        intent={'purple'}
        size={'medium'}
        onClick={handleSubmit}
        text={selectedLanding ? 'ذخیره تغییرات' : 'افزودن'}
      />

      {selectedLanding && (
        <MainButton
          intent={'white'}
          size={'medium'}
          onClick={() => setSelectedLanding(null)}
          text="لغو ویرایش"
        />
      )}
    </div>
  );
};
