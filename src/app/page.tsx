import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-white border-b-1 border border-gray-200 shadow py-2">
        <Link href={"/"}>
          <Image
            src="/harmonic-wordmark.svg"
            alt="Harmonic Software logo"
            width={150}
            height={40}
            className=""
          />
        </Link>
      </header>
      <main
        className="flex  flex-col items-stretch grow self-stretch"
        style={{
          backgroundImage: `url("/harmonic-tesselator.svg")`,
          backgroundRepeat: "repeat",
          backgroundSize: "6.25%",
        }}
      >
        <div className="flex flex-col items-center grow bg-white bg-opacity-95">
          <section className="space-y-6 prose flex flex-col bg-white py-6 sm:px-6 grow border-x-2 border-gray-200">
            <Image
              src="/harmonic-logo.svg"
              width={100}
              height={100}
              alt="Harmonic"
              className="self-center"
            />
            <p className="">
              Harmonic is a consultancy specializing in AI applications. We work closely with our
              clients throughout the entire AI product lifecycle — design, production, and beyond.
              Contact: info@harmonic.so
            </p>
          </section>
        </div>
      </main>
      <footer className="border border-t-2 border-gray-200 shadow p-2">
        <p>Contact: info@harmonic.so</p>
        <p>© 2024 Harmonic Software LLC. All rights reserved.</p>
      </footer>
    </>
  );
}
