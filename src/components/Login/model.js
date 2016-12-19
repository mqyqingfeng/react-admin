/*
* @Author: kevin
* @Date:   2016-11-22 14:26:06
* @Last Modified by:   kevin
* @Last Modified time: 2016-11-22 14:50:57
*/


'use strict';

import fetch from 'UTIL/fetch.js';

var loginFetch = function (data) {
    return fetch('/api/login', {
        method: 'POST',
        body: data
    })
}

export { loginFetch };