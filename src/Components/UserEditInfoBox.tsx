import { ReactNode } from "react";

type Props = {
  header: string;
  children: ReactNode;
};

const UserEditInfoBox = ({ children, header }: Props) => {
  return (
    <section className="flex flex-col gap-1 rounded-xl shadow-main pb-3">
      <h2 className="font-bold border-b border-[#00000033] pb-4 p-4">
        {header}
      </h2>
      <div className="px-4">{children}</div>
    </section>
  );
};

export default UserEditInfoBox;
