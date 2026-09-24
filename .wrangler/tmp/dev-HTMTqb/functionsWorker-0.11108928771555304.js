var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/pages-n6K4pR/functionsWorker-0.11108928771555304.mjs
import { Writable } from "node:stream";
import { EventEmitter } from "node:events";
var __defProp2 = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
var __esm = /* @__PURE__ */ __name((fn, res, err) => /* @__PURE__ */ __name(function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
}, "__init"), "__esm");
var __export = /* @__PURE__ */ __name((target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
}, "__export");
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name2(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
__name(notImplemented, "notImplemented");
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
__name(notImplementedClass, "notImplementedClass");
var init_utils = __esm({
  "../node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name2(createNotImplementedError, "createNotImplementedError");
    __name2(notImplemented, "notImplemented");
    __name2(notImplementedClass, "notImplementedClass");
  }
});
var _timeOrigin;
var _performanceNow;
var nodeTiming;
var PerformanceEntry;
var PerformanceMark;
var PerformanceMeasure;
var PerformanceResourceTiming;
var PerformanceObserverEntryList;
var Performance;
var PerformanceObserver;
var performance;
var init_performance = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      static {
        __name2(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark2");
      }
      static {
        __name2(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      static {
        __name2(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      static {
        __name2(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      static {
        __name2(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      static {
        __name2(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw /* @__PURE__ */ createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw /* @__PURE__ */ createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw /* @__PURE__ */ createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw /* @__PURE__ */ createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      static {
        __name2(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw /* @__PURE__ */ createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw /* @__PURE__ */ createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});
var init_perf_hooks = __esm({
  "../node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});
var init_performance2 = __esm({
  "../node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    if (!("__unenv__" in performance)) {
      const proto = Performance.prototype;
      for (const key of Object.getOwnPropertyNames(proto)) {
        if (key !== "constructor" && !(key in performance)) {
          const desc = Object.getOwnPropertyDescriptor(proto, key);
          if (desc) {
            Object.defineProperty(performance, key, desc);
          }
        }
      }
    }
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});
var noop_default;
var init_noop = __esm({
  "../node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});
var _console;
var _ignoreErrors;
var _stderr;
var _stdout;
var log;
var info;
var trace;
var debug;
var table;
var error;
var warn;
var createTask;
var clear;
var count;
var countReset;
var dir;
var dirxml;
var group;
var groupEnd;
var groupCollapsed;
var profile;
var profileEnd;
var time;
var timeEnd;
var timeLog;
var timeStamp;
var Console;
var _times;
var _stdoutErrorHandler;
var _stderrErrorHandler;
var init_console = __esm({
  "../node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});
var workerdConsole;
var assert;
var clear2;
var context;
var count2;
var countReset2;
var createTask2;
var debug2;
var dir2;
var dirxml2;
var error2;
var group2;
var groupCollapsed2;
var groupEnd2;
var info2;
var log2;
var profile2;
var profileEnd2;
var table2;
var time2;
var timeEnd2;
var timeLog2;
var timeStamp2;
var trace2;
var warn2;
var console_default;
var init_console2 = __esm({
  "../node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "../node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});
var hrtime;
var init_hrtime = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name2(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime2"), "hrtime"), { bigint: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint"), "bigint") });
  }
});
var ReadStream;
var init_read_stream = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      static {
        __name2(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});
var WriteStream;
var init_write_stream = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      static {
        __name2(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});
var init_tty = __esm({
  "../node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});
var NODE_VERSION;
var init_node_version = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});
var Process;
var init_process = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "_Process");
      }
      static {
        __name2(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw /* @__PURE__ */ createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw /* @__PURE__ */ createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw /* @__PURE__ */ createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw /* @__PURE__ */ createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw /* @__PURE__ */ createNotImplementedError("process.kill");
      }
      abort() {
        throw /* @__PURE__ */ createNotImplementedError("process.abort");
      }
      dlopen() {
        throw /* @__PURE__ */ createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw /* @__PURE__ */ createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw /* @__PURE__ */ createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw /* @__PURE__ */ createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw /* @__PURE__ */ createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw /* @__PURE__ */ createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw /* @__PURE__ */ createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw /* @__PURE__ */ createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw /* @__PURE__ */ createNotImplementedError("process.openStdin");
      }
      assert() {
        throw /* @__PURE__ */ createNotImplementedError("process.assert");
      }
      binding() {
        throw /* @__PURE__ */ createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name2(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});
var globalProcess;
var getBuiltinModule;
var workerdProcess;
var unenvProcess;
var exit;
var features;
var platform;
var _channel;
var _debugEnd;
var _debugProcess;
var _disconnect;
var _events;
var _eventsCount;
var _exiting;
var _fatalException;
var _getActiveHandles;
var _getActiveRequests;
var _handleQueue;
var _kill;
var _linkedBinding;
var _maxListeners;
var _pendingMessage;
var _preload_modules;
var _rawDebug;
var _send;
var _startProfilerIdleNotifier;
var _stopProfilerIdleNotifier;
var _tickCallback;
var abort;
var addListener;
var allowedNodeEnvironmentFlags;
var arch;
var argv;
var argv0;
var assert2;
var availableMemory;
var binding;
var channel;
var chdir;
var config;
var connected;
var constrainedMemory;
var cpuUsage;
var cwd;
var debugPort;
var disconnect;
var dlopen;
var domain;
var emit;
var emitWarning;
var env;
var eventNames;
var execArgv;
var execPath;
var exitCode;
var finalization;
var getActiveResourcesInfo;
var getegid;
var geteuid;
var getgid;
var getgroups;
var getMaxListeners;
var getuid;
var hasUncaughtExceptionCaptureCallback;
var hrtime3;
var initgroups;
var kill;
var listenerCount;
var listeners;
var loadEnvFile;
var mainModule;
var memoryUsage;
var moduleLoadList;
var nextTick;
var off;
var on;
var once;
var openStdin;
var permission;
var pid;
var ppid;
var prependListener;
var prependOnceListener;
var rawListeners;
var reallyExit;
var ref;
var release;
var removeAllListeners;
var removeListener;
var report;
var resourceUsage;
var send;
var setegid;
var seteuid;
var setgid;
var setgroups;
var setMaxListeners;
var setSourceMapsEnabled;
var setuid;
var setUncaughtExceptionCaptureCallback;
var sourceMapsEnabled;
var stderr;
var stdin;
var stdout;
var throwDeprecation;
var title;
var traceDeprecation;
var umask;
var unref;
var uptime;
var version;
var versions;
var _process;
var process_default;
var init_process2 = __esm({
  "../node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      _channel,
      _debugEnd,
      _debugProcess,
      _disconnect,
      _events,
      _eventsCount,
      _exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _handleQueue,
      _kill,
      _linkedBinding,
      _maxListeners,
      _pendingMessage,
      _preload_modules,
      _rawDebug,
      _send,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert: assert2,
      availableMemory,
      binding,
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      disconnect,
      dlopen,
      domain,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime: hrtime3,
      initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      mainModule,
      memoryUsage,
      moduleLoadList,
      nextTick,
      off,
      on,
      once,
      openStdin,
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit,
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "../node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});
var seedPages;
var init_seed_data = __esm({
  "_lib/seed-data.js"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    seedPages = [{ "file": "index.html", "slug": "index", "locale": "zh", "kind": "page", "nav": 1, "navLabel": "\u9996\u9801", "pair": "index-en", "sort": 1, "title": "\u5C08\u6CE8\u5BE6\u7528\u5DE5\u5177\u958B\u767C \u6253\u9020\u7D14\u7CB9\u3001\u96B1\u79C1\u512A\u5148\u7684\u7368\u7ACB App", "metaTitle": "Loopvity - \u7368\u7ACB App \u8EDF\u9AD4\u5DE5\u4F5C\u5BA4 | \u5BE6\u7528\u5DE5\u5177\u7814\u767C", "metaDescription": "Loopvity \u662F\u4E00\u5BB6\u7368\u7ACB\u8EDF\u9AD4\u5DE5\u4F5C\u5BA4\uFF0C\u5C08\u6CE8\u65BC iOS \u8207 Android \u5BE6\u7528\u5DE5\u5177\u7814\u767C\uFF0C\u5805\u6301 100% \u96E2\u7DDA\u904B\u884C\u8207\u96B1\u79C1\u4FDD\u8B77\u3002\u9996\u6B3E\u65D7\u8266\u5DE5\u5177 Prompt Vault \u5373\u5C07\u4E0A\u67B6\u3002", "mainClass": "flex-1", "content": '<!-- Hero \u5340\u584A -->\r\n        <section class="max-w-5xl mx-auto px-6 pt-14 md:pt-12 pb-16 text-center flex flex-col items-center">\r\n            <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">\r\n                Independent App Studio \xB7 Hong Kong\r\n            </div>\r\n            <h1 class="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 leading-tight sm:leading-snug">\r\n                \u5C08\u6CE8\u5BE6\u7528\u5DE5\u5177\u958B\u767C <br class="hidden sm:block">\r\n                <span class="gradient-brand mt-2 inline-block">\u6253\u9020\u7D14\u7CB9\u3001\u96B1\u79C1\u512A\u5148\u7684\u7368\u7ACB App</span>\r\n            </h1>\r\n            <p class="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-normal">\r\n                Loopvity \u662F\u4E00\u5BB6\u5C08\u6CE8\u65BC\u7814\u767C\u884C\u52D5\u61C9\u7528\u8207\u6548\u7387\u5DE5\u5177\u7684\u7368\u7ACB\u5DE5\u4F5C\u5BA4\u3002\u6211\u5011\u5805\u6301\u4EE5\u4EBA\u70BA\u672C\u7684\u6975\u7C21\u8A2D\u8A08\u8207 100% \u96E2\u7DDA\u6578\u64DA\u5B89\u5168\u67B6\u69CB\u3002\r\n            </p>\r\n            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">\r\n                <a href="cases.html" class="w-full sm:w-auto flex-1 bg-white text-gray-950 px-8 py-3.5 rounded-full font-bold hover:bg-gray-200 transition text-center shadow-lg">\u63A2\u7D22\u7522\u54C1</a>\r\n                <a href="contact.html" class="w-full sm:w-auto flex-1 bg-zinc-900 border border-zinc-700 text-white px-8 py-3.5 rounded-full font-bold hover:bg-zinc-800 transition text-center">\u806F\u7D61\u6211\u5011</a>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- \u771F\u5BE6\u6838\u5FC3\u6307\u6A19 -->\r\n        <section class="max-w-6xl mx-auto px-6 py-10 border-y border-zinc-800/50 my-6 bg-gradient-to-r from-transparent via-zinc-900/30 to-transparent">\r\n            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">\r\n                <div>\r\n                    <div class="text-3xl font-black text-cyan-400 mb-1">100%</div>\r\n                    <div class="text-xs text-gray-500 font-bold uppercase tracking-wider">\u96E2\u7DDA\u904B\u884C\u67B6\u69CB</div>\r\n                </div>\r\n                <div>\r\n                    <div class="text-3xl font-black text-cyan-400 mb-1">0%</div>\r\n                    <div class="text-xs text-gray-500 font-bold uppercase tracking-wider">\u6578\u64DA\u8FFD\u8E64\u8207\u4E0A\u50B3</div>\r\n                </div>\r\n                <div>\r\n                    <div class="text-3xl font-black text-cyan-400 mb-1">Dual</div>\r\n                    <div class="text-xs text-gray-500 font-bold uppercase tracking-wider">iOS \u8207 Android \u652F\u63F4</div>\r\n                </div>\r\n                <div>\r\n                    <div class="text-3xl font-black text-cyan-400 mb-1">Local</div>\r\n                    <div class="text-xs text-gray-500 font-bold uppercase tracking-wider">\u6578\u64DA\u5B8C\u5168\u81EA\u4E3B\u638C\u63A7</div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- \u65D7\u8266\u61C9\u7528\u5C55\u793A\uFF1APrompt Vault -->\r\n        <section class="max-w-6xl mx-auto px-6 py-16">\r\n            <div class="text-center mb-12">\r\n                <h2 class="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Our Product</h2>\r\n                <h3 class="text-3xl sm:text-4xl font-black">\u65D7\u8266\u7522\u54C1\u5C55\u793A</h3>\r\n            </div>\r\n\r\n            <div class="card-glass rounded-3xl border border-zinc-800 p-8 md:p-12 overflow-hidden relative">\r\n                <div class="flex flex-col lg:flex-row gap-10 items-center justify-between">\r\n                    <div class="w-full lg:w-3/5">\r\n                        <div class="flex items-center gap-3 mb-4">\r\n                            <span class="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full uppercase tracking-wider">iOS &amp; Android \u96D9\u5E73\u53F0</span>\r\n                            <span class="text-xs text-yellow-400 font-bold bg-yellow-400/10 px-3 py-1 rounded-full animate-pulse">\u5373\u5C07\u4E0A\u67B6 Coming Soon</span>\r\n                        </div>\r\n                        <h4 class="text-3xl sm:text-4xl font-black text-white mb-4 flex items-center gap-3">\r\n                            <span class="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg">\u26A1\uFE0F</span>\r\n                            Prompt Vault \u63D0\u793A\u8A5E\u6536\u7D0D\u5EAB\r\n                        </h4>\r\n                        <p class="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">\r\n                            \u5C08\u70BA\u983B\u7E41\u4F7F\u7528 ChatGPT\u3001Claude\u3001Midjourney \u7B49 AI \u5DE5\u5177\u7684\u5275\u4F5C\u8005\u8A2D\u8A08\u3002\u89E3\u6C7A\u6307\u4EE4\u6A21\u677F\u6563\u4E82\u3001\u983B\u7E41\u624B\u52D5\u4FEE\u6539\u8B8A\u6578\u7B49\u75DB\u9EDE\u3002\u652F\u63F4\u624B\u52E2\u6975\u901F\u8907\u88FD\u3001\u52D5\u614B\u8B8A\u6578\u5408\u6210\u8207 15 \u6B21\u4FEE\u6539\u6B77\u53F2\u9084\u539F\uFF0C100% \u96E2\u7DDA\u4FDD\u8B77\u96B1\u79C1\u3002\r\n                        </p>\r\n                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-xs text-gray-300 mb-8">\r\n                            <div class="bg-zinc-900/80 px-3 py-2.5 rounded-xl border border-zinc-800 text-center font-semibold whitespace-nowrap">\u96D9\u64CA\u6975\u901F\u8907\u88FD</div>\r\n                            <div class="bg-zinc-900/80 px-3 py-2.5 rounded-xl border border-zinc-800 text-center font-semibold whitespace-nowrap">\u52D5\u614B\u8B8A\u6578\u5373\u6642\u5408\u6210</div>\r\n                            <div class="bg-zinc-900/80 px-3 py-2.5 rounded-xl border border-zinc-800 text-center font-semibold whitespace-nowrap">\u55AE\u9375 JSON \u532F\u51FA\u5099\u4EFD</div>\r\n                        </div>\r\n                        <div class="flex flex-wrap gap-4 items-center">\r\n                            <a href="cases.html" class="bg-white text-gray-950 px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition shadow-lg">\u63A2\u7D22\u7522\u54C1\u8A73\u60C5</a>\r\n                            <span class="text-xs text-gray-500 font-mono">App Store &amp; Google Play \u5373\u5C07\u958B\u653E\u4E0B\u8F09</span>\r\n                        </div>\r\n                    </div>\r\n                    <!-- \u9810\u544A\u5361\u7247 -->\r\n                    <div class="w-full lg:w-2/5 flex flex-col items-center justify-center bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800/80 text-center">\r\n                        <div class="text-6xl mb-4">\u{1F4F1}</div>\r\n                        <div class="text-lg font-black text-white mb-2">\u958B\u767C\u5C31\u7DD2 \xB7 \u4E0A\u67B6\u6E96\u5099\u4E2D</div>\r\n                        <p class="text-xs text-gray-400 mb-6 leading-relaxed">\u9996\u6B3E\u7368\u7ACB\u61C9\u7528\u5373\u5C07\u767C\u5E03\uFF0C\u672A\u4F86\u5C07\u6301\u7E8C\u6253\u9020\u591A\u5143\u5BE6\u7528\u5DE5\u5177\u3002</p>\r\n                        <div class="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">\r\n                            <span>\u{1F680} \u66F4\u591A App \u7C4C\u5099\u4E2D</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- \u7814\u767C\u539F\u5247 -->\r\n        <section class="max-w-6xl mx-auto px-6 py-16">\r\n            <div class="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12">\r\n                <div class="text-center mb-10">\r\n                    <h3 class="text-2xl sm:text-3xl font-black text-white">\u6211\u5011\u7684\u7522\u54C1\u7814\u767C\u539F\u5247</h3>\r\n                    <p class="text-gray-400 text-sm mt-3">\u5C08\u6CE8\u6253\u9020\u503C\u5F97\u7528\u6236\u4FE1\u8CF4\u8207\u9577\u671F\u4F7F\u7528\u7684\u5DE5\u5177\u8EDF\u9AD4\u3002</p>\r\n                </div>\r\n                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">\r\n                    <div class="flex flex-col items-center text-center">\r\n                        <div class="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-inner">\u{1F512}</div>\r\n                        <h4 class="font-bold text-white mb-2">\u96E2\u7DDA\u5B89\u5168\u8207\u96B1\u79C1\u7B2C\u4E00</h4>\r\n                        <p class="text-sm text-gray-400 leading-relaxed">\u7D55\u4E0D\u6536\u96C6\u6216\u8F49\u79FB\u7528\u6236\u96B1\u79C1\u3002\u6240\u6709\u6578\u64DA\u5B58\u653E\u5728\u624B\u6A5F\u672C\u5730\uFF0C\u7D66\u7528\u6236\u6700\u9AD8\u7D1A\u5225\u7684\u638C\u63A7\u611F\u3002</p>\r\n                    </div>\r\n                    <div class="flex flex-col items-center text-center">\r\n                        <div class="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-inner">\u26A1\uFE0F</div>\r\n                        <h4 class="font-bold text-white mb-2">\u76F4\u89C0\u6D41\u66A2\u7684\u64CD\u4F5C\u9AD4\u9A57</h4>\r\n                        <p class="text-sm text-gray-400 leading-relaxed">\u62CB\u68C4\u7E41\u7463\u591A\u9918\u7684\u8A2D\u5B9A\uFF0C\u5C08\u6CE8\u6838\u5FC3\u4EFB\u52D9\u7684\u76F4\u89BA\u4EA4\u4E92\uFF0C\u8B93\u5DE5\u5177\u771F\u6B63\u70BA\u6548\u7387\u670D\u52D9\u3002</p>\r\n                    </div>\r\n                    <div class="flex flex-col items-center text-center">\r\n                        <div class="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center text-2xl mb-4 shadow-inner">\u{1F48E}</div>\r\n                        <h4 class="font-bold text-white mb-2">\u900F\u660E\u5408\u7406\u7684\u5B9A\u50F9\u6A21\u5F0F</h4>\r\n                        <p class="text-sm text-gray-400 leading-relaxed">\u672A\u4F86\u4ED8\u8CBB App \u6216\u589E\u503C\u529F\u80FD\u5747\u5805\u6301\u6E05\u6670\u900F\u660E\u7684\u5B9A\u50F9\u539F\u5247\uFF0C\u63D0\u4F9B\u6301\u7E8C\u7A69\u5B9A\u7684\u66F4\u65B0\u7DAD\u8B77\u3002</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- \u6700\u65B0 Blog \u9810\u89BD -->\r\n        <section class="max-w-6xl mx-auto px-6 py-16">\r\n            <div class="flex justify-between items-end mb-10">\r\n                <div>\r\n                    <h2 class="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Blog Posts</h2>\r\n                    <h3 class="text-3xl font-black">\u6700\u65B0\u6280\u8853\u8207\u7522\u54C1\u65E5\u8A8C</h3>\r\n                </div>\r\n                <a href="blog.html" class="hidden sm:inline-block text-sm font-bold text-gray-400 hover:text-white transition">\u67E5\u770B\u5168\u90E8\u6587\u7AE0 \u2192</a>\r\n            </div>\r\n\r\n            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">\n<!--CMS_HOME_POSTS-->\n</div>\n</section>', "excerpt": "Loopvity \u662F\u4E00\u5BB6\u5C08\u6CE8\u65BC\u7814\u767C\u884C\u52D5\u61C9\u7528\u8207\u6548\u7387\u5DE5\u5177\u7684\u7368\u7ACB\u5DE5\u4F5C\u5BA4\u3002\u6211\u5011\u5805\u6301\u4EE5\u4EBA\u70BA\u672C\u7684\u6975\u7C21\u8A2D\u8A08\u8207 100% \u96E2\u7DDA\u6578\u64DA\u5B89\u5168\u67B6\u69CB\u3002", "cover": "\u5C08\u6CE8\u5BE6\u7528\u5DE5\u5177\u958B\u767C" }, { "file": "index-en.html", "slug": "index-en", "locale": "en", "kind": "page", "nav": 1, "navLabel": "Home", "pair": "index", "sort": 1, "title": "Crafting Practical Utilities Privacy-First Independent Apps", "metaTitle": "Loopvity - Independent App Studio | Pragmatic Utility Tools", "metaDescription": "Loopvity is an independent software studio building practical mobile apps for iOS and Android, dedicated to offline-first architectures and privacy.", "mainClass": "flex-1", "content": '<!-- Hero Section -->\r\n        <section class="max-w-5xl mx-auto px-6 pt-14 md:pt-12 pb-16 text-center flex flex-col items-center">\r\n            <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">\r\n                Independent App Studio \xB7 iOS &amp; Android\r\n            </div>\r\n            <h1 class="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 leading-tight sm:leading-snug">\r\n                Crafting Practical Utilities <br class="hidden sm:block">\r\n                <span class="gradient-brand mt-2 inline-block">Privacy-First Independent Apps</span>\r\n            </h1>\r\n            <p class="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-normal">\r\n                Loopvity is an independent software studio focused on ergonomic mobile utilities. We design with simplicity, minimal overhead, and strict 100% offline data integrity.\r\n            </p>\r\n            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">\r\n                <a href="cases-en.html" class="w-full sm:w-auto flex-1 bg-white text-gray-950 px-8 py-3.5 rounded-full font-bold hover:bg-gray-200 transition text-center shadow-lg">Explore Products</a>\r\n                <a href="contact-en.html" class="w-full sm:w-auto flex-1 bg-zinc-900 border border-zinc-700 text-white px-8 py-3.5 rounded-full font-bold hover:bg-zinc-800 transition text-center">Contact Us</a>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Real Core Metrics -->\r\n        <section class="max-w-6xl mx-auto px-6 py-10 border-y border-zinc-800/50 my-6 bg-gradient-to-r from-transparent via-zinc-900/30 to-transparent">\r\n            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">\r\n                <div>\r\n                    <div class="text-3xl font-black text-cyan-400 mb-1">100%</div>\r\n                    <div class="text-xs text-gray-500 font-bold uppercase tracking-wider">Offline Architecture</div>\r\n                </div>\r\n                <div>\r\n                    <div class="text-3xl font-black text-cyan-400 mb-1">0%</div>\r\n                    <div class="text-xs text-gray-500 font-bold uppercase tracking-wider">Telemetry &amp; Tracking</div>\r\n                </div>\r\n                <div>\r\n                    <div class="text-3xl font-black text-cyan-400 mb-1">Dual</div>\r\n                    <div class="text-xs text-gray-500 font-bold uppercase tracking-wider">iOS &amp; Android</div>\r\n                </div>\r\n                <div>\r\n                    <div class="text-3xl font-black text-cyan-400 mb-1">Local</div>\r\n                    <div class="text-xs text-gray-500 font-bold uppercase tracking-wider">Autonomous Storage</div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Flagship Product: Prompt Vault -->\r\n        <section class="max-w-6xl mx-auto px-6 py-16">\r\n            <div class="text-center mb-12">\r\n                <h2 class="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Our Product</h2>\r\n                <h3 class="text-3xl sm:text-4xl font-black">Flagship Application</h3>\r\n            </div>\r\n\r\n            <div class="card-glass rounded-3xl border border-zinc-800 p-8 md:p-12 overflow-hidden relative">\r\n                <div class="flex flex-col lg:flex-row gap-10 items-center justify-between">\r\n                    <div class="w-full lg:w-3/5">\r\n                        <div class="flex items-center gap-3 mb-4">\r\n                            <span class="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full uppercase tracking-wider">iOS &amp; Android</span>\r\n                            <span class="text-xs text-yellow-400 font-bold bg-yellow-400/10 px-3 py-1 rounded-full animate-pulse">Coming Soon</span>\r\n                        </div>\r\n                        <h4 class="text-3xl sm:text-4xl font-black text-white mb-4 flex items-center gap-3">\r\n                            <span class="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg">\u26A1\uFE0F</span>\r\n                            Prompt Vault\r\n                        </h4>\r\n                        <p class="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">\r\n                            A dedicated offline prompt repository designed for heavy generative AI users (ChatGPT, Claude, Midjourney). Solves scattered note templates and tedious variable tweaks. Features fast gesture copying, live variable synthesis, and 15 revision logs.\r\n                        </p>\r\n                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-xs text-gray-300 mb-8">\r\n                            <div class="bg-zinc-900/80 px-3 py-2.5 rounded-xl border border-zinc-800 text-center font-semibold whitespace-nowrap">Double-Tap Copy</div>\r\n                            <div class="bg-zinc-900/80 px-3 py-2.5 rounded-xl border border-zinc-800 text-center font-semibold whitespace-nowrap">Dynamic Variables</div>\r\n                            <div class="bg-zinc-900/80 px-3 py-2.5 rounded-xl border border-zinc-800 text-center font-semibold whitespace-nowrap">One-Click JSON Export</div>\r\n                        </div>\r\n                        <div class="flex flex-wrap gap-4 items-center">\r\n                            <a href="cases-en.html" class="bg-white text-gray-950 px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition shadow-lg">Explore Features</a>\r\n                            <span class="text-xs text-gray-500 font-mono">Releasing soon on App Store &amp; Google Play</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class="w-full lg:w-2/5 flex flex-col items-center justify-center bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800/80 text-center">\r\n                        <div class="text-6xl mb-4">\u{1F4F1}</div>\r\n                        <div class="text-lg font-black text-white mb-2">Development Complete</div>\r\n                        <p class="text-xs text-gray-400 mb-6 leading-relaxed">Undergoing final store validation on Apple App Store &amp; Google Play. More standalone tools are currently being drafted.</p>\r\n                        <div class="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">\r\n                            <span>\u{1F680} More Tools In Progress</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Studio Principles -->\r\n        <section class="max-w-6xl mx-auto px-6 py-16">\r\n            <div class="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12">\r\n                <div class="text-center mb-10">\r\n                    <h3 class="text-2xl sm:text-3xl font-black text-white">Our Product Principles</h3>\r\n                    <p class="text-gray-400 text-sm mt-3">Dedicated to shipping tools worthy of long-term user trust.</p>\r\n                </div>\r\n                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">\r\n                    <div class="flex flex-col items-center text-center">\r\n                        <div class="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-inner">\u{1F512}</div>\r\n                        <h4 class="font-bold text-white mb-2">Offline-First &amp; Privacy</h4>\r\n                        <p class="text-sm text-gray-400 leading-relaxed">No data transmission. All content remains strictly inside your device sandbox, guaranteeing complete autonomy.</p>\r\n                    </div>\r\n                    <div class="flex flex-col items-center text-center">\r\n                        <div class="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-inner">\u26A1\uFE0F</div>\r\n                        <h4 class="font-bold text-white mb-2">Ergonomic Workflow</h4>\r\n                        <p class="text-sm text-gray-400 leading-relaxed">Eliminating bloat to focus on high-efficiency micro-interactions that accelerate your daily routines.</p>\r\n                    </div>\r\n                    <div class="flex flex-col items-center text-center">\r\n                        <div class="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center text-2xl mb-4 shadow-inner">\u{1F48E}</div>\r\n                        <h4 class="font-bold text-white mb-2">Transparent Pricing</h4>\r\n                        <p class="text-sm text-gray-400 leading-relaxed">Future paid software or premium tiers will maintain crystal clear pricing, free from hidden telemetry.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Blog Posts Preview -->\r\n        <section class="max-w-6xl mx-auto px-6 py-16">\r\n            <div class="flex justify-between items-end mb-10">\r\n                <div>\r\n                    <h2 class="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Blog Posts</h2>\r\n                    <h3 class="text-3xl font-black">Latest Insights &amp; Logs</h3>\r\n                </div>\r\n                <a href="blog-en.html" class="hidden sm:inline-block text-sm font-bold text-gray-400 hover:text-white transition">View All Notes \u2192</a>\r\n            </div>\r\n\r\n            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">\n<!--CMS_HOME_POSTS-->\n</div>\n</section>', "excerpt": "Loopvity is an independent software studio focused on ergonomic mobile utilities. We design with simplicity, minimal overhead, and strict 100% offline data integrity.", "cover": "Crafting" }, { "file": "cases.html", "slug": "cases", "locale": "zh", "kind": "page", "nav": 1, "navLabel": "\u7522\u54C1", "pair": "cases-en", "sort": 2, "title": "\u8EDF\u9AD4\u7522\u54C1 \u5C08\u6CE8\u5BE6\u7528\u3001\u96E2\u7DDA\u512A\u5148\u7684\u7368\u7ACB App", "metaTitle": "\u7522\u54C1 | Loopvity Products", "metaDescription": "\u700F\u89BD Loopvity \u7814\u767C\u7684\u5BE6\u7528\u5DE5\u5177\u8207\u7368\u7ACB App\u3002\u6DF1\u5165\u4E86\u89E3 Prompt Vault \u63D0\u793A\u8A5E\u6536\u7D0D\u5EAB\u7684\u529F\u80FD\u67B6\u69CB\u3001\u96E2\u7DDA\u5B89\u5168\u7279\u6027\u8207\u6700\u65B0\u767C\u5E03\u8CC7\u8A0A\u3002", "mainClass": "flex-1 max-w-5xl mx-auto px-6 pt-14 md:pt-12 pb-20 w-full", "content": '<!-- \u9802\u90E8\u6A19\u984C\u5340\u584A -->\r\n        <div class="text-center mb-16">\r\n            <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">\r\n                Software Products\r\n            </div>\r\n            <h1 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-8 leading-tight sm:leading-snug">\r\n                \u8EDF\u9AD4\u7522\u54C1 <br class="hidden sm:block">\r\n                <span class="gradient-brand mt-2 inline-block">\u5C08\u6CE8\u5BE6\u7528\u3001\u96E2\u7DDA\u512A\u5148\u7684\u7368\u7ACB App</span>\r\n            </h1>\r\n            <p class="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">\r\n                \u6211\u5011\u81F4\u529B\u65BC\u5C07\u8907\u96DC\u7684\u65E5\u5E38\u5DE5\u4F5C\u6D41\u7A0B\u8F49\u5316\u70BA\u8F15\u5DE7\u3001\u76F4\u89C0\u7684\u884C\u52D5\u61C9\u7528\u3002\u5805\u6301\u672C\u5730\u5132\u5B58\u8207\u9AD8\u6548\u7387\u4EA4\u4E92\u3002\r\n            </p>\r\n        </div>\r\n\r\n        <!-- \u65D7\u8266\u7CBE\u9078\uFF1APrompt Vault -->\r\n        <section class="mb-20">\r\n            <div class="flex items-center justify-between mb-8">\r\n                <h2 class="text-2xl font-black text-white flex items-center gap-2">\r\n                    <span>\u26A1\uFE0F</span> \u6700\u65B0\u767C\u5E03\r\n                </h2>\r\n                <span class="text-xs text-yellow-400 font-bold bg-yellow-400/10 px-3 py-1 rounded-full animate-pulse">\u96D9\u5E73\u53F0\u5BE9\u6838\u4E2D \xB7 \u5373\u5C07\u4E0A\u67B6</span>\r\n            </div>\r\n\r\n            <div class="card-glass rounded-3xl overflow-hidden border border-zinc-800 p-8 md:p-12 shadow-2xl">\r\n                <div class="flex flex-col md:flex-row gap-10 items-center mb-10">\r\n                    <div class="w-full md:w-1/3 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 p-10 rounded-3xl flex flex-col items-center justify-center border border-zinc-800 text-7xl shadow-2xl">\r\n                        <span>\u26A1\uFE0F</span>\r\n                        <span class="text-xs font-mono font-bold text-cyan-400 mt-4 tracking-widest uppercase">Prompt Vault</span>\r\n                    </div>\r\n                    <div class="w-full md:w-2/3">\r\n                        <div class="flex items-center gap-2 mb-3">\r\n                            <span class="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full uppercase tracking-wider">Mobile App \xB7 iOS &amp; Android</span>\r\n                        </div>\r\n                        <h3 class="text-3xl font-black text-white mb-3">Prompt Vault \u63D0\u793A\u8A5E\u6536\u7D0D\u5EAB</h3>\r\n                        <p class="text-gray-400 text-sm leading-relaxed mb-6">\r\n                            \u70BA\u9AD8\u983B\u4F7F\u7528 ChatGPT\u3001Claude\u3001Midjourney \u7684\u5275\u4F5C\u8005\u8207\u5C08\u696D\u4EBA\u58EB\u8A2D\u8A08\u7684\u96E2\u7DDA\u63D0\u793A\u8A5E\u5DE5\u5177\u3002\u5FB9\u5E95\u544A\u5225\u6307\u4EE4\u6563\u843D\u5404\u8655\u7B46\u8A18\u7684\u56F0\u64FE\uFF0C\u63D0\u4F9B\u52D5\u614B\u8B8A\u6578\u5373\u6642\u66FF\u63DB\u3001\u96D9\u64CA\u5FEB\u901F\u8907\u88FD\u8207\u672C\u6A5F\u7248\u672C\u6B77\u53F2\u9084\u539F\u3002\r\n                        </p>\r\n                        \r\n                        <!-- \u6838\u5FC3\u7279\u6027\u6A19\u7C64 -->\r\n                        <div class="grid grid-cols-2 gap-3 text-xs text-gray-300 mb-6">\r\n                            <div class="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">\r\n                                <span class="font-bold text-white block mb-0.5">\u26A1\uFE0F \u5FEB\u6377\u624B\u52E2</span>\r\n                                \u55AE\u64CA\u5C55\u958B\u9810\u89BD\uFF0C\u96D9\u64CA\u6975\u901F\u8907\u88FD\u5B8C\u6574\u6307\u4EE4\u3002\r\n                            </div>\r\n                            <div class="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">\r\n                                <span class="font-bold text-white block mb-0.5">\u{1F9E9} \u8B8A\u6578\u52D5\u614B\u5408\u6210</span>\r\n                                \u81EA\u52D5\u63D0\u53D6\u8B8A\u6578\u62EC\u865F\uFF0C\u586B\u5BEB\u5373\u5B8C\u6210\u5BA2\u88FD\u63D0\u793A\u8A5E\u3002\r\n                            </div>\r\n                            <div class="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">\r\n                                <span class="font-bold text-white block mb-0.5">\u{1F4DC} 15 \u6B21\u4FEE\u6539\u6B77\u7A0B</span>\r\n                                \u672C\u5730\u81EA\u52D5\u4FDD\u7559 15 \u6B21\u4FEE\u6539\u7248\u672C\uFF0C\u96A8\u6642\u5FA9\u539F\u3002\r\n                            </div>\r\n                            <div class="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">\r\n                                <span class="font-bold text-white block mb-0.5">\u{1F512} 100% \u672C\u6A5F\u96E2\u7DDA</span>\r\n                                \u7121\u9808\u8A3B\u518A\u767B\u5165\uFF0C\u8CC7\u6599\u7D55\u4E0D\u96E2\u958B\u500B\u4EBA\u88DD\u7F6E\u3002\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- \u4E0B\u8F09\u8207\u901A\u9053 -->\r\n                        <div class="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:items-center">\r\n                            <span class="inline-flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-2.5 rounded-full font-bold text-xs cursor-default">\r\n                                \uF8FF App Store (\u5373\u5C07\u4E0A\u7DDA)\r\n                            </span>\r\n                            <span class="inline-flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-2.5 rounded-full font-bold text-xs cursor-default">\r\n                                Google Play (\u5373\u5C07\u4E0A\u7DDA)\r\n                            </span>\r\n                            <a href="contact.html?app=prompt-vault" class="inline-flex items-center justify-center text-xs font-bold text-cyan-400 hover:underline sm:ml-1 py-1">\r\n                                \u5C08\u5C6C\u554F\u984C\u652F\u63F4 \u2192\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Prompt Vault \u5C08\u5C6C FAQ -->\r\n                <div class="border-t border-zinc-800/80 pt-8">\r\n                    <h4 class="text-base font-bold text-white mb-4 flex items-center gap-2">\r\n                        <span>\u2753</span> Prompt Vault \u5E38\u898B\u554F\u984C\u89E3\u7B54 (FAQ)\r\n                    </h4>\r\n                    <div class="space-y-3">\r\n                        <details class="group bg-zinc-900/60 border border-zinc-800 rounded-xl">\r\n                            <summary class="flex items-start justify-between gap-3 font-bold text-sm text-gray-200 p-4 cursor-pointer outline-none">\r\n                                <span class="min-w-0 flex-1 leading-relaxed">1. Prompt Vault \u7684\u8CC7\u6599\u6703\u4E0A\u50B3\u5230\u4EFB\u4F55\u96F2\u7AEF\u55CE\uFF1F\u63DB\u624B\u6A5F\u80FD\u8F49\u79FB\u55CE\uFF1F</span>\r\n                                <span class="shrink-0 mt-0.5 inline-flex h-5 w-5 items-center justify-center text-cyan-400 text-xs leading-none transition group-open:rotate-180">\u25BC</span>\r\n                            </summary>\r\n                            <div class="text-gray-400 text-xs px-4 pb-4 leading-relaxed border-t border-zinc-800/40 pt-3">\r\n                                \u4E0D\u6703\u3002Prompt Vault \u5805\u6301 100% \u96E2\u7DDA\u904B\u884C\u67B6\u69CB\uFF0C\u7121\u5916\u90E8\u4F3A\u670D\u5668\u9023\u7DDA\uFF0C\u6240\u6709\u6578\u64DA\u5747\u50C5\u5132\u5B58\u65BC\u60A8\u7684\u624B\u6A5F\u6C99\u76D2\u5167\u3002\u66F4\u63DB\u624B\u6A5F\u6642\uFF0C\u53EA\u9700\u5728 App \u8A2D\u5B9A\u4E2D\u9EDE\u64CA\u300C\u532F\u51FA\u5099\u4EFD\u300D\u751F\u6210\u6A19\u6E96 JSON \u6A94\u6848\uFF0C\u50B3\u9001\u81F3\u65B0\u88DD\u7F6E\u5F8C\u9EDE\u64CA\u300C\u532F\u5165\u300D\u5373\u53EF\u5B8C\u6574\u5FA9\u539F\u3002\r\n                            </div>\r\n                        </details>\r\n\r\n                        <details class="group bg-zinc-900/60 border border-zinc-800 rounded-xl">\r\n                            <summary class="flex items-start justify-between gap-3 font-bold text-sm text-gray-200 p-4 cursor-pointer outline-none">\r\n                                <span class="min-w-0 flex-1 leading-relaxed">2. App \u662F\u5426\u9700\u8981\u7DB2\u8DEF\u9023\u7DDA\uFF1F\u5728\u98DB\u6A5F\u6216\u7121\u8A0A\u865F\u74B0\u5883\u4E0B\u80FD\u6B63\u5E38\u4F7F\u7528\u55CE\uFF1F</span>\r\n                                <span class="shrink-0 mt-0.5 inline-flex h-5 w-5 items-center justify-center text-cyan-400 text-xs leading-none transition group-open:rotate-180">\u25BC</span>\r\n                            </summary>\r\n                            <div class="text-gray-400 text-xs px-4 pb-4 leading-relaxed border-t border-zinc-800/40 pt-3">\r\n                                \u5B8C\u5168\u4E0D\u9700\u8981\u3002Prompt Vault \u662F\u7D14\u7CB9\u7684\u672C\u6A5F\u96E2\u7DDA\u61C9\u7528\uFF0C\u4E0D\u9700\u8981\u4EFB\u4F55\u7DB2\u8DEF\u6B0A\u9650\u3002\u7121\u8AD6\u5728\u98DB\u822A\u6A21\u5F0F\u3001\u5730\u9435\u6DF1\u8655\u6216\u4EFB\u4F55\u7121\u8A0A\u865F\u74B0\u5883\u4E0B\uFF0C\u6240\u6709\u5EFA\u7ACB\u3001\u6AA2\u7D22\u3001\u8B8A\u6578\u66FF\u63DB\u8207\u8907\u88FD\u529F\u80FD\u5747\u53EF\u6D41\u66A2\u4F7F\u7528\u3002\r\n                            </div>\r\n                        </details>\r\n\r\n                        <details class="group bg-zinc-900/60 border border-zinc-800 rounded-xl">\r\n                            <summary class="flex items-start justify-between gap-3 font-bold text-sm text-gray-200 p-4 cursor-pointer outline-none">\r\n                                <span class="min-w-0 flex-1 leading-relaxed">3. \u5982\u4F55\u4F7F\u7528\u52D5\u614B\u8B8A\u6578\u66FF\u63DB\u529F\u80FD\uFF1F\u8A9E\u6CD5\u683C\u5F0F\u662F\u4EC0\u9EBC\uFF1F</span>\r\n                                <span class="shrink-0 mt-0.5 inline-flex h-5 w-5 items-center justify-center text-cyan-400 text-xs leading-none transition group-open:rotate-180">\u25BC</span>\r\n                            </summary>\r\n                            <div class="text-gray-400 text-xs px-4 pb-4 leading-relaxed border-t border-zinc-800/40 pt-3">\r\n                                \u5728\u64B0\u5BEB\u63D0\u793A\u8A5E\u6642\uFF0C\u53EA\u9700\u4F7F\u7528\u5927\u62EC\u865F\u6A19\u8A3B\u8B8A\u6578\u540D\u7A31\uFF0C\u4F8B\u5982\uFF1A<code class="text-cyan-400 bg-zinc-800 px-1 py-0.5 rounded font-mono text-[11px]">\u8ACB\u5C07\u9019\u6BB5\u6587\u5B57\u7FFB\u8B6F\u70BA {\u8A9E\u8A00}\uFF0C\u98A8\u683C\u70BA {\u8A9E\u6C23}</code>\u3002\u5728\u9810\u89BD\u6642\uFF0CApp \u6703\u81EA\u52D5\u7522\u751F\u5C0D\u61C9\u7684\u8F38\u5165\u6846\uFF0C\u586B\u5165\u5167\u5BB9\u5373\u53EF\u5373\u6642\u5408\u6210\u5B8C\u6574\u7684\u6700\u7D42\u63D0\u793A\u8A5E\u3002\r\n                            </div>\r\n                        </details>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- \u9748\u6D3B\u61C9\u7528\u7522\u54C1\u77E9\u9663 (Product Matrix) - \u672A\u4F86\u53EF\u76F4\u63A5\u65B0\u589E\u591A\u6B3E App -->\r\n        <section class="mb-16">\r\n            <div class="mb-8">\r\n                <h2 class="text-2xl font-black text-white mb-2">\u61C9\u7528\u7522\u54C1\u77E9\u9663</h2>\r\n                <p class="text-gray-400 text-sm">\u6211\u5011\u6301\u7E8C\u63A2\u7D22\u4E26\u63A8\u51FA\u5C08\u6CE8\u65BC\u500B\u4EBA\u6548\u7387\u8207\u96B1\u79C1\u81F3\u4E0A\u7684\u7368\u7ACB\u5DE5\u5177\u3002</p>\r\n            </div>\r\n\r\n            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r\n                <!-- App 1: Prompt Vault \u5FEB\u901F\u5361\u7247 -->\r\n                <div class="card-glass p-7 rounded-2xl border border-zinc-800 flex flex-col justify-between">\r\n                    <div>\r\n                        <div class="flex justify-between items-center mb-4">\r\n                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl shadow">\u26A1\uFE0F</div>\r\n                            <span class="text-[11px] font-bold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full">iOS / Android</span>\r\n                        </div>\r\n                        <h3 class="text-xl font-bold text-white mb-2">Prompt Vault</h3>\r\n                        <p class="text-gray-400 text-xs leading-relaxed mb-6">\r\n                            \u96E2\u7DDA\u63D0\u793A\u8A5E\u6536\u7D0D\u8207\u5FEB\u901F\u8ABF\u7528\u5DE5\u5177\u3002\u652F\u63F4\u52D5\u614B\u8B8A\u6578\u5408\u6210\u3001\u96D9\u64CA\u5FEB\u6377\u8907\u88FD\u8207\u672C\u5730 JSON \u5099\u4EFD\u3002\r\n                        </p>\r\n                    </div>\r\n                    <div class="flex items-center justify-between pt-4 border-t border-zinc-800/60">\r\n                        <span class="text-xs text-yellow-400 font-bold">\u96D9\u5E73\u53F0\u5373\u5C07\u4E0A\u67B6</span>\r\n                        <a href="#top" class="text-xs text-gray-400 hover:text-white transition">\u67E5\u770B\u4E0A\u65B9\u8A73\u60C5 \u2191</a>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- \u9810\u7559\u901A\u9053\uFF1AApp 2 (\u672A\u4F86\u65B0 App \u4E0A\u67B6\u76F4\u63A5\u8907\u88FD\u9019\u5F35\u5361\u7247) -->\r\n                <div class="card-glass p-7 rounded-2xl border border-dashed border-zinc-800 flex flex-col justify-between">\r\n                    <div>\r\n                        <div class="flex justify-between items-center mb-4">\r\n                            <div class="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl">\u{1F6E0}\uFE0F</div>\r\n                            <span class="text-[11px] font-bold text-zinc-500 bg-zinc-900 px-2.5 py-1 rounded-full">\u898F\u5283\u4E2D</span>\r\n                        </div>\r\n                        <h3 class="text-xl font-bold text-white mb-2">\u65B0\u5DE5\u5177\u7814\u767C\u4E2D</h3>\r\n                        <p class="text-gray-400 text-xs leading-relaxed mb-6">\r\n                            \u6211\u5011\u6B63\u7A4D\u6975\u6253\u9020\u7B2C\u4E8C\u6B3E\u5C08\u70BA\u6587\u5B57\u5DE5\u4F5C\u8005\u8207\u958B\u767C\u8005\u8A2D\u8A08\u7684\u96E2\u7DDA\u5FAE\u578B\u5DE5\u5177\uFF0C\u5805\u6301\u7121\u5E72\u64FE\u9AD4\u9A57\u3002\r\n                        </p>\r\n                    </div>\r\n                    <div class="flex items-center justify-between pt-4 border-t border-zinc-800/60">\r\n                        <span class="text-xs text-zinc-500 font-mono">Coming Soon</span>\r\n                        <a href="contact.html?type=feature" class="text-xs text-cyan-400 hover:underline">\u63D0\u51FA\u529F\u80FD\u671F\u5F85 \u2192</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- \u806F\u7D61\u5F15\u5C0E\u5340\u584A -->\r\n        <section class="text-center pt-8 border-t border-zinc-800/50">\r\n            <h3 class="text-2xl font-black text-white mb-3">\u5C0D\u6211\u5011\u7684\u7522\u54C1\u6709\u4EFB\u4F55\u7591\u554F\u6216\u5EFA\u8B70\uFF1F</h3>\r\n            <p class="text-gray-400 text-sm mb-6 max-w-xl mx-auto">\u6211\u5011\u91CD\u8996\u6BCF\u4F4D\u4F7F\u7528\u8005\u7684\u53CD\u994B\uFF0C\u6B61\u8FCE\u96A8\u6642\u8207\u6211\u5011\u806F\u7D61\u4EA4\u6D41\u3002</p>\r\n            <a href="contact.html" class="inline-flex items-center gap-2 bg-white text-gray-950 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition shadow-lg text-sm">\r\n                \u524D\u5F80\u806F\u7D61\u6211\u5011\r\n            </a>\r\n        </section>', "excerpt": "\u6211\u5011\u81F4\u529B\u65BC\u5C07\u8907\u96DC\u7684\u65E5\u5E38\u5DE5\u4F5C\u6D41\u7A0B\u8F49\u5316\u70BA\u8F15\u5DE7\u3001\u76F4\u89C0\u7684\u884C\u52D5\u61C9\u7528\u3002\u5805\u6301\u672C\u5730\u5132\u5B58\u8207\u9AD8\u6548\u7387\u4EA4\u4E92\u3002", "cover": "\u8EDF\u9AD4\u7522\u54C1" }, { "file": "cases-en.html", "slug": "cases-en", "locale": "en", "kind": "page", "nav": 1, "navLabel": "Products", "pair": "cases", "sort": 2, "title": "Products Privacy-First Independent Apps", "metaTitle": "Products | Loopvity", "metaDescription": "Explore Loopvity's proprietary utility apps. Discover Prompt Vault's offline architecture, local storage security, and upcoming app store releases.", "mainClass": "flex-1 max-w-5xl mx-auto px-6 pt-14 md:pt-12 pb-20 w-full", "content": '<!-- Hero Section -->\r\n        <div class="text-center mb-16">\r\n            <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">\r\n                Software Products\r\n            </div>\r\n            <h1 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-8 leading-tight sm:leading-snug">\r\n                Products <br class="hidden sm:block">\r\n                <span class="gradient-brand mt-2 inline-block">Privacy-First Independent Apps</span>\r\n            </h1>\r\n            <p class="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">\r\n                We turn complex daily workflows into lightweight, intuitive mobile applications. Upholding local storage and ergonomic interactions.\r\n            </p>\r\n        </div>\r\n\r\n        <!-- Featured App: Prompt Vault -->\r\n        <section class="mb-20">\r\n            <div class="flex items-center justify-between mb-8">\r\n                <h2 class="text-2xl font-black text-white flex items-center gap-2">\r\n                    <span>\u26A1\uFE0F</span> Featured Release\r\n                </h2>\r\n                <span class="text-xs text-yellow-400 font-bold bg-yellow-400/10 px-3 py-1 rounded-full animate-pulse">Store Validation \xB7 Coming Soon</span>\r\n            </div>\r\n\r\n            <div class="card-glass rounded-3xl overflow-hidden border border-zinc-800 p-8 md:p-12 shadow-2xl">\r\n                <div class="flex flex-col md:flex-row gap-10 items-center mb-10">\r\n                    <div class="w-full md:w-1/3 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 p-10 rounded-3xl flex flex-col items-center justify-center border border-zinc-800 text-7xl shadow-2xl">\r\n                        <span>\u26A1\uFE0F</span>\r\n                        <span class="text-xs font-mono font-bold text-cyan-400 mt-4 tracking-widest uppercase">Prompt Vault</span>\r\n                    </div>\r\n                    <div class="w-full md:w-2/3">\r\n                        <div class="flex items-center gap-2 mb-3">\r\n                            <span class="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full uppercase tracking-wider">Mobile App \xB7 iOS &amp; Android</span>\r\n                        </div>\r\n                        <h3 class="text-3xl font-black text-white mb-3">Prompt Vault</h3>\r\n                        <p class="text-gray-400 text-sm leading-relaxed mb-6">\r\n                            An offline prompt repository designed for intensive ChatGPT, Claude, and Midjourney creators. Eliminate scattered note templates and tedious variable tweaks. Features fast gesture copying, live variable synthesis, and 15 revision records.\r\n                        </p>\r\n                        \r\n                        <!-- Features Grid -->\r\n                        <div class="grid grid-cols-2 gap-3 text-xs text-gray-300 mb-6">\r\n                            <div class="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">\r\n                                <span class="font-bold text-white block mb-0.5">\u26A1\uFE0F Quick Gestures</span>\r\n                                Single tap to preview, double tap to copy prompt instantly.\r\n                            </div>\r\n                            <div class="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">\r\n                                <span class="font-bold text-white block mb-0.5">\u{1F9E9} Dynamic Variables</span>\r\n                                Extract bracketed fields to formulate final statements on the fly.\r\n                            </div>\r\n                            <div class="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">\r\n                                <span class="font-bold text-white block mb-0.5">\u{1F4DC} 15 Revision Logs</span>\r\n                                Automatically preserves 15 recent edits locally for audit trails.\r\n                            </div>\r\n                            <div class="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">\r\n                                <span class="font-bold text-white block mb-0.5">\u{1F512} 100% Offline-First</span>\r\n                                No account needed, zero remote uploads. Data stays on your device.\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Store Badges Placeholder -->\r\n                        <div class="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:items-center">\r\n                            <span class="inline-flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-2.5 rounded-full font-bold text-xs cursor-default">\r\n                                \uF8FF App Store (Coming Soon)\r\n                            </span>\r\n                            <span class="inline-flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-2.5 rounded-full font-bold text-xs cursor-default">\r\n                                Google Play (Coming Soon)\r\n                            </span>\r\n                            <a href="contact-en.html?app=prompt-vault" class="inline-flex items-center justify-center text-xs font-bold text-cyan-400 hover:underline sm:ml-1 py-1">\r\n                                App Inquiries \u2192\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Prompt Vault Dedicated FAQ -->\r\n                <div class="border-t border-zinc-800/80 pt-8">\r\n                    <h4 class="text-base font-bold text-white mb-4 flex items-center gap-2">\r\n                        <span>\u2753</span> Prompt Vault Frequently Asked Questions (FAQ)\r\n                    </h4>\r\n                    <div class="space-y-3">\r\n                        <details class="group bg-zinc-900/60 border border-zinc-800 rounded-xl">\r\n                            <summary class="flex items-start justify-between gap-3 font-bold text-sm text-gray-200 p-4 cursor-pointer outline-none">\r\n                                <span class="min-w-0 flex-1 leading-relaxed">1. Does Prompt Vault sync data to cloud servers? How to transfer?</span>\r\n                                <span class="shrink-0 mt-0.5 inline-flex h-5 w-5 items-center justify-center text-cyan-400 text-xs leading-none transition group-open:rotate-180">\u25BC</span>\r\n                            </summary>\r\n                            <div class="text-gray-400 text-xs px-4 pb-4 leading-relaxed border-t border-zinc-800/40 pt-3">\r\n                                No. Prompt Vault adheres strictly to a 100% offline-first architecture with zero remote server connections. All content is stored exclusively within your device sandbox. When switching devices, simply tap "Export Backup" in Settings to generate a standard JSON file, and use "Import Backup" on your new device to restore everything.\r\n                            </div>\r\n                        </details>\r\n\r\n                        <details class="group bg-zinc-900/60 border border-zinc-800 rounded-xl">\r\n                            <summary class="flex items-start justify-between gap-3 font-bold text-sm text-gray-200 p-4 cursor-pointer outline-none">\r\n                                <span class="min-w-0 flex-1 leading-relaxed">2. Does the app require internet? Does it work offline or in airplane mode?</span>\r\n                                <span class="shrink-0 mt-0.5 inline-flex h-5 w-5 items-center justify-center text-cyan-400 text-xs leading-none transition group-open:rotate-180">\u25BC</span>\r\n                            </summary>\r\n                            <div class="text-gray-400 text-xs px-4 pb-4 leading-relaxed border-t border-zinc-800/40 pt-3">\r\n                                Not at all. Prompt Vault is entirely self-contained and requests zero network permissions. Whether you are in flight mode, underground, or off-grid, all search, synthesis, and gesture copying features execute with zero latency.\r\n                            </div>\r\n                        </details>\r\n\r\n                        <details class="group bg-zinc-900/60 border border-zinc-800 rounded-xl">\r\n                            <summary class="flex items-start justify-between gap-3 font-bold text-sm text-gray-200 p-4 cursor-pointer outline-none">\r\n                                <span class="min-w-0 flex-1 leading-relaxed">3. How does dynamic variable substitution work? What is the syntax?</span>\r\n                                <span class="shrink-0 mt-0.5 inline-flex h-5 w-5 items-center justify-center text-cyan-400 text-xs leading-none transition group-open:rotate-180">\u25BC</span>\r\n                            </summary>\r\n                            <div class="text-gray-400 text-xs px-4 pb-4 leading-relaxed border-t border-zinc-800/40 pt-3">\r\n                                When creating a template, enclose variable placeholders in curly brackets, e.g.: <code class="text-cyan-400 bg-zinc-800 px-1 py-0.5 rounded font-mono text-[11px]">Translate this text to {language} with a {tone} voice</code>. When previewing, the app automatically generates input fields and synthesizes the finalized statement in real-time.\r\n                            </div>\r\n                        </details>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Product Matrix Grid -->\r\n        <section class="mb-16">\r\n            <div class="mb-8">\r\n                <h2 class="text-2xl font-black text-white mb-2">Products Matrix</h2>\r\n                <p class="text-gray-400 text-sm">We continually design focused utilities prioritizing personal productivity and absolute privacy.</p>\r\n            </div>\r\n\r\n            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r\n                <!-- App 1: Prompt Vault Grid Card -->\r\n                <div class="card-glass p-7 rounded-2xl border border-zinc-800 flex flex-col justify-between">\r\n                    <div>\r\n                        <div class="flex justify-between items-center mb-4">\r\n                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl shadow">\u26A1\uFE0F</div>\r\n                            <span class="text-[11px] font-bold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full">iOS / Android</span>\r\n                        </div>\r\n                        <h3 class="text-xl font-bold text-white mb-2">Prompt Vault</h3>\r\n                        <p class="text-gray-400 text-xs leading-relaxed mb-6">\r\n                            Offline prompt repository with instant variable synthesis, double-tap copying, and local JSON export.\r\n                        </p>\r\n                    </div>\r\n                    <div class="flex items-center justify-between pt-4 border-t border-zinc-800/60">\r\n                        <span class="text-xs text-yellow-400 font-bold">Coming Soon to Stores</span>\r\n                        <a href="#top" class="text-xs text-gray-400 hover:text-white transition">View Details \u2191</a>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- App 2 Placeholder: Future App Slot -->\r\n                <div class="card-glass p-7 rounded-2xl border border-dashed border-zinc-800 flex flex-col justify-between">\r\n                    <div>\r\n                        <div class="flex justify-between items-center mb-4">\r\n                            <div class="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl">\u{1F6E0}\uFE0F</div>\r\n                            <span class="text-[11px] font-bold text-zinc-500 bg-zinc-900 px-2.5 py-1 rounded-full">In Planning</span>\r\n                        </div>\r\n                        <h3 class="text-xl font-bold text-white mb-2">New Utility in Progress</h3>\r\n                        <p class="text-gray-400 text-xs leading-relaxed mb-6">\r\n                            We are actively drafting our second standalone utility tailored for writers and software creators, free from telemetry.\r\n                        </p>\r\n                    </div>\r\n                    <div class="flex items-center justify-between pt-4 border-t border-zinc-800/60">\r\n                        <span class="text-xs text-zinc-500 font-mono">Coming Soon</span>\r\n                        <a href="contact-en.html?type=feature" class="text-xs text-cyan-400 hover:underline">Suggest a Feature \u2192</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Contact CTA -->\r\n        <section class="text-center pt-8 border-t border-zinc-800/50">\r\n            <h3 class="text-2xl font-black text-white mb-3">Have Inquiries or Feature Suggestions?</h3>\r\n            <p class="text-gray-400 text-sm mb-6 max-w-xl mx-auto">We value user input. Reach out to connect directly with the developer.</p>\r\n            <a href="contact-en.html" class="inline-flex items-center gap-2 bg-white text-gray-950 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition shadow-lg text-sm">\r\n                Contact Us\r\n            </a>\r\n        </section>', "excerpt": "We turn complex daily workflows into lightweight, intuitive mobile applications. Upholding local storage and ergonomic interactions.", "cover": "Products" }, { "file": "blog.html", "slug": "blog", "locale": "zh", "kind": "page", "nav": 1, "navLabel": "Blog", "pair": "blog-en", "sort": 3, "title": "Blog \u5C08\u6B04 \u8EDF\u9AD4\u67B6\u69CB\u8207\u7522\u54C1\u65E5\u8A8C", "metaTitle": "Blog \u5C08\u6B04 | Loopvity", "metaDescription": "\u5206\u4EAB Loopvity \u5728\u7368\u7ACB App \u7814\u767C\u3001\u73FE\u4EE3\u524D\u7AEF\u6280\u8853\u3001Python \u81EA\u52D5\u5316\u7BA1\u7DDA\u8207 AI \u4E32\u63A5\u904E\u7A0B\u4E2D\u7684\u5BE6\u52D9\u7D93\u9A57\u8207\u7522\u54C1\u65E5\u8A8C\u3002", "mainClass": "flex-1 max-w-6xl mx-auto px-6 pt-14 md:pt-12 pb-20 w-full", "content": '<!-- Hero \u5340\u584A -->\r\n        <div class="text-center mb-12">\r\n            <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">\r\n                Engineering Notes &amp; Insights\r\n            </div>\r\n            <h1 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-8 leading-tight sm:leading-snug">\r\n                Blog \u5C08\u6B04 <br class="hidden sm:block">\r\n                <span class="gradient-brand mt-2 inline-block">\u8EDF\u9AD4\u67B6\u69CB\u8207\u7522\u54C1\u65E5\u8A8C</span>\r\n            </h1>\r\n            <p class="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">\r\n                \u5206\u4EAB\u6211\u5011\u5728\u7368\u7ACB App \u958B\u767C\u3001\u73FE\u4EE3\u524D\u7AEF\u6280\u8853\u3001Python \u6D41\u7A0B\u81EA\u52D5\u5316\u8207 AI \u4E32\u63A5\u904E\u7A0B\u4E2D\u7684\u5BE6\u6230\u7B46\u8A18\u8207\u7522\u54C1\u8A2D\u8A08\u601D\u7DAD\u3002\r\n            </p>\r\n        </div>\r\n\r\n        <!-- \u6587\u7AE0\u5206\u985E\u6A19\u7C64 -->\r\n        <div class="flex flex-wrap justify-center gap-3 mb-16" id="category-bar">\r\n            <span class="category-pill active px-5 py-2 rounded-full text-sm border border-transparent" data-cat="all">\u5168\u90E8\u6587\u7AE0</span>\r\n            <span class="category-pill bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-2 rounded-full text-sm" data-cat="product">\u7522\u54C1\u5C08\u6587</span>\r\n            <span class="category-pill bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-2 rounded-full text-sm" data-cat="app">APP \u958B\u767C</span>\r\n            <span class="category-pill bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-2 rounded-full text-sm" data-cat="web">\u7DB2\u9801\u8A2D\u8A08</span>\r\n            <span class="category-pill bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-2 rounded-full text-sm" data-cat="python">Python \u7CFB\u7D71\u958B\u767C</span>\r\n            <span class="category-pill bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-2 rounded-full text-sm" data-cat="ai">AI \u6280\u8853\u61C9\u7528</span>\r\n        </div>\r\n\r\n        <!-- \u6587\u7AE0\u5217\u8868 Grid -->\r\n        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="article-grid">\n<!--CMS_POSTS-->\n</div>', "excerpt": "\u5206\u4EAB\u6211\u5011\u5728\u7368\u7ACB App \u958B\u767C\u3001\u73FE\u4EE3\u524D\u7AEF\u6280\u8853\u3001Python \u6D41\u7A0B\u81EA\u52D5\u5316\u8207 AI \u4E32\u63A5\u904E\u7A0B\u4E2D\u7684\u5BE6\u6230\u7B46\u8A18\u8207\u7522\u54C1\u8A2D\u8A08\u601D\u7DAD\u3002", "cover": "\u26A1\uFE0F" }, { "file": "blog-en.html", "slug": "blog-en", "locale": "en", "kind": "page", "nav": 1, "navLabel": "Blog", "pair": "blog", "sort": 3, "title": "Blog Architecture &amp; Product Logs", "metaTitle": "Blog &amp; Architecture Notes | Loopvity", "metaDescription": "Read Loopvity's technical logs and insights on independent app development, modern frontends, Python automation, and AI integrations.", "mainClass": "flex-1 max-w-6xl mx-auto px-6 pt-14 md:pt-12 pb-20 w-full", "content": '<!-- Hero Section -->\r\n        <div class="text-center mb-12">\r\n            <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">\r\n                Engineering Notes &amp; Insights\r\n            </div>\r\n            <h1 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-8 leading-tight sm:leading-snug">\r\n                Blog <br class="hidden sm:block">\r\n                <span class="gradient-brand mt-2 inline-block">Architecture &amp; Product Logs</span>\r\n            </h1>\r\n            <p class="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">\r\n                Reflections and field experiences on shipping standalone mobile apps, modern web frontends, Python automation pipelines, and AI integrations.\r\n            </p>\r\n        </div>\r\n\r\n        <!-- Filter Tags -->\r\n        <div class="flex flex-wrap justify-center gap-3 mb-16" id="category-bar">\r\n            <span class="category-pill active px-5 py-2 rounded-full text-sm border border-transparent" data-cat="all">All Articles</span>\r\n            <span class="category-pill bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-2 rounded-full text-sm" data-cat="product">Product Article</span>\r\n            <span class="category-pill bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-2 rounded-full text-sm" data-cat="app">App Dev</span>\r\n            <span class="category-pill bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-2 rounded-full text-sm" data-cat="web">Web Design</span>\r\n            <span class="category-pill bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-2 rounded-full text-sm" data-cat="python">Python Engineering</span>\r\n            <span class="category-pill bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-2 rounded-full text-sm" data-cat="ai">AI Applications</span>\r\n        </div>\r\n\r\n        <!-- Article Grid -->\r\n        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="article-grid">\n<!--CMS_POSTS-->\n</div>', "excerpt": "Reflections and field experiences on shipping standalone mobile apps, modern web frontends, Python automation pipelines, and AI integrations.", "cover": "\u26A1\uFE0F" }, { "file": "contact.html", "slug": "contact", "locale": "zh", "kind": "page", "nav": 1, "navLabel": "\u806F\u7D61\u6211\u5011", "pair": "contact-en", "sort": 4, "title": "\u806F\u7D61\u6211\u5011 \u6211\u5011\u96A8\u6642\u70BA\u60A8\u63D0\u4F9B\u5354\u52A9", "metaTitle": "\u806F\u7D61\u6211\u5011 | Loopvity", "metaDescription": "\u806F\u7D61 Loopvity \u7368\u7ACB\u8EDF\u9AD4\u5DE5\u4F5C\u5BA4\u3002\u6211\u5011\u70BA\u65D7\u4E0B\u81EA\u7814 App \u63D0\u4F9B\u6280\u8853\u652F\u63F4\u3001Bug \u932F\u8AA4\u56DE\u5831\u3001\u65B0\u529F\u80FD\u5EFA\u8B70\u8207\u4ED8\u8CBB\u8AEE\u8A62\u3002", "mainClass": "flex-1 w-full", "content": `<!-- Hero \u5340\u584A -->\r
        <section class="max-w-5xl mx-auto px-6 pt-14 md:pt-12 pb-16 text-center flex flex-col items-center">\r
            <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">\r
                Contact &amp; Support\r
            </div>\r
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-8 leading-tight sm:leading-snug">\r
                \u806F\u7D61\u6211\u5011 <br class="hidden sm:block">\r
                <span class="gradient-brand mt-2 inline-block">\u6211\u5011\u96A8\u6642\u70BA\u60A8\u63D0\u4F9B\u5354\u52A9</span>\r
            </h1>\r
            <p class="text-gray-400 text-lg max-w-2xl mb-14 leading-relaxed font-normal">\r
                \u5982\u679C\u60A8\u5728\u4F7F\u7528 Loopvity \u65D7\u4E0B\u4EFB\u4F55\u61C9\u7528\u7A0B\u5F0F\u6642\u9047\u5230\u554F\u984C\u3001\u767C\u73FE Bug \u6216\u6709\u65B0\u529F\u80FD\u63D0\u6848\uFF0C\u6B61\u8FCE\u96A8\u6642\u900F\u904E\u4E0B\u65B9\u8868\u55AE\u6216\u76F4\u63A5\u806F\u7D61\u6211\u5011\u3002\r
            </p>\r
\r
            <!-- \u806F\u7D61\u7BA1\u9053\u5361\u7247 -->\r
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left w-full mb-16">\r
                <!-- WhatsApp \u5FEB\u901F\u5BA2\u670D -->\r
                <div class="card-glass p-8 rounded-3xl flex flex-col justify-center items-center text-center hover:border-[#25D366]/50 transition cursor-pointer" onclick="window.open('https://wa.me/85200000000', '_blank')">\r
                    <div class="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center text-3xl mb-4">\u{1F4AC}</div>\r
                    <h3 class="text-xl font-bold text-white mb-2">WhatsApp \u5373\u6642\u652F\u63F4</h3>\r
                    <p class="text-gray-400 text-sm mb-6">\u9069\u5408\u5FEB\u901F\u63D0\u554F\u8207\u5373\u6642\u4EA4\u6D41\uFF0C\u7531\u958B\u767C\u5718\u968A\u76F4\u63A5\u89E3\u7B54\u3002</p>\r
                    <span class="text-xs font-bold bg-[#25D366] text-white px-6 py-2.5 rounded-full">\u50B3\u9001\u8A0A\u606F</span>\r
                </div>\r
\r
                <!-- Email \u76F4\u63A5\u806F\u7E6B -->\r
                <div class="card-glass p-8 rounded-3xl flex flex-col justify-center items-center text-center hover:border-cyan-500/50 transition cursor-pointer" onclick="window.location.href='mailto:loopvity@gmail.com'">\r
                    <div class="w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-3xl mb-4">\u2709\uFE0F</div>\r
                    <h3 class="text-xl font-bold text-white mb-2">\u6280\u8853\u652F\u63F4\u4FE1\u7BB1</h3>\r
                    <p class="text-gray-400 text-sm mb-6">\u9069\u5408\u50B3\u9001\u9644\u5E36\u622A\u5716\u7684 Bug \u56DE\u5831\u3001\u8A73\u7D30\u529F\u80FD\u63D0\u6848\u6216\u5408\u4F5C\u4EA4\u6D41\u3002</p>\r
                    <span class="text-xs font-bold bg-white text-gray-900 px-6 py-2.5 rounded-full">loopvity@gmail.com</span>\r
                </div>\r
            </div>\r
\r
            <!-- \u9632\u81C3\u816B\u96D9\u5C64\u4E0B\u62C9\u8868\u55AE\u67B6\u69CB -->\r
            <div class="w-full card-glass p-8 md:p-12 rounded-3xl text-left border border-zinc-800">\r
                <div class="mb-8">\r
                    <h3 class="text-2xl font-black text-white mb-2">\u63D0\u4EA4\u652F\u63F4\u5DE5\u55AE\u6216\u8A0A\u606F</h3>\r
                    <p class="text-sm text-gray-400">\u8ACB\u586B\u5BEB\u60A8\u7684\u806F\u7D61\u8CC7\u8A0A\u8207\u5177\u9AD4\u554F\u984C\uFF0C\u6211\u5011\u901A\u5E38\u5728 12 \u5C0F\u6642\u5167\u56DE\u8986\u3002</p>\r
                </div>\r
\r
                <form id="contact-form" class="space-y-6">\r
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
                        <div>\r
                            <label class="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">\u60A8\u7684\u7A31\u547C *</label>\r
                            <input name="name" type="text" required placeholder="\u4F8B\u5982\uFF1AAlex / \u9673\u5148\u751F" class="w-full bg-zinc-900/80 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition">\r
                        </div>\r
                        <div>\r
                            <label class="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">\u96FB\u5B50\u90F5\u4EF6 *</label>\r
                            <input name="email" type="email" required placeholder="\u4F8B\u5982\uFF1Ayourname@example.com" class="w-full bg-zinc-900/80 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition">\r
                        </div>\r
                    </div>\r
\r
                    <!-- \u96D9\u5C64\u67B6\u69CB\uFF1A\u76EE\u6A19 App + \u554F\u984C\u6027\u8CEA -->\r
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
                        <div>\r
                            <label class="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">\u76F8\u95DC\u61C9\u7528 (App) *</label>\r
                            <select id="target-app" name="app" class="w-full bg-zinc-900/80 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition">\r
                                <option value="prompt-vault">Prompt Vault \u63D0\u793A\u8A5E\u6536\u7D0D\u5EAB</option>\r
                                <option value="general">\u5176\u4ED6 / \u5168\u9AD4\u901A\u7528\u8AEE\u8A62</option>\r
                            </select>\r
                        </div>\r
                        <div>\r
                            <label class="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">\u554F\u984C\u6027\u8CEA *</label>\r
                            <select id="issue-category" name="topic" class="w-full bg-zinc-900/80 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition">\r
                                <option value="support">\u4F7F\u7528\u7591\u554F\u8207\u64CD\u4F5C\u6307\u5F15</option>\r
                                <option value="bug">Bug \u932F\u8AA4\u56DE\u5831\u8207\u7570\u5E38</option>\r
                                <option value="feature">\u65B0\u529F\u80FD\u5EFA\u8B70\u8207\u53CD\u994B</option>\r
                                <option value="billing">\u8CFC\u8CB7\u3001\u4ED8\u8CBB\u6216\u8A02\u95B1\u76F8\u95DC</option>\r
                                <option value="partnership">\u5176\u4ED6\u5546\u696D\u6216\u4EA4\u6D41\u5408\u4F5C</option>\r
                            </select>\r
                        </div>\r
                    </div>\r
\r
                    <div>\r
                        <label class="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">\u4F7F\u7528\u88DD\u7F6E\u8207\u4F5C\u696D\u7CFB\u7D71 (\u9078\u586B)</label>\r
                        <input type="text" name="device" placeholder="\u4F8B\u5982\uFF1AiPhone 15 (iOS 17.5) \u6216 Pixel 8 (Android 14)" class="w-full bg-zinc-900/80 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition">\r
                    </div>\r
\r
                    <div>\r
                        <label class="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">\u8A73\u7D30\u8AAA\u660E\u5167\u5BB9 *</label>\r
                        <textarea name="message" rows="4" required placeholder="\u8ACB\u5177\u9AD4\u8AAA\u660E\u60A8\u9047\u5230\u7684\u554F\u984C\u3001\u64CD\u4F5C\u91CD\u73FE\u6B65\u9A5F\u6216\u671F\u671B\u7684\u529F\u80FD..." class="w-full bg-zinc-900/80 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"></textarea>\r
                    </div>\r
\r
                    <button type="submit" class="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:brightness-110 transition shadow-lg shadow-cyan-500/20 text-sm">\r
                        \u9001\u51FA\u652F\u63F4\u8A0A\u606F\r
                    </button>\r
                </form>\r
            </div>\r
        </section>\r
\r
        <!-- \u5E38\u898B\u554F\u984C\u89E3\u7B54 (FAQ) -->\r
        <section class="max-w-3xl mx-auto px-6 py-16">\r
            <div class="text-center mb-10">\r
                <h3 class="text-2xl sm:text-3xl font-black text-white">\u5E38\u898B\u554F\u984C\u89E3\u7B54 (FAQ)</h3>\r
                <p class="text-gray-400 text-sm mt-3">\u5FEB\u901F\u89E3\u6C7A\u60A8\u5728\u6280\u8853\u652F\u63F4\u8207\u8CFC\u8CB7\u6642\u7684\u5E38\u898B\u7591\u60D1\u3002</p>\r
            </div>\r
\r
            <div class="space-y-4">\r
                <details class="group card-glass rounded-2xl cursor-pointer">\r
                    <summary class="flex justify-between items-center font-bold text-white p-6 outline-none">\r
                        <span>1. \u9047\u5230 App \u7570\u5E38\u9583\u9000\u6216\u624B\u52E2\u5931\u6548\u6642\u8A72\u5982\u4F55\u5FEB\u901F\u6392\u67E5\uFF1F</span>\r
                        <span class="transition group-open:rotate-180 text-cyan-400">\u25BC</span>\r
                    </summary>\r
                    <div class="text-gray-400 text-sm px-6 pb-6 leading-relaxed">\r
                        \u5EFA\u8B70\u5148\u6AA2\u67E5 Apple App Store \u6216 Google Play \u662F\u5426\u6709\u6700\u65B0\u7248\u672C\u53EF\u4F9B\u66F4\u65B0\u3002\u82E5\u554F\u984C\u4F9D\u7136\u5B58\u5728\uFF0C\u8ACB\u900F\u904E\u4E0A\u65B9\u8868\u55AE\u63D0\u4EA4\u300CBug \u932F\u8AA4\u56DE\u5831\u300D\uFF0C\u9644\u4E0A\u60A8\u7684\u624B\u6A5F\u578B\u865F\u8207\u7CFB\u7D71\u7248\u672C\uFF0C\u9019\u5C07\u6709\u52A9\u65BC\u958B\u767C\u5718\u968A\u8FC5\u901F\u5B9A\u4F4D\u4E26\u5728\u4E0B\u4E00\u500B\u4FEE\u6B63\u7248\u672C\u4E2D\u63A8\u9001\u66F4\u65B0\u3002\r
                    </div>\r
                </details>\r
\r
                <details class="group card-glass rounded-2xl cursor-pointer">\r
                    <summary class="flex justify-between items-center font-bold text-white p-6 outline-none">\r
                        <span>2. \u95DC\u65BC\u4ED8\u8CBB\u4E0B\u8F09\u8207\u61C9\u7528\u5167\u8CFC (IAP) \u7684\u9000\u6B3E\u8655\u7406\u6A5F\u5236\uFF1F</span>\r
                        <span class="transition group-open:rotate-180 text-cyan-400">\u25BC</span>\r
                    </summary>\r
                    <div class="text-gray-400 text-sm px-6 pb-6 leading-relaxed">\r
                        \u6240\u6709\u4ED8\u8CBB\u4E0B\u8F09\u8207\u61C9\u7528\u5167\u8CFC\u5E33\u52D9\u5747\u7531 Apple \u6216 Google \u5B98\u65B9\u91D1\u6D41\u7CFB\u7D71\u76F4\u63A5\u8655\u7406\u3002\u82E5\u9700\u7533\u8ACB\u9000\u6B3E\uFF0C\u53EF\u76F4\u63A5\u524D\u5F80 Apple \u5B98\u65B9\u7684 reportaproblem.apple.com \u6216 Google Play \u7684\u5E33\u6236\u8A02\u55AE\u8A18\u9304\u9801\u9762\u63D0\u51FA\u7533\u8ACB\u3002\u5982\u9700\u6838\u5C0D\u8CFC\u8CB7\u8B49\u660E\u4EA6\u53EF\u96A8\u6642\u806F\u7D61\u6211\u5011\u5354\u52A9\u3002\r
                    </div>\r
                </details>\r
\r
                <details class="group card-glass rounded-2xl cursor-pointer">\r
                    <summary class="flex justify-between items-center font-bold text-white p-6 outline-none">\r
                        <span>3. \u5982\u679C\u6211\u5728\u4F7F\u7528\u6216\u8CFC\u8CB7\u904E\u7A0B\u4E2D\u9047\u5230\u554F\u984C\uFF0C\u901A\u5E38\u591A\u4E45\u80FD\u7372\u5F97\u56DE\u8986\uFF1F</span>\r
                        <span class="transition group-open:rotate-180 text-cyan-400">\u25BC</span>\r
                    </summary>\r
                    <div class="text-gray-400 text-sm px-6 pb-6 leading-relaxed">\r
                        \u900F\u904E WhatsApp \u50B3\u9001\u4E4B\u67E5\u8A62\uFF0C\u5728\u5DE5\u4F5C\u6642\u9593\u5167\u901A\u5E38\u53EF\u5728\u6578\u5C0F\u6642\u5167\u7372\u5F97\u5373\u6642\u5C0D\u8A71\uFF1B\u900F\u904E\u8868\u55AE\u6216\u96FB\u5B50\u90F5\u4EF6\u63D0\u4EA4\u4E4B\u554F\u984C\u5DE5\u55AE\uFF0C\u958B\u767C\u5718\u968A\u6703\u5728 12 \u81F3 24 \u5C0F\u6642\u5167\u4ED4\u7D30\u5BE9\u95B1\u4E26\u7D66\u4E88\u5177\u9AD4\u56DE\u8986\u3002\r
                    </div>\r
                </details>\r
            </div>\r
        </section>`, "excerpt": "\u5982\u679C\u60A8\u5728\u4F7F\u7528 Loopvity \u65D7\u4E0B\u4EFB\u4F55\u61C9\u7528\u7A0B\u5F0F\u6642\u9047\u5230\u554F\u984C\u3001\u767C\u73FE Bug \u6216\u6709\u65B0\u529F\u80FD\u63D0\u6848\uFF0C\u6B61\u8FCE\u96A8\u6642\u900F\u904E\u4E0B\u65B9\u8868\u55AE\u6216\u76F4\u63A5\u806F\u7D61\u6211\u5011\u3002", "cover": "\u806F\u7D61\u6211\u5011" }, { "file": "contact-en.html", "slug": "contact-en", "locale": "en", "kind": "page", "nav": 1, "navLabel": "Contact", "pair": "contact", "sort": 4, "title": "Contact Us We Are Here to Assist You", "metaTitle": "Contact Us | Loopvity", "metaDescription": "Contact Loopvity independent studio. We provide technical support, bug reporting, feature suggestions, and purchase assistance for our mobile apps.", "mainClass": "flex-1 w-full", "content": `<!-- Hero Section -->\r
        <section class="max-w-5xl mx-auto px-6 pt-14 md:pt-12 pb-16 text-center flex flex-col items-center">\r
            <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">\r
                Contact &amp; Support\r
            </div>\r
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-8 leading-tight sm:leading-snug">\r
                Contact Us <br class="hidden sm:block">\r
                <span class="gradient-brand mt-2 inline-block">We Are Here to Assist You</span>\r
            </h1>\r
            <p class="text-gray-400 text-lg max-w-2xl mb-14 leading-relaxed font-normal">\r
                If you encounter technical issues regarding any Loopvity applications, experience a bug, or wish to suggest new features, please reach out below.\r
            </p>\r
\r
            <!-- Channels -->\r
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left w-full mb-16">\r
                <!-- WhatsApp -->\r
                <div class="card-glass p-8 rounded-3xl flex flex-col justify-center items-center text-center hover:border-[#25D366]/50 transition cursor-pointer" onclick="window.open('https://wa.me/85200000000', '_blank')">\r
                    <div class="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center text-3xl mb-4">\u{1F4AC}</div>\r
                    <h3 class="text-xl font-bold text-white mb-2">WhatsApp Instant Support</h3>\r
                    <p class="text-gray-400 text-sm mb-6">Ideal for quick questions and immediate troubleshooting directly with our developer team.</p>\r
                    <span class="text-xs font-bold bg-[#25D366] text-white px-6 py-2.5 rounded-full">Message Us</span>\r
                </div>\r
\r
                <!-- Email -->\r
                <div class="card-glass p-8 rounded-3xl flex flex-col justify-center items-center text-center hover:border-cyan-500/50 transition cursor-pointer" onclick="window.location.href='mailto:loopvity@gmail.com'">\r
                    <div class="w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-3xl mb-4">\u2709\uFE0F</div>\r
                    <h3 class="text-xl font-bold text-white mb-2">Technical Support Email</h3>\r
                    <p class="text-gray-400 text-sm mb-6">Suitable for detailed bug reports with screenshots, feature requests, or general inquiries.</p>\r
                    <span class="text-xs font-bold bg-white text-gray-900 px-6 py-2.5 rounded-full">loopvity@gmail.com</span>\r
                </div>\r
            </div>\r
\r
            <!-- Two-Tier Form Structure: Product + Category -->\r
            <div class="w-full card-glass p-8 md:p-12 rounded-3xl text-left border border-zinc-800">\r
                <div class="mb-8">\r
                    <h3 class="text-2xl font-black text-white mb-2">Submit a Ticket or Message</h3>\r
                    <p class="text-sm text-gray-400">Fill in your contact details and message descriptions. We typically respond within 12 business hours.</p>\r
                </div>\r
\r
                <form id="contact-form" class="space-y-6">\r
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
                        <div>\r
                            <label class="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Your Name *</label>\r
                            <input name="name" type="text" required placeholder="e.g. Alex Smith" class="w-full bg-zinc-900/80 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition">\r
                        </div>\r
                        <div>\r
                            <label class="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Email Address *</label>\r
                            <input name="email" type="email" required placeholder="e.g. yourname@example.com" class="w-full bg-zinc-900/80 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition">\r
                        </div>\r
                    </div>\r
\r
                    <!-- Two-Tier Selects -->\r
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
                        <div>\r
                            <label class="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Related App *</label>\r
                            <select id="target-app" name="app" class="w-full bg-zinc-900/80 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition">\r
                                <option value="prompt-vault">Prompt Vault</option>\r
                                <option value="general">Other / General Inquiries</option>\r
                            </select>\r
                        </div>\r
                        <div>\r
                            <label class="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Category *</label>\r
                            <select id="issue-category" name="topic" class="w-full bg-zinc-900/80 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition">\r
                                <option value="support">Usage &amp; Technical Support</option>\r
                                <option value="bug">Bug Report</option>\r
                                <option value="feature">Feature Suggestion</option>\r
                                <option value="billing">Purchases, Billing &amp; Subscriptions</option>\r
                                <option value="partnership">Business &amp; Collaboration</option>\r
                            </select>\r
                        </div>\r
                    </div>\r
\r
                    <div>\r
                        <label class="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Device &amp; OS (Optional)</label>\r
                        <input type="text" name="device" placeholder="e.g. iPhone 15 (iOS 17.5) or Pixel 8 (Android 14)" class="w-full bg-zinc-900/80 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition">\r
                    </div>\r
\r
                    <div>\r
                        <label class="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Description / Message *</label>\r
                        <textarea name="message" rows="4" required placeholder="Please describe what happened, steps to reproduce, or what feature you would love to see..." class="w-full bg-zinc-900/80 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"></textarea>\r
                    </div>\r
\r
                    <button type="submit" class="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:brightness-110 transition shadow-lg shadow-cyan-500/20 text-sm">\r
                        Submit Message\r
                    </button>\r
                </form>\r
            </div>\r
        </section>\r
\r
        <!-- FAQ -->\r
        <section class="max-w-3xl mx-auto px-6 py-16">\r
            <div class="text-center mb-10">\r
                <h3 class="text-2xl sm:text-3xl font-black text-white">Frequently Asked Questions</h3>\r
                <p class="text-gray-400 text-sm mt-3">Quick solutions to common operational and account inquiries.</p>\r
            </div>\r
\r
            <div class="space-y-4">\r
                <details class="group card-glass rounded-2xl cursor-pointer">\r
                    <summary class="flex justify-between items-center font-bold text-white p-6 outline-none">\r
                        <span>1. What should I do if an App crashes or gestures fail to respond?</span>\r
                        <span class="transition group-open:rotate-180 text-cyan-400">\u25BC</span>\r
                    </summary>\r
                    <div class="text-gray-400 text-sm px-6 pb-6 leading-relaxed">\r
                        First verify that your app is updated to the latest build on the App Store or Google Play. If the bug persists, submit a "Bug Report" using the form above including your device model and OS version so our team can diagnose and patch it.\r
                    </div>\r
                </details>\r
\r
                <details class="group card-glass rounded-2xl cursor-pointer">\r
                    <summary class="flex justify-between items-center font-bold text-white p-6 outline-none">\r
                        <span>2. What is the refund mechanism for paid downloads or in-app purchases?</span>\r
                        <span class="transition group-open:rotate-180 text-cyan-400">\u25BC</span>\r
                    </summary>\r
                    <div class="text-gray-400 text-sm px-6 pb-6 leading-relaxed">\r
                        All app purchases and subscription billings are processed directly by Apple App Store or Google Play. For refund requests, submit through reportaproblem.apple.com (for Apple) or your Google Play order history. You can also reach out to our team to help verify purchase records.\r
                    </div>\r
                </details>\r
\r
                <details class="group card-glass rounded-2xl cursor-pointer">\r
                    <summary class="flex justify-between items-center font-bold text-white p-6 outline-none">\r
                        <span>3. How quickly can I expect a response to support tickets?</span>\r
                        <span class="transition group-open:rotate-180 text-cyan-400">\u25BC</span>\r
                    </summary>\r
                    <div class="text-gray-400 text-sm px-6 pb-6 leading-relaxed">\r
                        Messages sent via WhatsApp generally receive responses within a few hours during business hours. For tickets submitted through our web form or email, our engineering team reviews and replies thoroughly within 12 to 24 hours.\r
                    </div>\r
                </details>\r
            </div>\r
        </section>`, "excerpt": "If you encounter technical issues regarding any Loopvity applications, experience a bug, or wish to suggest new features, please reach out below.", "cover": "Contact " }, { "file": "privacy.html", "slug": "privacy", "locale": "zh", "kind": "page", "nav": 0, "navLabel": "\u79C1\u96B1\u653F\u7B56", "pair": "privacy-en", "sort": 10, "title": "\u79C1\u96B1\u653F\u7B56 (Privacy Policy)", "metaTitle": "\u79C1\u96B1\u653F\u7B56 Privacy Policy | Loopvity", "metaDescription": "Loopvity \u65D7\u4E0B\u61C9\u7528\u7A0B\u5F0F\u53CA\u5B98\u65B9\u7DB2\u7AD9\u4E4B\u79C1\u96B1\u653F\u7B56\u689D\u6B3E\u3002\u6211\u5011\u5805\u6301 100% \u96E2\u7DDA\u512A\u5148\u8207\u96F6\u6578\u64DA\u6536\u96C6\u539F\u5247\u3002", "mainClass": "flex-1 max-w-4xl mx-auto px-6 pt-28 md:pt-36 pb-20 w-full", "content": '<div class="card-glass rounded-3xl p-8 md:p-14 border border-zinc-800 shadow-2xl">\r\n            <div class="inline-block px-3 py-1 mb-6 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">\r\n                100% \u96E2\u7DDA\u904B\u884C \xB7 \u96B1\u79C1\u512A\u5148\r\n            </div>\r\n\r\n            <h1 class="text-3xl sm:text-4xl font-black text-white mb-2 pb-5 border-b border-zinc-800">\r\n                \u79C1\u96B1\u653F\u7B56 (Privacy Policy)\r\n            </h1>\r\n\r\n            <p class="text-xs text-gray-500 font-mono mb-8">\r\n                <strong>\u751F\u6548\u65E5\u671F\uFF1A</strong> 2026 \u5E74 9 \u6708 22 \u65E5\r\n            </p>\r\n\r\n            <div class="space-y-8 text-gray-300 text-sm leading-relaxed">\r\n                <p>\r\n                    \u672C\u79C1\u96B1\u653F\u7B56\u9069\u7528\u65BC\u7531 <strong class="text-white">Loopvity</strong>\uFF08\u4EE5\u4E0B\u7C21\u7A31\u300C\u6211\u5011\u300D\uFF09\u958B\u767C\u53CA\u71DF\u904B\u4E4B\u6240\u6709\u884C\u52D5\u61C9\u7528\u7A0B\u5F0F\uFF08\u5305\u542B\u4F46\u4E0D\u9650\u65BC Prompt Vault \u53CA\u672A\u4F86\u767C\u5E03\u4E4B\u65D7\u4E0B\u61C9\u7528\uFF09\u8207\u5B98\u65B9\u7DB2\u7AD9\u3002\u6211\u5011\u9AD8\u5EA6\u91CD\u8996\u4F7F\u7528\u8005\u4E4B\u500B\u4EBA\u96B1\u79C1\u6B0A\u3002\u672C\u653F\u7B56\u65E8\u5728\u5411\u60A8\u660E\u78BA\u8AAA\u660E\u672C\u5718\u968A\u5728\u60A8\u4F7F\u7528\u6211\u5011\u65D7\u4E0B\u7684 iOS \u8207 Android \u61C9\u7528\u7A0B\u5F0F\u53CA\u9020\u8A2A\u672C\u7DB2\u7AD9\u6642\u4E4B\u6578\u64DA\u8655\u7406\u539F\u5247\u3002\r\n                </p>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">1. \u96F6\u6578\u64DA\u6536\u96C6\u653F\u7B56 (Zero Data Collection)</h2>\r\n                    <p class="mb-3">\r\n                        Loopvity \u65D7\u4E0B\u61C9\u7528\u7A0B\u5F0F\u539F\u5247\u4E0A\u5747\u63A1\u7528\u300C\u672C\u6A5F\u96E2\u7DDA\u512A\u5148\uFF08Local-first\uFF09\u300D\u67B6\u69CB\u8A2D\u8A08\u3002<strong class="text-white">\u6211\u5011\u4E0D\u6703\u4E3B\u52D5\u6536\u96C6\u3001\u50B3\u8F38\u3001\u8FFD\u8E64\u6216\u5171\u4EAB\u4EFB\u4F55\u500B\u4EBA\u8CC7\u6599\u3001\u7D71\u8A08\u6578\u64DA\u3001\u9059\u6E2C\u8CC7\u8A0A\u6216\u4F7F\u7528\u884C\u70BA\u3002</strong>\r\n                    </p>\r\n                    <ul class="list-disc list-inside space-y-2 text-gray-400 pl-2">\r\n                        <li>\u65D7\u4E0B\u61C9\u7528\u7A0B\u5F0F\u7121\u9700\u8A3B\u518A\u5E33\u865F\u6216\u9032\u884C\u767B\u5165\u5373\u53EF\u4F7F\u7528\u6838\u5FC3\u529F\u80FD\u3002</li>\r\n                        <li>\u7121\u5D4C\u5165\u4EFB\u4F55\u7B2C\u4E09\u65B9\u8FFD\u8E64\u5206\u6790\u3001\u9059\u6E2C\uFF08Telemetry\uFF09\u6216\u8A3A\u65B7 SDK\u3002</li>\r\n                        <li>\u4E0D\u5B58\u53D6\u4EFB\u4F55\u8DE8\u61C9\u7528\u5EE3\u544A\u8FFD\u8E64\u8B58\u5225\u78BC\uFF08\u4F8B\u5982 Apple IDFA \u6216 Google GAID\uFF09\u3002</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">2. \u672C\u6A5F\u6578\u64DA\u5132\u5B58 (Local Data Storage)</h2>\r\n                    <p>\r\n                        \u60A8\u65BC\u5404\u61C9\u7528\u7A0B\u5F0F\u4E2D\u6240\u5EFA\u7ACB\u3001\u7DE8\u8F2F\u3001\u8A18\u9304\u6216\u532F\u5165\u4E4B\u6240\u6709\u5167\u5BB9\u8207\u500B\u4EBA\u8A2D\u5B9A\uFF0C\u5747\u50C5\u5132\u5B58\u65BC\u60A8\u500B\u5225\u884C\u52D5\u88DD\u7F6E\u4E4B\u672C\u6A5F\u6C99\u76D2\u7A7A\u9593\u5167\u3002\u60A8\u5C0D\u81EA\u5DF1\u7684\u6240\u6709\u5167\u5BB9\u4EAB\u6709\u5B8C\u5168\u7684\u6240\u6709\u6B0A\u8207\u638C\u63A7\u6B0A\u3002\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">3. \u96E2\u7DDA\u5099\u4EFD\u8207\u6A94\u6848\u532F\u51FA (Offline Backups and Export)</h2>\r\n                    <p>\r\n                        \u7576\u60A8\u4F7F\u7528\u61C9\u7528\u7A0B\u5F0F\u63D0\u4F9B\u4E4B\u5099\u4EFD\u6216\u532F\u51FA\u529F\u80FD\u6642\uFF0C\u7CFB\u7D71\u6703\u65BC\u672C\u6A5F\u76F4\u63A5\u751F\u6210\u6A19\u6E96\u683C\u5F0F\u6A94\u6848\uFF08\u4F8B\u5982 JSON \u6216\u6587\u5B57\u6A94\u6848\uFF09\u3002\u5F8C\u7E8C\u900F\u904E\u7CFB\u7D71\u5206\u4EAB\u9762\u677F\u9032\u884C\u4E4B\u6A94\u6848\u5132\u5B58\u6216\u96F2\u7AEF\u5099\u4EFD\uFF0C\u7686\u5C6C\u65BC\u4F7F\u7528\u8005\u81EA\u4E3B\u884C\u70BA\u4E26\u7531\u60A8\u624B\u52D5\u5B8C\u5168\u638C\u63A7\u3002\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">4. \u7B2C\u4E09\u65B9\u670D\u52D9\u8207\u7DB2\u8DEF\u9023\u7DDA (Third-Party Services)</h2>\r\n                    <p>\r\n                        \u65D7\u4E0B\u96E2\u7DDA\u61C9\u7528\u7A0B\u5F0F\u65BC\u4E00\u822C\u65E5\u5E38\u64CD\u4F5C\u4E0B\u5B8C\u5168\u4E0D\u9700\u8981\u4E14\u4E0D\u6703\u9023\u7DDA\u81F3\u5916\u90E8\u4F3A\u670D\u5668\u3001\u96F2\u7AEF\u8CC7\u6599\u5EAB\u6216\u7B2C\u4E09\u65B9\u7DB2\u8DEF API\u3002\u6240\u6709\u904B\u7B97\u8207\u5132\u5B58\u7686\u56B4\u683C\u9650\u5236\u65BC\u672C\u6A5F\u74B0\u5883\u3002\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">5. \u653F\u7B56\u4FEE\u8A02 (Policy Changes)</h2>\r\n                    <p>\r\n                        \u6211\u5011\u53EF\u80FD\u8996\u61C9\u7528\u7A0B\u5F0F\u529F\u80FD\u66F4\u65B0\u3001\u65B0\u7522\u54C1\u767C\u5E03\u6216\u6CD5\u5F8B\u6CD5\u898F\u8981\u6C42\u9069\u6642\u4FEE\u8A02\u672C\u79C1\u96B1\u653F\u7B56\u3002\u4EFB\u4F55\u8B8A\u66F4\u5C07\u5373\u6642\u516C\u5E03\u65BC\u672C\u7DB2\u9801\u4E26\u66F4\u65B0\u751F\u6548\u65E5\u671F\u3002\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">6. \u806F\u7D61\u6211\u5011 (Contact Us)</h2>\r\n                    <p class="mb-2">\r\n                        \u5982\u60A8\u5C0D\u672C\u79C1\u96B1\u653F\u7B56\u6709\u4EFB\u4F55\u7591\u554F\u6216\u53CD\u994B\uFF0C\u6B61\u8FCE\u900F\u904E\u4EE5\u4E0B\u65B9\u5F0F\u8207 Loopvity \u806F\u7E6B\uFF1A\r\n                    </p>\r\n                    <p>\r\n                        <strong class="text-white">\u96FB\u5B50\u90F5\u4EF6\uFF1A</strong> \r\n                        <a href="mailto:loopvity@gmail.com" class="text-cyan-400 hover:underline">loopvity@gmail.com</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="mt-12 pt-6 border-t border-zinc-800 text-xs text-gray-500">\r\n                &copy; 2026 Loopvity Studio. All rights reserved.\r\n            </div>\r\n        </div>', "excerpt": "\u751F\u6548\u65E5\u671F\uFF1A 2026 \u5E74 9 \u6708 22 \u65E5", "cover": "\u{1F4DD}" }, { "file": "privacy-en.html", "slug": "privacy-en", "locale": "en", "kind": "page", "nav": 0, "navLabel": "Privacy", "pair": "privacy", "sort": 10, "title": "Privacy Policy", "metaTitle": "Privacy Policy | Loopvity", "metaDescription": "Privacy Policy for all Loopvity applications and official website. We adhere strictly to a 100% offline-first and zero data collection architecture.", "mainClass": "flex-1 max-w-4xl mx-auto px-6 pt-28 md:pt-36 pb-20 w-full", "content": '<div class="card-glass rounded-3xl p-8 md:p-14 border border-zinc-800 shadow-2xl">\r\n            <div class="inline-block px-3 py-1 mb-6 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">\r\n                100% Offline &amp; Privacy-First\r\n            </div>\r\n\r\n            <h1 class="text-3xl sm:text-4xl font-black text-white mb-2 pb-5 border-b border-zinc-800">\r\n                Privacy Policy\r\n            </h1>\r\n\r\n            <p class="text-xs text-gray-500 font-mono mb-8">\r\n                <strong>Effective Date:</strong> September 22, 2026\r\n            </p>\r\n\r\n            <div class="space-y-8 text-gray-300 text-sm leading-relaxed">\r\n                <p>\r\n                    This Privacy Policy applies to all mobile applications developed and operated by <strong class="text-white">Loopvity</strong> ("we", "us", or "our") (including but not limited to Prompt Vault and future releases) and our official website. We are committed to protecting your personal privacy. This policy explains our data practices regarding your use of our iOS and Android applications and our website.\r\n                </p>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">1. Zero Data Collection</h2>\r\n                    <p class="mb-3">\r\n                        Our applications fundamentally adopt a "Local-first" architecture. <strong class="text-white">We do not proactively collect, transmit, track, or share any personal data, analytics, telemetry, or usage behavior.</strong>\r\n                    </p>\r\n                    <ul class="list-disc list-inside space-y-2 text-gray-400 pl-2">\r\n                        <li>Our applications do not require a user account or login to access core features.</li>\r\n                        <li>No tracking, third-party analytics, or telemetry SDKs are embedded.</li>\r\n                        <li>No cross-app advertising identifiers (such as Apple IDFA or Google GAID) are accessed.</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">2. Local Data Storage</h2>\r\n                    <p>\r\n                        All content and personal settings created, edited, recorded, or imported across our applications are stored strictly within the local sandbox space of your individual mobile device. You maintain full ownership and control over all your content at all times.\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">3. Offline Backups and Export</h2>\r\n                    <p>\r\n                        When you use the backup or export features provided by our applications, the system generates standard format files (e.g., JSON or text files) directly on your local device. Any subsequent file storage or cloud backup via the system share sheet is an autonomous user action and is entirely under your manual control.\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">4. Third-Party Services</h2>\r\n                    <p>\r\n                        Our offline applications do not require and will not connect to external servers, cloud databases, or third-party web APIs during normal daily operations. All computation and storage are strictly confined to the local environment.\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">5. Changes to This Privacy Policy</h2>\r\n                    <p>\r\n                        We may update this Privacy Policy from time to time based on app updates, new product releases, or legal requirements. Any changes will be published immediately on this page with an updated effective date.\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">6. Contact Us</h2>\r\n                    <p class="mb-2">\r\n                        If you have any questions or feedback regarding this Privacy Policy, please contact Loopvity at:\r\n                    </p>\r\n                    <p>\r\n                        <strong class="text-white">Email:</strong> \r\n                        <a href="mailto:loopvity@gmail.com" class="text-cyan-400 hover:underline">loopvity@gmail.com</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="mt-12 pt-6 border-t border-zinc-800 text-xs text-gray-500">\r\n                &copy; 2026 Loopvity Studio. All rights reserved.\r\n            </div>\r\n        </div>', "excerpt": "Effective Date: September 22, 2026", "cover": "\u{1F4DD}" }, { "file": "terms.html", "slug": "terms", "locale": "zh", "kind": "page", "nav": 0, "navLabel": "\u689D\u6B3E\u53CA\u7D30\u5247", "pair": "terms-en", "sort": 11, "title": "\u689D\u6B3E\u53CA\u7D30\u5247 (Terms &amp; Conditions)", "metaTitle": "\u689D\u6B3E\u53CA\u7D30\u5247 Terms &amp; Conditions | Loopvity", "metaDescription": "Loopvity \u61C9\u7528\u7A0B\u5F0F\u8207\u5B98\u65B9\u7DB2\u7AD9\u4E4B\u689D\u6B3E\u53CA\u7D30\u5247\u3002\u8AAA\u660E\u4F7F\u7528\u8005\u4F7F\u7528\u672C\u8EDF\u9AD4\u7522\u54C1\uFF08\u5305\u62EC Prompt Vault\uFF09\u3001\u4ED8\u8CBB\u4E0B\u8F09\u53CA\u61C9\u7528\u5167\u8CFC\u8CB7\u6642\u7684\u6B0A\u5229\u7FA9\u52D9\u8207\u898F\u7BC4\u3002", "mainClass": "flex-1 max-w-4xl mx-auto px-6 pt-28 md:pt-36 pb-20 w-full", "content": '<div class="card-glass rounded-3xl p-8 md:p-14 border border-zinc-800 shadow-2xl">\r\n            <div class="inline-block px-3 py-1 mb-6 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">\r\n                Terms &amp; Conditions\r\n            </div>\r\n\r\n            <h1 class="text-3xl sm:text-4xl font-black text-white mb-2 pb-5 border-b border-zinc-800">\r\n                \u689D\u6B3E\u53CA\u7D30\u5247 (Terms &amp; Conditions)\r\n            </h1>\r\n\r\n            <p class="text-xs text-gray-500 font-mono mb-8">\r\n                <strong>\u6700\u5F8C\u66F4\u65B0\u65E5\u671F\uFF1A</strong> 2026 \u5E74 9 \u6708 22 \u65E5\r\n            </p>\r\n\r\n            <div class="space-y-8 text-gray-300 text-sm leading-relaxed">\r\n                <p>\r\n                    \u6B61\u8FCE\u4F7F\u7528\u7531 <strong class="text-white">Loopvity</strong>\uFF08\u4EE5\u4E0B\u7C21\u7A31\u300C\u6211\u5011\u300D\u6216\u300C\u672C\u5DE5\u4F5C\u5BA4\u300D\uFF09\u6240\u7814\u767C\u7D93\u71DF\u4E4B\u5B98\u65B9\u7DB2\u7AD9\u53CA\u76F8\u95DC\u8EDF\u9AD4\u7522\u54C1\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u65BC Prompt Vault \u884C\u52D5\u61C9\u7528\u7A0B\u5F0F\u53CA\u672A\u4F86\u767C\u5E03\u4E4B\u4EFB\u4F55\u4ED8\u8CBB\u6216\u514D\u8CBB\u8EDF\u9AD4\uFF09\u3002\u7576\u60A8\u81EA Apple App Store \u6216 Google Play \u4E0B\u8F09\u3001\u5B89\u88DD\u6216\u4F7F\u7528\u6211\u5011\u7684\u61C9\u7528\u7A0B\u5F0F\uFF0C\u5373\u8868\u793A\u60A8\u5DF2\u95B1\u8B80\u3001\u7406\u89E3\u4E26\u540C\u610F\u9075\u5B88\u672C\u689D\u6B3E\u53CA\u7D30\u5247\u3002\r\n                </p>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">1. \u8EDF\u9AD4\u6388\u6B0A\u8207\u5408\u7406\u4F7F\u7528</h2>\r\n                    <p class="mb-3">\r\n                        \u6211\u5011\u6388\u4E88\u4F7F\u7528\u8005\u4E00\u9805\u500B\u4EBA\u3001\u975E\u5C08\u5C6C\u3001\u4E0D\u53EF\u8F49\u8B93\u4E14\u53EF\u64A4\u56DE\u7684\u8EDF\u9AD4\u4F7F\u7528\u6B0A\u5229\u3002\r\n                    </p>\r\n                    <ul class="list-disc list-inside space-y-2 text-gray-400 pl-2">\r\n                        <li>\u60A8\u50C5\u5F97\u65BC\u500B\u4EBA\u6301\u6709\u4E4B\u5408\u6CD5\u88DD\u7F6E\u4E0A\u4E0B\u8F09\u4E26\u4F7F\u7528\u672C\u61C9\u7528\u7A0B\u5F0F\u3002</li>\r\n                        <li>\u56B4\u7981\u5C0D\u61C9\u7528\u7A0B\u5F0F\u5B89\u88DD\u5305\u9032\u884C\u4EFB\u4F55\u53CD\u7DE8\u8B6F\u3001\u9006\u5411\u5DE5\u7A0B\u3001\u60E1\u610F\u7834\u89E3\u6216\u672A\u7D93\u6388\u6B0A\u4E4B\u4E8C\u6B21\u91CD\u65B0\u767C\u5E03\u884C\u70BA\u3002</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">2. \u96E2\u7DDA\u5132\u5B58\u67B6\u69CB\u8207\u4F7F\u7528\u8005\u8CAC\u4EFB</h2>\r\n                    <p class="mb-2">\r\n                        Prompt Vault \u53CA\u672C\u5718\u968A\u591A\u6578\u61C9\u7528\u7A0B\u5F0F\u63A1\u7528\u300C\u96E2\u7DDA\u512A\u5148\uFF08Local-first\uFF09\u300D\u67B6\u69CB\uFF1A\r\n                    </p>\r\n                    <ul class="list-disc list-inside space-y-2 text-gray-400 pl-2">\r\n                        <li>\u6240\u6709\u6587\u5B57\u6A21\u677F\u3001\u6A19\u7C64\u3001\u7B46\u8A18\u8207\u8A2D\u5B9A\u5747\u76F4\u63A5\u4FDD\u5B58\u5728\u4F7F\u7528\u8005\u7684\u500B\u5225\u672C\u6A5F\u88DD\u7F6E\u4E2D\uFF0C\u6211\u5011\u4E0D\u7DAD\u8B77\u4EA6\u7121\u6CD5\u5B58\u53D6\u60A8\u7684\u500B\u4EBA\u672C\u6A5F\u8CC7\u6599\u3002</li>\r\n                        <li>\u4F7F\u7528\u8005\u9808\u81EA\u884C\u59A5\u5584\u4F7F\u7528 App \u5167\u63D0\u4F9B\u4E4B\u300C\u532F\u51FA\u5099\u4EFD\u300D\u529F\u80FD\u4FDD\u5B58\u8CC7\u6599\u3002\u82E5\u56E0\u66F4\u63DB\u88DD\u7F6E\u3001\u786C\u9AD4\u6545\u969C\u3001\u7CFB\u7D71\u91CD\u8A2D\u6216\u672A\u5099\u4EFD\u5C0E\u81F4\u8CC7\u6599\u640D\u6BC0\u907A\u5931\uFF0C\u672C\u5DE5\u4F5C\u5BA4\u7121\u7FA9\u52D9\u4E14\u7121\u6280\u8853\u80FD\u529B\u81EA\u4F3A\u670D\u5668\u7AEF\u5354\u52A9\u627E\u56DE\u3002</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">3. \u4ED8\u8CBB\u4E0B\u8F09\u3001\u61C9\u7528\u5167\u8CFC\u8CB7 (IAP) \u8207\u8A02\u95B1\u898F\u7BC4</h2>\r\n                    <p class="mb-2">\r\n                        \u91DD\u5C0D Loopvity \u65D7\u4E0B\u53EF\u80FD\u63D0\u4F9B\u4E4B\u4ED8\u8CBB\u4E0B\u8F09\u61C9\u7528\u6216\u61C9\u7528\u5167\u9032\u968E\u589E\u503C\u529F\u80FD\uFF1A\r\n                    </p>\r\n                    <ul class="list-disc list-inside space-y-2 text-gray-400 pl-2">\r\n                        <li><strong>\u5B98\u65B9\u91D1\u6D41\u8655\u7406\uFF1A</strong> \u6240\u6709\u4ED8\u6B3E\u3001\u8A02\u95B1\u6263\u6B3E\u5747\u900F\u904E Apple App Store\uFF08In-App Purchase\uFF09\u6216 Google Play Billing \u5E73\u53F0\u5B8C\u6210\uFF0C\u4EA4\u6613\u5B89\u5168\u5B8C\u5168\u7531\u5404\u5927\u5B98\u65B9\u61C9\u7528\u5546\u5E97\u4FDD\u969C\u3002</li>\r\n                        <li><strong>\u9000\u6B3E\u653F\u7B56\uFF1A</strong> \u82E5\u60A8\u5C0D\u8CFC\u8CB7\u4E4B\u8EDF\u9AD4\u6216\u529F\u80FD\u7533\u8ACB\u9000\u6B3E\uFF0C\u9808\u4F9D\u64DA Apple \u6216 Google \u5B98\u65B9\u4E4B\u9000\u6B3E\u6D41\u7A0B\u8207\u653F\u7B56\u63D0\u51FA\u7533\u8ACB\uFF08\u4F8B\u5982\u900F\u904E reportaproblem.apple.com\uFF09\u3002\u9664\u9069\u7528\u6CD5\u5F8B\u53E6\u6709\u5F37\u5236\u898F\u5B9A\u5916\uFF0C\u672C\u5DE5\u4F5C\u5BA4\u7121\u6CD5\u76F4\u63A5\u5411\u4F7F\u7528\u8005\u9032\u884C\u73FE\u91D1\u9000\u6B3E\u64CD\u4F5C\u3002</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">4. \u667A\u6167\u8CA1\u7522\u6B0A\u8072\u660E</h2>\r\n                    <p>\r\n                        \u672C\u7DB2\u7AD9\u53CA\u76F8\u95DC App \u4E4B\u4ECB\u9762\u6392\u7248\u3001\u5716\u6A19\u5716\u5F62\u3001\u8996\u89BA\u7D20\u6750\u3001\u8EDF\u9AD4\u4EE3\u78BC\u53CA\u5546\u6A19\u540D\u7A31\uFF0C\u5747\u70BA Loopvity \u6216\u5176\u6388\u6B0A\u65B9\u4E4B\u5408\u6CD5\u667A\u6167\u8CA1\u7522\u6B0A\uFF0C\u53D7\u7248\u6B0A\u6CD5\u53CA\u76F8\u95DC\u570B\u969B\u689D\u7D04\u4FDD\u8B77\u3002\u4F7F\u7528\u8005\u81EA\u884C\u8F38\u5165\u4E26\u5132\u5B58\u65BC\u672C\u6A5F\u4E4B\u6587\u5B57\u5167\u5BB9\uFF0C\u7248\u6B0A\u6B78\u4F7F\u7528\u8005\u6240\u6709\u3002\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">5. \u514D\u8CAC\u8072\u660E\u8207\u8CAC\u4EFB\u9650\u5236</h2>\r\n                    <p class="mb-3">\r\n                        \u672C\u61C9\u7528\u7A0B\u5F0F\u4F9D\u300C\u73FE\u72C0\u300D\uFF08As-Is\uFF09\u53CA\u300C\u73FE\u6709\u57FA\u790E\u300D\u63D0\u4F9B\u670D\u52D9\uFF1A\r\n                    </p>\r\n                    <ul class="list-disc list-inside space-y-2 text-gray-400 pl-2">\r\n                        <li>\u6211\u5011\u6301\u7E8C\u7DAD\u8B77\u4E26\u512A\u5316\u8EDF\u9AD4\uFF0C\u4F46\u4E0D\u4FDD\u8B49\u7A0B\u5F0F\u5728\u6240\u6709\u7B2C\u4E09\u65B9\u5BA2\u88FD\u4F5C\u696D\u7CFB\u7D71\u4E0A\u5B8C\u5168\u4E0D\u4E2D\u65B7\u6216\u7D55\u7121\u5FAE\u5C0F\u7455\u75B5\u3002</li>\r\n                        <li>\u5728\u6CD5\u5F8B\u5141\u8A31\u4E4B\u6700\u5927\u7BC4\u570D\u5167\uFF0C\u672C\u5DE5\u4F5C\u5BA4\u5C0D\u65BC\u56E0\u4F7F\u7528\u6216\u7121\u6CD5\u4F7F\u7528\u672C\u8EDF\u9AD4\u6240\u7522\u751F\u4E4B\u4EFB\u4F55\u76F4\u63A5\u3001\u9593\u63A5\u6216\u884D\u751F\u6027\u8CC7\u6599\u907A\u5931\u6216\u696D\u52D9\u640D\u5931\uFF0C\u6982\u4E0D\u627F\u64D4\u4EFB\u4F55\u8CE0\u511F\u8CAC\u4EFB\u3002</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">6. \u9069\u7528\u6CD5\u5F8B\u8207\u722D\u8B70\u7BA1\u8F44</h2>\r\n                    <p>\r\n                        \u672C\u689D\u6B3E\u53CA\u7D30\u5247\u4E4B\u6210\u7ACB\u3001\u89E3\u91CB\u8207\u722D\u8B70\u89E3\u6C7A\u5747\u53D7\u9999\u6E2F\u7279\u5225\u884C\u653F\u5340\u6CD5\u5F8B\u7BA1\u8F44\u3002\u5982\u56E0\u672C\u689D\u6B3E\u5F15\u8D77\u4EFB\u4F55\u722D\u8B70\uFF0C\u96D9\u65B9\u540C\u610F\u5148\u5FAA\u8AA0\u4FE1\u53CB\u597D\u5354\u5546\u89E3\u6C7A\uFF1B\u5354\u5546\u4E0D\u6210\u6642\uFF0C\u61C9\u53D7\u9999\u6E2F\u7279\u5225\u884C\u653F\u5340\u6CD5\u9662\u4E4B\u975E\u5C08\u5C6C\u7BA1\u8F44\u3002\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">7. \u806F\u7D61\u8CC7\u8A0A</h2>\r\n                    <p class="mb-2">\r\n                        \u82E5\u60A8\u5C0D\u672C\u689D\u6B3E\u6216 App \u6388\u6B0A\u898F\u7BC4\u6709\u4EFB\u4F55\u7591\u554F\uFF0C\u8ACB\u8207\u6211\u5011\u806F\u7E6B\uFF1A\r\n                    </p>\r\n                    <p>\r\n                        <strong class="text-white">\u96FB\u5B50\u90F5\u4EF6\uFF1A</strong> \r\n                        <a href="mailto:loopvity@gmail.com" class="text-cyan-400 hover:underline">loopvity@gmail.com</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="mt-12 pt-6 border-t border-zinc-800 text-xs text-gray-500">\r\n                &copy; 2026 Loopvity Studio. All rights reserved.\r\n            </div>\r\n        </div>', "excerpt": "\u6700\u5F8C\u66F4\u65B0\u65E5\u671F\uFF1A 2026 \u5E74 9 \u6708 22 \u65E5", "cover": "\u{1F4DD}" }, { "file": "terms-en.html", "slug": "terms-en", "locale": "en", "kind": "page", "nav": 0, "navLabel": "Terms", "pair": "terms", "sort": 11, "title": "Terms &amp; Conditions", "metaTitle": "Terms &amp; Conditions | Loopvity", "metaDescription": "Terms &amp; Conditions for Loopvity applications and website. Detailing user rights, offline storage, paid downloads, and in-app purchase terms.", "mainClass": "flex-1 max-w-4xl mx-auto px-6 pt-28 md:pt-36 pb-20 w-full", "content": '<div class="card-glass rounded-3xl p-8 md:p-14 border border-zinc-800 shadow-2xl">\r\n            <div class="inline-block px-3 py-1 mb-6 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">\r\n                Terms &amp; Conditions\r\n            </div>\r\n\r\n            <h1 class="text-3xl sm:text-4xl font-black text-white mb-2 pb-5 border-b border-zinc-800">\r\n                Terms &amp; Conditions\r\n            </h1>\r\n\r\n            <p class="text-xs text-gray-500 font-mono mb-8">\r\n                <strong>Last Updated:</strong> September 22, 2026\r\n            </p>\r\n\r\n            <div class="space-y-8 text-gray-300 text-sm leading-relaxed">\r\n                <p>\r\n                    Welcome to <strong class="text-white">Loopvity</strong> ("we", "us", or "our"). By downloading, installing, or utilizing software applications published by Loopvity (including Prompt Vault and upcoming mobile or desktop software) or browsing our website, you agree to comply with and be bound by these Terms &amp; Conditions.\r\n                </p>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">1. Software License &amp; Permitted Use</h2>\r\n                    <p class="mb-3">\r\n                        We grant you a personal, revocable, non-exclusive, non-transferable license to install and run the application on authorized devices under your control.\r\n                    </p>\r\n                    <ul class="list-disc list-inside space-y-2 text-gray-400 pl-2">\r\n                        <li>You may not decompile, reverse engineer, disassemble, or derive the source code of the binary packages.</li>\r\n                        <li>You may not modify, redistribute, rent, lease, or create derivative works based on our software without express written permission.</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">2. Offline Architecture &amp; User Responsibility</h2>\r\n                    <p class="mb-2">\r\n                        Prompt Vault and our core utility apps are engineered with a strict local-first philosophy:\r\n                    </p>\r\n                    <ul class="list-disc list-inside space-y-2 text-gray-400 pl-2">\r\n                        <li>All user records, prompts, metadata, and preferences reside solely on your physical device. We maintain zero remote backups of your personal data.</li>\r\n                        <li>You bear sole responsibility for conducting manual backups via the in-app "Export Backup" JSON feature. In the event of device damage, reset, or loss, we have neither the obligation nor the technical capability to restore your local content.</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">3. Paid Downloads, In-App Purchases (IAP) &amp; Subscriptions</h2>\r\n                    <p class="mb-2">\r\n                        For any paid software downloads, in-app purchases, or premium tiers offered by Loopvity:\r\n                    </p>\r\n                    <ul class="list-disc list-inside space-y-2 text-gray-400 pl-2">\r\n                        <li><strong>Platform Billing:</strong> All payment transactions and subscriptions are processed directly through Apple App Store (In-App Purchase) or Google Play Billing systems.</li>\r\n                        <li><strong>Refund Policy:</strong> Refund requests are governed strictly by the policies of Apple and Google (e.g., via reportaproblem.apple.com). Except where mandated by local consumer protection laws, Loopvity does not directly issue cash refunds outside platform channels.</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">4. Intellectual Property Rights</h2>\r\n                    <p>\r\n                        All software binaries, UI designs, typography, brand assets, logos, and website code remain the exclusive property of Loopvity. You retain full intellectual property rights over any text or data you create and store inside our applications.\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">5. Disclaimer &amp; Limitation of Liability</h2>\r\n                    <p class="mb-3">\r\n                        Our software is provided on an "As-Is" and "As-Available" basis without warranties of any kind:\r\n                    </p>\r\n                    <ul class="list-disc list-inside space-y-2 text-gray-400 pl-2">\r\n                        <li>While we continuously optimize code stability, we do not warrant that operation will be entirely uninterrupted across all custom third-party operating systems.</li>\r\n                        <li>To the maximum extent permitted by applicable law, Loopvity disclaims liability for any indirect, incidental, or consequential damages resulting from data loss or software usage.</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">6. Governing Law &amp; Jurisdiction</h2>\r\n                    <p>\r\n                        These Terms &amp; Conditions are governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region. Any dispute arising out of or in connection with these terms shall be submitted to the non-exclusive jurisdiction of the courts of Hong Kong.\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">7. Contact Information</h2>\r\n                    <p class="mb-2">\r\n                        For any legal inquiries or software licensing questions, please contact:\r\n                    </p>\r\n                    <p>\r\n                        <strong class="text-white">Email:</strong> \r\n                        <a href="mailto:loopvity@gmail.com" class="text-cyan-400 hover:underline">loopvity@gmail.com</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="mt-12 pt-6 border-t border-zinc-800 text-xs text-gray-500">\r\n                &copy; 2026 Loopvity Studio. All rights reserved.\r\n            </div>\r\n        </div>', "excerpt": "Last Updated: September 22, 2026", "cover": "\u{1F4DD}" }, { "file": "cookie.html", "slug": "cookie", "locale": "zh", "kind": "page", "nav": 0, "navLabel": "Cookie \u653F\u7B56", "pair": "cookie-en", "sort": 12, "title": "Cookie \u653F\u7B56 (Cookie Policy)", "metaTitle": "Cookie \u653F\u7B56 Cookie Policy | Loopvity", "metaDescription": "Loopvity \u7684 Cookie \u4F7F\u7528\u653F\u7B56\u3002\u8AAA\u660E\u6211\u5011\u5728\u5B98\u65B9\u7DB2\u7AD9\u4E0A\u5982\u4F55\u4F7F\u7528\u5FC5\u8981\u4E4B\u700F\u89BD\u5668\u672C\u5730\u5132\u5B58\u8207 Cookie \u6280\u8853\u3002", "mainClass": "flex-1 max-w-4xl mx-auto px-6 pt-28 md:pt-36 pb-20 w-full", "content": '<div class="card-glass rounded-3xl p-8 md:p-14 border border-zinc-800 shadow-2xl">\r\n            <div class="inline-block px-3 py-1 mb-6 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">\r\n                Cookie Policy\r\n            </div>\r\n\r\n            <h1 class="text-3xl sm:text-4xl font-black text-white mb-2 pb-5 border-b border-zinc-800">\r\n                Cookie \u653F\u7B56 (Cookie Policy)\r\n            </h1>\r\n\r\n            <p class="text-xs text-gray-500 font-mono mb-8">\r\n                <strong>\u6700\u5F8C\u66F4\u65B0\u65E5\u671F\uFF1A</strong> 2026 \u5E74 9 \u6708 22 \u65E5\r\n            </p>\r\n\r\n            <div class="space-y-8 text-gray-300 text-sm leading-relaxed">\r\n                <p>\r\n                    \u672C Cookie \u653F\u7B56\u65E8\u5728\u5411\u60A8\u8AAA\u660E <strong class="text-white">Loopvity</strong> \u5982\u4F55\u5728\u5B98\u65B9\u7DB2\u7AD9\u4E2D\u4F7F\u7528 Cookie \u8207\u76F8\u95DC\u700F\u89BD\u5668\u6280\u8853\u3002\u6211\u5011\u5805\u6301\u6975\u7C21\u8207\u96B1\u79C1\u81F3\u4E0A\u539F\u5247\uFF0C\u907F\u514D\u4F7F\u7528\u975E\u5FC5\u8981\u4E4B\u7B2C\u4E09\u65B9\u8FFD\u8E64\u6A19\u8A18\u3002\r\n                </p>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">1. \u4EC0\u9EBC\u662F Cookie\uFF1F</h2>\r\n                    <p>\r\n                        Cookie \u662F\u7576\u60A8\u700F\u89BD\u7DB2\u7AD9\u6642\u5B58\u653E\u5728\u60A8\u96FB\u8166\u6216\u884C\u52D5\u88DD\u7F6E\u700F\u89BD\u5668\u4E2D\u7684\u5FAE\u5C0F\u578B\u6587\u5B57\u6A94\u6848\u3002\u5B83\u80FD\u5354\u52A9\u7DB2\u7AD9\u8A18\u4F4F\u60A8\u7684\u504F\u597D\u8A2D\u5B9A\uFF08\u4F8B\u5982\u8A9E\u8A00\u9078\u64C7\u3001\u4ECB\u9762\u98A8\u683C\u7B49\uFF09\uFF0C\u8B93\u60A8\u5728\u4E0B\u6B21\u9020\u8A2A\u6642\u7372\u5F97\u4E00\u81F4\u7684\u700F\u89BD\u9AD4\u9A57\u3002\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">2. \u6211\u5011\u4F7F\u7528\u7684 Cookie \u985E\u5225</h2>\r\n                    <ul class="list-disc list-inside space-y-3 text-gray-400 pl-2">\r\n                        <li>\r\n                            <strong class="text-white">\u5FC5\u8981\u6027\u6280\u8853 Cookie (Essential Cookies)\uFF1A</strong> \u652F\u63F4\u7DB2\u7AD9\u6B63\u5E38\u904B\u884C\u7684\u6838\u5FC3\u6A94\u6848\uFF08\u4F8B\u5982\u7DAD\u6301\u4ECB\u9762\u8A9E\u8A00\u504F\u597D\u3001CDN \u7BC0\u9EDE\u8CA0\u8F09\u5747\u8861\uFF09\uFF0C\u4E0D\u5305\u542B\u4EFB\u4F55\u500B\u4EBA\u8EAB\u5206\u8FFD\u8E64\u3002\r\n                        </li>\r\n                        <li>\r\n                            <strong class="text-white">\u504F\u597D\u8A2D\u5B9A Cookie (Preference Cookies)\uFF1A</strong> \u8A18\u9304\u60A8\u7684\u700F\u89BD\u504F\u597D\u9078\u64C7\uFF0C\u78BA\u4FDD\u6BCF\u6B21\u8FD4\u56DE\u7DB2\u7AD9\u6642\u4FDD\u6301\u8A2D\u5B9A\u3002\r\n                        </li>\r\n                        <li>\r\n                            <strong class="text-white">\u96F6\u7B2C\u4E09\u65B9\u5EE3\u544A\u8207\u884C\u92B7\u8FFD\u8E64\uFF1A</strong> \u672C\u7DB2\u7AD9\u53CA\u65D7\u4E0B Prompt Vault \u61C9\u7528\u7A0B\u5F0F<strong>\u5747\u4E0D\u90E8\u7F72</strong>\u4EFB\u4F55\u8DE8\u7DB2\u7AD9\u8FFD\u8E64\u3001\u7B2C\u4E09\u65B9\u5EE3\u544A\u6295\u653E\u6216\u4F7F\u7528\u8005\u6578\u64DA\u8F2A\u5ED3\u63CF\u7E6A Cookie\u3002\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">3. \u5982\u4F55\u63A7\u5236\u6216\u6E05\u9664 Cookie\uFF1F</h2>\r\n                    <p>\r\n                        \u60A8\u53EF\u96A8\u6642\u900F\u904E\u700F\u89BD\u5668\u4E4B\u8A2D\u5B9A\uFF08Settings / Preferences\uFF09\u4F9D\u500B\u4EBA\u559C\u597D\u81EA\u8A02\u3001\u505C\u7528\u6216\u6E05\u9664\u5DF2\u5132\u5B58\u4E4B Cookie\u3002\u8ACB\u6CE8\u610F\uFF0C\u505C\u7528\u5FC5\u8981\u6027 Cookie \u53EF\u80FD\u5C0E\u81F4\u90E8\u5206\u9801\u9762\u529F\u80FD\u7121\u6CD5\u6B63\u5E38\u5448\u73FE\u3002\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">4. \u653F\u7B56\u66F4\u65B0</h2>\r\n                    <p>\r\n                        \u6211\u5011\u4FDD\u7559\u9069\u6642\u8ABF\u6574\u672C Cookie \u653F\u7B56\u4EE5\u7B26\u5408\u6700\u65B0\u6CD5\u4EE4\u6A19\u6E96\u4E4B\u6B0A\u5229\u3002\u6700\u65B0\u4FEE\u8A02\u7248\u672C\u767C\u5E03\u65BC\u672C\u9801\u9762\u5373\u523B\u751F\u6548\u3002\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">5. \u806F\u7D61\u8CC7\u8A0A</h2>\r\n                    <p class="mb-2">\r\n                        \u82E5\u60A8\u5C0D\u672C\u7DB2\u7AD9\u7684 Cookie \u653F\u7B56\u6709\u4EFB\u4F55\u554F\u984C\uFF0C\u8ACB\u806F\u7D61\u6211\u5011\uFF1A\r\n                    </p>\r\n                    <p>\r\n                        <strong class="text-white">\u96FB\u5B50\u90F5\u4EF6\uFF1A</strong> \r\n                        <a href="mailto:loopvity@gmail.com" class="text-cyan-400 hover:underline">loopvity@gmail.com</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="mt-12 pt-6 border-t border-zinc-800 text-xs text-gray-500">\r\n                &copy; 2026 Loopvity Studio. All rights reserved.\r\n            </div>\r\n        </div>', "excerpt": "\u6700\u5F8C\u66F4\u65B0\u65E5\u671F\uFF1A 2026 \u5E74 9 \u6708 22 \u65E5", "cover": "\u{1F4DD}" }, { "file": "cookie-en.html", "slug": "cookie-en", "locale": "en", "kind": "page", "nav": 0, "navLabel": "Cookies", "pair": "cookie", "sort": 12, "title": "Cookie Policy", "metaTitle": "Cookie Policy | Loopvity", "metaDescription": "Cookie Policy for Loopvity. Explaining how we deploy essential browser storage and cookie technologies across our official website.", "mainClass": "flex-1 max-w-4xl mx-auto px-6 pt-28 md:pt-36 pb-20 w-full", "content": '<div class="card-glass rounded-3xl p-8 md:p-14 border border-zinc-800 shadow-2xl">\r\n            <div class="inline-block px-3 py-1 mb-6 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">\r\n                Cookie Policy\r\n            </div>\r\n\r\n            <h1 class="text-3xl sm:text-4xl font-black text-white mb-2 pb-5 border-b border-zinc-800">\r\n                Cookie Policy\r\n            </h1>\r\n\r\n            <p class="text-xs text-gray-500 font-mono mb-8">\r\n                <strong>Last Updated:</strong> September 22, 2026\r\n            </p>\r\n\r\n            <div class="space-y-8 text-gray-300 text-sm leading-relaxed">\r\n                <p>\r\n                    This Cookie Policy explains how <strong class="text-white">Loopvity</strong> deploys cookies and similar browser storage mechanisms on our website. We uphold a privacy-first ethos and avoid unnecessary tracking tags.\r\n                </p>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">1. What Are Cookies?</h2>\r\n                    <p>\r\n                        Cookies are small text files placed on your browser when visiting a website. They preserve state information (such as language preference and interface themes) to ensure consistent sessions.\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">2. Categories of Cookies We Use</h2>\r\n                    <ul class="list-disc list-inside space-y-3 text-gray-400 pl-2">\r\n                        <li>\r\n                            <strong class="text-white">Essential Technical Cookies:</strong> Vital for basic site rendering, language memory, and edge CDN routing. These do not harvest personal information.\r\n                        </li>\r\n                        <li>\r\n                            <strong class="text-white">Preference Cookies:</strong> Used to maintain user configurations across subsequent visits.\r\n                        </li>\r\n                        <li>\r\n                            <strong class="text-white">Zero Third-Party Advertising Trackers:</strong> Neither our website nor our Prompt Vault application utilizes third-party marketing, analytics, or behavioral profiling cookies.\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">3. Managing and Deleting Cookies</h2>\r\n                    <p>\r\n                        You can configure, block, or clear cookies at any time via your browser settings. Please note that disabling essential technical cookies may impact certain interface features.\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">4. Policy Revisions</h2>\r\n                    <p>\r\n                        We may update this policy to align with technological adjustments or regulatory standards. Revisions take effect immediately upon publication on this page.\r\n                    </p>\r\n                </div>\r\n\r\n                <div>\r\n                    <h2 class="text-lg font-bold text-cyan-400 mb-3">5. Contact Information</h2>\r\n                    <p class="mb-2">\r\n                        If you have inquiries regarding our Cookie Policy, reach out to us at:\r\n                    </p>\r\n                    <p>\r\n                        <strong class="text-white">Email:</strong> \r\n                        <a href="mailto:loopvity@gmail.com" class="text-cyan-400 hover:underline">loopvity@gmail.com</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="mt-12 pt-6 border-t border-zinc-800 text-xs text-gray-500">\r\n                &copy; 2026 Loopvity Studio. All rights reserved.\r\n            </div>\r\n        </div>', "excerpt": "Last Updated: September 22, 2026", "cover": "\u{1F4DD}" }, { "file": "article-prompt-vault.html", "slug": "article-prompt-vault", "locale": "zh", "kind": "post", "nav": 0, "navLabel": "", "pair": "article-prompt-vault-en", "sort": 1, "category": "\u7522\u54C1\u5C08\u6587", "published": "2026-09-23", "title": "Prompt Vault\uFF1A\u5C08\u70BA AI \u9AD8\u983B\u4F7F\u7528\u8005\u6253\u9020\u7684 100% \u96E2\u7DDA\u63D0\u793A\u8A5E\u6536\u7D0D\u5EAB", "metaTitle": "Prompt Vault\uFF1A\u5C08\u70BA AI \u9AD8\u983B\u4F7F\u7528\u8005\u6253\u9020\u7684 100% \u96E2\u7DDA\u63D0\u793A\u8A5E\u6536\u7D0D\u5EAB | Loopvity Blog", "metaDescription": "\u6DF1\u5EA6\u5256\u6790 Prompt Vault \u7684\u8A2D\u8A08\u521D\u8877\u8207\u67B6\u69CB\u3002\u89E3\u6C7A AI \u5275\u4F5C\u8005\u6307\u4EE4\u6563\u843D\u75DB\u9EDE\uFF0C\u63D0\u4F9B\u52D5\u614B\u8B8A\u6578\u5408\u6210\u3001\u96D9\u64CA\u6975\u901F\u8907\u88FD\u8207\u672C\u6A5F\u96E2\u7DDA\u5B89\u5168\u5132\u5B58\u3002", "mainClass": "flex-1 max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-20 w-full", "content": '<!-- \u8FD4\u56DE\u9023\u7D50 -->\r\n        <div class="mb-8">\r\n            <a href="blog.html" class="text-xs font-bold text-cyan-400 hover:underline inline-flex items-center gap-1.5">\r\n                <span>\u2190</span> \u8FD4\u56DE Blog \u6587\u7AE0\u5217\u8868\r\n            </a>\r\n        </div>\r\n\r\n        <!-- \u6587\u7AE0\u5167\u5BB9\u5BB9\u5668 -->\r\n        <article class="card-glass rounded-3xl p-8 md:p-14 border border-zinc-800 shadow-2xl">\r\n            <!-- \u6587\u7AE0 Meta -->\r\n            <div class="flex items-center gap-3 mb-6">\r\n                <span class="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full uppercase tracking-wider">\u7522\u54C1\u5C08\u6587</span>\r\n                <span class="text-xs text-gray-500 font-mono">2026-09-23</span>\r\n                <span class="text-xs text-gray-500">\xB7 5 \u5206\u9418\u95B1\u8B80</span>\r\n            </div>\r\n\r\n            <!-- \u4E3B\u6A19\u984C -->\r\n            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-8">\r\n                Prompt Vault\uFF1A\u5C08\u70BA AI \u9AD8\u983B\u4F7F\u7528\u8005\u6253\u9020\u7684 100% \u96E2\u7DDA\u63D0\u793A\u8A5E\u6536\u7D0D\u5EAB\r\n            </h1>\r\n\r\n            <!-- \u6A6B\u5E45\u88DD\u98FE\u5716\u793A -->\r\n            <div class="w-full h-48 sm:h-64 bg-gradient-to-br from-cyan-950/60 via-zinc-900 to-zinc-950 rounded-2xl flex flex-col items-center justify-center border border-zinc-800 mb-10 text-6xl shadow-inner">\r\n                <span>\u26A1\uFE0F</span>\r\n                <span class="text-xs font-mono font-bold text-cyan-400 mt-3 tracking-widest uppercase">Prompt Vault Release Note</span>\r\n            </div>\r\n\r\n            <!-- \u6B63\u6587\u5167\u5BB9 -->\r\n            <div class="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">\r\n                <div>\r\n                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">\u8D77\u6E90\uFF1A\u7576\u751F\u6210\u5F0F AI \u6210\u70BA\u65E5\u5E38\u5DE5\u4F5C\u6D41</h2>\r\n                    <p class="text-gray-400 leading-relaxed">\r\n                        \u96A8\u8457 ChatGPT\u3001Claude\u3001Midjourney \u7B49\u751F\u6210\u5F0F AI \u5DE5\u5177\u6DF1\u5165\u65E5\u5E38\u5DE5\u4F5C\uFF0C\u6211\u5011\u767C\u73FE\u63D0\u793A\u8A5E\uFF08Prompts\uFF09\u5DF2\u7D93\u6F14\u8B8A\u70BA\u5275\u4F5C\u8005\u8207\u5DE5\u7A0B\u5E2B\u7684\u6838\u5FC3\u751F\u7522\u529B\u8CC7\u7522\u3002\u7136\u800C\uFF0C\u591A\u6578\u4EBA\u7BA1\u7406\u63D0\u793A\u8A5E\u7684\u73FE\u72C0\u537B\u5145\u6EFF\u6469\u64E6\uFF1A\r\n                    </p>\r\n                    <ul class="list-disc list-inside space-y-2 text-gray-400 pl-2 mt-3">\r\n                        <li>\u6A21\u677F\u6563\u843D\u5728\u4E0D\u540C\u901A\u8A0A\u8EDF\u9AD4\u3001\u7D14\u6587\u5B57\u8A18\u4E8B\u7C3F\u6216\u96F2\u7AEF\u7B46\u8A18\u4E2D\uFF0C\u67E5\u627E\u6975\u70BA\u8017\u6642\u3002</li>\r\n                        <li>\u6BCF\u6B21\u8907\u88FD\u6A21\u677F\u5F8C\uFF0C\u5FC5\u9808\u624B\u52D5\u5728\u5C0D\u8A71\u6846\u5167\u5C0B\u627E\u4F54\u4F4D\u7B26\u9010\u4E00\u66FF\u63DB\u8B8A\u6578\uFF0C\u5BB9\u6613\u6F0F\u6539\u6216\u51FA\u932F\u3002</li>\r\n                        <li>\u96F2\u7AEF\u7B46\u8A18\u8EDF\u9AD4\u5B58\u5728\u9023\u7DDA\u5EF6\u9072\uFF0C\u4E14\u8B93\u654F\u611F\u7684\u5546\u696D\u63D0\u793A\u8A5E\u627F\u64D4\u5916\u90E8\u6578\u64DA\u6D29\u6F0F\u7684\u98A8\u96AA\u3002</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class="border-t border-zinc-800/80 pt-8">\r\n                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">\u6838\u5FC3\u89E3\u6CD5\uFF1A\u4E09\u5927\u9AD8\u6548\u7387\u4EA4\u4E92\u8A2D\u8A08</h2>\r\n                    <p class="text-gray-400 leading-relaxed mb-4">\r\n                        Prompt Vault \u7684\u8A2D\u8A08\u54F2\u5B78\u975E\u5E38\u660E\u78BA\uFF1A<strong>\u62CB\u68C4\u7E41\u96DC\u7684\u80CC\u666F\u5197\u9918\uFF0C\u5C07\u300C\u8ABF\u7528\u901F\u5EA6\u300D\u8207\u300C\u96B1\u79C1\u5B89\u5168\u300D\u505A\u5230\u6975\u81F4</strong>\u3002\r\n                    </p>\r\n                    <div class="space-y-4">\r\n                        <div class="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">\r\n                            <h3 class="font-bold text-white text-base mb-1">1. \u96D9\u64CA\u6975\u901F\u8907\u88FD\u624B\u52E2 (Double-Tap to Copy)</h3>\r\n                            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">\r\n                                \u5728\u6E05\u55AE\u4E2D\u55AE\u64CA\u5361\u7247\u53EF\u5C55\u958B\u5B8C\u6574\u9810\u89BD\uFF1B\u96D9\u64CA\u5361\u7247\u5247\u76F4\u63A5\u5C07\u5B8C\u6574\u8A9E\u53E5\u8907\u88FD\u81F3\u526A\u8CBC\u7C3F\uFF0C\u4E26\u4F34\u96A8\u8F15\u5FAE\u9707\u52D5\u53CD\u994B\uFF0C\u96A8\u5373\u80FD\u7121\u7E2B\u5207\u63DB\u5230 AI \u5DE5\u5177\u8CBC\u4E0A\u3002\r\n                            </p>\r\n                        </div>\r\n                        <div class="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">\r\n                            <h3 class="font-bold text-white text-base mb-1">2. \u8B8A\u6578\u52D5\u614B\u5373\u6642\u5408\u6210 (Dynamic Placeholders)</h3>\r\n                            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">\r\n                                \u652F\u63F4\u4EE5\u5927\u62EC\u865F\u6A19\u8A3B\u52D5\u614B\u6B04\u4F4D\uFF08\u4F8B\u5982\uFF1A<code class="text-cyan-400 bg-zinc-800 px-1 py-0.5 rounded font-mono text-xs">{\u8A9E\u8A00}</code>\uFF09\u3002\u958B\u555F\u9810\u89BD\u6642\u7CFB\u7D71\u81EA\u52D5\u751F\u6210\u7368\u7ACB\u8F38\u5165\u6B04\uFF0C\u586B\u5BEB\u5167\u5BB9\u5F8C\u5373\u6642\u5408\u6210\u6700\u7D42\u6307\u4EE4\uFF0C\u7121\u9700\u624B\u52D5\u5C0B\u627E\u6587\u5B57\u66FF\u63DB\u3002\r\n                            </p>\r\n                        </div>\r\n                        <div class="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">\r\n                            <h3 class="font-bold text-white text-base mb-1">3. \u672C\u6A5F 15 \u6B21\u4FEE\u6539\u7248\u672C\u6B77\u7A0B (Revision History)</h3>\r\n                            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">\r\n                                \u91DD\u5C0D\u591A\u6B21\u5FAE\u8ABF\u8FED\u4EE3\u7684\u5C08\u696D\u63D0\u793A\u8A5E\uFF0CApp \u65BC\u672C\u5730\u81EA\u52D5\u4FDD\u5B58\u6700\u8FD1 15 \u6B21\u6B77\u53F2\u4FEE\u6539\u7248\u672C\uFF0C\u65B9\u4FBF\u5C0D\u7167\u6548\u679C\u5DEE\u7570\u6216\u4E00\u9375\u9084\u539F\u81F3\u5148\u524D\u7684\u6210\u529F\u72C0\u614B\u3002\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="border-t border-zinc-800/80 pt-8">\r\n                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">\u67B6\u69CB\u627F\u8AFE\uFF1A100% \u96E2\u7DDA\u8207\u8CC7\u6599\u81EA\u4E3B</h2>\r\n                    <p class="text-gray-400 leading-relaxed mb-3">\r\n                        Prompt Vault \u63A1\u7528\u56B4\u683C\u7684 <strong>Local-first\uFF08\u96E2\u7DDA\u512A\u5148\uFF09</strong> \u67B6\u69CB\uFF1A\r\n                    </p>\r\n                    <ul class="list-disc list-inside space-y-2 text-gray-400 pl-2">\r\n                        <li><strong>\u96F6\u5E33\u865F\u9AD4\u7CFB\uFF1A</strong> \u5B89\u88DD\u958B\u555F\u5373\u7528\uFF0C\u7121\u9700\u8A3B\u518A\u6216\u767B\u5165\u4EFB\u4F55\u5E33\u6236\u3002</li>\r\n                        <li><strong>\u96F6\u7DB2\u8DEF\u6B0A\u9650\uFF1A</strong> \u61C9\u7528\u7A0B\u5F0F\u4E0D\u5305\u542B\u4EFB\u4F55\u9060\u7AEF\u8CC7\u6599\u5EAB\u9023\u7DDA\u3001\u5206\u6790\u8FFD\u8E64 SDK \u6216\u9059\u6E2C\u4EE3\u78BC\u3002</li>\r\n                        <li><strong>\u81EA\u4E3B\u5099\u4EFD\uFF1A</strong> \u96A8\u6642\u53EF\u5C07\u5168\u90E8\u63D0\u793A\u8A5E\u6253\u5305\u532F\u51FA\u70BA\u7D14 JSON \u6A94\u6848\uFF0C\u5B8C\u5168\u7531\u4F7F\u7528\u8005\u81EA\u4E3B\u5099\u4EFD\u81F3\u500B\u4EBA\u786C\u789F\u6216\u63DB\u6A5F\u79FB\u8F49\u3002</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <!-- \u7522\u54C1\u901A\u9053\u5F15\u5C0E -->\r\n                <div class="bg-gradient-to-r from-cyan-950/40 to-blue-950/40 p-6 sm:p-8 rounded-2xl border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 mt-10">\r\n                    <div>\r\n                        <h3 class="text-lg font-bold text-white mb-1">\u63A2\u7D22 Prompt Vault \u7522\u54C1\u8A73\u60C5</h3>\r\n                        <p class="text-xs text-gray-400">\u76EE\u524D\u96D9\u5E73\u53F0\u5546\u5E97\u767C\u5E03\u6D41\u7A0B\u5C31\u7DD2\u4E2D\uFF0C\u6B61\u8FCE\u67E5\u770B\u5B8C\u6574\u529F\u80FD\u8207\u898F\u683C\u3002</p>\r\n                    </div>\r\n                    <a href="cases.html" class="shrink-0 bg-white text-gray-950 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-gray-200 transition shadow-lg">\r\n                        \u524D\u5F80\u7522\u54C1\u9801\u9762\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </article>', "excerpt": "\u96A8\u8457 ChatGPT\u3001Claude\u3001Midjourney \u7B49\u751F\u6210\u5F0F AI \u5DE5\u5177\u6DF1\u5165\u65E5\u5E38\u5DE5\u4F5C\uFF0C\u6211\u5011\u767C\u73FE\u63D0\u793A\u8A5E\uFF08Prompts\uFF09\u5DF2\u7D93\u6F14\u8B8A\u70BA\u5275\u4F5C\u8005\u8207\u5DE5\u7A0B\u5E2B\u7684\u6838\u5FC3\u751F\u7522\u529B\u8CC7\u7522\u3002\u7136\u800C\uFF0C\u591A\u6578\u4EBA\u7BA1\u7406\u63D0\u793A\u8A5E\u7684\u73FE\u72C0\u537B\u5145\u6EFF\u6469\u64E6\uFF1A", "cover": "\u{1F4DD}" }, { "file": "article-prompt-vault-en.html", "slug": "article-prompt-vault-en", "locale": "en", "kind": "post", "nav": 0, "navLabel": "", "pair": "article-prompt-vault", "sort": 1, "category": "Product", "published": "2026-09-23", "title": "Prompt Vault: The 100% Offline Prompt Repository for AI Power Users", "metaTitle": "Prompt Vault: The 100% Offline Prompt Repository for AI Power Users | Loopvity Blog", "metaDescription": "A deep dive into why Prompt Vault was engineered: solving scattered note templates with dynamic variable synthesis, double-tap copying, and local storage privacy.", "mainClass": "flex-1 max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-20 w-full", "content": '<!-- Back Link -->\r\n        <div class="mb-8">\r\n            <a href="blog-en.html" class="text-xs font-bold text-cyan-400 hover:underline inline-flex items-center gap-1.5">\r\n                <span>\u2190</span> Back to Blog Posts\r\n            </a>\r\n        </div>\r\n\r\n        <!-- Article Container -->\r\n        <article class="card-glass rounded-3xl p-8 md:p-14 border border-zinc-800 shadow-2xl">\r\n            <!-- Meta -->\r\n            <div class="flex items-center gap-3 mb-6">\r\n                <span class="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full uppercase tracking-wider">Product Article</span>\r\n                <span class="text-xs text-gray-500 font-mono">2026-09-23</span>\r\n                <span class="text-xs text-gray-500">\xB7 5 min read</span>\r\n            </div>\r\n\r\n            <!-- Title -->\r\n            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-8">\r\n                Prompt Vault: The 100% Offline Prompt Repository for AI Power Users\r\n            </h1>\r\n\r\n            <!-- Banner Graphic -->\r\n            <div class="w-full h-48 sm:h-64 bg-gradient-to-br from-cyan-950/60 via-zinc-900 to-zinc-950 rounded-2xl flex flex-col items-center justify-center border border-zinc-800 mb-10 text-6xl shadow-inner">\r\n                <span>\u26A1\uFE0F</span>\r\n                <span class="text-xs font-mono font-bold text-cyan-400 mt-3 tracking-widest uppercase">Prompt Vault Architecture Note</span>\r\n            </div>\r\n\r\n            <!-- Article Body -->\r\n            <div class="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">\r\n                <div>\r\n                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">Origin: When Generative AI Becomes Daily Work</h2>\r\n                    <p class="text-gray-400 leading-relaxed">\r\n                        As LLM tools like ChatGPT, Claude, and Midjourney have become fundamental drivers of knowledge workflows, prompt engineering has evolved into intellectual capital. Yet managing prompt templates remains full of friction:\r\n                    </p>\r\n                    <ul class="list-disc list-inside space-y-2 text-gray-400 pl-2 mt-3">\r\n                        <li>Templates are fragmented across chat apps, text editors, or note platforms, demanding constant hunting.</li>\r\n                        <li>Filling out dynamic variables inside messy dialog inputs frequently causes typos or missed tags.</li>\r\n                        <li>Cloud note syncing exposes sensitive proprietary prompts to remote third-party servers.</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class="border-t border-zinc-800/80 pt-8">\r\n                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">Core Solutions: Three High-Efficiency Workflows</h2>\r\n                    <p class="text-gray-400 leading-relaxed mb-4">\r\n                        Prompt Vault was engineered with a clear principle: <strong>eliminate background overhead to maximize access speed and absolute privacy</strong>.\r\n                    </p>\r\n                    <div class="space-y-4">\r\n                        <div class="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">\r\n                            <h3 class="font-bold text-white text-base mb-1">1. Double-Tap Fast Gesture Copying</h3>\r\n                            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">\r\n                                Single tap expands cards for preview; double tap immediately copies full statements to your clipboard with subtle haptic feedback, ready to paste into any model.\r\n                            </p>\r\n                        </div>\r\n                        <div class="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">\r\n                            <h3 class="font-bold text-white text-base mb-1">2. Live Dynamic Variable Synthesis</h3>\r\n                            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">\r\n                                Insert curly brackets (e.g., <code class="text-cyan-400 bg-zinc-800 px-1 py-0.5 rounded font-mono text-xs">{language}</code>) inside your templates. When opening preview, the app dynamically extracts input fields and synthesizes the finalized statement on the fly.\r\n                            </p>\r\n                        </div>\r\n                        <div class="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">\r\n                            <h3 class="font-bold text-white text-base mb-1">3. Local 15-Revision History Logs</h3>\r\n                            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">\r\n                                For iterative refinement, the app automatically logs 15 recent edits locally on your device, making it effortless to compare phrasing iterations or revert with a single tap.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="border-t border-zinc-800/80 pt-8">\r\n                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">Architecture: 100% Offline-First Autonomy</h2>\r\n                    <p class="text-gray-400 leading-relaxed mb-3">\r\n                        Prompt Vault is constructed under a strict <strong>Local-first</strong> philosophy:\r\n                    </p>\r\n                    <ul class="list-disc list-inside space-y-2 text-gray-400 pl-2">\r\n                        <li><strong>Zero Account Barrier:</strong> Operates immediately upon installation without registration or login.</li>\r\n                        <li><strong>Zero Telemetry:</strong> No remote databases, analytics SDKs, or background pings.</li>\r\n                        <li><strong>Autonomous Export:</strong> Users can package all content into a standard JSON file at any time for manual backups or device migration.</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <!-- Product CTA Box -->\r\n                <div class="bg-gradient-to-r from-cyan-950/40 to-blue-950/40 p-6 sm:p-8 rounded-2xl border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 mt-10">\r\n                    <div>\r\n                        <h3 class="text-lg font-bold text-white mb-1">Explore Prompt Vault</h3>\r\n                        <p class="text-xs text-gray-400">Releasing soon on iOS and Android app stores. View full specs and FAQ.</p>\r\n                    </div>\r\n                    <a href="cases-en.html" class="shrink-0 bg-white text-gray-950 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-gray-200 transition shadow-lg">\r\n                        Go to Products Page\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </article>', "excerpt": "As LLM tools like ChatGPT, Claude, and Midjourney have become fundamental drivers of knowledge workflows, prompt engineering has evolved into intellectual capital. Yet managing prompt templates remains full of friction:", "cover": "\u{1F4DD}" }, { "file": "article-app-native-vs-cross.html", "slug": "article-app-native-vs-cross", "locale": "zh", "kind": "post", "nav": 0, "navLabel": "", "pair": "article-app-native-vs-cross-en", "sort": 2, "category": "APP \u958B\u767C", "published": "2026-09-20", "title": "APP \u958B\u767C\u9078\u578B\u5206\u6790\uFF1A\u539F\u751F\u958B\u767C\u8207\u8DE8\u5E73\u53F0\u6846\u67B6\u8A55\u4F30", "metaTitle": "APP \u958B\u767C\u9078\u578B\u5206\u6790\uFF1A\u539F\u751F\u958B\u767C\u8207\u8DE8\u5E73\u53F0\u6846\u67B6\u8A55\u4F30 | Loopvity Blog", "metaDescription": "\u7368\u7ACB App \u5DE5\u4F5C\u5BA4\u5982\u4F55\u8A55\u4F30\u539F\u751F\u958B\u767C\u8207\u8DE8\u5E73\u53F0\u6846\u67B6\u3002\u6BD4\u8F03 iOS\u3001Android\u3001Flutter\u3001React Native \u5728\u7814\u767C\u9031\u671F\u3001\u6548\u80FD\u3001\u786C\u9AD4\u6B0A\u9650\u8207\u9577\u671F\u7DAD\u8B77\u6210\u672C\u4E0A\u7684\u53D6\u6368\u3002", "mainClass": "flex-1 max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-20 w-full", "content": '<div class="mb-8">\r\n            <a href="blog.html" class="text-xs font-bold text-cyan-400 hover:underline inline-flex items-center gap-1.5">\r\n                <span>\u2190</span> \u8FD4\u56DE Blog \u6587\u7AE0\u5217\u8868\r\n            </a>\r\n        </div>\r\n\r\n        <article class="card-glass rounded-3xl p-8 md:p-14 border border-zinc-800 shadow-2xl">\r\n            <div class="flex items-center gap-3 mb-6">\r\n                <span class="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full uppercase tracking-wider">APP \u958B\u767C</span>\r\n                <span class="text-xs text-gray-500 font-mono">2026-09-20</span>\r\n                <span class="text-xs text-gray-500">\xB7 8 \u5206\u9418\u95B1\u8B80</span>\r\n            </div>\r\n\r\n            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-8">\r\n                APP \u958B\u767C\u9078\u578B\u5206\u6790\uFF1A\u539F\u751F\u958B\u767C\u8207\u8DE8\u5E73\u53F0\u6846\u67B6\u8A55\u4F30\r\n            </h1>\r\n\r\n            <div class="w-full h-48 sm:h-64 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 rounded-2xl flex flex-col items-center justify-center border border-zinc-800 mb-10 text-6xl shadow-inner">\r\n                <span>\u{1F4F1}</span>\r\n                <span class="text-xs font-mono font-bold text-cyan-400 mt-3 tracking-widest uppercase">Native vs Cross-Platform</span>\r\n            </div>\r\n\r\n            <div class="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">\r\n                <div>\r\n                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">\u70BA\u4EC0\u9EBC\u7368\u7ACB\u5DE5\u4F5C\u5BA4\u5FC5\u9808\u5148\u8AC7\u9078\u578B</h2>\r\n                    <p class="text-gray-400 leading-relaxed mb-3">\r\n                        \u5C0D\u7368\u7ACB App \u5DE5\u4F5C\u5BA4\u4F86\u8AAA\uFF0C\u958B\u767C\u9078\u578B\u4E0D\u662F\u6F6E\u6D41\u554F\u984C\uFF0C\u800C\u662F\u751F\u5B58\u554F\u984C\u3002\u5718\u968A\u4EBA\u6578\u6709\u9650\u3001\u4E0A\u67B6\u6642\u7A0B\u7DCA\u3001\u9577\u671F\u7DAD\u8B77\u5FC5\u9808\u81EA\u5DF1\u625B\uFF0C\u9078\u932F\u6280\u8853\u68E7\u6703\u76F4\u63A5\u653E\u5927\u7814\u767C\u9031\u671F\u3001\u5546\u5E97\u5BE9\u6838\u98A8\u96AA\u8207\u5F8C\u7E8C\u6539\u7248\u6210\u672C\u3002Loopvity \u5728\u898F\u5283 iOS \u8207 Android \u5BE6\u7528\u5DE5\u5177\u6642\uFF0C\u6703\u5148\u554F\u4E09\u500B\u554F\u984C\uFF1A\u7522\u54C1\u662F\u5426\u6DF1\u5EA6\u4F9D\u8CF4\u7CFB\u7D71\u80FD\u529B\u3001\u96D9\u5E73\u53F0\u9AD4\u9A57\u662F\u5426\u5FC5\u9808\u5B8C\u5168\u4E00\u81F4\u3001\u4EE5\u53CA\u672A\u4F86\u5169\u5E74\u8AB0\u4F86\u7DAD\u8B77\u9019\u4EFD\u7A0B\u5F0F\u78BC\u3002\r\n                    </p>\r\n                    <p class="text-gray-400 leading-relaxed">\r\n                        \u539F\u751F\u958B\u767C\u901A\u5E38\u6307 iOS \u4F7F\u7528 Swift \u8207 SwiftUI\uFF0CAndroid \u4F7F\u7528 Kotlin \u8207 Jetpack Compose\u3002\u8DE8\u5E73\u53F0\u6846\u67B6\u5247\u4EE5 Flutter\u3001React Native\uFF0C\u4EE5\u53CA\u8F03\u65B0\u7684 Kotlin Multiplatform \u70BA\u4E3B\u3002\u5169\u8005\u90FD\u80FD\u505A\u51FA\u53EF\u4E0A\u67B6\u7684\u61C9\u7528\uFF0C\u5DEE\u7570\u5728\u65BC\u6548\u80FD\u4E0A\u9650\u3001\u7CFB\u7D71 API \u8986\u84CB\u901F\u5EA6\u3001\u4EE5\u53CA\u4E00\u4EFD\u7A0B\u5F0F\u78BC\u80FD\u8986\u84CB\u591A\u5C11\u5E73\u53F0\u7D30\u7BC0\u3002\u4EE5\u4E0B\u5F9E\u5BE6\u52D9\u89D2\u5EA6\u8A55\u4F30\uFF0C\u800C\u4E0D\u662F\u53EA\u6BD4\u8F03\u5B98\u65B9\u5BA3\u50B3\u3002\r\n                    </p>\r\n                </div>\r\n\r\n                <div class="border-t border-zinc-800/80 pt-8">\r\n                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">\u539F\u751F\u958B\u767C\uFF1A\u6700\u63A5\u8FD1\u7CFB\u7D71\u3001\u4E5F\u6700\u63A5\u8FD1\u5546\u5E97\u898F\u5247</h2>\r\n                    <p class="text-gray-400 leading-relaxed mb-3">\r\n                        \u539F\u751F\u958B\u767C\u7684\u6838\u5FC3\u512A\u52E2\u662F\u300C\u6C92\u6709\u4E2D\u9593\u5C64\u300D\u3002\u52D5\u756B\u3001\u624B\u52E2\u3001\u6A94\u6848\u6C99\u76D2\u3001\u80CC\u666F\u4EFB\u52D9\u3001\u7121\u969C\u7919\u8207\u7CFB\u7D71\u6B0A\u9650\uFF0C\u90FD\u80FD\u76F4\u63A5\u4F7F\u7528\u5B98\u65B9 API\u3002\u7576 App \u9700\u8981\u672C\u6A5F\u5132\u5B58\u3001\u526A\u8CBC\u7C3F\u3001\u9707\u52D5\u56DE\u994B\u3001\u6A94\u6848\u532F\u51FA\uFF0C\u6216\u5FC5\u9808\u5728\u98DB\u822A\u6A21\u5F0F\u4E0B\u7A69\u5B9A\u904B\u4F5C\u6642\uFF0C\u539F\u751F\u8DEF\u5F91\u901A\u5E38\u6700\u77ED\uFF0C\u4E5F\u6700\u5BB9\u6613\u901A\u904E Apple App Store \u8207 Google Play \u7684\u6B0A\u9650\u8207\u96B1\u79C1\u5BE9\u67E5\u3002\r\n                    </p>\r\n                    <p class="text-gray-400 leading-relaxed mb-3">\r\n                        \u53E6\u4E00\u500B\u5E38\u88AB\u4F4E\u4F30\u7684\u512A\u9EDE\u662F\u6587\u4EF6\u8207\u9664\u932F\u5DE5\u5177\u3002Xcode Instruments \u8207 Android Studio Profiler \u80FD\u76F4\u63A5\u5C0D\u61C9\u7CFB\u7D71\u884C\u70BA\uFF0C\u5D29\u6F70\u5806\u758A\u4E0D\u6703\u88AB\u6A4B\u63A5\u5C64\u7A00\u91CB\u3002\u5C0D\u7368\u7ACB\u958B\u767C\u8005\u800C\u8A00\uFF0C\u80FD\u5728\u4E00\u5929\u5167\u5B9A\u4F4D\u6B0A\u9650\u3001\u751F\u547D\u9031\u671F\u6216\u5132\u5B58\u932F\u8AA4\uFF0C\u6BD4\u591A\u5BEB\u4E00\u4EFD\u5E73\u53F0\u7A0B\u5F0F\u78BC\u66F4\u503C\u9322\u3002\u539F\u751F\u4E5F\u6700\u5BB9\u6613\u8DDF\u4E0A\u7CFB\u7D71\u5927\u7248\u672C\uFF1A\u65B0\u7CFB\u7D71\u80FD\u529B\u91CB\u51FA\u5F8C\uFF0C\u5B98\u65B9 SDK \u5E7E\u4E4E\u540C\u6B65\u53EF\u7528\uFF0C\u4E0D\u5FC5\u7B49\u5F85\u7B2C\u4E09\u65B9\u5916\u639B\u88DC\u9F4A\u3002\r\n                    </p>\r\n                    <p class="text-gray-400 leading-relaxed">\r\n                        \u4EE3\u50F9\u540C\u6A23\u6E05\u695A\u3002iOS \u8207 Android \u662F\u5169\u5957\u7522\u54C1\u7DDA\uFF1A\u8A2D\u8A08\u8A9E\u8A00\u3001\u5C0E\u822A\u6A21\u5F0F\u3001\u80CC\u666F\u9650\u5236\u8207\u5546\u5E97\u653F\u7B56\u90FD\u4E0D\u540C\u3002\u82E5\u76EE\u6A19\u662F\u96D9\u5E73\u53F0\u540C\u6642\u767C\u5E03\uFF0C\u539F\u751F\u610F\u5473\u8457\u5169\u4EFD\u4ECB\u9762\u3001\u5169\u5957\u6E2C\u8A66\u8207\u5169\u6B21\u4E0A\u67B6\u7BC0\u594F\u3002\u5C0F\u5718\u968A\u82E5\u6C92\u6709\u660E\u78BA\u7684\u5E73\u53F0\u512A\u5148\u9806\u5E8F\uFF0C\u5F88\u5BB9\u6613\u628A\u6642\u9593\u8017\u5728\u91CD\u8907\u5BE6\u4F5C\u76F8\u540C\u529F\u80FD\u3002\r\n                    </p>\r\n                </div>\r\n\r\n                <div class="border-t border-zinc-800/80 pt-8">\r\n                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">\u8DE8\u5E73\u53F0\u6846\u67B6\uFF1A\u52A0\u5FEB\u8986\u84CB\uFF0C\u4F46\u8981\u628A\u300C\u4F8B\u5916\u300D\u7B97\u9032\u6210\u672C</h2>\r\n                    <p class="text-gray-400 leading-relaxed mb-3">\r\n                        Flutter \u4EE5\u81EA\u7E6A\u5F15\u64CE\u7D71\u4E00\u756B\u9762\uFF0C\u4ECB\u9762\u4E00\u81F4\u6027\u9AD8\uFF0C\u9069\u5408\u5DE5\u5177\u578B\u7522\u54C1\u5FEB\u901F\u8986\u84CB\u96D9\u5E73\u53F0\u3002React Native \u5247\u628A\u4ECB\u9762\u6620\u5C04\u5230\u539F\u751F\u5143\u4EF6\uFF0C\u5C0D\u5DF2\u6709\u524D\u7AEF\u80FD\u529B\u7684\u5718\u968A\u5B78\u7FD2\u66F2\u7DDA\u8F03\u4F4E\u3002Kotlin Multiplatform \u66F4\u504F\u5411\u5171\u7528\u5546\u696D\u908F\u8F2F\u3001\u4FDD\u7559\u539F\u751F UI\uFF0C\u9069\u5408\u5DF2\u7D93\u6295\u8CC7 Kotlin \u7684\u5718\u968A\u3002\u9019\u4E9B\u65B9\u6848\u90FD\u80FD\u7E2E\u77ED\u300C\u7B2C\u4E00\u500B\u53EF\u6E2C\u8A66\u7248\u672C\u300D\u7684\u6642\u9593\uFF0C\u5C24\u5176\u5728\u8868\u55AE\u3001\u6E05\u55AE\u3001\u8A2D\u5B9A\u9801\u9019\u985E\u7D50\u69CB\u76F8\u8FD1\u7684\u756B\u9762\u3002\r\n                    </p>\r\n                    <p class="text-gray-400 leading-relaxed mb-3">\r\n                        \u771F\u6B63\u7684\u6210\u672C\u51FA\u73FE\u5728\u4F8B\u5916\u8DEF\u5F91\u3002\u672C\u6A5F\u6A94\u6848\u6B0A\u9650\u3001\u80CC\u666F\u57F7\u884C\u3001\u7CFB\u7D71\u5206\u4EAB\u9762\u677F\u3001\u9375\u76E4\u8207\u5B89\u5168\u5340\u57DF\u3001\u4EE5\u53CA\u5404\u5546\u5E97\u5C0D\u96B1\u79C1\u6E05\u55AE\u7684\u8981\u6C42\uFF0C\u8DE8\u5E73\u53F0\u5E7E\u4E4E\u90FD\u8981\u5BEB\u5E73\u53F0\u901A\u9053\u6216\u5916\u639B\u3002\u5916\u639B\u54C1\u8CEA\u4E0D\u4E00\uFF0C\u5347\u7D1A\u7CFB\u7D71\u5F8C\u53EF\u80FD\u5931\u6548\uFF0C\u7368\u7ACB\u958B\u767C\u8005\u5FC5\u9808\u81EA\u5DF1\u63A5\u624B\u539F\u751F\u5C64\u3002\u63DB\u53E5\u8A71\u8AAA\uFF0C\u8DE8\u5E73\u53F0\u7BC0\u7701\u7684\u662F\u300C\u91CD\u8907\u756B\u9762\u300D\uFF0C\u4E0D\u662F\u300C\u7CFB\u7D71\u6574\u5408\u300D\u3002\r\n                    </p>\r\n                    <p class="text-gray-400 leading-relaxed">\r\n                        \u5957\u4EF6\u9AD4\u7A4D\u3001\u555F\u52D5\u6642\u9593\u8207\u52D5\u756B\u7D30\u7BC0\u4E5F\u9700\u8981\u5BE6\u6E2C\u3002\u5C0D\u5167\u5BB9\u578B\u6216\u4E2D\u4F4E\u4E92\u52D5\u7522\u54C1\uFF0C\u5DEE\u7570\u53EF\u80FD\u4E0D\u660E\u986F\uFF1B\u5C0D\u5F37\u8ABF\u624B\u52E2\u3001\u5373\u6642\u56DE\u994B\u6216\u9577\u6642\u9593\u96E2\u7DDA\u4F7F\u7528\u7684\u5DE5\u5177\uFF0C\u4EFB\u4F55\u984D\u5916\u62BD\u8C61\u5C64\u90FD\u6703\u8B8A\u6210\u53EF\u611F\u77E5\u7684\u5EF6\u9072\u3002\u9078\u6846\u67B6\u524D\u61C9\u5148\u7528\u76EE\u6A19\u6A5F\u578B\u9A57\u8B49\u6838\u5FC3\u6D41\u7A0B\uFF0C\u800C\u4E0D\u662F\u53EA\u770B\u793A\u7BC4\u5C08\u6848\u3002\r\n                    </p>\r\n                </div>\r\n\r\n                <div class="border-t border-zinc-800/80 pt-8">\r\n                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">\u56DB\u500B\u8A55\u4F30\u7DAD\u5EA6\uFF1A\u9031\u671F\u3001\u6548\u80FD\u3001\u6B0A\u9650\u3001\u7DAD\u8B77</h2>\r\n                    <p class="text-gray-400 leading-relaxed mb-4">\r\n                        \u6211\u5011\u5EFA\u8B70\u7528\u540C\u4E00\u7D44\u6307\u6A19\u6BD4\u8F03\uFF0C\u907F\u514D\u88AB\u55AE\u4E00\u512A\u9EDE\u5E36\u504F\u3002\u4EE5\u4E0B\u662F\u7368\u7ACB\u5C08\u6848\u6700\u5E38\u5931\u6E96\u7684\u56DB\u500B\u7DAD\u5EA6\u3002\r\n                    </p>\r\n                    <div class="space-y-4">\r\n                        <div class="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">\r\n                            <h3 class="font-bold text-white text-base mb-1">1. \u7814\u767C\u9031\u671F\u8207\u767C\u5E03\u7BC0\u594F</h3>\r\n                            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">\r\n                                \u82E5\u7522\u54C1\u908F\u8F2F\u7C21\u55AE\u3001\u96D9\u5E73\u53F0\u756B\u9762\u5E7E\u4E4E\u76F8\u540C\uFF0C\u8DE8\u5E73\u53F0\u80FD\u66F4\u5FEB\u5B8C\u6210\u7B2C\u4E00\u7248\u3002\u82E5 iOS \u8207 Android \u7684\u8CC7\u8A0A\u67B6\u69CB\u3001\u6B0A\u9650\u6D41\u7A0B\u6216\u4E0A\u67B6\u6642\u7A0B\u672C\u4F86\u5C31\u4E0D\u540C\uFF0C\u5169\u5957\u539F\u751F\u5C08\u6848\u53CD\u800C\u8F03\u597D\u6392\u7A0B\uFF0C\u4E0D\u5FC5\u8B93\u4E00\u500B\u5E73\u53F0\u7684\u4F8B\u5916\u62D6\u4F4F\u53E6\u4E00\u500B\u5E73\u53F0\u3002\r\n                            </p>\r\n                        </div>\r\n                        <div class="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">\r\n                            <h3 class="font-bold text-white text-base mb-1">2. \u6548\u80FD\u8207\u64CD\u4F5C\u624B\u611F</h3>\r\n                            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">\r\n                                \u6E05\u55AE\u6EFE\u52D5\u3001\u96D9\u64CA\u624B\u52E2\u3001\u5373\u6642\u5408\u6210\u8207\u9707\u52D5\u56DE\u994B\u5C6C\u65BC\u300C\u4F7F\u7528\u8005\u80FD\u7ACB\u523B\u611F\u89BA\u5230\u300D\u7684\u7D30\u7BC0\u3002\u539F\u751F\u5C0D\u9019\u985E\u5FAE\u4EA4\u4E92\u6700\u7A69\uFF1B\u8DE8\u5E73\u53F0\u5FC5\u9808\u984D\u5916\u8ABF\u6821\uFF0C\u4E14\u4E0D\u540C\u6A5F\u578B\u8868\u73FE\u53EF\u80FD\u4E0D\u4E00\u81F4\u3002\r\n                            </p>\r\n                        </div>\r\n                        <div class="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">\r\n                            <h3 class="font-bold text-white text-base mb-1">3. \u786C\u9AD4\u8207\u7CFB\u7D71\u6B0A\u9650</h3>\r\n                            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">\r\n                                \u76F8\u6A5F\u3001\u6A94\u6848\u3001\u526A\u8CBC\u7C3F\u3001\u672C\u6A5F\u8CC7\u6599\u5EAB\u3001\u80CC\u666F\u540C\u6B65\u8207\u5B8C\u5168\u96E2\u7DDA\uFF0C\u90FD\u662F\u7CFB\u7D71\u80FD\u529B\u3002\u7522\u54C1\u8D8A\u9760\u8FD1\u88DD\u7F6E\u672C\u8EAB\uFF0C\u539F\u751F\u8D8A\u5212\u7B97\u3002\u82E5\u6838\u5FC3\u50F9\u503C\u53EA\u662F\u96F2\u7AEF\u5167\u5BB9\u5C55\u793A\uFF0C\u8DE8\u5E73\u53F0\u901A\u5E38\u8DB3\u5920\u3002\r\n                            </p>\r\n                        </div>\r\n                        <div class="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">\r\n                            <h3 class="font-bold text-white text-base mb-1">4. \u9577\u671F\u7DAD\u8B77\u6210\u672C</h3>\r\n                            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">\r\n                                \u539F\u751F\u8981\u7DAD\u8B77\u5169\u4EFD\u7A0B\u5F0F\uFF0C\u4F46\u4F9D\u8CF4\u93C8\u77ED\u3001\u5347\u7D1A\u8DEF\u5F91\u6E05\u695A\u3002\u8DE8\u5E73\u53F0\u53EA\u8981\u7DAD\u8B77\u4E00\u4EFD\u696D\u52D9\u908F\u8F2F\uFF0C\u537B\u8981\u540C\u6642\u8FFD\u6846\u67B6\u7248\u672C\u3001\u5916\u639B\u751F\u614B\u8207\u5169\u500B\u5546\u5E97\u653F\u7B56\u3002\u7368\u7ACB\u5718\u968A\u61C9\u8A08\u7B97\u7684\u662F\u300C\u5169\u5E74\u5F8C\u8AB0\u61C2\u9019\u5957\u68E7\u300D\uFF0C\u4E0D\u662F\u7B2C\u4E00\u500B\u6708\u80FD\u5C11\u5BEB\u591A\u5C11\u884C\u3002\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="border-t border-zinc-800/80 pt-8">\r\n                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">\u4EC0\u9EBC\u60C5\u5883\u8A72\u9078\u539F\u751F\uFF0C\u4EC0\u9EBC\u60C5\u5883\u9069\u5408\u8DE8\u5E73\u53F0</h2>\r\n                    <p class="text-gray-400 leading-relaxed mb-3">\r\n                        \u82E5\u7522\u54C1\u5F37\u8ABF\u96B1\u79C1\u3001\u672C\u6A5F\u512A\u5148\u3001\u7CFB\u7D71\u624B\u52E2\u6216\u9577\u671F\u96E2\u7DDA\uFF0C\u539F\u751F\u662F\u8F03\u7A69\u7684\u9810\u8A2D\u3002\u9019\u985E\u61C9\u7528\u5F80\u5F80\u9700\u8981\u7CBE\u78BA\u63A7\u5236\u6C99\u76D2\u5132\u5B58\u3001\u532F\u51FA\u683C\u5F0F\u8207\u6B0A\u9650\u8AAA\u660E\uFF0C\u4EFB\u4F55\u6A4B\u63A5\u5C64\u90FD\u53EF\u80FD\u589E\u52A0\u5BE9\u67E5\u8207\u9664\u932F\u6210\u672C\u3002Loopvity \u7684\u5DE5\u5177\u578B\u7522\u54C1\u6703\u512A\u5148\u4FDD\u8B49\u88DD\u7F6E\u7AEF\u884C\u70BA\u53EF\u9810\u671F\uFF0C\u56E0\u6B64\u6703\u628A\u7CFB\u7D71\u6574\u5408\u8996\u70BA\u6838\u5FC3\uFF0C\u800C\u4E0D\u662F\u5F8C\u88DC\u9805\u76EE\u3002\r\n                    </p>\r\n                    <p class="text-gray-400 leading-relaxed mb-3">\r\n                        \u82E5\u7522\u54C1\u662F\u5167\u5BB9\u700F\u89BD\u3001\u6D3B\u52D5\u5C55\u793A\u3001\u5167\u90E8\u5DE5\u5177\u6216\u9700\u8981\u6975\u901F\u9A57\u8B49\u5E02\u5834\u5047\u8A2D\uFF0C\u8DE8\u5E73\u53F0\u66F4\u5408\u7406\u3002\u4E00\u4EFD\u7A0B\u5F0F\u78BC\u80FD\u540C\u6642\u8986\u84CB iOS \u8207 Android\uFF0C\u8B93\u7368\u7ACB\u958B\u767C\u8005\u628A\u6642\u9593\u82B1\u5728\u529F\u80FD\u53D6\u6368\u8207\u4E0A\u67B6\u6587\u6848\uFF0C\u800C\u4E0D\u662F\u91CD\u8907\u6392\u7248\u3002\u95DC\u9375\u662F\u9810\u5148\u5217\u51FA\u300C\u4E00\u5B9A\u6703\u78B0\u5230\u539F\u751F\u5C64\u300D\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u63A8\u64AD\u3001\u5167\u8CFC\u3001\u6A94\u6848\u5206\u4EAB\u8207\u80CC\u666F\u4EFB\u52D9\uFF0C\u4E26\u628A\u9019\u4E9B\u5DE5\u6642\u7B97\u9032\u6642\u7A0B\uFF0C\u800C\u4E0D\u662F\u7576\u6210\u6846\u67B6\u6703\u81EA\u52D5\u8655\u7406\u3002\r\n                    </p>\r\n                    <p class="text-gray-400 leading-relaxed">\r\n                        \u6DF7\u5408\u7B56\u7565\u4E5F\u53EF\u4EE5\u6210\u7ACB\uFF1A\u5148\u7528\u8DE8\u5E73\u53F0\u9A57\u8B49\u8CC7\u8A0A\u67B6\u69CB\uFF0C\u518D\u628A\u9AD8\u4E92\u52D5\u6A21\u7D44\u6539\u56DE\u539F\u751F\uFF1B\u6216\u7528 Kotlin Multiplatform \u5171\u7528\u8CC7\u6599\u5C64\uFF0C\u4ECB\u9762\u4ECD\u8D70 SwiftUI \u8207 Compose\u3002\u91CD\u9EDE\u4E0D\u662F\u9078\u4E00\u500B\u9663\u71DF\uFF0C\u800C\u662F\u8B93\u67B6\u69CB\u5C0D\u61C9\u7522\u54C1\u771F\u6B63\u6602\u8CB4\u7684\u90E8\u5206\u3002\u5C0D\u591A\u6578\u7368\u7ACB\u5DE5\u4F5C\u5BA4\uFF0C\u6602\u8CB4\u7684\u4E0D\u662F\u756B\u6309\u9215\uFF0C\u800C\u662F\u6B0A\u9650\u3001\u5132\u5B58\u3001\u5546\u5E97\u653F\u7B56\u8207\u5169\u5E74\u5F8C\u7684\u5347\u7D1A\u3002\r\n                    </p>\r\n                </div>\r\n\r\n                <div class="border-t border-zinc-800/80 pt-8">\r\n                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">\u7D66\u7368\u7ACB\u958B\u767C\u8005\u7684\u9078\u578B\u7D50\u8AD6</h2>\r\n                    <p class="text-gray-400 leading-relaxed mb-3">\r\n                        APP \u958B\u767C\u9078\u578B\u6C92\u6709\u6C38\u9060\u6B63\u78BA\u7684\u7B54\u6848\uFF0C\u53EA\u6709\u5C0D\u7576\u524D\u7522\u54C1\u7D04\u675F\u6700\u8AA0\u5BE6\u7684\u7B54\u6848\u3002\u539F\u751F\u958B\u767C\u52DD\u5728\u6548\u80FD\u3001\u7CFB\u7D71\u8986\u84CB\u8207\u5546\u5E97\u9069\u914D\uFF1B\u8DE8\u5E73\u53F0\u6846\u67B6\u52DD\u5728\u8986\u84CB\u901F\u5EA6\u8207\u756B\u9762\u8907\u7528\u3002\u8A55\u4F30\u6642\u8ACB\u628A\u5718\u968A\u898F\u6A21\u3001\u6838\u5FC3\u4E92\u52D5\u3001\u96E2\u7DDA\u9700\u6C42\u8207\u7DAD\u8B77\u5E74\u9650\u653E\u5728\u540C\u4E00\u5F35\u8868\u4E0A\uFF0C\u800C\u4E0D\u662F\u53EA\u6BD4\u8F03\u300C\u80FD\u4E0D\u80FD\u4E00\u5957\u7A0B\u5F0F\u78BC\u51FA\u5169\u53F0\u624B\u6A5F\u300D\u3002\r\n                    </p>\r\n                    <p class="text-gray-400 leading-relaxed">\r\n                        \u82E5\u4F60\u6B63\u5728\u898F\u5283\u5BE6\u7528\u5DE5\u5177\u3001\u6548\u7387 App \u6216\u5FC5\u9808\u628A\u8CC7\u6599\u7559\u5728\u88DD\u7F6E\u4E0A\u7684\u7522\u54C1\uFF0C\u5EFA\u8B70\u5148\u7528\u539F\u751F\u9A57\u8B49\u6700\u95DC\u9375\u7684\u4E00\u689D\u4F7F\u7528\u8DEF\u5F91\uFF0C\u518D\u6C7A\u5B9A\u7B2C\u4E8C\u5E73\u53F0\u8981\u8907\u88FD\u539F\u751F\uFF0C\u9084\u662F\u5F15\u5165\u6846\u67B6\u3002\u9078\u578B\u4E00\u65E6\u670D\u52D9\u65BC\u7522\u54C1\u7D04\u675F\uFF0C\u5F8C\u7E8C\u7684\u6548\u80FD\u3001\u5BE9\u6838\u8207\u7DAD\u8B77\u624D\u4E0D\u6703\u4E92\u76F8\u6253\u67B6\u3002\u9019\u4E5F\u662F\u7368\u7ACB\u5DE5\u4F5C\u5BA4\u80FD\u9577\u671F\u7A69\u5B9A\u51FA\u7522\u54C1\u7684\u524D\u63D0\u3002\r\n                    </p>\r\n                </div>\r\n\r\n                <div class="bg-gradient-to-r from-cyan-950/40 to-blue-950/40 p-6 sm:p-8 rounded-2xl border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 mt-10">\r\n                    <div>\r\n                        <h3 class="text-lg font-bold text-white mb-1">\u67E5\u770B Loopvity \u7684\u7522\u54C1\u5BE6\u8E10</h3>\r\n                        <p class="text-xs text-gray-400">\u4E86\u89E3\u6211\u5011\u5982\u4F55\u628A\u96E2\u7DDA\u512A\u5148\u8207\u7CFB\u7D71\u80FD\u529B\u843D\u5230\u5BE6\u969B App\u3002</p>\r\n                    </div>\r\n                    <a href="cases.html" class="shrink-0 bg-white text-gray-950 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-gray-200 transition shadow-lg">\r\n                        \u524D\u5F80\u7522\u54C1\u9801\u9762\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </article>', "excerpt": "\u5C0D\u7368\u7ACB App \u5DE5\u4F5C\u5BA4\u4F86\u8AAA\uFF0C\u958B\u767C\u9078\u578B\u4E0D\u662F\u6F6E\u6D41\u554F\u984C\uFF0C\u800C\u662F\u751F\u5B58\u554F\u984C\u3002\u5718\u968A\u4EBA\u6578\u6709\u9650\u3001\u4E0A\u67B6\u6642\u7A0B\u7DCA\u3001\u9577\u671F\u7DAD\u8B77\u5FC5\u9808\u81EA\u5DF1\u625B\uFF0C\u9078\u932F\u6280\u8853\u68E7\u6703\u76F4\u63A5\u653E\u5927\u7814\u767C\u9031\u671F\u3001\u5546\u5E97\u5BE9\u6838\u98A8\u96AA\u8207\u5F8C\u7E8C\u6539\u7248\u6210\u672C\u3002Loopvity \u5728\u898F\u5283 iOS \u8207 Android \u5BE6\u7528\u5DE5\u5177\u6642\uFF0C\u6703\u5148\u554F\u4E09\u500B\u554F\u984C\uFF1A\u7522\u54C1\u662F\u5426\u6DF1\u5EA6\u4F9D\u8CF4\u7CFB\u7D71\u80FD\u529B\u3001\u96D9\u5E73\u53F0\u9AD4\u9A57\u662F\u5426\u5FC5\u9808\u5B8C\u5168\u4E00\u81F4\u3001\u4EE5\u53CA\u672A\u4F86\u5169\u5E74\u8AB0\u4F86\u7DAD\u8B77\u9019\u4EFD\u7A0B\u5F0F\u78BC\u3002", "cover": "\u{1F4DD}" }, { "file": "article-app-native-vs-cross-en.html", "slug": "article-app-native-vs-cross-en", "locale": "en", "kind": "post", "nav": 0, "navLabel": "", "pair": "article-app-native-vs-cross", "sort": 2, "category": "App Development", "published": "2026-09-20", "title": "App Architecture Selection: Native vs Cross-Platform", "metaTitle": "App Architecture Selection: Native vs Cross-Platform | Loopvity Blog", "metaDescription": "How an independent app studio evaluates native development versus cross-platform frameworks. Compare iOS, Android, Flutter, and React Native on cycle time, performance, hardware access, and long-term maintenance.", "mainClass": "flex-1 max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-20 w-full", "content": `<div class="mb-8">\r
            <a href="blog-en.html" class="text-xs font-bold text-cyan-400 hover:underline inline-flex items-center gap-1.5">\r
                <span>\u2190</span> Back to Blog Posts\r
            </a>\r
        </div>\r
\r
        <article class="card-glass rounded-3xl p-8 md:p-14 border border-zinc-800 shadow-2xl">\r
            <div class="flex items-center gap-3 mb-6">\r
                <span class="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full uppercase tracking-wider">App Dev</span>\r
                <span class="text-xs text-gray-500 font-mono">2026-09-20</span>\r
                <span class="text-xs text-gray-500">\xB7 8 min read</span>\r
            </div>\r
\r
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-8">\r
                App Architecture Selection: Native vs Cross-Platform\r
            </h1>\r
\r
            <div class="w-full h-48 sm:h-64 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 rounded-2xl flex flex-col items-center justify-center border border-zinc-800 mb-10 text-6xl shadow-inner">\r
                <span>\u{1F4F1}</span>\r
                <span class="text-xs font-mono font-bold text-cyan-400 mt-3 tracking-widest uppercase">Native vs Cross-Platform</span>\r
            </div>\r
\r
            <div class="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">\r
                <div>\r
                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">Why stack selection is a survival decision</h2>\r
                    <p class="text-gray-400 leading-relaxed mb-3">\r
                        For an independent app studio, choosing between native development and a cross-platform framework is not a fashion contest. Headcount is limited, store timelines are unforgiving, and the same people who ship the first release will maintain it. A poor stack choice inflates cycle time, review risk, and the cost of every later revision. At Loopvity, we start every iOS and Android utility with three questions: how deeply the product depends on system capabilities, whether both platforms must feel identical, and who will own the codebase two years from now.\r
                    </p>\r
                    <p class="text-gray-400 leading-relaxed">\r
                        Native usually means Swift and SwiftUI on iOS, Kotlin and Jetpack Compose on Android. Cross-platform usually means Flutter, React Native, or Kotlin Multiplatform. Both paths can produce store-ready apps. The difference is the performance ceiling, how quickly you can reach new system APIs, and how much platform-specific work a shared codebase actually hides. The rest of this note evaluates those trade-offs from a shipping perspective rather than a marketing one.\r
                    </p>\r
                </div>\r
\r
                <div class="border-t border-zinc-800/80 pt-8">\r
                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">Native: closest to the system and the store rules</h2>\r
                    <p class="text-gray-400 leading-relaxed mb-3">\r
                        The main advantage of native development is the missing middle layer. Animation, gestures, sandbox storage, background work, accessibility, and permission prompts all map directly onto official APIs. When an app must keep data on device, write to the clipboard, trigger haptics, export files, or remain usable in airplane mode, the native path is usually the shortest. It is also the path most aligned with Apple App Store and Google Play privacy reviews, because the permission story is the platform story.\r
                    </p>\r
                    <p class="text-gray-400 leading-relaxed mb-3">\r
                        Debugging is the other underestimated win. Xcode Instruments and Android Studio Profiler inspect real system behavior. Crash stacks are not diluted by a bridge. For a solo engineer, finding a lifecycle, storage, or entitlement bug in one afternoon is often more valuable than avoiding a second UI project. Native teams also absorb major OS releases faster: when Apple or Google ships a capability, the official SDK is available immediately, without waiting for a plugin ecosystem to catch up.\r
                    </p>\r
                    <p class="text-gray-400 leading-relaxed">\r
                        The cost is duplication. iOS and Android are two products: navigation patterns, background limits, design language, and store policy all diverge. Shipping both platforms natively means two interfaces, two test suites, and two release cadences. A small team without a clear platform priority can spend months re-implementing the same feature instead of improving the product.\r
                    </p>\r
                </div>\r
\r
                <div class="border-t border-zinc-800/80 pt-8">\r
                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">Cross-platform: faster coverage, with exceptions priced in</h2>\r
                    <p class="text-gray-400 leading-relaxed mb-3">\r
                        Flutter paints its own pixels, which makes visual consistency easy and is attractive for utility apps that need both stores quickly. React Native maps to native widgets, which lowers the learning curve for teams that already think in JavaScript. Kotlin Multiplatform shares business logic while leaving UI native, which fits teams already invested in Kotlin. All three can shrink time-to-first-testable-build, especially for lists, forms, and settings screens that look similar on both platforms.\r
                    </p>\r
                    <p class="text-gray-400 leading-relaxed mb-3">\r
                        The real cost appears on exception paths. Local file access, background execution, system share sheets, keyboard insets, safe areas, and store privacy manifests almost always require platform channels or plugins. Plugin quality varies, and OS upgrades can break them. An independent developer then owns the native layer anyway. Cross-platform therefore saves repeated screens; it does not save system integration.\r
                    </p>\r
                    <p class="text-gray-400 leading-relaxed">\r
                        Binary size, cold start, and animation fidelity still need measurement on target devices. For content-heavy or low-interaction products the gap may be acceptable. For gesture-dense, offline-first tools, every extra abstraction can become a delay the user can feel. Validate the core loop on real hardware before committing the architecture to a demo repository.\r
                    </p>\r
                </div>\r
\r
                <div class="border-t border-zinc-800/80 pt-8">\r
                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">Four dimensions that keep the comparison honest</h2>\r
                    <p class="text-gray-400 leading-relaxed mb-4">\r
                        Use the same scorecard for every option so a single strength cannot dominate the decision. These four dimensions are where independent projects most often miscalculate.\r
                    </p>\r
                    <div class="space-y-4">\r
                        <div class="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">\r
                            <h3 class="font-bold text-white text-base mb-1">1. Cycle time and release cadence</h3>\r
                            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">\r
                                If the product logic is simple and both UIs can stay nearly identical, a shared framework reaches version one faster. If information architecture, permission flows, or store timing already differ, two native codebases are easier to schedule. One platform's exception should not stall the other.\r
                            </p>\r
                        </div>\r
                        <div class="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">\r
                            <h3 class="font-bold text-white text-base mb-1">2. Performance and tactile feel</h3>\r
                            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">\r
                                Scrolling, double-tap gestures, live synthesis, and haptics are details users notice immediately. Native is the most predictable here. Cross-platform can match it, but only after extra tuning, and results may still vary by device.\r
                            </p>\r
                        </div>\r
                        <div class="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">\r
                            <h3 class="font-bold text-white text-base mb-1">3. Hardware and system permissions</h3>\r
                            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">\r
                                Camera, files, clipboard, on-device databases, background sync, and fully offline operation are system features. The closer the product sits to the device, the more native pays for itself. If the core value is cloud content, a framework is usually enough.\r
                            </p>\r
                        </div>\r
                        <div class="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">\r
                            <h3 class="font-bold text-white text-base mb-1">4. Long-term maintenance</h3>\r
                            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">\r
                                Native means two codebases, but a short dependency chain and a clear upgrade path. Cross-platform means one business layer, plus a framework version, a plugin ecosystem, and two store policies. The question is who still understands the stack in two years, not how many lines you avoid in month one.\r
                            </p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="border-t border-zinc-800/80 pt-8">\r
                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">When native wins, and when a framework is the better bet</h2>\r
                    <p class="text-gray-400 leading-relaxed mb-3">\r
                        Choose native when the product is privacy-first, local-first, gesture-heavy, or expected to work for long stretches without a network. Those apps need precise control over sandbox storage, export formats, and permission copy. A bridge adds review surface and debugging cost. Loopvity treats device-side behavior as a core feature, not a follow-up task, which is why system integration sits at the center of our architecture conversations.\r
                    </p>\r
                    <p class="text-gray-400 leading-relaxed mb-3">\r
                        Choose cross-platform when the product is content browsing, an event showcase, an internal tool, or a fast market test. One codebase covering iOS and Android lets a solo developer spend time on scope and store listing instead of repeating layout work. The discipline is to list the features that will still need native work\u2014push, in-app purchases, file sharing, background tasks\u2014and put those hours on the calendar. Frameworks do not absorb that work automatically.\r
                    </p>\r
                    <p class="text-gray-400 leading-relaxed">\r
                        Hybrid strategies are valid. Validate information architecture with a framework, then rewrite high-interaction modules in native. Or share a data layer with Kotlin Multiplatform while keeping SwiftUI and Compose on the surface. The goal is not to join a camp. The goal is to place complexity where the product is actually expensive. For most independent studios, the expensive parts are permissions, storage, store policy, and upgrades\u2014not drawing buttons.\r
                    </p>\r
                </div>\r
\r
                <div class="border-t border-zinc-800/80 pt-8">\r
                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3">A practical conclusion for indie teams</h2>\r
                    <p class="text-gray-400 leading-relaxed mb-3">\r
                        There is no permanently correct answer in app architecture selection, only an honest answer to the current constraints. Native wins on performance, system coverage, and store fit. Cross-platform frameworks win on coverage speed and UI reuse. Put team size, core interaction, offline requirements, and maintenance horizon on one scorecard. Do not decide from the slogan \u201Cone codebase, two phones.\u201D\r
                    </p>\r
                    <p class="text-gray-400 leading-relaxed">\r
                        If you are planning a utility, a productivity app, or any product that must keep data on the device, prove the most important user path natively first. Then decide whether the second platform should copy that native work or introduce a framework. When selection serves product constraints, performance, review, and maintenance stop fighting each other. That is the condition that lets a small studio keep shipping.\r
                    </p>\r
                </div>\r
\r
                <div class="bg-gradient-to-r from-cyan-950/40 to-blue-950/40 p-6 sm:p-8 rounded-2xl border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 mt-10">\r
                    <div>\r
                        <h3 class="text-lg font-bold text-white mb-1">See how Loopvity applies this in products</h3>\r
                        <p class="text-xs text-gray-400">Explore our offline-first apps and how system capabilities show up in real features.</p>\r
                    </div>\r
                    <a href="cases-en.html" class="shrink-0 bg-white text-gray-950 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-gray-200 transition shadow-lg">\r
                        Go to Products Page\r
                    </a>\r
                </div>\r
            </div>\r
        </article>`, "excerpt": "For an independent app studio, choosing between native development and a cross-platform framework is not a fashion contest. Headcount is limited, store timelines are unforgiving, and the same people who ship the first re", "cover": "\u{1F4DD}" }];
  }
});
var auth_exports = {};
__export(auth_exports, {
  assertSameOrigin: /* @__PURE__ */ __name(() => assertSameOrigin, "assertSameOrigin"),
  getUser: /* @__PURE__ */ __name(() => getUser, "getUser"),
  hashPassword: /* @__PURE__ */ __name(() => hashPassword, "hashPassword"),
  readCookie: /* @__PURE__ */ __name(() => readCookie, "readCookie"),
  sessionCookie: /* @__PURE__ */ __name(() => sessionCookie, "sessionCookie"),
  startSession: /* @__PURE__ */ __name(() => startSession, "startSession"),
  verifyPassword: /* @__PURE__ */ __name(() => verifyPassword, "verifyPassword")
});
async function hashPassword(password, saltBytes) {
  const salt = saltBytes || crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations: 1e5, hash: "SHA-256" }, key, 256);
  const hash = [...new Uint8Array(bits)].map((b) => b.toString(16).padStart(2, "0")).join("");
  const saltHex = [...salt].map((b) => b.toString(16).padStart(2, "0")).join("");
  return saltHex + ":" + hash;
}
__name(hashPassword, "hashPassword");
async function verifyPassword(password, stored) {
  const [saltHex, hash] = String(stored || "").split(":");
  if (!saltHex || !hash) return false;
  const salt = new Uint8Array(saltHex.match(/.{2}/g).map((h) => parseInt(h, 16)));
  const next = await hashPassword(password, salt);
  return next === saltHex + ":" + hash;
}
__name(verifyPassword, "verifyPassword");
function readCookie(request, name) {
  const raw = request.headers.get("Cookie") || "";
  const part = raw.split(";").map((s) => s.trim()).find((s) => s.startsWith(name + "="));
  return part ? decodeURIComponent(part.slice(name.length + 1)) : "";
}
__name(readCookie, "readCookie");
async function getUser(env2, request) {
  const token = readCookie(request, COOKIE);
  if (!token) return null;
  const row = await env2.DB.prepare(
    "SELECT u.id, u.username, u.must_change FROM sessions s JOIN admin_users u ON u.id = s.user_id WHERE s.token = ? AND s.expires_at > ?"
  ).bind(token, Date.now()).first();
  return row || null;
}
__name(getUser, "getUser");
async function startSession(env2, userId) {
  const token = [...crypto.getRandomValues(new Uint8Array(32))].map((b) => b.toString(16).padStart(2, "0")).join("");
  const expires = Date.now() + 14 * 24 * 3600 * 1e3;
  await env2.DB.prepare("INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)").bind(token, userId, expires).run();
  return token;
}
__name(startSession, "startSession");
function sessionCookie(token, request) {
  const secure = new URL(request.url).protocol === "https:" ? "; Secure" : "";
  const value = token ? `${COOKIE}=${token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=1209600${secure}` : `${COOKIE}=; HttpOnly; Path=/; Max-Age=0${secure}`;
  return value;
}
__name(sessionCookie, "sessionCookie");
function assertSameOrigin(request) {
  const origin = request.headers.get("Origin");
  if (!origin) return;
  if (origin !== new URL(request.url).origin) {
    const err = new Error("\u4F86\u6E90\u4E0D\u7B26");
    err.status = 403;
    throw err;
  }
}
__name(assertSameOrigin, "assertSameOrigin");
var COOKIE;
var init_auth = __esm({
  "_lib/auth.js"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    COOKIE = "lv_session";
    __name2(hashPassword, "hashPassword");
    __name2(verifyPassword, "verifyPassword");
    __name2(readCookie, "readCookie");
    __name2(getUser, "getUser");
    __name2(startSession, "startSession");
    __name2(sessionCookie, "sessionCookie");
    __name2(assertSameOrigin, "assertSameOrigin");
  }
});
async function ensureDb(env2) {
  if (!env2.DB) throw new Error("\u7F3A\u5C11 D1 \u8CC7\u6599\u5EAB\u7D81\u5B9A DB");
  for (const statement of SCHEMA.split(";").map((s) => s.trim()).filter(Boolean)) {
    await env2.DB.prepare(statement).run();
  }
  for (const statement of [
    "ALTER TABLE media ADD COLUMN byte_size INTEGER",
    "ALTER TABLE media ADD COLUMN kind TEXT",
    "ALTER TABLE pages ADD COLUMN sections_json TEXT"
  ]) {
    try {
      await env2.DB.prepare(statement).run();
    } catch (e) {
    }
  }
  const row = await env2.DB.prepare("SELECT COUNT(*) AS n FROM pages").first();
  if (!row || row.n === 0) await seed(env2);
  const admin = await env2.DB.prepare("SELECT id FROM admin_users LIMIT 1").first();
  if (!admin) await createInitialAdmin(env2);
}
__name(ensureDb, "ensureDb");
async function seed(env2) {
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const stmts = Object.entries(DEFAULT_SETTINGS).map(
    ([key, value]) => env2.DB.prepare("INSERT INTO settings (key, value) VALUES (?, ?)").bind(key, value)
  );
  for (const p of seedPages) {
    stmts.push(
      env2.DB.prepare(
        `INSERT INTO pages (slug, locale, kind, title, nav_label, show_in_nav, sort_order, pair_slug, meta_title, meta_description, robots, main_class, content_html, excerpt, category, cover, published_at, status, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'index,follow', ?, ?, ?, ?, ?, ?, 'published', ?)`
      ).bind(
        p.slug,
        p.locale,
        p.kind,
        p.title,
        p.navLabel || "",
        p.nav,
        p.sort,
        p.pair || "",
        p.metaTitle,
        p.metaDescription,
        p.mainClass,
        p.content,
        p.excerpt || "",
        p.category || "",
        p.cover || "",
        p.published || "",
        now
      )
    );
  }
  await env2.DB.batch(stmts);
}
__name(seed, "seed");
async function createInitialAdmin(env2) {
  const { hashPassword: hashPassword2 } = await Promise.resolve().then(() => (init_auth(), auth_exports));
  const password = env2.ADMIN_PASSWORD || "Loopvity2026";
  const username = env2.ADMIN_USERNAME || "admin";
  const passwordHash = await hashPassword2(password);
  await env2.DB.prepare("INSERT INTO admin_users (username, password_hash, must_change) VALUES (?, ?, 1)").bind(username, passwordHash).run();
}
__name(createInitialAdmin, "createInitialAdmin");
async function getSettings(env2) {
  const { results } = await env2.DB.prepare("SELECT key, value FROM settings").all();
  const settings = { ...DEFAULT_SETTINGS };
  for (const row of results || []) settings[row.key] = row.value;
  return settings;
}
__name(getSettings, "getSettings");
async function saveSettings(env2, patch) {
  const allowed = Object.keys(DEFAULT_SETTINGS);
  const stmts = [];
  for (const key of allowed) {
    if (patch[key] === void 0) continue;
    stmts.push(
      env2.DB.prepare("INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value").bind(key, String(patch[key] ?? ""))
    );
  }
  if (stmts.length) await env2.DB.batch(stmts);
  return getSettings(env2);
}
__name(saveSettings, "saveSettings");
var SCHEMA;
var DEFAULT_SETTINGS;
var init_db = __esm({
  "_lib/db.js"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_seed_data();
    SCHEMA = `
CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  must_change INTEGER NOT NULL DEFAULT 1
);
CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS pages (
  id INTEGER PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  locale TEXT NOT NULL,
  kind TEXT NOT NULL,
  title TEXT NOT NULL,
  nav_label TEXT,
  show_in_nav INTEGER NOT NULL DEFAULT 0,
  sort_order INTEGER NOT NULL DEFAULT 0,
  pair_slug TEXT,
  meta_title TEXT,
  meta_description TEXT,
  og_image TEXT,
  canonical TEXT,
  robots TEXT NOT NULL DEFAULT 'index,follow',
  main_class TEXT,
  content_html TEXT NOT NULL,
  excerpt TEXT,
  category TEXT,
  cover TEXT,
  published_at TEXT,
  status TEXT NOT NULL DEFAULT 'published',
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS media (
  id INTEGER PRIMARY KEY,
  r2_key TEXT NOT NULL,
  filename TEXT NOT NULL,
  mime TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT,
  app TEXT,
  topic TEXT,
  device TEXT,
  body TEXT,
  locale TEXT,
  is_read INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL
);
`;
    DEFAULT_SETTINGS = {
      site_name: "Loopvity",
      site_url: "",
      logo_url: "/logo.png",
      favicon_url: "/logo.png",
      whatsapp: "https://wa.me/85200000000",
      email: "loopvity@gmail.com",
      footer_text: "\xA9 2026 Loopvity Studio. All rights reserved.",
      google_verification: "",
      ga_id: "",
      default_description: "Loopvity \u662F\u4E00\u5BB6\u7368\u7ACB\u8EDF\u9AD4\u5DE5\u4F5C\u5BA4\uFF0C\u5C08\u6CE8\u65BC iOS \u8207 Android \u5BE6\u7528\u5DE5\u5177\u7814\u767C\u3002",
      robots_extra: ""
    };
    __name2(ensureDb, "ensureDb");
    __name2(seed, "seed");
    __name2(createInitialAdmin, "createInitialAdmin");
    __name2(getSettings, "getSettings");
    __name2(saveSettings, "saveSettings");
  }
});
function esc(value) {
  return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
__name(esc, "esc");
function applyGlobals(html2, settings) {
  return html2.replaceAll("https://wa.me/85200000000", settings.whatsapp || "https://wa.me/85200000000").replaceAll("loopvity@gmail.com", settings.email || "loopvity@gmail.com");
}
__name(applyGlobals, "applyGlobals");
function homeCard(post, locale) {
  const href = "/" + post.slug + ".html";
  const more = locale === "en" ? "Read more \u2192" : "\u95B1\u8B80\u5168\u6587 \u2192";
  return `<a href="${esc(href)}" class="card-glass p-7 rounded-2xl border border-zinc-800 hover:border-cyan-400 transition-all duration-300 group block">
    <div class="flex justify-between items-center mb-3">
      <span class="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">${esc(post.category || "Blog")}</span>
      <span class="text-xs text-gray-500 font-mono">${esc(post.published_at || "")}</span>
    </div>
    <h4 class="text-xl font-bold text-white mb-3 leading-snug group-hover:text-cyan-400 transition">${esc(post.title)}</h4>
    <p class="text-gray-400 text-sm leading-relaxed mb-4">${esc((post.excerpt || "").slice(0, 90))}</p>
    <span class="text-xs text-cyan-400 font-bold group-hover:underline">${more}</span>
  </a>`;
}
__name(homeCard, "homeCard");
function blogCard(post) {
  const href = "/" + post.slug + ".html";
  const cover = post.cover && /^https?:|^\//.test(post.cover) ? `<img src="${esc(post.cover)}" alt="" class="w-full h-48 object-cover">` : `<div class="h-48 bg-gradient-to-br from-cyan-950/70 via-zinc-900 to-zinc-900 flex items-center justify-center text-6xl">${esc(post.cover || "\u{1F4DD}")}</div>`;
  const more = post.locale === "en" ? "Read article" : "\u95B1\u8B80\u5C08\u6587\u8A73\u60C5";
  return `<article class="card-glass rounded-3xl overflow-hidden border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 flex flex-col group cursor-pointer" onclick="window.location.href='${esc(href)}'">
    ${cover}
    <div class="p-8 flex-1 flex flex-col">
      <div class="flex justify-between items-center mb-3">
        <span class="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">${esc(post.category || "Blog")}</span>
        <span class="text-xs text-gray-500 font-mono">${esc(post.published_at || "")}</span>
      </div>
      <h4 class="text-xl font-bold text-white mb-4 leading-snug group-hover:text-cyan-400 transition">${esc(post.title)}</h4>
      <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-1">${esc((post.excerpt || "").slice(0, 110))}</p>
      <div class="pt-4 border-t border-zinc-800 text-xs text-cyan-400 font-bold flex items-center justify-between">
        <span>${more}</span><span class="group-hover:translate-x-1 transition">\u2192</span>
      </div>
    </div>
  </article>`;
}
__name(blogCard, "blogCard");
function navLinks(pages, current, mobile) {
  return pages.map((p) => {
    const active = p.slug === current;
    const cls = mobile ? active ? "text-cyan-600 transition px-2 py-1 block" : "hover:text-cyan-600 transition px-2 py-1 block" : active ? "text-cyan-600 transition" : "hover:text-cyan-600 transition";
    return `<a href="/${esc(p.slug)}.html" class="${cls}">${esc(p.nav_label)}</a>`;
  }).join("");
}
__name(navLinks, "navLinks");
function renderDocument({ page, settings, nav, posts, origin }) {
  const locale = page.locale === "en" ? "en" : "zh-HK";
  const langSwitch = page.pair_slug ? `/${page.pair_slug}.html` : locale === "en" ? "/index.html" : "/index-en.html";
  const langLabel = locale === "en" ? "\u4E2D\u6587" : "EN";
  const siteUrl = (settings.site_url || origin).replace(/\/$/, "");
  const canonical = page.canonical || `${siteUrl}/${page.slug}.html`;
  const tabTitle = page.meta_title || `${page.title} | ${settings.site_name}`;
  const description = page.meta_description || settings.default_description || "";
  const ogImage = page.og_image || "";
  let content = applyGlobals(page.content_html || "", settings);
  const sectionsHtml = renderSections(page.sections_json);
  if (content.includes("<!--CMS_SECTIONS-->")) content = content.replace("<!--CMS_SECTIONS-->", sectionsHtml);
  else if (sectionsHtml) content += `<div class="max-w-4xl mx-auto w-full px-6 pt-14 md:pt-12 pb-20">${sectionsHtml}</div>`;
  if (content.includes("<!--CMS_HOME_POSTS-->")) {
    content = content.replace("<!--CMS_HOME_POSTS-->", posts.map((p) => homeCard(p, page.locale)).join("\n"));
  }
  if (content.includes("<!--CMS_POSTS-->")) {
    content = content.replace("<!--CMS_POSTS-->", posts.map((p) => blogCard({ ...p, locale: page.locale })).join("\n") || `<p class="text-gray-400 text-center col-span-full">${page.locale === "en" ? "No articles yet." : "\u5C1A\u672A\u6709\u6587\u7AE0\u3002"}</p>`);
  }
  const wa = esc(settings.whatsapp || "#");
  const verification = settings.google_verification ? `<meta name="google-site-verification" content="${esc(settings.google_verification)}">` : "";
  const ga = settings.ga_id ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(settings.ga_id)}"><\/script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${esc(settings.ga_id)}');<\/script>` : "";
  const desktopNav = navLinks(nav, page.slug, false);
  const mobileNav = navLinks(nav, page.slug, true);
  return `<!DOCTYPE html>
<html lang="${locale}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(tabTitle)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="${esc(page.robots || "index,follow")}">
  <link rel="canonical" href="${esc(canonical)}">
  <link rel="icon" href="${esc(settings.favicon_url || "/logo.png")}">
  <link rel="apple-touch-icon" href="${esc(settings.favicon_url || "/logo.png")}">
  <meta property="og:type" content="${page.kind === "post" ? "article" : "website"}">
  <meta property="og:title" content="${esc(tabTitle)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${esc(canonical)}">
  ${ogImage ? `<meta property="og:image" content="${esc(ogImage)}">` : ""}
  <meta name="twitter:card" content="summary_large_image">
  ${verification}
  ${ga}
  <script src="https://cdn.tailwindcss.com"><\/script>
  <script>(function(){try{if(localStorage.getItem('loopvity-theme')==='dark')document.documentElement.classList.add('theme-dark')}catch(e){}})();<\/script>
  <link rel="stylesheet" href="/theme.css">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Noto+Sans+TC:wght@400;500;700;900&display=swap" rel="stylesheet">
  <style>
    html { overflow-y: scroll; scroll-behavior: smooth; }
    body { font-family: 'Plus Jakarta Sans', 'Noto Sans TC', sans-serif; background-color: #f4f7fb; color: #111827; }
    html.theme-dark body { background-color: #0b0f19; color: #f3f4f6; }
    .gradient-brand { background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 50%, #9b51e0 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .card-glass { background: rgba(255, 255, 255, 0.94); backdrop-filter: blur(12px); border: 1px solid rgba(15, 23, 42, 0.08); }
    html.theme-dark .card-glass { background: rgba(17, 24, 39, 0.7); border: 1px solid rgba(255, 255, 255, 0.08); }
    details > summary { list-style: none; }
    details > summary::-webkit-details-marker { display: none; }
  </style>
</head>
<body class="min-h-screen flex flex-col justify-between selection:bg-cyan-500 selection:text-white">
  <header class="sticky top-4 z-50 max-w-6xl mx-auto w-full px-4">
    <nav class="relative bg-white/95 backdrop-blur-md px-6 py-3.5 rounded-full flex items-center justify-between shadow-xl shadow-black/20 border border-gray-100 text-gray-900">
      <a href="${locale === "en" ? "/index-en.html" : "/index.html"}" class="flex items-center shrink-0">
        <img src="${esc(settings.logo_url || "/logo.png")}" alt="${esc(settings.site_name)}" class="h-8 sm:h-9 w-auto">
      </a>
      <div class="hidden lg:flex items-center gap-8 text-sm font-bold">${desktopNav}</div>
      <div class="flex items-center gap-4">
        <a href="${esc(langSwitch)}" class="text-sm font-bold text-gray-500 hover:text-cyan-600 transition">${langLabel}</a>
        <button type="button" class="theme-toggle" data-theme-toggle aria-label="theme">
          <svg class="theme-icon-moon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
          <svg class="theme-icon-sun w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0L17.95 7.05M7.05 16.95l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z"></path></svg>
        </button>
        <a href="${wa}" target="_blank" class="hidden sm:flex items-center gap-2 bg-[#25D366] text-white px-5 py-2 rounded-full font-bold text-sm hover:brightness-105 transition shadow-sm"><span>WhatsApp</span></a>
        <button id="mobile-menu-btn" class="lg:hidden text-gray-900 p-2 focus:outline-none" aria-label="menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <div id="mobile-menu" class="hidden absolute top-full left-0 w-full mt-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-5 flex-col gap-4 text-sm font-bold text-gray-900 lg:hidden">
        ${mobileNav}
        <a href="${esc(langSwitch)}" class="text-gray-500 hover:text-cyan-600 transition px-2 py-1 block font-bold">${locale === "en" ? "\u4E2D\u6587" : "English (EN)"}</a>
        <a href="${wa}" target="_blank" class="sm:hidden flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 mt-2 rounded-full font-bold text-sm">WhatsApp</a>
      </div>
    </nav>
  </header>
  <main class="${esc(page.main_class || "flex-1 w-full")}">${content}</main>
  <footer class="max-w-6xl mx-auto w-full px-6 py-12 border-t border-zinc-900 text-gray-500 text-xs flex flex-col sm:flex-row justify-between items-center gap-6 mt-12">
    <div>${esc(settings.footer_text)}</div>
    <div class="flex gap-4 sm:gap-6 flex-wrap justify-center">
      <a href="mailto:${esc(settings.email)}" class="hover:text-gray-300 transition">${esc(settings.email)}</a>
      <a href="${locale === "en" ? "/terms-en.html" : "/terms.html"}" class="hover:text-gray-300 transition">${locale === "en" ? "Terms" : "\u689D\u6B3E\u53CA\u7D30\u5247"}</a>
      <a href="${locale === "en" ? "/privacy-en.html" : "/privacy.html"}" class="hover:text-gray-300 transition">${locale === "en" ? "Privacy" : "\u79C1\u96B1\u653F\u7B56"}</a>
      <a href="${locale === "en" ? "/cookie-en.html" : "/cookie.html"}" class="hover:text-gray-300 transition">${locale === "en" ? "Cookies" : "Cookie \u653F\u7B56"}</a>
    </div>
  </footer>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');
      if (btn && menu) {
        btn.addEventListener('click', () => { menu.classList.toggle('hidden'); menu.classList.toggle('flex'); });
        document.addEventListener('click', (e) => { if (!btn.contains(e.target) && !menu.contains(e.target)) { menu.classList.add('hidden'); menu.classList.remove('flex'); } });
      }
      const form = document.getElementById('contact-form');
      if (form) {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(form).entries());
          data.locale = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
          const btn = form.querySelector('button[type="submit"]');
          btn.disabled = true;
          try {
            const res = await fetch('/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) });
            if (!res.ok) throw new Error();
            form.reset();
            alert(data.locale === 'zh' ? '\u5DF2\u6536\u5230\u4F60\u7684\u8A0A\u606F\uFF0C\u6211\u5011\u6703\u76E1\u5FEB\u56DE\u8986\u3002' : 'Message received. We will reply soon.');
          } catch (err) {
            alert(data.locale === 'zh' ? '\u9001\u51FA\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002' : 'Could not send. Please try again.');
          } finally { btn.disabled = false; }
        });
      }
    });
  <\/script>
  <script src="/theme.js"><\/script>
</body>
</html>`;
}
__name(renderDocument, "renderDocument");
function richText(s) {
  const raw = s.html ? String(s.html) : "";
  if (!raw) return esc(s.text || "");
  return raw.replace(/<\/?([a-z0-9]+)([^>]*)>/gi, (match2, tag, attrs) => {
    const name = tag.toLowerCase();
    if (name === "a") {
      if (match2.startsWith("</")) return "</a>";
      const href = /href\s*=\s*"([^"]*)"/i.exec(attrs);
      const url = href && /^(https?:|mailto:)/i.test(href[1]) ? href[1] : "";
      return url ? `<a href="${esc(url)}">` : "";
    }
    if (name === "span" || name === "font") {
      if (match2.startsWith("</")) return "</span>";
      const color = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})/.exec(attrs);
      return color ? `<span style="color:${color[0]}">` : "";
    }
    if (!["b", "strong", "i", "em", "u", "s", "br"].includes(name)) return "";
    return match2.startsWith("</") ? `</${name}>` : name === "br" ? "<br>" : `<${name}>`;
  });
}
__name(richText, "richText");
function renderSections(raw) {
  let list = [];
  try {
    list = JSON.parse(raw || "[]");
  } catch {
    list = [];
  }
  if (!Array.isArray(list)) return "";
  const inlineStyle = /* @__PURE__ */ __name2((s, fallback) => {
    const sizes = { s: "15px", m: "17px", l: "22px", xl: "32px" };
    const size = sizes[s.size] || fallback || "";
    const color = /^#[0-9a-fA-F]{6}$/.test(s.color || "") ? s.color : "";
    const bits = [];
    if (size) bits.push("font-size:" + size);
    if (color) bits.push("color:" + color);
    return bits.length ? ` style="${bits.join(";")}"` : "";
  }, "inlineStyle");
  const html2 = list.map((s) => {
    if (!s || !s.type) return "";
    if (s.type === "heading") {
      const level = Math.min(6, Math.max(1, Number(s.level) || 2));
      return `<h${level} class="font-black leading-tight"${inlineStyle(s, "28px")}>${richText(s)}</h${level}>`;
    }
    if (s.type === "text") return `<p class="leading-relaxed whitespace-pre-wrap"${inlineStyle(s, "17px")}>${richText(s)}</p>`;
    if (s.type === "quote") return `<blockquote class="border-l-4 border-gray-300 pl-4 text-gray-600"${inlineStyle(s, "17px")}>${richText(s)}</blockquote>`;
    if (s.type === "list") {
      const tag = s.ordered ? "ol" : "ul";
      const cls = s.ordered ? "list-decimal" : "list-disc";
      const items = (Array.isArray(s.items) ? s.items : []).map((item) => `<li>${esc(item)}</li>`).join("");
      return `<${tag} class="${cls} pl-5 space-y-2"${inlineStyle(s, "17px")}>${items}</${tag}>`;
    }
    if (s.type === "image" && s.url) return `<img src="${esc(s.url)}" alt="${esc(s.alt || "")}" class="w-full rounded-2xl">`;
    if (s.type === "video" && s.url) return `<video src="${esc(s.url)}" controls class="w-full rounded-2xl"></video>`;
    if (s.type === "table") {
      const heads = (s.headers || []).map((h) => `<th class="border border-gray-200 px-3 py-2 text-left font-bold">${esc(h)}</th>`).join("");
      const rows = (s.rows || []).map((row) => `<tr>${(row || []).map((cell) => `<td class="border border-gray-200 px-3 py-2">${esc(cell)}</td>`).join("")}</tr>`).join("");
      return `<div class="overflow-auto"><table class="w-full border-collapse text-sm"><thead class="bg-gray-50"><tr>${heads}</tr></thead><tbody>${rows}</tbody></table></div>`;
    }
    if (s.type === "divider") return `<hr class="border-gray-200">`;
    return "";
  }).filter(Boolean).join("\n");
  return html2 ? `<div class="space-y-8">${html2}</div>` : "";
}
__name(renderSections, "renderSections");
function articleTemplate({ title: title2, category, date, cover, body, locale }) {
  const back = locale === "en" ? "Back to Blog" : "\u8FD4\u56DE Blog \u6587\u7AE0\u5217\u8868";
  const blog = locale === "en" ? "/blog-en.html" : "/blog.html";
  const coverBlock = cover && /^https?:|^\//.test(cover) ? `<img src="${esc(cover)}" alt="" class="w-full h-48 sm:h-64 object-cover rounded-2xl mb-10">` : `<div class="w-full h-48 sm:h-64 bg-gradient-to-br from-cyan-950/60 via-zinc-900 to-zinc-950 rounded-2xl flex items-center justify-center border border-zinc-800 mb-10 text-6xl">${esc(cover || "\u{1F4DD}")}</div>`;
  return `<div class="mb-8"><a href="${blog}" class="text-xs font-bold text-cyan-400 hover:underline">\u2190 ${back}</a></div>
<article class="card-glass rounded-3xl p-8 md:p-14 border border-zinc-800 shadow-2xl">
  <div class="flex items-center gap-3 mb-6">
    <span class="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">${esc(category || "Blog")}</span>
    <span class="text-xs text-gray-500 font-mono">${esc(date || "")}</span>
  </div>
  <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-8">${esc(title2 || "")}</h1>
  ${coverBlock}
  <div class="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed prose-content">${body || ""}</div>
</article>`;
}
__name(articleTemplate, "articleTemplate");
var init_layout = __esm({
  "_lib/layout.js"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name2(esc, "esc");
    __name2(applyGlobals, "applyGlobals");
    __name2(homeCard, "homeCard");
    __name2(blogCard, "blogCard");
    __name2(navLinks, "navLinks");
    __name2(renderDocument, "renderDocument");
    __name2(richText, "richText");
    __name2(renderSections, "renderSections");
    __name2(articleTemplate, "articleTemplate");
  }
});
var editorScript;
var init_editor_script = __esm({
  "_lib/editor-script.js"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    editorScript = `
(() => {
  const main = document.querySelector("main");
  if (!main) return;
  const style = document.createElement("style");
  style.textContent = [
    "[contenteditable=true]:focus{outline:2px solid #0f766e;outline-offset:3px}",
    ".cms-block{position:relative}",
    ".cms-block:hover{outline:1px dashed rgba(15,118,110,.55);outline-offset:6px}",
    ".cms-tools{position:absolute;top:8px;right:8px;z-index:20;display:flex;gap:6px;margin:0}",
    ".cms-tools button{font:600 12px/1 sans-serif;border:1px solid #d0d4da;background:#fff;border-radius:8px;padding:6px 10px;cursor:pointer;box-shadow:0 4px 12px rgba(16,24,40,.08)}",
    ".cms-tools [data-act=drag]{cursor:grab}",
    ".cms-block.cms-over{outline:2px solid #0f766e}",
    ".cms-item + .cms-item{margin-top:1.75rem}",
    ".cms-empty{border:1.5px dashed rgba(15,23,42,.18);border-radius:16px;color:#6b7280;text-align:center;padding:64px 24px;font-size:14px;line-height:1.6}",
    "[data-spacer]{background:repeating-linear-gradient(-45deg,rgba(15,23,42,.04),rgba(15,23,42,.04) 8px,transparent 8px,transparent 16px);border-radius:10px}",
    "figure[data-media]{margin:0}"
  ].join("");
  document.head.appendChild(style);

  const canvas = () => document.querySelector(".cms-canvas") || document.querySelector("article .prose-content") || document.querySelector("article .space-y-8") || document.querySelector("article") || main;
  const tag = (el) => { if (!el.dataset.cmsId) el.dataset.cmsId = "m" + Math.random().toString(36).slice(2, 8); return el.dataset.cmsId; };
  const textSel = "h1,h2,h3,h4,h5,h6,p,li,td,th,figcaption,a";
  const sizes = { H1: "40px", H2: "32px", H3: "26px", H4: "22px", H5: "18px", H6: "16px", P: "16px" };
  const cell = "border:1px solid rgba(15,23,42,.12);padding:10px 12px;text-align:left;vertical-align:top";
  let dragging = null;
  let activeEl = null;

  function closestText(node) {
    const el = node && (node.nodeType === 1 ? node : node.parentElement);
    return el && el.closest(textSel);
  }

  function bind(root) {
    root.querySelectorAll(textSel).forEach((el) => {
      if (el.closest(".cms-tools") || el.closest(".cms-empty")) return;
      el.contentEditable = "true";
      el.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" || el.tagName !== "LI") return;
        e.preventDefault();
        const li = document.createElement("li");
        li.textContent = "\u9805\u76EE";
        el.after(li);
        bind(li.parentElement);
        li.focus();
      });
    });
    root.querySelectorAll("img,video,figure[data-media]").forEach((el) => {
      el.style.cursor = "pointer";
      el.onclick = (e) => { e.preventDefault(); e.stopPropagation(); parent.postMessage({ type: "cms-pick", id: tag(el) }, "*"); };
      el.ondragover = (e) => e.preventDefault();
      el.ondrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files && e.dataTransfer.files[0];
        if (file) parent.postMessage({ type: "cms-file", id: tag(el), file }, "*");
      };
    });
  }

  function tools(block) {
    if (!block || block.nodeType !== 1 || block.classList.contains("cms-tools") || block.classList.contains("cms-empty")) return;
    if (block.querySelector(":scope > .cms-tools")) return;
    block.classList.add("cms-block");
    const bar = document.createElement("div");
    bar.className = "cms-tools";
    bar.contentEditable = "false";
    const extra = block.querySelector("table") ? '<button type="button" data-act="row">\u52A0\u5217</button><button type="button" data-act="col">\u52A0\u6B04</button>' : "";
    bar.innerHTML = '<button type="button" data-act="drag" draggable="true">\u62D6\u52D5</button><button type="button" data-act="del">\u79FB\u9664</button>' + extra;
    bar.querySelector("[data-act=drag]").ondragstart = (e) => { dragging = block; e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("text/plain", "block"); };
    bar.querySelector("[data-act=drag]").ondragend = () => { dragging = null; canvas().querySelectorAll(".cms-over").forEach((n) => n.classList.remove("cms-over")); };
    bar.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const act = e.target.dataset.act;
      if (act === "del") { block.remove(); ensureHint(); }
      if (act === "row") addRow(block.querySelector("table"));
      if (act === "col") addCol(block.querySelector("table"));
    };
    block.ondragover = (e) => { if (!dragging || dragging === block) return; e.preventDefault(); block.classList.add("cms-over"); };
    block.ondragleave = () => block.classList.remove("cms-over");
    block.ondrop = (e) => {
      if (!dragging || dragging === block) return;
      e.preventDefault();
      block.classList.remove("cms-over");
      const after = e.clientY > block.getBoundingClientRect().top + block.getBoundingClientRect().height / 2;
      block.parentElement.insertBefore(dragging, after ? block.nextSibling : block);
    };
    block.prepend(bar);
  }

  function addRow(table) {
    if (!table) return;
    const cols = table.rows[0].cells.length;
    const tr = table.insertRow();
    for (let i = 0; i < cols; i++) {
      const td = tr.insertCell();
      td.setAttribute("style", cell);
      td.textContent = "\u5167\u5BB9";
    }
    bind(table);
  }

  function addCol(table) {
    if (!table) return;
    [...table.rows].forEach((row, index) => {
      const cellEl = index === 0 && row.parentElement.tagName === "THEAD" ? document.createElement("th") : document.createElement("td");
      cellEl.setAttribute("style", cell + (cellEl.tagName === "TH" ? ";font-weight:700;background:#f8fafc" : ""));
      cellEl.textContent = index === 0 && cellEl.tagName === "TH" ? "\u65B0\u6B04" : "\u5167\u5BB9";
      row.appendChild(cellEl);
    });
    bind(table);
  }

  function ensureHint() {
    const host = canvas();
    const real = [...host.children].filter((n) => n.nodeType === 1 && !n.classList.contains("cms-empty"));
    const hint = host.querySelector(":scope > .cms-empty");
    if (real.length) { if (hint) hint.remove(); return; }
    if (hint) return;
    const el = document.createElement("div");
    el.className = "cms-empty";
    el.textContent = "\u5F9E\u5DE6\u5074\u52A0\u5165\u6A19\u984C\u3001\u6BB5\u843D\u3001\u6E05\u55AE\u3001\u8868\u683C\u6216\u5716\u7247";
    host.appendChild(el);
  }

  function markup(kind) {
    const head = (level, px, weight) => '<h' + level + ' style="font-size:' + px + ';font-weight:' + weight + ';line-height:1.3;margin:0;color:inherit">\u6A19\u984C</h' + level + '>';
    if (kind === "h1") return head(1, "40px", 900);
    if (kind === "h2") return head(2, "32px", 800);
    if (kind === "h3") return head(3, "26px", 700);
    if (kind === "h4") return head(4, "22px", 700);
    if (kind === "h5") return head(5, "18px", 700);
    if (kind === "h6") return head(6, "16px", 700);
    if (kind === "ul") return '<ul style="margin:0;padding-left:1.25rem;line-height:1.75"><li>\u9805\u76EE\u4E00</li><li>\u9805\u76EE\u4E8C</li></ul>';
    if (kind === "ol") return '<ol style="margin:0;padding-left:1.25rem;line-height:1.75"><li>\u9805\u76EE\u4E00</li><li>\u9805\u76EE\u4E8C</li></ol>';
    if (kind === "hr") return '<hr style="border:0;border-top:1px solid rgba(17,24,39,.16);margin:8px 0">';
    if (kind === "spacer") return '<div data-spacer="1" style="height:56px"></div>';
    if (kind === "table") return '<table style="width:100%;border-collapse:collapse;font-size:15px"><thead><tr><th style="' + cell + ';font-weight:700;background:#f8fafc">\u6B04\u4E00</th><th style="' + cell + ';font-weight:700;background:#f8fafc">\u6B04\u4E8C</th><th style="' + cell + ';font-weight:700;background:#f8fafc">\u6B04\u4E09</th></tr></thead><tbody><tr><td style="' + cell + '">\u5167\u5BB9</td><td style="' + cell + '">\u5167\u5BB9</td><td style="' + cell + '">\u5167\u5BB9</td></tr><tr><td style="' + cell + '">\u5167\u5BB9</td><td style="' + cell + '">\u5167\u5BB9</td><td style="' + cell + '">\u5167\u5BB9</td></tr></tbody></table>';
    if (kind === "image") return '<figure data-media="image" style="min-height:200px;display:grid;place-items:center;border:1.5px dashed rgba(15,23,42,.18);border-radius:16px;background:#f8fafc;color:#6b7280">\u9EDE\u64CA\u4E0A\u50B3\u5716\u7247</figure>';
    if (kind === "video") return '<figure data-media="video" style="min-height:200px;display:grid;place-items:center;border:1.5px dashed rgba(15,23,42,.18);border-radius:16px;background:#f8fafc;color:#6b7280">\u9EDE\u64CA\u4E0A\u50B3\u5F71\u7247</figure>';
    return '<p style="font-size:16px;font-weight:400;line-height:1.75;margin:0;color:inherit">\u6BB5\u843D\u6587\u5B57</p>';
  }

  function paintMedia(el, url, kind) {
    el.innerHTML = kind === "video"
      ? '<video controls style="width:100%;border-radius:16px;display:block" src="' + url + '"></video>'
      : '<img alt="" style="width:100%;border-radius:16px;display:block" src="' + url + '">';
    el.style.border = "0";
    el.style.minHeight = "0";
    el.style.background = "transparent";
    el.style.display = "block";
    bind(el);
  }

  function report() {
    const el = activeEl;
    if (!el || !el.isConnected) { parent.postMessage({ type: "cms-selection", active: false }, "*"); return; }
    const cs = getComputedStyle(el);
    const rgb = String(cs.color).match(/\\d+/g) || ["17", "24", "39"];
    const hex = "#" + rgb.slice(0, 3).map((n) => Number(n).toString(16).padStart(2, "0")).join("");
    parent.postMessage({
      type: "cms-selection",
      active: true,
      tag: el.tagName,
      weight: String(cs.fontWeight),
      size: Math.round(parseFloat(cs.fontSize) || 16) + "",
      color: hex,
      align: cs.textAlign || "left"
    }, "*");
  }

  function apply(msg) {
    const el = activeEl && activeEl.isConnected ? activeEl : closestText(document.getSelection() && document.getSelection().anchorNode);
    if (!el) return;
    if (msg.action === "block") {
      const next = document.createElement(msg.value);
      next.innerHTML = el.innerHTML;
      next.style.cssText = el.style.cssText;
      next.style.fontSize = sizes[msg.value] || "16px";
      next.style.fontWeight = msg.value === "P" ? "400" : "700";
      next.style.margin = "0";
      el.replaceWith(next);
      activeEl = next;
      bind(next.parentElement || canvas());
    } else if (msg.action === "weight") el.style.fontWeight = msg.value;
    else if (msg.action === "size") el.style.fontSize = msg.value + "px";
    else if (msg.action === "color") el.style.color = msg.value;
    else if (msg.action === "align") el.style.textAlign = msg.value;
    else if (msg.action === "bold") el.style.fontWeight = Number(getComputedStyle(el).fontWeight) >= 700 ? "400" : "700";
    report();
  }

  function clean() {
    const clone = main.cloneNode(true);
    clone.querySelectorAll(".cms-tools,.cms-empty").forEach((n) => n.remove());
    clone.querySelectorAll(".cms-block").forEach((n) => n.classList.remove("cms-block", "cms-over"));
    clone.querySelectorAll("[contenteditable]").forEach((n) => n.removeAttribute("contenteditable"));
    clone.querySelectorAll("[data-cms-id]").forEach((n) => n.removeAttribute("data-cms-id"));
    clone.querySelectorAll("figure[data-media]").forEach((n) => { if (!n.querySelector("img[src],video[src]")) n.remove(); });
    return clone.innerHTML.trim();
  }

  const root = canvas();
  [...root.children].forEach(tools);
  bind(root);
  ensureHint();
  document.addEventListener("selectionchange", () => {
    const found = closestText(document.getSelection() && document.getSelection().anchorNode);
    if (found) activeEl = found;
    report();
  });

  window.addEventListener("message", (ev) => {
    const msg = ev.data || {};
    if (msg.type === "cms-collect") parent.postMessage({ type: "cms-html", html: clean() }, "*");
    if (msg.type === "cms-format") apply(msg);
    if (msg.type === "cms-insert") {
      const host = canvas();
      const el = document.createElement("div");
      el.className = "cms-item";
      el.innerHTML = markup(msg.kind);
      host.appendChild(el);
      tools(el);
      bind(el);
      ensureHint();
      const text = el.querySelector(textSel);
      if (text) { activeEl = text; text.focus(); report(); }
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (msg.type === "cms-set-src") {
      const el = main.querySelector('[data-cms-id="' + msg.id + '"]');
      if (!el) return;
      if (el.tagName === "FIGURE") paintMedia(el, msg.url, msg.kind);
      else if (msg.kind === "video" && el.tagName !== "VIDEO") {
        const video = document.createElement("video");
        video.controls = true;
        video.style.width = "100%";
        video.src = msg.url;
        el.replaceWith(video);
        bind(video.parentElement || canvas());
      } else el.src = msg.url;
    }
  });
})();
`;
  }
});
function json(data, status = 200, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...extra }
  });
}
__name(json, "json");
function html(body, status = 200) {
  return new Response(body, {
    status,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" }
  });
}
__name(html, "html");
async function requireUser(env2, request) {
  const user = await getUser(env2, request);
  if (!user) {
    const err = new Error("\u672A\u767B\u5165");
    err.status = 401;
    throw err;
  }
  return user;
}
__name(requireUser, "requireUser");
function slugify(value) {
  return String(value || "").trim().toLowerCase().replace(/\.html$/, "").replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}
