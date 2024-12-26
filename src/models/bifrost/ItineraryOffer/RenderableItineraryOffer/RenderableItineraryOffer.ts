import { CalendarDate } from "../../../core/date/CalendarDate/CalendarDate";
import { RenderableItineraryEventOffer } from "./RenderableItineraryEventOffer/RenderableItineraryEventOffer";
import { RenderableItineraryHotelRoomOffer } from "./RenderableItineraryHotelRoomOffer/RenderableItineraryHotelRoomOffer";

export enum ItineraryOfferOriginatorType {
  KISMET_AI = "KISMET_AI",
  GUEST = "GUEST",
  SALES_AGENT = "SALES_AGENT",
}

export interface RenderableItineraryOfferBookingRules {
  holdDurationInDays: number;

  discountExpiresAtTimestamp: number;

  depositPercentage: number;
  depositCollectionTimestamp: number;
  paymentCollectionTimestamp: number;
}

export interface RenderableItineraryOfferCriterion {
  criterionName: string;
  doesMatchCriterion: boolean;
}

export interface RenderableItineraryOffer {
  itineraryOfferId: string;

  originatorType: ItineraryOfferOriginatorType;

  heroImageUrl: string;

  guestCount?: number;

  startCalendarDate: CalendarDate;
  endCalendarDate: CalendarDate;

  itineraryOfferName: string;
  itineraryOfferDescription: string;

  descriptionOfAllHotelRoomOffers: string;
  hotelRoomOffers: RenderableItineraryHotelRoomOffer[];

  descriptionOfAllEventOffers: string;
  eventOffers: RenderableItineraryEventOffer[];

  criteria: RenderableItineraryOfferCriterion[];

  bookingRules: RenderableItineraryOfferBookingRules;
}
