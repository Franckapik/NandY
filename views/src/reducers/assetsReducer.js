// Reducer

let initialState = {
msg : [],
idea : [],
msgId : 0,
ideaId : 0,
crates : [],
panneauInfos : 'Nature and you, Le WebDoc qui vous met sur le Cube !'
};

export default function assetsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD MSG":
      return { ...state, msg : [...state.msg, action.msgAdded] };
    case "ADD IDEA":
      return { ...state, idea : [...state.idea, action.ideaAdded] };
      case "ADD INFO":
        return { ...state, panneauInfos : action.infoAdded };
    case "CHANGE ID MSG":
      return { ...state, msgId : action.msgId };
    case "CHANGE ID IDEA":
      return { ...state, ideaId : action.ideaId };
    case "ADD CRATE":
      return { ...state, crates : [...state.crates, action.crate]};
    default:
      return state;
  }
}
