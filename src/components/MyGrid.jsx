import styles from "./MyGrid.module.css";

export function MyGrid() {
  // Desestruturação de props
  return (
    <div className={styles.container}>
      <header className={styles.header1}>
        <img className={styles.imageH}src="https://cdn-icons-png.flaticon.com/128/4659/4659467.png"/>
        <h1 className={styles.title}>Foco, Força, Fé</h1>
      </header>
      <main className={styles.main}>  
        <div className={styles.grid}>
          <div className={styles.card}>
            <img className={styles.image}src="https://picsum.photos/200/300?random=1"></img>
            <h2 className={styles.titleC}>My Text 0</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className={styles.card}>
            <img className={styles.image}src="https://picsum.photos/200/300?random=1"></img>
            <h2 className={styles.titleC}>My Text 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className={styles.card}>
            <img className={styles.image}src="https://picsum.photos/200/300?random=1"></img>
            <h2 className={styles.titleC}>My Text 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className={styles.card}>
            <img className={styles.image}src="https://picsum.photos/200/300?random=1"></img>
            <h2 className={styles.titleC}>My Text 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className={styles.card}>
            <img className={styles.image}src="https://picsum.photos/200/300?random=1"></img>
            <h2 className={styles.titleC}>My Text 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </main>
      <footer className={styles.footer} />
    </div>
  );
}
