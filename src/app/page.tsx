'use client';

import { useState } from "react";
import Image from "next/image";

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
      <div className="flex items-center justify-center h-full gap-8 flex-wrap">
        <div className="flex items-center justify-center flex-col mt-4 mb-4 border-stone-300 shadow-md w-[400px] p-8 pb-12 border-2">
          <Image
            width={200}
            height={200}
            src="/images/pikachu.png"
            alt="Pikachu"
            className={`animate__animated ${attention} ${backEntrances}  ${exitAnimation}`}
          />
          <p>Selecione uma animação de <strong>chamar atenção</strong>:</p>
          <select
            className="mt-2 p-2 border rounded"
            value={attention}
            onChange={(e) => setAttention(e.target.value)}
          >
            <option value="animate__bounce">Bounce</option>
            <option value="animate__flash">Flash</option>
            <option value="animate__pulse">Pulse</option>
            <option value="animate__rubberBand">Rubber Band</option>
            <option value="animate__shakeX">Shake X</option>
            <option value="animate__shakeY">Shake Y</option>
            <option value="animate__headShake">Head Shake</option>
            <option value="animate__swing">Swing</option>
            <option value="animate__tada">Tada</option>
            <option value="animate__wobble">Wobble</option>
            <option value="animate__jello">Jello</option>
            <option value="animate__heartBeat">heartBeat</option>
          </select>
          <p className="mt-8">Selecione uma animação de <strong>entrada</strong>:</p>
          <select
            className="mt-2 p-2 border rounded"
            value={backEntrances}
            onChange={(e) => setbackEntrances(e.target.value)}
          >
            <option value="animate__backInDown">Back In Down</option>
            <option value="animate__backInLeft">Back In Left</option>
            <option value="animate__backInRight">Back In Right</option>
            <option value="animate__backInUp">Back In Up</option>
          </select>
          <button className="bg-black text-amber-50 w-full mt-8 cursor-pointer" onClick={handleFinish}>GUARDAR POKÉMON</button>
        </div>
      </div>
    </div>
  );
}
