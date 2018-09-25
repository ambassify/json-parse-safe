# json-parse-safe

Like JSON.parse, but doesn't throw on invalid JSON.

## Usage

Takes the same arguments as JSON.parse.

```js
const parse = require('json-parse-safe');
const validJson = '{ "foo": "bar" }';
const invalidJson = 'foo';

// Simple usage
console.log(parse(validJson)); // { foo: 'bar' }
console.log(parse(invalidJson)); // null

// Pass a reviver just like the real JSON.parse
parse('{"p": 5}', (key, value) =>
  typeof value === 'number'
    ? value * 2 // return value * 2 for numbers
    : value     // return everything else unchanged
);
// { p: 10 }

// choose a defaultValue for invalid json
console.log(parse(invalidJson, undefined, 'WHOOPS')); // 'WHOOPS'

```
