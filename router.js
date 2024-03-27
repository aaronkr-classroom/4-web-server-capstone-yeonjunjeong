// router.js
"using strict";

// Listing 7.6 (p.123-124)
const httpStatus = require('http-status-codes'),
    contentTypes = require('./content-types'),
    utils = require('./utils');

  // POST 및 GET 요청에 매핑된 라우트를 저장할 routes 객체의 정의
  routes = {
    GET: {},
    POST: {}
  };

// 라우트에 따른 콜백 함수를 처리하기 위한 함수 handle의 생성
exports.handle = (req, res) => {
  try{
    routes[req.method][req.url](req, res);
  } catch (e) {
    res.writeHead(httpStatus.Ok)
    }
};

exports.get = (url, action) => {
  routes["GET"][url] = action;
};
exports.post = (url, action) => {
  routes["POST"][url] = action;
};

