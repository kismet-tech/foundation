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

  heroImageUrl: string;
  hotelRoomImageUrls: string[];
} & (
  | { hotelRoomId: string }
  | {
      runOfHouseDetails: RenderableItineraryHotelRoomOfferRunOfHouseDetails;
    }
);
