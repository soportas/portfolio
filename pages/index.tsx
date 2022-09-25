import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sophia Portas</title>
        <meta name="description" content="Sophia Portas' Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-radial from-sacramento to-sacramento-dark">
        <h1 className="text-3xl font-bold underline font-serif">
          Hello world!
        </h1>
        <h1 className="font-sans">HELLO WORLD</h1>
      </main>
    </div>
  );
};

export default Home;
