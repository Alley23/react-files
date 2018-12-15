import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

import './index.css';

class Layout extends Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="layout-warp">
                <Header />
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default Layout;
