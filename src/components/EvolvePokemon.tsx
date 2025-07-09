import { useState } from "react";
import Image from "next/image";

const evolutions = {
  pikachu: { name: "Raichu", img: "/images/raichu.png" },
  charmander: { name: "Charizard", img: "/images/charizard.png" },
  bulbasaur: { name: "Ivysaur", img: "/images/ivysaur.png" },
  squirtle: { name: "Wartortle", img: "/images/wartortle.png" },
};

const pokemons = [
  { name: "Pikachu", value: "pikachu", img: "/images/pikachu.png" },
  { name: "Charmander", value: "charmander", img: "/images/charmander.png" },
  { name: "Bulbasaur", value: "bulbasaur", img: "/images/bulbasaur.png" },
  { name: "Squirtle", value: "squirtle", img: "/images/squirtle.png" },
];

export default function EvolvePokemon() {
  const [selected, setSelected] = useState("pikachu");
  const [evolved, setEvolved] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleEvolve = () => {
    setEvolved(true);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1200); // duração da animação
  };

  return (
    <div className="flex flex-col items-center border-2 border-stone-300 shadow-md w-[400px] p-8 mt-8">
      <label className="mb-2 font-bold">Escolha seu Pokémon:</label>
      <select
        className="mb-4 p-2 border rounded"
        value={selected}
        onChange={e => {
          setSelected(e.target.value);
          setEvolved(false);
        }}
      >
        {pokemons.map(p => (
          <option key={p.value} value={p.value}>{p.name}</option>
        ))}
      </select>
      {!evolved ? (
        <>
          <Image
            src={pokemons.find(p => p.value === selected)!.img}
            alt={selected}
            width={180}
            height={180}
            className="mb-4"
          />
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded"
            onClick={handleEvolve}
          >
            Evoluir
          </button>
        </>
      ) : (
        <div>
          <Image
            src={evolutions[selected as keyof typeof evolutions].img}
            alt={evolutions[selected as keyof typeof evolutions].name}
            width={200}
            height={200}
            className={`mb-2 animate__animated ${animate ? "animate__zoomIn" : ""}`}
          />
          <div className="text-center font-bold text-lg">
            {evolutions[selected as keyof typeof evolutions].name}!
          </div>
        </div>
      )}
    </div>
  );
}