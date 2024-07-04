
import styles from "./Navbar.module.css";
import Link from "next/link";
export default function App() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapeerTitle}>
        <p className={styles.title}>Resumen</p>
        <div className={styles.lineTitle}></div>
      </div>

      <div className={styles.borderOptions}>
        <div className={styles.wrapperOptions}>
          <ul>
            <li>
              <Link className={styles.activeOptions} href="#">Resumen</Link>
            </li>
            <li>
              <Link href="#">Portafolio</Link>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
}
