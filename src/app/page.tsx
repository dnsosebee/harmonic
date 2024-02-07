import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Link href={"/"} className="flex items-center space-x-3 pb-3">
          <Image
            src="/harmonic-icon.svg"
            alt="Harmonic"
            className="shadow-2xl"
            width={50}
            height={50}
          />
          <h1 className="text-2xl text-slate-200 shadow-2xl mt-1">Harmonic Software</h1>
        </Link>
      </header>
      <main
        className="flex  flex-col items-center p-24 grow"
        style={{
          backgroundImage: `url("/harmonic-tesselation-dark.svg")`,
          backgroundRepeat: "repeat",
          backgroundSize: "6.25%",
        }}
      >
        <section className="space-y-8 prose flex flex-col">
          <Image
            src="/harmonic-icon.svg"
            width={200}
            height={200}
            alt="Harmonic"
            className="shadow-2xl self-center"
          />
          <p className="text-slate-200 shadow-2xl">
            Harmonic Software LLC is a software consultancy specializing in AI applications. We work
            closely with our clients throughout the entire product lifecycle, aiding in design,
            production, and maintenance of AI systems. Contact: info@harmonic.so
          </p>
        </section>
      </main>
      <footer className="">
        <p>Contact: info@harmonic.so</p>
        <p>© 2024 Harmonic Software LLC. All rights reserved.</p>
      </footer>
    </>
  );
}
