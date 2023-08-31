'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var react = {exports: {}};

var react_development = {exports: {}};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
react_development.exports;

var hasRequiredReact_development;

function requireReact_development () {
	if (hasRequiredReact_development) return react_development.exports;
	hasRequiredReact_development = 1;
	(function (module, exports) {

		{
		  (function () {

		    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
		      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		    }
		    var ReactVersion = '18.2.0';

		    // ATTENTION
		    // When adding new symbols to this file,
		    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
		    // The Symbol used to tag the ReactElement-like types.
		    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
		    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
		    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
		    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
		    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
		    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
		    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
		    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
		    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
		    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
		    var REACT_MEMO_TYPE = Symbol.for('react.memo');
		    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
		    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
		    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		    var FAUX_ITERATOR_SYMBOL = '@@iterator';
		    function getIteratorFn(maybeIterable) {
		      if (maybeIterable === null || typeof maybeIterable !== 'object') {
		        return null;
		      }
		      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
		      if (typeof maybeIterator === 'function') {
		        return maybeIterator;
		      }
		      return null;
		    }

		    /**
		     * Keeps track of the current dispatcher.
		     */
		    var ReactCurrentDispatcher = {
		      /**
		       * @internal
		       * @type {ReactComponent}
		       */
		      current: null
		    };

		    /**
		     * Keeps track of the current batch's configuration such as how long an update
		     * should suspend for if it needs to.
		     */
		    var ReactCurrentBatchConfig = {
		      transition: null
		    };
		    var ReactCurrentActQueue = {
		      current: null,
		      // Used to reproduce behavior of `batchedUpdates` in legacy mode.
		      isBatchingLegacy: false,
		      didScheduleLegacyUpdate: false
		    };

		    /**
		     * Keeps track of the current owner.
		     *
		     * The current owner is the component who should own any components that are
		     * currently being constructed.
		     */
		    var ReactCurrentOwner = {
		      /**
		       * @internal
		       * @type {ReactComponent}
		       */
		      current: null
		    };
		    var ReactDebugCurrentFrame = {};
		    var currentExtraStackFrame = null;
		    function setExtraStackFrame(stack) {
		      {
		        currentExtraStackFrame = stack;
		      }
		    }
		    {
		      ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
		        {
		          currentExtraStackFrame = stack;
		        }
		      }; // Stack implementation injected by the current renderer.

		      ReactDebugCurrentFrame.getCurrentStack = null;
		      ReactDebugCurrentFrame.getStackAddendum = function () {
		        var stack = ''; // Add an extra top frame while an element is being validated

		        if (currentExtraStackFrame) {
		          stack += currentExtraStackFrame;
		        } // Delegate to the injected renderer-specific implementation

		        var impl = ReactDebugCurrentFrame.getCurrentStack;
		        if (impl) {
		          stack += impl() || '';
		        }
		        return stack;
		      };
		    }

		    // -----------------------------------------------------------------------------

		    var enableScopeAPI = false; // Experimental Create Event Handle API.
		    var enableCacheElement = false;
		    var enableTransitionTracing = false; // No known bugs, but needs performance testing

		    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
		    // stuff. Intended to enable React core members to more easily debug scheduling
		    // issues in DEV builds.

		    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

		    var ReactSharedInternals = {
		      ReactCurrentDispatcher: ReactCurrentDispatcher,
		      ReactCurrentBatchConfig: ReactCurrentBatchConfig,
		      ReactCurrentOwner: ReactCurrentOwner
		    };
		    {
		      ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
		      ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
		    }

		    // by calls to these methods by a Babel plugin.
		    //
		    // In PROD (or in packages without access to React internals),
		    // they are left as they are instead.

		    function warn(format) {
		      {
		        {
		          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		            args[_key - 1] = arguments[_key];
		          }
		          printWarning('warn', format, args);
		        }
		      }
		    }
		    function error(format) {
		      {
		        {
		          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		            args[_key2 - 1] = arguments[_key2];
		          }
		          printWarning('error', format, args);
		        }
		      }
		    }
		    function printWarning(level, format, args) {
		      // When changing this logic, you might want to also
		      // update consoleWithStackDev.www.js as well.
		      {
		        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		        var stack = ReactDebugCurrentFrame.getStackAddendum();
		        if (stack !== '') {
		          format += '%s';
		          args = args.concat([stack]);
		        } // eslint-disable-next-line react-internal/safe-string-coercion

		        var argsWithFormat = args.map(function (item) {
		          return String(item);
		        }); // Careful: RN currently depends on this prefix

		        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		        // breaks IE9: https://github.com/facebook/react/issues/13610
		        // eslint-disable-next-line react-internal/no-production-logging

		        Function.prototype.apply.call(console[level], console, argsWithFormat);
		      }
		    }
		    var didWarnStateUpdateForUnmountedComponent = {};
		    function warnNoop(publicInstance, callerName) {
		      {
		        var _constructor = publicInstance.constructor;
		        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
		        var warningKey = componentName + "." + callerName;
		        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
		          return;
		        }
		        error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
		        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
		      }
		    }
		    /**
		     * This is the abstract API for an update queue.
		     */

		    var ReactNoopUpdateQueue = {
		      /**
		       * Checks whether or not this composite component is mounted.
		       * @param {ReactClass} publicInstance The instance we want to test.
		       * @return {boolean} True if mounted, false otherwise.
		       * @protected
		       * @final
		       */
		      isMounted: function (publicInstance) {
		        return false;
		      },
		      /**
		       * Forces an update. This should only be invoked when it is known with
		       * certainty that we are **not** in a DOM transaction.
		       *
		       * You may want to call this when you know that some deeper aspect of the
		       * component's state has changed but `setState` was not called.
		       *
		       * This will not invoke `shouldComponentUpdate`, but it will invoke
		       * `componentWillUpdate` and `componentDidUpdate`.
		       *
		       * @param {ReactClass} publicInstance The instance that should rerender.
		       * @param {?function} callback Called after component is updated.
		       * @param {?string} callerName name of the calling function in the public API.
		       * @internal
		       */
		      enqueueForceUpdate: function (publicInstance, callback, callerName) {
		        warnNoop(publicInstance, 'forceUpdate');
		      },
		      /**
		       * Replaces all of the state. Always use this or `setState` to mutate state.
		       * You should treat `this.state` as immutable.
		       *
		       * There is no guarantee that `this.state` will be immediately updated, so
		       * accessing `this.state` after calling this method may return the old value.
		       *
		       * @param {ReactClass} publicInstance The instance that should rerender.
		       * @param {object} completeState Next state.
		       * @param {?function} callback Called after component is updated.
		       * @param {?string} callerName name of the calling function in the public API.
		       * @internal
		       */
		      enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
		        warnNoop(publicInstance, 'replaceState');
		      },
		      /**
		       * Sets a subset of the state. This only exists because _pendingState is
		       * internal. This provides a merging strategy that is not available to deep
		       * properties which is confusing. TODO: Expose pendingState or don't use it
		       * during the merge.
		       *
		       * @param {ReactClass} publicInstance The instance that should rerender.
		       * @param {object} partialState Next partial state to be merged with state.
		       * @param {?function} callback Called after component is updated.
		       * @param {?string} Name of the calling function in the public API.
		       * @internal
		       */
		      enqueueSetState: function (publicInstance, partialState, callback, callerName) {
		        warnNoop(publicInstance, 'setState');
		      }
		    };
		    var assign = Object.assign;
		    var emptyObject = {};
		    {
		      Object.freeze(emptyObject);
		    }
		    /**
		     * Base class helpers for the updating state of a component.
		     */

		    function Component(props, context, updater) {
		      this.props = props;
		      this.context = context; // If a component has string refs, we will assign a different object later.

		      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
		      // renderer.

		      this.updater = updater || ReactNoopUpdateQueue;
		    }
		    Component.prototype.isReactComponent = {};
		    /**
		     * Sets a subset of the state. Always use this to mutate
		     * state. You should treat `this.state` as immutable.
		     *
		     * There is no guarantee that `this.state` will be immediately updated, so
		     * accessing `this.state` after calling this method may return the old value.
		     *
		     * There is no guarantee that calls to `setState` will run synchronously,
		     * as they may eventually be batched together.  You can provide an optional
		     * callback that will be executed when the call to setState is actually
		     * completed.
		     *
		     * When a function is provided to setState, it will be called at some point in
		     * the future (not synchronously). It will be called with the up to date
		     * component arguments (state, props, context). These values can be different
		     * from this.* because your function may be called after receiveProps but before
		     * shouldComponentUpdate, and this new state, props, and context will not yet be
		     * assigned to this.
		     *
		     * @param {object|function} partialState Next partial state or function to
		     *        produce next partial state to be merged with current state.
		     * @param {?function} callback Called after state is updated.
		     * @final
		     * @protected
		     */

		    Component.prototype.setState = function (partialState, callback) {
		      if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
		        throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
		      }
		      this.updater.enqueueSetState(this, partialState, callback, 'setState');
		    };
		    /**
		     * Forces an update. This should only be invoked when it is known with
		     * certainty that we are **not** in a DOM transaction.
		     *
		     * You may want to call this when you know that some deeper aspect of the
		     * component's state has changed but `setState` was not called.
		     *
		     * This will not invoke `shouldComponentUpdate`, but it will invoke
		     * `componentWillUpdate` and `componentDidUpdate`.
		     *
		     * @param {?function} callback Called after update is complete.
		     * @final
		     * @protected
		     */

		    Component.prototype.forceUpdate = function (callback) {
		      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
		    };
		    /**
		     * Deprecated APIs. These APIs used to exist on classic React classes but since
		     * we would like to deprecate them, we're not going to move them over to this
		     * modern base class. Instead, we define a getter that warns if it's accessed.
		     */

		    {
		      var deprecatedAPIs = {
		        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
		        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
		      };
		      var defineDeprecationWarning = function (methodName, info) {
		        Object.defineProperty(Component.prototype, methodName, {
		          get: function () {
		            warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
		            return undefined;
		          }
		        });
		      };
		      for (var fnName in deprecatedAPIs) {
		        if (deprecatedAPIs.hasOwnProperty(fnName)) {
		          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		        }
		      }
		    }
		    function ComponentDummy() {}
		    ComponentDummy.prototype = Component.prototype;
		    /**
		     * Convenience component with default shallow equality check for sCU.
		     */

		    function PureComponent(props, context, updater) {
		      this.props = props;
		      this.context = context; // If a component has string refs, we will assign a different object later.

		      this.refs = emptyObject;
		      this.updater = updater || ReactNoopUpdateQueue;
		    }
		    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
		    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

		    assign(pureComponentPrototype, Component.prototype);
		    pureComponentPrototype.isPureReactComponent = true;

		    // an immutable object with a single mutable value
		    function createRef() {
		      var refObject = {
		        current: null
		      };
		      {
		        Object.seal(refObject);
		      }
		      return refObject;
		    }
		    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

		    function isArray(a) {
		      return isArrayImpl(a);
		    }

		    /*
		     * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
		     * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
		     *
		     * The functions in this module will throw an easier-to-understand,
		     * easier-to-debug exception with a clear errors message message explaining the
		     * problem. (Instead of a confusing exception thrown inside the implementation
		     * of the `value` object).
		     */
		    // $FlowFixMe only called in DEV, so void return is not possible.
		    function typeName(value) {
		      {
		        // toStringTag is needed for namespaced types like Temporal.Instant
		        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		        return type;
		      }
		    } // $FlowFixMe only called in DEV, so void return is not possible.

		    function willCoercionThrow(value) {
		      {
		        try {
		          testStringCoercion(value);
		          return false;
		        } catch (e) {
		          return true;
		        }
		      }
		    }
		    function testStringCoercion(value) {
		      // If you ended up here by following an exception call stack, here's what's
		      // happened: you supplied an object or symbol value to React (as a prop, key,
		      // DOM attribute, CSS property, string ref, etc.) and when React tried to
		      // coerce it to a string using `'' + value`, an exception was thrown.
		      //
		      // The most common types that will cause this exception are `Symbol` instances
		      // and Temporal objects like `Temporal.Instant`. But any object that has a
		      // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
		      // exception. (Library authors do this to prevent users from using built-in
		      // numeric operators like `+` or comparison operators like `>=` because custom
		      // methods are needed to perform accurate arithmetic or comparison.)
		      //
		      // To fix the problem, coerce this object or symbol value to a string before
		      // passing it to React. The most reliable way is usually `String(value)`.
		      //
		      // To find which value is throwing, check the browser or debugger console.
		      // Before this exception was thrown, there should be `console.error` output
		      // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
		      // problem and how that type was used: key, atrribute, input value prop, etc.
		      // In most cases, this console output also shows the component and its
		      // ancestor components where the exception happened.
		      //
		      // eslint-disable-next-line react-internal/safe-string-coercion
		      return '' + value;
		    }
		    function checkKeyStringCoercion(value) {
		      {
		        if (willCoercionThrow(value)) {
		          error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
		          return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
		        }
		      }
		    }

		    function getWrappedName(outerType, innerType, wrapperName) {
		      var displayName = outerType.displayName;
		      if (displayName) {
		        return displayName;
		      }
		      var functionName = innerType.displayName || innerType.name || '';
		      return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		    } // Keep in sync with react-reconciler/getComponentNameFromFiber

		    function getContextName(type) {
		      return type.displayName || 'Context';
		    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.

		    function getComponentNameFromType(type) {
		      if (type == null) {
		        // Host root, text node or just invalid type.
		        return null;
		      }
		      {
		        if (typeof type.tag === 'number') {
		          error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		        }
		      }
		      if (typeof type === 'function') {
		        return type.displayName || type.name || null;
		      }
		      if (typeof type === 'string') {
		        return type;
		      }
		      switch (type) {
		        case REACT_FRAGMENT_TYPE:
		          return 'Fragment';
		        case REACT_PORTAL_TYPE:
		          return 'Portal';
		        case REACT_PROFILER_TYPE:
		          return 'Profiler';
		        case REACT_STRICT_MODE_TYPE:
		          return 'StrictMode';
		        case REACT_SUSPENSE_TYPE:
		          return 'Suspense';
		        case REACT_SUSPENSE_LIST_TYPE:
		          return 'SuspenseList';
		      }
		      if (typeof type === 'object') {
		        switch (type.$$typeof) {
		          case REACT_CONTEXT_TYPE:
		            var context = type;
		            return getContextName(context) + '.Consumer';
		          case REACT_PROVIDER_TYPE:
		            var provider = type;
		            return getContextName(provider._context) + '.Provider';
		          case REACT_FORWARD_REF_TYPE:
		            return getWrappedName(type, type.render, 'ForwardRef');
		          case REACT_MEMO_TYPE:
		            var outerName = type.displayName || null;
		            if (outerName !== null) {
		              return outerName;
		            }
		            return getComponentNameFromType(type.type) || 'Memo';
		          case REACT_LAZY_TYPE:
		            {
		              var lazyComponent = type;
		              var payload = lazyComponent._payload;
		              var init = lazyComponent._init;
		              try {
		                return getComponentNameFromType(init(payload));
		              } catch (x) {
		                return null;
		              }
		            }

		          // eslint-disable-next-line no-fallthrough
		        }
		      }

		      return null;
		    }
		    var hasOwnProperty = Object.prototype.hasOwnProperty;
		    var RESERVED_PROPS = {
		      key: true,
		      ref: true,
		      __self: true,
		      __source: true
		    };
		    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
		    {
		      didWarnAboutStringRefs = {};
		    }
		    function hasValidRef(config) {
		      {
		        if (hasOwnProperty.call(config, 'ref')) {
		          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
		          if (getter && getter.isReactWarning) {
		            return false;
		          }
		        }
		      }
		      return config.ref !== undefined;
		    }
		    function hasValidKey(config) {
		      {
		        if (hasOwnProperty.call(config, 'key')) {
		          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
		          if (getter && getter.isReactWarning) {
		            return false;
		          }
		        }
		      }
		      return config.key !== undefined;
		    }
		    function defineKeyPropWarningGetter(props, displayName) {
		      var warnAboutAccessingKey = function () {
		        {
		          if (!specialPropKeyWarningShown) {
		            specialPropKeyWarningShown = true;
		            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		          }
		        }
		      };
		      warnAboutAccessingKey.isReactWarning = true;
		      Object.defineProperty(props, 'key', {
		        get: warnAboutAccessingKey,
		        configurable: true
		      });
		    }
		    function defineRefPropWarningGetter(props, displayName) {
		      var warnAboutAccessingRef = function () {
		        {
		          if (!specialPropRefWarningShown) {
		            specialPropRefWarningShown = true;
		            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		          }
		        }
		      };
		      warnAboutAccessingRef.isReactWarning = true;
		      Object.defineProperty(props, 'ref', {
		        get: warnAboutAccessingRef,
		        configurable: true
		      });
		    }
		    function warnIfStringRefCannotBeAutoConverted(config) {
		      {
		        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
		          var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
		          if (!didWarnAboutStringRefs[componentName]) {
		            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
		            didWarnAboutStringRefs[componentName] = true;
		          }
		        }
		      }
		    }
		    /**
		     * Factory method to create a new React element. This no longer adheres to
		     * the class pattern, so do not use new to call it. Also, instanceof check
		     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		     * if something is a React Element.
		     *
		     * @param {*} type
		     * @param {*} props
		     * @param {*} key
		     * @param {string|object} ref
		     * @param {*} owner
		     * @param {*} self A *temporary* helper to detect places where `this` is
		     * different from the `owner` when React.createElement is called, so that we
		     * can warn. We want to get rid of owner and replace string `ref`s with arrow
		     * functions, and as long as `this` and owner are the same, there will be no
		     * change in behavior.
		     * @param {*} source An annotation object (added by a transpiler or otherwise)
		     * indicating filename, line number, and/or other information.
		     * @internal
		     */

		    var ReactElement = function (type, key, ref, self, source, owner, props) {
		      var element = {
		        // This tag allows us to uniquely identify this as a React Element
		        $$typeof: REACT_ELEMENT_TYPE,
		        // Built-in properties that belong on the element
		        type: type,
		        key: key,
		        ref: ref,
		        props: props,
		        // Record the component responsible for creating this element.
		        _owner: owner
		      };
		      {
		        // The validation flag is currently mutative. We put it on
		        // an external backing store so that we can freeze the whole object.
		        // This can be replaced with a WeakMap once they are implemented in
		        // commonly used development environments.
		        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		        // the validation flag non-enumerable (where possible, which should
		        // include every environment we run tests in), so the test framework
		        // ignores it.

		        Object.defineProperty(element._store, 'validated', {
		          configurable: false,
		          enumerable: false,
		          writable: true,
		          value: false
		        }); // self and source are DEV only properties.

		        Object.defineProperty(element, '_self', {
		          configurable: false,
		          enumerable: false,
		          writable: false,
		          value: self
		        }); // Two elements created in two different places should be considered
		        // equal for testing purposes and therefore we hide it from enumeration.

		        Object.defineProperty(element, '_source', {
		          configurable: false,
		          enumerable: false,
		          writable: false,
		          value: source
		        });
		        if (Object.freeze) {
		          Object.freeze(element.props);
		          Object.freeze(element);
		        }
		      }
		      return element;
		    };
		    /**
		     * Create and return a new ReactElement of the given type.
		     * See https://reactjs.org/docs/react-api.html#createelement
		     */

		    function createElement(type, config, children) {
		      var propName; // Reserved names are extracted

		      var props = {};
		      var key = null;
		      var ref = null;
		      var self = null;
		      var source = null;
		      if (config != null) {
		        if (hasValidRef(config)) {
		          ref = config.ref;
		          {
		            warnIfStringRefCannotBeAutoConverted(config);
		          }
		        }
		        if (hasValidKey(config)) {
		          {
		            checkKeyStringCoercion(config.key);
		          }
		          key = '' + config.key;
		        }
		        self = config.__self === undefined ? null : config.__self;
		        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

		        for (propName in config) {
		          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		            props[propName] = config[propName];
		          }
		        }
		      } // Children can be more than one argument, and those are transferred onto
		      // the newly allocated props object.

		      var childrenLength = arguments.length - 2;
		      if (childrenLength === 1) {
		        props.children = children;
		      } else if (childrenLength > 1) {
		        var childArray = Array(childrenLength);
		        for (var i = 0; i < childrenLength; i++) {
		          childArray[i] = arguments[i + 2];
		        }
		        {
		          if (Object.freeze) {
		            Object.freeze(childArray);
		          }
		        }
		        props.children = childArray;
		      } // Resolve default props

		      if (type && type.defaultProps) {
		        var defaultProps = type.defaultProps;
		        for (propName in defaultProps) {
		          if (props[propName] === undefined) {
		            props[propName] = defaultProps[propName];
		          }
		        }
		      }
		      {
		        if (key || ref) {
		          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
		          if (key) {
		            defineKeyPropWarningGetter(props, displayName);
		          }
		          if (ref) {
		            defineRefPropWarningGetter(props, displayName);
		          }
		        }
		      }
		      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		    }
		    function cloneAndReplaceKey(oldElement, newKey) {
		      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
		      return newElement;
		    }
		    /**
		     * Clone and return a new ReactElement using element as the starting point.
		     * See https://reactjs.org/docs/react-api.html#cloneelement
		     */

		    function cloneElement(element, config, children) {
		      if (element === null || element === undefined) {
		        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
		      }
		      var propName; // Original props are copied

		      var props = assign({}, element.props); // Reserved names are extracted

		      var key = element.key;
		      var ref = element.ref; // Self is preserved since the owner is preserved.

		      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
		      // transpiler, and the original source is probably a better indicator of the
		      // true owner.

		      var source = element._source; // Owner will be preserved, unless ref is overridden

		      var owner = element._owner;
		      if (config != null) {
		        if (hasValidRef(config)) {
		          // Silently steal the ref from the parent.
		          ref = config.ref;
		          owner = ReactCurrentOwner.current;
		        }
		        if (hasValidKey(config)) {
		          {
		            checkKeyStringCoercion(config.key);
		          }
		          key = '' + config.key;
		        } // Remaining properties override existing props

		        var defaultProps;
		        if (element.type && element.type.defaultProps) {
		          defaultProps = element.type.defaultProps;
		        }
		        for (propName in config) {
		          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		            if (config[propName] === undefined && defaultProps !== undefined) {
		              // Resolve default props
		              props[propName] = defaultProps[propName];
		            } else {
		              props[propName] = config[propName];
		            }
		          }
		        }
		      } // Children can be more than one argument, and those are transferred onto
		      // the newly allocated props object.

		      var childrenLength = arguments.length - 2;
		      if (childrenLength === 1) {
		        props.children = children;
		      } else if (childrenLength > 1) {
		        var childArray = Array(childrenLength);
		        for (var i = 0; i < childrenLength; i++) {
		          childArray[i] = arguments[i + 2];
		        }
		        props.children = childArray;
		      }
		      return ReactElement(element.type, key, ref, self, source, owner, props);
		    }
		    /**
		     * Verifies the object is a ReactElement.
		     * See https://reactjs.org/docs/react-api.html#isvalidelement
		     * @param {?object} object
		     * @return {boolean} True if `object` is a ReactElement.
		     * @final
		     */

		    function isValidElement(object) {
		      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		    }
		    var SEPARATOR = '.';
		    var SUBSEPARATOR = ':';
		    /**
		     * Escape and wrap key so it is safe to use as a reactid
		     *
		     * @param {string} key to be escaped.
		     * @return {string} the escaped key.
		     */

		    function escape(key) {
		      var escapeRegex = /[=:]/g;
		      var escaperLookup = {
		        '=': '=0',
		        ':': '=2'
		      };
		      var escapedString = key.replace(escapeRegex, function (match) {
		        return escaperLookup[match];
		      });
		      return '$' + escapedString;
		    }
		    /**
		     * TODO: Test that a single child and an array with one item have the same key
		     * pattern.
		     */

		    var didWarnAboutMaps = false;
		    var userProvidedKeyEscapeRegex = /\/+/g;
		    function escapeUserProvidedKey(text) {
		      return text.replace(userProvidedKeyEscapeRegex, '$&/');
		    }
		    /**
		     * Generate a key string that identifies a element within a set.
		     *
		     * @param {*} element A element that could contain a manual key.
		     * @param {number} index Index that is used if a manual key is not provided.
		     * @return {string}
		     */

		    function getElementKey(element, index) {
		      // Do some typechecking here since we call this blindly. We want to ensure
		      // that we don't block potential future ES APIs.
		      if (typeof element === 'object' && element !== null && element.key != null) {
		        // Explicit key
		        {
		          checkKeyStringCoercion(element.key);
		        }
		        return escape('' + element.key);
		      } // Implicit key determined by the index in the set

		      return index.toString(36);
		    }
		    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		      var type = typeof children;
		      if (type === 'undefined' || type === 'boolean') {
		        // All of the above are perceived as null.
		        children = null;
		      }
		      var invokeCallback = false;
		      if (children === null) {
		        invokeCallback = true;
		      } else {
		        switch (type) {
		          case 'string':
		          case 'number':
		            invokeCallback = true;
		            break;
		          case 'object':
		            switch (children.$$typeof) {
		              case REACT_ELEMENT_TYPE:
		              case REACT_PORTAL_TYPE:
		                invokeCallback = true;
		            }
		        }
		      }
		      if (invokeCallback) {
		        var _child = children;
		        var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
		        // so that it's consistent if the number of children grows:

		        var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
		        if (isArray(mappedChild)) {
		          var escapedChildKey = '';
		          if (childKey != null) {
		            escapedChildKey = escapeUserProvidedKey(childKey) + '/';
		          }
		          mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
		            return c;
		          });
		        } else if (mappedChild != null) {
		          if (isValidElement(mappedChild)) {
		            {
		              // The `if` statement here prevents auto-disabling of the safe
		              // coercion ESLint rule, so we must manually disable it below.
		              // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		              if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
		                checkKeyStringCoercion(mappedChild.key);
		              }
		            }
		            mappedChild = cloneAndReplaceKey(mappedChild,
		            // Keep both the (mapped) and old keys if they differ, just as
		            // traverseAllChildren used to do for objects as children
		            escapedPrefix + (
		            // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		            mappedChild.key && (!_child || _child.key !== mappedChild.key) ?
		            // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
		            // eslint-disable-next-line react-internal/safe-string-coercion
		            escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
		          }
		          array.push(mappedChild);
		        }
		        return 1;
		      }
		      var child;
		      var nextName;
		      var subtreeCount = 0; // Count of children found in the current subtree.

		      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
		      if (isArray(children)) {
		        for (var i = 0; i < children.length; i++) {
		          child = children[i];
		          nextName = nextNamePrefix + getElementKey(child, i);
		          subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		        }
		      } else {
		        var iteratorFn = getIteratorFn(children);
		        if (typeof iteratorFn === 'function') {
		          var iterableChildren = children;
		          {
		            // Warn about using Maps as children
		            if (iteratorFn === iterableChildren.entries) {
		              if (!didWarnAboutMaps) {
		                warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
		              }
		              didWarnAboutMaps = true;
		            }
		          }
		          var iterator = iteratorFn.call(iterableChildren);
		          var step;
		          var ii = 0;
		          while (!(step = iterator.next()).done) {
		            child = step.value;
		            nextName = nextNamePrefix + getElementKey(child, ii++);
		            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		          }
		        } else if (type === 'object') {
		          // eslint-disable-next-line react-internal/safe-string-coercion
		          var childrenString = String(children);
		          throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
		        }
		      }
		      return subtreeCount;
		    }

		    /**
		     * Maps children that are typically specified as `props.children`.
		     *
		     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
		     *
		     * The provided mapFunction(child, index) will be called for each
		     * leaf child.
		     *
		     * @param {?*} children Children tree container.
		     * @param {function(*, int)} func The map function.
		     * @param {*} context Context for mapFunction.
		     * @return {object} Object containing the ordered map of results.
		     */
		    function mapChildren(children, func, context) {
		      if (children == null) {
		        return children;
		      }
		      var result = [];
		      var count = 0;
		      mapIntoArray(children, result, '', '', function (child) {
		        return func.call(context, child, count++);
		      });
		      return result;
		    }
		    /**
		     * Count the number of children that are typically specified as
		     * `props.children`.
		     *
		     * See https://reactjs.org/docs/react-api.html#reactchildrencount
		     *
		     * @param {?*} children Children tree container.
		     * @return {number} The number of children.
		     */

		    function countChildren(children) {
		      var n = 0;
		      mapChildren(children, function () {
		        n++; // Don't return anything
		      });

		      return n;
		    }

		    /**
		     * Iterates through children that are typically specified as `props.children`.
		     *
		     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
		     *
		     * The provided forEachFunc(child, index) will be called for each
		     * leaf child.
		     *
		     * @param {?*} children Children tree container.
		     * @param {function(*, int)} forEachFunc
		     * @param {*} forEachContext Context for forEachContext.
		     */
		    function forEachChildren(children, forEachFunc, forEachContext) {
		      mapChildren(children, function () {
		        forEachFunc.apply(this, arguments); // Don't return anything.
		      }, forEachContext);
		    }
		    /**
		     * Flatten a children object (typically specified as `props.children`) and
		     * return an array with appropriately re-keyed children.
		     *
		     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
		     */

		    function toArray(children) {
		      return mapChildren(children, function (child) {
		        return child;
		      }) || [];
		    }
		    /**
		     * Returns the first child in a collection of children and verifies that there
		     * is only one child in the collection.
		     *
		     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
		     *
		     * The current implementation of this function assumes that a single child gets
		     * passed without a wrapper, but the purpose of this helper function is to
		     * abstract away the particular structure of children.
		     *
		     * @param {?object} children Child collection structure.
		     * @return {ReactElement} The first and only `ReactElement` contained in the
		     * structure.
		     */

		    function onlyChild(children) {
		      if (!isValidElement(children)) {
		        throw new Error('React.Children.only expected to receive a single React element child.');
		      }
		      return children;
		    }
		    function createContext(defaultValue) {
		      // TODO: Second argument used to be an optional `calculateChangedBits`
		      // function. Warn to reserve for future use?
		      var context = {
		        $$typeof: REACT_CONTEXT_TYPE,
		        // As a workaround to support multiple concurrent renderers, we categorize
		        // some renderers as primary and others as secondary. We only expect
		        // there to be two concurrent renderers at most: React Native (primary) and
		        // Fabric (secondary); React DOM (primary) and React ART (secondary).
		        // Secondary renderers store their context values on separate fields.
		        _currentValue: defaultValue,
		        _currentValue2: defaultValue,
		        // Used to track how many concurrent renderers this context currently
		        // supports within in a single renderer. Such as parallel server rendering.
		        _threadCount: 0,
		        // These are circular
		        Provider: null,
		        Consumer: null,
		        // Add these to use same hidden class in VM as ServerContext
		        _defaultValue: null,
		        _globalName: null
		      };
		      context.Provider = {
		        $$typeof: REACT_PROVIDER_TYPE,
		        _context: context
		      };
		      var hasWarnedAboutUsingNestedContextConsumers = false;
		      var hasWarnedAboutUsingConsumerProvider = false;
		      var hasWarnedAboutDisplayNameOnConsumer = false;
		      {
		        // A separate object, but proxies back to the original context object for
		        // backwards compatibility. It has a different $$typeof, so we can properly
		        // warn for the incorrect usage of Context as a Consumer.
		        var Consumer = {
		          $$typeof: REACT_CONTEXT_TYPE,
		          _context: context
		        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

		        Object.defineProperties(Consumer, {
		          Provider: {
		            get: function () {
		              if (!hasWarnedAboutUsingConsumerProvider) {
		                hasWarnedAboutUsingConsumerProvider = true;
		                error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
		              }
		              return context.Provider;
		            },
		            set: function (_Provider) {
		              context.Provider = _Provider;
		            }
		          },
		          _currentValue: {
		            get: function () {
		              return context._currentValue;
		            },
		            set: function (_currentValue) {
		              context._currentValue = _currentValue;
		            }
		          },
		          _currentValue2: {
		            get: function () {
		              return context._currentValue2;
		            },
		            set: function (_currentValue2) {
		              context._currentValue2 = _currentValue2;
		            }
		          },
		          _threadCount: {
		            get: function () {
		              return context._threadCount;
		            },
		            set: function (_threadCount) {
		              context._threadCount = _threadCount;
		            }
		          },
		          Consumer: {
		            get: function () {
		              if (!hasWarnedAboutUsingNestedContextConsumers) {
		                hasWarnedAboutUsingNestedContextConsumers = true;
		                error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
		              }
		              return context.Consumer;
		            }
		          },
		          displayName: {
		            get: function () {
		              return context.displayName;
		            },
		            set: function (displayName) {
		              if (!hasWarnedAboutDisplayNameOnConsumer) {
		                warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
		                hasWarnedAboutDisplayNameOnConsumer = true;
		              }
		            }
		          }
		        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

		        context.Consumer = Consumer;
		      }
		      {
		        context._currentRenderer = null;
		        context._currentRenderer2 = null;
		      }
		      return context;
		    }
		    var Uninitialized = -1;
		    var Pending = 0;
		    var Resolved = 1;
		    var Rejected = 2;
		    function lazyInitializer(payload) {
		      if (payload._status === Uninitialized) {
		        var ctor = payload._result;
		        var thenable = ctor(); // Transition to the next state.
		        // This might throw either because it's missing or throws. If so, we treat it
		        // as still uninitialized and try again next time. Which is the same as what
		        // happens if the ctor or any wrappers processing the ctor throws. This might
		        // end up fixing it if the resolution was a concurrency bug.

		        thenable.then(function (moduleObject) {
		          if (payload._status === Pending || payload._status === Uninitialized) {
		            // Transition to the next state.
		            var resolved = payload;
		            resolved._status = Resolved;
		            resolved._result = moduleObject;
		          }
		        }, function (error) {
		          if (payload._status === Pending || payload._status === Uninitialized) {
		            // Transition to the next state.
		            var rejected = payload;
		            rejected._status = Rejected;
		            rejected._result = error;
		          }
		        });
		        if (payload._status === Uninitialized) {
		          // In case, we're still uninitialized, then we're waiting for the thenable
		          // to resolve. Set it as pending in the meantime.
		          var pending = payload;
		          pending._status = Pending;
		          pending._result = thenable;
		        }
		      }
		      if (payload._status === Resolved) {
		        var moduleObject = payload._result;
		        {
		          if (moduleObject === undefined) {
		            error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' +
		            // Break up imports to avoid accidentally parsing them as dependencies.
		            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
		          }
		        }
		        {
		          if (!('default' in moduleObject)) {
		            error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' +
		            // Break up imports to avoid accidentally parsing them as dependencies.
		            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
		          }
		        }
		        return moduleObject.default;
		      } else {
		        throw payload._result;
		      }
		    }
		    function lazy(ctor) {
		      var payload = {
		        // We use these fields to store the result.
		        _status: Uninitialized,
		        _result: ctor
		      };
		      var lazyType = {
		        $$typeof: REACT_LAZY_TYPE,
		        _payload: payload,
		        _init: lazyInitializer
		      };
		      {
		        // In production, this would just set it on the object.
		        var defaultProps;
		        var propTypes; // $FlowFixMe

		        Object.defineProperties(lazyType, {
		          defaultProps: {
		            configurable: true,
		            get: function () {
		              return defaultProps;
		            },
		            set: function (newDefaultProps) {
		              error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
		              defaultProps = newDefaultProps; // Match production behavior more closely:
		              // $FlowFixMe

		              Object.defineProperty(lazyType, 'defaultProps', {
		                enumerable: true
		              });
		            }
		          },
		          propTypes: {
		            configurable: true,
		            get: function () {
		              return propTypes;
		            },
		            set: function (newPropTypes) {
		              error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
		              propTypes = newPropTypes; // Match production behavior more closely:
		              // $FlowFixMe

		              Object.defineProperty(lazyType, 'propTypes', {
		                enumerable: true
		              });
		            }
		          }
		        });
		      }
		      return lazyType;
		    }
		    function forwardRef(render) {
		      {
		        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
		          error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
		        } else if (typeof render !== 'function') {
		          error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
		        } else {
		          if (render.length !== 0 && render.length !== 2) {
		            error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
		          }
		        }
		        if (render != null) {
		          if (render.defaultProps != null || render.propTypes != null) {
		            error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
		          }
		        }
		      }
		      var elementType = {
		        $$typeof: REACT_FORWARD_REF_TYPE,
		        render: render
		      };
		      {
		        var ownName;
		        Object.defineProperty(elementType, 'displayName', {
		          enumerable: false,
		          configurable: true,
		          get: function () {
		            return ownName;
		          },
		          set: function (name) {
		            ownName = name; // The inner component shouldn't inherit this display name in most cases,
		            // because the component may be used elsewhere.
		            // But it's nice for anonymous functions to inherit the name,
		            // so that our component-stack generation logic will display their frames.
		            // An anonymous function generally suggests a pattern like:
		            //   React.forwardRef((props, ref) => {...});
		            // This kind of inner function is not used elsewhere so the side effect is okay.

		            if (!render.name && !render.displayName) {
		              render.displayName = name;
		            }
		          }
		        });
		      }
		      return elementType;
		    }
		    var REACT_MODULE_REFERENCE;
		    {
		      REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		    }
		    function isValidElementType(type) {
		      if (typeof type === 'string' || typeof type === 'function') {
		        return true;
		      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

		      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
		        return true;
		      }
		      if (typeof type === 'object' && type !== null) {
		        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
		        // This needs to include all possible module reference object
		        // types supported by any Flight configuration anywhere since
		        // we don't know which Flight build this will end up being used
		        // with.
		        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		          return true;
		        }
		      }
		      return false;
		    }
		    function memo(type, compare) {
		      {
		        if (!isValidElementType(type)) {
		          error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
		        }
		      }
		      var elementType = {
		        $$typeof: REACT_MEMO_TYPE,
		        type: type,
		        compare: compare === undefined ? null : compare
		      };
		      {
		        var ownName;
		        Object.defineProperty(elementType, 'displayName', {
		          enumerable: false,
		          configurable: true,
		          get: function () {
		            return ownName;
		          },
		          set: function (name) {
		            ownName = name; // The inner component shouldn't inherit this display name in most cases,
		            // because the component may be used elsewhere.
		            // But it's nice for anonymous functions to inherit the name,
		            // so that our component-stack generation logic will display their frames.
		            // An anonymous function generally suggests a pattern like:
		            //   React.memo((props) => {...});
		            // This kind of inner function is not used elsewhere so the side effect is okay.

		            if (!type.name && !type.displayName) {
		              type.displayName = name;
		            }
		          }
		        });
		      }
		      return elementType;
		    }
		    function resolveDispatcher() {
		      var dispatcher = ReactCurrentDispatcher.current;
		      {
		        if (dispatcher === null) {
		          error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
		        }
		      } // Will result in a null access error if accessed outside render phase. We
		      // intentionally don't throw our own error because this is in a hot path.
		      // Also helps ensure this is inlined.

		      return dispatcher;
		    }
		    function useContext(Context) {
		      var dispatcher = resolveDispatcher();
		      {
		        // TODO: add a more generic warning for invalid values.
		        if (Context._context !== undefined) {
		          var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
		          // and nobody should be using this in existing code.

		          if (realContext.Consumer === Context) {
		            error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
		          } else if (realContext.Provider === Context) {
		            error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
		          }
		        }
		      }
		      return dispatcher.useContext(Context);
		    }
		    function useState(initialState) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useState(initialState);
		    }
		    function useReducer(reducer, initialArg, init) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useReducer(reducer, initialArg, init);
		    }
		    function useRef(initialValue) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useRef(initialValue);
		    }
		    function useEffect(create, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useEffect(create, deps);
		    }
		    function useInsertionEffect(create, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useInsertionEffect(create, deps);
		    }
		    function useLayoutEffect(create, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useLayoutEffect(create, deps);
		    }
		    function useCallback(callback, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useCallback(callback, deps);
		    }
		    function useMemo(create, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useMemo(create, deps);
		    }
		    function useImperativeHandle(ref, create, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useImperativeHandle(ref, create, deps);
		    }
		    function useDebugValue(value, formatterFn) {
		      {
		        var dispatcher = resolveDispatcher();
		        return dispatcher.useDebugValue(value, formatterFn);
		      }
		    }
		    function useTransition() {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useTransition();
		    }
		    function useDeferredValue(value) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useDeferredValue(value);
		    }
		    function useId() {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useId();
		    }
		    function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		    }

		    // Helpers to patch console.logs to avoid logging during side-effect free
		    // replaying on render function. This currently only patches the object
		    // lazily which won't cover if the log function was extracted eagerly.
		    // We could also eagerly patch the method.
		    var disabledDepth = 0;
		    var prevLog;
		    var prevInfo;
		    var prevWarn;
		    var prevError;
		    var prevGroup;
		    var prevGroupCollapsed;
		    var prevGroupEnd;
		    function disabledLog() {}
		    disabledLog.__reactDisabledLog = true;
		    function disableLogs() {
		      {
		        if (disabledDepth === 0) {
		          /* eslint-disable react-internal/no-production-logging */
		          prevLog = console.log;
		          prevInfo = console.info;
		          prevWarn = console.warn;
		          prevError = console.error;
		          prevGroup = console.group;
		          prevGroupCollapsed = console.groupCollapsed;
		          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

		          var props = {
		            configurable: true,
		            enumerable: true,
		            value: disabledLog,
		            writable: true
		          }; // $FlowFixMe Flow thinks console is immutable.

		          Object.defineProperties(console, {
		            info: props,
		            log: props,
		            warn: props,
		            error: props,
		            group: props,
		            groupCollapsed: props,
		            groupEnd: props
		          });
		          /* eslint-enable react-internal/no-production-logging */
		        }

		        disabledDepth++;
		      }
		    }
		    function reenableLogs() {
		      {
		        disabledDepth--;
		        if (disabledDepth === 0) {
		          /* eslint-disable react-internal/no-production-logging */
		          var props = {
		            configurable: true,
		            enumerable: true,
		            writable: true
		          }; // $FlowFixMe Flow thinks console is immutable.

		          Object.defineProperties(console, {
		            log: assign({}, props, {
		              value: prevLog
		            }),
		            info: assign({}, props, {
		              value: prevInfo
		            }),
		            warn: assign({}, props, {
		              value: prevWarn
		            }),
		            error: assign({}, props, {
		              value: prevError
		            }),
		            group: assign({}, props, {
		              value: prevGroup
		            }),
		            groupCollapsed: assign({}, props, {
		              value: prevGroupCollapsed
		            }),
		            groupEnd: assign({}, props, {
		              value: prevGroupEnd
		            })
		          });
		          /* eslint-enable react-internal/no-production-logging */
		        }

		        if (disabledDepth < 0) {
		          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		        }
		      }
		    }
		    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
		    var prefix;
		    function describeBuiltInComponentFrame(name, source, ownerFn) {
		      {
		        if (prefix === undefined) {
		          // Extract the VM specific prefix used by each line.
		          try {
		            throw Error();
		          } catch (x) {
		            var match = x.stack.trim().match(/\n( *(at )?)/);
		            prefix = match && match[1] || '';
		          }
		        } // We use the prefix to ensure our stacks line up with native stack frames.

		        return '\n' + prefix + name;
		      }
		    }
		    var reentry = false;
		    var componentFrameCache;
		    {
		      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		      componentFrameCache = new PossiblyWeakMap();
		    }
		    function describeNativeComponentFrame(fn, construct) {
		      // If something asked for a stack inside a fake render, it should get ignored.
		      if (!fn || reentry) {
		        return '';
		      }
		      {
		        var frame = componentFrameCache.get(fn);
		        if (frame !== undefined) {
		          return frame;
		        }
		      }
		      var control;
		      reentry = true;
		      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

		      Error.prepareStackTrace = undefined;
		      var previousDispatcher;
		      {
		        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
		        // for warnings.

		        ReactCurrentDispatcher$1.current = null;
		        disableLogs();
		      }
		      try {
		        // This should throw.
		        if (construct) {
		          // Something should be setting the props in the constructor.
		          var Fake = function () {
		            throw Error();
		          }; // $FlowFixMe

		          Object.defineProperty(Fake.prototype, 'props', {
		            set: function () {
		              // We use a throwing setter instead of frozen or non-writable props
		              // because that won't throw in a non-strict mode function.
		              throw Error();
		            }
		          });
		          if (typeof Reflect === 'object' && Reflect.construct) {
		            // We construct a different control for this case to include any extra
		            // frames added by the construct call.
		            try {
		              Reflect.construct(Fake, []);
		            } catch (x) {
		              control = x;
		            }
		            Reflect.construct(fn, [], Fake);
		          } else {
		            try {
		              Fake.call();
		            } catch (x) {
		              control = x;
		            }
		            fn.call(Fake.prototype);
		          }
		        } else {
		          try {
		            throw Error();
		          } catch (x) {
		            control = x;
		          }
		          fn();
		        }
		      } catch (sample) {
		        // This is inlined manually because closure doesn't do it for us.
		        if (sample && control && typeof sample.stack === 'string') {
		          // This extracts the first frame from the sample that isn't also in the control.
		          // Skipping one frame that we assume is the frame that calls the two.
		          var sampleLines = sample.stack.split('\n');
		          var controlLines = control.stack.split('\n');
		          var s = sampleLines.length - 1;
		          var c = controlLines.length - 1;
		          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		            // We expect at least one stack frame to be shared.
		            // Typically this will be the root most one. However, stack frames may be
		            // cut off due to maximum stack limits. In this case, one maybe cut off
		            // earlier than the other. We assume that the sample is longer or the same
		            // and there for cut off earlier. So we should find the root most frame in
		            // the sample somewhere in the control.
		            c--;
		          }
		          for (; s >= 1 && c >= 0; s--, c--) {
		            // Next we find the first one that isn't the same which should be the
		            // frame that called our sample function and the control.
		            if (sampleLines[s] !== controlLines[c]) {
		              // In V8, the first line is describing the message but other VMs don't.
		              // If we're about to return the first line, and the control is also on the same
		              // line, that's a pretty good indicator that our sample threw at same line as
		              // the control. I.e. before we entered the sample frame. So we ignore this result.
		              // This can happen if you passed a class to function component, or non-function.
		              if (s !== 1 || c !== 1) {
		                do {
		                  s--;
		                  c--; // We may still have similar intermediate frames from the construct call.
		                  // The next one that isn't the same should be our match though.

		                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
		                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
		                    // but we have a user-provided "displayName"
		                    // splice it in to make the stack more readable.

		                    if (fn.displayName && _frame.includes('<anonymous>')) {
		                      _frame = _frame.replace('<anonymous>', fn.displayName);
		                    }
		                    {
		                      if (typeof fn === 'function') {
		                        componentFrameCache.set(fn, _frame);
		                      }
		                    } // Return the line we found.

		                    return _frame;
		                  }
		                } while (s >= 1 && c >= 0);
		              }
		              break;
		            }
		          }
		        }
		      } finally {
		        reentry = false;
		        {
		          ReactCurrentDispatcher$1.current = previousDispatcher;
		          reenableLogs();
		        }
		        Error.prepareStackTrace = previousPrepareStackTrace;
		      } // Fallback to just using the name if we couldn't make it throw.

		      var name = fn ? fn.displayName || fn.name : '';
		      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
		      {
		        if (typeof fn === 'function') {
		          componentFrameCache.set(fn, syntheticFrame);
		        }
		      }
		      return syntheticFrame;
		    }
		    function describeFunctionComponentFrame(fn, source, ownerFn) {
		      {
		        return describeNativeComponentFrame(fn, false);
		      }
		    }
		    function shouldConstruct(Component) {
		      var prototype = Component.prototype;
		      return !!(prototype && prototype.isReactComponent);
		    }
		    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
		      if (type == null) {
		        return '';
		      }
		      if (typeof type === 'function') {
		        {
		          return describeNativeComponentFrame(type, shouldConstruct(type));
		        }
		      }
		      if (typeof type === 'string') {
		        return describeBuiltInComponentFrame(type);
		      }
		      switch (type) {
		        case REACT_SUSPENSE_TYPE:
		          return describeBuiltInComponentFrame('Suspense');
		        case REACT_SUSPENSE_LIST_TYPE:
		          return describeBuiltInComponentFrame('SuspenseList');
		      }
		      if (typeof type === 'object') {
		        switch (type.$$typeof) {
		          case REACT_FORWARD_REF_TYPE:
		            return describeFunctionComponentFrame(type.render);
		          case REACT_MEMO_TYPE:
		            // Memo may contain any component type so we recursively resolve it.
		            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
		          case REACT_LAZY_TYPE:
		            {
		              var lazyComponent = type;
		              var payload = lazyComponent._payload;
		              var init = lazyComponent._init;
		              try {
		                // Lazy may contain any component type so we recursively resolve it.
		                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		              } catch (x) {}
		            }
		        }
		      }
		      return '';
		    }
		    var loggedTypeFailures = {};
		    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
		    function setCurrentlyValidatingElement(element) {
		      {
		        if (element) {
		          var owner = element._owner;
		          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		        } else {
		          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		        }
		      }
		    }
		    function checkPropTypes(typeSpecs, values, location, componentName, element) {
		      {
		        // $FlowFixMe This is okay but Flow doesn't know it.
		        var has = Function.call.bind(hasOwnProperty);
		        for (var typeSpecName in typeSpecs) {
		          if (has(typeSpecs, typeSpecName)) {
		            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
		            // fail the render phase where it didn't fail before. So we log it.
		            // After these have been cleaned up, we'll let them throw.

		            try {
		              // This is intentionally an invariant that gets caught. It's the same
		              // behavior as without this statement except with a better message.
		              if (typeof typeSpecs[typeSpecName] !== 'function') {
		                // eslint-disable-next-line react-internal/prod-error-codes
		                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		                err.name = 'Invariant Violation';
		                throw err;
		              }
		              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		            } catch (ex) {
		              error$1 = ex;
		            }
		            if (error$1 && !(error$1 instanceof Error)) {
		              setCurrentlyValidatingElement(element);
		              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
		              setCurrentlyValidatingElement(null);
		            }
		            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		              // Only monitor this failure once because there tends to be a lot of the
		              // same error.
		              loggedTypeFailures[error$1.message] = true;
		              setCurrentlyValidatingElement(element);
		              error('Failed %s type: %s', location, error$1.message);
		              setCurrentlyValidatingElement(null);
		            }
		          }
		        }
		      }
		    }
		    function setCurrentlyValidatingElement$1(element) {
		      {
		        if (element) {
		          var owner = element._owner;
		          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		          setExtraStackFrame(stack);
		        } else {
		          setExtraStackFrame(null);
		        }
		      }
		    }
		    var propTypesMisspellWarningShown;
		    {
		      propTypesMisspellWarningShown = false;
		    }
		    function getDeclarationErrorAddendum() {
		      if (ReactCurrentOwner.current) {
		        var name = getComponentNameFromType(ReactCurrentOwner.current.type);
		        if (name) {
		          return '\n\nCheck the render method of `' + name + '`.';
		        }
		      }
		      return '';
		    }
		    function getSourceInfoErrorAddendum(source) {
		      if (source !== undefined) {
		        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
		        var lineNumber = source.lineNumber;
		        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
		      }
		      return '';
		    }
		    function getSourceInfoErrorAddendumForProps(elementProps) {
		      if (elementProps !== null && elementProps !== undefined) {
		        return getSourceInfoErrorAddendum(elementProps.__source);
		      }
		      return '';
		    }
		    /**
		     * Warn if there's no key explicitly set on dynamic arrays of children or
		     * object keys are not valid. This allows us to keep track of children between
		     * updates.
		     */

		    var ownerHasKeyUseWarning = {};
		    function getCurrentComponentErrorInfo(parentType) {
		      var info = getDeclarationErrorAddendum();
		      if (!info) {
		        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
		        if (parentName) {
		          info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		        }
		      }
		      return info;
		    }
		    /**
		     * Warn if the element doesn't have an explicit key assigned to it.
		     * This element is in an array. The array could grow and shrink or be
		     * reordered. All children that haven't already been validated are required to
		     * have a "key" property assigned to it. Error statuses are cached so a warning
		     * will only be shown once.
		     *
		     * @internal
		     * @param {ReactElement} element Element that requires a key.
		     * @param {*} parentType element's parent's type.
		     */

		    function validateExplicitKey(element, parentType) {
		      if (!element._store || element._store.validated || element.key != null) {
		        return;
		      }
		      element._store.validated = true;
		      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
		      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		        return;
		      }
		      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		      // property, it may be the creator of the child that's responsible for
		      // assigning it a key.

		      var childOwner = '';
		      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
		        // Give the component that originally created this child.
		        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		      }
		      {
		        setCurrentlyValidatingElement$1(element);
		        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
		        setCurrentlyValidatingElement$1(null);
		      }
		    }
		    /**
		     * Ensure that every element either is passed in a static location, in an
		     * array with an explicit keys property defined, or in an object literal
		     * with valid key property.
		     *
		     * @internal
		     * @param {ReactNode} node Statically passed child of any type.
		     * @param {*} parentType node's parent's type.
		     */

		    function validateChildKeys(node, parentType) {
		      if (typeof node !== 'object') {
		        return;
		      }
		      if (isArray(node)) {
		        for (var i = 0; i < node.length; i++) {
		          var child = node[i];
		          if (isValidElement(child)) {
		            validateExplicitKey(child, parentType);
		          }
		        }
		      } else if (isValidElement(node)) {
		        // This element was passed in a valid location.
		        if (node._store) {
		          node._store.validated = true;
		        }
		      } else if (node) {
		        var iteratorFn = getIteratorFn(node);
		        if (typeof iteratorFn === 'function') {
		          // Entry iterators used to provide implicit keys,
		          // but now we print a separate warning for them later.
		          if (iteratorFn !== node.entries) {
		            var iterator = iteratorFn.call(node);
		            var step;
		            while (!(step = iterator.next()).done) {
		              if (isValidElement(step.value)) {
		                validateExplicitKey(step.value, parentType);
		              }
		            }
		          }
		        }
		      }
		    }
		    /**
		     * Given an element, validate that its props follow the propTypes definition,
		     * provided by the type.
		     *
		     * @param {ReactElement} element
		     */

		    function validatePropTypes(element) {
		      {
		        var type = element.type;
		        if (type === null || type === undefined || typeof type === 'string') {
		          return;
		        }
		        var propTypes;
		        if (typeof type === 'function') {
		          propTypes = type.propTypes;
		        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
		        // Note: Memo only checks outer props here.
		        // Inner props are checked in the reconciler.
		        type.$$typeof === REACT_MEMO_TYPE)) {
		          propTypes = type.propTypes;
		        } else {
		          return;
		        }
		        if (propTypes) {
		          // Intentionally inside to avoid triggering lazy initializers:
		          var name = getComponentNameFromType(type);
		          checkPropTypes(propTypes, element.props, 'prop', name, element);
		        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		          var _name = getComponentNameFromType(type);
		          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		        }
		        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		        }
		      }
		    }
		    /**
		     * Given a fragment, validate that it can only be provided with fragment props
		     * @param {ReactElement} fragment
		     */

		    function validateFragmentProps(fragment) {
		      {
		        var keys = Object.keys(fragment.props);
		        for (var i = 0; i < keys.length; i++) {
		          var key = keys[i];
		          if (key !== 'children' && key !== 'key') {
		            setCurrentlyValidatingElement$1(fragment);
		            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
		            setCurrentlyValidatingElement$1(null);
		            break;
		          }
		        }
		        if (fragment.ref !== null) {
		          setCurrentlyValidatingElement$1(fragment);
		          error('Invalid attribute `ref` supplied to `React.Fragment`.');
		          setCurrentlyValidatingElement$1(null);
		        }
		      }
		    }
		    function createElementWithValidation(type, props, children) {
		      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		      // succeed and there will likely be errors in render.

		      if (!validType) {
		        var info = '';
		        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		        }
		        var sourceInfo = getSourceInfoErrorAddendumForProps(props);
		        if (sourceInfo) {
		          info += sourceInfo;
		        } else {
		          info += getDeclarationErrorAddendum();
		        }
		        var typeString;
		        if (type === null) {
		          typeString = 'null';
		        } else if (isArray(type)) {
		          typeString = 'array';
		        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		          typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		          info = ' Did you accidentally export a JSX literal instead of a component?';
		        } else {
		          typeString = typeof type;
		        }
		        {
		          error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		        }
		      }
		      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
		      // TODO: Drop this when these are no longer allowed as the type argument.

		      if (element == null) {
		        return element;
		      } // Skip key warning if the type isn't valid since our key validation logic
		      // doesn't expect a non-string/function type and can throw confusing errors.
		      // We don't want exception behavior to differ between dev and prod.
		      // (Rendering will throw with a helpful message and as soon as the type is
		      // fixed, the key warnings will appear.)

		      if (validType) {
		        for (var i = 2; i < arguments.length; i++) {
		          validateChildKeys(arguments[i], type);
		        }
		      }
		      if (type === REACT_FRAGMENT_TYPE) {
		        validateFragmentProps(element);
		      } else {
		        validatePropTypes(element);
		      }
		      return element;
		    }
		    var didWarnAboutDeprecatedCreateFactory = false;
		    function createFactoryWithValidation(type) {
		      var validatedFactory = createElementWithValidation.bind(null, type);
		      validatedFactory.type = type;
		      {
		        if (!didWarnAboutDeprecatedCreateFactory) {
		          didWarnAboutDeprecatedCreateFactory = true;
		          warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
		        } // Legacy hook: remove it

		        Object.defineProperty(validatedFactory, 'type', {
		          enumerable: false,
		          get: function () {
		            warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
		            Object.defineProperty(this, 'type', {
		              value: type
		            });
		            return type;
		          }
		        });
		      }
		      return validatedFactory;
		    }
		    function cloneElementWithValidation(element, props, children) {
		      var newElement = cloneElement.apply(this, arguments);
		      for (var i = 2; i < arguments.length; i++) {
		        validateChildKeys(arguments[i], newElement.type);
		      }
		      validatePropTypes(newElement);
		      return newElement;
		    }
		    function startTransition(scope, options) {
		      var prevTransition = ReactCurrentBatchConfig.transition;
		      ReactCurrentBatchConfig.transition = {};
		      var currentTransition = ReactCurrentBatchConfig.transition;
		      {
		        ReactCurrentBatchConfig.transition._updatedFibers = new Set();
		      }
		      try {
		        scope();
		      } finally {
		        ReactCurrentBatchConfig.transition = prevTransition;
		        {
		          if (prevTransition === null && currentTransition._updatedFibers) {
		            var updatedFibersCount = currentTransition._updatedFibers.size;
		            if (updatedFibersCount > 10) {
		              warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
		            }
		            currentTransition._updatedFibers.clear();
		          }
		        }
		      }
		    }
		    var didWarnAboutMessageChannel = false;
		    var enqueueTaskImpl = null;
		    function enqueueTask(task) {
		      if (enqueueTaskImpl === null) {
		        try {
		          // read require off the module object to get around the bundlers.
		          // we don't want them to detect a require and bundle a Node polyfill.
		          var requireString = ('require' + Math.random()).slice(0, 7);
		          var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
		          // version of setImmediate, bypassing fake timers if any.

		          enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
		        } catch (_err) {
		          // we're in a browser
		          // we can't use regular timers because they may still be faked
		          // so we try MessageChannel+postMessage instead
		          enqueueTaskImpl = function (callback) {
		            {
		              if (didWarnAboutMessageChannel === false) {
		                didWarnAboutMessageChannel = true;
		                if (typeof MessageChannel === 'undefined') {
		                  error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
		                }
		              }
		            }
		            var channel = new MessageChannel();
		            channel.port1.onmessage = callback;
		            channel.port2.postMessage(undefined);
		          };
		        }
		      }
		      return enqueueTaskImpl(task);
		    }
		    var actScopeDepth = 0;
		    var didWarnNoAwaitAct = false;
		    function act(callback) {
		      {
		        // `act` calls can be nested, so we track the depth. This represents the
		        // number of `act` scopes on the stack.
		        var prevActScopeDepth = actScopeDepth;
		        actScopeDepth++;
		        if (ReactCurrentActQueue.current === null) {
		          // This is the outermost `act` scope. Initialize the queue. The reconciler
		          // will detect the queue and use it instead of Scheduler.
		          ReactCurrentActQueue.current = [];
		        }
		        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
		        var result;
		        try {
		          // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
		          // set to `true` while the given callback is executed, not for updates
		          // triggered during an async event, because this is how the legacy
		          // implementation of `act` behaved.
		          ReactCurrentActQueue.isBatchingLegacy = true;
		          result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
		          // which flushed updates immediately after the scope function exits, even
		          // if it's an async function.

		          if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
		            var queue = ReactCurrentActQueue.current;
		            if (queue !== null) {
		              ReactCurrentActQueue.didScheduleLegacyUpdate = false;
		              flushActQueue(queue);
		            }
		          }
		        } catch (error) {
		          popActScope(prevActScopeDepth);
		          throw error;
		        } finally {
		          ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
		        }
		        if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
		          var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
		          // for it to resolve before exiting the current scope.

		          var wasAwaited = false;
		          var thenable = {
		            then: function (resolve, reject) {
		              wasAwaited = true;
		              thenableResult.then(function (returnValue) {
		                popActScope(prevActScopeDepth);
		                if (actScopeDepth === 0) {
		                  // We've exited the outermost act scope. Recursively flush the
		                  // queue until there's no remaining work.
		                  recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		                } else {
		                  resolve(returnValue);
		                }
		              }, function (error) {
		                // The callback threw an error.
		                popActScope(prevActScopeDepth);
		                reject(error);
		              });
		            }
		          };
		          {
		            if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
		              // eslint-disable-next-line no-undef
		              Promise.resolve().then(function () {}).then(function () {
		                if (!wasAwaited) {
		                  didWarnNoAwaitAct = true;
		                  error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
		                }
		              });
		            }
		          }
		          return thenable;
		        } else {
		          var returnValue = result; // The callback is not an async function. Exit the current scope
		          // immediately, without awaiting.

		          popActScope(prevActScopeDepth);
		          if (actScopeDepth === 0) {
		            // Exiting the outermost act scope. Flush the queue.
		            var _queue = ReactCurrentActQueue.current;
		            if (_queue !== null) {
		              flushActQueue(_queue);
		              ReactCurrentActQueue.current = null;
		            } // Return a thenable. If the user awaits it, we'll flush again in
		            // case additional work was scheduled by a microtask.

		            var _thenable = {
		              then: function (resolve, reject) {
		                // Confirm we haven't re-entered another `act` scope, in case
		                // the user does something weird like await the thenable
		                // multiple times.
		                if (ReactCurrentActQueue.current === null) {
		                  // Recursively flush the queue until there's no remaining work.
		                  ReactCurrentActQueue.current = [];
		                  recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		                } else {
		                  resolve(returnValue);
		                }
		              }
		            };
		            return _thenable;
		          } else {
		            // Since we're inside a nested `act` scope, the returned thenable
		            // immediately resolves. The outer scope will flush the queue.
		            var _thenable2 = {
		              then: function (resolve, reject) {
		                resolve(returnValue);
		              }
		            };
		            return _thenable2;
		          }
		        }
		      }
		    }
		    function popActScope(prevActScopeDepth) {
		      {
		        if (prevActScopeDepth !== actScopeDepth - 1) {
		          error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
		        }
		        actScopeDepth = prevActScopeDepth;
		      }
		    }
		    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
		      {
		        var queue = ReactCurrentActQueue.current;
		        if (queue !== null) {
		          try {
		            flushActQueue(queue);
		            enqueueTask(function () {
		              if (queue.length === 0) {
		                // No additional work was scheduled. Finish.
		                ReactCurrentActQueue.current = null;
		                resolve(returnValue);
		              } else {
		                // Keep flushing work until there's none left.
		                recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		              }
		            });
		          } catch (error) {
		            reject(error);
		          }
		        } else {
		          resolve(returnValue);
		        }
		      }
		    }
		    var isFlushing = false;
		    function flushActQueue(queue) {
		      {
		        if (!isFlushing) {
		          // Prevent re-entrance.
		          isFlushing = true;
		          var i = 0;
		          try {
		            for (; i < queue.length; i++) {
		              var callback = queue[i];
		              do {
		                callback = callback(true);
		              } while (callback !== null);
		            }
		            queue.length = 0;
		          } catch (error) {
		            // If something throws, leave the remaining callbacks on the queue.
		            queue = queue.slice(i + 1);
		            throw error;
		          } finally {
		            isFlushing = false;
		          }
		        }
		      }
		    }
		    var createElement$1 = createElementWithValidation;
		    var cloneElement$1 = cloneElementWithValidation;
		    var createFactory = createFactoryWithValidation;
		    var Children = {
		      map: mapChildren,
		      forEach: forEachChildren,
		      count: countChildren,
		      toArray: toArray,
		      only: onlyChild
		    };
		    exports.Children = Children;
		    exports.Component = Component;
		    exports.Fragment = REACT_FRAGMENT_TYPE;
		    exports.Profiler = REACT_PROFILER_TYPE;
		    exports.PureComponent = PureComponent;
		    exports.StrictMode = REACT_STRICT_MODE_TYPE;
		    exports.Suspense = REACT_SUSPENSE_TYPE;
		    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
		    exports.cloneElement = cloneElement$1;
		    exports.createContext = createContext;
		    exports.createElement = createElement$1;
		    exports.createFactory = createFactory;
		    exports.createRef = createRef;
		    exports.forwardRef = forwardRef;
		    exports.isValidElement = isValidElement;
		    exports.lazy = lazy;
		    exports.memo = memo;
		    exports.startTransition = startTransition;
		    exports.unstable_act = act;
		    exports.useCallback = useCallback;
		    exports.useContext = useContext;
		    exports.useDebugValue = useDebugValue;
		    exports.useDeferredValue = useDeferredValue;
		    exports.useEffect = useEffect;
		    exports.useId = useId;
		    exports.useImperativeHandle = useImperativeHandle;
		    exports.useInsertionEffect = useInsertionEffect;
		    exports.useLayoutEffect = useLayoutEffect;
		    exports.useMemo = useMemo;
		    exports.useReducer = useReducer;
		    exports.useRef = useRef;
		    exports.useState = useState;
		    exports.useSyncExternalStore = useSyncExternalStore;
		    exports.useTransition = useTransition;
		    exports.version = ReactVersion;
		    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
		      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
		    }
		  })();
		} 
	} (react_development, react_development.exports));
	return react_development.exports;
}

