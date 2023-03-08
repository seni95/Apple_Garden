import logo from './logo.svg';
import './App.css';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import Ground from './components/Apple/Ground';

const Apple = (props)=> {
  return (
    <>
    {/* orbitcontrols 3js를 돕는 도우미 궤도 컨트롤의 대상인 고정 지점 주위로 카메라를 이동 할 수 있습니다.*/}
    <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45}></OrbitControls>
     {/* 카메라 */}
    <PerspectiveCamera makeDefault fov={50} position={[3,2,5]}></PerspectiveCamera>

    {/* 컬러를 정의하는 함수 - 0,0,0은 검정색임 */}
    <color args={[0,0,0]} attach="background"></color>

    <spotLight
    color={[1,0.25,0.7]}
    intensity = {1.5}
    angle={0.6}
    penumbra={0.5}
    position={[5,5,0]}
    castShadow
    shadow-bias={-0.0001}
    ></spotLight>

<spotLight
    color={[1,0.25,0.7]}
    intensity = {1.5}
    angle={0.6}
    penumbra={0.5}
    position={[5,5,0]}
    castShadow
    shadow-bias={-0.0001}
    ></spotLight>
   <Ground></Ground>
    </>
  )
}

function App() {
  return (
    <Suspense>
      <Canvas>
        <Apple></Apple>
      </Canvas>
    </Suspense>
  );
}

export default App;
