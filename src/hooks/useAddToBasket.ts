import { Course, Book } from '../Types/apiTypes';
import toast from 'react-hot-toast';
import { addToBasket } from '../redux/basket/basketSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './useReduxHooks';

const useAddToBasket = () => {
  const navigate = useNavigate();

  const addToBasketHandler = (
    Auth: boolean,
    dispatch: ReturnType<typeof useAppDispatch>,
    product: Course | Book,
    type: 'course' | 'book',
  ) => {
    if (!Auth) {
      localStorage.setItem(
        'basketItem',
        JSON.stringify({ type, data: product }),
      );
      navigate('/Login');
      return;
    }

    if (type === 'book') {
      dispatch(addToBasket({ type: 'book', data: product as Book }));
      navigate('/Basket');
    } else if (type === 'course') {
      dispatch(addToBasket({ type: 'course', data: product as Course }));
      navigate('/Basket');
    }
    toast.success('محصول با موفقیت به سبد شما اضافه شد');
  };

  return addToBasketHandler;
};

export default useAddToBasket;
