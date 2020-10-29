import React, { useRef, useEffect, useState, useContext, createContext } from 'react'
import { useFrame } from 'react-three-fiber'
import { GameEntity, EntityManager, SeekBehavior } from 'yuka'
import useStore from '../store/zstore'
  
  const context = createContext()
  
  function generateTarget(target) {
    const radius = 2
    const phi = Math.acos(2 * Math.random() - 1)
    const theta = Math.random() * Math.PI * 2
  
    if (target) {
      target.position.fromSpherical(radius, phi, theta)
    }
  
    setTimeout(() => generateTarget(target), 3000)
  }
  
  export function Manager({ children }) {
    const [mgr] = useState(() => new EntityManager(), [])
    useStore.setState({ entitymanager: new EntityManager() })
    useEffect(() => {
      const vehicle = mgr.entities.find((item) => item.name === 'Vehicle')
      const target = mgr.entities.find((item) => item.name === 'Target')
      const seekBehavior = new SeekBehavior(target.position)
      vehicle.steering.add(seekBehavior)
  
      generateTarget(target)
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
      entity.name = name
      entity.setRenderComponent(ref, (entity) => {
        ref.current.position.copy(entity.position)
        ref.current.quaternion.copy(entity.rotation)
      })
      mgr.add(entity)
      return () => mgr.remove(entity)
    }, [])
    return [ref, entity]
  }
  