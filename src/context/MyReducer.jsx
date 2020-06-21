const MyReducer = (state, action) => {
    console.log("from begining", state)
    console.log("from begining", action)
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return [...state.filter((value, index) => value.id !== action.payload)]
        case 'ADD_TRANSACTION':
            return [...state, action.payload]
        default:
            return state
    }
}

export default MyReducer