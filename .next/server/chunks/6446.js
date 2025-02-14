"use strict";
exports.id = 6446;
exports.ids = [6446];
exports.modules = {

/***/ 56446:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(18038);
var utils = __webpack_require__(7666);
var componentbase = __webpack_require__(87095);
var exclamationtriangle = __webpack_require__(47524);
var infocircle = __webpack_require__(35043);
var timescircle = __webpack_require__(86903);
var check = __webpack_require__(15767);
var api = __webpack_require__(90284);

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

var MessageBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'Message',
    id: null,
    className: null,
    style: null,
    text: null,
    icon: null,
    severity: 'info',
    content: null,
    children: undefined
  }
});

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Message = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
  var context = React__namespace.useContext(api.PrimeReactContext);
  var props = MessageBase.getProps(inProps, context);
  var elementRef = React__namespace.useRef(null);
  var _MessageBase$setMetaD = MessageBase.setMetaData({
      props: props
    }),
    ptm = _MessageBase$setMetaD.ptm;
  var createContent = function createContent() {
    if (props.content) {
      return utils.ObjectUtils.getJSXElement(props.content, props);
    }
    var text = utils.ObjectUtils.getJSXElement(props.text, props);
    var iconClassName = 'p-inline-message-icon';
    var iconProps = utils.mergeProps({
      className: iconClassName
    }, ptm('icon'));
    var icon = props.icon;
    if (!icon) {
      switch (props.severity) {
        case 'info':
          icon = /*#__PURE__*/React__namespace.createElement(infocircle.InfoCircleIcon, iconProps);
          break;
        case 'warn':
          icon = /*#__PURE__*/React__namespace.createElement(exclamationtriangle.ExclamationTriangleIcon, iconProps);
          break;
        case 'error':
          icon = /*#__PURE__*/React__namespace.createElement(timescircle.TimesCircleIcon, iconProps);
          break;
        case 'success':
          icon = /*#__PURE__*/React__namespace.createElement(check.CheckIcon, iconProps);
          break;
      }
    }
    var messageIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread({}, iconProps), {
      props: props
    });
    var textProps = utils.mergeProps({
      className: 'p-inline-message-text'
    }, ptm('text'));
    return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, messageIcon, /*#__PURE__*/React__namespace.createElement("span", textProps, text));
  };
  React__namespace.useImperativeHandle(ref, function () {
    return {
      props: props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var className = utils.classNames('p-inline-message p-component', {
    'p-inline-message-info': props.severity === 'info',
    'p-inline-message-warn': props.severity === 'warn',
    'p-inline-message-error': props.severity === 'error',
    'p-inline-message-success': props.severity === 'success',
    'p-inline-message-icon-only': !props.text
  }, props.className);
  var content = createContent();
  var rootProps = utils.mergeProps({
    id: props.id,
    ref: elementRef,
    className: className,
    style: props.style,
    role: 'alert',
    'aria-live': 'polite'
  }, MessageBase.getOtherProps(props), ptm('root'));
  return /*#__PURE__*/React__namespace.createElement("div", rootProps, content);
}));
Message.displayName = 'Message';

exports.v = Message;


/***/ })

};
;