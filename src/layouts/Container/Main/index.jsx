import React from 'react';

import Header from 'COMPONENTS/Header';

import SiderBar from 'COMPONENTS/SiderBar';

import './main.scss';

class Main extends React.Component {

    render() {

        return (
            <div className="main-wrap" >
                <SiderBar />
                <div className="content">
                    <Header />
                    <div className="main_wrapper">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }

}

export default Main;
