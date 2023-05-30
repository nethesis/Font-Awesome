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

  var faGrid2 = {
      prefix: "fas",
      iconName: "grid-2",
      icon: [24,24,[],"f590","M4.5 2.5C3.39543 2.5 2.5 3.39543 2.5 4.5V8.5C2.5 9.60457 3.39543 10.5 4.5 10.5H8.5C9.60457 10.5 10.5 9.60457 10.5 8.5V4.5C10.5 3.39543 9.60457 2.5 8.5 2.5H4.5ZM4.5 13.5C3.39543 13.5 2.5 14.3954 2.5 15.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H8.5C9.60457 21.5 10.5 20.6046 10.5 19.5V15.5C10.5 14.3954 9.60457 13.5 8.5 13.5H4.5ZM13.5 4.5C13.5 3.39543 14.3954 2.5 15.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5V8.5C21.5 9.60457 20.6046 10.5 19.5 10.5H15.5C14.3954 10.5 13.5 9.60457 13.5 8.5V4.5ZM15.5 13.5C14.3954 13.5 13.5 14.3954 13.5 15.5V19.5C13.5 20.6046 14.3954 21.5 15.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V15.5C21.5 14.3954 20.6046 13.5 19.5 13.5H15.5Z"],
  };

  var icons = {
    faGrid2: faGrid2,
  };

  exports.fas = icons;
  exports.prefix = prefix;

  exports.faGrid2 = faGrid2;

  Object.defineProperty(exports, "__esModule", { value: true });
});
