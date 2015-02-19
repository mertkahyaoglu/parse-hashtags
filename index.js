'use strict';
module.exports = function (text) {
  if (typeof text !== 'string') {
    throw new TypeError('Expected a text');
  }

  var matcher = /[#]+[A-Za-z0-9-_]+/g;
  return text.match(matcher);
};
