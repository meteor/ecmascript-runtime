require("core-js/es6/array");

exports.Map = require("core-js/es6/map");
exports.Set = require("core-js/es6/set");

if (typeof window === "object") {
  Map = exports.Map;
  Set = exports.Set;
}
