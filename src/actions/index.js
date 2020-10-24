import { REPO, URL, HEADER } from './../constants';

const addData = (data) => ({
    type: 'ADD_DATA',
    data
})

const addQuery = query => ({
    type: 'ADD_FILTER',
    query
});

const nextPage = () => ({
    type: 'NEXT_PAGE',
})

const toggleFetch = () => ({
    type: 'TOGGLE_LOADING',
});

const updateIssues = data => ({
    type: 'UPDATE_ISSUES',
    open: data.open,
    close: data.close
})

export const goToNext = () => (dispatch, getState) => {
    dispatch(nextPage());
    const state = getState();
    const pagination = state.pagination;
    const query = { page: pagination.page, q: pagination.filters };
    dispatch(getIssues(query));
}

export const addFilter = (query) => (dispatch, getState) => {
    const state = getState();
    const qry = Object.assign(state.pagination.filter, query);
    dispatch(addQuery(qry));
}

export const updateOpenCloseIssues = (data) => (dispatch) => {
    dispatch(updateIssues(data));
}

export const getIssues = (query) => dispatch => {
    dispatch(toggleFetch())
    fetch(URL + REPO + new URLSearchParams(query).toString(), HEADER)
        .then((res) => {
            if (res.status === 400) alert('INSERT TOKEN IN CONSTANT.JS IF NOT')
            res.json().then((response) => {
                dispatch(toggleFetch())
                let form = {};
                let newRows = [];
                let issue = { open: 0, close: 0 }
                response.forEach(d => {

                    if (d.state !== 'open') issue.close += 1;
                    else issue.open += 1;

                    form = {
                        id: d.id,
                        title: d.title,
                        tags: d.labels,
                        issue_number: d.number,
                        comments: d.comments,
                        username: d.user.login,
                        status: d.state,
                        body: d.body
                    }
                    newRows.push(form);
                })
                dispatch(addData(newRows));
                dispatch(updateOpenCloseIssues(issue));
            });
        })
        .catch((err) => alert('INSERT TOKEN IN CONSTANT.JS IF NOT'));
};