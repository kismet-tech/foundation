import {
  mockRenderableItineraryHotelRoomOfferFive,
  mockRenderableItineraryHotelRoomOfferFour,
  mockRenderableItineraryHotelRoomOfferOne,
  mockRenderableItineraryHotelRoomOfferSix,
  mockRenderableItineraryHotelRoomOfferThree,
  mockRenderableItineraryHotelRoomOfferTwo,
} from "../.././../../models/bifrost/ItineraryOffer/RenderableItineraryOffer/RenderableItineraryHotelRoomOffer/mockData";
import { BifrostGroupBookingCheckoutCart } from "./BifrostGroupBookingCheckoutCart";

export const mockBifrostGroupBookingCheckoutCartEmpty: BifrostGroupBookingCheckoutCart =
  {
    hotelRooms: [],
  };

export const mockBlockCartBifrostGroupBookingCheckoutCartOne: BifrostGroupBookingCheckoutCart =
  {
    hotelRooms: [
      mockRenderableItineraryHotelRoomOfferOne,
      mockRenderableItineraryHotelRoomOfferTwo,
      mockRenderableItineraryHotelRoomOfferThree,
    ],
  };

export const mockBifrostGroupBookingCheckoutCartTwo: BifrostGroupBookingCheckoutCart =
  {
    hotelRooms: [
      mockRenderableItineraryHotelRoomOfferOne,
      mockRenderableItineraryHotelRoomOfferTwo,
      mockRenderableItineraryHotelRoomOfferThree,
      mockRenderableItineraryHotelRoomOfferFour,
      mockRenderableItineraryHotelRoomOfferFive,
      mockRenderableItineraryHotelRoomOfferSix,
    ],
  };
