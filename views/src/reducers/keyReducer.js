let keys = {
  down : false,
  up : false,
  left : false,
  right : false
}

export default function keyReducer (state = keys, action) {
    switch (action.type) {
    case 'KEYARROWDOWN' :
      return {...state, down : true}
    case 'KEYARROWUP' :
      return {...state, up : true}
    case 'KEYARROWLEFT' :
      return {...state, left : true}
    case 'KEYARROWRIGHT' :
      return {...state, right : true}
    case 'KEYUP' :
      return keys
      case "DAT UPDATE":
        return {...action.newData.keys };
    default:
      return state
    }
  }
