import { draco } from "drei"
import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useBox } from 'use-cannon'
import { createConvexRegionHelper } from '../../devtools/createConvexRegionHelper.js'
import { useNavLoader } from "../../devtools/useYukaFollowRegion"



export function Passive(props) {
  const { nodes } = useLoader(GLTFLoader, '/passive.glb', draco())
  const first = Object.keys(nodes)
  return (
    Object.entries(nodes).map(
      ([name, obj]) => {
        let bound = [2,2,2];
        if(obj.type==='Group' && obj.name !== first[0]) {
          return (<GroupMesh mass={0} key={name} position={obj.getWorldPosition()} {...obj} />)
        }

        else if(obj.type==='Mesh') { //Mesh seul
          if(obj.parent.name===first[0]) {
            obj.geometry.computeBoundingBox()
            const b = obj.geometry.boundingBox;
            bound = [b.max.x, b.max.y, b.max.z]
            return <ObjMesh mass={0} display={true} key={name} bound={bound} {...obj} position={obj.getWorldPosition()}  />  
          }
        }
        else {
//do nothing
        }  
        return null       //a verifier si erreur
    }
  )
  )
}

export function Active(props) {
  const { nodes } = useLoader(GLTFLoader, '/active.glb', draco())
  const first = Object.keys(nodes)
  return (
    Object.entries(nodes).map(
      ([name, obj]) => {
        let bound = [2,2,2];

        if(obj.type==='Group' && obj.name !== first[0]) {
          return (<GroupMesh mass={10} key={name} position={obj.getWorldPosition()} {...obj} />)
        }

        if(obj.type==='Mesh') { //Mesh seul
          if(obj.parent.name===first[0]) {
            obj.geometry.computeBoundingBox()
            const b = obj.geometry.boundingBox;
            bound = [b.max.x, b.max.y, b.max.z]
            return <ObjMesh mass={10} display={true} key={name} bound={bound} {...obj} position={obj.getWorldPosition()}  />  
          }
        }
        return null         
    }
  )
  )
}

export function CollisionBlocks(props) {
  const { nodes } = useLoader(GLTFLoader, '/collisionBlocks.glb', draco())
  return (
    Object.entries(nodes).map(
      ([name, obj]) => {
        let bound = [2,2,2];

        if(obj.geometry) {
          obj.geometry.computeBoundingBox()
          const b = obj.geometry.boundingBox;
          bound = [b.max.x, b.max.y, b.max.z]
          //recuperer ici les dimensions de la Box3 pour les appliquer en arguments sur ObjMesh. args sont des données absolues et non relative.
        } 
        return <ObjMesh mass={0} display={false} key={name} bound={bound} {...obj} position={obj.getWorldPosition()}  />

    }
  )
  )
}

export function Traversant(props) {
  const { nodes } = useLoader(GLTFLoader, '/traversant.glb', draco())

  return (
    Object.entries(nodes).map(
      ([name, obj]) => {
        return (
          <mesh key={name} material={obj.material} geometry={obj.geometry} position={obj.getWorldPosition()} />
      )

    }
  )
  )
}
export function NavMesh(props) {
  const nav = useNavLoader('/navmesh_applied.glb')
  const {geometry, material} = createConvexRegionHelper(nav)

  return (
    <mesh material={material} geometry={geometry} position={[0,1,1]} />
  )
}

const ObjMesh = ({position,bound,display,mass,...props}) => {

  const v = position;

  const [cube] = useBox(() => ({
    mass: mass,
    args: bound,
    position: [v.x,v.y,v.z],
  }));

  
  return (
      <mesh ref={cube} visible={display} material={props.material} geometry={props.geometry} onClick={()=> console.log(props.name)} />
  )
}

const GroupMesh = ({position,children,mass,...props}) => {

  const v = position;
  
const [cube] = useBox(() => ({
  mass: mass,
  args: [1,1,1], //trouver le moyen de regler le bound
  position: [v.x,v.y,v.z],
}));

  return (
    <group ref={cube} >
{          Object.entries(children).map(
      ([name, obj]) => {
        return (
          <mesh key={name} material={obj.material} geometry={obj.geometry} />
      )
    }
  )}
    </group>

  )

}




