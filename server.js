exports.Map = require("core-js/library/es6/map");
exports.Set = require("core-js/library/es6/set");

if (typeof window === "object") {
  Map = exports.Map;
  Set = exports.Set;
}
