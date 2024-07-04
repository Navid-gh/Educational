declare module "persian-date" {
  interface PersianDateOptions {
    timezone?: string;
    calendar?: "persian" | "gregorian";
  }

  class PersianDate {
    constructor(
      dateString?: string | number | Date,
      options?: PersianDateOptions
    );
    format(formatString: string): string;
    // Declare other methods and properties here if needed
  }

  export default PersianDate;
}
