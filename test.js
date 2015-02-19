/*global describe, it */
'use strict';
var assert = require('assert');
var parseHashtags = require('./');

describe('parse-hashtags node module', function () {
  var result = parseHashtags("#must #return array of #hash_tags #full-stop # ##");
  it('must return array of hashtags', function () {
    assert.equal(result.length, 4);
    assert.equal(result[3], '#full-stop');
  });
});
