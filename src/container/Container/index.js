/*
* @Author: kevin
* @Date:   2016-12-20 16:23:47
* @Last Modified by:   mqyqingfeng
* @Last Modified time: 2017-02-06 14:51:53
* @Description: 用来切换login页面和index页面的container
*/

import React from 'react';

class Container extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
        	<div className="root-wrap">
        		{this.props.children || '没有内容，请刷新页面'}
        	</div>
        );
    }

}

export default Container;