import {
  HotelEventOfferStatus,
  RenderableItineraryEventOffer,
  VenueOfferPricingType,
} from "./RenderableItineraryEventOffer";

// CASE 1: THE EVENT WAS CREATED IN KISMET NATIVELY
// DENOTED BY isEventOfferPriceEnabled set to false
// PRICE calculation should be done based on the price information provided for venues
export const mockRenderableItineraryEventOfferOne: RenderableItineraryEventOffer =
{
  eventOfferId: "1232341",
  eventOfferName: "Welcome Reception",
  eventOfferPriceInCents: 15000,
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
        priceInCents: 5000,
      },
    },
    {
      venueOfferId: "venue-offer-2",
      venueName: "Melody's Piano Bar",
      pricingInfo: {
        pricingType: VenueOfferPricingType.ALT_FOOD_BEV_MIN,
        priceInCents: 6000,
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
// PRICE is directly set via eventOfferPriceInCents
export const mockRenderableItineraryEventOfferTwo: RenderableItineraryEventOffer = {
  eventOfferId: "1232342",
  eventOfferName: "Theatre Show: The Lion King",
  eventOfferPriceInCents: 250000,
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
      pricingInfo: {
        pricingType: VenueOfferPricingType.FIXED_COST,
        priceInCents: 50000,
      },
    },
    {
      venueOfferId: "venue-offer-2",
      venueName: "The Room",
      pricingInfo: {
        pricingType: VenueOfferPricingType.ALT_FOOD_BEV_MIN,
        priceInCents: 90000,
      },
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
        priceInCents: 300000,
      },
    },
    {
      venueOfferId: "venue-offer-4",
      venueName: "Crystal Ballroom",
      pricingInfo: {
        pricingType: VenueOfferPricingType.FIXED_COST,
        priceInCents: 15000,
      },
    },
    {
      venueOfferId: "venue-offer-5",
      venueName: "Rooftop Lounge",
      pricingInfo: {
        pricingType: VenueOfferPricingType.ALT_FOOD_BEV_MIN,
        priceInCents: 250000,
      },
    }
  ],
  details: {
    description:
      "A beautiful wedding celebration starting with a ceremony at the Grand Cathedral, followed by dinner reception at the Crystal Ballroom and afterparty at the Rooftop Lounge"
  },
};