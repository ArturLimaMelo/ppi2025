import styles from './LuckyNumber.module.css';
import { useState } from 'react';

export function LuckyNumber() {
    const [luckyNumber, setLuckyNumber] = useState(0); 

    function handleClick() {
        setLuckyNumber(Math.floor(Math.random() * 40) + 1);
    }
    
    return <div className ={styles.container}>

            {luckyNumber === 0 ? (
                <h1>Lucky Number 🎲</h1>
            ) : (
                <h1> Lucky Number: = {luckyNumber}</h1>
            )

            }
            
            
            <button className={styles.button} onClick={handleClick}>
                I'm Feeling Lucky Today!
            </button>
        </div>
}