import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Shared/Button';
import { deleteProductsThunk, saveProducts } from '../../store/products/thunks'
import styles from './recurso.module.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCancel } from '@fortawesome/free-solid-svg-icons';
import InformationModal from '../../components/Shared/Modal';
import { CircularProgress } from '@mui/material';
const Products = () => {
    const [dispatchFlag, setDispatchFlag] = useState(false)
    const [modalMessage, setModalMessage] = useState('');
    const [productId, setProductId] = useState(null)
    const [openModal, setOpenModal] = useState(false);
    const { isError, isLoading, data, deleteData, deleteIsLoading, deleteIsError } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(saveProducts());
    }, [dispatch]);

    const deleteProductConfirmation = (id) => {
        setModalMessage('¿Está seguro de que desea eliminar este producto de la lista?');
        setOpenModal(true);
        setProductId(id);
    }

    useEffect(() => {
        if(!dispatchFlag || deleteIsLoading)
            return;

        if(deleteIsError === false) return setOpenModal(false);

        setModalMessage(deleteData.Message);
        setOpenModal(true);
    }, [deleteIsLoading, deleteIsError, deleteData]);

    const confirmDelete = () => {
        dispatch(deleteProductsThunk(productId));
        setDispatchFlag(true);
        setOpenModal(false);
    }

    if (isLoading) return <h2><CircularProgress /></h2>

    if(isError) return <h2 className={styles.errorMessage}>Error al obtener productos</h2>

    return (
        <div>
            { openModal &&
            <InformationModal
                Title='Eliminar Producto'
                Message={modalMessage}
                open={openModal}
                setOpen={setOpenModal}
            >
                {
                    deleteIsLoading ? <CircularProgress />
                    :   <div>
                            <Button
                                background={'none'}
                                color={'#28a745'}
                                icon={<FontAwesomeIcon size='2x' icon={faCheck} />}
                                onClick={() => confirmDelete()} />
                            <Button
                                background={'none'}
                                color={'#F44336'}
                                icon={<FontAwesomeIcon size='2x' icon={faCancel} />}
                                onClick={() => setOpenModal(false)} />
                        </div>
                }

            </InformationModal>}
            <section className={styles.conteinerSection}>
                <Link  className={styles.linkbutton} to={"/add"}><button className={styles.agregar}>Agregar Producto</button></Link>
                <table className={styles.conteinerTable}>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Categoria</th>
                            <th>Modificar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((product) =>
                                <tr key={product._id}>
                                  <td>{product.name}</td>
                                  <td>{product.description}</td>
                                  <td>${product.price}</td>
                                  <td>{product.stock}</td>
                                  <td>{product.category}</td>
                                  <td><Link to={`/edit/${product._id}`}><button className={styles.editar}>Editar</button></Link></td>
                                  <td><button onClick={() => deleteProductConfirmation(product._id)} className={styles.delete}>Eliminar</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Products