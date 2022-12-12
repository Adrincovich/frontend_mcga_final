import { SAVE_DATA_FULLFILLED,
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

//Inicializo los estados (array vacío - cargando - error)
const INITIAL_STATE = {
    data: [],
    isLoading: false,
    isError: false,
};

//Guardamos, obtenemos, agregamos, modificamos y eliminamos datos del producto
const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case SAVE_DATA_FULLFILLED:
            return {
                ...state,
                data: action.payload,
                isError: false,
            };

        case SAVE_DATA_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };

        case SAVE_DATA_REJECTED:
            return{
                ...state,
                isError: true,
                isLoading: false,
            };

        case ADD_DATA_FULLFILLED:
            return{
                ...state,
                data: action.payload,
                isError: false,
            };

        case ADD_DATA_LOADING:
            return{
                ...state,
                isLoading: action.payload,
            };

        case ADD_DATA_REJECTED:
            return{
                ...state,
                isError: true,
                isLoading: false,
            };

        case EDIT_PRODUCT_FULLFILLED:
            return{
                ...state,
                data: state.data.map((product)=>{
                    if(product._id === action.payload._id){
                        return action.payload;
                    }
                    return product;
                }),
                isError: false,
            };

        case EDIT_PRODUCT_LOADING:
            return{
                ...state,
                isLoading: action.payload,
            };

        case EDIT_PRODUCT_REJECTED:
            return{
                ...state,
                isError: true,
                isLoading: false,
            };

            case DELETE_PRODUCTS_FULLFILLED:
                return{
                    ...state,
                    data: state.data.filter(x => x.id !== action.payload),
                    isError: false,
                };

            case DELETE_PRODUCTS_LOADING:
                return{
                    ...state,
                    isLoading: action.payload,
                };

            case DELETE_PRODUCTS_ERROR:
                return{
                    ...state,
                    isError: true,
                    isLoading: false,
                };

        default:
            return state;
    }

};

export default productsReducer;