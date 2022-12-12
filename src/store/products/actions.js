import {
    SAVE_DATA_FULLFILLED,
    SAVE_DATA_LOADING,
    SAVE_DATA_REJECTED,
    ADD_DATA_FULLFILLED,
    ADD_DATA_LOADING,
    ADD_DATA_REJECTED,
    EDIT_PRODUCT_FULLFILLED,
    EDIT_PRODUCT_LOADING,
    EDIT_PRODUCT_REJECTED,
    DELETE_PRODUCTS_FULLFILLED,
    DELETE_PRODUCTS_LOADING,
    DELETE_PRODUCTS_ERROR } from './types'


//Guardo la lista de productos

export const saveData = (data) => {
    return {
        type: SAVE_DATA_FULLFILLED,
        payload: data,
    };
};

export const saveDataLoading = (isLoading) => {
    return{
        type: SAVE_DATA_LOADING,
        payload: isLoading,
    };
};

export const saveDataError = () => {
    return {
      type: SAVE_DATA_REJECTED,
    };
};

//Agrego productos por el metodo POST

export const addProduct = (data) => {
    return{
        type: ADD_DATA_FULLFILLED,
        payload: data,
    };
};

export const addProductLoading = (isLoading) =>{
    return{
        type: ADD_DATA_LOADING,
        payload: isLoading,
    };
};

export const addProductError = () =>{
    return{
        type: ADD_DATA_REJECTED,
    };
};

//Edito los productos
export const editProduct = (data) => {
    return{
        type: EDIT_PRODUCT_FULLFILLED,
        payload: data,
    };
};

export const editProductLoading = (isLoading) =>{
    return{
        type: EDIT_PRODUCT_LOADING,
        payload: isLoading,
    };
};

export const editProductError = () =>{
    return{
        type: EDIT_PRODUCT_REJECTED,
    };
};

//Elimino los productos

export const deleteProduct = (data) => {
    return{
        type: DELETE_PRODUCTS_FULLFILLED,
        payload: data,
    };
};

export const deleteProductLoading = (isLoading) =>{
    return{
        type: DELETE_PRODUCTS_LOADING,
        payload: isLoading,
    };
};

export const deleteProductError = () =>{
    return{
        type: DELETE_PRODUCTS_ERROR,
    };
};