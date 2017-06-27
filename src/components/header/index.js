import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Header extends Component {
    render() {
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
                    <button type="button" className="uk-button uk-button-secondary">Войти</button>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
