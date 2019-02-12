(window.webpackJsonp = window.webpackJsonp || []).push([ [ 2 ], {
    /***/ 0: 
    /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__("zUnb");
        /***/    },
    /***/ crnd: 
    /***/ function(module, exports) {
        function webpackEmptyAsyncContext(req) {
            // Here Promise.resolve().then() is used instead of new Promise() to prevent
            // uncaught exception popping up in devtools
            return Promise.resolve().then(function() {
                var e = new Error("Cannot find module '" + req + "'");
                throw e.code = "MODULE_NOT_FOUND", e;
            });
        }
        webpackEmptyAsyncContext.keys = function() {
            return [];
        }, webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext, module.exports = webpackEmptyAsyncContext, 
        webpackEmptyAsyncContext.id = "crnd";
    },
    /***/ zUnb: 
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        // CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
        /* global Reflect, Promise */
        var extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        };
        function __extends(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        }
        var __assign = function() {
            return (__assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
            }).apply(this, arguments);
        };
        function __decorate(decorators, target, key, desc) {
            var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }
        function __metadata(metadataKey, metadataValue) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(metadataKey, metadataValue);
        }
        function __values(o) {
            var m = "function" == typeof Symbol && o[Symbol.iterator], i = 0;
            return m ? m.call(o) : {
                next: function() {
                    return o && i >= o.length && (o = void 0), {
                        value: o && o[i++],
                        done: !o
                    };
                }
            };
        }
        function __read(o, n) {
            var m = "function" == typeof Symbol && o[Symbol.iterator];
            if (!m) return o;
            var r, e, i = m.call(o), ar = [];
            try {
                for (;(void 0 === n || n-- > 0) && !(r = i.next()).done; ) ar.push(r.value);
            } catch (error) {
                e = {
                    error: error
                };
            } finally {
                try {
                    r && !r.done && (m = i.return) && m.call(i);
                } finally {
                    if (e) throw e.error;
                }
            }
            return ar;
        }
        function __spread() {
            for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
            return ar;
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isArray.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */
        var isArray = Array.isArray || function(x) {
            return x && "number" == typeof x.length;
        };
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isObject.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */        function isObject(x) {
            return null != x && "object" == typeof x;
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isFunction.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */        function isFunction(x) {
            return "function" == typeof x;
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/errorObject.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */        var tryCatchTarget, errorObject = {
            e: {}
        };
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/tryCatch.js
        /** PURE_IMPORTS_START _errorObject PURE_IMPORTS_END */        function tryCatcher() {
            try {
                return tryCatchTarget.apply(this, arguments);
            } catch (e) {
                return errorObject.e = e, errorObject;
            }
        }
        function tryCatch(fn) {
            return tryCatchTarget = fn, tryCatcher;
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */        function UnsubscriptionErrorImpl(errors) {
            return Error.call(this), this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
                return i + 1 + ") " + err.toString();
            }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = errors, this;
        }
        UnsubscriptionErrorImpl.prototype = /* */ /* */ Object.create(Error.prototype);
        var UnsubscriptionError = UnsubscriptionErrorImpl, Subscription_Subscription = /* */ /* */ function() {
            function Subscription(unsubscribe) {
                this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, 
                unsubscribe && (this._unsubscribe = unsubscribe);
            }
            var empty;
            return Subscription.prototype.unsubscribe = function() {
                var errors, hasErrors = !1;
                if (!this.closed) {
                    var _parent = this._parent, _parents = this._parents, _unsubscribe = this._unsubscribe, _subscriptions = this._subscriptions;
                    this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                    for (var index = -1, len = _parents ? _parents.length : 0; _parent; ) _parent.remove(this), 
                    _parent = ++index < len && _parents[index] || null;
                    if (isFunction(_unsubscribe) && tryCatch(_unsubscribe).call(this) === errorObject && (hasErrors = !0, 
                    errors = errors || (errorObject.e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(errorObject.e.errors) : [ errorObject.e ])), 
                    isArray(_subscriptions)) for (index = -1, len = _subscriptions.length; ++index < len; ) {
                        var sub = _subscriptions[index];
                        if (isObject(sub) && tryCatch(sub.unsubscribe).call(sub) === errorObject) {
                            hasErrors = !0, errors = errors || [];
                            var err = errorObject.e;
                            err instanceof UnsubscriptionError ? errors = errors.concat(flattenUnsubscriptionErrors(err.errors)) : errors.push(err);
                        }
                    }
                    if (hasErrors) throw new UnsubscriptionError(errors);
                }
            }, Subscription.prototype.add = function(teardown) {
                if (!teardown || teardown === Subscription.EMPTY) return Subscription.EMPTY;
                if (teardown === this) return this;
                var subscription = teardown;
                switch (typeof teardown) {
                  case "function":
                    subscription = new Subscription(teardown);

                  case "object":
                    if (subscription.closed || "function" != typeof subscription.unsubscribe) return subscription;
                    if (this.closed) return subscription.unsubscribe(), subscription;
                    if ("function" != typeof subscription._addParent) {
                        var tmp = subscription;
                        (subscription = new Subscription())._subscriptions = [ tmp ];
                    }
                    break;

                  default:
                    throw new Error("unrecognized teardown " + teardown + " added to Subscription.");
                }
                return (this._subscriptions || (this._subscriptions = [])).push(subscription), subscription._addParent(this), 
                subscription;
            }, Subscription.prototype.remove = function(subscription) {
                var subscriptions = this._subscriptions;
                if (subscriptions) {
                    var subscriptionIndex = subscriptions.indexOf(subscription);
                    -1 !== subscriptionIndex && subscriptions.splice(subscriptionIndex, 1);
                }
            }, Subscription.prototype._addParent = function(parent) {
                var _parent = this._parent, _parents = this._parents;
                _parent && _parent !== parent ? _parents ? -1 === _parents.indexOf(parent) && _parents.push(parent) : this._parents = [ parent ] : this._parent = parent;
            }, Subscription.EMPTY = ((empty = new Subscription()).closed = !0, empty), Subscription;
        }();
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Subscription.js
        /** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_tryCatch,_util_errorObject,_util_UnsubscriptionError PURE_IMPORTS_END */        function flattenUnsubscriptionErrors(errors) {
            return errors.reduce(function(errs, err) {
                return errs.concat(err instanceof UnsubscriptionError ? err.errors : err);
            }, []);
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/config.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */        var _enable_super_gross_mode_that_will_cause_bad_things = !1, config_config = {
            Promise: void 0,
            set useDeprecatedSynchronousErrorHandling(value) {
                _enable_super_gross_mode_that_will_cause_bad_things = value;
            },
            get useDeprecatedSynchronousErrorHandling() {
                return _enable_super_gross_mode_that_will_cause_bad_things;
            }
        };
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/hostReportError.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */
        function hostReportError(err) {
            setTimeout(function() {
                throw err;
            });
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Observer.js
        /** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */        var empty = {
            closed: !0,
            next: function(value) {},
            error: function(err) {
                if (config_config.useDeprecatedSynchronousErrorHandling) throw err;
                hostReportError(err);
            },
            complete: function() {}
        }, rxSubscriber = "function" == typeof Symbol ? /* */ /* */ Symbol("rxSubscriber") : "@@rxSubscriber_" + /* */ /* */ Math.random(), Subscriber_Subscriber = /* */ /* */ function(_super) {
            function Subscriber(destinationOrNext, error, complete) {
                var _this = _super.call(this) || this;
                switch (_this.syncErrorValue = null, _this.syncErrorThrown = !1, _this.syncErrorThrowable = !1, 
                _this.isStopped = !1, _this._parentSubscription = null, arguments.length) {
                  case 0:
                    _this.destination = empty;
                    break;

                  case 1:
                    if (!destinationOrNext) {
                        _this.destination = empty;
                        break;
                    }
                    if ("object" == typeof destinationOrNext) {
                        destinationOrNext instanceof Subscriber ? (_this.syncErrorThrowable = destinationOrNext.syncErrorThrowable, 
                        _this.destination = destinationOrNext, destinationOrNext.add(_this)) : (_this.syncErrorThrowable = !0, 
                        _this.destination = new Subscriber_SafeSubscriber(_this, destinationOrNext));
                        break;
                    }

                  default:
                    _this.syncErrorThrowable = !0, _this.destination = new Subscriber_SafeSubscriber(_this, destinationOrNext, error, complete);
                }
                return _this;
            }
            return __extends(Subscriber, _super), Subscriber.prototype[rxSubscriber] = function() {
                return this;
            }, Subscriber.create = function(next, error, complete) {
                var subscriber = new Subscriber(next, error, complete);
                return subscriber.syncErrorThrowable = !1, subscriber;
            }, Subscriber.prototype.next = function(value) {
                this.isStopped || this._next(value);
            }, Subscriber.prototype.error = function(err) {
                this.isStopped || (this.isStopped = !0, this._error(err));
            }, Subscriber.prototype.complete = function() {
                this.isStopped || (this.isStopped = !0, this._complete());
            }, Subscriber.prototype.unsubscribe = function() {
                this.closed || (this.isStopped = !0, _super.prototype.unsubscribe.call(this));
            }, Subscriber.prototype._next = function(value) {
                this.destination.next(value);
            }, Subscriber.prototype._error = function(err) {
                this.destination.error(err), this.unsubscribe();
            }, Subscriber.prototype._complete = function() {
                this.destination.complete(), this.unsubscribe();
            }, Subscriber.prototype._unsubscribeAndRecycle = function() {
                var _parent = this._parent, _parents = this._parents;
                return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, 
                this.isStopped = !1, this._parent = _parent, this._parents = _parents, this._parentSubscription = null, 
                this;
            }, Subscriber;
        }(Subscription_Subscription), Subscriber_SafeSubscriber = /* */ /* */ function(_super) {
            function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
                var next, _this = _super.call(this) || this;
                _this._parentSubscriber = _parentSubscriber;
                var context = _this;
                return isFunction(observerOrNext) ? next = observerOrNext : observerOrNext && (next = observerOrNext.next, 
                error = observerOrNext.error, complete = observerOrNext.complete, observerOrNext !== empty && (isFunction((context = Object.create(observerOrNext)).unsubscribe) && _this.add(context.unsubscribe.bind(context)), 
                context.unsubscribe = _this.unsubscribe.bind(_this))), _this._context = context, 
                _this._next = next, _this._error = error, _this._complete = complete, _this;
            }
            return __extends(SafeSubscriber, _super), SafeSubscriber.prototype.next = function(value) {
                if (!this.isStopped && this._next) {
                    var _parentSubscriber = this._parentSubscriber;
                    config_config.useDeprecatedSynchronousErrorHandling && _parentSubscriber.syncErrorThrowable ? this.__tryOrSetError(_parentSubscriber, this._next, value) && this.unsubscribe() : this.__tryOrUnsub(this._next, value);
                }
            }, SafeSubscriber.prototype.error = function(err) {
                if (!this.isStopped) {
                    var _parentSubscriber = this._parentSubscriber, useDeprecatedSynchronousErrorHandling = config_config.useDeprecatedSynchronousErrorHandling;
                    if (this._error) useDeprecatedSynchronousErrorHandling && _parentSubscriber.syncErrorThrowable ? (this.__tryOrSetError(_parentSubscriber, this._error, err), 
                    this.unsubscribe()) : (this.__tryOrUnsub(this._error, err), this.unsubscribe()); else if (_parentSubscriber.syncErrorThrowable) useDeprecatedSynchronousErrorHandling ? (_parentSubscriber.syncErrorValue = err, 
                    _parentSubscriber.syncErrorThrown = !0) : hostReportError(err), this.unsubscribe(); else {
                        if (this.unsubscribe(), useDeprecatedSynchronousErrorHandling) throw err;
                        hostReportError(err);
                    }
                }
            }, SafeSubscriber.prototype.complete = function() {
                var _this = this;
                if (!this.isStopped) {
                    var _parentSubscriber = this._parentSubscriber;
                    if (this._complete) {
                        var wrappedComplete = function() {
                            return _this._complete.call(_this._context);
                        };
                        config_config.useDeprecatedSynchronousErrorHandling && _parentSubscriber.syncErrorThrowable ? (this.__tryOrSetError(_parentSubscriber, wrappedComplete), 
                        this.unsubscribe()) : (this.__tryOrUnsub(wrappedComplete), this.unsubscribe());
                    } else this.unsubscribe();
                }
            }, SafeSubscriber.prototype.__tryOrUnsub = function(fn, value) {
                try {
                    fn.call(this._context, value);
                } catch (err) {
                    if (this.unsubscribe(), config_config.useDeprecatedSynchronousErrorHandling) throw err;
                    hostReportError(err);
                }
            }, SafeSubscriber.prototype.__tryOrSetError = function(parent, fn, value) {
                if (!config_config.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                try {
                    fn.call(this._context, value);
                } catch (err) {
                    return config_config.useDeprecatedSynchronousErrorHandling ? (parent.syncErrorValue = err, 
                    parent.syncErrorThrown = !0, !0) : (hostReportError(err), !0);
                }
                return !1;
            }, SafeSubscriber.prototype._unsubscribe = function() {
                var _parentSubscriber = this._parentSubscriber;
                this._context = null, this._parentSubscriber = null, _parentSubscriber.unsubscribe();
            }, SafeSubscriber;
        }(Subscriber_Subscriber), observable_observable = "function" == typeof Symbol && Symbol.observable || "@@observable";
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */        
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/noop.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */
        function noop() {}
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/pipe.js
        /** PURE_IMPORTS_START _noop PURE_IMPORTS_END */        function pipe_pipe() {
            for (var fns = [], _i = 0; _i < arguments.length; _i++) fns[_i] = arguments[_i];
            return pipeFromArray(fns);
        }
        function pipeFromArray(fns) {
            return fns ? 1 === fns.length ? fns[0] : function(input) {
                return fns.reduce(function(prev, fn) {
                    return fn(prev);
                }, input);
            } : noop;
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Observable.js
        /** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_internal_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */        var Observable_Observable = /* */ /* */ function() {
            function Observable(subscribe) {
                this._isScalar = !1, subscribe && (this._subscribe = subscribe);
            }
            return Observable.prototype.lift = function(operator) {
                var observable = new Observable();
                return observable.source = this, observable.operator = operator, observable;
            }, Observable.prototype.subscribe = function(observerOrNext, error, complete) {
                var operator = this.operator, sink = 
                // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/toSubscriber.js
                /** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
                function(nextOrObserver, error, complete) {
                    if (nextOrObserver) {
                        if (nextOrObserver instanceof Subscriber_Subscriber) return nextOrObserver;
                        if (nextOrObserver[rxSubscriber]) return nextOrObserver[rxSubscriber]();
                    }
                    return nextOrObserver || error || complete ? new Subscriber_Subscriber(nextOrObserver, error, complete) : new Subscriber_Subscriber(empty);
                }
                // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/symbol/observable.js
                /** PURE_IMPORTS_START  PURE_IMPORTS_END */ (observerOrNext, error, complete);
                if (operator ? operator.call(sink, this.source) : sink.add(this.source || config_config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink)), 
                config_config.useDeprecatedSynchronousErrorHandling && sink.syncErrorThrowable && (sink.syncErrorThrowable = !1, 
                sink.syncErrorThrown)) throw sink.syncErrorValue;
                return sink;
            }, Observable.prototype._trySubscribe = function(sink) {
                try {
                    return this._subscribe(sink);
                } catch (err) {
                    config_config.useDeprecatedSynchronousErrorHandling && (sink.syncErrorThrown = !0, 
                    sink.syncErrorValue = err), 
                    // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/canReportError.js
                    /** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
                    function(observer) {
                        for (;observer; ) {
                            var destination = observer.destination;
                            if (observer.closed || observer.isStopped) return !1;
                            observer = destination && destination instanceof Subscriber_Subscriber ? destination : null;
                        }
                        return !0;
                    }(sink) ? sink.error(err) : console.warn(err);
                }
            }, Observable.prototype.forEach = function(next, promiseCtor) {
                var _this = this;
                return new (promiseCtor = getPromiseCtor(promiseCtor))(function(resolve, reject) {
                    var subscription;
                    subscription = _this.subscribe(function(value) {
                        try {
                            next(value);
                        } catch (err) {
                            reject(err), subscription && subscription.unsubscribe();
                        }
                    }, reject, resolve);
                });
            }, Observable.prototype._subscribe = function(subscriber) {
                var source = this.source;
                return source && source.subscribe(subscriber);
            }, Observable.prototype[observable_observable] = function() {
                return this;
            }, Observable.prototype.pipe = function() {
                for (var operations = [], _i = 0; _i < arguments.length; _i++) operations[_i] = arguments[_i];
                return 0 === operations.length ? this : pipeFromArray(operations)(this);
            }, Observable.prototype.toPromise = function(promiseCtor) {
                var _this = this;
                return new (promiseCtor = getPromiseCtor(promiseCtor))(function(resolve, reject) {
                    var value;
                    _this.subscribe(function(x) {
                        return value = x;
                    }, function(err) {
                        return reject(err);
                    }, function() {
                        return resolve(value);
                    });
                });
            }, Observable.create = function(subscribe) {
                return new Observable(subscribe);
            }, Observable;
        }();
        function getPromiseCtor(promiseCtor) {
            if (promiseCtor || (promiseCtor = config_config.Promise || Promise), !promiseCtor) throw new Error("no Promise impl found");
            return promiseCtor;
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */        function ObjectUnsubscribedErrorImpl() {
            return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", 
            this;
        }
        ObjectUnsubscribedErrorImpl.prototype = /* */ /* */ Object.create(Error.prototype);
        var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl, SubjectSubscription_SubjectSubscription = /* */ /* */ function(_super) {
            function SubjectSubscription(subject, subscriber) {
                var _this = _super.call(this) || this;
                return _this.subject = subject, _this.subscriber = subscriber, _this.closed = !1, 
                _this;
            }
            return __extends(SubjectSubscription, _super), SubjectSubscription.prototype.unsubscribe = function() {
                if (!this.closed) {
                    this.closed = !0;
                    var subject = this.subject, observers = subject.observers;
                    if (this.subject = null, observers && 0 !== observers.length && !subject.isStopped && !subject.closed) {
                        var subscriberIndex = observers.indexOf(this.subscriber);
                        -1 !== subscriberIndex && observers.splice(subscriberIndex, 1);
                    }
                }
            }, SubjectSubscription;
        }(Subscription_Subscription), Subject_SubjectSubscriber = /* */ /* */ function(_super) {
            function SubjectSubscriber(destination) {
                var _this = _super.call(this, destination) || this;
                return _this.destination = destination, _this;
            }
            return __extends(SubjectSubscriber, _super), SubjectSubscriber;
        }(Subscriber_Subscriber), Subject_Subject = /* */ /* */ function(_super) {
            function Subject() {
                var _this = _super.call(this) || this;
                return _this.observers = [], _this.closed = !1, _this.isStopped = !1, _this.hasError = !1, 
                _this.thrownError = null, _this;
            }
            return __extends(Subject, _super), Subject.prototype[rxSubscriber] = function() {
                return new Subject_SubjectSubscriber(this);
            }, Subject.prototype.lift = function(operator) {
                var subject = new Subject_AnonymousSubject(this, this);
                return subject.operator = operator, subject;
            }, Subject.prototype.next = function(value) {
                if (this.closed) throw new ObjectUnsubscribedError();
                if (!this.isStopped) for (var observers = this.observers, len = observers.length, copy = observers.slice(), i = 0; i < len; i++) copy[i].next(value);
            }, Subject.prototype.error = function(err) {
                if (this.closed) throw new ObjectUnsubscribedError();
                this.hasError = !0, this.thrownError = err, this.isStopped = !0;
                for (var observers = this.observers, len = observers.length, copy = observers.slice(), i = 0; i < len; i++) copy[i].error(err);
                this.observers.length = 0;
            }, Subject.prototype.complete = function() {
                if (this.closed) throw new ObjectUnsubscribedError();
                this.isStopped = !0;
                for (var observers = this.observers, len = observers.length, copy = observers.slice(), i = 0; i < len; i++) copy[i].complete();
                this.observers.length = 0;
            }, Subject.prototype.unsubscribe = function() {
                this.isStopped = !0, this.closed = !0, this.observers = null;
            }, Subject.prototype._trySubscribe = function(subscriber) {
                if (this.closed) throw new ObjectUnsubscribedError();
                return _super.prototype._trySubscribe.call(this, subscriber);
            }, Subject.prototype._subscribe = function(subscriber) {
                if (this.closed) throw new ObjectUnsubscribedError();
                return this.hasError ? (subscriber.error(this.thrownError), Subscription_Subscription.EMPTY) : this.isStopped ? (subscriber.complete(), 
                Subscription_Subscription.EMPTY) : (this.observers.push(subscriber), new SubjectSubscription_SubjectSubscription(this, subscriber));
            }, Subject.prototype.asObservable = function() {
                var observable = new Observable_Observable();
                return observable.source = this, observable;
            }, Subject.create = function(destination, source) {
                return new Subject_AnonymousSubject(destination, source);
            }, Subject;
        }(Observable_Observable), Subject_AnonymousSubject = /* */ /* */ function(_super) {
            function AnonymousSubject(destination, source) {
                var _this = _super.call(this) || this;
                return _this.destination = destination, _this.source = source, _this;
            }
            return __extends(AnonymousSubject, _super), AnonymousSubject.prototype.next = function(value) {
                var destination = this.destination;
                destination && destination.next && destination.next(value);
            }, AnonymousSubject.prototype.error = function(err) {
                var destination = this.destination;
                destination && destination.error && this.destination.error(err);
            }, AnonymousSubject.prototype.complete = function() {
                var destination = this.destination;
                destination && destination.complete && this.destination.complete();
            }, AnonymousSubject.prototype._subscribe = function(subscriber) {
                return this.source ? this.source.subscribe(subscriber) : Subscription_Subscription.EMPTY;
            }, AnonymousSubject;
        }(Subject_Subject);
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/SubjectSubscription.js
        /** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */        
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isScheduler.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */
        function isScheduler(value) {
            return value && "function" == typeof value.schedule;
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/InnerSubscriber.js
        /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */        var InnerSubscriber_InnerSubscriber = /* */ /* */ function(_super) {
            function InnerSubscriber(parent, outerValue, outerIndex) {
                var _this = _super.call(this) || this;
                return _this.parent = parent, _this.outerValue = outerValue, _this.outerIndex = outerIndex, 
                _this.index = 0, _this;
            }
            return __extends(InnerSubscriber, _super), InnerSubscriber.prototype._next = function(value) {
                this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
            }, InnerSubscriber.prototype._error = function(error) {
                this.parent.notifyError(error, this), this.unsubscribe();
            }, InnerSubscriber.prototype._complete = function() {
                this.parent.notifyComplete(this), this.unsubscribe();
            }, InnerSubscriber;
        }(Subscriber_Subscriber), subscribeToArray = function(array) {
            return function(subscriber) {
                for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) subscriber.next(array[i]);
                subscriber.closed || subscriber.complete();
            };
        }, subscribeToPromise = function(promise) {
            return function(subscriber) {
                return promise.then(function(value) {
                    subscriber.closed || (subscriber.next(value), subscriber.complete());
                }, function(err) {
                    return subscriber.error(err);
                }).then(null, hostReportError), subscriber;
            };
        };
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */        
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/symbol/iterator.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */
        function getSymbolIterator() {
            return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
        }
        var iterator_iterator = /* */ /* */ getSymbolIterator(), subscribeToIterable = function(iterable) {
            return function(subscriber) {
                for (var iterator = iterable[iterator_iterator](); ;) {
                    var item = iterator.next();
                    if (item.done) {
                        subscriber.complete();
                        break;
                    }
                    if (subscriber.next(item.value), subscriber.closed) break;
                }
                return "function" == typeof iterator.return && subscriber.add(function() {
                    iterator.return && iterator.return();
                }), subscriber;
            };
        }, subscribeToObservable = function(obj) {
            return function(subscriber) {
                var obs = obj[observable_observable]();
                if ("function" != typeof obs.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                return obs.subscribe(subscriber);
            };
        }, isArrayLike = function(x) {
            return x && "number" == typeof x.length && "function" != typeof x;
        };
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isPromise.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */
        function isPromise(value) {
            return value && "function" != typeof value.subscribe && "function" == typeof value.then;
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeTo.js
        /** PURE_IMPORTS_START _Observable,_subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */        var subscribeTo = function(result) {
            if (result instanceof Observable_Observable) return function(subscriber) {
                return result._isScalar ? (subscriber.next(result.value), void subscriber.complete()) : result.subscribe(subscriber);
            };
            if (result && "function" == typeof result[observable_observable]) return subscribeToObservable(result);
            if (isArrayLike(result)) return subscribeToArray(result);
            if (isPromise(result)) return subscribeToPromise(result);
            if (result && "function" == typeof result[iterator_iterator]) return subscribeToIterable(result);
            var value = isObject(result) ? "an invalid object" : "'" + result + "'";
            throw new TypeError("You provided " + value + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.");
        };
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js
        /** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo PURE_IMPORTS_END */        function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
            if (void 0 === destination && (destination = new InnerSubscriber_InnerSubscriber(outerSubscriber, outerValue, outerIndex)), 
            !destination.closed) return subscribeTo(result)(destination);
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/OuterSubscriber.js
        /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */        var OuterSubscriber_OuterSubscriber = /* */ /* */ function(_super) {
            function OuterSubscriber() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            return __extends(OuterSubscriber, _super), OuterSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                this.destination.next(innerValue);
            }, OuterSubscriber.prototype.notifyError = function(error, innerSub) {
                this.destination.error(error);
            }, OuterSubscriber.prototype.notifyComplete = function(innerSub) {
                this.destination.complete();
            }, OuterSubscriber;
        }(Subscriber_Subscriber);
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/map.js
        /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */        function map(project, thisArg) {
            return function(source) {
                if ("function" != typeof project) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                return source.lift(new MapOperator(project, thisArg));
            };
        }
        var MapOperator = /* */ /* */ function() {
            function MapOperator(project, thisArg) {
                this.project = project, this.thisArg = thisArg;
            }
            return MapOperator.prototype.call = function(subscriber, source) {
                return source.subscribe(new map_MapSubscriber(subscriber, this.project, this.thisArg));
            }, MapOperator;
        }(), map_MapSubscriber = /* */ /* */ function(_super) {
            function MapSubscriber(destination, project, thisArg) {
                var _this = _super.call(this, destination) || this;
                return _this.project = project, _this.count = 0, _this.thisArg = thisArg || _this, 
                _this;
            }
            return __extends(MapSubscriber, _super), MapSubscriber.prototype._next = function(value) {
                var result;
                try {
                    result = this.project.call(this.thisArg, value, this.count++);
                } catch (err) {
                    return void this.destination.error(err);
                }
                this.destination.next(result);
            }, MapSubscriber;
        }(Subscriber_Subscriber);
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/fromArray.js
        /** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToArray PURE_IMPORTS_END */
        function fromArray(input, scheduler) {
            return new Observable_Observable(scheduler ? function(subscriber) {
                var sub = new Subscription_Subscription(), i = 0;
                return sub.add(scheduler.schedule(function() {
                    i !== input.length ? (subscriber.next(input[i++]), subscriber.closed || sub.add(this.schedule())) : subscriber.complete();
                })), sub;
            } : subscribeToArray(input));
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/fromPromise.js
        /** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToPromise PURE_IMPORTS_END */        
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/from.js
        /** PURE_IMPORTS_START _Observable,_util_isPromise,_util_isArrayLike,_util_isInteropObservable,_util_isIterable,_fromArray,_fromPromise,_fromIterable,_fromObservable,_util_subscribeTo PURE_IMPORTS_END */
        function from(input, scheduler) {
            if (!scheduler) return input instanceof Observable_Observable ? input : new Observable_Observable(subscribeTo(input));
            if (null != input) {
                if (
                // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js
                /** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
                function(input) {
                    return input && "function" == typeof input[observable_observable];
                }
                // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isIterable.js
                /** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */ (input)) 
                // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/fromObservable.js
                /** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable,_util_subscribeToObservable PURE_IMPORTS_END */
                return function(input, scheduler) {
                    return new Observable_Observable(scheduler ? function(subscriber) {
                        var sub = new Subscription_Subscription();
                        return sub.add(scheduler.schedule(function() {
                            var observable = input[observable_observable]();
                            sub.add(observable.subscribe({
                                next: function(value) {
                                    sub.add(scheduler.schedule(function() {
                                        return subscriber.next(value);
                                    }));
                                },
                                error: function(err) {
                                    sub.add(scheduler.schedule(function() {
                                        return subscriber.error(err);
                                    }));
                                },
                                complete: function() {
                                    sub.add(scheduler.schedule(function() {
                                        return subscriber.complete();
                                    }));
                                }
                            }));
                        })), sub;
                    } : subscribeToObservable(input));
                }(input, scheduler);
                if (isPromise(input)) return function(input, scheduler) {
                    return new Observable_Observable(scheduler ? function(subscriber) {
                        var sub = new Subscription_Subscription();
                        return sub.add(scheduler.schedule(function() {
                            return input.then(function(value) {
                                sub.add(scheduler.schedule(function() {
                                    subscriber.next(value), sub.add(scheduler.schedule(function() {
                                        return subscriber.complete();
                                    }));
                                }));
                            }, function(err) {
                                sub.add(scheduler.schedule(function() {
                                    return subscriber.error(err);
                                }));
                            });
                        })), sub;
                    } : subscribeToPromise(input));
                }
                // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/fromIterable.js
                /** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator,_util_subscribeToIterable PURE_IMPORTS_END */ (input, scheduler);
                if (isArrayLike(input)) return fromArray(input, scheduler);
                if (function(input) {
                    return input && "function" == typeof input[iterator_iterator];
                }(input) || "string" == typeof input) return function(input, scheduler) {
                    if (!input) throw new Error("Iterable cannot be null");
                    return new Observable_Observable(scheduler ? function(subscriber) {
                        var iterator, sub = new Subscription_Subscription();
                        return sub.add(function() {
                            iterator && "function" == typeof iterator.return && iterator.return();
                        }), sub.add(scheduler.schedule(function() {
                            iterator = input[iterator_iterator](), sub.add(scheduler.schedule(function() {
                                if (!subscriber.closed) {
                                    var value, done;
                                    try {
                                        var result = iterator.next();
                                        value = result.value, done = result.done;
                                    } catch (err) {
                                        return void subscriber.error(err);
                                    }
                                    done ? subscriber.complete() : (subscriber.next(value), this.schedule());
                                }
                            }));
                        })), sub;
                    } : subscribeToIterable(input));
                }(input, scheduler);
            }
            throw new TypeError((null !== input && typeof input || input) + " is not observable");
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/mergeMap.js
        /** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */        function mergeMap(project, resultSelector, concurrent) {
            return void 0 === concurrent && (concurrent = Number.POSITIVE_INFINITY), "function" == typeof resultSelector ? function(source) {
                return source.pipe(mergeMap(function(a, i) {
                    return from(project(a, i)).pipe(map(function(b, ii) {
                        return resultSelector(a, b, i, ii);
                    }));
                }, concurrent));
            } : ("number" == typeof resultSelector && (concurrent = resultSelector), function(source) {
                return source.lift(new MergeMapOperator(project, concurrent));
            });
        }
        var MergeMapOperator = /* */ /* */ function() {
            function MergeMapOperator(project, concurrent) {
                void 0 === concurrent && (concurrent = Number.POSITIVE_INFINITY), this.project = project, 
                this.concurrent = concurrent;
            }
            return MergeMapOperator.prototype.call = function(observer, source) {
                return source.subscribe(new mergeMap_MergeMapSubscriber(observer, this.project, this.concurrent));
            }, MergeMapOperator;
        }(), mergeMap_MergeMapSubscriber = /* */ /* */ function(_super) {
            function MergeMapSubscriber(destination, project, concurrent) {
                void 0 === concurrent && (concurrent = Number.POSITIVE_INFINITY);
                var _this = _super.call(this, destination) || this;
                return _this.project = project, _this.concurrent = concurrent, _this.hasCompleted = !1, 
                _this.buffer = [], _this.active = 0, _this.index = 0, _this;
            }
            return __extends(MergeMapSubscriber, _super), MergeMapSubscriber.prototype._next = function(value) {
                this.active < this.concurrent ? this._tryNext(value) : this.buffer.push(value);
            }, MergeMapSubscriber.prototype._tryNext = function(value) {
                var result, index = this.index++;
                try {
                    result = this.project(value, index);
                } catch (err) {
                    return void this.destination.error(err);
                }
                this.active++, this._innerSub(result, value, index);
            }, MergeMapSubscriber.prototype._innerSub = function(ish, value, index) {
                var innerSubscriber = new InnerSubscriber_InnerSubscriber(this, void 0, void 0);
                this.destination.add(innerSubscriber), subscribeToResult(this, ish, value, index, innerSubscriber);
            }, MergeMapSubscriber.prototype._complete = function() {
                this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), 
                this.unsubscribe();
            }, MergeMapSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                this.destination.next(innerValue);
            }, MergeMapSubscriber.prototype.notifyComplete = function(innerSub) {
                var buffer = this.buffer;
                this.remove(innerSub), this.active--, buffer.length > 0 ? this._next(buffer.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
            }, MergeMapSubscriber;
        }(OuterSubscriber_OuterSubscriber);
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/identity.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */
        function identity(x) {
            return x;
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/mergeAll.js
        /** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */        function mergeAll(concurrent) {
            return void 0 === concurrent && (concurrent = Number.POSITIVE_INFINITY), mergeMap(identity, concurrent);
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/merge.js
        /** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */        
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/refCount.js
        /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
        function refCount() {
            return function(source) {
                return source.lift(new RefCountOperator(source));
            };
        }
        var RefCountOperator = /* */ /* */ function() {
            function RefCountOperator(connectable) {
                this.connectable = connectable;
            }
            return RefCountOperator.prototype.call = function(subscriber, source) {
                var connectable = this.connectable;
                connectable._refCount++;
                var refCounter = new refCount_RefCountSubscriber(subscriber, connectable), subscription = source.subscribe(refCounter);
                return refCounter.closed || (refCounter.connection = connectable.connect()), subscription;
            }, RefCountOperator;
        }(), refCount_RefCountSubscriber = /* */ /* */ function(_super) {
            function RefCountSubscriber(destination, connectable) {
                var _this = _super.call(this, destination) || this;
                return _this.connectable = connectable, _this;
            }
            return __extends(RefCountSubscriber, _super), RefCountSubscriber.prototype._unsubscribe = function() {
                var connectable = this.connectable;
                if (connectable) {
                    this.connectable = null;
                    var refCount = connectable._refCount;
                    if (refCount <= 0) this.connection = null; else if (connectable._refCount = refCount - 1, 
                    refCount > 1) this.connection = null; else {
                        var connection = this.connection, sharedConnection = connectable._connection;
                        this.connection = null, !sharedConnection || connection && sharedConnection !== connection || sharedConnection.unsubscribe();
                    }
                } else this.connection = null;
            }, RefCountSubscriber;
        }(Subscriber_Subscriber), connectableProto = /* */ /* */ function(_super) {
            function ConnectableObservable(source, subjectFactory) {
                var _this = _super.call(this) || this;
                return _this.source = source, _this.subjectFactory = subjectFactory, _this._refCount = 0, 
                _this._isComplete = !1, _this;
            }
            return __extends(ConnectableObservable, _super), ConnectableObservable.prototype._subscribe = function(subscriber) {
                return this.getSubject().subscribe(subscriber);
            }, ConnectableObservable.prototype.getSubject = function() {
                var subject = this._subject;
                return subject && !subject.isStopped || (this._subject = this.subjectFactory()), 
                this._subject;
            }, ConnectableObservable.prototype.connect = function() {
                var connection = this._connection;
                return connection || (this._isComplete = !1, (connection = this._connection = new Subscription_Subscription()).add(this.source.subscribe(new ConnectableObservable_ConnectableSubscriber(this.getSubject(), this))), 
                connection.closed ? (this._connection = null, connection = Subscription_Subscription.EMPTY) : this._connection = connection), 
                connection;
            }, ConnectableObservable.prototype.refCount = function() {
                return refCount()(this);
            }, ConnectableObservable;
        }(Observable_Observable).prototype, connectableObservableDescriptor = {
            operator: {
                value: null
            },
            _refCount: {
                value: 0,
                writable: !0
            },
            _subject: {
                value: null,
                writable: !0
            },
            _connection: {
                value: null,
                writable: !0
            },
            _subscribe: {
                value: connectableProto._subscribe
            },
            _isComplete: {
                value: connectableProto._isComplete,
                writable: !0
            },
            getSubject: {
                value: connectableProto.getSubject
            },
            connect: {
                value: connectableProto.connect
            },
            refCount: {
                value: connectableProto.refCount
            }
        }, ConnectableObservable_ConnectableSubscriber = /* */ /* */ function(_super) {
            function ConnectableSubscriber(destination, connectable) {
                var _this = _super.call(this, destination) || this;
                return _this.connectable = connectable, _this;
            }
            return __extends(ConnectableSubscriber, _super), ConnectableSubscriber.prototype._error = function(err) {
                this._unsubscribe(), _super.prototype._error.call(this, err);
            }, ConnectableSubscriber.prototype._complete = function() {
                this.connectable._isComplete = !0, this._unsubscribe(), _super.prototype._complete.call(this);
            }, ConnectableSubscriber.prototype._unsubscribe = function() {
                var connectable = this.connectable;
                if (connectable) {
                    this.connectable = null;
                    var connection = connectable._connection;
                    connectable._refCount = 0, connectable._subject = null, connectable._connection = null, 
                    connection && connection.unsubscribe();
                }
            }, ConnectableSubscriber;
        }(Subject_SubjectSubscriber);
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/share.js
        /** PURE_IMPORTS_START _multicast,_refCount,_Subject PURE_IMPORTS_END */
        function shareSubjectFactory() {
            return new Subject_Subject();
        }
        // CONCATENATED MODULE: ./node_modules/@angular/core/fesm5/core.js
        /**
 * @license Angular v8.0.0-beta.3
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        var PARAMETERS = "__parameters__";
        function makeParamDecorator(name, props, parentClass) {
            var metaCtor = function(props) {
                return function() {
                    for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                    if (props) {
                        var values = props.apply(void 0, __spread(args));
                        for (var propName in values) this[propName] = values[propName];
                    }
                };
            }(props);
            function ParamDecoratorFactory() {
                for (var _a, args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                if (this instanceof ParamDecoratorFactory) return metaCtor.apply(this, args), this;
                var annotationInstance = new ((_a = ParamDecoratorFactory).bind.apply(_a, __spread([ void 0 ], args)))();
                return ParamDecorator.annotation = annotationInstance, ParamDecorator;
                function ParamDecorator(cls, unusedKey, index) {
                    // there might be gaps if some in between parameters do not have annotations.
                    // we pad with nulls.
                    for (
                    // Use of Object.defineProperty is important since it creates non-enumerable property which
                    // prevents the property is copied during subclassing.
                    var parameters = cls.hasOwnProperty(PARAMETERS) ? cls[PARAMETERS] : Object.defineProperty(cls, PARAMETERS, {
                        value: []
                    })[PARAMETERS]; parameters.length <= index; ) parameters.push(null);
                    return (parameters[index] = parameters[index] || []).push(annotationInstance), cls;
                }
            }
            return parentClass && (ParamDecoratorFactory.prototype = Object.create(parentClass.prototype)), 
            ParamDecoratorFactory.prototype.ngMetadataName = name, ParamDecoratorFactory.annotationCls = ParamDecoratorFactory, 
            ParamDecoratorFactory;
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * Inject decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
        var Inject = /* */ makeParamDecorator("Inject", function(token) {
            return {
                token: token
            };
        }), Optional = /* */ makeParamDecorator("Optional"), Self = /* */ makeParamDecorator("Self"), SkipSelf = /* */ makeParamDecorator("SkipSelf"), InjectFlags = /* */ function(InjectFlags) {
            // TODO(alxhub): make this 'const' when ngc no longer writes exports of it into ngfactory files.
            /** Check self and check parent injector if needed */
            return InjectFlags[InjectFlags.Default = 0] = "Default", 
            /**
     * Specifies that an injector should retrieve a dependency from any injector until reaching the
     * host element of the current component. (Only used with Element Injector)
     */
            InjectFlags[InjectFlags.Host = 1] = "Host", 
            /** Don't ascend to ancestors of the node requesting injection. */
            InjectFlags[InjectFlags.Self = 2] = "Self", 
            /** Skip the node that is requesting injection. */
            InjectFlags[InjectFlags.SkipSelf = 4] = "SkipSelf", 
            /** Inject `defaultValue` instead if token not found. */
            InjectFlags[InjectFlags.Optional = 8] = "Optional", InjectFlags;
        }({});
        /**
 * Optional decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */        
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        function getClosureSafeProperty(objWithPropertyToExtract) {
            for (var key in objWithPropertyToExtract) if (objWithPropertyToExtract[key] === getClosureSafeProperty) return key;
            throw Error("Could not find renamed property on target object.");
        }
        /**
 * Sets properties on a target object from a source object, but only if
 * the property doesn't already exist on the target object.
 * @param target The target to set properties on
 * @param source The source of the property keys and values to set
 */        
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * Construct an `InjectableDef` which defines how a token will be constructed by the DI system, and
 * in which injectors (if any) it will be available.
 *
 * This should be assigned to a static `ngInjectableDef` field on a type, which will then be an
 * `InjectableType`.
 *
 * Options:
 * * `providedIn` determines which injectors will include the injectable, by either associating it
 *   with an `@NgModule` or other `InjectorType`, or by specifying that this injectable should be
 *   provided in the `'root'` injector, which will be the application-level injector in most apps.
 * * `factory` gives the zero argument function which will create an instance of the injectable.
 *   The factory can call `inject` to access the `Injector` and request injection of dependencies.
 *
 * @publicApi
 */
        function defineInjectable(opts) {
            return {
                providedIn: opts.providedIn || null,
                factory: opts.factory,
                value: void 0
            };
        }
        /**
 * Construct an `InjectorDef` which configures an injector.
 *
 * This should be assigned to a static `ngInjectorDef` field on a type, which will then be an
 * `InjectorType`.
 *
 * Options:
 *
 * * `factory`: an `InjectorType` is an instantiable type, so a zero argument `factory` function to
 *   create the type must be provided. If that factory function needs to inject arguments, it can
 *   use the `inject` function.
 * * `providers`: an optional array of providers to add to the injector. Each provider must
 *   either have a factory or point to a type which has an `ngInjectableDef` static property (the
 *   type must be an `InjectableType`).
 * * `imports`: an optional array of imports of other `InjectorType`s or `InjectorTypeWithModule`s
 *   whose providers will also be added to the injector. Locally provided types will override
 *   providers from imports.
 *
 * @publicApi
 */        
        /**
 * Read the `ngInjectableDef` type in a way which is immune to accidentally reading inherited value.
 *
 * @param type type which may have `ngInjectableDef`
 */
        function getInjectableDef(type) {
            return type && type.hasOwnProperty(NG_INJECTABLE_DEF) ? type[NG_INJECTABLE_DEF] : null;
        }
        /**
 * Read the `ngInjectorDef` type in a way which is immune to accidentally reading inherited value.
 *
 * @param type type which may have `ngInjectorDef`
 */        var NG_INJECTABLE_DEF = /* */ getClosureSafeProperty({
            ngInjectableDef: getClosureSafeProperty
        });
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        function stringify(token) {
            if ("string" == typeof token) return token;
            if (token instanceof Array) return "[" + token.map(stringify).join(", ") + "]";
            if (null == token) return "" + token;
            if (token.overriddenName) return "" + token.overriddenName;
            if (token.name) return "" + token.name;
            var res = token.toString();
            if (null == res) return "" + res;
            var newLineIndex = res.indexOf("\n");
            return -1 === newLineIndex ? res : res.substring(0, newLineIndex);
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        var __forward_ref__ = /* */ getClosureSafeProperty({
            __forward_ref__: getClosureSafeProperty
        });
        /**
 * Allows to refer to references which are not yet defined.
 *
 * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
 * DI is declared, but not yet defined. It is also used when the `token` which we use when creating
 * a query is not yet defined.
 *
 * @usageNotes
 * ### Example
 * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref'}
 * @publicApi
 */        function forwardRef(forwardRefFn) {
            return forwardRefFn.__forward_ref__ = forwardRef, forwardRefFn.toString = function() {
                return stringify(this());
            }, forwardRefFn;
        }
        /**
 * Lazily retrieves the reference value from a forwardRef.
 *
 * Acts as the identity function when given a non-forward-ref value.
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='resolve_forward_ref'}
 *
 * @see `forwardRef`
 * @publicApi
 */        function resolveForwardRef(type) {
            var fn = type;
            return "function" == typeof fn && fn.hasOwnProperty(__forward_ref__) && fn.__forward_ref__ === forwardRef ? fn() : type;
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        var _injectImplementation, __window = "undefined" != typeof window && window, __self = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self, _global = "undefined" != typeof global && global || __window || __self, _currentInjector = void 0;
        function setCurrentInjector(injector) {
            var former = _currentInjector;
            return _currentInjector = injector, former;
        }
        /**
 * Current implementation of inject.
 *
 * By default, it is `injectInjectorOnly`, which makes it `Injector`-only aware. It can be changed
 * to `directiveInject`, which brings in the `NodeInjector` system of ivy. It is designed this
 * way for two reasons:
 *  1. `Injector` should not depend on ivy logic.
 *  2. To maintain tree shake-ability we don't want to bring in unnecessary code.
 */        function inject(token, flags) {
            return void 0 === flags && (flags = InjectFlags.Default), (_injectImplementation || function(token, flags) {
                if (void 0 === flags && (flags = InjectFlags.Default), void 0 === _currentInjector) throw new Error("inject() must be called from an injection context");
                return null === _currentInjector ? 
                /**
 * Injects `root` tokens in limp mode.
 *
 * If no injector exists, we can still inject tree-shakable providers which have `providedIn` set to
 * `"root"`. This is known as the limp mode injection. In such case the value is stored in the
 * `InjectableDef`.
 */
                function(token, notFoundValue, flags) {
                    var injectableDef = getInjectableDef(token);
                    if (injectableDef && "root" == injectableDef.providedIn) return void 0 === injectableDef.value ? injectableDef.value = injectableDef.factory() : injectableDef.value;
                    if (flags & InjectFlags.Optional) return null;
                    throw new Error("Injector: NOT_FOUND [" + stringify(token) + "]");
                }(token, 0, flags) : _currentInjector.get(token, flags & InjectFlags.Optional ? null : void 0, flags);
            })(token, flags);
        }
        var InjectionToken = /** @class */ /* */ function() {
            function InjectionToken(_desc, options) {
                this._desc = _desc, 
                /** @internal */
                this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0, "number" == typeof options ? 
                // This is a special hack to assign __NG_ELEMENT_ID__ to this instance.
                // __NG_ELEMENT_ID__ is Used by Ivy to determine bloom filter id.
                // We are using it to assign `-1` which is used to identify `Injector`.
                this.__NG_ELEMENT_ID__ = options : void 0 !== options && (this.ngInjectableDef = defineInjectable({
                    providedIn: options.providedIn || "root",
                    factory: options.factory
                }));
            }
            return InjectionToken.prototype.toString = function() {
                return "InjectionToken " + this._desc;
            }, InjectionToken;
        }(), SOURCE = "__source", _THROW_IF_NOT_FOUND = /* */ new Object(), INJECTOR = /* */ new InjectionToken("INJECTOR", -1), NullInjector = /** @class */ /* */ function() {
            function NullInjector() {}
            return NullInjector.prototype.get = function(token, notFoundValue) {
                if (void 0 === notFoundValue && (notFoundValue = _THROW_IF_NOT_FOUND), notFoundValue === _THROW_IF_NOT_FOUND) {
                    // Intentionally left behind: With dev tools open the debugger will stop here. There is no
                    // reason why correctly written application should cause this exception.
                    // TODO(misko): uncomment the next line once `ngDevMode` works with closure.
                    // if(ngDevMode) debugger;
                    var error = new Error("NullInjectorError: No provider for " + stringify(token) + "!");
                    throw error.name = "NullInjectorError", error;
                }
                return notFoundValue;
            }, NullInjector;
        }(), Injector = /** @class */ /* */ function() {
            function Injector() {}
            /**
     * Create a new Injector which is configure using `StaticProvider`s.
     *
     * @usageNotes
     * ### Example
     *
     * {@example core/di/ts/provider_spec.ts region='ConstructorProvider'}
     */            return Injector.create = function(options, parent) {
                return Array.isArray(options) ? new StaticInjector(options, parent) : new StaticInjector(options.providers, options.parent, options.name || null);
            }, Injector.THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND, Injector.NULL = new NullInjector(), 
            /** @nocollapse */
            Injector.ngInjectableDef = defineInjectable({
                providedIn: "any",
                factory: function() {
                    return inject(INJECTOR);
                }
            }), 
            /**
     * @internal
     * @nocollapse
     */
            Injector.__NG_ELEMENT_ID__ = -1, Injector;
        }(), IDENT = function(value) {
            return value;
        }, EMPTY = [], CIRCULAR = IDENT, MULTI_PROVIDER_FN = function() {
            return Array.prototype.slice.call(arguments);
        }, USE_VALUE$2 = /* */ getClosureSafeProperty({
            provide: String,
            useValue: getClosureSafeProperty
        }), NULL_INJECTOR = Injector.NULL, NEW_LINE = /\n/gm, NO_NEW_LINE = "\u0275", StaticInjector = /** @class */ /* */ function() {
            function StaticInjector(providers, parent, source) {
                void 0 === parent && (parent = NULL_INJECTOR), void 0 === source && (source = null), 
                this.parent = parent, this.source = source;
                var records = this._records = new Map();
                records.set(Injector, {
                    token: Injector,
                    fn: IDENT,
                    deps: EMPTY,
                    value: this,
                    useNew: !1
                }), records.set(INJECTOR, {
                    token: INJECTOR,
                    fn: IDENT,
                    deps: EMPTY,
                    value: this,
                    useNew: !1
                }), function recursivelyProcessProviders(records, provider) {
                    if (provider) if ((provider = resolveForwardRef(provider)) instanceof Array) 
                    // if we have an array recurse into the array
                    for (var i = 0; i < provider.length; i++) recursivelyProcessProviders(records, provider[i]); else {
                        if ("function" == typeof provider) 
                        // Functions were supported in ReflectiveInjector, but are not here. For safety give useful
                        // error messages
                        throw staticError("Function/Class not supported", provider);
                        if (!provider || "object" != typeof provider || !provider.provide) throw staticError("Unexpected provider", provider);
                        // At this point we have what looks like a provider: {provide: ?, ....}
                        var token = resolveForwardRef(provider.provide), resolvedProvider = function(provider) {
                            var deps = function(provider) {
                                var deps = EMPTY, providerDeps = provider.deps;
                                if (providerDeps && providerDeps.length) {
                                    deps = [];
                                    for (var i = 0; i < providerDeps.length; i++) {
                                        var options = 6 /* Default */;
                                        if ((token = resolveForwardRef(providerDeps[i])) instanceof Array) for (var j = 0, annotations = token; j < annotations.length; j++) {
                                            var annotation = annotations[j];
                                            annotation instanceof Optional || annotation == Optional ? options |= 1 /* Optional */ : annotation instanceof SkipSelf || annotation == SkipSelf ? options &= -3 /* CheckSelf */ : annotation instanceof Self || annotation == Self ? options &= -5 /* CheckParent */ : token = annotation instanceof Inject ? annotation.token : resolveForwardRef(annotation);
                                        }
                                        deps.push({
                                            token: token,
                                            options: options
                                        });
                                    }
                                } else if (provider.useExisting) {
                                    var token;
                                    deps = [ {
                                        token: token = resolveForwardRef(provider.useExisting),
                                        options: 6
 /* Default */                                    } ];
                                } else if (!(providerDeps || USE_VALUE$2 in provider)) 
                                // useValue & useExisting are the only ones which are exempt from deps all others need it.
                                throw staticError("'deps' required", provider);
                                return deps;
                            }(provider), fn = IDENT, value = EMPTY, useNew = !1, provide = resolveForwardRef(provider.provide);
                            if (USE_VALUE$2 in provider) 
                            // We need to use USE_VALUE in provider since provider.useValue could be defined as undefined.
                            value = provider.useValue; else if (provider.useFactory) fn = provider.useFactory; else if (provider.useExisting) ; else if (provider.useClass) useNew = !0, 
                            fn = resolveForwardRef(provider.useClass); else {
                                if ("function" != typeof provide) throw staticError("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", provider);
                                useNew = !0, fn = provide;
                            }
                            return {
                                deps: deps,
                                fn: fn,
                                useNew: useNew,
                                value: value
                            };
                        }(provider);
                        if (!0 === provider.multi) {
                            // This is a multi provider.
                            var multiProvider = records.get(token);
                            if (multiProvider) {
                                if (multiProvider.fn !== MULTI_PROVIDER_FN) throw multiProviderMixError(token);
                            } else 
                            // Create a placeholder factory which will look up the constituents of the multi provider.
                            records.set(token, multiProvider = {
                                token: provider.provide,
                                deps: [],
                                useNew: !1,
                                fn: MULTI_PROVIDER_FN,
                                value: EMPTY
                            });
                            // Treat the provider as the token.
                                                        multiProvider.deps.push({
                                token: token = provider,
                                options: 6
 /* Default */                            });
                        }
                        var record = records.get(token);
                        if (record && record.fn == MULTI_PROVIDER_FN) throw multiProviderMixError(token);
                        records.set(token, resolvedProvider);
                    }
                }(records, providers);
            }
            return StaticInjector.prototype.get = function(token, notFoundValue, flags) {
                void 0 === flags && (flags = InjectFlags.Default);
                var record = this._records.get(token);
                try {
                    return function tryResolveToken(token, record, records, parent, notFoundValue, flags) {
                        try {
                            return function(token, record, records, parent, notFoundValue, flags) {
                                var _a, value;
                                if (!record || flags & InjectFlags.SkipSelf) flags & InjectFlags.Self || (value = parent.get(token, notFoundValue, InjectFlags.Default)); else {
                                    if ((
                                    // If we don't have a record, this implies that we don't own the provider hence don't know how
                                    // to resolve it.
                                    value = record.value) == CIRCULAR) throw Error(NO_NEW_LINE + "Circular dependency");
                                    if (value === EMPTY) {
                                        record.value = CIRCULAR;
                                        var useNew = record.useNew, fn = record.fn, depRecords = record.deps, deps = EMPTY;
                                        if (depRecords.length) {
                                            deps = [];
                                            for (var i = 0; i < depRecords.length; i++) {
                                                var depRecord = depRecords[i], options = depRecord.options, childRecord = 2 /* CheckSelf */ & options ? records.get(depRecord.token) : void 0;
                                                deps.push(tryResolveToken(
                                                // Current Token to resolve
                                                depRecord.token, 
                                                // A record which describes how to resolve the token.
                                                // If undefined, this means we don't have such a record
                                                childRecord, 
                                                // Other records we know about.
                                                records, 
                                                // If we don't know how to resolve dependency and we should not check parent for it,
                                                // than pass in Null injector.
                                                childRecord || 4 /* CheckParent */ & options ? parent : NULL_INJECTOR, 1 /* Optional */ & options ? null : Injector.THROW_IF_NOT_FOUND, InjectFlags.Default));
                                            }
                                        }
                                        record.value = value = useNew ? new ((_a = fn).bind.apply(_a, __spread([ void 0 ], deps)))() : fn.apply(void 0, deps);
                                    }
                                }
                                return value;
                            }(token, record, records, parent, notFoundValue, flags);
                        } catch (e) {
                            // ensure that 'e' is of type Error.
                            throw e instanceof Error || (e = new Error(e)), (e.ngTempTokenPath = e.ngTempTokenPath || []).unshift(token), 
                            record && record.value == CIRCULAR && (
                            // Reset the Circular flag.
                            record.value = EMPTY), e;
                        }
                    }(token, record, this._records, this.parent, notFoundValue, flags);
                } catch (e) {
                    return function(e, token, injectorErrorName, source) {
                        var tokenPath = e.ngTempTokenPath;
                        throw token[SOURCE] && tokenPath.unshift(token[SOURCE]), e.message = formatError("\n" + e.message, tokenPath, "StaticInjectorError", source), 
                        e.ngTokenPath = tokenPath, e.ngTempTokenPath = null, e;
                    }(e, token, 0, this.source);
                }
            }, StaticInjector.prototype.toString = function() {
                var tokens = [];
                return this._records.forEach(function(v, token) {
                    return tokens.push(stringify(token));
                }), "StaticInjector[" + tokens.join(", ") + "]";
            }, StaticInjector;
        }();
        function multiProviderMixError(token) {
            return staticError("Cannot mix multi providers and regular providers", token);
        }
        function formatError(text, obj, injectorErrorName, source) {
            void 0 === source && (source = null), text = text && "\n" === text.charAt(0) && text.charAt(1) == NO_NEW_LINE ? text.substr(2) : text;
            var context = stringify(obj);
            if (obj instanceof Array) context = obj.map(stringify).join(" -> "); else if ("object" == typeof obj) {
                var parts = [];
                for (var key in obj) if (obj.hasOwnProperty(key)) {
                    var value = obj[key];
                    parts.push(key + ":" + ("string" == typeof value ? JSON.stringify(value) : stringify(value)));
                }
                context = "{" + parts.join(", ") + "}";
            }
            return injectorErrorName + (source ? "(" + source + ")" : "") + "[" + context + "]: " + text.replace(NEW_LINE, "\n  ");
        }
        function staticError(text, obj) {
            return new Error(formatError(text, obj, "StaticInjectorError"));
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        var ERROR_DEBUG_CONTEXT = "ngDebugContext", ERROR_ORIGINAL_ERROR = "ngOriginalError", ERROR_LOGGER = "ngErrorLogger", ANALYZE_FOR_ENTRY_COMPONENTS = /* */ new InjectionToken("AnalyzeForEntryComponents"), ViewEncapsulation = /* */ function(ViewEncapsulation) {
            /**
     * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
     * Element and pre-processing the style rules provided via {@link Component#styles styles} or
     * {@link Component#styleUrls styleUrls}, and adding the new Host Element attribute to all
     * selectors.
     *
     * This is the default option.
     */
            return ViewEncapsulation[ViewEncapsulation.Emulated = 0] = "Emulated", 
            /**
     * @deprecated v6.1.0 - use {ViewEncapsulation.ShadowDom} instead.
     * Use the native encapsulation mechanism of the renderer.
     *
     * For the DOM this means using the deprecated [Shadow DOM
     * v0](https://w3c.github.io/webcomponents/spec/shadow/) and
     * creating a ShadowRoot for Component's Host Element.
     */
            ViewEncapsulation[ViewEncapsulation.Native = 1] = "Native", 
            /**
     * Don't provide any template or style encapsulation.
     */
            ViewEncapsulation[ViewEncapsulation.None = 2] = "None", 
            /**
     * Use Shadow DOM to encapsulate styles.
     *
     * For the DOM this means using modern [Shadow
     * DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
     * creating a ShadowRoot for Component's Host Element.
     */
            ViewEncapsulation[ViewEncapsulation.ShadowDom = 3] = "ShadowDom", ViewEncapsulation;
        }({}), defaultScheduler = /* */ ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || // browser only
        setTimeout).bind(_global);
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        function getDebugContext(error) {
            return error[ERROR_DEBUG_CONTEXT];
        }
        function getOriginalError(error) {
            return error[ERROR_ORIGINAL_ERROR];
        }
        function defaultErrorLogger(console) {
            for (var values = [], _i = 1; _i < arguments.length; _i++) values[_i - 1] = arguments[_i];
            console.error.apply(console, __spread(values));
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * Provides a hook for centralized exception handling.
 *
 * The default implementation of `ErrorHandler` prints error messages to the `console`. To
 * intercept error handling, write a custom exception handler that replaces this default as
 * appropriate for your app.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * class MyErrorHandler implements ErrorHandler {
 *   handleError(error) {
 *     // do something with the exception
 *   }
 * }
 *
 * @NgModule({
 *   providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
 * })
 * class MyModule {}
 * ```
 *
 * @publicApi
 */        var ErrorHandler = /** @class */ /* */ function() {
            function ErrorHandler() {
                /**
         * @internal
         */
                this._console = console;
            }
            return ErrorHandler.prototype.handleError = function(error) {
                var originalError = this._findOriginalError(error), context = this._findContext(error), errorLogger = function(error) {
                    return error[ERROR_LOGGER] || defaultErrorLogger;
                }(error);
                errorLogger(this._console, "ERROR", error), originalError && errorLogger(this._console, "ORIGINAL ERROR", originalError), 
                context && errorLogger(this._console, "ERROR CONTEXT", context);
            }, 
            /** @internal */
            ErrorHandler.prototype._findContext = function(error) {
                return error ? getDebugContext(error) ? getDebugContext(error) : this._findContext(getOriginalError(error)) : null;
            }, 
            /** @internal */
            ErrorHandler.prototype._findOriginalError = function(error) {
                for (var e = getOriginalError(error); e && getOriginalError(e); ) e = getOriginalError(e);
                return e;
            }, ErrorHandler;
        }(), _devMode = !0, _runModeLocked = !1;
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        
        /**
 * Returns whether Angular is in development mode. After called once,
 * the value is locked and won't change any more.
 *
 * By default, this is true, unless a user calls `enableProdMode` before calling this.
 *
 * @publicApi
 */
        function isDevMode() {
            return _runModeLocked = !0, _devMode;
        }
        /**
 * Disable Angular's development mode, which turns off assertions and other
 * checks within the framework.
 *
 * One important assertion this disables verifies that a change detection pass
 * does not result in additional changes to any bindings (also known as
 * unidirectional data flow).
 *
 * @publicApi
 */        
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * This helper class is used to get hold of an inert tree of DOM elements containing dirty HTML
 * that needs sanitizing.
 * Depending upon browser support we must use one of three strategies for doing this.
 * Support: Safari 10.x -> XHR strategy
 * Support: Firefox -> DomParser strategy
 * Default: InertDocument strategy
 */
        var InertBodyHelper = /** @class */ /* */ function() {
            function InertBodyHelper(defaultDoc) {
                if (this.defaultDoc = defaultDoc, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), 
                this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) {
                    // usually there should be only one body element in the document, but IE doesn't have any, so
                    // we need to create one.
                    var inertHtml = this.inertDocument.createElement("html");
                    this.inertDocument.appendChild(inertHtml), this.inertBodyElement = this.inertDocument.createElement("body"), 
                    inertHtml.appendChild(this.inertBodyElement);
                }
                this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', 
                !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', 
                this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && 
                /**
 * We need to determine whether the DOMParser exists in the global context.
 * The try-catch is because, on some browsers, trying to access this property
 * on window can actually throw an error.
 *
 * @suppress {uselessCode}
 */
                function() {
                    try {
                        return !!window.DOMParser;
                    } catch (_a) {
                        return !1;
                    }
                }
                /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
                /**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * This regular expression matches a subset of URLs that will not cause script
 * execution if used in URL context within a HTML document. Specifically, this
 * regular expression matches if (comment from here on and regex copied from
 * Soy's EscapingConventions):
 * (1) Either a protocol in a whitelist (http, https, mailto or ftp).
 * (2) or no protocol.  A protocol must be followed by a colon. The below
 *     allows that by allowing colons only after one of the characters [/?#].
 *     A colon after a hash (#) must be in the fragment.
 *     Otherwise, a colon after a (?) must be in a query.
 *     Otherwise, a colon after a single solidus (/) must be in a path.
 *     Otherwise, a colon after a double solidus (//) must be in the authority
 *     (before port).
 *
 * The pattern disallows &, used in HTML entity declarations before
 * one of the characters in [/?#]. This disallows HTML entities used in the
 * protocol name, which should never happen, e.g. "h&#116;tp" for "http".
 * It also disallows HTML entities in the first path part of a relative path,
 * e.g. "foo&lt;bar/baz".  Our existing escaping functions should not produce
 * that. More importantly, it disallows masking of a colon,
 * e.g. "javascript&#58;...".
 *
 * This regular expression was taken from the Closure sanitization library.
 */ () ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : 
                // We just hit the Safari 10.1 bug - which allows JS to run inside the SVG G element
                // so use the XHR strategy.
                this.getInertBodyElement = this.getInertBodyElement_XHR;
            }
            /**
     * Use XHR to create and fill an inert body element (on Safari 10.1)
     * See
     * https://github.com/cure53/DOMPurify/blob/a992d3a75031cb8bb032e5ea8399ba972bdf9a65/src/purify.js#L439-L449
     */            return InertBodyHelper.prototype.getInertBodyElement_XHR = function(html) {
                // We add these extra elements to ensure that the rest of the content is parsed as expected
                // e.g. leading whitespace is maintained and tags like `<meta>` do not get hoisted to the
                // `<head>` tag.
                html = "<body><remove></remove>" + html + "</body>";
                try {
                    html = encodeURI(html);
                } catch (_a) {
                    return null;
                }
                var xhr = new XMLHttpRequest();
                xhr.responseType = "document", xhr.open("GET", "data:text/html;charset=utf-8," + html, !1), 
                xhr.send(void 0);
                var body = xhr.response.body;
                return body.removeChild(body.firstChild), body;
            }, 
            /**
     * Use DOMParser to create and fill an inert body element (on Firefox)
     * See https://github.com/cure53/DOMPurify/releases/tag/0.6.7
     *
     */
            InertBodyHelper.prototype.getInertBodyElement_DOMParser = function(html) {
                // We add these extra elements to ensure that the rest of the content is parsed as expected
                // e.g. leading whitespace is maintained and tags like `<meta>` do not get hoisted to the
                // `<head>` tag.
                html = "<body><remove></remove>" + html + "</body>";
                try {
                    var body = new window.DOMParser().parseFromString(html, "text/html").body;
                    return body.removeChild(body.firstChild), body;
                } catch (_a) {
                    return null;
                }
            }, 
            /**
     * Use an HTML5 `template` element, if supported, or an inert body element created via
     * `createHtmlDocument` to create and fill an inert DOM element.
     * This is the default sane strategy to use if the browser does not require one of the specialised
     * strategies above.
     */
            InertBodyHelper.prototype.getInertBodyElement_InertDocument = function(html) {
                // Prefer using <template> element if supported.
                var templateEl = this.inertDocument.createElement("template");
                return "content" in templateEl ? (templateEl.innerHTML = html, templateEl) : (this.inertBodyElement.innerHTML = html, 
                // Support: IE 9-11 only
                // strip custom-namespaced attributes on IE<=11
                this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), 
                this.inertBodyElement);
            }, 
            /**
     * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1'
     * attribute to declare ns1 namespace and prefixes the attribute with 'ns1' (e.g.
     * 'ns1:xlink:foo').
     *
     * This is undesirable since we don't want to allow any of these custom attributes. This method
     * strips them all.
     */
            InertBodyHelper.prototype.stripCustomNsAttrs = function(el) {
                // loop backwards so that we can support removals.
                for (var elAttrs = el.attributes, i = elAttrs.length - 1; 0 < i; i--) {
                    var attrName = elAttrs.item(i).name;
                    "xmlns:ns1" !== attrName && 0 !== attrName.indexOf("ns1:") || el.removeAttribute(attrName);
                }
                for (var childNode = el.firstChild; childNode; ) childNode.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(childNode), 
                childNode = childNode.nextSibling;
            }, InertBodyHelper;
        }(), SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi, DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
        function _sanitizeUrl(url) {
            return (url = String(url)).match(SAFE_URL_PATTERN) || url.match(DATA_URL_PATTERN) ? url : (isDevMode() && console.warn("WARNING: sanitizing unsafe URL value " + url + " (see http://g.co/ng/security#xss)"), 
            "unsafe:" + url);
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        function tagSet(tags) {
            var e_1, _a, res = {};
            try {
                for (var _b = __values(tags.split(",")), _c = _b.next(); !_c.done; _c = _b.next()) res[_c.value] = !0;
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally {
                try {
                    _c && !_c.done && (_a = _b.return) && _a.call(_b);
                } finally {
                    if (e_1) throw e_1.error;
                }
            }
            return res;
        }
        function merge$1() {
            for (var e_2, _a, sets = [], _i = 0; _i < arguments.length; _i++) sets[_i] = arguments[_i];
            var res = {};
            try {
                for (var sets_1 = __values(sets), sets_1_1 = sets_1.next(); !sets_1_1.done; sets_1_1 = sets_1.next()) {
                    var s = sets_1_1.value;
                    for (var v in s) s.hasOwnProperty(v) && (res[v] = !0);
                }
            } catch (e_2_1) {
                e_2 = {
                    error: e_2_1
                };
            } finally {
                try {
                    sets_1_1 && !sets_1_1.done && (_a = sets_1.return) && _a.call(sets_1);
                } finally {
                    if (e_2) throw e_2.error;
                }
            }
            return res;
        }
        // Good source of info about elements and attributes
        // http://dev.w3.org/html5/spec/Overview.html#semantics
        // http://simon.html5.org/html-elements
        // Safe Void Elements - HTML5
        // http://dev.w3.org/html5/spec/Overview.html#void-elements
                var inertBodyHelper, VOID_ELEMENTS = /* */ tagSet("area,br,col,hr,img,wbr"), OPTIONAL_END_TAG_BLOCK_ELEMENTS = /* */ tagSet("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), OPTIONAL_END_TAG_INLINE_ELEMENTS = /* */ tagSet("rp,rt"), OPTIONAL_END_TAG_ELEMENTS = /* */ merge$1(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS), VALID_ELEMENTS = /* */ merge$1(VOID_ELEMENTS, /* */ merge$1(OPTIONAL_END_TAG_BLOCK_ELEMENTS, /* */ tagSet("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), /* */ merge$1(OPTIONAL_END_TAG_INLINE_ELEMENTS, /* */ tagSet("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), OPTIONAL_END_TAG_ELEMENTS), URI_ATTRS = /* */ tagSet("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), SRCSET_ATTRS = /* */ tagSet("srcset"), VALID_ATTRS = /* */ merge$1(URI_ATTRS, SRCSET_ATTRS, /* */ tagSet("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width")), SanitizingHtmlSerializer = /** @class */ /* */ function() {
            function SanitizingHtmlSerializer() {
                // Explicitly track if something was stripped, to avoid accidentally warning of sanitization just
                // because characters were re-encoded.
                this.sanitizedSomething = !1, this.buf = [];
            }
            return SanitizingHtmlSerializer.prototype.sanitizeChildren = function(el) {
                for (
                // This cannot use a TreeWalker, as it has to run on Angular's various DOM adapters.
                // However this code never accesses properties off of `document` before deleting its contents
                // again, so it shouldn't be vulnerable to DOM clobbering.
                var current = el.firstChild, elementValid = !0; current; ) if (current.nodeType === Node.ELEMENT_NODE ? elementValid = this.startElement(current) : current.nodeType === Node.TEXT_NODE ? this.chars(current.nodeValue) : 
                // Strip non-element, non-text nodes.
                this.sanitizedSomething = !0, elementValid && current.firstChild) current = current.firstChild; else for (;current; ) {
                    // Leaving the element. Walk up and to the right, closing tags as we go.
                    current.nodeType === Node.ELEMENT_NODE && this.endElement(current);
                    var next = this.checkClobberedElement(current, current.nextSibling);
                    if (next) {
                        current = next;
                        break;
                    }
                    current = this.checkClobberedElement(current, current.parentNode);
                }
                return this.buf.join("");
            }, 
            /**
     * Outputs only valid Elements.
     *
     * Invalid elements are skipped.
     *
     * @param element element to sanitize
     * Returns true if the element is valid.
     */
            SanitizingHtmlSerializer.prototype.startElement = function(element) {
                var srcset, tagName = element.nodeName.toLowerCase();
                if (!VALID_ELEMENTS.hasOwnProperty(tagName)) return this.sanitizedSomething = !0, 
                !1;
                this.buf.push("<"), this.buf.push(tagName);
                for (var elAttrs = element.attributes, i = 0; i < elAttrs.length; i++) {
                    var elAttr = elAttrs.item(i), attrName = elAttr.name, lower = attrName.toLowerCase();
                    if (VALID_ATTRS.hasOwnProperty(lower)) {
                        var value = elAttr.value;
                        // TODO(martinprobst): Special case image URIs for data:image/...
                                                URI_ATTRS[lower] && (value = _sanitizeUrl(value)), SRCSET_ATTRS[lower] && (srcset = value, 
                        value = (srcset = String(srcset)).split(",").map(function(srcset) {
                            return _sanitizeUrl(srcset.trim());
                        }).join(", ")), this.buf.push(" ", attrName, '="', encodeEntities(value), '"');
                    } else this.sanitizedSomething = !0;
                }
                return this.buf.push(">"), !0;
            }, SanitizingHtmlSerializer.prototype.endElement = function(current) {
                var tagName = current.nodeName.toLowerCase();
                VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName) && (this.buf.push("</"), 
                this.buf.push(tagName), this.buf.push(">"));
            }, SanitizingHtmlSerializer.prototype.chars = function(chars) {
                this.buf.push(encodeEntities(chars));
            }, SanitizingHtmlSerializer.prototype.checkClobberedElement = function(node, nextNode) {
                if (nextNode && (node.compareDocumentPosition(nextNode) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + node.outerHTML);
                return nextNode;
            }, SanitizingHtmlSerializer;
        }(), SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
        // Elements that you can, intentionally, leave open (and which close themselves)
        // http://dev.w3.org/html5/spec/Overview.html#optional-tags
                /**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param value
 */
        function encodeEntities(value) {
            return value.replace(/&/g, "&amp;").replace(SURROGATE_PAIR_REGEXP, function(match) {
                return "&#" + (1024 * (match.charCodeAt(0) - 55296) + (match.charCodeAt(1) - 56320) + 65536) + ";";
            }).replace(NON_ALPHANUMERIC_REGEXP, function(match) {
                return "&#" + match.charCodeAt(0) + ";";
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
        function getTemplateContent(el) {
            return "content" in el /** Microsoft/TypeScript#21517 */ && function(el) {
                return el.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === el.nodeName;
            }
            /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
            /**
 * A SecurityContext marks a location that has dangerous security implications, e.g. a DOM property
 * like `innerHTML` that could cause Cross Site Scripting (XSS) security bugs when improperly
 * handled.
 *
 * See DomSanitizer for more details on security in Angular applications.
 *
 * @publicApi
 */ (el) ? el.content : null;
        }
        var SecurityContext = /* */ function(SecurityContext) {
            return SecurityContext[SecurityContext.NONE = 0] = "NONE", SecurityContext[SecurityContext.HTML = 1] = "HTML", 
            SecurityContext[SecurityContext.STYLE = 2] = "STYLE", SecurityContext[SecurityContext.SCRIPT = 3] = "SCRIPT", 
            SecurityContext[SecurityContext.URL = 4] = "URL", SecurityContext[SecurityContext.RESOURCE_URL = 5] = "RESOURCE_URL", 
            SecurityContext;
        }({}), Sanitizer = /** @class */ /* */ function() {
            return function() {};
        }(), SAFE_STYLE_VALUE = /* */ new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"), URL_RE = /^url\(([^)]+)\)$/;
        /**
 * Sanitizer is used by the views to sanitize potentially dangerous values.
 *
 * @publicApi
 */        
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * Determine if the argument is shaped like a Promise
 */
        function core_isPromise(obj) {
            // allow any Promise/A+ compliant thenable.
            // It's up to the caller to ensure that obj.then conforms to the spec
            return !!obj && "function" == typeof obj.then;
        }
        /**
 * Determine if the argument is an Observable
 */        function isObservable(obj) {
            // TODO: use isObservable once we update pass rxjs 6.1
            // https://github.com/ReactiveX/rxjs/blob/master/CHANGELOG.md#610-2018-05-03
            return !!obj && "function" == typeof obj.subscribe;
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        var CAMEL_CASE_REGEXP = /([A-Z])/g;
        function normalizeDebugBindingValue(value) {
            try {
                // Limit the size of the value as otherwise the DOM just gets polluted.
                return null != value ? value.toString().slice(0, 30) : value;
            } catch (e) {
                return "[ERROR] Exception while trying to serialize the value";
            }
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        var _symbolIterator = null;
        function core_getSymbolIterator() {
            if (!_symbolIterator) {
                var Symbol_1 = _global.Symbol;
                if (Symbol_1 && Symbol_1.iterator) _symbolIterator = Symbol_1.iterator; else for (
                // es6-shim specific logic
                var keys = Object.getOwnPropertyNames(Map.prototype), i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    "entries" !== key && "size" !== key && Map.prototype[key] === Map.prototype.entries && (_symbolIterator = key);
                }
            }
            return _symbolIterator;
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        // JS has NaN !== NaN
                function looseIdentical(a, b) {
            return a === b || "number" == typeof a && "number" == typeof b && isNaN(a) && isNaN(b);
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        function devModeEqual$1(a, b) {
            var isListLikeIterableA = isListLikeIterable$1(a), isListLikeIterableB = isListLikeIterable$1(b);
            return isListLikeIterableA && isListLikeIterableB ? function(a, b, comparator) {
                for (var iterator1 = a[core_getSymbolIterator()](), iterator2 = b[core_getSymbolIterator()](); ;) {
                    var item1 = iterator1.next(), item2 = iterator2.next();
                    if (item1.done && item2.done) return !0;
                    if (item1.done || item2.done) return !1;
                    if (!comparator(item1.value, item2.value)) return !1;
                }
            }(a, b, devModeEqual$1) : !(isListLikeIterableA || !a || "object" != typeof a && "function" != typeof a || isListLikeIterableB || !b || "object" != typeof b && "function" != typeof b) || looseIdentical(a, b);
        }
        /**
 * Indicates that the result of a {@link Pipe} transformation has changed even though the
 * reference has not changed.
 *
 * Wrapped values are unwrapped automatically during the change detection, and the unwrapped value
 * is stored.
 *
 * Example:
 *
 * ```
 * if (this._latestValue === this._latestReturnedValue) {
 *    return this._latestReturnedValue;
 *  } else {
 *    this._latestReturnedValue = this._latestValue;
 *    return WrappedValue.wrap(this._latestValue); // this will force update
 *  }
 * ```
 *
 * @publicApi
 */        var WrappedValue = /** @class */ /* */ function() {
            function WrappedValue(value) {
                this.wrapped = value;
            }
            /** Creates a wrapped value. */            return WrappedValue.wrap = function(value) {
                return new WrappedValue(value);
            }, 
            /**
     * Returns the underlying value of a wrapped value.
     * Returns the given `value` when it is not wrapped.
     **/
            WrappedValue.unwrap = function(value) {
                return WrappedValue.isWrapped(value) ? value.wrapped : value;
            }, 
            /** Returns true if `value` is a wrapped value. */
            WrappedValue.isWrapped = function(value) {
                return value instanceof WrappedValue;
            }, WrappedValue;
        }();
        function isListLikeIterable$1(obj) {
            return !!isJsObject$1(obj) && (Array.isArray(obj) || !(obj instanceof Map) && // JS Map are iterables but return entries as [k, v]
            core_getSymbolIterator() in obj);
        }
        function isJsObject$1(o) {
            return null !== o && ("function" == typeof o || "object" == typeof o);
        }
        /** Called when directives inject each other (creating a circular dependency) */
        /** Called when there are multiple component selectors that match a given node */        
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * Represents a basic change from a previous to a new value for a single
 * property on a directive instance. Passed as a value in a
 * {@link SimpleChanges} object to the `ngOnChanges` hook.
 *
 * @see `OnChanges`
 *
 * @publicApi
 */
        var SimpleChange = /** @class */ /* */ function() {
            function SimpleChange(previousValue, currentValue, firstChange) {
                this.previousValue = previousValue, this.currentValue = currentValue, this.firstChange = firstChange;
            }
            /**
     * Check whether the new value is the first value assigned.
     */            return SimpleChange.prototype.isFirstChange = function() {
                return this.firstChange;
            }, SimpleChange;
        }(), APP_ROOT = /* */ new InjectionToken("The presence of this token marks an injector as being the root injector."), ComponentRef = /** @class */ /* */ function() {
            return function() {};
        }(), ComponentFactory = /** @class */ /* */ function() {
            return function() {};
        }();
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * The NgOnChangesFeature decorates a component with support for the ngOnChanges
 * lifecycle hook, so it should be included in any component that implements
 * that hook.
 *
 * If the component or directive uses inheritance, the NgOnChangesFeature MUST
 * be included as a feature AFTER {@link InheritDefinitionFeature}, otherwise
 * inherited properties will not be propagated to the ngOnChanges lifecycle
 * hook.
 *
 * Example usage:
 *
 * ```
 * static ngComponentDef = defineComponent({
 *   ...
 *   inputs: {name: 'publicName'},
 *   features: [NgOnChangesFeature()]
 * });
 * ```
 */        
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        function noComponentFactoryError(component) {
            var error = Error("No component factory found for " + stringify(component) + ". Did you add it to @NgModule.entryComponents?");
            return error[ERROR_COMPONENT] = component, error;
        }
        var ERROR_COMPONENT = "ngComponent", _NullComponentFactoryResolver = /** @class */ /* */ function() {
            function _NullComponentFactoryResolver() {}
            return _NullComponentFactoryResolver.prototype.resolveComponentFactory = function(component) {
                throw noComponentFactoryError(component);
            }, _NullComponentFactoryResolver;
        }(), ComponentFactoryResolver = /** @class */ /* */ function() {
            function ComponentFactoryResolver() {}
            return ComponentFactoryResolver.NULL = new _NullComponentFactoryResolver(), ComponentFactoryResolver;
        }(), CodegenComponentFactoryResolver = /** @class */ /* */ function() {
            function CodegenComponentFactoryResolver(factories, _parent, _ngModule) {
                this._parent = _parent, this._ngModule = _ngModule, this._factories = new Map();
                for (var i = 0; i < factories.length; i++) {
                    var factory = factories[i];
                    this._factories.set(factory.componentType, factory);
                }
            }
            return CodegenComponentFactoryResolver.prototype.resolveComponentFactory = function(component) {
                var factory = this._factories.get(component);
                if (!factory && this._parent && (factory = this._parent.resolveComponentFactory(component)), 
                !factory) throw noComponentFactoryError(component);
                return new core_ComponentFactoryBoundToModule(factory, this._ngModule);
            }, CodegenComponentFactoryResolver;
        }(), core_ComponentFactoryBoundToModule = /** @class */ /* */ function(_super) {
            function ComponentFactoryBoundToModule(factory, ngModule) {
                var _this = _super.call(this) || this;
                return _this.factory = factory, _this.ngModule = ngModule, _this.selector = factory.selector, 
                _this.componentType = factory.componentType, _this.ngContentSelectors = factory.ngContentSelectors, 
                _this.inputs = factory.inputs, _this.outputs = factory.outputs, _this;
            }
            return __extends(ComponentFactoryBoundToModule, _super), ComponentFactoryBoundToModule.prototype.create = function(injector, projectableNodes, rootSelectorOrNode, ngModule) {
                return this.factory.create(injector, projectableNodes, rootSelectorOrNode, ngModule || this.ngModule);
            }, ComponentFactoryBoundToModule;
        }(ComponentFactory), NgModuleRef = /** @class */ /* */ function() {
            return function() {};
        }(), NgModuleFactory = /** @class */ /* */ function() {
            return function() {};
        }();
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        function core_noop() {
            for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
            // Do nothing.
                }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * A wrapper around a native element inside of a View.
 *
 * An `ElementRef` is backed by a render-specific element. In the browser, this is usually a DOM
 * element.
 *
 * @security Permitting direct access to the DOM can make your application more vulnerable to
 * XSS attacks. Carefully review any use of `ElementRef` in your code. For more detail, see the
 * [Security Guide](http://g.co/ng/security).
 *
 * @publicApi
 */
        // Note: We don't expose things like `Injector`, `ViewContainer`, ... here,
        // i.e. users have to ask for what they need. With that, we can build better analysis tools
        // and could do better codegen in the future.
                var ElementRef = /** @class */ /* */ function() {
            function ElementRef(nativeElement) {
                this.nativeElement = nativeElement;
            }
            /**
     * @internal
     * @nocollapse
     */            return ElementRef.__NG_ELEMENT_ID__ = function() {
                return SWITCH_ELEMENT_REF_FACTORY(ElementRef);
            }, ElementRef;
        }(), SWITCH_ELEMENT_REF_FACTORY = core_noop, Renderer = /** @class */ /* */ function() {
            return function() {};
        }(), RendererFactory2 = /** @class */ /* */ function() {
            return function() {};
        }(), RendererStyleFlags2 = /* */ function(RendererStyleFlags2) {
            /**
     * Marks a style as important.
     */
            return RendererStyleFlags2[RendererStyleFlags2.Important = 1] = "Important", 
            /**
     * Marks a style as using dash case naming (this-is-dash-case).
     */
            RendererStyleFlags2[RendererStyleFlags2.DashCase = 2] = "DashCase", RendererStyleFlags2;
        }({}), Renderer2 = /** @class */ /* */ function() {
            function Renderer2() {}
            /**
     * @internal
     * @nocollapse
     */            return Renderer2.__NG_ELEMENT_ID__ = function() {
                return SWITCH_RENDERER2_FACTORY();
            }, Renderer2;
        }(), SWITCH_RENDERER2_FACTORY = core_noop, VERSION = /* */ new (/** @class */ /* */ function() {
            return function(full) {
                this.full = full, this.major = full.split(".")[0], this.minor = full.split(".")[1], 
                this.patch = full.split(".").slice(2).join(".");
            };
        }())("8.0.0-beta.3"), DefaultIterableDifferFactory = /** @class */ /* */ function() {
            function DefaultIterableDifferFactory() {}
            return DefaultIterableDifferFactory.prototype.supports = function(obj) {
                return isListLikeIterable$1(obj);
            }, DefaultIterableDifferFactory.prototype.create = function(trackByFn) {
                return new DefaultIterableDiffer(trackByFn);
            }, DefaultIterableDifferFactory;
        }(), trackByIdentity = function(index, item) {
            return item;
        }, DefaultIterableDiffer = /** @class */ /* */ function() {
            function DefaultIterableDiffer(trackByFn) {
                this.length = 0, 
                // Keeps track of the used records at any point in time (during & across `_check()` calls)
                this._linkedRecords = null, 
                // Keeps track of the removed records at any point in time during `_check()` calls.
                this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, 
                this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, 
                this._movesTail = null, this._removalsHead = null, this._removalsTail = null, 
                // Keeps track of records where custom track by is the same, but item identity has changed
                this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = trackByFn || trackByIdentity;
            }
            return DefaultIterableDiffer.prototype.forEachItem = function(fn) {
                var record;
                for (record = this._itHead; null !== record; record = record._next) fn(record);
            }, DefaultIterableDiffer.prototype.forEachOperation = function(fn) {
                for (var nextIt = this._itHead, nextRemove = this._removalsHead, addRemoveOffset = 0, moveOffsets = null; nextIt || nextRemove; ) {
                    // Figure out which is the next record to process
                    // Order: remove, add, move
                    var record = !nextRemove || nextIt && nextIt.currentIndex < getPreviousIndex(nextRemove, addRemoveOffset, moveOffsets) ? nextIt : nextRemove, adjPreviousIndex = getPreviousIndex(record, addRemoveOffset, moveOffsets), currentIndex = record.currentIndex;
                    // consume the item, and adjust the addRemoveOffset and update moveDistance if necessary
                    if (record === nextRemove) addRemoveOffset--, nextRemove = nextRemove._nextRemoved; else if (nextIt = nextIt._next, 
                    null == record.previousIndex) addRemoveOffset++; else {
                        // INVARIANT:  currentIndex < previousIndex
                        moveOffsets || (moveOffsets = []);
                        var localMovePreviousIndex = adjPreviousIndex - addRemoveOffset, localCurrentIndex = currentIndex - addRemoveOffset;
                        if (localMovePreviousIndex != localCurrentIndex) {
                            for (var i = 0; i < localMovePreviousIndex; i++) {
                                var offset = i < moveOffsets.length ? moveOffsets[i] : moveOffsets[i] = 0, index = offset + i;
                                localCurrentIndex <= index && index < localMovePreviousIndex && (moveOffsets[i] = offset + 1);
                            }
                            moveOffsets[record.previousIndex] = localCurrentIndex - localMovePreviousIndex;
                        }
                    }
                    adjPreviousIndex !== currentIndex && fn(record, adjPreviousIndex, currentIndex);
                }
            }, DefaultIterableDiffer.prototype.forEachPreviousItem = function(fn) {
                var record;
                for (record = this._previousItHead; null !== record; record = record._nextPrevious) fn(record);
            }, DefaultIterableDiffer.prototype.forEachAddedItem = function(fn) {
                var record;
                for (record = this._additionsHead; null !== record; record = record._nextAdded) fn(record);
            }, DefaultIterableDiffer.prototype.forEachMovedItem = function(fn) {
                var record;
                for (record = this._movesHead; null !== record; record = record._nextMoved) fn(record);
            }, DefaultIterableDiffer.prototype.forEachRemovedItem = function(fn) {
                var record;
                for (record = this._removalsHead; null !== record; record = record._nextRemoved) fn(record);
            }, DefaultIterableDiffer.prototype.forEachIdentityChange = function(fn) {
                var record;
                for (record = this._identityChangesHead; null !== record; record = record._nextIdentityChange) fn(record);
            }, DefaultIterableDiffer.prototype.diff = function(collection) {
                if (null == collection && (collection = []), !isListLikeIterable$1(collection)) throw new Error("Error trying to diff '" + stringify(collection) + "'. Only arrays and iterables are allowed");
                return this.check(collection) ? this : null;
            }, DefaultIterableDiffer.prototype.onDestroy = function() {}, DefaultIterableDiffer.prototype.check = function(collection) {
                var _this = this;
                this._reset();
                var index, item, itemTrackBy, record = this._itHead, mayBeDirty = !1;
                if (Array.isArray(collection)) {
                    this.length = collection.length;
                    for (var index_1 = 0; index_1 < this.length; index_1++) itemTrackBy = this._trackByFn(index_1, item = collection[index_1]), 
                    null !== record && looseIdentical(record.trackById, itemTrackBy) ? (mayBeDirty && (
                    // TODO(misko): can we limit this to duplicates only?
                    record = this._verifyReinsertion(record, item, itemTrackBy, index_1)), looseIdentical(record.item, item) || this._addIdentityChange(record, item)) : (record = this._mismatch(record, item, itemTrackBy, index_1), 
                    mayBeDirty = !0), record = record._next;
                } else index = 0, function(obj, fn) {
                    if (Array.isArray(obj)) for (var i = 0; i < obj.length; i++) fn(obj[i]); else for (var iterator = obj[core_getSymbolIterator()](), item = void 0; !(item = iterator.next()).done; ) fn(item.value);
                }(collection, function(item) {
                    itemTrackBy = _this._trackByFn(index, item), null !== record && looseIdentical(record.trackById, itemTrackBy) ? (mayBeDirty && (
                    // TODO(misko): can we limit this to duplicates only?
                    record = _this._verifyReinsertion(record, item, itemTrackBy, index)), looseIdentical(record.item, item) || _this._addIdentityChange(record, item)) : (record = _this._mismatch(record, item, itemTrackBy, index), 
                    mayBeDirty = !0), record = record._next, index++;
                }), this.length = index;
                return this._truncate(record), this.collection = collection, this.isDirty;
            }, Object.defineProperty(DefaultIterableDiffer.prototype, "isDirty", {
                /* CollectionChanges is considered dirty if it has any additions, moves, removals, or identity
         * changes.
         */
                get: function() {
                    return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead;
                },
                enumerable: !0,
                configurable: !0
            }), 
            /**
     * Reset the state of the change objects to show no changes. This means set previousKey to
     * currentKey, and clear all of the queues (additions, moves, removals).
     * Set the previousIndexes of moved and added items to their currentIndexes
     * Reset the list of additions, moves and removals
     *
     * @internal
     */
            DefaultIterableDiffer.prototype._reset = function() {
                if (this.isDirty) {
                    var record = void 0, nextRecord = void 0;
                    for (record = this._previousItHead = this._itHead; null !== record; record = record._next) record._nextPrevious = record._next;
                    for (record = this._additionsHead; null !== record; record = record._nextAdded) record.previousIndex = record.currentIndex;
                    for (this._additionsHead = this._additionsTail = null, record = this._movesHead; null !== record; record = nextRecord) record.previousIndex = record.currentIndex, 
                    nextRecord = record._nextMoved;
                    this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, 
                    this._identityChangesHead = this._identityChangesTail = null;
                }
            }, 
            /**
     * This is the core function which handles differences between collections.
     *
     * - `record` is the record which we saw at this position last time. If null then it is a new
     *   item.
     * - `item` is the current item in the collection
     * - `index` is the position of the item in the collection
     *
     * @internal
     */
            DefaultIterableDiffer.prototype._mismatch = function(record, item, itemTrackBy, index) {
                // The previous record after which we will append the current one.
                var previousRecord;
                return null === record ? previousRecord = this._itTail : (previousRecord = record._prev, 
                // Remove the record from the collection since we know it does not match the item.
                this._remove(record)), null !== (
                // Attempt to see if we have seen the item before.
                record = null === this._linkedRecords ? null : this._linkedRecords.get(itemTrackBy, index)) ? (
                // We have seen this before, we need to move it forward in the collection.
                // But first we need to check if identity changed, so we can update in view if necessary
                looseIdentical(record.item, item) || this._addIdentityChange(record, item), this._moveAfter(record, previousRecord, index)) : null !== (
                // Never seen it, check evicted list.
                record = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(itemTrackBy, null)) ? (
                // It is an item which we have evicted earlier: reinsert it back into the list.
                // But first we need to check if identity changed, so we can update in view if necessary
                looseIdentical(record.item, item) || this._addIdentityChange(record, item), this._reinsertAfter(record, previousRecord, index)) : 
                // It is a new item: add it.
                record = this._addAfter(new IterableChangeRecord_(item, itemTrackBy), previousRecord, index), 
                record;
            }, 
            /**
     * This check is only needed if an array contains duplicates. (Short circuit of nothing dirty)
     *
     * Use case: `[a, a]` => `[b, a, a]`
     *
     * If we did not have this check then the insertion of `b` would:
     *   1) evict first `a`
     *   2) insert `b` at `0` index.
     *   3) leave `a` at index `1` as is. <-- this is wrong!
     *   3) reinsert `a` at index 2. <-- this is wrong!
     *
     * The correct behavior is:
     *   1) evict first `a`
     *   2) insert `b` at `0` index.
     *   3) reinsert `a` at index 1.
     *   3) move `a` at from `1` to `2`.
     *
     *
     * Double check that we have not evicted a duplicate item. We need to check if the item type may
     * have already been removed:
     * The insertion of b will evict the first 'a'. If we don't reinsert it now it will be reinserted
     * at the end. Which will show up as the two 'a's switching position. This is incorrect, since a
     * better way to think of it is as insert of 'b' rather then switch 'a' with 'b' and then add 'a'
     * at the end.
     *
     * @internal
     */
            DefaultIterableDiffer.prototype._verifyReinsertion = function(record, item, itemTrackBy, index) {
                var reinsertRecord = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(itemTrackBy, null);
                return null !== reinsertRecord ? record = this._reinsertAfter(reinsertRecord, record._prev, index) : record.currentIndex != index && (record.currentIndex = index, 
                this._addToMoves(record, index)), record;
            }, 
            /**
     * Get rid of any excess {@link IterableChangeRecord_}s from the previous collection
     *
     * - `record` The first excess {@link IterableChangeRecord_}.
     *
     * @internal
     */
            DefaultIterableDiffer.prototype._truncate = function(record) {
                // Anything after that needs to be removed;
                for (;null !== record; ) {
                    var nextRecord = record._next;
                    this._addToRemovals(this._unlink(record)), record = nextRecord;
                }
                null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), 
                null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), 
                null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
            }, 
            /** @internal */
            DefaultIterableDiffer.prototype._reinsertAfter = function(record, prevRecord, index) {
                null !== this._unlinkedRecords && this._unlinkedRecords.remove(record);
                var prev = record._prevRemoved, next = record._nextRemoved;
                return null === prev ? this._removalsHead = next : prev._nextRemoved = next, null === next ? this._removalsTail = prev : next._prevRemoved = prev, 
                this._insertAfter(record, prevRecord, index), this._addToMoves(record, index), record;
            }, 
            /** @internal */
            DefaultIterableDiffer.prototype._moveAfter = function(record, prevRecord, index) {
                return this._unlink(record), this._insertAfter(record, prevRecord, index), this._addToMoves(record, index), 
                record;
            }, 
            /** @internal */
            DefaultIterableDiffer.prototype._addAfter = function(record, prevRecord, index) {
                return this._insertAfter(record, prevRecord, index), 
                // TODO(vicb):
                // assert(this._additionsHead === null);
                this._additionsTail = null === this._additionsTail ? this._additionsHead = record : this._additionsTail._nextAdded = record, 
                record;
            }, 
            /** @internal */
            DefaultIterableDiffer.prototype._insertAfter = function(record, prevRecord, index) {
                // TODO(vicb):
                // assert(record != prevRecord);
                // assert(record._next === null);
                // assert(record._prev === null);
                var next = null === prevRecord ? this._itHead : prevRecord._next;
                // TODO(vicb):
                // assert(next != record);
                // assert(prevRecord != record);
                                return record._next = next, record._prev = prevRecord, null === next ? this._itTail = record : next._prev = record, 
                null === prevRecord ? this._itHead = record : prevRecord._next = record, null === this._linkedRecords && (this._linkedRecords = new _DuplicateMap()), 
                this._linkedRecords.put(record), record.currentIndex = index, record;
            }, 
            /** @internal */
            DefaultIterableDiffer.prototype._remove = function(record) {
                return this._addToRemovals(this._unlink(record));
            }, 
            /** @internal */
            DefaultIterableDiffer.prototype._unlink = function(record) {
                null !== this._linkedRecords && this._linkedRecords.remove(record);
                var prev = record._prev, next = record._next;
                // TODO(vicb):
                // assert((record._prev = null) === null);
                // assert((record._next = null) === null);
                return null === prev ? this._itHead = next : prev._next = next, null === next ? this._itTail = prev : next._prev = prev, 
                record;
            }, 
            /** @internal */
            DefaultIterableDiffer.prototype._addToMoves = function(record, toIndex) {
                // TODO(vicb):
                // assert(record._nextMoved === null);
                return record.previousIndex === toIndex ? record : (
                // TODO(vicb):
                // assert(_movesHead === null);
                this._movesTail = null === this._movesTail ? this._movesHead = record : this._movesTail._nextMoved = record, 
                record);
            }, DefaultIterableDiffer.prototype._addToRemovals = function(record) {
                return null === this._unlinkedRecords && (this._unlinkedRecords = new _DuplicateMap()), 
                this._unlinkedRecords.put(record), record.currentIndex = null, record._nextRemoved = null, 
                null === this._removalsTail ? (
                // TODO(vicb):
                // assert(_removalsHead === null);
                this._removalsTail = this._removalsHead = record, record._prevRemoved = null) : (
                // TODO(vicb):
                // assert(_removalsTail._nextRemoved === null);
                // assert(record._nextRemoved === null);
                record._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = record), 
                record;
            }, 
            /** @internal */
            DefaultIterableDiffer.prototype._addIdentityChange = function(record, item) {
                return record.item = item, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = record : this._identityChangesTail._nextIdentityChange = record, 
                record;
            }, DefaultIterableDiffer;
        }(), IterableChangeRecord_ = /** @class */ /* */ function() {
            return function(item, trackById) {
                this.item = item, this.trackById = trackById, this.currentIndex = null, this.previousIndex = null, 
                /** @internal */
                this._nextPrevious = null, 
                /** @internal */
                this._prev = null, 
                /** @internal */
                this._next = null, 
                /** @internal */
                this._prevDup = null, 
                /** @internal */
                this._nextDup = null, 
                /** @internal */
                this._prevRemoved = null, 
                /** @internal */
                this._nextRemoved = null, 
                /** @internal */
                this._nextAdded = null, 
                /** @internal */
                this._nextMoved = null, 
                /** @internal */
                this._nextIdentityChange = null;
            };
        }(), _DuplicateItemRecordList = /** @class */ /* */ function() {
            function _DuplicateItemRecordList() {
                /** @internal */
                this._head = null, 
                /** @internal */
                this._tail = null;
            }
            /**
     * Append the record to the list of duplicates.
     *
     * Note: by design all records in the list of duplicates hold the same value in record.item.
     */            return _DuplicateItemRecordList.prototype.add = function(record) {
                null === this._head ? (this._head = this._tail = record, record._nextDup = null, 
                record._prevDup = null) : (
                // TODO(vicb):
                // assert(record.item ==  _head.item ||
                //       record.item is num && record.item.isNaN && _head.item is num && _head.item.isNaN);
                this._tail._nextDup = record, record._prevDup = this._tail, record._nextDup = null, 
                this._tail = record);
            }, 
            // Returns a IterableChangeRecord_ having IterableChangeRecord_.trackById == trackById and
            // IterableChangeRecord_.currentIndex >= atOrAfterIndex
            _DuplicateItemRecordList.prototype.get = function(trackById, atOrAfterIndex) {
                var record;
                for (record = this._head; null !== record; record = record._nextDup) if ((null === atOrAfterIndex || atOrAfterIndex <= record.currentIndex) && looseIdentical(record.trackById, trackById)) return record;
                return null;
            }, 
            /**
     * Remove one {@link IterableChangeRecord_} from the list of duplicates.
     *
     * Returns whether the list of duplicates is empty.
     */
            _DuplicateItemRecordList.prototype.remove = function(record) {
                // TODO(vicb):
                // assert(() {
                //  // verify that the record being removed is in the list.
                //  for (IterableChangeRecord_ cursor = _head; cursor != null; cursor = cursor._nextDup) {
                //    if (identical(cursor, record)) return true;
                //  }
                //  return false;
                //});
                var prev = record._prevDup, next = record._nextDup;
                return null === prev ? this._head = next : prev._nextDup = next, null === next ? this._tail = prev : next._prevDup = prev, 
                null === this._head;
            }, _DuplicateItemRecordList;
        }(), _DuplicateMap = /** @class */ /* */ function() {
            function _DuplicateMap() {
                this.map = new Map();
            }
            return _DuplicateMap.prototype.put = function(record) {
                var key = record.trackById, duplicates = this.map.get(key);
                duplicates || (duplicates = new _DuplicateItemRecordList(), this.map.set(key, duplicates)), 
                duplicates.add(record);
            }, 
            /**
     * Retrieve the `value` using key. Because the IterableChangeRecord_ value may be one which we
     * have already iterated over, we use the `atOrAfterIndex` to pretend it is not there.
     *
     * Use case: `[a, b, c, a, a]` if we are at index `3` which is the second `a` then asking if we
     * have any more `a`s needs to return the second `a`.
     */
            _DuplicateMap.prototype.get = function(trackById, atOrAfterIndex) {
                var recordList = this.map.get(trackById);
                return recordList ? recordList.get(trackById, atOrAfterIndex) : null;
            }, 
            /**
     * Removes a {@link IterableChangeRecord_} from the list of duplicates.
     *
     * The list of duplicates also is removed from the map if it gets empty.
     */
            _DuplicateMap.prototype.remove = function(record) {
                var key = record.trackById;
                // Remove the list of duplicates when it gets empty
                return this.map.get(key).remove(record) && this.map.delete(key), record;
            }, Object.defineProperty(_DuplicateMap.prototype, "isEmpty", {
                get: function() {
                    return 0 === this.map.size;
                },
                enumerable: !0,
                configurable: !0
            }), _DuplicateMap.prototype.clear = function() {
                this.map.clear();
            }, _DuplicateMap;
        }();
        function getPreviousIndex(item, addRemoveOffset, moveOffsets) {
            var previousIndex = item.previousIndex;
            if (null === previousIndex) return previousIndex;
            var moveOffset = 0;
            return moveOffsets && previousIndex < moveOffsets.length && (moveOffset = moveOffsets[previousIndex]), 
            previousIndex + addRemoveOffset + moveOffset;
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        var DefaultKeyValueDifferFactory = /** @class */ /* */ function() {
            function DefaultKeyValueDifferFactory() {}
            return DefaultKeyValueDifferFactory.prototype.supports = function(obj) {
                return obj instanceof Map || isJsObject$1(obj);
            }, DefaultKeyValueDifferFactory.prototype.create = function() {
                return new DefaultKeyValueDiffer();
            }, DefaultKeyValueDifferFactory;
        }(), DefaultKeyValueDiffer = /** @class */ /* */ function() {
            function DefaultKeyValueDiffer() {
                this._records = new Map(), this._mapHead = null, 
                // _appendAfter is used in the check loop
                this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, 
                this._changesTail = null, this._additionsHead = null, this._additionsTail = null, 
                this._removalsHead = null, this._removalsTail = null;
            }
            return Object.defineProperty(DefaultKeyValueDiffer.prototype, "isDirty", {
                get: function() {
                    return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
                },
                enumerable: !0,
                configurable: !0
            }), DefaultKeyValueDiffer.prototype.forEachItem = function(fn) {
                var record;
                for (record = this._mapHead; null !== record; record = record._next) fn(record);
            }, DefaultKeyValueDiffer.prototype.forEachPreviousItem = function(fn) {
                var record;
                for (record = this._previousMapHead; null !== record; record = record._nextPrevious) fn(record);
            }, DefaultKeyValueDiffer.prototype.forEachChangedItem = function(fn) {
                var record;
                for (record = this._changesHead; null !== record; record = record._nextChanged) fn(record);
            }, DefaultKeyValueDiffer.prototype.forEachAddedItem = function(fn) {
                var record;
                for (record = this._additionsHead; null !== record; record = record._nextAdded) fn(record);
            }, DefaultKeyValueDiffer.prototype.forEachRemovedItem = function(fn) {
                var record;
                for (record = this._removalsHead; null !== record; record = record._nextRemoved) fn(record);
            }, DefaultKeyValueDiffer.prototype.diff = function(map) {
                if (map) {
                    if (!(map instanceof Map || isJsObject$1(map))) throw new Error("Error trying to diff '" + stringify(map) + "'. Only maps and objects are allowed");
                } else map = new Map();
                return this.check(map) ? this : null;
            }, DefaultKeyValueDiffer.prototype.onDestroy = function() {}, 
            /**
     * Check the current state of the map vs the previous.
     * The algorithm is optimised for when the keys do no change.
     */
            DefaultKeyValueDiffer.prototype.check = function(map) {
                var _this = this;
                this._reset();
                var insertBefore = this._mapHead;
                // Items remaining at the end of the list have been deleted
                if (this._appendAfter = null, this._forEach(map, function(value, key) {
                    if (insertBefore && insertBefore.key === key) _this._maybeAddToChanges(insertBefore, value), 
                    _this._appendAfter = insertBefore, insertBefore = insertBefore._next; else {
                        var record = _this._getOrCreateRecordForKey(key, value);
                        insertBefore = _this._insertBeforeOrAppend(insertBefore, record);
                    }
                }), insertBefore) {
                    insertBefore._prev && (insertBefore._prev._next = null), this._removalsHead = insertBefore;
                    for (var record = insertBefore; null !== record; record = record._nextRemoved) record === this._mapHead && (this._mapHead = null), 
                    this._records.delete(record.key), record._nextRemoved = record._next, record.previousValue = record.currentValue, 
                    record.currentValue = null, record._prev = null, record._next = null;
                }
                // Make sure tails have no next records from previous runs
                                return this._changesTail && (this._changesTail._nextChanged = null), 
                this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty;
            }, 
            /**
     * Inserts a record before `before` or append at the end of the list when `before` is null.
     *
     * Notes:
     * - This method appends at `this._appendAfter`,
     * - This method updates `this._appendAfter`,
     * - The return value is the new value for the insertion pointer.
     */
            DefaultKeyValueDiffer.prototype._insertBeforeOrAppend = function(before, record) {
                if (before) {
                    var prev = before._prev;
                    return record._next = before, record._prev = prev, before._prev = record, prev && (prev._next = record), 
                    before === this._mapHead && (this._mapHead = record), this._appendAfter = before, 
                    before;
                }
                return this._appendAfter ? (this._appendAfter._next = record, record._prev = this._appendAfter) : this._mapHead = record, 
                this._appendAfter = record, null;
            }, DefaultKeyValueDiffer.prototype._getOrCreateRecordForKey = function(key, value) {
                if (this._records.has(key)) {
                    var record_1 = this._records.get(key);
                    this._maybeAddToChanges(record_1, value);
                    var prev = record_1._prev, next = record_1._next;
                    return prev && (prev._next = next), next && (next._prev = prev), record_1._next = null, 
                    record_1._prev = null, record_1;
                }
                var record = new KeyValueChangeRecord_(key);
                return this._records.set(key, record), record.currentValue = value, this._addToAdditions(record), 
                record;
            }, 
            /** @internal */
            DefaultKeyValueDiffer.prototype._reset = function() {
                if (this.isDirty) {
                    var record = void 0;
                    // let `_previousMapHead` contain the state of the map before the changes
                                        for (this._previousMapHead = this._mapHead, record = this._previousMapHead; null !== record; record = record._next) record._nextPrevious = record._next;
                    // Update `record.previousValue` with the value of the item before the changes
                    // We need to update all changed items (that's those which have been added and changed)
                                        for (record = this._changesHead; null !== record; record = record._nextChanged) record.previousValue = record.currentValue;
                    for (record = this._additionsHead; null != record; record = record._nextAdded) record.previousValue = record.currentValue;
                    this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, 
                    this._removalsHead = null;
                }
            }, 
            // Add the record or a given key to the list of changes only when the value has actually changed
            DefaultKeyValueDiffer.prototype._maybeAddToChanges = function(record, newValue) {
                looseIdentical(newValue, record.currentValue) || (record.previousValue = record.currentValue, 
                record.currentValue = newValue, this._addToChanges(record));
            }, DefaultKeyValueDiffer.prototype._addToAdditions = function(record) {
                null === this._additionsHead ? this._additionsHead = this._additionsTail = record : (this._additionsTail._nextAdded = record, 
                this._additionsTail = record);
            }, DefaultKeyValueDiffer.prototype._addToChanges = function(record) {
                null === this._changesHead ? this._changesHead = this._changesTail = record : (this._changesTail._nextChanged = record, 
                this._changesTail = record);
            }, 
            /** @internal */
            DefaultKeyValueDiffer.prototype._forEach = function(obj, fn) {
                obj instanceof Map ? obj.forEach(fn) : Object.keys(obj).forEach(function(k) {
                    return fn(obj[k], k);
                });
            }, DefaultKeyValueDiffer;
        }(), KeyValueChangeRecord_ = /** @class */ /* */ function() {
            return function(key) {
                this.key = key, this.previousValue = null, this.currentValue = null, 
                /** @internal */
                this._nextPrevious = null, 
                /** @internal */
                this._next = null, 
                /** @internal */
                this._prev = null, 
                /** @internal */
                this._nextAdded = null, 
                /** @internal */
                this._nextRemoved = null, 
                /** @internal */
                this._nextChanged = null;
            };
        }(), IterableDiffers = /** @class */ /* */ function() {
            function IterableDiffers(factories) {
                this.factories = factories;
            }
            return IterableDiffers.create = function(factories, parent) {
                if (null != parent) {
                    var copied = parent.factories.slice();
                    factories = factories.concat(copied);
                }
                return new IterableDiffers(factories);
            }, 
            /**
     * Takes an array of {@link IterableDifferFactory} and returns a provider used to extend the
     * inherited {@link IterableDiffers} instance with the provided factories and return a new
     * {@link IterableDiffers} instance.
     *
     * @usageNotes
     * ### Example
     *
     * The following example shows how to extend an existing list of factories,
     * which will only be applied to the injector for this component and its children.
     * This step is all that's required to make a new {@link IterableDiffer} available.
     *
     * ```
     * @Component({
     *   viewProviders: [
     *     IterableDiffers.extend([new ImmutableListDiffer()])
     *   ]
     * })
     * ```
     */
            IterableDiffers.extend = function(factories) {
                return {
                    provide: IterableDiffers,
                    useFactory: function(parent) {
                        if (!parent) 
                        // Typically would occur when calling IterableDiffers.extend inside of dependencies passed
                        // to
                        // bootstrap(), which would override default pipes instead of extending them.
                        throw new Error("Cannot extend IterableDiffers without a parent injector");
                        return IterableDiffers.create(factories, parent);
                    },
                    // Dependency technically isn't optional, but we can provide a better error message this way.
                    deps: [ [ IterableDiffers, new SkipSelf(), new Optional() ] ]
                };
            }, IterableDiffers.prototype.find = function(iterable) {
                var type, factory = this.factories.find(function(f) {
                    return f.supports(iterable);
                });
                if (null != factory) return factory;
                throw new Error("Cannot find a differ supporting object '" + iterable + "' of type '" + ((type = iterable).name || typeof type) + "'");
            }, 
            /** @nocollapse */
            IterableDiffers.ngInjectableDef = defineInjectable({
                providedIn: "root",
                factory: function() {
                    return new IterableDiffers([ new DefaultIterableDifferFactory() ]);
                }
            }), IterableDiffers;
        }(), KeyValueDiffers = /** @class */ /* */ function() {
            function KeyValueDiffers(factories) {
                this.factories = factories;
            }
            return KeyValueDiffers.create = function(factories, parent) {
                if (parent) {
                    var copied = parent.factories.slice();
                    factories = factories.concat(copied);
                }
                return new KeyValueDiffers(factories);
            }, 
            /**
     * Takes an array of {@link KeyValueDifferFactory} and returns a provider used to extend the
     * inherited {@link KeyValueDiffers} instance with the provided factories and return a new
     * {@link KeyValueDiffers} instance.
     *
     * @usageNotes
     * ### Example
     *
     * The following example shows how to extend an existing list of factories,
     * which will only be applied to the injector for this component and its children.
     * This step is all that's required to make a new {@link KeyValueDiffer} available.
     *
     * ```
     * @Component({
     *   viewProviders: [
     *     KeyValueDiffers.extend([new ImmutableMapDiffer()])
     *   ]
     * })
     * ```
     */
            KeyValueDiffers.extend = function(factories) {
                return {
                    provide: KeyValueDiffers,
                    useFactory: function(parent) {
                        if (!parent) 
                        // Typically would occur when calling KeyValueDiffers.extend inside of dependencies passed
                        // to bootstrap(), which would override default pipes instead of extending them.
                        throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                        return KeyValueDiffers.create(factories, parent);
                    },
                    // Dependency technically isn't optional, but we can provide a better error message this way.
                    deps: [ [ KeyValueDiffers, new SkipSelf(), new Optional() ] ]
                };
            }, KeyValueDiffers.prototype.find = function(kv) {
                var factory = this.factories.find(function(f) {
                    return f.supports(kv);
                });
                if (factory) return factory;
                throw new Error("Cannot find a differ supporting object '" + kv + "'");
            }, 
            /** @nocollapse */
            KeyValueDiffers.ngInjectableDef = defineInjectable({
                providedIn: "root",
                factory: function() {
                    return new KeyValueDiffers([ new DefaultKeyValueDifferFactory() ]);
                }
            }), KeyValueDiffers;
        }(), ChangeDetectorRef = /** @class */ /* */ function() {
            function ChangeDetectorRef() {}
            /**
     * @internal
     * @nocollapse
     */            return ChangeDetectorRef.__NG_ELEMENT_ID__ = function() {
                return SWITCH_CHANGE_DETECTOR_REF_FACTORY();
            }, ChangeDetectorRef;
        }(), SWITCH_CHANGE_DETECTOR_REF_FACTORY = function() {
            for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        }, keyValDiff = [ /* */ new DefaultKeyValueDifferFactory() ], defaultIterableDiffers = /* */ new IterableDiffers([ /* */ new DefaultIterableDifferFactory() ]), defaultKeyValueDiffers = /* */ new KeyValueDiffers(keyValDiff), TemplateRef = /** @class */ /* */ function() {
            function TemplateRef() {}
            /**
     * @internal
     * @nocollapse
     */            return TemplateRef.__NG_ELEMENT_ID__ = function() {
                return SWITCH_TEMPLATE_REF_FACTORY(TemplateRef, ElementRef);
            }, TemplateRef;
        }(), SWITCH_TEMPLATE_REF_FACTORY = core_noop, ViewContainerRef = /** @class */ /* */ function() {
            function ViewContainerRef() {}
            /**
     * @internal
     * @nocollapse
     */            return ViewContainerRef.__NG_ELEMENT_ID__ = function() {
                return SWITCH_VIEW_CONTAINER_REF_FACTORY(ViewContainerRef, ElementRef);
            }, ViewContainerRef;
        }(), SWITCH_VIEW_CONTAINER_REF_FACTORY = core_noop;
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        function expressionChangedAfterItHasBeenCheckedError(context, oldValue, currValue, isFirstCheck) {
            var msg = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + oldValue + "'. Current value: '" + currValue + "'.";
            return isFirstCheck && (msg += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"), 
            function(msg, context) {
                var err = new Error(msg);
                return _addDebugContext(err, context), err;
            }(msg, context);
        }
        function _addDebugContext(err, context) {
            err[ERROR_DEBUG_CONTEXT] = context, err[ERROR_LOGGER] = context.logError.bind(context);
        }
        function viewDestroyedError(action) {
            return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + action);
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        // Called before each cycle of a view's check to detect whether this is in the
        // initState for which we need to call ngOnInit, ngAfterContentInit or ngAfterViewInit
        // lifecycle methods. Returns true if this check cycle should call lifecycle
        // methods.
                function shiftInitState(view, priorInitState, newInitState) {
            // Only update the InitState if we are currently in the prior state.
            // For example, only move into CallingInit if we are in BeforeInit. Only
            // move into CallingContentInit if we are in CallingInit. Normally this will
            // always be true because of how checkCycle is called in checkAndUpdateView.
            // However, if checkAndUpdateView is called recursively or if an exception is
            // thrown while checkAndUpdateView is running, checkAndUpdateView starts over
            // from the beginning. This ensures the state is monotonically increasing,
            // terminating in the AfterInit state, which ensures the Init methods are called
            // at least once and only once.
            var state = view.state, initState = 1792 /* InitState_Mask */ & state;
            return initState === priorInitState ? (view.state = -1793 /* InitState_Mask */ & state | newInitState, 
            view.initIndex = -1, !0) : initState === newInitState;
        }
        // Returns true if the lifecycle init method should be called for the node with
        // the given init index.
                function shouldCallLifecycleInitHook(view, initState, index) {
            return (1792 /* InitState_Mask */ & view.state) === initState && view.initIndex <= index && (view.initIndex = index + 1, 
            !0);
        }
        /**
 * Accessor for view.nodes, enforcing that every usage site stays monomorphic.
 */        function asTextData(view, index) {
            return view.nodes[index];
        }
        /**
 * Accessor for view.nodes, enforcing that every usage site stays monomorphic.
 */        function asElementData(view, index) {
            return view.nodes[index];
        }
        /**
 * Accessor for view.nodes, enforcing that every usage site stays monomorphic.
 */        function asProviderData(view, index) {
            return view.nodes[index];
        }
        /**
 * Accessor for view.nodes, enforcing that every usage site stays monomorphic.
 */        function asPureExpressionData(view, index) {
            return view.nodes[index];
        }
        /**
 * Accessor for view.nodes, enforcing that every usage site stays monomorphic.
 */        function asQueryList(view, index) {
            return view.nodes[index];
        }
        var Services = {
            setCurrentNode: void 0,
            createRootView: void 0,
            createEmbeddedView: void 0,
            createComponentView: void 0,
            createNgModuleRef: void 0,
            overrideProvider: void 0,
            overrideComponentView: void 0,
            clearOverrides: void 0,
            checkAndUpdateView: void 0,
            checkNoChangesView: void 0,
            destroyView: void 0,
            resolveDep: void 0,
            createDebugContext: void 0,
            handleEvent: void 0,
            updateDirectives: void 0,
            updateRenderer: void 0,
            dirtyParentQueries: void 0
        }, NOOP = function() {}, _tokenKeyCache = /* */ new Map();
        /**
 * This object is used to prevent cycles in the source files and to have a place where
 * debug mode can hook it. It is lazily filled when `isDevMode` is known.
 */        function tokenKey(token) {
            var key = _tokenKeyCache.get(token);
            return key || (key = stringify(token) + "_" + _tokenKeyCache.size, _tokenKeyCache.set(token, key)), 
            key;
        }
        var UNDEFINED_RENDERER_TYPE_ID = "$$undefined", EMPTY_RENDERER_TYPE_ID = "$$empty";
        // Attention: this function is called as top level function.
        // Putting any logic in here will destroy closure tree shaking!
        function createRendererType2(values) {
            return {
                id: UNDEFINED_RENDERER_TYPE_ID,
                styles: values.styles,
                encapsulation: values.encapsulation,
                data: values.data
            };
        }
        var _renderCompCount$1 = 0;
        function checkBinding(view, def, bindingIdx, value) {
            return !(!(2 /* FirstCheck */ & view.state) && looseIdentical(view.oldValues[def.bindingIndex + bindingIdx], value));
        }
        function checkAndUpdateBinding(view, def, bindingIdx, value) {
            return !!checkBinding(view, def, bindingIdx, value) && (view.oldValues[def.bindingIndex + bindingIdx] = value, 
            !0);
        }
        function checkBindingNoChanges(view, def, bindingIdx, value) {
            var oldValue = view.oldValues[def.bindingIndex + bindingIdx];
            if (1 /* BeforeFirstCheck */ & view.state || !devModeEqual$1(oldValue, value)) {
                var bindingName = def.bindings[bindingIdx].name;
                throw expressionChangedAfterItHasBeenCheckedError(Services.createDebugContext(view, def.nodeIndex), bindingName + ": " + oldValue, bindingName + ": " + value, 0 != (1 /* BeforeFirstCheck */ & view.state));
            }
        }
        function markParentViewsForCheck(view) {
            for (var currView = view; currView; ) 2 /* OnPush */ & currView.def.flags && (currView.state |= 8 /* ChecksEnabled */), 
            currView = currView.viewContainerParent || currView.parent;
        }
        function markParentViewsForCheckProjectedViews(view, endView) {
            for (var currView = view; currView && currView !== endView; ) currView.state |= 64 /* CheckProjectedViews */ , 
            currView = currView.viewContainerParent || currView.parent;
        }
        function dispatchEvent(view, nodeIndex, eventName, event) {
            try {
                return markParentViewsForCheck(33554432 /* ComponentView */ & view.def.nodes[nodeIndex].flags ? asElementData(view, nodeIndex).componentView : view), 
                Services.handleEvent(view, nodeIndex, eventName, event);
            } catch (e) {
                // Attention: Don't rethrow, as it would cancel Observable subscriptions!
                view.root.errorHandler.handleError(e);
            }
        }
        function declaredViewContainer(view) {
            return view.parent ? asElementData(view.parent, view.parentNodeDef.nodeIndex) : null;
        }
        /**
 * for component views, this is the host element.
 * for embedded views, this is the index of the parent node
 * that contains the view container.
 */        function viewParentEl(view) {
            return view.parent ? view.parentNodeDef.parent : null;
        }
        function renderNode(view, def) {
            switch (201347067 /* Types */ & def.flags) {
              case 1 /* TypeElement */ :
                return asElementData(view, def.nodeIndex).renderElement;

              case 2 /* TypeText */ :
                return asTextData(view, def.nodeIndex).renderText;
            }
        }
        function isComponentView(view) {
            return !!view.parent && !!(32768 /* Component */ & view.parentNodeDef.flags);
        }
        function isEmbeddedView(view) {
            return !(!view.parent || 32768 /* Component */ & view.parentNodeDef.flags);
        }
        function splitMatchedQueriesDsl(matchedQueriesDsl) {
            var matchedQueries = {}, matchedQueryIds = 0, references = {};
            return matchedQueriesDsl && matchedQueriesDsl.forEach(function(_a) {
                var _b = __read(_a, 2), queryId = _b[0], valueType = _b[1];
                "number" == typeof queryId ? (matchedQueries[queryId] = valueType, matchedQueryIds |= function(queryId) {
                    return 1 << queryId % 32;
                }(queryId)) : references[queryId] = valueType;
            }), {
                matchedQueries: matchedQueries,
                references: references,
                matchedQueryIds: matchedQueryIds
            };
        }
        function splitDepsDsl(deps, sourceName) {
            return deps.map(function(value) {
                var _a, token, flags;
                return Array.isArray(value) ? (flags = (_a = __read(value, 2))[0], token = _a[1]) : (flags = 0 /* None */ , 
                token = value), token && ("function" == typeof token || "object" == typeof token) && sourceName && Object.defineProperty(token, SOURCE, {
                    value: sourceName,
                    configurable: !0
                }), {
                    flags: flags,
                    token: token,
                    tokenKey: tokenKey(token)
                };
            });
        }
        function getParentRenderElement(view, renderHost, def) {
            var renderParent = def.renderParent;
            return renderParent ? 0 == (1 /* TypeElement */ & renderParent.flags) || 0 == (33554432 /* ComponentView */ & renderParent.flags) || renderParent.element.componentRendererType && renderParent.element.componentRendererType.encapsulation === ViewEncapsulation.Native ? asElementData(view, def.renderParent.nodeIndex).renderElement : void 0 : renderHost;
        }
        var DEFINITION_CACHE = /* */ new WeakMap();
        function resolveDefinition(factory) {
            var value = DEFINITION_CACHE.get(factory);
            return value || ((value = factory(function() {
                return NOOP;
            })).factory = factory, DEFINITION_CACHE.set(factory, value)), value;
        }
        function visitRootRenderNodes(view, action, parentNode, nextSibling, target) {
            // We need to re-compute the parent node in case the nodes have been moved around manually
            3 /* RemoveChild */ === action && (parentNode = view.renderer.parentNode(renderNode(view, view.def.lastRenderRootNode))), 
            visitSiblingRenderNodes(view, action, 0, view.def.nodes.length - 1, parentNode, nextSibling, target);
        }
        function visitSiblingRenderNodes(view, action, startIndex, endIndex, parentNode, nextSibling, target) {
            for (var i = startIndex; i <= endIndex; i++) {
                var nodeDef = view.def.nodes[i];
                11 /* TypeNgContent */ & nodeDef.flags && visitRenderNode(view, nodeDef, action, parentNode, nextSibling, target), 
                // jump to next sibling
                i += nodeDef.childCount;
            }
        }
        function visitProjectedRenderNodes(view, ngContentIndex, action, parentNode, nextSibling, target) {
            for (var compView = view; compView && !isComponentView(compView); ) compView = compView.parent;
            for (var hostView = compView.parent, hostElDef = viewParentEl(compView), endIndex = hostElDef.nodeIndex + hostElDef.childCount, i = hostElDef.nodeIndex + 1; i <= endIndex; i++) {
                var nodeDef = hostView.def.nodes[i];
                nodeDef.ngContentIndex === ngContentIndex && visitRenderNode(hostView, nodeDef, action, parentNode, nextSibling, target), 
                // jump to next sibling
                i += nodeDef.childCount;
            }
            if (!hostView.parent) {
                // a root view
                var projectedNodes = view.root.projectableNodes[ngContentIndex];
                if (projectedNodes) for (i = 0; i < projectedNodes.length; i++) execRenderNodeAction(view, projectedNodes[i], action, parentNode, nextSibling, target);
            }
        }
        function visitRenderNode(view, nodeDef, action, parentNode, nextSibling, target) {
            if (8 /* TypeNgContent */ & nodeDef.flags) visitProjectedRenderNodes(view, nodeDef.ngContent.index, action, parentNode, nextSibling, target); else {
                var rn = renderNode(view, nodeDef);
                if (3 /* RemoveChild */ === action && 33554432 /* ComponentView */ & nodeDef.flags && 48 /* CatSyntheticProperty */ & nodeDef.bindingFlags ? (
                // Note: we might need to do both actions.
                16 /* SyntheticProperty */ & nodeDef.bindingFlags && execRenderNodeAction(view, rn, action, parentNode, nextSibling, target), 
                32 /* SyntheticHostProperty */ & nodeDef.bindingFlags && execRenderNodeAction(asElementData(view, nodeDef.nodeIndex).componentView, rn, action, parentNode, nextSibling, target)) : execRenderNodeAction(view, rn, action, parentNode, nextSibling, target), 
                16777216 /* EmbeddedViews */ & nodeDef.flags) for (var embeddedViews = asElementData(view, nodeDef.nodeIndex).viewContainer._embeddedViews, k = 0; k < embeddedViews.length; k++) visitRootRenderNodes(embeddedViews[k], action, parentNode, nextSibling, target);
                1 /* TypeElement */ & nodeDef.flags && !nodeDef.element.name && visitSiblingRenderNodes(view, action, nodeDef.nodeIndex + 1, nodeDef.nodeIndex + nodeDef.childCount, parentNode, nextSibling, target);
            }
        }
        function execRenderNodeAction(view, renderNode, action, parentNode, nextSibling, target) {
            var renderer = view.renderer;
            switch (action) {
              case 1 /* AppendChild */ :
                renderer.appendChild(parentNode, renderNode);
                break;

              case 2 /* InsertBefore */ :
                renderer.insertBefore(parentNode, renderNode, nextSibling);
                break;

              case 3 /* RemoveChild */ :
                renderer.removeChild(parentNode, renderNode);
                break;

              case 0 /* Collect */ :
                target.push(renderNode);
            }
        }
        var NS_PREFIX_RE = /^:([^:]+):(.+)$/;
        function splitNamespace(name) {
            if (":" === name[0]) {
                var match = name.match(NS_PREFIX_RE);
                return [ match[1], match[2] ];
            }
            return [ "", name ];
        }
        function calcBindingFlags(bindings) {
            for (var flags = 0, i = 0; i < bindings.length; i++) flags |= bindings[i].flags;
            return flags;
        }
        var UNDEFINED_VALUE = /* */ new Object(), InjectorRefTokenKey = /* */ tokenKey(Injector), INJECTORRefTokenKey = /* */ tokenKey(INJECTOR), NgModuleRefTokenKey = /* */ tokenKey(NgModuleRef);
        function moduleProvideDef(flags, token, value, deps) {
            // Need to resolve forwardRefs as e.g. for `useValue` we
            // lowered the expression and then stopped evaluating it,
            // i.e. also didn't unwrap it.
            return value = resolveForwardRef(value), {
                // will bet set by the module definition
                index: -1,
                deps: splitDepsDsl(deps, stringify(token)),
                flags: flags,
                token: token,
                value: value
            };
        }
        function resolveNgModuleDep(data, depDef, notFoundValue) {
            void 0 === notFoundValue && (notFoundValue = Injector.THROW_IF_NOT_FOUND);
            var ngModule, def, former = setCurrentInjector(data);
            try {
                if (8 /* Value */ & depDef.flags) return depDef.token;
                if (2 /* Optional */ & depDef.flags && (notFoundValue = null), 1 /* SkipSelf */ & depDef.flags) return data._parent.get(depDef.token, notFoundValue);
                var tokenKey_1 = depDef.tokenKey;
                switch (tokenKey_1) {
                  case InjectorRefTokenKey:
                  case INJECTORRefTokenKey:
                  case NgModuleRefTokenKey:
                    return data;
                }
                var injectableDef, providerDef = data._def.providersByKey[tokenKey_1];
                if (providerDef) {
                    var providerInstance = data._providers[providerDef.index];
                    return void 0 === providerInstance && (providerInstance = data._providers[providerDef.index] = _createProviderInstance(data, providerDef)), 
                    providerInstance === UNDEFINED_VALUE ? void 0 : providerInstance;
                }
                if ((injectableDef = getInjectableDef(depDef.token)) && (ngModule = data, null != (def = injectableDef).providedIn && (function(ngModule, scope) {
                    return ngModule._def.modules.indexOf(def.providedIn) > -1;
                }(ngModule) || "root" === def.providedIn && ngModule._def.isRoot))) {
                    var index = data._providers.length;
                    return data._def.providersByKey[depDef.tokenKey] = {
                        flags: 5120 /* LazyProvider */ ,
                        value: injectableDef.factory,
                        deps: [],
                        index: index,
                        token: depDef.token
                    }, data._providers[index] = UNDEFINED_VALUE, data._providers[index] = _createProviderInstance(data, data._def.providersByKey[depDef.tokenKey]);
                }
                return 4 /* Self */ & depDef.flags ? notFoundValue : data._parent.get(depDef.token, notFoundValue);
            } finally {
                setCurrentInjector(former);
            }
        }
        function _createProviderInstance(ngModule, providerDef) {
            var injectable;
            switch (201347067 /* Types */ & providerDef.flags) {
              case 512 /* TypeClassProvider */ :
                injectable = function(ngModule, ctor, deps) {
                    var len = deps.length;
                    switch (len) {
                      case 0:
                        return new ctor();

                      case 1:
                        return new ctor(resolveNgModuleDep(ngModule, deps[0]));

                      case 2:
                        return new ctor(resolveNgModuleDep(ngModule, deps[0]), resolveNgModuleDep(ngModule, deps[1]));

                      case 3:
                        return new ctor(resolveNgModuleDep(ngModule, deps[0]), resolveNgModuleDep(ngModule, deps[1]), resolveNgModuleDep(ngModule, deps[2]));

                      default:
                        for (var depValues = new Array(len), i = 0; i < len; i++) depValues[i] = resolveNgModuleDep(ngModule, deps[i]);
                        return new (ctor.bind.apply(ctor, __spread([ void 0 ], depValues)))();
                    }
                }(ngModule, providerDef.value, providerDef.deps);
                break;

              case 1024 /* TypeFactoryProvider */ :
                injectable = function(ngModule, factory, deps) {
                    var len = deps.length;
                    switch (len) {
                      case 0:
                        return factory();

                      case 1:
                        return factory(resolveNgModuleDep(ngModule, deps[0]));

                      case 2:
                        return factory(resolveNgModuleDep(ngModule, deps[0]), resolveNgModuleDep(ngModule, deps[1]));

                      case 3:
                        return factory(resolveNgModuleDep(ngModule, deps[0]), resolveNgModuleDep(ngModule, deps[1]), resolveNgModuleDep(ngModule, deps[2]));

                      default:
                        for (var depValues = Array(len), i = 0; i < len; i++) depValues[i] = resolveNgModuleDep(ngModule, deps[i]);
                        return factory.apply(void 0, __spread(depValues));
                    }
                }(ngModule, providerDef.value, providerDef.deps);
                break;

              case 2048 /* TypeUseExistingProvider */ :
                injectable = resolveNgModuleDep(ngModule, providerDef.deps[0]);
                break;

              case 256 /* TypeValueProvider */ :
                injectable = providerDef.value;
            }
            // The read of `ngOnDestroy` here is slightly expensive as it's megamorphic, so it should be
            // avoided if possible. The sequence of checks here determines whether ngOnDestroy needs to be
            // checked. It might not if the `injectable` isn't an object or if NodeFlags.OnDestroy is already
            // set (ngOnDestroy was detected statically).
                        return injectable === UNDEFINED_VALUE || null === injectable || "object" != typeof injectable || 131072 /* OnDestroy */ & providerDef.flags || "function" != typeof injectable.ngOnDestroy || (providerDef.flags |= 131072 /* OnDestroy */), 
            void 0 === injectable ? UNDEFINED_VALUE : injectable;
        }
        function detachEmbeddedView(elementData, viewIndex) {
            var embeddedViews = elementData.viewContainer._embeddedViews;
            if ((null == viewIndex || viewIndex >= embeddedViews.length) && (viewIndex = embeddedViews.length - 1), 
            viewIndex < 0) return null;
            var view = embeddedViews[viewIndex];
            return view.viewContainerParent = null, removeFromArray(embeddedViews, viewIndex), 
            // See attachProjectedView for why we don't update projectedViews here.
            Services.dirtyParentQueries(view), renderDetachView(view), view;
        }
        function renderAttachEmbeddedView(elementData, prevView, view) {
            var prevRenderNode = prevView ? renderNode(prevView, prevView.def.lastRenderRootNode) : elementData.renderElement, parentNode = view.renderer.parentNode(prevRenderNode), nextSibling = view.renderer.nextSibling(prevRenderNode);
            // Note: We can't check if `nextSibling` is present, as on WebWorkers it will always be!
            // However, browsers automatically do `appendChild` when there is no `nextSibling`.
            visitRootRenderNodes(view, 2 /* InsertBefore */ , parentNode, nextSibling, void 0);
        }
        function renderDetachView(view) {
            visitRootRenderNodes(view, 3 /* RemoveChild */ , null, null, void 0);
        }
        function addToArray(arr, index, value) {
            // perf: array.push is faster than array.splice!
            index >= arr.length ? arr.push(value) : arr.splice(index, 0, value);
        }
        function removeFromArray(arr, index) {
            // perf: array.pop is faster than array.splice!
            index >= arr.length - 1 ? arr.pop() : arr.splice(index, 1);
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        var EMPTY_CONTEXT = /* */ new Object();
        // Attention: this function is called as top level function.
        // Putting any logic in here will destroy closure tree shaking!
                function createComponentFactory(selector, componentType, viewDefFactory, inputs, outputs, ngContentSelectors) {
            return new core_ComponentFactory_(selector, componentType, viewDefFactory, inputs, outputs, ngContentSelectors);
        }
        var core_ComponentFactory_ = /** @class */ /* */ function(_super) {
            function ComponentFactory_(selector, componentType, viewDefFactory, _inputs, _outputs, ngContentSelectors) {
                var _this = 
                // Attention: this ctor is called as top level function.
                // Putting any logic in here will destroy closure tree shaking!
                _super.call(this) || this;
                return _this.selector = selector, _this.componentType = componentType, _this._inputs = _inputs, 
                _this._outputs = _outputs, _this.ngContentSelectors = ngContentSelectors, _this.viewDefFactory = viewDefFactory, 
                _this;
            }
            return __extends(ComponentFactory_, _super), Object.defineProperty(ComponentFactory_.prototype, "inputs", {
                get: function() {
                    var inputsArr = [], inputs = this._inputs;
                    for (var propName in inputs) inputsArr.push({
                        propName: propName,
                        templateName: inputs[propName]
                    });
                    return inputsArr;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ComponentFactory_.prototype, "outputs", {
                get: function() {
                    var outputsArr = [];
                    for (var propName in this._outputs) outputsArr.push({
                        propName: propName,
                        templateName: this._outputs[propName]
                    });
                    return outputsArr;
                },
                enumerable: !0,
                configurable: !0
            }), 
            /**
     * Creates a new component.
     */
            ComponentFactory_.prototype.create = function(injector, projectableNodes, rootSelectorOrNode, ngModule) {
                if (!ngModule) throw new Error("ngModule should be provided");
                var viewDef = resolveDefinition(this.viewDefFactory), componentNodeIndex = viewDef.nodes[0].element.componentProvider.nodeIndex, view = Services.createRootView(injector, projectableNodes || [], rootSelectorOrNode, viewDef, ngModule, EMPTY_CONTEXT), component = asProviderData(view, componentNodeIndex).instance;
                return rootSelectorOrNode && view.renderer.setAttribute(asElementData(view, 0).renderElement, "ng-version", VERSION.full), 
                new core_ComponentRef_(view, new ViewRef_(view), component);
            }, ComponentFactory_;
        }(ComponentFactory), core_ComponentRef_ = /** @class */ /* */ function(_super) {
            function ComponentRef_(_view, _viewRef, _component) {
                var _this = _super.call(this) || this;
                return _this._view = _view, _this._viewRef = _viewRef, _this._component = _component, 
                _this._elDef = _this._view.def.nodes[0], _this.hostView = _viewRef, _this.changeDetectorRef = _viewRef, 
                _this.instance = _component, _this;
            }
            return __extends(ComponentRef_, _super), Object.defineProperty(ComponentRef_.prototype, "location", {
                get: function() {
                    return new ElementRef(asElementData(this._view, this._elDef.nodeIndex).renderElement);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ComponentRef_.prototype, "injector", {
                get: function() {
                    return new Injector_(this._view, this._elDef);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ComponentRef_.prototype, "componentType", {
                get: function() {
                    return this._component.constructor;
                },
                enumerable: !0,
                configurable: !0
            }), ComponentRef_.prototype.destroy = function() {
                this._viewRef.destroy();
            }, ComponentRef_.prototype.onDestroy = function(callback) {
                this._viewRef.onDestroy(callback);
            }, ComponentRef_;
        }(ComponentRef);
        function createViewContainerData(view, elDef, elData) {
            return new core_ViewContainerRef_(view, elDef, elData);
        }
        var core_ViewContainerRef_ = /** @class */ /* */ function() {
            function ViewContainerRef_(_view, _elDef, _data) {
                this._view = _view, this._elDef = _elDef, this._data = _data, 
                /**
         * @internal
         */
                this._embeddedViews = [];
            }
            return Object.defineProperty(ViewContainerRef_.prototype, "element", {
                get: function() {
                    return new ElementRef(this._data.renderElement);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ViewContainerRef_.prototype, "injector", {
                get: function() {
                    return new Injector_(this._view, this._elDef);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ViewContainerRef_.prototype, "parentInjector", {
                /** @deprecated No replacement */
                get: function() {
                    for (var view = this._view, elDef = this._elDef.parent; !elDef && view; ) elDef = viewParentEl(view), 
                    view = view.parent;
                    return view ? new Injector_(view, elDef) : new Injector_(this._view, null);
                },
                enumerable: !0,
                configurable: !0
            }), ViewContainerRef_.prototype.clear = function() {
                for (var i = this._embeddedViews.length - 1; i >= 0; i--) {
                    var view = detachEmbeddedView(this._data, i);
                    Services.destroyView(view);
                }
            }, ViewContainerRef_.prototype.get = function(index) {
                var view = this._embeddedViews[index];
                if (view) {
                    var ref = new ViewRef_(view);
                    return ref.attachToViewContainerRef(this), ref;
                }
                return null;
            }, Object.defineProperty(ViewContainerRef_.prototype, "length", {
                get: function() {
                    return this._embeddedViews.length;
                },
                enumerable: !0,
                configurable: !0
            }), ViewContainerRef_.prototype.createEmbeddedView = function(templateRef, context, index) {
                var viewRef = templateRef.createEmbeddedView(context || {});
                return this.insert(viewRef, index), viewRef;
            }, ViewContainerRef_.prototype.createComponent = function(componentFactory, index, injector, projectableNodes, ngModuleRef) {
                var contextInjector = injector || this.parentInjector;
                ngModuleRef || componentFactory instanceof core_ComponentFactoryBoundToModule || (ngModuleRef = contextInjector.get(NgModuleRef));
                var componentRef = componentFactory.create(contextInjector, projectableNodes, void 0, ngModuleRef);
                return this.insert(componentRef.hostView, index), componentRef;
            }, ViewContainerRef_.prototype.insert = function(viewRef, index) {
                if (viewRef.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                var elementData, viewIndex, view, embeddedViews, viewRef_ = viewRef;
                return embeddedViews = (elementData = this._data).viewContainer._embeddedViews, 
                null == (viewIndex = index) && (viewIndex = embeddedViews.length), (view = viewRef_._view).viewContainerParent = this._view, 
                addToArray(embeddedViews, viewIndex, view), function(vcElementData, view) {
                    var dvcElementData = declaredViewContainer(view);
                    if (dvcElementData && dvcElementData !== vcElementData && !(16 /* IsProjectedView */ & view.state)) {
                        // Note: For performance reasons, we
                        // - add a view to template._projectedViews only 1x throughout its lifetime,
                        //   and remove it not until the view is destroyed.
                        //   (hard, as when a parent view is attached/detached we would need to attach/detach all
                        //    nested projected views as well, even across component boundaries).
                        // - don't track the insertion order of views in the projected views array
                        //   (hard, as when the views of the same template are inserted different view containers)
                        view.state |= 16 /* IsProjectedView */;
                        var projectedViews = dvcElementData.template._projectedViews;
                        projectedViews || (projectedViews = dvcElementData.template._projectedViews = []), 
                        projectedViews.push(view), 
                        // Note: we are changing the NodeDef here as we cannot calculate
                        // the fact whether a template is used for projection during compilation.
                        function(viewDef, nodeDef) {
                            if (!(4 /* ProjectedTemplate */ & nodeDef.flags)) {
                                view.parent.def.nodeFlags |= 4 /* ProjectedTemplate */ , nodeDef.flags |= 4 /* ProjectedTemplate */;
                                for (var parentNodeDef = nodeDef.parent; parentNodeDef; ) parentNodeDef.childFlags |= 4 /* ProjectedTemplate */ , 
                                parentNodeDef = parentNodeDef.parent;
                            }
                        }(0, view.parentNodeDef);
                    }
                }(elementData, view), Services.dirtyParentQueries(view), renderAttachEmbeddedView(elementData, viewIndex > 0 ? embeddedViews[viewIndex - 1] : null, view), 
                viewRef_.attachToViewContainerRef(this), viewRef;
            }, ViewContainerRef_.prototype.move = function(viewRef, currentIndex) {
                if (viewRef.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                var elementData, oldViewIndex, newViewIndex, embeddedViews, view, previousIndex = this._embeddedViews.indexOf(viewRef._view);
                return newViewIndex = currentIndex, view = (embeddedViews = (elementData = this._data).viewContainer._embeddedViews)[oldViewIndex = previousIndex], 
                removeFromArray(embeddedViews, oldViewIndex), null == newViewIndex && (newViewIndex = embeddedViews.length), 
                addToArray(embeddedViews, newViewIndex, view), 
                // Note: Don't need to change projectedViews as the order in there
                // as always invalid...
                Services.dirtyParentQueries(view), renderDetachView(view), renderAttachEmbeddedView(elementData, newViewIndex > 0 ? embeddedViews[newViewIndex - 1] : null, view), 
                viewRef;
            }, ViewContainerRef_.prototype.indexOf = function(viewRef) {
                return this._embeddedViews.indexOf(viewRef._view);
            }, ViewContainerRef_.prototype.remove = function(index) {
                var viewData = detachEmbeddedView(this._data, index);
                viewData && Services.destroyView(viewData);
            }, ViewContainerRef_.prototype.detach = function(index) {
                var view = detachEmbeddedView(this._data, index);
                return view ? new ViewRef_(view) : null;
            }, ViewContainerRef_;
        }();
        function createChangeDetectorRef(view) {
            return new ViewRef_(view);
        }
        var ViewRef_ = /** @class */ /* */ function() {
            function ViewRef_(_view) {
                this._view = _view, this._viewContainerRef = null, this._appRef = null;
            }
            return Object.defineProperty(ViewRef_.prototype, "rootNodes", {
                get: function() {
                    return visitRootRenderNodes(this._view, 0 /* Collect */ , void 0, void 0, renderNodes = []), 
                    renderNodes;
                    var renderNodes;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ViewRef_.prototype, "context", {
                get: function() {
                    return this._view.context;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ViewRef_.prototype, "destroyed", {
                get: function() {
                    return 0 != (128 /* Destroyed */ & this._view.state);
                },
                enumerable: !0,
                configurable: !0
            }), ViewRef_.prototype.markForCheck = function() {
                markParentViewsForCheck(this._view);
            }, ViewRef_.prototype.detach = function() {
                this._view.state &= -5 /* Attached */;
            }, ViewRef_.prototype.detectChanges = function() {
                var fs = this._view.root.rendererFactory;
                fs.begin && fs.begin();
                try {
                    Services.checkAndUpdateView(this._view);
                } finally {
                    fs.end && fs.end();
                }
            }, ViewRef_.prototype.checkNoChanges = function() {
                Services.checkNoChangesView(this._view);
            }, ViewRef_.prototype.reattach = function() {
                this._view.state |= 4 /* Attached */;
            }, ViewRef_.prototype.onDestroy = function(callback) {
                this._view.disposables || (this._view.disposables = []), this._view.disposables.push(callback);
            }, ViewRef_.prototype.destroy = function() {
                this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), 
                Services.destroyView(this._view);
            }, ViewRef_.prototype.detachFromAppRef = function() {
                this._appRef = null, renderDetachView(this._view), Services.dirtyParentQueries(this._view);
            }, ViewRef_.prototype.attachToAppRef = function(appRef) {
                if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                this._appRef = appRef;
            }, ViewRef_.prototype.attachToViewContainerRef = function(vcRef) {
                if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                this._viewContainerRef = vcRef;
            }, ViewRef_;
        }();
        function createTemplateData(view, def) {
            return new core_TemplateRef_(view, def);
        }
        var core_TemplateRef_ = /** @class */ /* */ function(_super) {
            function TemplateRef_(_parentView, _def) {
                var _this = _super.call(this) || this;
                return _this._parentView = _parentView, _this._def = _def, _this;
            }
            return __extends(TemplateRef_, _super), TemplateRef_.prototype.createEmbeddedView = function(context) {
                return new ViewRef_(Services.createEmbeddedView(this._parentView, this._def, this._def.element.template, context));
            }, Object.defineProperty(TemplateRef_.prototype, "elementRef", {
                get: function() {
                    return new ElementRef(asElementData(this._parentView, this._def.nodeIndex).renderElement);
                },
                enumerable: !0,
                configurable: !0
            }), TemplateRef_;
        }(TemplateRef);
        function createInjector$1(view, elDef) {
            return new Injector_(view, elDef);
        }
        var Injector_ = /** @class */ /* */ function() {
            function Injector_(view, elDef) {
                this.view = view, this.elDef = elDef;
            }
            return Injector_.prototype.get = function(token, notFoundValue) {
                return void 0 === notFoundValue && (notFoundValue = Injector.THROW_IF_NOT_FOUND), 
                Services.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 /* ComponentView */ & this.elDef.flags), {
                    flags: 0 /* None */ ,
                    token: token,
                    tokenKey: tokenKey(token)
                }, notFoundValue);
            }, Injector_;
        }();
        function createRendererV1(view) {
            return new core_RendererAdapter(view.renderer);
        }
        var core_RendererAdapter = /** @class */ /* */ function() {
            function RendererAdapter(delegate) {
                this.delegate = delegate;
            }
            return RendererAdapter.prototype.selectRootElement = function(selectorOrNode) {
                return this.delegate.selectRootElement(selectorOrNode);
            }, RendererAdapter.prototype.createElement = function(parent, namespaceAndName) {
                var _a = __read(splitNamespace(namespaceAndName), 2), el = this.delegate.createElement(_a[1], _a[0]);
                return parent && this.delegate.appendChild(parent, el), el;
            }, RendererAdapter.prototype.createViewRoot = function(hostElement) {
                return hostElement;
            }, RendererAdapter.prototype.createTemplateAnchor = function(parentElement) {
                var comment = this.delegate.createComment("");
                return parentElement && this.delegate.appendChild(parentElement, comment), comment;
            }, RendererAdapter.prototype.createText = function(parentElement, value) {
                var node = this.delegate.createText(value);
                return parentElement && this.delegate.appendChild(parentElement, node), node;
            }, RendererAdapter.prototype.projectNodes = function(parentElement, nodes) {
                for (var i = 0; i < nodes.length; i++) this.delegate.appendChild(parentElement, nodes[i]);
            }, RendererAdapter.prototype.attachViewAfter = function(node, viewRootNodes) {
                for (var parentElement = this.delegate.parentNode(node), nextSibling = this.delegate.nextSibling(node), i = 0; i < viewRootNodes.length; i++) this.delegate.insertBefore(parentElement, viewRootNodes[i], nextSibling);
            }, RendererAdapter.prototype.detachView = function(viewRootNodes) {
                for (var i = 0; i < viewRootNodes.length; i++) {
                    var node = viewRootNodes[i], parentElement = this.delegate.parentNode(node);
                    this.delegate.removeChild(parentElement, node);
                }
            }, RendererAdapter.prototype.destroyView = function(hostElement, viewAllNodes) {
                for (var i = 0; i < viewAllNodes.length; i++) this.delegate.destroyNode(viewAllNodes[i]);
            }, RendererAdapter.prototype.listen = function(renderElement, name, callback) {
                return this.delegate.listen(renderElement, name, callback);
            }, RendererAdapter.prototype.listenGlobal = function(target, name, callback) {
                return this.delegate.listen(target, name, callback);
            }, RendererAdapter.prototype.setElementProperty = function(renderElement, propertyName, propertyValue) {
                this.delegate.setProperty(renderElement, propertyName, propertyValue);
            }, RendererAdapter.prototype.setElementAttribute = function(renderElement, namespaceAndName, attributeValue) {
                var _a = __read(splitNamespace(namespaceAndName), 2), ns = _a[0], name = _a[1];
                null != attributeValue ? this.delegate.setAttribute(renderElement, name, attributeValue, ns) : this.delegate.removeAttribute(renderElement, name, ns);
            }, RendererAdapter.prototype.setBindingDebugInfo = function(renderElement, propertyName, propertyValue) {}, 
            RendererAdapter.prototype.setElementClass = function(renderElement, className, isAdd) {
                isAdd ? this.delegate.addClass(renderElement, className) : this.delegate.removeClass(renderElement, className);
            }, RendererAdapter.prototype.setElementStyle = function(renderElement, styleName, styleValue) {
                null != styleValue ? this.delegate.setStyle(renderElement, styleName, styleValue) : this.delegate.removeStyle(renderElement, styleName);
            }, RendererAdapter.prototype.invokeElementMethod = function(renderElement, methodName, args) {
                renderElement[methodName].apply(renderElement, args);
            }, RendererAdapter.prototype.setText = function(renderNode$$1, text) {
                this.delegate.setValue(renderNode$$1, text);
            }, RendererAdapter.prototype.animate = function() {
                throw new Error("Renderer.animate is no longer supported!");
            }, RendererAdapter;
        }();
        function createNgModuleRef(moduleType, parent, bootstrapComponents, def) {
            return new NgModuleRef_(moduleType, parent, bootstrapComponents, def);
        }
        var NgModuleRef_ = /** @class */ /* */ function() {
            function NgModuleRef_(_moduleType, _parent, _bootstrapComponents, _def) {
                this._moduleType = _moduleType, this._parent = _parent, this._bootstrapComponents = _bootstrapComponents, 
                this._def = _def, this._destroyListeners = [], this._destroyed = !1, this.injector = this, 
                function(data) {
                    for (var def = data._def, providers = data._providers = new Array(def.providers.length), i = 0; i < def.providers.length; i++) {
                        var provDef = def.providers[i];
                        4096 /* LazyProvider */ & provDef.flags || 
                        // Make sure the provider has not been already initialized outside this loop.
                        void 0 === providers[i] && (providers[i] = _createProviderInstance(data, provDef));
                    }
                }(this);
            }
            return NgModuleRef_.prototype.get = function(token, notFoundValue, injectFlags) {
                void 0 === notFoundValue && (notFoundValue = Injector.THROW_IF_NOT_FOUND), void 0 === injectFlags && (injectFlags = InjectFlags.Default);
                var flags = 0 /* None */;
                return injectFlags & InjectFlags.SkipSelf ? flags |= 1 /* SkipSelf */ : injectFlags & InjectFlags.Self && (flags |= 4 /* Self */), 
                resolveNgModuleDep(this, {
                    token: token,
                    tokenKey: tokenKey(token),
                    flags: flags
                }, notFoundValue);
            }, Object.defineProperty(NgModuleRef_.prototype, "instance", {
                get: function() {
                    return this.get(this._moduleType);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(NgModuleRef_.prototype, "componentFactoryResolver", {
                get: function() {
                    return this.get(ComponentFactoryResolver);
                },
                enumerable: !0,
                configurable: !0
            }), NgModuleRef_.prototype.destroy = function() {
                if (this._destroyed) throw new Error("The ng module " + stringify(this.instance.constructor) + " has already been destroyed.");
                this._destroyed = !0, function(ngModule, lifecycles) {
                    for (var def = ngModule._def, destroyed = new Set(), i = 0; i < def.providers.length; i++) if (131072 /* OnDestroy */ & def.providers[i].flags) {
                        var instance = ngModule._providers[i];
                        if (instance && instance !== UNDEFINED_VALUE) {
                            var onDestroy = instance.ngOnDestroy;
                            "function" != typeof onDestroy || destroyed.has(instance) || (onDestroy.apply(instance), 
                            destroyed.add(instance));
                        }
                    }
                }
                /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ (this), this._destroyListeners.forEach(function(listener) {
                    return listener();
                });
            }, NgModuleRef_.prototype.onDestroy = function(callback) {
                this._destroyListeners.push(callback);
            }, NgModuleRef_;
        }(), RendererV1TokenKey = /* */ tokenKey(Renderer), Renderer2TokenKey = /* */ tokenKey(Renderer2), ElementRefTokenKey = /* */ tokenKey(ElementRef), ViewContainerRefTokenKey = /* */ tokenKey(ViewContainerRef), TemplateRefTokenKey = /* */ tokenKey(TemplateRef), ChangeDetectorRefTokenKey = /* */ tokenKey(ChangeDetectorRef), InjectorRefTokenKey$1 = /* */ tokenKey(Injector), INJECTORRefTokenKey$1 = /* */ tokenKey(INJECTOR);
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        function directiveDef(checkIndex, flags, matchedQueries, childCount, ctor, deps, props, outputs) {
            var bindings = [];
            if (props) for (var prop in props) {
                var _a = __read(props[prop], 2);
                bindings[_a[0]] = {
                    flags: 8 /* TypeProperty */ ,
                    name: prop,
                    nonMinifiedName: _a[1],
                    ns: null,
                    securityContext: null,
                    suffix: null
                };
            }
            var outputDefs = [];
            if (outputs) for (var propName in outputs) outputDefs.push({
                type: 1 /* DirectiveOutput */ ,
                propName: propName,
                target: null,
                eventName: outputs[propName]
            });
            return function(checkIndex, flags, matchedQueriesDsl, childCount, token, value, deps, bindings, outputs) {
                var _a = splitMatchedQueriesDsl(matchedQueriesDsl), matchedQueries = _a.matchedQueries, references = _a.references, matchedQueryIds = _a.matchedQueryIds;
                outputs || (outputs = []), bindings || (bindings = []), 
                // Need to resolve forwardRefs as e.g. for `useValue` we
                // lowered the expression and then stopped evaluating it,
                // i.e. also didn't unwrap it.
                value = resolveForwardRef(value);
                var depDefs = splitDepsDsl(deps, stringify(token));
                return {
                    // will bet set by the view definition
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    // regular values
                    checkIndex: checkIndex,
                    flags: flags,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: matchedQueries,
                    matchedQueryIds: matchedQueryIds,
                    references: references,
                    ngContentIndex: -1,
                    childCount: childCount,
                    bindings: bindings,
                    bindingFlags: calcBindingFlags(bindings),
                    outputs: outputs,
                    element: null,
                    provider: {
                        token: token,
                        value: value,
                        deps: depDefs
                    },
                    text: null,
                    query: null,
                    ngContent: null
                };
            }(checkIndex, flags |= 16384 /* TypeDirective */ , matchedQueries, childCount, ctor, ctor, deps, bindings, outputDefs);
        }
        function createProviderInstance(view, def) {
            return _createProviderInstance$1(view, def);
        }
        function createPipeInstance(view, def) {
            for (
            // deps are looked up from component.
            var compView = view; compView.parent && !isComponentView(compView); ) compView = compView.parent;
            // pipes can see the private services of the component
                        // pipes are always eager and classes!
            return createClass(compView.parent, viewParentEl(compView), !0, def.provider.value, def.provider.deps);
        }
        function createDirectiveInstance(view, def) {
            // components can see other private services, other directives can't.
            var instance = createClass(view, def.parent, (32768 /* Component */ & def.flags) > 0, def.provider.value, def.provider.deps);
            // directives are always eager and classes!
                        if (def.outputs.length) for (var i = 0; i < def.outputs.length; i++) {
                var output = def.outputs[i], outputObservable = instance[output.propName];
                if (!isObservable(outputObservable)) throw new Error("@Output " + output.propName + " not initialized in '" + instance.constructor.name + "'.");
                var subscription = outputObservable.subscribe(eventHandlerClosure(view, def.parent.nodeIndex, output.eventName));
                view.disposables[def.outputIndex + i] = subscription.unsubscribe.bind(subscription);
            }
            return instance;
        }
        function eventHandlerClosure(view, index, eventName) {
            return function(event) {
                return dispatchEvent(view, index, eventName, event);
            };
        }
        function _createProviderInstance$1(view, def) {
            // private services can see other private services
            var allowPrivateServices = (8192 /* PrivateProvider */ & def.flags) > 0, providerDef = def.provider;
            switch (201347067 /* Types */ & def.flags) {
              case 512 /* TypeClassProvider */ :
                return createClass(view, def.parent, allowPrivateServices, providerDef.value, providerDef.deps);

              case 1024 /* TypeFactoryProvider */ :
                return function(view, elDef, allowPrivateServices, factory, deps) {
                    var len = deps.length;
                    switch (len) {
                      case 0:
                        return factory();

                      case 1:
                        return factory(resolveDep(view, elDef, allowPrivateServices, deps[0]));

                      case 2:
                        return factory(resolveDep(view, elDef, allowPrivateServices, deps[0]), resolveDep(view, elDef, allowPrivateServices, deps[1]));

                      case 3:
                        return factory(resolveDep(view, elDef, allowPrivateServices, deps[0]), resolveDep(view, elDef, allowPrivateServices, deps[1]), resolveDep(view, elDef, allowPrivateServices, deps[2]));

                      default:
                        for (var depValues = Array(len), i = 0; i < len; i++) depValues[i] = resolveDep(view, elDef, allowPrivateServices, deps[i]);
                        return factory.apply(void 0, __spread(depValues));
                    }
                }
                // This default value is when checking the hierarchy for a token.
                //
                // It means both:
                // - the token is not provided by the current injector,
                // - only the element injectors should be checked (ie do not check module injectors
                //
                //          mod1
                //         /
                //       el1   mod2
                //         \  /
                //         el2
                //
                // When requesting el2.injector.get(token), we should check in the following order and return the
                // first found value:
                // - el2.injector.get(token, default)
                // - el1.injector.get(token, NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR) -> do not check the module
                // - mod2.injector.get(token, default)
                (view, def.parent, allowPrivateServices, providerDef.value, providerDef.deps);

              case 2048 /* TypeUseExistingProvider */ :
                return resolveDep(view, def.parent, allowPrivateServices, providerDef.deps[0]);

              case 256 /* TypeValueProvider */ :
                return providerDef.value;
            }
        }
        function createClass(view, elDef, allowPrivateServices, ctor, deps) {
            var len = deps.length;
            switch (len) {
              case 0:
                return new ctor();

              case 1:
                return new ctor(resolveDep(view, elDef, allowPrivateServices, deps[0]));

              case 2:
                return new ctor(resolveDep(view, elDef, allowPrivateServices, deps[0]), resolveDep(view, elDef, allowPrivateServices, deps[1]));

              case 3:
                return new ctor(resolveDep(view, elDef, allowPrivateServices, deps[0]), resolveDep(view, elDef, allowPrivateServices, deps[1]), resolveDep(view, elDef, allowPrivateServices, deps[2]));

              default:
                for (var depValues = new Array(len), i = 0; i < len; i++) depValues[i] = resolveDep(view, elDef, allowPrivateServices, deps[i]);
                return new (ctor.bind.apply(ctor, __spread([ void 0 ], depValues)))();
            }
        }
        var NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR = {};
        function resolveDep(view, elDef, allowPrivateServices, depDef, notFoundValue) {
            if (void 0 === notFoundValue && (notFoundValue = Injector.THROW_IF_NOT_FOUND), 8 /* Value */ & depDef.flags) return depDef.token;
            var startView = view;
            2 /* Optional */ & depDef.flags && (notFoundValue = null);
            var tokenKey$$1 = depDef.tokenKey;
            tokenKey$$1 === ChangeDetectorRefTokenKey && (
            // directives on the same element as a component should be able to control the change detector
            // of that component as well.
            allowPrivateServices = !(!elDef || !elDef.element.componentView)), elDef && 1 /* SkipSelf */ & depDef.flags && (allowPrivateServices = !1, 
            elDef = elDef.parent);
            for (var searchView = view; searchView; ) {
                if (elDef) switch (tokenKey$$1) {
                  case RendererV1TokenKey:
                    return createRendererV1(findCompView(searchView, elDef, allowPrivateServices));

                  case Renderer2TokenKey:
                    return findCompView(searchView, elDef, allowPrivateServices).renderer;

                  case ElementRefTokenKey:
                    return new ElementRef(asElementData(searchView, elDef.nodeIndex).renderElement);

                  case ViewContainerRefTokenKey:
                    return asElementData(searchView, elDef.nodeIndex).viewContainer;

                  case TemplateRefTokenKey:
                    if (elDef.element.template) return asElementData(searchView, elDef.nodeIndex).template;
                    break;

                  case ChangeDetectorRefTokenKey:
                    return createChangeDetectorRef(findCompView(searchView, elDef, allowPrivateServices));

                  case InjectorRefTokenKey$1:
                  case INJECTORRefTokenKey$1:
                    return createInjector$1(searchView, elDef);

                  default:
                    var providerDef_1 = (allowPrivateServices ? elDef.element.allProviders : elDef.element.publicProviders)[tokenKey$$1];
                    if (providerDef_1) {
                        var providerData = asProviderData(searchView, providerDef_1.nodeIndex);
                        return providerData || (providerData = {
                            instance: _createProviderInstance$1(searchView, providerDef_1)
                        }, searchView.nodes[providerDef_1.nodeIndex] = providerData), providerData.instance;
                    }
                }
                allowPrivateServices = isComponentView(searchView), elDef = viewParentEl(searchView), 
                searchView = searchView.parent, 4 /* Self */ & depDef.flags && (searchView = null);
            }
            var value = startView.root.injector.get(depDef.token, NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR);
            return value !== NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR || notFoundValue === NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR ? value : startView.root.ngModule.injector.get(depDef.token, notFoundValue);
        }
        function findCompView(view, elDef, allowPrivateServices) {
            var compView;
            if (allowPrivateServices) compView = asElementData(view, elDef.nodeIndex).componentView; else for (compView = view; compView.parent && !isComponentView(compView); ) compView = compView.parent;
            return compView;
        }
        function updateProp(view, providerData, def, bindingIdx, value, changes) {
            if (32768 /* Component */ & def.flags) {
                var compView = asElementData(view, def.parent.nodeIndex).componentView;
                2 /* OnPush */ & compView.def.flags && (compView.state |= 8 /* ChecksEnabled */);
            }
            if (
            // Note: This is still safe with Closure Compiler as
            // the user passed in the property name as an object has to `providerDef`,
            // so Closure Compiler will have renamed the property correctly already.
            providerData.instance[def.bindings[bindingIdx].name] = value, 524288 /* OnChanges */ & def.flags) {
                changes = changes || {};
                var oldValue = WrappedValue.unwrap(view.oldValues[def.bindingIndex + bindingIdx]);
                changes[def.bindings[bindingIdx].nonMinifiedName] = new SimpleChange(oldValue, value, 0 != (2 /* FirstCheck */ & view.state));
            }
            return view.oldValues[def.bindingIndex + bindingIdx] = value, changes;
        }
        // This function calls the ngAfterContentCheck, ngAfterContentInit,
        // ngAfterViewCheck, and ngAfterViewInit lifecycle hooks (depending on the node
        // flags in lifecycle). Unlike ngDoCheck, ngOnChanges and ngOnInit, which are
        // called during a pre-order traversal of the view tree (that is calling the
        // parent hooks before the child hooks) these events are sent in using a
        // post-order traversal of the tree (children before parents). This changes the
        // meaning of initIndex in the view state. For ngOnInit, initIndex tracks the
        // expected nodeIndex which a ngOnInit should be called. When sending
        // ngAfterContentInit and ngAfterViewInit it is the expected count of
        // ngAfterContentInit or ngAfterViewInit methods that have been called. This
        // ensure that despite being called recursively or after picking up after an
        // exception, the ngAfterContentInit or ngAfterViewInit will be called on the
        // correct nodes. Consider for example, the following (where E is an element
        // and D is a directive)
        //  Tree:       pre-order index  post-order index
        //    E1        0                6
        //      E2      1                1
        //       D3     2                0
        //      E4      3                5
        //       E5     4                4
        //        E6    5                2
        //        E7    6                3
        // As can be seen, the post-order index has an unclear relationship to the
        // pre-order index (postOrderIndex === preOrderIndex - parentCount +
        // childCount). Since number of calls to ngAfterContentInit and ngAfterViewInit
        // are stable (will be the same for the same view regardless of exceptions or
        // recursion) we just need to count them which will roughly correspond to the
        // post-order index (it skips elements and directives that do not have
        // lifecycle hooks).
        //
        // For example, if an exception is raised in the E6.onAfterViewInit() the
        // initIndex is left at 3 (by shouldCallLifecycleInitHook() which set it to
        // initIndex + 1). When checkAndUpdateView() is called again D3, E2 and E6 will
        // not have their ngAfterViewInit() called but, starting with E7, the rest of
        // the view will begin getting ngAfterViewInit() called until a check and
        // pass is complete.
        //
        // This algorthim also handles recursion. Consider if E4's ngAfterViewInit()
        // indirectly calls E1's ChangeDetectorRef.detectChanges(). The expected
        // initIndex is set to 6, the recusive checkAndUpdateView() starts walk again.
        // D3, E2, E6, E7, E5 and E4 are skipped, ngAfterViewInit() is called on E1.
        // When the recursion returns the initIndex will be 7 so E1 is skipped as it
        // has already been called in the recursively called checkAnUpdateView().
                function callLifecycleHooksChildrenFirst(view, lifecycles) {
            if (view.def.nodeFlags & lifecycles) for (var nodes = view.def.nodes, initIndex = 0, i = 0; i < nodes.length; i++) {
                var nodeDef = nodes[i], parent_1 = nodeDef.parent;
                for (!parent_1 && nodeDef.flags & lifecycles && 
                // matching root node (e.g. a pipe)
                callProviderLifecycles(view, i, nodeDef.flags & lifecycles, initIndex++), 0 == (nodeDef.childFlags & lifecycles) && (
                // no child matches one of the lifecycles
                i += nodeDef.childCount); parent_1 && 1 /* TypeElement */ & parent_1.flags && i === parent_1.nodeIndex + parent_1.childCount; ) 
                // last child of an element
                parent_1.directChildFlags & lifecycles && (initIndex = callElementProvidersLifecycles(view, parent_1, lifecycles, initIndex)), 
                parent_1 = parent_1.parent;
            }
        }
        function callElementProvidersLifecycles(view, elDef, lifecycles, initIndex) {
            for (var i = elDef.nodeIndex + 1; i <= elDef.nodeIndex + elDef.childCount; i++) {
                var nodeDef = view.def.nodes[i];
                nodeDef.flags & lifecycles && callProviderLifecycles(view, i, nodeDef.flags & lifecycles, initIndex++), 
                // only visit direct children
                i += nodeDef.childCount;
            }
            return initIndex;
        }
        function callProviderLifecycles(view, index, lifecycles, initIndex) {
            var providerData = asProviderData(view, index);
            if (providerData) {
                var provider = providerData.instance;
                provider && (Services.setCurrentNode(view, index), 1048576 /* AfterContentInit */ & lifecycles && shouldCallLifecycleInitHook(view, 512 /* InitState_CallingAfterContentInit */ , initIndex) && provider.ngAfterContentInit(), 
                2097152 /* AfterContentChecked */ & lifecycles && provider.ngAfterContentChecked(), 
                4194304 /* AfterViewInit */ & lifecycles && shouldCallLifecycleInitHook(view, 768 /* InitState_CallingAfterViewInit */ , initIndex) && provider.ngAfterViewInit(), 
                8388608 /* AfterViewChecked */ & lifecycles && provider.ngAfterViewChecked(), 131072 /* OnDestroy */ & lifecycles && provider.ngOnDestroy());
            }
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        
        /**
 * Default {@link RootContext} for all components rendered with {@link renderComponent}.
 */
        var SCHEDULER = /* */ new InjectionToken("SCHEDULER_TOKEN", {
            providedIn: "root",
            factory: function() {
                return defaultScheduler;
            }
        }), core_EventEmitter = /** @class */ /* */ function(_super) {
            /**
     * Creates an instance of this class that can
     * deliver events synchronously or asynchronously.
     *
     * @param isAsync When true, deliver events asynchronously.
     *
     */
            function EventEmitter(isAsync) {
                void 0 === isAsync && (isAsync = !1);
                var _this = _super.call(this) || this;
                return _this.__isAsync = isAsync, _this;
            }
            /**
     * Emits an event containing a given value.
     * @param value The value to emit.
     */            return __extends(EventEmitter, _super), EventEmitter.prototype.emit = function(value) {
                _super.prototype.next.call(this, value);
            }, 
            /**
     * Registers handlers for events emitted by this instance.
     * @param generatorOrNext When supplied, a custom handler for emitted events.
     * @param error When supplied, a custom handler for an error notification
     * from this emitter.
     * @param complete When supplied, a custom handler for a completion
     * notification from this emitter.
     */
            EventEmitter.prototype.subscribe = function(generatorOrNext, error, complete) {
                var schedulerFn, errorFn = function(err) {
                    return null;
                }, completeFn = function() {
                    return null;
                };
                generatorOrNext && "object" == typeof generatorOrNext ? (schedulerFn = this.__isAsync ? function(value) {
                    setTimeout(function() {
                        return generatorOrNext.next(value);
                    });
                } : function(value) {
                    generatorOrNext.next(value);
                }, generatorOrNext.error && (errorFn = this.__isAsync ? function(err) {
                    setTimeout(function() {
                        return generatorOrNext.error(err);
                    });
                } : function(err) {
                    generatorOrNext.error(err);
                }), generatorOrNext.complete && (completeFn = this.__isAsync ? function() {
                    setTimeout(function() {
                        return generatorOrNext.complete();
                    });
                } : function() {
                    generatorOrNext.complete();
                })) : (schedulerFn = this.__isAsync ? function(value) {
                    setTimeout(function() {
                        return generatorOrNext(value);
                    });
                } : function(value) {
                    generatorOrNext(value);
                }, error && (errorFn = this.__isAsync ? function(err) {
                    setTimeout(function() {
                        return error(err);
                    });
                } : function(err) {
                    error(err);
                }), complete && (completeFn = this.__isAsync ? function() {
                    setTimeout(function() {
                        return complete();
                    });
                } : function() {
                    complete();
                }));
                var sink = _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
                return generatorOrNext instanceof Subscription_Subscription && generatorOrNext.add(sink), 
                sink;
            }, EventEmitter;
        }(Subject_Subject), QueryList = /** @class */ /* */ function() {
            function QueryList() {
                this.dirty = !0, this._results = [], this.changes = new core_EventEmitter(), this.length = 0;
            }
            /**
     * See
     * [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
     */            return QueryList.prototype.map = function(fn) {
                return this._results.map(fn);
            }, 
            /**
     * See
     * [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
     */
            QueryList.prototype.filter = function(fn) {
                return this._results.filter(fn);
            }, 
            /**
     * See
     * [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
     */
            QueryList.prototype.find = function(fn) {
                return this._results.find(fn);
            }, 
            /**
     * See
     * [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
     */
            QueryList.prototype.reduce = function(fn, init) {
                return this._results.reduce(fn, init);
            }, 
            /**
     * See
     * [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
     */
            QueryList.prototype.forEach = function(fn) {
                this._results.forEach(fn);
            }, 
            /**
     * See
     * [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
     */
            QueryList.prototype.some = function(fn) {
                return this._results.some(fn);
            }, QueryList.prototype.toArray = function() {
                return this._results.slice();
            }, QueryList.prototype[core_getSymbolIterator()] = function() {
                return this._results[core_getSymbolIterator()]();
            }, QueryList.prototype.toString = function() {
                return this._results.toString();
            }, QueryList.prototype.reset = function(res) {
                this._results = function flatten$1(list) {
                    return list.reduce(function(flat, item) {
                        var flatItem = Array.isArray(item) ? flatten$1(item) : item;
                        return flat.concat(flatItem);
                    }, []);
                }
                /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
                /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
                /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ (res), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], 
                this.first = this._results[0];
            }, QueryList.prototype.notifyOnChanges = function() {
                this.changes.emit(this);
            }, 
            /** internal */
            QueryList.prototype.setDirty = function() {
                this.dirty = !0;
            }, 
            /** internal */
            QueryList.prototype.destroy = function() {
                this.changes.complete(), this.changes.unsubscribe();
            }, QueryList;
        }(), NgModuleFactoryLoader = /** @class */ /* */ function() {
            return function() {};
        }(), APP_INITIALIZER = /* */ new InjectionToken("Application Initializer"), ApplicationInitStatus = /** @class */ /* */ function() {
            function ApplicationInitStatus(appInits) {
                var _this = this;
                this.appInits = appInits, this.initialized = !1, this.done = !1, this.donePromise = new Promise(function(res, rej) {
                    _this.resolve = res, _this.reject = rej;
                });
            }
            /** @internal */            return ApplicationInitStatus.prototype.runInitializers = function() {
                var _this = this;
                if (!this.initialized) {
                    var asyncInitPromises = [], complete = function() {
                        _this.done = !0, _this.resolve();
                    };
                    if (this.appInits) for (var i = 0; i < this.appInits.length; i++) {
                        var initResult = this.appInits[i]();
                        core_isPromise(initResult) && asyncInitPromises.push(initResult);
                    }
                    Promise.all(asyncInitPromises).then(function() {
                        complete();
                    }).catch(function(e) {
                        _this.reject(e);
                    }), 0 === asyncInitPromises.length && complete(), this.initialized = !0;
                }
            }, ApplicationInitStatus;
        }(), APP_ID = /* */ new InjectionToken("AppId");
        /**
 * A change detection scheduler token for {@link RootContext}. This token is the default value used
 * for the default `RootContext` found in the {@link ROOT_CONTEXT} token.
 */        function _appIdRandomProviderFactory() {
            return "" + _randomChar() + _randomChar() + _randomChar();
        }
        /**
 * Providers that will generate a random APP_ID_TOKEN.
 * @publicApi
 */        function _randomChar() {
            return String.fromCharCode(97 + Math.floor(25 * Math.random()));
        }
        /**
 * A function that will be executed when a platform is initialized.
 * @publicApi
 */        var PLATFORM_INITIALIZER = /* */ new InjectionToken("Platform Initializer"), PLATFORM_ID = /* */ new InjectionToken("Platform ID"), APP_BOOTSTRAP_LISTENER = /* */ new InjectionToken("appBootstrapListener"), Console = /** @class */ /* */ function() {
            function Console() {}
            return Console.prototype.log = function(message) {
                // tslint:disable-next-line:no-console
                console.log(message);
            }, 
            // Note: for reporting errors use `DOM.logError()` as it is platform specific
            Console.prototype.warn = function(message) {
                // tslint:disable-next-line:no-console
                console.warn(message);
            }, Console;
        }();
        /**
 * A token that indicates an opaque platform id.
 * @publicApi
 */        function _throwError() {
            throw new Error("Runtime compiler is not loaded");
        }
        var trace, events, Compiler_compileModuleSync = _throwError, Compiler_compileModuleAsync = _throwError, Compiler_compileModuleAndAllComponentsSync = _throwError, Compiler_compileModuleAndAllComponentsAsync = _throwError, Compiler = /** @class */ /* */ function() {
            function Compiler() {
                /**
         * Compiles the given NgModule and all of its components. All templates of the components listed
         * in `entryComponents` have to be inlined.
         */
                this.compileModuleSync = Compiler_compileModuleSync, 
                /**
         * Compiles the given NgModule and all of its components
         */
                this.compileModuleAsync = Compiler_compileModuleAsync, 
                /**
         * Same as {@link #compileModuleSync} but also creates ComponentFactories for all components.
         */
                this.compileModuleAndAllComponentsSync = Compiler_compileModuleAndAllComponentsSync, 
                /**
         * Same as {@link #compileModuleAsync} but also creates ComponentFactories for all components.
         */
                this.compileModuleAndAllComponentsAsync = Compiler_compileModuleAndAllComponentsAsync;
            }
            /**
     * Clears all caches.
     */            return Compiler.prototype.clearCache = function() {}, 
            /**
     * Clears the cache for the given component/ngModule.
     */
            Compiler.prototype.clearCacheFor = function(type) {}, 
            /**
     * Returns the id for a given NgModule, if one is defined and known to the compiler.
     */
            Compiler.prototype.getModuleId = function(moduleType) {}, Compiler;
        }(), CompilerFactory = /** @class */ /* */ function() {
            return function() {};
        }();
        function detectWTF() {
            var wtf = _global /** TODO #9100 */ .wtf;
            return !(!wtf || !(trace = wtf.trace) || (events = trace.events, 0));
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * True if WTF is enabled.
 */
        var wtfEnabled = /* */ detectWTF();
        function noopScope(arg0, arg1) {
            return null;
        }
        /**
 * Create trace scope.
 *
 * Scopes must be strictly nested and are analogous to stack frames, but
 * do not have to follow the stack frames. Instead it is recommended that they follow logical
 * nesting. You may want to use
 * [Event
 * Signatures](http://google.github.io/tracing-framework/instrumenting-code.html#custom-events)
 * as they are defined in WTF.
 *
 * Used to mark scope entry. The return value is used to leave the scope.
 *
 *     var myScope = wtfCreateScope('MyClass#myMethod(ascii someVal)');
 *
 *     someMethod() {
 *        var s = myScope('Foo'); // 'Foo' gets stored in tracing UI
 *        // DO SOME WORK HERE
 *        return wtfLeave(s, 123); // Return value 123
 *     }
 *
 * Note, adding try-finally block around the work to ensure that `wtfLeave` gets called can
 * negatively impact the performance of your application. For this reason we recommend that
 * you don't add them to ensure that `wtfLeave` gets called. In production `wtfLeave` is a noop and
 * so try-finally block has no value. When debugging perf issues, skipping `wtfLeave`, do to
 * exception, will produce incorrect trace, but presence of exception signifies logic error which
 * needs to be fixed before the app should be profiled. Add try-finally only when you expect that
 * an exception is expected during normal execution while profiling.
 *
 * @publicApi
 */        var wtfCreateScope = wtfEnabled ? function(signature, flags) {
            return void 0 === flags && (flags = null), events.createScope(signature, flags);
        } : function(signature, flags) {
            return noopScope;
        }, wtfLeave = wtfEnabled ? function(scope, returnValue) {
            return trace.leaveScope(scope, returnValue), returnValue;
        } : function(s, r) {
            return r;
        }, core_promise = /* */ Promise.resolve(0);
        /**
 * Used to mark end of Scope.
 *
 * - `scope` to end.
 * - `returnValue` (optional) to be passed to the WTF.
 *
 * Returns the `returnValue for easy chaining.
 * @publicApi
 */        function scheduleMicroTask(fn) {
            "undefined" == typeof Zone ? 
            // use promise to schedule microTask instead of use Zone
            core_promise.then(function() {
                fn && fn.apply(null, null);
            }) : Zone.current.scheduleMicroTask("scheduleMicrotask", fn);
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * An injectable service for executing work inside or outside of the Angular zone.
 *
 * The most common use of this service is to optimize performance when starting a work consisting of
 * one or more asynchronous tasks that don't require UI updates or error handling to be handled by
 * Angular. Such tasks can be kicked off via {@link #runOutsideAngular} and if needed, these tasks
 * can reenter the Angular zone via {@link #run}.
 *
 * <!-- TODO: add/fix links to:
 *   - docs explaining zones and the use of zones in Angular and change-detection
 *   - link to runOutsideAngular/run (throughout this file!)
 *   -->
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Component, NgZone} from '@angular/core';
 * import {NgIf} from '@angular/common';
 *
 * @Component({
 *   selector: 'ng-zone-demo',
 *   template: `
 *     <h2>Demo: NgZone</h2>
 *
 *     <p>Progress: {{progress}}%</p>
 *     <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>
 *
 *     <button (click)="processWithinAngularZone()">Process within Angular zone</button>
 *     <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
 *   `,
 * })
 * export class NgZoneDemo {
 *   progress: number = 0;
 *   label: string;
 *
 *   constructor(private _ngZone: NgZone) {}
 *
 *   // Loop inside the Angular zone
 *   // so the UI DOES refresh after each setTimeout cycle
 *   processWithinAngularZone() {
 *     this.label = 'inside';
 *     this.progress = 0;
 *     this._increaseProgress(() => console.log('Inside Done!'));
 *   }
 *
 *   // Loop outside of the Angular zone
 *   // so the UI DOES NOT refresh after each setTimeout cycle
 *   processOutsideOfAngularZone() {
 *     this.label = 'outside';
 *     this.progress = 0;
 *     this._ngZone.runOutsideAngular(() => {
 *       this._increaseProgress(() => {
 *         // reenter the Angular zone and display done
 *         this._ngZone.run(() => { console.log('Outside Done!'); });
 *       });
 *     });
 *   }
 *
 *   _increaseProgress(doneCallback: () => void) {
 *     this.progress += 1;
 *     console.log(`Current progress: ${this.progress}%`);
 *
 *     if (this.progress < 100) {
 *       window.setTimeout(() => this._increaseProgress(doneCallback), 10);
 *     } else {
 *       doneCallback();
 *     }
 *   }
 * }
 * ```
 *
 * @publicApi
 */        var NgZone = /** @class */ /* */ function() {
            function NgZone(_a) {
                var zone, _b = _a.enableLongStackTrace, enableLongStackTrace = void 0 !== _b && _b;
                if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, 
                /**
         * Whether there are no outstanding microtasks or macrotasks.
         */
                this.isStable = !0, 
                /**
         * Notifies when code enters Angular Zone. This gets fired first on VM Turn.
         */
                this.onUnstable = new core_EventEmitter(!1), 
                /**
         * Notifies when there is no more microtasks enqueued in the current VM Turn.
         * This is a hint for Angular to do change detection, which may enqueue more microtasks.
         * For this reason this event can fire multiple times per VM Turn.
         */
                this.onMicrotaskEmpty = new core_EventEmitter(!1), 
                /**
         * Notifies when the last `onMicrotaskEmpty` has run and there are no more microtasks, which
         * implies we are about to relinquish VM turn.
         * This event gets called just once.
         */
                this.onStable = new core_EventEmitter(!1), 
                /**
         * Notifies that an error has been delivered.
         */
                this.onError = new core_EventEmitter(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, 
                Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())), 
                enableLongStackTrace && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), 
                (zone = this)._inner = zone._inner.fork({
                    name: "angular",
                    properties: {
                        isAngularZone: !0
                    },
                    onInvokeTask: function(delegate, current, target, task, applyThis, applyArgs) {
                        try {
                            return onEnter(zone), delegate.invokeTask(target, task, applyThis, applyArgs);
                        } finally {
                            onLeave(zone);
                        }
                    },
                    onInvoke: function(delegate, current, target, callback, applyThis, applyArgs, source) {
                        try {
                            return onEnter(zone), delegate.invoke(target, callback, applyThis, applyArgs, source);
                        } finally {
                            onLeave(zone);
                        }
                    },
                    onHasTask: function(delegate, current, target, hasTaskState) {
                        delegate.hasTask(target, hasTaskState), current === target && (
                        // We are only interested in hasTask events which originate from our zone
                        // (A child hasTask event is not interesting to us)
                        "microTask" == hasTaskState.change ? (zone.hasPendingMicrotasks = hasTaskState.microTask, 
                        checkStable(zone)) : "macroTask" == hasTaskState.change && (zone.hasPendingMacrotasks = hasTaskState.macroTask));
                    },
                    onHandleError: function(delegate, current, target, error) {
                        return delegate.handleError(target, error), zone.runOutsideAngular(function() {
                            return zone.onError.emit(error);
                        }), !1;
                    }
                });
            }
            return NgZone.isInAngularZone = function() {
                return !0 === Zone.current.get("isAngularZone");
            }, NgZone.assertInAngularZone = function() {
                if (!NgZone.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!");
            }, NgZone.assertNotInAngularZone = function() {
                if (NgZone.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!");
            }, 
            /**
     * Executes the `fn` function synchronously within the Angular zone and returns value returned by
     * the function.
     *
     * Running functions via `run` allows you to reenter Angular zone from a task that was executed
     * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
     *
     * Any future tasks or microtasks scheduled from within this function will continue executing from
     * within the Angular zone.
     *
     * If a synchronous error happens it will be rethrown and not reported via `onError`.
     */
            NgZone.prototype.run = function(fn, applyThis, applyArgs) {
                return this._inner.run(fn, applyThis, applyArgs);
            }, 
            /**
     * Executes the `fn` function synchronously within the Angular zone as a task and returns value
     * returned by the function.
     *
     * Running functions via `run` allows you to reenter Angular zone from a task that was executed
     * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
     *
     * Any future tasks or microtasks scheduled from within this function will continue executing from
     * within the Angular zone.
     *
     * If a synchronous error happens it will be rethrown and not reported via `onError`.
     */
            NgZone.prototype.runTask = function(fn, applyThis, applyArgs, name) {
                var zone = this._inner, task = zone.scheduleEventTask("NgZoneEvent: " + name, fn, EMPTY_PAYLOAD, noop$1, noop$1);
                try {
                    return zone.runTask(task, applyThis, applyArgs);
                } finally {
                    zone.cancelTask(task);
                }
            }, 
            /**
     * Same as `run`, except that synchronous errors are caught and forwarded via `onError` and not
     * rethrown.
     */
            NgZone.prototype.runGuarded = function(fn, applyThis, applyArgs) {
                return this._inner.runGuarded(fn, applyThis, applyArgs);
            }, 
            /**
     * Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
     * the function.
     *
     * Running functions via {@link #runOutsideAngular} allows you to escape Angular's zone and do
     * work that
     * doesn't trigger Angular change-detection or is subject to Angular's error handling.
     *
     * Any future tasks or microtasks scheduled from within this function will continue executing from
     * outside of the Angular zone.
     *
     * Use {@link #run} to reenter the Angular zone and do work that updates the application model.
     */
            NgZone.prototype.runOutsideAngular = function(fn) {
                return this._outer.run(fn);
            }, NgZone;
        }();
        function noop$1() {}
        var EMPTY_PAYLOAD = {};
        function checkStable(zone) {
            if (0 == zone._nesting && !zone.hasPendingMicrotasks && !zone.isStable) try {
                zone._nesting++, zone.onMicrotaskEmpty.emit(null);
            } finally {
                if (zone._nesting--, !zone.hasPendingMicrotasks) try {
                    zone.runOutsideAngular(function() {
                        return zone.onStable.emit(null);
                    });
                } finally {
                    zone.isStable = !0;
                }
            }
        }
        function onEnter(zone) {
            zone._nesting++, zone.isStable && (zone.isStable = !1, zone.onUnstable.emit(null));
        }
        function onLeave(zone) {
            zone._nesting--, checkStable(zone);
        }
        /**
 * Provides a noop implementation of `NgZone` which does nothing. This zone requires explicit calls
 * to framework to perform rendering.
 */        var _platform, NoopNgZone = /** @class */ /* */ function() {
            function NoopNgZone() {
                this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, 
                this.onUnstable = new core_EventEmitter(), this.onMicrotaskEmpty = new core_EventEmitter(), 
                this.onStable = new core_EventEmitter(), this.onError = new core_EventEmitter();
            }
            return NoopNgZone.prototype.run = function(fn) {
                return fn();
            }, NoopNgZone.prototype.runGuarded = function(fn) {
                return fn();
            }, NoopNgZone.prototype.runOutsideAngular = function(fn) {
                return fn();
            }, NoopNgZone.prototype.runTask = function(fn) {
                return fn();
            }, NoopNgZone;
        }(), Testability = /** @class */ /* */ function() {
            function Testability(_ngZone) {
                var _this = this;
                this._ngZone = _ngZone, this._pendingCount = 0, this._isZoneStable = !0, 
                /**
         * Whether any work was done since the last 'whenStable' callback. This is
         * useful to detect if this could have potentially destabilized another
         * component while it is stabilizing.
         * @internal
         */
                this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), 
                _ngZone.run(function() {
                    _this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone");
                });
            }
            return Testability.prototype._watchAngularEvents = function() {
                var _this = this;
                this._ngZone.onUnstable.subscribe({
                    next: function() {
                        _this._didWork = !0, _this._isZoneStable = !1;
                    }
                }), this._ngZone.runOutsideAngular(function() {
                    _this._ngZone.onStable.subscribe({
                        next: function() {
                            NgZone.assertNotInAngularZone(), scheduleMicroTask(function() {
                                _this._isZoneStable = !0, _this._runCallbacksIfReady();
                            });
                        }
                    });
                });
            }, 
            /**
     * Increases the number of pending request
     * @deprecated pending requests are now tracked with zones.
     */
            Testability.prototype.increasePendingRequestCount = function() {
                return this._pendingCount += 1, this._didWork = !0, this._pendingCount;
            }, 
            /**
     * Decreases the number of pending request
     * @deprecated pending requests are now tracked with zones
     */
            Testability.prototype.decreasePendingRequestCount = function() {
                if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                return this._runCallbacksIfReady(), this._pendingCount;
            }, 
            /**
     * Whether an associated application is stable
     */
            Testability.prototype.isStable = function() {
                return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
            }, Testability.prototype._runCallbacksIfReady = function() {
                var _this = this;
                if (this.isStable()) 
                // Schedules the call backs in a new frame so that it is always async.
                scheduleMicroTask(function() {
                    for (;0 !== _this._callbacks.length; ) {
                        var cb = _this._callbacks.pop();
                        clearTimeout(cb.timeoutId), cb.doneCb(_this._didWork);
                    }
                    _this._didWork = !1;
                }); else {
                    // Still not stable, send updates.
                    var pending_1 = this.getPendingTasks();
                    this._callbacks = this._callbacks.filter(function(cb) {
                        return !cb.updateCb || !cb.updateCb(pending_1) || (clearTimeout(cb.timeoutId), !1);
                    }), this._didWork = !0;
                }
            }, Testability.prototype.getPendingTasks = function() {
                return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(function(t) {
                    return {
                        source: t.source,
                        // From TaskTrackingZone:
                        // https://github.com/angular/zone.js/blob/master/lib/zone-spec/task-tracking.ts#L40
                        creationLocation: t.creationLocation,
                        data: t.data
                    };
                }) : [];
                // Copy the tasks data so that we don't leak tasks.
                        }, Testability.prototype.addCallback = function(cb, timeout, updateCb) {
                var _this = this, timeoutId = -1;
                timeout && timeout > 0 && (timeoutId = setTimeout(function() {
                    _this._callbacks = _this._callbacks.filter(function(cb) {
                        return cb.timeoutId !== timeoutId;
                    }), cb(_this._didWork, _this.getPendingTasks());
                }, timeout)), this._callbacks.push({
                    doneCb: cb,
                    timeoutId: timeoutId,
                    updateCb: updateCb
                });
            }, 
            /**
     * Wait for the application to be stable with a timeout. If the timeout is reached before that
     * happens, the callback receives a list of the macro tasks that were pending, otherwise null.
     *
     * @param doneCb The callback to invoke when Angular is stable or the timeout expires
     *    whichever comes first.
     * @param timeout Optional. The maximum time to wait for Angular to become stable. If not
     *    specified, whenStable() will wait forever.
     * @param updateCb Optional. If specified, this callback will be invoked whenever the set of
     *    pending macrotasks changes. If this callback returns true doneCb will not be invoked
     *    and no further updates will be issued.
     */
            Testability.prototype.whenStable = function(doneCb, timeout, updateCb) {
                if (updateCb && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                // These arguments are 'Function' above to keep the public API simple.
                                this.addCallback(doneCb, timeout, updateCb), this._runCallbacksIfReady();
            }, 
            /**
     * Get the number of pending requests
     * @deprecated pending requests are now tracked with zones
     */
            Testability.prototype.getPendingRequestCount = function() {
                return this._pendingCount;
            }, 
            /**
     * Find providers by name
     * @param using The root element to search from
     * @param provider The name of binding variable
     * @param exactMatch Whether using exactMatch
     */
            Testability.prototype.findProviders = function(using, provider, exactMatch) {
                // TODO(juliemr): implement.
                return [];
            }, Testability;
        }(), core_TestabilityRegistry = /** @class */ /* */ function() {
            function TestabilityRegistry() {
                /** @internal */
                this._applications = new Map(), _testabilityGetter.addToWindow(this);
            }
            /**
     * Registers an application with a testability hook so that it can be tracked
     * @param token token of application, root element
     * @param testability Testability hook
     */            return TestabilityRegistry.prototype.registerApplication = function(token, testability) {
                this._applications.set(token, testability);
            }, 
            /**
     * Unregisters an application.
     * @param token token of application, root element
     */
            TestabilityRegistry.prototype.unregisterApplication = function(token) {
                this._applications.delete(token);
            }, 
            /**
     * Unregisters all applications
     */
            TestabilityRegistry.prototype.unregisterAllApplications = function() {
                this._applications.clear();
            }, 
            /**
     * Get a testability hook associated with the application
     * @param elem root element
     */
            TestabilityRegistry.prototype.getTestability = function(elem) {
                return this._applications.get(elem) || null;
            }, 
            /**
     * Get all registered testabilities
     */
            TestabilityRegistry.prototype.getAllTestabilities = function() {
                return Array.from(this._applications.values());
            }, 
            /**
     * Get all registered applications(root elements)
     */
            TestabilityRegistry.prototype.getAllRootElements = function() {
                return Array.from(this._applications.keys());
            }, 
            /**
     * Find testability of a node in the Tree
     * @param elem node
     * @param findInAncestors whether finding testability in ancestors if testability was not found in
     * current node
     */
            TestabilityRegistry.prototype.findTestabilityInTree = function(elem, findInAncestors) {
                return void 0 === findInAncestors && (findInAncestors = !0), _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors);
            }, __decorate([ __metadata("design:paramtypes", []) ], TestabilityRegistry);
        }(), _testabilityGetter = /* */ new (/** @class */ /* */ function() {
            function _NoopGetTestability() {}
            return _NoopGetTestability.prototype.addToWindow = function(registry) {}, _NoopGetTestability.prototype.findTestabilityInTree = function(registry, elem, findInAncestors) {
                return null;
            }, _NoopGetTestability;
        }())(), ALLOW_MULTIPLE_PLATFORMS = /* */ new InjectionToken("AllowMultipleToken"), NgProbeToken = /** @class */ /* */ function() {
            return function(name, token) {
                this.name = name, this.token = token;
            };
        }();
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * The Testability service provides testing hooks that can be accessed from
 * the browser and by services such as Protractor. Each bootstrapped Angular
 * application on the page will have an instance of Testability.
 * @publicApi
 */        
        /**
 * Creates a factory for a platform
 *
 * @publicApi
 */
        function createPlatformFactory(parentPlatformFactory, name, providers) {
            void 0 === providers && (providers = []);
            var desc = "Platform: " + name, marker = new InjectionToken(desc);
            return function(extraProviders) {
                void 0 === extraProviders && (extraProviders = []);
                var platform = getPlatform();
                if (!platform || platform.injector.get(ALLOW_MULTIPLE_PLATFORMS, !1)) if (parentPlatformFactory) parentPlatformFactory(providers.concat(extraProviders).concat({
                    provide: marker,
                    useValue: !0
                })); else {
                    var injectedProviders = providers.concat(extraProviders).concat({
                        provide: marker,
                        useValue: !0
                    });
                    !
                    /**
 * Creates a platform.
 * Platforms have to be eagerly created via this function.
 *
 * @publicApi
 */
                    function(injector) {
                        if (_platform && !_platform.destroyed && !_platform.injector.get(ALLOW_MULTIPLE_PLATFORMS, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                        _platform = injector.get(PlatformRef);
                        var inits = injector.get(PLATFORM_INITIALIZER, null);
                        inits && inits.forEach(function(init) {
                            return init();
                        });
                    }(Injector.create({
                        providers: injectedProviders,
                        name: desc
                    }));
                }
                return 
                /**
 * Checks that there currently is a platform which contains the given token as a provider.
 *
 * @publicApi
 */
                function(requiredToken) {
                    var platform = getPlatform();
                    if (!platform) throw new Error("No platform exists!");
                    if (!platform.injector.get(requiredToken, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                    return platform;
                }
                /**
 * Destroy the existing platform.
 *
 * @publicApi
 */ (marker);
            };
        }
        /**
 * Returns the current platform.
 *
 * @publicApi
 */
        function getPlatform() {
            return _platform && !_platform.destroyed ? _platform : null;
        }
        /**
 * The Angular platform is the entry point for Angular on a web page. Each page
 * has exactly one platform, and services (such as reflection) which are common
 * to every Angular application running on the page are bound in its scope.
 *
 * A page's platform is initialized implicitly when a platform is created via a platform factory
 * (e.g. {@link platformBrowser}), or explicitly by calling the {@link createPlatform} function.
 *
 * @publicApi
 */        var PlatformRef = /** @class */ /* */ function() {
            /** @internal */
            function PlatformRef(_injector) {
                this._injector = _injector, this._modules = [], this._destroyListeners = [], this._destroyed = !1;
            }
            /**
     * Creates an instance of an `@NgModule` for the given platform
     * for offline compilation.
     *
     * @usageNotes
     * ### Simple Example
     *
     * ```typescript
     * my_module.ts:
     *
     * @NgModule({
     *   imports: [BrowserModule]
     * })
     * class MyModule {}
     *
     * main.ts:
     * import {MyModuleNgFactory} from './my_module.ngfactory';
     * import {platformBrowser} from '@angular/platform-browser';
     *
     * let moduleRef = platformBrowser().bootstrapModuleFactory(MyModuleNgFactory);
     * ```
     */            return PlatformRef.prototype.bootstrapModuleFactory = function(moduleFactory, options) {
                var ngZoneOption, _this = this, ngZone = "noop" === (ngZoneOption = options ? options.ngZone : void 0) ? new NoopNgZone() : ("zone.js" === ngZoneOption ? void 0 : ngZoneOption) || new NgZone({
                    enableLongStackTrace: isDevMode()
                }), providers = [ {
                    provide: NgZone,
                    useValue: ngZone
                } ];
                // Note: We need to create the NgZone _before_ we instantiate the module,
                // as instantiating the module creates some providers eagerly.
                // So we create a mini parent injector that just contains the new NgZone and
                // pass that as parent to the NgModuleFactory.
                                // Attention: Don't use ApplicationRef.run here,
                // as we want to be sure that all possible constructor calls are inside `ngZone.run`!
                return ngZone.run(function() {
                    var ngZoneInjector = Injector.create({
                        providers: providers,
                        parent: _this.injector,
                        name: moduleFactory.moduleType.name
                    }), moduleRef = moduleFactory.create(ngZoneInjector), exceptionHandler = moduleRef.injector.get(ErrorHandler, null);
                    if (!exceptionHandler) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                    return moduleRef.onDestroy(function() {
                        return remove(_this._modules, moduleRef);
                    }), ngZone.runOutsideAngular(function() {
                        return ngZone.onError.subscribe({
                            next: function(error) {
                                exceptionHandler.handleError(error);
                            }
                        });
                    }), function(errorHandler, ngZone, callback) {
                        try {
                            var result = ((initStatus = moduleRef.injector.get(ApplicationInitStatus)).runInitializers(), 
                            initStatus.donePromise.then(function() {
                                return _this._moduleDoBootstrap(moduleRef), moduleRef;
                            }));
                            return core_isPromise(result) ? result.catch(function(e) {
                                // rethrow as the exception handler might not do it
                                throw ngZone.runOutsideAngular(function() {
                                    return errorHandler.handleError(e);
                                }), e;
                            }) : result;
                        } catch (e) {
                            // rethrow as the exception handler might not do it
                            throw ngZone.runOutsideAngular(function() {
                                return errorHandler.handleError(e);
                            }), e;
                        }
                        var initStatus;
                    }(exceptionHandler, ngZone);
                });
            }, 
            /**
     * Creates an instance of an `@NgModule` for a given platform using the given runtime compiler.
     *
     * @usageNotes
     * ### Simple Example
     *
     * ```typescript
     * @NgModule({
     *   imports: [BrowserModule]
     * })
     * class MyModule {}
     *
     * let moduleRef = platformBrowser().bootstrapModule(MyModule);
     * ```
     *
     */
            PlatformRef.prototype.bootstrapModule = function(moduleType, compilerOptions) {
                var _this = this;
                void 0 === compilerOptions && (compilerOptions = []);
                var options = optionsReducer({}, compilerOptions);
                return function(injector, options, moduleType) {
                    return injector.get(CompilerFactory).createCompiler([ options ]).compileModuleAsync(moduleType);
                }(this.injector, options, moduleType).then(function(moduleFactory) {
                    return _this.bootstrapModuleFactory(moduleFactory, options);
                });
            }, PlatformRef.prototype._moduleDoBootstrap = function(moduleRef) {
                var appRef = moduleRef.injector.get(core_ApplicationRef);
                if (moduleRef._bootstrapComponents.length > 0) moduleRef._bootstrapComponents.forEach(function(f) {
                    return appRef.bootstrap(f);
                }); else {
                    if (!moduleRef.instance.ngDoBootstrap) throw new Error("The module " + stringify(moduleRef.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');
                    moduleRef.instance.ngDoBootstrap(appRef);
                }
                this._modules.push(moduleRef);
            }, 
            /**
     * Register a listener to be called when the platform is disposed.
     */
            PlatformRef.prototype.onDestroy = function(callback) {
                this._destroyListeners.push(callback);
            }, Object.defineProperty(PlatformRef.prototype, "injector", {
                /**
         * Retrieve the platform {@link Injector}, which is the parent injector for
         * every Angular application on the page and provides singleton providers.
         */
                get: function() {
                    return this._injector;
                },
                enumerable: !0,
                configurable: !0
            }), 
            /**
     * Destroy the Angular platform and all Angular applications on the page.
     */
            PlatformRef.prototype.destroy = function() {
                if (this._destroyed) throw new Error("The platform has already been destroyed!");
                this._modules.slice().forEach(function(module) {
                    return module.destroy();
                }), this._destroyListeners.forEach(function(listener) {
                    return listener();
                }), this._destroyed = !0;
            }, Object.defineProperty(PlatformRef.prototype, "destroyed", {
                get: function() {
                    return this._destroyed;
                },
                enumerable: !0,
                configurable: !0
            }), PlatformRef;
        }();
        function optionsReducer(dst, objs) {
            return Array.isArray(objs) ? objs.reduce(optionsReducer, dst) : __assign({}, dst, objs);
        }
        /**
 * A reference to an Angular application running on a page.
 *
 * @publicApi
 */        var core_ApplicationRef = /** @class */ /* */ function() {
            /** @internal */
            function ApplicationRef(_zone, _console, _injector, _exceptionHandler, _componentFactoryResolver, _initStatus) {
                var _this = this;
                this._zone = _zone, this._console = _console, this._injector = _injector, this._exceptionHandler = _exceptionHandler, 
                this._componentFactoryResolver = _componentFactoryResolver, this._initStatus = _initStatus, 
                this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, 
                this._stable = !0, 
                /**
         * Get a list of component types registered to this application.
         * This list is populated even before the component is created.
         */
                this.componentTypes = [], 
                /**
         * Get a list of components registered to this application.
         */
                this.components = [], this._enforceNoNewChanges = isDevMode(), this._zone.onMicrotaskEmpty.subscribe({
                    next: function() {
                        _this._zone.run(function() {
                            _this.tick();
                        });
                    }
                });
                var isCurrentlyStable = new Observable_Observable(function(observer) {
                    _this._stable = _this._zone.isStable && !_this._zone.hasPendingMacrotasks && !_this._zone.hasPendingMicrotasks, 
                    _this._zone.runOutsideAngular(function() {
                        observer.next(_this._stable), observer.complete();
                    });
                }), isStable = new Observable_Observable(function(observer) {
                    // Create the subscription to onStable outside the Angular Zone so that
                    // the callback is run outside the Angular Zone.
                    var stableSub;
                    _this._zone.runOutsideAngular(function() {
                        stableSub = _this._zone.onStable.subscribe(function() {
                            NgZone.assertNotInAngularZone(), 
                            // Check whether there are no pending macro/micro tasks in the next tick
                            // to allow for NgZone to update the state.
                            scheduleMicroTask(function() {
                                _this._stable || _this._zone.hasPendingMacrotasks || _this._zone.hasPendingMicrotasks || (_this._stable = !0, 
                                observer.next(!0));
                            });
                        });
                    });
                    var unstableSub = _this._zone.onUnstable.subscribe(function() {
                        NgZone.assertInAngularZone(), _this._stable && (_this._stable = !1, _this._zone.runOutsideAngular(function() {
                            observer.next(!1);
                        }));
                    });
                    return function() {
                        stableSub.unsubscribe(), unstableSub.unsubscribe();
                    };
                });
                this.isStable = function() {
                    for (var observables = [], _i = 0; _i < arguments.length; _i++) observables[_i] = arguments[_i];
                    var concurrent = Number.POSITIVE_INFINITY, scheduler = null, last = observables[observables.length - 1];
                    return isScheduler(last) ? (scheduler = observables.pop(), observables.length > 1 && "number" == typeof observables[observables.length - 1] && (concurrent = observables.pop())) : "number" == typeof last && (concurrent = observables.pop()), 
                    null === scheduler && 1 === observables.length && observables[0] instanceof Observable_Observable ? observables[0] : mergeAll(concurrent)(fromArray(observables, scheduler));
                }(isCurrentlyStable, isStable.pipe(function(source) {
                    return refCount()((subjectOrSubjectFactory = shareSubjectFactory, function(source) {
                        var subjectFactory;
                        subjectFactory = "function" == typeof subjectOrSubjectFactory ? subjectOrSubjectFactory : function() {
                            return subjectOrSubjectFactory;
                        };
                        var connectable = Object.create(source, connectableObservableDescriptor);
                        return connectable.source = source, connectable.subjectFactory = subjectFactory, 
                        connectable;
                    })(source));
                    // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/multicast.js
                    /** PURE_IMPORTS_START _observable_ConnectableObservable PURE_IMPORTS_END */
                    var subjectOrSubjectFactory;
                }));
            }
            var ApplicationRef_1;
            /** @internal */            return ApplicationRef_1 = ApplicationRef, 
            /**
     * Bootstrap a new component at the root level of the application.
     *
     * @usageNotes
     * ### Bootstrap process
     *
     * When bootstrapping a new root component into an application, Angular mounts the
     * specified application component onto DOM elements identified by the componentType's
     * selector and kicks off automatic change detection to finish initializing the component.
     *
     * Optionally, a component can be mounted onto a DOM element that does not match the
     * componentType's selector.
     *
     * ### Example
     * {@example core/ts/platform/platform.ts region='longform'}
     */
            ApplicationRef.prototype.bootstrap = function(componentOrFactory, rootSelectorOrNode) {
                var componentFactory, _this = this;
                if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                componentFactory = componentOrFactory instanceof ComponentFactory ? componentOrFactory : this._componentFactoryResolver.resolveComponentFactory(componentOrFactory), 
                this.componentTypes.push(componentFactory.componentType);
                // Create a factory associated with the current module if it's not bound to some other
                var ngModule = componentFactory instanceof core_ComponentFactoryBoundToModule ? null : this._injector.get(NgModuleRef), compRef = componentFactory.create(Injector.NULL, [], rootSelectorOrNode || componentFactory.selector, ngModule);
                compRef.onDestroy(function() {
                    _this._unloadComponent(compRef);
                });
                var testability = compRef.injector.get(Testability, null);
                return testability && compRef.injector.get(core_TestabilityRegistry).registerApplication(compRef.location.nativeElement, testability), 
                this._loadComponent(compRef), isDevMode() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), 
                compRef;
            }, 
            /**
     * Invoke this method to explicitly process change detection and its side-effects.
     *
     * In development mode, `tick()` also performs a second change detection cycle to ensure that no
     * further changes are detected. If additional changes are picked up during this second cycle,
     * bindings in the app have side-effects that cannot be resolved in a single change detection
     * pass.
     * In this case, Angular throws an error, since an Angular application can only have one change
     * detection pass during which all change detection must complete.
     */
            ApplicationRef.prototype.tick = function() {
                var _this = this;
                if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                var scope = ApplicationRef_1._tickScope();
                try {
                    this._runningTick = !0, this._views.forEach(function(view) {
                        return view.detectChanges();
                    }), this._enforceNoNewChanges && this._views.forEach(function(view) {
                        return view.checkNoChanges();
                    });
                } catch (e) {
                    // Attention: Don't rethrow as it could cancel subscriptions to Observables!
                    this._zone.runOutsideAngular(function() {
                        return _this._exceptionHandler.handleError(e);
                    });
                } finally {
                    this._runningTick = !1, wtfLeave(scope);
                }
            }, 
            /**
     * Attaches a view so that it will be dirty checked.
     * The view will be automatically detached when it is destroyed.
     * This will throw if the view is already attached to a ViewContainer.
     */
            ApplicationRef.prototype.attachView = function(viewRef) {
                var view = viewRef;
                this._views.push(view), view.attachToAppRef(this);
            }, 
            /**
     * Detaches a view from dirty checking again.
     */
            ApplicationRef.prototype.detachView = function(viewRef) {
                var view = viewRef;
                remove(this._views, view), view.detachFromAppRef();
            }, ApplicationRef.prototype._loadComponent = function(componentRef) {
                this.attachView(componentRef.hostView), this.tick(), this.components.push(componentRef), 
                this._injector.get(APP_BOOTSTRAP_LISTENER, []).concat(this._bootstrapListeners).forEach(function(listener) {
                    return listener(componentRef);
                });
            }, ApplicationRef.prototype._unloadComponent = function(componentRef) {
                this.detachView(componentRef.hostView), remove(this.components, componentRef);
            }, 
            /** @internal */
            ApplicationRef.prototype.ngOnDestroy = function() {
                // TODO(alxhub): Dispose of the NgZone.
                this._views.slice().forEach(function(view) {
                    return view.destroy();
                });
            }, Object.defineProperty(ApplicationRef.prototype, "viewCount", {
                /**
         * Returns the number of attached views.
         */
                get: function() {
                    return this._views.length;
                },
                enumerable: !0,
                configurable: !0
            }), ApplicationRef._tickScope = wtfCreateScope("ApplicationRef#tick()"), ApplicationRef;
        }();
        function remove(list, el) {
            var index = list.indexOf(el);
            index > -1 && list.splice(index, 1);
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        var SystemJsNgModuleLoaderConfig = /** @class */ /* */ function() {
            return function() {};
        }(), DEFAULT_CONFIG = {
            factoryPathPrefix: "",
            factoryPathSuffix: ".ngfactory"
        }, core_SystemJsNgModuleLoader = /** @class */ /* */ function() {
            function SystemJsNgModuleLoader(_compiler, config) {
                this._compiler = _compiler, this._config = config || DEFAULT_CONFIG;
            }
            return SystemJsNgModuleLoader.prototype.load = function(path) {
                return this._compiler instanceof Compiler ? this.loadFactory(path) : this.loadAndCompile(path);
            }, SystemJsNgModuleLoader.prototype.loadAndCompile = function(path) {
                var _this = this, _a = __read(path.split("#"), 2), module = _a[0], exportName = _a[1];
                return void 0 === exportName && (exportName = "default"), __webpack_require__("crnd")(module).then(function(module) {
                    return module[exportName];
                }).then(function(type) {
                    return checkNotEmpty(type, module, exportName);
                }).then(function(type) {
                    return _this._compiler.compileModuleAsync(type);
                });
            }, SystemJsNgModuleLoader.prototype.loadFactory = function(path) {
                var _a = __read(path.split("#"), 2), module = _a[0], exportName = _a[1], factoryClassSuffix = "NgFactory";
                return void 0 === exportName && (exportName = "default", factoryClassSuffix = ""), 
                __webpack_require__("crnd")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix).then(function(module) {
                    return module[exportName + factoryClassSuffix];
                }).then(function(factory) {
                    return checkNotEmpty(factory, module, exportName);
                });
            }, SystemJsNgModuleLoader;
        }();
        function checkNotEmpty(value, modulePath, exportName) {
            if (!value) throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
            return value;
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * Represents an Angular [view](guide/glossary#view),
 * specifically the [host view](guide/glossary#view-tree) that is defined by a component.
 * Also serves as the base class
 * that adds destroy methods for [embedded views](guide/glossary#view-tree).
 *
 * @see `EmbeddedViewRef`
 *
 * @publicApi
 */        var EventListener = /** @class */ /* */ function() {
            return function(name, callback) {
                this.name = name, this.callback = callback;
            };
        }(), DebugNode__PRE_R3__ = /** @class */ /* */ function() {
            function DebugNode__PRE_R3__(nativeNode, parent, _debugContext) {
                this.listeners = [], this.parent = null, this._debugContext = _debugContext, this.nativeNode = nativeNode, 
                parent && parent instanceof core_DebugElement_PRE_R3_ && parent.addChild(this);
            }
            return Object.defineProperty(DebugNode__PRE_R3__.prototype, "injector", {
                get: function() {
                    return this._debugContext.injector;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(DebugNode__PRE_R3__.prototype, "componentInstance", {
                get: function() {
                    return this._debugContext.component;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(DebugNode__PRE_R3__.prototype, "context", {
                get: function() {
                    return this._debugContext.context;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(DebugNode__PRE_R3__.prototype, "references", {
                get: function() {
                    return this._debugContext.references;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(DebugNode__PRE_R3__.prototype, "providerTokens", {
                get: function() {
                    return this._debugContext.providerTokens;
                },
                enumerable: !0,
                configurable: !0
            }), DebugNode__PRE_R3__;
        }(), core_DebugElement_PRE_R3_ = /** @class */ /* */ function(_super) {
            function DebugElement__PRE_R3__(nativeNode, parent, _debugContext) {
                var _this = _super.call(this, nativeNode, parent, _debugContext) || this;
                return _this.properties = {}, _this.attributes = {}, _this.classes = {}, _this.styles = {}, 
                _this.childNodes = [], _this.nativeElement = nativeNode, _this;
            }
            return __extends(DebugElement__PRE_R3__, _super), DebugElement__PRE_R3__.prototype.addChild = function(child) {
                child && (this.childNodes.push(child), child.parent = this);
            }, DebugElement__PRE_R3__.prototype.removeChild = function(child) {
                var childIndex = this.childNodes.indexOf(child);
                -1 !== childIndex && (child.parent = null, this.childNodes.splice(childIndex, 1));
            }, DebugElement__PRE_R3__.prototype.insertChildrenAfter = function(child, newChildren) {
                var _a, _this = this, siblingIndex = this.childNodes.indexOf(child);
                -1 !== siblingIndex && ((_a = this.childNodes).splice.apply(_a, __spread([ siblingIndex + 1, 0 ], newChildren)), 
                newChildren.forEach(function(c) {
                    c.parent && c.parent.removeChild(c), child.parent = _this;
                }));
            }, DebugElement__PRE_R3__.prototype.insertBefore = function(refChild, newChild) {
                var refIndex = this.childNodes.indexOf(refChild);
                -1 === refIndex ? this.addChild(newChild) : (newChild.parent && newChild.parent.removeChild(newChild), 
                newChild.parent = this, this.childNodes.splice(refIndex, 0, newChild));
            }, DebugElement__PRE_R3__.prototype.query = function(predicate) {
                return this.queryAll(predicate)[0] || null;
            }, DebugElement__PRE_R3__.prototype.queryAll = function(predicate) {
                var matches = [];
                return function _queryElementChildren(element, predicate, matches) {
                    element.childNodes.forEach(function(node) {
                        node instanceof core_DebugElement_PRE_R3_ && (predicate(node) && matches.push(node), 
                        _queryElementChildren(node, predicate, matches));
                    });
                }(this, predicate, matches), matches;
            }, DebugElement__PRE_R3__.prototype.queryAllNodes = function(predicate) {
                var matches = [];
                return function _queryNodeChildren(parentNode, predicate, matches) {
                    parentNode instanceof core_DebugElement_PRE_R3_ && parentNode.childNodes.forEach(function(node) {
                        predicate(node) && matches.push(node), node instanceof core_DebugElement_PRE_R3_ && _queryNodeChildren(node, predicate, matches);
                    });
                }(this, predicate, matches), matches;
            }, Object.defineProperty(DebugElement__PRE_R3__.prototype, "children", {
                get: function() {
                    return this.childNodes.filter(function(node) {
                        return node instanceof DebugElement__PRE_R3__;
                    });
                },
                enumerable: !0,
                configurable: !0
            }), DebugElement__PRE_R3__.prototype.triggerEventHandler = function(eventName, eventObj) {
                this.listeners.forEach(function(listener) {
                    listener.name == eventName && listener.callback(eventObj);
                });
            }, DebugElement__PRE_R3__;
        }(DebugNode__PRE_R3__), _nativeNodeToDebugNode = /* */ new Map(), getDebugNode = function(nativeNode) {
            return _nativeNodeToDebugNode.get(nativeNode) || null;
        };
        /**
 * Represents an Angular [view](guide/glossary#view) in a view container.
 * An [embedded view](guide/glossary#view-tree) can be referenced from a component
 * other than the hosting component whose template defines it, or it can be defined
 * independently by a `TemplateRef`.
 *
 * Properties of elements in a view can change, but the structure (number and order) of elements in
 * a view cannot. Change the structure of elements by inserting, moving, or
 * removing nested views in a view container.
 *
 * @see `ViewContainerRef`
 *
 * @usageNotes
 *
 * The following template breaks down into two separate `TemplateRef` instances,
 * an outer one and an inner one.
 *
 * ```
 * Count: {{items.length}}
 * <ul>
 *   <li *ngFor="let  item of items">{{item}}</li>
 * </ul>
 * ```
 *
 * This is the outer `TemplateRef`:
 *
 * ```
 * Count: {{items.length}}
 * <ul>
 *   <ng-template ngFor let-item [ngForOf]="items"></ng-template>
 * </ul>
 * ```
 *
 * This is the inner `TemplateRef`:
 *
 * ```
 *   <li>{{item}}</li>
 * ```
 *
 * The outer and inner `TemplateRef` instances are assembled into views as follows:
 *
 * ```
 * <!-- ViewRef: outer-0 -->
 * Count: 2
 * <ul>
 *   <ng-template view-container-ref></ng-template>
 *   <!-- ViewRef: inner-1 --><li>first</li><!-- /ViewRef: inner-1 -->
 *   <!-- ViewRef: inner-2 --><li>second</li><!-- /ViewRef: inner-2 -->
 * </ul>
 * <!-- /ViewRef: outer-0 -->
 * ```
 * @publicApi
 */        function indexDebugNode(node) {
            _nativeNodeToDebugNode.set(node.nativeNode, node);
        }
        /**
 * @publicApi
 */
        var platformCore = /* */ createPlatformFactory(null, "core", [ 
        // Set a default platform name for platforms that don't set it explicitly.
        {
            provide: PLATFORM_ID,
            useValue: "unknown"
        }, {
            provide: PlatformRef,
            deps: [ Injector ]
        }, {
            provide: core_TestabilityRegistry,
            deps: []
        }, {
            provide: Console,
            deps: []
        } ]), LOCALE_ID = /* */ new InjectionToken("LocaleId");
        /**
 * @publicApi
 */        
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        function _iterableDiffersFactory() {
            return defaultIterableDiffers;
        }
        function _keyValueDiffersFactory() {
            return defaultKeyValueDiffers;
        }
        function _localeFactory(locale) {
            return locale || "en-US";
        }
        /**
 * A built-in [dependency injection token](guide/glossary#di-token)
 * that is used to configure the root injector for bootstrapping.
 */        
        /**
 * Schedule work at next available slot.
 *
 * In Ivy this is just `requestAnimationFrame`. For compatibility reasons when bootstrapped
 * using `platformRef.bootstrap` we need to use `NgZone.onStable` as the scheduling mechanism.
 * This overrides the scheduling mechanism in Ivy to `NgZone.onStable`.
 *
 * @param ngZone NgZone to use for scheduling.
 */
        function zoneSchedulerFactory(ngZone) {
            var queue = [];
            return ngZone.onStable.subscribe(function() {
                for (;queue.length; ) queue.pop()();
            }), function(fn) {
                queue.push(fn);
            };
        }
        /**
 * Configures the root injector for an app with
 * providers of `@angular/core` dependencies that `ApplicationRef` needs
 * to bootstrap components.
 *
 * Re-exported by `BrowserModule`, which is included automatically in the root
 * `AppModule` when you create a new app with the CLI `new` command.
 *
 * @publicApi
 */        var ApplicationModule = /** @class */ /* */ function() {
            // Inject ApplicationRef to make it eager...
            return function(appRef) {};
        }();
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        function elementDef(checkIndex, flags, matchedQueriesDsl, ngContentIndex, childCount, namespaceAndName, fixedAttrs, bindings, outputs, handleEvent, componentView, componentRendererType) {
            var _a;
            void 0 === fixedAttrs && (fixedAttrs = []), handleEvent || (handleEvent = NOOP);
            var _b = splitMatchedQueriesDsl(matchedQueriesDsl), matchedQueries = _b.matchedQueries, references = _b.references, matchedQueryIds = _b.matchedQueryIds, ns = null, name = null;
            namespaceAndName && (ns = (_a = __read(splitNamespace(namespaceAndName), 2))[0], 
            name = _a[1]), bindings = bindings || [];
            for (var bindingDefs = new Array(bindings.length), i = 0; i < bindings.length; i++) {
                var _c = __read(bindings[i], 3), bindingFlags = _c[0], suffixOrSecurityContext = _c[2], _d = __read(splitNamespace(_c[1]), 2), ns_1 = _d[0], name_1 = _d[1], securityContext = void 0, suffix = void 0;
                switch (15 /* Types */ & bindingFlags) {
                  case 4 /* TypeElementStyle */ :
                    suffix = suffixOrSecurityContext;
                    break;

                  case 1 /* TypeElementAttribute */ :
                  case 8 /* TypeProperty */ :
                    securityContext = suffixOrSecurityContext;
                }
                bindingDefs[i] = {
                    flags: bindingFlags,
                    ns: ns_1,
                    name: name_1,
                    nonMinifiedName: name_1,
                    securityContext: securityContext,
                    suffix: suffix
                };
            }
            outputs = outputs || [];
            var outputDefs = new Array(outputs.length);
            for (i = 0; i < outputs.length; i++) {
                var _e = __read(outputs[i], 2);
                outputDefs[i] = {
                    type: 0 /* ElementOutput */ ,
                    target: _e[0],
                    eventName: _e[1],
                    propName: null
                };
            }
            var attrs = (fixedAttrs = fixedAttrs || []).map(function(_a) {
                var _b = __read(_a, 2), value = _b[1], _c = __read(splitNamespace(_b[0]), 2);
                return [ _c[0], _c[1], value ];
            });
            return componentRendererType = function(type) {
                if (type && type.id === UNDEFINED_RENDERER_TYPE_ID) {
                    // first time we see this RendererType2. Initialize it...
                    var isFilled = null != type.encapsulation && type.encapsulation !== ViewEncapsulation.None || type.styles.length || Object.keys(type.data).length;
                    type.id = isFilled ? "c" + _renderCompCount$1++ : EMPTY_RENDERER_TYPE_ID;
                }
                return type && type.id === EMPTY_RENDERER_TYPE_ID && (type = null), type || null;
            }(componentRendererType), componentView && (flags |= 33554432 /* ComponentView */), 
            {
                // will bet set by the view definition
                nodeIndex: -1,
                parent: null,
                renderParent: null,
                bindingIndex: -1,
                outputIndex: -1,
                // regular values
                checkIndex: checkIndex,
                flags: flags |= 1 /* TypeElement */ ,
                childFlags: 0,
                directChildFlags: 0,
                childMatchedQueries: 0,
                matchedQueries: matchedQueries,
                matchedQueryIds: matchedQueryIds,
                references: references,
                ngContentIndex: ngContentIndex,
                childCount: childCount,
                bindings: bindingDefs,
                bindingFlags: calcBindingFlags(bindingDefs),
                outputs: outputDefs,
                element: {
                    ns: ns,
                    name: name,
                    attrs: attrs,
                    template: null,
                    // will bet set by the view definition
                    componentProvider: null,
                    componentView: componentView || null,
                    componentRendererType: componentRendererType,
                    publicProviders: null,
                    allProviders: null,
                    handleEvent: handleEvent || NOOP
                },
                provider: null,
                text: null,
                query: null,
                ngContent: null
            };
        }
        function createElement(view, renderHost, def) {
            var el, elDef = def.element, rootSelectorOrNode = view.root.selectorOrNode, renderer = view.renderer;
            if (view.parent || !rootSelectorOrNode) {
                el = elDef.name ? renderer.createElement(elDef.name, elDef.ns) : renderer.createComment("");
                var parentEl = getParentRenderElement(view, renderHost, def);
                parentEl && renderer.appendChild(parentEl, el);
            } else el = renderer.selectRootElement(rootSelectorOrNode, !!elDef.componentRendererType && elDef.componentRendererType.encapsulation === ViewEncapsulation.ShadowDom);
            if (elDef.attrs) for (var i = 0; i < elDef.attrs.length; i++) {
                var _a = __read(elDef.attrs[i], 3);
                renderer.setAttribute(el, _a[1], _a[2], _a[0]);
            }
            return el;
        }
        function listenToElementOutputs(view, compView, def, el) {
            for (var i = 0; i < def.outputs.length; i++) {
                var output = def.outputs[i], handleEventClosure = renderEventHandlerClosure(view, def.nodeIndex, (name = output.eventName, 
                (target = output.target) ? target + ":" + name : name)), listenTarget = output.target, listenerView = view;
                "component" === output.target && (listenTarget = null, listenerView = compView);
                var disposable = listenerView.renderer.listen(listenTarget || el, output.eventName, handleEventClosure);
                view.disposables[def.outputIndex + i] = disposable;
            }
            var target, name;
        }
        function renderEventHandlerClosure(view, index, eventName) {
            return function(event) {
                return dispatchEvent(view, index, eventName, event);
            };
        }
        function checkAndUpdateElementValue(view, def, bindingIdx, value) {
            if (!checkAndUpdateBinding(view, def, bindingIdx, value)) return !1;
            var binding = def.bindings[bindingIdx], elData = asElementData(view, def.nodeIndex), renderNode$$1 = elData.renderElement, name = binding.name;
            switch (15 /* Types */ & binding.flags) {
              case 1 /* TypeElementAttribute */ :
                !function(view, binding, renderNode$$1, ns, name, value) {
                    var securityContext = binding.securityContext, renderValue = securityContext ? view.root.sanitizer.sanitize(securityContext, value) : value;
                    renderValue = null != renderValue ? renderValue.toString() : null;
                    var renderer = view.renderer;
                    null != value ? renderer.setAttribute(renderNode$$1, name, renderValue, ns) : renderer.removeAttribute(renderNode$$1, name, ns);
                }(view, binding, renderNode$$1, binding.ns, name, value);
                break;

              case 2 /* TypeElementClass */ :
                !function(view, renderNode$$1, name, value) {
                    var renderer = view.renderer;
                    value ? renderer.addClass(renderNode$$1, name) : renderer.removeClass(renderNode$$1, name);
                }(view, renderNode$$1, name, value);
                break;

              case 4 /* TypeElementStyle */ :
                !function(view, binding, renderNode$$1, name, value) {
                    var renderValue = view.root.sanitizer.sanitize(SecurityContext.STYLE, value);
                    if (null != renderValue) {
                        renderValue = renderValue.toString();
                        var unit = binding.suffix;
                        null != unit && (renderValue += unit);
                    } else renderValue = null;
                    var renderer = view.renderer;
                    null != renderValue ? renderer.setStyle(renderNode$$1, name, renderValue) : renderer.removeStyle(renderNode$$1, name);
                }(view, binding, renderNode$$1, name, value);
                break;

              case 8 /* TypeProperty */ :
                !function(view, binding, renderNode$$1, name, value) {
                    var securityContext = binding.securityContext, renderValue = securityContext ? view.root.sanitizer.sanitize(securityContext, value) : value;
                    view.renderer.setProperty(renderNode$$1, name, renderValue);
                }
                /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ (33554432 /* ComponentView */ & def.flags && 32 /* SyntheticHostProperty */ & binding.flags ? elData.componentView : view, binding, renderNode$$1, name, value);
            }
            return !0;
        }
        function dirtyParentQueries(view) {
            for (var queryIds = view.def.nodeMatchedQueries; view.parent && isEmbeddedView(view); ) {
                var tplDef = view.parentNodeDef;
                view = view.parent;
                for (
                // content queries
                var end = tplDef.nodeIndex + tplDef.childCount, i = 0; i <= end; i++) 67108864 /* TypeContentQuery */ & (nodeDef = view.def.nodes[i]).flags && 536870912 /* DynamicQuery */ & nodeDef.flags && (nodeDef.query.filterId & queryIds) === nodeDef.query.filterId && asQueryList(view, i).setDirty(), 
                !(1 /* TypeElement */ & nodeDef.flags && i + nodeDef.childCount < tplDef.nodeIndex) && 67108864 /* TypeContentQuery */ & nodeDef.childFlags && 536870912 /* DynamicQuery */ & nodeDef.childFlags || (
                // skip elements that don't contain the template element or no query.
                i += nodeDef.childCount);
            }
            // view queries
                        if (134217728 /* TypeViewQuery */ & view.def.nodeFlags) for (i = 0; i < view.def.nodes.length; i++) {
                var nodeDef;
                134217728 /* TypeViewQuery */ & (nodeDef = view.def.nodes[i]).flags && 536870912 /* DynamicQuery */ & nodeDef.flags && asQueryList(view, i).setDirty(), 
                // only visit the root nodes
                i += nodeDef.childCount;
            }
        }
        function checkAndUpdateQuery(view, nodeDef) {
            var queryList = asQueryList(view, nodeDef.nodeIndex);
            if (queryList.dirty) {
                var directiveInstance, newValues = void 0;
                if (67108864 /* TypeContentQuery */ & nodeDef.flags) {
                    var elementDef = nodeDef.parent.parent;
                    newValues = calcQueryValues(view, elementDef.nodeIndex, elementDef.nodeIndex + elementDef.childCount, nodeDef.query, []), 
                    directiveInstance = asProviderData(view, nodeDef.parent.nodeIndex).instance;
                } else 134217728 /* TypeViewQuery */ & nodeDef.flags && (newValues = calcQueryValues(view, 0, view.def.nodes.length - 1, nodeDef.query, []), 
                directiveInstance = view.component);
                queryList.reset(newValues);
                for (var bindings = nodeDef.query.bindings, notify = !1, i = 0; i < bindings.length; i++) {
                    var binding = bindings[i], boundValue = void 0;
                    switch (binding.bindingType) {
                      case 0 /* First */ :
                        boundValue = queryList.first;
                        break;

                      case 1 /* All */ :
                        boundValue = queryList, notify = !0;
                    }
                    directiveInstance[binding.propName] = boundValue;
                }
                notify && queryList.notifyOnChanges();
            }
        }
        function calcQueryValues(view, startIndex, endIndex, queryDef, values) {
            for (var i = startIndex; i <= endIndex; i++) {
                var nodeDef = view.def.nodes[i], valueType = nodeDef.matchedQueries[queryDef.id];
                if (null != valueType && values.push(getQueryValue(view, nodeDef, valueType)), 1 /* TypeElement */ & nodeDef.flags && nodeDef.element.template && (nodeDef.element.template.nodeMatchedQueries & queryDef.filterId) === queryDef.filterId) {
                    var elementData = asElementData(view, i);
                    // check embedded views that were attached at the place of their template,
                    // but process child nodes first if some match the query (see issue #16568)
                                        if ((nodeDef.childMatchedQueries & queryDef.filterId) === queryDef.filterId && (calcQueryValues(view, i + 1, i + nodeDef.childCount, queryDef, values), 
                    i += nodeDef.childCount), 16777216 /* EmbeddedViews */ & nodeDef.flags) for (var embeddedViews = elementData.viewContainer._embeddedViews, k = 0; k < embeddedViews.length; k++) {
                        var embeddedView = embeddedViews[k], dvc = declaredViewContainer(embeddedView);
                        dvc && dvc === elementData && calcQueryValues(embeddedView, 0, embeddedView.def.nodes.length - 1, queryDef, values);
                    }
                    var projectedViews = elementData.template._projectedViews;
                    if (projectedViews) for (k = 0; k < projectedViews.length; k++) {
                        var projectedView = projectedViews[k];
                        calcQueryValues(projectedView, 0, projectedView.def.nodes.length - 1, queryDef, values);
                    }
                }
                (nodeDef.childMatchedQueries & queryDef.filterId) !== queryDef.filterId && (
                // if no child matches the query, skip the children.
                i += nodeDef.childCount);
            }
            return values;
        }
        function getQueryValue(view, nodeDef, queryValueType) {
            if (null != queryValueType) 
            // a match
            switch (queryValueType) {
              case 1 /* RenderElement */ :
                return asElementData(view, nodeDef.nodeIndex).renderElement;

              case 0 /* ElementRef */ :
                return new ElementRef(asElementData(view, nodeDef.nodeIndex).renderElement);

              case 2 /* TemplateRef */ :
                return asElementData(view, nodeDef.nodeIndex).template;

              case 3 /* ViewContainerRef */ :
                return asElementData(view, nodeDef.nodeIndex).viewContainer;

              case 4 /* Provider */ :
                return asProviderData(view, nodeDef.nodeIndex).instance;
            }
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        function appendNgContent(view, renderHost, def) {
            var parentEl = getParentRenderElement(view, renderHost, def);
            parentEl && visitProjectedRenderNodes(view, def.ngContent.index, 1 /* AppendChild */ , parentEl, null, void 0);
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        function textDef(checkIndex, ngContentIndex, staticText) {
            for (var bindings = new Array(staticText.length - 1), i = 1; i < staticText.length; i++) bindings[i - 1] = {
                flags: 8 /* TypeProperty */ ,
                name: null,
                ns: null,
                nonMinifiedName: null,
                securityContext: null,
                suffix: staticText[i]
            };
            return {
                // will bet set by the view definition
                nodeIndex: -1,
                parent: null,
                renderParent: null,
                bindingIndex: -1,
                outputIndex: -1,
                // regular values
                checkIndex: checkIndex,
                flags: 2 /* TypeText */ ,
                childFlags: 0,
                directChildFlags: 0,
                childMatchedQueries: 0,
                matchedQueries: {},
                matchedQueryIds: 0,
                references: {},
                ngContentIndex: ngContentIndex,
                childCount: 0,
                bindings: bindings,
                bindingFlags: 8 /* TypeProperty */ ,
                outputs: [],
                element: null,
                provider: null,
                text: {
                    prefix: staticText[0]
                },
                query: null,
                ngContent: null
            };
        }
        function createText(view, renderHost, def) {
            var renderNode$$1, renderer = view.renderer;
            renderNode$$1 = renderer.createText(def.text.prefix);
            var parentEl = getParentRenderElement(view, renderHost, def);
            return parentEl && renderer.appendChild(parentEl, renderNode$$1), {
                renderText: renderNode$$1
            };
        }
        function _addInterpolationPart(value, binding) {
            return (null != value ? value.toString() : "") + binding.suffix;
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        function viewDef(flags, nodes, updateDirectives, updateRenderer) {
            for (
            // clone nodes and set auto calculated values
            var viewBindingCount = 0, viewDisposableCount = 0, viewNodeFlags = 0, viewRootNodeFlags = 0, viewMatchedQueries = 0, currentParent = null, currentRenderParent = null, currentElementHasPublicProviders = !1, currentElementHasPrivateProviders = !1, lastRenderRootNode = null, i = 0; i < nodes.length; i++) {
                var node = nodes[i];
                if (node.nodeIndex = i, node.parent = currentParent, node.bindingIndex = viewBindingCount, 
                node.outputIndex = viewDisposableCount, node.renderParent = currentRenderParent, 
                viewNodeFlags |= node.flags, viewMatchedQueries |= node.matchedQueryIds, node.element) {
                    var elDef = node.element;
                    elDef.publicProviders = currentParent ? currentParent.element.publicProviders : Object.create(null), 
                    elDef.allProviders = elDef.publicProviders, 
                    // Note: We assume that all providers of an element are before any child element!
                    currentElementHasPublicProviders = !1, currentElementHasPrivateProviders = !1, node.element.template && (viewMatchedQueries |= node.element.template.nodeMatchedQueries);
                }
                if (validateNode(currentParent, node, nodes.length), viewBindingCount += node.bindings.length, 
                viewDisposableCount += node.outputs.length, !currentRenderParent && 3 /* CatRenderNode */ & node.flags && (lastRenderRootNode = node), 
                20224 /* CatProvider */ & node.flags) {
                    currentElementHasPublicProviders || (currentElementHasPublicProviders = !0, 
                    // Use prototypical inheritance to not get O(n^2) complexity...
                    currentParent.element.publicProviders = Object.create(currentParent.element.publicProviders), 
                    currentParent.element.allProviders = currentParent.element.publicProviders);
                    var isComponent = 0 != (32768 /* Component */ & node.flags);
                    0 == (8192 /* PrivateProvider */ & node.flags) || isComponent ? currentParent.element.publicProviders[tokenKey(node.provider.token)] = node : (currentElementHasPrivateProviders || (currentElementHasPrivateProviders = !0, 
                    // Use prototypical inheritance to not get O(n^2) complexity...
                    currentParent.element.allProviders = Object.create(currentParent.element.publicProviders)), 
                    currentParent.element.allProviders[tokenKey(node.provider.token)] = node), isComponent && (currentParent.element.componentProvider = node);
                }
                if (currentParent ? (currentParent.childFlags |= node.flags, currentParent.directChildFlags |= node.flags, 
                currentParent.childMatchedQueries |= node.matchedQueryIds, node.element && node.element.template && (currentParent.childMatchedQueries |= node.element.template.nodeMatchedQueries)) : viewRootNodeFlags |= node.flags, 
                node.childCount > 0) currentParent = node, isNgContainer(node) || (currentRenderParent = node); else 
                // When the current node has no children, check if it is the last children of its parent.
                // When it is, propagate the flags up.
                // The loop is required because an element could be the last transitive children of several
                // elements. We loop to either the root or the highest opened element (= with remaining
                // children)
                for (;currentParent && i === currentParent.nodeIndex + currentParent.childCount; ) {
                    var newParent = currentParent.parent;
                    newParent && (newParent.childFlags |= currentParent.childFlags, newParent.childMatchedQueries |= currentParent.childMatchedQueries), 
                    // We also need to update the render parent & account for ng-container
                    currentRenderParent = (currentParent = newParent) && isNgContainer(currentParent) ? currentParent.renderParent : currentParent;
                }
            }
            return {
                // Will be filled later...
                factory: null,
                nodeFlags: viewNodeFlags,
                rootNodeFlags: viewRootNodeFlags,
                nodeMatchedQueries: viewMatchedQueries,
                flags: flags,
                nodes: nodes,
                updateDirectives: updateDirectives || NOOP,
                updateRenderer: updateRenderer || NOOP,
                handleEvent: function(view, nodeIndex, eventName, event) {
                    return nodes[nodeIndex].element.handleEvent(view, eventName, event);
                },
                bindingCount: viewBindingCount,
                outputCount: viewDisposableCount,
                lastRenderRootNode: lastRenderRootNode
            };
        }
        function isNgContainer(node) {
            return 0 != (1 /* TypeElement */ & node.flags) && null === node.element.name;
        }
        function validateNode(parent, node, nodeCount) {
            var template = node.element && node.element.template;
            if (template) {
                if (!template.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!");
                if (template.lastRenderRootNode && 16777216 /* EmbeddedViews */ & template.lastRenderRootNode.flags) throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + node.nodeIndex + "!");
            }
            if (20224 /* CatProvider */ & node.flags && 0 == (1 /* TypeElement */ & (parent ? parent.flags : 0))) throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " + node.nodeIndex + "!");
            if (node.query) {
                if (67108864 /* TypeContentQuery */ & node.flags && (!parent || 0 == (16384 /* TypeDirective */ & parent.flags))) throw new Error("Illegal State: Content Query nodes need to be children of directives, at index " + node.nodeIndex + "!");
                if (134217728 /* TypeViewQuery */ & node.flags && parent) throw new Error("Illegal State: View Query nodes have to be top level nodes, at index " + node.nodeIndex + "!");
            }
            if (node.childCount) {
                var parentEnd = parent ? parent.nodeIndex + parent.childCount : nodeCount - 1;
                if (node.nodeIndex <= parentEnd && node.nodeIndex + node.childCount > parentEnd) throw new Error("Illegal State: childCount of node leads outside of parent, at index " + node.nodeIndex + "!");
            }
        }
        function createEmbeddedView(parent, anchorDef$$1, viewDef, context) {
            // embedded views are seen as siblings to the anchor, so we need
            // to get the parent of the anchor and use it as parentIndex.
            var view = createView(parent.root, parent.renderer, parent, anchorDef$$1, viewDef);
            return initView(view, parent.component, context), createViewNodes(view), view;
        }
        function createRootView(root, def, context) {
            var view = createView(root, root.renderer, null, null, def);
            return initView(view, context, context), createViewNodes(view), view;
        }
        function createComponentView(parentView, nodeDef, viewDef, hostElement) {
            var compRenderer, rendererType = nodeDef.element.componentRendererType;
            return compRenderer = rendererType ? parentView.root.rendererFactory.createRenderer(hostElement, rendererType) : parentView.root.renderer, 
            createView(parentView.root, compRenderer, parentView, nodeDef.element.componentProvider, viewDef);
        }
        function createView(root, renderer, parent, parentNodeDef, def) {
            var nodes = new Array(def.nodes.length), disposables = def.outputCount ? new Array(def.outputCount) : null;
            return {
                def: def,
                parent: parent,
                viewContainerParent: null,
                parentNodeDef: parentNodeDef,
                context: null,
                component: null,
                nodes: nodes,
                state: 13 /* CatInit */ ,
                root: root,
                renderer: renderer,
                oldValues: new Array(def.bindingCount),
                disposables: disposables,
                initIndex: -1
            };
        }
        function initView(view, component, context) {
            view.component = component, view.context = context;
        }
        function createViewNodes(view) {
            var renderHost;
            isComponentView(view) && (renderHost = asElementData(view.parent, view.parentNodeDef.parent.nodeIndex).renderElement);
            for (var def = view.def, nodes = view.nodes, i = 0; i < def.nodes.length; i++) {
                var nodeDef = def.nodes[i];
                Services.setCurrentNode(view, i);
                var nodeData = void 0;
                switch (201347067 /* Types */ & nodeDef.flags) {
                  case 1 /* TypeElement */ :
                    var el = createElement(view, renderHost, nodeDef), componentView = void 0;
                    if (33554432 /* ComponentView */ & nodeDef.flags) {
                        var compViewDef = resolveDefinition(nodeDef.element.componentView);
                        componentView = Services.createComponentView(view, nodeDef, compViewDef, el);
                    }
                    listenToElementOutputs(view, componentView, nodeDef, el), nodeData = {
                        renderElement: el,
                        componentView: componentView,
                        viewContainer: null,
                        template: nodeDef.element.template ? createTemplateData(view, nodeDef) : void 0
                    }, 16777216 /* EmbeddedViews */ & nodeDef.flags && (nodeData.viewContainer = createViewContainerData(view, nodeDef, nodeData));
                    break;

                  case 2 /* TypeText */ :
                    nodeData = createText(view, renderHost, nodeDef);
                    break;

                  case 512 /* TypeClassProvider */ :
                  case 1024 /* TypeFactoryProvider */ :
                  case 2048 /* TypeUseExistingProvider */ :
                  case 256 /* TypeValueProvider */ :
                    (nodeData = nodes[i]) || 4096 /* LazyProvider */ & nodeDef.flags || (nodeData = {
                        instance: createProviderInstance(view, nodeDef)
                    });
                    break;

                  case 16 /* TypePipe */ :
                    nodeData = {
                        instance: createPipeInstance(view, nodeDef)
                    };
                    break;

                  case 16384 /* TypeDirective */ :
                    (nodeData = nodes[i]) || (nodeData = {
                        instance: createDirectiveInstance(view, nodeDef)
                    }), 32768 /* Component */ & nodeDef.flags && initView(asElementData(view, nodeDef.parent.nodeIndex).componentView, nodeData.instance, nodeData.instance);
                    break;

                  case 32 /* TypePureArray */ :
                  case 64 /* TypePureObject */ :
                  case 128 /* TypePurePipe */ :
                    nodeData = {
                        value: void 0
                    };
                    break;

                  case 67108864 /* TypeContentQuery */ :
                  case 134217728 /* TypeViewQuery */ :
                    nodeData = new QueryList();
                    break;

                  case 8 /* TypeNgContent */ :
                    appendNgContent(view, renderHost, nodeDef), 
                    // no runtime data needed for NgContent...
                    nodeData = void 0;
                }
                nodes[i] = nodeData;
            }
            // Create the ViewData.nodes of component views after we created everything else,
            // so that e.g. ng-content works
                        execComponentViewsAction(view, ViewAction.CreateViewNodes), 
            // fill static content and view queries
            execQueriesAction(view, 201326592 /* TypeViewQuery */ , 268435456 /* StaticQuery */ , 0 /* CheckAndUpdate */);
        }
        function checkNoChangesView(view) {
            markProjectedViewsForCheck(view), Services.updateDirectives(view, 1 /* CheckNoChanges */), 
            execEmbeddedViewsAction(view, ViewAction.CheckNoChanges), Services.updateRenderer(view, 1 /* CheckNoChanges */), 
            execComponentViewsAction(view, ViewAction.CheckNoChanges), 
            // Note: We don't check queries for changes as we didn't do this in v2.x.
            // TODO(tbosch): investigate if we can enable the check again in v5.x with a nicer error message.
            view.state &= -97 /* CheckProjectedView */;
        }
        function checkAndUpdateView(view) {
            1 /* BeforeFirstCheck */ & view.state ? (view.state &= -2 /* BeforeFirstCheck */ , 
            view.state |= 2 /* FirstCheck */) : view.state &= -3 /* FirstCheck */ , shiftInitState(view, 0 /* InitState_BeforeInit */ , 256 /* InitState_CallingOnInit */), 
            markProjectedViewsForCheck(view), Services.updateDirectives(view, 0 /* CheckAndUpdate */), 
            execEmbeddedViewsAction(view, ViewAction.CheckAndUpdate), execQueriesAction(view, 67108864 /* TypeContentQuery */ , 536870912 /* DynamicQuery */ , 0 /* CheckAndUpdate */);
            var callInit = shiftInitState(view, 256 /* InitState_CallingOnInit */ , 512 /* InitState_CallingAfterContentInit */);
            callLifecycleHooksChildrenFirst(view, 2097152 /* AfterContentChecked */ | (callInit ? 1048576 /* AfterContentInit */ : 0)), 
            Services.updateRenderer(view, 0 /* CheckAndUpdate */), execComponentViewsAction(view, ViewAction.CheckAndUpdate), 
            execQueriesAction(view, 134217728 /* TypeViewQuery */ , 536870912 /* DynamicQuery */ , 0 /* CheckAndUpdate */), 
            callLifecycleHooksChildrenFirst(view, 8388608 /* AfterViewChecked */ | ((callInit = shiftInitState(view, 512 /* InitState_CallingAfterContentInit */ , 768 /* InitState_CallingAfterViewInit */)) ? 4194304 /* AfterViewInit */ : 0)), 
            2 /* OnPush */ & view.def.flags && (view.state &= -9 /* ChecksEnabled */), view.state &= -97 /* CheckProjectedView */ , 
            shiftInitState(view, 768 /* InitState_CallingAfterViewInit */ , 1024 /* InitState_AfterInit */);
        }
        function checkAndUpdateNode(view, nodeDef, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
            return 0 /* Inline */ === argStyle ? function(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
                switch (201347067 /* Types */ & nodeDef.flags) {
                  case 1 /* TypeElement */ :
                    return function(view, def, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
                        var bindLen = def.bindings.length, changed = !1;
                        return bindLen > 0 && checkAndUpdateElementValue(view, def, 0, v0) && (changed = !0), 
                        bindLen > 1 && checkAndUpdateElementValue(view, def, 1, v1) && (changed = !0), bindLen > 2 && checkAndUpdateElementValue(view, def, 2, v2) && (changed = !0), 
                        bindLen > 3 && checkAndUpdateElementValue(view, def, 3, v3) && (changed = !0), bindLen > 4 && checkAndUpdateElementValue(view, def, 4, v4) && (changed = !0), 
                        bindLen > 5 && checkAndUpdateElementValue(view, def, 5, v5) && (changed = !0), bindLen > 6 && checkAndUpdateElementValue(view, def, 6, v6) && (changed = !0), 
                        bindLen > 7 && checkAndUpdateElementValue(view, def, 7, v7) && (changed = !0), bindLen > 8 && checkAndUpdateElementValue(view, def, 8, v8) && (changed = !0), 
                        bindLen > 9 && checkAndUpdateElementValue(view, def, 9, v9) && (changed = !0), changed;
                    }(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);

                  case 2 /* TypeText */ :
                    return function(view, def, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
                        var changed = !1, bindings = def.bindings, bindLen = bindings.length;
                        if (bindLen > 0 && checkAndUpdateBinding(view, def, 0, v0) && (changed = !0), bindLen > 1 && checkAndUpdateBinding(view, def, 1, v1) && (changed = !0), 
                        bindLen > 2 && checkAndUpdateBinding(view, def, 2, v2) && (changed = !0), bindLen > 3 && checkAndUpdateBinding(view, def, 3, v3) && (changed = !0), 
                        bindLen > 4 && checkAndUpdateBinding(view, def, 4, v4) && (changed = !0), bindLen > 5 && checkAndUpdateBinding(view, def, 5, v5) && (changed = !0), 
                        bindLen > 6 && checkAndUpdateBinding(view, def, 6, v6) && (changed = !0), bindLen > 7 && checkAndUpdateBinding(view, def, 7, v7) && (changed = !0), 
                        bindLen > 8 && checkAndUpdateBinding(view, def, 8, v8) && (changed = !0), bindLen > 9 && checkAndUpdateBinding(view, def, 9, v9) && (changed = !0), 
                        changed) {
                            var value = def.text.prefix;
                            bindLen > 0 && (value += _addInterpolationPart(v0, bindings[0])), bindLen > 1 && (value += _addInterpolationPart(v1, bindings[1])), 
                            bindLen > 2 && (value += _addInterpolationPart(v2, bindings[2])), bindLen > 3 && (value += _addInterpolationPart(v3, bindings[3])), 
                            bindLen > 4 && (value += _addInterpolationPart(v4, bindings[4])), bindLen > 5 && (value += _addInterpolationPart(v5, bindings[5])), 
                            bindLen > 6 && (value += _addInterpolationPart(v6, bindings[6])), bindLen > 7 && (value += _addInterpolationPart(v7, bindings[7])), 
                            bindLen > 8 && (value += _addInterpolationPart(v8, bindings[8])), bindLen > 9 && (value += _addInterpolationPart(v9, bindings[9]));
                            var renderNode$$1 = asTextData(view, def.nodeIndex).renderText;
                            view.renderer.setValue(renderNode$$1, value);
                        }
                        return changed;
                    }(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);

                  case 16384 /* TypeDirective */ :
                    return function(view, def, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
                        var providerData = asProviderData(view, def.nodeIndex), directive = providerData.instance, changed = !1, changes = void 0, bindLen = def.bindings.length;
                        return bindLen > 0 && checkBinding(view, def, 0, v0) && (changed = !0, changes = updateProp(view, providerData, def, 0, v0, changes)), 
                        bindLen > 1 && checkBinding(view, def, 1, v1) && (changed = !0, changes = updateProp(view, providerData, def, 1, v1, changes)), 
                        bindLen > 2 && checkBinding(view, def, 2, v2) && (changed = !0, changes = updateProp(view, providerData, def, 2, v2, changes)), 
                        bindLen > 3 && checkBinding(view, def, 3, v3) && (changed = !0, changes = updateProp(view, providerData, def, 3, v3, changes)), 
                        bindLen > 4 && checkBinding(view, def, 4, v4) && (changed = !0, changes = updateProp(view, providerData, def, 4, v4, changes)), 
                        bindLen > 5 && checkBinding(view, def, 5, v5) && (changed = !0, changes = updateProp(view, providerData, def, 5, v5, changes)), 
                        bindLen > 6 && checkBinding(view, def, 6, v6) && (changed = !0, changes = updateProp(view, providerData, def, 6, v6, changes)), 
                        bindLen > 7 && checkBinding(view, def, 7, v7) && (changed = !0, changes = updateProp(view, providerData, def, 7, v7, changes)), 
                        bindLen > 8 && checkBinding(view, def, 8, v8) && (changed = !0, changes = updateProp(view, providerData, def, 8, v8, changes)), 
                        bindLen > 9 && checkBinding(view, def, 9, v9) && (changed = !0, changes = updateProp(view, providerData, def, 9, v9, changes)), 
                        changes && directive.ngOnChanges(changes), 65536 /* OnInit */ & def.flags && shouldCallLifecycleInitHook(view, 256 /* InitState_CallingOnInit */ , def.nodeIndex) && directive.ngOnInit(), 
                        262144 /* DoCheck */ & def.flags && directive.ngDoCheck(), changed;
                    }(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);

                  case 32 /* TypePureArray */ :
                  case 64 /* TypePureObject */ :
                  case 128 /* TypePurePipe */ :
                    return function(view, def, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
                        var bindings = def.bindings, changed = !1, bindLen = bindings.length;
                        if (bindLen > 0 && checkAndUpdateBinding(view, def, 0, v0) && (changed = !0), bindLen > 1 && checkAndUpdateBinding(view, def, 1, v1) && (changed = !0), 
                        bindLen > 2 && checkAndUpdateBinding(view, def, 2, v2) && (changed = !0), bindLen > 3 && checkAndUpdateBinding(view, def, 3, v3) && (changed = !0), 
                        bindLen > 4 && checkAndUpdateBinding(view, def, 4, v4) && (changed = !0), bindLen > 5 && checkAndUpdateBinding(view, def, 5, v5) && (changed = !0), 
                        bindLen > 6 && checkAndUpdateBinding(view, def, 6, v6) && (changed = !0), bindLen > 7 && checkAndUpdateBinding(view, def, 7, v7) && (changed = !0), 
                        bindLen > 8 && checkAndUpdateBinding(view, def, 8, v8) && (changed = !0), bindLen > 9 && checkAndUpdateBinding(view, def, 9, v9) && (changed = !0), 
                        changed) {
                            var data = asPureExpressionData(view, def.nodeIndex), value = void 0;
                            switch (201347067 /* Types */ & def.flags) {
                              case 32 /* TypePureArray */ :
                                value = new Array(bindings.length), bindLen > 0 && (value[0] = v0), bindLen > 1 && (value[1] = v1), 
                                bindLen > 2 && (value[2] = v2), bindLen > 3 && (value[3] = v3), bindLen > 4 && (value[4] = v4), 
                                bindLen > 5 && (value[5] = v5), bindLen > 6 && (value[6] = v6), bindLen > 7 && (value[7] = v7), 
                                bindLen > 8 && (value[8] = v8), bindLen > 9 && (value[9] = v9);
                                break;

                              case 64 /* TypePureObject */ :
                                value = {}, bindLen > 0 && (value[bindings[0].name] = v0), bindLen > 1 && (value[bindings[1].name] = v1), 
                                bindLen > 2 && (value[bindings[2].name] = v2), bindLen > 3 && (value[bindings[3].name] = v3), 
                                bindLen > 4 && (value[bindings[4].name] = v4), bindLen > 5 && (value[bindings[5].name] = v5), 
                                bindLen > 6 && (value[bindings[6].name] = v6), bindLen > 7 && (value[bindings[7].name] = v7), 
                                bindLen > 8 && (value[bindings[8].name] = v8), bindLen > 9 && (value[bindings[9].name] = v9);
                                break;

                              case 128 /* TypePurePipe */ :
                                var pipe = v0;
                                switch (bindLen) {
                                  case 1:
                                    value = pipe.transform(v0);
                                    break;

                                  case 2:
                                    value = pipe.transform(v1);
                                    break;

                                  case 3:
                                    value = pipe.transform(v1, v2);
                                    break;

                                  case 4:
                                    value = pipe.transform(v1, v2, v3);
                                    break;

                                  case 5:
                                    value = pipe.transform(v1, v2, v3, v4);
                                    break;

                                  case 6:
                                    value = pipe.transform(v1, v2, v3, v4, v5);
                                    break;

                                  case 7:
                                    value = pipe.transform(v1, v2, v3, v4, v5, v6);
                                    break;

                                  case 8:
                                    value = pipe.transform(v1, v2, v3, v4, v5, v6, v7);
                                    break;

                                  case 9:
                                    value = pipe.transform(v1, v2, v3, v4, v5, v6, v7, v8);
                                    break;

                                  case 10:
                                    value = pipe.transform(v1, v2, v3, v4, v5, v6, v7, v8, v9);
                                }
                            }
                            data.value = value;
                        }
                        return changed;
                    }(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9);

                  default:
                    throw "unreachable";
                }
            }(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) : function(view, nodeDef, values) {
                switch (201347067 /* Types */ & nodeDef.flags) {
                  case 1 /* TypeElement */ :
                    return function(view, def, values) {
                        for (var changed = !1, i = 0; i < values.length; i++) checkAndUpdateElementValue(view, def, i, values[i]) && (changed = !0);
                        return changed;
                    }(view, nodeDef, values);

                  case 2 /* TypeText */ :
                    return function(view, def, values) {
                        for (var bindings = def.bindings, changed = !1, i = 0; i < values.length; i++) 
                        // Note: We need to loop over all values, so that
                        // the old values are updates as well!
                        checkAndUpdateBinding(view, def, i, values[i]) && (changed = !0);
                        if (changed) {
                            var value = "";
                            for (i = 0; i < values.length; i++) value += _addInterpolationPart(values[i], bindings[i]);
                            value = def.text.prefix + value;
                            var renderNode$$1 = asTextData(view, def.nodeIndex).renderText;
                            view.renderer.setValue(renderNode$$1, value);
                        }
                        return changed;
                    }(view, nodeDef, values);

                  case 16384 /* TypeDirective */ :
                    return function(view, def, values) {
                        for (var providerData = asProviderData(view, def.nodeIndex), directive = providerData.instance, changed = !1, changes = void 0, i = 0; i < values.length; i++) checkBinding(view, def, i, values[i]) && (changed = !0, 
                        changes = updateProp(view, providerData, def, i, values[i], changes));
                        return changes && directive.ngOnChanges(changes), 65536 /* OnInit */ & def.flags && shouldCallLifecycleInitHook(view, 256 /* InitState_CallingOnInit */ , def.nodeIndex) && directive.ngOnInit(), 
                        262144 /* DoCheck */ & def.flags && directive.ngDoCheck(), changed;
                    }(view, nodeDef, values);

                  case 32 /* TypePureArray */ :
                  case 64 /* TypePureObject */ :
                  case 128 /* TypePurePipe */ :
                    return function(view, def, values) {
                        for (var bindings = def.bindings, changed = !1, i = 0; i < values.length; i++) 
                        // Note: We need to loop over all values, so that
                        // the old values are updates as well!
                        checkAndUpdateBinding(view, def, i, values[i]) && (changed = !0);
                        if (changed) {
                            var data = asPureExpressionData(view, def.nodeIndex), value = void 0;
                            switch (201347067 /* Types */ & def.flags) {
                              case 32 /* TypePureArray */ :
                                value = values;
                                break;

                              case 64 /* TypePureObject */ :
                                for (value = {}, i = 0; i < values.length; i++) value[bindings[i].name] = values[i];
                                break;

                              case 128 /* TypePurePipe */ :
                                var pipe = values[0], params = values.slice(1);
                                value = pipe.transform.apply(pipe, __spread(params));
                            }
                            data.value = value;
                        }
                        return changed;
                    }(view, nodeDef, values);

                  default:
                    throw "unreachable";
                }
            }(view, nodeDef, v0);
        }
        function markProjectedViewsForCheck(view) {
            var def = view.def;
            if (4 /* ProjectedTemplate */ & def.nodeFlags) for (var i = 0; i < def.nodes.length; i++) {
                var nodeDef = def.nodes[i];
                if (4 /* ProjectedTemplate */ & nodeDef.flags) {
                    var projectedViews = asElementData(view, i).template._projectedViews;
                    if (projectedViews) for (var i_1 = 0; i_1 < projectedViews.length; i_1++) {
                        var projectedView = projectedViews[i_1];
                        projectedView.state |= 32 /* CheckProjectedView */ , markParentViewsForCheckProjectedViews(projectedView, view);
                    }
                } else 0 == (4 /* ProjectedTemplate */ & nodeDef.childFlags) && (
                // a parent with leafs
                // no child is a component,
                // then skip the children
                i += nodeDef.childCount);
            }
        }
        function checkNoChangesNode(view, nodeDef, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
            // Returning false is ok here as we would have thrown in case of a change.
            return 0 /* Inline */ === argStyle ? function(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
                var bindLen = nodeDef.bindings.length;
                bindLen > 0 && checkBindingNoChanges(view, nodeDef, 0, v0), bindLen > 1 && checkBindingNoChanges(view, nodeDef, 1, v1), 
                bindLen > 2 && checkBindingNoChanges(view, nodeDef, 2, v2), bindLen > 3 && checkBindingNoChanges(view, nodeDef, 3, v3), 
                bindLen > 4 && checkBindingNoChanges(view, nodeDef, 4, v4), bindLen > 5 && checkBindingNoChanges(view, nodeDef, 5, v5), 
                bindLen > 6 && checkBindingNoChanges(view, nodeDef, 6, v6), bindLen > 7 && checkBindingNoChanges(view, nodeDef, 7, v7), 
                bindLen > 8 && checkBindingNoChanges(view, nodeDef, 8, v8), bindLen > 9 && checkBindingNoChanges(view, nodeDef, 9, v9);
            }(view, nodeDef, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) : function(view, nodeDef, values) {
                for (var i = 0; i < values.length; i++) checkBindingNoChanges(view, nodeDef, i, values[i]);
            }
            /**
 * Workaround https://github.com/angular/tsickle/issues/497
 * @suppress {misplacedTypeAnnotation}
 */ (view, nodeDef, v0), !1;
        }
        function checkNoChangesQuery(view, nodeDef) {
            if (asQueryList(view, nodeDef.nodeIndex).dirty) throw expressionChangedAfterItHasBeenCheckedError(Services.createDebugContext(view, nodeDef.nodeIndex), "Query " + nodeDef.query.id + " not dirty", "Query " + nodeDef.query.id + " dirty", 0 != (1 /* BeforeFirstCheck */ & view.state));
        }
        function destroyView(view) {
            if (!(128 /* Destroyed */ & view.state)) {
                if (execEmbeddedViewsAction(view, ViewAction.Destroy), execComponentViewsAction(view, ViewAction.Destroy), 
                callLifecycleHooksChildrenFirst(view, 131072 /* OnDestroy */), view.disposables) for (var i = 0; i < view.disposables.length; i++) view.disposables[i]();
                !function(view) {
                    if (16 /* IsProjectedView */ & view.state) {
                        var dvcElementData = declaredViewContainer(view);
                        if (dvcElementData) {
                            var projectedViews = dvcElementData.template._projectedViews;
                            projectedViews && (removeFromArray(projectedViews, projectedViews.indexOf(view)), 
                            Services.dirtyParentQueries(view));
                        }
                    }
                }(view), view.renderer.destroyNode && function(view) {
                    for (var len = view.def.nodes.length, i = 0; i < len; i++) {
                        var def = view.def.nodes[i];
                        1 /* TypeElement */ & def.flags ? view.renderer.destroyNode(asElementData(view, i).renderElement) : 2 /* TypeText */ & def.flags ? view.renderer.destroyNode(asTextData(view, i).renderText) : (67108864 /* TypeContentQuery */ & def.flags || 134217728 /* TypeViewQuery */ & def.flags) && asQueryList(view, i).destroy();
                    }
                }(view), isComponentView(view) && view.renderer.destroy(), view.state |= 128 /* Destroyed */;
            }
        }
        var ViewAction = /* */ function(ViewAction) {
            return ViewAction[ViewAction.CreateViewNodes = 0] = "CreateViewNodes", ViewAction[ViewAction.CheckNoChanges = 1] = "CheckNoChanges", 
            ViewAction[ViewAction.CheckNoChangesProjectedViews = 2] = "CheckNoChangesProjectedViews", 
            ViewAction[ViewAction.CheckAndUpdate = 3] = "CheckAndUpdate", ViewAction[ViewAction.CheckAndUpdateProjectedViews = 4] = "CheckAndUpdateProjectedViews", 
            ViewAction[ViewAction.Destroy = 5] = "Destroy", ViewAction;
        }({});
        function execComponentViewsAction(view, action) {
            var def = view.def;
            if (33554432 /* ComponentView */ & def.nodeFlags) for (var i = 0; i < def.nodes.length; i++) {
                var nodeDef = def.nodes[i];
                33554432 /* ComponentView */ & nodeDef.flags ? 
                // a leaf
                callViewAction(asElementData(view, i).componentView, action) : 0 == (33554432 /* ComponentView */ & nodeDef.childFlags) && (
                // a parent with leafs
                // no child is a component,
                // then skip the children
                i += nodeDef.childCount);
            }
        }
        function execEmbeddedViewsAction(view, action) {
            var def = view.def;
            if (16777216 /* EmbeddedViews */ & def.nodeFlags) for (var i = 0; i < def.nodes.length; i++) {
                var nodeDef = def.nodes[i];
                if (16777216 /* EmbeddedViews */ & nodeDef.flags) for (
                // a leaf
                var embeddedViews = asElementData(view, i).viewContainer._embeddedViews, k = 0; k < embeddedViews.length; k++) callViewAction(embeddedViews[k], action); else 0 == (16777216 /* EmbeddedViews */ & nodeDef.childFlags) && (
                // a parent with leafs
                // no child is a component,
                // then skip the children
                i += nodeDef.childCount);
            }
        }
        function callViewAction(view, action) {
            var viewState = view.state;
            switch (action) {
              case ViewAction.CheckNoChanges:
                0 == (128 /* Destroyed */ & viewState) && (12 /* CatDetectChanges */ == (12 /* CatDetectChanges */ & viewState) ? checkNoChangesView(view) : 64 /* CheckProjectedViews */ & viewState && execProjectedViewsAction(view, ViewAction.CheckNoChangesProjectedViews));
                break;

              case ViewAction.CheckNoChangesProjectedViews:
                0 == (128 /* Destroyed */ & viewState) && (32 /* CheckProjectedView */ & viewState ? checkNoChangesView(view) : 64 /* CheckProjectedViews */ & viewState && execProjectedViewsAction(view, action));
                break;

              case ViewAction.CheckAndUpdate:
                0 == (128 /* Destroyed */ & viewState) && (12 /* CatDetectChanges */ == (12 /* CatDetectChanges */ & viewState) ? checkAndUpdateView(view) : 64 /* CheckProjectedViews */ & viewState && execProjectedViewsAction(view, ViewAction.CheckAndUpdateProjectedViews));
                break;

              case ViewAction.CheckAndUpdateProjectedViews:
                0 == (128 /* Destroyed */ & viewState) && (32 /* CheckProjectedView */ & viewState ? checkAndUpdateView(view) : 64 /* CheckProjectedViews */ & viewState && execProjectedViewsAction(view, action));
                break;

              case ViewAction.Destroy:
                // Note: destroyView recurses over all views,
                // so we don't need to special case projected views here.
                destroyView(view);
                break;

              case ViewAction.CreateViewNodes:
                createViewNodes(view);
            }
        }
        function execProjectedViewsAction(view, action) {
            execEmbeddedViewsAction(view, action), execComponentViewsAction(view, action);
        }
        function execQueriesAction(view, queryFlags, staticDynamicQueryFlag, checkType) {
            if (view.def.nodeFlags & queryFlags && view.def.nodeFlags & staticDynamicQueryFlag) for (var nodeCount = view.def.nodes.length, i = 0; i < nodeCount; i++) {
                var nodeDef = view.def.nodes[i];
                if (nodeDef.flags & queryFlags && nodeDef.flags & staticDynamicQueryFlag) switch (Services.setCurrentNode(view, nodeDef.nodeIndex), 
                checkType) {
                  case 0 /* CheckAndUpdate */ :
                    checkAndUpdateQuery(view, nodeDef);
                    break;

                  case 1 /* CheckNoChanges */ :
                    checkNoChangesQuery(view, nodeDef);
                }
                nodeDef.childFlags & queryFlags && nodeDef.childFlags & staticDynamicQueryFlag || (
                // no child has a matching query
                // then skip the children
                i += nodeDef.childCount);
            }
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        var initialized = !1;
        function createProdRootView(elInjector, projectableNodes, rootSelectorOrNode, def, ngModule, context) {
            var rendererFactory = ngModule.injector.get(RendererFactory2);
            return createRootView(createRootData(elInjector, ngModule, rendererFactory, projectableNodes, rootSelectorOrNode), def, context);
        }
        function debugCreateRootView(elInjector, projectableNodes, rootSelectorOrNode, def, ngModule, context) {
            var rendererFactory = ngModule.injector.get(RendererFactory2), root = createRootData(elInjector, ngModule, new DebugRendererFactory2(rendererFactory), projectableNodes, rootSelectorOrNode), defWithOverride = applyProviderOverridesToView(def);
            return callWithDebugContext(DebugAction.create, createRootView, null, [ root, defWithOverride, context ]);
        }
        function createRootData(elInjector, ngModule, rendererFactory, projectableNodes, rootSelectorOrNode) {
            var sanitizer = ngModule.injector.get(Sanitizer), errorHandler = ngModule.injector.get(ErrorHandler), renderer = rendererFactory.createRenderer(null, null);
            return {
                ngModule: ngModule,
                injector: elInjector,
                projectableNodes: projectableNodes,
                selectorOrNode: rootSelectorOrNode,
                sanitizer: sanitizer,
                rendererFactory: rendererFactory,
                renderer: renderer,
                errorHandler: errorHandler
            };
        }
        function debugCreateEmbeddedView(parentView, anchorDef, viewDef$$1, context) {
            var defWithOverride = applyProviderOverridesToView(viewDef$$1);
            return callWithDebugContext(DebugAction.create, createEmbeddedView, null, [ parentView, anchorDef, defWithOverride, context ]);
        }
        function debugCreateComponentView(parentView, nodeDef, viewDef$$1, hostElement) {
            return viewDef$$1 = viewDefOverrides.get(nodeDef.element.componentProvider.provider.token) || applyProviderOverridesToView(viewDef$$1), 
            callWithDebugContext(DebugAction.create, createComponentView, null, [ parentView, nodeDef, viewDef$$1, hostElement ]);
        }
        function debugCreateNgModuleRef(moduleType, parentInjector, bootstrapComponents, def) {
            return createNgModuleRef(moduleType, parentInjector, bootstrapComponents, 
            // Notes about the algorithm:
            // We only create new datastructures if we need to, to keep perf impact
            // reasonable.
            function(def) {
                var _a = function(def) {
                    var hasOverrides = !1, hasDeprecatedOverrides = !1;
                    return 0 === providerOverrides.size ? {
                        hasOverrides: hasOverrides,
                        hasDeprecatedOverrides: hasDeprecatedOverrides
                    } : (def.providers.forEach(function(node) {
                        var override = providerOverrides.get(node.token);
                        3840 /* CatProviderNoDirective */ & node.flags && override && (hasOverrides = !0, 
                        hasDeprecatedOverrides = hasDeprecatedOverrides || override.deprecatedBehavior);
                    }), def.modules.forEach(function(module) {
                        providerOverridesWithScope.forEach(function(override, token) {
                            getInjectableDef(token).providedIn === module && (hasOverrides = !0, hasDeprecatedOverrides = hasDeprecatedOverrides || override.deprecatedBehavior);
                        });
                    }), {
                        hasOverrides: hasOverrides,
                        hasDeprecatedOverrides: hasDeprecatedOverrides
                    });
                }(def), hasDeprecatedOverrides = _a.hasDeprecatedOverrides;
                return _a.hasOverrides ? (
                // clone the whole view definition,
                // as it maintains references between the nodes that are hard to update.
                function(def) {
                    for (var i = 0; i < def.providers.length; i++) {
                        var provider = def.providers[i];
                        hasDeprecatedOverrides && (
                        // We had a bug where me made
                        // all providers lazy. Keep this logic behind a flag
                        // for migrating existing users.
                        provider.flags |= 4096 /* LazyProvider */);
                        var override = providerOverrides.get(provider.token);
                        override && (provider.flags = -3841 /* CatProviderNoDirective */ & provider.flags | override.flags, 
                        provider.deps = splitDepsDsl(override.deps), provider.value = override.value);
                    }
                    if (providerOverridesWithScope.size > 0) {
                        var moduleSet_1 = new Set(def.modules);
                        providerOverridesWithScope.forEach(function(override, token) {
                            if (moduleSet_1.has(getInjectableDef(token).providedIn)) {
                                var provider = {
                                    token: token,
                                    flags: override.flags | (hasDeprecatedOverrides ? 4096 /* LazyProvider */ : 0 /* None */),
                                    deps: splitDepsDsl(override.deps),
                                    value: override.value,
                                    index: def.providers.length
                                };
                                def.providers.push(provider), def.providersByKey[tokenKey(token)] = provider;
                            }
                        });
                    }
                }(def = def.factory(function() {
                    return NOOP;
                })), def) : def;
            }(def));
        }
        var providerOverrides = /* */ new Map(), providerOverridesWithScope = /* */ new Map(), viewDefOverrides = /* */ new Map();
        function debugOverrideProvider(override) {
            var injectableDef;
            providerOverrides.set(override.token, override), "function" == typeof override.token && (injectableDef = getInjectableDef(override.token)) && "function" == typeof injectableDef.providedIn && providerOverridesWithScope.set(override.token, override);
        }
        function debugOverrideComponentView(comp, compFactory) {
            var hostViewDef = resolveDefinition(compFactory.viewDefFactory), compViewDef = resolveDefinition(hostViewDef.nodes[0].element.componentView);
            viewDefOverrides.set(comp, compViewDef);
        }
        function debugClearOverrides() {
            providerOverrides.clear(), providerOverridesWithScope.clear(), viewDefOverrides.clear();
        }
        // Notes about the algorithm:
        // 1) Locate the providers of an element and check if one of them was overwritten
        // 2) Change the providers of that element
        //
        // We only create new datastructures if we need to, to keep perf impact
        // reasonable.
                function applyProviderOverridesToView(def) {
            if (0 === providerOverrides.size) return def;
            var elementIndicesWithOverwrittenProviders = function(def) {
                for (var elIndicesWithOverwrittenProviders = [], lastElementDef = null, i = 0; i < def.nodes.length; i++) {
                    var nodeDef = def.nodes[i];
                    1 /* TypeElement */ & nodeDef.flags && (lastElementDef = nodeDef), lastElementDef && 3840 /* CatProviderNoDirective */ & nodeDef.flags && providerOverrides.has(nodeDef.provider.token) && (elIndicesWithOverwrittenProviders.push(lastElementDef.nodeIndex), 
                    lastElementDef = null);
                }
                return elIndicesWithOverwrittenProviders;
            }(def);
            if (0 === elementIndicesWithOverwrittenProviders.length) return def;
            // clone the whole view definition,
            // as it maintains references between the nodes that are hard to update.
                        def = def.factory(function() {
                return NOOP;
            });
            for (var i = 0; i < elementIndicesWithOverwrittenProviders.length; i++) applyProviderOverridesToElement(def, elementIndicesWithOverwrittenProviders[i]);
            return def;
            function applyProviderOverridesToElement(viewDef$$1, elIndex) {
                for (var i = elIndex + 1; i < viewDef$$1.nodes.length; i++) {
                    var nodeDef = viewDef$$1.nodes[i];
                    if (1 /* TypeElement */ & nodeDef.flags) 
                    // stop at the next element
                    return;
                    if (3840 /* CatProviderNoDirective */ & nodeDef.flags) {
                        var provider = nodeDef.provider, override = providerOverrides.get(provider.token);
                        override && (nodeDef.flags = -3841 /* CatProviderNoDirective */ & nodeDef.flags | override.flags, 
                        provider.deps = splitDepsDsl(override.deps), provider.value = override.value);
                    }
                }
            }
        }
        function prodCheckAndUpdateNode(view, checkIndex, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
            var nodeDef = view.def.nodes[checkIndex];
            return checkAndUpdateNode(view, nodeDef, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9), 
            224 /* CatPureExpression */ & nodeDef.flags ? asPureExpressionData(view, checkIndex).value : void 0;
        }
        function prodCheckNoChangesNode(view, checkIndex, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
            var nodeDef = view.def.nodes[checkIndex];
            return checkNoChangesNode(view, nodeDef, argStyle, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9), 
            224 /* CatPureExpression */ & nodeDef.flags ? asPureExpressionData(view, checkIndex).value : void 0;
        }
        function debugCheckAndUpdateView(view) {
            return callWithDebugContext(DebugAction.detectChanges, checkAndUpdateView, null, [ view ]);
        }
        function debugCheckNoChangesView(view) {
            return callWithDebugContext(DebugAction.checkNoChanges, checkNoChangesView, null, [ view ]);
        }
        function debugDestroyView(view) {
            return callWithDebugContext(DebugAction.destroy, destroyView, null, [ view ]);
        }
        var _currentAction, _currentView, _currentNodeIndex, DebugAction = /* */ function(DebugAction) {
            return DebugAction[DebugAction.create = 0] = "create", DebugAction[DebugAction.detectChanges = 1] = "detectChanges", 
            DebugAction[DebugAction.checkNoChanges = 2] = "checkNoChanges", DebugAction[DebugAction.destroy = 3] = "destroy", 
            DebugAction[DebugAction.handleEvent = 4] = "handleEvent", DebugAction;
        }({});
        function debugSetCurrentNode(view, nodeIndex) {
            _currentView = view, _currentNodeIndex = nodeIndex;
        }
        function debugHandleEvent(view, nodeIndex, eventName, event) {
            return debugSetCurrentNode(view, nodeIndex), callWithDebugContext(DebugAction.handleEvent, view.def.handleEvent, null, [ view, nodeIndex, eventName, event ]);
        }
        function debugUpdateDirectives(view, checkType) {
            if (128 /* Destroyed */ & view.state) throw viewDestroyedError(DebugAction[_currentAction]);
            return debugSetCurrentNode(view, nextDirectiveWithBinding(view, 0)), view.def.updateDirectives(function(view, nodeIndex, argStyle) {
                for (var values = [], _i = 3; _i < arguments.length; _i++) values[_i - 3] = arguments[_i];
                var nodeDef = view.def.nodes[nodeIndex];
                return 0 /* CheckAndUpdate */ === checkType ? debugCheckAndUpdateNode(view, nodeDef, argStyle, values) : debugCheckNoChangesNode(view, nodeDef, argStyle, values), 
                16384 /* TypeDirective */ & nodeDef.flags && debugSetCurrentNode(view, nextDirectiveWithBinding(view, nodeIndex)), 
                224 /* CatPureExpression */ & nodeDef.flags ? asPureExpressionData(view, nodeDef.nodeIndex).value : void 0;
            }, view);
        }
        function debugUpdateRenderer(view, checkType) {
            if (128 /* Destroyed */ & view.state) throw viewDestroyedError(DebugAction[_currentAction]);
            return debugSetCurrentNode(view, nextRenderNodeWithBinding(view, 0)), view.def.updateRenderer(function(view, nodeIndex, argStyle) {
                for (var values = [], _i = 3; _i < arguments.length; _i++) values[_i - 3] = arguments[_i];
                var nodeDef = view.def.nodes[nodeIndex];
                return 0 /* CheckAndUpdate */ === checkType ? debugCheckAndUpdateNode(view, nodeDef, argStyle, values) : debugCheckNoChangesNode(view, nodeDef, argStyle, values), 
                3 /* CatRenderNode */ & nodeDef.flags && debugSetCurrentNode(view, nextRenderNodeWithBinding(view, nodeIndex)), 
                224 /* CatPureExpression */ & nodeDef.flags ? asPureExpressionData(view, nodeDef.nodeIndex).value : void 0;
            }, view);
        }
        function debugCheckAndUpdateNode(view, nodeDef, argStyle, givenValues) {
            if (checkAndUpdateNode.apply(void 0, __spread([ view, nodeDef, argStyle ], givenValues))) {
                var values = 1 /* Dynamic */ === argStyle ? givenValues[0] : givenValues;
                if (16384 /* TypeDirective */ & nodeDef.flags) {
                    for (var bindingValues = {}, i = 0; i < nodeDef.bindings.length; i++) {
                        var binding = nodeDef.bindings[i], value = values[i];
                        8 /* TypeProperty */ & binding.flags && (bindingValues[(name = binding.nonMinifiedName, 
                        "ng-reflect-" + name.replace(/[$@]/g, "_").replace(CAMEL_CASE_REGEXP, function() {
                            for (var m = [], _i = 0; _i < arguments.length; _i++) m[_i] = arguments[_i];
                            return "-" + m[1].toLowerCase();
                        }))] = normalizeDebugBindingValue(value));
                    }
                    var elDef = nodeDef.parent, el = asElementData(view, elDef.nodeIndex).renderElement;
                    if (elDef.element.name) 
                    // a regular element.
                    for (var attr in bindingValues) null != (value = bindingValues[attr]) ? view.renderer.setAttribute(el, attr, value) : view.renderer.removeAttribute(el, attr); else 
                    // a comment.
                    view.renderer.setValue(el, "bindings=" + JSON.stringify(bindingValues, null, 2));
                }
            }
            var name;
        }
        function debugCheckNoChangesNode(view, nodeDef, argStyle, values) {
            checkNoChangesNode.apply(void 0, __spread([ view, nodeDef, argStyle ], values));
        }
        function nextDirectiveWithBinding(view, nodeIndex) {
            for (var i = nodeIndex; i < view.def.nodes.length; i++) {
                var nodeDef = view.def.nodes[i];
                if (16384 /* TypeDirective */ & nodeDef.flags && nodeDef.bindings && nodeDef.bindings.length) return i;
            }
            return null;
        }
        function nextRenderNodeWithBinding(view, nodeIndex) {
            for (var i = nodeIndex; i < view.def.nodes.length; i++) {
                var nodeDef = view.def.nodes[i];
                if (3 /* CatRenderNode */ & nodeDef.flags && nodeDef.bindings && nodeDef.bindings.length) return i;
            }
            return null;
        }
        var core_DebugContext_ = /** @class */ /* */ function() {
            function DebugContext_(view, nodeIndex) {
                this.view = view, this.nodeIndex = nodeIndex, null == nodeIndex && (this.nodeIndex = nodeIndex = 0), 
                this.nodeDef = view.def.nodes[nodeIndex];
                for (var elDef = this.nodeDef, elView = view; elDef && 0 == (1 /* TypeElement */ & elDef.flags); ) elDef = elDef.parent;
                if (!elDef) for (;!elDef && elView; ) elDef = viewParentEl(elView), elView = elView.parent;
                this.elDef = elDef, this.elView = elView;
            }
            return Object.defineProperty(DebugContext_.prototype, "elOrCompView", {
                get: function() {
                    // Has to be done lazily as we use the DebugContext also during creation of elements...
                    return asElementData(this.elView, this.elDef.nodeIndex).componentView || this.view;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(DebugContext_.prototype, "injector", {
                get: function() {
                    return createInjector$1(this.elView, this.elDef);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(DebugContext_.prototype, "component", {
                get: function() {
                    return this.elOrCompView.component;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(DebugContext_.prototype, "context", {
                get: function() {
                    return this.elOrCompView.context;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(DebugContext_.prototype, "providerTokens", {
                get: function() {
                    var tokens = [];
                    if (this.elDef) for (var i = this.elDef.nodeIndex + 1; i <= this.elDef.nodeIndex + this.elDef.childCount; i++) {
                        var childDef = this.elView.def.nodes[i];
                        20224 /* CatProvider */ & childDef.flags && tokens.push(childDef.provider.token), 
                        i += childDef.childCount;
                    }
                    return tokens;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(DebugContext_.prototype, "references", {
                get: function() {
                    var references = {};
                    if (this.elDef) {
                        collectReferences(this.elView, this.elDef, references);
                        for (var i = this.elDef.nodeIndex + 1; i <= this.elDef.nodeIndex + this.elDef.childCount; i++) {
                            var childDef = this.elView.def.nodes[i];
                            20224 /* CatProvider */ & childDef.flags && collectReferences(this.elView, childDef, references), 
                            i += childDef.childCount;
                        }
                    }
                    return references;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(DebugContext_.prototype, "componentRenderElement", {
                get: function() {
                    var elData = function(view) {
                        for (;view && !isComponentView(view); ) view = view.parent;
                        return view.parent ? asElementData(view.parent, viewParentEl(view).nodeIndex) : null;
                    }(this.elOrCompView);
                    return elData ? elData.renderElement : void 0;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(DebugContext_.prototype, "renderNode", {
                get: function() {
                    return 2 /* TypeText */ & this.nodeDef.flags ? renderNode(this.view, this.nodeDef) : renderNode(this.elView, this.elDef);
                },
                enumerable: !0,
                configurable: !0
            }), DebugContext_.prototype.logError = function(console) {
                for (var logViewDef, logNodeIndex, values = [], _i = 1; _i < arguments.length; _i++) values[_i - 1] = arguments[_i];
                2 /* TypeText */ & this.nodeDef.flags ? (logViewDef = this.view.def, logNodeIndex = this.nodeDef.nodeIndex) : (logViewDef = this.elView.def, 
                logNodeIndex = this.elDef.nodeIndex);
                // Note: we only generate a log function for text and element nodes
                // to make the generated code as small as possible.
                                var renderNodeIndex = function(viewDef$$1, nodeIndex) {
                    for (var renderNodeIndex = -1, i = 0; i <= nodeIndex; i++) 3 /* CatRenderNode */ & viewDef$$1.nodes[i].flags && renderNodeIndex++;
                    return renderNodeIndex;
                }(logViewDef, logNodeIndex), currRenderNodeIndex = -1;
                logViewDef.factory(function() {
                    var _a;
                    return ++currRenderNodeIndex === renderNodeIndex ? (_a = console.error).bind.apply(_a, __spread([ console ], values)) : NOOP;
                }), currRenderNodeIndex < renderNodeIndex && (console.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), 
                console.error.apply(console, __spread(values)));
            }, DebugContext_;
        }();
        function collectReferences(view, nodeDef, references) {
            for (var refName in nodeDef.references) references[refName] = getQueryValue(view, nodeDef, nodeDef.references[refName]);
        }
        function callWithDebugContext(action, fn, self, args) {
            var oldAction = _currentAction, oldView = _currentView, oldNodeIndex = _currentNodeIndex;
            try {
                _currentAction = action;
                var result = fn.apply(self, args);
                return _currentView = oldView, _currentNodeIndex = oldNodeIndex, _currentAction = oldAction, 
                result;
            } catch (e) {
                if (getDebugContext(e) || !_currentView) throw e;
                throw function(err, context) {
                    return err instanceof Error || (
                    // errors that are not Error instances don't have a stack,
                    // so it is ok to wrap them into a new Error object...
                    err = new Error(err.toString())), _addDebugContext(err, context), err;
                }(e, getCurrentDebugContext());
            }
        }
        function getCurrentDebugContext() {
            return _currentView ? new core_DebugContext_(_currentView, _currentNodeIndex) : null;
        }
        var DebugRendererFactory2 = /** @class */ /* */ function() {
            function DebugRendererFactory2(delegate) {
                this.delegate = delegate;
            }
            return DebugRendererFactory2.prototype.createRenderer = function(element, renderData) {
                return new DebugRenderer2(this.delegate.createRenderer(element, renderData));
            }, DebugRendererFactory2.prototype.begin = function() {
                this.delegate.begin && this.delegate.begin();
            }, DebugRendererFactory2.prototype.end = function() {
                this.delegate.end && this.delegate.end();
            }, DebugRendererFactory2.prototype.whenRenderingDone = function() {
                return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null);
            }, DebugRendererFactory2;
        }(), DebugRenderer2 = /** @class */ /* */ function() {
            function DebugRenderer2(delegate) {
                this.delegate = delegate, 
                /**
         * Factory function used to create a `DebugContext` when a node is created.
         *
         * The `DebugContext` allows to retrieve information about the nodes that are useful in tests.
         *
         * The factory is configurable so that the `DebugRenderer2` could instantiate either a View Engine
         * or a Render context.
         */
                this.debugContextFactory = getCurrentDebugContext, this.data = this.delegate.data;
            }
            return DebugRenderer2.prototype.createDebugContext = function(nativeElement) {
                return this.debugContextFactory(nativeElement);
            }, DebugRenderer2.prototype.destroyNode = function(node) {
                !function(node) {
                    _nativeNodeToDebugNode.delete(node.nativeNode);
                }(getDebugNode(node)), this.delegate.destroyNode && this.delegate.destroyNode(node);
            }, DebugRenderer2.prototype.destroy = function() {
                this.delegate.destroy();
            }, DebugRenderer2.prototype.createElement = function(name, namespace) {
                var el = this.delegate.createElement(name, namespace), debugCtx = this.createDebugContext(el);
                if (debugCtx) {
                    var debugEl = new core_DebugElement_PRE_R3_(el, null, debugCtx);
                    debugEl.name = name, indexDebugNode(debugEl);
                }
                return el;
            }, DebugRenderer2.prototype.createComment = function(value) {
                var comment = this.delegate.createComment(value), debugCtx = this.createDebugContext(comment);
                return debugCtx && indexDebugNode(new DebugNode__PRE_R3__(comment, null, debugCtx)), 
                comment;
            }, DebugRenderer2.prototype.createText = function(value) {
                var text = this.delegate.createText(value), debugCtx = this.createDebugContext(text);
                return debugCtx && indexDebugNode(new DebugNode__PRE_R3__(text, null, debugCtx)), 
                text;
            }, DebugRenderer2.prototype.appendChild = function(parent, newChild) {
                var debugEl = getDebugNode(parent), debugChildEl = getDebugNode(newChild);
                debugEl && debugChildEl && debugEl instanceof core_DebugElement_PRE_R3_ && debugEl.addChild(debugChildEl), 
                this.delegate.appendChild(parent, newChild);
            }, DebugRenderer2.prototype.insertBefore = function(parent, newChild, refChild) {
                var debugEl = getDebugNode(parent), debugChildEl = getDebugNode(newChild), debugRefEl = getDebugNode(refChild);
                debugEl && debugChildEl && debugEl instanceof core_DebugElement_PRE_R3_ && debugEl.insertBefore(debugRefEl, debugChildEl), 
                this.delegate.insertBefore(parent, newChild, refChild);
            }, DebugRenderer2.prototype.removeChild = function(parent, oldChild) {
                var debugEl = getDebugNode(parent), debugChildEl = getDebugNode(oldChild);
                debugEl && debugChildEl && debugEl instanceof core_DebugElement_PRE_R3_ && debugEl.removeChild(debugChildEl), 
                this.delegate.removeChild(parent, oldChild);
            }, DebugRenderer2.prototype.selectRootElement = function(selectorOrNode, preserveContent) {
                var el = this.delegate.selectRootElement(selectorOrNode, preserveContent), debugCtx = getCurrentDebugContext();
                return debugCtx && indexDebugNode(new core_DebugElement_PRE_R3_(el, null, debugCtx)), 
                el;
            }, DebugRenderer2.prototype.setAttribute = function(el, name, value, namespace) {
                var debugEl = getDebugNode(el);
                debugEl && debugEl instanceof core_DebugElement_PRE_R3_ && (debugEl.attributes[namespace ? namespace + ":" + name : name] = value), 
                this.delegate.setAttribute(el, name, value, namespace);
            }, DebugRenderer2.prototype.removeAttribute = function(el, name, namespace) {
                var debugEl = getDebugNode(el);
                debugEl && debugEl instanceof core_DebugElement_PRE_R3_ && (debugEl.attributes[namespace ? namespace + ":" + name : name] = null), 
                this.delegate.removeAttribute(el, name, namespace);
            }, DebugRenderer2.prototype.addClass = function(el, name) {
                var debugEl = getDebugNode(el);
                debugEl && debugEl instanceof core_DebugElement_PRE_R3_ && (debugEl.classes[name] = !0), 
                this.delegate.addClass(el, name);
            }, DebugRenderer2.prototype.removeClass = function(el, name) {
                var debugEl = getDebugNode(el);
                debugEl && debugEl instanceof core_DebugElement_PRE_R3_ && (debugEl.classes[name] = !1), 
                this.delegate.removeClass(el, name);
            }, DebugRenderer2.prototype.setStyle = function(el, style, value, flags) {
                var debugEl = getDebugNode(el);
                debugEl && debugEl instanceof core_DebugElement_PRE_R3_ && (debugEl.styles[style] = value), 
                this.delegate.setStyle(el, style, value, flags);
            }, DebugRenderer2.prototype.removeStyle = function(el, style, flags) {
                var debugEl = getDebugNode(el);
                debugEl && debugEl instanceof core_DebugElement_PRE_R3_ && (debugEl.styles[style] = null), 
                this.delegate.removeStyle(el, style, flags);
            }, DebugRenderer2.prototype.setProperty = function(el, name, value) {
                var debugEl = getDebugNode(el);
                debugEl && debugEl instanceof core_DebugElement_PRE_R3_ && (debugEl.properties[name] = value), 
                this.delegate.setProperty(el, name, value);
            }, DebugRenderer2.prototype.listen = function(target, eventName, callback) {
                if ("string" != typeof target) {
                    var debugEl = getDebugNode(target);
                    debugEl && debugEl.listeners.push(new EventListener(eventName, callback));
                }
                return this.delegate.listen(target, eventName, callback);
            }, DebugRenderer2.prototype.parentNode = function(node) {
                return this.delegate.parentNode(node);
            }, DebugRenderer2.prototype.nextSibling = function(node) {
                return this.delegate.nextSibling(node);
            }, DebugRenderer2.prototype.setValue = function(node, value) {
                return this.delegate.setValue(node, value);
            }, DebugRenderer2;
        }();
        // Attention: this function is called as top level function.
        // Putting any logic in here will destroy closure tree shaking!
        function createNgModuleFactory(ngModuleType, bootstrapComponents, defFactory) {
            return new core_NgModuleFactory_(ngModuleType, bootstrapComponents, defFactory);
        }
        var core_NgModuleFactory_ = /** @class */ /* */ function(_super) {
            function NgModuleFactory_(moduleType, _bootstrapComponents, _ngModuleDefFactory) {
                var _this = 
                // Attention: this ctor is called as top level function.
                // Putting any logic in here will destroy closure tree shaking!
                _super.call(this) || this;
                return _this.moduleType = moduleType, _this._bootstrapComponents = _bootstrapComponents, 
                _this._ngModuleDefFactory = _ngModuleDefFactory, _this;
            }
            return __extends(NgModuleFactory_, _super), NgModuleFactory_.prototype.create = function(parentInjector) {
                !function() {
                    if (!initialized) {
                        initialized = !0;
                        var services = isDevMode() ? {
                            setCurrentNode: debugSetCurrentNode,
                            createRootView: debugCreateRootView,
                            createEmbeddedView: debugCreateEmbeddedView,
                            createComponentView: debugCreateComponentView,
                            createNgModuleRef: debugCreateNgModuleRef,
                            overrideProvider: debugOverrideProvider,
                            overrideComponentView: debugOverrideComponentView,
                            clearOverrides: debugClearOverrides,
                            checkAndUpdateView: debugCheckAndUpdateView,
                            checkNoChangesView: debugCheckNoChangesView,
                            destroyView: debugDestroyView,
                            createDebugContext: function(view, nodeIndex) {
                                return new core_DebugContext_(view, nodeIndex);
                            },
                            handleEvent: debugHandleEvent,
                            updateDirectives: debugUpdateDirectives,
                            updateRenderer: debugUpdateRenderer
                        } : {
                            setCurrentNode: function() {},
                            createRootView: createProdRootView,
                            createEmbeddedView: createEmbeddedView,
                            createComponentView: createComponentView,
                            createNgModuleRef: createNgModuleRef,
                            overrideProvider: NOOP,
                            overrideComponentView: NOOP,
                            clearOverrides: NOOP,
                            checkAndUpdateView: checkAndUpdateView,
                            checkNoChangesView: checkNoChangesView,
                            destroyView: destroyView,
                            createDebugContext: function(view, nodeIndex) {
                                return new core_DebugContext_(view, nodeIndex);
                            },
                            handleEvent: function(view, nodeIndex, eventName, event) {
                                return view.def.handleEvent(view, nodeIndex, eventName, event);
                            },
                            updateDirectives: function(view, checkType) {
                                return view.def.updateDirectives(0 /* CheckAndUpdate */ === checkType ? prodCheckAndUpdateNode : prodCheckNoChangesNode, view);
                            },
                            updateRenderer: function(view, checkType) {
                                return view.def.updateRenderer(0 /* CheckAndUpdate */ === checkType ? prodCheckAndUpdateNode : prodCheckNoChangesNode, view);
                            }
                        };
                        Services.setCurrentNode = services.setCurrentNode, Services.createRootView = services.createRootView, 
                        Services.createEmbeddedView = services.createEmbeddedView, Services.createComponentView = services.createComponentView, 
                        Services.createNgModuleRef = services.createNgModuleRef, Services.overrideProvider = services.overrideProvider, 
                        Services.overrideComponentView = services.overrideComponentView, Services.clearOverrides = services.clearOverrides, 
                        Services.checkAndUpdateView = services.checkAndUpdateView, Services.checkNoChangesView = services.checkNoChangesView, 
                        Services.destroyView = services.destroyView, Services.resolveDep = resolveDep, Services.createDebugContext = services.createDebugContext, 
                        Services.handleEvent = services.handleEvent, Services.updateDirectives = services.updateDirectives, 
                        Services.updateRenderer = services.updateRenderer, Services.dirtyParentQueries = dirtyParentQueries;
                    }
                }();
                // Clone the NgModuleDefinition so that any tree shakeable provider definition
                // added to this instance of the NgModuleRef doesn't affect the cached copy.
                // See https://github.com/angular/angular/issues/25018.
                var def = function(def) {
                    var providers = Array.from(def.providers), modules = Array.from(def.modules), providersByKey = {};
                    for (var key in def.providersByKey) providersByKey[key] = def.providersByKey[key];
                    return {
                        factory: def.factory,
                        isRoot: def.isRoot,
                        providers: providers,
                        modules: modules,
                        providersByKey: providersByKey
                    };
                }(resolveDefinition(this._ngModuleDefFactory));
                return Services.createNgModuleRef(this.moduleType, parentInjector || Injector.NULL, this._bootstrapComponents, def);
            }, NgModuleFactory_;
        }(NgModuleFactory), AppModule = /** @class */ /* */ function() {
            return function() {};
        }(), AppComponent = /** @class */ /* */ function() {
            return function() {
                this.title = "esm-build";
            };
        }(), PlatformLocation = /** @class */ /* */ function() {
            return function() {};
        }(), LOCATION_INITIALIZED = /* */ new InjectionToken("Location Initialized"), LocationStrategy = /** @class */ /* */ function() {
            return function() {};
        }(), APP_BASE_HREF = /* */ new InjectionToken("appBaseHref"), common_Location = /** @class */ /* */ function() {
            function Location(platformStrategy) {
                var _this = this;
                /** @internal */                this._subject = new core_EventEmitter(), this._platformStrategy = platformStrategy;
                var browserBaseHref = this._platformStrategy.getBaseHref();
                this._baseHref = Location_1.stripTrailingSlash(_stripIndexHtml(browserBaseHref)), 
                this._platformStrategy.onPopState(function(ev) {
                    _this._subject.emit({
                        url: _this.path(!0),
                        pop: !0,
                        state: ev.state,
                        type: ev.type
                    });
                });
            }
            var Location_1;
            return Location_1 = Location, 
            /**
     * Returns the normalized URL path.
     */
            // TODO: vsavkin. Remove the boolean flag and always include hash once the deprecated router is
            // removed.
            Location.prototype.path = function(includeHash) {
                return void 0 === includeHash && (includeHash = !1), this.normalize(this._platformStrategy.path(includeHash));
            }, 
            /**
     * Normalizes the given path and compares to the current normalized path.
     */
            Location.prototype.isCurrentPathEqualTo = function(path, query) {
                return void 0 === query && (query = ""), this.path() == this.normalize(path + Location_1.normalizeQueryParams(query));
            }, 
            /**
     * Given a string representing a URL, returns the normalized URL path without leading or
     * trailing slashes.
     */
            Location.prototype.normalize = function(url) {
                return Location_1.stripTrailingSlash(function(baseHref, url) {
                    return baseHref && url.startsWith(baseHref) ? url.substring(baseHref.length) : url;
                }(this._baseHref, _stripIndexHtml(url)));
            }, 
            /**
     * Given a string representing a URL, returns the platform-specific external URL path.
     * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
     * before normalizing. This method will also add a hash if `HashLocationStrategy` is
     * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
     */
            Location.prototype.prepareExternalUrl = function(url) {
                return url && "/" !== url[0] && (url = "/" + url), this._platformStrategy.prepareExternalUrl(url);
            }, 
            // TODO: rename this method to pushState
            /**
     * Changes the browsers URL to the normalized version of the given URL, and pushes a
     * new item onto the platform's history.
     */
            Location.prototype.go = function(path, query, state) {
                void 0 === query && (query = ""), void 0 === state && (state = null), this._platformStrategy.pushState(state, "", path, query);
            }, 
            /**
     * Changes the browsers URL to the normalized version of the given URL, and replaces
     * the top item on the platform's history stack.
     */
            Location.prototype.replaceState = function(path, query, state) {
                void 0 === query && (query = ""), void 0 === state && (state = null), this._platformStrategy.replaceState(state, "", path, query);
            }, 
            /**
     * Navigates forward in the platform's history.
     */
            Location.prototype.forward = function() {
                this._platformStrategy.forward();
            }, 
            /**
     * Navigates back in the platform's history.
     */
            Location.prototype.back = function() {
                this._platformStrategy.back();
            }, 
            /**
     * Subscribe to the platform's `popState` events.
     */
            Location.prototype.subscribe = function(onNext, onThrow, onReturn) {
                return this._subject.subscribe({
                    next: onNext,
                    error: onThrow,
                    complete: onReturn
                });
            }, 
            /**
     * Given a string of url parameters, prepend with '?' if needed, otherwise return parameters as
     * is.
     */
            Location.normalizeQueryParams = function(params) {
                return params && "?" !== params[0] ? "?" + params : params;
            }, 
            /**
     * Given 2 parts of a url, join them with a slash if needed.
     */
            Location.joinWithSlash = function(start, end) {
                if (0 == start.length) return end;
                if (0 == end.length) return start;
                var slashes = 0;
                return start.endsWith("/") && slashes++, end.startsWith("/") && slashes++, 2 == slashes ? start + end.substring(1) : 1 == slashes ? start + end : start + "/" + end;
            }, 
            /**
     * If url has a trailing slash, remove it, otherwise return url as is. This
     * method looks for the first occurrence of either #, ?, or the end of the
     * line as `/` characters after any of these should not be replaced.
     */
            Location.stripTrailingSlash = function(url) {
                var match = url.match(/#|\?|$/), pathEndIdx = match && match.index || url.length;
                return url.slice(0, pathEndIdx - ("/" === url[pathEndIdx - 1] ? 1 : 0)) + url.slice(pathEndIdx);
            }, Location;
        }();
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        // clang-format on
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        // This file only reexports content of the `src` folder. Keep it that way.
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * Generated bundle index. Do not edit.
 */
        // CONCATENATED MODULE: ./src/environments/environment.ts
                function _stripIndexHtml(url) {
            return url.replace(/\/index.html$/, "");
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * @description
 * A {@link LocationStrategy} used to configure the {@link Location} service to
 * represent its state in the
 * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
 * of the browser's URL.
 *
 * For instance, if you call `location.go('/foo')`, the browser's URL will become
 * `example.com#/foo`.
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example common/location/ts/hash_location_component.ts region='LocationComponent'}
 *
 * @publicApi
 */        var common_HashLocationStrategy = /** @class */ /* */ function(_super) {
            function HashLocationStrategy(_platformLocation, _baseHref) {
                var _this = _super.call(this) || this;
                return _this._platformLocation = _platformLocation, _this._baseHref = "", null != _baseHref && (_this._baseHref = _baseHref), 
                _this;
            }
            return __extends(HashLocationStrategy, _super), HashLocationStrategy.prototype.onPopState = function(fn) {
                this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn);
            }, HashLocationStrategy.prototype.getBaseHref = function() {
                return this._baseHref;
            }, HashLocationStrategy.prototype.path = function(includeHash) {
                void 0 === includeHash && (includeHash = !1);
                // the hash value is always prefixed with a `#`
                // and if it is empty then it will stay empty
                                var path = this._platformLocation.hash;
                return null == path && (path = "#"), path.length > 0 ? path.substring(1) : path;
            }, HashLocationStrategy.prototype.prepareExternalUrl = function(internal) {
                var url = common_Location.joinWithSlash(this._baseHref, internal);
                return url.length > 0 ? "#" + url : url;
            }, HashLocationStrategy.prototype.pushState = function(state, title, path, queryParams) {
                var url = this.prepareExternalUrl(path + common_Location.normalizeQueryParams(queryParams));
                0 == url.length && (url = this._platformLocation.pathname), this._platformLocation.pushState(state, title, url);
            }, HashLocationStrategy.prototype.replaceState = function(state, title, path, queryParams) {
                var url = this.prepareExternalUrl(path + common_Location.normalizeQueryParams(queryParams));
                0 == url.length && (url = this._platformLocation.pathname), this._platformLocation.replaceState(state, title, url);
            }, HashLocationStrategy.prototype.forward = function() {
                this._platformLocation.forward();
            }, HashLocationStrategy.prototype.back = function() {
                this._platformLocation.back();
            }, HashLocationStrategy;
        }(LocationStrategy), common_PathLocationStrategy = /** @class */ /* */ function(_super) {
            function PathLocationStrategy(_platformLocation, href) {
                var _this = _super.call(this) || this;
                if (_this._platformLocation = _platformLocation, null == href && (href = _this._platformLocation.getBaseHrefFromDOM()), 
                null == href) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                return _this._baseHref = href, _this;
            }
            return __extends(PathLocationStrategy, _super), PathLocationStrategy.prototype.onPopState = function(fn) {
                this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn);
            }, PathLocationStrategy.prototype.getBaseHref = function() {
                return this._baseHref;
            }, PathLocationStrategy.prototype.prepareExternalUrl = function(internal) {
                return common_Location.joinWithSlash(this._baseHref, internal);
            }, PathLocationStrategy.prototype.path = function(includeHash) {
                void 0 === includeHash && (includeHash = !1);
                var pathname = this._platformLocation.pathname + common_Location.normalizeQueryParams(this._platformLocation.search), hash = this._platformLocation.hash;
                return hash && includeHash ? "" + pathname + hash : pathname;
            }, PathLocationStrategy.prototype.pushState = function(state, title, url, queryParams) {
                var externalUrl = this.prepareExternalUrl(url + common_Location.normalizeQueryParams(queryParams));
                this._platformLocation.pushState(state, title, externalUrl);
            }, PathLocationStrategy.prototype.replaceState = function(state, title, url, queryParams) {
                var externalUrl = this.prepareExternalUrl(url + common_Location.normalizeQueryParams(queryParams));
                this._platformLocation.replaceState(state, title, externalUrl);
            }, PathLocationStrategy.prototype.forward = function() {
                this._platformLocation.forward();
            }, PathLocationStrategy.prototype.back = function() {
                this._platformLocation.back();
            }, PathLocationStrategy;
        }(LocationStrategy), u = void 0, localeEn = [ "en", [ [ "a", "p" ], [ "AM", "PM" ], u ], [ [ "AM", "PM" ], u, u ], [ [ "S", "M", "T", "W", "T", "F", "S" ], [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ] ], u, [ [ "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D" ], [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ], [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ] ], u, [ [ "B", "A" ], [ "BC", "AD" ], [ "Before Christ", "Anno Domini" ] ], 0, [ 6, 0 ], [ "M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y" ], [ "h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz" ], [ "{1}, {0}", u, "{1} 'at' {0}", u ], [ ".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":" ], [ "#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0" ], "$", "US Dollar", {}, function(n) {
            var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === i && 0 === v ? 1 : 5;
        } ], LOCALE_DATA = {}, common_Plural = /* */ function(Plural) {
            return Plural[Plural.Zero = 0] = "Zero", Plural[Plural.One = 1] = "One", Plural[Plural.Two = 2] = "Two", 
            Plural[Plural.Few = 3] = "Few", Plural[Plural.Many = 4] = "Many", Plural[Plural.Other = 5] = "Other", 
            Plural;
        }({}), DEPRECATED_PLURAL_FN = /* */ new InjectionToken("UseV4Plurals"), NgLocalization = /** @class */ /* */ function() {
            return function() {};
        }(), common_NgLocaleLocalization = /** @class */ /* */ function(_super) {
            function NgLocaleLocalization(locale, 
            /** @deprecated from v5 */
            deprecatedPluralFn) {
                var _this = _super.call(this) || this;
                return _this.locale = locale, _this.deprecatedPluralFn = deprecatedPluralFn, _this;
            }
            return __extends(NgLocaleLocalization, _super), NgLocaleLocalization.prototype.getPluralCategory = function(value, locale) {
                switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(locale || this.locale, value) : 
                /**
 * The locale plural function used by ICU expressions to determine the plural case to use.
 * See {@link NgPlural} for more information.
 *
 * @publicApi
 */
                function(locale) {
                    /**
 * Finds the locale data for a locale id
 *
 * @publicApi
 */
                    return function(locale) {
                        var normalizedLocale = locale.toLowerCase().replace(/_/g, "-"), match = LOCALE_DATA[normalizedLocale];
                        if (match) return match;
                        // let's try to find a parent locale
                                                var parentLocale = normalizedLocale.split("-")[0];
                        if (match = LOCALE_DATA[parentLocale]) return match;
                        if ("en" === parentLocale) return localeEn;
                        throw new Error('Missing locale data for the locale "' + locale + '".');
                    }
                    /**
 * Returns the currency symbol for a given currency code, or the code if no symbol available
 * (e.g.: format narrow = $, format wide = US$, code = USD)
 * If no locale is provided, it uses the locale "en" by default
 *
 * @publicApi
 */ (locale)[18 /* PluralCase */ ];
                }(locale || this.locale)(value)) {
                  case common_Plural.Zero:
                    return "zero";

                  case common_Plural.One:
                    return "one";

                  case common_Plural.Two:
                    return "two";

                  case common_Plural.Few:
                    return "few";

                  case common_Plural.Many:
                    return "many";

                  default:
                    return "other";
                }
            }, NgLocaleLocalization;
        }(NgLocalization), CommonModule = /** @class */ /* */ function() {
            return function() {};
        }(), DOCUMENT = /* */ new InjectionToken("DocumentToken"), PLATFORM_SERVER_ID = "server", common_ViewportScroller = /** @class */ /* */ function() {
            function ViewportScroller() {}
            // De-sugared tree-shakable injection
            // See #23917
            /** @nocollapse */            return ViewportScroller.ngInjectableDef = defineInjectable({
                providedIn: "root",
                factory: function() {
                    return new BrowserViewportScroller(inject(DOCUMENT), window);
                }
            }), ViewportScroller;
        }(), BrowserViewportScroller = /** @class */ /* */ function() {
            function BrowserViewportScroller(document, window) {
                this.document = document, this.window = window, this.offset = function() {
                    return [ 0, 0 ];
                };
            }
            /**
     * Configures the top offset used when scrolling to an anchor.
     * @param offset A position in screen coordinates (a tuple with x and y values)
     * or a function that returns the top offset position.
     *
     */            return BrowserViewportScroller.prototype.setOffset = function(offset) {
                this.offset = Array.isArray(offset) ? function() {
                    return offset;
                } : offset;
            }, 
            /**
     * Retrieves the current scroll position.
     * @returns The position in screen coordinates.
     */
            BrowserViewportScroller.prototype.getScrollPosition = function() {
                return this.supportScrollRestoration() ? [ this.window.scrollX, this.window.scrollY ] : [ 0, 0 ];
            }, 
            /**
     * Sets the scroll position.
     * @param position The new position in screen coordinates.
     */
            BrowserViewportScroller.prototype.scrollToPosition = function(position) {
                this.supportScrollRestoration() && this.window.scrollTo(position[0], position[1]);
            }, 
            /**
     * Scrolls to an anchor element.
     * @param anchor The ID of the anchor element.
     */
            BrowserViewportScroller.prototype.scrollToAnchor = function(anchor) {
                if (this.supportScrollRestoration()) {
                    var elSelectedById = this.document.querySelector("#" + anchor);
                    if (elSelectedById) return void this.scrollToElement(elSelectedById);
                    var elSelectedByName = this.document.querySelector("[name='" + anchor + "']");
                    if (elSelectedByName) return void this.scrollToElement(elSelectedByName);
                }
            }, 
            /**
     * Disables automatic scroll restoration provided by the browser.
     */
            BrowserViewportScroller.prototype.setHistoryScrollRestoration = function(scrollRestoration) {
                if (this.supportScrollRestoration()) {
                    var history_1 = this.window.history;
                    history_1 && history_1.scrollRestoration && (history_1.scrollRestoration = scrollRestoration);
                }
            }, BrowserViewportScroller.prototype.scrollToElement = function(el) {
                var rect = el.getBoundingClientRect(), left = rect.left + this.window.pageXOffset, top = rect.top + this.window.pageYOffset, offset = this.offset();
                this.window.scrollTo(left - offset[0], top - offset[1]);
            }, 
            /**
     * We only support scroll restoration when we can get a hold of window.
     * This means that we do not support this behavior when running in a web worker.
     *
     * Lifting this restriction right now would require more changes in the dom adapter.
     * Since webworkers aren't widely used, we will lift it once RouterScroller is
     * battle-tested.
     */
            BrowserViewportScroller.prototype.supportScrollRestoration = function() {
                try {
                    return !!this.window && !!this.window.scrollTo;
                } catch (_a) {
                    return !1;
                }
            }, BrowserViewportScroller;
        }(), empty_EMPTY = /* */ /* */ new Observable_Observable(function(subscriber) {
            return subscriber.complete();
        });
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * @description
 * A {@link LocationStrategy} used to configure the {@link Location} service to
 * represent its state in the
 * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
 * browser's URL.
 *
 * If you're using `PathLocationStrategy`, you must provide a {@link APP_BASE_HREF}
 * or add a base element to the document. This URL prefix that will be preserved
 * when generating and recognizing URLs.
 *
 * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
 * `location.go('/foo')`, the browser's URL will become
 * `example.com/my/app/foo`.
 *
 * Similarly, if you add `<base href='/my/app'/>` to the document and call
 * `location.go('/foo')`, the browser's URL will become
 * `example.com/my/app/foo`.
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example common/location/ts/path_location_component.ts region='LocationComponent'}
 *
 * @publicApi
 */        function empty_empty(scheduler) {
            return scheduler ? function(scheduler) {
                return new Observable_Observable(function(subscriber) {
                    return scheduler.schedule(function() {
                        return subscriber.complete();
                    });
                });
            }
            // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/scalar.js
            /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */ (scheduler) : empty_EMPTY;
        }
        function scalar(value) {
            var result = new Observable_Observable(function(subscriber) {
                subscriber.next(value), subscriber.complete();
            });
            return result._isScalar = !0, result.value = value, result;
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/of.js
        /** PURE_IMPORTS_START _util_isScheduler,_fromArray,_empty,_scalar PURE_IMPORTS_END */        function of() {
            for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
            var scheduler = args[args.length - 1];
            switch (isScheduler(scheduler) ? args.pop() : scheduler = void 0, args.length) {
              case 0:
                return empty_empty(scheduler);

              case 1:
                return scheduler ? fromArray(args, scheduler) : scalar(args[0]);

              default:
                return fromArray(args, scheduler);
            }
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/BehaviorSubject.js
        /** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */        var BehaviorSubject_BehaviorSubject = /* */ /* */ function(_super) {
            function BehaviorSubject(_value) {
                var _this = _super.call(this) || this;
                return _this._value = _value, _this;
            }
            return __extends(BehaviorSubject, _super), Object.defineProperty(BehaviorSubject.prototype, "value", {
                get: function() {
                    return this.getValue();
                },
                enumerable: !0,
                configurable: !0
            }), BehaviorSubject.prototype._subscribe = function(subscriber) {
                var subscription = _super.prototype._subscribe.call(this, subscriber);
                return subscription && !subscription.closed && subscriber.next(this._value), subscription;
            }, BehaviorSubject.prototype.getValue = function() {
                if (this.hasError) throw this.thrownError;
                if (this.closed) throw new ObjectUnsubscribedError();
                return this._value;
            }, BehaviorSubject.prototype.next = function(value) {
                _super.prototype.next.call(this, this._value = value);
            }, BehaviorSubject;
        }(Subject_Subject);
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/EmptyError.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */        function EmptyErrorImpl() {
            return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", 
            this;
        }
        EmptyErrorImpl.prototype = /* */ /* */ Object.create(Error.prototype);
        var EmptyError = EmptyErrorImpl, NONE = {}, CombineLatestOperator = /* */ /* */ function() {
            function CombineLatestOperator(resultSelector) {
                this.resultSelector = resultSelector;
            }
            return CombineLatestOperator.prototype.call = function(subscriber, source) {
                return source.subscribe(new combineLatest_CombineLatestSubscriber(subscriber, this.resultSelector));
            }, CombineLatestOperator;
        }(), combineLatest_CombineLatestSubscriber = /* */ /* */ function(_super) {
            function CombineLatestSubscriber(destination, resultSelector) {
                var _this = _super.call(this, destination) || this;
                return _this.resultSelector = resultSelector, _this.active = 0, _this.values = [], 
                _this.observables = [], _this;
            }
            return __extends(CombineLatestSubscriber, _super), CombineLatestSubscriber.prototype._next = function(observable) {
                this.values.push(NONE), this.observables.push(observable);
            }, CombineLatestSubscriber.prototype._complete = function() {
                var observables = this.observables, len = observables.length;
                if (0 === len) this.destination.complete(); else {
                    this.active = len, this.toRespond = len;
                    for (var i = 0; i < len; i++) {
                        var observable = observables[i];
                        this.add(subscribeToResult(this, observable, observable, i));
                    }
                }
            }, CombineLatestSubscriber.prototype.notifyComplete = function(unused) {
                0 == (this.active -= 1) && this.destination.complete();
            }, CombineLatestSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                var values = this.values, toRespond = this.toRespond ? values[outerIndex] === NONE ? --this.toRespond : this.toRespond : 0;
                values[outerIndex] = innerValue, 0 === toRespond && (this.resultSelector ? this._tryResultSelector(values) : this.destination.next(values.slice()));
            }, CombineLatestSubscriber.prototype._tryResultSelector = function(values) {
                var result;
                try {
                    result = this.resultSelector.apply(this, values);
                } catch (err) {
                    return void this.destination.error(err);
                }
                this.destination.next(result);
            }, CombineLatestSubscriber;
        }(OuterSubscriber_OuterSubscriber);
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/combineLatest.js
        /** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */        
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/defer.js
        /** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
        function defer(observableFactory) {
            return new Observable_Observable(function(subscriber) {
                var input;
                try {
                    input = observableFactory();
                } catch (err) {
                    return void subscriber.error(err);
                }
                return (input ? from(input) : empty_empty()).subscribe(subscriber);
            });
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/concatAll.js
        /** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */        function concatAll() {
            return mergeAll(1);
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/filter.js
        /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */        function filter(predicate, thisArg) {
            return function(source) {
                return source.lift(new FilterOperator(predicate, thisArg));
            };
        }
        var FilterOperator = /* */ /* */ function() {
            function FilterOperator(predicate, thisArg) {
                this.predicate = predicate, this.thisArg = thisArg;
            }
            return FilterOperator.prototype.call = function(subscriber, source) {
                return source.subscribe(new filter_FilterSubscriber(subscriber, this.predicate, this.thisArg));
            }, FilterOperator;
        }(), filter_FilterSubscriber = /* */ /* */ function(_super) {
            function FilterSubscriber(destination, predicate, thisArg) {
                var _this = _super.call(this, destination) || this;
                return _this.predicate = predicate, _this.thisArg = thisArg, _this.count = 0, _this;
            }
            return __extends(FilterSubscriber, _super), FilterSubscriber.prototype._next = function(value) {
                var result;
                try {
                    result = this.predicate.call(this.thisArg, value, this.count++);
                } catch (err) {
                    return void this.destination.error(err);
                }
                result && this.destination.next(value);
            }, FilterSubscriber;
        }(Subscriber_Subscriber);
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js
        /** PURE_IMPORTS_START  PURE_IMPORTS_END */
        function ArgumentOutOfRangeErrorImpl() {
            return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", 
            this;
        }
        ArgumentOutOfRangeErrorImpl.prototype = /* */ /* */ Object.create(Error.prototype);
        var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/takeLast.js
        /** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */        function takeLast(count) {
            return function(source) {
                return 0 === count ? empty_empty() : source.lift(new takeLast_TakeLastOperator(count));
            };
        }
        var takeLast_TakeLastOperator = /* */ /* */ function() {
            function TakeLastOperator(total) {
                if (this.total = total, this.total < 0) throw new ArgumentOutOfRangeError();
            }
            return TakeLastOperator.prototype.call = function(subscriber, source) {
                return source.subscribe(new takeLast_TakeLastSubscriber(subscriber, this.total));
            }, TakeLastOperator;
        }(), takeLast_TakeLastSubscriber = /* */ /* */ function(_super) {
            function TakeLastSubscriber(destination, total) {
                var _this = _super.call(this, destination) || this;
                return _this.total = total, _this.ring = new Array(), _this.count = 0, _this;
            }
            return __extends(TakeLastSubscriber, _super), TakeLastSubscriber.prototype._next = function(value) {
                var ring = this.ring, total = this.total, count = this.count++;
                ring.length < total ? ring.push(value) : ring[count % total] = value;
            }, TakeLastSubscriber.prototype._complete = function() {
                var destination = this.destination, count = this.count;
                if (count > 0) for (var total = this.count >= this.total ? this.total : this.count, ring = this.ring, i = 0; i < total; i++) {
                    var idx = count++ % total;
                    destination.next(ring[idx]);
                }
                destination.complete();
            }, TakeLastSubscriber;
        }(Subscriber_Subscriber);
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/tap.js
        /** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */
        function tap(nextOrObserver, error, complete) {
            return function(source) {
                return source.lift(new DoOperator(nextOrObserver, error, complete));
            };
        }
        var DoOperator = /* */ /* */ function() {
            function DoOperator(nextOrObserver, error, complete) {
                this.nextOrObserver = nextOrObserver, this.error = error, this.complete = complete;
            }
            return DoOperator.prototype.call = function(subscriber, source) {
                return source.subscribe(new tap_TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
            }, DoOperator;
        }(), tap_TapSubscriber = /* */ /* */ function(_super) {
            function TapSubscriber(destination, observerOrNext, error, complete) {
                var _this = _super.call(this, destination) || this;
                return _this._tapNext = noop, _this._tapError = noop, _this._tapComplete = noop, 
                _this._tapError = error || noop, _this._tapComplete = complete || noop, isFunction(observerOrNext) ? (_this._context = _this, 
                _this._tapNext = observerOrNext) : observerOrNext && (_this._context = observerOrNext, 
                _this._tapNext = observerOrNext.next || noop, _this._tapError = observerOrNext.error || noop, 
                _this._tapComplete = observerOrNext.complete || noop), _this;
            }
            return __extends(TapSubscriber, _super), TapSubscriber.prototype._next = function(value) {
                try {
                    this._tapNext.call(this._context, value);
                } catch (err) {
                    return void this.destination.error(err);
                }
                this.destination.next(value);
            }, TapSubscriber.prototype._error = function(err) {
                try {
                    this._tapError.call(this._context, err);
                } catch (err) {
                    return void this.destination.error(err);
                }
                this.destination.error(err);
            }, TapSubscriber.prototype._complete = function() {
                try {
                    this._tapComplete.call(this._context);
                } catch (err) {
                    return void this.destination.error(err);
                }
                return this.destination.complete();
            }, TapSubscriber;
        }(Subscriber_Subscriber), throwIfEmpty = function(errorFactory) {
            return void 0 === errorFactory && (errorFactory = defaultErrorFactory), tap({
                hasValue: !1,
                next: function() {
                    this.hasValue = !0;
                },
                complete: function() {
                    if (!this.hasValue) throw errorFactory();
                }
            });
        };
        function defaultErrorFactory() {
            return new EmptyError();
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js
        /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */        function defaultIfEmpty(defaultValue) {
            return void 0 === defaultValue && (defaultValue = null), function(source) {
                return source.lift(new DefaultIfEmptyOperator(defaultValue));
            };
        }
        var DefaultIfEmptyOperator = /* */ /* */ function() {
            function DefaultIfEmptyOperator(defaultValue) {
                this.defaultValue = defaultValue;
            }
            return DefaultIfEmptyOperator.prototype.call = function(subscriber, source) {
                return source.subscribe(new defaultIfEmpty_DefaultIfEmptySubscriber(subscriber, this.defaultValue));
            }, DefaultIfEmptyOperator;
        }(), defaultIfEmpty_DefaultIfEmptySubscriber = /* */ /* */ function(_super) {
            function DefaultIfEmptySubscriber(destination, defaultValue) {
                var _this = _super.call(this, destination) || this;
                return _this.defaultValue = defaultValue, _this.isEmpty = !0, _this;
            }
            return __extends(DefaultIfEmptySubscriber, _super), DefaultIfEmptySubscriber.prototype._next = function(value) {
                this.isEmpty = !1, this.destination.next(value);
            }, DefaultIfEmptySubscriber.prototype._complete = function() {
                this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
            }, DefaultIfEmptySubscriber;
        }(Subscriber_Subscriber);
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/last.js
        /** PURE_IMPORTS_START _util_EmptyError,_filter,_takeLast,_throwIfEmpty,_defaultIfEmpty,_util_identity PURE_IMPORTS_END */
        function last_last(predicate, defaultValue) {
            var hasDefaultValue = arguments.length >= 2;
            return function(source) {
                return source.pipe(predicate ? filter(function(v, i) {
                    return predicate(v, i, source);
                }) : identity, takeLast(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function() {
                    return new EmptyError();
                }));
            };
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/catchError.js
        /** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */        function catchError(selector) {
            return function(source) {
                var operator = new CatchOperator(selector), caught = source.lift(operator);
                return operator.caught = caught;
            };
        }
        var CatchOperator = /* */ /* */ function() {
            function CatchOperator(selector) {
                this.selector = selector;
            }
            return CatchOperator.prototype.call = function(subscriber, source) {
                return source.subscribe(new catchError_CatchSubscriber(subscriber, this.selector, this.caught));
            }, CatchOperator;
        }(), catchError_CatchSubscriber = /* */ /* */ function(_super) {
            function CatchSubscriber(destination, selector, caught) {
                var _this = _super.call(this, destination) || this;
                return _this.selector = selector, _this.caught = caught, _this;
            }
            return __extends(CatchSubscriber, _super), CatchSubscriber.prototype.error = function(err) {
                if (!this.isStopped) {
                    var result = void 0;
                    try {
                        result = this.selector(err, this.caught);
                    } catch (err2) {
                        return void _super.prototype.error.call(this, err2);
                    }
                    this._unsubscribeAndRecycle();
                    var innerSubscriber = new InnerSubscriber_InnerSubscriber(this, void 0, void 0);
                    this.add(innerSubscriber), subscribeToResult(this, result, void 0, void 0, innerSubscriber);
                }
            }, CatchSubscriber;
        }(OuterSubscriber_OuterSubscriber);
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/take.js
        /** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */
        function take(count) {
            return function(source) {
                return 0 === count ? empty_empty() : source.lift(new take_TakeOperator(count));
            };
        }
        var take_TakeOperator = /* */ /* */ function() {
            function TakeOperator(total) {
                if (this.total = total, this.total < 0) throw new ArgumentOutOfRangeError();
            }
            return TakeOperator.prototype.call = function(subscriber, source) {
                return source.subscribe(new take_TakeSubscriber(subscriber, this.total));
            }, TakeOperator;
        }(), take_TakeSubscriber = /* */ /* */ function(_super) {
            function TakeSubscriber(destination, total) {
                var _this = _super.call(this, destination) || this;
                return _this.total = total, _this.count = 0, _this;
            }
            return __extends(TakeSubscriber, _super), TakeSubscriber.prototype._next = function(value) {
                var total = this.total, count = ++this.count;
                count <= total && (this.destination.next(value), count === total && (this.destination.complete(), 
                this.unsubscribe()));
            }, TakeSubscriber;
        }(Subscriber_Subscriber);
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/first.js
        /** PURE_IMPORTS_START _util_EmptyError,_filter,_take,_defaultIfEmpty,_throwIfEmpty,_util_identity PURE_IMPORTS_END */
        function first(predicate, defaultValue) {
            var hasDefaultValue = arguments.length >= 2;
            return function(source) {
                return source.pipe(predicate ? filter(function(v, i) {
                    return predicate(v, i, source);
                }) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function() {
                    return new EmptyError();
                }));
            };
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/every.js
        /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */        var EveryOperator = /* */ /* */ function() {
            function EveryOperator(predicate, thisArg, source) {
                this.predicate = predicate, this.thisArg = thisArg, this.source = source;
            }
            return EveryOperator.prototype.call = function(observer, source) {
                return source.subscribe(new every_EverySubscriber(observer, this.predicate, this.thisArg, this.source));
            }, EveryOperator;
        }(), every_EverySubscriber = /* */ /* */ function(_super) {
            function EverySubscriber(destination, predicate, thisArg, source) {
                var _this = _super.call(this, destination) || this;
                return _this.predicate = predicate, _this.thisArg = thisArg, _this.source = source, 
                _this.index = 0, _this.thisArg = thisArg || _this, _this;
            }
            return __extends(EverySubscriber, _super), EverySubscriber.prototype.notifyComplete = function(everyValueMatch) {
                this.destination.next(everyValueMatch), this.destination.complete();
            }, EverySubscriber.prototype._next = function(value) {
                var result = !1;
                try {
                    result = this.predicate.call(this.thisArg, value, this.index++, this.source);
                } catch (err) {
                    return void this.destination.error(err);
                }
                result || this.notifyComplete(!1);
            }, EverySubscriber.prototype._complete = function() {
                this.notifyComplete(!0);
            }, EverySubscriber;
        }(Subscriber_Subscriber);
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/switchMap.js
        /** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult,_map,_observable_from PURE_IMPORTS_END */
        function switchMap(project, resultSelector) {
            return "function" == typeof resultSelector ? function(source) {
                return source.pipe(switchMap(function(a, i) {
                    return from(project(a, i)).pipe(map(function(b, ii) {
                        return resultSelector(a, b, i, ii);
                    }));
                }));
            } : function(source) {
                return source.lift(new SwitchMapOperator(project));
            };
        }
        var SwitchMapOperator = /* */ /* */ function() {
            function SwitchMapOperator(project) {
                this.project = project;
            }
            return SwitchMapOperator.prototype.call = function(subscriber, source) {
                return source.subscribe(new switchMap_SwitchMapSubscriber(subscriber, this.project));
            }, SwitchMapOperator;
        }(), switchMap_SwitchMapSubscriber = /* */ /* */ function(_super) {
            function SwitchMapSubscriber(destination, project) {
                var _this = _super.call(this, destination) || this;
                return _this.project = project, _this.index = 0, _this;
            }
            return __extends(SwitchMapSubscriber, _super), SwitchMapSubscriber.prototype._next = function(value) {
                var result, index = this.index++;
                try {
                    result = this.project(value, index);
                } catch (error) {
                    return void this.destination.error(error);
                }
                this._innerSub(result, value, index);
            }, SwitchMapSubscriber.prototype._innerSub = function(result, value, index) {
                var innerSubscription = this.innerSubscription;
                innerSubscription && innerSubscription.unsubscribe();
                var innerSubscriber = new InnerSubscriber_InnerSubscriber(this, void 0, void 0);
                this.destination.add(innerSubscriber), this.innerSubscription = subscribeToResult(this, result, value, index, innerSubscriber);
            }, SwitchMapSubscriber.prototype._complete = function() {
                var innerSubscription = this.innerSubscription;
                innerSubscription && !innerSubscription.closed || _super.prototype._complete.call(this), 
                this.unsubscribe();
            }, SwitchMapSubscriber.prototype._unsubscribe = function() {
                this.innerSubscription = null;
            }, SwitchMapSubscriber.prototype.notifyComplete = function(innerSub) {
                this.destination.remove(innerSub), this.innerSubscription = null, this.isStopped && _super.prototype._complete.call(this);
            }, SwitchMapSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                this.destination.next(innerValue);
            }, SwitchMapSubscriber;
        }(OuterSubscriber_OuterSubscriber);
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/scan.js
        /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
        function scan(accumulator, seed) {
            var hasSeed = !1;
            return arguments.length >= 2 && (hasSeed = !0), function(source) {
                return source.lift(new ScanOperator(accumulator, seed, hasSeed));
            };
        }
        var ScanOperator = /* */ /* */ function() {
            function ScanOperator(accumulator, seed, hasSeed) {
                void 0 === hasSeed && (hasSeed = !1), this.accumulator = accumulator, this.seed = seed, 
                this.hasSeed = hasSeed;
            }
            return ScanOperator.prototype.call = function(subscriber, source) {
                return source.subscribe(new scan_ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
            }, ScanOperator;
        }(), scan_ScanSubscriber = /* */ /* */ function(_super) {
            function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
                var _this = _super.call(this, destination) || this;
                return _this.accumulator = accumulator, _this._seed = _seed, _this.hasSeed = hasSeed, 
                _this.index = 0, _this;
            }
            return __extends(ScanSubscriber, _super), Object.defineProperty(ScanSubscriber.prototype, "seed", {
                get: function() {
                    return this._seed;
                },
                set: function(value) {
                    this.hasSeed = !0, this._seed = value;
                },
                enumerable: !0,
                configurable: !0
            }), ScanSubscriber.prototype._next = function(value) {
                if (this.hasSeed) return this._tryNext(value);
                this.seed = value, this.destination.next(value);
            }, ScanSubscriber.prototype._tryNext = function(value) {
                var result, index = this.index++;
                try {
                    result = this.accumulator(this.seed, value, index);
                } catch (err) {
                    this.destination.error(err);
                }
                this.seed = result, this.destination.next(result);
            }, ScanSubscriber;
        }(Subscriber_Subscriber);
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/concatMap.js
        /** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */
        function concatMap(project, resultSelector) {
            return mergeMap(project, resultSelector, 1);
        }
        // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/reduce.js
        /** PURE_IMPORTS_START _scan,_takeLast,_defaultIfEmpty,_util_pipe PURE_IMPORTS_END */        var FinallyOperator = /* */ /* */ function() {
            function FinallyOperator(callback) {
                this.callback = callback;
            }
            return FinallyOperator.prototype.call = function(subscriber, source) {
                return source.subscribe(new finalize_FinallySubscriber(subscriber, this.callback));
            }, FinallyOperator;
        }(), finalize_FinallySubscriber = /* */ /* */ function(_super) {
            function FinallySubscriber(destination, callback) {
                var _this = _super.call(this, destination) || this;
                return _this.add(new Subscription_Subscription(callback)), _this;
            }
            return __extends(FinallySubscriber, _super), FinallySubscriber;
        }(Subscriber_Subscriber), _DOM = null;
        function getDOM() {
            return _DOM;
        }
        /* tslint:disable:requireParameterType */
        /**
 * Provides DOM operations in an environment-agnostic way.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
        var nodeContains, _attrToPropMap = {
            class: "className",
            innerHtml: "innerHTML",
            readonly: "readOnly",
            tabindex: "tabIndex"
        }, _keyMap = {
            // The following values are here for cross-browser compatibility and to match the W3C standard
            // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
            "\b": "Backspace",
            "\t": "Tab",
            "\x7f": "Delete",
            "\x1b": "Escape",
            Del: "Delete",
            Esc: "Escape",
            Left: "ArrowLeft",
            Right: "ArrowRight",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Menu: "ContextMenu",
            Scroll: "ScrollLock",
            Win: "OS"
        }, _chromeNumKeyPadMap = {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
            E: "5",
            F: "6",
            G: "7",
            H: "8",
            I: "9",
            J: "*",
            K: "+",
            M: "-",
            N: ".",
            O: "/",
            "`": "0",
            "\x90": "NumLock"
        };
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * Provides DOM operations in any browser environment.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */        _global.Node && (nodeContains = _global.Node.prototype.contains || function(node) {
            return !!(16 & this.compareDocumentPosition(node));
        })
        /**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
        /* tslint:disable:requireParameterType no-console */;
        var urlParsingNode, platform_browser_BrowserDomAdapter = /** @class */ /* */ function(_super) {
            function BrowserDomAdapter() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            return __extends(BrowserDomAdapter, _super), BrowserDomAdapter.prototype.parse = function(templateHtml) {
                throw new Error("parse not implemented");
            }, BrowserDomAdapter.makeCurrent = function() {
                var adapter;
                adapter = new BrowserDomAdapter(), _DOM || (_DOM = adapter);
            }, BrowserDomAdapter.prototype.hasProperty = function(element, name) {
                return name in element;
            }, BrowserDomAdapter.prototype.setProperty = function(el, name, value) {
                el[name] = value;
            }, BrowserDomAdapter.prototype.getProperty = function(el, name) {
                return el[name];
            }, BrowserDomAdapter.prototype.invoke = function(el, methodName, args) {
                var _a;
                (_a = el)[methodName].apply(_a, __spread(args));
            }, 
            // TODO(tbosch): move this into a separate environment class once we have it
            BrowserDomAdapter.prototype.logError = function(error) {
                window.console && (console.error ? console.error(error) : console.log(error));
            }, BrowserDomAdapter.prototype.log = function(error) {
                window.console && window.console.log && window.console.log(error);
            }, BrowserDomAdapter.prototype.logGroup = function(error) {
                window.console && window.console.group && window.console.group(error);
            }, BrowserDomAdapter.prototype.logGroupEnd = function() {
                window.console && window.console.groupEnd && window.console.groupEnd();
            }, Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
                get: function() {
                    return _attrToPropMap;
                },
                enumerable: !0,
                configurable: !0
            }), BrowserDomAdapter.prototype.contains = function(nodeA, nodeB) {
                return nodeContains.call(nodeA, nodeB);
            }, BrowserDomAdapter.prototype.querySelector = function(el, selector) {
                return el.querySelector(selector);
            }, BrowserDomAdapter.prototype.querySelectorAll = function(el, selector) {
                return el.querySelectorAll(selector);
            }, BrowserDomAdapter.prototype.on = function(el, evt, listener) {
                el.addEventListener(evt, listener, !1);
            }, BrowserDomAdapter.prototype.onAndCancel = function(el, evt, listener) {
                // Needed to follow Dart's subscription semantic, until fix of
                // https://code.google.com/p/dart/issues/detail?id=17406
                return el.addEventListener(evt, listener, !1), function() {
                    el.removeEventListener(evt, listener, !1);
                };
            }, BrowserDomAdapter.prototype.dispatchEvent = function(el, evt) {
                el.dispatchEvent(evt);
            }, BrowserDomAdapter.prototype.createMouseEvent = function(eventType) {
                var evt = this.getDefaultDocument().createEvent("MouseEvent");
                return evt.initEvent(eventType, !0, !0), evt;
            }, BrowserDomAdapter.prototype.createEvent = function(eventType) {
                var evt = this.getDefaultDocument().createEvent("Event");
                return evt.initEvent(eventType, !0, !0), evt;
            }, BrowserDomAdapter.prototype.preventDefault = function(evt) {
                evt.preventDefault(), evt.returnValue = !1;
            }, BrowserDomAdapter.prototype.isPrevented = function(evt) {
                return evt.defaultPrevented || null != evt.returnValue && !evt.returnValue;
            }, BrowserDomAdapter.prototype.getInnerHTML = function(el) {
                return el.innerHTML;
            }, BrowserDomAdapter.prototype.getTemplateContent = function(el) {
                return "content" in el && this.isTemplateElement(el) ? el.content : null;
            }, BrowserDomAdapter.prototype.getOuterHTML = function(el) {
                return el.outerHTML;
            }, BrowserDomAdapter.prototype.nodeName = function(node) {
                return node.nodeName;
            }, BrowserDomAdapter.prototype.nodeValue = function(node) {
                return node.nodeValue;
            }, BrowserDomAdapter.prototype.type = function(node) {
                return node.type;
            }, BrowserDomAdapter.prototype.content = function(node) {
                return this.hasProperty(node, "content") ? node.content : node;
            }, BrowserDomAdapter.prototype.firstChild = function(el) {
                return el.firstChild;
            }, BrowserDomAdapter.prototype.nextSibling = function(el) {
                return el.nextSibling;
            }, BrowserDomAdapter.prototype.parentElement = function(el) {
                return el.parentNode;
            }, BrowserDomAdapter.prototype.childNodes = function(el) {
                return el.childNodes;
            }, BrowserDomAdapter.prototype.childNodesAsList = function(el) {
                for (var childNodes = el.childNodes, res = new Array(childNodes.length), i = 0; i < childNodes.length; i++) res[i] = childNodes[i];
                return res;
            }, BrowserDomAdapter.prototype.clearNodes = function(el) {
                for (;el.firstChild; ) el.removeChild(el.firstChild);
            }, BrowserDomAdapter.prototype.appendChild = function(el, node) {
                el.appendChild(node);
            }, BrowserDomAdapter.prototype.removeChild = function(el, node) {
                el.removeChild(node);
            }, BrowserDomAdapter.prototype.replaceChild = function(el, newChild, oldChild) {
                el.replaceChild(newChild, oldChild);
            }, BrowserDomAdapter.prototype.remove = function(node) {
                return node.parentNode && node.parentNode.removeChild(node), node;
            }, BrowserDomAdapter.prototype.insertBefore = function(parent, ref, node) {
                parent.insertBefore(node, ref);
            }, BrowserDomAdapter.prototype.insertAllBefore = function(parent, ref, nodes) {
                nodes.forEach(function(n) {
                    return parent.insertBefore(n, ref);
                });
            }, BrowserDomAdapter.prototype.insertAfter = function(parent, ref, node) {
                parent.insertBefore(node, ref.nextSibling);
            }, BrowserDomAdapter.prototype.setInnerHTML = function(el, value) {
                el.innerHTML = value;
            }, BrowserDomAdapter.prototype.getText = function(el) {
                return el.textContent;
            }, BrowserDomAdapter.prototype.setText = function(el, value) {
                el.textContent = value;
            }, BrowserDomAdapter.prototype.getValue = function(el) {
                return el.value;
            }, BrowserDomAdapter.prototype.setValue = function(el, value) {
                el.value = value;
            }, BrowserDomAdapter.prototype.getChecked = function(el) {
                return el.checked;
            }, BrowserDomAdapter.prototype.setChecked = function(el, value) {
                el.checked = value;
            }, BrowserDomAdapter.prototype.createComment = function(text) {
                return this.getDefaultDocument().createComment(text);
            }, BrowserDomAdapter.prototype.createTemplate = function(html) {
                var t = this.getDefaultDocument().createElement("template");
                return t.innerHTML = html, t;
            }, BrowserDomAdapter.prototype.createElement = function(tagName, doc) {
                return (doc = doc || this.getDefaultDocument()).createElement(tagName);
            }, BrowserDomAdapter.prototype.createElementNS = function(ns, tagName, doc) {
                return (doc = doc || this.getDefaultDocument()).createElementNS(ns, tagName);
            }, BrowserDomAdapter.prototype.createTextNode = function(text, doc) {
                return (doc = doc || this.getDefaultDocument()).createTextNode(text);
            }, BrowserDomAdapter.prototype.createScriptTag = function(attrName, attrValue, doc) {
                var el = (doc = doc || this.getDefaultDocument()).createElement("SCRIPT");
                return el.setAttribute(attrName, attrValue), el;
            }, BrowserDomAdapter.prototype.createStyleElement = function(css, doc) {
                var style = (doc = doc || this.getDefaultDocument()).createElement("style");
                return this.appendChild(style, this.createTextNode(css, doc)), style;
            }, BrowserDomAdapter.prototype.createShadowRoot = function(el) {
                return el.createShadowRoot();
            }, BrowserDomAdapter.prototype.getShadowRoot = function(el) {
                return el.shadowRoot;
            }, BrowserDomAdapter.prototype.getHost = function(el) {
                return el.host;
            }, BrowserDomAdapter.prototype.clone = function(node) {
                return node.cloneNode(!0);
            }, BrowserDomAdapter.prototype.getElementsByClassName = function(element, name) {
                return element.getElementsByClassName(name);
            }, BrowserDomAdapter.prototype.getElementsByTagName = function(element, name) {
                return element.getElementsByTagName(name);
            }, BrowserDomAdapter.prototype.classList = function(element) {
                return Array.prototype.slice.call(element.classList, 0);
            }, BrowserDomAdapter.prototype.addClass = function(element, className) {
                element.classList.add(className);
            }, BrowserDomAdapter.prototype.removeClass = function(element, className) {
                element.classList.remove(className);
            }, BrowserDomAdapter.prototype.hasClass = function(element, className) {
                return element.classList.contains(className);
            }, BrowserDomAdapter.prototype.setStyle = function(element, styleName, styleValue) {
                element.style[styleName] = styleValue;
            }, BrowserDomAdapter.prototype.removeStyle = function(element, stylename) {
                // IE requires '' instead of null
                // see https://github.com/angular/angular/issues/7916
                element.style[stylename] = "";
            }, BrowserDomAdapter.prototype.getStyle = function(element, stylename) {
                return element.style[stylename];
            }, BrowserDomAdapter.prototype.hasStyle = function(element, styleName, styleValue) {
                var value = this.getStyle(element, styleName) || "";
                return styleValue ? value == styleValue : value.length > 0;
            }, BrowserDomAdapter.prototype.tagName = function(element) {
                return element.tagName;
            }, BrowserDomAdapter.prototype.attributeMap = function(element) {
                for (var res = new Map(), elAttrs = element.attributes, i = 0; i < elAttrs.length; i++) {
                    var attrib = elAttrs.item(i);
                    res.set(attrib.name, attrib.value);
                }
                return res;
            }, BrowserDomAdapter.prototype.hasAttribute = function(element, attribute) {
                return element.hasAttribute(attribute);
            }, BrowserDomAdapter.prototype.hasAttributeNS = function(element, ns, attribute) {
                return element.hasAttributeNS(ns, attribute);
            }, BrowserDomAdapter.prototype.getAttribute = function(element, attribute) {
                return element.getAttribute(attribute);
            }, BrowserDomAdapter.prototype.getAttributeNS = function(element, ns, name) {
                return element.getAttributeNS(ns, name);
            }, BrowserDomAdapter.prototype.setAttribute = function(element, name, value) {
                element.setAttribute(name, value);
            }, BrowserDomAdapter.prototype.setAttributeNS = function(element, ns, name, value) {
                element.setAttributeNS(ns, name, value);
            }, BrowserDomAdapter.prototype.removeAttribute = function(element, attribute) {
                element.removeAttribute(attribute);
            }, BrowserDomAdapter.prototype.removeAttributeNS = function(element, ns, name) {
                element.removeAttributeNS(ns, name);
            }, BrowserDomAdapter.prototype.templateAwareRoot = function(el) {
                return this.isTemplateElement(el) ? this.content(el) : el;
            }, BrowserDomAdapter.prototype.createHtmlDocument = function() {
                return document.implementation.createHTMLDocument("fakeTitle");
            }, BrowserDomAdapter.prototype.getDefaultDocument = function() {
                return document;
            }, BrowserDomAdapter.prototype.getBoundingClientRect = function(el) {
                try {
                    return el.getBoundingClientRect();
                } catch (_a) {
                    return {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    };
                }
            }, BrowserDomAdapter.prototype.getTitle = function(doc) {
                return doc.title;
            }, BrowserDomAdapter.prototype.setTitle = function(doc, newTitle) {
                doc.title = newTitle || "";
            }, BrowserDomAdapter.prototype.elementMatches = function(n, selector) {
                return !!this.isElementNode(n) && (n.matches && n.matches(selector) || n.msMatchesSelector && n.msMatchesSelector(selector) || n.webkitMatchesSelector && n.webkitMatchesSelector(selector));
            }, BrowserDomAdapter.prototype.isTemplateElement = function(el) {
                return this.isElementNode(el) && "TEMPLATE" === el.nodeName;
            }, BrowserDomAdapter.prototype.isTextNode = function(node) {
                return node.nodeType === Node.TEXT_NODE;
            }, BrowserDomAdapter.prototype.isCommentNode = function(node) {
                return node.nodeType === Node.COMMENT_NODE;
            }, BrowserDomAdapter.prototype.isElementNode = function(node) {
                return node.nodeType === Node.ELEMENT_NODE;
            }, BrowserDomAdapter.prototype.hasShadowRoot = function(node) {
                return null != node.shadowRoot && node instanceof HTMLElement;
            }, BrowserDomAdapter.prototype.isShadowRoot = function(node) {
                return node instanceof DocumentFragment;
            }, BrowserDomAdapter.prototype.importIntoDoc = function(node) {
                return document.importNode(this.templateAwareRoot(node), !0);
            }, BrowserDomAdapter.prototype.adoptNode = function(node) {
                return document.adoptNode(node);
            }, BrowserDomAdapter.prototype.getHref = function(el) {
                return el.getAttribute("href");
            }, BrowserDomAdapter.prototype.getEventKey = function(event) {
                var key = event.key;
                if (null == key) {
                    // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
                    // Safari cf
                    // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
                    if (null == (key = event.keyIdentifier)) return "Unidentified";
                    key.startsWith("U+") && (key = String.fromCharCode(parseInt(key.substring(2), 16)), 
                    3 === event.location && _chromeNumKeyPadMap.hasOwnProperty(key) && (
                    // There is a bug in Chrome for numeric keypad keys:
                    // https://code.google.com/p/chromium/issues/detail?id=155654
                    // 1, 2, 3 ... are reported as A, B, C ...
                    key = _chromeNumKeyPadMap[key]));
                }
                return _keyMap[key] || key;
            }, BrowserDomAdapter.prototype.getGlobalEventTarget = function(doc, target) {
                return "window" === target ? window : "document" === target ? doc : "body" === target ? doc.body : null;
            }, BrowserDomAdapter.prototype.getHistory = function() {
                return window.history;
            }, BrowserDomAdapter.prototype.getLocation = function() {
                return window.location;
            }, BrowserDomAdapter.prototype.getBaseHref = function(doc) {
                var url, href = baseElement || (baseElement = document.querySelector("base")) ? baseElement.getAttribute("href") : null;
                return null == href ? null : (url = href, urlParsingNode || (urlParsingNode = document.createElement("a")), 
                urlParsingNode.setAttribute("href", url), "/" === urlParsingNode.pathname.charAt(0) ? urlParsingNode.pathname : "/" + urlParsingNode.pathname);
            }, BrowserDomAdapter.prototype.resetBaseElement = function() {
                baseElement = null;
            }, BrowserDomAdapter.prototype.getUserAgent = function() {
                return window.navigator.userAgent;
            }, BrowserDomAdapter.prototype.setData = function(element, name, value) {
                this.setAttribute(element, "data-" + name, value);
            }, BrowserDomAdapter.prototype.getData = function(element, name) {
                return this.getAttribute(element, "data-" + name);
            }, BrowserDomAdapter.prototype.getComputedStyle = function(element) {
                return getComputedStyle(element);
            }, 
            // TODO(tbosch): move this into a separate environment class once we have it
            BrowserDomAdapter.prototype.supportsWebAnimation = function() {
                return "function" == typeof Element.prototype.animate;
            }, BrowserDomAdapter.prototype.performanceNow = function() {
                // performance.now() is not available in all browsers, see
                // http://caniuse.com/#search=performance.now
                return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
            }, BrowserDomAdapter.prototype.supportsCookies = function() {
                return !0;
            }, BrowserDomAdapter.prototype.getCookie = function(name) {
                /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ return function(cookieStr, name) {
                    var e_1, _a;
                    name = encodeURIComponent(name);
                    try {
                        for (var _b = __values(cookieStr.split(";")), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var cookie = _c.value, eqIndex = cookie.indexOf("="), _d = __read(-1 == eqIndex ? [ cookie, "" ] : [ cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1) ], 2), cookieValue = _d[1];
                            if (_d[0].trim() === name) return decodeURIComponent(cookieValue);
                        }
                    } catch (e_1_1) {
                        e_1 = {
                            error: e_1_1
                        };
                    } finally {
                        try {
                            _c && !_c.done && (_a = _b.return) && _a.call(_b);
                        } finally {
                            if (e_1) throw e_1.error;
                        }
                    }
                    return null;
                }
                /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
                /**
 * @ngModule CommonModule
 *
 * @usageNotes
 * ```
 *     <some-element [ngClass]="'first second'">...</some-element>
 *
 *     <some-element [ngClass]="['first', 'second']">...</some-element>
 *
 *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
 *
 *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
 *
 *     <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
 * ```
 *
 * @description
 *
 * Adds and removes CSS classes on an HTML element.
 *
 * The CSS classes are updated as follows, depending on the type of the expression evaluation:
 * - `string` - the CSS classes listed in the string (space delimited) are added,
 * - `Array` - the CSS classes declared as Array elements are added,
 * - `Object` - keys are CSS classes that get added when the expression given in the value
 *              evaluates to a truthy value, otherwise they are removed.
 *
 * @publicApi
 */ (document.cookie, name);
            }, BrowserDomAdapter.prototype.setCookie = function(name, value) {
                // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
                // not clear other cookies.
                document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
            }, BrowserDomAdapter;
        }(/** @class */ /* */ function(_super) {
            function GenericBrowserDomAdapter() {
                var _this = _super.call(this) || this;
                _this._animationPrefix = null, _this._transitionEnd = null;
                try {
                    var element_1 = _this.createElement("div", document);
                    if (null != _this.getStyle(element_1, "animationName")) _this._animationPrefix = ""; else for (var domPrefixes = [ "Webkit", "Moz", "O", "ms" ], i = 0; i < domPrefixes.length; i++) if (null != _this.getStyle(element_1, domPrefixes[i] + "AnimationName")) {
                        _this._animationPrefix = "-" + domPrefixes[i].toLowerCase() + "-";
                        break;
                    }
                    var transEndEventNames_1 = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                    Object.keys(transEndEventNames_1).forEach(function(key) {
                        null != _this.getStyle(element_1, key) && (_this._transitionEnd = transEndEventNames_1[key]);
                    });
                } catch (_a) {
                    _this._animationPrefix = null, _this._transitionEnd = null;
                }
                return _this;
            }
            return __extends(GenericBrowserDomAdapter, _super), GenericBrowserDomAdapter.prototype.getDistributedNodes = function(el) {
                return el.getDistributedNodes();
            }, GenericBrowserDomAdapter.prototype.resolveAndSetHref = function(el, baseUrl, href) {
                el.href = null == href ? baseUrl : baseUrl + "/../" + href;
            }, GenericBrowserDomAdapter.prototype.supportsDOMEvents = function() {
                return !0;
            }, GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = function() {
                return "function" == typeof document.body.createShadowRoot;
            }, GenericBrowserDomAdapter.prototype.getAnimationPrefix = function() {
                return this._animationPrefix ? this._animationPrefix : "";
            }, GenericBrowserDomAdapter.prototype.getTransitionEnd = function() {
                return this._transitionEnd ? this._transitionEnd : "";
            }, GenericBrowserDomAdapter.prototype.supportsAnimation = function() {
                return null != this._animationPrefix && null != this._transitionEnd;
            }, GenericBrowserDomAdapter;
        }(/** @class */ /* */ function() {
            function DomAdapter() {
                this.resourceLoaderType = null;
            }
            return Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
                /**
         * Maps attribute names to their corresponding property names for cases
         * where attribute name doesn't match property name.
         */
                get: function() {
                    return this._attrToPropMap;
                },
                set: function(value) {
                    this._attrToPropMap = value;
                },
                enumerable: !0,
                configurable: !0
            }), DomAdapter;
        }())), baseElement = null, DOCUMENT$1 = DOCUMENT;
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        function supportsState() {
            return !!window.history.pushState;
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 */        var platform_browser_BrowserPlatformLocation = /** @class */ /* */ function(_super) {
            function BrowserPlatformLocation(_doc) {
                var _this = _super.call(this) || this;
                return _this._doc = _doc, _this._init(), _this;
            }
            // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
            /** @internal */            var decorator;
            return __extends(BrowserPlatformLocation, _super), BrowserPlatformLocation.prototype._init = function() {
                this.location = getDOM().getLocation(), this._history = getDOM().getHistory();
            }, BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function() {
                return getDOM().getBaseHref(this._doc);
            }, BrowserPlatformLocation.prototype.onPopState = function(fn) {
                getDOM().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", fn, !1);
            }, BrowserPlatformLocation.prototype.onHashChange = function(fn) {
                getDOM().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", fn, !1);
            }, Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
                get: function() {
                    return this.location.pathname;
                },
                set: function(newPath) {
                    this.location.pathname = newPath;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
                get: function() {
                    return this.location.search;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
                get: function() {
                    return this.location.hash;
                },
                enumerable: !0,
                configurable: !0
            }), BrowserPlatformLocation.prototype.pushState = function(state, title, url) {
                supportsState() ? this._history.pushState(state, title, url) : this.location.hash = url;
            }, BrowserPlatformLocation.prototype.replaceState = function(state, title, url) {
                supportsState() ? this._history.replaceState(state, title, url) : this.location.hash = url;
            }, BrowserPlatformLocation.prototype.forward = function() {
                this._history.forward();
            }, BrowserPlatformLocation.prototype.back = function() {
                this._history.back();
            }, __decorate([ (decorator = Inject(DOCUMENT$1), function(target, key) {
                decorator(target, key, 0);
            }), __metadata("design:paramtypes", [ Object ]) ], BrowserPlatformLocation);
        }(PlatformLocation), TRANSITION_ID = /* */ new InjectionToken("TRANSITION_ID"), SERVER_TRANSITION_PROVIDERS = [ {
            provide: APP_INITIALIZER,
            useFactory: function(transitionId, document, injector) {
                return function() {
                    // Wait for all application initializers to be completed before removing the styles set by
                    // the server.
                    injector.get(ApplicationInitStatus).donePromise.then(function() {
                        var dom = getDOM();
                        Array.prototype.slice.apply(dom.querySelectorAll(document, "style[ng-transition]")).filter(function(el) {
                            return dom.getAttribute(el, "ng-transition") === transitionId;
                        }).forEach(function(el) {
                            return dom.remove(el);
                        });
                    });
                };
            },
            deps: [ TRANSITION_ID, DOCUMENT$1, Injector ],
            multi: !0
        } ], platform_browser_BrowserGetTestability = /** @class */ /* */ function() {
            function BrowserGetTestability() {}
            return BrowserGetTestability.init = function() {
                /**
 * Set the {@link GetTestability} implementation used by the Angular testing framework.
 * @publicApi
 */
                var getter;
                getter = new BrowserGetTestability(), _testabilityGetter = getter;
            }, BrowserGetTestability.prototype.addToWindow = function(registry) {
                _global.getAngularTestability = function(elem, findInAncestors) {
                    void 0 === findInAncestors && (findInAncestors = !0);
                    var testability = registry.findTestabilityInTree(elem, findInAncestors);
                    if (null == testability) throw new Error("Could not find testability for element.");
                    return testability;
                }, _global.getAllAngularTestabilities = function() {
                    return registry.getAllTestabilities();
                }, _global.getAllAngularRootElements = function() {
                    return registry.getAllRootElements();
                }, _global.frameworkStabilizers || (_global.frameworkStabilizers = []), _global.frameworkStabilizers.push(function(callback /** TODO #9100 */) {
                    var testabilities = _global.getAllAngularTestabilities(), count = testabilities.length, didWork = !1, decrement = function(didWork_ /** TODO #9100 */) {
                        didWork = didWork || didWork_, 0 == --count && callback(didWork);
                    };
                    testabilities.forEach(function(testability /** TODO #9100 */) {
                        testability.whenStable(decrement);
                    });
                });
            }, BrowserGetTestability.prototype.findTestabilityInTree = function(registry, elem, findInAncestors) {
                if (null == elem) return null;
                var t = registry.getTestability(elem);
                return null != t ? t : findInAncestors ? getDOM().isShadowRoot(elem) ? this.findTestabilityInTree(registry, getDOM().getHost(elem), !0) : this.findTestabilityInTree(registry, getDOM().parentElement(elem), !0) : null;
            }, BrowserGetTestability;
        }();
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * An id that identifies a particular application being bootstrapped, that should
 * match across the client/server boundary.
 */        
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
 * `name` is `'probe'`.
 * @param name Name under which it will be exported. Keep in mind this will be a property of the
 * global `ng` object.
 * @param value The value to export.
 */
        function exportNgVar(name, value) {
            "undefined" != typeof COMPILED && COMPILED || ((_global.ng = _global.ng || {})[name] = value);
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        var CORE_TOKENS = {
            ApplicationRef: core_ApplicationRef,
            NgZone: NgZone
        };
        /**
 * Returns a {@link DebugElement} for the given native DOM element, or
 * null if the given native element does not have an Angular view associated
 * with it.
 */
        function inspectNativeElement(element) {
            return getDebugNode(element);
        }
        /**
 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
 */
        var EVENT_MANAGER_PLUGINS = /* */ new InjectionToken("EventManagerPlugins"), EventManager = /** @class */ /* */ function() {
            /**
     * Initializes an instance of the event-manager service.
     */
            function EventManager(plugins, _zone) {
                var _this = this;
                this._zone = _zone, this._eventNameToPlugin = new Map(), plugins.forEach(function(p) {
                    return p.manager = _this;
                }), this._plugins = plugins.slice().reverse();
            }
            /**
     * Registers a handler for a specific element and event.
     *
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns  A callback function that can be used to remove the handler.
     */            return EventManager.prototype.addEventListener = function(element, eventName, handler) {
                return this._findPluginFor(eventName).addEventListener(element, eventName, handler);
            }, 
            /**
     * Registers a global handler for an event in a target view.
     *
     * @param target A target for global event notifications. One of "window", "document", or "body".
     * @param eventName The name of the event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns A callback function that can be used to remove the handler.
     */
            EventManager.prototype.addGlobalEventListener = function(target, eventName, handler) {
                return this._findPluginFor(eventName).addGlobalEventListener(target, eventName, handler);
            }, 
            /**
     * Retrieves the compilation zone in which event listeners are registered.
     */
            EventManager.prototype.getZone = function() {
                return this._zone;
            }, 
            /** @internal */
            EventManager.prototype._findPluginFor = function(eventName) {
                var plugin = this._eventNameToPlugin.get(eventName);
                if (plugin) return plugin;
                for (var plugins = this._plugins, i = 0; i < plugins.length; i++) {
                    var plugin_1 = plugins[i];
                    if (plugin_1.supports(eventName)) return this._eventNameToPlugin.set(eventName, plugin_1), 
                    plugin_1;
                }
                throw new Error("No event manager plugin found for event " + eventName);
            }, EventManager;
        }(), EventManagerPlugin = /** @class */ /* */ function() {
            function EventManagerPlugin(_doc) {
                this._doc = _doc;
            }
            return EventManagerPlugin.prototype.addGlobalEventListener = function(element, eventName, handler) {
                var target = getDOM().getGlobalEventTarget(this._doc, element);
                if (!target) throw new Error("Unsupported event target " + target + " for event " + eventName);
                return this.addEventListener(target, eventName, handler);
            }, EventManagerPlugin;
        }(), SharedStylesHost = /** @class */ /* */ function() {
            function SharedStylesHost() {
                /** @internal */
                this._stylesSet = new Set();
            }
            return SharedStylesHost.prototype.addStyles = function(styles) {
                var _this = this, additions = new Set();
                styles.forEach(function(style) {
                    _this._stylesSet.has(style) || (_this._stylesSet.add(style), additions.add(style));
                }), this.onStylesAdded(additions);
            }, SharedStylesHost.prototype.onStylesAdded = function(additions) {}, SharedStylesHost.prototype.getAllStyles = function() {
                return Array.from(this._stylesSet);
            }, SharedStylesHost;
        }(), platform_browser_DomSharedStylesHost = /** @class */ /* */ function(_super) {
            function DomSharedStylesHost(_doc) {
                var _this = _super.call(this) || this;
                return _this._doc = _doc, _this._hostNodes = new Set(), _this._styleNodes = new Set(), 
                _this._hostNodes.add(_doc.head), _this;
            }
            return __extends(DomSharedStylesHost, _super), DomSharedStylesHost.prototype._addStylesToHost = function(styles, host) {
                var _this = this;
                styles.forEach(function(style) {
                    var styleEl = _this._doc.createElement("style");
                    styleEl.textContent = style, _this._styleNodes.add(host.appendChild(styleEl));
                });
            }, DomSharedStylesHost.prototype.addHost = function(hostNode) {
                this._addStylesToHost(this._stylesSet, hostNode), this._hostNodes.add(hostNode);
            }, DomSharedStylesHost.prototype.removeHost = function(hostNode) {
                this._hostNodes.delete(hostNode);
            }, DomSharedStylesHost.prototype.onStylesAdded = function(additions) {
                var _this = this;
                this._hostNodes.forEach(function(hostNode) {
                    return _this._addStylesToHost(additions, hostNode);
                });
            }, DomSharedStylesHost.prototype.ngOnDestroy = function() {
                this._styleNodes.forEach(function(styleNode) {
                    return getDOM().remove(styleNode);
                });
            }, DomSharedStylesHost;
        }(SharedStylesHost), NAMESPACE_URIS = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }, COMPONENT_REGEX = /%COMP%/g, HOST_ATTR = "_nghost-%COMP%", CONTENT_ATTR = "_ngcontent-%COMP%";
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * The injection token for the event-manager plug-in service.
 *
 * @publicApi
 */        function flattenStyles(compId, styles, target) {
            for (var i = 0; i < styles.length; i++) {
                var style = styles[i];
                Array.isArray(style) ? flattenStyles(compId, style, target) : (style = style.replace(COMPONENT_REGEX, compId), 
                target.push(style));
            }
            return target;
        }
        function decoratePreventDefault(eventHandler) {
            return function(event) {
                !1 === eventHandler(event) && (
                // TODO(tbosch): move preventDefault into event plugins...
                event.preventDefault(), event.returnValue = !1);
            };
        }
        var platform_browser_DomRendererFactory2 = /** @class */ /* */ function() {
            function DomRendererFactory2(eventManager, sharedStylesHost) {
                this.eventManager = eventManager, this.sharedStylesHost = sharedStylesHost, this.rendererByCompId = new Map(), 
                this.defaultRenderer = new platform_browser_DefaultDomRenderer2(eventManager);
            }
            return DomRendererFactory2.prototype.createRenderer = function(element, type) {
                if (!element || !type) return this.defaultRenderer;
                switch (type.encapsulation) {
                  case ViewEncapsulation.Emulated:
                    var renderer = this.rendererByCompId.get(type.id);
                    return renderer || (renderer = new platform_browser_EmulatedEncapsulationDomRenderer2(this.eventManager, this.sharedStylesHost, type), 
                    this.rendererByCompId.set(type.id, renderer)), renderer.applyToHost(element), renderer;

                  case ViewEncapsulation.Native:
                  case ViewEncapsulation.ShadowDom:
                    return new platform_browser_ShadowDomRenderer(this.eventManager, this.sharedStylesHost, element, type);

                  default:
                    if (!this.rendererByCompId.has(type.id)) {
                        var styles = flattenStyles(type.id, type.styles, []);
                        this.sharedStylesHost.addStyles(styles), this.rendererByCompId.set(type.id, this.defaultRenderer);
                    }
                    return this.defaultRenderer;
                }
            }, DomRendererFactory2.prototype.begin = function() {}, DomRendererFactory2.prototype.end = function() {}, 
            DomRendererFactory2;
        }(), platform_browser_DefaultDomRenderer2 = /** @class */ /* */ function() {
            function DefaultDomRenderer2(eventManager) {
                this.eventManager = eventManager, this.data = Object.create(null);
            }
            return DefaultDomRenderer2.prototype.destroy = function() {}, DefaultDomRenderer2.prototype.createElement = function(name, namespace) {
                return namespace ? document.createElementNS(NAMESPACE_URIS[namespace] || namespace, name) : document.createElement(name);
            }, DefaultDomRenderer2.prototype.createComment = function(value) {
                return document.createComment(value);
            }, DefaultDomRenderer2.prototype.createText = function(value) {
                return document.createTextNode(value);
            }, DefaultDomRenderer2.prototype.appendChild = function(parent, newChild) {
                parent.appendChild(newChild);
            }, DefaultDomRenderer2.prototype.insertBefore = function(parent, newChild, refChild) {
                parent && parent.insertBefore(newChild, refChild);
            }, DefaultDomRenderer2.prototype.removeChild = function(parent, oldChild) {
                parent && parent.removeChild(oldChild);
            }, DefaultDomRenderer2.prototype.selectRootElement = function(selectorOrNode, preserveContent) {
                var el = "string" == typeof selectorOrNode ? document.querySelector(selectorOrNode) : selectorOrNode;
                if (!el) throw new Error('The selector "' + selectorOrNode + '" did not match any elements');
                return preserveContent || (el.textContent = ""), el;
            }, DefaultDomRenderer2.prototype.parentNode = function(node) {
                return node.parentNode;
            }, DefaultDomRenderer2.prototype.nextSibling = function(node) {
                return node.nextSibling;
            }, DefaultDomRenderer2.prototype.setAttribute = function(el, name, value, namespace) {
                if (namespace) {
                    name = namespace + ":" + name;
                    // TODO(benlesh): Ivy may cause issues here because it's passing around
                    // full URIs for namespaces, therefore this lookup will fail.
                    var namespaceUri = NAMESPACE_URIS[namespace];
                    namespaceUri ? el.setAttributeNS(namespaceUri, name, value) : el.setAttribute(name, value);
                } else el.setAttribute(name, value);
            }, DefaultDomRenderer2.prototype.removeAttribute = function(el, name, namespace) {
                if (namespace) {
                    // TODO(benlesh): Ivy may cause issues here because it's passing around
                    // full URIs for namespaces, therefore this lookup will fail.
                    var namespaceUri = NAMESPACE_URIS[namespace];
                    namespaceUri ? el.removeAttributeNS(namespaceUri, name) : 
                    // TODO(benlesh): Since ivy is passing around full URIs for namespaces
                    // this could result in properties like `http://www.w3.org/2000/svg:cx="123"`,
                    // which is wrong.
                    el.removeAttribute(namespace + ":" + name);
                } else el.removeAttribute(name);
            }, DefaultDomRenderer2.prototype.addClass = function(el, name) {
                el.classList.add(name);
            }, DefaultDomRenderer2.prototype.removeClass = function(el, name) {
                el.classList.remove(name);
            }, DefaultDomRenderer2.prototype.setStyle = function(el, style, value, flags) {
                flags & RendererStyleFlags2.DashCase ? el.style.setProperty(style, value, flags & RendererStyleFlags2.Important ? "important" : "") : el.style[style] = value;
            }, DefaultDomRenderer2.prototype.removeStyle = function(el, style, flags) {
                flags & RendererStyleFlags2.DashCase ? el.style.removeProperty(style) : 
                // IE requires '' instead of null
                // see https://github.com/angular/angular/issues/7916
                el.style[style] = "";
            }, DefaultDomRenderer2.prototype.setProperty = function(el, name, value) {
                checkNoSyntheticProp(name, "property"), el[name] = value;
            }, DefaultDomRenderer2.prototype.setValue = function(node, value) {
                node.nodeValue = value;
            }, DefaultDomRenderer2.prototype.listen = function(target, event, callback) {
                return checkNoSyntheticProp(event, "listener"), "string" == typeof target ? this.eventManager.addGlobalEventListener(target, event, decoratePreventDefault(callback)) : this.eventManager.addEventListener(target, event, decoratePreventDefault(callback));
            }, DefaultDomRenderer2;
        }(), AT_CHARCODE = /* */ "@".charCodeAt(0);
        function checkNoSyntheticProp(name, nameKind) {
            if (name.charCodeAt(0) === AT_CHARCODE) throw new Error("Found the synthetic " + nameKind + " " + name + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.');
        }
        var blackListedMap, platform_browser_EmulatedEncapsulationDomRenderer2 = /** @class */ /* */ function(_super) {
            function EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, component) {
                var _this = _super.call(this, eventManager) || this;
                _this.component = component;
                var styles = flattenStyles(component.id, component.styles, []);
                return sharedStylesHost.addStyles(styles), _this.contentAttr = CONTENT_ATTR.replace(COMPONENT_REGEX, component.id), 
                _this.hostAttr = HOST_ATTR.replace(COMPONENT_REGEX, component.id), _this;
            }
            return __extends(EmulatedEncapsulationDomRenderer2, _super), EmulatedEncapsulationDomRenderer2.prototype.applyToHost = function(element) {
                _super.prototype.setAttribute.call(this, element, this.hostAttr, "");
            }, EmulatedEncapsulationDomRenderer2.prototype.createElement = function(parent, name) {
                var el = _super.prototype.createElement.call(this, parent, name);
                return _super.prototype.setAttribute.call(this, el, this.contentAttr, ""), el;
            }, EmulatedEncapsulationDomRenderer2;
        }(platform_browser_DefaultDomRenderer2), platform_browser_ShadowDomRenderer = /** @class */ /* */ function(_super) {
            function ShadowDomRenderer(eventManager, sharedStylesHost, hostEl, component) {
                var _this = _super.call(this, eventManager) || this;
                _this.sharedStylesHost = sharedStylesHost, _this.hostEl = hostEl, _this.component = component, 
                _this.shadowRoot = component.encapsulation === ViewEncapsulation.ShadowDom ? hostEl.attachShadow({
                    mode: "open"
                }) : hostEl.createShadowRoot(), _this.sharedStylesHost.addHost(_this.shadowRoot);
                for (var styles = flattenStyles(component.id, component.styles, []), i = 0; i < styles.length; i++) {
                    var styleEl = document.createElement("style");
                    styleEl.textContent = styles[i], _this.shadowRoot.appendChild(styleEl);
                }
                return _this;
            }
            return __extends(ShadowDomRenderer, _super), ShadowDomRenderer.prototype.nodeOrShadowRoot = function(node) {
                return node === this.hostEl ? this.shadowRoot : node;
            }, ShadowDomRenderer.prototype.destroy = function() {
                this.sharedStylesHost.removeHost(this.shadowRoot);
            }, ShadowDomRenderer.prototype.appendChild = function(parent, newChild) {
                return _super.prototype.appendChild.call(this, this.nodeOrShadowRoot(parent), newChild);
            }, ShadowDomRenderer.prototype.insertBefore = function(parent, newChild, refChild) {
                return _super.prototype.insertBefore.call(this, this.nodeOrShadowRoot(parent), newChild, refChild);
            }, ShadowDomRenderer.prototype.removeChild = function(parent, oldChild) {
                return _super.prototype.removeChild.call(this, this.nodeOrShadowRoot(parent), oldChild);
            }, ShadowDomRenderer.prototype.parentNode = function(node) {
                return this.nodeOrShadowRoot(_super.prototype.parentNode.call(this, this.nodeOrShadowRoot(node)));
            }, ShadowDomRenderer;
        }(platform_browser_DefaultDomRenderer2), __symbol__ = "undefined" != typeof Zone && Zone.__symbol__ || function(v) {
            return "__zone_symbol__" + v;
        }, ADD_EVENT_LISTENER = /* */ __symbol__("addEventListener"), REMOVE_EVENT_LISTENER = /* */ __symbol__("removeEventListener"), symbolNames = {}, stopSymbol = "__zone_symbol__propagationStopped";
        "undefined" != typeof Zone && Zone[/* */ __symbol__("BLACK_LISTED_EVENTS")] && (blackListedMap = {});
        var isBlackListedEvent = function(eventName) {
            return !!blackListedMap && blackListedMap.hasOwnProperty(eventName);
        }, globalListener = function(event) {
            var symbolName = symbolNames[event.type];
            if (symbolName) {
                var taskDatas = this[symbolName];
                if (taskDatas) {
                    var args = [ event ];
                    if (1 === taskDatas.length) return (taskData = taskDatas[0]).zone !== Zone.current ? taskData.zone.run(taskData.handler, this, args) : taskData.handler.apply(this, args);
                    for (
                    // copy tasks as a snapshot to avoid event handlers remove
                    // itself or others
                    var copiedTasks = taskDatas.slice(), i = 0; i < copiedTasks.length && !0 !== event[stopSymbol]; i++) {
                        var taskData;
                        (taskData = copiedTasks[i]).zone !== Zone.current ? 
                        // only use Zone.run when Zone.current not equals to stored zone
                        taskData.zone.run(taskData.handler, this, args) : taskData.handler.apply(this, args);
                    }
                }
            }
        }, platform_browser_DomEventsPlugin = /** @class */ /* */ function(_super) {
            function DomEventsPlugin(doc, ngZone, platformId) {
                var _this = _super.call(this, doc) || this;
                return _this.ngZone = ngZone, platformId && 
                /**
 * Returns whether a platform id represents a server platform.
 * @publicApi
 */
                function(platformId) {
                    return platformId === PLATFORM_SERVER_ID;
                }
                /**
 * Returns whether a platform id represents a web worker app platform.
 * @publicApi
 */ (platformId) || _this.patchEvent(), _this;
            }
            return __extends(DomEventsPlugin, _super), DomEventsPlugin.prototype.patchEvent = function() {
                if ("undefined" != typeof Event && Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
                    var delegate = Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
                    Event.prototype.stopImmediatePropagation = function() {
                        this && (this[stopSymbol] = !0), 
                        // should call native delegate in case
                        // in some environment part of the application
                        // will not use the patched Event
                        delegate && delegate.apply(this, arguments);
                    };
                }
            }, 
            // This plugin should come last in the list of plugins, because it accepts all
            // events.
            DomEventsPlugin.prototype.supports = function(eventName) {
                return !0;
            }, DomEventsPlugin.prototype.addEventListener = function(element, eventName, handler) {
                var _this = this, callback = handler;
                // if zonejs is loaded and current zone is not ngZone
                // we keep Zone.current on target for later restoration.
                if (!element[ADD_EVENT_LISTENER] || NgZone.isInAngularZone() && !isBlackListedEvent(eventName)) element.addEventListener(eventName, callback, !1); else {
                    var symbolName = symbolNames[eventName];
                    symbolName || (symbolName = symbolNames[eventName] = __symbol__("ANGULAR" + eventName + "FALSE"));
                    var taskDatas = element[symbolName], globalListenerRegistered = taskDatas && taskDatas.length > 0;
                    taskDatas || (taskDatas = element[symbolName] = []);
                    var zone = isBlackListedEvent(eventName) ? Zone.root : Zone.current;
                    if (0 === taskDatas.length) taskDatas.push({
                        zone: zone,
                        handler: callback
                    }); else {
                        for (var callbackRegistered = !1, i = 0; i < taskDatas.length; i++) if (taskDatas[i].handler === callback) {
                            callbackRegistered = !0;
                            break;
                        }
                        callbackRegistered || taskDatas.push({
                            zone: zone,
                            handler: callback
                        });
                    }
                    globalListenerRegistered || element[ADD_EVENT_LISTENER](eventName, globalListener, !1);
                }
                return function() {
                    return _this.removeEventListener(element, eventName, callback);
                };
            }, DomEventsPlugin.prototype.removeEventListener = function(target, eventName, callback) {
                var underlyingRemove = target[REMOVE_EVENT_LISTENER];
                // zone.js not loaded, use native removeEventListener
                                if (!underlyingRemove) return target.removeEventListener.apply(target, [ eventName, callback, !1 ]);
                var symbolName = symbolNames[eventName], taskDatas = symbolName && target[symbolName];
                if (!taskDatas) 
                // addEventListener not using patched version
                // just call native removeEventListener
                return target.removeEventListener.apply(target, [ eventName, callback, !1 ]);
                // fix issue 20532, should be able to remove
                // listener which was added inside of ngZone
                                for (var found = !1, i = 0; i < taskDatas.length; i++) 
                // remove listener from taskDatas if the callback equals
                if (taskDatas[i].handler === callback) {
                    found = !0, taskDatas.splice(i, 1);
                    break;
                }
                found ? 0 === taskDatas.length && 
                // all listeners are removed, we can remove the globalListener from target
                underlyingRemove.apply(target, [ eventName, globalListener, !1 ]) : 
                // not found in taskDatas, the callback may be added inside of ngZone
                // use native remove listener to remove the callback
                target.removeEventListener.apply(target, [ eventName, callback, !1 ]);
            }, DomEventsPlugin;
        }(EventManagerPlugin), EVENT_NAMES = {
            // pan
            pan: !0,
            panstart: !0,
            panmove: !0,
            panend: !0,
            pancancel: !0,
            panleft: !0,
            panright: !0,
            panup: !0,
            pandown: !0,
            // pinch
            pinch: !0,
            pinchstart: !0,
            pinchmove: !0,
            pinchend: !0,
            pinchcancel: !0,
            pinchin: !0,
            pinchout: !0,
            // press
            press: !0,
            pressup: !0,
            // rotate
            rotate: !0,
            rotatestart: !0,
            rotatemove: !0,
            rotateend: !0,
            rotatecancel: !0,
            // swipe
            swipe: !0,
            swipeleft: !0,
            swiperight: !0,
            swipeup: !0,
            swipedown: !0,
            // tap
            tap: !0
        }, HAMMER_GESTURE_CONFIG = /* */ new InjectionToken("HammerGestureConfig"), HAMMER_LOADER = /* */ new InjectionToken("HammerLoader"), HammerGestureConfig = /** @class */ /* */ function() {
            function HammerGestureConfig() {
                /**
         * A set of supported event names for gestures to be used in Angular.
         * Angular supports all built-in recognizers, as listed in
         * [HammerJS documentation](http://hammerjs.github.io/).
         */
                this.events = [], 
                /**
        * Maps gesture event names to a set of configuration options
        * that specify overrides to the default values for specific properties.
        *
        * The key is a supported event name to be configured,
        * and the options object contains a set of properties, with override values
        * to be applied to the named recognizer event.
        * For example, to disable recognition of the rotate event, specify
        *  `{"rotate": {"enable": false}}`.
        *
        * Properties that are not present take the HammerJS default values.
        * For information about which properties are supported for which events,
        * and their allowed and default values, see
        * [HammerJS documentation](http://hammerjs.github.io/).
        *
        */
                this.overrides = {};
            }
            /**
     * Creates a [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
     * and attaches it to a given HTML element.
     * @param element The element that will recognize gestures.
     * @returns A HammerJS event-manager object.
     */            return HammerGestureConfig.prototype.buildHammer = function(element) {
                var mc = new Hammer(element, this.options);
                for (var eventName in mc.get("pinch").set({
                    enable: !0
                }), mc.get("rotate").set({
                    enable: !0
                }), this.overrides) mc.get(eventName).set(this.overrides[eventName]);
                return mc;
            }, HammerGestureConfig;
        }(), platform_browser_HammerGesturesPlugin = /** @class */ /* */ function(_super) {
            function HammerGesturesPlugin(doc, _config, console, loader) {
                var _this = _super.call(this, doc) || this;
                return _this._config = _config, _this.console = console, _this.loader = loader, 
                _this;
            }
            return __extends(HammerGesturesPlugin, _super), HammerGesturesPlugin.prototype.supports = function(eventName) {
                return !(!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName) || !window.Hammer && !this.loader && (this.console.warn('The "' + eventName + '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'), 
                1));
            }, HammerGesturesPlugin.prototype.addEventListener = function(element, eventName, handler) {
                var _this = this, zone = this.manager.getZone();
                // If Hammer is not present but a loader is specified, we defer adding the event listener
                // until Hammer is loaded.
                if (eventName = eventName.toLowerCase(), !window.Hammer && this.loader) {
                    // This `addEventListener` method returns a function to remove the added listener.
                    // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
                    // than remove anything.
                    var cancelRegistration_1 = !1, deregister_1 = function() {
                        cancelRegistration_1 = !0;
                    };
                    // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
                    // can change the behavior of `deregister` once the listener is added. Using a closure in
                    // this way allows us to avoid any additional data structures to track listener removal.
                    return this.loader().then(function() {
                        // If Hammer isn't actually loaded when the custom loader resolves, give up.
                        if (!window.Hammer) return _this.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."), 
                        void (deregister_1 = function() {});
                        cancelRegistration_1 || (
                        // Now that Hammer is loaded and the listener is being loaded for real,
                        // the deregistration function changes from canceling registration to removal.
                        deregister_1 = _this.addEventListener(element, eventName, handler));
                    }).catch(function() {
                        _this.console.warn('The "' + eventName + '" event cannot be bound because the custom Hammer.JS loader failed.'), 
                        deregister_1 = function() {};
                    }), function() {
                        deregister_1();
                    };
                }
                return zone.runOutsideAngular(function() {
                    // Creating the manager bind events, must be done outside of angular
                    var mc = _this._config.buildHammer(element), callback = function(eventObj) {
                        zone.runGuarded(function() {
                            handler(eventObj);
                        });
                    };
                    return mc.on(eventName, callback), function() {
                        mc.off(eventName, callback), 
                        // destroy mc to prevent memory leak
                        "function" == typeof mc.destroy && mc.destroy();
                    };
                });
            }, HammerGesturesPlugin.prototype.isCustomEvent = function(eventName) {
                return this._config.events.indexOf(eventName) > -1;
            }, HammerGesturesPlugin;
        }(EventManagerPlugin), MODIFIER_KEYS = [ "alt", "control", "meta", "shift" ], MODIFIER_KEY_GETTERS = {
            alt: function(event) {
                return event.altKey;
            },
            control: function(event) {
                return event.ctrlKey;
            },
            meta: function(event) {
                return event.metaKey;
            },
            shift: function(event) {
                return event.shiftKey;
            }
        }, platform_browser_KeyEventsPlugin = /** @class */ /* */ function(_super) {
            /**
     * Initializes an instance of the browser plug-in.
     * @param doc The document in which key events will be detected.
     */
            function KeyEventsPlugin(doc) {
                return _super.call(this, doc) || this;
            }
            var KeyEventsPlugin_1;
            return __extends(KeyEventsPlugin, _super), KeyEventsPlugin_1 = KeyEventsPlugin, 
            /**
      * Reports whether a named key event is supported.
      * @param eventName The event name to query.
      * @return True if the named key event is supported.
     */
            KeyEventsPlugin.prototype.supports = function(eventName) {
                return null != KeyEventsPlugin_1.parseEventName(eventName);
            }, 
            /**
     * Registers a handler for a specific element and key event.
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the key event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns The key event that was registered.
    */
            KeyEventsPlugin.prototype.addEventListener = function(element, eventName, handler) {
                var parsedEvent = KeyEventsPlugin_1.parseEventName(eventName), outsideHandler = KeyEventsPlugin_1.eventCallback(parsedEvent.fullKey, handler, this.manager.getZone());
                return this.manager.getZone().runOutsideAngular(function() {
                    return getDOM().onAndCancel(element, parsedEvent.domEventName, outsideHandler);
                });
            }, KeyEventsPlugin.parseEventName = function(eventName) {
                var parts = eventName.toLowerCase().split("."), domEventName = parts.shift();
                if (0 === parts.length || "keydown" !== domEventName && "keyup" !== domEventName) return null;
                var key = KeyEventsPlugin_1._normalizeKey(parts.pop()), fullKey = "";
                if (MODIFIER_KEYS.forEach(function(modifierName) {
                    var index = parts.indexOf(modifierName);
                    index > -1 && (parts.splice(index, 1), fullKey += modifierName + ".");
                }), fullKey += key, 0 != parts.length || 0 === key.length) 
                // returning null instead of throwing to let another plugin process the event
                return null;
                var result = {};
                return result.domEventName = domEventName, result.fullKey = fullKey, result;
            }, KeyEventsPlugin.getEventFullKey = function(event) {
                var fullKey = "", key = getDOM().getEventKey(event);
                return " " === (key = key.toLowerCase()) ? key = "space" : "." === key && (key = "dot"), 
                MODIFIER_KEYS.forEach(function(modifierName) {
                    modifierName != key && (0, MODIFIER_KEY_GETTERS[modifierName])(event) && (fullKey += modifierName + ".");
                }), fullKey += key;
            }, 
            /**
     * Configures a handler callback for a key event.
     * @param fullKey The event name that combines all simultaneous keystrokes.
     * @param handler The function that responds to the key event.
     * @param zone The zone in which the event occurred.
     * @returns A callback function.
     */
            KeyEventsPlugin.eventCallback = function(fullKey, handler, zone) {
                return function(event /** TODO #9100 */) {
                    KeyEventsPlugin_1.getEventFullKey(event) === fullKey && zone.runGuarded(function() {
                        return handler(event);
                    });
                };
            }, 
            /** @internal */
            KeyEventsPlugin._normalizeKey = function(keyName) {
                // TODO: switch to a Map if the mapping grows too much
                switch (keyName) {
                  case "esc":
                    return "escape";

                  default:
                    return keyName;
                }
            }, KeyEventsPlugin;
        }(EventManagerPlugin), DomSanitizer = /** @class */ /* */ function() {
            return function() {};
        }(), platform_browser_DomSanitizerImpl = /** @class */ /* */ function(_super) {
            function DomSanitizerImpl(_doc) {
                var _this = _super.call(this) || this;
                return _this._doc = _doc, _this;
            }
            return __extends(DomSanitizerImpl, _super), DomSanitizerImpl.prototype.sanitize = function(ctx, value) {
                if (null == value) return null;
                switch (ctx) {
                  case SecurityContext.NONE:
                    return value;

                  case SecurityContext.HTML:
                    return value instanceof platform_browser_SafeHtmlImpl ? value.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(value, "HTML"), 
                    /**
 * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
 * the DOM in a browser environment.
 */
                    function(defaultDoc, unsafeHtmlInput) {
                        var inertBodyElement = null;
                        try {
                            inertBodyHelper = inertBodyHelper || new InertBodyHelper(defaultDoc);
                            // Make sure unsafeHtml is actually a string (TypeScript types are not enforced at runtime).
                            var unsafeHtml = unsafeHtmlInput ? String(unsafeHtmlInput) : "";
                            inertBodyElement = inertBodyHelper.getInertBodyElement(unsafeHtml);
                            // mXSS protection. Repeatedly parse the document to make sure it stabilizes, so that a browser
                            // trying to auto-correct incorrect HTML cannot cause formerly inert HTML to become dangerous.
                            var mXSSAttempts = 5, parsedHtml = unsafeHtml;
                            do {
                                if (0 === mXSSAttempts) throw new Error("Failed to sanitize html because the input is unstable");
                                mXSSAttempts--, unsafeHtml = parsedHtml, parsedHtml = inertBodyElement.innerHTML, 
                                inertBodyElement = inertBodyHelper.getInertBodyElement(unsafeHtml);
                            } while (unsafeHtml !== parsedHtml);
                            var sanitizer = new SanitizingHtmlSerializer(), safeHtml = sanitizer.sanitizeChildren(getTemplateContent(inertBodyElement) || inertBodyElement);
                            return isDevMode() && sanitizer.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), 
                            safeHtml;
                        } finally {
                            // In case anything goes wrong, clear out inertElement to reset the entire DOM structure.
                            if (inertBodyElement) for (var parent_1 = getTemplateContent(inertBodyElement) || inertBodyElement; parent_1.firstChild; ) parent_1.removeChild(parent_1.firstChild);
                        }
                    }(this._doc, String(value)));

                  case SecurityContext.STYLE:
                    return value instanceof platform_browser_SafeStyleImpl ? value.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(value, "Style"), 
                    /**
 * Sanitizes the given untrusted CSS style property value (i.e. not an entire object, just a single
 * value) and returns a value that is safe to use in a browser environment.
 */
                    function(value) {
                        // Make sure it's actually a string.
                        if (!(value = String(value).trim())) return "";
                        // Single url(...) values are supported, but only for URLs that sanitize cleanly. See above for
                        // reasoning behind this.
                                                var urlMatch = value.match(URL_RE);
                        return urlMatch && _sanitizeUrl(urlMatch[1]) === urlMatch[1] || value.match(SAFE_STYLE_VALUE) && 
                        /**
 * Checks that quotes (" and ') are properly balanced inside a string. Assumes
 * that neither escape (\) nor any other character that could result in
 * breaking out of a string parsing context are allowed;
 * see http://www.w3.org/TR/css3-syntax/#string-token-diagram.
 *
 * This code was taken from the Closure sanitization library.
 */
                        function(value) {
                            for (var outsideSingle = !0, outsideDouble = !0, i = 0; i < value.length; i++) {
                                var c = value.charAt(i);
                                "'" === c && outsideDouble ? outsideSingle = !outsideSingle : '"' === c && outsideSingle && (outsideDouble = !outsideDouble);
                            }
                            return outsideSingle && outsideDouble;
                        }(value) ? value : (isDevMode() && console.warn("WARNING: sanitizing unsafe style value " + value + " (see http://g.co/ng/security#xss)."), 
                        "unsafe");
                    }
                    /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
                    /**
 * An `html` sanitizer which converts untrusted `html` **string** into trusted string by removing
 * dangerous content.
 *
 * This method parses the `html` and locates potentially dangerous content (such as urls and
 * javascript) and removes it.
 *
 * It is possible to mark a string as trusted by calling {@link bypassSanitizationTrustHtml}.
 *
 * @param unsafeHtml untrusted `html`, typically from the user.
 * @returns `html` string which is safe to display to user, because all of the dangerous javascript
 * and urls have been removed.
 */ (value));

                  case SecurityContext.SCRIPT:
                    if (value instanceof platform_browser_SafeScriptImpl) return value.changingThisBreaksApplicationSecurity;
                    throw this.checkNotSafeValue(value, "Script"), new Error("unsafe value used in a script context");

                  case SecurityContext.URL:
                    return value instanceof platform_browser_SafeResourceUrlImpl || value instanceof platform_browser_SafeUrlImpl ? value.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(value, "URL"), 
                    _sanitizeUrl(String(value)));

                  case SecurityContext.RESOURCE_URL:
                    if (value instanceof platform_browser_SafeResourceUrlImpl) return value.changingThisBreaksApplicationSecurity;
                    throw this.checkNotSafeValue(value, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");

                  default:
                    throw new Error("Unexpected SecurityContext " + ctx + " (see http://g.co/ng/security#xss)");
                }
            }, DomSanitizerImpl.prototype.checkNotSafeValue = function(value, expectedType) {
                if (value instanceof SafeValueImpl) throw new Error("Required a safe " + expectedType + ", got a " + value.getTypeName() + " (see http://g.co/ng/security#xss)");
            }, DomSanitizerImpl.prototype.bypassSecurityTrustHtml = function(value) {
                return new platform_browser_SafeHtmlImpl(value);
            }, DomSanitizerImpl.prototype.bypassSecurityTrustStyle = function(value) {
                return new platform_browser_SafeStyleImpl(value);
            }, DomSanitizerImpl.prototype.bypassSecurityTrustScript = function(value) {
                return new platform_browser_SafeScriptImpl(value);
            }, DomSanitizerImpl.prototype.bypassSecurityTrustUrl = function(value) {
                return new platform_browser_SafeUrlImpl(value);
            }, DomSanitizerImpl.prototype.bypassSecurityTrustResourceUrl = function(value) {
                return new platform_browser_SafeResourceUrlImpl(value);
            }, DomSanitizerImpl;
        }(DomSanitizer), SafeValueImpl = /** @class */ /* */ function() {
            function SafeValueImpl(changingThisBreaksApplicationSecurity) {
                this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
                // empty
                        }
            return SafeValueImpl.prototype.toString = function() {
                return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)";
            }, SafeValueImpl;
        }(), platform_browser_SafeHtmlImpl = /** @class */ /* */ function(_super) {
            function SafeHtmlImpl() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            return __extends(SafeHtmlImpl, _super), SafeHtmlImpl.prototype.getTypeName = function() {
                return "HTML";
            }, SafeHtmlImpl;
        }(SafeValueImpl), platform_browser_SafeStyleImpl = /** @class */ /* */ function(_super) {
            function SafeStyleImpl() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            return __extends(SafeStyleImpl, _super), SafeStyleImpl.prototype.getTypeName = function() {
                return "Style";
            }, SafeStyleImpl;
        }(SafeValueImpl), platform_browser_SafeScriptImpl = /** @class */ /* */ function(_super) {
            function SafeScriptImpl() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            return __extends(SafeScriptImpl, _super), SafeScriptImpl.prototype.getTypeName = function() {
                return "Script";
            }, SafeScriptImpl;
        }(SafeValueImpl), platform_browser_SafeUrlImpl = /** @class */ /* */ function(_super) {
            function SafeUrlImpl() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            return __extends(SafeUrlImpl, _super), SafeUrlImpl.prototype.getTypeName = function() {
                return "URL";
            }, SafeUrlImpl;
        }(SafeValueImpl), platform_browser_SafeResourceUrlImpl = /** @class */ /* */ function(_super) {
            function SafeResourceUrlImpl() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            return __extends(SafeResourceUrlImpl, _super), SafeResourceUrlImpl.prototype.getTypeName = function() {
                return "ResourceURL";
            }, SafeResourceUrlImpl;
        }(SafeValueImpl), platformBrowser = /* */ createPlatformFactory(platformCore, "browser", [ {
            provide: PLATFORM_ID,
            useValue: "browser"
        }, {
            provide: PLATFORM_INITIALIZER,
            useValue: function() {
                platform_browser_BrowserDomAdapter.makeCurrent(), platform_browser_BrowserGetTestability.init();
            },
            multi: !0
        }, {
            provide: PlatformLocation,
            useClass: platform_browser_BrowserPlatformLocation,
            deps: [ DOCUMENT$1 ]
        }, {
            provide: DOCUMENT$1,
            useFactory: function() {
                return document;
            },
            deps: []
        } ]);
        // a global listener to handle all dom event,
        // so we do not need to create a closure every time
                function errorHandler() {
            return new ErrorHandler();
        }
        var platform_browser_BrowserModule = /** @class */ /* */ function() {
            function BrowserModule(parentModule) {
                if (parentModule) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
            }
            var BrowserModule_1;
            return BrowserModule_1 = BrowserModule, 
            /**
     * Configures a browser-based app to transition from a server-rendered app, if
     * one is present on the page.
     *
     * @param params An object containing an identifier for the app to transition.
     * The ID must match between the client and server versions of the app.
     * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
     */
            BrowserModule.withServerTransition = function(params) {
                return {
                    ngModule: BrowserModule_1,
                    providers: [ {
                        provide: APP_ID,
                        useValue: params.appId
                    }, {
                        provide: TRANSITION_ID,
                        useExisting: APP_ID
                    }, SERVER_TRANSITION_PROVIDERS ]
                };
            }, BrowserModule;
        }();
        /**
 * Exports required infrastructure for all Angular apps.
 * Included by defaults in all Angular apps created with the CLI
 * `new` command.
 * Re-exports `CommonModule` and `ApplicationModule`, making their
 * exports and providers available to all apps.
 *
 * @publicApi
 */        "undefined" != typeof window && window;
        /**
 * NgModule to install on the client side while using the `TransferState` to transfer state from
 * server to client.
 *
 * @publicApi
 */
        var RouterEvent = /** @class */ /* */ function() {
            return function(
            /** @docsNotRequired */
            id, 
            /** @docsNotRequired */
            url) {
                this.id = id, this.url = url;
            };
        }(), router_NavigationStart = /** @class */ /* */ function(_super) {
            function NavigationStart(
            /** @docsNotRequired */
            id, 
            /** @docsNotRequired */
            url, 
            /** @docsNotRequired */
            navigationTrigger, 
            /** @docsNotRequired */
            restoredState) {
                void 0 === navigationTrigger && (navigationTrigger = "imperative"), void 0 === restoredState && (restoredState = null);
                var _this = _super.call(this, id, url) || this;
                return _this.navigationTrigger = navigationTrigger, _this.restoredState = restoredState, 
                _this;
            }
            /** @docsNotRequired */            return __extends(NavigationStart, _super), NavigationStart.prototype.toString = function() {
                return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')";
            }, NavigationStart;
        }(RouterEvent), router_NavigationEnd = /** @class */ /* */ function(_super) {
            function NavigationEnd(
            /** @docsNotRequired */
            id, 
            /** @docsNotRequired */
            url, 
            /** @docsNotRequired */
            urlAfterRedirects) {
                var _this = _super.call(this, id, url) || this;
                return _this.urlAfterRedirects = urlAfterRedirects, _this;
            }
            /** @docsNotRequired */            return __extends(NavigationEnd, _super), NavigationEnd.prototype.toString = function() {
                return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')";
            }, NavigationEnd;
        }(RouterEvent), router_NavigationCancel = /** @class */ /* */ function(_super) {
            function NavigationCancel(
            /** @docsNotRequired */
            id, 
            /** @docsNotRequired */
            url, 
            /** @docsNotRequired */
            reason) {
                var _this = _super.call(this, id, url) || this;
                return _this.reason = reason, _this;
            }
            /** @docsNotRequired */            return __extends(NavigationCancel, _super), NavigationCancel.prototype.toString = function() {
                return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')";
            }, NavigationCancel;
        }(RouterEvent), router_NavigationError = /** @class */ /* */ function(_super) {
            function NavigationError(
            /** @docsNotRequired */
            id, 
            /** @docsNotRequired */
            url, 
            /** @docsNotRequired */
            error) {
                var _this = _super.call(this, id, url) || this;
                return _this.error = error, _this;
            }
            /** @docsNotRequired */            return __extends(NavigationError, _super), NavigationError.prototype.toString = function() {
                return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")";
            }, NavigationError;
        }(RouterEvent), router_RoutesRecognized = /** @class */ /* */ function(_super) {
            function RoutesRecognized(
            /** @docsNotRequired */
            id, 
            /** @docsNotRequired */
            url, 
            /** @docsNotRequired */
            urlAfterRedirects, 
            /** @docsNotRequired */
            state) {
                var _this = _super.call(this, id, url) || this;
                return _this.urlAfterRedirects = urlAfterRedirects, _this.state = state, _this;
            }
            /** @docsNotRequired */            return __extends(RoutesRecognized, _super), RoutesRecognized.prototype.toString = function() {
                return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
            }, RoutesRecognized;
        }(RouterEvent), router_GuardsCheckStart = /** @class */ /* */ function(_super) {
            function GuardsCheckStart(
            /** @docsNotRequired */
            id, 
            /** @docsNotRequired */
            url, 
            /** @docsNotRequired */
            urlAfterRedirects, 
            /** @docsNotRequired */
            state) {
                var _this = _super.call(this, id, url) || this;
                return _this.urlAfterRedirects = urlAfterRedirects, _this.state = state, _this;
            }
            return __extends(GuardsCheckStart, _super), GuardsCheckStart.prototype.toString = function() {
                return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
            }, GuardsCheckStart;
        }(RouterEvent), router_GuardsCheckEnd = /** @class */ /* */ function(_super) {
            function GuardsCheckEnd(
            /** @docsNotRequired */
            id, 
            /** @docsNotRequired */
            url, 
            /** @docsNotRequired */
            urlAfterRedirects, 
            /** @docsNotRequired */
            state, 
            /** @docsNotRequired */
            shouldActivate) {
                var _this = _super.call(this, id, url) || this;
                return _this.urlAfterRedirects = urlAfterRedirects, _this.state = state, _this.shouldActivate = shouldActivate, 
                _this;
            }
            return __extends(GuardsCheckEnd, _super), GuardsCheckEnd.prototype.toString = function() {
                return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")";
            }, GuardsCheckEnd;
        }(RouterEvent), router_ResolveStart = /** @class */ /* */ function(_super) {
            function ResolveStart(
            /** @docsNotRequired */
            id, 
            /** @docsNotRequired */
            url, 
            /** @docsNotRequired */
            urlAfterRedirects, 
            /** @docsNotRequired */
            state) {
                var _this = _super.call(this, id, url) || this;
                return _this.urlAfterRedirects = urlAfterRedirects, _this.state = state, _this;
            }
            return __extends(ResolveStart, _super), ResolveStart.prototype.toString = function() {
                return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
            }, ResolveStart;
        }(RouterEvent), router_ResolveEnd = /** @class */ /* */ function(_super) {
            function ResolveEnd(
            /** @docsNotRequired */
            id, 
            /** @docsNotRequired */
            url, 
            /** @docsNotRequired */
            urlAfterRedirects, 
            /** @docsNotRequired */
            state) {
                var _this = _super.call(this, id, url) || this;
                return _this.urlAfterRedirects = urlAfterRedirects, _this.state = state, _this;
            }
            return __extends(ResolveEnd, _super), ResolveEnd.prototype.toString = function() {
                return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
            }, ResolveEnd;
        }(RouterEvent), RouteConfigLoadStart = /** @class */ /* */ function() {
            function RouteConfigLoadStart(
            /** @docsNotRequired */
            route) {
                this.route = route;
            }
            return RouteConfigLoadStart.prototype.toString = function() {
                return "RouteConfigLoadStart(path: " + this.route.path + ")";
            }, RouteConfigLoadStart;
        }(), RouteConfigLoadEnd = /** @class */ /* */ function() {
            function RouteConfigLoadEnd(
            /** @docsNotRequired */
            route) {
                this.route = route;
            }
            return RouteConfigLoadEnd.prototype.toString = function() {
                return "RouteConfigLoadEnd(path: " + this.route.path + ")";
            }, RouteConfigLoadEnd;
        }(), ChildActivationStart = /** @class */ /* */ function() {
            function ChildActivationStart(
            /** @docsNotRequired */
            snapshot) {
                this.snapshot = snapshot;
            }
            return ChildActivationStart.prototype.toString = function() {
                return "ChildActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')";
            }, ChildActivationStart;
        }(), ChildActivationEnd = /** @class */ /* */ function() {
            function ChildActivationEnd(
            /** @docsNotRequired */
            snapshot) {
                this.snapshot = snapshot;
            }
            return ChildActivationEnd.prototype.toString = function() {
                return "ChildActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')";
            }, ChildActivationEnd;
        }(), ActivationStart = /** @class */ /* */ function() {
            function ActivationStart(
            /** @docsNotRequired */
            snapshot) {
                this.snapshot = snapshot;
            }
            return ActivationStart.prototype.toString = function() {
                return "ActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')";
            }, ActivationStart;
        }(), ActivationEnd = /** @class */ /* */ function() {
            function ActivationEnd(
            /** @docsNotRequired */
            snapshot) {
                this.snapshot = snapshot;
            }
            return ActivationEnd.prototype.toString = function() {
                return "ActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')";
            }, ActivationEnd;
        }(), Scroll = /** @class */ /* */ function() {
            function Scroll(
            /** @docsNotRequired */
            routerEvent, 
            /** @docsNotRequired */
            position, 
            /** @docsNotRequired */
            anchor) {
                this.routerEvent = routerEvent, this.position = position, this.anchor = anchor;
            }
            return Scroll.prototype.toString = function() {
                return "Scroll(anchor: '" + this.anchor + "', position: '" + (this.position ? this.position[0] + ", " + this.position[1] : null) + "')";
            }, Scroll;
        }(), EmptyOutletComponent = /** @class */ /* */ function() {
            return function() {};
        }(), PRIMARY_OUTLET = "primary", ParamsAsMap = /** @class */ /* */ function() {
            function ParamsAsMap(params) {
                this.params = params || {};
            }
            return ParamsAsMap.prototype.has = function(name) {
                return this.params.hasOwnProperty(name);
            }, ParamsAsMap.prototype.get = function(name) {
                if (this.has(name)) {
                    var v = this.params[name];
                    return Array.isArray(v) ? v[0] : v;
                }
                return null;
            }, ParamsAsMap.prototype.getAll = function(name) {
                if (this.has(name)) {
                    var v = this.params[name];
                    return Array.isArray(v) ? v : [ v ];
                }
                return [];
            }, Object.defineProperty(ParamsAsMap.prototype, "keys", {
                get: function() {
                    return Object.keys(this.params);
                },
                enumerable: !0,
                configurable: !0
            }), ParamsAsMap;
        }();
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * Predicates for use with {@link DebugElement}'s query functions.
 *
 * @publicApi
 */        
        /**
 * Convert a `Params` instance to a `ParamMap`.
 *
 * @publicApi
 */
        function convertToParamMap(params) {
            return new ParamsAsMap(params);
        }
        var NAVIGATION_CANCELING_ERROR = "ngNavigationCancelingError";
        function navigationCancelingError(message) {
            var error = Error("NavigationCancelingError: " + message);
            return error[NAVIGATION_CANCELING_ERROR] = !0, error;
        }
        // Matches the route configuration (`route`) against the actual URL (`segments`).
        function defaultUrlMatcher(segments, segmentGroup, route) {
            var parts = route.path.split("/");
            if (parts.length > segments.length) 
            // The actual URL is shorter than the config, no match
            return null;
            if ("full" === route.pathMatch && (segmentGroup.hasChildren() || parts.length < segments.length)) 
            // The config is longer than the actual URL but we are looking for a full match, return null
            return null;
            // Check each config part against the actual URL
            for (var posParams = {}, index = 0; index < parts.length; index++) {
                var part = parts[index], segment = segments[index];
                if (part.startsWith(":")) posParams[part.substring(1)] = segment; else if (part !== segment.path) 
                // The actual URL part does not match the config, no match
                return null;
            }
            return {
                consumed: segments.slice(0, parts.length),
                posParams: posParams
            };
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        var LoadedRouterConfig = /** @class */ /* */ function() {
            return function(routes, module) {
                this.routes = routes, this.module = module;
            };
        }();
        function validateConfig(config, parentPath) {
            void 0 === parentPath && (parentPath = "");
            // forEach doesn't iterate undefined values
                        for (var i = 0; i < config.length; i++) {
                var route = config[i];
                router_validateNode(route, getFullPath(parentPath, route));
            }
        }
        function router_validateNode(route, fullPath) {
            if (!route) throw new Error("\n      Invalid configuration of route '" + fullPath + "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
            if (Array.isArray(route)) throw new Error("Invalid configuration of route '" + fullPath + "': Array cannot be specified");
            if (!route.component && !route.children && !route.loadChildren && route.outlet && route.outlet !== PRIMARY_OUTLET) throw new Error("Invalid configuration of route '" + fullPath + "': a componentless route without children or loadChildren cannot have a named outlet set");
            if (route.redirectTo && route.children) throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and children cannot be used together");
            if (route.redirectTo && route.loadChildren) throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and loadChildren cannot be used together");
            if (route.children && route.loadChildren) throw new Error("Invalid configuration of route '" + fullPath + "': children and loadChildren cannot be used together");
            if (route.redirectTo && route.component) throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and component cannot be used together");
            if (route.path && route.matcher) throw new Error("Invalid configuration of route '" + fullPath + "': path and matcher cannot be used together");
            if (void 0 === route.redirectTo && !route.component && !route.children && !route.loadChildren) throw new Error("Invalid configuration of route '" + fullPath + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
            if (void 0 === route.path && void 0 === route.matcher) throw new Error("Invalid configuration of route '" + fullPath + "': routes must have either a path or a matcher specified");
            if ("string" == typeof route.path && "/" === route.path.charAt(0)) throw new Error("Invalid configuration of route '" + fullPath + "': path cannot start with a slash");
            if ("" === route.path && void 0 !== route.redirectTo && void 0 === route.pathMatch) throw new Error("Invalid configuration of route '{path: \"" + fullPath + '", redirectTo: "' + route.redirectTo + "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.");
            if (void 0 !== route.pathMatch && "full" !== route.pathMatch && "prefix" !== route.pathMatch) throw new Error("Invalid configuration of route '" + fullPath + "': pathMatch can only be set to 'prefix' or 'full'");
            route.children && validateConfig(route.children, fullPath);
        }
        function getFullPath(parentPath, currentRoute) {
            return currentRoute ? parentPath || currentRoute.path ? parentPath && !currentRoute.path ? parentPath + "/" : !parentPath && currentRoute.path ? currentRoute.path : parentPath + "/" + currentRoute.path : "" : parentPath;
        }
        /**
 * Makes a copy of the config and adds any default required properties.
 */        function standardizeConfig(r) {
            var children = r.children && r.children.map(standardizeConfig), c = children ? __assign({}, r, {
                children: children
            }) : __assign({}, r);
            return !c.component && (children || c.loadChildren) && c.outlet && c.outlet !== PRIMARY_OUTLET && (c.component = EmptyOutletComponent), 
            c;
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        function shallowEqual(a, b) {
            var key, k1 = Object.keys(a), k2 = Object.keys(b);
            if (k1.length != k2.length) return !1;
            for (var i = 0; i < k1.length; i++) if (a[key = k1[i]] !== b[key]) return !1;
            return !0;
        }
        /**
 * Flattens single-level nested arrays.
 */        function flatten(arr) {
            return Array.prototype.concat.apply([], arr);
        }
        /**
 * Return the last element of an array.
 */        function last$1(a) {
            return a.length > 0 ? a[a.length - 1] : null;
        }
        function forEach(map$$1, callback) {
            for (var prop in map$$1) map$$1.hasOwnProperty(prop) && callback(map$$1[prop], prop);
        }
        function wrapIntoObservable(value) {
            return isObservable(value) ? value : core_isPromise(value) ? from(Promise.resolve(value)) : of(value);
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        function containsTree(container, containee, exact) {
            return exact ? function(container, containee) {
                // TODO: This does not handle array params correctly.
                return shallowEqual(container, containee);
            }(container.queryParams, containee.queryParams) && function equalSegmentGroups(container, containee) {
                if (!equalPath(container.segments, containee.segments)) return !1;
                if (container.numberOfChildren !== containee.numberOfChildren) return !1;
                for (var c in containee.children) {
                    if (!container.children[c]) return !1;
                    if (!equalSegmentGroups(container.children[c], containee.children[c])) return !1;
                }
                return !0;
            }(container.root, containee.root) : function(container, containee) {
                // TODO: This does not handle array params correctly.
                return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every(function(key) {
                    return containee[key] === container[key];
                });
            }(container.queryParams, containee.queryParams) && function containsSegmentGroup(container, containee) {
                return function containsSegmentGroupHelper(container, containee, containeePaths) {
                    if (container.segments.length > containeePaths.length) return !!equalPath(current = container.segments.slice(0, containeePaths.length), containeePaths) && !containee.hasChildren();
                    if (container.segments.length === containeePaths.length) {
                        if (!equalPath(container.segments, containeePaths)) return !1;
                        for (var c in containee.children) {
                            if (!container.children[c]) return !1;
                            if (!containsSegmentGroup(container.children[c], containee.children[c])) return !1;
                        }
                        return !0;
                    }
                    var current = containeePaths.slice(0, container.segments.length), next = containeePaths.slice(container.segments.length);
                    return !!equalPath(container.segments, current) && !!container.children[PRIMARY_OUTLET] && containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next);
                }
                /**
 * @description
 *
 * Represents the parsed URL.
 *
 * Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
 * serialized tree.
 * UrlTree is a data structure that provides a lot of affordances in dealing with URLs
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree =
 *       router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
 *     const f = tree.fragment; // return 'fragment'
 *     const q = tree.queryParams; // returns {debug: 'true'}
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
 *     g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
 *     g.children['support'].segments; // return 1 segment 'help'
 *   }
 * }
 * ```
 *
 * @publicApi
 */ (container, containee, containee.segments);
            }(container.root, containee.root);
        }
        var UrlTree = /** @class */ /* */ function() {
            /** @internal */
            function UrlTree(
            /** The root segment group of the URL tree */
            root, 
            /** The query params of the URL */
            queryParams, 
            /** The fragment of the URL */
            fragment) {
                this.root = root, this.queryParams = queryParams, this.fragment = fragment;
            }
            return Object.defineProperty(UrlTree.prototype, "queryParamMap", {
                get: function() {
                    return this._queryParamMap || (this._queryParamMap = convertToParamMap(this.queryParams)), 
                    this._queryParamMap;
                },
                enumerable: !0,
                configurable: !0
            }), 
            /** @docsNotRequired */
            UrlTree.prototype.toString = function() {
                return DEFAULT_SERIALIZER.serialize(this);
            }, UrlTree;
        }(), UrlSegmentGroup = /** @class */ /* */ function() {
            function UrlSegmentGroup(
            /** The URL segments of this group. See `UrlSegment` for more information */
            segments, 
            /** The list of children of this group */
            children) {
                var _this = this;
                this.segments = segments, this.children = children, 
                /** The parent node in the url tree */
                this.parent = null, forEach(children, function(v, k) {
                    return v.parent = _this;
                });
            }
            /** Whether the segment has child segments */            return UrlSegmentGroup.prototype.hasChildren = function() {
                return this.numberOfChildren > 0;
            }, Object.defineProperty(UrlSegmentGroup.prototype, "numberOfChildren", {
                /** Number of child segments */
                get: function() {
                    return Object.keys(this.children).length;
                },
                enumerable: !0,
                configurable: !0
            }), 
            /** @docsNotRequired */
            UrlSegmentGroup.prototype.toString = function() {
                return serializePaths(this);
            }, UrlSegmentGroup;
        }(), UrlSegment = /** @class */ /* */ function() {
            function UrlSegment(
            /** The path part of a URL segment */
            path, 
            /** The matrix parameters associated with a segment */
            parameters) {
                this.path = path, this.parameters = parameters;
            }
            return Object.defineProperty(UrlSegment.prototype, "parameterMap", {
                get: function() {
                    return this._parameterMap || (this._parameterMap = convertToParamMap(this.parameters)), 
                    this._parameterMap;
                },
                enumerable: !0,
                configurable: !0
            }), 
            /** @docsNotRequired */
            UrlSegment.prototype.toString = function() {
                return serializePath(this);
            }, UrlSegment;
        }();
        /**
 * @description
 *
 * Represents the parsed URL segment group.
 *
 * See `UrlTree` for more information.
 *
 * @publicApi
 */        function equalPath(as, bs) {
            return as.length === bs.length && as.every(function(a, i) {
                return a.path === bs[i].path;
            });
        }
        function mapChildrenIntoArray(segment, fn) {
            var res = [];
            return forEach(segment.children, function(child, childOutlet) {
                childOutlet === PRIMARY_OUTLET && (res = res.concat(fn(child, childOutlet)));
            }), forEach(segment.children, function(child, childOutlet) {
                childOutlet !== PRIMARY_OUTLET && (res = res.concat(fn(child, childOutlet)));
            }), res;
        }
        /**
 * @description
 *
 * Serializes and deserializes a URL string into a URL tree.
 *
 * The url serialization strategy is customizable. You can
 * make all URLs case insensitive by providing a custom UrlSerializer.
 *
 * See `DefaultUrlSerializer` for an example of a URL serializer.
 *
 * @publicApi
 */        var UrlSerializer = /** @class */ /* */ function() {
            return function() {};
        }(), DefaultUrlSerializer = /** @class */ /* */ function() {
            function DefaultUrlSerializer() {}
            /** Parses a url into a `UrlTree` */            return DefaultUrlSerializer.prototype.parse = function(url) {
                var p = new UrlParser(url);
                return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
            }, 
            /** Converts a `UrlTree` into a url */
            DefaultUrlSerializer.prototype.serialize = function(tree) {
                var params, strParams;
                return "/" + function serializeSegment(segment, root) {
                    if (!segment.hasChildren()) return serializePaths(segment);
                    if (root) {
                        var primary = segment.children[PRIMARY_OUTLET] ? serializeSegment(segment.children[PRIMARY_OUTLET], !1) : "", children_1 = [];
                        return forEach(segment.children, function(v, k) {
                            k !== PRIMARY_OUTLET && children_1.push(k + ":" + serializeSegment(v, !1));
                        }), children_1.length > 0 ? primary + "(" + children_1.join("//") + ")" : primary;
                    }
                    var children = mapChildrenIntoArray(segment, function(v, k) {
                        return k === PRIMARY_OUTLET ? [ serializeSegment(segment.children[PRIMARY_OUTLET], !1) ] : [ k + ":" + serializeSegment(v, !1) ];
                    });
                    return serializePaths(segment) + "/(" + children.join("//") + ")";
                }
                /**
 * Encodes a URI string with the default encoding. This function will only ever be called from
 * `encodeUriQuery` or `encodeUriSegment` as it's the base set of encodings to be used. We need
 * a custom encoding because encodeURIComponent is too aggressive and encodes stuff that doesn't
 * have to be encoded per https://url.spec.whatwg.org.
 */ (tree.root, !0) + (params = tree.queryParams, (strParams = Object.keys(params).map(function(name) {
                    var value = params[name];
                    return Array.isArray(value) ? value.map(function(v) {
                        return encodeUriQuery(name) + "=" + encodeUriQuery(v);
                    }).join("&") : encodeUriQuery(name) + "=" + encodeUriQuery(value);
                })).length ? "?" + strParams.join("&") : "") + ("string" == typeof tree.fragment ? "#" + encodeURI(tree.fragment) : "");
            }, DefaultUrlSerializer;
        }(), DEFAULT_SERIALIZER = /* */ new DefaultUrlSerializer();
        /**
 * @description
 *
 * A default implementation of the `UrlSerializer`.
 *
 * Example URLs:
 *
 * ```
 * /inbox/33(popup:compose)
 * /inbox/33;open=true/messages/44
 * ```
 *
 * DefaultUrlSerializer uses parentheses to serialize secondary segments (e.g., popup:compose), the
 * colon syntax to specify the outlet, and the ';parameter=value' syntax (e.g., open=true) to
 * specify route specific parameters.
 *
 * @publicApi
 */        function serializePaths(segment) {
            return segment.segments.map(function(p) {
                return serializePath(p);
            }).join("/");
        }
        function encodeUriString(s) {
            return encodeURIComponent(s).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
        }
        /**
 * This function should be used to encode both keys and values in a query string key/value. In
 * the following URL, you need to call encodeUriQuery on "k" and "v":
 *
 * http://www.site.org/html;mk=mv?k=v#f
 */        function encodeUriQuery(s) {
            return encodeUriString(s).replace(/%3B/gi, ";");
        }
        /**
 * This function should be used to encode a URL fragment. In the following URL, you need to call
 * encodeUriFragment on "f":
 *
 * http://www.site.org/html;mk=mv?k=v#f
 */        
        /**
 * This function should be run on any URI segment as well as the key and value in a key/value
 * pair for matrix params. In the following URL, you need to call encodeUriSegment on "html",
 * "mk", and "mv":
 *
 * http://www.site.org/html;mk=mv?k=v#f
 */
        function encodeUriSegment(s) {
            return encodeUriString(s).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
        }
        function decode(s) {
            return decodeURIComponent(s);
        }
        // Query keys/values should have the "+" replaced first, as "+" in a query string is " ".
        // decodeURIComponent function will not decode "+" as a space.
                function decodeQuery(s) {
            return decode(s.replace(/\+/g, "%20"));
        }
        function serializePath(path) {
            return "" + encodeUriSegment(path.path) + (params = path.parameters, Object.keys(params).map(function(key) {
                return ";" + encodeUriSegment(key) + "=" + encodeUriSegment(params[key]);
            }).join(""));
            var params;
        }
        var SEGMENT_RE = /^[^\/()?;=#]+/;
        function matchSegments(str) {
            var match = str.match(SEGMENT_RE);
            return match ? match[0] : "";
        }
        var QUERY_PARAM_RE = /^[^=?&#]+/, QUERY_PARAM_VALUE_RE = /^[^?&#]+/, UrlParser = /** @class */ /* */ function() {
            function UrlParser(url) {
                this.url = url, this.remaining = url;
            }
            return UrlParser.prototype.parseRootSegment = function() {
                return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new UrlSegmentGroup([], {}) : new UrlSegmentGroup([], this.parseChildren());
                // The root segment group never has segments
                        }, UrlParser.prototype.parseQueryParams = function() {
                var params = {};
                if (this.consumeOptional("?")) do {
                    this.parseQueryParam(params);
                } while (this.consumeOptional("&"));
                return params;
            }, UrlParser.prototype.parseFragment = function() {
                return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null;
            }, UrlParser.prototype.parseChildren = function() {
                if ("" === this.remaining) return {};
                this.consumeOptional("/");
                var segments = [];
                for (this.peekStartsWith("(") || segments.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/("); ) this.capture("/"), 
                segments.push(this.parseSegment());
                var children = {};
                this.peekStartsWith("/(") && (this.capture("/"), children = this.parseParens(!0));
                var res = {};
                return this.peekStartsWith("(") && (res = this.parseParens(!1)), (segments.length > 0 || Object.keys(children).length > 0) && (res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children)), 
                res;
            }, 
            // parse a segment with its matrix parameters
            // ie `name;k1=v1;k2`
            UrlParser.prototype.parseSegment = function() {
                var path = matchSegments(this.remaining);
                if ("" === path && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
                return this.capture(path), new UrlSegment(decode(path), this.parseMatrixParams());
            }, UrlParser.prototype.parseMatrixParams = function() {
                for (var params = {}; this.consumeOptional(";"); ) this.parseParam(params);
                return params;
            }, UrlParser.prototype.parseParam = function(params) {
                var key = matchSegments(this.remaining);
                if (key) {
                    this.capture(key);
                    var value = "";
                    if (this.consumeOptional("=")) {
                        var valueMatch = matchSegments(this.remaining);
                        valueMatch && this.capture(value = valueMatch);
                    }
                    params[decode(key)] = decode(value);
                }
            }, 
            // Parse a single query parameter `name[=value]`
            UrlParser.prototype.parseQueryParam = function(params) {
                var match, key = (match = this.remaining.match(QUERY_PARAM_RE)) ? match[0] : "";
                if (key) {
                    this.capture(key);
                    var value = "";
                    if (this.consumeOptional("=")) {
                        var valueMatch = 
                        // Return the value of the query param at the start of the string or an empty string
                        function(str) {
                            var match = str.match(QUERY_PARAM_VALUE_RE);
                            return match ? match[0] : "";
                        }(this.remaining);
                        valueMatch && this.capture(value = valueMatch);
                    }
                    var decodedKey = decodeQuery(key), decodedVal = decodeQuery(value);
                    if (params.hasOwnProperty(decodedKey)) {
                        // Append to existing values
                        var currentVal = params[decodedKey];
                        Array.isArray(currentVal) || (params[decodedKey] = currentVal = [ currentVal ]), 
                        currentVal.push(decodedVal);
                    } else 
                    // Create a new value
                    params[decodedKey] = decodedVal;
                }
            }, 
            // parse `(a/b//outlet_name:c/d)`
            UrlParser.prototype.parseParens = function(allowPrimary) {
                var segments = {};
                for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0; ) {
                    var path = matchSegments(this.remaining), next = this.remaining[path.length];
                    // if is is not one of these characters, then the segment was unescaped
                    // or the group was not closed
                    if ("/" !== next && ")" !== next && ";" !== next) throw new Error("Cannot parse url '" + this.url + "'");
                    var outletName = void 0;
                    path.indexOf(":") > -1 ? (outletName = path.substr(0, path.indexOf(":")), this.capture(outletName), 
                    this.capture(":")) : allowPrimary && (outletName = PRIMARY_OUTLET);
                    var children = this.parseChildren();
                    segments[outletName] = 1 === Object.keys(children).length ? children[PRIMARY_OUTLET] : new UrlSegmentGroup([], children), 
                    this.consumeOptional("//");
                }
                return segments;
            }, UrlParser.prototype.peekStartsWith = function(str) {
                return this.remaining.startsWith(str);
            }, 
            // Consumes the prefix when it is present and returns whether it has been consumed
            UrlParser.prototype.consumeOptional = function(str) {
                return !!this.peekStartsWith(str) && (this.remaining = this.remaining.substring(str.length), 
                !0);
            }, UrlParser.prototype.capture = function(str) {
                if (!this.consumeOptional(str)) throw new Error('Expected "' + str + '".');
            }, UrlParser;
        }(), Tree = /** @class */ /* */ function() {
            function Tree(root) {
                this._root = root;
            }
            return Object.defineProperty(Tree.prototype, "root", {
                get: function() {
                    return this._root.value;
                },
                enumerable: !0,
                configurable: !0
            }), 
            /**
     * @internal
     */
            Tree.prototype.parent = function(t) {
                var p = this.pathFromRoot(t);
                return p.length > 1 ? p[p.length - 2] : null;
            }, 
            /**
     * @internal
     */
            Tree.prototype.children = function(t) {
                var n = findNode(t, this._root);
                return n ? n.children.map(function(t) {
                    return t.value;
                }) : [];
            }, 
            /**
     * @internal
     */
            Tree.prototype.firstChild = function(t) {
                var n = findNode(t, this._root);
                return n && n.children.length > 0 ? n.children[0].value : null;
            }, 
            /**
     * @internal
     */
            Tree.prototype.siblings = function(t) {
                var p = findPath(t, this._root);
                return p.length < 2 ? [] : p[p.length - 2].children.map(function(c) {
                    return c.value;
                }).filter(function(cc) {
                    return cc !== t;
                });
            }, 
            /**
     * @internal
     */
            Tree.prototype.pathFromRoot = function(t) {
                return findPath(t, this._root).map(function(s) {
                    return s.value;
                });
            }, Tree;
        }();
        // Return the name of the query param at the start of the string or an empty string
                // DFS for the node matching the value
        function findNode(value, node) {
            var e_1, _a;
            if (value === node.value) return node;
            try {
                for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var node_1 = findNode(value, _c.value);
                    if (node_1) return node_1;
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally {
                try {
                    _c && !_c.done && (_a = _b.return) && _a.call(_b);
                } finally {
                    if (e_1) throw e_1.error;
                }
            }
            return null;
        }
        // Return the path to the node with the given value using DFS
                function findPath(value, node) {
            var e_2, _a;
            if (value === node.value) return [ node ];
            try {
                for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var path = findPath(value, _c.value);
                    if (path.length) return path.unshift(node), path;
                }
            } catch (e_2_1) {
                e_2 = {
                    error: e_2_1
                };
            } finally {
                try {
                    _c && !_c.done && (_a = _b.return) && _a.call(_b);
                } finally {
                    if (e_2) throw e_2.error;
                }
            }
            return [];
        }
        var TreeNode = /** @class */ /* */ function() {
            function TreeNode(value, children) {
                this.value = value, this.children = children;
            }
            return TreeNode.prototype.toString = function() {
                return "TreeNode(" + this.value + ")";
            }, TreeNode;
        }();
        // Return the list of T indexed by outlet name
                function nodeChildrenAsMap(node) {
            var map$$1 = {};
            return node && node.children.forEach(function(child) {
                return map$$1[child.value.outlet] = child;
            }), map$$1;
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * @description
 *
 * Represents the state of the router.
 *
 * RouterState is a tree of activated routes. Every node in this tree knows about the "consumed" URL
 * segments, the extracted parameters, and the resolved data.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const root: ActivatedRoute = state.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * See `ActivatedRoute` for more information.
 *
 * @publicApi
 */        var router_RouterState = /** @class */ /* */ function(_super) {
            /** @internal */
            function RouterState(root, 
            /** The current snapshot of the router state */
            snapshot) {
                var _this = _super.call(this, root) || this;
                return _this.snapshot = snapshot, setRouterState(_this, root), _this;
            }
            return __extends(RouterState, _super), RouterState.prototype.toString = function() {
                return this.snapshot.toString();
            }, RouterState;
        }(Tree);
        function createEmptyState(urlTree, rootComponent) {
            var snapshot = function(urlTree, rootComponent) {
                var activated = new ActivatedRouteSnapshot([], {}, {}, "", {}, PRIMARY_OUTLET, rootComponent, null, urlTree.root, -1, {});
                return new router_RouterStateSnapshot("", new TreeNode(activated, []));
            }
            /**
 * @description
 *
 * Contains the information about a route associated with a component loaded in an
 * outlet.  An `ActivatedRoute` can also be used to traverse the router state tree.
 *
 * ```
 * @Component({...})
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: Observable<string> = route.params.map(p => p.id);
 *     const url: Observable<string> = route.url.map(segments => segments.join(''));
 *     // route.data includes both `data` and `resolve`
 *     const user = route.data.map(d => d.user);
 *   }
 * }
 * ```
 *
 * @publicApi
 */ (urlTree, rootComponent), emptyUrl = new BehaviorSubject_BehaviorSubject([ new UrlSegment("", {}) ]), emptyParams = new BehaviorSubject_BehaviorSubject({}), emptyData = new BehaviorSubject_BehaviorSubject({}), emptyQueryParams = new BehaviorSubject_BehaviorSubject({}), fragment = new BehaviorSubject_BehaviorSubject(""), activated = new router_ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
            return activated.snapshot = snapshot.root, new router_RouterState(new TreeNode(activated, []), snapshot);
        }
        var router_ActivatedRoute = /** @class */ /* */ function() {
            /** @internal */
            function ActivatedRoute(
            /** An observable of the URL segments matched by this route */
            url, 
            /** An observable of the matrix parameters scoped to this route */
            params, 
            /** An observable of the query parameters shared by all the routes */
            queryParams, 
            /** An observable of the URL fragment shared by all the routes */
            fragment, 
            /** An observable of the static and resolved data of this route. */
            data, 
            /** The outlet name of the route. It's a constant */
            outlet, 
            /** The component of the route. It's a constant */
            // TODO(vsavkin): remove |string
            component, futureSnapshot) {
                this.url = url, this.params = params, this.queryParams = queryParams, this.fragment = fragment, 
                this.data = data, this.outlet = outlet, this.component = component, this._futureSnapshot = futureSnapshot;
            }
            return Object.defineProperty(ActivatedRoute.prototype, "routeConfig", {
                /** The configuration used to match this route */
                get: function() {
                    return this._futureSnapshot.routeConfig;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ActivatedRoute.prototype, "root", {
                /** The root of the router state */
                get: function() {
                    return this._routerState.root;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ActivatedRoute.prototype, "parent", {
                /** The parent of this route in the router state tree */
                get: function() {
                    return this._routerState.parent(this);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ActivatedRoute.prototype, "firstChild", {
                /** The first child of this route in the router state tree */
                get: function() {
                    return this._routerState.firstChild(this);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ActivatedRoute.prototype, "children", {
                /** The children of this route in the router state tree */
                get: function() {
                    return this._routerState.children(this);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ActivatedRoute.prototype, "pathFromRoot", {
                /** The path from the root of the router state tree to this route */
                get: function() {
                    return this._routerState.pathFromRoot(this);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ActivatedRoute.prototype, "paramMap", {
                get: function() {
                    return this._paramMap || (this._paramMap = this.params.pipe(map(function(p) {
                        return convertToParamMap(p);
                    }))), this._paramMap;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ActivatedRoute.prototype, "queryParamMap", {
                get: function() {
                    return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(map(function(p) {
                        return convertToParamMap(p);
                    }))), this._queryParamMap;
                },
                enumerable: !0,
                configurable: !0
            }), ActivatedRoute.prototype.toString = function() {
                return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")";
            }, ActivatedRoute;
        }();
        /**
 * Returns the inherited params, data, and resolve for a given route.
 * By default, this only inherits values up to the nearest path-less or component-less route.
 * @internal
 */        function inheritedParamsDataResolve(route, paramsInheritanceStrategy) {
            void 0 === paramsInheritanceStrategy && (paramsInheritanceStrategy = "emptyOnly");
            var pathFromRoot = route.pathFromRoot, inheritingStartingFrom = 0;
            if ("always" !== paramsInheritanceStrategy) for (inheritingStartingFrom = pathFromRoot.length - 1; inheritingStartingFrom >= 1; ) {
                var current = pathFromRoot[inheritingStartingFrom], parent_1 = pathFromRoot[inheritingStartingFrom - 1];
                // current route is an empty path => inherits its parent's params and data
                if (current.routeConfig && "" === current.routeConfig.path) inheritingStartingFrom--;
                // parent is componentless => current route should inherit its params and data
                 else {
                    if (parent_1.component) break;
                    inheritingStartingFrom--;
                }
            }
            return 
            /** @internal */
            function(pathFromRoot) {
                return pathFromRoot.reduce(function(res, curr) {
                    return {
                        params: __assign({}, res.params, curr.params),
                        data: __assign({}, res.data, curr.data),
                        resolve: __assign({}, res.resolve, curr._resolvedData)
                    };
                }, {
                    params: {},
                    data: {},
                    resolve: {}
                });
            }
            /**
 * @description
 *
 * Contains the information about a route associated with a component loaded in an
 * outlet at a particular moment in time. ActivatedRouteSnapshot can also be used to
 * traverse the router state tree.
 *
 * ```
 * @Component({templateUrl:'./my-component.html'})
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: string = route.snapshot.params.id;
 *     const url: string = route.snapshot.url.join('');
 *     const user = route.snapshot.data.user;
 *   }
 * }
 * ```
 *
 * @publicApi
 */ (pathFromRoot.slice(inheritingStartingFrom));
        }
        var ActivatedRouteSnapshot = /** @class */ /* */ function() {
            /** @internal */
            function ActivatedRouteSnapshot(
            /** The URL segments matched by this route */
            url, 
            /** The matrix parameters scoped to this route */
            params, 
            /** The query parameters shared by all the routes */
            queryParams, 
            /** The URL fragment shared by all the routes */
            fragment, 
            /** The static and resolved data of this route */
            data, 
            /** The outlet name of the route */
            outlet, 
            /** The component of the route */
            component, routeConfig, urlSegment, lastPathIndex, resolve) {
                this.url = url, this.params = params, this.queryParams = queryParams, this.fragment = fragment, 
                this.data = data, this.outlet = outlet, this.component = component, this.routeConfig = routeConfig, 
                this._urlSegment = urlSegment, this._lastPathIndex = lastPathIndex, this._resolve = resolve;
            }
            return Object.defineProperty(ActivatedRouteSnapshot.prototype, "root", {
                /** The root of the router state */
                get: function() {
                    return this._routerState.root;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ActivatedRouteSnapshot.prototype, "parent", {
                /** The parent of this route in the router state tree */
                get: function() {
                    return this._routerState.parent(this);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ActivatedRouteSnapshot.prototype, "firstChild", {
                /** The first child of this route in the router state tree */
                get: function() {
                    return this._routerState.firstChild(this);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ActivatedRouteSnapshot.prototype, "children", {
                /** The children of this route in the router state tree */
                get: function() {
                    return this._routerState.children(this);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ActivatedRouteSnapshot.prototype, "pathFromRoot", {
                /** The path from the root of the router state tree to this route */
                get: function() {
                    return this._routerState.pathFromRoot(this);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ActivatedRouteSnapshot.prototype, "paramMap", {
                get: function() {
                    return this._paramMap || (this._paramMap = convertToParamMap(this.params)), this._paramMap;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(ActivatedRouteSnapshot.prototype, "queryParamMap", {
                get: function() {
                    return this._queryParamMap || (this._queryParamMap = convertToParamMap(this.queryParams)), 
                    this._queryParamMap;
                },
                enumerable: !0,
                configurable: !0
            }), ActivatedRouteSnapshot.prototype.toString = function() {
                return "Route(url:'" + this.url.map(function(segment) {
                    return segment.toString();
                }).join("/") + "', path:'" + (this.routeConfig ? this.routeConfig.path : "") + "')";
            }, ActivatedRouteSnapshot;
        }(), router_RouterStateSnapshot = /** @class */ /* */ function(_super) {
            /** @internal */
            function RouterStateSnapshot(
            /** The url from which this snapshot was created */
            url, root) {
                var _this = _super.call(this, root) || this;
                return _this.url = url, setRouterState(_this, root), _this;
            }
            return __extends(RouterStateSnapshot, _super), RouterStateSnapshot.prototype.toString = function() {
                return serializeNode(this._root);
            }, RouterStateSnapshot;
        }(Tree);
        /**
 * @description
 *
 * Represents the state of the router at a moment in time.
 *
 * This is a tree of activated route snapshots. Every node in this tree knows about
 * the "consumed" URL segments, the extracted parameters, and the resolved data.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const snapshot: RouterStateSnapshot = state.snapshot;
 *     const root: ActivatedRouteSnapshot = snapshot.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * @publicApi
 */        function setRouterState(state, node) {
            node.value._routerState = state, node.children.forEach(function(c) {
                return setRouterState(state, c);
            });
        }
        function serializeNode(node) {
            var c = node.children.length > 0 ? " { " + node.children.map(serializeNode).join(", ") + " } " : "";
            return "" + node.value + c;
        }
        /**
 * The expectation is that the activate route is created with the right set of parameters.
 * So we push new values into the observables only when they are not the initial values.
 * And we detect that by checking if the snapshot field is set.
 */        function advanceActivatedRoute(route) {
            if (route.snapshot) {
                var currentSnapshot = route.snapshot, nextSnapshot = route._futureSnapshot;
                route.snapshot = nextSnapshot, shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams) || route.queryParams.next(nextSnapshot.queryParams), 
                currentSnapshot.fragment !== nextSnapshot.fragment && route.fragment.next(nextSnapshot.fragment), 
                shallowEqual(currentSnapshot.params, nextSnapshot.params) || route.params.next(nextSnapshot.params), 
                function(a, b) {
                    if (a.length !== b.length) return !1;
                    for (var i = 0; i < a.length; ++i) if (!shallowEqual(a[i], b[i])) return !1;
                    return !0;
                }(currentSnapshot.url, nextSnapshot.url) || route.url.next(nextSnapshot.url), shallowEqual(currentSnapshot.data, nextSnapshot.data) || route.data.next(nextSnapshot.data);
            } else route.snapshot = route._futureSnapshot, 
            // this is for resolved data
            route.data.next(route._futureSnapshot.data);
        }
        function equalParamsAndUrlSegments(a, b) {
            var as, bs;
            return shallowEqual(a.params, b.params) && equalPath(as = a.url, bs = b.url) && as.every(function(a, i) {
                return shallowEqual(a.parameters, bs[i].parameters);
            }) && !(!a.parent != !b.parent) && (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent));
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        function isMatrixParams(command) {
            return "object" == typeof command && null != command && !command.outlets && !command.segmentPath;
        }
        function router_tree(oldSegmentGroup, newSegmentGroup, urlTree, queryParams, fragment) {
            var qp = {};
            return queryParams && forEach(queryParams, function(value, name) {
                qp[name] = Array.isArray(value) ? value.map(function(v) {
                    return "" + v;
                }) : "" + value;
            }), new UrlTree(urlTree.root === oldSegmentGroup ? newSegmentGroup : function replaceSegment(current, oldSegment, newSegment) {
                var children = {};
                return forEach(current.children, function(c, outletName) {
                    children[outletName] = c === oldSegment ? newSegment : replaceSegment(c, oldSegment, newSegment);
                }), new UrlSegmentGroup(current.segments, children);
            }(urlTree.root, oldSegmentGroup, newSegmentGroup), qp, fragment);
        }
        var Navigation = /** @class */ /* */ function() {
            function Navigation(isAbsolute, numberOfDoubleDots, commands) {
                if (this.isAbsolute = isAbsolute, this.numberOfDoubleDots = numberOfDoubleDots, 
                this.commands = commands, isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) throw new Error("Root segment cannot have matrix parameters");
                var cmdWithOutlet = commands.find(function(c) {
                    return "object" == typeof c && null != c && c.outlets;
                });
                if (cmdWithOutlet && cmdWithOutlet !== last$1(commands)) throw new Error("{outlets:{}} has to be the last command");
            }
            return Navigation.prototype.toRoot = function() {
                return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0];
            }, Navigation;
        }(), Position = /** @class */ /* */ function() {
            return function(segmentGroup, processChildren, index) {
                this.segmentGroup = segmentGroup, this.processChildren = processChildren, this.index = index;
            };
        }();
        /** Transforms commands to a normalized `Navigation` */        function getPath(command) {
            return "object" == typeof command && null != command && command.outlets ? command.outlets[PRIMARY_OUTLET] : "" + command;
        }
        function updateSegmentGroup(segmentGroup, startIndex, commands) {
            if (segmentGroup || (segmentGroup = new UrlSegmentGroup([], {})), 0 === segmentGroup.segments.length && segmentGroup.hasChildren()) return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
            var m = function(segmentGroup, startIndex, commands) {
                for (var currentCommandIndex = 0, currentPathIndex = startIndex, noMatch = {
                    match: !1,
                    pathIndex: 0,
                    commandIndex: 0
                }; currentPathIndex < segmentGroup.segments.length; ) {
                    if (currentCommandIndex >= commands.length) return noMatch;
                    var path = segmentGroup.segments[currentPathIndex], curr = getPath(commands[currentCommandIndex]), next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
                    if (currentPathIndex > 0 && void 0 === curr) break;
                    if (curr && next && "object" == typeof next && void 0 === next.outlets) {
                        if (!compare(curr, next, path)) return noMatch;
                        currentCommandIndex += 2;
                    } else {
                        if (!compare(curr, {}, path)) return noMatch;
                        currentCommandIndex++;
                    }
                    currentPathIndex++;
                }
                return {
                    match: !0,
                    pathIndex: currentPathIndex,
                    commandIndex: currentCommandIndex
                };
            }(segmentGroup, startIndex, commands), slicedCommands = commands.slice(m.commandIndex);
            if (m.match && m.pathIndex < segmentGroup.segments.length) {
                var g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
                return g.children[PRIMARY_OUTLET] = new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children), 
                updateSegmentGroupChildren(g, 0, slicedCommands);
            }
            return m.match && 0 === slicedCommands.length ? new UrlSegmentGroup(segmentGroup.segments, {}) : m.match && !segmentGroup.hasChildren() ? createNewSegmentGroup(segmentGroup, startIndex, commands) : m.match ? updateSegmentGroupChildren(segmentGroup, 0, slicedCommands) : createNewSegmentGroup(segmentGroup, startIndex, commands);
        }
        function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
            if (0 === commands.length) return new UrlSegmentGroup(segmentGroup.segments, {});
            var outlets_2 = function(commands) {
                var _a, _b;
                return "object" != typeof commands[0] ? ((_a = {})[PRIMARY_OUTLET] = commands, _a) : void 0 === commands[0].outlets ? ((_b = {})[PRIMARY_OUTLET] = commands, 
                _b) : commands[0].outlets;
            }(commands), children_1 = {};
            return forEach(outlets_2, function(commands, outlet) {
                null !== commands && (children_1[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands));
            }), forEach(segmentGroup.children, function(child, childOutlet) {
                void 0 === outlets_2[childOutlet] && (children_1[childOutlet] = child);
            }), new UrlSegmentGroup(segmentGroup.segments, children_1);
        }
        function createNewSegmentGroup(segmentGroup, startIndex, commands) {
            for (var paths = segmentGroup.segments.slice(0, startIndex), i = 0; i < commands.length; ) {
                if ("object" == typeof commands[i] && void 0 !== commands[i].outlets) {
                    var children = createNewSegmentChildren(commands[i].outlets);
                    return new UrlSegmentGroup(paths, children);
                }
                // if we start with an object literal, we need to reuse the path part from the segment
                                if (0 === i && isMatrixParams(commands[0])) paths.push(new UrlSegment(segmentGroup.segments[startIndex].path, commands[0])), 
                i++; else {
                    var curr = getPath(commands[i]), next = i < commands.length - 1 ? commands[i + 1] : null;
                    curr && next && isMatrixParams(next) ? (paths.push(new UrlSegment(curr, router_stringify(next))), 
                    i += 2) : (paths.push(new UrlSegment(curr, {})), i++);
                }
            }
            return new UrlSegmentGroup(paths, {});
        }
        function createNewSegmentChildren(outlets) {
            var children = {};
            return forEach(outlets, function(commands, outlet) {
                null !== commands && (children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands));
            }), children;
        }
        function router_stringify(params) {
            var res = {};
            return forEach(params, function(v, k) {
                return res[k] = "" + v;
            }), res;
        }
        function compare(path, params, segment) {
            return path == segment.path && shallowEqual(params, segment.parameters);
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        var ActivateRoutes = /** @class */ /* */ function() {
            function ActivateRoutes(routeReuseStrategy, futureState, currState, forwardEvent) {
                this.routeReuseStrategy = routeReuseStrategy, this.futureState = futureState, this.currState = currState, 
                this.forwardEvent = forwardEvent;
            }
            return ActivateRoutes.prototype.activate = function(parentContexts) {
                var futureRoot = this.futureState._root, currRoot = this.currState ? this.currState._root : null;
                this.deactivateChildRoutes(futureRoot, currRoot, parentContexts), advanceActivatedRoute(this.futureState.root), 
                this.activateChildRoutes(futureRoot, currRoot, parentContexts);
            }, 
            // De-activate the child route that are not re-used for the future state
            ActivateRoutes.prototype.deactivateChildRoutes = function(futureNode, currNode, contexts) {
                var _this = this, children = nodeChildrenAsMap(currNode);
                // Recurse on the routes active in the future state to de-activate deeper children
                futureNode.children.forEach(function(futureChild) {
                    var childOutletName = futureChild.value.outlet;
                    _this.deactivateRoutes(futureChild, children[childOutletName], contexts), delete children[childOutletName];
                }), 
                // De-activate the routes that will not be re-used
                forEach(children, function(v, childName) {
                    _this.deactivateRouteAndItsChildren(v, contexts);
                });
            }, ActivateRoutes.prototype.deactivateRoutes = function(futureNode, currNode, parentContext) {
                var future = futureNode.value, curr = currNode ? currNode.value : null;
                if (future === curr) 
                // Reusing the node, check to see if the children need to be de-activated
                if (future.component) {
                    // If we have a normal route, we need to go through an outlet.
                    var context = parentContext.getContext(future.outlet);
                    context && this.deactivateChildRoutes(futureNode, currNode, context.children);
                } else 
                // if we have a componentless route, we recurse but keep the same outlet map.
                this.deactivateChildRoutes(futureNode, currNode, parentContext); else curr && 
                // Deactivate the current route which will not be re-used
                this.deactivateRouteAndItsChildren(currNode, parentContext);
            }, ActivateRoutes.prototype.deactivateRouteAndItsChildren = function(route, parentContexts) {
                this.routeReuseStrategy.shouldDetach(route.value.snapshot) ? this.detachAndStoreRouteSubtree(route, parentContexts) : this.deactivateRouteAndOutlet(route, parentContexts);
            }, ActivateRoutes.prototype.detachAndStoreRouteSubtree = function(route, parentContexts) {
                var context = parentContexts.getContext(route.value.outlet);
                if (context && context.outlet) {
                    var componentRef = context.outlet.detach(), contexts = context.children.onOutletDeactivated();
                    this.routeReuseStrategy.store(route.value.snapshot, {
                        componentRef: componentRef,
                        route: route,
                        contexts: contexts
                    });
                }
            }, ActivateRoutes.prototype.deactivateRouteAndOutlet = function(route, parentContexts) {
                var _this = this, context = parentContexts.getContext(route.value.outlet);
                if (context) {
                    var children = nodeChildrenAsMap(route), contexts_1 = route.value.component ? context.children : parentContexts;
                    forEach(children, function(v, k) {
                        return _this.deactivateRouteAndItsChildren(v, contexts_1);
                    }), context.outlet && (
                    // Destroy the component
                    context.outlet.deactivate(), 
                    // Destroy the contexts for all the outlets that were in the component
                    context.children.onOutletDeactivated());
                }
            }, ActivateRoutes.prototype.activateChildRoutes = function(futureNode, currNode, contexts) {
                var _this = this, children = nodeChildrenAsMap(currNode);
                futureNode.children.forEach(function(c) {
                    _this.activateRoutes(c, children[c.value.outlet], contexts), _this.forwardEvent(new ActivationEnd(c.value.snapshot));
                }), futureNode.children.length && this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
            }, ActivateRoutes.prototype.activateRoutes = function(futureNode, currNode, parentContexts) {
                var future = futureNode.value, curr = currNode ? currNode.value : null;
                // reusing the node
                if (advanceActivatedRoute(future), future === curr) if (future.component) {
                    // If we have a normal route, we need to go through an outlet.
                    var context = parentContexts.getOrCreateContext(future.outlet);
                    this.activateChildRoutes(futureNode, currNode, context.children);
                } else 
                // if we have a componentless route, we recurse but keep the same outlet map.
                this.activateChildRoutes(futureNode, currNode, parentContexts); else if (future.component) if (context = parentContexts.getOrCreateContext(future.outlet), 
                this.routeReuseStrategy.shouldAttach(future.snapshot)) {
                    var stored = this.routeReuseStrategy.retrieve(future.snapshot);
                    this.routeReuseStrategy.store(future.snapshot, null), context.children.onOutletReAttached(stored.contexts), 
                    context.attachRef = stored.componentRef, context.route = stored.route.value, context.outlet && 
                    // Attach right away when the outlet has already been instantiated
                    // Otherwise attach from `RouterOutlet.ngOnInit` when it is instantiated
                    context.outlet.attach(stored.componentRef, stored.route.value), advanceActivatedRouteNodeAndItsChildren(stored.route);
                } else {
                    var config = function(snapshot) {
                        for (var s = future.snapshot.parent; s; s = s.parent) {
                            var route = s.routeConfig;
                            if (route && route._loadedConfig) return route._loadedConfig;
                            if (route && route.component) return null;
                        }
                        return null;
                    }
                    /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
                    /**
 * Simple function check, but generic so type inference will flow. Example:
 *
 * function product(a: number, b: number) {
 *   return a * b;
 * }
 *
 * if (isFunction<product>(fn)) {
 *   return fn(1, 2);
 * } else {
 *   throw "Must provide the `product` function";
 * }
 */ (), cmpFactoryResolver = config ? config.module.componentFactoryResolver : null;
                    context.attachRef = null, context.route = future, context.resolver = cmpFactoryResolver, 
                    context.outlet && 
                    // Activate the outlet when it has already been instantiated
                    // Otherwise it will get activated from its `ngOnInit` when instantiated
                    context.outlet.activateWith(future, cmpFactoryResolver), this.activateChildRoutes(futureNode, null, context.children);
                } else 
                // if we have a componentless route, we recurse but keep the same outlet map.
                this.activateChildRoutes(futureNode, null, parentContexts);
            }, ActivateRoutes;
        }();
        function advanceActivatedRouteNodeAndItsChildren(node) {
            advanceActivatedRoute(node.value), node.children.forEach(advanceActivatedRouteNodeAndItsChildren);
        }
        function router_isFunction(v) {
            return "function" == typeof v;
        }
        function isUrlTree(v) {
            return v instanceof UrlTree;
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        var NoMatch = /** @class */ /* */ function() {
            return function(segmentGroup) {
                this.segmentGroup = segmentGroup || null;
            };
        }(), AbsoluteRedirect = /** @class */ /* */ function() {
            return function(urlTree) {
                this.urlTree = urlTree;
            };
        }();
        function noMatch(segmentGroup) {
            return new Observable_Observable(function(obs) {
                return obs.error(new NoMatch(segmentGroup));
            });
        }
        function absoluteRedirect(newTree) {
            return new Observable_Observable(function(obs) {
                return obs.error(new AbsoluteRedirect(newTree));
            });
        }
        function namedOutletsRedirect(redirectTo) {
            return new Observable_Observable(function(obs) {
                return obs.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + redirectTo + "'"));
            });
        }
        var router_ApplyRedirects = /** @class */ /* */ function() {
            function ApplyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config) {
                this.configLoader = configLoader, this.urlSerializer = urlSerializer, this.urlTree = urlTree, 
                this.config = config, this.allowRedirects = !0, this.ngModule = moduleInjector.get(NgModuleRef);
            }
            return ApplyRedirects.prototype.apply = function() {
                var _this = this;
                return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, PRIMARY_OUTLET).pipe(map(function(rootSegmentGroup) {
                    return _this.createUrlTree(rootSegmentGroup, _this.urlTree.queryParams, _this.urlTree.fragment);
                })).pipe(catchError(function(e) {
                    if (e instanceof AbsoluteRedirect) 
                    // we need to run matching, so we can fetch all lazy-loaded modules
                    // after an absolute redirect we do not apply any more redirects!
                    return _this.allowRedirects = !1, _this.match(e.urlTree);
                    if (e instanceof NoMatch) throw _this.noMatchError(e);
                    throw e;
                }));
            }, ApplyRedirects.prototype.match = function(tree) {
                var _this = this;
                return this.expandSegmentGroup(this.ngModule, this.config, tree.root, PRIMARY_OUTLET).pipe(map(function(rootSegmentGroup) {
                    return _this.createUrlTree(rootSegmentGroup, tree.queryParams, tree.fragment);
                })).pipe(catchError(function(e) {
                    if (e instanceof NoMatch) throw _this.noMatchError(e);
                    throw e;
                }));
            }, ApplyRedirects.prototype.noMatchError = function(e) {
                return new Error("Cannot match any routes. URL Segment: '" + e.segmentGroup + "'");
            }, ApplyRedirects.prototype.createUrlTree = function(rootCandidate, queryParams, fragment) {
                var _a, root = rootCandidate.segments.length > 0 ? new UrlSegmentGroup([], ((_a = {})[PRIMARY_OUTLET] = rootCandidate, 
                _a)) : rootCandidate;
                return new UrlTree(root, queryParams, fragment);
            }, ApplyRedirects.prototype.expandSegmentGroup = function(ngModule, routes, segmentGroup, outlet) {
                return 0 === segmentGroup.segments.length && segmentGroup.hasChildren() ? this.expandChildren(ngModule, routes, segmentGroup).pipe(map(function(children) {
                    return new UrlSegmentGroup([], children);
                })) : this.expandSegment(ngModule, segmentGroup, routes, segmentGroup.segments, outlet, !0);
            }, 
            // Recursively expand segment groups for all the child outlets
            ApplyRedirects.prototype.expandChildren = function(ngModule, routes, segmentGroup) {
                var _this = this;
                return function(obj, fn) {
                    if (0 === Object.keys(obj).length) return of({});
                    var waitHead = [], waitTail = [], res = {};
                    // Closure compiler has problem with using spread operator here. So just using Array.concat.
                    return forEach(obj, function(a, k) {
                        var childOutlet, child, mapped = (childOutlet = k, child = a, _this.expandSegmentGroup(ngModule, routes, child, childOutlet)).pipe(map(function(r) {
                            return res[k] = r;
                        }));
                        k === PRIMARY_OUTLET ? waitHead.push(mapped) : waitTail.push(mapped);
                    }), of.apply(null, waitHead.concat(waitTail)).pipe(concatAll(), last_last(), map(function() {
                        return res;
                    }));
                }(segmentGroup.children);
            }, ApplyRedirects.prototype.expandSegment = function(ngModule, segmentGroup, routes, segments, outlet, allowRedirects) {
                var _this = this;
                return of.apply(void 0, __spread(routes)).pipe(map(function(r) {
                    return _this.expandSegmentAgainstRoute(ngModule, segmentGroup, routes, r, segments, outlet, allowRedirects).pipe(catchError(function(e) {
                        if (e instanceof NoMatch) 
                        // TODO(i): this return type doesn't match the declared Observable<UrlSegmentGroup> -
                        // talk to Jason
                        return of(null);
                        throw e;
                    }));
                }), concatAll(), first(function(s) {
                    return !!s;
                }), catchError(function(e, _) {
                    if (e instanceof EmptyError || "EmptyError" === e.name) {
                        if (_this.noLeftoversInUrl(segmentGroup, segments, outlet)) return of(new UrlSegmentGroup([], {}));
                        throw new NoMatch(segmentGroup);
                    }
                    throw e;
                }));
            }, ApplyRedirects.prototype.noLeftoversInUrl = function(segmentGroup, segments, outlet) {
                return 0 === segments.length && !segmentGroup.children[outlet];
            }, ApplyRedirects.prototype.expandSegmentAgainstRoute = function(ngModule, segmentGroup, routes, route, paths, outlet, allowRedirects) {
                return getOutlet(route) !== outlet ? noMatch(segmentGroup) : void 0 === route.redirectTo ? this.matchSegmentAgainstRoute(ngModule, segmentGroup, route, paths) : allowRedirects && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(ngModule, segmentGroup, routes, route, paths, outlet) : noMatch(segmentGroup);
            }, ApplyRedirects.prototype.expandSegmentAgainstRouteUsingRedirect = function(ngModule, segmentGroup, routes, route, segments, outlet) {
                return "**" === route.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(ngModule, routes, route, outlet) : this.expandRegularSegmentAgainstRouteUsingRedirect(ngModule, segmentGroup, routes, route, segments, outlet);
            }, ApplyRedirects.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function(ngModule, routes, route, outlet) {
                var _this = this, newTree = this.applyRedirectCommands([], route.redirectTo, {});
                return route.redirectTo.startsWith("/") ? absoluteRedirect(newTree) : this.lineralizeSegments(route, newTree).pipe(mergeMap(function(newSegments) {
                    var group = new UrlSegmentGroup(newSegments, {});
                    return _this.expandSegment(ngModule, group, routes, newSegments, outlet, !1);
                }));
            }, ApplyRedirects.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function(ngModule, segmentGroup, routes, route, segments, outlet) {
                var _this = this, _a = router_match(segmentGroup, route, segments), consumedSegments = _a.consumedSegments, lastChild = _a.lastChild, positionalParamSegments = _a.positionalParamSegments;
                if (!_a.matched) return noMatch(segmentGroup);
                var newTree = this.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments);
                return route.redirectTo.startsWith("/") ? absoluteRedirect(newTree) : this.lineralizeSegments(route, newTree).pipe(mergeMap(function(newSegments) {
                    return _this.expandSegment(ngModule, segmentGroup, routes, newSegments.concat(segments.slice(lastChild)), outlet, !1);
                }));
            }, ApplyRedirects.prototype.matchSegmentAgainstRoute = function(ngModule, rawSegmentGroup, route, segments) {
                var _this = this;
                if ("**" === route.path) return route.loadChildren ? this.configLoader.load(ngModule.injector, route).pipe(map(function(cfg) {
                    return route._loadedConfig = cfg, new UrlSegmentGroup(segments, {});
                })) : of(new UrlSegmentGroup(segments, {}));
                var _a = router_match(rawSegmentGroup, route, segments), consumedSegments = _a.consumedSegments, lastChild = _a.lastChild;
                if (!_a.matched) return noMatch(rawSegmentGroup);
                var rawSlicedSegments = segments.slice(lastChild);
                return this.getChildConfig(ngModule, route, segments).pipe(mergeMap(function(routerConfig) {
                    var childModule = routerConfig.module, childConfig = routerConfig.routes, _a = function(segmentGroup, consumedSegments, slicedSegments, config) {
                        return slicedSegments.length > 0 && function(segmentGroup, segments, routes) {
                            return config.some(function(r) {
                                return isEmptyPathRedirect(segmentGroup, segments, r) && getOutlet(r) !== PRIMARY_OUTLET;
                            });
                        }(segmentGroup, slicedSegments) ? {
                            segmentGroup: mergeTrivialChildren(new UrlSegmentGroup(consumedSegments, function(routes, primarySegmentGroup) {
                                var e_3, _a, res = {};
                                res[PRIMARY_OUTLET] = primarySegmentGroup;
                                try {
                                    for (var routes_2 = __values(routes), routes_2_1 = routes_2.next(); !routes_2_1.done; routes_2_1 = routes_2.next()) {
                                        var r = routes_2_1.value;
                                        "" === r.path && getOutlet(r) !== PRIMARY_OUTLET && (res[getOutlet(r)] = new UrlSegmentGroup([], {}));
                                    }
                                } catch (e_3_1) {
                                    e_3 = {
                                        error: e_3_1
                                    };
                                } finally {
                                    try {
                                        routes_2_1 && !routes_2_1.done && (_a = routes_2.return) && _a.call(routes_2);
                                    } finally {
                                        if (e_3) throw e_3.error;
                                    }
                                }
                                return res;
                            }(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)))),
                            slicedSegments: []
                        } : 0 === slicedSegments.length && function(segmentGroup, segments, routes) {
                            return config.some(function(r) {
                                return isEmptyPathRedirect(segmentGroup, segments, r);
                            });
                        }(segmentGroup, slicedSegments) ? {
                            segmentGroup: mergeTrivialChildren(new UrlSegmentGroup(segmentGroup.segments, function(segmentGroup, slicedSegments, routes, children) {
                                var e_2, _a, res = {};
                                try {
                                    for (var routes_1 = __values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
                                        var r = routes_1_1.value;
                                        isEmptyPathRedirect(segmentGroup, slicedSegments, r) && !children[getOutlet(r)] && (res[getOutlet(r)] = new UrlSegmentGroup([], {}));
                                    }
                                } catch (e_2_1) {
                                    e_2 = {
                                        error: e_2_1
                                    };
                                } finally {
                                    try {
                                        routes_1_1 && !routes_1_1.done && (_a = routes_1.return) && _a.call(routes_1);
                                    } finally {
                                        if (e_2) throw e_2.error;
                                    }
                                }
                                return __assign({}, children, res);
                            }(segmentGroup, slicedSegments, config, segmentGroup.children))),
                            slicedSegments: slicedSegments
                        } : {
                            segmentGroup: segmentGroup,
                            slicedSegments: slicedSegments
                        };
                    }(rawSegmentGroup, consumedSegments, rawSlicedSegments, childConfig), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
                    return 0 === slicedSegments.length && segmentGroup.hasChildren() ? _this.expandChildren(childModule, childConfig, segmentGroup).pipe(map(function(children) {
                        return new UrlSegmentGroup(consumedSegments, children);
                    })) : 0 === childConfig.length && 0 === slicedSegments.length ? of(new UrlSegmentGroup(consumedSegments, {})) : _this.expandSegment(childModule, segmentGroup, childConfig, slicedSegments, PRIMARY_OUTLET, !0).pipe(map(function(cs) {
                        return new UrlSegmentGroup(consumedSegments.concat(cs.segments), cs.children);
                    }));
                }));
            }, ApplyRedirects.prototype.getChildConfig = function(ngModule, route, segments) {
                var _this = this;
                return route.children ? of(new LoadedRouterConfig(route.children, ngModule)) : route.loadChildren ? 
                // lazy children belong to the loaded module
                void 0 !== route._loadedConfig ? of(route._loadedConfig) : function(moduleInjector, route, segments) {
                    var predicate, canLoad = route.canLoad;
                    return canLoad && 0 !== canLoad.length ? from(canLoad).pipe(map(function(injectionToken) {
                        var guardVal, guard = moduleInjector.get(injectionToken);
                        if (function(guard) {
                            return guard && router_isFunction(guard.canLoad);
                        }(guard)) guardVal = guard.canLoad(route, segments); else {
                            if (!router_isFunction(guard)) throw new Error("Invalid CanLoad guard");
                            guardVal = guard(route, segments);
                        }
                        return wrapIntoObservable(guardVal);
                    })).pipe(concatAll(), (predicate = function(result) {
                        return !0 === result;
                    }, function(source) {
                        return source.lift(new EveryOperator(predicate, void 0, source));
                    })) : of(!0);
                }(ngModule.injector, route, segments).pipe(mergeMap(function(shouldLoad) {
                    return shouldLoad ? _this.configLoader.load(ngModule.injector, route).pipe(map(function(cfg) {
                        return route._loadedConfig = cfg, cfg;
                    })) : function(route) {
                        return new Observable_Observable(function(obs) {
                            return obs.error(navigationCancelingError("Cannot load children because the guard of the route \"path: '" + route.path + "'\" returned false"));
                        });
                    }
                    /**
 * Returns the `UrlTree` with the redirection applied.
 *
 * Lazy modules are loaded along the way.
 */ (route);
                })) : of(new LoadedRouterConfig([], ngModule));
            }, ApplyRedirects.prototype.lineralizeSegments = function(route, urlTree) {
                for (var res = [], c = urlTree.root; ;) {
                    if (res = res.concat(c.segments), 0 === c.numberOfChildren) return of(res);
                    if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) return namedOutletsRedirect(route.redirectTo);
                    c = c.children[PRIMARY_OUTLET];
                }
            }, ApplyRedirects.prototype.applyRedirectCommands = function(segments, redirectTo, posParams) {
                return this.applyRedirectCreatreUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
            }, ApplyRedirects.prototype.applyRedirectCreatreUrlTree = function(redirectTo, urlTree, segments, posParams) {
                var newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
                return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
            }, ApplyRedirects.prototype.createQueryParams = function(redirectToParams, actualParams) {
                var res = {};
                return forEach(redirectToParams, function(v, k) {
                    if ("string" == typeof v && v.startsWith(":")) {
                        var sourceName = v.substring(1);
                        res[k] = actualParams[sourceName];
                    } else res[k] = v;
                }), res;
            }, ApplyRedirects.prototype.createSegmentGroup = function(redirectTo, group, segments, posParams) {
                var _this = this, updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams), children = {};
                return forEach(group.children, function(child, name) {
                    children[name] = _this.createSegmentGroup(redirectTo, child, segments, posParams);
                }), new UrlSegmentGroup(updatedSegments, children);
            }, ApplyRedirects.prototype.createSegments = function(redirectTo, redirectToSegments, actualSegments, posParams) {
                var _this = this;
                return redirectToSegments.map(function(s) {
                    return s.path.startsWith(":") ? _this.findPosParam(redirectTo, s, posParams) : _this.findOrReturn(s, actualSegments);
                });
            }, ApplyRedirects.prototype.findPosParam = function(redirectTo, redirectToUrlSegment, posParams) {
                var pos = posParams[redirectToUrlSegment.path.substring(1)];
                if (!pos) throw new Error("Cannot redirect to '" + redirectTo + "'. Cannot find '" + redirectToUrlSegment.path + "'.");
                return pos;
            }, ApplyRedirects.prototype.findOrReturn = function(redirectToUrlSegment, actualSegments) {
                var e_1, _a, idx = 0;
                try {
                    for (var actualSegments_1 = __values(actualSegments), actualSegments_1_1 = actualSegments_1.next(); !actualSegments_1_1.done; actualSegments_1_1 = actualSegments_1.next()) {
                        var s = actualSegments_1_1.value;
                        if (s.path === redirectToUrlSegment.path) return actualSegments.splice(idx), s;
                        idx++;
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally {
                    try {
                        actualSegments_1_1 && !actualSegments_1_1.done && (_a = actualSegments_1.return) && _a.call(actualSegments_1);
                    } finally {
                        if (e_1) throw e_1.error;
                    }
                }
                return redirectToUrlSegment;
            }, ApplyRedirects;
        }();
        function router_match(segmentGroup, route, segments) {
            if ("" === route.path) return "full" === route.pathMatch && (segmentGroup.hasChildren() || segments.length > 0) ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {}
            } : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {}
            };
            var res = (route.matcher || defaultUrlMatcher)(segments, segmentGroup, route);
            return res ? {
                matched: !0,
                consumedSegments: res.consumed,
                lastChild: res.consumed.length,
                positionalParamSegments: res.posParams
            } : {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {}
            };
        }
        function mergeTrivialChildren(s) {
            if (1 === s.numberOfChildren && s.children[PRIMARY_OUTLET]) {
                var c = s.children[PRIMARY_OUTLET];
                return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
            }
            return s;
        }
        function isEmptyPathRedirect(segmentGroup, segments, r) {
            return (!(segmentGroup.hasChildren() || segments.length > 0) || "full" !== r.pathMatch) && "" === r.path && void 0 !== r.redirectTo;
        }
        function getOutlet(route) {
            return route.outlet || PRIMARY_OUTLET;
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        var CanActivate = /** @class */ /* */ function() {
            return function(path) {
                this.path = path, this.route = this.path[this.path.length - 1];
            };
        }(), CanDeactivate = /** @class */ /* */ function() {
            return function(component, route) {
                this.component = component, this.route = route;
            };
        }();
        function getToken(token, snapshot, moduleInjector) {
            var config = function(snapshot) {
                if (!snapshot) return null;
                for (var s = snapshot.parent; s; s = s.parent) {
                    var route = s.routeConfig;
                    if (route && route._loadedConfig) return route._loadedConfig;
                }
                return null;
            }(snapshot);
            return (config ? config.module.injector : moduleInjector).get(token);
        }
        function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks) {
            void 0 === checks && (checks = {
                canDeactivateChecks: [],
                canActivateChecks: []
            });
            var prevChildren = nodeChildrenAsMap(currNode);
            // Process the children of the future route
                        return futureNode.children.forEach(function(c) {
                !function(futureNode, currNode, parentContexts, futurePath, checks) {
                    void 0 === checks && (checks = {
                        canDeactivateChecks: [],
                        canActivateChecks: []
                    });
                    var future = futureNode.value, curr = currNode ? currNode.value : null, context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
                    // reusing the node
                    if (curr && future.routeConfig === curr.routeConfig) {
                        var shouldRun = function(curr, future, mode) {
                            if ("function" == typeof mode) return mode(curr, future);
                            switch (mode) {
                              case "pathParamsChange":
                                return !equalPath(curr.url, future.url);

                              case "pathParamsOrQueryParamsChange":
                                return !equalPath(curr.url, future.url) || !shallowEqual(curr.queryParams, future.queryParams);

                              case "always":
                                return !0;

                              case "paramsOrQueryParamsChange":
                                return !equalParamsAndUrlSegments(curr, future) || !shallowEqual(curr.queryParams, future.queryParams);

                              case "paramsChange":
                              default:
                                return !equalParamsAndUrlSegments(curr, future);
                            }
                        }(curr, future, future.routeConfig.runGuardsAndResolvers);
                        shouldRun ? checks.canActivateChecks.push(new CanActivate(futurePath)) : (
                        // we need to set the data
                        future.data = curr.data, future._resolvedData = curr._resolvedData), getChildRouteGuards(futureNode, currNode, 
                        // If we have a component, we need to go through an outlet.
                        future.component ? context ? context.children : null : parentContexts, futurePath, checks), 
                        shouldRun && checks.canDeactivateChecks.push(new CanDeactivate(context && context.outlet && context.outlet.component || null, curr));
                    } else curr && deactivateRouteAndItsChildren(currNode, context, checks), checks.canActivateChecks.push(new CanActivate(futurePath)), 
                    getChildRouteGuards(futureNode, null, 
                    // If we have a component, we need to go through an outlet.
                    future.component ? context ? context.children : null : parentContexts, futurePath, checks);
                }(c, prevChildren[c.value.outlet], contexts, futurePath.concat([ c.value ]), checks), 
                delete prevChildren[c.value.outlet];
            }), 
            // Process any children left from the current route (not active for the future route)
            forEach(prevChildren, function(v, k) {
                return deactivateRouteAndItsChildren(v, contexts.getContext(k), checks);
            }), checks;
        }
        function deactivateRouteAndItsChildren(route, context, checks) {
            var children = nodeChildrenAsMap(route), r = route.value;
            forEach(children, function(node, childName) {
                deactivateRouteAndItsChildren(node, r.component ? context ? context.children.getContext(childName) : null : context, checks);
            }), checks.canDeactivateChecks.push(new CanDeactivate(r.component && context && context.outlet && context.outlet.isActivated ? context.outlet.component : null, r));
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        var INITIAL_VALUE = /* */ Symbol("INITIAL_VALUE");
        function prioritizedGuardValue() {
            return switchMap(function(obs) {
                return (function() {
                    for (var observables = [], _i = 0; _i < arguments.length; _i++) observables[_i] = arguments[_i];
                    var resultSelector = null, scheduler = null;
                    return isScheduler(observables[observables.length - 1]) && (scheduler = observables.pop()), 
                    "function" == typeof observables[observables.length - 1] && (resultSelector = observables.pop()), 
                    1 === observables.length && isArray(observables[0]) && (observables = observables[0]), 
                    fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
                }).apply(void 0, __spread(obs.map(function(o) {
                    return o.pipe(take(1), 
                    // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/startWith.js
                    /** PURE_IMPORTS_START _observable_fromArray,_observable_scalar,_observable_empty,_observable_concat,_util_isScheduler PURE_IMPORTS_END */
                    function() {
                        for (var array = [], _i = 0; _i < arguments.length; _i++) array[_i] = arguments[_i];
                        return function(source) {
                            var scheduler = array[array.length - 1];
                            isScheduler(scheduler) ? array.pop() : scheduler = null;
                            var len = array.length;
                            return 
                            // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/concat.js
                            /** PURE_IMPORTS_START _util_isScheduler,_of,_from,_operators_concatAll PURE_IMPORTS_END */
                            function() {
                                for (var observables = [], _i = 0; _i < arguments.length; _i++) observables[_i] = arguments[_i];
                                return 1 === observables.length || 2 === observables.length && isScheduler(observables[1]) ? from(observables[0]) : concatAll()(of.apply(void 0, observables));
                            }(1 !== len || scheduler ? len > 0 ? fromArray(array, scheduler) : empty_empty(scheduler) : scalar(array[0]), source);
                        };
                    }(INITIAL_VALUE));
                }))).pipe(scan(function(acc, list) {
                    var isPending = !1;
                    return list.reduce(function(innerAcc, val, i) {
                        if (innerAcc !== INITIAL_VALUE) return innerAcc;
                        // Toggle pending flag if any values haven't been set yet
                                                // Any other return values are only valid if we haven't yet hit a pending call.
                        // This guarantees that in the case of a guard at the bottom of the tree that
                        // returns a redirect, we will wait for the higher priority guard at the top to
                        // finish before performing the redirect.
                        if (val === INITIAL_VALUE && (isPending = !0), !isPending) {
                            // Early return when we hit a `false` value as that should always cancel
                            // navigation
                            if (!1 === val) return val;
                            if (i === list.length - 1 || isUrlTree(val)) return val;
                        }
                        return innerAcc;
                    }, acc);
                }, INITIAL_VALUE), filter(function(item) {
                    return item !== INITIAL_VALUE;
                }), map(function(item) {
                    return isUrlTree(item) ? item : !0 === item;
                }), //
                take(1));
            });
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        
        /**
   * This should fire off `ActivationStart` events for each route being activated at this
   * level.
   * In other words, if you're activating `a` and `b` below, `path` will contain the
   * `ActivatedRouteSnapshot`s for both and we will fire `ActivationStart` for both. Always
   * return
   * `true` so checks continue to run.
   */
        function fireActivationStart(snapshot, forwardEvent) {
            return null !== snapshot && forwardEvent && forwardEvent(new ActivationStart(snapshot)), 
            of(!0);
        }
        /**
   * This should fire off `ChildActivationStart` events for each route being activated at this
   * level.
   * In other words, if you're activating `a` and `b` below, `path` will contain the
   * `ActivatedRouteSnapshot`s for both and we will fire `ChildActivationStart` for both. Always
   * return
   * `true` so checks continue to run.
   */        function fireChildActivationStart(snapshot, forwardEvent) {
            return null !== snapshot && forwardEvent && forwardEvent(new ChildActivationStart(snapshot)), 
            of(!0);
        }
        function runCanActivate(futureRSS, futureARS, moduleInjector) {
            var canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
            return canActivate && 0 !== canActivate.length ? of(canActivate.map(function(c) {
                return defer(function() {
                    var observable, guard = getToken(c, futureARS, moduleInjector);
                    if (function(guard) {
                        return guard && router_isFunction(guard.canActivate);
                    }(guard)) observable = wrapIntoObservable(guard.canActivate(futureARS, futureRSS)); else {
                        if (!router_isFunction(guard)) throw new Error("Invalid CanActivate guard");
                        observable = wrapIntoObservable(guard(futureARS, futureRSS));
                    }
                    return observable.pipe(first());
                });
            })).pipe(prioritizedGuardValue()) : of(!0);
        }
        function runCanActivateChild(futureRSS, path, moduleInjector) {
            var futureARS = path[path.length - 1], canActivateChildGuardsMapped = path.slice(0, path.length - 1).reverse().map(function(p) {
                return function(p) {
                    var canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
                    return canActivateChild && 0 !== canActivateChild.length ? {
                        node: p,
                        guards: canActivateChild
                    } : null;
                }(p);
            }).filter(function(_) {
                return null !== _;
            }).map(function(d) {
                return defer(function() {
                    return of(d.guards.map(function(c) {
                        var observable, guard = getToken(c, d.node, moduleInjector);
                        if (function(guard) {
                            return guard && router_isFunction(guard.canActivateChild);
                        }(guard)) observable = wrapIntoObservable(guard.canActivateChild(futureARS, futureRSS)); else {
                            if (!router_isFunction(guard)) throw new Error("Invalid CanActivateChild guard");
                            observable = wrapIntoObservable(guard(futureARS, futureRSS));
                        }
                        return observable.pipe(first());
                    })).pipe(prioritizedGuardValue());
                });
            });
            return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        var NoMatch$1 = /** @class */ /* */ function() {
            return function() {};
        }(), router_Recognizer = /** @class */ /* */ function() {
            function Recognizer(rootComponentType, config, urlTree, url, paramsInheritanceStrategy, relativeLinkResolution) {
                this.rootComponentType = rootComponentType, this.config = config, this.urlTree = urlTree, 
                this.url = url, this.paramsInheritanceStrategy = paramsInheritanceStrategy, this.relativeLinkResolution = relativeLinkResolution;
            }
            return Recognizer.prototype.recognize = function() {
                try {
                    var rootSegmentGroup = split$1(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup, children = this.processSegmentGroup(this.config, rootSegmentGroup, PRIMARY_OUTLET), root = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, PRIMARY_OUTLET, this.rootComponentType, null, this.urlTree.root, -1, {}), rootNode = new TreeNode(root, children), routeState = new router_RouterStateSnapshot(this.url, rootNode);
                    return this.inheritParamsAndData(routeState._root), of(routeState);
                } catch (e) {
                    return new Observable_Observable(function(obs) {
                        return obs.error(e);
                    });
                }
            }, Recognizer.prototype.inheritParamsAndData = function(routeNode) {
                var _this = this, route = routeNode.value, i = inheritedParamsDataResolve(route, this.paramsInheritanceStrategy);
                route.params = Object.freeze(i.params), route.data = Object.freeze(i.data), routeNode.children.forEach(function(n) {
                    return _this.inheritParamsAndData(n);
                });
            }, Recognizer.prototype.processSegmentGroup = function(config, segmentGroup, outlet) {
                return 0 === segmentGroup.segments.length && segmentGroup.hasChildren() ? this.processChildren(config, segmentGroup) : this.processSegment(config, segmentGroup, segmentGroup.segments, outlet);
            }, Recognizer.prototype.processChildren = function(config, segmentGroup) {
                var names, _this = this, children = mapChildrenIntoArray(segmentGroup, function(child, childOutlet) {
                    return _this.processSegmentGroup(config, child, childOutlet);
                });
                return names = {}, children.forEach(function(n) {
                    var routeWithSameOutletName = names[n.value.outlet];
                    if (routeWithSameOutletName) {
                        var p = routeWithSameOutletName.url.map(function(s) {
                            return s.toString();
                        }).join("/"), c = n.value.url.map(function(s) {
                            return s.toString();
                        }).join("/");
                        throw new Error("Two segments cannot have the same outlet name: '" + p + "' and '" + c + "'.");
                    }
                    names[n.value.outlet] = n.value;
                }), children.sort(function(a, b) {
                    return a.value.outlet === PRIMARY_OUTLET ? -1 : b.value.outlet === PRIMARY_OUTLET ? 1 : a.value.outlet.localeCompare(b.value.outlet);
                }), children;
            }, Recognizer.prototype.processSegment = function(config, segmentGroup, segments, outlet) {
                var e_1, _a;
                try {
                    for (var config_1 = __values(config), config_1_1 = config_1.next(); !config_1_1.done; config_1_1 = config_1.next()) {
                        var r = config_1_1.value;
                        try {
                            return this.processSegmentAgainstRoute(r, segmentGroup, segments, outlet);
                        } catch (e) {
                            if (!(e instanceof NoMatch$1)) throw e;
                        }
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally {
                    try {
                        config_1_1 && !config_1_1.done && (_a = config_1.return) && _a.call(config_1);
                    } finally {
                        if (e_1) throw e_1.error;
                    }
                }
                if (this.noLeftoversInUrl(segmentGroup, segments, outlet)) return [];
                throw new NoMatch$1();
            }, Recognizer.prototype.noLeftoversInUrl = function(segmentGroup, segments, outlet) {
                return 0 === segments.length && !segmentGroup.children[outlet];
            }, Recognizer.prototype.processSegmentAgainstRoute = function(route, rawSegment, segments, outlet) {
                if (route.redirectTo) throw new NoMatch$1();
                if ((route.outlet || PRIMARY_OUTLET) !== outlet) throw new NoMatch$1();
                var snapshot, consumedSegments = [], rawSlicedSegments = [];
                if ("**" === route.path) {
                    var params = segments.length > 0 ? last$1(segments).parameters : {};
                    snapshot = new ActivatedRouteSnapshot(segments, params, Object.freeze(__assign({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + segments.length, getResolve(route));
                } else {
                    var result = function(segmentGroup, route, segments) {
                        if ("" === route.path) {
                            if ("full" === route.pathMatch && (segmentGroup.hasChildren() || segments.length > 0)) throw new NoMatch$1();
                            return {
                                consumedSegments: [],
                                lastChild: 0,
                                parameters: {}
                            };
                        }
                        var res = (route.matcher || defaultUrlMatcher)(segments, segmentGroup, route);
                        if (!res) throw new NoMatch$1();
                        var posParams = {};
                        forEach(res.posParams, function(v, k) {
                            posParams[k] = v.path;
                        });
                        var parameters = res.consumed.length > 0 ? __assign({}, posParams, res.consumed[res.consumed.length - 1].parameters) : posParams;
                        return {
                            consumedSegments: res.consumed,
                            lastChild: res.consumed.length,
                            parameters: parameters
                        };
                    }(rawSegment, route, segments);
                    consumedSegments = result.consumedSegments, rawSlicedSegments = segments.slice(result.lastChild), 
                    snapshot = new ActivatedRouteSnapshot(consumedSegments, result.parameters, Object.freeze(__assign({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + consumedSegments.length, getResolve(route));
                }
                var childConfig = function(route) {
                    return route.children ? route.children : route.loadChildren ? route._loadedConfig.routes : [];
                }(route), _a = split$1(rawSegment, consumedSegments, rawSlicedSegments, childConfig, this.relativeLinkResolution), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
                if (0 === slicedSegments.length && segmentGroup.hasChildren()) {
                    var children_1 = this.processChildren(childConfig, segmentGroup);
                    return [ new TreeNode(snapshot, children_1) ];
                }
                if (0 === childConfig.length && 0 === slicedSegments.length) return [ new TreeNode(snapshot, []) ];
                var children = this.processSegment(childConfig, segmentGroup, slicedSegments, PRIMARY_OUTLET);
                return [ new TreeNode(snapshot, children) ];
            }, Recognizer;
        }();
        function getSourceSegmentGroup(segmentGroup) {
            for (var s = segmentGroup; s._sourceSegment; ) s = s._sourceSegment;
            return s;
        }
        function getPathIndexShift(segmentGroup) {
            for (var s = segmentGroup, res = s._segmentIndexShift ? s._segmentIndexShift : 0; s._sourceSegment; ) res += (s = s._sourceSegment)._segmentIndexShift ? s._segmentIndexShift : 0;
            return res - 1;
        }
        function split$1(segmentGroup, consumedSegments, slicedSegments, config, relativeLinkResolution) {
            if (slicedSegments.length > 0 && function(segmentGroup, slicedSegments, routes) {
                return config.some(function(r) {
                    return emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet$1(r) !== PRIMARY_OUTLET;
                });
            }(segmentGroup, slicedSegments)) {
                var s_1 = new UrlSegmentGroup(consumedSegments, function(segmentGroup, consumedSegments, routes, primarySegment) {
                    var e_3, _a, res = {};
                    res[PRIMARY_OUTLET] = primarySegment, primarySegment._sourceSegment = segmentGroup, 
                    primarySegment._segmentIndexShift = consumedSegments.length;
                    try {
                        for (var routes_2 = __values(routes), routes_2_1 = routes_2.next(); !routes_2_1.done; routes_2_1 = routes_2.next()) {
                            var r = routes_2_1.value;
                            if ("" === r.path && getOutlet$1(r) !== PRIMARY_OUTLET) {
                                var s = new UrlSegmentGroup([], {});
                                s._sourceSegment = segmentGroup, s._segmentIndexShift = consumedSegments.length, 
                                res[getOutlet$1(r)] = s;
                            }
                        }
                    } catch (e_3_1) {
                        e_3 = {
                            error: e_3_1
                        };
                    } finally {
                        try {
                            routes_2_1 && !routes_2_1.done && (_a = routes_2.return) && _a.call(routes_2);
                        } finally {
                            if (e_3) throw e_3.error;
                        }
                    }
                    return res;
                }(segmentGroup, consumedSegments, config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
                return s_1._sourceSegment = segmentGroup, s_1._segmentIndexShift = consumedSegments.length, 
                {
                    segmentGroup: s_1,
                    slicedSegments: []
                };
            }
            if (0 === slicedSegments.length && function(segmentGroup, slicedSegments, routes) {
                return config.some(function(r) {
                    return emptyPathMatch(segmentGroup, slicedSegments, r);
                });
            }(segmentGroup, slicedSegments)) {
                var s_2 = new UrlSegmentGroup(segmentGroup.segments, function(segmentGroup, consumedSegments, slicedSegments, routes, children, relativeLinkResolution) {
                    var e_2, _a, res = {};
                    try {
                        for (var routes_1 = __values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
                            var r = routes_1_1.value;
                            if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet$1(r)]) {
                                var s = new UrlSegmentGroup([], {});
                                s._sourceSegment = segmentGroup, s._segmentIndexShift = "legacy" === relativeLinkResolution ? segmentGroup.segments.length : consumedSegments.length, 
                                res[getOutlet$1(r)] = s;
                            }
                        }
                    } catch (e_2_1) {
                        e_2 = {
                            error: e_2_1
                        };
                    } finally {
                        try {
                            routes_1_1 && !routes_1_1.done && (_a = routes_1.return) && _a.call(routes_1);
                        } finally {
                            if (e_2) throw e_2.error;
                        }
                    }
                    return __assign({}, children, res);
                }(segmentGroup, consumedSegments, slicedSegments, config, segmentGroup.children, relativeLinkResolution));
                return s_2._sourceSegment = segmentGroup, s_2._segmentIndexShift = consumedSegments.length, 
                {
                    segmentGroup: s_2,
                    slicedSegments: slicedSegments
                };
            }
            var s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
            return s._sourceSegment = segmentGroup, s._segmentIndexShift = consumedSegments.length, 
            {
                segmentGroup: s,
                slicedSegments: slicedSegments
            };
        }
        function emptyPathMatch(segmentGroup, slicedSegments, r) {
            return (!(segmentGroup.hasChildren() || slicedSegments.length > 0) || "full" !== r.pathMatch) && "" === r.path && void 0 === r.redirectTo;
        }
        function getOutlet$1(route) {
            return route.outlet || PRIMARY_OUTLET;
        }
        function getData(route) {
            return route.data || {};
        }
        function getResolve(route) {
            return route.resolve || {};
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        function getResolver(injectionToken, futureARS, futureRSS, moduleInjector) {
            var resolver = getToken(injectionToken, futureARS, moduleInjector);
            return wrapIntoObservable(resolver.resolve ? resolver.resolve(futureARS, futureRSS) : resolver(futureARS, futureRSS));
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * Perform a side effect through a switchMap for every emission on the source Observable,
 * but return an Observable that is identical to the source. It's essentially the same as
 * the `tap` operator, but if the side effectful `next` function returns an ObservableInput,
 * it will wait before continuing with the original value.
 */        function switchTap(next) {
            return function(source) {
                return source.pipe(switchMap(function(v) {
                    var nextResult = next(v);
                    return nextResult ? from(nextResult).pipe(map(function() {
                        return v;
                    })) : from([ v ]);
                }));
            };
        }
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        /**
 * @description
 *
 * Provides a way to customize when activated routes get reused.
 *
 * @publicApi
 */        var RouteReuseStrategy = /** @class */ /* */ function() {
            return function() {};
        }(), DefaultRouteReuseStrategy = /** @class */ /* */ function() {
            function DefaultRouteReuseStrategy() {}
            return DefaultRouteReuseStrategy.prototype.shouldDetach = function(route) {
                return !1;
            }, DefaultRouteReuseStrategy.prototype.store = function(route, detachedTree) {}, 
            DefaultRouteReuseStrategy.prototype.shouldAttach = function(route) {
                return !1;
            }, DefaultRouteReuseStrategy.prototype.retrieve = function(route) {
                return null;
            }, DefaultRouteReuseStrategy.prototype.shouldReuseRoute = function(future, curr) {
                return future.routeConfig === curr.routeConfig;
            }, DefaultRouteReuseStrategy;
        }(), ROUTES = /* */ new InjectionToken("ROUTES"), router_RouterConfigLoader = /** @class */ /* */ function() {
            function RouterConfigLoader(loader, compiler, onLoadStartListener, onLoadEndListener) {
                this.loader = loader, this.compiler = compiler, this.onLoadStartListener = onLoadStartListener, 
                this.onLoadEndListener = onLoadEndListener;
            }
            return RouterConfigLoader.prototype.load = function(parentInjector, route) {
                var _this = this;
                return this.onLoadStartListener && this.onLoadStartListener(route), this.loadModuleFactory(route.loadChildren).pipe(map(function(factory) {
                    _this.onLoadEndListener && _this.onLoadEndListener(route);
                    var module = factory.create(parentInjector);
                    return new LoadedRouterConfig(flatten(module.injector.get(ROUTES)).map(standardizeConfig), module);
                }));
            }, RouterConfigLoader.prototype.loadModuleFactory = function(loadChildren) {
                var _this = this;
                return "string" == typeof loadChildren ? from(this.loader.load(loadChildren)) : wrapIntoObservable(loadChildren()).pipe(mergeMap(function(t) {
                    return t instanceof NgModuleFactory ? of(t) : from(_this.compiler.compileModuleAsync(t));
                }));
            }, RouterConfigLoader;
        }(), UrlHandlingStrategy = /** @class */ /* */ function() {
            return function() {};
        }(), DefaultUrlHandlingStrategy = /** @class */ /* */ function() {
            function DefaultUrlHandlingStrategy() {}
            return DefaultUrlHandlingStrategy.prototype.shouldProcessUrl = function(url) {
                return !0;
            }, DefaultUrlHandlingStrategy.prototype.extract = function(url) {
                return url;
            }, DefaultUrlHandlingStrategy.prototype.merge = function(newUrlPart, wholeUrl) {
                return newUrlPart;
            }, DefaultUrlHandlingStrategy;
        }();
        /**
 * Does not detach any subtrees. Reuses routes as long as their route config is the same.
 */        
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
        function defaultErrorHandler(error) {
            throw error;
        }
        function defaultMalformedUriErrorHandler(error, urlSerializer, url) {
            return urlSerializer.parse("/");
        }
        /**
 * @internal
 */        function defaultRouterHook(snapshot, runExtras) {
            return of(null);
        }
        /**
 * @description
 *
 * Provides the navigation and url manipulation capabilities.
 *
 * See `Routes` for more details and examples.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */        var router_Router = /** @class */ /* */ function() {
            /**
     * Creates the router service.
     */
            // TODO: vsavkin make internal after the final is out.
            function Router(rootComponentType, urlSerializer, rootContexts, location, injector, loader, compiler, config) {
                var _this = this;
                this.rootComponentType = rootComponentType, this.urlSerializer = urlSerializer, 
                this.rootContexts = rootContexts, this.location = location, this.config = config, 
                this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, 
                this.isNgZoneEnabled = !1, this.events = new Subject_Subject(), 
                /**
         * Error handler that is invoked when a navigation errors.
         *
         * See `ErrorHandler` for more information.
         */
                this.errorHandler = defaultErrorHandler, 
                /**
         * Malformed uri error handler is invoked when `Router.parseUrl(url)` throws an
         * error due to containing an invalid character. The most common case would be a `%` sign
         * that's not encoded and is not part of a percent encoded sequence.
         */
                this.malformedUriErrorHandler = defaultMalformedUriErrorHandler, 
                /**
         * Indicates if at least one navigation happened.
         */
                this.navigated = !1, this.lastSuccessfulId = -1, 
                /**
         * Used by RouterModule. This allows us to
         * pause the navigation either before preactivation or after it.
         * @internal
         */
                this.hooks = {
                    beforePreactivation: defaultRouterHook,
                    afterPreactivation: defaultRouterHook
                }, 
                /**
         * Extracts and merges URLs. Used for AngularJS to Angular migrations.
         */
                this.urlHandlingStrategy = new DefaultUrlHandlingStrategy(), this.routeReuseStrategy = new DefaultRouteReuseStrategy(), 
                /**
         * Define what the router should do if it receives a navigation request to the current URL.
         * By default, the router will ignore this navigation. However, this prevents features such
         * as a "refresh" button. Use this option to configure the behavior when navigating to the
         * current URL. Default is 'ignore'.
         */
                this.onSameUrlNavigation = "ignore", 
                /**
         * Defines how the router merges params, data and resolved data from parent to child
         * routes. Available options are:
         *
         * - `'emptyOnly'`, the default, only inherits parent params for path-less or component-less
         *   routes.
         * - `'always'`, enables unconditional inheritance of parent params.
         */
                this.paramsInheritanceStrategy = "emptyOnly", 
                /**
         * Defines when the router updates the browser URL. The default behavior is to update after
         * successful navigation. However, some applications may prefer a mode where the URL gets
         * updated at the beginning of navigation. The most common use case would be updating the
         * URL early so if navigation fails, you can show an error message with the URL that failed.
         * Available options are:
         *
         * - `'deferred'`, the default, updates the browser URL after navigation has finished.
         * - `'eager'`, updates browser URL at the beginning of navigation.
         */
                this.urlUpdateStrategy = "deferred", 
                /**
         * See {@link RouterModule} for more information.
         */
                this.relativeLinkResolution = "legacy", this.ngModule = injector.get(NgModuleRef), 
                this.console = injector.get(Console);
                var ngZone = injector.get(NgZone);
                this.isNgZoneEnabled = ngZone instanceof NgZone, this.resetConfig(config), this.currentUrlTree = new UrlTree(new UrlSegmentGroup([], {}), {}, null), 
                this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, 
                this.configLoader = new router_RouterConfigLoader(loader, compiler, function(r) {
                    return _this.triggerEvent(new RouteConfigLoadStart(r));
                }, function(r) {
                    return _this.triggerEvent(new RouteConfigLoadEnd(r));
                }), this.routerState = createEmptyState(this.currentUrlTree, this.rootComponentType), 
                this.transitions = new BehaviorSubject_BehaviorSubject({
                    id: 0,
                    currentUrlTree: this.currentUrlTree,
                    currentRawUrl: this.currentUrlTree,
                    extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                    urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                    rawUrl: this.currentUrlTree,
                    extras: {},
                    resolve: null,
                    reject: null,
                    promise: Promise.resolve(!0),
                    source: "imperative",
                    restoredState: null,
                    currentSnapshot: this.routerState.snapshot,
                    targetSnapshot: null,
                    currentRouterState: this.routerState,
                    targetRouterState: null,
                    guards: {
                        canActivateChecks: [],
                        canDeactivateChecks: []
                    },
                    guardsResult: null
                }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations();
            }
            return Router.prototype.setupNavigations = function(transitions) {
                var _this = this, eventsSubject = this.events;
                return transitions.pipe(filter(function(t) {
                    return 0 !== t.id;
                }), 
                // Extract URL
                map(function(t) {
                    return __assign({}, t, {
                        extractedUrl: _this.urlHandlingStrategy.extract(t.rawUrl)
                    });
                }), 
                // Store the Navigation object
                tap(function(t) {
                    _this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: _this.lastSuccessfulNavigation ? __assign({}, _this.lastSuccessfulNavigation, {
                            previousNavigation: null
                        }) : null
                    };
                }), 
                // Using switchMap so we cancel executing navigations when a new one comes in
                switchMap(function(t) {
                    var callback, rootContexts, routeReuseStrategy, forwardEvent, completed = !1, errored = !1;
                    return of(t).pipe(switchMap(function(t) {
                        var moduleInjector, configLoader, urlSerializer, config, urlTransition = !_this.navigated || t.extractedUrl.toString() !== _this.browserUrlTree.toString();
                        if (("reload" === _this.onSameUrlNavigation || urlTransition) && _this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) return of(t).pipe(
                        // Fire NavigationStart event
                        switchMap(function(t) {
                            var transition = _this.transitions.getValue();
                            return eventsSubject.next(new router_NavigationStart(t.id, _this.serializeUrl(t.extractedUrl), t.source, t.restoredState)), 
                            transition !== _this.transitions.getValue() ? empty_EMPTY : [ t ];
                        }), 
                        // This delay is required to match old behavior that forced navigation to
                        // always be async
                        switchMap(function(t) {
                            return Promise.resolve(t);
                        }), (
                        // ApplyRedirects
                        moduleInjector = _this.ngModule.injector, configLoader = _this.configLoader, urlSerializer = _this.urlSerializer, 
                        config = _this.config, function(source) {
                            return source.pipe(switchMap(function(t) {
                                return function(moduleInjector, configLoader, urlSerializer, urlTree, config) {
                                    return new router_ApplyRedirects(moduleInjector, configLoader, urlSerializer, t.extractedUrl, config).apply();
                                }(moduleInjector, configLoader, urlSerializer, 0, config).pipe(map(function(urlAfterRedirects) {
                                    return __assign({}, t, {
                                        urlAfterRedirects: urlAfterRedirects
                                    });
                                }));
                            }));
                        }), 
                        // Update the currentNavigation
                        tap(function(t) {
                            _this.currentNavigation = __assign({}, _this.currentNavigation, {
                                finalUrl: t.urlAfterRedirects
                            });
                        }), 
                        // Recognize
                        function(rootComponentType, config, serializer, paramsInheritanceStrategy, relativeLinkResolution) {
                            return function(source) {
                                return source.pipe(mergeMap(function(t) {
                                    return function(rootComponentType, config, urlTree, url, paramsInheritanceStrategy, relativeLinkResolution) {
                                        return void 0 === paramsInheritanceStrategy && (paramsInheritanceStrategy = "emptyOnly"), 
                                        void 0 === relativeLinkResolution && (relativeLinkResolution = "legacy"), new router_Recognizer(rootComponentType, config, urlTree, url, paramsInheritanceStrategy, relativeLinkResolution).recognize();
                                    }(rootComponentType, config, t.urlAfterRedirects, (url = t.urlAfterRedirects, _this.serializeUrl(url)), paramsInheritanceStrategy, relativeLinkResolution).pipe(map(function(targetSnapshot) {
                                        return __assign({}, t, {
                                            targetSnapshot: targetSnapshot
                                        });
                                    }));
                                    var url;
                                }));
                            };
                        }
                        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ (_this.rootComponentType, _this.config, 0, _this.paramsInheritanceStrategy, _this.relativeLinkResolution), 
                        // Update URL if in `eager` update mode
                        tap(function(t) {
                            "eager" === _this.urlUpdateStrategy && (t.extras.skipLocationChange || _this.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id), 
                            _this.browserUrlTree = t.urlAfterRedirects);
                        }), 
                        // Fire RoutesRecognized
                        tap(function(t) {
                            var routesRecognized = new router_RoutesRecognized(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                            eventsSubject.next(routesRecognized);
                        }));
                        /* When the current URL shouldn't be processed, but the previous one was, we
                     * handle this "error condition" by navigating to the previously successful URL,
                     * but leaving the URL intact.*/
                        if (urlTransition && _this.rawUrlTree && _this.urlHandlingStrategy.shouldProcessUrl(_this.rawUrlTree)) {
                            var extractedUrl = t.extractedUrl, source = t.source, restoredState = t.restoredState, extras = t.extras, navStart = new router_NavigationStart(t.id, _this.serializeUrl(extractedUrl), source, restoredState);
                            eventsSubject.next(navStart);
                            var targetSnapshot = createEmptyState(extractedUrl, _this.rootComponentType).snapshot;
                            return of(__assign({}, t, {
                                targetSnapshot: targetSnapshot,
                                urlAfterRedirects: extractedUrl,
                                extras: __assign({}, extras, {
                                    skipLocationChange: !1,
                                    replaceUrl: !1
                                })
                            }));
                        }
                        /* When neither the current or previous URL can be processed, do nothing other
                         * than update router's internal reference to the current "settled" URL. This
                         * way the next navigation will be coming from the current URL in the browser.
                         */
                        return _this.rawUrlTree = t.rawUrl, t.resolve(null), empty_EMPTY;
                    }), 
                    // Before Preactivation
                    switchTap(function(t) {
                        var _a = t.extras;
                        return _this.hooks.beforePreactivation(t.targetSnapshot, {
                            navigationId: t.id,
                            appliedUrlTree: t.extractedUrl,
                            rawUrlTree: t.rawUrl,
                            skipLocationChange: !!_a.skipLocationChange,
                            replaceUrl: !!_a.replaceUrl
                        });
                    }), 
                    // --- GUARDS ---
                    tap(function(t) {
                        var guardsStart = new router_GuardsCheckStart(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                        _this.triggerEvent(guardsStart);
                    }), map(function(t) {
                        return __assign({}, t, {
                            guards: (future = t.targetSnapshot, curr = t.currentSnapshot, parentContexts = _this.rootContexts, 
                            futureRoot = future._root, getChildRouteGuards(futureRoot, curr ? curr._root : null, parentContexts, [ futureRoot.value ]))
                        });
                        var future, curr, parentContexts, futureRoot;
                    }), function(moduleInjector, forwardEvent) {
                        return function(source) {
                            return source.pipe(mergeMap(function(t) {
                                var targetSnapshot = t.targetSnapshot, currentSnapshot = t.currentSnapshot, _a = t.guards, canActivateChecks = _a.canActivateChecks, canDeactivateChecks = _a.canDeactivateChecks;
                                return 0 === canDeactivateChecks.length && 0 === canActivateChecks.length ? of(__assign({}, t, {
                                    guardsResult: !0
                                })) : function(checks, futureRSS, currRSS, moduleInjector) {
                                    return from(canDeactivateChecks).pipe(mergeMap(function(check) {
                                        return function(component, currARS, currRSS, futureRSS, moduleInjector) {
                                            var canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
                                            return canDeactivate && 0 !== canDeactivate.length ? of(canDeactivate.map(function(c) {
                                                var observable, guard = getToken(c, currARS, moduleInjector);
                                                if (function(guard) {
                                                    return guard && router_isFunction(guard.canDeactivate);
                                                }(guard)) observable = wrapIntoObservable(guard.canDeactivate(component, currARS, currRSS, futureRSS)); else {
                                                    if (!router_isFunction(guard)) throw new Error("Invalid CanDeactivate guard");
                                                    observable = wrapIntoObservable(guard(component, currARS, currRSS, futureRSS));
                                                }
                                                return observable.pipe(first());
                                            })).pipe(prioritizedGuardValue()) : of(!0);
                                        }(check.component, check.route, currRSS, futureRSS, moduleInjector);
                                    }), first(function(result) {
                                        return !0 !== result;
                                    }, !0));
                                }(0, targetSnapshot, currentSnapshot, moduleInjector).pipe(mergeMap(function(canDeactivate) {
                                    return canDeactivate && "boolean" == typeof canDeactivate ? function(futureSnapshot, checks, moduleInjector, forwardEvent) {
                                        return from(canActivateChecks).pipe(concatMap(function(check) {
                                            return from([ fireChildActivationStart(check.route.parent, forwardEvent), fireActivationStart(check.route, forwardEvent), runCanActivateChild(futureSnapshot, check.path, moduleInjector), runCanActivate(futureSnapshot, check.route, moduleInjector) ]).pipe(concatAll(), first(function(result) {
                                                return !0 !== result;
                                            }, !0));
                                        }), first(function(result) {
                                            return !0 !== result;
                                        }, !0));
                                    }(targetSnapshot, 0, moduleInjector, forwardEvent) : of(canDeactivate);
                                }), map(function(guardsResult) {
                                    return __assign({}, t, {
                                        guardsResult: guardsResult
                                    });
                                }));
                            }));
                        };
                    }(_this.ngModule.injector, function(evt) {
                        return _this.triggerEvent(evt);
                    }), tap(function(t) {
                        if (isUrlTree(t.guardsResult)) {
                            var error = navigationCancelingError('Redirecting to "' + _this.serializeUrl(t.guardsResult) + '"');
                            throw error.url = t.guardsResult, error;
                        }
                    }), tap(function(t) {
                        var guardsEnd = new router_GuardsCheckEnd(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
                        _this.triggerEvent(guardsEnd);
                    }), filter(function(t) {
                        if (!t.guardsResult) {
                            _this.resetUrlToCurrentUrlTree();
                            var navCancel = new router_NavigationCancel(t.id, _this.serializeUrl(t.extractedUrl), "");
                            return eventsSubject.next(navCancel), t.resolve(!1), !1;
                        }
                        return !0;
                    }), 
                    // --- RESOLVE ---
                    switchTap(function(t) {
                        if (t.guards.canActivateChecks.length) return of(t).pipe(tap(function(t) {
                            var resolveStart = new router_ResolveStart(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                            _this.triggerEvent(resolveStart);
                        }), (paramsInheritanceStrategy = _this.paramsInheritanceStrategy, moduleInjector = _this.ngModule.injector, 
                        function(source) {
                            return source.pipe(mergeMap(function(t) {
                                var targetSnapshot = t.targetSnapshot, canActivateChecks = t.guards.canActivateChecks;
                                return canActivateChecks.length ? from(canActivateChecks).pipe(concatMap(function(check) {
                                    return function(futureARS, futureRSS, paramsInheritanceStrategy, moduleInjector) {
                                        return function(resolve, futureARS, futureRSS, moduleInjector) {
                                            var keys = Object.keys(resolve);
                                            if (0 === keys.length) return of({});
                                            if (1 === keys.length) {
                                                var key_1 = keys[0];
                                                return getResolver(resolve[key_1], futureARS, futureRSS, moduleInjector).pipe(map(function(value) {
                                                    var _a;
                                                    return (_a = {})[key_1] = value, _a;
                                                }));
                                            }
                                            var data = {};
                                            return from(keys).pipe(mergeMap(function(key) {
                                                return getResolver(resolve[key], futureARS, futureRSS, moduleInjector).pipe(map(function(value) {
                                                    return data[key] = value, value;
                                                }));
                                            })).pipe(last_last(), map(function() {
                                                return data;
                                            }));
                                        }(futureARS._resolve, futureARS, targetSnapshot, moduleInjector).pipe(map(function(resolvedData) {
                                            return futureARS._resolvedData = resolvedData, futureARS.data = __assign({}, futureARS.data, inheritedParamsDataResolve(futureARS, paramsInheritanceStrategy).resolve), 
                                            null;
                                        }));
                                    }(check.route, 0, paramsInheritanceStrategy, moduleInjector);
                                }), function(accumulator, seed) {
                                    return arguments.length >= 2 ? function(source) {
                                        return pipe_pipe(scan(accumulator, void 0), takeLast(1), defaultIfEmpty(void 0))(source);
                                    } : function(source) {
                                        return pipe_pipe(scan(function(acc, value, index) {
                                            return accumulator(acc);
                                        }), takeLast(1))(source);
                                    };
                                }
                                // CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/finalize.js
                                /** PURE_IMPORTS_START tslib,_Subscriber,_Subscription PURE_IMPORTS_END */ (function(_, __) {
                                    return _;
                                }), map(function(_) {
                                    return t;
                                })) : of(t);
                            }));
                        }), //
                        tap(function(t) {
                            var resolveEnd = new router_ResolveEnd(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                            _this.triggerEvent(resolveEnd);
                        }));
                        var paramsInheritanceStrategy, moduleInjector;
                    }), 
                    // --- AFTER PREACTIVATION ---
                    switchTap(function(t) {
                        var _a = t.extras;
                        return _this.hooks.afterPreactivation(t.targetSnapshot, {
                            navigationId: t.id,
                            appliedUrlTree: t.extractedUrl,
                            rawUrlTree: t.rawUrl,
                            skipLocationChange: !!_a.skipLocationChange,
                            replaceUrl: !!_a.replaceUrl
                        });
                    }), map(function(t) {
                        var curr, prevState, root, targetRouterState = (root = function createNode(routeReuseStrategy, curr, prevState) {
                            // reuse an activated route that is currently displayed on the screen
                            if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
                                (value = prevState.value)._futureSnapshot = curr.value;
                                var children = function(routeReuseStrategy, curr, prevState) {
                                    return curr.children.map(function(child) {
                                        var e_1, _a;
                                        try {
                                            for (var _b = __values(prevState.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                                                var p = _c.value;
                                                if (routeReuseStrategy.shouldReuseRoute(p.value.snapshot, child.value)) return createNode(routeReuseStrategy, child, p);
                                            }
                                        } catch (e_1_1) {
                                            e_1 = {
                                                error: e_1_1
                                            };
                                        } finally {
                                            try {
                                                _c && !_c.done && (_a = _b.return) && _a.call(_b);
                                            } finally {
                                                if (e_1) throw e_1.error;
                                            }
                                        }
                                        return createNode(routeReuseStrategy, child);
                                    });
                                }(routeReuseStrategy, curr, prevState);
                                return new TreeNode(value, children);
                                // retrieve an activated route that is used to be displayed, but is not currently displayed
                                                        }
                            var detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
                            if (detachedRouteHandle) {
                                var tree = detachedRouteHandle.route;
                                return function setFutureSnapshotsOfActivatedRoutes(curr, result) {
                                    if (curr.value.routeConfig !== result.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                                    if (curr.children.length !== result.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                                    result.value._futureSnapshot = curr.value;
                                    for (var i = 0; i < curr.children.length; ++i) setFutureSnapshotsOfActivatedRoutes(curr.children[i], result.children[i]);
                                }(curr, tree), tree;
                            }
                            var c, value = new router_ActivatedRoute(new BehaviorSubject_BehaviorSubject((c = curr.value).url), new BehaviorSubject_BehaviorSubject(c.params), new BehaviorSubject_BehaviorSubject(c.queryParams), new BehaviorSubject_BehaviorSubject(c.fragment), new BehaviorSubject_BehaviorSubject(c.data), c.outlet, c.component, c);
                            return children = curr.children.map(function(c) {
                                return createNode(routeReuseStrategy, c);
                            }), new TreeNode(value, children);
                        }(_this.routeReuseStrategy, (curr = t.targetSnapshot)._root, (prevState = t.currentRouterState) ? prevState._root : void 0), 
                        new router_RouterState(root, curr));
                        return __assign({}, t, {
                            targetRouterState: targetRouterState
                        });
                    }), 
                    /* Once here, we are about to activate syncronously. The assumption is this will
               succeed, and user code may read from the Router service. Therefore before
               activation, we need to update router properties storing the current URL and the
               RouterState, as well as updated the browser URL. All this should happen *before*
               activating. */
                    tap(function(t) {
                        _this.currentUrlTree = t.urlAfterRedirects, _this.rawUrlTree = _this.urlHandlingStrategy.merge(_this.currentUrlTree, t.rawUrl), 
                        _this.routerState = t.targetRouterState, "deferred" === _this.urlUpdateStrategy && (t.extras.skipLocationChange || _this.setBrowserUrl(_this.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state), 
                        _this.browserUrlTree = t.urlAfterRedirects);
                    }), (rootContexts = _this.rootContexts, routeReuseStrategy = _this.routeReuseStrategy, 
                    forwardEvent = function(evt) {
                        return _this.triggerEvent(evt);
                    }, map(function(t) {
                        return new ActivateRoutes(routeReuseStrategy, t.targetRouterState, t.currentRouterState, forwardEvent).activate(rootContexts), 
                        t;
                    })), tap({
                        next: function() {
                            completed = !0;
                        },
                        complete: function() {
                            completed = !0;
                        }
                    }), (callback = function() {
                        /* When the navigation stream finishes either through error or success, we set the
                 * `completed` or `errored` flag. However, there are some situations where we could
                 * get here without either of those being set. For instance, a redirect during
                 * NavigationStart. Therefore, this is a catch-all to make sure the NavigationCancel
                 * event is fired when a navigation gets cancelled but not caught by other means. */
                        if (!completed && !errored) {
                            // Must reset to current URL tree here to ensure history.state is set. On a fresh
                            // page load, if a new navigation comes in before a successful navigation
                            // completes, there will be nothing in history.state.navigationId. This can cause
                            // sync problems with AngularJS sync code which looks for a value here in order
                            // to determine whether or not to handle a given popstate event or to leave it
                            // to the Angualr router.
                            _this.resetUrlToCurrentUrlTree();
                            var navCancel = new router_NavigationCancel(t.id, _this.serializeUrl(t.extractedUrl), "Navigation ID " + t.id + " is not equal to the current navigation id " + _this.navigationId);
                            eventsSubject.next(navCancel), t.resolve(!1);
                        }
                        // currentNavigation should always be reset to null here. If navigation was
                        // successful, lastSuccessfulTransition will have already been set. Therefore we
                        // can safely set currentNavigation to null here.
                                                _this.currentNavigation = null;
                    }, function(source) {
                        return source.lift(new FinallyOperator(callback));
                    }), catchError(function(e) {
                        /* This error type is issued during Redirect, and is handled as a cancellation
                 * rather than an error. */
                        if (errored = !0, (error = e) && error[NAVIGATION_CANCELING_ERROR]) {
                            _this.navigated = !0;
                            var redirecting = isUrlTree(e.url);
                            redirecting || _this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                            var navCancel = new router_NavigationCancel(t.id, _this.serializeUrl(t.extractedUrl), e.message);
                            eventsSubject.next(navCancel), t.resolve(!1), redirecting && _this.navigateByUrl(e.url)
                            /* All other errors should reset to the router's internal URL reference to the
                     * pre-error state. */;
                        } else {
                            _this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                            var navError = new router_NavigationError(t.id, _this.serializeUrl(t.extractedUrl), e);
                            eventsSubject.next(navError);
                            try {
                                t.resolve(_this.errorHandler(e));
                            } catch (ee) {
                                t.reject(ee);
                            }
                        }
                        var error;
                        return empty_EMPTY;
                    }));
                    // TODO(jasonaden): remove cast once g3 is on updated TypeScript
                                }));
            }, 
            /**
     * @internal
     * TODO: this should be removed once the constructor of the router made internal
     */
            Router.prototype.resetRootComponentType = function(rootComponentType) {
                this.rootComponentType = rootComponentType, 
                // TODO: vsavkin router 4.0 should make the root component set to null
                // this will simplify the lifecycle of the router.
                this.routerState.root.component = this.rootComponentType;
            }, Router.prototype.getTransition = function() {
                return this.transitions.value;
            }, Router.prototype.setTransition = function(t) {
                this.transitions.next(__assign({}, this.getTransition(), t));
            }, 
            /**
     * Sets up the location change listener and performs the initial navigation.
     */
            Router.prototype.initialNavigation = function() {
                this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
                    replaceUrl: !0
                });
            }, 
            /**
     * Sets up the location change listener.
     */
            Router.prototype.setUpLocationChangeListener = function() {
                var _this = this;
                // Don't need to use Zone.wrap any more, because zone.js
                // already patch onPopState, so location change callback will
                // run into ngZone
                                this.locationSubscription || (this.locationSubscription = this.location.subscribe(function(change) {
                    var rawUrlTree = _this.parseUrl(change.url), source = "popstate" === change.type ? "popstate" : "hashchange", state = change.state && change.state.navigationId ? change.state : null;
                    setTimeout(function() {
                        _this.scheduleNavigation(rawUrlTree, source, state, {
                            replaceUrl: !0
                        });
                    }, 0);
                }));
            }, Object.defineProperty(Router.prototype, "url", {
                /** The current url */
                get: function() {
                    return this.serializeUrl(this.currentUrlTree);
                },
                enumerable: !0,
                configurable: !0
            }), 
            /** The current Navigation object if one exists */
            Router.prototype.getCurrentNavigation = function() {
                return this.currentNavigation;
            }, 
            /** @internal */
            Router.prototype.triggerEvent = function(event) {
                this.events.next(event);
            }, 
            /**
     * Resets the configuration used for navigation and generating links.
     *
     * @usageNotes
     *
     * ### Example
     *
     * ```
     * router.resetConfig([
     *  { path: 'team/:id', component: TeamCmp, children: [
     *    { path: 'simple', component: SimpleCmp },
     *    { path: 'user/:name', component: UserCmp }
     *  ]}
     * ]);
     * ```
     */
            Router.prototype.resetConfig = function(config) {
                validateConfig(config), this.config = config.map(standardizeConfig), this.navigated = !1, 
                this.lastSuccessfulId = -1;
            }, 
            /** @docsNotRequired */
            Router.prototype.ngOnDestroy = function() {
                this.dispose();
            }, 
            /** Disposes of the router */
            Router.prototype.dispose = function() {
                this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null);
            }, 
            /**
     * Applies an array of commands to the current url tree and creates a new url tree.
     *
     * When given an activate route, applies the given commands starting from the route.
     * When not given a route, applies the given command starting from the root.
     *
     * @usageNotes
     *
     * ### Example
     *
     * ```
     * // create /team/33/user/11
     * router.createUrlTree(['/team', 33, 'user', 11]);
     *
     * // create /team/33;expand=true/user/11
     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
     *
     * // you can collapse static segments like this (this works only with the first passed-in value):
     * router.createUrlTree(['/team/33/user', userId]);
     *
     * // If the first segment can contain slashes, and you do not want the router to split it, you
     * // can do the following:
     *
     * router.createUrlTree([{segmentPath: '/one/two'}]);
     *
     * // create /team/33/(user/11//right:chat)
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
     *
     * // remove the right secondary node
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
     *
     * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
     *
     * // navigate to /team/33/user/11/details
     * router.createUrlTree(['details'], {relativeTo: route});
     *
     * // navigate to /team/33/user/22
     * router.createUrlTree(['../22'], {relativeTo: route});
     *
     * // navigate to /team/44/user/22
     * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
     * ```
     */
            Router.prototype.createUrlTree = function(commands, navigationExtras) {
                void 0 === navigationExtras && (navigationExtras = {});
                var relativeTo = navigationExtras.relativeTo, queryParams = navigationExtras.queryParams, fragment = navigationExtras.fragment, preserveQueryParams = navigationExtras.preserveQueryParams, queryParamsHandling = navigationExtras.queryParamsHandling, preserveFragment = navigationExtras.preserveFragment;
                isDevMode() && preserveQueryParams && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
                var a = relativeTo || this.routerState.root, f = preserveFragment ? this.currentUrlTree.fragment : fragment, q = null;
                if (queryParamsHandling) switch (queryParamsHandling) {
                  case "merge":
                    q = __assign({}, this.currentUrlTree.queryParams, queryParams);
                    break;

                  case "preserve":
                    q = this.currentUrlTree.queryParams;
                    break;

                  default:
                    q = queryParams || null;
                } else q = preserveQueryParams ? this.currentUrlTree.queryParams : queryParams || null;
                return null !== q && (q = this.removeEmptyProps(q)), 
                /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
                function(route, urlTree, commands, queryParams, fragment) {
                    if (0 === commands.length) return router_tree(urlTree.root, urlTree.root, urlTree, queryParams, fragment);
                    var nav = function(commands) {
                        if ("string" == typeof commands[0] && 1 === commands.length && "/" === commands[0]) return new Navigation(!0, 0, commands);
                        var numberOfDoubleDots = 0, isAbsolute = !1, res = commands.reduce(function(res, cmd, cmdIdx) {
                            if ("object" == typeof cmd && null != cmd) {
                                if (cmd.outlets) {
                                    var outlets_1 = {};
                                    return forEach(cmd.outlets, function(commands, name) {
                                        outlets_1[name] = "string" == typeof commands ? commands.split("/") : commands;
                                    }), __spread(res, [ {
                                        outlets: outlets_1
                                    } ]);
                                }
                                if (cmd.segmentPath) return __spread(res, [ cmd.segmentPath ]);
                            }
                            return "string" != typeof cmd ? __spread(res, [ cmd ]) : 0 === cmdIdx ? (cmd.split("/").forEach(function(urlPart, partIndex) {
                                0 == partIndex && "." === urlPart || (0 == partIndex && "" === urlPart ? //  '/a'
                                isAbsolute = !0 : ".." === urlPart ? //  '../a'
                                numberOfDoubleDots++ : "" != urlPart && res.push(urlPart));
                            }), res) : __spread(res, [ cmd ]);
                        }, []);
                        return new Navigation(isAbsolute, numberOfDoubleDots, res);
                    }(commands);
                    if (nav.toRoot()) return router_tree(urlTree.root, new UrlSegmentGroup([], {}), urlTree, queryParams, fragment);
                    var startingPosition = function(nav, tree, route) {
                        if (nav.isAbsolute) return new Position(urlTree.root, !0, 0);
                        if (-1 === route.snapshot._lastPathIndex) return new Position(route.snapshot._urlSegment, !0, 0);
                        var modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
                        return function(group, index, numberOfDoubleDots) {
                            for (var g = route.snapshot._urlSegment, ci = route.snapshot._lastPathIndex + modifier, dd = nav.numberOfDoubleDots; dd > ci; ) {
                                if (dd -= ci, !(g = g.parent)) throw new Error("Invalid number of '../'");
                                ci = g.segments.length;
                            }
                            return new Position(g, !1, ci - dd);
                        }();
                    }(nav, 0, route), segmentGroup = startingPosition.processChildren ? updateSegmentGroupChildren(startingPosition.segmentGroup, startingPosition.index, nav.commands) : updateSegmentGroup(startingPosition.segmentGroup, startingPosition.index, nav.commands);
                    return router_tree(startingPosition.segmentGroup, segmentGroup, urlTree, queryParams, fragment);
                }(a, this.currentUrlTree, commands, q, f);
            }, 
            /**
     * Navigate based on the provided url. This navigation is always absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * @usageNotes
     *
     * ### Example
     *
     * ```
     * router.navigateByUrl("/team/33/user/11");
     *
     * // Navigate without updating the URL
     * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
     * ```
     *
     * Since `navigateByUrl()` takes an absolute URL as the first parameter,
     * it will not apply any delta to the current URL and ignores any properties
     * in the second parameter (the `NavigationExtras`) that would change the
     * provided URL.
     */
            Router.prototype.navigateByUrl = function(url, extras) {
                void 0 === extras && (extras = {
                    skipLocationChange: !1
                }), isDevMode() && this.isNgZoneEnabled && !NgZone.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
                var urlTree = isUrlTree(url) ? url : this.parseUrl(url), mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
                return this.scheduleNavigation(mergedTree, "imperative", null, extras);
            }, 
            /**
     * Navigate based on the provided array of commands and a starting point.
     * If no starting route is provided, the navigation is absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * @usageNotes
     *
     * ### Example
     *
     * ```
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
     *
     * // Navigate without updating the URL
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
     * ```
     *
     * The first parameter of `navigate()` is a delta to be applied to the current URL
     * or the one provided in the `relativeTo` property of the second parameter (the
     * `NavigationExtras`).
     *
     * In order to affect this browser's `history.state` entry, the `state`
     * parameter can be passed. This must be an object because the router
     * will add the `navigationId` property to this object before creating
     * the new history item.
     */
            Router.prototype.navigate = function(commands, extras) {
                return void 0 === extras && (extras = {
                    skipLocationChange: !1
                }), function(commands) {
                    for (var i = 0; i < commands.length; i++) {
                        var cmd = commands[i];
                        if (null == cmd) throw new Error("The requested path contains " + cmd + " segment at index " + i);
                    }
                }
                /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
                /**
 * @description
 *
 * Lets you link to specific routes in your app.
 *
 * Consider the following route configuration:
 * `[{ path: 'user/:name', component: UserCmp }]`.
 * When linking to this `user/:name` route, you use the `RouterLink` directive.
 *
 * If the link is static, you can use the directive as follows:
 * `<a routerLink="/user/bob">link to user component</a>`
 *
 * If you use dynamic values to generate the link, you can pass an array of path
 * segments, followed by the params for each segment.
 *
 * For instance `['/team', teamId, 'user', userName, {details: true}]`
 * means that we want to generate a link to `/team/11/user/bob;details=true`.
 *
 * Multiple static segments can be merged into one
 * (e.g., `['/team/11/user', userName, {details: true}]`).
 *
 * The first segment name can be prepended with `/`, `./`, or `../`:
 * * If the first segment begins with `/`, the router will look up the route from the root of the
 *   app.
 * * If the first segment begins with `./`, or doesn't begin with a slash, the router will
 *   instead look in the children of the current activated route.
 * * And if the first segment begins with `../`, the router will go up one level.
 *
 * You can set query params and fragment as follows:
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">
 *   link to user component
 * </a>
 * ```
 * RouterLink will use these to generate this link: `/user/bob#education?debug=true`.
 *
 * (Deprecated in v4.0.0 use `queryParamsHandling` instead) You can also tell the
 * directive to preserve the current query params and fragment:
 *
 * ```
 * <a [routerLink]="['/user/bob']" preserveQueryParams preserveFragment>
 *   link to user component
 * </a>
 * ```
 *
 * You can tell the directive how to handle queryParams. Available options are:
 *  - `'merge'`: merge the queryParams into the current queryParams
 *  - `'preserve'`: preserve the current queryParams
 *  - default/`''`: use the queryParams only
 *
 * Same options for {@link NavigationExtras#queryParamsHandling
 * NavigationExtras#queryParamsHandling}.
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" queryParamsHandling="merge">
 *   link to user component
 * </a>
 * ```
 *
 * You can provide a `state` value to be persisted to the browser's History.state
 * property (See https://developer.mozilla.org/en-US/docs/Web/API/History#Properties). It's
 * used as follows:
 *
 * ```
 * <a [routerLink]="['/user/bob']" [state]="{tracingId: 123}">
 *   link to user component
 * </a>
 * ```
 *
 * And later the value can be read from the router through `router.getCurrentNavigation`.
 * For example, to capture the `tracingId` above during the `NavigationStart` event:
 *
 * ```
 * // Get NavigationStart events
 * router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
 *   const navigation = router.getCurrentNavigation();
 *   tracingService.trace({id: navigation.extras.state.tracingId});
 * });
 * ```
 *
 * The router link directive always treats the provided input as a delta to the current url.
 *
 * For instance, if the current url is `/user/(box//aux:team)`.
 *
 * Then the following link `<a [routerLink]="['/user/jim']">Jim</a>` will generate the link
 * `/user/(jim//aux:team)`.
 *
 * See {@link Router#createUrlTree createUrlTree} for more information.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */ (commands), this.navigateByUrl(this.createUrlTree(commands, extras), extras);
            }, 
            /** Serializes a `UrlTree` into a string */
            Router.prototype.serializeUrl = function(url) {
                return this.urlSerializer.serialize(url);
            }, 
            /** Parses a string into a `UrlTree` */
            Router.prototype.parseUrl = function(url) {
                var urlTree;
                try {
                    urlTree = this.urlSerializer.parse(url);
                } catch (e) {
                    urlTree = this.malformedUriErrorHandler(e, this.urlSerializer, url);
                }
                return urlTree;
            }, 
            /** Returns whether the url is activated */
            Router.prototype.isActive = function(url, exact) {
                if (isUrlTree(url)) return containsTree(this.currentUrlTree, url, exact);
                var urlTree = this.parseUrl(url);
                return containsTree(this.currentUrlTree, urlTree, exact);
            }, Router.prototype.removeEmptyProps = function(params) {
                return Object.keys(params).reduce(function(result, key) {
                    var value = params[key];
                    return null != value && (result[key] = value), result;
                }, {});
            }, Router.prototype.processNavigations = function() {
                var _this = this;
                this.navigations.subscribe(function(t) {
                    _this.navigated = !0, _this.lastSuccessfulId = t.id, _this.events.next(new router_NavigationEnd(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(_this.currentUrlTree))), 
                    _this.lastSuccessfulNavigation = _this.currentNavigation, _this.currentNavigation = null, 
                    t.resolve(!0);
                }, function(e) {
                    _this.console.warn("Unhandled Navigation Error: ");
                });
            }, Router.prototype.scheduleNavigation = function(rawUrl, source, restoredState, extras) {
                var lastNavigation = this.getTransition();
                // If the user triggers a navigation imperatively (e.g., by using navigateByUrl),
                // and that navigation results in 'replaceState' that leads to the same URL,
                // we should skip those.
                                if (lastNavigation && "imperative" !== source && "imperative" === lastNavigation.source && lastNavigation.rawUrl.toString() === rawUrl.toString()) return Promise.resolve(!0); // return value is not used
                // Because of a bug in IE and Edge, the location class fires two events (popstate and
                // hashchange) every single time. The second one should be ignored. Otherwise, the URL will
                // flicker. Handles the case when a popstate was emitted first.
                                if (lastNavigation && "hashchange" == source && "popstate" === lastNavigation.source && lastNavigation.rawUrl.toString() === rawUrl.toString()) return Promise.resolve(!0); // return value is not used
                // Because of a bug in IE and Edge, the location class fires two events (popstate and
                // hashchange) every single time. The second one should be ignored. Otherwise, the URL will
                // flicker. Handles the case when a hashchange was emitted first.
                                if (lastNavigation && "popstate" == source && "hashchange" === lastNavigation.source && lastNavigation.rawUrl.toString() === rawUrl.toString()) return Promise.resolve(!0);
 // return value is not used
                                var resolve = null, reject = null, promise = new Promise(function(res, rej) {
                    resolve = res, reject = rej;
                }), id = ++this.navigationId;
                // Make sure that the error is propagated even though `processNavigations` catch
                // handler does not rethrow
                return this.setTransition({
                    id: id,
                    source: source,
                    restoredState: restoredState,
                    currentUrlTree: this.currentUrlTree,
                    currentRawUrl: this.rawUrlTree,
                    rawUrl: rawUrl,
                    extras: extras,
                    resolve: resolve,
                    reject: reject,
                    promise: promise,
                    currentSnapshot: this.routerState.snapshot,
                    currentRouterState: this.routerState
                }), promise.catch(function(e) {
                    return Promise.reject(e);
                });
            }, Router.prototype.setBrowserUrl = function(url, replaceUrl, id, state) {
                var path = this.urlSerializer.serialize(url);
                state = state || {}, this.location.isCurrentPathEqualTo(path) || replaceUrl ? 
                // TODO(jasonaden): Remove first `navigationId` and rely on `ng` namespace.
                this.location.replaceState(path, "", __assign({}, state, {
                    navigationId: id
                })) : this.location.go(path, "", __assign({}, state, {
                    navigationId: id
                }));
            }, Router.prototype.resetStateAndUrl = function(storedState, storedUrl, rawUrl) {
                this.routerState = storedState, this.currentUrlTree = storedUrl, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, rawUrl), 
                this.resetUrlToCurrentUrlTree();
            }, Router.prototype.resetUrlToCurrentUrlTree = function() {
                this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {
                    navigationId: this.lastSuccessfulId
                });
            }, Router;
        }(), OutletContext = /** @class */ /* */ function() {
            return function() {
                this.outlet = null, this.route = null, this.resolver = null, this.children = new ChildrenOutletContexts(), 
                this.attachRef = null;
            };
        }(), ChildrenOutletContexts = /** @class */ /* */ function() {
            function ChildrenOutletContexts() {
                // contexts for child outlets, by name.
                this.contexts = new Map();
            }
            /** Called when a `RouterOutlet` directive is instantiated */            return ChildrenOutletContexts.prototype.onChildOutletCreated = function(childName, outlet) {
                var context = this.getOrCreateContext(childName);
                context.outlet = outlet, this.contexts.set(childName, context);
            }, 
            /**
     * Called when a `RouterOutlet` directive is destroyed.
     * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
     * re-created later.
     */
            ChildrenOutletContexts.prototype.onChildOutletDestroyed = function(childName) {
                var context = this.getContext(childName);
                context && (context.outlet = null);
            }, 
            /**
     * Called when the corresponding route is deactivated during navigation.
     * Because the component get destroyed, all children outlet are destroyed.
     */
            ChildrenOutletContexts.prototype.onOutletDeactivated = function() {
                var contexts = this.contexts;
                return this.contexts = new Map(), contexts;
            }, ChildrenOutletContexts.prototype.onOutletReAttached = function(contexts) {
                this.contexts = contexts;
            }, ChildrenOutletContexts.prototype.getOrCreateContext = function(childName) {
                var context = this.getContext(childName);
                return context || (context = new OutletContext(), this.contexts.set(childName, context)), 
                context;
            }, ChildrenOutletContexts.prototype.getContext = function(childName) {
                return this.contexts.get(childName) || null;
            }, ChildrenOutletContexts;
        }(), router_RouterOutlet = /** @class */ /* */ function() {
            function RouterOutlet(parentContexts, location, resolver, name, changeDetector) {
                this.parentContexts = parentContexts, this.location = location, this.resolver = resolver, 
                this.changeDetector = changeDetector, this.activated = null, this._activatedRoute = null, 
                this.activateEvents = new core_EventEmitter(), this.deactivateEvents = new core_EventEmitter(), 
                this.name = name || PRIMARY_OUTLET, parentContexts.onChildOutletCreated(this.name, this);
            }
            return RouterOutlet.prototype.ngOnDestroy = function() {
                this.parentContexts.onChildOutletDestroyed(this.name);
            }, RouterOutlet.prototype.ngOnInit = function() {
                if (!this.activated) {
                    // If the outlet was not instantiated at the time the route got activated we need to populate
                    // the outlet when it is initialized (ie inside a NgIf)
                    var context = this.parentContexts.getContext(this.name);
                    context && context.route && (context.attachRef ? 
                    // `attachRef` is populated when there is an existing component to mount
                    this.attach(context.attachRef, context.route) : 
                    // otherwise the component defined in the configuration is created
                    this.activateWith(context.route, context.resolver || null));
                }
            }, Object.defineProperty(RouterOutlet.prototype, "isActivated", {
                get: function() {
                    return !!this.activated;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(RouterOutlet.prototype, "component", {
                get: function() {
                    if (!this.activated) throw new Error("Outlet is not activated");
                    return this.activated.instance;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(RouterOutlet.prototype, "activatedRoute", {
                get: function() {
                    if (!this.activated) throw new Error("Outlet is not activated");
                    return this._activatedRoute;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(RouterOutlet.prototype, "activatedRouteData", {
                get: function() {
                    return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
                },
                enumerable: !0,
                configurable: !0
            }), 
            /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     */
            RouterOutlet.prototype.detach = function() {
                if (!this.activated) throw new Error("Outlet is not activated");
                this.location.detach();
                var cmp = this.activated;
                return this.activated = null, this._activatedRoute = null, cmp;
            }, 
            /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     */
            RouterOutlet.prototype.attach = function(ref, activatedRoute) {
                this.activated = ref, this._activatedRoute = activatedRoute, this.location.insert(ref.hostView);
            }, RouterOutlet.prototype.deactivate = function() {
                if (this.activated) {
                    var c = this.component;
                    this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(c);
                }
            }, RouterOutlet.prototype.activateWith = function(activatedRoute, resolver) {
                if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                this._activatedRoute = activatedRoute;
                var factory = (resolver = resolver || this.resolver).resolveComponentFactory(activatedRoute._futureSnapshot.routeConfig.component), childContexts = this.parentContexts.getOrCreateContext(this.name).children, injector = new OutletInjector(activatedRoute, childContexts, this.location.injector);
                this.activated = this.location.createComponent(factory, this.location.length, injector), 
                // Calling `markForCheck` to make sure we will run the change detection when the
                // `RouterOutlet` is inside a `ChangeDetectionStrategy.OnPush` component.
                this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
            }, RouterOutlet;
        }(), OutletInjector = /** @class */ /* */ function() {
            function OutletInjector(route, childContexts, parent) {
                this.route = route, this.childContexts = childContexts, this.parent = parent;
            }
            return OutletInjector.prototype.get = function(token, notFoundValue) {
                return token === router_ActivatedRoute ? this.route : token === ChildrenOutletContexts ? this.childContexts : this.parent.get(token, notFoundValue);
            }, OutletInjector;
        }(), PreloadingStrategy = /** @class */ /* */ function() {
            return function() {};
        }(), router_PreloadAllModules = /** @class */ /* */ function() {
            function PreloadAllModules() {}
            return PreloadAllModules.prototype.preload = function(route, fn) {
                return fn().pipe(catchError(function() {
                    return of(null);
                }));
            }, PreloadAllModules;
        }(), router_NoPreloading = /** @class */ /* */ function() {
            function NoPreloading() {}
            return NoPreloading.prototype.preload = function(route, fn) {
                return of(null);
            }, NoPreloading;
        }(), router_RouterPreloader = /** @class */ /* */ function() {
            function RouterPreloader(router, moduleLoader, compiler, injector, preloadingStrategy) {
                this.router = router, this.injector = injector, this.preloadingStrategy = preloadingStrategy, 
                this.loader = new router_RouterConfigLoader(moduleLoader, compiler, function(r) {
                    return router.triggerEvent(new RouteConfigLoadStart(r));
                }, function(r) {
                    return router.triggerEvent(new RouteConfigLoadEnd(r));
                });
            }
            return RouterPreloader.prototype.setUpPreloading = function() {
                var _this = this;
                this.subscription = this.router.events.pipe(filter(function(e) {
                    return e instanceof router_NavigationEnd;
                }), concatMap(function() {
                    return _this.preload();
                })).subscribe(function() {});
            }, RouterPreloader.prototype.preload = function() {
                var ngModule = this.injector.get(NgModuleRef);
                return this.processRoutes(ngModule, this.router.config);
            }, 
            // TODO(jasonaden): This class relies on code external to the class to call setUpPreloading. If
            // this hasn't been done, ngOnDestroy will fail as this.subscription will be undefined. This
            // should be refactored.
            RouterPreloader.prototype.ngOnDestroy = function() {
                this.subscription.unsubscribe();
            }, RouterPreloader.prototype.processRoutes = function(ngModule, routes) {
                var e_1, _a, res = [];
                try {
                    for (var routes_1 = __values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
                        var route = routes_1_1.value;
                        // we already have the config loaded, just recurse
                                                if (route.loadChildren && !route.canLoad && route._loadedConfig) {
                            var childConfig = route._loadedConfig;
                            res.push(this.processRoutes(childConfig.module, childConfig.routes));
                        } else route.loadChildren && !route.canLoad ? res.push(this.preloadConfig(ngModule, route)) : route.children && res.push(this.processRoutes(ngModule, route.children));
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally {
                    try {
                        routes_1_1 && !routes_1_1.done && (_a = routes_1.return) && _a.call(routes_1);
                    } finally {
                        if (e_1) throw e_1.error;
                    }
                }
                return from(res).pipe(mergeAll(), map(function(_) {}));
            }, RouterPreloader.prototype.preloadConfig = function(ngModule, route) {
                var _this = this;
                return this.preloadingStrategy.preload(route, function() {
                    return _this.loader.load(ngModule.injector, route).pipe(mergeMap(function(config) {
                        return route._loadedConfig = config, _this.processRoutes(config.module, config.routes);
                    }));
                });
            }, RouterPreloader;
        }(), RouterScroller = /** @class */ /* */ function() {
            function RouterScroller(router, 
            /** @docsNotRequired */ viewportScroller, options) {
                void 0 === options && (options = {}), this.router = router, this.viewportScroller = viewportScroller, 
                this.options = options, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, 
                this.store = {}, 
                // Default both options to 'disabled'
                options.scrollPositionRestoration = options.scrollPositionRestoration || "disabled", 
                options.anchorScrolling = options.anchorScrolling || "disabled";
            }
            return RouterScroller.prototype.init = function() {
                // we want to disable the automatic scrolling because having two places
                // responsible for scrolling results race conditions, especially given
                // that browser don't implement this behavior consistently
                "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), 
                this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents();
            }, RouterScroller.prototype.createScrollEvents = function() {
                var _this = this;
                return this.router.events.subscribe(function(e) {
                    e instanceof router_NavigationStart ? (
                    // store the scroll position of the current stable navigations.
                    _this.store[_this.lastId] = _this.viewportScroller.getScrollPosition(), _this.lastSource = e.navigationTrigger, 
                    _this.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof router_NavigationEnd && (_this.lastId = e.id, 
                    _this.scheduleScrollEvent(e, _this.router.parseUrl(e.urlAfterRedirects).fragment));
                });
            }, RouterScroller.prototype.consumeScrollEvents = function() {
                var _this = this;
                return this.router.events.subscribe(function(e) {
                    e instanceof Scroll && (
                    // a popstate event. The pop state event will always ignore anchor scrolling.
                    e.position ? "top" === _this.options.scrollPositionRestoration ? _this.viewportScroller.scrollToPosition([ 0, 0 ]) : "enabled" === _this.options.scrollPositionRestoration && _this.viewportScroller.scrollToPosition(e.position) : e.anchor && "enabled" === _this.options.anchorScrolling ? _this.viewportScroller.scrollToAnchor(e.anchor) : "disabled" !== _this.options.scrollPositionRestoration && _this.viewportScroller.scrollToPosition([ 0, 0 ]));
                });
            }, RouterScroller.prototype.scheduleScrollEvent = function(routerEvent, anchor) {
                this.router.triggerEvent(new Scroll(routerEvent, "popstate" === this.lastSource ? this.store[this.restoredId] : null, anchor));
            }, RouterScroller.prototype.ngOnDestroy = function() {
                this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
            }, RouterScroller;
        }(), ROUTER_CONFIGURATION = /* */ new InjectionToken("ROUTER_CONFIGURATION"), ROUTER_FORROOT_GUARD = /* */ new InjectionToken("ROUTER_FORROOT_GUARD"), ROUTER_PROVIDERS = [ common_Location, {
            provide: UrlSerializer,
            useClass: DefaultUrlSerializer
        }, {
            provide: router_Router,
            useFactory: setupRouter,
            deps: [ core_ApplicationRef, UrlSerializer, ChildrenOutletContexts, common_Location, Injector, NgModuleFactoryLoader, Compiler, ROUTES, ROUTER_CONFIGURATION, [ UrlHandlingStrategy, /* */ new Optional() ], [ RouteReuseStrategy, /* */ new Optional() ] ]
        }, ChildrenOutletContexts, {
            provide: router_ActivatedRoute,
            useFactory: rootRoute,
            deps: [ router_Router ]
        }, {
            provide: NgModuleFactoryLoader,
            useClass: core_SystemJsNgModuleLoader
        }, router_RouterPreloader, router_NoPreloading, router_PreloadAllModules, {
            provide: ROUTER_CONFIGURATION,
            useValue: {
                enableTracing: !1
            }
        } ];
        function routerNgProbeToken() {
            return new NgProbeToken("Router", router_Router);
        }
        /**
 * @usageNotes
 *
 * RouterModule can be imported multiple times: once per lazily-loaded bundle.
 * Since the router deals with a global shared resource--location, we cannot have
 * more than one router service active.
 *
 * That is why there are two ways to create the module: `RouterModule.forRoot` and
 * `RouterModule.forChild`.
 *
 * * `forRoot` creates a module that contains all the directives, the given routes, and the router
 *   service itself.
 * * `forChild` creates a module that contains all the directives and the given routes, but does not
 *   include the router service.
 *
 * When registered at the root, the module should be used as follows
 *
 * ```
 * @NgModule({
 *   imports: [RouterModule.forRoot(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * For submodules and lazy loaded submodules the module should be used as follows:
 *
 * ```
 * @NgModule({
 *   imports: [RouterModule.forChild(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * @description
 *
 * Adds router directives and providers.
 *
 * Managing state transitions is one of the hardest parts of building applications. This is
 * especially true on the web, where you also need to ensure that the state is reflected in the URL.
 * In addition, we often want to split applications into multiple bundles and load them on demand.
 * Doing this transparently is not trivial.
 *
 * The Angular router solves these problems. Using the router, you can declaratively specify
 * application states, manage state transitions while taking care of the URL, and load bundles on
 * demand.
 *
 * [Read this developer guide](https://angular.io/docs/ts/latest/guide/router.html) to get an
 * overview of how the router should be used.
 *
 * @publicApi
 */        var router_RouterModule = /** @class */ /* */ function() {
            // Note: We are injecting the Router so it gets created eagerly...
            function RouterModule(guard, router) {}
            var RouterModule_1;
            return RouterModule_1 = RouterModule, 
            /**
     * Creates a module with all the router providers and directives. It also optionally sets up an
     * application listener to perform an initial navigation.
     *
     * Options (see `ExtraOptions`):
     * * `enableTracing` makes the router log all its internal events to the console.
     * * `useHash` enables the location strategy that uses the URL fragment instead of the history
     * API.
     * * `initialNavigation` disables the initial navigation.
     * * `errorHandler` provides a custom error handler.
     * * `preloadingStrategy` configures a preloading strategy (see `PreloadAllModules`).
     * * `onSameUrlNavigation` configures how the router handles navigation to the current URL. See
     * `ExtraOptions` for more details.
     * * `paramsInheritanceStrategy` defines how the router merges params, data and resolved data
     * from parent to child routes.
     */
            RouterModule.forRoot = function(routes, config) {
                return {
                    ngModule: RouterModule_1,
                    providers: [ ROUTER_PROVIDERS, provideRoutes(routes), {
                        provide: ROUTER_FORROOT_GUARD,
                        useFactory: provideForRootGuard,
                        deps: [ [ router_Router, new Optional(), new SkipSelf() ] ]
                    }, {
                        provide: ROUTER_CONFIGURATION,
                        useValue: config || {}
                    }, {
                        provide: LocationStrategy,
                        useFactory: provideLocationStrategy,
                        deps: [ PlatformLocation, [ new Inject(APP_BASE_HREF), new Optional() ], ROUTER_CONFIGURATION ]
                    }, {
                        provide: RouterScroller,
                        useFactory: createRouterScroller,
                        deps: [ router_Router, common_ViewportScroller, ROUTER_CONFIGURATION ]
                    }, {
                        provide: PreloadingStrategy,
                        useExisting: config && config.preloadingStrategy ? config.preloadingStrategy : router_NoPreloading
                    }, {
                        provide: NgProbeToken,
                        multi: !0,
                        useFactory: routerNgProbeToken
                    }, [ router_RouterInitializer, {
                        provide: APP_INITIALIZER,
                        multi: !0,
                        useFactory: getAppInitializer,
                        deps: [ router_RouterInitializer ]
                    }, {
                        provide: ROUTER_INITIALIZER,
                        useFactory: getBootstrapListener,
                        deps: [ router_RouterInitializer ]
                    }, {
                        provide: APP_BOOTSTRAP_LISTENER,
                        multi: !0,
                        useExisting: ROUTER_INITIALIZER
                    } ] ]
                };
            }, 
            /**
     * Creates a module with all the router directives and a provider registering routes.
     */
            RouterModule.forChild = function(routes) {
                return {
                    ngModule: RouterModule_1,
                    providers: [ provideRoutes(routes) ]
                };
            }, RouterModule;
        }();
        function createRouterScroller(router, viewportScroller, config) {
            return config.scrollOffset && viewportScroller.setOffset(config.scrollOffset), new RouterScroller(router, viewportScroller, config);
        }
        function provideLocationStrategy(platformLocationStrategy, baseHref, options) {
            return void 0 === options && (options = {}), options.useHash ? new common_HashLocationStrategy(platformLocationStrategy, baseHref) : new common_PathLocationStrategy(platformLocationStrategy, baseHref);
        }
        function provideForRootGuard(router) {
            if (router) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
            return "guarded";
        }
        /**
 * @description
 *
 * Registers routes.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @NgModule({
 *   imports: [RouterModule.forChild(ROUTES)],
 *   providers: [provideRoutes(EXTRA_ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * @publicApi
 */        function provideRoutes(routes) {
            return [ {
                provide: ANALYZE_FOR_ENTRY_COMPONENTS,
                multi: !0,
                useValue: routes
            }, {
                provide: ROUTES,
                multi: !0,
                useValue: routes
            } ];
        }
        function setupRouter(ref, urlSerializer, contexts, location, injector, loader, compiler, config, opts, urlHandlingStrategy, routeReuseStrategy) {
            void 0 === opts && (opts = {});
            var router = new router_Router(null, urlSerializer, contexts, location, injector, loader, compiler, flatten(config));
            if (urlHandlingStrategy && (router.urlHandlingStrategy = urlHandlingStrategy), routeReuseStrategy && (router.routeReuseStrategy = routeReuseStrategy), 
            opts.errorHandler && (router.errorHandler = opts.errorHandler), opts.malformedUriErrorHandler && (router.malformedUriErrorHandler = opts.malformedUriErrorHandler), 
            opts.enableTracing) {
                var dom_1 = getDOM();
                router.events.subscribe(function(e) {
                    dom_1.logGroup("Router Event: " + e.constructor.name), dom_1.log(e.toString()), 
                    dom_1.log(e), dom_1.logGroupEnd();
                });
            }
            return opts.onSameUrlNavigation && (router.onSameUrlNavigation = opts.onSameUrlNavigation), 
            opts.paramsInheritanceStrategy && (router.paramsInheritanceStrategy = opts.paramsInheritanceStrategy), 
            opts.urlUpdateStrategy && (router.urlUpdateStrategy = opts.urlUpdateStrategy), opts.relativeLinkResolution && (router.relativeLinkResolution = opts.relativeLinkResolution), 
            router;
        }
        function rootRoute(router) {
            return router.routerState.root;
        }
        /**
 * To initialize the router properly we need to do in two steps:
 *
 * We need to start the navigation in a APP_INITIALIZER to block the bootstrap if
 * a resolver or a guards executes asynchronously. Second, we need to actually run
 * activation in a BOOTSTRAP_LISTENER. We utilize the afterPreactivation
 * hook provided by the router to do that.
 *
 * The router navigation starts, reaches the point when preactivation is done, and then
 * pauses. It waits for the hook to be resolved. We then resolve it only in a bootstrap listener.
 */        var router_RouterInitializer = /** @class */ /* */ function() {
            function RouterInitializer(injector) {
                this.injector = injector, this.initNavigation = !1, this.resultOfPreactivationDone = new Subject_Subject();
            }
            return RouterInitializer.prototype.appInitializer = function() {
                var _this = this;
                return this.injector.get(LOCATION_INITIALIZED, Promise.resolve(null)).then(function() {
                    var resolve = null, res = new Promise(function(r) {
                        return resolve = r;
                    }), router = _this.injector.get(router_Router), opts = _this.injector.get(ROUTER_CONFIGURATION);
                    if (_this.isLegacyDisabled(opts) || _this.isLegacyEnabled(opts)) resolve(!0); else if ("disabled" === opts.initialNavigation) router.setUpLocationChangeListener(), 
                    resolve(!0); else {
                        if ("enabled" !== opts.initialNavigation) throw new Error("Invalid initialNavigation options: '" + opts.initialNavigation + "'");
                        router.hooks.afterPreactivation = function() {
                            // only the initial navigation should be delayed
                            return _this.initNavigation ? of(null) : (_this.initNavigation = !0, resolve(!0), 
                            _this.resultOfPreactivationDone);
                        }, router.initialNavigation();
                    }
                    return res;
                });
            }, RouterInitializer.prototype.bootstrapListener = function(bootstrappedComponentRef) {
                var opts = this.injector.get(ROUTER_CONFIGURATION), preloader = this.injector.get(router_RouterPreloader), routerScroller = this.injector.get(RouterScroller), router = this.injector.get(router_Router), ref = this.injector.get(core_ApplicationRef);
                bootstrappedComponentRef === ref.components[0] && (this.isLegacyEnabled(opts) ? router.initialNavigation() : this.isLegacyDisabled(opts) && router.setUpLocationChangeListener(), 
                preloader.setUpPreloading(), routerScroller.init(), router.resetRootComponentType(ref.componentTypes[0]), 
                this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete());
            }, RouterInitializer.prototype.isLegacyEnabled = function(opts) {
                return "legacy_enabled" === opts.initialNavigation || !0 === opts.initialNavigation || void 0 === opts.initialNavigation;
            }, RouterInitializer.prototype.isLegacyDisabled = function(opts) {
                return "legacy_disabled" === opts.initialNavigation || !1 === opts.initialNavigation;
            }, RouterInitializer;
        }();
        function getAppInitializer(r) {
            return r.appInitializer.bind(r);
        }
        function getBootstrapListener(r) {
            return r.bootstrapListener.bind(r);
        }
        /**
 * A token for the router initializer that will be called after the app is bootstrapped.
 *
 * @publicApi
 */        var ROUTER_INITIALIZER = /* */ new InjectionToken("Router Initializer"), RenderType_\u0275EmptyOutletComponent = /* */ /* */ createRendererType2({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_\u0275EmptyOutletComponent_0(_l) {
            return viewDef(0, [ (_l()(), elementDef(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), directiveDef(1, 212992, null, 0, router_RouterOutlet, [ ChildrenOutletContexts, ViewContainerRef, ComponentFactoryResolver, [ 8, null ], ChangeDetectorRef ], null, null) ], function(_ck, _v) {
                _ck(_v, 1, 0);
            }, null);
        }
        function View_\u0275EmptyOutletComponent_Host_0(_l) {
            return viewDef(0, [ (_l()(), elementDef(0, 0, null, null, 1, "ng-component", [], null, null, null, View_\u0275EmptyOutletComponent_0, RenderType_\u0275EmptyOutletComponent)), directiveDef(1, 49152, null, 0, EmptyOutletComponent, [], null, null) ], null, null);
        }
        var \u0275EmptyOutletComponentNgFactory = /* */ /* */ createComponentFactory("ng-component", EmptyOutletComponent, View_\u0275EmptyOutletComponent_Host_0, {}, {}, []), RenderType_AppComponent = /* */ /* */ createRendererType2({
            encapsulation: 0,
            styles: [ [ "\n/*# sourceMappingURL=app.component.css.map*/" ] ],
            data: {}
        });
        // CONCATENATED MODULE: ./src/app/app.component.css.shim.ngstyle.js
        /**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */        function View_AppComponent_0(_l) {
            return viewDef(0, [ (_l()(), elementDef(0, 0, null, null, 3, "div", [ [ "style", "text-align:center" ] ], null, null, null, null, null)), (_l()(), 
            elementDef(1, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), 
            textDef(2, null, [ " Welcome to ", "! " ])), (_l()(), elementDef(3, 0, null, null, 0, "img", [ [ "alt", "Angular Logo" ], [ "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==" ], [ "width", "300" ] ], null, null, null, null, null)), (_l()(), 
            elementDef(4, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), 
            textDef(-1, null, [ "Here are some links to help you start: " ])), (_l()(), elementDef(6, 0, null, null, 12, "ul", [], null, null, null, null, null)), (_l()(), 
            elementDef(7, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), 
            elementDef(8, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), 
            elementDef(9, 0, null, null, 1, "a", [ [ "href", "https://angular.io/tutorial" ], [ "rel", "noopener" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            textDef(-1, null, [ "Tour of Heroes" ])), (_l()(), elementDef(11, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), 
            elementDef(12, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), 
            elementDef(13, 0, null, null, 1, "a", [ [ "href", "https://angular.io/cli" ], [ "rel", "noopener" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            textDef(-1, null, [ "CLI Documentation" ])), (_l()(), elementDef(15, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), 
            elementDef(16, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), 
            elementDef(17, 0, null, null, 1, "a", [ [ "href", "https://blog.angular.io/" ], [ "rel", "noopener" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            textDef(-1, null, [ "Angular blog" ])), (_l()(), elementDef(19, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), directiveDef(20, 212992, null, 0, router_RouterOutlet, [ ChildrenOutletContexts, ViewContainerRef, ComponentFactoryResolver, [ 8, null ], ChangeDetectorRef ], null, null) ], function(_ck, _v) {
                _ck(_v, 20, 0);
            }, function(_ck, _v) {
                _ck(_v, 2, 0, _v.component.title);
            });
        }
        function View_AppComponent_Host_0(_l) {
            return viewDef(0, [ (_l()(), elementDef(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), directiveDef(1, 49152, null, 0, AppComponent, [], null, null) ], null, null);
        }
        var AppComponentNgFactory = /* */ /* */ createComponentFactory("app-root", AppComponent, View_AppComponent_Host_0, {}, {}, []), AppRoutingModule = /** @class */ /* */ function() {
            return function() {};
        }(), AppModuleNgFactory = /* */ /* */ createNgModuleFactory(AppModule, [ AppComponent ], function(_l) {
            return function(providers) {
                for (var providersByKey = {}, modules = [], isRoot = !1, i = 0; i < providers.length; i++) {
                    var provider = providers[i];
                    provider.token === APP_ROOT && !0 === provider.value && (isRoot = !0), 1073741824 /* TypeNgModule */ & provider.flags && modules.push(provider.token), 
                    provider.index = i, providersByKey[tokenKey(provider.token)] = provider;
                }
                return {
                    // Will be filled later...
                    factory: null,
                    providersByKey: providersByKey,
                    providers: providers,
                    modules: modules,
                    isRoot: isRoot
                };
            }([ moduleProvideDef(512, ComponentFactoryResolver, CodegenComponentFactoryResolver, [ [ 8, [ \u0275EmptyOutletComponentNgFactory, AppComponentNgFactory ] ], [ 3, ComponentFactoryResolver ], NgModuleRef ]), moduleProvideDef(5120, LOCALE_ID, _localeFactory, [ [ 3, LOCALE_ID ] ]), moduleProvideDef(4608, NgLocalization, common_NgLocaleLocalization, [ LOCALE_ID, [ 2, DEPRECATED_PLURAL_FN ] ]), moduleProvideDef(5120, SCHEDULER, zoneSchedulerFactory, [ NgZone ]), moduleProvideDef(5120, APP_ID, _appIdRandomProviderFactory, []), moduleProvideDef(5120, IterableDiffers, _iterableDiffersFactory, []), moduleProvideDef(5120, KeyValueDiffers, _keyValueDiffersFactory, []), moduleProvideDef(4608, DomSanitizer, platform_browser_DomSanitizerImpl, [ DOCUMENT ]), moduleProvideDef(6144, Sanitizer, null, [ DomSanitizer ]), moduleProvideDef(4608, HAMMER_GESTURE_CONFIG, HammerGestureConfig, []), moduleProvideDef(5120, EVENT_MANAGER_PLUGINS, function(p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
                return [ new platform_browser_DomEventsPlugin(p0_0, p0_1, p0_2), new platform_browser_KeyEventsPlugin(p1_0), new platform_browser_HammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3) ];
            }, [ DOCUMENT, NgZone, PLATFORM_ID, DOCUMENT, DOCUMENT, HAMMER_GESTURE_CONFIG, Console, [ 2, HAMMER_LOADER ] ]), moduleProvideDef(4608, EventManager, EventManager, [ EVENT_MANAGER_PLUGINS, NgZone ]), moduleProvideDef(135680, platform_browser_DomSharedStylesHost, platform_browser_DomSharedStylesHost, [ DOCUMENT ]), moduleProvideDef(4608, platform_browser_DomRendererFactory2, platform_browser_DomRendererFactory2, [ EventManager, platform_browser_DomSharedStylesHost ]), moduleProvideDef(6144, RendererFactory2, null, [ platform_browser_DomRendererFactory2 ]), moduleProvideDef(6144, SharedStylesHost, null, [ platform_browser_DomSharedStylesHost ]), moduleProvideDef(4608, Testability, Testability, [ NgZone ]), moduleProvideDef(5120, router_ActivatedRoute, rootRoute, [ router_Router ]), moduleProvideDef(4608, router_NoPreloading, router_NoPreloading, []), moduleProvideDef(6144, PreloadingStrategy, null, [ router_NoPreloading ]), moduleProvideDef(135680, router_RouterPreloader, router_RouterPreloader, [ router_Router, NgModuleFactoryLoader, Compiler, Injector, PreloadingStrategy ]), moduleProvideDef(4608, router_PreloadAllModules, router_PreloadAllModules, []), moduleProvideDef(5120, RouterScroller, createRouterScroller, [ router_Router, common_ViewportScroller, ROUTER_CONFIGURATION ]), moduleProvideDef(5120, ROUTER_INITIALIZER, getBootstrapListener, [ router_RouterInitializer ]), moduleProvideDef(5120, APP_BOOTSTRAP_LISTENER, function(p0_0) {
                return [ p0_0 ];
            }, [ ROUTER_INITIALIZER ]), moduleProvideDef(1073742336, CommonModule, CommonModule, []), moduleProvideDef(1024, ErrorHandler, errorHandler, []), moduleProvideDef(1024, NgProbeToken, function() {
                return [ routerNgProbeToken() ];
            }, []), moduleProvideDef(512, router_RouterInitializer, router_RouterInitializer, [ Injector ]), moduleProvideDef(1024, APP_INITIALIZER, function(p0_0, p1_0) {
                return [ (coreTokens = p0_0, exportNgVar("probe", inspectNativeElement), exportNgVar("coreTokens", __assign({}, CORE_TOKENS, (coreTokens || []).reduce(function(prev, t) {
                    return prev[t.name] = t.token, prev;
                }, {}))), function() {
                    return inspectNativeElement;
                }), getAppInitializer(p1_0) ];
                var coreTokens;
            }, [ [ 2, NgProbeToken ], router_RouterInitializer ]), moduleProvideDef(512, ApplicationInitStatus, ApplicationInitStatus, [ [ 2, APP_INITIALIZER ] ]), moduleProvideDef(131584, core_ApplicationRef, core_ApplicationRef, [ NgZone, Console, Injector, ErrorHandler, ComponentFactoryResolver, ApplicationInitStatus ]), moduleProvideDef(1073742336, ApplicationModule, ApplicationModule, [ core_ApplicationRef ]), moduleProvideDef(1073742336, platform_browser_BrowserModule, platform_browser_BrowserModule, [ [ 3, platform_browser_BrowserModule ] ]), moduleProvideDef(1024, ROUTER_FORROOT_GUARD, provideForRootGuard, [ [ 3, router_Router ] ]), moduleProvideDef(512, UrlSerializer, DefaultUrlSerializer, []), moduleProvideDef(512, ChildrenOutletContexts, ChildrenOutletContexts, []), moduleProvideDef(256, ROUTER_CONFIGURATION, {}, []), moduleProvideDef(1024, LocationStrategy, provideLocationStrategy, [ PlatformLocation, [ 2, APP_BASE_HREF ], ROUTER_CONFIGURATION ]), moduleProvideDef(512, common_Location, common_Location, [ LocationStrategy ]), moduleProvideDef(512, Compiler, Compiler, []), moduleProvideDef(512, NgModuleFactoryLoader, core_SystemJsNgModuleLoader, [ Compiler, [ 2, SystemJsNgModuleLoaderConfig ] ]), moduleProvideDef(1024, ROUTES, function() {
                return [ [] ];
            }, []), moduleProvideDef(1024, router_Router, setupRouter, [ core_ApplicationRef, UrlSerializer, ChildrenOutletContexts, common_Location, Injector, NgModuleFactoryLoader, Compiler, ROUTES, ROUTER_CONFIGURATION, [ 2, UrlHandlingStrategy ], [ 2, RouteReuseStrategy ] ]), moduleProvideDef(1073742336, router_RouterModule, router_RouterModule, [ [ 2, ROUTER_FORROOT_GUARD ], [ 2, router_Router ] ]), moduleProvideDef(1073742336, AppRoutingModule, AppRoutingModule, []), moduleProvideDef(1073742336, AppModule, AppModule, []), moduleProvideDef(256, APP_ROOT, !0, []) ]);
        });
        // CONCATENATED MODULE: ./src/app/app-routing.module.ts
                (function() {
            if (_runModeLocked) throw new Error("Cannot enable prod mode after platform setup.");
            _devMode = !1;
        })(), platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).catch(function(err) {
            return console.error(err);
        });
    }
}, [ [ 0, 0 ] ] ]);
//# sourceMappingURL=main.a8cabd9789d79cab3adb.js.map