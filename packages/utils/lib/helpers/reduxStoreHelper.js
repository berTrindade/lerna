class ReduxStoreHelper {
  constructor(store) {
    this.store = store;
  }

  getStore() {
    return this.store;
  }

  dispatch(action, payload) {
    return action(payload)(this.store.dispatch);
  }

  getState() {
    return this.store.getState();
  }

  setStore(store) {
    this.store = store;
  }
}

const reduxStoreHelper = new ReduxStoreHelper();
export default reduxStoreHelper;
