(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./components/Nav/Nav", "./components/Title/Title", "./modules/Header/Header"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./components/Nav/Nav"), require("./components/Title/Title"), require("./modules/Header/Header"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.componentsNavNav, global.componentsTitleTitle, global.modulesHeaderHeader);
    global.ReactLibrary = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _Nav, _Title, _Header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _Nav = _interopRequireDefault(_Nav);
  _Title = _interopRequireDefault(_Title);
  _Header = _interopRequireDefault(_Header);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // Components
  // Modules
  // Library
  var _default = {
    components: {
      Nav: _Nav.default,
      Title: _Title.default
    },
    modules: {
      Header: _Header.default
    }
  };
  _exports.default = _default;
});