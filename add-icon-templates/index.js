/*!
 * Nethesis Icon Set based on @fontawesome - https://fontawesome.com
 * License - https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt
 * Copyright 2023 Nethesis srl.
 */
(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof define === "function" && define.amd
    ? define(["exports"], factory)
    : factory((global["nethesis-solid-svg-icons"] = {}));
})(this, function (exports) {
  "use strict";

  var prefix = "fas";

{{#icons}}
  var {{id}} = {
      prefix: "fas",
      iconName: "{{iconName}}",
      icon: {{{icon}}},
  };
{{/icons}}

  var icons = {
    {{#icons}}
    {{id}}: {{id}},
    {{/icons}}
  };

  exports.fas = icons;
  exports.prefix = prefix;

  {{#icons}}
  exports.{{id}} = {{id}};
  {{/icons}}

  Object.defineProperty(exports, "__esModule", { value: true });
});
