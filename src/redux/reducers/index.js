import { combineReducers } from "redux";
import { checkAuth, userData, setProducts, cartData, checkStatus } from "./allReducers";

export const rootReducer = combineReducers({
    isLogin: checkAuth,
    status: checkStatus,
    products: setProducts,
    cartData: cartData,
    userData: userData
})