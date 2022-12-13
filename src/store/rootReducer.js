import {combineReducers} from "redux";
import productsReducer from "./products/reducer";
import usersReducer from "./users/reducer";

// Agregamos los productos acá
const rootReducer = combineReducers({
    user: usersReducer,
    products: productsReducer,
});

export default rootReducer;