import axios from "axios";
import {
  ENDPOINTS_BASE_URL,
  historical,
  API_BASE_URL
} from "../utils/constants/apiRoutes";

const deleteHistorical = idHistorical =>
  axios.delete(`${API_BASE_URL}${historical.BASE_URL}/${idHistorical}`);

const load = (historicalId, fetchTags) =>
  axios.get(
    `${API_BASE_URL}${historical.BASE_URL}/${historicalId}/${historical.LEGACY}`,
    {
      params: { fetchTags }
    }
  );

const save = historicalData =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${historical.BASE_ENDPOINTS_URL}${historical.SAVE_URL}`,
    historicalData
  );

const addTag = (historyId, tagId, userId) =>
  axios.put(
    `${API_BASE_URL}${historical.BASE_URL}/${historyId}/user/${userId}/${historical.TAG_URL}/${tagId}`
  );

const removeTag = (historyId, tagId, userId) =>
  axios.delete(
    `${API_BASE_URL}${historical.BASE_URL}/${historyId}/user/${userId}/${historical.TAG_URL}/${tagId}`
  );

const changeResponsible = (id, responsibleId) =>
  axios.put(
    `${API_BASE_URL}${historical.BASE_URL}${historical.CHANGE_RESPONSIBLE}`,
    { id, responsibleId }
  );

const resume = (caseId, cursor, limit) =>
  axios.get(
    `${API_BASE_URL}${historical.BASE_URL}/${caseId}${historical.RESUME}`,
    {
      params: {
        cursor,
        limit
      }
    }
  );

const loadEvents = (historicalId, userId) =>
  axios.get(
    `${API_BASE_URL}${historical.BASE_URL}/${historicalId}${historical.EVENTS}${historical.USER}/${userId}`
  );

const deleteEvent = data =>
  axios.post(
    `${API_BASE_URL}${historical.BASE_URL}${historical.DELETE_EVENT}`,
    data
  );

const loadHistorical = historicalId =>
  axios.get(`${API_BASE_URL}${historical.BASE_URL}/${historicalId}`);

const getIncomingHistoricalWithEvents = (incomingHistoricalId, userId) =>
  axios.get(
    `${API_BASE_URL}${historical.BASE_URL}/${incomingHistoricalId}${historical.USER}/${userId}`
  );

const hasTreated = () =>
  axios.get(`${API_BASE_URL}${historical.BASE_URL}${historical.HAS_TREATED}`);

export default {
  deleteHistorical,
  load,
  save,
  addTag,
  removeTag,
  changeResponsible,
  resume,
  loadEvents,
  deleteEvent,
  loadHistorical,
  getIncomingHistoricalWithEvents,
  hasTreated
};
