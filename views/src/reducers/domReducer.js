// Reducer

let initialState = {
isOpen : false,
content : 'autre'
};

export default function positionReducer(state = initialState, action) {
  switch (action.type) {
    case "OPEN MODAL":
      return { ...state, isOpen: true };
    case "CLOSE MODAL":
      return { ...state, isOpen: false };
    case "CHANGE CONTENT":
      return { ...state, content: action.content };

    default:
      return state;
  }
}
