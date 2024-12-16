import { mockRenderableMultiStageSmartDateSelectorBifrostFormQuestion } from "../../BifrostFormQuestion/mockData";
import {
  BifrostFormQuestionResponseType,
  mockBifrostFormQuestionMultiStageSmartDateResponseEmpty,
} from "../../BifrostFormQuestionResponse";
import { BifrostFormQuestionWithMultiStageSmartDateResponse } from "../BifrostFormQuestionWithResponse";

export const mockBifrostFormQuestionWithMultiStageSmartDateResponseEmpty: BifrostFormQuestionWithMultiStageSmartDateResponse =
  {
    responseType: BifrostFormQuestionResponseType.MULTI_STAGE_SMART_DATE,
    bifrostFormQuestion:
      mockRenderableMultiStageSmartDateSelectorBifrostFormQuestion,
    responseData: mockBifrostFormQuestionMultiStageSmartDateResponseEmpty,
  };
