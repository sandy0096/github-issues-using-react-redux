import React from 'react';
import { connect } from "react-redux";
import { goToNext } from './../actions';

const styles = {
    tag: {
        fontSize: 14,
        borderRadius: 12,
        padding: '5px 10px',
        margin: '0 5px',
        background: 'pink',
        whiteSpace: 'nowrap',
        height: 'max-content',
        alignSelf: 'center'

    },
    listContainer: {
        width: '83%',
        maxHeight: 'calc(100vh - 150px)',
        overflowX: 'scroll'

    },
    list: {
        height: 'auto',
        padding: '1px 30px',
        background: 'transparent',
        border: '1px solid grey',
        display: 'flex',
    },
    comment: {
        fontSize: 12,
        alignSelf: 'center',
        marginLeft: 'auto',
        display: 'inline-flex'

    },
    loader: {
        height: 22,
        width: 22,
        padding: '10px 50%'
    },
    titleContainer: { margin: '20px 0', maxWidth: '68%' },
    heading: {
        fontSize: 12,
        fontWeight: 600
    },
    subHeader: {
        fontSize: 10,
    }

};

const Tags = props => {
    const { tags } = props;
    return tags.map(tag => <div key={tag.id} style={{ ...styles.tag, background: '#' + tag.color }}> {tag.name}</ div>)
}

const Comment = props => {
    const { comment } = props;
    return <span title={'Comment'} style={styles.comment}><img src={'./speech-bubble.png'} /> &nbsp; {comment}</span>
};

const List = (props) => {
    const { issue } = props;
    return <div style={styles.list}>
        <div style={styles.titleContainer}>
            <div style={styles.heading}>{issue.title}</div>
            <span style={styles.subHeader}>#{issue.issue_number} Opened By {issue.username}</span>
        </div>
        <Tags tags={issue.tags} />
        <Comment comment={issue.comments} />
    </div>
};

const onScrollChange = (e, props) => {
    const { next } = props;
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
        next();
    }
}

function Issues(props) {
    const { issues, isFetching } = props;
    return <div style={styles.listContainer} onScroll={(e) => onScrollChange(e, props)}>
        {issues.map(issue => {
            return <List
                key={issue.id}
                issue={issue}
            />
        })}
        {isFetching ? <img style={styles.loader} src={'./45.gif'} /> : null}
    </div>
}

const mapDispatchToProps = dispatch => {
    return {
        next: () => dispatch(goToNext()),
    }
}

const mapStateToProps = state => {
    const { isFetching } = state.pagination;
    return {
        isFetching: isFetching
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Issues);