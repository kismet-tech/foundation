import { mockRenderableItineraryEventOfferOne } from "../mockData";
import {
  mockRenderableItineraryHotelRoomOfferEight,
  mockRenderableItineraryHotelRoomOfferFive,
  mockRenderableItineraryHotelRoomOfferFour,
  mockRenderableItineraryHotelRoomOfferOne,
  mockRenderableItineraryHotelRoomOfferSeven,
  mockRenderableItineraryHotelRoomOfferSix,
  mockRenderableItineraryHotelRoomOfferThree,
  mockRenderableItineraryHotelRoomOfferTwo,
} from "./RenderableItineraryHotelRoomOffer/mockData";
import {
  ItineraryOfferOriginatorType,
  RenderableItineraryOffer,
  RenderableItineraryOfferCriterion,
} from "./RenderableItineraryOffer";

export const mockRenderableItineraryOfferCriterionOne: RenderableItineraryOfferCriterion =
  {
    criterionName: "Space for 12 guests",
    doesMatchCriterion: true,
  };

export const mockRenderableItineraryOfferCriterionTwo: RenderableItineraryOfferCriterion =
  {
    criterionName: "Guest House and suites available",
    doesMatchCriterion: true,
  };

export const mockRenderableItineraryOfferOne: RenderableItineraryOffer = {
  itineraryOfferId: `1234567890`,
  originatorType: ItineraryOfferOriginatorType.KISMET_AI,
  heroImageUrl: `https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg`,
  guestCount: 5,
  startCalendarDate: {
    year: 2025,
    month: 3,
    day: 10,
  },
  endCalendarDate: {
    year: 2025,
    month: 3,
    day: 15,
  },
  itineraryOfferName: `Spring Escape`,
  itineraryOfferDescription: `A refreshing spring getaway.`,

  descriptionOfAllHotelRoomOffers:
    "A variety of room types individually bookable by guests of the wedding",
  hotelRoomOffers: [
    mockRenderableItineraryHotelRoomOfferOne,
    mockRenderableItineraryHotelRoomOfferTwo,
  ],
  descriptionOfAllEventOffers:
    "Welcome reception for guests of the wedding on Friday 12/15 is pending. Someone will be in touch soon.",
  eventOffers: [mockRenderableItineraryEventOfferOne],

  criteria: [
    mockRenderableItineraryOfferCriterionOne,
    mockRenderableItineraryOfferCriterionTwo,
  ],
  bookingRules: {
    holdDurationInDays: 10,
    discountExpiresAtTimestamp: Date.now() + 5 * 24 * 60 * 60 * 1000,
    depositPercentage: 10,
    depositCollectionTimestamp: Date.now() + 1 * 24 * 60 * 60 * 1000,
    paymentCollectionTimestamp: Date.now() + 10 * 24 * 60 * 60 * 1000,
  },
};

export const mockRenderableItineraryOfferTwo: RenderableItineraryOffer = {
  itineraryOfferId: `2384783921`,
  originatorType: ItineraryOfferOriginatorType.KISMET_AI,
  heroImageUrl: `https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg`,
  guestCount: 10,
  startCalendarDate: {
    year: 2025,
    month: 5,
    day: 15,
  },
  endCalendarDate: {
    year: 2025,
    month: 5,
    day: 18,
  },
  itineraryOfferName: `Beach Getaway`,
  itineraryOfferDescription: `A relaxing weekend by the beach.`,

  descriptionOfAllHotelRoomOffers:
    "A variety of room types individually bookable by guests of the wedding",
  hotelRoomOffers: [
    mockRenderableItineraryHotelRoomOfferThree,
    mockRenderableItineraryHotelRoomOfferFour,
  ],
  descriptionOfAllEventOffers:
    "Welcome reception for guests of the wedding on Friday 12/15 is pending. Someone will be in touch soon.",
  eventOffers: [mockRenderableItineraryEventOfferOne],

  criteria: [
    mockRenderableItineraryOfferCriterionOne,
    mockRenderableItineraryOfferCriterionTwo,
  ],
  bookingRules: {
    holdDurationInDays: 10,
    discountExpiresAtTimestamp: Date.now() + 5 * 24 * 60 * 60 * 1000,
    depositPercentage: 10,
    depositCollectionTimestamp: Date.now() + 1 * 24 * 60 * 60 * 1000,
    paymentCollectionTimestamp: Date.now() + 10 * 24 * 60 * 60 * 1000,
  },
};

export const mockRenderableItineraryOfferThree: RenderableItineraryOffer = {
  itineraryOfferId: `3428734783`,
  originatorType: ItineraryOfferOriginatorType.KISMET_AI,
  heroImageUrl: `https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg`,
  guestCount: 8,
  startCalendarDate: {
    year: 2025,
    month: 9,
    day: 10,
  },
  endCalendarDate: {
    year: 2025,
    month: 9,
    day: 14,
  },
  itineraryOfferName: `Mountain Retreat`,
  itineraryOfferDescription: `An adventurous escape to the mountains.`,
  descriptionOfAllHotelRoomOffers:
    "A variety of room types individually bookable by guests of the wedding",
  hotelRoomOffers: [
    mockRenderableItineraryHotelRoomOfferFive,
    mockRenderableItineraryHotelRoomOfferSix,
  ],
  descriptionOfAllEventOffers:
    "Welcome reception for guests of the wedding on Friday 12/15 is pending. Someone will be in touch soon.",
  eventOffers: [mockRenderableItineraryEventOfferOne],

  criteria: [
    mockRenderableItineraryOfferCriterionOne,
    mockRenderableItineraryOfferCriterionTwo,
  ],
  bookingRules: {
    holdDurationInDays: 10,
    discountExpiresAtTimestamp: Date.now() + 5 * 24 * 60 * 60 * 1000,
    depositPercentage: 10,
    depositCollectionTimestamp: Date.now() + 1 * 24 * 60 * 60 * 1000,
    paymentCollectionTimestamp: Date.now() + 10 * 24 * 60 * 60 * 1000,
  },
};

export const mockRenderableItineraryOfferFour: RenderableItineraryOffer = {
  itineraryOfferId: `4738293928`,
  originatorType: ItineraryOfferOriginatorType.GUEST,
  heroImageUrl: `https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg`,
  guestCount: 20,
  startCalendarDate: {
    year: 2025,
    month: 11,
    day: 20,
  },
  endCalendarDate: {
    year: 2025,
    month: 11,
    day: 24,
  },
  itineraryOfferName: `City Break`,
  itineraryOfferDescription: `Explore the sights and sounds of the city.`,

  descriptionOfAllHotelRoomOffers:
    "A variety of room types individually bookable by guests of the wedding",
  hotelRoomOffers: [
    mockRenderableItineraryHotelRoomOfferSeven,
    mockRenderableItineraryHotelRoomOfferEight,
  ],
  descriptionOfAllEventOffers:
    "Welcome reception for guests of the wedding on Friday 12/15 is pending. Someone will be in touch soon.",
  eventOffers: [mockRenderableItineraryEventOfferOne],

  criteria: [
    mockRenderableItineraryOfferCriterionOne,
    mockRenderableItineraryOfferCriterionTwo,
  ],
  bookingRules: {
    holdDurationInDays: 10,
    discountExpiresAtTimestamp: Date.now() + 5 * 24 * 60 * 60 * 1000,
    depositPercentage: 10,
    depositCollectionTimestamp: Date.now() + 1 * 24 * 60 * 60 * 1000,
    paymentCollectionTimestamp: Date.now() + 10 * 24 * 60 * 60 * 1000,
  },
};
