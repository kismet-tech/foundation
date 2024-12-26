import { CalendarDate } from "../../../core/date/CalendarDate/CalendarDate";
import { RenderableItineraryHotelRoomOffer } from "./RenderableItineraryHotelRoomOffer/RenderableItineraryHotelRoomOffer";

export enum ItineraryOfferOriginatorType {
  KISMET_AI = "KISMET_AI",
  GUEST = "GUEST",
  SALES_AGENT = "SALES_AGENT",
}

export enum VenueOfferPricingType {
  ALT_FOOD_BEV_MIN = "ALT_FOOD_BEV_MIN",
  FIXED_COST = "FIXED_COST",
}

export interface RenderableEventVenueOfferPricingInfo {
  pricingType: VenueOfferPricingType;
  priceInCents: number;
}

export interface RenderableEventVenueOffer {
  venueOfferId: string;
  venueName: string;
  pricingInfo: RenderableEventVenueOfferPricingInfo;
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

export interface RenderableItineraryEventOffer {
  eventOfferId: string;
  eventOfferName: string;
  eventOfferPriceInCents: number;
  isEventOfferPriceEnabled: boolean;
  imageUrl: string;
  startDateTime: string;
  endDateTime: string;
  numberOfGuests: number;
  status: HotelEventOfferStatus;
  venueOffers: RenderableEventVenueOffer[];
  details: Record<string, unknown>;
}

export enum HotelEventOfferStatus {
  PROSPECT = "PROSPECT",
  TENTATIVE = "TENTATIVE",
  DEFINITIVE = "DEFINITIVE",
  CLOSED = "CLOSED",
  LOST = "LOST",
  WAITLISTED = "WAITLISTED",
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
