import React, { useEffect, useMemo, useRef } from 'react'
import { useUpdate } from 'react-three-fiber'

const Video = React.memo((props) => {
  // Use memo to create persistent, memoized objects
  // In this case: create a new texture only when the url changes
  const video = useMemo(() => {
    const video = document.createElement('video')
    video.loop = true
    video.autoplay = true
    video.playsinline = true
    video.crossOrigin = 'anonymous'
    video.muted = true
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')
    video.style = 'display: none'
    video.src = props.url
    return video
  }, [props.url])

  // video.play is a side-effect, this should be an effect
  useEffect(() => void video.play(), [props.url])

  // This effect scales meshes once (on mount)
  const geom = useUpdate(ref => ref.scale(-1, 1, 1), [])

  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" ref={geom} args={[18, 9]} />
      <meshBasicMaterial attach="material">
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  )
})

export default Video
