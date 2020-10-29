import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  createContext
} from 'react'
import { useFrame } from 'react-three-fiber'
import { GameEntity, EntityManager, SeekBehavior, FollowPathBehavior, Path, Vector3 } from 'yuka'
import useStore from '../store/zstore'
import points from '../components/Path'

const context = createContext()

export function Manager({ children }) {
  const [mgr] = useState(() => new EntityManager(), [])
  const [path] = useState(() => new Path(), [])
  path.loop = true;
  points.map((v,i) => {
    path.add(new Vector3(v[0],v[2],v[1]))
  })
  useEffect(() => {
    const vehicle = mgr.entities.find((item) => item.name === 'Vehicle')
    const follow = new FollowPathBehavior(path, 0.5)
    vehicle.steering.add(follow)

  }, [mgr.entities])

  useFrame((state, delta) => mgr.update(delta))

  return <context.Provider value={mgr}>{children}</context.Provider>
}

export function useYuka({
  type = GameEntity,
  position = [0, 0, 0],
  name = 'unnamed'
}) {
  // This hook makes set-up re-usable
  const ref = useRef()
  const mgr = useContext(context)
  const [entity] = useState(() => new type())
  useEffect(() => {
    entity.position.set(...position)
    entity.name = name //props.name
    entity.setRenderComponent(ref, (entity) => {
      ref.current.position.copy(entity.position) //apply entity position to ref
      ref.current.quaternion.copy(entity.rotation)//apply entity rotation to ref
    })
    mgr.add(entity)
    return () => mgr.remove(entity)
  }, [])

  
  return [ref, entity]
}
