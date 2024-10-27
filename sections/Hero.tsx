import React from "react";
import CutCornerButton from "../components/CutCornerButton";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-24">
      <div className="container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Introducing Blockforge
        </p>
        <h1 className="font-heading font-black text-5xl text-center mt-4">
          The Future of Blockchain is Here.
        </h1>
        <p className="text-center text-xl mt-6 text-zinc-400">
          Blockforge is pioneering smart contract integrity with cutting-edge
          data solutions.
        </p>
        <CutCornerButton>Get Started</CutCornerButton>

        <Image
          src="/assets/images/icosahedron.png"
          alt="Icosahedron 3D Image"
          width={800}
          height={800}
        />
      </div>
    </section>
  );
};

export default Hero;
