import { mockRenderableMultiStageReasonForTravelBifrostFormQuestion } from "../../BifrostFormQuestion/mockData";
import {
  BifrostFormQuestionResponseType,
  mockBifrostFormQuestionMultiStageReasonForTravelResponseEmpty,
} from "../../BifrostFormQuestionResponse";
import { BifrostFormQuestionWithMultiStageReasonForTravelResponse } from "../BifrostFormQuestionWithResponse";

export const mockBifrostFormQuestionWithMultiStageReasonForTravelResponse: BifrostFormQuestionWithMultiStageReasonForTravelResponse =
  {
    responseType: BifrostFormQuestionResponseType.MULTI_STAGE_REASON_FOR_TRAVEL,
    bifrostFormQuestion:
      mockRenderableMultiStageReasonForTravelBifrostFormQuestion,
    responseData: mockBifrostFormQuestionMultiStageReasonForTravelResponseEmpty,
  };
