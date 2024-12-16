import { ReservedBifrostReasonForTravelOptionValues } from "../../ReservedBifrostFormQuestionValues";
import {
  BifrostFormQuestionMultiStageReasonForTravelResponse,
  BifrostFormQuestionResponseType,
} from "../BifrostFormQuestionResponse";

export const mockBifrostFormQuestionMultiStageReasonForTravelResponseEmpty: BifrostFormQuestionMultiStageReasonForTravelResponse =
  {
    type: BifrostFormQuestionResponseType.MULTI_STAGE_REASON_FOR_TRAVEL,
    responseValue: {
      reasonForTravel: undefined,
      companyName: undefined,
      websiteUrl: undefined,
    },
  };

export const mockBifrostFormQuestionMultiStageReasonForTravelResponseSocialReason: BifrostFormQuestionMultiStageReasonForTravelResponse =
  {
    type: BifrostFormQuestionResponseType.MULTI_STAGE_REASON_FOR_TRAVEL,
    responseValue: {
      reasonForTravel: ReservedBifrostReasonForTravelOptionValues.SOCIAL,
    },
  };

export const mockBifrostFormQuestionMultiStageReasonForTravelResponseBusinessReasonNoDetail: BifrostFormQuestionMultiStageReasonForTravelResponse =
  {
    type: BifrostFormQuestionResponseType.MULTI_STAGE_REASON_FOR_TRAVEL,
    responseValue: {
      reasonForTravel: ReservedBifrostReasonForTravelOptionValues.BUSINESS,
    },
  };

export const mockBifrostFormQuestionMultiStageReasonForTravelResponseBusinessReasonWithCompanyNameDetail: BifrostFormQuestionMultiStageReasonForTravelResponse =
  {
    type: BifrostFormQuestionResponseType.MULTI_STAGE_REASON_FOR_TRAVEL,
    responseValue: {
      reasonForTravel: ReservedBifrostReasonForTravelOptionValues.BUSINESS,
      companyName: "Toyota",
    },
  };

export const mockBifrostFormQuestionMultiStageReasonForTravelResponseBusinessReasonCompletedDetail: BifrostFormQuestionMultiStageReasonForTravelResponse =
  {
    type: BifrostFormQuestionResponseType.MULTI_STAGE_REASON_FOR_TRAVEL,
    responseValue: {
      reasonForTravel: ReservedBifrostReasonForTravelOptionValues.BUSINESS,
      companyName: "Toyota",
      websiteUrl: "https://www.toyota.com/",
    },
  };
