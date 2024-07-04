import Tick from "../../Components/UI/Icons/Tick";
import TableWrapper from "../../Components/TableWrapper";
import { TableCell, TableRow } from "../../Components/UI/Table";
import MainButton from "../../Components/UI/MainButton";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import WithLoaderAndError from "../../Components/WithLoaderAndError";
import { getOrderDetail } from "../../api/basket/orderAPI";
import useAuth from "../../hooks/useAuth";
import { useAuthHooks } from "../../hooks/useAuthHooks";
import { usePersianNums } from "../../hooks/usePersianNums";
import { useMemo } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../Components/UI/ToolTip";
import moment from "moment-jalaali";
import ElipsisContentWithTT from "../../Components/UI/ElipsisContentWithTT";
import SpotPlayerHepler from "../../Components/UI/SpotPlayerHepler";

const BasketOrderDetails = () => {
  const [queryParameters] = useSearchParams();
  const orderId = queryParameters.get("orderId");
  if (!orderId) return <Navigate to="/Basket" />;
  const { token } = useAuth();
  const auth = useAuthHooks();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrderDetail({ token, ...auth }, orderId),
  });

  const [onlineRows, offlineRows, inPersonRows, bookRows] = useMemo(() => {
    const offlineRows = data?.courseIDOffline?.map((item, idx) => {
      return (
        <TableRow key={idx}>
          <TableCell className="text-right">
            {usePersianNums(idx + 1)}
          </TableCell>
          <TableCell className="text-center">{item?.title}</TableCell>
          <TableCell className="text-center">
            <ElipsisContentWithTT text={item?.tokenSP} />
          </TableCell>
          <TableCell className="text-center">
            {usePersianNums(
              moment(data?.date).format("jYYYY/jMM/jDD HH:mm:ss")
            )}
          </TableCell>
          <TableCell className="text-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    className="w-8 h-8 rounded-full object-cover shadow-userProf"
                    src="/images/saber.jpg"
                    alt="profile"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-black">صابر زارعی</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableCell>
          <TableCell className="text-center">
            <Link
              to={`/Course/${item?._id}/${encodeURIComponent(item?.title)}`}
            >
              <MainButton
                className="bg-black hover:bg-purple max-w-fit"
                text={`مشاهده دوره`}
                intent="purple"
                size="medium"
              />
            </Link>
          </TableCell>
        </TableRow>
      );
    });
    const onlineRows = data?.courseIDOnline?.map(({ title, _id }, idx) => {
      return (
        <TableRow key={idx}>
          <TableCell className="text-right">
            {usePersianNums(idx + 1)}
          </TableCell>
          <TableCell className="text-center">{title}</TableCell>
          <TableCell className="text-center">
            {usePersianNums(
              moment(data?.date).format("jYYYY/jMM/jDD HH:mm:ss")
            )}
          </TableCell>
          <TableCell className="text-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    className="w-8 h-8 rounded-full object-cover shadow-userProf"
                    src="/images/saber.jpg"
                    alt="profile"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-black">صابر زارعی</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableCell>
          <TableCell className="text-center">
            <Link to={`/Course/${_id}/${encodeURIComponent(title)}`}>
              <MainButton
                className="bg-black hover:bg-purple max-w-fit"
                text={`مشاهده دوره`}
                intent="purple"
                size="medium"
              />
            </Link>
          </TableCell>
        </TableRow>
      );
    });
    const inPersonRows = data?.courseIDOInPerson?.map(({ title, _id }, idx) => {
      return (
        <TableRow key={idx}>
          <TableCell className="text-right">
            {usePersianNums(idx + 1)}
          </TableCell>
          <TableCell className="text-center">{title}</TableCell>
          <TableCell className="text-center">
            {usePersianNums(
              moment(data?.date).format("jYYYY/jMM/jDD HH:mm:ss")
            )}
          </TableCell>
          <TableCell className="text-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    className="w-8 h-8 rounded-full object-cover shadow-userProf"
                    src="/images/saber.jpg"
                    alt="profile"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-black">صابر زارعی</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableCell>
          <TableCell className="text-center">
            <Link to={`/Course/${_id}/${encodeURIComponent(title)}`}>
              <MainButton
                className="bg-black hover:bg-purple max-w-fit"
                text={`مشاهده دوره`}
                intent="purple"
                size="medium"
              />
            </Link>
          </TableCell>
        </TableRow>
      );
    });
    const bookRows = data?.book?.map(({ title, _id }, idx) => {
      return (
        <TableRow key={idx}>
          <TableCell className="text-right">
            {usePersianNums(idx + 1)}
          </TableCell>
          <TableCell className="text-center">{title}</TableCell>
          <TableCell className="text-center">
            {usePersianNums(
              moment(data?.date).format("jYYYY/jMM/jDD HH:mm:ss")
            )}
          </TableCell>
          <TableCell className="text-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    className="w-8 h-8 rounded-full object-cover shadow-userProf"
                    src="/images/saber.jpg"
                    alt="profile"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-black">صابر زارعی</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableCell>
          <TableCell className="text-center">
            <Link to={`/Course/${_id}/${encodeURIComponent(title)}`}>
              <MainButton
                className="bg-black hover:bg-purple max-w-fit"
                text={`مشاهده دوره`}
                intent="purple"
                size="medium"
              />
            </Link>
          </TableCell>
        </TableRow>
      );
    });
    return [onlineRows, offlineRows, inPersonRows, bookRows];
  }, [data]);
  return (
    <section className="flex flex-col gap-3">
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        {data ? (
          <>
            <div className="flex items-center self-center gap-2">
              <Tick className="fill-blue w-6 h-6" />
              <h1 className="font-bold">{`سفارش شما به شماره سفارش ${usePersianNums(
                data?.factor
              )} با موفقیت ثبت شد`}</h1>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold">محصولات این شماره سفارش</h2>
              {onlineRows?.length && onlineRows.length > 0 ? (
                <TableWrapper
                  caption="دوره های آنلاین خریداری شده توسط شما"
                  title="دوره ها "
                  headers={["دوره", "تاریخ ثبت نام", "مدرس"]}
                  tableRows={onlineRows}
                />
              ) : null}
              {offlineRows?.length && offlineRows.length > 0 ? (
                <>
                  <TableWrapper
                    caption="دوره های آفلاین خریداری شده توسط شما"
                    title="دوره های آفلاین "
                    headers={[
                      "دوره",
                      "لایسنس اسپات پلیر",
                      "تاریخ ثبت نام",
                      "مدرس",
                    ]}
                    tableRows={offlineRows}
                  />
                  <SpotPlayerHepler />
                </>
              ) : null}
              {inPersonRows?.length && inPersonRows.length > 0 ? (
                <TableWrapper
                  caption="دوره های حضوری خریداری شده توسط شما"
                  title="دوره های حضوری "
                  headers={["دوره", "تاریخ ثبت نام", "مدرس"]}
                  tableRows={inPersonRows}
                />
              ) : null}
              {bookRows?.length && bookRows.length > 0 ? (
                <TableWrapper
                  caption="کتاب های خریداری شده توسط شما"
                  title="کتاب ها "
                  headers={["کتاب", "تاریخ ثبت خرید", "مدرس"]}
                  tableRows={bookRows}
                />
              ) : null}
            </div>
          </>
        ) : null}
      </WithLoaderAndError>
    </section>
  );
};

export default BasketOrderDetails;
