import {
  OK,
  CREATED,
  NO_CONTENT,
  UNAUTHORIZED,
  NOT_FOUND,
  SERVER_ERROR,
} from "@/services/miragejs/responses";

import qs from "qs";

const getIdByRequest = (request) => {
  // parseBearerToken
  // getIdByToken
  const uid = "2GaWF6PaOvoZmi9Aii3MWt4rr1N";
  return uid;
};

const isVerifiedCode = ({ schema, email, otp }) => {
  const existingSession = schema.emails.findBy({ email });
  if (existingSession?.otp !== otp) return false;
  return true;
};

const isValidSession = ({ schema, email, osid }) => {
  const existingSession = schema.emails.findBy({ email });
  if (existingSession?.osid !== osid) return false;
  return true;
};

const onboardingMiddleware = (schema, request, next) => {
  const body = JSON.parse(request.requestBody);
  const { email, osid } = body;
  const isValid = isValidSession({ schema, email, osid });
  if (!isValid) return UNAUTHORIZED();
  return next();
};

const verifyConfirm = (schema, request) => {
  const body = JSON.parse(request.requestBody);
  const { email, otp } = body;
  const isVerified = isVerifiedCode({ schema, email, otp }); 
  if (!isVerified) return UNAUTHORIZED();
  return NO_CONTENT(); 
};

const verifyResend = (schema, request) => {
  const body = JSON.parse(request.requestBody);
  const { email } = body;
  // generate new code
  // update db
  // send email
  console.log("*** SEND EMAIL TO: ", email);
  return NO_CONTENT();
};

const createPayment = (schema, request) => {
  const body = JSON.parse(request.requestBody);
  let { osid, planId, redirectUri } = body;
  console.log("PLAN ID:", planId);
  if (!planId) return SERVER_ERROR();
  if (!redirectUri) redirectUri = '/';
  redirectUri = `${redirectUri}?status=success&sid=${osid}`;
  // TODO: set cookie
  // document.cookie = `remember_me=cookie-content-here; domain=.dev-domain; path=/; expires=${cookieExpiration.toUTCString()};`
  return CREATED({ redirectUri });
};

export const deleteUser = (schema, request) => {
  const uid = getIdByRequest(request);
  const user = schema.uids.findBy({ uid });
  if (!user) return NOT_FOUND();
  return NO_CONTENT();
};

export const updateUser = (schema, request) => {
  return NO_CONTENT();
  /*
  console.log("schema.emails.all: ", schema.emails.all());
  const params = request.queryParams;
  console.log("params: ", params);
  const action = params?.action;
  console.log("action: ", action);
  if (OnboardingActions.includes(action)) return onboardUser(schema, request, action);
  return NOT_FOUND();
  */
};

const createUser = (schema, request) => {
  const body = qs.parse(request.requestBody);
  const { email } = body;
  const existingSession = schema.emails.findBy({ email });
  if (existingSession) return SERVER_ERROR("Email already exists");
  //const osid = crypto.randomUUID();
  const osid = "40f78fd3-d544-4170-98ed-f603616f6554";
  schema.emails.create({ email, otp: "123456", osid, uid: "2GaWF6PaOvoZmi9Aii3MWt4rr1N" });
  return CREATED({ osid });
};

const getUser = (schema, request) => {
  const uid = getIdByRequest(request);
  const user = schema.uids.findBy({ uid });
  if (!user) return NOT_FOUND();
  return OK(user);
};

const onboardingRouter = (server) => {
  server.timing = 2000;
  // TODO: allowed unauthorized payments! figure it out after :)
  //server.post("/account/payments", (schema, request) => onboardingMiddleware(schema, request, createPayment(schema, request)));
  server.post("/account/payments", (schema, request) => createPayment(schema, request));
  //server.post("/account/verify-resend", (schema, request) => onboardingMiddleware(schema, request, verifyResend(schema, request)));
  server.post("/account/verify-resend", (schema, request) => verifyResend(schema, request));
  //server.post("/account/verify-confirm", (schema, request) => onboardingMiddleware(schema, request, verifyConfirm(schema, request)));
  server.post("/account/verify-confirm", (schema, request) => verifyConfirm(schema, request));
};

export const usersRouter = (server) => {
  server.timing = 2000;
  onboardingRouter(server);
  server.get("/account", (schema, request) => getUser(schema, request));
  server.post("/account", async(schema, request) => createUser(schema, request));
  server.put("/account", (schema, request) => updateUser(schema, request));
  server.delete("/account", (schema, request) => deleteUser(schema, request));
};