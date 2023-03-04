import { BAD_REQUEST } from "../responses";

const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

/**
 * SIGN UP
 * 1. validate request
 * 2. check if email exists
 * 2A. if email exists, check if oid exists
 * 2AI. if oid exists, return existing oid
 * 2AII. if oid does not exist, return newly created oid
 * 2B. if email does not exist, insert new record and return newly created oid
 */
export const createUser = (schema, request) => {
  //debugger;
  // TODO: osid ?
  let oid = crypto.randomUUID();
  const otp = generateOtp().toString();
  console.log("otp: ", otp);
  const body = JSON.parse(request.requestBody);
  const { email, password } = body;
  if (email && password) {
    const existingSession = schema.emails.findBy({ email });
    if (existingSession) {
      if (existingSession?.oid) {
        oid = existingSession.oid;
      } else {
        existingSession.update({ oid }); 
      };
      existingSession.update({ otp });
    } else {
      schema.emails.create({ email, oid, otp });
    };
    return { oid };
  };
  return BAD_REQUEST();
};
