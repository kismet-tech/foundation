import {
  CalendarDateRange,
  PendingCalendarDateRange,
} from "../../../../models/core";
import {
  ReservedBifrostDateFlexibilityOptionValues,
  ReservedBifrostReasonForTravelOptionValues,
} from "../ReservedBifrostFormQuestionValues";

export enum BifrostFormQuestionResponseType {
  TEXT = "TEXT",
  PHONE_NUMBER = "PHONE_NUMBER",
  EMAIL = "EMAIL",
  CALENDAR_DATE_RANGE = "CALENDAR_DATE_RANGE",
  MULTI_CALENDAR_DATE_RANGE = "MULTI_CALENDAR_DATE_RANGE",

  // Multi-Stage
  MULTI_STAGE_SMART_DATE = "MULTI_STAGE_SMART_DATE",
  MULTI_STAGE_REASON_FOR_TRAVEL = "MULTI_STAGE_REASON_FOR_TRAVEL",

  SPLIT_TEXT = "SPLIT_TEXT",
}

export interface BaseBifrostFormQuestionResponse {
  type: BifrostFormQuestionResponseType;
}

export interface BifrostFormQuestionTextResponse {
  type: BifrostFormQuestionResponseType.TEXT;
  responseValue: string;
}

export interface BifrostFormQuestionPhoneNumberResponse {
  type: BifrostFormQuestionResponseType.PHONE_NUMBER;
  responseValue: string;
}

export interface BifrostFormQuestionEmailResponse {
  type: BifrostFormQuestionResponseType.EMAIL;
  responseValue: string;
}

export interface BifrostFormQuestionCalendarDateRangeResponse {
  type: BifrostFormQuestionResponseType.CALENDAR_DATE_RANGE;
  responseValue: PendingCalendarDateRange;
}

export interface BifrostFormQuestionMultiCalendarDateRangeResponse {
  type: BifrostFormQuestionResponseType.MULTI_CALENDAR_DATE_RANGE;
  responseValue: PendingCalendarDateRange[];
}

export interface BifrostFormQuestionSplitTextResponse {
  type: BifrostFormQuestionResponseType.SPLIT_TEXT;
  responseValue: {
    left: string;
    right: string;
  };
}

//////////////////////////////////////////////////
// Multi-Stage
//////////////////////////////////////////////////

export interface BifrostFormQuestionMultiStageSmartDateResponseValue {
  dateFlexibility?: ReservedBifrostDateFlexibilityOptionValues;
  descriptionOfPotentialCalendarDates?: string;
  suggestedCalendarDateRanges?: CalendarDateRange[];
  calendarDateRanges?: PendingCalendarDateRange[];
}

export interface BifrostFormQuestionMultiStageSmartDateResponse {
  type: BifrostFormQuestionResponseType.MULTI_STAGE_SMART_DATE;
  responseValue: BifrostFormQuestionMultiStageSmartDateResponseValue;
}

export interface BifrostFormQuestionMultiStageReasonForTravelResponseValue {
  reasonForTravel?: ReservedBifrostReasonForTravelOptionValues;
  companyName?: string;
  websiteUrl?: string;
}

export interface BifrostFormQuestionMultiStageReasonForTravelResponse {
  type: BifrostFormQuestionResponseType.MULTI_STAGE_REASON_FOR_TRAVEL;
  responseValue: BifrostFormQuestionMultiStageReasonForTravelResponseValue;
}

export type BifrostFormQuestionResponse =
  | BifrostFormQuestionTextResponse
  | BifrostFormQuestionPhoneNumberResponse
  | BifrostFormQuestionEmailResponse
  | BifrostFormQuestionCalendarDateRangeResponse
  | BifrostFormQuestionMultiCalendarDateRangeResponse
  | BifrostFormQuestionMultiStageSmartDateResponse
  | BifrostFormQuestionMultiStageReasonForTravelResponse
  | BifrostFormQuestionSplitTextResponse;
