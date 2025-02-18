"use strict";
exports.id = 5396;
exports.ids = [5396];
exports.modules = {

/***/ 85396:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(18038);
var PrimeReact = __webpack_require__(90284);
var button = __webpack_require__(18176);
var csstransition = __webpack_require__(51267);
var hooks = __webpack_require__(85215);
var overlayservice = __webpack_require__(19232);
var portal = __webpack_require__(68865);
var utils = __webpack_require__(7666);
var componentbase = __webpack_require__(87095);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var PrimeReact__default = /*#__PURE__*/_interopDefaultLegacy(PrimeReact);

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var ConfirmPopupBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'ConfirmPopup',
    tagKey: undefined,
    target: null,
    visible: false,
    message: null,
    rejectLabel: null,
    acceptLabel: null,
    icon: null,
    rejectIcon: null,
    acceptIcon: null,
    rejectClassName: null,
    acceptClassName: null,
    className: null,
    style: null,
    appendTo: null,
    dismissable: true,
    footer: null,
    onShow: null,
    onHide: null,
    accept: null,
    reject: null,
    transitionOptions: null,
    children: undefined
  }
});

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var confirmPopup = function confirmPopup() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  props = _objectSpread(_objectSpread({}, props), {
    visible: props.visible === undefined ? true : props.visible
  });
  props.visible && overlayservice.OverlayService.emit('confirm-popup', props);
  var show = function show() {
    var updatedProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    overlayservice.OverlayService.emit('confirm-popup', _objectSpread(_objectSpread(_objectSpread({}, props), updatedProps), {
      visible: true
    }));
  };
  var hide = function hide() {
    overlayservice.OverlayService.emit('confirm-popup', {
      visible: false
    });
  };
  return {
    show: show,
    hide: hide
  };
};
var ConfirmPopup = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
  var context = React__namespace.useContext(PrimeReact.PrimeReactContext);
  var props = ConfirmPopupBase.getProps(inProps, context);
  var _React$useState = React__namespace.useState(props.visible),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    visibleState = _React$useState2[0],
    setVisibleState = _React$useState2[1];
  var _React$useState3 = React__namespace.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    reshowState = _React$useState4[0],
    setReshowState = _React$useState4[1];
  var _ConfirmPopupBase$set = ConfirmPopupBase.setMetaData({
      props: props,
      state: {
        visible: visibleState,
        reshow: reshowState
      }
    }),
    ptm = _ConfirmPopupBase$set.ptm;
  var overlayRef = React__namespace.useRef(null);
  var acceptBtnRef = React__namespace.useRef(null);
  var isPanelClicked = React__namespace.useRef(false);
  var overlayEventListener = React__namespace.useRef(null);
  var confirmProps = React__namespace.useRef(null);
  var isCallbackExecuting = React__namespace.useRef(false);
  var getCurrentProps = function getCurrentProps() {
    return confirmProps.current || props;
  };
  var getPropValue = function getPropValue(key) {
    return (confirmProps.current || props)[key];
  };
  var callbackFromProp = function callbackFromProp(key) {
    for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      param[_key - 1] = arguments[_key];
    }
    return utils.ObjectUtils.getPropValue(getPropValue(key), param);
  };
  var acceptLabel = getPropValue('acceptLabel') || PrimeReact.localeOption('accept');
  var rejectLabel = getPropValue('rejectLabel') || PrimeReact.localeOption('reject');
  var _useOverlayListener = hooks.useOverlayListener({
      target: getPropValue('target'),
      overlay: overlayRef,
      listener: function listener(event, _ref) {
        var type = _ref.type,
          valid = _ref.valid;
        if (valid) {
          type === 'outside' ? props.dismissable && !isPanelClicked.current && hide('hide') : hide('hide');
        }
        isPanelClicked.current = false;
      },
      when: visibleState
    }),
    _useOverlayListener2 = _slicedToArray(_useOverlayListener, 2),
    bindOverlayListener = _useOverlayListener2[0],
    unbindOverlayListener = _useOverlayListener2[1];
  var onPanelClick = function onPanelClick(event) {
    isPanelClicked.current = true;
    overlayservice.OverlayService.emit('overlay-click', {
      originalEvent: event,
      target: getPropValue('target')
    });
  };
  var accept = function accept() {
    if (!isCallbackExecuting.current) {
      isCallbackExecuting.current = true;
      callbackFromProp('accept');
      hide('accept');
    }
  };
  var reject = function reject() {
    if (!isCallbackExecuting.current) {
      isCallbackExecuting.current = true;
      callbackFromProp('reject');
      hide('reject');
    }
  };
  var show = function show() {
    setVisibleState(true);
    setReshowState(false);
    isCallbackExecuting.current = false;
    overlayEventListener.current = function (e) {
      !isOutsideClicked(e.target) && (isPanelClicked.current = true);
    };
    overlayservice.OverlayService.on('overlay-click', overlayEventListener.current);
  };
  var hide = function hide(result) {
    setVisibleState(false);
    overlayservice.OverlayService.off('overlay-click', overlayEventListener.current);
    overlayEventListener.current = null;
    if (result) {
      callbackFromProp('onHide', result);
    }
  };
  var onEnter = function onEnter() {
    utils.ZIndexUtils.set('overlay', overlayRef.current, context && context.autoZIndex || PrimeReact__default["default"].autoZIndex, context && context.zIndex['overlay'] || PrimeReact__default["default"].zIndex['overlay']);
    align();
  };
  var onEntered = function onEntered() {
    bindOverlayListener();
    if (acceptBtnRef.current) {
      acceptBtnRef.current.focus();
    }
    callbackFromProp('onShow');
  };
  var onExit = function onExit() {
    unbindOverlayListener();
  };
  var onExited = function onExited() {
    utils.ZIndexUtils.clear(overlayRef.current);
    isPanelClicked.current = false;
  };
  var align = function align() {
    if (getPropValue('target')) {
      utils.DomHandler.absolutePosition(overlayRef.current, getPropValue('target'));
      var containerOffset = utils.DomHandler.getOffset(overlayRef.current);
      var targetOffset = utils.DomHandler.getOffset(getPropValue('target'));
      var arrowLeft = 0;
      if (containerOffset.left < targetOffset.left) {
        arrowLeft = targetOffset.left - containerOffset.left;
      }
      overlayRef.current.style.setProperty('--overlayArrowLeft', "".concat(arrowLeft, "px"));
      if (containerOffset.top < targetOffset.top) {
        utils.DomHandler.addClass(overlayRef.current, 'p-confirm-popup-flipped');
      }
    }
  };
  var isOutsideClicked = function isOutsideClicked(target) {
    return overlayRef && overlayRef.current && !(overlayRef.current.isSameNode(target) || overlayRef.current.contains(target));
  };
  var confirm = function confirm(updatedProps) {
    if (updatedProps.tagKey === props.tagKey) {
      var isVisibleChanged = visibleState !== updatedProps.visible;
      var targetChanged = getPropValue('target') !== updatedProps.target;
      if (targetChanged && !props.target) {
        hide();
        confirmProps.current = updatedProps;
        setReshowState(true);
      } else if (isVisibleChanged) {
        confirmProps.current = updatedProps;
        updatedProps.visible ? show() : hide();
      }
    }
  };
  React__namespace.useEffect(function () {
    props.visible ? show() : hide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.visible]);
  React__namespace.useEffect(function () {
    if (!props.target && !props.message) {
      overlayservice.OverlayService.on('confirm-popup', confirm);
    }
    return function () {
      overlayservice.OverlayService.off('confirm-popup', confirm);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.target]);
  hooks.useUpdateEffect(function () {
    reshowState && show();
  }, [reshowState]);
  hooks.useUnmountEffect(function () {
    if (overlayEventListener.current) {
      overlayservice.OverlayService.off('overlay-click', overlayEventListener.current);
      overlayEventListener.current = null;
    }
    overlayservice.OverlayService.off('confirm-popup', confirm);
    utils.ZIndexUtils.clear(overlayRef.current);
  });
  React__namespace.useImperativeHandle(ref, function () {
    return {
      props: props,
      confirm: confirm
    };
  });
  var createContent = function createContent() {
    var currentProps = getCurrentProps();
    var message = utils.ObjectUtils.getJSXElement(getPropValue('message'), currentProps);
    var iconProps = utils.mergeProps({
      className: 'p-confirm-popup-icon'
    }, ptm('icon'));
    var icon = utils.IconUtils.getJSXIcon(getPropValue('icon'), _objectSpread({}, iconProps), {
      props: currentProps
    });
    var messageProps = utils.mergeProps({
      className: 'p-confirm-popup-message'
    }, ptm('message'));
    var contentProps = utils.mergeProps({
      className: 'p-confirm-popup-content'
    }, ptm('content'));
    return /*#__PURE__*/React__namespace.createElement("div", contentProps, icon, /*#__PURE__*/React__namespace.createElement("span", messageProps, message));
  };
  var createFooter = function createFooter() {
    var acceptClassName = utils.classNames('p-confirm-popup-accept p-button-sm', getPropValue('acceptClassName'));
    var rejectClassName = utils.classNames('p-confirm-popup-reject p-button-sm', {
      'p-button-text': !getPropValue('rejectClassName')
    }, getPropValue('rejectClassName'));
    var footerProps = utils.mergeProps({
      className: 'p-confirm-popup-footer'
    }, ptm('footer'));
    var rejectButtonProps = utils.mergeProps({
      label: rejectLabel,
      icon: getPropValue('rejectIcon'),
      className: rejectClassName,
      onClick: reject,
      pt: ptm('rejectButton')
    });
    var acceptButtonProps = utils.mergeProps({
      ref: acceptBtnRef,
      label: acceptLabel,
      icon: getPropValue('acceptIcon'),
      className: acceptClassName,
      onClick: accept,
      pt: ptm('acceptButton')
    });
    var content = /*#__PURE__*/React__namespace.createElement("div", footerProps, /*#__PURE__*/React__namespace.createElement(button.Button, rejectButtonProps), /*#__PURE__*/React__namespace.createElement(button.Button, acceptButtonProps));
    if (getPropValue('footer')) {
      var defaultContentOptions = {
        accept: accept,
        reject: reject,
        className: 'p-confirm-popup-footer',
        acceptClassName: acceptClassName,
        rejectClassName: rejectClassName,
        acceptLabel: acceptLabel,
        rejectLabel: rejectLabel,
        element: content,
        props: getCurrentProps()
      };
      return utils.ObjectUtils.getJSXElement(getPropValue('footer'), defaultContentOptions);
    }
    return content;
  };
  var createElement = function createElement() {
    var className = utils.classNames('p-confirm-popup p-component', getPropValue('className'), {
      'p-input-filled': context && context.inputStyle === 'filled' || PrimeReact__default["default"].inputStyle === 'filled',
      'p-ripple-disabled': context && context.ripple === false || PrimeReact__default["default"].ripple === false
    });
    var content = createContent();
    var footer = createFooter();
    var rootProps = utils.mergeProps({
      ref: overlayRef,
      id: getPropValue('id'),
      className: className,
      style: getPropValue('style'),
      onClick: onPanelClick
    }, ConfirmPopupBase.getOtherProps(props), ptm('root'));
    return /*#__PURE__*/React__namespace.createElement(csstransition.CSSTransition, {
      nodeRef: overlayRef,
      classNames: "p-connected-overlay",
      "in": visibleState,
      timeout: {
        enter: 120,
        exit: 100
      },
      options: getPropValue('transitionOptions'),
      unmountOnExit: true,
      onEnter: onEnter,
      onEntered: onEntered,
      onExit: onExit,
      onExited: onExited
    }, /*#__PURE__*/React__namespace.createElement("div", rootProps, content, footer));
  };
  var element = createElement();
  return /*#__PURE__*/React__namespace.createElement(portal.Portal, {
    element: element,
    appendTo: getPropValue('appendTo'),
    visible: getPropValue('visible')
  });
}));
ConfirmPopup.displayName = 'ConfirmPopup';

exports.PK = ConfirmPopup;
exports.w$ = confirmPopup;


/***/ })

};
;