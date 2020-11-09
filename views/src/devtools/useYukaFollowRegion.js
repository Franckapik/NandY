//https://github.com/Mugen87/yuka/blob/master/examples/navigation/navmesh/index.html#L122
//https://github.com/Mugen87/yuka/blob/master/examples/navigation/navmeshPerformance/index.html

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import { EntityManager, FollowPathBehavior, GameEntity, NavMesh, NavMeshLoader } from 'yuka';
  
  const context = createContext()

  function findPathTo(target, vehicle, nav) {
    let path = nav.findPath( vehicle.position, target.position );
    if(nav.regions.lenght) { // ne fonctionne pas encore ici
      const newTarget = vehicle.navMesh.getRandomRegion()
      path = nav.findPath( vehicle.position, newTarget.centroid ); //troisieme argument pour une fonction onPathFound(changer de cible)
    }

    const followPathBehavior = vehicle.steering.behaviors[ 0 ];
		followPathBehavior.active = true;
    followPathBehavior.path.clear();
    
    for ( const point of path ) {
      followPathBehavior.path.add( point );
    }

  }

  export function useNavLoader(url) {
    const [nav, setNav] = React.useState(new NavMesh());
    const loader = new NavMeshLoader();

    useEffect(() => {
      async function fetchData() {
        const newNav = await loader.load(url);
        setNav(newNav);  
      }
      fetchData();
    }, [url, loader]);

    return nav;
  }
    
  export function Manager({ children }) {
    const [mgr] = useState(() => new EntityManager(), [])
    const navi = useNavLoader("/navmesh_applied.glb");


    useEffect(() => {

      if (!navi) {
        return;
      }

      const vehicle = mgr.entities.find((item) => item.name === 'Vehicle')
      const target = mgr.entities.find((item) => item.name === 'Target')
      window.navi = navi;
      const followPathBehavior = new FollowPathBehavior() 
      followPathBehavior.nextWaypointDistance = 0.5;
      followPathBehavior.active = false;
      
      vehicle.navMesh = navi
      vehicle.steering.add(followPathBehavior)
      vehicle.maxSpeed= 0.5
      vehicle.maxForce= 10
      findPathTo(target, vehicle, navi)

    }, [mgr.entities, navi])
  
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
    }, [entity, mgr, name, position])
    return [ref, entity]
  }
  