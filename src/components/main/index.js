import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import className from 'classnames';

class Main extends Component {
    render() {
        const {isLoading} = this.props.utils;
        let loadingClass = className({loader: true, 'active': !isLoading})
        return (
            <div className="content">
                <div className={loadingClass}></div>
                <Header/>
                <div></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {utils: state.utils};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
