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

export const scheduleTask = async(data) => {
  const url = "/wp-json/wpquerypush/v1/schedule-task";
  const body = JSON.stringify(data);
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

export const createConnection = async(data) => {
  const mappedHeaders = data?.headers?.map(header => ({ [header.key]: header.value }));
  const mappedData = {
    name: data.name,
    type: data.type,
    requestData: {
      url: data.url,
      //method: data.method,
      headers: mappedHeaders
    }
  };
  const url = "/wp-json/wpquerypush/v1/connections";
  const body = JSON.stringify(mappedData);
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

export const createSchedule = async(data) => {
  const url = "/wp-json/wpquerypush/v1/schedules";
  const body = JSON.stringify(data);
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

export const send = async(data) => {
  const url = "/wp-json/wpquerypush/v1/send";
  const body = JSON.stringify(data);
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