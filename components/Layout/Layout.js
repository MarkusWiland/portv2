import { Footer, Header } from '../../components';

import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
