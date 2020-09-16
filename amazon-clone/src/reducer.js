export const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) => {
    return (basket.reduce((total, eachDict) => {
        return total + eachDict?.price
    }, 0))
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, basket: [...state.basket, action.item],
            }

        case 'CLEAR_BASKET':
            return {
                basket: [], user: null
            }

        case 'REMOVE_FROM_BASKET':
            const idx = state.basket.findIndex((eachBasketItem) => (
                eachBasketItem.id === action.id
            ))
            const newBasket = [...state.basket]
            if (idx >= 0) {
                newBasket.splice(idx, 1)
            }

            return {
                ...state, basket: newBasket,
            }
        case 'SET_USER':
            return {
                ...state, user: action.user
            }
        default:
            return state;
    }
}

export default reducer