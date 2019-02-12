(window.webpackJsonp = window.webpackJsonp || []).push([ [ 3 ], {
    /***/ "0TWp": 
    /***/ function(module, exports, __webpack_require__) {
        !function() {
            "use strict";
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */            !function(global) {
                var performance = global.performance;
                function mark(name) {
                    performance && performance.mark && performance.mark(name);
                }
                function performanceMeasure(name, label) {
                    performance && performance.measure && performance.measure(name, label);
                }
                mark("Zone");
                var checkDuplicate = !0 === global.__zone_symbol__forceDuplicateZoneCheck;
                if (global.Zone) {
                    // if global['Zone'] already exists (maybe zone.js was already loaded or
                    // some other lib also registered a global object named Zone), we may need
                    // to throw an error, but sometimes user may not want this error.
                    // For example,
                    // we have two web pages, page1 includes zone.js, page2 doesn't.
                    // and the 1st time user load page1 and page2, everything work fine,
                    // but when user load page2 again, error occurs because global['Zone'] already exists.
                    // so we add a flag to let user choose whether to throw this error or not.
                    // By default, if existing Zone is from zone.js, we will not throw the error.
                    if (checkDuplicate || "function" != typeof global.Zone.__symbol__) throw new Error("Zone already loaded.");
                    return global.Zone;
                }
                var nativeMicroTaskQueuePromise, Zone = /** @class */ function() {
                    function Zone(parent, zoneSpec) {
                        this._parent = parent, this._name = zoneSpec ? zoneSpec.name || "unnamed" : "<root>", 
                        this._properties = zoneSpec && zoneSpec.properties || {}, this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
                    }
                    return Zone.assertZonePatched = function() {
                        if (global.Promise !== patches.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");
                    }, Object.defineProperty(Zone, "root", {
                        get: function() {
                            for (var zone = Zone.current; zone.parent; ) zone = zone.parent;
                            return zone;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(Zone, "current", {
                        get: function() {
                            return _currentZoneFrame.zone;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(Zone, "currentTask", {
                        get: function() {
                            return _currentTask;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Zone.__load_patch = function(name, fn) {
                        if (patches.hasOwnProperty(name)) {
                            if (checkDuplicate) throw Error("Already loaded patch: " + name);
                        } else if (!global["__Zone_disable_" + name]) {
                            var perfName = "Zone:" + name;
                            mark(perfName), patches[name] = fn(global, Zone, _api), performanceMeasure(perfName, perfName);
                        }
                    }, Object.defineProperty(Zone.prototype, "parent", {
                        get: function() {
                            return this._parent;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(Zone.prototype, "name", {
                        get: function() {
                            return this._name;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Zone.prototype.get = function(key) {
                        var zone = this.getZoneWith(key);
                        if (zone) return zone._properties[key];
                    }, Zone.prototype.getZoneWith = function(key) {
                        for (var current = this; current; ) {
                            if (current._properties.hasOwnProperty(key)) return current;
                            current = current._parent;
                        }
                        return null;
                    }, Zone.prototype.fork = function(zoneSpec) {
                        if (!zoneSpec) throw new Error("ZoneSpec required!");
                        return this._zoneDelegate.fork(this, zoneSpec);
                    }, Zone.prototype.wrap = function(callback, source) {
                        if ("function" != typeof callback) throw new Error("Expecting function got: " + callback);
                        var _callback = this._zoneDelegate.intercept(this, callback, source), zone = this;
                        return function() {
                            return zone.runGuarded(_callback, this, arguments, source);
                        };
                    }, Zone.prototype.run = function(callback, applyThis, applyArgs, source) {
                        _currentZoneFrame = {
                            parent: _currentZoneFrame,
                            zone: this
                        };
                        try {
                            return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                        } finally {
                            _currentZoneFrame = _currentZoneFrame.parent;
                        }
                    }, Zone.prototype.runGuarded = function(callback, applyThis, applyArgs, source) {
                        void 0 === applyThis && (applyThis = null), _currentZoneFrame = {
                            parent: _currentZoneFrame,
                            zone: this
                        };
                        try {
                            try {
                                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                            } catch (error) {
                                if (this._zoneDelegate.handleError(this, error)) throw error;
                            }
                        } finally {
                            _currentZoneFrame = _currentZoneFrame.parent;
                        }
                    }, Zone.prototype.runTask = function(task, applyThis, applyArgs) {
                        if (task.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
                        // https://github.com/angular/zone.js/issues/778, sometimes eventTask
                        // will run in notScheduled(canceled) state, we should not try to
                        // run such kind of task but just return
                                                if (task.state !== notScheduled || task.type !== eventTask && task.type !== macroTask) {
                            var reEntryGuard = task.state != running;
                            reEntryGuard && task._transitionTo(running, scheduled), task.runCount++;
                            var previousTask = _currentTask;
                            _currentTask = task, _currentZoneFrame = {
                                parent: _currentZoneFrame,
                                zone: this
                            };
                            try {
                                task.type == macroTask && task.data && !task.data.isPeriodic && (task.cancelFn = void 0);
                                try {
                                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                                } catch (error) {
                                    if (this._zoneDelegate.handleError(this, error)) throw error;
                                }
                            } finally {
                                // if the task's state is notScheduled or unknown, then it has already been cancelled
                                // we should not reset the state to scheduled
                                task.state !== notScheduled && task.state !== unknown && (task.type == eventTask || task.data && task.data.isPeriodic ? reEntryGuard && task._transitionTo(scheduled, running) : (task.runCount = 0, 
                                this._updateTaskCount(task, -1), reEntryGuard && task._transitionTo(notScheduled, running, notScheduled))), 
                                _currentZoneFrame = _currentZoneFrame.parent, _currentTask = previousTask;
                            }
                        }
                    }, Zone.prototype.scheduleTask = function(task) {
                        if (task.zone && task.zone !== this) for (
                        // check if the task was rescheduled, the newZone
                        // should not be the children of the original zone
                        var newZone = this; newZone; ) {
                            if (newZone === task.zone) throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                            newZone = newZone.parent;
                        }
                        task._transitionTo(scheduling, notScheduled);
                        var zoneDelegates = [];
                        task._zoneDelegates = zoneDelegates, task._zone = this;
                        try {
                            task = this._zoneDelegate.scheduleTask(this, task);
                        } catch (err) {
                            // should set task's state to unknown when scheduleTask throw error
                            // because the err may from reschedule, so the fromState maybe notScheduled
                            throw task._transitionTo(unknown, scheduling, notScheduled), 
                            // TODO: @JiaLiPassion, should we check the result from handleError?
                            this._zoneDelegate.handleError(this, err), err;
                        }
                        return task._zoneDelegates === zoneDelegates && 
                        // we have to check because internally the delegate can reschedule the task.
                        this._updateTaskCount(task, 1), task.state == scheduling && task._transitionTo(scheduled, scheduling), 
                        task;
                    }, Zone.prototype.scheduleMicroTask = function(source, callback, data, customSchedule) {
                        return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, void 0));
                    }, Zone.prototype.scheduleMacroTask = function(source, callback, data, customSchedule, customCancel) {
                        return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
                    }, Zone.prototype.scheduleEventTask = function(source, callback, data, customSchedule, customCancel) {
                        return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
                    }, Zone.prototype.cancelTask = function(task) {
                        if (task.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
                        task._transitionTo(canceling, scheduled, running);
                        try {
                            this._zoneDelegate.cancelTask(this, task);
                        } catch (err) {
                            // if error occurs when cancelTask, transit the state to unknown
                            throw task._transitionTo(unknown, canceling), this._zoneDelegate.handleError(this, err), 
                            err;
                        }
                        return this._updateTaskCount(task, -1), task._transitionTo(notScheduled, canceling), 
                        task.runCount = 0, task;
                    }, Zone.prototype._updateTaskCount = function(task, count) {
                        var zoneDelegates = task._zoneDelegates;
                        -1 == count && (task._zoneDelegates = null);
                        for (var i = 0; i < zoneDelegates.length; i++) zoneDelegates[i]._updateTaskCount(task.type, count);
                    }, Zone.__symbol__ = __symbol__, Zone;
                }(), DELEGATE_ZS = {
                    name: "",
                    onHasTask: function(delegate, _, target, hasTaskState) {
                        return delegate.hasTask(target, hasTaskState);
                    },
                    onScheduleTask: function(delegate, _, target, task) {
                        return delegate.scheduleTask(target, task);
                    },
                    onInvokeTask: function(delegate, _, target, task, applyThis, applyArgs) {
                        return delegate.invokeTask(target, task, applyThis, applyArgs);
                    },
                    onCancelTask: function(delegate, _, target, task) {
                        return delegate.cancelTask(target, task);
                    }
                }, ZoneDelegate = /** @class */ function() {
                    function ZoneDelegate(zone, parentDelegate, zoneSpec) {
                        this._taskCounts = {
                            microTask: 0,
                            macroTask: 0,
                            eventTask: 0
                        }, this.zone = zone, this._parentDelegate = parentDelegate, this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS), 
                        this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt), 
                        this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone), 
                        this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS), 
                        this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt), 
                        this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone), 
                        this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS), 
                        this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt), 
                        this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone), 
                        this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS), 
                        this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt), 
                        this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone), 
                        this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS), 
                        this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt), 
                        this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone), 
                        this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS), 
                        this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt), 
                        this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone), 
                        this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS), 
                        this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt), 
                        this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone), 
                        this._hasTaskZS = null, this._hasTaskDlgt = null, this._hasTaskDlgtOwner = null, 
                        this._hasTaskCurrZone = null;
                        var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
                        (zoneSpecHasTask || parentDelegate && parentDelegate._hasTaskZS) && (
                        // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                        // a case all task related interceptors must go through this ZD. We can't short circuit it.
                        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS, this._hasTaskDlgt = parentDelegate, 
                        this._hasTaskDlgtOwner = this, this._hasTaskCurrZone = zone, zoneSpec.onScheduleTask || (this._scheduleTaskZS = DELEGATE_ZS, 
                        this._scheduleTaskDlgt = parentDelegate, this._scheduleTaskCurrZone = this.zone), 
                        zoneSpec.onInvokeTask || (this._invokeTaskZS = DELEGATE_ZS, this._invokeTaskDlgt = parentDelegate, 
                        this._invokeTaskCurrZone = this.zone), zoneSpec.onCancelTask || (this._cancelTaskZS = DELEGATE_ZS, 
                        this._cancelTaskDlgt = parentDelegate, this._cancelTaskCurrZone = this.zone));
                    }
                    return ZoneDelegate.prototype.fork = function(targetZone, zoneSpec) {
                        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
                    }, ZoneDelegate.prototype.intercept = function(targetZone, callback, source) {
                        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
                    }, ZoneDelegate.prototype.invoke = function(targetZone, callback, applyThis, applyArgs, source) {
                        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
                    }, ZoneDelegate.prototype.handleError = function(targetZone, error) {
                        return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error);
                    }, ZoneDelegate.prototype.scheduleTask = function(targetZone, task) {
                        var returnTask = task;
                        if (this._scheduleTaskZS) this._hasTaskZS && returnTask._zoneDelegates.push(this._hasTaskDlgtOwner), 
                        (returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task)) || (returnTask = task); else if (task.scheduleFn) task.scheduleFn(task); else {
                            if (task.type != microTask) throw new Error("Task is missing scheduleFn.");
                            scheduleMicroTask(task);
                        }
                        return returnTask;
                    }, ZoneDelegate.prototype.invokeTask = function(targetZone, task, applyThis, applyArgs) {
                        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
                    }, ZoneDelegate.prototype.cancelTask = function(targetZone, task) {
                        var value;
                        if (this._cancelTaskZS) value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task); else {
                            if (!task.cancelFn) throw Error("Task is not cancelable");
                            value = task.cancelFn(task);
                        }
                        return value;
                    }, ZoneDelegate.prototype.hasTask = function(targetZone, isEmpty) {
                        // hasTask should not throw error so other ZoneDelegate
                        // can still trigger hasTask callback
                        try {
                            this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
                        } catch (err) {
                            this.handleError(targetZone, err);
                        }
                    }, ZoneDelegate.prototype._updateTaskCount = function(type, count) {
                        var counts = this._taskCounts, prev = counts[type], next = counts[type] = prev + count;
                        if (next < 0) throw new Error("More tasks executed then were scheduled.");
                        0 != prev && 0 != next || this.hasTask(this.zone, {
                            microTask: counts.microTask > 0,
                            macroTask: counts.macroTask > 0,
                            eventTask: counts.eventTask > 0,
                            change: type
                        });
                    }, ZoneDelegate;
                }(), ZoneTask = /** @class */ function() {
                    function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
                        this._zone = null, this.runCount = 0, this._zoneDelegates = null, this._state = "notScheduled", 
                        this.type = type, this.source = source, this.data = options, this.scheduleFn = scheduleFn, 
                        this.cancelFn = cancelFn, this.callback = callback;
                        var self = this;
                        // TODO: @JiaLiPassion options should have interface
                                                this.invoke = type === eventTask && options && options.useG ? ZoneTask.invokeTask : function() {
                            return ZoneTask.invokeTask.call(global, self, this, arguments);
                        };
                    }
                    return ZoneTask.invokeTask = function(task, target, args) {
                        task || (task = this), _numberOfNestedTaskFrames++;
                        try {
                            return task.runCount++, task.zone.runTask(task, target, args);
                        } finally {
                            1 == _numberOfNestedTaskFrames && drainMicroTaskQueue(), _numberOfNestedTaskFrames--;
                        }
                    }, Object.defineProperty(ZoneTask.prototype, "zone", {
                        get: function() {
                            return this._zone;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(ZoneTask.prototype, "state", {
                        get: function() {
                            return this._state;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), ZoneTask.prototype.cancelScheduleRequest = function() {
                        this._transitionTo(notScheduled, scheduling);
                    }, ZoneTask.prototype._transitionTo = function(toState, fromState1, fromState2) {
                        if (this._state !== fromState1 && this._state !== fromState2) throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? " or '" + fromState2 + "'" : "") + ", was '" + this._state + "'.");
                        this._state = toState, toState == notScheduled && (this._zoneDelegates = null);
                    }, ZoneTask.prototype.toString = function() {
                        return this.data && void 0 !== this.data.handleId ? this.data.handleId.toString() : Object.prototype.toString.call(this);
                    }, 
                    // add toJSON method to prevent cyclic error when
                    // call JSON.stringify(zoneTask)
                    ZoneTask.prototype.toJSON = function() {
                        return {
                            type: this.type,
                            state: this.state,
                            source: this.source,
                            zone: this.zone.name,
                            runCount: this.runCount
                        };
                    }, ZoneTask;
                }(), symbolSetTimeout = __symbol__("setTimeout"), symbolPromise = __symbol__("Promise"), symbolThen = __symbol__("then"), _microTaskQueue = [], _isDrainingMicrotaskQueue = !1;
                function scheduleMicroTask(task) {
                    // if we are not running in any task, and there has not been anything scheduled
                    // we must bootstrap the initial task creation by manually scheduling the drain
                    if (0 === _numberOfNestedTaskFrames && 0 === _microTaskQueue.length) if (
                    // We are not running in Task, so we need to kickstart the microtask queue.
                    nativeMicroTaskQueuePromise || global[symbolPromise] && (nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0)), 
                    nativeMicroTaskQueuePromise) {
                        var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                        nativeThen || (
                        // native Promise is not patchable, we need to use `then` directly
                        // issue 1078
                        nativeThen = nativeMicroTaskQueuePromise.then), nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
                    } else global[symbolSetTimeout](drainMicroTaskQueue, 0);
                    task && _microTaskQueue.push(task);
                }
                function drainMicroTaskQueue() {
                    if (!_isDrainingMicrotaskQueue) {
                        for (_isDrainingMicrotaskQueue = !0; _microTaskQueue.length; ) {
                            var queue = _microTaskQueue;
                            _microTaskQueue = [];
                            for (var i = 0; i < queue.length; i++) {
                                var task = queue[i];
                                try {
                                    task.zone.runTask(task, null, null);
                                } catch (error) {
                                    _api.onUnhandledError(error);
                                }
                            }
                        }
                        _api.microtaskDrainDone(), _isDrainingMicrotaskQueue = !1;
                    }
                }
                //////////////////////////////////////////////////////
                //////////////////////////////////////////////////////
                ///  BOOTSTRAP
                //////////////////////////////////////////////////////
                //////////////////////////////////////////////////////
                                var NO_ZONE = {
                    name: "NO ZONE"
                }, notScheduled = "notScheduled", scheduling = "scheduling", scheduled = "scheduled", running = "running", canceling = "canceling", unknown = "unknown", microTask = "microTask", macroTask = "macroTask", eventTask = "eventTask", patches = {}, _api = {
                    symbol: __symbol__,
                    currentZoneFrame: function() {
                        return _currentZoneFrame;
                    },
                    onUnhandledError: noop,
                    microtaskDrainDone: noop,
                    scheduleMicroTask: scheduleMicroTask,
                    showUncaughtError: function() {
                        return !Zone[__symbol__("ignoreConsoleErrorUncaughtError")];
                    },
                    patchEventTarget: function() {
                        return [];
                    },
                    patchOnProperties: noop,
                    patchMethod: function() {
                        return noop;
                    },
                    bindArguments: function() {
                        return [];
                    },
                    patchThen: function() {
                        return noop;
                    },
                    setNativePromise: function(NativePromise) {
                        // sometimes NativePromise.resolve static function
                        // is not ready yet, (such as core-js/es6.promise)
                        // so we need to check here.
                        NativePromise && "function" == typeof NativePromise.resolve && (nativeMicroTaskQueuePromise = NativePromise.resolve(0));
                    }
                }, _currentZoneFrame = {
                    parent: null,
                    zone: new Zone(null, null)
                }, _currentTask = null, _numberOfNestedTaskFrames = 0;
                function noop() {}
                function __symbol__(name) {
                    return "__zone_symbol__" + name;
                }
                performanceMeasure("Zone", "Zone"), global.Zone = Zone;
            }("undefined" != typeof window && window || "undefined" != typeof self && self || global);
            var __values = function(o) {
                var m = "function" == typeof Symbol && o[Symbol.iterator], i = 0;
                return m ? m.call(o) : {
                    next: function() {
                        return o && i >= o.length && (o = void 0), {
                            value: o && o[i++],
                            done: !o
                        };
                    }
                };
            };
            Zone.__load_patch("ZoneAwarePromise", function(global, Zone, api) {
                var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, ObjectDefineProperty = Object.defineProperty, __symbol__ = api.symbol, _uncaughtPromiseErrors = [], symbolPromise = __symbol__("Promise"), symbolThen = __symbol__("then"), creationTrace = "__creationTrace__";
                api.onUnhandledError = function(e) {
                    if (api.showUncaughtError()) {
                        var rejection = e && e.rejection;
                        rejection ? console.error("Unhandled Promise rejection:", rejection instanceof Error ? rejection.message : rejection, "; Zone:", e.zone.name, "; Task:", e.task && e.task.source, "; Value:", rejection, rejection instanceof Error ? rejection.stack : void 0) : console.error(e);
                    }
                }, api.microtaskDrainDone = function() {
                    for (;_uncaughtPromiseErrors.length; ) for (var _loop_1 = function() {
                        var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                        try {
                            uncaughtPromiseError.zone.runGuarded(function() {
                                throw uncaughtPromiseError;
                            });
                        } catch (error) {
                            handleUnhandledRejection(error);
                        }
                    }; _uncaughtPromiseErrors.length; ) _loop_1();
                };
                var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__("unhandledPromiseRejectionHandler");
                function handleUnhandledRejection(e) {
                    api.onUnhandledError(e);
                    try {
                        var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
                        handler && "function" == typeof handler && handler.call(this, e);
                    } catch (err) {}
                }
                function isThenable(value) {
                    return value && value.then;
                }
                function forwardResolution(value) {
                    return value;
                }
                function forwardRejection(rejection) {
                    return ZoneAwarePromise.reject(rejection);
                }
                var symbolState = __symbol__("state"), symbolValue = __symbol__("value"), symbolFinally = __symbol__("finally"), symbolParentPromiseValue = __symbol__("parentPromiseValue"), symbolParentPromiseState = __symbol__("parentPromiseState"), source = "Promise.then", UNRESOLVED = null, RESOLVED = !0, REJECTED = !1, REJECTED_NO_CATCH = 0;
                function makeResolver(promise, state) {
                    return function(v) {
                        try {
                            resolvePromise(promise, state, v);
                        } catch (err) {
                            resolvePromise(promise, !1, err);
                        }
                        // Do not return value or you will break the Promise spec.
                                        };
                }
                var once = function() {
                    var wasCalled = !1;
                    return function(wrappedFunction) {
                        return function() {
                            wasCalled || (wasCalled = !0, wrappedFunction.apply(null, arguments));
                        };
                    };
                }, TYPE_ERROR = "Promise resolved with itself", CURRENT_TASK_TRACE_SYMBOL = __symbol__("currentTaskTrace");
                // Promise Resolution
                function resolvePromise(promise, state, value) {
                    var obj, onceWrapper = once();
                    if (promise === value) throw new TypeError(TYPE_ERROR);
                    if (promise[symbolState] === UNRESOLVED) {
                        // should only get value.then once based on promise spec.
                        var then = null;
                        try {
                            "object" != typeof value && "function" != typeof value || (then = value && value.then);
                        } catch (err) {
                            return onceWrapper(function() {
                                resolvePromise(promise, !1, err);
                            })(), promise;
                        }
                        // if (value instanceof ZoneAwarePromise) {
                                                if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) clearRejectedNoCatch(value), 
                        resolvePromise(promise, value[symbolState], value[symbolValue]); else if (state !== REJECTED && "function" == typeof then) try {
                            then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, !1)));
                        } catch (err) {
                            onceWrapper(function() {
                                resolvePromise(promise, !1, err);
                            })();
                        } else {
                            promise[symbolState] = state;
                            var queue = promise[symbolValue];
                            // record task information in value when error occurs, so we can
                            // do some additional work such as render longStackTrace
                            if (promise[symbolValue] = value, promise[symbolFinally] === symbolFinally && state === RESOLVED && (
                            // the state is resolved, should ignore the value
                            // and use parent promise value
                            promise[symbolState] = promise[symbolParentPromiseState], promise[symbolValue] = promise[symbolParentPromiseValue]), 
                            state === REJECTED && value instanceof Error) {
                                // check if longStackTraceZone is here
                                var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];
                                trace && 
                                // only keep the long stack trace into error when in longStackTraceZone
                                ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                                    configurable: !0,
                                    enumerable: !1,
                                    writable: !0,
                                    value: trace
                                });
                            }
                            for (var i = 0; i < queue.length; ) scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                            if (0 == queue.length && state == REJECTED) {
                                promise[symbolState] = REJECTED_NO_CATCH;
                                try {
                                    // try to print more readable error log
                                    throw new Error("Uncaught (in promise): " + ((obj = value) && obj.toString === Object.prototype.toString ? (obj.constructor && obj.constructor.name || "") + ": " + JSON.stringify(obj) : obj ? obj.toString() : Object.prototype.toString.call(obj)) + (value && value.stack ? "\n" + value.stack : ""));
                                } catch (err) {
                                    var error_1 = err;
                                    error_1.rejection = value, error_1.promise = promise, error_1.zone = Zone.current, 
                                    error_1.task = Zone.currentTask, _uncaughtPromiseErrors.push(error_1), api.scheduleMicroTask();
                                }
                            }
                        }
                    }
                    // Resolving an already resolved promise is a noop.
                                        return promise;
                }
                var REJECTION_HANDLED_HANDLER = __symbol__("rejectionHandledHandler");
                function clearRejectedNoCatch(promise) {
                    if (promise[symbolState] === REJECTED_NO_CATCH) {
                        // if the promise is rejected no catch status
                        // and queue.length > 0, means there is a error handler
                        // here to handle the rejected promise, we should trigger
                        // windows.rejectionhandled eventHandler or nodejs rejectionHandled
                        // eventHandler
                        try {
                            var handler = Zone[REJECTION_HANDLED_HANDLER];
                            handler && "function" == typeof handler && handler.call(this, {
                                rejection: promise[symbolValue],
                                promise: promise
                            });
                        } catch (err) {}
                        promise[symbolState] = REJECTED;
                        for (var i = 0; i < _uncaughtPromiseErrors.length; i++) promise === _uncaughtPromiseErrors[i].promise && _uncaughtPromiseErrors.splice(i, 1);
                    }
                }
                function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
                    clearRejectedNoCatch(promise);
                    var promiseState = promise[symbolState], delegate = promiseState ? "function" == typeof onFulfilled ? onFulfilled : forwardResolution : "function" == typeof onRejected ? onRejected : forwardRejection;
                    zone.scheduleMicroTask(source, function() {
                        try {
                            var parentPromiseValue = promise[symbolValue], isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                            isFinallyPromise && (
                            // if the promise is generated from finally call, keep parent promise's state and value
                            chainPromise[symbolParentPromiseValue] = parentPromiseValue, chainPromise[symbolParentPromiseState] = promiseState);
                            // should not pass value to finally callback
                                                        var value = zone.run(delegate, void 0, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [ parentPromiseValue ]);
                            resolvePromise(chainPromise, !0, value);
                        } catch (error) {
                            // if error occurs, should always return this error
                            resolvePromise(chainPromise, !1, error);
                        }
                    }, chainPromise);
                }
                var ZoneAwarePromise = /** @class */ function() {
                    function ZoneAwarePromise(executor) {
                        if (!(this instanceof ZoneAwarePromise)) throw new Error("Must be an instanceof Promise.");
                        this[symbolState] = UNRESOLVED, this[symbolValue] = [];
                        // queue;
                        try {
                            executor && executor(makeResolver(this, RESOLVED), makeResolver(this, REJECTED));
                        } catch (error) {
                            resolvePromise(this, !1, error);
                        }
                    }
                    return ZoneAwarePromise.toString = function() {
                        return "function ZoneAwarePromise() { [native code] }";
                    }, ZoneAwarePromise.resolve = function(value) {
                        return resolvePromise(new this(null), RESOLVED, value);
                    }, ZoneAwarePromise.reject = function(error) {
                        return resolvePromise(new this(null), REJECTED, error);
                    }, ZoneAwarePromise.race = function(values) {
                        var e_1, _a, resolve, reject, promise = new this(function(res, rej) {
                            resolve = res, reject = rej;
                        });
                        function onResolve(value) {
                            promise && (promise = resolve(value));
                        }
                        function onReject(error) {
                            promise && (promise = reject(error));
                        }
                        try {
                            for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                                var value = values_1_1.value;
                                isThenable(value) || (value = this.resolve(value)), value.then(onResolve, onReject);
                            }
                        } catch (e_1_1) {
                            e_1 = {
                                error: e_1_1
                            };
                        } finally {
                            try {
                                values_1_1 && !values_1_1.done && (_a = values_1.return) && _a.call(values_1);
                            } finally {
                                if (e_1) throw e_1.error;
                            }
                        }
                        return promise;
                    }, ZoneAwarePromise.all = function(values) {
                        var e_2, _a, resolve, reject, promise = new this(function(res, rej) {
                            resolve = res, reject = rej;
                        }), unresolvedCount = 2, valueIndex = 0, resolvedValues = [], _loop_2 = function(value) {
                            isThenable(value) || (value = this_1.resolve(value));
                            var curValueIndex = valueIndex;
                            value.then(function(value) {
                                resolvedValues[curValueIndex] = value, 0 == --unresolvedCount && resolve(resolvedValues);
                            }, reject), unresolvedCount++, valueIndex++;
                        }, this_1 = this;
                        try {
                            for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) _loop_2(values_2_1.value);
                        } catch (e_2_1) {
                            e_2 = {
                                error: e_2_1
                            };
                        } finally {
                            try {
                                values_2_1 && !values_2_1.done && (_a = values_2.return) && _a.call(values_2);
                            } finally {
                                if (e_2) throw e_2.error;
                            }
                        }
                        // Make the unresolvedCount zero-based again.
                                                return 0 == (unresolvedCount -= 2) && resolve(resolvedValues), 
                        promise;
                    }, ZoneAwarePromise.prototype.then = function(onFulfilled, onRejected) {
                        var chainPromise = new this.constructor(null), zone = Zone.current;
                        return this[symbolState] == UNRESOLVED ? this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected) : scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected), 
                        chainPromise;
                    }, ZoneAwarePromise.prototype.catch = function(onRejected) {
                        return this.then(null, onRejected);
                    }, ZoneAwarePromise.prototype.finally = function(onFinally) {
                        var chainPromise = new this.constructor(null);
                        chainPromise[symbolFinally] = symbolFinally;
                        var zone = Zone.current;
                        return this[symbolState] == UNRESOLVED ? this[symbolValue].push(zone, chainPromise, onFinally, onFinally) : scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally), 
                        chainPromise;
                    }, ZoneAwarePromise;
                }();
                // Protect against aggressive optimizers dropping seemingly unused properties.
                // E.g. Closure Compiler in advanced mode.
                ZoneAwarePromise.resolve = ZoneAwarePromise.resolve, ZoneAwarePromise.reject = ZoneAwarePromise.reject, 
                ZoneAwarePromise.race = ZoneAwarePromise.race, ZoneAwarePromise.all = ZoneAwarePromise.all;
                var NativePromise = global[symbolPromise] = global.Promise, ZONE_AWARE_PROMISE = Zone.__symbol__("ZoneAwarePromise"), desc = ObjectGetOwnPropertyDescriptor(global, "Promise");
                desc && !desc.configurable || (desc && delete desc.writable, desc && delete desc.value, 
                desc || (desc = {
                    configurable: !0,
                    enumerable: !0
                }), desc.get = function() {
                    // if we already set ZoneAwarePromise, use patched one
                    // otherwise return native one.
                    return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
                }, desc.set = function(NewNativePromise) {
                    NewNativePromise === ZoneAwarePromise ? 
                    // if the NewNativePromise is ZoneAwarePromise
                    // save to global
                    global[ZONE_AWARE_PROMISE] = NewNativePromise : (
                    // if the NewNativePromise is not ZoneAwarePromise
                    // for example: after load zone.js, some library just
                    // set es6-promise to global, if we set it to global
                    // directly, assertZonePatched will fail and angular
                    // will not loaded, so we just set the NewNativePromise
                    // to global[symbolPromise], so the result is just like
                    // we load ES6 Promise before zone.js
                    global[symbolPromise] = NewNativePromise, NewNativePromise.prototype[symbolThen] || patchThen(NewNativePromise), 
                    api.setNativePromise(NewNativePromise));
                }, ObjectDefineProperty(global, "Promise", desc)), global.Promise = ZoneAwarePromise;
                var symbolThenPatched = __symbol__("thenPatched");
                function patchThen(Ctor) {
                    var proto = Ctor.prototype, prop = ObjectGetOwnPropertyDescriptor(proto, "then");
                    if (!prop || !1 !== prop.writable && prop.configurable) {
                        var originalThen = proto.then;
                        // Keep a reference to the original method.
                                                proto[symbolThen] = originalThen, Ctor.prototype.then = function(onResolve, onReject) {
                            var _this = this;
                            return new ZoneAwarePromise(function(resolve, reject) {
                                originalThen.call(_this, resolve, reject);
                            }).then(onResolve, onReject);
                        }, Ctor[symbolThenPatched] = !0;
                    }
                }
                return api.patchThen = patchThen, NativePromise && patchThen(NativePromise), 
                // This is not part of public API, but it is useful for tests, so we expose it.
                Promise[Zone.__symbol__("uncaughtPromiseErrors")] = _uncaughtPromiseErrors, ZoneAwarePromise;
            }), 
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
            Zone.__load_patch("fetch", function(global, Zone, api) {
                var fetch = global.fetch, ZoneAwarePromise = global.Promise, symbolThenPatched = api.symbol("thenPatched"), fetchTaskScheduling = api.symbol("fetchTaskScheduling"), fetchTaskAborting = api.symbol("fetchTaskAborting");
                if ("function" == typeof fetch) {
                    var OriginalAbortController = global.AbortController, supportAbort = "function" == typeof OriginalAbortController, abortNative = null;
                    supportAbort && (global.AbortController = function() {
                        var abortController = new OriginalAbortController();
                        return abortController.signal.abortController = abortController, abortController;
                    }, abortNative = api.patchMethod(OriginalAbortController.prototype, "abort", function(delegate) {
                        return function(self, args) {
                            return self.task ? self.task.zone.cancelTask(self.task) : delegate.apply(self, args);
                        };
                    }));
                    var placeholder = function() {};
                    global.fetch = function() {
                        var _this = this, args = Array.prototype.slice.call(arguments), options = args.length > 1 ? args[1] : null, signal = options && options.signal;
                        return new Promise(function(res, rej) {
                            var task = Zone.current.scheduleMacroTask("fetch", placeholder, args, function() {
                                var fetchPromise, zone = Zone.current;
                                try {
                                    zone[fetchTaskScheduling] = !0, fetchPromise = fetch.apply(_this, args);
                                } catch (error) {
                                    return void rej(error);
                                } finally {
                                    zone[fetchTaskScheduling] = !1;
                                }
                                if (!(fetchPromise instanceof ZoneAwarePromise)) {
                                    var ctor = fetchPromise.constructor;
                                    ctor[symbolThenPatched] || api.patchThen(ctor);
                                }
                                fetchPromise.then(function(resource) {
                                    "notScheduled" !== task.state && task.invoke(), res(resource);
                                }, function(error) {
                                    "notScheduled" !== task.state && task.invoke(), rej(error);
                                });
                            }, function() {
                                if (supportAbort) if (signal && signal.abortController && !signal.aborted && "function" == typeof signal.abortController.abort && abortNative) try {
                                    Zone.current[fetchTaskAborting] = !0, abortNative.call(signal.abortController);
                                } finally {
                                    Zone.current[fetchTaskAborting] = !1;
                                } else rej("cancel fetch need a AbortController.signal"); else rej("No AbortController supported, can not cancel fetch");
                            });
                            signal && signal.abortController && (signal.abortController.task = task);
                        });
                    };
                }
            });
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
            /**
     * Suppress closure compiler errors about unknown 'Zone' variable
     * @fileoverview
     * @suppress {undefinedVars,globalThis,missingRequire}
     */
            // issue #989, to reduce bundle size, use short name
            /** Object.getOwnPropertyDescriptor */
            var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, ObjectDefineProperty = Object.defineProperty, ObjectGetPrototypeOf = Object.getPrototypeOf, ObjectCreate = Object.create, ArraySlice = Array.prototype.slice, ADD_EVENT_LISTENER_STR = "addEventListener", REMOVE_EVENT_LISTENER_STR = "removeEventListener", ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR), ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR), TRUE_STR = "true", FALSE_STR = "false", ZONE_SYMBOL_PREFIX = "__zone_symbol__";
            /** Object.defineProperty */            function wrapWithCurrentZone(callback, source) {
                return Zone.current.wrap(callback, source);
            }
            function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
                return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
            }
            var zoneSymbol = Zone.__symbol__, isWindowExists = "undefined" != typeof window, internalWindow = isWindowExists ? window : void 0, _global = isWindowExists && internalWindow || "object" == typeof self && self || global, REMOVE_ATTRIBUTE = "removeAttribute", NULL_ON_PROP_VALUE = [ null ];
            function bindArguments(args, source) {
                for (var i = args.length - 1; i >= 0; i--) "function" == typeof args[i] && (args[i] = wrapWithCurrentZone(args[i], source + "_" + i));
                return args;
            }
            function isPropertyWritable(propertyDesc) {
                return !propertyDesc || !1 !== propertyDesc.writable && !("function" == typeof propertyDesc.get && void 0 === propertyDesc.set);
            }
            var isWebWorker = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope, isNode = !("nw" in _global) && void 0 !== _global.process && "[object process]" === {}.toString.call(_global.process), isBrowser = !isNode && !isWebWorker && !(!isWindowExists || !internalWindow.HTMLElement), isMix = void 0 !== _global.process && "[object process]" === {}.toString.call(_global.process) && !isWebWorker && !(!isWindowExists || !internalWindow.HTMLElement), zoneSymbolEventNames = {}, wrapFn = function(event) {
                if (
                // https://github.com/angular/zone.js/issues/911, in IE, sometimes
                // event will be undefined, so we need to use window.event
                event = event || _global.event) {
                    var eventNameSymbol = zoneSymbolEventNames[event.type];
                    eventNameSymbol || (eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol("ON_PROPERTY" + event.type));
                    var result, target = this || event.target || _global, listener = target[eventNameSymbol];
                    return isBrowser && target === internalWindow && "error" === event.type ? !0 === (result = listener && listener.call(this, event.message, event.filename, event.lineno, event.colno, event.error)) && event.preventDefault() : null == (result = listener && listener.apply(this, arguments)) || result || event.preventDefault(), 
                    result;
                }
            };
            // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
            // this code.
                        function patchProperty(obj, prop, prototype) {
                var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
                // if the descriptor not exists or is not configurable
                // just return
                if (!desc && prototype && ObjectGetOwnPropertyDescriptor(prototype, prop) && (desc = {
                    enumerable: !0,
                    configurable: !0
                }), desc && desc.configurable) {
                    var onPropPatchedSymbol = zoneSymbol("on" + prop + "patched");
                    if (!obj.hasOwnProperty(onPropPatchedSymbol) || !obj[onPropPatchedSymbol]) {
                        // A property descriptor cannot have getter/setter and be writable
                        // deleting the writable and value properties avoids this error:
                        //
                        // TypeError: property descriptors must not specify a value or be writable when a
                        // getter or setter has been specified
                        delete desc.writable, delete desc.value;
                        var originalDescGet = desc.get, originalDescSet = desc.set, eventName = prop.substr(2), eventNameSymbol = zoneSymbolEventNames[eventName];
                        eventNameSymbol || (eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol("ON_PROPERTY" + eventName)), 
                        desc.set = function(newValue) {
                            // in some of windows's onproperty callback, this is undefined
                            // so we need to check it
                            var target = this;
                            target || obj !== _global || (target = _global), target && (target[eventNameSymbol] && target.removeEventListener(eventName, wrapFn), 
                            // issue #978, when onload handler was added before loading zone.js
                            // we should remove it with originalDescSet
                            originalDescSet && originalDescSet.apply(target, NULL_ON_PROP_VALUE), "function" == typeof newValue ? (target[eventNameSymbol] = newValue, 
                            target.addEventListener(eventName, wrapFn, !1)) : target[eventNameSymbol] = null);
                        }, 
                        // The getter would return undefined for unassigned properties but the default value of an
                        // unassigned property is null
                        desc.get = function() {
                            // in some of windows's onproperty callback, this is undefined
                            // so we need to check it
                            var target = this;
                            if (target || obj !== _global || (target = _global), !target) return null;
                            var listener = target[eventNameSymbol];
                            if (listener) return listener;
                            if (originalDescGet) {
                                // result will be null when use inline event attribute,
                                // such as <button onclick="func();">OK</button>
                                // because the onclick function is internal raw uncompiled handler
                                // the onclick will be evaluated when first time event was triggered or
                                // the property is accessed, https://github.com/angular/zone.js/issues/525
                                // so we should use original native get to retrieve the handler
                                var value = originalDescGet && originalDescGet.call(this);
                                if (value) return desc.set.call(this, value), "function" == typeof target[REMOVE_ATTRIBUTE] && target.removeAttribute(prop), 
                                value;
                            }
                            return null;
                        }, ObjectDefineProperty(obj, prop, desc), obj[onPropPatchedSymbol] = !0;
                    }
                }
            }
            function patchOnProperties(obj, properties, prototype) {
                if (properties) for (var i = 0; i < properties.length; i++) patchProperty(obj, "on" + properties[i], prototype); else {
                    var onProperties = [];
                    for (var prop in obj) "on" == prop.substr(0, 2) && onProperties.push(prop);
                    for (var j = 0; j < onProperties.length; j++) patchProperty(obj, onProperties[j], prototype);
                }
            }
            var originalInstanceKey = zoneSymbol("originalInstance");
            // wrap some native API on `window`
                        function patchClass(className) {
                var OriginalClass = _global[className];
                if (OriginalClass) {
                    // keep original class in global
                    _global[zoneSymbol(className)] = OriginalClass, _global[className] = function() {
                        var a = bindArguments(arguments, className);
                        switch (a.length) {
                          case 0:
                            this[originalInstanceKey] = new OriginalClass();
                            break;

                          case 1:
                            this[originalInstanceKey] = new OriginalClass(a[0]);
                            break;

                          case 2:
                            this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                            break;

                          case 3:
                            this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                            break;

                          case 4:
                            this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                            break;

                          default:
                            throw new Error("Arg list too long.");
                        }
                    }, 
                    // attach original delegate to patched function
                    attachOriginToPatched(_global[className], OriginalClass);
                    var prop, instance = new OriginalClass(function() {});
                    for (prop in instance) 
                    // https://bugs.webkit.org/show_bug.cgi?id=44721
                    "XMLHttpRequest" === className && "responseBlob" === prop || function(prop) {
                        "function" == typeof instance[prop] ? _global[className].prototype[prop] = function() {
                            return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                        } : ObjectDefineProperty(_global[className].prototype, prop, {
                            set: function(fn) {
                                "function" == typeof fn ? (this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + "." + prop), 
                                // keep callback in wrapped function so we can
                                // use it in Function.prototype.toString to return
                                // the native one.
                                attachOriginToPatched(this[originalInstanceKey][prop], fn)) : this[originalInstanceKey][prop] = fn;
                            },
                            get: function() {
                                return this[originalInstanceKey][prop];
                            }
                        });
                    }(prop);
                    for (prop in OriginalClass) "prototype" !== prop && OriginalClass.hasOwnProperty(prop) && (_global[className][prop] = OriginalClass[prop]);
                }
            }
            var shouldCopySymbolProperties = !1;
            function patchMethod(target, name, patchFn) {
                for (var proto = target; proto && !proto.hasOwnProperty(name); ) proto = ObjectGetPrototypeOf(proto);
                !proto && target[name] && (
                // somehow we did not find it, but we can see it. This happens on IE for Window properties.
                proto = target);
                var src, dest, delegateName = zoneSymbol(name), delegate = null;
                if (proto && !(delegate = proto[delegateName]) && (delegate = proto[delegateName] = proto[name], 
                isPropertyWritable(proto && ObjectGetOwnPropertyDescriptor(proto, name)))) {
                    var patchDelegate_1 = patchFn(delegate, delegateName, name);
                    proto[name] = function() {
                        return patchDelegate_1(this, arguments);
                    }, attachOriginToPatched(proto[name], delegate), shouldCopySymbolProperties && (src = delegate, 
                    dest = proto[name], "function" == typeof Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(src).forEach(function(symbol) {
                        var desc = Object.getOwnPropertyDescriptor(src, symbol);
                        Object.defineProperty(dest, symbol, {
                            get: function() {
                                return src[symbol];
                            },
                            set: function(value) {
                                (!desc || desc.writable && "function" == typeof desc.set) && (src[symbol] = value);
                            },
                            enumerable: !desc || desc.enumerable,
                            configurable: !desc || desc.configurable
                        });
                    }));
                }
                return delegate;
            }
            // TODO: @JiaLiPassion, support cancel task later if necessary
                        function attachOriginToPatched(patched, original) {
                patched[zoneSymbol("OriginalDelegate")] = original;
            }
            var isDetectedIEOrEdge = !1, ieOrEdge = !1;
            function isIE() {
                try {
                    var ua = internalWindow.navigator.userAgent;
                    if (-1 !== ua.indexOf("MSIE ") || -1 !== ua.indexOf("Trident/")) return !0;
                } catch (error) {}
                return !1;
            }
            function isIEOrEdge() {
                if (isDetectedIEOrEdge) return ieOrEdge;
                isDetectedIEOrEdge = !0;
                try {
                    var ua = internalWindow.navigator.userAgent;
                    return -1 === ua.indexOf("MSIE ") && -1 === ua.indexOf("Trident/") && -1 === ua.indexOf("Edge/") || (ieOrEdge = !0), 
                    ieOrEdge;
                } catch (error) {}
            }
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
            // override Function.prototype.toString to make zone.js patched function
            // look like native function
                        Zone.__load_patch("toString", function(global) {
                // patch Func.prototype.toString to let them look like native
                var originalFunctionToString = Function.prototype.toString, ORIGINAL_DELEGATE_SYMBOL = zoneSymbol("OriginalDelegate"), PROMISE_SYMBOL = zoneSymbol("Promise"), ERROR_SYMBOL = zoneSymbol("Error"), newFunctionToString = function() {
                    if ("function" == typeof this) {
                        var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
                        if (originalDelegate) return "function" == typeof originalDelegate ? originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments) : Object.prototype.toString.call(originalDelegate);
                        if (this === Promise) {
                            var nativePromise = global[PROMISE_SYMBOL];
                            if (nativePromise) return originalFunctionToString.apply(nativePromise, arguments);
                        }
                        if (this === Error) {
                            var nativeError = global[ERROR_SYMBOL];
                            if (nativeError) return originalFunctionToString.apply(nativeError, arguments);
                        }
                    }
                    return originalFunctionToString.apply(this, arguments);
                };
                newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString, Function.prototype.toString = newFunctionToString;
                // patch Object.prototype.toString to let them look like native
                var originalObjectToString = Object.prototype.toString;
                Object.prototype.toString = function() {
                    return this instanceof Promise ? "[object Promise]" : originalObjectToString.apply(this, arguments);
                };
            });
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
            /**
     * @fileoverview
     * @suppress {missingRequire}
     */
            var passiveSupported = !1;
            if ("undefined" != typeof window) try {
                var options = Object.defineProperty({}, "passive", {
                    get: function() {
                        passiveSupported = !0;
                    }
                });
                window.addEventListener("test", options, options), window.removeEventListener("test", options, options);
            } catch (err) {
                passiveSupported = !1;
            }
            // an identifier to tell ZoneTask do not create a new invoke closure
                        var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
                useG: !0
            }, zoneSymbolEventNames$1 = {}, globalSources = {}, EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/, IMMEDIATE_PROPAGATION_SYMBOL = "__zone_symbol__propagationStopped";
            function patchEventTarget(_global, apis, patchOptions) {
                var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR, LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || "eventListeners", REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || "removeAllListeners", zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER), ADD_EVENT_LISTENER_SOURCE = "." + ADD_EVENT_LISTENER + ":", PREPEND_EVENT_LISTENER = "prependListener", PREPEND_EVENT_LISTENER_SOURCE = "." + PREPEND_EVENT_LISTENER + ":", invokeTask = function(task, target, event) {
                    // for better performance, check isRemoved which is set
                    // by removeEventListener
                    if (!task.isRemoved) {
                        var delegate = task.callback;
                        "object" == typeof delegate && delegate.handleEvent && (
                        // create the bind version of handleEvent when invoke
                        task.callback = function(event) {
                            return delegate.handleEvent(event);
                        }, task.originalDelegate = delegate), 
                        // invoke static task.invoke
                        task.invoke(task, target, [ event ]);
                        var options = task.options;
                        options && "object" == typeof options && options.once && target[REMOVE_EVENT_LISTENER].call(target, event.type, task.originalDelegate ? task.originalDelegate : task.callback, options);
                    }
                }, globalZoneAwareCallback = function(event) {
                    if (
                    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
                    // event will be undefined, so we need to use window.event
                    event = event || _global.event) {
                        // event.target is needed for Samsung TV and SourceBuffer
                        // || global is needed https://github.com/angular/zone.js/issues/190
                        var target = this || event.target || _global, tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
                        if (tasks) 
                        // invoke all tasks which attached to current target with given event.type and capture = false
                        // for performance concern, if task.length === 1, just invoke
                        if (1 === tasks.length) invokeTask(tasks[0], target, event); else for (
                        // https://github.com/angular/zone.js/issues/836
                        // copy the tasks array before invoke, to avoid
                        // the callback will remove itself or other listener
                        var copyTasks = tasks.slice(), i = 0; i < copyTasks.length && (!event || !0 !== event[IMMEDIATE_PROPAGATION_SYMBOL]); i++) invokeTask(copyTasks[i], target, event);
                    }
                }, globalZoneAwareCaptureCallback = function(event) {
                    if (
                    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
                    // event will be undefined, so we need to use window.event
                    event = event || _global.event) {
                        // event.target is needed for Samsung TV and SourceBuffer
                        // || global is needed https://github.com/angular/zone.js/issues/190
                        var target = this || event.target || _global, tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
                        if (tasks) 
                        // invoke all tasks which attached to current target with given event.type and capture = false
                        // for performance concern, if task.length === 1, just invoke
                        if (1 === tasks.length) invokeTask(tasks[0], target, event); else for (
                        // https://github.com/angular/zone.js/issues/836
                        // copy the tasks array before invoke, to avoid
                        // the callback will remove itself or other listener
                        var copyTasks = tasks.slice(), i = 0; i < copyTasks.length && (!event || !0 !== event[IMMEDIATE_PROPAGATION_SYMBOL]); i++) invokeTask(copyTasks[i], target, event);
                    }
                };
                function patchEventTargetMethods(obj, patchOptions) {
                    if (!obj) return !1;
                    var useGlobalCallback = !0;
                    patchOptions && void 0 !== patchOptions.useG && (useGlobalCallback = patchOptions.useG);
                    var validateHandler = patchOptions && patchOptions.vh, checkDuplicate = !0;
                    patchOptions && void 0 !== patchOptions.chkDup && (checkDuplicate = patchOptions.chkDup);
                    var returnTarget = !1;
                    patchOptions && void 0 !== patchOptions.rt && (returnTarget = patchOptions.rt);
                    for (var proto = obj; proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER); ) proto = ObjectGetPrototypeOf(proto);
                    if (!proto && obj[ADD_EVENT_LISTENER] && (
                    // somehow we did not find it, but we can see it. This happens on IE for Window properties.
                    proto = obj), !proto) return !1;
                    if (proto[zoneSymbolAddEventListener]) return !1;
                    var nativePrependEventListener, eventNameToString = patchOptions && patchOptions.eventNameToString, taskData = {}, nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER], nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER], nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
                    // a shared global taskData to pass data for scheduleEventTask
                    // so we do not need to create a new object just for pass some data
                                        function checkIsPassive(task) {
                        passiveSupported || "boolean" == typeof taskData.options || null == taskData.options || (
                        // options is a non-null non-undefined object
                        // passive is not supported
                        // don't pass options as object
                        // just pass capture as a boolean
                        task.options = !!taskData.options.capture, taskData.options = task.options);
                    }
                    patchOptions && patchOptions.prepend && (nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend]);
                    var customSchedule = useGlobalCallback ? function(task) {
                        // if there is already a task for the eventName + capture,
                        // just return, because we use the shared globalZoneAwareCallback here.
                        if (!taskData.isExisting) return checkIsPassive(task), nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
                    } : function(task) {
                        return checkIsPassive(task), nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
                    }, customCancel = useGlobalCallback ? function(task) {
                        // if task is not marked as isRemoved, this call is directly
                        // from Zone.prototype.cancelTask, we should remove the task
                        // from tasksList of target first
                        if (!task.isRemoved) {
                            var symbolEventNames = zoneSymbolEventNames$1[task.eventName], symbolEventName = void 0;
                            symbolEventNames && (symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR]);
                            var existingTasks = symbolEventName && task.target[symbolEventName];
                            if (existingTasks) for (var i = 0; i < existingTasks.length; i++) if (existingTasks[i] === task) {
                                existingTasks.splice(i, 1), 
                                // set isRemoved to data for faster invokeTask check
                                task.isRemoved = !0, 0 === existingTasks.length && (
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = !0, task.target[symbolEventName] = null);
                                break;
                            }
                        }
                        // if all tasks for the eventName + capture have gone,
                        // we will really remove the global event callback,
                        // if not, return
                                                if (task.allRemoved) return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
                    } : function(task) {
                        return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
                    }, compare = patchOptions && patchOptions.diff ? patchOptions.diff : function(task, delegate) {
                        var typeOfDelegate = typeof delegate;
                        return "function" === typeOfDelegate && task.callback === delegate || "object" === typeOfDelegate && task.originalDelegate === delegate;
                    }, blackListedEvents = Zone[Zone.__symbol__("BLACK_LISTED_EVENTS")], makeAddListener = function(nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
                        return void 0 === returnTarget && (returnTarget = !1), void 0 === prepend && (prepend = !1), 
                        function() {
                            var target = this || _global, eventName = arguments[0], delegate = arguments[1];
                            if (!delegate) return nativeListener.apply(this, arguments);
                            if (isNode && "uncaughtException" === eventName) 
                            // don't patch uncaughtException of nodejs to prevent endless loop
                            return nativeListener.apply(this, arguments);
                            // don't create the bind delegate function for handleEvent
                            // case here to improve addEventListener performance
                            // we will create the bind delegate when invoke
                                                        var isHandleEvent = !1;
                            if ("function" != typeof delegate) {
                                if (!delegate.handleEvent) return nativeListener.apply(this, arguments);
                                isHandleEvent = !0;
                            }
                            if (!validateHandler || validateHandler(nativeListener, delegate, target, arguments)) {
                                var capture, options = arguments[2];
                                if (blackListedEvents) 
                                // check black list
                                for (var i = 0; i < blackListedEvents.length; i++) if (eventName === blackListedEvents[i]) return nativeListener.apply(this, arguments);
                                var once = !1;
                                void 0 === options ? capture = !1 : !0 === options ? capture = !0 : !1 === options ? capture = !1 : (capture = !!options && !!options.capture, 
                                once = !!options && !!options.once);
                                var symbolEventName, zone = Zone.current, symbolEventNames = zoneSymbolEventNames$1[eventName];
                                if (symbolEventNames) symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR]; else {
                                    // the code is duplicate, but I just want to get some better performance
                                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR, trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR, symbol = ZONE_SYMBOL_PREFIX + falseEventName, symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                                    zoneSymbolEventNames$1[eventName] = {}, zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol, 
                                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture, symbolEventName = capture ? symbolCapture : symbol;
                                }
                                var source, existingTasks = target[symbolEventName], isExisting = !1;
                                if (existingTasks) {
                                    if (
                                    // already have task registered
                                    isExisting = !0, checkDuplicate) for (i = 0; i < existingTasks.length; i++) if (compare(existingTasks[i], delegate)) 
                                    // same callback, same capture, same event name, just return
                                    return;
                                } else existingTasks = target[symbolEventName] = [];
                                var constructorName = target.constructor.name, targetSource = globalSources[constructorName];
                                targetSource && (source = targetSource[eventName]), source || (source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName)), 
                                // do not create a new object as task.data to pass those things
                                // just use the global shared one
                                taskData.options = options, once && (
                                // if addEventListener with once options, we don't pass it to
                                // native addEventListener, instead we keep the once setting
                                // and handle ourselves.
                                taskData.options.once = !1), taskData.target = target, taskData.capture = capture, 
                                taskData.eventName = eventName, taskData.isExisting = isExisting;
                                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : void 0;
                                // keep taskData into data to allow onScheduleEventTask to access the task information
                                                                data && (data.taskData = taskData);
                                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                                // should clear taskData.target to avoid memory leak
                                // issue, https://github.com/angular/angular/issues/20442
                                                                return taskData.target = null, 
                                // need to clear up taskData because it is a global object
                                data && (data.taskData = null), 
                                // have to save those information to task in case
                                // application may call task.zone.cancelTask() directly
                                once && (options.once = !0), (passiveSupported || "boolean" != typeof task.options) && (
                                // if not support passive, and we pass an option object
                                // to addEventListener, we should save the options to task
                                task.options = options), task.target = target, task.capture = capture, task.eventName = eventName, 
                                isHandleEvent && (
                                // save original delegate for compare to check duplicate
                                task.originalDelegate = delegate), prepend ? existingTasks.unshift(task) : existingTasks.push(task), 
                                returnTarget ? target : void 0;
                            }
                        };
                    };
                    return proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget), 
                    nativePrependEventListener && (proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, function(task) {
                        return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
                    }, customCancel, returnTarget, !0)), proto[REMOVE_EVENT_LISTENER] = function() {
                        var capture, target = this || _global, eventName = arguments[0], options = arguments[2];
                        capture = void 0 !== options && (!0 === options || !1 !== options && !!options && !!options.capture);
                        var delegate = arguments[1];
                        if (!delegate) return nativeRemoveEventListener.apply(this, arguments);
                        if (!validateHandler || validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                            var symbolEventName, symbolEventNames = zoneSymbolEventNames$1[eventName];
                            symbolEventNames && (symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR]);
                            var existingTasks = symbolEventName && target[symbolEventName];
                            if (existingTasks) for (var i = 0; i < existingTasks.length; i++) {
                                var existingTask = existingTasks[i];
                                if (compare(existingTask, delegate)) return existingTasks.splice(i, 1), 
                                // set isRemoved to data for faster invokeTask check
                                existingTask.isRemoved = !0, 0 === existingTasks.length && (
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                existingTask.allRemoved = !0, target[symbolEventName] = null), existingTask.zone.cancelTask(existingTask), 
                                returnTarget ? target : void 0;
                            }
                            // issue 930, didn't find the event name or callback
                            // from zone kept existingTasks, the callback maybe
                            // added outside of zone, we need to call native removeEventListener
                            // to try to remove it.
                                                        return nativeRemoveEventListener.apply(this, arguments);
                        }
                    }, proto[LISTENERS_EVENT_LISTENER] = function() {
                        for (var eventName = arguments[0], listeners = [], tasks = findEventTasks(this || _global, eventNameToString ? eventNameToString(eventName) : eventName), i = 0; i < tasks.length; i++) {
                            var task = tasks[i];
                            listeners.push(task.originalDelegate ? task.originalDelegate : task.callback);
                        }
                        return listeners;
                    }, proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function() {
                        var target = this || _global, eventName = arguments[0];
                        if (eventName) {
                            var symbolEventNames = zoneSymbolEventNames$1[eventName];
                            if (symbolEventNames) {
                                var tasks = target[symbolEventNames[FALSE_STR]], captureTasks = target[symbolEventNames[TRUE_STR]];
                                if (tasks) {
                                    var removeTasks = tasks.slice();
                                    for (i = 0; i < removeTasks.length; i++) this[REMOVE_EVENT_LISTENER].call(this, eventName, (task = removeTasks[i]).originalDelegate ? task.originalDelegate : task.callback, task.options);
                                }
                                if (captureTasks) for (removeTasks = captureTasks.slice(), i = 0; i < removeTasks.length; i++) {
                                    var task;
                                    this[REMOVE_EVENT_LISTENER].call(this, eventName, (task = removeTasks[i]).originalDelegate ? task.originalDelegate : task.callback, task.options);
                                }
                            }
                        } else {
                            for (var keys = Object.keys(target), i = 0; i < keys.length; i++) {
                                var match = EVENT_NAME_SYMBOL_REGX.exec(keys[i]), evtName = match && match[1];
                                // in nodejs EventEmitter, removeListener event is
                                // used for monitoring the removeListener call,
                                // so just keep removeListener eventListener until
                                // all other eventListeners are removed
                                evtName && "removeListener" !== evtName && this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                            }
                            // remove removeListener listener finally
                                                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, "removeListener");
                        }
                        if (returnTarget) return this;
                    }, 
                    // for native toString patch
                    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener), attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener), 
                    nativeRemoveAllListeners && attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners), 
                    nativeListeners && attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners), 
                    !0;
                }
                for (var results = [], i = 0; i < apis.length; i++) results[i] = patchEventTargetMethods(apis[i], patchOptions);
                return results;
            }
            function findEventTasks(target, eventName) {
                var foundTasks = [];
                for (var prop in target) {
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop), evtName = match && match[1];
                    if (evtName && (!eventName || evtName === eventName)) {
                        var tasks = target[prop];
                        if (tasks) for (var i = 0; i < tasks.length; i++) foundTasks.push(tasks[i]);
                    }
                }
                return foundTasks;
            }
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
            /**
     * @fileoverview
     * @suppress {missingRequire}
     */
            var taskSymbol = zoneSymbol("zoneTask");
            function patchTimer(window, setName, cancelName, nameSuffix) {
                var setNative = null, clearNative = null;
                cancelName += nameSuffix;
                var tasksByHandleId = {};
                function scheduleTask(task) {
                    var data = task.data;
                    return data.args[0] = function() {
                        try {
                            task.invoke.apply(this, arguments);
                        } finally {
                            // issue-934, task will be cancelled
                            // even it is a periodic task such as
                            // setInterval
                            task.data && task.data.isPeriodic || ("number" == typeof data.handleId ? 
                            // in non-nodejs env, we remove timerId
                            // from local cache
                            delete tasksByHandleId[data.handleId] : data.handleId && (
                            // Node returns complex objects as handleIds
                            // we remove task reference from timer object
                            data.handleId[taskSymbol] = null));
                        }
                    }, data.handleId = setNative.apply(window, data.args), task;
                }
                function clearTask(task) {
                    return clearNative(task.data.handleId);
                }
                setNative = patchMethod(window, setName += nameSuffix, function(delegate) {
                    return function(self, args) {
                        if ("function" == typeof args[0]) {
                            var task = scheduleMacroTaskWithCurrentZone(setName, args[0], {
                                isPeriodic: "Interval" === nameSuffix,
                                delay: "Timeout" === nameSuffix || "Interval" === nameSuffix ? args[1] || 0 : void 0,
                                args: args
                            }, scheduleTask, clearTask);
                            if (!task) return task;
                            // Node.js must additionally support the ref and unref functions.
                                                        var handle = task.data.handleId;
                            return "number" == typeof handle ? 
                            // for non nodejs env, we save handleId: task
                            // mapping in local cache for clearTimeout
                            tasksByHandleId[handle] = task : handle && (
                            // for nodejs env, we save task
                            // reference in timerId Object for clearTimeout
                            handle[taskSymbol] = task), 
                            // check whether handle is null, because some polyfill or browser
                            // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                            handle && handle.ref && handle.unref && "function" == typeof handle.ref && "function" == typeof handle.unref && (task.ref = handle.ref.bind(handle), 
                            task.unref = handle.unref.bind(handle)), "number" == typeof handle || handle ? handle : task;
                        }
                        // cause an error by calling it directly.
                        return delegate.apply(window, args);
                    };
                }), clearNative = patchMethod(window, cancelName, function(delegate) {
                    return function(self, args) {
                        var task, id = args[0];
                        "number" == typeof id ? 
                        // non nodejs env.
                        task = tasksByHandleId[id] : 
                        // other environments.
                        (
                        // nodejs env.
                        task = id && id[taskSymbol]) || (task = id), task && "string" == typeof task.type ? "notScheduled" !== task.state && (task.cancelFn && task.data.isPeriodic || 0 === task.runCount) && ("number" == typeof id ? delete tasksByHandleId[id] : id && (id[taskSymbol] = null), 
                        // Do not cancel already canceled functions
                        task.zone.cancelTask(task)) : 
                        // cause an error by calling it directly.
                        delegate.apply(window, args);
                    };
                });
            }
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
            /*
     * This is necessary for Chrome and Chrome mobile, to enable
     * things like redefining `createdCallback` on an element.
     */            var _defineProperty = Object[zoneSymbol("defineProperty")] = Object.defineProperty, _getOwnPropertyDescriptor = Object[zoneSymbol("getOwnPropertyDescriptor")] = Object.getOwnPropertyDescriptor, _create = Object.create, unconfigurablesKey = zoneSymbol("unconfigurables");
            function isUnconfigurable(obj, prop) {
                return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
            }
            function rewriteDescriptor(obj, prop, desc) {
                // issue-927, if the desc is frozen, don't try to change the desc
                return Object.isFrozen(desc) || (desc.configurable = !0), desc.configurable || (
                // issue-927, if the obj is frozen, don't try to set the desc to obj
                obj[unconfigurablesKey] || Object.isFrozen(obj) || _defineProperty(obj, unconfigurablesKey, {
                    writable: !0,
                    value: {}
                }), obj[unconfigurablesKey] && (obj[unconfigurablesKey][prop] = !0)), desc;
            }
            function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
                try {
                    return _defineProperty(obj, prop, desc);
                } catch (error) {
                    if (!desc.configurable) throw error;
                    // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
                    // retry with the original flag value
                    void 0 === originalConfigurableFlag ? delete desc.configurable : desc.configurable = originalConfigurableFlag;
                    try {
                        return _defineProperty(obj, prop, desc);
                    } catch (error) {
                        var descJson = null;
                        try {
                            descJson = JSON.stringify(desc);
                        } catch (error) {
                            descJson = desc.toString();
                        }
                        console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
                    }
                }
            }
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
            // we have to patch the instance since the proto is non-configurable
                        /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
            /**
     * @fileoverview
     * @suppress {globalThis}
     */
            var windowEventNames = [ "absolutedeviceorientation", "afterinput", "afterprint", "appinstalled", "beforeinstallprompt", "beforeprint", "beforeunload", "devicelight", "devicemotion", "deviceorientation", "deviceorientationabsolute", "deviceproximity", "hashchange", "languagechange", "message", "mozbeforepaint", "offline", "online", "paint", "pageshow", "pagehide", "popstate", "rejectionhandled", "storage", "unhandledrejection", "unload", "userproximity", "vrdisplyconnected", "vrdisplaydisconnected", "vrdisplaypresentchange" ], mediaElementEventNames = [ "encrypted", "waitingforkey", "msneedkey", "mozinterruptbegin", "mozinterruptend" ], frameEventNames = [ "load" ], frameSetEventNames = [ "blur", "error", "focus", "load", "resize", "scroll", "messageerror" ], marqueeEventNames = [ "bounce", "finish", "start" ], XMLHttpRequestEventNames = [ "loadstart", "progress", "abort", "error", "load", "progress", "timeout", "loadend", "readystatechange" ], IDBIndexEventNames = [ "upgradeneeded", "complete", "abort", "success", "error", "blocked", "versionchange", "close" ], websocketEventNames = [ "close", "error", "open", "message" ], workerEventNames = [ "error", "message" ], eventNames = [ "abort", "animationcancel", "animationend", "animationiteration", "auxclick", "beforeinput", "blur", "cancel", "canplay", "canplaythrough", "change", "compositionstart", "compositionupdate", "compositionend", "cuechange", "click", "close", "contextmenu", "curechange", "dblclick", "drag", "dragend", "dragenter", "dragexit", "dragleave", "dragover", "drop", "durationchange", "emptied", "ended", "error", "focus", "focusin", "focusout", "gotpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "load", "loadstart", "loadeddata", "loadedmetadata", "lostpointercapture", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "orientationchange", "pause", "play", "playing", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointerlockchange", "mozpointerlockchange", "webkitpointerlockerchange", "pointerlockerror", "mozpointerlockerror", "webkitpointerlockerror", "pointermove", "pointout", "pointerover", "pointerup", "progress", "ratechange", "reset", "resize", "scroll", "seeked", "seeking", "select", "selectionchange", "selectstart", "show", "sort", "stalled", "submit", "suspend", "timeupdate", "volumechange", "touchcancel", "touchmove", "touchstart", "touchend", "transitioncancel", "transitionend", "waiting", "wheel" ].concat([ "webglcontextrestored", "webglcontextlost", "webglcontextcreationerror" ], [ "autocomplete", "autocompleteerror" ], [ "toggle" ], [ "afterscriptexecute", "beforescriptexecute", "DOMContentLoaded", "freeze", "fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange", "msfullscreenchange", "fullscreenerror", "mozfullscreenerror", "webkitfullscreenerror", "msfullscreenerror", "readystatechange", "visibilitychange", "resume" ], windowEventNames, [ "beforecopy", "beforecut", "beforepaste", "copy", "cut", "paste", "dragstart", "loadend", "animationstart", "search", "transitionrun", "transitionstart", "webkitanimationend", "webkitanimationiteration", "webkitanimationstart", "webkittransitionend" ], [ "activate", "afterupdate", "ariarequest", "beforeactivate", "beforedeactivate", "beforeeditfocus", "beforeupdate", "cellchange", "controlselect", "dataavailable", "datasetchanged", "datasetcomplete", "errorupdate", "filterchange", "layoutcomplete", "losecapture", "move", "moveend", "movestart", "propertychange", "resizeend", "resizestart", "rowenter", "rowexit", "rowsdelete", "rowsinserted", "command", "compassneedscalibration", "deactivate", "help", "mscontentzoom", "msmanipulationstatechanged", "msgesturechange", "msgesturedoubletap", "msgestureend", "msgesturehold", "msgesturestart", "msgesturetap", "msgotpointercapture", "msinertiastart", "mslostpointercapture", "mspointercancel", "mspointerdown", "mspointerenter", "mspointerhover", "mspointerleave", "mspointermove", "mspointerout", "mspointerover", "mspointerup", "pointerout", "mssitemodejumplistitemremoved", "msthumbnailclick", "stop", "storagecommit" ]);
            function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
                // check whether target is available, sometimes target will be undefined
                // because different browser or some 3rd party plugin.
                target && patchOnProperties(target, function(target, onProperties, ignoreProperties) {
                    if (!ignoreProperties || 0 === ignoreProperties.length) return onProperties;
                    var tip = ignoreProperties.filter(function(ip) {
                        return ip.target === target;
                    });
                    if (!tip || 0 === tip.length) return onProperties;
                    var targetIgnoreProperties = tip[0].ignoreProperties;
                    return onProperties.filter(function(op) {
                        return -1 === targetIgnoreProperties.indexOf(op);
                    });
                }(target, onProperties, ignoreProperties), prototype);
            }
            function propertyDescriptorPatch(api, _global) {
                if (!isNode || isMix) {
                    var supportsWebSocket = "undefined" != typeof WebSocket;
                    if (function() {
                        if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, "onclick") && "undefined" != typeof Element) {
                            // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
                            // IDL interface attributes are not configurable
                            var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, "onclick");
                            if (desc && !desc.configurable) return !1;
                        }
                        var XMLHttpRequestPrototype = XMLHttpRequest.prototype, xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, "onreadystatechange");
                        // add enumerable and configurable here because in opera
                        // by default XMLHttpRequest.prototype.onreadystatechange is undefined
                        // without adding enumerable and configurable will cause onreadystatechange
                        // non-configurable
                        // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
                        // we should set a real desc instead a fake one
                        if (xhrDesc) {
                            ObjectDefineProperty(XMLHttpRequestPrototype, "onreadystatechange", {
                                enumerable: !0,
                                configurable: !0,
                                get: function() {
                                    return !0;
                                }
                            });
                            var result = !!(req = new XMLHttpRequest()).onreadystatechange;
                            // restore original desc
                            return ObjectDefineProperty(XMLHttpRequestPrototype, "onreadystatechange", xhrDesc || {}), 
                            result;
                        }
                        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol("fake");
                        ObjectDefineProperty(XMLHttpRequestPrototype, "onreadystatechange", {
                            enumerable: !0,
                            configurable: !0,
                            get: function() {
                                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
                            },
                            set: function(value) {
                                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
                            }
                        });
                        var req, detectFunc = function() {};
                        return (req = new XMLHttpRequest()).onreadystatechange = detectFunc, result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc, 
                        req.onreadystatechange = null, result;
                    }()) {
                        var ignoreProperties = _global.__Zone_ignore_on_properties;
                        // for browsers that we can patch the descriptor:  Chrome & Firefox
                                                if (isBrowser) {
                            var internalWindow = window, ignoreErrorProperties = isIE ? [ {
                                target: internalWindow,
                                ignoreProperties: [ "error" ]
                            } ] : [];
                            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
                            // so we need to pass WindowPrototype to check onProp exist or not
                            patchFilteredProperties(internalWindow, eventNames.concat([ "messageerror" ]), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow)), 
                            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties), void 0 !== internalWindow.SVGElement && patchFilteredProperties(internalWindow.SVGElement.prototype, eventNames, ignoreProperties), 
                            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties), patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties), 
                            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties), 
                            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties), 
                            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties), 
                            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties), 
                            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
                            var HTMLMarqueeElement_1 = internalWindow.HTMLMarqueeElement;
                            HTMLMarqueeElement_1 && patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
                            var Worker_1 = internalWindow.Worker;
                            Worker_1 && patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
                        }
                        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
                        var XMLHttpRequestEventTarget_1 = _global.XMLHttpRequestEventTarget;
                        XMLHttpRequestEventTarget_1 && patchFilteredProperties(XMLHttpRequestEventTarget_1 && XMLHttpRequestEventTarget_1.prototype, XMLHttpRequestEventNames, ignoreProperties), 
                        "undefined" != typeof IDBIndex && (patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties), 
                        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties), 
                        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties), 
                        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties), 
                        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties), 
                        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties)), 
                        supportsWebSocket && patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
                    } else 
                    // Safari, Android browsers (Jelly Bean)
                    !
                    // Whenever any eventListener fires, we check the eventListener target and all parents
                    // for `onwhatever` properties and replace them with zone-bound functions
                    // - Chrome (for now)
                    function() {
                        for (var _loop_1 = function(i) {
                            var property = eventNames[i], onproperty = "on" + property;
                            self.addEventListener(property, function(event) {
                                var bound, source, elt = event.target;
                                for (source = elt ? elt.constructor.name + "." + onproperty : "unknown." + onproperty; elt; ) elt[onproperty] && !elt[onproperty][unboundKey] && ((bound = wrapWithCurrentZone(elt[onproperty], source))[unboundKey] = elt[onproperty], 
                                elt[onproperty] = bound), elt = elt.parentElement;
                            }, !0);
                        }, i = 0; i < eventNames.length; i++) _loop_1(i);
                    }
                    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ (), patchClass("XMLHttpRequest"), supportsWebSocket && function(api, _global) {
                        var WS = _global.WebSocket;
                        // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
                        // On older Chrome, no need since EventTarget was already patched
                                                _global.EventTarget || patchEventTarget(_global, [ WS.prototype ]), 
                        _global.WebSocket = function(x, y) {
                            var proxySocket, proxySocketProto, socket = arguments.length > 1 ? new WS(x, y) : new WS(x), onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, "onmessage");
                            return onmessageDesc && !1 === onmessageDesc.configurable ? (proxySocket = ObjectCreate(socket), 
                            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
                            // but proxySocket not, so we will keep socket as prototype and pass it to
                            // patchOnProperties method
                            proxySocketProto = socket, [ ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, "send", "close" ].forEach(function(propName) {
                                proxySocket[propName] = function() {
                                    var args = ArraySlice.call(arguments);
                                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                                        var eventName = args.length > 0 ? args[0] : void 0;
                                        if (eventName) {
                                            var propertySymbol = Zone.__symbol__("ON_PROPERTY" + eventName);
                                            socket[propertySymbol] = proxySocket[propertySymbol];
                                        }
                                    }
                                    return socket[propName].apply(socket, args);
                                };
                            })) : 
                            // we can patch the real socket
                            proxySocket = socket, patchOnProperties(proxySocket, [ "close", "error", "message", "open" ], proxySocketProto), 
                            proxySocket;
                        };
                        var globalWebSocket = _global.WebSocket;
                        for (var prop in WS) globalWebSocket[prop] = WS[prop];
                    }(0, _global);
                }
            }
            var unboundKey = zoneSymbol("unbound");
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
            function patchCallbacks(target, targetName, method, callbacks) {
                var symbol = Zone.__symbol__(method);
                if (!target[symbol]) {
                    var nativeDelegate = target[symbol] = target[method];
                    target[method] = function(name, opts, options) {
                        return opts && opts.prototype && callbacks.forEach(function(callback) {
                            var obj, prop, desc, originalConfigurableFlag, source = targetName + "." + method + "::" + callback, prototype = opts.prototype;
                            if (prototype.hasOwnProperty(callback)) {
                                var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                                descriptor && descriptor.value ? (descriptor.value = wrapWithCurrentZone(descriptor.value, source), 
                                originalConfigurableFlag = (desc = descriptor).configurable, _tryDefineProperty(obj = opts.prototype, prop = callback, desc = rewriteDescriptor(obj, prop, desc), originalConfigurableFlag)) : prototype[callback] && (prototype[callback] = wrapWithCurrentZone(prototype[callback], source));
                            } else prototype[callback] && (prototype[callback] = wrapWithCurrentZone(prototype[callback], source));
                        }), nativeDelegate.call(target, name, opts, options);
                    }, attachOriginToPatched(target[method], nativeDelegate);
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
     * @fileoverview
     * @suppress {missingRequire}
     */
            Zone.__load_patch("util", function(global, Zone, api) {
                api.patchOnProperties = patchOnProperties, api.patchMethod = patchMethod, api.bindArguments = bindArguments;
            }), Zone.__load_patch("timers", function(global) {
                patchTimer(global, "set", "clear", "Timeout"), patchTimer(global, "set", "clear", "Interval"), 
                patchTimer(global, "set", "clear", "Immediate");
            }), Zone.__load_patch("requestAnimationFrame", function(global) {
                patchTimer(global, "request", "cancel", "AnimationFrame"), patchTimer(global, "mozRequest", "mozCancel", "AnimationFrame"), 
                patchTimer(global, "webkitRequest", "webkitCancel", "AnimationFrame");
            }), Zone.__load_patch("blocking", function(global, Zone) {
                for (var blockingMethods = [ "alert", "prompt", "confirm" ], i = 0; i < blockingMethods.length; i++) patchMethod(global, blockingMethods[i], function(delegate, symbol, name) {
                    return function(s, args) {
                        return Zone.current.run(delegate, global, args, name);
                    };
                });
            }), Zone.__load_patch("EventTarget", function(global, Zone, api) {
                // load blackListEvents from global
                var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__("BLACK_LISTED_EVENTS");
                global[SYMBOL_BLACK_LISTED_EVENTS] && (Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS]), 
                function(global, api) {
                    !function(global, api) {
                        var Event = global.Event;
                        Event && Event.prototype && api.patchMethod(Event.prototype, "stopImmediatePropagation", function(delegate) {
                            return function(self, args) {
                                self[IMMEDIATE_PROPAGATION_SYMBOL] = !0, 
                                // we need to call the native stopImmediatePropagation
                                // in case in some hybrid application, some part of
                                // application will be controlled by zone, some are not
                                delegate && delegate.apply(self, args);
                            };
                        });
                    }(global, api);
                }(global, api), function(_global, api) {
                    var WTF_ISSUE_555 = "Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video", NO_EVENT_TARGET = "ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket".split(","), apis = [], isWtf = _global.wtf, WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(",");
                    isWtf ? 
                    // Workaround for: https://github.com/google/tracing-framework/issues/555
                    apis = WTF_ISSUE_555_ARRAY.map(function(v) {
                        return "HTML" + v + "Element";
                    }).concat(NO_EVENT_TARGET) : _global.EventTarget ? apis.push("EventTarget") : 
                    // Note: EventTarget is not available in all browsers,
                    // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
                    apis = NO_EVENT_TARGET;
                    //  predefine all __zone_symbol__ + eventName + true/false string
                    for (var isDisableIECheck = _global.__Zone_disable_IE_check || !1, isEnableCrossContextCheck = _global.__Zone_enable_cross_context_check || !1, ieOrEdge = isIEOrEdge(), BROWSER_TOOLS = "function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }", i = 0; i < eventNames.length; i++) {
                        var symbol = ZONE_SYMBOL_PREFIX + ((eventName = eventNames[i]) + FALSE_STR), symbolCapture = ZONE_SYMBOL_PREFIX + (eventName + TRUE_STR);
                        zoneSymbolEventNames$1[eventName] = {}, zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol, 
                        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    }
                    //  predefine all task.source string
                                        for (i = 0; i < WTF_ISSUE_555.length; i++) for (var target = WTF_ISSUE_555_ARRAY[i], targets = globalSources[target] = {}, j = 0; j < eventNames.length; j++) {
                        var eventName;
                        targets[eventName = eventNames[j]] = target + ".addEventListener:" + eventName;
                    }
                    var apiTypes = [];
                    for (i = 0; i < apis.length; i++) {
                        var type = _global[apis[i]];
                        apiTypes.push(type && type.prototype);
                    }
                    // vh is validateHandler to check event handler
                    // is valid or not(for security check)
                                        patchEventTarget(_global, apiTypes, {
                        vh: function(nativeDelegate, delegate, target, args) {
                            if (!isDisableIECheck && ieOrEdge) {
                                if (isEnableCrossContextCheck) try {
                                    var testString;
                                    if ("[object FunctionWrapper]" === (testString = delegate.toString()) || testString == BROWSER_TOOLS) return nativeDelegate.apply(target, args), 
                                    !1;
                                } catch (error) {
                                    return nativeDelegate.apply(target, args), !1;
                                } else if ("[object FunctionWrapper]" === (testString = delegate.toString()) || testString == BROWSER_TOOLS) return nativeDelegate.apply(target, args), 
                                !1;
                            } else if (isEnableCrossContextCheck) try {
                                delegate.toString();
                            } catch (error) {
                                return nativeDelegate.apply(target, args), !1;
                            }
                            return !0;
                        }
                    }), api.patchEventTarget = patchEventTarget;
                }(global, api);
                // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
                var XMLHttpRequestEventTarget = global.XMLHttpRequestEventTarget;
                XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype && api.patchEventTarget(global, [ XMLHttpRequestEventTarget.prototype ]), 
                patchClass("MutationObserver"), patchClass("WebKitMutationObserver"), patchClass("IntersectionObserver"), 
                patchClass("FileReader");
            }), Zone.__load_patch("on_property", function(global, Zone, api) {
                propertyDescriptorPatch(0, global), Object.defineProperty = function(obj, prop, desc) {
                    if (isUnconfigurable(obj, prop)) throw new TypeError("Cannot assign to read only property '" + prop + "' of " + obj);
                    var originalConfigurableFlag = desc.configurable;
                    return "prototype" !== prop && (desc = rewriteDescriptor(obj, prop, desc)), _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
                }, Object.defineProperties = function(obj, props) {
                    return Object.keys(props).forEach(function(prop) {
                        Object.defineProperty(obj, prop, props[prop]);
                    }), obj;
                }, Object.create = function(obj, proto) {
                    return "object" != typeof proto || Object.isFrozen(proto) || Object.keys(proto).forEach(function(prop) {
                        proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
                    }), _create(obj, proto);
                }, Object.getOwnPropertyDescriptor = function(obj, prop) {
                    var desc = _getOwnPropertyDescriptor(obj, prop);
                    return desc && isUnconfigurable(obj, prop) && (desc.configurable = !1), desc;
                };
            }), Zone.__load_patch("customElements", function(global, Zone, api) {
                (isBrowser || isMix) && "registerElement" in global.document && patchCallbacks(document, "Document", "registerElement", [ "createdCallback", "attachedCallback", "detachedCallback", "attributeChangedCallback" ]), 
                (isBrowser || isMix) && "customElements" in global && patchCallbacks(global.customElements, "customElements", "define", [ "connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback" ]);
            }), Zone.__load_patch("canvas", function(global) {
                var HTMLCanvasElement = global.HTMLCanvasElement;
                void 0 !== HTMLCanvasElement && HTMLCanvasElement.prototype && HTMLCanvasElement.prototype.toBlob && function(obj, funcName, metaCreator) {
                    var setNative = null;
                    function scheduleTask(task) {
                        var data = task.data;
                        return data.args[data.cbIdx] = function() {
                            task.invoke.apply(this, arguments);
                        }, setNative.apply(data.target, data.args), task;
                    }
                    setNative = patchMethod(HTMLCanvasElement.prototype, "toBlob", function(delegate) {
                        return function(self, args) {
                            var meta = function(self, args) {
                                return {
                                    name: "HTMLCanvasElement.toBlob",
                                    target: self,
                                    cbIdx: 0,
                                    args: args
                                };
                            }(self, args);
                            return meta.cbIdx >= 0 && "function" == typeof args[meta.cbIdx] ? scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask) : delegate.apply(self, args);
                        };
                    });
                }();
            }), Zone.__load_patch("XHR", function(global, Zone) {
                // Treat XMLHttpRequest as a macrotask.
                !function(window) {
                    var XMLHttpRequestPrototype = XMLHttpRequest.prototype, oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER], oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                    if (!oriAddListener) {
                        var XMLHttpRequestEventTarget_1 = global.XMLHttpRequestEventTarget;
                        if (XMLHttpRequestEventTarget_1) {
                            var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                            oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER], 
                            oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                        }
                    }
                    var READY_STATE_CHANGE = "readystatechange", SCHEDULED = "scheduled";
                    function scheduleTask(task) {
                        var data = task.data, target = data.target;
                        target[XHR_SCHEDULED] = !1, target[XHR_ERROR_BEFORE_SCHEDULED] = !1;
                        // remove existing event listener
                        var listener = target[XHR_LISTENER];
                        oriAddListener || (oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER], oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER]), 
                        listener && oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
                        var newListener = target[XHR_LISTENER] = function() {
                            if (target.readyState === target.DONE) 
                            // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                            // readyState=4 multiple times, so we need to check task state here
                            if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                                // check whether the xhr has registered onload listener
                                // if that is the case, the task should invoke after all
                                // onload listeners finish.
                                var loadTasks = target.__zone_symbol__loadfalse;
                                if (loadTasks && loadTasks.length > 0) {
                                    var oriInvoke_1 = task.invoke;
                                    task.invoke = function() {
                                        for (
                                        // need to load the tasks again, because in other
                                        // load listener, they may remove themselves
                                        var loadTasks = target.__zone_symbol__loadfalse, i = 0; i < loadTasks.length; i++) loadTasks[i] === task && loadTasks.splice(i, 1);
                                        data.aborted || task.state !== SCHEDULED || oriInvoke_1.call(task);
                                    }, loadTasks.push(task);
                                } else task.invoke();
                            } else data.aborted || !1 !== target[XHR_SCHEDULED] || (
                            // error occurs when xhr.send()
                            target[XHR_ERROR_BEFORE_SCHEDULED] = !0);
                        };
                        return oriAddListener.call(target, READY_STATE_CHANGE, newListener), target[XHR_TASK] || (target[XHR_TASK] = task), 
                        sendNative.apply(target, data.args), target[XHR_SCHEDULED] = !0, task;
                    }
                    function placeholderCallback() {}
                    function clearTask(task) {
                        var data = task.data;
                        // Note - ideally, we would call data.target.removeEventListener here, but it's too late
                        // to prevent it from firing. So instead, we store info for the event listener.
                                                return data.aborted = !0, abortNative.apply(data.target, data.args);
                    }
                    var openNative = patchMethod(XMLHttpRequestPrototype, "open", function() {
                        return function(self, args) {
                            return self[XHR_SYNC] = 0 == args[2], self[XHR_URL] = args[1], openNative.apply(self, args);
                        };
                    }), fetchTaskAborting = zoneSymbol("fetchTaskAborting"), fetchTaskScheduling = zoneSymbol("fetchTaskScheduling"), sendNative = patchMethod(XMLHttpRequestPrototype, "send", function() {
                        return function(self, args) {
                            if (!0 === Zone.current[fetchTaskScheduling]) 
                            // a fetch is scheduling, so we are using xhr to polyfill fetch
                            // and because we already schedule macroTask for fetch, we should
                            // not schedule a macroTask for xhr again
                            return sendNative.apply(self, args);
                            if (self[XHR_SYNC]) 
                            // if the XHR is sync there is no task to schedule, just execute the code.
                            return sendNative.apply(self, args);
                            var options = {
                                target: self,
                                url: self[XHR_URL],
                                isPeriodic: !1,
                                args: args,
                                aborted: !1
                            }, task = scheduleMacroTaskWithCurrentZone("XMLHttpRequest.send", placeholderCallback, options, scheduleTask, clearTask);
                            self && !0 === self[XHR_ERROR_BEFORE_SCHEDULED] && !options.aborted && task.state === SCHEDULED && 
                            // xhr request throw error when send
                            // we should invoke task instead of leaving a scheduled
                            // pending macroTask
                            task.invoke();
                        };
                    }), abortNative = patchMethod(XMLHttpRequestPrototype, "abort", function() {
                        return function(self, args) {
                            var task = self[XHR_TASK];
                            if (task && "string" == typeof task.type) {
                                // If the XHR has already completed, do nothing.
                                // If the XHR has already been aborted, do nothing.
                                // Fix #569, call abort multiple times before done will cause
                                // macroTask task count be negative number
                                if (null == task.cancelFn || task.data && task.data.aborted) return;
                                task.zone.cancelTask(task);
                            } else if (!0 === Zone.current[fetchTaskAborting]) 
                            // the abort is called from fetch polyfill, we need to call native abort of XHR.
                            return abortNative.apply(self, args);
                            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
                            // task
                            // to cancel. Do nothing.
                                                };
                    });
                }();
                var XHR_TASK = zoneSymbol("xhrTask"), XHR_SYNC = zoneSymbol("xhrSync"), XHR_LISTENER = zoneSymbol("xhrListener"), XHR_SCHEDULED = zoneSymbol("xhrScheduled"), XHR_URL = zoneSymbol("xhrURL"), XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol("xhrErrorBeforeScheduled");
            }), Zone.__load_patch("geolocation", function(global) {
                /// GEO_LOCATION
                global.navigator && global.navigator.geolocation && function(prototype, fnNames) {
                    for (var source = prototype.constructor.name, _loop_1 = function(i) {
                        var name_1 = fnNames[i], delegate = prototype[name_1];
                        if (delegate) {
                            if (!isPropertyWritable(ObjectGetOwnPropertyDescriptor(prototype, name_1))) return "continue";
                            prototype[name_1] = function(delegate) {
                                var patched = function() {
                                    return delegate.apply(this, bindArguments(arguments, source + "." + name_1));
                                };
                                return attachOriginToPatched(patched, delegate), patched;
                            }(delegate);
                        }
                    }, i = 0; i < fnNames.length; i++) _loop_1(i);
                }(global.navigator.geolocation, [ "getCurrentPosition", "watchPosition" ]);
            }), Zone.__load_patch("PromiseRejectionEvent", function(global, Zone) {
                // handle unhandled promise rejection
                function findPromiseRejectionHandler(evtName) {
                    return function(e) {
                        findEventTasks(global, evtName).forEach(function(eventTask) {
                            // windows has added unhandledrejection event listener
                            // trigger the event listener
                            var PromiseRejectionEvent = global.PromiseRejectionEvent;
                            if (PromiseRejectionEvent) {
                                var evt = new PromiseRejectionEvent(evtName, {
                                    promise: e.promise,
                                    reason: e.rejection
                                });
                                eventTask.invoke(evt);
                            }
                        });
                    };
                }
                global.PromiseRejectionEvent && (Zone[zoneSymbol("unhandledPromiseRejectionHandler")] = findPromiseRejectionHandler("unhandledrejection"), 
                Zone[zoneSymbol("rejectionHandledHandler")] = findPromiseRejectionHandler("rejectionhandled"));
            });
        }();
    },
    /***/ 2: 
    /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__("hN/g");
        /***/    },
    /***/ "hN/g": 
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__("0TWp");
    }
}, [ [ 2, 0 ] ] ]);
//# sourceMappingURL=polyfills.5dfe8c8815c5edfba596.js.map