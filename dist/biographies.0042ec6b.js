// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bd6Nm":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6ae3023d0042ec6b";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] ???? Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ??? Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>???? ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hBvU9":[function(require,module,exports) {
const biographyTextNeilArmstrong = `<p>Neil Armstrong naci?? el 5 de agosto de 1930 en Wapakoneta, en 
    el condado de Auglaize, Ohio. Hijo de Stephen Koenig Armstrong y
    Viola Louise Engel, era de ascendencia familiar escocesa, irlandesa y 
    alemana y ten??a dos hermanas, June y Dean. Stephen Armstrong trabajaba como 
    auditor para el gobierno de Ohio y por ello la familia se traslad?? continuamente 
    por todo el estado desde el nacimiento de Neil y lleg?? a vivir en veinte localidades
    distintas. El amor por volar de Armstrong naci?? entonces, cuando su padre lo
    llev?? con tan solo dos a??os a ver las Carreras A??reas de Cleveland. 
    El 20 de julio de 1936, con cinco a??os de edad, experiment?? su primer vuelo 
    en Warren (Ohio), cuando junto a su padre vol?? en un Ford Trimotor, avi??n apodado 
    Tin Goose (??Ganso de hojalata??).</p>

    <p>El ??ltimo cambio de vivienda del padre de la familia se produjo en 1944, cuando la familia
    regres?? al lugar de nacimiento de Neil, Wapakoneta. Armstrong estudi?? en el instituto de 
    educaci??n secundaria Blume de esta localidad y asisti?? a lecciones de pilotaje de aviones 
    en el aer??dromo de Wapakoneta.8 Obtuvo un certificado de vuelo de estudiante por 
    su 16.?? cumplea??os y realiz?? su primer vuelo en solitario unos d??as despu??s, 
    en agosto de 1946, antes incluso de tener permiso de conducci??n. Armstrong era 
    muy activo como boy scout y logr?? conseguir el rango de Eagle Scout ???Explorador ??guila???, 
    el m??s alto de todos. El 18 de julio de 1969, mientras volaba hacia la Luna a bordo 
    del Columbia, mand?? saludos a los Scouts. Entre los pocos objetos personales 
    que llev?? consigo a la Luna y trajo de vuelta estuvo la Insignia Scout Mundial.</p>

    <p>En 1947, con diecisiete a??os, Armstrong comenz?? a estudiar ingenier??a aeron??utica en 
    la Universidad Purdue. Era el segundo miembro de su familia que asist??a a 
    la universidad. Tambi??n fue aceptado en el prestigioso Instituto de Tecnolog??a de 
    Massachusetts (MIT), pero un t??o suyo que hab??a estudiado en el MIT le disuadi?? 
    de matricularse all?? dici??ndole que no era necesario viajar tan lejos para tener 
    una buena educaci??n. Su colegiatura fue costeada por una beca del Plan Holloway, 
    cuyos beneficiarios se compromet??an a estudiar durante dos a??os en la universidad, 
    dos a??os de entrenamiento de vuelo y un a??o de servicio en la Armada como aviador, para 
    despu??s completar durante otros dos a??os los estudios superiores. No particip?? en 
    cursos de ciencias navales ni se uni?? al Cuerpo de Entrenamiento de 
    Oficiales de la Reserva Naval en Purdue</p>
    `;
