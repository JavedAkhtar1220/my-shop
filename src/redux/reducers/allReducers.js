import { actionType } from "../contants";

const initialProductsState = {
    products: []
}

const initialCardState = {
    cards: []
}

export const setProducts = (state = initialProductsState, { type, payload }) => {
    switch (type) {
        case actionType.SET_PRODUCTS:
            return { ...state, product: payload };
        default:
            return state
    }
}

export const checkAuth = (state = false, { type, status }) => {
    switch (type) {
        case actionType.CHECK_AUTH:
            return status;
        default:
            return state;
    }
}

export const checkStatus = (state = {}, { type, userStatus }) => {
    switch (type) {
        case actionType.USER_STATUS:
            return userStatus;
        default:
            return state;
    }
}

export const userData = (state = initialCardState, { type, userData }) => {
    switch (type) {
        case actionType.USER_DATA:
            return { ...state, ...userData };
        default:
            return state
    }
}

export const cartData = (state = {}, { type, payload }) => {
    switch (type) {
        case actionType.CART_DATA:
            return { ...state, cards: payload };
        default:
            return state;
    }
}