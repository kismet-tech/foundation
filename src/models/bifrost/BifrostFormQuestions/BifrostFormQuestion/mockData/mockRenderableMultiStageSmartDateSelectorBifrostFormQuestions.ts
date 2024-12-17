import { ReservedBifrostFormQuestionIds } from "../../ReservedBifrostFormQuestionIds";
import {
  BifrostFormQuestionType,
  RenderableMultiStageSmartDateSelectorBifrostFormQuestion,
} from "../BifrostFormQuestion";

export const mockRenderableMultiStageSmartDateSelectorBifrostFormQuestion: RenderableMultiStageSmartDateSelectorBifrostFormQuestion =
  {
    type: BifrostFormQuestionType.MULTI_STAGE_SMART_DATE_SELECTOR,
    bifrostFormQuestionId: ReservedBifrostFormQuestionIds.CALENDAR_DATES,
    chatLabel: "",
    label: "Date details",
  };
