import {
  BifrostFormQuestion,
  RenderableEmailInputBifrostFormQuestion,
  RenderableMultiSelectDateRangeBifrostFormQuestion,
  RenderableMultiStageReasonForTravelBifrostFormQuestion,
  RenderableMultiStageSmartDateSelectorBifrostFormQuestion,
  RenderablePhoneInputBifrostFormQuestion,
  RenderableSelectDateRangeBifrostFormQuestion,
  RenderableSplitTextInputBifrostFormQuestion,
  RenderableTextAreaBifrostFormQuestion,
  RenderableTextInputBifrostFormQuestion,
  RenderableToggleButtonGroupBifrostFormQuestion,
} from "../BifrostFormQuestion/BifrostFormQuestion";
import {
  BifrostFormQuestionCalendarDateRangeResponse,
  BifrostFormQuestionEmailResponse,
  BifrostFormQuestionMultiCalendarDateRangeResponse,
  BifrostFormQuestionMultiStageReasonForTravelResponse,
  BifrostFormQuestionMultiStageSmartDateResponse,
  BifrostFormQuestionPhoneNumberResponse,
  BifrostFormQuestionResponse,
  BifrostFormQuestionResponseType,
  BifrostFormQuestionSplitTextResponse,
  BifrostFormQuestionTextResponse,
} from "../BifrostFormQuestionResponse";

export interface BaseBifrostFormQuestionWithResponse {
  responseType: BifrostFormQuestionResponseType;
  bifrostFormQuestion: BifrostFormQuestion;
  responseData: BifrostFormQuestionResponse;
}

export interface BifrostTextInputFormQuestionWithTextResponse {
  responseType: BifrostFormQuestionResponseType.TEXT;
  bifrostFormQuestion: RenderableTextInputBifrostFormQuestion;
  responseData: BifrostFormQuestionTextResponse;
}
export interface BifrostTextAreaFormQuestionWithTextResponse {
  responseType: BifrostFormQuestionResponseType.TEXT;
  bifrostFormQuestion: RenderableTextAreaBifrostFormQuestion;
  responseData: BifrostFormQuestionTextResponse;
}
export interface BifrostToggleButtonGroupFormQuestionWithTextResponse {
  responseType: BifrostFormQuestionResponseType.TEXT;
  bifrostFormQuestion: RenderableToggleButtonGroupBifrostFormQuestion;
  responseData: BifrostFormQuestionTextResponse;
}
export type BifrostFormQuestionWithTextResponse =
  | BifrostTextInputFormQuestionWithTextResponse
  | BifrostTextAreaFormQuestionWithTextResponse
  | BifrostToggleButtonGroupFormQuestionWithTextResponse;

export interface BifrostFormQuestionWithPhoneNumberResponse {
  responseType: BifrostFormQuestionResponseType.PHONE_NUMBER;
  bifrostFormQuestion: RenderablePhoneInputBifrostFormQuestion;
  responseData: BifrostFormQuestionPhoneNumberResponse;
}

export interface BifrostFormQuestionWithEmailResponse {
  responseType: BifrostFormQuestionResponseType.EMAIL;
  bifrostFormQuestion: RenderableEmailInputBifrostFormQuestion;
  responseData: BifrostFormQuestionEmailResponse;
}

export interface BifrostFormQuestionWithCalendarDateRangeResponse {
  responseType: BifrostFormQuestionResponseType.CALENDAR_DATE_RANGE;
  bifrostFormQuestion: RenderableSelectDateRangeBifrostFormQuestion;
  responseData: BifrostFormQuestionCalendarDateRangeResponse;
}

export interface BifrostFormQuestionWithMultiCalendarDateRangeResponse {
  responseType: BifrostFormQuestionResponseType.MULTI_CALENDAR_DATE_RANGE;
  bifrostFormQuestion: RenderableMultiSelectDateRangeBifrostFormQuestion;
  responseData: BifrostFormQuestionMultiCalendarDateRangeResponse;
}

export interface BifrostFormQuestionWithSplitTextResponse {
  responseType: BifrostFormQuestionResponseType.SPLIT_TEXT;
  bifrostFormQuestion: RenderableSplitTextInputBifrostFormQuestion;
  responseData: BifrostFormQuestionSplitTextResponse;
}

// Multi-Stage

export interface BifrostFormQuestionWithMultiStageSmartDateResponse {
  responseType: BifrostFormQuestionResponseType.MULTI_STAGE_SMART_DATE;
  bifrostFormQuestion: RenderableMultiStageSmartDateSelectorBifrostFormQuestion;
  responseData: BifrostFormQuestionMultiStageSmartDateResponse;
}

export interface BifrostFormQuestionWithMultiStageReasonForTravelResponse {
  responseType: BifrostFormQuestionResponseType.MULTI_STAGE_REASON_FOR_TRAVEL;
  bifrostFormQuestion: RenderableMultiStageReasonForTravelBifrostFormQuestion;
  responseData: BifrostFormQuestionMultiStageReasonForTravelResponse;
}

export type BifrostFormQuestionWithResponse =
  | BifrostFormQuestionWithTextResponse
  | BifrostFormQuestionWithPhoneNumberResponse
  | BifrostFormQuestionWithEmailResponse
  | BifrostFormQuestionWithCalendarDateRangeResponse
  | BifrostFormQuestionWithMultiCalendarDateRangeResponse
  | BifrostFormQuestionWithMultiStageSmartDateResponse
  | BifrostFormQuestionWithMultiStageReasonForTravelResponse
  | BifrostFormQuestionWithSplitTextResponse;
