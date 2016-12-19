"use strict";

let login = (req, res, next) => {
    const data = req.body;
    console.log(data);
    if (data.userName === 'admin' && data.password === '1') {
        res.json({
        	status: 200,
        	data: {
        		userName: data.userName,
        		password: data.password,
        	}
        });
    } else {
        res.json({
        	status: 300,
        	message: "账号或者密码错误"
        });
    }

};

exports.login = login;
