import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-8">
      <Image src="/harmonic-icon.svg" width={200} height={200} alt="Harmonic" />
      <p>Coming soon</p>
    </main>
  );
}
