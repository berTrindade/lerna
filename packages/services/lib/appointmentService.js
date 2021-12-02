import axios from "axios";
import moment from "moment";
import {
  ENDPOINTS_BASE_URL,
  API_BASE_URL,
  calendar,
  appointment as appointmentApi,
  recurrence as recurrenceAPI
} from "../utils/constants/apiRoutes";
import batchActionService from "./batchActionService";

const load = (appointmentId, userId, fetchTags) =>
  axios.get(
    `${ENDPOINTS_BASE_URL}${calendar.ENDPOINTS_URL}${
      calendar.LOAD_APPOINTMENT
    }`,
    { params: { appointmentId, userId, fetchTags } }
  );

const saveSingleAppointment = appointment =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${calendar.ENDPOINTS_URL}${
      calendar.SAVE_APPOINTMENT
    }`,
    appointment
  );

const updateAllAppointments = entityDTO =>
  batchActionService.enqueueBatchActions({
    type: "APPOINTMENT",
    subType: "RECURRENT_APPOINTMENT_UPDATE",
    userId: entityDTO.userId,
    limit: 30,
    query: JSON.stringify({
      recurrence: entityDTO.recurrenceId,
      userId: entityDTO.userId,
      entityDTO
    })
  });

const updateRecurrentAppointment = ({ updateType, ...entityDTO }) => {
  switch (updateType) {
    case "SINGLE_EVENT":
      return saveSingleAppointment(entityDTO);
    case "ALL_EVENTS":
      return updateAllAppointments(entityDTO);
    default:
      return Promise.reject();
  }
};

const saveRecurrentAppointment = ({ recurrence, ...entityDTO }) => {
  if (entityDTO.recurrenceId) return updateRecurrentAppointment(entityDTO);
  return axios.post(
    `${API_BASE_URL}${recurrenceAPI.BASE_URL}${
      recurrenceAPI.ENQUEUE
    }/APPOINTMENT`,
    { ...recurrence, entityDTO: JSON.stringify(entityDTO) }
  );
};

const save = appointment => {
  if (appointment.recurrence || appointment.recurrenceId)
    return saveRecurrentAppointment(appointment);
  return saveSingleAppointment(appointment);
};

const deleteSingleAppointment = appointmentId =>
  axios.get(
    `${ENDPOINTS_BASE_URL}${calendar.ENDPOINTS_URL}${
      calendar.DELETE_APPOINTMENT
    }`,
    { params: { appointmentId } }
  );

const buildDeleteBatchAppointmentJson = (userId, recurrence, date) => ({
  type: "APPOINTMENT",
  subType: "RECURRENT_APPOINTMENT_EXCLUSION",
  limit: 30,
  userId,
  query: JSON.stringify({
    recurrence,
    userId,
    date
  })
});

const deleteFutureAppointments = ({ userId, recurrence, date }) =>
  batchActionService.enqueueBatchActions(
    buildDeleteBatchAppointmentJson(
      userId,
      recurrence,
      moment(date, "DD/MM/YYYY")
    )
  );

const deleteAllAppointments = ({ userId, recurrence }) =>
  batchActionService.enqueueBatchActions(
    buildDeleteBatchAppointmentJson(userId, recurrence)
  );

const deleteAppointment = ({ event, userId, deleteMode }) => {
  if (!deleteMode) return deleteSingleAppointment(event.id);
  switch (deleteMode) {
    case "SINGLE_EVENT":
      return deleteSingleAppointment(event.id);
    case "FUTURE_EVENTS":
      return deleteFutureAppointments({ ...event, userId });
    case "ALL_EVENTS":
      return deleteAllAppointments({ ...event, userId });
    default:
      return Promise.reject();
  }
};

const removeTag = (appointmentId, tagId) =>
  axios.get(
    `${ENDPOINTS_BASE_URL}${calendar.ENDPOINTS_URL}${
      calendar.REMOVE_TAG_FROM_APPOINTMENT
    }`,
    { params: { appointmentId, tagId } }
  );

const addTag = (appointmentId, tagId, loggedUserId) =>
  axios.get(
    `${ENDPOINTS_BASE_URL}${calendar.ENDPOINTS_URL}${
      calendar.ADD_TAG_TO_APPOINTMENT
    }`,
    { params: { appointmentId, tagId, loggedUserId } }
  );

const changeResponsible = (id, responsibleId, userId) =>
  axios.put(
    `${API_BASE_URL}${appointmentApi.BASE_URL}${
      appointmentApi.CHANGE_RESPONSIBLE
    }`,
    { id, responsibleId, userId }
  );

const cancel = ({ id: appointmentId, reason, userId }) =>
  axios.put(
    `${API_BASE_URL}${appointmentApi.BASE_URL}${appointmentApi.CHANGE_STATUS}`,
    { appointmentId, reason, userId, status: "CANCELED" }
  );

const setDone = ({ id: appointmentId, reason, userId }) =>
  axios.put(
    `${API_BASE_URL}${appointmentApi.BASE_URL}${appointmentApi.CHANGE_STATUS}`,
    { appointmentId, reason, userId, status: "DONE" }
  );

const setInProgress = ({ id: appointmentId, userId }) =>
  axios.put(
    `${API_BASE_URL}${appointmentApi.BASE_URL}${appointmentApi.CHANGE_STATUS}`,
    { appointmentId, userId, status: "IN_PROGRESS" }
  );

const reschedule = appointment =>
  axios.put(
    `${API_BASE_URL}${appointmentApi.BASE_URL}${appointmentApi.RESCHEDULE}`,
    appointment
  );

const hasCustomerNotification = id =>
  axios.get(
    `${API_BASE_URL}${appointmentApi.BASE_URL}/${id}${
      appointmentApi.HAS_CUSTOMER_NOTIFICATION
    }`
  );

const saveRescheduledAppointmentReminder = (appointmentId, timeUnit, numTime) =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${calendar.ENDPOINTS_URL}${
      calendar.SAVE_RESCHEDULE_APPOINTMENT_REMINDER
    }`,
    {},
    { params: { appointmentId, timeUnit, numTime } }
  );

const saveRescheduledAppointment = params =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${calendar.ENDPOINTS_URL}${
      calendar.SAVE_RESCHEDULE_APPOINTMENT
    }`,
    params
  );

export default {
  load,
  save,
  deleteAppointment,
  removeTag,
  addTag,
  changeResponsible,
  cancel,
  setDone,
  setInProgress,
  reschedule,
  hasCustomerNotification,
  saveRescheduledAppointmentReminder,
  saveRescheduledAppointment
};
