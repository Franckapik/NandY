import { createStore, action, computed } from 'easy-peasy';

const store = createStore({
  players : {},
  movement : {
    up: false,
    down: false,
    left: false,
    right: false
  },
  currentId : 0,
  score : computed(state => state.players[state.currentId]?.score ?? 0),
  nbPlayers : computed(state => Object.keys(state.players).length),
  updatePlayers : action(
    (state, payload) => {state.players = payload}
  ),
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
