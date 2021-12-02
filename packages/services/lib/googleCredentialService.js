import axios from "axios";
import { fetchGoogleCredentialAction } from "../actions/googleCredentialActions";
import { getGoogleCredentialState } from "../selectors/googleCredentialSelectors";
import {
  API_BASE_URL,
  googleCredentialUrl
} from "../utils/constants/apiRoutes";
import { isEmpty } from "../utils/helpers/objectHelper";
import reduxStoreHelper from "../utils/helpers/reduxStoreHelper";

const getCredential = () =>
  axios.get(`${API_BASE_URL}${googleCredentialUrl.GET_GOOGLE_CREDENTIAL_URL}`);

const loadCredentialToRedux = () => {
  if (isEmpty(getGoogleCredentialState(reduxStoreHelper.getState()))) {
    getCredential().then(({ data }) => {
      reduxStoreHelper.dispatch(
        fetchGoogleCredentialAction,
        JSON.parse(atob(data))
      );
    });
  }
};

const revokeCredential = token =>
  axios.get(`https://accounts.google.com/o/oauth2/revoke?token=${token}`);

export default { getCredential, loadCredentialToRedux, revokeCredential };
