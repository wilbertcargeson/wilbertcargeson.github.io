import React, { Suspense } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

function ShowAvatar(props) {
    return (
        <div style={{ height: "50vh", width: "70vh", bottom: "5vh" }}>
            <Canvas shadowMap camera={{ position: [-3, 5, 5], fov: 61 }}>
                <ambientLight intensity={0.3} />
                <pointLight
                    castShadow
                    position={[20, 100, 10]}
                    intensity={1.2}
                />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default ShowAvatar;
