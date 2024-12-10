import { CalendarDate } from "../core/date/CalendarDate";
import { CalendarDateRange } from "../core/date/CalendarDateRange";

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

export interface RenderableItineraryHotelRoomOfferRunOfHouseDetails {}

export interface RenderableItineraryHotelRoomOffer {
  hotelRoomOfferId: string;

  hotelRoomId?: string;
  runOfHouseDetails?: RenderableItineraryHotelRoomOfferRunOfHouseDetails;

  countOffered: number;
  countAvailable: number;

  offerPriceInCents: number;
  listPriceInCents: number;

  hotelRoomName: string;
  hotelRoomDescription: string;
  verboseHotelRoomDescription: string;

  heroImageUrl: string;
  hotelRoomImageUrls: string[];
}

export enum RenderableItineraryEventOfferApprovalStatus {
  PENDING = "Pending",
}

export interface RenderableItineraryEventOffer {
  eventOfferId: string;
  eventName: string;

  calendarDateRange: CalendarDateRange;
  approvalStatus: RenderableItineraryEventOfferApprovalStatus;
  imageUrl: string;
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
