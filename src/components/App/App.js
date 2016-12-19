import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../Header/Header.js';
import SiderBar from '../SiderBar/SiderBar.js';

import './app.scss';

class App extends React.Component {
    render() {

        return (
            <div className='app'>
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

export default App;
