import styles from "./Main.module.css";
export default function Main() {
  return (
    <section className={styles.section}>
      <article>
        <h1>Hej och välkommen till Markus Wiland</h1>
        <h3>Jag jobbar som IT-Konsult och älskar React och Next js.</h3>
        <p>lite om mig här</p>
        <span className={styles.buttons}>
          <button className={styles.button}>Läs Blogg</button>
          <button className={styles.button}>Läs mer om mig</button>
        </span>
      </article>
    </section>
  );
}
