import * as THREE from "three";
import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";
import { useFrame, useLoader } from "react-three-fiber";
import { BoxHelper } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  GameEntity,
  EntityManager,
  SeekBehavior,
  WanderBehavior,
  NavMeshLoader,
  NavMesh,
  Vector3,
} from "yuka";
import useStore from "../store/zstore";
import { createConvexRegionHelper } from "./createConvexRegionHelper.js";

const context = createContext();

function generateTarget(target) {
  const radius = 2;
  const phi = Math.acos(2 * Math.random() - 1);
  const theta = Math.random() * Math.PI * 2;

  if (target) {
    target.position.fromSpherical(radius, phi, theta);
  }

  setTimeout(() => generateTarget(target), 3000);
}

export function useNav(url) {
  const loader = new NavMeshLoader();
  return loader.load(url).then((navMesh) => {
    const { geometry, material } = createConvexRegionHelper(navMesh);
    return [navMesh, geometry, material];
  });
}

export function useNavLoader(url) {
  const [nav, setNav] = React.useState(new NavMesh());
  const [geo, setGeo] = React.useState(new THREE.BufferGeometry());
  const [mat, setMat] = React.useState(new THREE.MeshBasicMaterial());
  const loader = new NavMeshLoader();
  useEffect(async () => {
    const newNav = await loader.load(url);
    setNav(newNav);
  }, []);
  return nav;
}

export function Manager({ children }) {
  const [mgr] = useState(() => new EntityManager(), []);
  const nav = useNavLoader("/navmesh_applied.glb");
  const currentRegion = null;
  const startPosition = new Vector3();
  const endPosition = new Vector3();

  useEffect(() => {
    if (!nav) {
      return;
    }

    //behaviors
    const wanderBehavior = new WanderBehavior(1, 20, 20);

    //find entities
    const vehicle = mgr.entities.find((item) => item.name === "Vehicle");
    const target = mgr.entities.find((item) => item.name === "Target");

    //setup
    startPosition.copy(vehicle.position);
    endPosition.copy(vehicle.position);

    vehicle.steering.add(wanderBehavior);
    vehicle.navMesh = nav;

    console.log(nav);
    currentRegion = nav.clampMovement(
      currentRegion,
      startPosition,
      endPosition,
      vehicle.position
    );

    const distance = currentRegion.distanceToPoint(vehicle.position);
    vehicle.position.y -= distance * 0.2;
  }, [mgr.entities, nav]);

  useFrame((state, delta) => mgr.update(delta));

  return <context.Provider value={mgr}>{children}</context.Provider>;
}

export function useYuka({ //initials
  type = GameEntity,
  position = [0, 0, 0],
  name = "unnamed",
}) {
  //variables
  const ref = useRef();
  const mgr = useContext(context);
  //new entity
  const [entity] = useState(() => new type());

  useEffect(() => {
    entity.position.set(...position);
    entity.name = name;
    entity.setRenderComponent(ref, (entity) => {
      ref.current.position.copy(entity.position);
      ref.current.quaternion.copy(entity.rotation);
    });
    //add entity to manager
    mgr.add(entity);
    return () => mgr.remove(entity);
  }, []);
  return [ref, entity];
}
