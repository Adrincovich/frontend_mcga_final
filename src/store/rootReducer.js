import {combineReducers} from "redux";
import productsReducer from "./products/reducer";

// Agregamos los productos acá
const rootReducer = combineReducers({
    products: productsReducer,
});

export default rootReducer;