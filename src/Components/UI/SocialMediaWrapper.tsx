import { v4 as uuidv4 } from "uuid";
import Instagram from "./Icons/Instagram";
import Youtube from "./Icons/Youtube";
import Itaa from "./Icons/Itaa";
import Bale from "./Icons/Bale";
import Rubika from "./Icons/Rubika";
import Aparat from "./Icons/Aparat";
import Facebook from "./Icons/Facebook";
import Whatsapp from "./Icons/Whatsapp";

const className = `w-8 h-8 tips2:w-[1.125rem] tips2:h-[1.125rem]`;

export const socialLinks = [
  {
    name: "اینستاگرام",
    link: "https://instagram.com/saberzarei.ir?igshid=ZDc4ODBmNjlmNQ==",
    key: uuidv4(),
    comp: (
      <Instagram
        className="w-8 h-8 tips2:w-[1.125rem] tips2:h-[1.125rem]"
        id="instagram"
      />
    ),
  },
  {
    name: "واتساپ",
    link: "https://wa.me/message/3ECCGRVEYQWBL1",
    key: uuidv4(),
    comp: <Whatsapp className={className} id="Whatsapp" />,
  },
  {
    name: "ایتا",
    link: "https://eitaa.com/asrar_bayan_jazab",
    key: uuidv4(),
    comp: <Itaa className={className} id="Itaa" />,
  },
  {
    name: "بله",
    link: "https://ble.ir/asrar_bayan_jazab",
    key: uuidv4(),
    comp: <Bale className={className} id="Bale" />,
  },
  {
    name: "روبیکا",
    link: "https://rubika.ir/asrar_bayan",
    key: uuidv4(),
    comp: <Rubika className={className} id="Rubika" />,
  },
  {
    name: "آپارات",
    link: "https://www.aparat.com/Saber.zarei",
    key: uuidv4(),
    comp: <Aparat className={className} id="Aparat" />,
  },
  {
    name: "فیسبوک",
    link: "https://www.facebook.com/saberzare1m?mibextid=ZbWKwL",
    key: uuidv4(),
    comp: <Facebook className={className} id="Facebook" />,
  },
  {
    name: "یوتیوب قصه گو",
    link: "https://m.youtube.com/@sabestory",
    key: uuidv4(),
    comp: <Youtube className={className} id="Youtube" />,
  },
];

const SocialMediaWrapper = () => {
  return (
    <main className="flex gap-4">
      {socialLinks.map(({ link, name, key, comp }) => (
        <div className="flex gap-4" key={key}>
          <a
            href={link}
            className="text-blue transition-all duration-300 hover:scale-105"
            target="_blank"
            title={name}
          >
            {comp}
          </a>
        </div>
      ))}
    </main>
  );
};

export default SocialMediaWrapper;
