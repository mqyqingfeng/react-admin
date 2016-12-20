"use strict";

/**
 * 接口配置文档
 * 一个接口需要配置
 * name 接口的名字
 * type 接口的请求类型
 * url 接口的地址
 * response 接口的返回数据 为数组，每一个是接口可能返回的数据
 * position 指定接口返回的的数据，是response的索引
 */

let mockConfig = [
    {
    	"name": "login",
        "type": "post",
        "url": "/api/login",
        "response": [
        	{
            	status: 200,
            	data: {
	                username: 'qwer',
	                password: 'asdfg'
            	}
        	},
        	{
            	status: 300,
            	message: '请重试',
            	data: null
        	}
       	],
        "position": 0
    },
    {
    	"name": "login2",
        "type": "get",
        "url": "/api/desc",
        "response": [{
            status: 200,
            data: {
                username: 'qwer发发发ßß',
                password: 'asdfg'
            }
        }],
        "position": 0
    },
];

exports.mockConfig = mockConfig;
