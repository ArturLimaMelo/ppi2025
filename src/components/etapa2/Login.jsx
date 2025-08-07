import styles from "./Login.module.css";
import { Link } from "react-router";

export function Login() {
    return (
        <div className={styles.LoginContainer}>
            <h1>Pagina de Login</h1>
            <form className={styles.loginForm}>
                <label htmlFor="username">E-Mail:</label>
                <input type="text" id="email" name="email" required className={styles.input}/>
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" required className={styles.input}/>
                <button type="submit">Login</button>
            </form>
            <Link to="/signup" className={styles.signup}>Não tem uma conta?</Link>
        </div>
    );
}