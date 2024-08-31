/* eslint-disable react/jsx-key */
import { Canvas } from "@react-three/fiber";

import "./style.css";
import MacContainer from "./MacContainer";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="navBar flex gap-5 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display line">
          {["iPhone", "iPad", "services", "ios", "mac"].map((e) => (
            <a href="#" className="text-white font-[400] text-md capitalize">
              {e}
            </a>
          ))}
        </div>
        <div className="absolute flex flex-col items-center text-white top-24 left-1/2 -translate-x-1/2 ">
          <h3 className="masked text-7xl tracking-tighter font-[700]">
            macbook pro.
          </h3>
          <h5>Oh so pro !</h5>
          <p className="text-center w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            labore saepe neque!
          </p>
        </div>
        <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
          <OrbitControls />
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
            ]}
          />
          <ScrollControls pages={3}>
            <MacContainer />
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}

export default App;
