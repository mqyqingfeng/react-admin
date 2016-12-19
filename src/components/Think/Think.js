import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router'

class Think extends React.Component {
    render() {

        let { children, params } = this.props;

        return (
            <div>
      			    Think 系列
      		  </div>
        );

    }
}

export default Think;
