import { ReactNode, HtmlHTMLAttributes } from "react";

type Props = HtmlHTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

const FooterHeader = ({ children, ...rest }: Props) => {
  return (
    <span
      className="border-b-2 border-white border-solid pb-2 max-w-[10rem] hero:max-w-none"
      {...rest}
    >
      {children}
    </span>
  );
};

export default FooterHeader;
