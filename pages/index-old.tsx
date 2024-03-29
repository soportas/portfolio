import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sophia Portas</title>
        <meta name="description" content="Sophia Portas' Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sophia Portas</h1>

        <p className={styles.description}>
          Designer and <code className={styles.code}>developer</code>
        </p>
        <p className={styles.warning}>
          🚧 Please note this site is still under construction! 🚧
        </p>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h2>About &rarr;</h2>
            </a>
          </Link>

          <Link href="/projects">
            <a className={styles.card}>
              <h2>Projects &rarr;</h2>
            </a>
          </Link>

          <a
            href="https://www.linkedin.com/in/sophiahooton"
            className={styles.card}
          >
            <h2>Experience &rarr;</h2>
          </a>

          <Link href="/contact">
            <a className={styles.card}>
              <h2>Contact &rarr;</h2>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/sophiahooton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed and developed by Sophia Portas
        </a>
      </footer>
    </div>
  );
};

export default Home;
