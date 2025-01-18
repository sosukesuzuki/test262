// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
let values = [
  [-0, undefined, "0"],
  [-0, 1, "0"],
  [-0, 10, "0.000000000"],
  [-0, 50, "0.0000000000000000000000000000000000000000000000000"],
  [-0, 100, "0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"],
  [0, undefined, "0"],
  [0, 1, "0"],
  [0, 10, "0.000000000"],
  [0, 50, "0.0000000000000000000000000000000000000000000000000"],
  [0, 100, "0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"],
  [NaN, undefined, "NaN"],
  [NaN, 1, "NaN"],
  [NaN, 10, "NaN"],
  [NaN, 50, "NaN"],
  [NaN, 100, "NaN"],
  [Infinity, undefined, "Infinity"],
  [Infinity, 1, "Infinity"],
  [Infinity, 10, "Infinity"],
  [Infinity, 50, "Infinity"],
  [Infinity, 100, "Infinity"],
  [-Infinity, undefined, "-Infinity"],
  [-Infinity, 1, "-Infinity"],
  [-Infinity, 10, "-Infinity"],
  [-Infinity, 50, "-Infinity"],
  [-Infinity, 100, "-Infinity"],
  [3.141592653589793, undefined, "3.141592653589793"],
  [3.141592653589793, 1, "3"],
  [3.141592653589793, 10, "3.141592654"],
  [3.141592653589793, 50, "3.1415926535897931159979634685441851615905761718750"],
  [3.141592653589793, 100, "3.141592653589793115997963468544185161590576171875000000000000000000000000000000000000000000000000000"],
  [-1, undefined, "-1"],
  [-1, 1, "-1"],
  [-1, 10, "-1.000000000"],
  [-1, 50, "-1.0000000000000000000000000000000000000000000000000"],
  [-1, 100, "-1.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"],
  [1, undefined, "1"],
  [1, 1, "1"],
  [1, 10, "1.000000000"],
  [1, 50, "1.0000000000000000000000000000000000000000000000000"],
  [1, 100, "1.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"],
  [-123456.78, undefined, "-123456.78"],
  [-123456.78, 1, "-1e+5"],
  [-123456.78, 10, "-123456.7800"],
  [-123456.78, 50, "-123456.77999999999883584678173065185546875000000000"],
  [-123456.78, 100, "-123456.7799999999988358467817306518554687500000000000000000000000000000000000000000000000000000000000"],
  [123456.78, undefined, "123456.78"],
  [123456.78, 1, "1e+5"],
  [123456.78, 10, "123456.7800"],
  [123456.78, 50, "123456.77999999999883584678173065185546875000000000"],
  [123456.78, 100, "123456.7799999999988358467817306518554687500000000000000000000000000000000000000000000000000000000000"],
  [100000000000000000000, undefined, "100000000000000000000"],
  [100000000000000000000, 1, "1e+20"],
  [100000000000000000000, 10, "1.000000000e+20"],
  [100000000000000000000, 50, "100000000000000000000.00000000000000000000000000000"],
  [100000000000000000000, 100, "100000000000000000000.0000000000000000000000000000000000000000000000000000000000000000000000000000000"],
  [1e+21, undefined, "1e+21"],
  [1e+21, 1, "1e+21"],
  [1e+21, 10, "1.000000000e+21"],
  [1e+21, 50, "1000000000000000000000.0000000000000000000000000000"],
  [1e+21, 100, "1000000000000000000000.000000000000000000000000000000000000000000000000000000000000000000000000000000"],
  [-100000000000000000000, undefined, "-100000000000000000000"],
  [-100000000000000000000, 1, "-1e+20"],
  [-100000000000000000000, 10, "-1.000000000e+20"],
  [-100000000000000000000, 50, "-100000000000000000000.00000000000000000000000000000"],
  [-100000000000000000000, 100, "-100000000000000000000.0000000000000000000000000000000000000000000000000000000000000000000000000000000"],
  [-1e+21, undefined, "-1e+21"],
  [-1e+21, 1, "-1e+21"],
  [-1e+21, 10, "-1.000000000e+21"],
  [-1e+21, 50, "-1000000000000000000000.0000000000000000000000000000"],
  [-1e+21, 100, "-1000000000000000000000.000000000000000000000000000000000000000000000000000000000000000000000000000000"],
  [Number.MAX_VALUE, undefined, "1.7976931348623157e+308"],
  [Number.MAX_VALUE, 1, "2e+308"],
  [Number.MAX_VALUE, 10, "1.797693135e+308"],
  [Number.MAX_VALUE, 50, "1.7976931348623157081452742373170435679807056752584e+308"],
  [Number.MAX_VALUE, 100, "1.797693134862315708145274237317043567980705675258449965989174768031572607800285387605895586327668782e+308"],
  [-Number.MAX_VALUE, undefined, "-1.7976931348623157e+308"],
  [-Number.MAX_VALUE, 1, "-2e+308"],
  [-Number.MAX_VALUE, 10, "-1.797693135e+308"],
  [-Number.MAX_VALUE, 50, "-1.7976931348623157081452742373170435679807056752584e+308"],
  [-Number.MAX_VALUE, 100, "-1.797693134862315708145274237317043567980705675258449965989174768031572607800285387605895586327668782e+308"],
  [Number.MIN_VALUE, undefined, "5e-324"],
  [Number.MIN_VALUE, 1, "5e-324"],
  [Number.MIN_VALUE, 10, "4.940656458e-324"],
  [Number.MIN_VALUE, 50, "4.9406564584124654417656879286822137236505980261432e-324"],
  [Number.MIN_VALUE, 100, "4.940656458412465441765687928682213723650598026143247644255856825006755072702087518652998363616359924e-324"],
  [-Number.MIN_VALUE, undefined, "-5e-324"],
  [-Number.MIN_VALUE, 1, "-5e-324"],
  [-Number.MIN_VALUE, 10, "-4.940656458e-324"],
  [-Number.MIN_VALUE, 50, "-4.9406564584124654417656879286822137236505980261432e-324"],
  [-Number.MIN_VALUE, 100, "-4.940656458412465441765687928682213723650598026143247644255856825006755072702087518652998363616359924e-324"],
];

for (let [val, prec, expected] of values) {
  assert.sameValue(Number.prototype.toPrecision.call(val, prec), expected);
}

if (typeof assert.sameValue === "function") {
}