{
  react.exports = requireReact_development();
}

var reactExports = react.exports;
var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

function Logo(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    width: "1.5em",
    height: "1.5em",
    viewBox: "0 0 1200 895",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    y1: "324.66",
    id: "LinearGradient",
    x1: "87.47",
    y2: "324.66",
    x2: "268.77",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "matrix(1 0 0 1 0 0)"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FFCC26",
    offset: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FFFFFF",
    offset: "1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    y1: "86.87",
    id: "LinearGradient_2",
    x1: "113.56",
    y2: "86.87",
    x2: "827.41",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "matrix(1 0 0 1 0 0)"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FFCC26",
    offset: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FFFFFF",
    offset: "1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    y1: "232.52",
    id: "LinearGradient_3",
    x1: "50.48",
    y2: "232.52",
    x2: "353.95",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "matrix(1 0 0 1 0 0)"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FFCC26",
    offset: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FFFFFF",
    offset: "1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    y1: "284.55",
    id: "LinearGradient_4",
    x1: "320.99",
    y2: "284.55",
    x2: "646.43",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "matrix(1 0 0 1 0 0)"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FFCC26",
    offset: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FFFFFF",
    offset: "1"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "layer0"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "matrix(2.61106 0 0 2.61106 0 134.318)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M134.26,337.29C134.16,337.13 134.03,336.99 133.87,336.87C119.31,326.22 106.42,313.52 95.55,299.12C95.18,298.63 94.55,298.41 93.96,298.58C92.1,299.09 90.25,299.66 88.47,300.28C88.02,300.44 87.67,300.8 87.53,301.25C87.39,301.71 87.47,302.2 87.76,302.58C101.86,321.66 119.16,337.8 139.18,350.54C139.43,350.7 139.71,350.77 139.99,350.77C140.38,350.77 140.76,350.62 141.05,350.33C141.55,349.84 141.64,349.06 141.27,348.47L134.27,337.27L134.26,337.29Z",
    stroke: "#FFE181",
    strokeWidth: "2.61106",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60.53,169.21C71.85,78.15 149.6,9.5 241.46,9.5C286.87,9.5 330.4,26.36 364.05,56.98C397.43,87.36 418.31,128.64 422.85,173.24L431.87,173.24C431.87,173.24 431.87,173.14 431.87,173.09C427.28,126.09 405.42,82.56 370.31,50.51C334.98,18.26 289.22,0.5 241.46,0.5C144.62,0.5 62.95,72.95 51.49,169.03C51.49,169.09 51.49,169.15 51.49,169.21L60.53,169.21L60.53,169.21Z",
    stroke: "#FFE181",
    strokeWidth: "2.61106",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M58.46,192.78C57.89,192.72 57.33,192.65 56.76,192.59L55.46,192.44C54.95,192.38 54.43,192.32 53.92,192.26C53.35,192.19 52.79,192.12 52.22,192.04L50.87,191.87C50.75,191.85 50.63,191.84 50.5,191.82C50.5,191.89 50.48,191.96 50.48,192.03C50.87,220.37 57.37,247.61 69.79,272.99C69.83,273.07 69.88,273.13 69.92,273.2C72.21,271.55 74.45,269.82 76.61,268C65.3,244.4 59.31,219.1 58.81,192.8C58.69,192.79 58.56,192.78 58.44,192.76L58.46,192.78Z",
    stroke: "#FFE181",
    strokeWidth: "2.61106",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M422.26,215.36C413.71,275.04 376.21,326.59 321.83,353.35C321.2,353.66 320.87,354.36 321.03,355.04C321.19,355.72 321.79,356.2 322.49,356.2L334.17,356.2C334.43,356.2 334.68,356.13 334.91,356.01C350.08,347.48 364.07,336.84 376.51,324.4C406.8,294.11 425.61,255.77 430.92,213.53C430.95,213.31 430.92,213.1 430.85,212.89C427.99,213.81 425.11,214.63 422.26,215.35L422.26,215.36Z",
    stroke: "#FFE181",
    strokeWidth: "2.61106",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M343.95,249.52L357.33,249.65C359.51,249.67 361.68,249.59 363.85,249.38C370.95,248.69 372.97,253.21 371.68,258.22L368.79,269.42C367.82,273.19 371.86,276.28 375.24,274.35L375.24,274.35C379.56,271.88 382.8,267.9 384.34,263.17L387.22,254.33C391.1,242.41 381.48,230.58 369.24,231.66C367.96,231.77 366.67,231.78 365.38,231.75L361.94,231.69C361.94,231.69 342.25,241.54 335.04,248.52C334.61,248.94 334.93,249.67 335.53,249.66L343.94,249.51L343.95,249.52Z",
    fill: "#FFFFFF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M135.5,318.3L128.64,320.59C128.4,320.67 128.29,320.96 128.43,321.18L149.27,354.52C149.34,354.64 149.47,354.71 149.6,354.71L181.87,354.97C182.12,354.97 182.31,354.75 182.26,354.5L182.14,353.86C180.83,346.81 174.89,341.77 167.76,341.07C161.1,340.42 155.33,336.13 152.8,329.9L150.66,324.63C150.57,324.4 150.7,324.14 150.95,324.09L159.06,322.43C187.23,316.65 208.2,293.2 211.01,264.83C184.29,265.89 163.51,280.9 155.54,287.59C156.81,301.05 148.67,313.92 135.5,318.32L135.5,318.3Z",
    fill: "#FFFFFF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M134.26,337.29C134.16,337.13 134.03,336.99 133.87,336.87C119.31,326.22 106.42,313.52 95.55,299.12C95.18,298.63 94.55,298.41 93.96,298.58C92.1,299.09 90.25,299.66 88.47,300.28C88.02,300.44 87.67,300.8 87.53,301.25C87.39,301.71 87.47,302.2 87.76,302.58C101.86,321.66 119.16,337.8 139.18,350.54C139.43,350.7 139.71,350.77 139.99,350.77C140.38,350.77 140.76,350.62 141.05,350.33C141.55,349.84 141.64,349.06 141.27,348.47L134.27,337.27L134.26,337.29Z",
    fill: "url(#LinearGradient)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60.53,169.21C71.85,78.15 149.6,9.5 241.46,9.5C286.87,9.5 330.4,26.36 364.05,56.98C397.43,87.36 418.31,128.64 422.85,173.24L431.87,173.24C431.87,173.24 431.87,173.14 431.87,173.09C427.28,126.09 405.42,82.56 370.31,50.51C334.98,18.26 289.22,0.5 241.46,0.5C144.62,0.5 62.95,72.95 51.49,169.03C51.49,169.09 51.49,169.15 51.49,169.21L60.53,169.21L60.53,169.21Z",
    fill: "url(#LinearGradient_2)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M58.46,192.78C57.89,192.72 57.33,192.65 56.76,192.59L55.46,192.44C54.95,192.38 54.43,192.32 53.92,192.26C53.35,192.19 52.79,192.12 52.22,192.04L50.87,191.87C50.75,191.85 50.63,191.84 50.5,191.82C50.5,191.89 50.48,191.96 50.48,192.03C50.87,220.37 57.37,247.61 69.79,272.99C69.83,273.07 69.88,273.13 69.92,273.2C72.21,271.55 74.45,269.82 76.61,268C65.3,244.4 59.31,219.1 58.81,192.8C58.69,192.79 58.56,192.78 58.44,192.76L58.46,192.78Z",
    fill: "url(#LinearGradient_3)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M422.26,215.36C413.71,275.04 376.21,326.59 321.83,353.35C321.2,353.66 320.87,354.36 321.03,355.04C321.19,355.72 321.79,356.2 322.49,356.2L334.17,356.2C334.43,356.2 334.68,356.13 334.91,356.01C350.08,347.48 364.07,336.84 376.51,324.4C406.8,294.11 425.61,255.77 430.92,213.53C430.95,213.31 430.92,213.1 430.85,212.89C427.99,213.81 425.11,214.63 422.26,215.35L422.26,215.36Z",
    fill: "url(#LinearGradient_4)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M454.49,178.24L421.93,178.24C420.13,178.24 418.37,177.44 417.36,175.96C417.32,175.91 417.28,175.86 417.24,175.81C417.19,175.74 417.14,175.67 417.08,175.6C417.02,175.52 416.95,175.45 416.88,175.38C416.82,175.32 416.77,175.26 416.7,175.2C416.63,175.13 416.55,175.07 416.47,175C416.41,174.95 416.34,174.89 416.28,174.85C416.2,174.79 416.11,174.74 416.02,174.68C415.95,174.64 415.89,174.59 415.82,174.55C415.73,174.5 415.63,174.46 415.54,174.41C415.47,174.38 415.4,174.34 415.33,174.31C415.23,174.27 415.12,174.24 415.01,174.21C414.94,174.19 414.87,174.16 414.8,174.14C414.68,174.11 414.56,174.09 414.44,174.07C414.38,174.07 414.32,174.04 414.26,174.04C414.08,174.02 413.89,174 413.7,174.01L394.93,174.14C390.5,174.17 386.95,170.47 387.18,166.04L388.1,148.09L388.16,146.83L386.7,148.71C383.08,153.27 365.48,174.2 347.34,174.2L0,174.2L7.21,176.77C8.57,177.26 9.95,177.72 11.33,178.18C11.8,178.33 12.27,178.47 12.73,178.62C13.65,178.91 14.56,179.21 15.49,179.48C16.05,179.65 16.62,179.8 17.19,179.97C18.02,180.21 18.86,180.46 19.7,180.69C20.3,180.86 20.91,181.01 21.52,181.17C22.33,181.38 23.13,181.6 23.95,181.81C24.59,181.97 25.24,182.12 25.89,182.27C26.67,182.46 27.45,182.65 28.23,182.83C28.91,182.98 29.59,183.12 30.26,183.27C31.02,183.44 31.78,183.61 32.54,183.76C33.21,183.9 33.88,184.02 34.54,184.16C35.32,184.31 36.1,184.47 36.89,184.62C37.56,184.74 38.23,184.86 38.9,184.98C39.69,185.12 40.47,185.27 41.26,185.4C41.95,185.52 42.64,185.62 43.32,185.73C44.1,185.85 44.88,185.98 45.66,186.1C46.36,186.21 47.05,186.3 47.75,186.4C48.53,186.51 49.3,186.63 50.08,186.73C50.79,186.83 51.5,186.91 52.21,187C52.98,187.1 53.75,187.2 54.53,187.3C55.25,187.39 55.97,187.47 56.69,187.55C57.46,187.64 58.23,187.73 59,187.81C59.74,187.89 60.47,187.96 61.21,188.03C61.97,188.11 62.72,188.19 63.48,188.26C64.22,188.33 64.95,188.39 65.69,188.46C66.46,188.53 67.22,188.6 67.99,188.66C68.72,188.72 69.45,188.77 70.18,188.83C70.95,188.89 71.73,188.95 72.5,189.01C73.24,189.06 73.98,189.11 74.72,189.16C75.49,189.21 76.26,189.27 77.03,189.31C77.76,189.36 78.49,189.4 79.22,189.44C80,189.48 80.78,189.53 81.56,189.57C82.3,189.61 83.04,189.65 83.78,189.68C84.55,189.72 85.32,189.76 86.1,189.8C86.86,189.84 87.61,189.87 88.37,189.9C89.12,189.93 89.88,189.97 90.63,190C91.39,190.03 92.14,190.06 92.9,190.08C93.66,190.11 94.42,190.14 95.19,190.16C95.94,190.18 96.68,190.21 97.43,190.23C98.19,190.25 98.96,190.28 99.72,190.3C100.48,190.32 101.24,190.34 102,190.36C102.75,190.38 103.51,190.4 104.26,190.42C105.02,190.44 105.78,190.46 106.54,190.47C107.29,190.49 108.04,190.51 108.79,190.52C109.58,190.54 110.38,190.55 111.17,190.57C111.88,190.58 112.6,190.6 113.31,190.61C114.18,190.63 115.04,190.64 115.91,190.66C116.56,190.67 117.21,190.68 117.85,190.7C118.8,190.72 119.75,190.73 120.7,190.75C121.73,190.77 122.76,190.79 123.79,190.8C124.76,190.82 125.73,190.83 126.7,190.85C127.31,190.86 127.91,190.87 128.51,190.88C129.4,190.9 130.29,190.91 131.18,190.93C131.85,190.94 132.51,190.96 133.18,190.97C133.99,190.99 134.81,191 135.62,191.02C136.32,191.03 137.01,191.05 137.7,191.07C138.48,191.09 139.26,191.11 140.04,191.12C140.73,191.14 141.43,191.16 142.12,191.17C142.89,191.19 143.67,191.21 144.44,191.23C145.13,191.25 145.82,191.27 146.51,191.29C147.15,191.31 147.78,191.33 148.42,191.35C148.75,191.37 148.91,191.75 148.7,192L95.7,255.86C84.49,269.37 70.55,280.34 54.79,288.06L52.12,289.37L52.03,289.41L51.97,289.49L51.97,289.49L37.19,309.81L18.07,336.1L18.13,336.29L23.13,352.29L23.22,352.57L59.08,352.57L59.11,352.68L60.95,352.62L61.63,352.62C61.78,352.64 61.92,352.62 62.06,352.58L62.46,352.58L62.1,352.57C63.02,352.32 63.58,351.32 63.21,350.37L61.49,345.98C60.24,342.8 57.77,340.35 54.75,339.07L54.72,338.98C54.67,338.98 54.61,338.98 54.56,338.98C53.1,338.39 51.53,338.07 49.89,338.07C46.88,336.48 45.08,333.14 45.37,329.76C45.39,329.69 45.42,329.63 45.44,329.56C60.4,307.07 85.97,292.24 115,292.24C116.64,292.24 118.27,292.29 119.88,292.38C121.9,292.5 123.77,291.33 124.52,289.45C124.85,288.9 125.17,288.34 125.5,287.79C125.89,287.16 126.3,286.55 126.7,285.94C127.05,285.41 127.38,284.87 127.74,284.34C128.16,283.73 128.59,283.13 129.02,282.53C129.38,282.02 129.74,281.51 130.11,281.01C130.56,280.41 131.03,279.83 131.49,279.23C131.86,278.75 132.23,278.26 132.61,277.79C133.1,277.19 133.6,276.62 134.1,276.03C134.48,275.59 134.85,275.13 135.23,274.69C135.76,274.09 136.32,273.5 136.86,272.92C137.23,272.52 137.59,272.11 137.97,271.72C138.59,271.08 139.23,270.46 139.86,269.83C140.18,269.51 140.5,269.18 140.82,268.87C141.79,267.94 142.78,267.03 143.78,266.14C159.65,252.12 179.83,243.47 201.34,241.89C204.55,241.65 207.78,241.57 211.04,241.65L237.05,242.32C244.43,242.51 249.7,249.53 247.82,256.67L238.79,290.99C238.79,291.04 238.79,291.1 238.79,291.15L245.95,338.17L248.42,354.39L248.47,354.73L277.73,354.73L276.87,350.64C275.5,344.12 269.75,339.45 263.09,339.45L260.15,339.45C259.64,339.45 259.26,338.97 259.38,338.47L260.73,332.82C260.98,331.78 261.24,330.74 261.51,329.71C261.63,329.26 261.75,328.82 261.87,328.38C262.03,327.8 262.18,327.21 262.35,326.63C262.46,326.25 262.57,325.88 262.68,325.51C262.87,324.86 263.05,324.22 263.25,323.58C263.36,323.23 263.47,322.88 263.58,322.54C263.79,321.88 263.99,321.21 264.21,320.56C264.36,320.1 264.52,319.65 264.67,319.19C264.85,318.65 265.03,318.11 265.22,317.57C265.39,317.09 265.57,316.61 265.74,316.13C265.92,315.62 266.1,315.11 266.29,314.6C266.44,314.19 266.61,313.78 266.77,313.37C266.99,312.8 267.2,312.23 267.43,311.67C267.63,311.18 267.83,310.69 268.03,310.2C268.23,309.72 268.42,309.24 268.62,308.77C268.82,308.28 269.04,307.8 269.25,307.32C269.46,306.84 269.66,306.36 269.87,305.89C270.06,305.47 270.25,305.06 270.44,304.64C270.68,304.11 270.92,303.57 271.17,303.05C271.37,302.62 271.58,302.2 271.78,301.78C272.03,301.27 272.27,300.75 272.52,300.24C272.74,299.8 272.96,299.36 273.19,298.92C273.44,298.44 273.68,297.95 273.93,297.47C274.17,297 274.42,296.55 274.67,296.08C274.91,295.63 275.15,295.18 275.39,294.73C275.64,294.28 275.89,293.83 276.14,293.38C276.39,292.93 276.64,292.48 276.89,292.03C277.16,291.56 277.43,291.1 277.7,290.64C277.95,290.22 278.19,289.79 278.45,289.36C278.73,288.9 279.01,288.44 279.29,287.98C279.55,287.56 279.8,287.14 280.06,286.73C280.33,286.29 280.62,285.86 280.89,285.43C281.17,285 281.44,284.56 281.72,284.14C281.99,283.73 282.27,283.32 282.54,282.92C282.84,282.47 283.13,282.03 283.43,281.59C283.7,281.19 283.98,280.8 284.26,280.4C284.57,279.96 284.88,279.51 285.19,279.07C285.48,278.67 285.77,278.27 286.06,277.88C286.37,277.45 286.68,277.02 287,276.59C287.29,276.19 287.59,275.8 287.89,275.41C288.21,274.99 288.52,274.56 288.85,274.15C289.15,273.77 289.45,273.39 289.75,273.01C290.08,272.59 290.41,272.17 290.75,271.75C291.07,271.36 291.39,270.97 291.71,270.58C292.04,270.18 292.36,269.78 292.69,269.39C293.03,268.99 293.37,268.6 293.71,268.2C294.03,267.82 294.35,267.44 294.68,267.07C295,266.7 295.34,266.33 295.66,265.96C296.01,265.57 296.35,265.17 296.71,264.79C297.04,264.42 297.38,264.06 297.72,263.7C298.07,263.32 298.43,262.93 298.78,262.55C299.13,262.18 299.48,261.82 299.83,261.46C300.18,261.09 300.53,260.72 300.89,260.36C301.25,259.99 301.61,259.64 301.97,259.28C302.33,258.92 302.68,258.56 303.04,258.21C303.4,257.85 303.77,257.51 304.14,257.15C304.51,256.8 304.87,256.44 305.24,256.1C305.62,255.75 306,255.4 306.37,255.05C306.74,254.71 307.1,254.37 307.47,254.03C307.85,253.69 308.24,253.35 308.62,253.01C309,252.68 309.37,252.34 309.75,252.01C310.13,251.68 310.52,251.35 310.9,251.03C311.3,250.69 311.69,250.35 312.1,250.01C313.15,249.13 314.22,248.28 315.3,247.43C315.86,246.99 316.42,246.56 316.98,246.12C317.29,245.88 317.6,245.63 317.91,245.39C318.77,244.73 319.63,244.09 320.51,243.45C326.26,239.28 332.31,235.53 338.59,232.17L338.59,232.17C339.21,231.84 339.83,231.49 340.46,231.16C341.31,230.72 342.17,230.3 343.03,229.88C343.72,229.54 344.41,229.22 345.1,228.89C345.74,228.59 346.37,228.28 347.01,227.98C347.68,227.67 348.37,227.38 349.04,227.08C349.69,226.79 350.34,226.5 350.99,226.22C351.66,225.93 352.34,225.67 353.02,225.39C353.69,225.12 354.35,224.83 355.03,224.57C355.72,224.3 356.42,224.04 357.12,223.78C357.79,223.53 358.45,223.27 359.12,223.03C359.84,222.77 360.56,222.53 361.29,222.28C361.95,222.05 362.6,221.82 363.26,221.6C363.99,221.36 364.73,221.14 365.47,220.91C366.13,220.7 366.78,220.49 367.45,220.29C368.19,220.07 368.93,219.87 369.68,219.66C370.35,219.47 371.02,219.27 371.69,219.09C372.44,218.89 373.19,218.71 373.94,218.52C374.62,218.35 375.29,218.17 375.96,218.01C376.73,217.83 377.51,217.67 378.28,217.5C378.95,217.35 379.61,217.2 380.28,217.06C381.04,216.9 381.81,216.77 382.57,216.62C383.26,216.49 383.95,216.35 384.64,216.22C385.39,216.09 386.15,215.97 386.91,215.85C387.62,215.74 388.33,215.61 389.04,215.51C389.81,215.4 390.59,215.31 391.36,215.2C392.07,215.11 392.77,215 393.48,214.92C394.31,214.82 395.15,214.75 395.98,214.66C396.64,214.59 397.29,214.52 397.95,214.46C398.89,214.38 399.84,214.32 400.79,214.25C401.34,214.21 401.9,214.16 402.45,214.13C402.54,214.13 402.62,214.13 402.71,214.12C414.27,212.4 430.02,209.1 442.28,202.9C449.98,199.01 456.01,192.45 459.43,184.53L459.43,184.53C460.23,181.32 457.81,178.22 454.5,178.22L454.49,178.24Z",
    fill: "#FFFFFF"
  }))));
}

