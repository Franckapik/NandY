// Reducer

let carnet = {
items : []
};

export default function profileReducer(state = carnet, action) {
  switch (action.type) {
    case "ADD MESH":
      return { ...state, items : [...state.items, action.item]};
    case "UPDATE MESH":
      return { ...state,
        items : state.items.map(item => {
          if (item.id === action.item.id) {
            return action.item;
          }
          return item ;
        })
      };
    case "DELETE MESH":
        return { 
          ...state, 
          items : [  
            ...state.items.slice(action.index-1, action.index)
          ]
        };
    case "USE MESH":
      return { ...state, items : [...state.items, action.item]};
    default:
      return state;
  }
}
