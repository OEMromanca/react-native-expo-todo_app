import { format, isValid, parseISO } from "date-fns";

export function formatDate(date: Date | string | undefined): string {
  if (!date) {
    console.warn("formatDate is not expecting a null value");
    return "";
  }

  if (typeof date === "string") {
    const parsedDate = parseISO(date);
    if (isValid(parsedDate)) {
      return format(parsedDate, "d MMMM yyyy");
    }
  } else if (date instanceof Date) {
    if (isValid(date)) {
      return format(date, "d MMMM yyyy");
    }
  }

  console.warn("Invalid date value:", date);
  return "";
}
