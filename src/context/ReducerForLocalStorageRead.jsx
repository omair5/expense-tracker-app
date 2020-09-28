const ReducerForLocalStorageRead = (state, action) => {
    switch (action.type) {
        case 'read local storage':
            return true
        case 'change storage state':
            return false
        default:
            return state
    }
}

export default ReducerForLocalStorageRead;