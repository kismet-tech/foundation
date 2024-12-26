import { CalendarDate } from "./../../../models/core/date/CalendarDate/CalendarDate";
import {
  CalendarDateComarison,
  compareCalendarDates,
} from "./compareCalendarDates";

export const getLatestCalendarDate = (
  calendarDates: CalendarDate[]
): CalendarDate => {
  if (calendarDates.length === 0) {
    throw new Error("No calendar dates provided");
  }

  const latestCalendarDate: CalendarDate = calendarDates.reduce(
    (latestCalendarDate: CalendarDate, calendarDate: CalendarDate) => {
      if (
        compareCalendarDates({
          firstCalendarDate: calendarDate,
          secondCalendarDate: latestCalendarDate,
        }) === CalendarDateComarison.FIRST_DATE_OCCURS_AFTER_SECOND_DATE
      ) {
        return calendarDate;
      }

      return latestCalendarDate;
    },
    calendarDates[0]
  );

  return latestCalendarDate;
};