__name(slugify, "slugify");
async function loadPage(env2, slug) {
  return env2.DB.prepare("SELECT * FROM pages WHERE slug = ? AND status = 'published'").bind(slug).first();
}
__name(loadPage, "loadPage");
async function renderPublic(env2, page, origin) {
  const settings = await getSettings(env2);
  const nav = (await env2.DB.prepare(
    "SELECT slug, nav_label FROM pages WHERE show_in_nav = 1 AND locale = ? AND status = 'published' ORDER BY sort_order, id"
  ).bind(page.locale).all()).results || [];
  let posts = [];
  if ((page.content_html || "").includes("<!--CMS_")) {
    posts = (await env2.DB.prepare(
      "SELECT slug, title, excerpt, category, cover, published_at FROM pages WHERE kind = 'post' AND locale = ? AND status = 'published' ORDER BY published_at DESC, id DESC"
    ).bind(page.locale).all()).results || [];
    if ((page.content_html || "").includes("<!--CMS_HOME_POSTS-->")) posts = posts.slice(0, 2);
  }
  return html(renderDocument({ page, settings, nav, posts, origin }));
}
__name(renderPublic, "renderPublic");
async function handleAdminApi(request, env2, path) {
  const method = request.method;
  if (path === "/api/admin/login" && method === "POST") {
    assertSameOrigin(request);
    const body = await request.json();
    const user2 = await env2.DB.prepare("SELECT * FROM admin_users WHERE username = ?").bind(String(body.username || "").trim()).first();
    if (!user2 || !await verifyPassword(body.password || "", user2.password_hash)) return json({ error: "\u5E33\u865F\u6216\u5BC6\u78BC\u4E0D\u6B63\u78BA" }, 401);
    const token = await startSession(env2, user2.id);
    return json({ ok: true, mustChange: !!user2.must_change }, 200, { "set-cookie": sessionCookie(token, request) });
  }
  if (path === "/api/admin/logout" && method === "POST") {
    const user2 = await getUser(env2, request);
    if (user2) await env2.DB.prepare("DELETE FROM sessions WHERE user_id = ?").bind(user2.id).run();
    return json({ ok: true }, 200, { "set-cookie": sessionCookie("", request) });
  }
  const user = await requireUser(env2, request);
  if (path === "/api/admin/me" && method === "GET") return json({ username: user.username, mustChange: !!user.must_change });
  if (path === "/api/admin/password" && method === "POST") {
    assertSameOrigin(request);
    const body = await request.json();
    if (!body.password || String(body.password).length < 8) return json({ error: "\u5BC6\u78BC\u81F3\u5C11 8 \u500B\u5B57\u5143" }, 400);
    const hash = await hashPassword(body.password);
    await env2.DB.prepare("UPDATE admin_users SET password_hash = ?, must_change = 0 WHERE id = ?").bind(hash, user.id).run();
    return json({ ok: true });
  }
  if (path === "/api/admin/dashboard" && method === "GET") {
    const pages = await env2.DB.prepare("SELECT COUNT(*) AS n FROM pages WHERE kind = 'page'").first();
    const posts = await env2.DB.prepare("SELECT COUNT(*) AS n FROM pages WHERE kind = 'post'").first();
    const drafts = await env2.DB.prepare("SELECT COUNT(*) AS n FROM pages WHERE status = 'draft'").first();
    const unread = await env2.DB.prepare("SELECT COUNT(*) AS n FROM messages WHERE is_read = 0").first();
    return json({ pages: pages.n, posts: posts.n, drafts: drafts.n, unread: unread.n });
  }
  if (path === "/api/admin/pages" && method === "GET") {
    const kind = new URL(request.url).searchParams.get("kind") || "page";
    const { results } = await env2.DB.prepare(
      "SELECT id, slug, locale, kind, title, status, updated_at, published_at, show_in_nav FROM pages WHERE kind = ? ORDER BY sort_order, id"
    ).bind(kind).all();
    return json({ items: results || [] });
  }
  if (path === "/api/admin/pages" && method === "POST") {
    assertSameOrigin(request);
    const body = await request.json();
    const kind = body.kind === "post" ? "post" : "page";
    const slug = slugify(body.slug || body.title);
    if (!slug) return json({ error: "\u8ACB\u586B\u5BEB\u7DB2\u5740\u4EE3\u7A31" }, 400);
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const locale = body.locale === "en" ? "en" : "zh";
    const html2 = String(body.content_html || "").trim();
    const useHtml = body.use_html === true && !!html2;
    const sectionsJson = JSON.stringify(useHtml ? [] : Array.isArray(body.sections) ? body.sections : []);
    const content = useHtml ? html2 : kind === "post" ? articleTemplate({ title: body.title, category: body.category, date: body.published_at, cover: body.cover, body: "<!--CMS_SECTIONS-->", locale }) : `<div class="max-w-4xl mx-auto w-full px-6 pt-14 md:pt-12 pb-20"><!--CMS_SECTIONS--></div>`;
    const mainClass = kind === "post" ? "flex-1 max-w-4xl mx-auto px-6 pt-14 md:pt-12 pb-20 w-full" : "flex-1 w-full";
    try {
      const result = await env2.DB.prepare(
        `INSERT INTO pages (slug, locale, kind, title, nav_label, show_in_nav, sort_order, pair_slug, meta_title, meta_description, og_image, canonical, robots, main_class, content_html, excerpt, category, cover, published_at, status, updated_at, sections_json)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        slug,
        locale,
        kind,
        body.title || slug,
        body.nav_label || "",
        body.show_in_nav ? 1 : 0,
        Number(body.sort_order) || 0,
        slugify(body.pair_slug || ""),
        body.meta_title || "",
        body.meta_description || "",
        body.og_image || "",
        body.canonical || "",
        body.robots || "index,follow",
        mainClass,
        content,
        body.excerpt || "",
        body.category || "",
        body.cover || "",
        body.published_at || now.slice(0, 10),
        body.status === "draft" ? "draft" : "published",
        now,
        sectionsJson
      ).run();
      return json({ id: result.meta.last_row_id, slug });
    } catch (e) {
      return json({ error: "\u9019\u500B\u7DB2\u5740\u4EE3\u7A31\u5DF2\u5B58\u5728" }, 400);
    }
  }
  const pageMatch = path.match(/^\/api\/admin\/pages\/(\d+)$/);
  if (pageMatch && method === "GET") {
    const row = await env2.DB.prepare("SELECT * FROM pages WHERE id = ?").bind(pageMatch[1]).first();
    if (!row) return json({ error: "\u627E\u4E0D\u5230" }, 404);
    return json(row);
  }
  if (pageMatch && method === "PUT") {
    assertSameOrigin(request);
    const body = await request.json();
    const existing = await env2.DB.prepare("SELECT * FROM pages WHERE id = ?").bind(pageMatch[1]).first();
    if (!existing) return json({ error: "\u627E\u4E0D\u5230" }, 404);
    const slug = slugify(body.slug || existing.slug);
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const html2 = String(body.content_html || "").trim();
    const useHtml = body.use_html === true && !!html2;
    const sections = useHtml ? [] : Array.isArray(body.sections) ? body.sections : [];
    const sectionsJson = JSON.stringify(sections);
    const locale = body.locale === "en" ? "en" : existing.locale || "zh";
    const shell = existing.kind === "post" ? articleTemplate({ title: body.title, category: body.category, date: body.published_at, cover: body.cover, body: "<!--CMS_SECTIONS-->", locale }) : `<div class="max-w-4xl mx-auto w-full px-6 pt-14 md:pt-12 pb-20"><!--CMS_SECTIONS--></div>`;
    const managed = String(existing.content_html || "").includes("<!--CMS_SECTIONS-->");
    const content = useHtml ? html2 : sections.length ? shell : managed && existing.kind === "post" ? shell : existing.content_html;
    await env2.DB.prepare(
      `UPDATE pages SET slug=?, locale=?, title=?, nav_label=?, show_in_nav=?, sort_order=?, pair_slug=?, meta_title=?, meta_description=?, og_image=?, canonical=?, robots=?, content_html=?, excerpt=?, category=?, cover=?, published_at=?, status=?, updated_at=?, sections_json=? WHERE id=?`
    ).bind(
      slug,
      body.locale === "en" ? "en" : "zh",
      body.title || existing.title,
      body.nav_label || "",
      body.show_in_nav ? 1 : 0,
      Number(body.sort_order) || 0,
      slugify(body.pair_slug || ""),
      body.meta_title || "",
      body.meta_description || "",
      body.og_image || "",
      body.canonical || "",
      body.robots || "index,follow",
      content,
      body.excerpt || "",
      body.category || "",
      body.cover || "",
      body.published_at || "",
      body.status === "draft" ? "draft" : "published",
      now,
      sectionsJson,
      existing.id
    ).run();
    return json({ ok: true, slug });
  }
  if (pageMatch && method === "DELETE") {
    assertSameOrigin(request);
    await env2.DB.prepare("DELETE FROM pages WHERE id = ?").bind(pageMatch[1]).run();
    return json({ ok: true });
  }
  if (path === "/api/admin/settings" && method === "GET") return json(await getSettings(env2));
  if (path === "/api/admin/settings" && method === "PUT") {
    assertSameOrigin(request);
    return json(await saveSettings(env2, await request.json()));
  }
  if (path === "/api/admin/media" && method === "GET") {
    const { results } = await env2.DB.prepare("SELECT id, filename, mime, kind, created_at FROM media ORDER BY id DESC").all();
    return json({ items: (results || []).map((m) => ({ ...m, url: "/media/" + m.id })) });
  }
  if (path === "/api/admin/media" && method === "POST") {
    assertSameOrigin(request);
    if (!env2.MEDIA) return json({ error: "\u5C1A\u672A\u7D81\u5B9A R2 \u5716\u7247\u5EAB" }, 500);
    const form = await request.formData();
    const file = form.get("file");
    if (!file || typeof file === "string") return json({ error: "\u8ACB\u9078\u64C7\u6A94\u6848" }, 400);
    const mime = file.type || "application/octet-stream";
    const kind = mime.startsWith("video/") ? "video" : mime.startsWith("image/") ? "image" : "";
    if (!kind) return json({ error: "\u53EA\u63A5\u53D7\u5716\u7247\u6216\u5F71\u7247" }, 400);
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const inserted = await env2.DB.prepare("INSERT INTO media (r2_key, filename, mime, created_at, byte_size, kind) VALUES ('pending', ?, ?, ?, ?, ?)").bind(file.name || "file", mime, now, file.size || 0, kind).run();
    const id = inserted.meta.last_row_id;
    const key = "media/" + id;
    await env2.MEDIA.put(key, await file.arrayBuffer(), { httpMetadata: { contentType: mime } });
    await env2.DB.prepare("UPDATE media SET r2_key = ? WHERE id = ?").bind(key, id).run();
    return json({ id, url: "/media/" + id, kind, mime });
  }
  if (path === "/api/admin/preview" && method === "POST") {
    assertSameOrigin(request);
    const body = await request.json();
    const url = new URL(request.url);
    const settings = await getSettings(env2);
    const locale = body.locale === "en" ? "en" : "zh";
    const page = {
      slug: slugify(body.slug || "preview") || "preview",
      locale,
      kind: body.kind === "post" ? "post" : "page",
      title: body.title || "",
      pair_slug: body.pair_slug || "",
      meta_title: body.meta_title || "",
      meta_description: body.meta_description || "",
      og_image: body.og_image || "",
      canonical: "",
      robots: "noindex,nofollow",
      main_class: body.main_class || "flex-1 w-full",
      content_html: body.content_html || ""
    };
    const rendered = await renderPublic(env2, page, url.origin);
    let text = await rendered.text();
    text = text.replace("<head>", `<head><base href="${esc(url.origin)}/">`);
    text = text.replace("</body>", `<script>${editorScript}<\/script></body>`);
    return html(text);
  }
  if (path === "/api/admin/messages" && method === "GET") {
    const { results } = await env2.DB.prepare("SELECT * FROM messages ORDER BY id DESC LIMIT 200").all();
    return json({ items: results || [] });
  }
  const msgMatch = path.match(/^\/api\/admin\/messages\/(\d+)\/read$/);
  if (msgMatch && method === "POST") {
    await env2.DB.prepare("UPDATE messages SET is_read = 1 WHERE id = ?").bind(msgMatch[1]).run();
    return json({ ok: true });
  }
  return json({ error: "\u627E\u4E0D\u5230" }, 404);
}
__name(handleAdminApi, "handleAdminApi");
async function onRequest(context2) {
  const { request, env: env2 } = context2;
  try {
    await ensureDb(env2);
  } catch (err) {
    return json({ error: err.message || "\u8CC7\u6599\u5EAB\u5C1A\u672A\u5C31\u7DD2" }, 500);
  }
  const url = new URL(request.url);
  const path = decodeURIComponent(url.pathname);
  try {
    if (path.startsWith("/api/admin/")) return await handleAdminApi(request, env2, path);
    if (path === "/api/contact" && request.method === "POST") {
      const body = await request.json();
      if (!body.email || !body.message) return json({ error: "\u8ACB\u586B\u5BEB\u96FB\u90F5\u8207\u5167\u5BB9" }, 400);
      await env2.DB.prepare(
        "INSERT INTO messages (name, email, app, topic, device, body, locale, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
      ).bind(body.name || "", body.email, body.app || "", body.topic || "", body.device || "", body.message, body.locale || "zh", (/* @__PURE__ */ new Date()).toISOString()).run();
      return json({ ok: true });
    }
    const mediaMatch = path.match(/^\/media\/(\d+)$/);
    if (mediaMatch) {
      const row = await env2.DB.prepare("SELECT * FROM media WHERE id = ?").bind(mediaMatch[1]).first();
      if (!row || !env2.MEDIA) return new Response("\u627E\u4E0D\u5230\u5716\u7247", { status: 404 });
      const obj = await env2.MEDIA.get(row.r2_key);
      if (!obj) return new Response("\u627E\u4E0D\u5230\u5716\u7247", { status: 404 });
      return new Response(obj.body, { headers: { "content-type": row.mime, "cache-control": "public, max-age=86400" } });
    }
    const settings = await getSettings(env2);
    const origin = (settings.site_url || url.origin).replace(/\/$/, "");
    if (path === "/robots.txt") {
      const body = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/

Sitemap: ${origin}/sitemap.xml
${settings.robots_extra || ""}`;
      return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
    }
    if (path === "/sitemap.xml") {
      const { results } = await env2.DB.prepare("SELECT slug, updated_at, robots FROM pages WHERE status = 'published'").all();
      const urls = (results || []).filter((p) => !String(p.robots).includes("noindex")).map(
        (p) => `<url><loc>${esc(origin + "/" + p.slug + ".html")}</loc><lastmod>${esc((p.updated_at || "").slice(0, 10))}</lastmod></url>`
      ).join("");
      return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
        headers: { "content-type": "application/xml; charset=utf-8" }
      });
    }
    const clean = path.replace(/^\/+|\/+$/g, "");
    const slug = clean === "" ? "index" : clean.replace(/\.html$/, "");
    const pageLike = /^[a-z0-9-]+$/.test(slug);
    if (pageLike) {
      const page = await loadPage(env2, slug);
      if (page) return renderPublic(env2, page, url.origin);
    }
    const asset = await env2.ASSETS.fetch(request);
    if (asset.status !== 404 || !pageLike) return asset;
    return html(`<!DOCTYPE html><html lang="zh-HK"><head><meta charset="UTF-8"><title>\u627E\u4E0D\u5230\u9801\u9762 | ${esc(settings.site_name)}</title><link rel="icon" href="${esc(settings.favicon_url || "/logo.png")}"><link rel="stylesheet" href="/theme.css"></head><body style="font-family:sans-serif;display:grid;place-items:center;min-height:100vh"><div><h1>\u627E\u4E0D\u5230\u9019\u500B\u9801\u9762</h1><p><a href="/">\u8FD4\u56DE\u9996\u9801</a></p></div></body></html>`, 404);
  } catch (err) {
    const status = err.status || 500;
    return json({ error: err.message || "\u932F\u8AA4" }, status);
  }
}
__name(onRequest, "onRequest");
var init_path = __esm({
  "[[path]].js"() {
    init_functionsRoutes_0_06350503103172589();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_db();
    init_auth();
    init_layout();
    init_editor_script();
    __name2(json, "json");
    __name2(html, "html");
    __name2(requireUser, "requireUser");
    __name2(slugify, "slugify");
    __name2(loadPage, "loadPage");
    __name2(renderPublic, "renderPublic");
    __name2(handleAdminApi, "handleAdminApi");
    __name2(onRequest, "onRequest");
  }
});
var routes;
var init_functionsRoutes_0_06350503103172589 = __esm({
  "../.wrangler/tmp/pages-n6K4pR/functionsRoutes-0.06350503103172589.mjs"() {
    init_path();
    routes = [
      {
        routePath: "/:path*",
        mountPath: "/",
        method: "",
        middlewares: [],
        modules: [onRequest]
      }
    ];
  }
});
init_functionsRoutes_0_06350503103172589();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_functionsRoutes_0_06350503103172589();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_functionsRoutes_0_06350503103172589();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_functionsRoutes_0_06350503103172589();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count3 = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count3--;
          if (count3 === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count3++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count3)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
