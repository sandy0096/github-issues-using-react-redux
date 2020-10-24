import React from 'react';
import { connect } from 'react-redux';

const styles = {
    container: {
        display: 'flex',
        padding: '10px 50px',
        border: '2px solid grey',
        borderTopRightRadius: '7px',
        borderTopLeftRadius: '7px',
        width: '75%',
        background: 'lightgreen',
        justifyContent: 'space-evenly'
    },
    issue: {

    }

};

const OpenIssues = (props) => { return <div style={styles.issue}>{props.issues} Open</div> }

const ClosedIssues = (props) => { return <div style={styles.issue}>{props.issues} closed</div> }

const mapPropsToState = state => {
    const { issues } = state;
    return {
        issues: issues
    }
};

export default connect(mapPropsToState)(function StatusBar(props) {
    const { issues } = props;
    return <div style={styles.container}>
        <OpenIssues issues={issues.open} />
        <ClosedIssues issues={issues.close} />
    </div>
})