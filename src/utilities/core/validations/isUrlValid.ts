import validator from "validator";
import {
  EitherResponse,
  errorResponse,
  successResponse,
} from "../../../models";

interface IsUrlValidProps {
  url: string;
}

export enum IsUrlValidErrorReason {
  INVALID_URL_FORMAT = "INVALID_URL_FORMAT",
}

export const isUrlValid = async ({
  url,
}: IsUrlValidProps): Promise<
  EitherResponse<boolean, IsUrlValidErrorReason>
> => {
  const isValidUrl: boolean = validator.isURL(url);

  if (isValidUrl) {
    return successResponse(isValidUrl);
  } else {
    return errorResponse(IsUrlValidErrorReason.INVALID_URL_FORMAT);
  }
};
