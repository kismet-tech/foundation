import { BifrostFormQuestionWithResponse } from "../BifrostFormQuestions";

export interface HotelBifrostFormMetadata {
  isEnabled: boolean;

  hotelId: string;
  additionalBifrostFormQuestionsWithResponses: BifrostFormQuestionWithResponse[];
  assignedSalesAgentName: string;
  includeExtendedStay: boolean;
}
