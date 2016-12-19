require('es6-promise').polyfill();

import fetch from 'isomorphic-fetch';

export default function(url, options){

	// let formData = new FormData();

	// if (options.body) {
	// 	Object.keys(options.body).forEach((key) => {
	// 		formData.append(key, options.body[key])
	// 	})
	// }

	// options.body = formData;

	if (options.body) {
		var bodyString = Object.keys(options.body).reduce((prev, cur) => ( prev + cur + '=' + options.body[cur] + '&'), '');
		bodyString = bodyString.substr(0, bodyString.length - 1);
		options.body = bodyString;
	}

	options.headers = {
		    "Content-Type": "application/x-www-form-urlencoded"
	}

	return fetch(url, options)
    .then(function(response) {
        return response.json();
    })

}
