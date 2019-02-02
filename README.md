# dashcore-message

[![Build Status](https://img.shields.io/travis/dashevo/dashcore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/dashevo/dashcore-message)
[![NPM Package](https://img.shields.io/npm/v/@dashevo/dashcore-message.svg?style=flat-square)](https://www.npmjs.org/package/@dashevo/dashcore-message)

> Message Verification and Signing for dashcore-lib

dashcore-message is a JavaScript implementation of [message signing and verification](http://bitcoin.stackexchange.com/questions/3337/what-are-the-safety-guidelines-for-using-the-sign-message-feature/3339#3339) for Dash. This is used to cryptographically prove that a certain message was signed by the holder of an address private key.

This is also implemented internally in [the main dashcore-lib repo](https://github.com/dashevo/dashcore-lib).

## Install

```sh
npm install @dashevo/dashcore-message
```

To sign a message:

```javascript
const dashcore = require('@dashevo/dashcore-lib');
const Message = require('@dashevo/dashcore-message');

let privateKey = dashcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
let signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
let address = 'ygMh6pnu87cVEmc6hWcgq27PPMQf5LqTfF';
let signature = 'Hzt8x84jddvWR7HrSqXnZ0Y7xobp0MvlOVBr+46D0OtjP55rGXwtsi8HVjRA+SGtj8EH8GEiwqyRzFJszowoW5w=';
let verified = Message('hello, world').verify(address, signature);  // true
```

## Contributing

Feel free to dive in! [Open an issue](https://github.com/dashevo/dashcore-message/issues/new) or submit PRs.

Please see [CONTRIBUTING.md](https://github.com/dashpay/dash/blob/master/CONTRIBUTING.md) on the DashCore repo for information about how to contribute.

## License

Code released under [the MIT license](LICENSE).
