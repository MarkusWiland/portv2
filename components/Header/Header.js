import { Container } from "../../components";
import Link from "next/link";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.greenLine}></div>
      <Container>
        <nav className={styles.nav}>
          <span>Markus Wiland</span>
          <ul className={styles.ul}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <button className={styles.buttonIcon}>Icon</button>
        </nav>
      </Container>
    </header>
  );
}
