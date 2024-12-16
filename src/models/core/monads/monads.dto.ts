import { EitherResponseType } from "./monadResponses";

export interface ErrorResponseDataDto<T> {
  reason: T;
  errorMessage?: string;
  additionalErrorInformation?: string;
}
export interface ErrorResponseDto<T> {
  type: EitherResponseType.ERROR;
  error: ErrorResponseDataDto<T>;

  statusCode?: number;
}
