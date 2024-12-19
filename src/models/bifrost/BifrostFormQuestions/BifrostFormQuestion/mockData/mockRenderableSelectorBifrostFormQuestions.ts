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
    optionCategory: "Midwest",
  };

export const mockRenderableSelectorBifrostFormQuestionAskingLocationOptionTwo: RenderableSelectorBifrostFormQuestionOption =
  {
    value: "Miami",
    label: "Miami",
    optionCategory: "South East",
  };

export const mockRenderableSelectorBifrostFormQuestionAskingLocationOptionThree: RenderableSelectorBifrostFormQuestionOption =
  {
    value: "Detroit",
    label: "Detroit",
    optionCategory: "Midwest",
  };

export const mockRenderableSelectorBifrostFormQuestionAskingLocationOptionFour: RenderableSelectorBifrostFormQuestionOption =
  {
    value: "Atlanta",
    label: "Atlanta",
    optionCategory: "South East",
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
      mockRenderableSelectorBifrostFormQuestionAskingLocationOptionFour,
    ],
  };
