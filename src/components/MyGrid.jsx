import styles from "./MyGrid.module.css";

export function MyGrid() {
  // Desestruturação de props
  return (
    <div className={styles.container}>
      <header className={styles.header1}>
        <img src="https://www.flaticon.com/free-icon/duck_17839205?term=duck&page=1&position=52&origin=search&related_id=17839205"/>
        <h1 className={styles.title}>Foco, Força, Fé</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Card 1</h2>
            <p>Conteúdo do Card 1</p>
          </div>
          <div className={styles.card}>
            <h2>Card 2</h2>
            <p>Conteúdo do Card 2</p>
          </div>
          <div className={styles.card}>
            <h2>Card 3</h2>
            <p>Conteúdo do Card 3</p>
          </div>
          <div className={styles.card}>
            <h2>Card 4</h2>
            <p>Conteúdo do Card 4</p>
          </div>
          <div className={styles.card}>
            <h2>Card 5</h2>
            <p>Conteúdo do Card 5</p>
          </div>
        </div>
      </main>
      <footer className={styles.footer} />
    </div>
  );
}