function constant$1 (x) {
  return function constant() {
    return x;
  };
}

const abs = Math.abs;
const atan2 = Math.atan2;
const cos = Math.cos;
const max = Math.max;
const min = Math.min;
const sin = Math.sin;
const sqrt = Math.sqrt;
const epsilon$1 = 1e-12;
const pi$1 = Math.PI;
const halfPi = pi$1 / 2;
const tau$1 = 2 * pi$1;
function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi$1 : Math.acos(x);
}
function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}

const pi = Math.PI,
  tau = 2 * pi,
  epsilon = 1e-6,
  tauEpsilon = tau - epsilon;
function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return append;
  const k = 10 ** d;
  return function (strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k) / k + strings[i];
    }
  };
}
class Path {
  constructor(digits) {
    this._x0 = this._y0 =
    // start of current subpath
    this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x, y) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x, y) {
    this._append`L${this._x1 = +x},${this._y1 = +y}`;
  }
  quadraticCurveTo(x1, y1, x, y) {
    this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x, y) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
  }
  arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;

    // Is the radius negative? Error.
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let x0 = this._x1,
      y0 = this._y1,
      x21 = x2 - x1,
      y21 = y2 - y1,
      x01 = x0 - x1,
      y01 = y0 - y1,
      l01_2 = x01 * x01 + y01 * y01;

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) ;

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    }

    // Otherwise, draw an arc!
    else {
      let x20 = x2 - x0,
        y20 = y2 - y0,
        l21_2 = x21 * x21 + y21 * y21,
        l20_2 = x20 * x20 + y20 * y20,
        l21 = Math.sqrt(l21_2),
        l01 = Math.sqrt(l01_2),
        l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
        t01 = l / l01,
        t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }
      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;

    // Is the radius negative? Error.
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let dx = r * Math.cos(a0),
      dy = r * Math.sin(a0),
      x0 = x + dx,
      y0 = y + dy,
      cw = 1 ^ ccw,
      da = ccw ? a0 - a1 : a1 - a0;

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._append`L${x0},${y0}`;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
    }
  }
  rect(x, y, w, h) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
}

