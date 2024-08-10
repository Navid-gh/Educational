export const usePersianNums = (
  input: number | string,
  split?: boolean
): string => {
  const persianDigits = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };

  if (split) {
    const formatedValue = Intl.NumberFormat("fa-IR", {
      notation: "standard",
      maximumFractionDigits: 3,
    }).format(Number(input));

    return formatedValue;
  }
  return input
    ?.toString()
    ?.replace(
      /\d/g,
      (match) => persianDigits[match as keyof typeof persianDigits]
    );
};

export const useEnglishNums = (input: number | string): string => {
  const englishDigits = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };
  return input
    ?.toString()
    ?.replace(
      /[۰-۹]/g,
      (match) => englishDigits[match as keyof typeof englishDigits]
    );
};