const biographyTextBuzzAldrin = `<p>Edwin Eugene Aldrin Jr. naci?? el 20 de enero de 1930 en el 
    Hospital Mountainside en Glen Ridge, Nueva Jersey. Su padre, 
    Edwin Eugene Aldrin Sr., hab??a sido un aviador del ej??rcito durante 
    la Primera Guerra Mundial y comandante asistente de la escuela de pilotos 
    del ej??rcito en McCook Field, Ohio entre 1919 y 1922, antes de conseguir 
    un empleo como ejecutivo en Standard Oil en 1928. Desde entonces 
    viv??a en Montclair con su esposa Marion Aldrin ???Moon, de soltera???, con 
    quien tuvo tres hijos, Madeleine, Fay Ann y Edwin Jr. Cuando eran 
    peque??os, Fay Ann se refer??a a Edwin Jr., como buzzer en vez de brother 
    y de ah?? surgi?? el apodo de ??Buzz?? con el que habr??a de ser conocido por el 
    resto de su vida, y que ??l mismo adopt?? como nombre propio en 1988.3 Cabe agregar 
    que en su infancia perteneci?? a los Boy Scouts de Am??rica, donde alcanz?? el 
    rango de ??principiante??.</p>
    
    <p>Aldrin tuvo un rendimiento escolar sobresaliente, y durante su etapa en la 
    Montclair High School jug?? como center del equipo institucional de f??tbol 
    americano, con el que defendi?? el campeonato estatal en 1946. Aunque ese mismo a??o 
    asisti?? a la Severn School por recomendaci??n de su padre, cuya intenci??n de 
    enrolarlo en la Academia Naval en Annapolis, Maryland, le llev?? 
    inclusive a concertarle una reuni??n con el senador Albert W. Hawkes,
    a final de cuentas el joven eligi?? la aviaci??n, ya que sufr??a de mareos. Por este motivo, 
    le pidi?? a su padre que le dijera a Hawkes que su verdadero inter??s era formarse 
    en la Academia Militar de los Estados Unidos en West Point, New York.</p>
    
    <p>Su admisi??n a la Academia Militar se efectu?? en 1947, y en su 
    primer a??o obtuvo notas favorables que le llevaron a ser reconocido como 
    el ??mejor de su clase??. Tambi??n form?? parte del equipo de atletismo de la instituci??n.
    A manera anecd??tica, le toc?? presenciar en 1950 el estallido de la guerra de 
    orea mientras se encontraba en Jap??n y Filipinas como parte de un viaje 
    realizado para estudiar las pol??ticas militares de Douglas MacArthur. Finalmente 
    el 5 de junio de 1951 se gradu?? con el tercer mejor promedio de su clase y 
    obtuvo un grado de licenciatura en ciencias en ingenier??a mec??nica.</p>`;
const biographyTextPeteConrad = `<p>Conrad naci?? en Filadelfia, Estado de Pensilvania (EE. UU.). 
    Tras licenciarse en Ingenier??a Aeron??utica por la Universidad de 
    Princeton en el a??o 1953, logr?? entrar en la Marina de los Estados Unidos de 
    Am??rica, donde se convirti?? en piloto de pruebas y m??s tarde en instructor de 
    vuelo. Form?? parte del segundo grupo de astronautas elegidos por la NASA en 1962 
    que pisar??a la Luna en noviembre de 1969 a bordo del Apolo 12. Mucho antes fue 
    considerado para la misi??n Mercury 7, pero finalmente fue rechazado.</p>

    <p>Pete Conrad aluniz?? con el "Intrepid" en noviembre de 1969, 
    convirti??ndose en el tercer ser humano en pisar la Luna. Una vez 
    hubo descendido del m??dulo lunar y antes de realizar su primer paseo 
    en la superficie del sat??lite, brome?? acerca de su estatura cuando 
    coment?? a Houston, de forma que todo el mundo desde los receptores de radio y 
    televisi??n pudieron o??r, lo siguiente:</p>

    <cite>Whoopie! Hombre, ese pudo haber sido un peque??o paso para Neil (Armstrong), 
    ??pero ha sido uno grande para mi!</cite>

    <p>Tiempo despu??s revelar??a que este gracioso comentario lo hizo para ganar una apuesta con Oriana Fallaci.</p>

    <p>El personaje de Conrad apareci?? en la famosa miniserie de la 
    televisi??n por cable norteamericana HBO que llevaba por t??tulo 
    "De la Tierra a la Luna" (t??tulo original: From Earth to the Moon).</p>

    <p>Muri?? en un accidente con su motocicleta en julio de 1999. Al principio 
    pareci?? salir ileso de la colisi??n, pero al cabo de 6 horas del tr??gico accidente fue declarada su muerte a 
    causa de una hemorragia interna.</p>
    
    `;
