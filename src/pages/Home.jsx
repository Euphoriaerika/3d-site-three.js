import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { SpotLight } from "@react-three/drei";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [directionRotatiing, setDirectionRotating] = useState(0);

  const adjustIslanForScreenSize = () => {
    let screenScale = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale = window.innerWidth < 768 ? [1.5, 1.5, 1.5] : [3, 3, 3];
    let screenPosition = window.innerWidth < 768 ? [0, -1.5, 0] : [0, -4, -4];

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, rotation] = adjustIslanForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#FAA300"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky
            isRotating={isRotating}
            directionRotatiing={directionRotatiing}
          />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            setDirectionRotating={setDirectionRotating}
          />
          <Plane
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
