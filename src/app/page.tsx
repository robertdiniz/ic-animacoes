'use client';

import { useState } from "react";
import Image from "next/image";
import CardPokemon from "@/components/CardPokemon";
import EvolvePokemon from "@/components/EvolvePokemon";

export default function Home() {
  const [attention, setAttention] = useState("animate__bounce");
  const [backEntrances, setbackEntrances] = useState("animate__bounce");
  const [exitAnimation, setExitAnimation] = useState("");

  const handleFinish = () => {
    setExitAnimation("animate__rollOut");
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="animate__animated animate__bounce text-2xl font-bold mt-8">Vamos usar Animate.css!</h1>
      <div className="flex items-center flex-row gap-10 pb-12">
        <CardPokemon/>
        <EvolvePokemon/>
      </div>
    </div>
  );
}
