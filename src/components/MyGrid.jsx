import styles from "./MyGrid.module.css";
import {Github, Instagram, Phone, BookOpenCheck} from "lucide-react";
export function MyGrid() {
  // Desestruturação de props
  return (
    <div className={styles.container}>
      <header className={styles.header1}>
        <BookOpenCheck className={styles.imageH} />
        <h1 className={styles.title}>Foco, Força, Fé</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img
              className={styles.image}
              src="https://picsum.photos/200/300?random=1"
            ></img>
            <h2 className={styles.titleC}>My Text 0</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={styles.card}>
            <img
              className={styles.image}
              src="https://picsum.photos/200/300?random=1"
            ></img>
            <h2 className={styles.titleC}>My Text 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={styles.card}>
            <img
              className={styles.image}
              src="https://picsum.photos/200/300?random=1"
            ></img>
            <h2 className={styles.titleC}>My Text 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={styles.card}>
            <img
              className={styles.image}
              src="https://picsum.photos/200/300?random=1"
            ></img>
            <h2 className={styles.titleC}>My Text 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={styles.card}>
            <img
              className={styles.image}
              src="https://picsum.photos/200/300?random=1"
            ></img>
            <h2 className={styles.titleC}>My Text 4</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerText}>
            <h1>IFRN - Campus Macau</h1>
            <h1>Curso Técnico em Informática</h1>
            <h1>Programação para Internet 2025</h1>
          </div>
          <p className={styles.assinatura}>Artur Lima Melo</p>
          <div className={styles.icons}>
            <button onclick="window.location.href='https://https://github.com/ArturLimaMelo'">
              <Github/>
            </button>
            <button onclick="window.location.href='https://instagram.com/arturlima_m/'">
              <Instagram/>
            </button>
            <button onclick="window.location.href='tel:+5584981536108'">
              <Phone/>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
