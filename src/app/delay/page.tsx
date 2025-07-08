'use client';

import { useState } from "react";
import Image from "next/image";

export default function Home() {

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center h-full gap-8 flex-wrap">
        <div className="flex items-center justify-center mt-4 mb-4 border-stone-300 shadow-md w-[400px] p-8 pb-12 border-2">
          <p>1</p>
          <Image
            width={200}
            height={200}
            src="/images/pikachu.png"
            alt="Pikachu"
            className={`animate__animated animate__heartBeat`}
          />
          <p>2</p>
          <Image
            width={200}
            height={200}
            src="/images/pikachu.png"
            alt="Pikachu"
            className={`animate__animated animate__heartBeat animate__delay-2s`}
          />
        </div>
      </div>
    </div>
  );
}
