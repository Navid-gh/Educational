import Tick from '../../Components/UI/Icons/Tick';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import WithLoaderAndError from '../../Components/WithLoaderAndError';
import { getOrderDetail } from '../../api/basket/orderAPI';
import useAuth from '../../hooks/useAuth';
import { useAuthHooks } from '../../hooks/useAuthHooks';
import { usePersianNums } from '../../hooks/usePersianNums';
import { STRESS_COURSE_ID } from '../../Items/stressItems';
import MainButton from '../../Components/UI/MainButton';
import {
  OFFLINE_COURSE_HERF,
  OFFLINE_COURSE_ID,
} from '../../Items/offlineCourseItems';

const BasketOrderDetails = () => {
  const [queryParameters] = useSearchParams();
  const orderId = queryParameters.get('orderId');
  if (!orderId) return <Navigate to="/Basket" />;
  const { token } = useAuth();
  const auth = useAuthHooks();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrderDetail({ token, ...auth }, orderId),
  });

  const hasStressCourse = data?.courseIDOnline?.some(
    (item) => item._id === STRESS_COURSE_ID,
  );

  const hasOfflineProduct = data?.courseIDOffline?.some(
    (item) => item?._id === OFFLINE_COURSE_ID,
  );

  return (
    <section className="flex flex-col gap-3">
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        {data ? (
          <>
            <div className="flex items-center self-center gap-2">
              <Tick className="fill-blue w-6 h-6" />
              <h1 className="font-bold">{`سفارش شما به شماره سفارش ${usePersianNums(
                data?.factor,
              )} با موفقیت ثبت شد`}</h1>
            </div>
            <div className="flex flex-col gap-4">
              <Link to={hasStressCourse ? '/User/Stress' : '/User'}>
                <MainButton
                  className="bg-black hover:bg-purple max-w-fit"
                  text={
                    hasStressCourse ? ` دوره صوتی کنترل استرس` : `پنل کاربری`
                  }
                  intent="purple"
                  size="medium"
                />
              </Link>
              {hasOfflineProduct && (
                <Link to={OFFLINE_COURSE_HERF}>
                  <MainButton
                    className="max-w-fit"
                    text="مشاهده دوره"
                    intent="primary"
                    size="medium"
                  />
                </Link>
              )}
            </div>
          </>
        ) : null}
      </WithLoaderAndError>
    </section>
  );
};

export default BasketOrderDetails;
