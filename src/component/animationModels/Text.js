import React, { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "react-three-fiber";
import { Cylinder } from "@react-three/drei";
import EarthModel from "./Earth";

function ccccc(children, color) {
  const fontSize = 64;

  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext("2d");

  context.fillStyle = "transparent";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = color;
  context.fillText(children, 256, canvas.height / 2);
  return canvas;
}

function TextRing({ children }) {
  const canvas = useMemo(() => {
    return ccccc(children, "white");
  }, [children]);

  const backCanvas = useMemo(() => {
    return ccccc(children, "red");
  }, [children]);

  const texture = useRef();
  const texture2 = useRef();
  useFrame(({ clock }) => {
    texture.current.offset.x = clock.getElapsedTime() / 2;
    texture2.current.offset.x = clock.getElapsedTime() / 2;
  });

  const cylArgs = [1, 1, 1, 64, 1, true];

  return (
    <group rotation-y={Math.PI / 4} scale={[1, 1, 1]}>
      {/* <primitive object={target.texture} ref={texture} wrapS={THREE.RepeatWrapping} wrapT={THREE.RepeatWrapping} repeat={[1, 1]} /> */}

      <Cylinder args={cylArgs} side={THREE.FrontSide}>
        <meshStandardMaterial transparent attach="material">
          <canvasTexture
            attach="map"
            repeat={[8, 1]}
            image={canvas}
            premultiplyAlpha
            ref={texture}
            wrapS={THREE.RepeatWrapping}
            wrapT={THREE.RepeatWrapping}
            onUpdate={(s) => (s.needsUpdate = true)}
          />
        </meshStandardMaterial>
      </Cylinder>

      <Cylinder args={cylArgs}>
        <meshStandardMaterial attach="material" side={THREE.BackSide}>
          <canvasTexture
            attach="map"
            repeat={[8, 1]}
            image={backCanvas}
            premultiplyAlpha
            ref={texture2}
            wrapS={THREE.RepeatWrapping}
            wrapT={THREE.RepeatWrapping}
            onUpdate={(s) => (s.needsUpdate = true)}
          />
        </meshStandardMaterial>
      </Cylinder>
    </group>
  );
}

function Scene() {
  return (
    <Canvas
      colorManagement
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [2, 1, 2], fov: 35 }}
    >
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <EarthModel />
      </Suspense>
      <TextRing>Loading...</TextRing>
    </Canvas>
  );
}

export default Scene;
