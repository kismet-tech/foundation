import {
  HotelEventOfferStatus,
  RenderableItineraryEventOffer,
  VenueOfferPricingType,
} from "./RenderableItineraryEventOffer";

// CASE 1: THE EVENT WAS CREATED IN KISMET NATIVELY
// DENOTED BY isEventOfferPriceEnabled set to false
// eventOfferListPriceInCents is price without any discount
// eventOfferListPriceInCents is price with the discount applied
export const mockRenderableItineraryEventOfferOne: RenderableItineraryEventOffer =
{
  eventOfferId: "1232341",
  eventOfferName: "Welcome Reception",
  eventOfferPriceInCents: 11000,
  eventOfferListPriceInCents: 15000,
  isEventOfferPriceEnabled: false,
  imageUrl:
    "https://nypost.com/wp-content/uploads/sites/2/2022/04/melodys-piano-bar-1.jpg?quality=75&strip=all",
  startDateTime: "2024-12-15T18:00:00Z",
  endDateTime: "2024-12-15T21:00:00Z",
  numberOfGuests: 2,
  status: HotelEventOfferStatus.DEFINITIVE,
  venueOffers: [
    {
      venueOfferId: "venue-offer-1",
      venueName: "The Ballroom",
      pricingInfo: {
        pricingType: VenueOfferPricingType.FIXED_COST,
        offerPriceInCents: 6000,
        offerListPriceInCents: 7000,
      },
    },
    {
      venueOfferId: "venue-offer-2",
      venueName: "Melody's Piano Bar",
      pricingInfo: {
        pricingType: VenueOfferPricingType.ALT_FOOD_BEV_MIN,
        offerPriceInCents: 5000,
        offerListPriceInCents: 8000,
      },
    },
  ],
  details: {
    description:
      "Join us for a welcome cocktail reception with hors d'oeuvres"
  },
};

// CASE 2: THE EVENT WAS SOURCED VIA TRIPLESEAT
// DENOTED BY isEventOfferPriceEnabled set to true
// PRICE info is only available at the event level
// eventOfferPriceInCents is equal to eventOfferListPriceInCents
// No pricing info available at per venue level
export const mockRenderableItineraryEventOfferTwo: RenderableItineraryEventOffer = {
  eventOfferId: "1232342",
  eventOfferName: "Theatre Show: The Lion King",
  eventOfferPriceInCents: 140000,
  eventOfferListPriceInCents: 140000,
  isEventOfferPriceEnabled: true,
  imageUrl:
    "https://media.timeout.com/images/105795964/image.jpg",
  startDateTime: "2024-12-16T19:00:00Z",
  endDateTime: "2024-12-16T22:00:00Z",
  numberOfGuests: 2,
  status: HotelEventOfferStatus.DEFINITIVE,
  venueOffers: [
    {
      venueOfferId: "venue-offer-1",
      venueName: "The Theatre",
      pricingInfo: null,
    },
    {
      venueOfferId: "venue-offer-2",
      venueName: "The Room",
      pricingInfo: null,
    },
  ],
  details: {
    description:
      "Experience the magic of Disney's award-winning musical The Lion King on Broadway"
  },
};

// CASE 1: Example with event happening at multiple places and different pricing types
export const mockRenderableItineraryEventOfferThree: RenderableItineraryEventOffer = {
  eventOfferId: "1232343",
  eventOfferName: "Sam & Jennifer Wedding",
  eventOfferPriceInCents: 960000,
  eventOfferListPriceInCents: 1000000,
  isEventOfferPriceEnabled: false,
  imageUrl: "",
  startDateTime: "2024-12-16T16:00:00Z",
  endDateTime: "2024-12-17T02:00:00Z",
  numberOfGuests: 200,
  status: HotelEventOfferStatus.PROSPECT,
  venueOffers: [
    {
      venueOfferId: "venue-offer-3",
      venueName: "Grand Cathedral",
      pricingInfo: {
        pricingType: VenueOfferPricingType.FIXED_COST,
        offerPriceInCents: 300000,
        offerListPriceInCents: 320000
      },
    },
    {
      venueOfferId: "venue-offer-4",
      venueName: "Crystal Ballroom",
      pricingInfo: {
        pricingType: VenueOfferPricingType.FIXED_COST,
        offerPriceInCents: 300000,
        offerListPriceInCents: 320000
      },
    },
    {
      venueOfferId: "venue-offer-5",
      venueName: "Rooftop Lounge",
      pricingInfo: {
        pricingType: VenueOfferPricingType.ALT_FOOD_BEV_MIN,
        offerPriceInCents: 360000,
        offerListPriceInCents: 360000
      },
    }
  ],
  details: {
    description:
      "A beautiful wedding celebration starting with a ceremony at the Grand Cathedral, followed by dinner reception at the Crystal Ballroom and afterparty at the Rooftop Lounge"
  },
};