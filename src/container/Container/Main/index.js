/*
* @Author: kevin
* @Date:   2016-12-20 16:34:59
* @Last Modified by:   kevin
* @Last Modified time: 2016-12-20 20:04:29
* @Description: index页面，切换主要内容区的container
*/

import React from 'react';

import ReactDOM from 'react-dom';

import Header from 'COMPONENTS/Header';

import SiderBar from 'COMPONENTS/SiderBar';

import './main.scss';

class Main extends React.Component {

    render() {

        return (
            <div className='main-wrap' >
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
