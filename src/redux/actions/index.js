import { actionType } from "../contants"

export const checkAuth = (isLogin) => {
    return {
        type: actionType.CHECK_AUTH,
        status: isLogin
    }
}


export const setProducts = (products) => {
    return {
        type: actionType.SET_PRODUCTS,
        payload: products
    }
}

export const userData = (user) => {
    return {
        type: actionType.USER_DATA,
        userData: user
    }
}

export const userStatus = (user) => {
    return {
        type: actionType.USER_STATUS,
        userStatus: user
    }
}

export const cartData = (productCart) => {
    return {
        type: actionType.CART_DATA,
        payload: productCart
    }
}