const biographyTextAlanBean = `<p>Alan LaVern Bean (Wheeler, Texas; 15 de marzo de 1932-Houston, 26 de mayo de 2018) 
    fue un oficial naval estadounidense y aviador naval, ingeniero aeron??utico, piloto de 
    pruebas y astronauta de la NASA; fue la cuarta persona en caminar sobre la Luna. Fue seleccionado para convertirse 
    en astronauta por la NASA en 1963.</p>

    <p>Hizo su primer vuelo al espacio a bordo del Apolo 12, la segunda misi??n tripulada para aterrizar 
    en la Luna, a los 37 a??os en noviembre de 1969. Hizo su segundo y ??ltimo vuelo al espacio en la misi??n Skylab 
    3 en 1973, la segunda misi??n tripulada a la estaci??n espacial Skylab. Despu??s de retirarse de la Armada de los 
    Estados Unidos en 1975 y de la NASA en 1981, sigui?? su inter??s por la pintura, representando diversas 
    escenas relacionadas con el espacio y documentando sus propias experiencias en el espacio, as?? como la 
    de sus compa??eros astronautas del programa Apolo. Fue el ??ltimo miembro vivo de la tripulaci??n del Apolo 12.</p>

    <p>Bean fue seleccionado por la NASA para el tercer grupo de reclutamiento en 1963. Fue seleccionado 
    como piloto de reserva del proyecto Gemini 10 y Apolo 9. Al fallecer el astronauta Clifton Williams 
    en un accidente a??reo y gracias a la elecci??n personal del comandante Charles Conrad, se convirti?? 
    en el piloto del m??dulo lunar del Apolo 12. En noviembre de 1969, Pete y Bean alunizaron en el Oc??ano 
    de las Tormentas, donde efectuaron numerosos experimentos cient??ficos. Por un descuido de Bean 
    con la rudimentaria c??mara de televisi??n de la ??poca, al enfocarla directamente al sol y resultar da??ada, 
    se poseen muy pocas im??genes de video de la misi??n Apolo 12 sobre la superficie de la Luna.</p>`;
const biographyTextAlanShepard = `<p>Naci?? el 18 de noviembre de 1923 en el estado nororiental de Nuevo Hampshire, 
    Estados Unidos. Antes de convertirse en astronauta fue piloto de pruebas de la Armada. 
    Med??a 1,80 metros. Registr?? m??s de 8.000 horas de vuelo en aeronaves militares. 
    En el a??o 1944 se licenci?? en la Academia Naval Militar. En 1959 Shepard se convirti?? en 
    astronauta. Lleg?? a registrar m??s de 216 horas en el espacio a bordo de dos naves espaciales.</p>
    
    <p>Bean recibi?? una licenciatura en Ingenier??a Aeron??utica de la Universidad de Texas 
    en Austin en 1955. En UT fue miembro de la fraternidad Delta Kappa Epsilon 
    (cap??tulo de Omega Chi). Fue comisionado como alf??rez de la Armada de los Estados Unidos 
    a trav??s del Cuerpo de Entrenamiento de Oficiales de Reserva Naval en UT Austin, asisti?? 
    a entrenamientos de vuelo. Despu??s de completar el entrenamiento de vuelo, fue asignado 
    a un Escuadr??n de Ataque 44 (VA-44) en NAS Jacksonville, Florida, de 1956 a 1960, 
    pilotando el F9F Cougar y A4D Skyhawk.</p>
    
    <p>Despu??s de un per??odo de servicio de cuatro a??os,
    asisti?? a la Escuela de Pilotos de Pruebas Navales de los Estados Unidos (USNTPS) en 
    NAS Patuxent River, Maryland, donde su instructor era su futuro Comandante del Apolo 12, 
    Pete Conrad. Luego vol?? como piloto de pruebas en varios tipos de aviones navales. 
    Tras su asignaci??n en USNTPS, fue asignado al Escuadr??n de Ataque 172 (VA-172) en NAS 
    Cecil Field, Florida, volando el A-4 Skyhawk desde 1962 hasta 1963, tiempo durante el 
    cual fue seleccionado como astronauta de la NASA.</p>`;
window.onload = function() {
    const bioSumNeilArmstrong = document.getElementById('biography-summary-neil-armstrong');
    const bioSumBuzzAldrin = document.getElementById('biography-summary-buzz-aldrin');
    const bioSumPeteConrad = document.getElementById('biography-summary-pete-conrad');
    const bioSumAlanLBean = document.getElementById('biography-summary-alan-l-bean');
    const bioSumAlanShepard = document.getElementById('biography-summary-alan-shepard');
    bioSumNeilArmstrong.innerHTML = bios.biographyTextNeilArmstrong.replaceAll('<p>', '').replaceAll('</p>', '');
    bioSumBuzzAldrin.innerHTML = bios.biographyTextBuzzAldrin.replaceAll('<p>', '').replaceAll('</p>', '');
    bioSumPeteConrad.innerHTML = bios.biographyTextPeteConrad.replaceAll('<p>', '').replaceAll('</p>', '');
    bioSumAlanLBean.innerHTML = bios.biographyTextAlanBean.replaceAll('<p>', '').replaceAll('</p>', '');
    bioSumAlanShepard.innerHTML = bios.biographyTextAlanShepard.replaceAll('<p>', '').replaceAll('</p>', '');
};

},{}]},["bd6Nm","hBvU9"], "hBvU9", "parcelRequire9e57")

//# sourceMappingURL=biographies.0042ec6b.js.map
