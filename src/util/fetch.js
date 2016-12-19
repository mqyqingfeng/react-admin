/*
* @Author: kevin
* @Date:   2016-12-19 12:30:51
* @Last Modified by:   kevin
* @Last Modified time: 2016-12-19 12:51:07
*/

require('es6-promise').polyfill();

import fetch from 'isomorphic-fetch';

/**
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码,默认为true
 *
 * return URL参数字符串
 */
const urlEncode = function(param, key, encode) {

    if (param == null) return '';

    let paramStr = '';
    let t = typeof(param);

    if (t == 'string' || t == 'number' || t == 'boolean') {

        paramStr += '&' + key + '=' + ((encode == null || encode) ? param : param);

    }
    else {

        for (let i in param) {
            let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '[' + i + ']');
            paramStr += urlEncode(param[i], k, encode);
        }

    }

    return paramStr;

};

export default function(url, opt){

	let options = {
		'method': opt.type,
		'headers': {
			'Content-Type': 'application/x-www-form-urlencoded'
		}

	};

	if (opt.data) {

		let bodyString = urlEncode(opt.data);

		bodyString = bodyString.substr(1, bodyString.length);

		if (options.method.toLowerCase() == 'post') {

		    options.body = bodyString;

		}
		else if (options.method.toLowerCase() == 'get') {

		    url = url + '?' + bodyString;

		}

	}

	return fetch(url, options).then(response => response.json())

}
