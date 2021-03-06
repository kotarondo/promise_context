// Copyright (c) 2016, Kotaro Endo.
// license: "BSD-3-Clause"

// test README.md

require('./harness')
var PromiseContext = require('../PromiseContext');

var ctx = new PromiseContext();
ctx.setCompletion(onFulfilled, onRejected);

var A = executor_template.bind(null, 'A');
var B = executor_template.bind(null, 'B');
var C = executor_template.bind(null, 'C');
var D = executor_template.bind(null, 'D');

ctx.chain(A);
ctx.call(function sub() {
    ctx.chain(B);
    ctx.chain(C);
});
ctx.chain(D);
ctx.end();

expected_result = "valueD";
expected_order = "<AA><BB><CC><DD>";
order_separator = '';
