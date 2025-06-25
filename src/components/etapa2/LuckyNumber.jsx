import styles from './LuckyNumber.module.css';

export function LuckyNumber() {
    return <div className ={styles.container}>
            <h1> Lucky Number: = ?</h1>
            <button className={styles.button}>
                I'm Feeling Lucky Today!
            </button>
        </div>
}