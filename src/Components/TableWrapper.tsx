import { ReactNode, memo } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "./UI/Table";

type Props = {
  headers: string[];
  tableRows: ReactNode;
  caption: string;
  title: string;
};

const TableWrapper = ({ caption, headers, tableRows, title }: Props) => {
  return (
    <section className="flex flex-col gap-3 p-2 pb-10 bg-white shadow-userTable rounded-xl userSummary:overflow-x-auto scroll-x">
      <span className="text-purple font-bold">{title}</span>
      <Table className="userSummary:min-w-[58.625rem]">
        <TableCaption>{caption}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead
              className="text-right bg-tableHeader rounded-tr-xl"
              key={"counter"}
            >
              #
            </TableHead>
            {headers.map((head, idx) => (
              <TableHead className="text-center bg-tableHeader" key={idx}>
                {head}
              </TableHead>
            ))}
            <TableHead
              className="text-center bg-tableHeader rounded-tl-xl"
              key={"btn"}
            >
              عملیات
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{tableRows}</TableBody>
      </Table>
    </section>
  );
};

export default memo(TableWrapper);
