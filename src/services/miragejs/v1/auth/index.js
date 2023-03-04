import {
  OK,
  CREATED,
  NO_CONTENT,
  UNAUTHORIZED,
  NOT_FOUND,
  METHOD_NOT_ALLOWED,
  SERVER_ERROR,
//} from "../../responses";
} from "@/services/miragejs/responses";

import qs from 'qs';

const GrantTypeConstants = Object.freeze({
  AUTHORIZATION_CODE: "authorization_code",
  REFRESH_TOKEN: "refresh_token",
  PASSWORD: "password",
  CLIENT_CREDENTIALS: "client_credentials",
  TOKEN_EXCHANGE: "urn:ietf:params:oauth:grant-type:token-exchange",
  FORGOT_PASSWORD: "forgot_password",
  RESET_PASSWORD: "reset_password"
});

const handleToken = (schema, request) => {
  const body = qs.parse(request.requestBody);
  const { grant_type } = body;
  if (grant_type === GrantTypeConstants.PASSWORD || grant_type === GrantTypeConstants.TOKEN_EXCHANGE || grant_type === GrantTypeConstants.REFRESH_TOKEN) {
    return OK({
      access_token: "123xyz",
      issued_token_type: "urn:ietf:params:oauth:token-type:jwt",
      token_type: "bearer",
      expires_in: 3600,
      refresh_token: "999abc",
      scope: "openid email"
    });
  };
  if (grant_type === GrantTypeConstants.FORGOT_PASSWORD) {
    const { username } = body;
    console.log("*** SENDING RESET PASSWORD LINK TO: ", username);
    return NO_CONTENT();
  };
  if (grant_type === GrantTypeConstants.RESET_PASSWORD) {
    const { password } = body;
    console.log("*** RESET PASSWORD TO: ", password);
    return NO_CONTENT();
  };
  return SERVER_ERROR();
};

const handleLogout = (schema, request) => {
  return NO_CONTENT();
};

export const authRouter = (server) => {
  server.timing = 2000;
  server.post("/oauth/token", (schema, request) => handleToken(schema, request));
  server.get("/oauth/logout", (schema, request) => handleLogout(schema, request));
  server.get("*", () => NOT_FOUND());
  server.post("*", () => NOT_FOUND());
  server.put("*", () => METHOD_NOT_ALLOWED());
  server.delete("*", () => METHOD_NOT_ALLOWED());
};