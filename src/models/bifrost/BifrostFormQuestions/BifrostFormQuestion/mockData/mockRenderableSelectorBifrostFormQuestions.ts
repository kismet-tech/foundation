import { ReservedBifrostFormQuestionIds } from "../../ReservedBifrostFormQuestionIds";
import {
  BifrostFormQuestionType,
  RenderableSelectorBifrostFormQuestion,
  RenderableSelectorBifrostFormQuestionOption,
} from "../BifrostFormQuestion";

export const mockRenderableSelectorBifrostFormQuestionAskingLocationOptionOne: RenderableSelectorBifrostFormQuestionOption =
  {
    value: "Chicago",
    label: "Chicago",
  };

export const mockRenderableSelectorBifrostFormQuestionAskingLocationOptionTwo: RenderableSelectorBifrostFormQuestionOption =
  {
    value: "Miami",
    label: "Miami",
  };

export const mockRenderableSelectorBifrostFormQuestionAskingLocationOptionThree: RenderableSelectorBifrostFormQuestionOption =
  {
    value: "Detroit",
    label: "Detroit",
  };

export const mockRenderableSelectorBifrostFormQuestionAskingLocation: RenderableSelectorBifrostFormQuestion =
  {
    type: BifrostFormQuestionType.SELECTOR,
    bifrostFormQuestionId: ReservedBifrostFormQuestionIds.STAY_LOCATION,
    chatLabel: "",
    label: "Where are you staying?",
    options: [
      mockRenderableSelectorBifrostFormQuestionAskingLocationOptionOne,
      mockRenderableSelectorBifrostFormQuestionAskingLocationOptionTwo,
      mockRenderableSelectorBifrostFormQuestionAskingLocationOptionThree,
    ],
  };
