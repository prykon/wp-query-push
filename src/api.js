import { post, put, delet } from "@/helpers";

import { BASE_URL } from "@/constants";

export const runQuery = async({ query }) => {
  const url = `${BASE_URL}/queries`;
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

export const deleteQuery = async(formData) => {
  const url = `${BASE_URL}/delete-query/${formData.id}`;
  const body = JSON.stringify(formData);
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

export const updateQuery = async(formData) => {
  const url = `${BASE_URL}/update-query/${formData.id}`;
  const body = JSON.stringify(formData);

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

export const updateCronEvent = async(formData) => {
  const url = `${BASE_URL}/update-cron-event/${formData.query}`;
  const body = JSON.stringify(formData);
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
  const url = `${BASE_URL}/schedule-task`;
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
  const url = `${BASE_URL}/connections`;
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

export const updateConnection = async({ id, data }) => {
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
  const url = `${BASE_URL}/connections/${id}`;
  const body = JSON.stringify(mappedData);
  try {
    return put(url, body);
  } catch(error) {
    console.error(error);
    return {
      data: null,
      error
    };
  };
};

export const deleteConnection = async(id) => {
  const url = `${BASE_URL}/connections/${id}`;
  try {
    return delet(url);
  } catch(error) {
    console.error(error);
    return {
      data: null,
      error
    };
  };
};

export const createSchedule = async(data) => {
  const url = `${BASE_URL}/schedules`;
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

export const deleteCronEvent = async(id) => {
  const url = `${BASE_URL}/delete-cron-event/${id}`;
  const body = JSON.stringify(id);
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
  const url = `${BASE_URL}/send`;
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

export const createApiKey = async() => {
  const url = `${BASE_URL}/create-new-api-key`;
  const body = null;
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

export const deleteApiKey = async(apiHint) => {
  const url = `${BASE_URL}/delete-api-key-from-hint`;
  const body = JSON.stringify({'hint':apiHint});
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
