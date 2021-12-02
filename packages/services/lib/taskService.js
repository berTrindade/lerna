import axios from "axios";
import {
  ENDPOINTS_BASE_URL,
  API_BASE_URL,
  workspace,
  tasks,
  recurrence as recurrenceAPI
} from "../utils/constants/apiRoutes";
import { handleRequestErrorViolations } from "../utils/handlers/responseErrorHandler";
import batchActionService from "./batchActionService";

const saveSingleTask = task =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${workspace.BASE_URL}${workspace.SAVE_TASK}`,
    task
  );

const updateAllTasks = entityDTO =>
  batchActionService.enqueueBatchActions({
    type: "TASK",
    subType: "RECURRENT_TASK_UPDATE",
    userId: entityDTO.idUser,
    limit: 30,
    query: JSON.stringify({
      recurrence: entityDTO.recurrenceId,
      userId: entityDTO.idUser,
      entityDTO
    })
  });

const updateRecurrentTask = ({ updateType, ...entityDTO }) => {
  switch (updateType) {
    case "SINGLE_EVENT":
      return saveSingleTask(entityDTO);
    case "ALL_EVENTS":
      return updateAllTasks(entityDTO);
    default:
      return Promise.reject();
  }
};

const saveRecurrentTask = ({ recurrence, ...entityDTO }) => {
  if (entityDTO.taskInfoDTO.taskId) return updateRecurrentTask(entityDTO);
  return axios.post(
    `${API_BASE_URL}${recurrenceAPI.BASE_URL}${recurrenceAPI.ENQUEUE}/TASK`,
    { ...recurrence, entityDTO: JSON.stringify(entityDTO) }
  );
};

const saveTask = task => {
  if (task.recurrence || task.recurrenceId) return saveRecurrentTask(task);
  return saveSingleTask(task);
};

const loadEditTask = (taskId, userId) =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${workspace.BASE_URL}${workspace.LOAD_EDIT_TASK}`,
    { taskId, userId }
  );

const deleteSingleTask = deleteTaskParams =>
  axios
    .post(
      `${ENDPOINTS_BASE_URL}${workspace.BASE_URL}${workspace.DELETE_TASK}`,
      deleteTaskParams
    )
    .catch(handleRequestErrorViolations);

const buildDeleteBatchTaskJson = (userId, recurrence, date) => ({
  type: "TASK",
  subType: "RECURRENT_TASK_EXCLUSION",
  limit: 30,
  userId,
  query: JSON.stringify({
    recurrence,
    userId,
    date
  })
});

const deleteFutureTasks = ({ userId, recurrence, date }) =>
  batchActionService.enqueueBatchActions(
    buildDeleteBatchTaskJson(userId, recurrence, date)
  );

const deleteAllTasks = ({ userId, recurrence }) =>
  batchActionService.enqueueBatchActions(
    buildDeleteBatchTaskJson(userId, recurrence)
  );

const deleteTask = ({ deleteMode, ...deleteTaskParams }) => {
  if (!deleteMode) return deleteSingleTask(deleteTaskParams);
  switch (deleteMode) {
    case "SINGLE_EVENT":
      return deleteSingleTask(deleteTaskParams);
    case "FUTURE_EVENTS":
      return deleteFutureTasks(deleteTaskParams);
    case "ALL_EVENTS":
      return deleteAllTasks(deleteTaskParams);
    default:
      return Promise.reject();
  }
};

const removeTag = (taskId, tagId, userId) =>
  axios.get(
    `${ENDPOINTS_BASE_URL}${workspace.BASE_URL}${workspace.REMOVE_TAG_FROM_TASK}`,
    { params: { taskId, tagId, userId } }
  );

const addTag = (taskId, tagId, loggedUserId) =>
  axios.get(
    `${ENDPOINTS_BASE_URL}${workspace.BASE_URL}${workspace.ADD_TAG_TO_TASK}`,
    { params: { taskId, tagId, loggedUserId } }
  );

const changeResponsible = (taskId, responsibleId, userId) =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${workspace.BASE_URL}${workspace.CHANGE_TASK_RESPONSIBLE}`,
    { taskId, responsibleId, userId }
  );

const loadComments = (taskId, showAll = false, hideAutomatic = false) =>
  axios.get(
    `${API_BASE_URL}${tasks.BASE_URL}/${taskId}${tasks.LOAD_COMMENTS}`,
    { params: { showAll, hideAutomatic } }
  );

const saveComment = params =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${workspace.BASE_URL}${workspace.SAVE_COMMENT}`,
    { ...params }
  );

const removeComment = (taskId, userId, commenthash) =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${workspace.BASE_URL}${workspace.REMOVE_COMMENT}`,
    { taskId, userId, commenthash }
  );

const changeTaskPriority = taskId =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${workspace.BASE_URL}${workspace.CHANGE_TASK_PRIORITY}`,
    {},
    { params: { taskId } }
  );
const setDone = ({ id: taskId, userId, version: taskVersion }) =>
  axios.get(
    `${ENDPOINTS_BASE_URL}${workspace.BASE_URL}${workspace.CHANGE_TASK_STATUS}`,
    { params: { taskId, userId, taskVersion, status: true } }
  );

const setInProgress = ({ id: taskId, userId, version: taskVersion }) =>
  axios.get(
    `${ENDPOINTS_BASE_URL}${workspace.BASE_URL}${workspace.CHANGE_TASK_STATUS}`,
    { params: { taskId, userId, taskVersion, status: false } }
  );

const changeTaskList = params =>
  axios.post(
    `${API_BASE_URL}${tasks.BASE_URL}${tasks.CHANGE_TASK_LIST}`,
    params
  );

const reschedule = task =>
  axios.put(`${API_BASE_URL}${tasks.BASE_URL}${tasks.RESCHEDULE}`, task);

const getTaskWithComments = (taskId, userId, bringAllComments = false) =>
  axios.post(
    `${ENDPOINTS_BASE_URL}${workspace.BASE_URL}${workspace.GET_TASK_WITH_COMMENTS}`,
    { taskId, userId, bringAllComments }
  );

const loadIdListByCase = caseId =>
  axios.get(`${API_BASE_URL}${tasks.BASE_URL}${tasks.LOAD_BY_CASE}/${caseId}`);

export default {
  saveTask,
  loadEditTask,
  deleteTask,
  removeTag,
  addTag,
  changeResponsible,
  loadComments,
  saveComment,
  removeComment,
  changeTaskPriority,
  setDone,
  setInProgress,
  changeTaskList,
  reschedule,
  getTaskWithComments,
  loadIdListByCase
};
