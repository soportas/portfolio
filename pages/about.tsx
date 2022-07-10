import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>

        <p className={styles.bodyText}>
          Hi I'm Sophia, a product designer living in Brisbane, Australia. I've
          just moved into design after working for 4 and a half years as a
          front-end web developer, so I'm very excited to try new things but am
          also steeling for the inevitable ego-bruising that comes with being a
          newbie again.
        </p>
        <p className={styles.bodyText}>
          I moved into product design after spending years appreciating
          beautiful and functional design, but not getting much time to dabble
          with personal design projects (since I do have other interests outside
          of tech - for the record, I love social history and reading). I am
          also looking forward to focusing more on the why and what of products
          rather than simply the how.
        </p>
        <p className={styles.bodyText}>
          This site is intended to act partly as a portfolio, but also as a
          place to practice self-expression and getting comfortable with sharing
          my experiments and thoughts.
        </p>
        <p className={styles.bodyText}>I hope you have a wonderful day!</p>
      </main>
    </div>
  );
}
