import React from 'react';

import './iconfont.scss';

class IconFont extends React.Component {

	constructor() {

	    super();

	}


    render() {

        return (
            <div className="icon-list-wrap">
                <p>使用字体图标：</p>
            	<ul className="icon-lists clear">
                    <li><i className="icon iconfont icon-appreciate"></i></li>
                    <li><i className="icon iconfont icon-check"></i></li>
                    <li><i className="icon iconfont icon-close"></i></li>
                    <li><i className="icon iconfont icon-edit"></i></li>
                    <li><i className="icon iconfont icon-emoji"></i></li>
                </ul>
      		</div>
        );

    }
}

export default IconFont;
