# npccoincore-message

[![Build Status](https://img.shields.io/travis/npccoin/npccoincore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/npccoin/npccoincore-message)
[![NPM Package](https://img.shields.io/npm/v/@npccoin/npccoincore-message.svg?style=flat-square)](https://www.npmjs.org/package/@npccoin/npccoincore-message)

> Message Verification and Signing for npccoincore-lib

npccoincore-message adds support for verifying and signing npccoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main npccoincore-lib repo](https://github.com/npccoin/npccoincore-lib) for more information.

## Install

```sh
npm install @npccoin/npccoincore-message
```

To sign a message:

```javascript
var npccoincore = require('@npccoin/npccoincore-lib');
var Message = require('@npccoin/npccoincore-message');

var privateKey = npccoincore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

Feel free to dive in! [Open an issue](https://github.com/npccoin/npccoincore-message/issues/new) or submit PRs.

Please see [CONTRIBUTING.md](https://github.com/npccoin/npccoin/blob/master/CONTRIBUTING.md) on the NPCcoin Core repo for information about how to contribute.

## License

Code released under [the MIT license](LICENSE).
