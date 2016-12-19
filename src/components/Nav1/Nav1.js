import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

class nav1 extends React.Component {
  render() {

    return (
      <div className="main">
      	nav1 ------ {this.props.params.id} {this.props.aaa.id}
      </div>
    );

  }
}

const mapStateToProps = (state, ownProps) => {
	return {
		aaa: ownProps.params
	}
}

export default connect(mapStateToProps)(nav1);