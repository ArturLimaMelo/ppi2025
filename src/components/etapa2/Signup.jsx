import styles from "./Signup.module.css";
import { Link } from "react-router";


export function Signup() {
    return (
        <div className={styles.signupContainer}>
            <h1>Cadastro</h1>
            <form className={styles.signupForm}>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" required />
                    <label htmlFor="confirmPassword">Confirmar Senha:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                    <button type="submit" className={styles.signupButton}>Cadastrar</button>
            </form>
            <Link to="/login" className={styles.login}>Já tem uma conta?</Link>
        </div>
    );
}