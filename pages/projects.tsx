import styles from "../styles/Home.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>

        <p className={styles.description}>Some things I've worked on</p>

        <div className={styles.grid}>
          <a href="https://phunky-pieces.vercel.app/" className={styles.card}>
            <h2>Phunky Pieces &rarr;</h2>
            <p>
              A reference library of cool interaction elements I've come across
              online.
            </p>
          </a>

          <a className={styles.card}>
            <h2>Placeholder &rarr;</h2>
          </a>

          <a className={styles.card}>
            <h2>Placeholder &rarr;</h2>
          </a>

          <a className={styles.card}>
            <h2>Placeholder &rarr;</h2>
          </a>
        </div>
      </main>
    </div>
  );
}
