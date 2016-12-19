/*
 * @Author: kevin
 * @Date:   2016-12-19 12:15:43
 * @Last Modified by:   kevin
 * @Last Modified time: 2016-12-19 14:54:57
 * @Description: 请求的基本示例
 */

'use strict';

import fetch from 'UTIL/fetch.js';

var fetchLogin = (data) => fetch('/api/login', {
    type: 'POST',
    data: data
})

export { fetchLogin };