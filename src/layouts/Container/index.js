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