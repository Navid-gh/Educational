import { introTexts, outroTexts } from "../Items/stressItems";

const StressHeader = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-purple">دوره صوتی کنترل استرس</h1>
      <div className="flex flex-col gap-2">
        {introTexts.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
        <span className="font-semibold">📌 نکته مهم:</span>
        {outroTexts.map((text, i) => (
          <p key={`outro-${i}`}>{text}</p>
        ))}
        <span className="flex items-center gap-2">
          📣 برای پشتیبانی: @Saberzarei_support
        </span>
      </div>
      <audio controls>
        <source
          src="https://s17.uupload.ir/files/cyberplaystore/Track%2000.mp3?play"
          type="audio/ogg"
        />
        مرورگر شما نمی تواند فایل صوتی را پشتیبانی کند.
      </audio>
    </div>
  );
};

export default StressHeader;
