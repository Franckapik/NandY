let keyboard = {
  down : false,
  up : false,
  right : false,
  left : false,
  force : 0,
  rotation : 0,
  braque : 5
}

export default function keyReducer (state = keyboard, action) {
    switch (action.type) {
    case 'KEYARROWDOWN' :
      return {...state, down : true, force : 5}
    case 'KEYARROWUP' :
      return {...state, up : true, force : -5}
    case 'KEYARROWLEFT' :
      return {...state, left : true, rotation : -3}
    case 'KEYARROWRIGHT' :
      return {...state, right : true, rotation : 3}
    case 'KEYUP' :
      return keyboard
      case "DAT UPDATE":
        return {...action.newData.keyboard };
    default:
      return state
    }
  }
