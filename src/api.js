import { post } from "@/helpers";

export const runQuery = async({ query }) => {
  const url = "/wp-json/wpquerypush/v1/query";
  const body = JSON.stringify({ statement: query });
  try {
    return post(url, body);
  } catch(error) {
    console.error(error);
    return {
      data: null,
      error
    };
  };
};

export const scheduleTask = async({ task }) => {
  const url = "/wp-json/wpquerypush/v1/schedule-task";
  const body = JSON.stringify({ task });
  try {
    return post(url, body);
  } catch(error) {
    console.error(error);
    return {
      data: null,
      error
    };
  };
};