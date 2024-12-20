import { BifrostFormQuestionWithResponse } from "../BifrostFormQuestions";

export interface HotelBifrostFormHotelMetadata {
  hotelId: string;
  assignedSalesAgentName: string;

  hotelName: string;
}

export interface HotelBifrostFormMetadata {
  isEnabled: boolean;

  hotel: HotelBifrostFormHotelMetadata;

  additionalBifrostFormQuestionsWithResponses: BifrostFormQuestionWithResponse[];
  includeExtendedStay: boolean;
}
