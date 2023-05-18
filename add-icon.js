// include deps
var fs = require("fs");
var mustache = require("mustache");
var parse = require("parse-svg-path");
var extract = require("extract-svg-path");
var path = require("path");
var _ = require("lodash");

// read file from input
var iconFile = process.argv[2];

// extract icon name from file name
var iconName = path.parse(iconFile).name;

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
};

// create fa<IconName>.d.ts file
fs.readFile(
  __dirname + "/add-icon-templates/faIcon.d.ts",
  function (err, data) {
    if (err) throw err;
    var output = mustache.render(data.toString(), obj);

    fs.writeFileSync(__dirname + "/fa" + obj.camelName + ".d.ts", output);
  }
);

// create fa<IconName>.js file
fs.readFile(__dirname + "/add-icon-templates/faIcon.js", function (err, data) {
  if (err) throw err;
  var output = mustache.render(data.toString(), obj);

  fs.writeFileSync(__dirname + "/fa" + obj.camelName + ".js", output);
});

// append new definition
fs.appendFileSync(
  __dirname + "/index.d.ts",
  "\nexport const fa" + obj.camelName + ": IconDefinition;"
);
