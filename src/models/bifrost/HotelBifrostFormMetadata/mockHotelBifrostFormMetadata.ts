import {
  HotelBifrostFormHotelMetadata,
  HotelBifrostFormMetadata,
} from "./HotelBifrostFormMetadata";

export const mockHotelBifrostFormHotelMetadata: HotelBifrostFormHotelMetadata =
  {
    hotelId: "mews-grand-hotel",
    assignedSalesAgentName: "Jason",

    hotelName: "Mews Grand Hotel",
  };

export const mockHotelBifrostFormMetadata: HotelBifrostFormMetadata = {
  isEnabled: true,

  hotel: mockHotelBifrostFormHotelMetadata,

  additionalBifrostFormQuestionsWithResponses: [],
  includeExtendedStay: true,
};
