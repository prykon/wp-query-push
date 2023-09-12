import { OK, NOT_FOUND, SERVER_ERROR } from "@/services/miragejs/responses";

const healthCheck = (schema, request) => {
  return OK({ "v1": "ok" });
};

const simulateQuery4 = (schema, request) => {
  return SERVER_ERROR("Server Error");
};

const simulateQuery3 = (schema, request) => {
  return OK([]);
};

const simulateQuery1 = (schema, request) => {
  return OK([
    {
        "histid": "36542",
        "user_caps": "administrator",
        "action": "viewed",
        "object_type": "contacts",
        "object_subtype": "",
        "object_name": "ZZHello World 0.3799307881741609",
        "object_id": "127",
        "user_id": "1",
        "hist_ip": "0",
        "hist_time": "1676527052",
        "object_note": "",
        "meta_id": "0",
        "meta_key": "0",
        "meta_value": "0",
        "meta_parent": "0",
        "old_value": "",
        "field_type": ""
    },
    {
        "histid": "36540",
        "user_caps": "administrator",
        "action": "field_update",
        "object_type": "contacts",
        "object_subtype": "multi_select_test",
        "object_name": "ZZHello World 0.3799307881741609",
        "object_id": "127",
        "user_id": "1",
        "hist_ip": "0",
        "hist_time": "1676527044",
        "object_note": "Added Random Options: option 2",
        "meta_id": "1923",
        "meta_key": "multi_select_test",
        "meta_value": "two",
        "meta_parent": "0",
        "old_value": "",
        "field_type": "multi_select"
    },
  ]);
};

const getIntervals = (schema, request) => {
  const data = {
    "hourly": {
        "interval": 3600,
        "display": "Once Hourly"
    },
    "twicedaily": {
        "interval": 43200,
        "display": "Twice Daily"
    },
    "daily": {
        "interval": 86400,
        "display": "Once Daily"
    }
  };
  return OK(data);
};

const getConnections = (schema, request) => {
  const data = [
    {
      "id": 1,
      "name": "Conn 1",
      "type": "HTTP/S",
      "data": JSON.stringify({
        "url": "http://localhost:3000/wp-json/wp-query-push/v1/query",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer 123xyz",
        }
      })
    },
    {
      "id": 2,
      "name": "Make.com",
      "type": "HTTP/S",
      "data": JSON.stringify({
        "url": "https://make.com/webhook/123abc",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer 456xyz",
        }
      })
    },
  ];
  const mappedData = data.map((item) => ({ id: item.id, name: item.name }));
  //return OK([]);
  return OK(mappedData);
};

const getTables = (schema, request) => {
  const data = [
    {
        "table_name": "table 1",
    },
    {
        "table_name": "wp_options",
    }
  ];
  return OK(data);
};

const getLogsEmpty = (schema, request) => {
    return OK([]);
};

const getLogs = (schema, request) => {
  const data = [
    {
      "ts": "2021-07-28T15:30:00.000Z",
      "user": "user-13",
      "type": "scheduled",
      "connection": "Test 1",
      "query": "SELECT * FROM wp_options",
      "status": "200",
      "response": "{}",
      "request": "[{\"table_name\":\"wp_options\"}]"
    },
    {
      "ts": "2022-07-28T13:30:00.000Z",
      "user": "user-42",
      "type": "manual",
      "query": "SELECT * FROM wp_posts LIMIT 10 test something longer than 50 chars to ensure it truncates as expected",
      "connection_name": "Make.com",
      "status": "404",
      "response": "{\"error\": \"Unauthorized\"}",
      "request": ""
    },
  ];
  return OK(data);
};

const createConnection = (schema, request) => {
  return OK({ id: 2 });
};

const createSchedule = (schema, request) => {
  return OK({});
};

const send = (schema, request) => {
  return SERVER_ERROR("Server Error");
  //return OK({});
};

export const v1 = (server) => {
  server.namespace = "/wp-json/wp-query-push";
  server.timing = 2000;
  //this.options("*", (schema, request) => handleOptions(schema, request));
  server.get("/v1/connections", (schema, request) => getConnections(schema, request));
  server.get("/v1/intervals", (schema, request) => getIntervals(schema, request));
  server.get("/v1/tables", (schema, request) => getTables(schema, request));
  server.get("/v1/logs", (schema, request) => getLogs(schema, request));
  server.get("/v1", (schema, request) => healthCheck(schema, request));
  server.get("*", () => NOT_FOUND());
  server.post("/v1/connections", (schema, request) => createConnection(schema, request));
  server.post("/v1/schedules", (schema, request) => createSchedule(schema, request));
  server.post("/v1/send", (schema, request) => send(schema, request));
  server.post("/v1/query", (schema, request) => simulateQuery1(schema, request));
  server.put("*", () => NOT_FOUND());
  server.delete("*", () => NOT_FOUND());
};