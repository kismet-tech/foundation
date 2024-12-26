import { CalendarDate } from "../../../models/core/date/CalendarDate/CalendarDate";
import {
  CalendarDateComarison,
  compareCalendarDates,
} from "./compareCalendarDates";

export const getEarliestCalendarDate = (
  calendarDates: CalendarDate[]
): CalendarDate => {
  if (calendarDates.length === 0) {
    throw new Error("No calendar dates provided");
  }

  const earliestCalendarDate: CalendarDate = calendarDates.reduce(
    (earliestCalendarDate: CalendarDate, calendarDate: CalendarDate) => {
      if (
        compareCalendarDates({
          firstCalendarDate: calendarDate,
          secondCalendarDate: earliestCalendarDate,
        }) === CalendarDateComarison.FIRST_DATE_OCCURS_BEFORE_SECOND_DATE
      ) {
        return calendarDate;
      }

      return earliestCalendarDate;
    },
    calendarDates[0]
  );

  return earliestCalendarDate;
};
