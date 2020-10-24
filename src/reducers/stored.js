const stored = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return [
                ...state,
                ...action.data
            ]
        case 'CLEAR_DATA':
            return []
        default:
            return state
    }
}

export default stored;