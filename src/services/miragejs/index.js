import { createServer, Model } from "miragejs";
import { v1 } from "./v1";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    models: {
      email: Model,
      uid: Model,
    },
    seeds(server) {
      server.create("email", { email: "jane@doe.com", otp: "123456", osid: "40f78fd3-d544-4170-98ed-f603616f6554", uid: "2GaWF6PaOvoZmi9Aii3MWt4rr1N" });
      server.create("uid", { uid: "2GaWF6PaOvoZmi9Aii3MWt4rr1N", email: "jane@doe.com"  });
    },
    routes() {
      //this.options("*", (schema, request) => handleOptions(schema, request));
      v1(this);
      //v2(this);
    },
  });
  return server;
};
