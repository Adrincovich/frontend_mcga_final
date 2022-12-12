import React from "react";
import Footer from './Footer';
import Header from './Header';
//import styles from "./layout.module.css";
//import { Link } from 'react-router-dom';

//Armo mi layout
const Layout = ({children}) => {
    return (
      <div>
          <Header />
            <div>
                {children}
            </div>
          <Footer />
      </div>
    )
}
export default Layout