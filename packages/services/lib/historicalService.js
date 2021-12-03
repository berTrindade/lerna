
import { API_BASE_URL, historical } from "../utils/apiRoutes";
import api from "./api";

const token = "0sXlxlktqwIgS-ccOobWUQ"

const config = {
  headers: {
    accept: 'application/json, text/plain, */*',
    authorization: `Bearer ${token}`,
    'content-type': 'application/json',
  },
};

export const resume = () =>
  api.post(
    `${API_BASE_URL}${historical.BASE_URL}${historical.HISTORICAL_LIST_QUERY}`,
    {
      beginDate: null,
      caseId: "5275011198353408",
      currentUserId: "6219829353250816",
      cursor: "ClUKEQoEZGF0ZRIJCICY2armgOwCEjxqEHN-YXN0cmVhc29mdHdhcmVyFwsSCkhpc3RvcmljYWwYgICopfulpgoMogEOYmVybmFyZG8uYWJyZXUYACAB",
      description: null,
      endDate: null,
      instance: null,
      limit: 30,
      order: "-date",
      tagIds: [],
      type: "ALL",
    }, 
    config
  );
