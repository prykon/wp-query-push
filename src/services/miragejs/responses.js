import { Response } from "miragejs";

export const OK = (res) => {
  return new Response(
    200,
    { "Content-Type": "application/json" },
    res
  );
};

export const CREATED = (res) => {
  return new Response(
    201,
    { "Content-Type": "application/json" },
    res
  );
};

export const NO_CONTENT = () => {
  return new Response(204);
};

const ERROR = (code, message) => {
  return new Response(
    code,
    { "Content-Type": "application/json" },
    { errors: [message] }
  );
};

export const BAD_REQUEST = (message) => ERROR(400, message ?? "Bad Request");
export const UNAUTHORIZED = (message) => ERROR(401, message ?? "Unauthorized");
export const NOT_FOUND = (message) => ERROR(404, message ?? "Not Found");
export const METHOD_NOT_ALLOWED = (message) => ERROR(405, message ?? "Method Not Allowed");
export const SERVER_ERROR = (message) => ERROR(500, message ?? "Server Error");
//export const REDIRECT = (uri) => new Response(303, { Location: uri });