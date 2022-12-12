import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {deleteProductsThunk, saveProducts} from "../../store/products/thunks";
import { Link } from 'react-router-dom';
import styles from "./recurso.module.css";

const Products = () => {
  const productsSelector = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(saveProducts());
  },[dispatch])
  
  function handleClick(id){
    dispatch(deleteProductsThunk(id));
  }

  if(productsSelector.isLoading){
    return <h2 className={styles.loading}>Loading...</h2>
  }

  return (
    <section className={styles.conteinerSection}>
      <table className={styles.conteinerTable}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Modificar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
              {
            productsSelector.data.map((product) => {
                return (
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.category}</td>
                    <td><Link to={`/edit/${product._id}`}><button className={styles.editar}>Editar</button></Link></td>
                    <td><button onClick={() => handleClick(product._id)} className={styles.delete}>Eliminar</button></td>
                  </tr>
                )
              }
            )
          }
        </tbody>
            <Link  className={styles.linkbutton} to={"/add"}><button className={styles.agregar}>Agregar Producto</button></Link>
      </table>
    </section>
  );
};

export default Products;