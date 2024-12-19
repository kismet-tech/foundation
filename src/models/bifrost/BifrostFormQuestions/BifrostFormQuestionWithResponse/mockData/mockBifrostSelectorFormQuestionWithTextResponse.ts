import { mockRenderableSelectorBifrostFormQuestionAskingLocation } from "../../BifrostFormQuestion/mockData/mockRenderableSelectorBifrostFormQuestions";
import { BifrostFormQuestionResponseType } from "../../BifrostFormQuestionResponse";
import { BifrostSelectorFormQuestionWithTextResponse } from "../BifrostFormQuestionWithResponse";

export const mockBifrostSelectorFormQuestionWithTextResponse: BifrostSelectorFormQuestionWithTextResponse =
  {
    responseType: BifrostFormQuestionResponseType.TEXT,
    bifrostFormQuestion:
      mockRenderableSelectorBifrostFormQuestionAskingLocation,
    responseData: {
      type: BifrostFormQuestionResponseType.TEXT,
      responseValue: "",
    },
  };
