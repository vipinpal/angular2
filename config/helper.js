/// <reference path="./../typings.d.ts" />
"use strict";
const path = require("path");
const _root = path.resolve(__dirname, "..");
const root = function(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
};
exports.root = root;
