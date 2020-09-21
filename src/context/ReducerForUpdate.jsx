const ReducerForUpdate = (state, action) => {
    switch (action.type) {
        case 'ChangeState':
            return action.payload
        default:
            return state
    }

}

export default ReducerForUpdate;