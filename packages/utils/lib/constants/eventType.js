import appointmentService from "../../services/appointmentService";
import deadlineService from "../../services/deadlineService";
import hearingService from "../../services/hearingService";
import historicalService from "../../services/historicalService";
import taskService from "../../services/taskService";

export const HEARING = "HEARING";
export const DEADLINE = "DEADLINE";
export const DEADLINE_COUNTERPART = "DEADLINE_COUNTERPART";
export const TASK = "TASK";
export const APPOINTMENT = "APPOINTMENT";
export const EVENT = "EVENT";
export const HISTORICAL = "HISTORICAL";

const appointment = {
  name: "Evento",
  power: "event",
  article: "o",
  demonstrativeArticle: "e",
  status: "success",
  icon: "fa-calendar-o",
  serviceName: appointmentService,
  services: {
    delete: (event, userId, deleteMode) =>
      appointmentService.deleteAppointment({ event, userId, deleteMode }),
    loadDetails: (id, userId) => appointmentService.load(id, userId, true),
    ...appointmentService
  }
};

export const eventTypeDetails = {
  HEARING: {
    name: "Audiência",
    power: "hearing",
    article: "a",
    demonstrativeArticle: "a",
    status: "warning",
    icon: "fa-gavel",
    serviceName: hearingService,
    services: {
      ...hearingService,
      delete: hearingService.deleteHearing
    },
    idProperty: "hearingId"
  },
  DEADLINE: {
    name: "Prazo",
    power: "deadline",
    article: "o",
    demonstrativeArticle: "e",
    status: "danger",
    icon: "fa-hourglass-start",
    serviceName: deadlineService,
    services: {
      ...deadlineService,
      delete: deadlineService.deleteDeadline
    },
    idProperty: "deadlineId"
  },
  TASK: {
    name: "Tarefa",
    power: "task",
    article: "a",
    demonstrativeArticle: "a",
    status: "primary",
    icon: "fa-check-circle",
    serviceName: taskService,
    services: {
      delete: (event, userId, deleteMode) =>
        taskService.deleteTask({
          taskId: event.id,
          taskVersion: event.version,
          date: event.dueDate,
          recurrence: event.recurrence,
          userId,
          deleteMode
        }),
      load: taskService.loadEditTask,
      loadDetails: taskService.getTaskWithComments
    }
  },
  APPOINTMENT: appointment,
  EVENT: appointment,
  HISTORICAL: {
    name: "Histórico manual",
    article: "o",
    status: "gray",
    serviceName: historicalService
  },
  PRE_DEFINED_ACTIVITIES: {
    name: "Atividades predefinidas"
  }
};