__name2(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name2(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name2(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name2(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name2(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name2(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
__name2(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
__name2(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name2(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
__name2(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
__name2(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
__name2(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
__name2(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
__name2(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
__name2(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
__name2(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");
__name2(pathToRegexp, "pathToRegexp");
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
__name2(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env2, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name2(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context2 = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env: env2,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name2(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context2);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env2["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error3) {
      if (isFailOpen) {
        const response = await env2["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error3;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name2((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
init_functionsRoutes_0_06350503103172589();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name2(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;
init_functionsRoutes_0_06350503103172589();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
__name2(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name2(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e) {
    const error3 = reduceError(e);
    const body = JSON.stringify(error3);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;
init_functionsRoutes_0_06350503103172589();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
__name2(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
__name2(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");
__name2(__facade_invoke__, "__facade_invoke__");
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  static {
    __name(this, "___Facade_ScheduledController__");
  }
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name2(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name2(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name2(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
__name2(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name2((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name2((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
__name2(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default2 = drainBody2;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
__name(reduceError2, "reduceError");
var jsonError2 = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e) {
    const error3 = reduceError2(e);
    const body = JSON.stringify(error3);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-QAYdnm/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = middleware_loader_entry_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
__name(__facade_register__2, "__facade_register__");
function __facade_invokeChain__2(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__2, "__facade_invokeChain__");
function __facade_invoke__2(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env2, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}
__name(__facade_invoke__2, "__facade_invoke__");

// .wrangler/tmp/bundle-QAYdnm/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class ___Facade_ScheduledController__2 {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__2(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler2, "wrapExportedHandler");
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint2, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
//# sourceMappingURL=functionsWorker-0.11108928771555304.js.map
