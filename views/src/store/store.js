import create from 'zustand'

const [useStore] = create(set => ({
  count: 2,
  x: 1,
  y: 1,
  inc: () => set(state => ({ count: state.count + 1 })),
  dec: () => set(state => ({ count: state.count - 1 })),
  forw: () => set(state => ({ x: state.x + 0.1 })),
  backw: () => set(state => ({ x: state.x - 0.1 })),
  left: () => set(state => ({ y: state.y - 0.1 })),
  right: () => set(state => ({ y: state.y + 0.1 })),
}))

export default useStore