function withPath(shape) {
  let digits = 3;
  shape.digits = function (_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };
  return () => new Path(digits);
}

function arcInnerRadius(d) {
  return d.innerRadius;
}
function arcOuterRadius(d) {
  return d.outerRadius;
}
function arcStartAngle(d) {
  return d.startAngle;
}
function arcEndAngle(d) {
  return d.endAngle;
}
function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0,
    y10 = y1 - y0,
    x32 = x3 - x2,
    y32 = y3 - y2,
    t = y32 * x10 - x32 * y10;
  if (t * t < epsilon$1) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
    y01 = y0 - y1,
    lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01),
    ox = lo * y01,
    oy = -lo * x01,
    x11 = x0 + ox,
    y11 = y0 + oy,
    x10 = x1 + ox,
    y10 = y1 + oy,
    x00 = (x11 + x10) / 2,
    y00 = (y11 + y10) / 2,
    dx = x10 - x11,
    dy = y10 - y11,
    d2 = dx * dx + dy * dy,
    r = r1 - rc,
    D = x11 * y10 - x10 * y11,
    d = (dy < 0 ? -1 : 1) * sqrt(max(0, r * r * d2 - D * D)),
    cx0 = (D * dy - dx * d) / d2,
    cy0 = (-D * dx - dy * d) / d2,
    cx1 = (D * dy + dx * d) / d2,
    cy1 = (-D * dx + dy * d) / d2,
    dx0 = cx0 - x00,
    dy0 = cy0 - y00,
    dx1 = cx1 - x00,
    dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}
