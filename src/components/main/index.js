import React, { Component } from 'react';
import {connect} from 'react-redux';

class Main extends Component {
  render(){
    return(
        <div className="content">
            main page
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
