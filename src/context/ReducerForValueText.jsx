const ReducerForValueText = (state, action) => {
    switch (action.type) {
        case 'setText':
            return action.payload
        case 'empty':
            return action.payload
        case 'ValueForUpdate':
            return action.payload
        default:
            return state
    }
}
export default ReducerForValueText