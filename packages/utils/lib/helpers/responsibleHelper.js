import { fetchResponsiblesAction } from "../../actions/ResponsiblesActions";
import {
  getTenantIdState,
  getUserIdState
} from "../../selectors/userInfoSelectors";
import {
  getResponsiblesState,
  hasResponsiblesState
} from "../../selectors/responsiblesSelectors";
import responsibleService from "../../services/responsibleService";
import { handleRequestErrorViolations } from "../handlers/responseErrorHandler";
import reduxStoreHelper from "./reduxStoreHelper";

const changeResponsible = (obj, responsible, service) => {
  const userId = getUserIdState(reduxStoreHelper.getState());

  return service
    .changeResponsible(obj.id, responsible.id, userId)
    .then(({ data }) => ({
      ...obj,
      responsible: responsible.id,
      responsibleId: responsible.id,
      responsibleName: responsible.name,
      version: data.version
    }))
    .catch(handleRequestErrorViolations);
};

const loadResponsiblesToRedux = () => {
  const tenantId = getTenantIdState(reduxStoreHelper.getState());
  const hasResponsibles = hasResponsiblesState(reduxStoreHelper.getState());

  if (!hasResponsibles) {
    responsibleService
      .getActiveResponsibles(tenantId)
      .then(({ data }) =>
        reduxStoreHelper.dispatch(fetchResponsiblesAction, data.items)
      );
  }
};

const getResponsibleById = id => {
  const selectedResponsible = getResponsiblesState(
    reduxStoreHelper.getState()
  ).find(responsible => responsible.id === id);
  return selectedResponsible || {};
};

export default {
  changeResponsible,
  loadResponsiblesToRedux,
  getResponsibleById
};
