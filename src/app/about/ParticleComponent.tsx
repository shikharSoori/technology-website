"use client";
import * as React from "react";
import ParticleImage, { ParticleOptions, forces } from "react-particle-image";
import "./styles.css";
const particleOptions1: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 1;
  },
  color: ({ x, y, image }) => "#151515",

};
const particleOptions2: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 1;
  },
  color: ({ x, y, image }) => "#bf202f",
};
const motionForce = (x: number, y: number) => {
  return forces.disturbance(x, y, 5);
};
const motionForce1 = (x: number, y: number) => {
  return forces.disturbance(x, y, 20);
};

export default function ParticleComponent() {
  return (
    <>
      <div className="hello">
        <ParticleImage
          className="hello1"
          src={
            "https://i.ibb.co/hfSkM0M/s-OORI-SOLUTIONS-l-ETTER-h-EAD-removebg-preview.png"
          }
          scale={1}
          entropy={15}
          maxParticles={3000}
          mouseMoveForce={motionForce}
          mouseDownForce={motionForce1}
          height={500}
          particleOptions={particleOptions1}
          touchMoveForce={motionForce}
        />
        <ParticleImage
          className="hello2"
          src={
            "https://i.ibb.co/hfSkM0M/s-OORI-SOLUTIONS-l-ETTER-h-EAD-removebg-preview.png"
          }
          scale={1}
          height={500}
          entropy={20}
          maxParticles={3000}
          mouseMoveForce={motionForce}
          particleOptions={particleOptions2}
          touchMoveForce={motionForce}
        />
      </div>
    </>
  );
}
