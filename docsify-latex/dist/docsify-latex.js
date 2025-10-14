/*!
 * docsify-latex
 * v0.5.2
 * https://scruel.github.io/docsify-latex/
 * (c) 2022-2025 Scruel Tao
 * MIT license
 */
(function() {
    "use strict";
    function _regeneratorRuntime() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        _regeneratorRuntime = function() {
            return exports;
        };
        var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define(obj, key, value) {
            return Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), obj[key];
        }
        try {
            define({}, "");
        } catch (err) {
            define = function(obj, key, value) {
                return obj[key] = value;
            };
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
            return generator._invoke = function(innerFn, self, context) {
                var state = "suspendedStart";
                return function(method, arg) {
                    if ("executing" === state) throw new Error("Generator is already running");
                    if ("completed" === state) {
                        if ("throw" === method) throw arg;
                        return doneResult();
                    }
                    for (context.method = method, context.arg = arg; ;) {
                        var delegate = context.delegate;
                        if (delegate) {
                            var delegateResult = maybeInvokeDelegate(delegate, context);
                            if (delegateResult) {
                                if (delegateResult === ContinueSentinel) continue;
                                return delegateResult;
                            }
                        }
                        if ("next" === context.method) context.sent = context._sent = context.arg; else if ("throw" === context.method) {
                            if ("suspendedStart" === state) throw state = "completed", context.arg;
                            context.dispatchException(context.arg);
                        } else "return" === context.method && context.abrupt("return", context.arg);
                        state = "executing";
                        var record = tryCatch(innerFn, self, context);
                        if ("normal" === record.type) {
                            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                            return {
                                value: record.arg,
                                done: context.done
                            };
                        }
                        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
                    }
                };
            }(innerFn, self, context), generator;
        }
        function tryCatch(fn, obj, arg) {
            try {
                return {
                    type: "normal",
                    arg: fn.call(obj, arg)
                };
            } catch (err) {
                return {
                    type: "throw",
                    arg: err
                };
            }
        }
        exports.wrap = wrap;
        var ContinueSentinel = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, (function() {
            return this;
        }));
        var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        function defineIteratorMethods(prototype) {
            [ "next", "throw", "return" ].forEach((function(method) {
                define(prototype, method, (function(arg) {
                    return this._invoke(method, arg);
                }));
            }));
        }
        function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
                var record = tryCatch(generator[method], generator, arg);
                if ("throw" !== record.type) {
                    var result = record.arg, value = result.value;
                    return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then((function(value) {
                        invoke("next", value, resolve, reject);
                    }), (function(err) {
                        invoke("throw", err, resolve, reject);
                    })) : PromiseImpl.resolve(value).then((function(unwrapped) {
                        result.value = unwrapped, resolve(result);
                    }), (function(error) {
                        return invoke("throw", error, resolve, reject);
                    }));
                }
                reject(record.arg);
            }
            var previousPromise;
            this._invoke = function(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new PromiseImpl((function(resolve, reject) {
                        invoke(method, arg, resolve, reject);
                    }));
                }
                return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            };
        }
        function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (undefined === method) {
                if (context.delegate = null, "throw" === context.method) {
                    if (delegate.iterator.return && (context.method = "return", context.arg = undefined, 
                    maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
                    context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, 
            context.delegate = null, ContinueSentinel;
            var info = record.arg;
            return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, 
            "return" !== context.method && (context.method = "next", context.arg = undefined), 
            context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), 
            context.delegate = null, ContinueSentinel);
        }
        function pushTryEntry(locs) {
            var entry = {
                tryLoc: locs[0]
            };
            1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], 
            entry.afterLoc = locs[3]), this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal", delete record.arg, entry.completion = record;
        }
        function Context(tryLocsList) {
            this.tryEntries = [ {
                tryLoc: "root"
            } ], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(iterable) {
            if (iterable) {
                var iteratorMethod = iterable[iteratorSymbol];
                if (iteratorMethod) return iteratorMethod.call(iterable);
                if ("function" == typeof iterable.next) return iterable;
                if (!isNaN(iterable.length)) {
                    var i = -1, next = function next() {
                        for (;++i < iterable.length; ) if (hasOwn.call(iterable, i)) return next.value = iterable[i], 
                        next.done = !1, next;
                        return next.value = undefined, next.done = !0, next;
                    };
                    return next.next = next;
                }
            }
            return {
                next: doneResult
            };
        }
        function doneResult() {
            return {
                value: undefined,
                done: !0
            };
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), 
        define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), 
        exports.isGeneratorFunction = function(genFun) {
            var ctor = "function" == typeof genFun && genFun.constructor;
            return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
        }, exports.mark = function(genFun) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, 
            define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), 
            genFun;
        }, exports.awrap = function(arg) {
            return {
                __await: arg
            };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, (function() {
            return this;
        })), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            void 0 === PromiseImpl && (PromiseImpl = Promise);
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then((function(result) {
                return result.done ? result.value : iter.next();
            }));
        }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, (function() {
            return this;
        })), define(Gp, "toString", (function() {
            return "[object Generator]";
        })), exports.keys = function(object) {
            var keys = [];
            for (var key in object) keys.push(key);
            return keys.reverse(), function next() {
                for (;keys.length; ) {
                    var key = keys.pop();
                    if (key in object) return next.value = key, next.done = !1, next;
                }
                return next.done = !0, next;
            };
        }, exports.values = values, Context.prototype = {
            constructor: Context,
            reset: function(skipTempReset) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, 
                this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), 
                !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
            },
            stop: function() {
                this.done = !0;
                var rootRecord = this.tryEntries[0].completion;
                if ("throw" === rootRecord.type) throw rootRecord.arg;
                return this.rval;
            },
            dispatchException: function(exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                    return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", 
                    context.arg = undefined), !!caught;
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i], record = entry.completion;
                    if ("root" === entry.tryLoc) return handle("end");
                    if (entry.tryLoc <= this.prev) {
                        var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                        if (hasCatch && hasFinally) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                        } else if (hasCatch) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                        } else {
                            if (!hasFinally) throw new Error("try statement without catch or finally");
                            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function(type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                        var finallyEntry = entry;
                        break;
                    }
                }
                finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
                var record = finallyEntry ? finallyEntry.completion : {};
                return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", 
                this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
            },
            complete: function(record, afterLoc) {
                if ("throw" === record.type) throw record.arg;
                return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, 
                this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), 
                ContinueSentinel;
            },
            finish: function(finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), 
                    resetTryEntry(entry), ContinueSentinel;
                }
            },
            catch: function(tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc === tryLoc) {
                        var record = entry.completion;
                        if ("throw" === record.type) {
                            var thrown = record.arg;
                            resetTryEntry(entry);
                        }
                        return thrown;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(iterable, resultName, nextLoc) {
                return this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc
                }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
            }
        }, exports;
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg);
            var value = info.value;
        } catch (error) {
            reject(error);
            return;
        }
        if (info.done) {
            resolve(value);
        } else {
            Promise.resolve(value).then(_next, _throw);
        }
    }
    function _asyncToGenerator(fn) {
        return function() {
            var self = this, args = arguments;
            return new Promise((function(resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }
                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }
                _next(undefined);
            }));
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
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                if (it) o = it;
                var i = 0;
                var F = function() {};
                return {
                    s: F,
                    n: function() {
                        if (i >= o.length) return {
                            done: true
                        };
                        return {
                            done: false,
                            value: o[i++]
                        };
                    },
                    e: function(e) {
                        throw e;
                    },
                    f: F
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return {
            s: function() {
                it = it.call(o);
            },
            n: function() {
                var step = it.next();
                normalCompletion = step.done;
                return step;
            },
            e: function(e) {
                didErr = true;
                err = e;
            },
            f: function() {
                try {
                    if (!normalCompletion && it.return != null) it.return();
                } finally {
                    if (didErr) throw err;
                }
            }
        };
    }
    var version = "0.5.2";
    function escapeHtml(unsafe) {
        return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }
    function unescapeHtml(htmlStr) {
        htmlStr = htmlStr.replace(/&lt;/g, "<");
        htmlStr = htmlStr.replace(/&gt;/g, ">");
        htmlStr = htmlStr.replace(/&quot;/g, '"');
        htmlStr = htmlStr.replace(/&#39;/g, "'");
        htmlStr = htmlStr.replace(/&amp;/g, "&");
        return htmlStr;
    }
    function escapeRegex(regexStr) {
        return regexStr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function coverObject(sourceObj, targetObj) {
        Object.keys(sourceObj).forEach((function(key) {
            if (!Object.prototype.hasOwnProperty.call(targetObj, key)) {
                targetObj[key] = sourceObj[key];
                return;
            }
            if (Object.prototype.toString.call(sourceObj[key]) !== "[object Object]") {
                targetObj[key] = sourceObj[key];
                return;
            }
            coverObject(sourceObj[key], targetObj[key]);
        }));
    }
    var settings = {
        inlineMath: [ [ "$", "$" ], [ "\\(", "\\)" ] ],
        displayMath: [ [ "$$", "$$" ] ],
        overflowScroll: true,
        beforeInitFunc: function beforeInitFunc() {},
        customOptions: {}
    };
    if (window) {
        window.$docsify = window.$docsify || {};
        window.$docsify.latex = window.$docsify.latex || {};
        coverObject(window.$docsify.latex, settings);
        window.$docsify.latex.version = version;
    }
    var latexTagName = "docsify-latex";
    var latexBackTagName = "docsify-latex-back";
    var latexTagDisplayAttrName = "display";
    var jumpToTitle = "Jump to equation";
    var gobackTitle = "Back To Reference";
    var linkColor = "#0B87DA";
    function addReferenceJump(element) {
        var elements = element.querySelectorAll("".concat(latexTagName, " a[href]"));
        if (elements === null || elements.length === 0) {
            return;
        }
        var _iterator = _createForOfIteratorHelper(elements), _step;
        try {
            var _loop = function _loop() {
                var linkElement = _step.value;
                if (!Object.prototype.hasOwnProperty.call(linkElement.style, "color") || !linkElement.style.color) {
                    linkElement.style.color = linkColor;
                }
                var hrefAttr = linkElement.getAttribute("href");
                var refId = decodeURIComponent(hrefAttr).substring(1);
                if (hrefAttr.startsWith("#")) {
                    linkElement.title = jumpToTitle;
                    linkElement.onclick = function() {
                        var referedEle = document.getElementById(refId);
                        if (null === referedEle) {
                            return true;
                        }
                        var referedLatexEle = referedEle.parentElement;
                        while (referedLatexEle !== null) {
                            if (referedLatexEle.tagName === latexTagName.toUpperCase()) {
                                break;
                            }
                            referedLatexEle = referedLatexEle.parentElement;
                        }
                        var backToEle = referedLatexEle.querySelector(latexBackTagName);
                        if (null === backToEle) {
                            backToEle = document.createElement(latexBackTagName);
                            referedLatexEle.append(backToEle);
                            backToEle.innerHTML = '<a href onclick="return false;">'.concat(gobackTitle, "</a>");
                            backToEle.style.color = linkColor;
                            backToEle.style.float = "right";
                        }
                        var currentPosition = document.documentElement.scrollTop;
                        backToEle.style.display = "";
                        backToEle.onclick = function() {
                            backToEle.style.display = "none";
                            window.scrollTo(0, currentPosition);
                            return false;
                        };
                        window.scrollTo(0, referedLatexEle.offsetTop - linkElement.getBoundingClientRect().top);
                        return false;
                    };
                }
            };
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                _loop();
            }
        } catch (err) {
            _iterator.e(err);
        } finally {
            _iterator.f();
        }
    }
    var latexRender = Object;
    latexRender.prepareContent = function(content, latex) {
        return content;
    };
    latexRender.prepareRender = function() {};
    latexRender.renderElement = function(element, displayMode) {};
    latexRender.afterRender = function() {};
    settings.beforeInitFunc();
    if (typeof MathJax !== "undefined" && MathJax) {
        if (MathJax.version[0] === "3") {
            coverObject(settings.customOptions, MathJax.config);
            MathJax.config.tex.inlineMath = settings.inlineMath;
            MathJax.config.tex.displayMath = settings.displayMath;
            MathJax.startup.getComponents();
            latexRender.prepareRender = function() {
                MathJax.startup.getComponents();
                var OUTPUT = MathJax.startup.output;
                if (typeof OUTPUT.clearCache !== "undefined") {
                    OUTPUT.clearCache();
                } else if (typeof OUTPUT.clearFontCache !== "undefined") {
                    OUTPUT.clearFontCache();
                }
            };
            latexRender.renderElement = function() {
                var _ref = _asyncToGenerator(_regeneratorRuntime().mark((function _callee(element, displayMode) {
                    return _regeneratorRuntime().wrap((function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return MathJax.typesetPromise([ element ]);

                              case 2:
                              case "end":
                                return _context.stop();
                            }
                        }
                    }), _callee);
                })));
                return function(_x, _x2) {
                    return _ref.apply(this, arguments);
                };
            }();
            latexRender.afterRender = function() {
                addReferenceJump(document);
                if (!settings.overflowScroll) {
                    return;
                }
                var latexElements = document.querySelectorAll(latexTagName);
                var _iterator = _createForOfIteratorHelper(latexElements), _step;
                try {
                    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                        var latexElement = _step.value;
                        var mjxMathEle = latexElement.querySelector("mjx-math");
                        if (mjxMathEle === null) {
                            continue;
                        }
                        mjxMathEle.style.width = "";
                        var mjxMathWidth = mjxMathEle.getBoundingClientRect().width;
                        var mjxMllWidth = 0;
                        var mjxMllEle = latexElement.querySelector("mjx-assistive-mml");
                        if (mjxMathEle !== null) {
                            mjxMllWidth = mjxMllEle.getBoundingClientRect().width;
                        }
                        latexElement.style.width = Math.max(mjxMathWidth, mjxMllWidth) + "px";
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally {
                    _iterator.f();
                }
            };
        } else if (MathJax.version[0] === "2") {
            var options = {
                skipStartupTypeset: true,
                messageStyle: "none"
            };
            coverObject(settings.customOptions, options);
            coverObject({
                tex2jax: {
                    inlineMath: settings.inlineMath,
                    displayMath: settings.displayMath
                }
            }, options);
            MathJax.Hub.Config(options);
            MathJax.Hub.processSectionDelay = 0;
            MathJax.Hub.processUpdateDelay = 0;
            latexRender.prepareRender = function() {
                if (typeof MathJax.InputJax.TeX !== "undefined") {
                    MathJax.Hub.Queue([ "PreProcess", MathJax.Hub ], [ "resetEquationNumbers", MathJax.InputJax.TeX ]);
                }
                MathJax.Hub.Queue([ "PreProcess", MathJax.Hub ], [ "Reprocess", MathJax.Hub ]);
            };
            latexRender.renderElement = function(element, displayMode) {
                MathJax.Hub.Queue([ "Typeset", MathJax.Hub, element ], [ addReferenceJump, element ]);
            };
        }
    } else if (typeof katex !== "undefined" && katex) {
        var _options = {
            throwOnError: false,
            trust: function trust(context) {
                return [ "\\htmlId", "\\href" ].includes(context.command);
            },
            macros: {
                "\\eqref": "\\href{##ktx-#1}{(\\text{#1})}",
                "\\ref": "\\href{##ktx-#1}{\\text{#1}}",
                "\\label": "\\htmlId{ktx-#1}{}"
            }
        };
        coverObject(settings.customOptions, _options);
        latexRender.prepareContent = function(_content, latex) {
            return latex;
        };
        latexRender.renderElement = function(element, displayMode) {
            _options.displayMode = displayMode;
            element.innerHTML = katex.renderToString(unescapeHtml(element.innerHTML), _options);
            addReferenceJump(element);
        };
    }
    var commentReplaceMark = "latex:replace";
    var deleteReplaceMark = "latex:delete";
    function getCommentReplaceMarkedText(text) {
        var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        return "\x3c!-- ".concat(commentReplaceMark, " ").concat(placeholder, " ").concat(text, " --\x3e");
    }
    function getCommentReplaceMarkupRegex() {
        var placeholder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return new RegExp("\x3c!-- ".concat(commentReplaceMark, " ").concat(placeholder, " (.*?) --\x3e"));
    }
    function getBlockRegex(matchStartRegex, matchEndRegex, needMatchMultipleLine) {
        var escape = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        if (escape) {
            matchStartRegex = escapeRegex(matchStartRegex);
            matchEndRegex = escapeRegex(matchEndRegex);
        }
        return new RegExp("(?:^|[^\\\\])((".concat(matchStartRegex, ")((?:[^\\\\").concat(needMatchMultipleLine ? "" : "\n", "]|\\\\.)+?)").concat(matchEndRegex, ")"));
    }
    function matchByRegexArray(content, regexGroup) {
        var displayMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var mathRegex = getBlockRegex(regexGroup[0], regexGroup[1], displayMode);
        return matchByRegex(content, mathRegex, displayMode);
    }
    function matchByRegex(content, regex) {
        var displayMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var matchResult = content.match(regex);
        if (matchResult) {
            var result = {};
            result.displayMode = displayMode;
            result.content = matchResult[1];
            result.innerContent = matchResult[3];
            result.index = matchResult.index + matchResult[0].length - result.content.length;
            result.endIndex = result.index + result.content.length;
            result.regex = regex;
            return result;
        }
        return null;
    }
    var codePlaceholder = "CODE";
    var regex = {
        codeTagMarkup: getBlockRegex("<code>", "</code>", true),
        codeBlockMarkup: getBlockRegex("`{3,}", "\\2", true, false),
        codeInlineMarkup: getBlockRegex("`{1,}", "\\2", false, false),
        commentDeleteReplaceMarkup: /^(>?[ ]*)<!--/gm,
        commentReplaceMarkup: getCommentReplaceMarkupRegex(),
        commentCodeReplaceMarkup: getCommentReplaceMarkupRegex(codePlaceholder)
    };
    function matchMathBlocks(content) {
        var inlineResult;
        var displayResult;
        var resultList = [];
        var _iterator = _createForOfIteratorHelper(settings.inlineMath), _step;
        try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var regexGroup = _step.value;
                inlineResult = matchByRegexArray(content, regexGroup, false);
                if (inlineResult) {
                    break;
                }
            }
        } catch (err) {
            _iterator.e(err);
        } finally {
            _iterator.f();
        }
        var _iterator2 = _createForOfIteratorHelper(settings.displayMath), _step2;
        try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var _regexGroup = _step2.value;
                displayResult = matchByRegexArray(content, _regexGroup, true);
                if (displayResult) {
                    break;
                }
            }
        } catch (err) {
            _iterator2.e(err);
        } finally {
            _iterator2.f();
        }
        if (inlineResult) {
            if (null === displayResult) {
                resultList.push(inlineResult);
            } else if (displayResult.index > inlineResult.index) {
                resultList.push(inlineResult);
                if (displayResult.index < inlineResult.endIndex) {
                    displayResult = null;
                }
            }
        }
        if (displayResult) {
            resultList.push(displayResult);
        }
        return resultList;
    }
    function matchReplacedConent(content, contentMatch) {
        var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var contentLength = contentMatch.content.length;
        var commentedConent = getCommentReplaceMarkedText(window.btoa(encodeURIComponent(contentMatch.content)), "".concat(placeholder));
        content = content.substring(0, contentMatch.index) + commentedConent + content.substring(contentMatch.index + contentLength, content.length);
        return content;
    }
    function getCodeRestoredContent(content) {
        var contentMatch;
        var _loop = function _loop() {
            var commentMark = contentMatch[0];
            var originalContent = contentMatch[1] || "";
            content = content.replace(commentMark, (function() {
                return decodeURIComponent(window.atob(originalContent));
            }));
        };
        while ((contentMatch = regex.commentCodeReplaceMarkup.exec(content)) !== null) {
            _loop();
        }
        return content;
    }
    function renderStage1(content) {
        var contentMatch;
        while ((contentMatch = matchByRegex(content, regex.codeTagMarkup)) !== null) {
            content = matchReplacedConent(content, contentMatch, codePlaceholder);
        }
        while ((contentMatch = matchByRegex(content, regex.codeBlockMarkup)) !== null) {
            content = matchReplacedConent(content, contentMatch, codePlaceholder);
        }
        while ((contentMatch = matchByRegex(content, regex.codeInlineMarkup)) !== null) {
            content = matchReplacedConent(content, contentMatch, codePlaceholder);
        }
        var mathMatchs;
        while ((mathMatchs = matchMathBlocks(content)).length !== 0) {
            var lastIndex = -1;
            var lastOffset = 0;
            var _iterator3 = _createForOfIteratorHelper(mathMatchs), _step3;
            try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    contentMatch = _step3.value;
                    var matchLength = contentMatch.content.length;
                    var preparedContent = latexRender.prepareContent(contentMatch.content, contentMatch.innerContent);
                    preparedContent = getCodeRestoredContent(preparedContent);
                    var latexElementAttrList = [];
                    latexElementAttrList.push("".concat(latexTagDisplayAttrName, '="').concat(contentMatch.displayMode, '"'));
                    if (settings.overflowScroll) {
                        var displayStyle = contentMatch.displayMode ? "block" : "inline-flex";
                        latexElementAttrList.push('style="max-width: 100%;display: '.concat(displayStyle, ';overflow: auto hidden;"'));
                    }
                    var preparedHTML = "<".concat(latexTagName, " ").concat(latexElementAttrList.join(" "), ">").concat(escapeHtml(preparedContent), "</").concat(latexTagName, ">");
                    var contentReplacement = getCommentReplaceMarkedText(window.btoa(encodeURIComponent(preparedHTML)));
                    var contentIndex = contentMatch.index;
                    if (contentMatch.index > lastIndex) {
                        contentIndex += lastOffset;
                    }
                    lastIndex = contentMatch.index;
                    lastOffset = contentReplacement.length - matchLength;
                    content = content.substring(0, contentIndex) + contentReplacement + content.substring(contentIndex + matchLength, content.length);
                }
            } catch (err) {
                _iterator3.e(err);
            } finally {
                _iterator3.f();
            }
        }
        content = getCodeRestoredContent(content);
        content = content.replaceAll(regex.commentDeleteReplaceMarkup, "$1".concat(deleteReplaceMark, "\x3c!--"));
        return content;
    }
    function renderStage2(html) {
        var contentMatch;
        html = html.replaceAll(deleteReplaceMark, "");
        var _loop2 = function _loop2() {
            var commentMark = contentMatch[0];
            var originalContent = contentMatch[1] || "";
            html = html.replace(commentMark, (function() {
                return decodeURIComponent(window.atob(originalContent));
            }));
        };
        while ((contentMatch = regex.commentReplaceMarkup.exec(html)) !== null) {
            _loop2();
        }
        return html;
    }
    function renderStage3() {
        return _renderStage.apply(this, arguments);
    }
    function _renderStage() {
        _renderStage = _asyncToGenerator(_regeneratorRuntime().mark((function _callee2() {
            var mathElements, _iterator4, _step4, element, displayMode;
            return _regeneratorRuntime().wrap((function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        latexRender.prepareRender();
                        mathElements = document.getElementsByTagName(latexTagName);
                        _iterator4 = _createForOfIteratorHelper(mathElements);
                        _context2.prev = 3;
                        _iterator4.s();

                      case 5:
                        if ((_step4 = _iterator4.n()).done) {
                            _context2.next = 12;
                            break;
                        }
                        element = _step4.value;
                        displayMode = element.getAttribute(latexTagDisplayAttrName) === "true";
                        _context2.next = 10;
                        return latexRender.renderElement(element, displayMode);

                      case 10:
                        _context2.next = 5;
                        break;

                      case 12:
                        _context2.next = 17;
                        break;

                      case 14:
                        _context2.prev = 14;
                        _context2.t0 = _context2["catch"](3);
                        _iterator4.e(_context2.t0);

                      case 17:
                        _context2.prev = 17;
                        _iterator4.f();
                        return _context2.finish(17);

                      case 20:
                        latexRender.afterRender();

                      case 21:
                      case "end":
                        return _context2.stop();
                    }
                }
            }), _callee2, null, [ [ 3, 14, 17, 20 ] ]);
        })));
        return _renderStage.apply(this, arguments);
    }
    function initLatex(hook, vm) {
        hook.beforeEach((function(content, next) {
            content = renderStage1(content);
            next(content);
        }));
        hook.afterEach((function(html, next) {
            html = renderStage2(html);
            next(html);
        }));
        hook.doneEach(_asyncToGenerator(_regeneratorRuntime().mark((function _callee() {
            return _regeneratorRuntime().wrap((function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return renderStage3();

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                }
            }), _callee);
        }))));
    }
    if (window) {
        window.$docsify.plugins = [].concat(window.$docsify.plugins || [], initLatex);
    }
})();
//# sourceMappingURL=docsify-latex.js.map
