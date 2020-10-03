import create from 'zustand'

const useStore = create((set) => ({
    force: 0,
    rotation : 0,
    position: [0,0,0],
    velocity: [0,0,0],
    content: "msg",
    message: [],
    idea: [],
    info : "En avant Guimgamp",
    crates : [],
    popid : 0,
    popOpen : false,
    target: [0,0,0],
    orbit: false,
    videoPos : [0,0,0],
    inc: () => set((state) => ({ count: state.count + 1 })),
    changeContent: (newContent) => set(() => ({content: newContent})),
    changeForce: (newForce) => set(() => ({force: newForce})),
    changeRotation: (newRotation) => set(() => ({rotation: newRotation})),
    changePosition: (newPosition) => set(() => ({position: newPosition})),
    changeVelocity: (newVelocity) => set(() => ({velocity: newVelocity})),
    changeId: (newId) => set(() => ({popid: newId})),
    addMsg: (newMsg) => set((state) => ({message: [...state.message, newMsg]})),
    addIdea: (newIdea) => set((state) => ({idea: [...state.idea, newIdea]})),
    changeInfo: (newInfo) => set(() => ({info: newInfo})),
    togglePop: () => set((state) => ({popOpen: !state.popOpen})),
    addCrate: (newCrate) => set((state) => ({crates: [...state.crates, newCrate]})),
    setVideoPos: (newPos) => set(() => ({videoPos: newPos })),
  }))

export default useStore;