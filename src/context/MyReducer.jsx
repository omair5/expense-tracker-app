const MyReducer = (state, action) => {
 
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return [...state.filter((value, index) => value.id !== action.payload)]
        case 'ADD_TRANSACTION':
            return [...state, action.payload]
        case 'reset':
            return []
        default:
            return state
    }
}

export default MyReducer