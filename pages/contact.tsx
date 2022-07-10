import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Contact</h1>

        <p className={styles.bodyText}>
          If you'd like to get in contact, please message me on LinkedIn at{" "}
          <a href="https://www.linkedin.com/in/sophiahooton">
            https://www.linkedin.com/in/sophiahooton
          </a>
        </p>
      </main>
    </div>
  );
}
