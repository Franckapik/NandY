import { createStore, action, computed } from 'easy-peasy';

const store = createStore({
  players : {0 : {
    x : 0,
    y : 0,
    score : 0,
    position : [0,0,0]
  }},
  movement : {
    up: false,
    down: false,
    left: false,
    right: false
  },
  currentId : 0,
  findInPlayers : computed(state => (name, id) => state.players[id][name]),
  score : computed(state => state.players[state.currentId]?.score ?? 0),
  nbPlayers : computed(state => Object.keys(state.players).length),
  isLoggedIn: computed(state => Object.keys(state.players).length > 1),
  updatePlayers : action(
    (state, payload) => {state.players = payload}
  ),
  /*listenPosition : action(
    (state, payload) => {
      state.players[payload[1]].position = payload[0]
      }
  ),*/
  updateData : action(
    (state, payload) => ({state: {...state, ...payload}})
  ),
  whoiam : action(
    (state, payload) => {state.currentId = payload}
  ),
  moveUP : action(
    (state, payload) => {state.movement[payload] = true}
  ),
  moveDOWN : action(
    (state, payload) => {state.movement[payload] = false}
  )
});

export default store;
