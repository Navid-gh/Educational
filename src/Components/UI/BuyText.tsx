import { cn } from '../../utils/lib/Cn';

const BuyText = ({ className }: { className?: string }) => {
  return (
    <p className={cn('text-black text-sm', className)}>
      جهت اطلاع از تخفیف‌ها و ثبت‌نام، همین حالا با{' '}
      <a href="tel:+989330042028">09330042028</a> تماس بگیرید
    </p>
  );
};

export default BuyText;
