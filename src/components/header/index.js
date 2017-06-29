import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';

class Header extends Component {
    componentDidMount() {
        
    }
    render() {
        const {isLogged, pic, name} = this.props.user;
        let headerRightTemplate = !isLogged
            ? <div className="">
                    <img className="uk-border-circle" src={pic.small} width="40" height="40"/>
                </div>
            : <button type="button" className="uk-button uk-button-secondary uk-button-small">Войти</button>;
        return (
            <nav is class="uk-navbar-container" uk-navbar uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active">
                            <Link to="/">Active</Link>
                        </li>
                    </ul>
                </div>
                <div className="uk-navbar-right uk-inverse uk-margin-small-right">
                    {headerRightTemplate}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
