require("core-js/es6/array");

exports.Promise = require("meteor-promise");
exports.Map = require("core-js/es6/map");
exports.Set = require("core-js/es6/set");

if (typeof window === "object") {
  Promise = exports.Promise;
  Map = exports.Map;
  Set = exports.Set;
}
