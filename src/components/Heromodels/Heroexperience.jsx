import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./room";
import HeroLights from "./HeroLight";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    return (
        <div className={`${isMobile || isTablet ? "" : "try"} ${!isMobile && !isTablet ? "transform -translate-x-16 translate-y-24" : ""}`}>
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }} >
            {/* deep blue ambient */}
            <ambientLight intensity={0.2} color="#1a1a40" />
            {/* Configure OrbitControls to disable panning and control zoom based on device type */}
            <OrbitControls
                enablePan={false} // Prevents panning of the scene
                enableZoom={!isTablet} // Disables zoom on tablets
                maxDistance={20} // Maximum distance for zooming out
                minDistance={5} // Minimum distance for zooming in
                minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
                maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
                target={isMobile ? [0, 0, 0] : [-1, -2, 0]} // Adjust target for large screens
            />

            <Suspense fallback={null}>
                <HeroLights />
                <Particles count={100} />
                <group
                    scale={isMobile ? 1.8 : 2.6}
                    position={isMobile ? [0, -3.5, 0] : [-2, -6, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                >
                    <Room />
                </group>
            </Suspense>
        </Canvas>
        </div>
    );
};

export default HeroExperience;