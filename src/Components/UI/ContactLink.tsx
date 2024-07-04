import { ReactNode } from "react";

type Props =
  | {
      type: "phone";
      children: ReactNode;
      phone: string;
    }
  | {
      type: "sms";
      children: ReactNode;
      phone: string;
      msg: string;
    }
  | {
      type: "mail";
      children: ReactNode;
      mail: string;
    }
  | {
      type: "link";
      children: ReactNode;
      link: string;
    };

const ContactLink = (props: Props) => {
  if (props.type === "phone") {
    return (
      <a className="text-purple" href={`tel:+${props.phone}`}>
        {props.children}
      </a>
    );
  } else if (props.type === "sms") {
    return (
      <a
        href={`sms:${props.phone} ?body=${props.msg}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  } else if (props.type === "mail") {
    return <a href={`mailto:${props.mail}`}>{props.children}</a>;
  }
  return (
    <a href={props.link} rel="noopener noreferrer" target="_blank">
      {props.children}
    </a>
  );
};

export default ContactLink;
