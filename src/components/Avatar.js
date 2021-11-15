import React, { Suspense } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model() {
    const { scene } = useGLTF("nosepass.glb");
    return <primitive object={scene} />;
}

function ShowAvatar(props) {
    return (
        <div style={{ height: "70vh" }}>
            <Canvas camera={{ position: [400, 400, 400], fov: 1 }}>
                <ambientLight
                    color="white"
                    position={[20, 20, 20]}
                    intensity={1}
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
