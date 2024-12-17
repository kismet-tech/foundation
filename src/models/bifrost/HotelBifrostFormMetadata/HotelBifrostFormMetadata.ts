import { BifrostFormQuestionWithResponse } from "../BifrostFormQuestions";

export interface HotelBifrostFormMetadata {
  hotelId: string;
  additionalBifrostFormQuestionsWithResponses: BifrostFormQuestionWithResponse[];
  assignedSalesAgentName: string;
}
