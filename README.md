# json-parse-safe

Like JSON.parse, but doesn't throw on invalid JSON.

## Usage

Takes the same arguments as JSON.parse.

```
const parse = require('json-parse-safe');
const validJson = '{ "foo": "bar" }';
const invalidJson = 'foo';

console.log(parse(validJson)); // { foo: 'bar' }
console.log(parse(invalidJson)); // null
```
