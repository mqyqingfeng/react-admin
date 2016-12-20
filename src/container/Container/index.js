/*
* @Author: kevin
* @Date:   2016-12-20 16:23:47
* @Last Modified by:   kevin
* @Last Modified time: 2016-12-20 16:24:07
* @Description: 用来切换login页面和index页面的container
*/

import React from 'react';

class Container extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
        	<div>
        		{this.props.children || '没有内容，请刷新页面'}
        	</div>
        );
    }

}

export default Container;