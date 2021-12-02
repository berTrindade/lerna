import axios from "axios";
import {
  API_BASE_URL,
  deadline as deadlineUrl,
  ENDPOINTS_BASE_URL,
  pro
} from "../utils/constants/apiRoutes";

const load = (deadlineId, loggedUserId) =>
  axios.get(`${ENDPOINTS_BASE_URL}${pro.ENDPOINTS_URL}${pro.LOAD_DEADLINE}`, {
    params: { deadlineId, loggedUserId }
  });

const save = deadlineParam =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${pro.ENDPOINTS_URL}${pro.SAVE_DEADLINE}`,
    deadlineParam
  );

const deleteDeadline = (deadlineId, userId) =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${pro.ENDPOINTS_URL}${pro.DELETE_DEADLINE}`,
    {},
    {
      params: { deadlineId, userId }
    }
  );

const addTag = (id, tagId, userId) =>
  axios.post(
    `${API_BASE_URL}${deadlineUrl.BASE_URL}${deadlineUrl.TAG}`,
    {},
    {
      pathParams: { id, tagId, userId }
    }
  );

const removeTag = (id, tagId, userId) =>
  axios.delete(`${API_BASE_URL}${deadlineUrl.BASE_URL}${deadlineUrl.TAG}`, {
    pathParams: { id, tagId, userId }
  });

const changeResponsible = (id, responsibleId, userId) =>
  axios.put(
    `${API_BASE_URL}${deadlineUrl.BASE_URL}${deadlineUrl.CHANGE_RESPONSIBLE}`,
    { id, responsibleId, userId }
  );

const loadDocuments = (id, userId) =>
  axios.get(`${API_BASE_URL}${deadlineUrl.BASE_URL}${deadlineUrl.DOCUMENTS}`, {
    pathParams: { id, userId }
  });
const cancel = ({ id: deadlineId, reason, userId }) =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${pro.ENDPOINTS_URL}${pro.CHANGE_DEADLINE_STATUS}`,
    { deadlineId, reason, userId, status: "CANCELED" }
  );

const setDone = ({ id: deadlineId, reason, userId }) =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${pro.ENDPOINTS_URL}${pro.CHANGE_DEADLINE_STATUS}`,
    { deadlineId, reason, userId, status: "DONE" }
  );

const setInProgress = ({ id: deadlineId, userId }) =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${pro.ENDPOINTS_URL}${pro.CHANGE_DEADLINE_STATUS}`,
    { deadlineId, userId, status: "IN_PROGRESS" }
  );

export default {
  load,
  save,
  deleteDeadline,
  addTag,
  removeTag,
  changeResponsible,
  loadDocuments,
  cancel,
  setDone,
  setInProgress
};
