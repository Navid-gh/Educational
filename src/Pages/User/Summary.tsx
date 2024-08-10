import SummaryBoxes from "../../Components/UI/SummaryBoxes";
import Class from "../../Components/UI/Icons/Class";
import Book from "../../Components/UI/Icons/Book";
import Comment from "../../Components/UI/Icons/Comment";
import Online from "../../Components/UI/Icons/Online";
import TableWrapper from "../../Components/TableWrapper";
import { TableCell, TableRow } from "../../Components/UI/Table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../Components/UI/ToolTip";
import MainButton from "../../Components/UI/MainButton";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import {
  getPurchasedBook,
  getPurchasedInPerson,
  getPurchasedOffline,
  getPurchasedOnline,
  getUser,
} from "../../api/getters/userAPI";
import WithLoaderAndError from "../../Components/WithLoaderAndError";
import { useAuthHooks } from "../../hooks/useAuthHooks";
import { useMemo } from "react";
import { usePersianNums } from "../../hooks/usePersianNums";
import { Link } from "react-router-dom";
import moment from "moment-jalaali";
import ElipsisContentWithTT from "../../Components/UI/ElipsisContentWithTT";
import { OrderUrlCreator } from "../../utils/OrderUrlCreator";

const Summary = () => {
  const { token } = useAuth();
  const auth = useAuthHooks();
  const userQuery = useQuery({
    queryKey: ["user", "user"],
    queryFn: () => getUser({ token, ...auth }),
  });
  const booksQuery = useQuery({
    queryKey: ["books", "user"],
    queryFn: () => getPurchasedBook({ token, ...auth }, 5),
  });
  const onlineQuery = useQuery({
    queryKey: ["onlineCourses", "user"],
    queryFn: () => getPurchasedOnline({ token, ...auth }, 5),
  });
  const offlineQuery = useQuery({
    queryKey: ["offlineCourses", "user"],
    queryFn: () => getPurchasedOffline({ token, ...auth }, 5),
  });
  const inPersonQuery = useQuery({
    queryKey: ["inPersonCourses", "user"],
    queryFn: () => getPurchasedInPerson({ token, ...auth }, 5),
  });

  const onlineRows = useMemo(
    () =>
      onlineQuery.data?.map((item, idx) => {
        return (
          <TableRow key={idx}>
            <TableCell className="text-right">
              {usePersianNums(idx + 1)}
            </TableCell>
            <TableCell className="text-center">{item?.title}</TableCell>
            <TableCell className="text-center">
              {usePersianNums(
                moment(item?.date).format("jYYYY/jMM/jDD HH:mm:ss")
              )}
            </TableCell>
            <TableCell className="text-center">
              <Link className="text-blue" to={OrderUrlCreator(item?.authority)}>
                مشاهده جزئیات
              </Link>
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
      }),
    [onlineQuery.data]
  );
  const offlineRows = useMemo(
    () =>
      offlineQuery.data?.map((item, idx) => {
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
                moment(item?.date).format("jYYYY/jMM/jDD HH:mm:ss")
              )}
            </TableCell>
            <TableCell className="text-center">
              <Link className="text-blue" to={OrderUrlCreator(item?.authority)}>
                مشاهده جزئیات
              </Link>
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
      }),
    [offlineQuery.data]
  );
  const inPersonRows = useMemo(
    () =>
      inPersonQuery.data?.map((item, idx) => {
        return (
          <TableRow key={idx}>
            <TableCell className="text-right">
              {usePersianNums(idx + 1)}
            </TableCell>
            <TableCell className="text-center">{item?.title}</TableCell>
            <TableCell className="text-center">
              {usePersianNums(
                moment(item?.date).format("jYYYY/jMM/jDD HH:mm:ss")
              )}
            </TableCell>
            <TableCell className="text-center">
              <Link className="text-blue" to={OrderUrlCreator(item?.authority)}>
                مشاهده جزئیات
              </Link>
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
      }),
    [inPersonQuery.data]
  );
  const booksRows = useMemo(
    () =>
      booksQuery.data?.map((item, idx) => {
        return (
          <TableRow key={idx}>
            <TableCell className="text-right">
              {usePersianNums(idx + 1)}
            </TableCell>
            <TableCell className="text-center">{item?.title}</TableCell>
            <TableCell className="text-center">
              {usePersianNums(
                moment(item?.date).format("jYYYY/jMM/jDD HH:mm:ss")
              )}
            </TableCell>
            <TableCell className="text-center">
              <Link className="text-blue" to={OrderUrlCreator(item?.authority)}>
                مشاهده جزئیات
              </Link>
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
                to={`/Book/${item?._id}/${encodeURIComponent(item?.title)}`}
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
    [booksQuery.data]
  );

  return (
    <main className="p-4 flex flex-col gap-8">
      <h1 className="text-purple font-bold">پیشخوان</h1>
      <WithLoaderAndError
        data={userQuery.data}
        error={userQuery.error}
        isError={userQuery.isError}
        isLoading={userQuery.isLoading}
      >
        {userQuery.data ? (
          <>
            <section className="flex gap-[1%] flex-wrap justify-between">
              <SummaryBoxes
                key={1}
                title="دوره های مجازی"
                value={
                  Number(userQuery.data.lengthCourseOnline) +
                  Number(userQuery.data.lengthCourseInPerson)
                }
                icon={<Class className="w-6 h-6" />}
              />
              <SummaryBoxes
                key={2}
                title="دوره های حضوری"
                value={userQuery.data.lengthCourseOfline}
                icon={<Online className="w-6 h-6" />}
              />
              <SummaryBoxes
                key={3}
                title="دوره های رایگان"
                value={1}
                icon={<Class className="w-6 h-6" />}
                link="Free"
              />
              <SummaryBoxes
                key={4}
                title="کتاب ها"
                value={userQuery.data.lengthBook}
                icon={<Book className="w-6 h-6" />}
              />
              <SummaryBoxes
                key={5}
                title="دیدگاه های من"
                value={userQuery.data.lengthcomment}
                icon={<Comment className="w-6 h-6" />}
              />
            </section>
          </>
        ) : null}
      </WithLoaderAndError>
      <WithLoaderAndError
        data={onlineQuery.data}
        error={onlineQuery.error}
        isError={onlineQuery.isError}
        isLoading={onlineQuery.isLoading}
      >
        <TableWrapper
          caption="دوره های آنلاین خریداری شده توسط شما"
          title="دوره های آنلاین"
          headers={["دوره", "تاریخ ثبت نام", "جزئیات سفارش", "مدرس"]}
          key={"online"}
          tableRows={onlineRows}
        />
      </WithLoaderAndError>
      <WithLoaderAndError
        data={offlineQuery.data}
        error={offlineQuery.error}
        isError={offlineQuery.isError}
        isLoading={offlineQuery.isLoading}
      >
        <TableWrapper
          caption="دوره های آفلاین خریداری شده توسط شما"
          title="دوره های آفلاین"
          headers={[
            "دوره",
            "لایسنس اسپات پلیر",
            "تاریخ ثبت نام",
            "جزئیات سفارش",
            "مدرس",
          ]}
          key={"offline"}
          tableRows={offlineRows}
        />
      </WithLoaderAndError>
      <WithLoaderAndError
        data={inPersonQuery.data}
        error={inPersonQuery.error}
        isError={inPersonQuery.isError}
        isLoading={inPersonQuery.isLoading}
      >
        <TableWrapper
          caption="دوره های حضوری خریداری شده توسط شما"
          title="دوره های حضوری"
          headers={["دوره", "تاریخ ثبت نام", "جزئیات سفارش", "مدرس"]}
          key={"inPerson"}
          tableRows={inPersonRows}
        />
      </WithLoaderAndError>
      <WithLoaderAndError
        data={booksQuery.data}
        error={booksQuery.error}
        isError={booksQuery.isError}
        isLoading={booksQuery.isLoading}
      >
        <TableWrapper
          caption=" کتاب های خریداری شده توسط شما"
          title="کتاب ها"
          headers={["کتاب", "تاریخ ثبت خرید", "جزئیات سفارش", "مدرس"]}
          key={"books"}
          tableRows={booksRows}
        />
      </WithLoaderAndError>
    </main>
  );
};

export default Summary;
