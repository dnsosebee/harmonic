import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Link href={"/"} className="flex items-center space-x-3 bg-slate-900">
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
        className="flex  flex-col items-center sm:p-10 lg:p-16 grow"
        style={{
          backgroundImage: `url("/harmonic-tesselation-dark.svg")`,
          backgroundRepeat: "repeat",
          backgroundSize: "6.25%",
        }}
      >
        <section className="space-y-6 prose flex flex-col bg-slate-900 py-6 sm:px-6 shadow-2xl rounded-xl">
          <Image
            src="/harmonic-icon.svg"
            width={200}
            height={200}
            alt="Harmonic"
            className="shadow-2xl self-center rounded"
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
