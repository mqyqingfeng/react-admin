import React from 'react';

import './iconfont.scss';

class IconFont extends React.Component {

    render() {

        return (
            <div className="icon-list-wrap">
                <p>使用字体图标：</p>
            	<ul className="icon-lists clear">
                    <li><i className="icon iconfont icon-appreciate" /></li>
                    <li><i className="icon iconfont icon-check" /></li>
                    <li><i className="icon iconfont icon-close" /></li>
                    <li><i className="icon iconfont icon-edit" /></li>
                    <li><i className="icon iconfont icon-emoji" /></li>
                </ul>
      		</div>
        );

    }
}

export default IconFont;
