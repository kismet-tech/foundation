import { ReservedBifrostFormQuestionIds } from "../ReservedBifrostFormQuestionIds";
import {
  BifrostFormQuestionType,
  RenderableMultiStageReasonForTravelBifrostFormQuestion,
  RenderableMultiStageSmartDateSelectorBifrostFormQuestion,
} from "./BifrostFormQuestion";

export const mockRenderableMultiStageSmartDateSelectorBifrostFormQuestion: RenderableMultiStageSmartDateSelectorBifrostFormQuestion =
  {
    type: BifrostFormQuestionType.MULTI_STAGE_SMART_DATE_SELECTOR,
    bifrostFormQuestionId: ReservedBifrostFormQuestionIds.CALENDAR_DATES,
    chatLabel: "",
    label: "Date details",
  };

export const mockRenderableMultiStageReasonForTravelBifrostFormQuestion: RenderableMultiStageReasonForTravelBifrostFormQuestion =
  {
    type: BifrostFormQuestionType.MULTI_STAGE_REASON_FOR_TRAVEL,
    bifrostFormQuestionId:
      ReservedBifrostFormQuestionIds.REASON_FOR_TRAVEL_WITH_DETAILS,
    chatLabel: "",
    label: "",
  };
