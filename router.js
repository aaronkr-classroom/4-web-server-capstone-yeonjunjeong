// router.js
"using strict";

// Listing 7.6 (p.123-124)
const httpStatus = require('http-status-codes'),
    contentTypes = require('./content-types'),
    utils = require('./utils');
    routes = {
      GET: {},
      POST: {}
    };

// 라우트에 따른 콜백 함수를 처리하기 위한 함수 handle의 생성
exports.handle = (req, res) => {
  try{
    routes[req.method][req.url](req, res);
  } catch (e) {
    console.log("error: " +e);
    res.writeHead(httpStatus.Ok, contentTypes.html);
    utils.getFile("views/error.html",res);
    }
};

exports.get = (url, action) => {
  routes["GET"][url] = action;
};
exports.post = (url, action) => {
  routes["POST"][url] = action;
};

