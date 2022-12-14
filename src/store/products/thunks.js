import {
    saveData,
    saveDataLoading,
    saveDataError,
    addProduct,
    addProductLoading,
    addProductError,
    editProduct,
    editProductLoading,
    editProductError,
    deleteProduct,
    deleteProductLoading,
    deleteProductError
} from './actions'

export const saveProducts = () => async (dispatch) => {
    try {
        dispatch(saveDataLoading(true));
        const response = await fetch('https://backend-mcga-final.vercel.app/Products');
        const productsResponse = await response.json();
        if (response.status !== 200) throw new Error('Error');
        dispatch(saveData(productsResponse));
        dispatch(saveDataLoading(false));
    } catch (error) {
        dispatch(saveDataError());
    }
};

export const addProductThunk = (product) => async (dispatch) => {
    try{
        dispatch(addProductLoading(true));
        const response = await fetch('https://backend-mcga-final.vercel.app/Products/add',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        const productResponse = await response.json();
        if(response.status !==200) throw new Error('Error');
        dispatch(addProduct(productResponse));
        dispatch(addProductLoading(false));
        dispatch(saveProducts());
    }catch (error){
        dispatch(addProductError());
    }
}

export const editProductThunk = (product) => async (dispatch) => {
    try{
        dispatch(editProductLoading(true));
        const response = await fetch(`https://backend-mcga-final.vercel.app/Products/update/${product._id}`,{
            method: 'PUT',
            mode: 'cors',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        const productResponse = await response.json();
        if(response.status !== 200) throw new Error('Error');
        dispatch(editProduct(productResponse));
        dispatch(editProductLoading(false));
        dispatch(saveProducts());
    }catch (error){
        dispatch(editProductError());
    }
}

export const deleteProductsThunk = (id) => async (dispatch) => {
    dispatch(deleteProductLoading());
    try {
    const response = await fetch(`https://backend-mcga-final.vercel.app/Products/delete/${id}`,
    {
        method: 'DELETE',
        // mode: 'no-cors',
        headers: {
            'content-Type': 'application/json',
        },
    });
    const json = await response.json();
    if(response.status !== 200 ) throw new Error(json)

    dispatch(deleteProduct(json));
    dispatch(saveProducts());
    } catch (error) {
    dispatch(deleteProductError(error.toString()));
    }
};