const issues = (state = { open: 0, close: 0 }, action) => {
    switch (action.type) {
        case 'UPDATE_ISSUES':
            return {
                ...state,
                open: state.open + action.open,
                close: state.close + action.close
            }
        default:
            return state
    }
}

export default issues;