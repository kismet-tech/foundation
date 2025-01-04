import { CalendarDateRange } from "../../../../../models/core";

export interface RenderableItineraryHotelRoomOfferRunOfHouseDetails {}

export type RenderableItineraryHotelRoomOffer = {
  hotelRoomOfferId: string;

  countOffered: number;
  countAvailable: number;

  offerPriceInCents: number;
  listPriceInCents: number;

  hotelRoomName: string;
  hotelRoomDescription: string;
  verboseHotelRoomDescription: string;

  calendarDateRange: CalendarDateRange;

  heroImageUrl: string;
  hotelRoomImageUrls: string[];

  roomBlockDepositRatio?: number;
  isRoomBlockDepositRefundable?: boolean;
  roomBlockTerms?: string[];
} & (
  | { hotelRoomId: string }
  | {
      runOfHouseDetails: RenderableItineraryHotelRoomOfferRunOfHouseDetails;
    }
);
