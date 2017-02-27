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

/**
 * 封装的fetch函数
 * 依然可以像jquery一样使用type, data字段，但会根据是否使用type字段进行不同的处理
 * 如果使用了type字段
 * 当type为get时，会将data中的数据自动拼接到url中，
 * 当type为post时，会将data中的数据拼接放在body中，
 * 当header的content-type设置为application/json,会使用json.stringify处理data字段，并且添加到body中
 * 不使用type字段时
 * 使用正常的fetch方式进行传参
 */
export default function(url, opt){

	let defaultOptions = {
		'method': opt.type || 'GET',
		'headers': {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	};

	let options = Object.assign({}, defaultOptions, opt)

	if (options.type) {

		if(options.headers && options.headers['Content-Type'] == 'application/json') {

			if (!options.body) {
				options.body = JSON.stringify(options.data)
			}

		}
		else if (options.data) {

			let bodyString = urlEncode(options.data);

			bodyString = bodyString.substr(1, bodyString.length);

			switch (options.method.toLowerCase()) {
				case 'post':
					options.body = bodyString;
					break;
				case 'get':
				default:
					url = url + '?' + bodyString;
			}

		}

		options.data && delete options.data;
		options.type && delete options.type;

	}

	return fetch(url, options).then(response => response.json())

}
