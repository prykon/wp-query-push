import {
  BAD_REQUEST,
  UNAUTHORIZED,
} from "../responses";

// TODO: move to constants (duplicated in index.js)
const Actions = Object.freeze({
  CONFIRM: "confirm",
  RESEND: "resend",
  PAYMENT: "payment",
});

export const onboardUser = (schema, request, action) => {
  if (action === Actions.CONFIRM) {
    const body = JSON.parse(request.requestBody);
    const { email, oid, otp } = body;
    if (email && oid && otp) {
      const existingSession = schema.emails.findBy({ email });
      console.log("existingSession: ", existingSession);
      console.log("otp: ", otp);
      console.log("existingSession.otp: ", existingSession?.otp);
      console.log("typeof otp: ", typeof otp);
      console.log("typeof existingSession.otp: ", typeof existingSession?.otp);
      if (existingSession?.oid !== oid) {
        return BAD_REQUEST();
      };
      if (existingSession?.otp !== otp) {
        return UNAUTHORIZED();
      };
      return { oid };
    };
    return BAD_REQUEST();
  };
  if (action === Actions.RESEND) {
    const body = JSON.parse(request.requestBody);
    const { email, oid } = body;
    if (email && oid) {
      const existingSession = schema.emails.findBy({ email });
      if (existingSession?.oid !== oid) {
        return BAD_REQUEST();
      };
      return { oid };
    };
    return BAD_REQUEST();
  };
  if (action === Actions.PAYMENT) {
    const body = JSON.parse(request.requestBody);
    const { email, oid, planId } = body;
    if (email && oid && planId) {
      const existingSession = schema.emails.findBy({ email });
      if (existingSession?.oid !== oid) {
        return BAD_REQUEST();
      };
      existingSession.update({ planId }); 
      // TODO: set cookie with refresh token
      /*
      // log in for 24 hours
      let now = new Date()
      let cookieExpiration = new Date(now.getTime() + 24 * 3600 * 1000)
      document.cookie = `remember_me=cookie-content-here; domain=.dev-domain; path=/; expires=${cookieExpiration.toUTCString()};`
      */
      const redirectUri = `http://localhost:3000/payment?status=success&oid=${oid}`;
      return { redirectUri };
    };
    return BAD_REQUEST();
  };
  return BAD_REQUEST();
};
