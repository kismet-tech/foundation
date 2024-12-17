import {
  RenderableItineraryHotelRoomOffer, RenderableItineraryEventOffer,
  HotelEventOfferStatus,
  VenueOfferPricingType,
} from "./RenderableItineraryOffer";

export const mockRunOfHouseRenderableItineraryHotelRoomOffer: RenderableItineraryHotelRoomOffer =
{
  hotelRoomOfferId: `78901qerjweqrwerhv2`,
  runOfHouseDetails: {},
  countOffered: 5,
  countAvailable: 5,
  offerPriceInCents: 80000,
  listPriceInCents: 100000,
  hotelRoomName: `Run of House`,
  hotelRoomDescription: `A versatile room option that offers excellent value and flexibility.`,
  verboseHotelRoomDescription: `Our 'Run of House' room type ensures you receive one of our high-quality rooms at an unbeatable price. Room assignments are made upon check-in, based on availability, providing you with the best possible accommodation. This option is ideal for guests seeking value without sacrificing comfort.`,
  heroImageUrl: `https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg`,
  hotelRoomImageUrls: [
    `https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg`,
  ],
};

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
        priceInCents: 5000
      },
    },
    {
      venueOfferId: "venue-offer-2",
      venueName: "Melody's Piano Bar",
      pricingInfo: {
        pricingType: VenueOfferPricingType.FIXED_COST,
        priceInCents: 6000
      },
    }
  ],
  details: {
    description: "Join us for a welcome cocktail reception with hors d'oeuvres",
    location: "The Ballroom, Melody's Piano Bar",
    address: "123 Main Street, New York, NY 10001",
    inclusions: ["Welcome drink", "Light appetizers", "Live piano music"],
    notes: "Smart casual dress code"
  }
};
