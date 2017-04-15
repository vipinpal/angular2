import "core-js/es6";
import "core-js/es7/reflect";
import "zone.js/dist/zone";
import "zone.js/dist/long-stack-trace-zone";

if ("production") {
  // Production
} else {
  // Development and test
  Error["stackTraceLimit"] = Infinity;
}
