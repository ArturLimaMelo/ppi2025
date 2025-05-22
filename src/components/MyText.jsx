import styles from './MyText.module.css';

export function MyText() {
  return (
    <div ClassName={styles.div}>
      <h1 ClassName={styles.title}>Meu primeiro React App</h1>
      <p ClassName={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        sapiente ipsam adipisci, veritatis fugiat sed id vitae voluptas!
        Expedita saepe, odio accusamus repellendus eaque atque excepturi iure
        omnis sit rem!
      </p>
    </div>
  );
}