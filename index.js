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
    : factory((global["nethesis-brands-svg-icons"] = {}));
})(this, function (exports) {
  "use strict";

  var prefix = "fab";

  var faGravatar = {
      prefix: "fab",
      iconName: "gravatar",
      icon: [24,24,[],"f590","m9.8 2.2c0 -1.2 1 -2.2 2.2 -2.2c6.6 0 12 5.4 12 12c0 6.6 -5.4 12 -12 12c-6.6 0 -12 -5.4 -12 -12c0 -3.8 1.8 -7.2 4.5 -9.4c1 -0.7 2.4 -0.6 3.1 0.4c0.8 0.9 0.6 2.3 -0.3 3.1c-1.8 1.4 -2.9 3.5 -2.9 5.9c0 4.2 3.4 7.6 7.6 7.6c4.2 0 7.6 -3.4 7.6 -7.6c0 -3.4 -2.3 -6.3 -5.4 -7.2v8c0 1.2 -1 2.2 -2.2 2.2c-1.2 0 -2.2 -1 -2.2 -2.2z"],
  };
  var faNetflix = {
      prefix: "fab",
      iconName: "netflix",
      icon: [24,24,[],"f590","m18.6 22.5q0.1 0 0.1 0c0 -0.1 0 -4.8 0 -10.5v-10.4h-4.8v9.2v-9.2h4.8v20.9q0 0 -0.1 0zm-4.7 -11.7l-0.4 -1.1c-0.5 -1 -0.8 -1.7 -2.5 -5.9c-0.5 -1.2 -0.9 -2.1 -0.9 -2.2v-0.1h-2.4h-2.4v10.5c0 5.7 0 10.4 0 10.5c0 0 0.4 -0.1 0.9 -0.1c0.5 -0.1 1.2 -0.1 1.6 -0.2c0.5 0 2.1 -0.1 2.2 -0.1c0.1 0 0.1 -0.2 0.1 -4.4v-4.4l0.5 1.2c2.1 5.2 3.1 7.6 3.1 7.6c0.1 0 0.4 0 0.8 0c1.1 0.1 2.6 0.2 3.7 0.3q0.3 0.1 0.4 0.1q0.1 0 0.1 0v-20.9h-4.8z"],
  };
  var faNordVpn = {
      prefix: "fab",
      iconName: "nord-vpn",
      icon: [24,24,[],"f590","m21.6 21.2c1.5 -2 2.4 -4.5 2.4 -7.2c0 -6.6 -5.4 -12 -12 -12c-6.6 0 -12 5.4 -12 12c0 2.7 0.9 5.2 2.4 7.1l5.6 -8.6l2 3l-0.5 -2.5l2.5 -4l4 6.5l-0.5 -2.5l0.5 -1z"],
  };
  var faSquareXTwitter = {
      prefix: "fab",
      iconName: "square-x-twitter",
      icon: [21,24,[],"f590","m18 1.5c1.7 0 3 1.3 3 3v15c0 1.7 -1.3 3 -3 3h-15c-1.7 0 -3 -1.3 -3 -3v-15c0 -1.7 1.3 -3 3 -3zm-3.3 3.9l-3.7 4.2l-3.1 -4.2h-4.6l5.5 7.2l-5.2 6h2.2l4 -4.6l3.5 4.6h4.5l-5.7 -7.6l4.8 -5.6zm-0.8 11.8l-8 -10.5h1.3l8 10.5z"],
  };

  var icons = {
    faGravatar: faGravatar,
    faNetflix: faNetflix,
    faNordVpn: faNordVpn,
    faSquareXTwitter: faSquareXTwitter,
  };

  exports.fab = icons;
  exports.prefix = prefix;

  exports.faGravatar = faGravatar;
  exports.faNetflix = faNetflix;
  exports.faNordVpn = faNordVpn;
  exports.faSquareXTwitter = faSquareXTwitter;

  Object.defineProperty(exports, "__esModule", { value: true });
});
