import {
  RenderableItineraryHotelRoomOffer,
  RenderableItineraryOffer,
} from "src/models/bifrost/RenderableItineraryOffer";

interface GetRoomCountFromRenderableItineraryOfferProps {
  renderableItineraryOffer: RenderableItineraryOffer;
}

export const getRoomCountFromRenderableItineraryOffer = ({
  renderableItineraryOffer,
}: GetRoomCountFromRenderableItineraryOfferProps): number => {
  return renderableItineraryOffer.hotelRoomOffers.reduce(
    (acc: number, hotelRoomOffer: RenderableItineraryHotelRoomOffer) => {
      return acc + hotelRoomOffer.countOffered;
    },
    0
  );
};