function arc () {
  var innerRadius = arcInnerRadius,
    outerRadius = arcOuterRadius,
    cornerRadius = constant$1(0),
    padRadius = null,
    startAngle = arcStartAngle,
    endAngle = arcEndAngle,
    padAngle = arcPadAngle,
    context = null,
    path = withPath(arc);
  function arc() {
    var buffer,
      r,
      r0 = +innerRadius.apply(this, arguments),
      r1 = +outerRadius.apply(this, arguments),
      a0 = startAngle.apply(this, arguments) - halfPi,
      a1 = endAngle.apply(this, arguments) - halfPi,
      da = abs(a1 - a0),
      cw = a1 > a0;
    if (!context) context = buffer = path();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > epsilon$1)) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > tau$1 - epsilon$1) {
      context.moveTo(r1 * cos(a0), r1 * sin(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon$1) {
        context.moveTo(r0 * cos(a1), r0 * sin(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
        a11 = a1,
        a00 = a0,
        a10 = a1,
        da0 = da,
        da1 = da,
        ap = padAngle.apply(this, arguments) / 2,
        rp = ap > epsilon$1 && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)),
        rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
        rc0 = rc,
        rc1 = rc,
        t0,
        t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > epsilon$1) {
        var p0 = asin(rp / r0 * sin(ap)),
          p1 = asin(rp / r1 * sin(ap));
        if ((da0 -= p0 * 2) > epsilon$1) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon$1) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }
      var x01 = r1 * cos(a01),
        y01 = r1 * sin(a01),
        x10 = r0 * cos(a10),
        y10 = r0 * sin(a10);

      // Apply rounded corners?
      if (rc > epsilon$1) {
        var x11 = r1 * cos(a11),
          y11 = r1 * sin(a11),
          x00 = r0 * cos(a00),
          y00 = r0 * sin(a00),
          oc;

        // Restrict the corner radius according to the sector angle. If this
        // intersection fails, it’s probably because the arc is too small, so
        // disable the corner radius entirely.
        if (da < pi$1) {
          if (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10)) {
            var ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2),
              lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
            rc0 = min(rc, (r0 - lc) / (kc - 1));
            rc1 = min(rc, (r1 - lc) / (kc + 1));
          } else {
            rc0 = rc1 = 0;
          }
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > epsilon$1)) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > epsilon$1) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > epsilon$1) || !(da0 > epsilon$1)) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > epsilon$1) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }
    context.closePath();
    if (buffer) return context = null, buffer + "" || null;
  }
  arc.centroid = function () {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
      a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi$1 / 2;
    return [cos(a) * r, sin(a) * r];
  };
  arc.innerRadius = function (_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant$1(+_), arc) : innerRadius;
  };
  arc.outerRadius = function (_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant$1(+_), arc) : outerRadius;
  };
  arc.cornerRadius = function (_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant$1(+_), arc) : cornerRadius;
  };
  arc.padRadius = function (_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), arc) : padRadius;
  };
  arc.startAngle = function (_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$1(+_), arc) : startAngle;
  };
  arc.endAngle = function (_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$1(+_), arc) : endAngle;
  };
  arc.padAngle = function (_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$1(+_), arc) : padAngle;
  };
  arc.context = function (_) {
    return arguments.length ? (context = _ == null ? null : _, arc) : context;
  };
  return arc;
}

