/* eslint-disable react/prop-types */
import React from "react";
import AppointmentCardForm from "../../containers/app/AppointmentModule/AppointmentCardForm";
import AppointmentEventCardCompleteContent from "../../containers/app/AppointmentModule/AppointmentEventCardContent/AppointmentEventCardCompleteContent";
import DeadlineCardForm from "../../containers/app/DeadlineModule/DeadlineCardForm";
import HearingCardForm from "../../containers/app/HearingModule/HearingCardForm/HearingCardForm";
import ProEventsDetails from "../../containers/app/ProEvents/ProEventsDetails";
// eslint-disable-next-line import/no-cycle
import StarterEventsDetails from "../../containers/app/StarterEvents/StarterEventsDetails";
import TaskCardForm from "../../containers/app/TaskModule/TaskCardForm";
import TaskEventCardCompleteContent from "../../containers/app/TaskModule/TaskEventCardContent/TaskEventCardCompletContent";
import HistoricalTreatmentCard from "../../containers/app/HistoricalModule/HistoricalTreatmentCard";

export const eventComponentHelper = {
  HEARING: {
    formComponent: props => (
      <HearingCardForm data-test="hearing-card-form" {...props} />
    ),
    detailsComponent: props => (
      <ProEventsDetails data-test="pro-events-details" {...props} />
    )
  },
  DEADLINE: {
    formComponent: props => (
      <DeadlineCardForm data-test="deadline-card-form" {...props} />
    ),
    detailsComponent: props => (
      <ProEventsDetails data-test="pro-events-details" {...props} />
    )
  },
  TASK: {
    formComponent: props => (
      <TaskCardForm data-test="task-card-form" {...props} />
    ),
    detailsComponent: ({ onFinish, ...props }) => (
      <StarterEventsDetails
        data-test="starter-events-details"
        {...props}
        onEdit={onFinish}
      />
    ),
    contentComponent: props => <TaskEventCardCompleteContent {...props} />
  },
  APPOINTMENT: {
    formComponent: props => <AppointmentCardForm {...props} />,
    detailsComponent: ({ onFinish, ...props }) => (
      <StarterEventsDetails {...props} onEdit={onFinish} />
    ),
    contentComponent: props => (
      <AppointmentEventCardCompleteContent {...props} />
    )
  },
  HISTORICAL: {
    formComponent: props => <HistoricalTreatmentCard {...props} />,
    detailsComponent: null,
    contentComponent: null
  }
};
/* eslint-enable react/prop-types */
