import { fetchTaskListsAction } from "../../actions/TaskListActions";
import reduxStoreHelper from "./reduxStoreHelper";
import taskListService from "../../services/taskListService";
import { getUserIdState } from "../../selectors/userInfoSelectors";

const loadTaskListsRedux = (id) => {
  const userId = id !== undefined ? id : getUserIdState(reduxStoreHelper.getState());
  taskListService
    .listTaskListsByUser(userId)
    .then(({ data: { items } }) =>
      reduxStoreHelper.dispatch(fetchTaskListsAction, items)
    );
};

export default { loadTaskListsRedux };
