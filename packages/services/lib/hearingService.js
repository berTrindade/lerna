import axios from "axios";
import {
  ENDPOINTS_BASE_URL,
  pro,
  API_BASE_URL,
  hearing as hearingUrl
} from "../utils/constants/apiRoutes";

const load = (hearingId, loggedUserId) =>
  axios.get(`${ENDPOINTS_BASE_URL}${pro.ENDPOINTS_URL}${pro.LOAD_HEARING}`, {
    params: { hearingId, loggedUserId }
  });

const save = hearing =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${pro.ENDPOINTS_URL}${pro.SAVE_HEARING}`,
    hearing
  );

const deleteHearing = (hearingId, userId) =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${pro.ENDPOINTS_URL}${pro.DELETE_HEARING}`,
    {},
    {
      params: { hearingId, userId }
    }
  );

const addTag = (id, tagId, userId) =>
  axios.post(
    `${API_BASE_URL}${hearingUrl.BASE_URL}${hearingUrl.TAG}`,
    {},
    {
      pathParams: { id, tagId, userId }
    }
  );

const removeTag = (id, tagId, userId) =>
  axios.delete(`${API_BASE_URL}${hearingUrl.BASE_URL}${hearingUrl.TAG}`, {
    pathParams: { id, tagId, userId }
  });

const changeResponsible = (id, responsibleId, userId) =>
  axios.put(
    `${API_BASE_URL}${hearingUrl.BASE_URL}${hearingUrl.CHANGE_RESPONSIBLE}`,
    {
      id,
      responsibleId,
      userId
    }
  );

const loadDocuments = (id, userId) =>
  axios.get(`${API_BASE_URL}${hearingUrl.BASE_URL}${hearingUrl.DOCUMENTS}`, {
    pathParams: { id, userId }
  });

const cancel = ({ id: hearingId, reason, userId }) =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${pro.ENDPOINTS_URL}${pro.CHANGE_HEARING_STATUS}`,
    { hearingId, reason, userId, status: "CANCELED" }
  );

const setDone = ({ id: hearingId, reason, userId }) =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${pro.ENDPOINTS_URL}${pro.CHANGE_HEARING_STATUS}`,
    { hearingId, reason, userId, status: "DONE" }
  );

const setInProgress = ({ id: hearingId, userId }) =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${pro.ENDPOINTS_URL}${pro.CHANGE_HEARING_STATUS}`,
    { hearingId, userId, status: "IN_PROGRESS" }
  );

export default {
  load,
  save,
  deleteHearing,
  addTag,
  removeTag,
  changeResponsible,
  loadDocuments,
  cancel,
  setDone,
  setInProgress
};
