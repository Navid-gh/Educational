const source = {
  offline: "آفلاین",
  online: "آنلاین",
  physical: "نسخه چاپی",
  inPerson: "حضوری",
} as const;

export const typeConvertor = (
  type: "offline" | "online" | "physical" | "inPerson"
) => {
  return source[type];
};
