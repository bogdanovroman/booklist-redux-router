import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header';

class Main extends Component {
    render() {
        return (
            <div className="content">
                <Header/>
                <div></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
