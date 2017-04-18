var assert = require("assert");

function runTests(runtime) {
  it("Object has appropriate static methods", function () {
    assert.strictEqual(typeof Object.assign, "function");
    assert.strictEqual(typeof Object.is, "function");
    assert.strictEqual(typeof Object.setPrototypeOf, "function");
    assert.strictEqual(typeof Object.getPrototypeOf, "function");
    assert.strictEqual(typeof Object.entries, "function");
    assert.strictEqual(typeof Object.values, "function");
    assert.strictEqual(typeof Object.getOwnPropertyDescriptors, "function");
  });

  it("String has appropriate prototype methods", function () {
    assert.strictEqual(typeof "asdf".startsWith, "function");
    assert.strictEqual(typeof "asdf".endsWith, "function");
    assert.strictEqual(typeof "asdf".repeat, "function");
    assert.strictEqual(typeof "asdf".trim, "function");
    assert.strictEqual(typeof "asdf".padStart, "function");
    assert.strictEqual(typeof "asdf".padEnd, "function");
    assert.strictEqual(typeof "asdf".trimStart, "function");
    assert.strictEqual(typeof "asdf".trimEnd, "function");
    assert.strictEqual(typeof "asdf".trimLeft, "function");
    assert.strictEqual(typeof "asdf".trimRight, "function");
  });

  it("Number has appropiate prototype methods", function () {
    assert.strictEqual(typeof Number.isFinite, "function");
    assert.strictEqual(typeof Number.isNaN, "function");
    assert.strictEqual(typeof Number.isInteger, "function");
    assert.strictEqual(typeof Number.isSafeInteger, "function");
    assert.strictEqual(typeof Number.parseFloat, "function");
    assert.strictEqual(typeof Number.parseInt, "function");
    assert.strictEqual(typeof Number.EPSILON, "number");
    assert.strictEqual(typeof Number.MAX_SAFE_INTEGER, "number");
    assert.strictEqual(typeof Number.MIN_SAFE_INTEGER, "number");
    assert.strictEqual(typeof Number.prototype.toFixed, "function");
    assert.strictEqual(typeof Number.prototype.toPrecision, "function");
    assert.strictEqual(typeof parseFloat, "function");
    assert.strictEqual(typeof parseInt, "function");
  });

  it("Array has appropiate prototype methods", function () {
    assert.strictEqual(typeof Array.from, "function");
    assert.strictEqual(typeof Array.of, "function");
    assert.strictEqual(typeof Array.isArray, "function");
    assert.strictEqual(typeof Array.prototype[Symbol.iterator], "function");
    assert.strictEqual(typeof Array.prototype.copyWithin, "function");
    assert.strictEqual(typeof Array.prototype.fill, "function");
    assert.strictEqual(typeof Array.prototype.find, "function");
    assert.strictEqual(typeof Array.prototype.findIndex, "function");
    assert.strictEqual(typeof Array.prototype.values, "function");
    assert.strictEqual(typeof Array.prototype.keys, "function");
    assert.strictEqual(typeof Array.prototype.entries, "function");
    assert.strictEqual(typeof Array.prototype.slice, "function");
    assert.strictEqual(typeof Array.prototype.join, "function");
    assert.strictEqual(typeof Array.prototype.indexOf, "function");
    assert.strictEqual(typeof Array.prototype.lastIndexOf, "function");
    assert.strictEqual(typeof Array.prototype.every, "function");
    assert.strictEqual(typeof Array.prototype.some, "function");
    assert.strictEqual(typeof Array.prototype.forEach, "function");
    assert.strictEqual(typeof Array.prototype.map, "function");
    assert.strictEqual(typeof Array.prototype.filter, "function");
    assert.strictEqual(typeof Array.prototype.reduce, "function");
    assert.strictEqual(typeof Array.prototype.reduceRight, "function");
    assert.strictEqual(typeof Array.prototype.sort, "function");
  });

  it("Typed Array has appropiate prototype methods", function () {
    assert.strictEqual(typeof Uint8Array.from, "function");
    assert.strictEqual(typeof Uint8Array.of, "function");
    assert.strictEqual(typeof Uint8Array.BYTES_PER_ELEMENT, "number");
    assert.strictEqual(typeof Uint8Array.prototype.BYTES_PER_ELEMENT, "number");
    assert.strictEqual(typeof Uint8Array.prototype[Symbol.iterator], "function");
    assert.strictEqual(typeof Uint8Array.prototype.copyWithin, "function");
    assert.strictEqual(typeof Uint8Array.prototype.fill, "function");
    assert.strictEqual(typeof Uint8Array.prototype.find, "function");
    assert.strictEqual(typeof Uint8Array.prototype.findIndex, "function");
    assert.strictEqual(typeof Uint8Array.prototype.values, "function");
    assert.strictEqual(typeof Uint8Array.prototype.keys, "function");
    assert.strictEqual(typeof Uint8Array.prototype.entries, "function");
    assert.strictEqual(typeof Uint8Array.prototype.slice, "function");
    assert.strictEqual(typeof Uint8Array.prototype.join, "function");
    assert.strictEqual(typeof Uint8Array.prototype.indexOf, "function");
    assert.strictEqual(typeof Uint8Array.prototype.lastIndexOf, "function");
    assert.strictEqual(typeof Uint8Array.prototype.every, "function");
    assert.strictEqual(typeof Uint8Array.prototype.some, "function");
    assert.strictEqual(typeof Uint8Array.prototype.forEach, "function");
    assert.strictEqual(typeof Uint8Array.prototype.map, "function");
    assert.strictEqual(typeof Uint8Array.prototype.filter, "function");
    assert.strictEqual(typeof Uint8Array.prototype.reduce, "function");
    assert.strictEqual(typeof Uint8Array.prototype.reduceRight, "function");
    assert.strictEqual(typeof Uint8Array.prototype.reverse, "function");
    assert.strictEqual(typeof Uint8Array.prototype.set, "function");
    assert.strictEqual(typeof Uint8Array.prototype.sort, "function");
    assert.strictEqual(typeof Uint8Array.prototype.subarray, "function");
    assert.strictEqual(typeof Uint8Array.prototype.toString, "function");
    assert.strictEqual(typeof Uint8Array.prototype.toLocaleString, "function");
  });

  it("Symbol basically works", function () {
    assert.strictEqual(typeof global.Symbol, "function");
    assert.strictEqual(global.Symbol, runtime.Symbol);
    assert.strictEqual(
      typeof Array.prototype[runtime.Symbol.iterator],
      "function"
    );

    var obj = Object.create(null);
    var self = Symbol("self");
    obj[self] = obj;
    assert.strictEqual(obj[self], obj);
  });

  it("Function.prototype[Symbol.hasInstance]", function () {
    assert.strictEqual(
      typeof Function.prototype[Symbol.hasInstance],
      "function"
    );

    function Constructor() {};
    assert.strictEqual(Constructor[Symbol.hasInstance](new Constructor), true);
    assert.strictEqual(Constructor[Symbol.hasInstance]({}), false);
  });

  it("Map is defined", function () {
    assert.strictEqual(typeof runtime.Map, "function");
  });

  it("Map basically works", function () {
    var map = new runtime.Map;
    var key = {};
    map.set(key, 1234);
    assert.deepEqual(map.entries().next(), {
      value: [key, 1234],
      done: false
    });
  });

  it("Set is defined", function () {
    assert.strictEqual(typeof runtime.Set, "function");
  });

  it("Set basically works", function () {
    var set = new runtime.Set;
    var key = {};
    set.add(key);
    assert.deepEqual(set.values().next(), {
      value: key,
      done: false
    });
  });

  it("Array methods", function () {
    assert.deepEqual(Array.from("123", Number), [1, 2, 3]);
    assert.deepEqual(Array.of(1, 3, 5), [1, 3, 5]);
    assert.deepEqual(
      Array(5).fill("oyez"),
      ["oyez", "oyez", "oyez", "oyez", "oyez"]
    );

    function isOdd(n) {
      return n % 2;
    }

    assert.strictEqual([2, 3, 4].find(isOdd), 3);
    assert.strictEqual([2, 3, 4].findIndex(isOdd), 1);
    assert.strictEqual([2, 3, 4].includes(3), true);
  });
}

describe("server.js", function () {
  runTests(require("../index.js"));

  it("reuses global constructors", function () {
    var server = require("../index.js");
    assert.strictEqual(global.Symbol, server.Symbol);
    assert.strictEqual(global.Map, server.Map);
    assert.strictEqual(global.Set, server.Set);
  });
});

describe("meteor-ecmascript-runtime", function () {
  runTests(require(".."));
});
