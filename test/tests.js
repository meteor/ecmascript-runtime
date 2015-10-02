var assert = require("assert");

function runTests(runtime) {
  it("Promise is defined", function () {
    assert.strictEqual(typeof runtime.Promise, "function");
  });

  it("Promise basically works", function (done) {
    runtime.Promise.resolve(1234).then(function (result) {
      assert.strictEqual(result, 1234);
      done();
    });
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
  });
}

describe("meteor-ecmascript-runtime", function () {
  runTests(require(".."));
});

describe("server.js", function () {
  runTests(require("../server.js"));
});

describe("client.js", function () {
  global.window = global;
  require("../client.js");
  delete global.window;

  runTests({
    Promise: global.Promise,
    Map: global.Map,
    Set: global.Set
  });
});
