import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// Traigo mi Layout y mis screeens a la app
import Layout from './components/Layout';
import Home from './screens/Home';
import Products from './screens/Recursos';
import CreateProduct from './screens/CreateProduct';
import EditProduct from './screens/EditProduct';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Recursos" element={<Products />} />
        <Route path="/add" element={<CreateProduct/>}></Route>
        <Route path="/edit/:id" element={<EditProduct/>}></Route>
        <Route path="*" element={<Navigate to="/Home"/> }></Route>
      </Routes>
    </Layout>
  );
}

export default App;