function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function descending(a, b) {
  return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

function bisector(f) {
  let compare1, compare2, delta;

  // If an accessor is specified, promote it to a comparator. In this case we
  // can test whether the search value is (self-) comparable. We can’t do this
  // for a comparator (except for specific, known comparators) because we can’t
  // tell if the comparator is symmetric, and an asymmetric comparator can’t be
  // used to test whether a single value is comparable.
  if (f.length !== 2) {
    compare1 = ascending;
    compare2 = (d, x) => ascending(f(d), x);
    delta = (d, x) => f(d) - x;
  } else {
    compare1 = f === ascending || f === descending ? f : zero$1;
    compare2 = f;
    delta = f;
  }
  function left(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) < 0) lo = mid + 1;else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) <= 0) lo = mid + 1;else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center(a, x, lo = 0, hi = a.length) {
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }
  return {
    left,
    center,
    right
  };
}
function zero$1() {
  return 0;
}

function number$1(x) {
  return x === null ? NaN : +x;
}

const ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
bisector(number$1).center;
var bisect = bisectRight;

const e10 = Math.sqrt(50),
  e5 = Math.sqrt(10),
  e2 = Math.sqrt(2);
function tickSpec(start, stop, count) {
  const step = (stop - start) / Math.max(0, count),
    power = Math.floor(Math.log10(step)),
    error = step / Math.pow(10, power),
    factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
  return [i1, i2, inc];
}
function ticks(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  if (!(count > 0)) return [];
  if (start === stop) return [start];
  const reverse = stop < start,
    [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
  if (!(i2 >= i1)) return [];
  const n = i2 - i1 + 1,
    ticks = new Array(n);
  if (reverse) {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) / -inc;else for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) * inc;
  } else {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) / -inc;else for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) * inc;
  }
  return ticks;
}
function tickIncrement(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  return tickSpec(start, stop, count)[2];
}
function tickStep(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  const reverse = stop < start,
    inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range).domain(domain);
      break;
  }
  return this;
}

