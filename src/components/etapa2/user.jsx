import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import  styles  from "./user.module.css";


export function User() {
    const { session, handleSignOut } = useContext(CartContext);
    

    return (
        <div className={styles.container}>
        {session.user.user_metadata.admin ? (
            <h1>Admin Account</h1>
          ) : (
            <h1>User Account</h1>
          )}
        { session ? <h1>Welcome, {session.user.user_metadata.username}!</h1> : <h1>Please log in.</h1> }
        { session ? <button onClick={() => handleSignOut()}>Sign Out</button> : <h2></h2> }
        { session ? <div>
            <p>User ID: {session.user.id}</p>
            <p>Email: {session.user.email}</p>
            <p>Created At: {new Date(session.user.created_at).toLocaleDateString()}</p>
        </div> : <h2></h2> }
        </div>
    );
}