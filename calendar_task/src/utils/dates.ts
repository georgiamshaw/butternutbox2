import {
  addDays,
  addWeeks,
  isFuture,
  isMonday,
  isSameMonth,
  isSunday,
  isThursday,
  isWednesday,
  startOfMonth,
  startOfWeek,
} from "date-fns";

export const isDeliverableDate = (date: Date): boolean =>
  isFuture(date) &&
  (isMonday(date) || isWednesday(date) || isThursday(date) || isSunday(date));

export const getEarliestDeliverableDate = (): Date => {
  let date = new Date();

  while (!isDeliverableDate(date)) {
    date = addDays(date, 1);
  }

  return date;
};

export const getFirstDaysOfWeeks = (): Date[] => {
  const firstDaysOfWeeks: Date[] = [];

  let currentDate = startOfWeek(startOfMonth(getEarliestDeliverableDate()), {
    weekStartsOn: 1,
  });

  do {
    firstDaysOfWeeks.push(new Date(currentDate));
    currentDate = addWeeks(currentDate, 1);
  } while (isSameMonth(currentDate, getEarliestDeliverableDate()));

  return firstDaysOfWeeks;
};
