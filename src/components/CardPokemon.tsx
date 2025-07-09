import { useState } from "react";
import Image from "next/image";

const pokemonImages = [
  { value: "/images/pikachu.png", label: "Pikachu" },
  { value: "/images/charmander.png", label: "Charmander" },
  { value: "/images/bulbasaur.png", label: "Bulbasaur" },
  { value: "/images/squirtle.png", label: "Squirtle" },
];

export default function CardPokemon() {
  const [selectedImage, setSelectedImage] = useState(pokemonImages[0].value);
  const [attention, setAttention] = useState("animate__bounce");
  const [backEntrances, setbackEntrances] = useState("animate__bounce");
  const [exitAnimation, setExitAnimation] = useState("");

  const handleFinish = () => {
    setExitAnimation("animate__rollOut");
  };

  return (
    <div className="flex items-center justify-center flex-col mt-4 mb-4 border-stone-300 shadow-md w-[400px] p-8 pb-12 border-2">
      <Image
        width={200}
        height={200}
        src={selectedImage}
        alt="Pokémon"
        className={`animate__animated ${attention} ${backEntrances} ${exitAnimation}`}
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
        <option value="animate__heartBeat">Heart Beat</option>
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
      <p className="mt-8">Selecione a imagem do Pokémon:</p>
      <select
        className="mt-2 p-2 border rounded"
        value={selectedImage}
        onChange={(e) => setSelectedImage(e.target.value)}
      >
        {pokemonImages.map((pokemon) => (
          <option key={pokemon.value} value={pokemon.value}>
            {pokemon.label}
          </option>
        ))}
      </select>
      <button className="bg-black text-amber-50 w-full mt-8 cursor-pointer" onClick={handleFinish}>GUARDAR POKÉMON</button>
    </div>
  );
}