import React from 'react';

class Container extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
        	<div>
        		{this.props.children || '切换'}
        	</div>
        );
    }

}

export default Container;