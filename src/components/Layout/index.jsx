import React from "react";
import Footer from './Footer';
import Header from './Header';
import styles from './Children/styleChildren.module.css';

const Layout = ({children}) => {
    return (
      <div>
          <Header />
            <div className={styles.conteinerChildren} >
                {children}
            </div>
          <Footer />
      </div>
    )
}
export default Layout