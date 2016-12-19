/*
* @Author: kevin
* @Date:   2016-11-22 14:26:06
* @Last Modified by:   kevin
* @Last Modified time: 2016-12-19 13:08:03
*/


'use strict';

import fetch from 'UTIL/fetch.js';

var fetchLogin = (data) => fetch('/api/login', {
    type: 'POST',
    data: data
})


export { fetchLogin };