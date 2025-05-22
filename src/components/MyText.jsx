import styles from "./MyText.module.css";

export function MyText() {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <h1 className={styles.title}>Meu primeiro React App</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          sapiente ipsam adipisci, veritatis fugiat sed id vitae voluptas!
          Expedita saepe, odio accusamus repellendus eaque atque excepturi iure
          omnis sit rem!
        </p>
      </div>
    </div>
  );
}
