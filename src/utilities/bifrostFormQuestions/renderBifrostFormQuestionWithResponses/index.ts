import {
  renderCalendarDateRange,
  RenderedCalendarDateFormat,
  RenderedCalendarDateRangeJoinFormat,
} from "./../../../utilities/dates";
import { CalendarDateRange } from "../../../models";
import { BifrostFormQuestionResponseType } from "../../../models/bifrost/BifrostFormQuestions/BifrostFormQuestionResponse/BifrostFormQuestionResponse";
import { BifrostFormQuestionWithResponse } from "../../../models/bifrost/BifrostFormQuestions/BifrostFormQuestionWithResponse/BifrostFormQuestionWithResponse";

interface RenderBifrostFormQuestionWithResponsesProps {
  bifrostFormQuestionsWithResponses: BifrostFormQuestionWithResponse[];
}

const NEW_LINE = "<br />";

export const renderBifrostFormQuestionWithResponses = ({
  bifrostFormQuestionsWithResponses,
}: RenderBifrostFormQuestionWithResponsesProps): string => {
  return bifrostFormQuestionsWithResponses
    .map((bifrostFormQuestionWithResponse: BifrostFormQuestionWithResponse) => {
      if (
        bifrostFormQuestionWithResponse.responseType ===
        BifrostFormQuestionResponseType.TEXT
      ) {
        const formattedResponse =
          bifrostFormQuestionWithResponse.responseData.responseValue;

        return `${bifrostFormQuestionWithResponse.bifrostFormQuestion.bifrostFormQuestionId}: ${formattedResponse}`;
      } else if (
        bifrostFormQuestionWithResponse.responseType ===
        BifrostFormQuestionResponseType.PHONE_NUMBER
      ) {
        const formattedResponse =
          bifrostFormQuestionWithResponse.responseData.responseValue;

        return `${bifrostFormQuestionWithResponse.bifrostFormQuestion.bifrostFormQuestionId}: ${formattedResponse}`;
      } else if (
        bifrostFormQuestionWithResponse.responseType ===
        BifrostFormQuestionResponseType.EMAIL
      ) {
        const formattedResponse =
          bifrostFormQuestionWithResponse.responseData.responseValue;

        return `${bifrostFormQuestionWithResponse.bifrostFormQuestion.bifrostFormQuestionId}: ${formattedResponse}`;
      } else if (
        bifrostFormQuestionWithResponse.responseType ===
        BifrostFormQuestionResponseType.CALENDAR_DATE_RANGE
      ) {
        const formattedResponse = renderCalendarDateRange({
          calendarDateRange: bifrostFormQuestionWithResponse.responseData
            .responseValue as CalendarDateRange,
          renderedCalendarDateFormat:
            RenderedCalendarDateFormat.MM_SLASH_DD_SLASH_YY,
          renderedCalendarDateRangeJoinFormat:
            RenderedCalendarDateRangeJoinFormat.SPACE_DASH_SPACE,
          collapseStrategy: {
            collapseSameDay: false,
            collapseSameMonth: false,
          },
        });

        return `${bifrostFormQuestionWithResponse.bifrostFormQuestion.bifrostFormQuestionId}: ${formattedResponse}`;
      } else if (
        bifrostFormQuestionWithResponse.responseType ===
        BifrostFormQuestionResponseType.MULTI_CALENDAR_DATE_RANGE
      ) {
        const formattedResponse =
          bifrostFormQuestionWithResponse.responseData.responseValue
            .map((calendarDateRange) => {
              return renderCalendarDateRange({
                calendarDateRange: calendarDateRange as CalendarDateRange,
                renderedCalendarDateFormat:
                  RenderedCalendarDateFormat.MM_SLASH_DD_SLASH_YY,
                renderedCalendarDateRangeJoinFormat:
                  RenderedCalendarDateRangeJoinFormat.SPACE_DASH_SPACE,
                collapseStrategy: {
                  collapseSameDay: false,
                  collapseSameMonth: false,
                },
              });
            })
            .join(", ");

        return `${bifrostFormQuestionWithResponse.bifrostFormQuestion.bifrostFormQuestionId}: ${formattedResponse}`;
      } else if (
        bifrostFormQuestionWithResponse.responseType ===
        BifrostFormQuestionResponseType.MULTI_STAGE_SMART_DATE
      ) {
        let formattedResponse = "";

        formattedResponse += `Are the guest's dates flexible? ${bifrostFormQuestionWithResponse.responseData.responseValue.dateFlexibility}`;
        if (
          bifrostFormQuestionWithResponse.responseData.responseValue
            .descriptionOfPotentialCalendarDates
        ) {
          formattedResponse += `${NEW_LINE}Description of Date Flexibility? ${bifrostFormQuestionWithResponse.responseData.responseValue.descriptionOfPotentialCalendarDates}`;
        }

        formattedResponse +=
          `${NEW_LINE}Calendar Dates: ` +
          bifrostFormQuestionWithResponse.responseData.responseValue
            .calendarDateRanges!.map((calendarDateRange) => {
              return renderCalendarDateRange({
                calendarDateRange: calendarDateRange as CalendarDateRange,
                renderedCalendarDateFormat:
                  RenderedCalendarDateFormat.MM_SLASH_DD_SLASH_YY,
                renderedCalendarDateRangeJoinFormat:
                  RenderedCalendarDateRangeJoinFormat.SPACE_DASH_SPACE,
                collapseStrategy: {
                  collapseSameDay: false,
                  collapseSameMonth: false,
                },
              });
            })
            .join(", ");

        return formattedResponse;
      } else if (
        bifrostFormQuestionWithResponse.responseType ===
        BifrostFormQuestionResponseType.MULTI_STAGE_REASON_FOR_TRAVEL
      ) {
        let formattedResponse = "";

        formattedResponse += `Reason for Travel: ${bifrostFormQuestionWithResponse.responseData.responseValue.reasonForTravel}`;
        if (
          bifrostFormQuestionWithResponse.responseData.responseValue.companyName
        ) {
          formattedResponse += `Company Name: ${bifrostFormQuestionWithResponse.responseData.responseValue.companyName}`;
        }
        if (
          bifrostFormQuestionWithResponse.responseData.responseValue.websiteUrl
        ) {
          formattedResponse += `Website URL: ${bifrostFormQuestionWithResponse.responseData.responseValue.websiteUrl}`;
        }

        return formattedResponse;
      } else if (
        bifrostFormQuestionWithResponse.responseType ===
        BifrostFormQuestionResponseType.SPLIT_TEXT
      ) {
        let formattedResponse = ``;
        formattedResponse += `${bifrostFormQuestionWithResponse.bifrostFormQuestion.left.bifrostFormQuestionId}: ${bifrostFormQuestionWithResponse.responseData.responseValue.left}`;
        formattedResponse += `${NEW_LINE}`;
        formattedResponse += `${bifrostFormQuestionWithResponse.bifrostFormQuestion.right.bifrostFormQuestionId}: ${bifrostFormQuestionWithResponse.responseData.responseValue.right}`;
        return formattedResponse;
      }
    })
    .join(`${NEW_LINE}`);
};