function define (constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*",
  reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  reHex = /^#([0-9a-f]{3,8})$/,
  reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
  reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
  reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
  reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
  reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
  reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};
define(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
  : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
  : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
  : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
  : null // invalid hex
  ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
  : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
  : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
  : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
  : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
  : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
  : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
  : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb$1(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define(Rgb, rgb$1, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
    g = o.g / 255,
    b = o.b / 255,
    min = Math.min(r, g, b),
    max = Math.max(r, g, b),
    h = NaN,
    s = max - min,
    l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
      s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
      l = this.l,
      m2 = l + (l < 0.5 ? l : 1 - l) * s,
      m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

var constant = (x => () => x);

function linear$1(a, d) {
  return function (t) {
    return a + t * d;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function (a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear$1(a, d) : constant(isNaN(a) ? b : a);
}

var rgb = (function rgbGamma(y) {
  var color = gamma(y);
  function rgb(start, end) {
    var r = color((start = rgb$1(start)).r, (end = rgb$1(end)).r),
      g = color(start.g, end.g),
      b = color(start.b, end.b),
      opacity = nogamma(start.opacity, end.opacity);
    return function (t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
  rgb.gamma = rgbGamma;
  return rgb;
})(1);

function numberArray (a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
    c = b.slice(),
    i;
  return function (t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
    na = a ? Math.min(nb, a.length) : 0,
    x = new Array(na),
    c = new Array(nb),
    i;
  for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];
  return function (t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date (a, b) {
  var d = new Date();
  return a = +a, b = +b, function (t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

function interpolateNumber (a, b) {
  return a = +a, b = +b, function (t) {
    return a * (1 - t) + b * t;
  };
}

function object (a, b) {
  var i = {},
    c = {},
    k;
  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};
  for (k in b) {
    if (k in a) {
      i[k] = interpolate(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function (t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  reB = new RegExp(reA.source, "g");
function zero(b) {
  return function () {
    return b;
  };
}
function one(b) {
  return function (t) {
    return b(t) + "";
  };
}
function string (a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0,
    // scan index for next number in b
    am,
    // current match in a
    bm,
    // current match in b
    bs,
    // string preceding current number in b, if any
    i = -1,
    // index in s
    s = [],
    // string constants and placeholders
    q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else {
      // interpolate non-matching numbers
      s[++i] = null;
      q.push({
        i: i,
        x: interpolateNumber(am, bm)
      });
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
    for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
    return s.join("");
  });
}

function interpolate (a, b) {
  var t = typeof b,
    c;
  return b == null || t === "boolean" ? constant(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color(b)) ? (b = c, rgb) : string : b instanceof color ? rgb : b instanceof Date ? date : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a, b);
}

function interpolateRound (a, b) {
  return a = +a, b = +b, function (t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

function constants$1(x) {
  return function () {
    return x;
  };
}

function number(x) {
  return +x;
}

var unit = [0, 1];
function identity$1(x) {
  return x;
}
function normalize(a, b) {
  return (b -= a = +a) ? function (x) {
    return (x - a) / b;
  } : constants$1(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function (x) {
    return Math.max(a, Math.min(b, x));
  };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0],
    d1 = domain[1],
    r0 = range[0],
    r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function (x) {
    return r0(d0(x));
  };
}
function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
    d = new Array(j),
    r = new Array(j),
    i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }
  return function (x) {
    var i = bisect(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit,
    range = unit,
    interpolate$1 = interpolate,
    transform,
    untransform,
    unknown,
    clamp = identity$1,
    piecewise,
    output,
    input;
  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity$1) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
  }
  scale.invert = function (y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
  };
  scale.domain = function (_) {
    return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
  };
  scale.range = function (_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };
  scale.rangeRound = function (_) {
    return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
  };
  scale.clamp = function (_) {
    return arguments.length ? (clamp = _ ? true : identity$1, rescale()) : clamp !== identity$1;
  };
  scale.interpolate = function (_) {
    return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
  };
  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function (t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity$1, identity$1);
}

function formatDecimal (x) {
  return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i,
    coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
}

function exponent (x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}

function formatGroup (grouping, thousands) {
  return function (value, width) {
    var i = value.length,
      t = [],
      j = 0,
      g = grouping[0],
      length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}

function formatNumerals (numerals) {
  return function (value) {
    return value.replace(/[0-9]/g, function (i) {
      return numerals[+i];
    });
  };
}

// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function () {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim (s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;
        break;
      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;
      default:
        if (!+s[i]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

var prefixExponent;
function formatPrefixAuto (x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
    exponent = d[1],
    i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
    n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

function formatRounded (x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
    exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

var formatTypes = {
  "%": (x, p) => (x * 100).toFixed(p),
  "b": x => Math.round(x).toString(2),
  "c": x => x + "",
  "d": formatDecimal,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": x => Math.round(x).toString(8),
  "p": (x, p) => formatRounded(x * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": x => Math.round(x).toString(16).toUpperCase(),
  "x": x => Math.round(x).toString(16)
};

function identity (x) {
  return x;
}

var map = Array.prototype.map,
  prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale (locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? identity : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
    currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
    currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
    decimal = locale.decimal === undefined ? "." : locale.decimal + "",
    numerals = locale.numerals === undefined ? identity : formatNumerals(map.call(locale.numerals, String)),
    percent = locale.percent === undefined ? "%" : locale.percent + "",
    minus = locale.minus === undefined ? "−" : locale.minus + "",
    nan = locale.nan === undefined ? "NaN" : locale.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill,
      align = specifier.align,
      sign = specifier.sign,
      symbol = specifier.symbol,
      zero = specifier.zero,
      width = specifier.width,
      comma = specifier.comma,
      precision = specifier.precision,
      trim = specifier.trim,
      type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
      suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
      maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format(value) {
      var valuePrefix = prefix,
        valueSuffix = suffix,
        i,
        n,
        c;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
        padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format.toString = function () {
      return specifier + "";
    };
    return format;
  }
  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
      e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
      k = Math.pow(10, -e),
      prefix = prefixes[8 + e / 3];
    return function (value) {
      return f(k * value) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

function precisionFixed (step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

function precisionPrefix (step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}

function precisionRound (step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
    precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s":
      {
        var value = Math.max(Math.abs(start), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
        return formatPrefix(specifier, value);
      }
    case "":
    case "e":
    case "g":
    case "p":
    case "r":
      {
        if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
        break;
      }
    case "f":
    case "%":
      {
        if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
  }
  return format(specifier);
}

function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function (count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function (count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function (count) {
    if (count == null) count = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear() {
  var scale = continuous();
  scale.copy = function () {
    return copy(scale, linear());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

function Gauge({
  value = 50,
  min = 0,
  max = 100,
  backgroundColor,
  fillColor
}) {
  const backgroundArc = arc().innerRadius(0.65).outerRadius(1).startAngle(-Math.PI / 2).endAngle(Math.PI / 2)();
  const percentScale = linear().domain([min, max]).range([0, 1]);
  const percent = percentScale(value);
  const angleScale = linear().domain([0, 1]).range([-Math.PI / 2, Math.PI / 2]).clamp(true);
  const angle = angleScale(percent);
  const filledArc = arc().innerRadius(0.65).outerRadius(1).startAngle(-Math.PI / 2).endAngle(angle)();
  return /*#__PURE__*/React.createElement("svg", {
    style: {
      overflow: "visible"
    },
    width: "9em",
    viewBox: [-1, -1, 2, 1].join(" ")
  }, /*#__PURE__*/React.createElement("defs", null), /*#__PURE__*/React.createElement("path", {
    d: backgroundArc,
    fill: backgroundColor
  }), /*#__PURE__*/React.createElement("path", {
    d: filledArc,
    fill: fillColor
  }));
}

var themes = {
  "data": {
    "light": {
      "colors": {
        "body": "#ffffff",
        "textPrimary": "#000000",
        "textSecondary": "#636363"
      },
      "font": "1em \"Nunito Sans\", sans-serif"
    },
    "dark": {
      "colors": {
        "body": "#363636",
        "textPrimary": "#ffffff",
        "textSecondary": "#b3b3b3"
      },
      "font": "1em \"Nunito Sans\", sans-serif"
    }
  }
};

const riskColor$1 = riskLevel => {
  if (riskLevel == 'low') return '#ffffff';
  if (riskLevel == 'medium') return '#ffcd26';
  return '#f17059';
};
function classes$1(theme, data) {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      alignItems: "center",
      font: theme.font,
      fontWeight: 400,
      color: theme.colors.textPrimary,
      backgroundColor: theme.colors.body,
      cursor: "pointer"
    },
    logo: {
      fontSize: "25px"
    },
    score: {
      position: "relative",
      top: '-43px',
      textAlign: "center",
      height: 0,
      zIndex: 100,
      color: riskColor$1(data.riskLevel),
      fontWeight: "bold",
      fontSize: "42px"
    }
  };
}
function ScoreBadge({
  theme,
  data
}) {
  if (!data) {
    console.error('"data" is undefined');
    return /*#__PURE__*/React.createElement("div", null);
  }
  let t;
  if (!theme) theme = "dark";
  if (typeof theme === 'object') t = theme;else t = themes["data"][theme];
  const c = classes$1(t, data);
  return /*#__PURE__*/React.createElement("div", {
    style: c.container
  }, /*#__PURE__*/React.createElement(Gauge, {
    value: data.score,
    backgroundColor: "#e2e2e2",
    fillColor: "#ffcd28"
  }), /*#__PURE__*/React.createElement("div", {
    style: c.score
  }, data.score), /*#__PURE__*/React.createElement("div", {
    style: c.logo
  }, /*#__PURE__*/React.createElement(Logo, null), " Token Sniffer"));
}

function CircledCheckIcon(props) {
  return /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "20px",
    height: "20px",
    viewBox: "0 0 18 18",
    enableBackground: "new 0 0 18 18",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("g", {
    id: "layer0"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9,0C4.05,0 0,4.05 0,9C0,13.95 4.05,18 9,18C13.95,18 18,13.95 18,9C18,4.05 13.95,0 9,0L9,0ZM9,16.2C5.04,16.2 1.8,12.96 1.8,9C1.8,5.04 5.04,1.8 9,1.8C12.96,1.8 16.2,5.04 16.2,9C16.2,12.96 12.96,16.2 9,16.2L9,16.2Z",
    fill: "#67C082"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.47,10.035L5.76,8.325L4.5,9.585L7.47,12.645L13.5,6.615L12.24,5.355L7.47,10.035L7.47,10.035Z",
    fill: "#67C082"
  })));
}

function CircledXIcon(props) {
  return /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "20px",
    height: "20px",
    viewBox: "0 0 18 18",
    enableBackground: "new 0 0 18 18",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("g", {
    id: "layer0"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9,0C4.05,0 0,4.05 0,9C0,13.95 4.05,18 9,18C13.95,18 18,13.95 18,9C18,4.05 13.95,0 9,0L9,0ZM9,16.2C5.04,16.2 1.8,12.96 1.8,9C1.8,5.04 5.04,1.8 9,1.8C12.96,1.8 16.2,5.04 16.2,9C16.2,12.96 12.96,16.2 9,16.2L9,16.2Z",
    fill: "#F17059"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.34,4.92106L9,7.26106L6.66,4.92106L5.4,6.18106L7.74,8.52106L5.4,10.8611L6.66,12.1211L9,9.78106L11.34,12.1211L12.6,10.8611L10.26,8.52106L12.6,6.18106L11.34,4.92106L11.34,4.92106Z",
    fill: "#F17059"
  })));
}

function precise(x) {
  if (x == 0) return '0';
  if (x < 1) return '<1';
  return Math.trunc(x * 10) / 10;
}
const riskColor = riskLevel => {
  if (riskLevel == 'low') return '#ffff';
  if (riskLevel == 'medium') return '#ffcd26';
  return '#f17059';
};
function classes(theme, width) {
  return {
    container: {
      font: theme.font,
      fontWeight: 400,
      color: theme.colors.textPrimary,
      backgroundColor: theme.colors.body,
      cursor: "pointer",
      width: typeof width !== "undefined" ? width : "20em"
    },
    row: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      paddingBottom: "0.4em"
    },
    col1: {
      minWidth: "2em"
    },
    col2: {
      color: theme.colors.textSecondary
    },
    line: {
      paddingBottom: "0.4em"
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      justifyContent: "space-between",
      margin: "1em 1em 0.5em 1em"
    },
    body: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      margin: "0.5em 1em 1em 1em"
    },
    logo: {
      fontWeight: "normal",
      fontSize: "x-large"
    },
    score: {
      fontWeight: "normal",
      fontSize: "x-large",
      padding: 0
    },
    alert: {
      padding: "0.5rem",
      margin: "0 1em 0 1em",
      border: "2px solid #f17059",
      borderRadius: "0.75em",
      maxWidth: "35em"
    },
    title: {
      fontWeight: "normal",
      fontSize: "large",
      margin: "0.5rem 0 0.5rem 0"
    },
    link: {
      color: theme.colors.textSecondary,
      textDecoration: "underline",
      cursor: "pointer",
      overflowWrap: "anywhere"
    },
    dashIcon: {
      color: theme.colors.textSecondary,
      fontSize: "0.925em",
      paddingLeft: "0.25em"
    }
  };
}
function SmellTestResults({
  theme,
  width,
  showDetails,
  data
}) {
  if (!data || !data?.tests) {
    console.error('"data" is undefined');
    return /*#__PURE__*/React.createElement("div", null);
  }
  let t;
  if (!theme) theme = "dark";
  if (typeof theme === 'object') t = theme;else t = themes["data"][theme];
  const c = classes(t, width);
  const tests = {};
  for (const t of data.tests) {
    tests[t.id] = t;
  }
  const TestResult = ({
    test
  }) => {
    return /*#__PURE__*/React.createElement("div", {
      style: c.row
    }, /*#__PURE__*/React.createElement("div", {
      style: c.col1
    }, test.result ? /*#__PURE__*/React.createElement(CircledXIcon, null) : /*#__PURE__*/React.createElement(CircledCheckIcon, null)), /*#__PURE__*/React.createElement("div", {
      style: c.col2
    }, test.description));
  };
  const isOwnershipRenounced = !tests["testForOwnershipNotRenounced"]["result"] && !tests["testForAuthorization"]["result"];
  const circulatingSupply = data.total_supply - data.balances.burn_balance;
  const tokenOwnerBalancePct = data.owner_balance / circulatingSupply;
  const tokenDevBalancePct = data.deployer_balance / circulatingSupply;
  const tokenBurnBalancePct = data.balances.burn_balance / data.total_supply;
  const tokenLockBalancePct = data.balances.lock_balance / data.total_supply;
  const isImpossibleHolder = tokenOwnerBalancePct > 1 || tokenDevBalancePct > 1 || data?.top_holders?.some(h => h.balance > circulatingSupply);
  const lpLocks = data.pools?.reduce((acc, p) => acc.concat(p.locks), []).sort((a, b) => b.balance - a.balance);
  return /*#__PURE__*/React.createElement("div", {
    style: c.container,
    onClick: () => window.open(`https://tokensniffer.com/token/${data.chainId}/${data.address}`, "_blank")
  }, /*#__PURE__*/React.createElement("div", {
    style: c.header
  }, /*#__PURE__*/React.createElement("div", {
    style: c.score
  }, "Score: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: riskColor(data?.riskLevel),
      paddingLeft: "0.25em"
    }
  }, data?.score, "/100")), /*#__PURE__*/React.createElement("div", {
    style: c.logo
  }, /*#__PURE__*/React.createElement(Logo, null), " Token Sniffer")), data?.is_flagged && /*#__PURE__*/React.createElement("div", {
    style: c.alert
  }, /*#__PURE__*/React.createElement("b", null, "WARNING:"), " This token was flagged due to evidence of a bug, hack, or scam."), /*#__PURE__*/React.createElement("div", {
    style: c.body
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: c.title
  }, "Swap Analysis"), ['testForUnableToSell', 'testForHighBuyFee', 'testForHighSellFee'].map((id, index) => /*#__PURE__*/React.createElement(TestResult, {
    key: index,
    test: tests[id]
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: c.title
  }, "Contract Analysis"), /*#__PURE__*/React.createElement(TestResult, {
    test: tests["testForMissingSource"]
  }), tests["testForProxy"].result && /*#__PURE__*/React.createElement(TestResult, {
    test: tests["testForProxy"]
  }), tests["testForPausable"].result && isOwnershipRenounced && /*#__PURE__*/React.createElement(TestResult, {
    test: tests["testForPausable"]
  }), tests["testForMint"].result && isOwnershipRenounced && /*#__PURE__*/React.createElement(TestResult, {
    test: tests["testForMint"]
  }), tests["testForMaxTransactionAmount"].result && isOwnershipRenounced && /*#__PURE__*/React.createElement(TestResult, {
    test: tests["testForMaxTransactionAmount"]
  }), tests["testForModifiableFee"].result && isOwnershipRenounced && /*#__PURE__*/React.createElement(TestResult, {
    test: tests["testForModifiableFee"]
  }), tests["testForBlacklist"].result && isOwnershipRenounced && /*#__PURE__*/React.createElement(TestResult, {
    test: tests["testForBlacklist"]
  }), /*#__PURE__*/React.createElement(TestResult, {
    test: tests["testForOwnershipNotRenounced"]
  }), /*#__PURE__*/React.createElement(TestResult, {
    test: tests["testForAuthorization"]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: c.title
  }, "Holder Analysis"), circulatingSupply == 0 && /*#__PURE__*/React.createElement("div", {
    style: c.row
  }, /*#__PURE__*/React.createElement("div", {
    style: c.col1
  }, "(alert icon)"), /*#__PURE__*/React.createElement("div", {
    style: c.col2
  }, "No tokens in circulation")), circulatingSupply < 0 && /*#__PURE__*/React.createElement("div", {
    style: c.row
  }, /*#__PURE__*/React.createElement("div", {
    style: c.col1
  }, "(alert icon)"), /*#__PURE__*/React.createElement("div", {
    style: c.col2
  }, "Burned amount exceeds total token supply")), isImpossibleHolder && /*#__PURE__*/React.createElement("div", {
    style: c.row
  }, /*#__PURE__*/React.createElement("div", {
    style: c.col1
  }, "(alert icon)"), /*#__PURE__*/React.createElement("div", {
    style: c.col2
  }, "A wallet exceeds the circulating token supply (likely a scam)")), tokenBurnBalancePct >= 0.01 && /*#__PURE__*/React.createElement("div", {
    style: c.row
  }, /*#__PURE__*/React.createElement("div", {
    style: c.col1
  }, /*#__PURE__*/React.createElement("div", {
    styles: c.dashIcon
  }, "\u2014")), /*#__PURE__*/React.createElement("div", {
    style: c.col2
  }, "Tokens burned: ", precise(100 * tokenBurnBalancePct), "%, circulating supply: ", circulatingSupply.toLocaleString())), tokenLockBalancePct >= 0.01 && /*#__PURE__*/React.createElement(TestResult, {
    test: {
      result: true,
      description: `Tokens locked (${precise(100 * tokenLockBalancePct)}%)`
    }
  }), !isOwnershipRenounced && /*#__PURE__*/React.createElement(TestResult, {
    test: tests["testForHighOwnerTokenBalance"]
  }), /*#__PURE__*/React.createElement(TestResult, {
    test: tests["testForHighCreatorTokenBalance"]
  }), /*#__PURE__*/React.createElement(TestResult, {
    test: tests["testForHighWalletTokenBalance"]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: c.title
  }, "Liquidity Analysis"), data.pools?.length == 0 ? /*#__PURE__*/React.createElement("div", null, "Liquidity pool not found (ignore for presale)") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TestResult, {
    test: tests["testForInadequateLiquidity"]
  }), !!showDetails && /*#__PURE__*/React.createElement("div", {
    style: c.row
  }, /*#__PURE__*/React.createElement("div", {
    style: c.col1
  }), /*#__PURE__*/React.createElement("div", {
    style: c.col2
  }, data.pools.map((pool, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    style: c.line
  }, precise(pool.base_reserve).toLocaleString(), " ", pool.base_symbol, " in ", pool.name, " ", pool.fee > 0 && `(${pool.fee / 10000}%)`)))), /*#__PURE__*/React.createElement(TestResult, {
    test: tests["testForInadequateInitialLiquidity"]
  }), !!showDetails && /*#__PURE__*/React.createElement("div", {
    style: c.row
  }, /*#__PURE__*/React.createElement("div", {
    style: c.col1
  }), /*#__PURE__*/React.createElement("div", {
    style: c.col2
  }, data.pools.map((pool, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    style: c.line
  }, precise(pool.initial_base_reserve).toLocaleString(), " ", pool.base_symbol, " in ", pool.name)))), /*#__PURE__*/React.createElement(TestResult, {
    test: tests["testForInadeqateLiquidityLockedOrBurned"]
  }), !!showDetails && lpLocks?.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: c.row
  }, /*#__PURE__*/React.createElement("div", {
    style: c.col1
  }), /*#__PURE__*/React.createElement("div", {
    style: c.col2
  }, data.pools.map(pool => {
    return pool.locks.map((lock, index) => {
      const name = lock.url ? /*#__PURE__*/React.createElement("a", {
        styles: c.link,
        href: lock.url,
        target: "_blank"
      }, lock.name) : lock.name;
      const expired = lock.end_time && lock.end_time <= Date.now() / 1000;
      const dateStr = lock.end_time ? ' until ' + datetimeString(lock.end_time * 1000) + ' (' + (expired ? '-' : '') + timeDiffString(lock.end_time * 1000, null, true, true) + ')' : '';
      let expiredStr;
      if (expired) expiredStr = 'EXPIRED';else if (lock.end_time && lock.end_time <= Date.now() / 1000 + constants.MIN_LP_LOCK_TIME) expiredStr = 'LOCK IGNORED, EXPIRES SOON';
      return /*#__PURE__*/React.createElement("div", {
        key: index
      }, pool.burn_balance > 1000 && /*#__PURE__*/React.createElement("div", {
        style: c.line
      }, precise(100 * pool.burn_balance), "% burned"), /*#__PURE__*/React.createElement("div", {
        style: c.line
      }, precise(100 * lock.balance / pool.total_supply), "% in ", name, " ", dateStr, " ", expiredStr && /*#__PURE__*/React.createElement("span", null, expiredStr)));
    });
  })))))));
}

exports.ScoreBadge = ScoreBadge;
exports.SmellTestResults = SmellTestResults;
