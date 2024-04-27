import { useState, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";

import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo";

import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Witch from "../models/Witch";

import sakura from "../assets/Steampunk.mp3";
import { soundon, soundoff } from "../assets/icons";

// Home page component that runs on startup
const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.1;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

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
  const [directionRotating, setDirectionRotating] = useState(null);

  // Function to adjust island properties based on screen size
  const adjustIslanForScreenSize = () => {
    let screenScale = window.innerWidth < 768 ? [2, 2, 2] : [2.4, 2.4, 2.4];
    let screenPosition = [0, -10, -43];
    let rotation = [0, -Math.PI / 2, 0];

    return [screenScale, screenPosition, rotation];
  };

  // Function to adjust witch properties based on screen size
  const adjustWitchForScreenSize = () => {
    let screenScale =
      window.innerWidth < 768 ? [0.4, 0.4, 0.4] : [0.6, 0.6, 0.6];
    let screenPosition = window.innerWidth < 768 ? [0, -5, -4] : [0, -6, -4];

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
          <directionalLight position={[1, 1, 1]} intensity={1.2} />
          <ambientLight intensity={0.2} />
          <hemisphereLight
            skyColor="#F5DD61"
            groundColor="#FAA300"
            intensity={1.4}
          />

          {/* 3D models/components */}
          <Bird />
          <Sky
            isRotating={isRotating}
            directionRotating={directionRotating}
            rotation={rotation} // rotation must be the same as the island
          />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            setDirectionRotating={setDirectionRotating}
            directionRotating={directionRotating}
          />
          <Witch
            isRotating={isRotating}
            position={witchPosition}
            scale={witchScale}
            rotation={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
      <div
        className="music-btn"
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
      >
        <img
          className="w-3/5 h-3/5 object-contain"
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
        />
      </div>
    </section>
  );
};

export default Home;
