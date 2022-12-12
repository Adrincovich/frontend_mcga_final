import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveProducts} from "../../store/products/thunks";
import styles from "./recurso.module.css";

const PublicProducts = () => {
  const productsSelector = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(saveProducts());
  },[dispatch])


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
                  </tr>
                )
              }
            )
          }
        </tbody>
      </table>
    </section>
  );
};

export default PublicProducts;