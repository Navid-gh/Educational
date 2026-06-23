import { Link } from 'react-router-dom';
import { pdfText, contactInfo } from '../Items/stressItems';

const StressPractices = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">📘 دفترچه تمرین = فایل PDF دوره</h2>
      {pdfText.map((text, i) => (
        <p key={i}>{text}</p>
      ))}

      {contactInfo.map((line, i) => (
        <span key={`contact-${i}`}>{line}</span>
      ))}
      <Link
        to="https://s11.uupload.ir/files/cyberplaystore/تمرینات_دوره_7_روزه_آرامش_با_صابرزارعی_%20(2).pdf?download"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="flex items-center gap-2 text-blue font-bold"
      >
        📎 دانلود فایل
      </Link>
    </div>
  );
};

export default StressPractices;
