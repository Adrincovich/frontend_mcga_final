import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {addProductThunk} from "../../store/products/thunks";
import styles from "./createproduct.module.css"

export default function CreateProduct() {
  const stateProducts = useSelector((state)=> state.products);
  const [submited, setSubmited] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    dispatch(addProductThunk(data));
    setSubmited(true);
  };

  if(stateProducts.isLoading){
    return(
        <h2 className={styles.loading}>Loading...</h2>
    )
  }
  if(submited && stateProducts.data){
    navigate("/Recursos");
  }
  //console.log(errors);

  return (
    <div className={styles.conteiner}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Crear Producto</h2>
        <label>Nombre</label>

        <input type={"text"} {...register("name",{required: true, maxLength:20})}/>
        {errors.name && <span className={styles.error}>Este campo no puede quedar vacío o tener un máximo de 20 caracteres</span>}

        <label>Descripcion</label>
        <textarea cols="30" rows="10" type={"textarea"} {...register("description",{maxLength: 100})}></textarea>
        {errors.description && <span className={styles.error}>No puede superar los 100 caracteres</span>}

        <label>Precio</label>
        <input type={"number"} {...register("price",{ required:true, min: 0})}/>
        {errors.price && <span className={styles.error}>El precio no puede ser un valor negativo o estar vacío</span>}

        <label>Stock</label>
        <input type={"number"} {...register("stock",{ required:true, min: 0})}/>
        {errors.stock && <span className={styles.error}>El stock no puede ser un valor negativo o estar vacío</span>}

        <label>Categoria</label>
        <select {...register("category")}>
          <option value="computers">Computadora</option>
          <option value="phones">Celulares</option>
          <option value="accesories">Accesorios</option>
        </select>

        <button className={styles.buttonagregarproduct} type="submit">Crear</button>
      </form>
    </div>
  )
}