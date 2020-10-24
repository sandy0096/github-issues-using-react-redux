import React from 'react';
import StatusBar from './components/statusBar';
import Issues from './components/issue';
import { connect } from 'react-redux';

const styles = {
    main: {
        borderRadius: 3,
        border: '3px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px 40px',
    }
};

class Layout extends React.Component {
    render() {
        const { issues } = this.props;
        return <div style={styles.main}>
            <StatusBar />
            <Issues issues={issues} />
        </div>
    }
}

const mapStateToProps = state => {
    const { store } = state;
    return { issues: store }
}

export default connect(mapStateToProps)(Layout);