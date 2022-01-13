import { Container } from '../../components';
import Link from 'next/link';
import styles from './Header.module.css';
import { useRouter } from 'next/router';
export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.greenLine}></div>
      <Container>
        <nav className={styles.nav}>
          <span>Markus Wiland</span>
          <ul className={styles.ul}>
            <li>
              <Link href="/">
                <a className={router.pathname == '/' ? styles.a : ''}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className={router.pathname == '/blog' ? styles.a : ''}>
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={router.pathname == '/contact' ? styles.a : ''}>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <button className={styles.buttonIcon}>Icon</button>
        </nav>
      </Container>
    </header>
  );
}
