/*!
 * Nethesis Icon Set based on @fontawesome - https://fontawesome.com
 * License - https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt
 * Copyright 2023 Nethesis srl.
 */
import { icons } from './icons'

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global['nethesis-light-svg-icons'] = {})));
}(this, (function (exports) { 'use strict';

  var prefix = "fal";
  
  exports.fal = icons;
  exports.prefix = prefix;

  var e = {...exports, ...icons};

  Object.defineProperty(e, '__esModule', { value: true });

})));
