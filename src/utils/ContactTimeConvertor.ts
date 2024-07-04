import { ContactTimes } from "../Types/ContactTimeType";
import { usePersianNums } from "../hooks/usePersianNums";

const mapper = {
  morning: usePersianNums("از ساعت 9 صبح تا 12 ظهر"),
  "after-noon": usePersianNums("از ساعت 12 ظهر تا 3 بعد از ظهر"),
  evening: usePersianNums("از ساعت 3 بعد از ظهر تا 6 عصر"),
  night: usePersianNums("از ساعت 6 عصر تا 9 شب"),
};

export const ContactTimeConvertor = (time: ContactTimes) => mapper[time];
