const stateAxios = {};

export function newStateAxios(state = stateAxios, action) {
  switch (action.type) {
    case "AXIOS_CONNECT":
      return action.payload;
    default:
      return state;
  }
}

export default newStateAxios;
