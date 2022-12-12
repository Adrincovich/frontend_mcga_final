import React from "react";
import styles from "./layout.module.css";
import { Link } from 'react-router-dom';

//Armo mi layout
const Layout = ({children}) => {
    return (
      <div>
          <header className={styles.header}>
              <h1 className={styles.tittle}>Layout</h1>
          </header>
          <nav>
                <button><Link className={styles.decoration} to={'/Home'}><span>Home</span></Link></button>
                <button><Link className={styles.decoration} to={'/Recursos'}><span>Products</span></Link></button>
          </nav>
            <section>
                {children}
            </section>
          <footer>
            <p>MCGA 2022</p>
          </footer>
      </div>
    )
}
export default Layout