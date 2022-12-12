import React from "react";
import Footer from './Footer';
import Header from './Header';
import styles from "./layout.module.css";

//Armo mi layout
const Layout = ({children}) => {
    return (
      <div>
          <Header />
            <div className={styles.conteiner}>
                {children}
            </div>
          <Footer />
      </div>
    )
}
export default Layout