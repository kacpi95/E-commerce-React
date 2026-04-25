import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <h3>Clothiq®</h3>

        <nav>
          <a href='#'>Polityka prywatności</a>
          <a href='#'>Zwroty</a>
          <a href='#'>Kontakt</a>
          <a href='#'>Dostawa</a>
        </nav>

        <p>© 2026 Clothiq. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
