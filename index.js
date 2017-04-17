try {
  require.resolve("core-js/es6/object");
} catch (e) {
  throw new Error([
    "The core-js npm package could not be found in your node_modules ",
    "directory. Please run the following command to install it:",
    "",
    "  meteor npm install --save core-js",
    ""
  ].join("\n"));
}

require("core-js/es6/object");
require("core-js/es6/array");
require("core-js/es6/string");
require("core-js/es6/function");
require("core-js/fn/object/values");
require("core-js/fn/object/entries");
require("core-js/fn/object/get-own-property-descriptors");
require("core-js/fn/string/pad-start");
require("core-js/fn/string/pad-end");
require("core-js/fn/string/trim-start");
require("core-js/fn/string/trim-end");
require("core-js/fn/number/is-finite");
require("core-js/fn/number/is-nan");
require("core-js/fn/number/is-integer");
require("core-js/fn/number/is-safe-integer");
require("core-js/fn/number/parse-float");
require("core-js/fn/number/parse-int");
require("core-js/fn/number/epsilon");
require("core-js/fn/number/max-safe-integer");
require("core-js/fn/number/min-safe-integer");
require("core-js/fn/number/to-fixed");
require("core-js/fn/number/to-precision");
require("core-js/fn/parse-float");
require("core-js/fn/parse-int");
require("core-js/fn/array");

Symbol = exports.Symbol = global.Symbol ||
  require("core-js/es6/symbol");

Map = exports.Map = require("core-js/es6/map");
Set = exports.Set = require("core-js/es6/set");
