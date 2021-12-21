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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
})({"bJv09":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "9550e41594a3533f";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
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
            it = o[Symbol.iterator]();
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
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
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
                return '<div>💡 ' + hint + '</div>';
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
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
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

},{}],"bW9z3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handSize", ()=>handSize
);
parcelHelpers.export(exports, "gameState", ()=>gameState
);
parcelHelpers.export(exports, "playerData", ()=>playerData
);
parcelHelpers.export(exports, "updateGameState", ()=>updateGameState
);
var _helperFunctionsJs = require("./helperFunctions.js");
var _summoningUIJs = require("./summoningUI.js");
let gameDeck = [];
const handSize = 5;
let gameState;
const playerData = {
    name: '',
    currentBet: 0,
    bank: '100',
    hand: undefined,
    // [
    // {
    //   imageRef: 'Spades 8',
    //   name: 'Ace',
    //   rank: 1,
    //   replaceToggle: false,
    //   suit: 'Spades',
    // },
    // {
    //   imageRef: 'Spades 8',
    //   name: '10',
    //   rank: 10,
    //   replaceToggle: false,
    //   suit: 'Spades',
    // },
    // {
    //   imageRef: 'Spades 8',
    //   name: 'King',
    //   rank: 13,
    //   replaceToggle: false,
    //   suit: 'Spades',
    // },
    // {
    //   imageRef: 'Spades 8',
    //   name: 'Queen',
    //   rank: 12,
    //   replaceToggle: false,
    //   suit: 'Spades',
    // },
    // {
    //   imageRef: 'Spades 8',
    //   name: 'Jack',
    //   rank: 11,
    //   replaceToggle: false,
    //   suit: 'Spades',
    // },
    // ],
    handCombos: {
    },
    revealCount: 0
};
const betPhase = 'betPhase';
const dealPhase = 'dealPhase';
const replaceCardsPhase = 'replaceCardsPhase';
const payOutPhase = 'payOutPhase';
const initGame = ()=>{
    gameState = betPhase;
    // create game deck and shuffle cards
    gameDeck = _helperFunctionsJs.shuffleCards(_helperFunctionsJs.makeDeck());
    // generates the UI for game
    _summoningUIJs.gameStartUI();
    _summoningUIJs.gameBoard(handSize, true);
};
initGame();
const updateGameState = ()=>{
    if (gameState === betPhase) {
        document.getElementById('gameToolTip').innerText = 'Cards have been dealt best of luck';
        _helperFunctionsJs.dealCards(gameDeck, playerData.hand, handSize);
        // remove the board so tha can update but there has to be a better way
        _summoningUIJs.gameBoard(handSize, true);
        document.body.removeChild(document.querySelector('.board'));
        document.getElementById('actionButton').innerText = 'Show hand';
        gameState = dealPhase;
    }
    if (gameState === dealPhase) {
        _helperFunctionsJs.dealCards(gameDeck, playerData.hand, handSize);
        // insert logic for the the card display function
        gameState = replaceCardsPhase;
    }
    if (gameState === replaceCardsPhase) {
        _helperFunctionsJs.dealCards(gameDeck, playerData.hand);
        gameState = payOutPhase;
    }
};

},{"./helperFunctions.js":"1e3SD","./summoningUI.js":"eSUQk","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1e3SD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shuffleCards", ()=>shuffleCards
);
parcelHelpers.export(exports, "makeDeck", ()=>makeDeck
);
parcelHelpers.export(exports, "dealCards", ()=>dealCards
);
parcelHelpers.export(exports, "tallyCombinations", ()=>tallyCombinations
);
parcelHelpers.export(exports, "checkPayOut", ()=>checkPayOut
);
// Get a random index ranging from 0 (inclusive) to max (exclusive).
const getRandomIndex = (max)=>Math.floor(Math.random() * max)
;
const shuffleCards = (cards)=>{
    // Loop over the card deck array once
    for(let currentIndex = 0; currentIndex < cards.length; currentIndex += 1){
        // Select a random index in the deck
        const randomIndex = getRandomIndex(cards.length);
        // Select the card that corresponds to randomIndex
        const randomCard = cards[randomIndex];
        // Select the card that corresponds to currentIndex
        const currentCard = cards[currentIndex];
        // Swap positions of randomCard and currentCard in the deck
        cards[currentIndex] = randomCard;
        cards[randomIndex] = currentCard;
    }
    // Return the shuffled deck
    return cards;
};
const makeDeck = ()=>{
    // Initialise an empty deck array
    const newDeck = [];
    // Initialise an array of the 4 suits in our deck. We will loop over this array.
    const suits = [
        'Hearts',
        'Diamond',
        'Clubs',
        'Spades'
    ];
    // Loop over the suits array
    for(let suitIndex = 0; suitIndex < suits.length; suitIndex += 1){
        // Store the current suit in a variable
        const currentSuit = suits[suitIndex];
        // Loop from 1 to 13 to create all cards for a given suit
        // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
        // This is an example of a loop without an array.
        for(let rankCounter = 1; rankCounter <= 13; rankCounter += 1){
            // By default, the card name is the same as rankCounter
            let cardName = `${rankCounter}`;
            // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
            if (cardName === '1') cardName = 'Ace';
            else if (cardName === '11') cardName = 'Jack';
            else if (cardName === '12') cardName = 'Queen';
            else if (cardName === '13') cardName = 'King';
            // Create a new card with the current name, suit, and rank
            const card = {
                name: cardName,
                suit: currentSuit,
                rank: rankCounter,
                imageRef: `${currentSuit} ${cardName}`,
                replaceToggle: false
            };
            // Add the new card to the deck
            newDeck.push(card);
        }
    }
    // Return the completed card deck
    return newDeck;
};
const dealCards = (deck, hand, noOfCards = 0)=>{
    // deals the set number of cards to an empty hand
    if (!hand) {
        // problem of variable hand being null hence unable to push and needs dealtHand
        const dealtHand = [];
        for(let i = 0; i < noOfCards; i += 1)dealtHand.push(deck.pop());
        return dealtHand;
    }
    // fills the empty gaps in the hand
    for(let i = 0; i < hand.length; i += 1)if (hand[i].replaceToggle == true) {
        console.log('card', hand[i]);
        hand[i] = null; // i dont know what my console is showing me wtf
        hand[i] = deck.pop();
    }
};
// tally up the player's hand and return the tallied object
// @param hand {array} containing the cards {onject}
// @param attribute {string} the attribute within the card object that you want to tally like suit or cardname
// @return tally{object} containing all the cards within hand and the count of cards
// test vairables
const tallyHand = (hand, attribute)=>{
    const tally = {
    };
    for(let i = 0; i < hand.length; i += 1){
        const tallyTarget = hand[i][attribute];
        if (tallyTarget in tally) tally[tallyTarget] += 1;
        else tally[tallyTarget] = 1;
    }
    return tally;
};
const tallyCombinations = (hand)=>{
    const handCombos = {
    };
    // tally for card ranks to check for straights
    const rankTally = tallyHand(hand, 'rank');
    const rank = [];
    for(const key in rankTally)// object properties that are indices are sorted numerically
    rank.push(key);
    // for ace is rank 1 in royal flush cant compare numerically (1,10,11,12,13,14) so count 4 straigtcounts, there are other ways to do this
    // other combination to note is  1,2,3,4,5
    if (rank[0] === '1') rank.push(14);
    // Checking for pairs, triples and four of a kind
    handCombos.straights = straightsCheck(rank);
    // checking for other combinations
    for(const key1 in rankTally){
        const value = rankTally[key1];
        if (value > 1) {
            if (value === 2) handCombos.pair = true;
            if (value === 3) handCombos.triple = true;
            if (value === 4) handCombos.fourOfKind = true;
        }
    }
    // tally for card suits to check for flush
    const suitTally = tallyHand(hand, 'suit');
    for(const key2 in suitTally)if (suitTally[key2] == 5) handCombos.flush = true;
    // check for royal flush 1) straights, 2)flush & starts at 10 to Ace but the first card in rank is ace (rank = 1)
    // reset straight and flush checks incase if error pops in payout portion
    if (handCombos.straights && handCombos.flush && rank[0] === '1') {
        handCombos.royal = true;
        handCombos.straights = false;
        handCombos.flush = false;
    }
    if (handCombos.straights && handCombos.flush) {
        handCombos.straights = false;
        handCombos.flush = false;
        handCombos.straightFlush = true;
    }
    // check for full house and eliminate the rest of the conditions
    if (handCombos.pair && handCombos.triple) {
        handCombos.fullHouse = true;
        handCombos.pair = false;
        handCombos.triple = false;
    }
    return handCombos;
};
// checking for straights
// @param rank {array} array of the card ranks in {string}
// @return true if the cards are straights
function straightsCheck(rank) {
    let straightCount = 0;
    // count for 4 consecutive straights checks
    for(let i = 0; i < rank.length - 1; i += 1)if (rank[i + 1] - rank[i] == 1) straightCount += 1;
    if (straightCount === 4) return true;
}
const checkPayOut = (handCombos)=>{
    let winningOdds = 0;
    const payTable = {
        royal: 800,
        straightFlush: 50,
        fourOfKind: 25,
        fullHouse: 9,
        flush: 6,
        straights: 4,
        triple: 3,
        pair: 2
    };
    for(const key in handCombos)if (handCombos[key]) winningOdds = payTable[key];
    return winningOdds;
}; /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const testVariable = [
  {
    imageRef: 'Spades 8',
    name: 'Ace',
    rank: 1,
    replaceToggle: false,
    suit: 'Spades',
  },
  {
    imageRef: 'Spades 8',
    name: '10',
    rank: 10,
    replaceToggle: false,
    suit: 'Spades',
  },
  {
    imageRef: 'Spades 8',
    name: 'King',
    rank: 13,
    replaceToggle: false,
    suit: 'Spades',
  },
  {
    imageRef: 'Spades 8',
    name: 'Queen',
    rank: 12,
    replaceToggle: false,
    suit: 'Spades',
  },
  {
    imageRef: 'Spades 8',
    name: 'Jack',
    rank: 11,
    replaceToggle: false,
    suit: 'Spades',
  },
];
@@@@@@@@@@@@@@@@@@@@@@@@@ */ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eSUQk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameStartUI", ()=>gameStartUI
);
// Function starts the Gameboard for the card
// creating the card elements for the images to be fed into
// @param handSize {number} number of cards to be dealt
parcelHelpers.export(exports, "gameBoard", ()=>gameBoard
);
var _gameIncantationJs = require("./gameIncantation.js");
const gameStartUI = ()=>{
    // title of the gameSite
    const gameTitleContainer = document.createElement('div');
    gameTitleContainer.classList.add('title');
    gameTitleContainer.innerText = '♠️ Video Poker ♠️';
    document.body.appendChild(gameTitleContainer);
    // Main Game information Container
    const gameInfoContainer = document.createElement('div');
    gameInfoContainer.classList.add('row');
    document.body.appendChild(gameInfoContainer);
    // Game info top row for: Gamestate, bank roll, bet amount
    const gameInfoTop = document.createElement('div');
    gameInfoTop.classList.add('splitRow');
    // gameInfoTop.classList.add("gameInfo");
    gameInfoContainer.appendChild(gameInfoTop);
    // Game state message box
    const gameStateBox = document.createElement('div');
    gameStateBox.classList.add('gameStateBox');
    gameStateBox.innerText = "Welcome to Video Poker! Let's play cards!";
    gameInfoTop.appendChild(gameStateBox);
    // Name titles for cells
    const cellName = document.createElement('div');
    cellName.innerText = 'Bank:';
    cellName.classList.add('cellName');
    gameInfoTop.appendChild(cellName);
    // Player bank roll display
    const playerBankRoll = document.createElement('div');
    playerBankRoll.classList.add('numbersInfo');
    playerBankRoll.id = 'playerBankRoll';
    playerBankRoll.innerText = _gameIncantationJs.playerData.bank;
    gameInfoTop.appendChild(playerBankRoll);
    // Player bet amount
    const cellName2 = document.createElement('div');
    cellName2.innerText = 'Bet:';
    cellName2.classList.add('cellName');
    gameInfoTop.appendChild(cellName2);
    const playerBet = document.createElement('div');
    playerBet.id = 'playerBet';
    playerBet.classList.add('numbersInfo');
    playerBet.innerText = _gameIncantationJs.playerData.currentBet;
    gameInfoTop.appendChild(playerBet);
    // Game info bottom row
    const gameInfoBtm = document.createElement('div');
    gameInfoBtm.classList.add('splitRow');
    // gameInfoBtm.classList.add("gameInfo");
    gameInfoContainer.appendChild(gameInfoBtm);
    // game information ie cards selected for replacement
    const gameToolTip = document.createElement('div');
    gameToolTip.id = 'gameToolTip';
    gameToolTip.innerText = 'Place your bet to start';
    gameInfoBtm.appendChild(gameToolTip);
    // Input box for bet
    const betInput = document.createElement('input');
    betInput.id = 'betInput';
    betInput.placeholder = 'Bet Amount';
    betInput.classList.add('showed');
    gameInfoBtm.appendChild(betInput);
    // Button to trigger next event in the game state
    const actionButton = document.createElement('div');
    actionButton.id = 'actionButton';
    actionButton.innerText = 'Place bet!';
    // adding the function that will link back to the game logic
    actionButton.addEventListener('click', makeButtonAction(betInput, playerBet, playerBankRoll));
    gameInfoBtm.appendChild(actionButton);
};
// function for the button to take in bets or confirm replacement
// @param betInput {DOM} to log the player bet
// @param playerBet {DOM} to update the bet into the UI
// @param playerBankRoll {DOM} to update the updated bankroll into the UI
function makeButtonAction(betInput, playerBet, playerBankRoll) {
    function buttonAction(event) {
        // action for gamestate at betting phase
        if (_gameIncantationJs.gameState === 'betPhase') {
            // check for invaide inputs
            if (betInput.value > 0 && betInput.value <= _gameIncantationJs.playerData.bank) {
                _gameIncantationJs.playerData.currentBet = betInput.value;
                playerBet.innerText = _gameIncantationJs.playerData.currentBet;
                _gameIncantationJs.playerData.bank -= _gameIncantationJs.playerData.currentBet;
                playerBankRoll.innerText = _gameIncantationJs.playerData.bank;
                console.log('here', _gameIncantationJs.playerData.currentBet);
                _gameIncantationJs.updateGameState();
            } else document.getElementById('gameToolTip').innerText = 'Please input a number.';
        }
    }
    return buttonAction;
}
function gameBoard(handSize, dealt, hideHand = true) {
    const cardBoard = document.createElement('div');
    cardBoard.classList.add('board');
    document.body.appendChild(cardBoard);
    for(let i = 0; i < handSize; i += 1){
        const card = document.createElement('div');
        cardBoard.appendChild(card);
        if (dealt && hideHand) {
            const cardImage = document.createElement('img');
            cardImage.classList.add('card');
            cardImage.src = './assets/Cards Pack/PNG/Medium/Back Red 1.png';
            card.appendChild(cardImage);
            cardImage.addEventListener('click', makeCardAction(i));
        } else if (!hideHand) {
            const cardImage = document.createElement('img');
            cardImage.classList.add('card');
            cardImage.src = `./assets/Cards Pack/PNG/Medium/${_gameIncantationJs.playerData.hand[i]}.png`;
            card.appendChild(cardImage);
            cardImage.addEventListener('click', makeCardAction(i));
            _gameIncantationJs.playerData.revealCount += 1;
        } else card.className = 'cardShadow';
    }
}
function makeCardAction(index) {
    function cardAction(event) {
        // card reveal on click and log reveal count to move to next phase when all cards revealed
        if (_gameIncantationJs.gameState === 'dealPhase') {
            const cardPath = _gameIncantationJs.playerData.hand[index].imageRef;
            cardImage.scr = `./assets/Cards Pack/PNG/Medium/${cardPath}.png`;
            _gameIncantationJs.playerData.revealCount += 1;
            if (_gameIncantationJs.playerData.revealCount === handSize) _gameIncantationJs.updateGameState();
        }
    }
    return cardAction;
}

},{"./gameIncantation.js":"bW9z3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["bJv09","bW9z3"], "bW9z3", "parcelRequire2c8c")

//# sourceMappingURL=gameSite.94a3533f.js.map
