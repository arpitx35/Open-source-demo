import Image from "next/image";
import logo from "../app/logo.png";
import club from "../app/force.png"
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-row">
          <Image
            className=""
            src={logo}
            alt="IIIT Una"
            width={180}
            height={38}
            priority
          />
          <Image
            className=""
            src={club}
            alt="Force IIIT Una"
            width={180}
            height={38}
            priority
          />
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>
            Welcome to Open-Source session by Arpit Singh Bhatia.
          </li>
          <li>Save and see your changes instantly.</li>
          <li>Let's collaborate.</li>
        </ol>
      </main>
    </div>
  );
}
