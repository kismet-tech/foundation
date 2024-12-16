import { ReservedBifrostDateFlexibilityOptionValues } from "../../ReservedBifrostFormQuestionValues";
import {
  BifrostFormQuestionMultiStageSmartDateResponse,
  BifrostFormQuestionResponseType,
} from "../BifrostFormQuestionResponse";
import {
  mock10July2025CalendarDate,
  mock13July2025CalendarDate,
  mock15July2025CalendarDate,
  mock7July2025CalendarDate,
} from "../../../../../models/core/date/CalendarDate/mockData";

export const mockBifrostFormQuestionMultiStageSmartDateResponseEmpty: BifrostFormQuestionMultiStageSmartDateResponse =
  {
    type: BifrostFormQuestionResponseType.MULTI_STAGE_SMART_DATE,
    responseValue: {
      dateFlexibility: undefined,
      descriptionOfPotentialCalendarDates: undefined,
      calendarDateRanges: undefined,
    },
  };

export const mockBifrostFormQuestionMultiStageSmartDateResponseFirmDatesUnsetDates: BifrostFormQuestionMultiStageSmartDateResponse =
  {
    type: BifrostFormQuestionResponseType.MULTI_STAGE_SMART_DATE,
    responseValue: {
      dateFlexibility: ReservedBifrostDateFlexibilityOptionValues.FIRM_DATES,
      descriptionOfPotentialCalendarDates: undefined,
      calendarDateRanges: undefined,
    },
  };

export const mockBifrostFormQuestionMultiStageSmartDateResponseFirmDatesWithSetDates: BifrostFormQuestionMultiStageSmartDateResponse =
  {
    type: BifrostFormQuestionResponseType.MULTI_STAGE_SMART_DATE,
    responseValue: {
      dateFlexibility: ReservedBifrostDateFlexibilityOptionValues.FIRM_DATES,
      descriptionOfPotentialCalendarDates: undefined,
      calendarDateRanges: [
        {
          startCalendarDate: mock7July2025CalendarDate,
          endCalendarDate: mock10July2025CalendarDate,
        },
      ],
    },
  };

export const mockBifrostFormQuestionMultiStageSmartDateResponseFlexibleDatesWithUnsetDates: BifrostFormQuestionMultiStageSmartDateResponse =
  {
    type: BifrostFormQuestionResponseType.MULTI_STAGE_SMART_DATE,
    responseValue: {
      dateFlexibility:
        ReservedBifrostDateFlexibilityOptionValues.FLEXIBLE_DATES,
      descriptionOfPotentialCalendarDates: undefined,
      calendarDateRanges: undefined,
    },
  };

export const mockBifrostFormQuestionMultiStageSmartDateResponseFlexibleDatesWithSetDates: BifrostFormQuestionMultiStageSmartDateResponse =
  {
    type: BifrostFormQuestionResponseType.MULTI_STAGE_SMART_DATE,
    responseValue: {
      dateFlexibility:
        ReservedBifrostDateFlexibilityOptionValues.FLEXIBLE_DATES,
      descriptionOfPotentialCalendarDates: undefined,
      calendarDateRanges: [
        {
          startCalendarDate: mock7July2025CalendarDate,
          endCalendarDate: mock10July2025CalendarDate,
        },
        {
          startCalendarDate: mock13July2025CalendarDate,
          endCalendarDate: mock15July2025CalendarDate,
        },
      ],
    },
  };

export const mockBifrostFormQuestionMultiStageSmartDateResponseStillDecidingDatesWithUnsetDatesWithDescription: BifrostFormQuestionMultiStageSmartDateResponse =
  {
    type: BifrostFormQuestionResponseType.MULTI_STAGE_SMART_DATE,
    responseValue: {
      dateFlexibility:
        ReservedBifrostDateFlexibilityOptionValues.STILL_DECIDING,
      descriptionOfPotentialCalendarDates: "sometime around this upcoming July",
      calendarDateRanges: undefined,
    },
  };

export const mockBifrostFormQuestionMultiStageSmartDateResponseStillDecidingDatesWithSetDatesWithDescription: BifrostFormQuestionMultiStageSmartDateResponse =
  {
    type: BifrostFormQuestionResponseType.MULTI_STAGE_SMART_DATE,
    responseValue: {
      dateFlexibility:
        ReservedBifrostDateFlexibilityOptionValues.STILL_DECIDING,
      descriptionOfPotentialCalendarDates: "sometime around this upcoming July",
      calendarDateRanges: [
        {
          startCalendarDate: mock7July2025CalendarDate,
          endCalendarDate: mock10July2025CalendarDate,
        },
      ],
    },
  };
