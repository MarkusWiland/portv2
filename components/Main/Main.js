import styles from './Main.module.css';
import { Button } from '../../components';
export default function Main() {
  return (
    <section className={styles.section}>
      <article>
        <h1>Hej och välkommen till Markus Wiland</h1>
        <h3>Jag jobbar som IT-Konsult och älskar React och Next js.</h3>
        <p>lite om mig här</p>
        <span className={styles.buttons}>
          <Button color={styles.button} text="Läs Blogg" />
          <Button color={styles.button} text="Läs mer om mig" />
        </span>
      </article>
    </section>
  );
}
