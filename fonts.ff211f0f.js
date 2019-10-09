// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../fonts/Quicksand/font.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Quicksand-BoldItalic.eot":[["Quicksand-BoldItalic.1a97efbf.eot","../fonts/Quicksand/Quicksand-BoldItalic.eot"],"../fonts/Quicksand/Quicksand-BoldItalic.eot"],"./Quicksand-BoldItalic.svg":[["Quicksand-BoldItalic.9126f8ff.svg","../fonts/Quicksand/Quicksand-BoldItalic.svg"],"../fonts/Quicksand/Quicksand-BoldItalic.svg"],"./Quicksand-BoldItalic.ttf":[["Quicksand-BoldItalic.92788500.ttf","../fonts/Quicksand/Quicksand-BoldItalic.ttf"],"../fonts/Quicksand/Quicksand-BoldItalic.ttf"],"./Quicksand-BoldItalic.woff":[["Quicksand-BoldItalic.a97a2692.woff","../fonts/Quicksand/Quicksand-BoldItalic.woff"],"../fonts/Quicksand/Quicksand-BoldItalic.woff"],"./Quicksand-BoldItalic.woff2":[["Quicksand-BoldItalic.b3657c9a.woff2","../fonts/Quicksand/Quicksand-BoldItalic.woff2"],"../fonts/Quicksand/Quicksand-BoldItalic.woff2"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../fonts/Quicksand/font1.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Quicksand-Bold.eot":[["Quicksand-Bold.3b0f35d1.eot","../fonts/Quicksand/Quicksand-Bold.eot"],"../fonts/Quicksand/Quicksand-Bold.eot"],"./Quicksand-Bold.svg":[["Quicksand-Bold.f70e2528.svg","../fonts/Quicksand/Quicksand-Bold.svg"],"../fonts/Quicksand/Quicksand-Bold.svg"],"./Quicksand-Bold.ttf":[["Quicksand-Bold.ad0d0476.ttf","../fonts/Quicksand/Quicksand-Bold.ttf"],"../fonts/Quicksand/Quicksand-Bold.ttf"],"./Quicksand-Bold.woff":[["Quicksand-Bold.e81d9b50.woff","../fonts/Quicksand/Quicksand-Bold.woff"],"../fonts/Quicksand/Quicksand-Bold.woff"],"./Quicksand-Bold.woff2":[["Quicksand-Bold.0fda1670.woff2","../fonts/Quicksand/Quicksand-Bold.woff2"],"../fonts/Quicksand/Quicksand-Bold.woff2"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../fonts/Quicksand/font2.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./QuicksandDash-Regular.eot":[["QuicksandDash-Regular.59861329.eot","../fonts/Quicksand/QuicksandDash-Regular.eot"],"../fonts/Quicksand/QuicksandDash-Regular.eot"],"./QuicksandDash-Regular.svg":[["QuicksandDash-Regular.6159a019.svg","../fonts/Quicksand/QuicksandDash-Regular.svg"],"../fonts/Quicksand/QuicksandDash-Regular.svg"],"./QuicksandDash-Regular.ttf":[["QuicksandDash-Regular.f584e217.ttf","../fonts/Quicksand/QuicksandDash-Regular.ttf"],"../fonts/Quicksand/QuicksandDash-Regular.ttf"],"./QuicksandDash-Regular.woff":[["QuicksandDash-Regular.e8dff82b.woff","../fonts/Quicksand/QuicksandDash-Regular.woff"],"../fonts/Quicksand/QuicksandDash-Regular.woff"],"./QuicksandDash-Regular.woff2":[["QuicksandDash-Regular.e955f602.woff2","../fonts/Quicksand/QuicksandDash-Regular.woff2"],"../fonts/Quicksand/QuicksandDash-Regular.woff2"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../fonts/Quicksand/font3.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Quicksand-Regular.eot":[["Quicksand-Regular.af9b1a49.eot","../fonts/Quicksand/Quicksand-Regular.eot"],"../fonts/Quicksand/Quicksand-Regular.eot"],"./Quicksand-Regular.svg":[["Quicksand-Regular.3d5d2fd9.svg","../fonts/Quicksand/Quicksand-Regular.svg"],"../fonts/Quicksand/Quicksand-Regular.svg"],"./Quicksand-Regular.ttf":[["Quicksand-Regular.d83135df.ttf","../fonts/Quicksand/Quicksand-Regular.ttf"],"../fonts/Quicksand/Quicksand-Regular.ttf"],"./Quicksand-Regular.woff":[["Quicksand-Regular.99245b16.woff","../fonts/Quicksand/Quicksand-Regular.woff"],"../fonts/Quicksand/Quicksand-Regular.woff"],"./Quicksand-Regular.woff2":[["Quicksand-Regular.33880c53.woff2","../fonts/Quicksand/Quicksand-Regular.woff2"],"../fonts/Quicksand/Quicksand-Regular.woff2"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../fonts/Quicksand/font4.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Quicksand-LightItalic.eot":[["Quicksand-LightItalic.173aba4a.eot","../fonts/Quicksand/Quicksand-LightItalic.eot"],"../fonts/Quicksand/Quicksand-LightItalic.eot"],"./Quicksand-LightItalic.svg":[["Quicksand-LightItalic.f08905b2.svg","../fonts/Quicksand/Quicksand-LightItalic.svg"],"../fonts/Quicksand/Quicksand-LightItalic.svg"],"./Quicksand-LightItalic.ttf":[["Quicksand-LightItalic.c2010d95.ttf","../fonts/Quicksand/Quicksand-LightItalic.ttf"],"../fonts/Quicksand/Quicksand-LightItalic.ttf"],"./Quicksand-LightItalic.woff":[["Quicksand-LightItalic.aafd18e9.woff","../fonts/Quicksand/Quicksand-LightItalic.woff"],"../fonts/Quicksand/Quicksand-LightItalic.woff"],"./Quicksand-LightItalic.woff2":[["Quicksand-LightItalic.18946351.woff2","../fonts/Quicksand/Quicksand-LightItalic.woff2"],"../fonts/Quicksand/Quicksand-LightItalic.woff2"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../fonts/Quicksand/font5.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Quicksand-Light.eot":[["Quicksand-Light.4b69399c.eot","../fonts/Quicksand/Quicksand-Light.eot"],"../fonts/Quicksand/Quicksand-Light.eot"],"./Quicksand-Light.svg":[["Quicksand-Light.10a2e62f.svg","../fonts/Quicksand/Quicksand-Light.svg"],"../fonts/Quicksand/Quicksand-Light.svg"],"./Quicksand-Light.ttf":[["Quicksand-Light.ca9aecc7.ttf","../fonts/Quicksand/Quicksand-Light.ttf"],"../fonts/Quicksand/Quicksand-Light.ttf"],"./Quicksand-Light.woff":[["Quicksand-Light.833f3083.woff","../fonts/Quicksand/Quicksand-Light.woff"],"../fonts/Quicksand/Quicksand-Light.woff"],"./Quicksand-Light.woff2":[["Quicksand-Light.cc7f9134.woff2","../fonts/Quicksand/Quicksand-Light.woff2"],"../fonts/Quicksand/Quicksand-Light.woff2"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../fonts/Quicksand/font6.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Quicksand-Italic.eot":[["Quicksand-Italic.56f16b8a.eot","../fonts/Quicksand/Quicksand-Italic.eot"],"../fonts/Quicksand/Quicksand-Italic.eot"],"./Quicksand-Italic.svg":[["Quicksand-Italic.460e1aeb.svg","../fonts/Quicksand/Quicksand-Italic.svg"],"../fonts/Quicksand/Quicksand-Italic.svg"],"./Quicksand-Italic.ttf":[["Quicksand-Italic.eef2eeae.ttf","../fonts/Quicksand/Quicksand-Italic.ttf"],"../fonts/Quicksand/Quicksand-Italic.ttf"],"./Quicksand-Italic.woff":[["Quicksand-Italic.706b0e9b.woff","../fonts/Quicksand/Quicksand-Italic.woff"],"../fonts/Quicksand/Quicksand-Italic.woff"],"./Quicksand-Italic.woff2":[["Quicksand-Italic.46e53e99.woff2","../fonts/Quicksand/Quicksand-Italic.woff2"],"../fonts/Quicksand/Quicksand-Italic.woff2"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../fonts/Montserrat/font.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Montserrat-Italic.eot":[["Montserrat-Italic.aa1e7432.eot","../fonts/Montserrat/Montserrat-Italic.eot"],"../fonts/Montserrat/Montserrat-Italic.eot"],"./Montserrat-Italic.svg":[["Montserrat-Italic.ee0b5f66.svg","../fonts/Montserrat/Montserrat-Italic.svg"],"../fonts/Montserrat/Montserrat-Italic.svg"],"./Montserrat-Italic.ttf":[["Montserrat-Italic.6c9f2030.ttf","../fonts/Montserrat/Montserrat-Italic.ttf"],"../fonts/Montserrat/Montserrat-Italic.ttf"],"./Montserrat-Italic.woff":[["Montserrat-Italic.075a52bf.woff","../fonts/Montserrat/Montserrat-Italic.woff"],"../fonts/Montserrat/Montserrat-Italic.woff"],"./Montserrat-Italic.woff2":[["Montserrat-Italic.53a8a0fd.woff2","../fonts/Montserrat/Montserrat-Italic.woff2"],"../fonts/Montserrat/Montserrat-Italic.woff2"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../fonts/Montserrat/font1.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Montserrat-Bold.eot":[["Montserrat-Bold.a7b280ef.eot","../fonts/Montserrat/Montserrat-Bold.eot"],"../fonts/Montserrat/Montserrat-Bold.eot"],"./Montserrat-Bold.svg":[["Montserrat-Bold.a5a17c94.svg","../fonts/Montserrat/Montserrat-Bold.svg"],"../fonts/Montserrat/Montserrat-Bold.svg"],"./Montserrat-Bold.ttf":[["Montserrat-Bold.66aaca12.ttf","../fonts/Montserrat/Montserrat-Bold.ttf"],"../fonts/Montserrat/Montserrat-Bold.ttf"],"./Montserrat-Bold.woff":[["Montserrat-Bold.f3ec92e9.woff","../fonts/Montserrat/Montserrat-Bold.woff"],"../fonts/Montserrat/Montserrat-Bold.woff"],"./Montserrat-Bold.woff2":[["Montserrat-Bold.3515a2c3.woff2","../fonts/Montserrat/Montserrat-Bold.woff2"],"../fonts/Montserrat/Montserrat-Bold.woff2"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../fonts/Montserrat/font2.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Montserrat-Regular.eot":[["Montserrat-Regular.17362dd6.eot","../fonts/Montserrat/Montserrat-Regular.eot"],"../fonts/Montserrat/Montserrat-Regular.eot"],"./Montserrat-Regular.svg":[["Montserrat-Regular.beed52cb.svg","../fonts/Montserrat/Montserrat-Regular.svg"],"../fonts/Montserrat/Montserrat-Regular.svg"],"./Montserrat-Regular.ttf":[["Montserrat-Regular.5aa5dba3.ttf","../fonts/Montserrat/Montserrat-Regular.ttf"],"../fonts/Montserrat/Montserrat-Regular.ttf"],"./Montserrat-Regular.woff":[["Montserrat-Regular.d541f976.woff","../fonts/Montserrat/Montserrat-Regular.woff"],"../fonts/Montserrat/Montserrat-Regular.woff"],"./Montserrat-Regular.woff2":[["Montserrat-Regular.950fc991.woff2","../fonts/Montserrat/Montserrat-Regular.woff2"],"../fonts/Montserrat/Montserrat-Regular.woff2"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../fonts/Montserrat/font3.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Montserrat-Light.eot":[["Montserrat-Light.3d7886ed.eot","../fonts/Montserrat/Montserrat-Light.eot"],"../fonts/Montserrat/Montserrat-Light.eot"],"./Montserrat-Light.svg":[["Montserrat-Light.da9bce28.svg","../fonts/Montserrat/Montserrat-Light.svg"],"../fonts/Montserrat/Montserrat-Light.svg"],"./Montserrat-Light.ttf":[["Montserrat-Light.cc019c83.ttf","../fonts/Montserrat/Montserrat-Light.ttf"],"../fonts/Montserrat/Montserrat-Light.ttf"],"./Montserrat-Light.woff":[["Montserrat-Light.3c461fe3.woff","../fonts/Montserrat/Montserrat-Light.woff"],"../fonts/Montserrat/Montserrat-Light.woff"],"./Montserrat-Light.woff2":[["Montserrat-Light.786489de.woff2","../fonts/Montserrat/Montserrat-Light.woff2"],"../fonts/Montserrat/Montserrat-Light.woff2"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../fonts/iconfont/material-icons.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./MaterialIcons-Regular.eot":[["MaterialIcons-Regular.4414a7ee.eot","../fonts/iconfont/MaterialIcons-Regular.eot"],"../fonts/iconfont/MaterialIcons-Regular.eot"],"./MaterialIcons-Regular.woff2":[["MaterialIcons-Regular.ca2c4a91.woff2","../fonts/iconfont/MaterialIcons-Regular.woff2"],"../fonts/iconfont/MaterialIcons-Regular.woff2"],"./MaterialIcons-Regular.woff":[["MaterialIcons-Regular.a2fb88cb.woff","../fonts/iconfont/MaterialIcons-Regular.woff"],"../fonts/iconfont/MaterialIcons-Regular.woff"],"./MaterialIcons-Regular.ttf":[["MaterialIcons-Regular.d90f2617.ttf","../fonts/iconfont/MaterialIcons-Regular.ttf"],"../fonts/iconfont/MaterialIcons-Regular.ttf"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../fonts/fonts.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Quicksand/font.css":"../fonts/Quicksand/font.css","./Quicksand/font1.css":"../fonts/Quicksand/font1.css","./Quicksand/font2.css":"../fonts/Quicksand/font2.css","./Quicksand/font3.css":"../fonts/Quicksand/font3.css","./Quicksand/font4.css":"../fonts/Quicksand/font4.css","./Quicksand/font5.css":"../fonts/Quicksand/font5.css","./Quicksand/font6.css":"../fonts/Quicksand/font6.css","./Montserrat/font.css":"../fonts/Montserrat/font.css","./Montserrat/font1.css":"../fonts/Montserrat/font1.css","./Montserrat/font2.css":"../fonts/Montserrat/font2.css","./Montserrat/font3.css":"../fonts/Montserrat/font3.css","./iconfont/material-icons.css":"../fonts/iconfont/material-icons.css","./webfonts\\fa-brands-400.eot":[["fa-brands-400.9a16f18c.eot","../fonts/webfonts/fa-brands-400.eot"],"../fonts/webfonts/fa-brands-400.eot"],"./webfonts\\fa-brands-400.woff2":[["fa-brands-400.8435dacd.woff2","../fonts/webfonts/fa-brands-400.woff2"],"../fonts/webfonts/fa-brands-400.woff2"],"./webfonts\\fa-brands-400.woff":[["fa-brands-400.401c5b3f.woff","../fonts/webfonts/fa-brands-400.woff"],"../fonts/webfonts/fa-brands-400.woff"],"./webfonts\\fa-brands-400.ttf":[["fa-brands-400.9026c42e.ttf","../fonts/webfonts/fa-brands-400.ttf"],"../fonts/webfonts/fa-brands-400.ttf"],"./webfonts\\fa-brands-400.svg":[["fa-brands-400.52494120.svg","../fonts/webfonts/fa-brands-400.svg"],"../fonts/webfonts/fa-brands-400.svg"],"./webfonts\\fa-solid-900.eot":[["fa-solid-900.f0d28f57.eot","../fonts/webfonts/fa-solid-900.eot"],"../fonts/webfonts/fa-solid-900.eot"],"./webfonts\\fa-solid-900.woff2":[["fa-solid-900.2c4c9f0f.woff2","../fonts/webfonts/fa-solid-900.woff2"],"../fonts/webfonts/fa-solid-900.woff2"],"./webfonts\\fa-solid-900.woff":[["fa-solid-900.684095b2.woff","../fonts/webfonts/fa-solid-900.woff"],"../fonts/webfonts/fa-solid-900.woff"],"./webfonts\\fa-solid-900.ttf":[["fa-solid-900.e21bd535.ttf","../fonts/webfonts/fa-solid-900.ttf"],"../fonts/webfonts/fa-solid-900.ttf"],"./webfonts\\fa-solid-900.svg":[["fa-solid-900.e2f54071.svg","../fonts/webfonts/fa-solid-900.svg"],"../fonts/webfonts/fa-solid-900.svg"],"./webfonts\\fa-regular-400.eot":[["fa-regular-400.acfc1d6b.eot","../fonts/webfonts/fa-regular-400.eot"],"../fonts/webfonts/fa-regular-400.eot"],"./webfonts\\fa-regular-400.woff2":[["fa-regular-400.f9798402.woff2","../fonts/webfonts/fa-regular-400.woff2"],"../fonts/webfonts/fa-regular-400.woff2"],"./webfonts\\fa-regular-400.woff":[["fa-regular-400.fb2ba100.woff","../fonts/webfonts/fa-regular-400.woff"],"../fonts/webfonts/fa-regular-400.woff"],"./webfonts\\fa-regular-400.ttf":[["fa-regular-400.4f36e09f.ttf","../fonts/webfonts/fa-regular-400.ttf"],"../fonts/webfonts/fa-regular-400.ttf"],"./webfonts\\fa-regular-400.svg":[["fa-regular-400.2730cb91.svg","../fonts/webfonts/fa-regular-400.svg"],"../fonts/webfonts/fa-regular-400.svg"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57019" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/fonts.ff211f0f.js.map