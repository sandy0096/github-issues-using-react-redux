const filter = {
    page: 1,
    filter: {},
    isFetching: false
}

const pagination = (state = filter, action) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            return {
                ...state,
                page: state.page + 1
            }
        case 'PREV_PAGE':
            return {
                ...state,
                page: state.page - 1,
            }
        case 'ADD_FILTER':
            return {
                ...state,
                page: 1,
                filter: action.query
            }
        case 'REMOVE_FILTER':
            return {
                ...state,
                page: 1,
                filter: action.query
            }
        case 'TOGGLE_LOADING':
            return {
                ...state,
                isFetching: !state.isFetching
            }
        default:
            return state
    }
}

export default pagination;