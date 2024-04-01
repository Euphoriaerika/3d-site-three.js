import { useState, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";

import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo";

import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Witch from "../models/Witch";

import sakura from "../assets/sakura.mp3";
import soundon from "../assets/icons/soundon.png";
import soundoff from "../assets/icons/soundoff.png";

// Home page component that runs on startup
const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  // State to track the current stage, rotation status, and rotation direction
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [directionRotatiing, setDirectionRotating] = useState(0);

  // Function to adjust island properties based on screen size
  const adjustIslanForScreenSize = () => {
    let screenScale = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    return [screenScale, screenPosition, rotation];
  };

  // Function to adjust witch properties based on screen size
  const adjustWitchForScreenSize = () => {
    let screenScale =
      window.innerWidth < 768 ? [0.03, 0.03, 0.03] : [0.01, 0.01, 0.01];
    let screenPosition = window.innerWidth < 768 ? [0, 0, 0] : [0, -0.5, 4.5];

    return [screenScale, screenPosition];
  };

  // Destructure values from adjustment functions
  const [islandScale, islandPosition, rotation] = adjustIslanForScreenSize();
  const [witchScale, witchPosition] = adjustWitchForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      {/* Three.js Canvas component for 3D rendering */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        {/* Suspense for loading fallback */}
        <Suspense fallback={<Loader />}>
          {/* Lights for scene illumination */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#F5DD61"
            groundColor="#FAA300"
            intensity={1.4}
          />

          {/* 3D models/components */}
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
          <Witch
            isRotating={isRotating}
            position={witchPosition}
            scale={witchScale}
            rotation={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 right-4">
        <img
          className="w-10 h-10 cursor-pointer object-contain"
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
