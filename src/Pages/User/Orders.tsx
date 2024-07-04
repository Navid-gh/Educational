import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import {
  getPurchasedBook,
  getPurchasedInPerson,
  getPurchasedOffline,
  getPurchasedOnline,
} from "../../api/getters/userAPI";
import useAuth from "../../hooks/useAuth";
import { useAuthHooks } from "../../hooks/useAuthHooks";
import WithLoaderAndError from "../../Components/WithLoaderAndError";
import TableWrapper from "../../Components/TableWrapper";
import { TableCell, TableRow } from "../../Components/UI/Table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../Components/UI/ToolTip";
import MainButton from "../../Components/UI/MainButton";
import { usePersianNums } from "../../hooks/usePersianNums";
import { useMemo } from "react";
import ElipsisContentWithTT from "../../Components/UI/ElipsisContentWithTT";
import moment from "moment-jalaali";
import SpotPlayerHepler from "../../Components/UI/SpotPlayerHepler";
import { OrderUrlCreator } from "../../utils/OrderUrlCreator";

const Orders = () => {
  const { cat } = useParams();
  const { token } = useAuth();
  const auth = useAuthHooks();
  if (cat === "Online-courses") {
    const { data, isLoading, error, isError } = useQuery({
      queryKey: ["onlineCourses", "orders"],
      queryFn: () => getPurchasedOnline({ token, ...auth }),
    });
    const Rows = useMemo(
      () =>
        data?.map((item, idx) => {
          return (
            <TableRow key={idx}>
              <TableCell className="text-right" key="1">
                {usePersianNums(idx + 1)}
              </TableCell>
              <TableCell className="text-center" key="2">
                {item?.title}
              </TableCell>
              <TableCell className="text-center" key="3">
                {usePersianNums(
                  moment(item?.date).format("jYYYY/jMM/jDD HH:mm:ss")
                )}
              </TableCell>
              <TableCell className="text-center">
                <Link
                  className="text-blue"
                  to={OrderUrlCreator(item?.authority)}
                >
                  مشاهده جزئیات
                </Link>
              </TableCell>
              <TableCell className="text-center" key="4">
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
              <TableCell className="text-center" key="5">
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
        }),
      [data]
    );
    return (
      <WithLoaderAndError {...{ data, isLoading, error, isError }}>
        {data?.length && data.length > 0 ? (
          <TableWrapper
            caption=" دوره های آنلاین خریداری شده توسط شما"
            title="دوره های آنلاین"
            headers={["دوره", "تاریخ ثبت نام", "جزئیات سفارش", "مدرس"]}
            key={"onlineCourses"}
            tableRows={Rows}
          />
        ) : (
          <p>شما دوره آنلاینی خرید نکرده اید</p>
        )}
      </WithLoaderAndError>
    );
  } else if (cat === "Offline-courses") {
    const { data, isLoading, error, isError } = useQuery({
      queryKey: ["offlineCourses", "orders"],
      queryFn: () => getPurchasedOffline({ token, ...auth }),
    });
    const Rows = useMemo(
      () =>
        data?.map((item, idx) => {
          return (
            <TableRow key={idx}>
              <TableCell className="text-right" key="1">
                {usePersianNums(idx + 1)}
              </TableCell>
              <TableCell className="text-center" key="2">
                {item?.title}
              </TableCell>
              <TableCell className="text-center" key="3">
                <ElipsisContentWithTT text={item?.tokenSP ?? ""} />
              </TableCell>
              <TableCell className="text-center" key="4">
                {usePersianNums(
                  moment(item?.date).format("jYYYY/jMM/jDD HH:mm:ss")
                )}
              </TableCell>
              <TableCell className="text-center">
                <Link
                  className="text-blue"
                  to={OrderUrlCreator(item?.authority)}
                >
                  مشاهده جزئیات
                </Link>
              </TableCell>
              <TableCell className="text-center" key="5">
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
              <TableCell className="text-center" key="6">
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
        }),
      [data]
    );
    return (
      <div className="flex flex-col gap-6">
        <WithLoaderAndError {...{ data, isLoading, error, isError }}>
          {data?.length && data.length > 0 ? (
            <TableWrapper
              caption=" دوره های آفلاین خریداری شده توسط شما"
              title="دوره های آفلاین"
              headers={[
                "دوره",
                "لایسنس اسپات پلیر",
                "تاریخ ثبت نام",
                "جزئیات سفارش",
                "مدرس",
              ]}
              key={"offlineCourses"}
              tableRows={Rows}
            />
          ) : (
            <p>شما دوره آفلاینی خرید نکرده اید</p>
          )}
        </WithLoaderAndError>
        <SpotPlayerHepler />
      </div>
    );
  } else if (cat === "inPerson-courses") {
    const { data, isLoading, error, isError } = useQuery({
      queryKey: ["inPersonCourses", "orders"],
      queryFn: () => getPurchasedInPerson({ token, ...auth }),
    });
    const Rows = useMemo(
      () =>
        data?.map((item, idx) => {
          return (
            <TableRow key={idx}>
              <TableCell className="text-right" key="1">
                {usePersianNums(idx + 1)}
              </TableCell>
              <TableCell className="text-center" key="2">
                {item.title}
              </TableCell>
              <TableCell className="text-center" key="3">
                {usePersianNums(
                  moment(item?.date).format("jYYYY/jMM/jDD HH:mm:ss")
                )}
              </TableCell>
              <TableCell className="text-center">
                <Link
                  className="text-blue"
                  to={OrderUrlCreator(item?.authority)}
                >
                  مشاهده جزئیات
                </Link>
              </TableCell>
              <TableCell className="text-center" key="4">
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
              <TableCell className="text-center" key="5">
                <Link
                  to={`/Course/${item._id}/${encodeURIComponent(item.title)}`}
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
        }),
      [data]
    );
    return (
      <WithLoaderAndError {...{ data, isLoading, error, isError }}>
        {data?.length && data.length > 0 ? (
          <TableWrapper
            caption=" دوره های حضوری خریداری شده توسط شما"
            title="دوره های حضوری"
            headers={["دوره", "تاریخ ثبت نام", "جزئیات سفارش", "مدرس"]}
            key={"inPersonCourses"}
            tableRows={Rows}
          />
        ) : (
          <p>شما دوره حضوری خرید نکرده اید</p>
        )}
      </WithLoaderAndError>
    );
  } else {
    const { data, isLoading, error, isError } = useQuery({
      queryKey: ["books", "orders"],
      queryFn: () => getPurchasedBook({ token, ...auth }),
    });
    const Rows = useMemo(
      () =>
        data?.map((item, idx) => {
          return (
            <TableRow key={idx}>
              <TableCell className="text-right" key="1">
                {usePersianNums(idx + 1)}
              </TableCell>
              <TableCell className="text-center" key="2">
                {item.title}
              </TableCell>
              <TableCell className="text-center" key="3">
                {usePersianNums(
                  moment(item?.date).format("jYYYY/jMM/jDD HH:mm:ss")
                )}
              </TableCell>
              <TableCell className="text-center">
                <Link
                  className="text-blue"
                  to={OrderUrlCreator(item?.authority)}
                >
                  مشاهده جزئیات
                </Link>
              </TableCell>
              <TableCell className="text-center" key="4">
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
              <TableCell className="text-center" key="5">
                <Link
                  to={`/Course/${item._id}/${encodeURIComponent(item.title)}`}
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
        }),
      [data]
    );
    return (
      <WithLoaderAndError {...{ data, isLoading, error, isError }}>
        {data?.length && data.length > 0 ? (
          <TableWrapper
            caption=" کتاب های خریداری شده توسط شما"
            title="کتاب ها"
            headers={["کتاب", "تاریخ ثبت خرید", "جزئیات سفارش", "مدرس"]}
            key={"books"}
            tableRows={Rows}
          />
        ) : (
          <p>شما کتابی خرید نکرده اید</p>
        )}
      </WithLoaderAndError>
    );
  }
};

export default Orders;
