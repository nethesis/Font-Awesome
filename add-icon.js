// include deps
var fs = require("fs");
var mustache = require("mustache");
var parse = require("parse-svg-path");
var extract = require("extract-svg-path");
var size = require("image-size");
var path = require("path");
var _ = require("lodash");

// read file from input
var iconFile = process.argv[2];

// extract icon name from file name
var iconName = path.parse(iconFile).name;

// get svg dimensions
var dimensions = size(__dirname + "/" + iconFile);

// extract svg array path from file
var path = extract(__dirname + "/" + iconFile);
var svgArray = parse(path);
var svgString = [];

// convert svg array into svg string
for (var s in svgArray) {
  var path = svgArray[s];

  var letter = path.shift();
  var block = letter + "" + path.join(" ");

  svgString.push(block);
}

// compose object for template
var obj = {
  camelName: _.upperFirst(_.camelCase(iconName)),
  kebabName: _.kebabCase(iconName),
  svgString: svgString.join(""),
  width: dimensions.width,
  height: dimensions.height,
};

// append new icon to icons
var iconsFile = require("./icons.json");
iconsFile.icons.push({
  id: "fa" + obj.camelName,
  prefix: "fas",
  iconName: obj.kebabName,
  icon: [obj.width, obj.height, [], "f590", obj.svgString],
});
fs.writeFileSync(__dirname + "/icons.json", JSON.stringify(iconsFile, null, 2));

// get current icons as objec
var iconsList = JSON.parse(JSON.stringify(iconsFile));
for (var i in iconsList.icons) {
  var icon = iconsList.icons[i];
  icon.icon = JSON.stringify(icon.icon);
}

// define obj for template
obj.icons = iconsList.icons;

// create new fa<IconName>.d.ts file
fs.readFile(
  __dirname + "/add-icon-templates/faIcon.d.ts",
  function (err, data) {
    if (err) throw err;
    var output = mustache.render(data.toString(), obj);

    fs.writeFileSync(__dirname + "/fa" + obj.camelName + ".d.ts", output);
  }
);

// create new fa<IconName>.js file
fs.readFile(__dirname + "/add-icon-templates/faIcon.js", function (err, data) {
  if (err) throw err;
  var output = mustache.render(data.toString(), obj);

  fs.writeFileSync(__dirname + "/fa" + obj.camelName + ".js", output);
});

// create new index.d.ts
fs.readFile(__dirname + "/add-icon-templates/index.d.ts", function (err, data) {
  if (err) throw err;
  var output = mustache.render(data.toString(), obj);

  fs.writeFileSync(__dirname + "/index.d.ts", output);
});

// create new index.js
fs.readFile(__dirname + "/add-icon-templates/index.js", function (err, data) {
  if (err) throw err;
  var output = mustache.render(data.toString(), obj);

  fs.writeFileSync(__dirname + "/index.js", output);
});

// create new index.mjs
fs.readFile(__dirname + "/add-icon-templates/index.mjs", function (err, data) {
  if (err) throw err;
  var output = mustache.render(data.toString(), obj);

  fs.writeFileSync(__dirname + "/index.mjs", output);
});
