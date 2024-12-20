export enum BifrostFormQuestionType {
  TEXT_INPUT = "TEXT_INPUT",
  EMAIL = "EMAIL",
  PHONE = "PHONE",

  TEXT_AREA = "TEXT_AREA",

  SELECTOR = "SELECTOR",

  TOGGLE_BUTTON_GROUP = "TOGGLE_BUTTON_GROUP",

  SELECT_DATE_RANGE = "SELECT_DATE_RANGE",
  MULTI_SELECT_DATE_RANGE = "MULTI_SELECT_DATE_RANGE",

  // Multi-Stage
  MULTI_STAGE_SMART_DATE_SELECTOR = "MULTI_STAGE_SMART_DATE_SELECTOR",
  MULTI_STAGE_REASON_FOR_TRAVEL = "MULTI_STAGE_REASON_FOR_TRAVEL",

  SPLIT_TEXT_INPUT = "SPLIT_TEXT_INPUT",
}

export interface BaseRenderableBifrostFormQuestion {
  type: BifrostFormQuestionType;
  bifrostFormQuestionId: string;
  chatLabel: string;
}

export interface SingleRenderableBifrostFormQuestion
  extends BaseRenderableBifrostFormQuestion {
  label: string;
  required?: boolean;
}

//////////////////////////////////////////////////
// Text Inputs
//////////////////////////////////////////////////

export interface RenderableTextInputBifrostFormQuestion
  extends SingleRenderableBifrostFormQuestion {
  type: BifrostFormQuestionType.TEXT_INPUT;
  autocomplete?: string;
}

export interface RenderableEmailInputBifrostFormQuestion
  extends SingleRenderableBifrostFormQuestion {
  type: BifrostFormQuestionType.EMAIL;
  autocomplete?: string;
}

export interface RenderablePhoneInputBifrostFormQuestion
  extends SingleRenderableBifrostFormQuestion {
  type: BifrostFormQuestionType.PHONE;
  autocomplete?: string;
}

export interface RenderableTextAreaBifrostFormQuestion
  extends SingleRenderableBifrostFormQuestion {
  type: BifrostFormQuestionType.TEXT_AREA;
}

//////////////////////////////////////////////////
// Other
//////////////////////////////////////////////////

export interface RenderableSelectorBifrostFormQuestionOption {
  label: string;
  value: string;
  optionCategory?: string;
}

export interface RenderableSelectorBifrostFormQuestion
  extends SingleRenderableBifrostFormQuestion {
  type: BifrostFormQuestionType.SELECTOR;

  options: RenderableSelectorBifrostFormQuestionOption[];
}

//////////////////////////////////////////////////
// Buttons
//////////////////////////////////////////////////

export interface RenderableToggleButtonGroupBifrostFormQuestionOption {
  label: string;
  value: string;
}

export interface RenderableToggleButtonGroupBifrostFormQuestion
  extends SingleRenderableBifrostFormQuestion {
  type: BifrostFormQuestionType.TOGGLE_BUTTON_GROUP;

  options: RenderableToggleButtonGroupBifrostFormQuestionOption[];
}

//////////////////////////////////////////////////
// DateTime Inputs
//////////////////////////////////////////////////
export interface RenderableSelectDateRangeBifrostFormQuestion
  extends SingleRenderableBifrostFormQuestion {
  type: BifrostFormQuestionType.SELECT_DATE_RANGE;
}

export interface RenderableMultiSelectDateRangeBifrostFormQuestion
  extends SingleRenderableBifrostFormQuestion {
  type: BifrostFormQuestionType.MULTI_SELECT_DATE_RANGE;
}

//////////////////////////////////////////////////
// Multi-Field Inputs
//////////////////////////////////////////////////

export interface RenderableSplitTextInputBifrostFormQuestion
  extends BaseRenderableBifrostFormQuestion {
  type: BifrostFormQuestionType.SPLIT_TEXT_INPUT;

  label?: string;

  left: RenderableTextInputBifrostFormQuestion;
  right: RenderableTextInputBifrostFormQuestion;
}

//////////////////////////////////////////////////
// Multi-Stage Inputs
//////////////////////////////////////////////////
export interface RenderableMultiStageSmartDateSelectorBifrostFormQuestion
  extends SingleRenderableBifrostFormQuestion {
  type: BifrostFormQuestionType.MULTI_STAGE_SMART_DATE_SELECTOR;
}

export interface RenderableMultiStageReasonForTravelBifrostFormQuestion
  extends SingleRenderableBifrostFormQuestion {
  type: BifrostFormQuestionType.MULTI_STAGE_REASON_FOR_TRAVEL;
}

//////////////////////////////////////////////////
// Union Types
//////////////////////////////////////////////////

export type BifrostFormQuestion =
  | RenderableTextInputBifrostFormQuestion
  | RenderableEmailInputBifrostFormQuestion
  | RenderablePhoneInputBifrostFormQuestion
  | RenderableTextAreaBifrostFormQuestion
  | RenderableToggleButtonGroupBifrostFormQuestion
  | RenderableSelectDateRangeBifrostFormQuestion
  | RenderableMultiSelectDateRangeBifrostFormQuestion
  | RenderableSplitTextInputBifrostFormQuestion
  | RenderableMultiStageSmartDateSelectorBifrostFormQuestion
  | RenderableMultiStageReasonForTravelBifrostFormQuestion;
