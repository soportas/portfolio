import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sophia Portas</title>
        <meta name="description" content="Sophia Portas' Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-radial from-sacramento to-sacramento-dark px-64">
        <Header />
        <div className="flex flex-col items-center">
          <Image
            priority
            src="/images/sportas-logo.svg"
            height={100}
            width={100}
            alt="Sophia Portas logo"
          />
          <p className="text-stone-200 text-4xl font-serif font-extralight italic text-center">
            Sophia Portas
          </p>
          <p className="text-stone-200 text-xs font-sans tracking-wider text-center pt-4">
            PRODUCT DESIGNER
          </p>
          <div className="px-72 py-32 space-y-8">
            <p className="text-stone-200 text-2xl font-serif font-light text-center">
              I specialise in user experience design for technical enterprise
              applications, drawing from my background in web development and
              engineering.
            </p>
            <p className="text-stone-200 text-2xl font-serif font-light text-center">
              My philosophy is that the design process should be human-centered,
              collaborative, and deliberate.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
