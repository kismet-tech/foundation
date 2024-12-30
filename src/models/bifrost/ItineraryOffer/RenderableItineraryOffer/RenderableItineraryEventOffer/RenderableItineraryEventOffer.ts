export enum HotelEventOfferStatus {
  PROSPECT = "PROSPECT",
  TENTATIVE = "TENTATIVE",
  DEFINITIVE = "DEFINITIVE",
  CLOSED = "CLOSED",
  LOST = "LOST",
  WAITLISTED = "WAITLISTED",
}

export enum VenueOfferPricingType {
  ALT_FOOD_BEV_MIN = "ALT_FOOD_BEV_MIN",
  FIXED_COST = "FIXED_COST",
}

export interface RenderableEventVenueOfferPricingInfo {
  pricingType: VenueOfferPricingType;
  offerPriceInCents: number;
  offerListPriceInCents: number;
}

export interface RenderableEventVenueOffer {
  venueOfferId: string;
  venueName: string;
  pricingInfo: RenderableEventVenueOfferPricingInfo | null;
}

export interface RenderableItineraryEventOffer {
  eventOfferId: string;
  eventOfferName: string;
  eventOfferPriceInCents: number;
  eventOfferListPriceInCents: number;
  isEventOfferPriceEnabled: boolean;
  imageUrl: string;
  startDateTime: string;
  endDateTime: string;
  numberOfGuests: number;
  status: HotelEventOfferStatus;
  venueOffers: RenderableEventVenueOffer[];
  details: Record<string, unknown>;
}
