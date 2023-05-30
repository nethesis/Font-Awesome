"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prefix = "fal";
var iconName = "{{kebabName}}";
var width = {{width}};
var height = {{height}};
var aliases = [];
var unicode = "";
var svgPathData = "{{svgString}}";

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.fa{{camelName}} = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;