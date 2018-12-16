# mazzuma-node

A library for interaction with Mazzuma payment gateway

### Installation

```bash
npm install @silentworks/mazzuma-node
```

### Usage

Making a payment request

```javascript
const mazzuma = require('@silentworks/mazzuma-node').mazzuma('api_key');
const requestPayment = mazzuma.create(mazzuma.MTN_TO_AIRTEL);

requestPayment.create({
    amount: 1,
    to: '',
    from: '',
}).then((response) => {

});
```

Checking transaction status

```javascript
const mazzuma = require('@silentworks/mazzuma-node').mazzuma('api_key');
const status = mazzuma.transactionStatus('transaction_id');

status.then(response => {

});
```

Typings are also supplied as part of the library for your Typescript needs
