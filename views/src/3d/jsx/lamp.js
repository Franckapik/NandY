const Lamp = () => {
  const light = useRef()
  const [fixed] = useSphere(() => ({ type: 'Static', args: 1, position: [0, 16, 0] }))
  const [lamp] = useBox(() => ({
    mass: 1,
    args: [1, 0, 5, 1],
    linearDamping: 0.9,
    angulardamping: 1.99,
    position: [0, 16, 0],
  }))
  usePointToPointConstraint(fixed, lamp, { pivotA: [0, 0, 0], pivotB: [0, 2, 0] })
  const bind = useDragConstraint(lamp)
  return (
    <>
      <mesh ref={lamp} {...bind}>
        <coneBufferGeometry attach="geometry" args={[2, 2.5, 32]} />
        <meshStandardMaterial attach="material" />
        <pointLight intensity={10} distance={5} />
        <spotLight ref={light} position={[0, 20, 0]} angle={0.4} penumbra={1} intensity={0.6} castShadow />
      </mesh>
    </>
  )
}