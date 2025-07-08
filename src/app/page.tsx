import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col h-full">
        <h1 className="animate__animated animate__bounce font-bold">Hello World!</h1>
        <Image
          width={200}
          height={200}
          src="/images/pikachu.png"
          alt="Pikachu"
          className="animate__animated animate__fadeInDown animate__delay-2s"
        />
      </div>
    </div>
  );
}
