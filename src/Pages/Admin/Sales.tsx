import { useRef, useState, ChangeEvent, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { SalesResponse, getAdminSales } from "../../api/getters/saleAPI";
import useAuth from "../../hooks/useAuth";
import { useAuthHooks } from "../../hooks/useAuthHooks";
import WithLoaderAndError from "../../Components/WithLoaderAndError";
import { Link } from "react-router-dom";
import { usePersianNums } from "../../hooks/usePersianNums";
import moment from "moment-jalaali";

const Sales = () => {
  const [items, setItems] = useState<SalesResponse[]>([]);
  const { token } = useAuth();
  const auth = useAuthHooks();
  const searchRef = useRef<HTMLInputElement>(null);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["sales", "admin"],
    queryFn: () => getAdminSales({ token, ...auth }),
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newItems = data!.filter((item) =>
      item.factor.includes(e.target.value)
    );
    setItems(newItems);
  };

  useEffect(() => {
    if (data) setItems(data);
  }, [data]);

  return (
    <main>
      <div className="flex gap-2">
        <span>جستجو برحسب شماره فاکتور</span>
        <input
          type="text"
          ref={searchRef}
          className="border border-black"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        <div className="flex flex-col gap-8 px-3">
          <span>لیست سفارش های سایت شما : </span>
          <ol className="flex flex-col gap-4 list-decimal">
            {items?.map(
              (
                {
                  book,
                  courseIDOInPerson,
                  courseIDOffline,
                  courseIDOnline,
                  factor,
                  user,
                  amount,
                  date,
                },
                idx
              ) => {
                return (
                  <li key={idx} className="border-b border-black">
                    <div className="flex flex-col gap-6">
                      <span>شناسه خرید : {factor}</span>
                      <div className="flex gap-6">
                        <span>
                          تاریخ :{" "}
                          {usePersianNums(
                            moment(date).format("jYYYY/jMM/jDD HH:mm:ss")
                          )}
                        </span>
                        <span>
                          قیمت پرداختی کل : {usePersianNums(amount, true)} تومان
                        </span>
                      </div>
                      <div className="flex gap-6">
                        <span>
                          {user.first_name} {user.last_name}
                        </span>
                        <span>شماره تلفن : {user.phone}</span>
                        <span>استان : {user.provice}</span>
                        <span>شهر : {user.city}</span>
                        <span>آدرس : {user.address}</span>
                      </div>
                      <span>لیست محصولات خریداری شده توسط این کاربر : </span>
                      <div className="flex flex-col gap-2">
                        <span>کتاب های خریداری شده توسط این کاربر : </span>
                        <ol className="flex flex-col gap-2 list-decimal">
                          {book?.map((bookItem) => (
                            <li key={bookItem?._id}>
                              <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                  <span>اسم : </span>
                                  <span>{bookItem?.title}</span>
                                </div>
                                <div className="flex gap-2">
                                  <Link
                                    to={`/Book/${
                                      bookItem?._id
                                    }/${encodeURIComponent(bookItem?.title)}`}
                                  >
                                    <span>لینک صفحه</span>
                                  </Link>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span>
                          دوره های حضوری خریداری شده توسط این کاربر :{" "}
                        </span>
                        <ol className="flex flex-col gap-2 list-decimal">
                          {courseIDOInPerson?.map((inPersonCourseItem) => (
                            <li key={inPersonCourseItem?._id}>
                              <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                  <span>اسم : </span>
                                  <span>{inPersonCourseItem?.title}</span>
                                </div>
                                <div className="flex gap-2">
                                  <Link
                                    to={`/Course/${
                                      inPersonCourseItem?._id
                                    }/${encodeURIComponent(
                                      inPersonCourseItem?.title
                                    )}`}
                                  >
                                    <span>لینک صفحه</span>
                                  </Link>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span>
                          {" "}
                          دوره های آفلاین خریداری شده توسط این کاربر :{" "}
                        </span>
                        <ol className="flex flex-col gap-2 list-decimal">
                          {courseIDOnline?.map((onlineCourseItem) => (
                            <li key={onlineCourseItem?._id}>
                              <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                  <span>اسم : </span>
                                  <span>{onlineCourseItem?.title}</span>
                                </div>
                                <div className="flex gap-2">
                                  <Link
                                    to={`/Course/${
                                      onlineCourseItem?._id
                                    }/${encodeURIComponent(
                                      onlineCourseItem?.title
                                    )}`}
                                  >
                                    <span>لینک صفحه</span>
                                  </Link>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span>
                          {" "}
                          دوره های آنلاین خریداری شده توسط این کاربر :{" "}
                        </span>
                        <ol className="flex flex-col gap-2 list-decimal">
                          {courseIDOffline?.map((offlineCourseItem) => (
                            <li key={offlineCourseItem?._id}>
                              <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                  <span>اسم : </span>
                                  <span>{offlineCourseItem?.title}</span>
                                </div>
                                <div className="flex gap-2">
                                  <Link
                                    to={`/Course/${
                                      offlineCourseItem?._id
                                    }/${encodeURIComponent(
                                      offlineCourseItem?.title
                                    )}`}
                                  >
                                    <span>لینک صفحه</span>
                                  </Link>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </li>
                );
              }
            )}
          </ol>
        </div>
      </WithLoaderAndError>
    </main>
  );
};

export default Sales;
