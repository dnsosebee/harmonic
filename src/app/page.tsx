import Image from "next/image";

export default function Home() {
  return (
    <>
      <main
        className="flex min-h-screen flex-col items-center p-24 space-y-8"
        style={{
          backgroundColor: "#181918",
          backgroundImage: `url("/logo-dark.svg")`,
          backgroundRepeat: "repeat",
          backgroundSize: "10%",
        }}
      >
        <Image
          src="/harmonic-icon.svg"
          width={200}
          height={200}
          alt="Harmonic"
          className="shadow-2xl"
        />
        <p className="text-gray-500 shadow-2xl">Coming soon</p>
      </main>
    </>
  );
}
