const cartItems = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return state.some(cartItems => cartItems.id === action.payload.id) ? state : [...state, action.payload]
        case 'REMOVE_FROM_CART':
            return state.filter(cartItems => cartItems.id !== action.payload.id)
    }
    return state
}

export default cartItems;