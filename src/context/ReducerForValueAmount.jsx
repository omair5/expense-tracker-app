const ReducerForValueAmount = (state, action) => {
    switch (action.type) {
        case 'setAmount':
            return action.payload
        case 'empty':
            return action.payload
        case 'ValueForUpdate':
            return action.payload
        default:
            return state
    }
}

export default ReducerForValueAmount;