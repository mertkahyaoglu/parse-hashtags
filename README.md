# parse-hashtags [![Build Status][travis-image]][travis-url]
> parses hashtags from a given text


## Install

```sh
$ npm install --save parse-hashtags
```


## Usage

```js
var parseHashtags = require('parse-hashtags');

parseHashtags('#parse #all #hashtags from this text');
//-> ['#parse', '#all', '#hashtags']
```


## License

MIT © [Mert Kahyaoğlu](http://mertkahyaoglu.github.io/)

[travis-url]: https://travis-ci.org/mertkahyaoglu/parse-hashtags
[travis-image]: https://travis-ci.org/mertkahyaoglu/parse-hashtags.svg?branch=master
