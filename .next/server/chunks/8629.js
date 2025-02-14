"use strict";
exports.id = 8629;
exports.ids = [8629];
exports.modules = {

/***/ 18629:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(18038);
var api = __webpack_require__(90284);
var utils = __webpack_require__(7666);
var componentbase = __webpack_require__(87095);
var button = __webpack_require__(18176);
var plus = __webpack_require__(1501);
var times = __webpack_require__(90776);
var upload = __webpack_require__(72035);
var messages = __webpack_require__(99903);
var progressbar = __webpack_require__(72085);
var ripple = __webpack_require__(26412);

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

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}

function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}

var BadgeBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'Badge',
    value: null,
    severity: null,
    size: null,
    style: null,
    className: null,
    children: undefined
  }
});

var Badge = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
  var context = React__namespace.useContext(api.PrimeReactContext);
  var props = BadgeBase.getProps(inProps, context);
  var _BadgeBase$setMetaDat = BadgeBase.setMetaData({
      props: props
    }),
    ptm = _BadgeBase$setMetaDat.ptm;
  var elementRef = React__namespace.useRef(null);
  var className = utils.classNames('p-badge p-component', _defineProperty({
    'p-badge-no-gutter': utils.ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
    'p-badge-dot': utils.ObjectUtils.isEmpty(props.value),
    'p-badge-lg': props.size === 'large',
    'p-badge-xl': props.size === 'xlarge'
  }, "p-badge-".concat(props.severity), props.severity !== null), props.className);
  React__namespace.useImperativeHandle(ref, function () {
    return {
      props: props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var rootProps = utils.mergeProps({
    ref: elementRef,
    style: props.style,
    className: className
  }, BadgeBase.getOtherProps(props), ptm('root'));
  return /*#__PURE__*/React__namespace.createElement("span", rootProps, props.value);
}));
Badge.displayName = 'Badge';

var FileUploadBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'FileUpload',
    id: null,
    name: null,
    url: null,
    mode: 'advanced',
    multiple: false,
    accept: null,
    removeIcon: null,
    disabled: false,
    auto: false,
    maxFileSize: null,
    invalidFileSizeMessageSummary: '{0}: Invalid file size, ',
    invalidFileSizeMessageDetail: 'maximum upload size is {0}.',
    style: null,
    className: null,
    withCredentials: false,
    previewWidth: 50,
    chooseLabel: null,
    uploadLabel: null,
    cancelLabel: null,
    chooseOptions: {
      label: null,
      icon: null,
      iconOnly: false,
      className: null,
      style: null
    },
    uploadOptions: {
      label: null,
      icon: null,
      iconOnly: false,
      className: null,
      style: null
    },
    cancelOptions: {
      label: null,
      icon: null,
      iconOnly: false,
      className: null,
      style: null
    },
    customUpload: false,
    headerClassName: null,
    headerStyle: null,
    contentClassName: null,
    contentStyle: null,
    headerTemplate: null,
    itemTemplate: null,
    emptyTemplate: null,
    progressBarTemplate: null,
    onBeforeUpload: null,
    onBeforeSend: null,
    onBeforeDrop: null,
    onBeforeSelect: null,
    onUpload: null,
    onError: null,
    onClear: null,
    onSelect: null,
    onProgress: null,
    onValidationFail: null,
    uploadHandler: null,
    onRemove: null,
    children: undefined
  }
});

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var FileUpload = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
  var context = React__namespace.useContext(api.PrimeReactContext);
  var props = FileUploadBase.getProps(inProps, context);
  var _React$useState = React__namespace.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    uploadedFilesState = _React$useState2[0],
    setUploadedFilesState = _React$useState2[1];
  var _React$useState3 = React__namespace.useState([]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    filesState = _React$useState4[0],
    setFilesState = _React$useState4[1];
  var _React$useState5 = React__namespace.useState(0),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    progressState = _React$useState6[0],
    setProgressState = _React$useState6[1];
  var _React$useState7 = React__namespace.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    focusedState = _React$useState8[0],
    setFocusedState = _React$useState8[1];
  var _React$useState9 = React__namespace.useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    uploadingState = _React$useState10[0],
    setUploadingState = _React$useState10[1];
  var _FileUploadBase$setMe = FileUploadBase.setMetaData({
      props: props,
      state: {
        progress: progressState,
        uploading: uploadingState,
        uploadedFiles: uploadedFilesState,
        files: filesState,
        focused: focusedState
      }
    }),
    ptm = _FileUploadBase$setMe.ptm;
  var fileInputRef = React__namespace.useRef(null);
  var messagesRef = React__namespace.useRef(null);
  var contentRef = React__namespace.useRef(null);
  var duplicateIEEvent = React__namespace.useRef(false);
  var uploadedFileCount = React__namespace.useRef(0);
  var hasFiles = utils.ObjectUtils.isNotEmpty(filesState);
  var hasUploadedFiles = utils.ObjectUtils.isNotEmpty(uploadedFilesState);
  var disabled = props.disabled || uploadingState;
  var chooseButtonLabel = props.chooseLabel || props.chooseOptions.label || api.localeOption('choose');
  var uploadButtonLabel = props.uploadLabel || props.uploadOptions.label || api.localeOption('upload');
  var cancelButtonLabel = props.cancelLabel || props.cancelOptions.label || api.localeOption('cancel');
  var chooseDisabled = disabled || props.fileLimit && props.fileLimit <= filesState.length + uploadedFileCount;
  var uploadDisabled = disabled || !hasFiles;
  var cancelDisabled = disabled || !hasFiles;
  var isImage = function isImage(file) {
    return /^image\//.test(file.type);
  };
  var remove = function remove(event, index) {
    clearInput();
    var currentFiles = _toConsumableArray(filesState);
    var removedFile = filesState[index];
    currentFiles.splice(index, 1);
    setFilesState(currentFiles);
    if (props.onRemove) {
      props.onRemove({
        originalEvent: event,
        file: removedFile
      });
    }
  };
  var removeUploadedFiles = function removeUploadedFiles(event, index) {
    clearInput();
    var currentUploadedFiles = _toConsumableArray(uploadedFilesState);
    var removedFile = filesState[index];
    currentUploadedFiles.splice(index, 1);
    setUploadedFilesState(currentUploadedFiles);
    if (props.onRemove) {
      props.onRemove({
        originalEvent: event,
        file: removedFile
      });
    }
  };
  var clearInput = function clearInput() {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  var clearIEInput = function clearIEInput() {
    if (fileInputRef.current) {
      duplicateIEEvent.current = true; //IE11 fix to prevent onFileChange trigger again
      fileInputRef.current.value = '';
    }
  };
  var formatSize = function formatSize(bytes) {
    if (bytes === 0) {
      return '0 B';
    }
    var k = 1000,
      dm = 3,
      sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };
  var onFileSelect = function onFileSelect(event) {
    // give caller a chance to stop the selection
    if (props.onBeforeSelect && props.onBeforeSelect({
      originalEvent: event,
      files: filesState
    }) === false) {
      return;
    }
    if (event.type !== 'drop' && isIE11() && duplicateIEEvent.current) {
      duplicateIEEvent.current = false;
      return;
    }
    var currentFiles = filesState && props.multiple ? _toConsumableArray(filesState) : [];
    var selectedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (var i = 0; i < selectedFiles.length; i++) {
      var file = selectedFiles[i];
      if ((!props.multiple || !isFileSelected(file)) && validate(file)) {
        if (isImage(file)) {
          file.objectURL = window.URL.createObjectURL(file);
        }
        currentFiles.push(file);
      }
    }
    setFilesState(currentFiles);
    if (utils.ObjectUtils.isNotEmpty(currentFiles) && props.auto) {
      upload$1(currentFiles);
    }
    if (props.onSelect) {
      props.onSelect({
        originalEvent: event,
        files: currentFiles
      });
    }
    if (event.type !== 'drop' && isIE11()) {
      clearIEInput();
    } else {
      clearInput();
    }
    if (props.mode === 'basic' && currentFiles.length > 0) {
      fileInputRef.current.style.display = 'none';
    }
  };
  var isFileSelected = function isFileSelected(file) {
    return filesState.some(function (f) {
      return f.name + f.type + f.size === file.name + file.type + file.size;
    });
  };
  var isIE11 = function isIE11() {
    return !!window['MSInputMethodContext'] && !!document['documentMode'];
  };
  var validate = function validate(file) {
    if (props.maxFileSize && file.size > props.maxFileSize) {
      var message = {
        severity: 'error',
        summary: props.invalidFileSizeMessageSummary.replace('{0}', file.name),
        detail: props.invalidFileSizeMessageDetail.replace('{0}', formatSize(props.maxFileSize)),
        sticky: true
      };
      if (props.mode === 'advanced') {
        messagesRef.current.show(message);
      }
      props.onValidationFail && props.onValidationFail(file);
      return false;
    }
    return true;
  };
  var upload$1 = function upload(files) {
    files = files || filesState;
    if (files && files.nativeEvent) {
      files = filesState;
    }
    if (props.customUpload) {
      if (props.fileLimit) {
        uploadedFileCount + files.length, _readOnlyError("uploadedFileCount");
      }
      if (props.uploadHandler) {
        props.uploadHandler({
          files: files,
          options: {
            clear: clear,
            props: props
          }
        });
      }
    } else {
      setUploadingState(true);
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      if (props.onBeforeUpload) {
        props.onBeforeUpload({
          xhr: xhr,
          formData: formData
        });
      }
      var _iterator = _createForOfIteratorHelper(files),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var file = _step.value;
          formData.append(props.name, file, file.name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      xhr.upload.addEventListener('progress', function (event) {
        if (event.lengthComputable) {
          var progress = Math.round(event.loaded * 100 / event.total);
          setProgressState(progress);
          if (props.onProgress) {
            props.onProgress({
              originalEvent: event,
              progress: progress
            });
          }
        }
      });
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          setProgressState(0);
          setUploadingState(false);
          if (xhr.status >= 200 && xhr.status < 300) {
            if (props.fileLimit) {
              uploadedFileCount + files.length, _readOnlyError("uploadedFileCount");
            }
            if (props.onUpload) {
              props.onUpload({
                xhr: xhr,
                files: files
              });
            }
          } else {
            if (props.onError) {
              props.onError({
                xhr: xhr,
                files: files
              });
            }
          }
          setUploadedFilesState(function (prevUploadedFiles) {
            return [].concat(_toConsumableArray(prevUploadedFiles), _toConsumableArray(files));
          });
          clear();
        }
      };
      xhr.open('POST', props.url, true);
      if (props.onBeforeSend) {
        props.onBeforeSend({
          xhr: xhr,
          formData: formData
        });
      }
      xhr.withCredentials = props.withCredentials;
      xhr.send(formData);
    }
  };
  var clear = function clear() {
    setFilesState([]);
    setUploadedFilesState([]);
    setUploadingState(false);
    props.onClear && props.onClear();
    clearInput();
  };
  var choose = function choose() {
    fileInputRef.current.click();
  };
  var onFocus = function onFocus() {
    setFocusedState(true);
  };
  var onBlur = function onBlur() {
    setFocusedState(false);
  };
  var _onKeyDown = function onKeyDown(event) {
    if (event.which === 13) {
      // enter
      choose();
    }
  };
  var _onDragEnter = function onDragEnter(event) {
    if (!disabled) {
      event.dataTransfer.dropEffect = 'copy';
      event.stopPropagation();
      event.preventDefault();
    }
  };
  var _onDragOver = function onDragOver(event) {
    if (!disabled) {
      event.dataTransfer.dropEffect = 'copy';
      utils.DomHandler.addClass(contentRef.current, 'p-fileupload-highlight');
      event.stopPropagation();
      event.preventDefault();
    }
  };
  var _onDragLeave = function onDragLeave(event) {
    if (!disabled) {
      event.dataTransfer.dropEffect = 'copy';
      utils.DomHandler.removeClass(contentRef.current, 'p-fileupload-highlight');
    }
  };
  var _onDrop = function onDrop(event) {
    if (props.disabled) {
      return;
    }
    utils.DomHandler.removeClass(contentRef.current, 'p-fileupload-highlight');
    event.stopPropagation();
    event.preventDefault();

    // give caller a chance to stop the drop
    if (props.onBeforeDrop && props.onBeforeDrop(event) === false) {
      return;
    }
    var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    var allowDrop = props.multiple || utils.ObjectUtils.isEmpty(filesState) && files && files.length === 1;
    allowDrop && onFileSelect(event);
  };
  var onSimpleUploaderClick = function onSimpleUploaderClick() {
    !disabled && hasFiles ? upload$1() : fileInputRef.current.click();
  };
  React__namespace.useImperativeHandle(ref, function () {
    return {
      props: props,
      upload: upload$1,
      clear: clear,
      formatSize: formatSize,
      onFileSelect: onFileSelect,
      getInput: function getInput() {
        return fileInputRef.current;
      },
      getContent: function getContent() {
        return contentRef.current;
      },
      getFiles: function getFiles() {
        return filesState;
      },
      setFiles: function setFiles(files) {
        return setFilesState(files || []);
      },
      getUploadedFiles: function getUploadedFiles() {
        return uploadedFilesState;
      },
      setUploadedFiles: function setUploadedFiles(files) {
        return setUploadedFilesState(files || []);
      }
    };
  });
  var createChooseButton = function createChooseButton() {
    var _props$chooseOptions = props.chooseOptions,
      className = _props$chooseOptions.className,
      style = _props$chooseOptions.style,
      _icon = _props$chooseOptions.icon,
      iconOnly = _props$chooseOptions.iconOnly;
    var chooseClassName = utils.classNames('p-button p-fileupload-choose p-component', {
      'p-disabled': disabled,
      'p-focus': focusedState,
      'p-button-icon-only': iconOnly
    }, className);
    var labelClassName = 'p-button-label p-clickable';
    var iconClassName = utils.classNames('p-button-icon p-clickable', {
      'p-button-icon-left': !iconOnly
    });
    var chooseButtonLabelProps = utils.mergeProps({
      className: labelClassName
    }, ptm('chooseButtonLabel'));
    var label = iconOnly ? /*#__PURE__*/React__namespace.createElement("span", _extends({}, chooseButtonLabelProps, {
      dangerouslySetInnerHTML: {
        __html: '&nbsp;'
      }
    })) : /*#__PURE__*/React__namespace.createElement("span", chooseButtonLabelProps, chooseButtonLabel);
    var inputProps = utils.mergeProps({
      ref: fileInputRef,
      type: 'file',
      onChange: function onChange(e) {
        return onFileSelect(e);
      },
      multiple: props.multiple,
      accept: props.accept,
      disabled: chooseDisabled
    }, ptm('input'));
    var input = /*#__PURE__*/React__namespace.createElement("input", inputProps);
    var chooseIconProps = utils.mergeProps({
      className: iconClassName
    }, ptm('chooseIcon'));
    var icon = _icon || /*#__PURE__*/React__namespace.createElement(plus.PlusIcon, chooseIconProps);
    var chooseIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread({}, chooseIconProps), {
      props: props
    });
    var chooseButtonProps = utils.mergeProps({
      className: chooseClassName,
      style: style,
      onClick: choose,
      onKeyDown: function onKeyDown(e) {
        return _onKeyDown(e);
      },
      onFocus: onFocus,
      onBlur: onBlur,
      tabIndex: 0
    }, ptm('chooseButton'));
    return /*#__PURE__*/React__namespace.createElement("span", chooseButtonProps, input, chooseIcon, label, /*#__PURE__*/React__namespace.createElement(ripple.Ripple, null));
  };
  var onRemoveClick = function onRemoveClick(e, badgeOptions, index) {
    if (badgeOptions.severity === 'warning') remove(e, index);else removeUploadedFiles(e, index);
  };
  var createFile = function createFile(file, index, badgeOptions) {
    var key = file.name + file.type + file.size;
    var thumbnailProps = utils.mergeProps({
      role: 'presentation',
      className: 'p-fileupload-file-thumbnail',
      src: file.objectURL,
      width: props.previewWidth
    }, ptm('thumbnail'));
    var preview = isImage(file) ? /*#__PURE__*/React__namespace.createElement("img", _extends({}, thumbnailProps, {
      alt: file.name
    })) : null;
    var detailsProps = utils.mergeProps(ptm('details'));
    var fileSizeProps = utils.mergeProps(ptm('fileSize'));
    var fileNameProps = utils.mergeProps({
      className: 'p-fileupload-filename'
    }, ptm('fileName'));
    var actionsProps = utils.mergeProps(ptm('actions'));
    var fileName = /*#__PURE__*/React__namespace.createElement("div", fileNameProps, file.name);
    var size = /*#__PURE__*/React__namespace.createElement("div", fileSizeProps, formatSize(file.size));
    var contentBody = /*#__PURE__*/React__namespace.createElement("div", detailsProps, /*#__PURE__*/React__namespace.createElement("div", fileNameProps, " ", file.name), /*#__PURE__*/React__namespace.createElement("span", fileSizeProps, formatSize(file.size)), /*#__PURE__*/React__namespace.createElement(Badge, {
      className: "p-fileupload-file-badge",
      value: badgeOptions.value,
      severity: badgeOptions.severity,
      pt: ptm('badge')
    }));
    var removeButton = /*#__PURE__*/React__namespace.createElement("div", actionsProps, /*#__PURE__*/React__namespace.createElement(button.Button, {
      type: "button",
      icon: props.removeIcon || /*#__PURE__*/React__namespace.createElement(times.TimesIcon, null),
      text: true,
      rounded: true,
      severity: "danger",
      onClick: function onClick(e) {
        return onRemoveClick(e, badgeOptions, index);
      },
      disabled: disabled,
      pt: ptm('removeButton')
    }));
    var content = /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, preview, contentBody, removeButton);
    if (props.itemTemplate) {
      var defaultContentOptions = {
        onRemove: function onRemove(event) {
          return remove(event, index);
        },
        previewElement: preview,
        fileNameElement: fileName,
        sizeElement: size,
        removeElement: removeButton,
        formatSize: formatSize(file.size),
        element: content,
        index: index,
        props: props
      };
      content = utils.ObjectUtils.getJSXElement(props.itemTemplate, file, defaultContentOptions);
    }
    var fileProps = utils.mergeProps({
      key: key,
      className: 'p-fileupload-row'
    }, ptm('file'));
    return /*#__PURE__*/React__namespace.createElement("div", fileProps, content);
  };
  var createFiles = function createFiles() {
    var badgeOptions = {
      severity: 'warning',
      value: 'Pending'
    };
    var content = filesState.map(function (file, index) {
      return createFile(file, index, badgeOptions);
    });
    return /*#__PURE__*/React__namespace.createElement("div", null, content);
  };
  var createUploadedFiles = function createUploadedFiles() {
    var badgeOptions = {
      severity: 'success',
      value: 'Completed'
    };
    var content = uploadedFilesState && uploadedFilesState.map(function (file, index) {
      return createFile(file, index, badgeOptions);
    });
    return /*#__PURE__*/React__namespace.createElement("div", null, content);
  };
  var createEmptyContent = function createEmptyContent() {
    return props.emptyTemplate && !hasFiles && !hasUploadedFiles ? utils.ObjectUtils.getJSXElement(props.emptyTemplate, props) : null;
  };
  var createProgressBarContent = function createProgressBarContent() {
    if (props.progressBarTemplate) {
      return utils.ObjectUtils.getJSXElement(props.progressBarTemplate, props);
    }
    return /*#__PURE__*/React__namespace.createElement(progressbar.ProgressBar, {
      value: progressState,
      showValue: false,
      pt: ptm('progressbar')
    });
  };
  var createAdvanced = function createAdvanced() {
    var className = utils.classNames('p-fileupload p-fileupload-advanced p-component', props.className);
    var headerClassName = utils.classNames('p-fileupload-buttonbar', props.headerClassName);
    var contentClassName = utils.classNames('p-fileupload-content', props.contentClassName);
    var chooseButton = createChooseButton();
    var emptyContent = createEmptyContent();
    var uploadButton, cancelButton, filesList, uplaodedFilesList, progressBar;
    if (!props.auto) {
      var uploadOptions = props.uploadOptions;
      var cancelOptions = props.cancelOptions;
      var uploadLabel = !uploadOptions.iconOnly ? uploadButtonLabel : '';
      var cancelLabel = !cancelOptions.iconOnly ? cancelButtonLabel : '';
      var uploadIconClassName = utils.classNames('p-button-icon p-c', {
        'p-button-icon-left': !uploadOptions.iconOnly
      });
      var uploadIconProps = utils.mergeProps({
        className: uploadIconClassName
      }, ptm('uploadIcon'));
      var uploadIcon = utils.IconUtils.getJSXIcon(uploadOptions.icon || /*#__PURE__*/React__namespace.createElement(upload.UploadIcon, uploadIconProps), _objectSpread({}, uploadIconProps), {
        props: props
      });
      var cancelIconClassName = utils.classNames('p-button-icon p-c', {
        'p-button-icon-left': !cancelOptions.iconOnly
      });
      var cancelIconProps = utils.mergeProps({
        className: cancelIconClassName
      }, ptm('cancelIcon'));
      var cancelIcon = utils.IconUtils.getJSXIcon(cancelOptions.icon || /*#__PURE__*/React__namespace.createElement(times.TimesIcon, cancelIconProps), _objectSpread({}, cancelIconProps), {
        props: props
      });
      uploadButton = /*#__PURE__*/React__namespace.createElement(button.Button, {
        type: "button",
        label: uploadLabel,
        icon: uploadIcon,
        onClick: upload$1,
        disabled: uploadDisabled,
        style: uploadOptions.style,
        className: uploadOptions.className,
        pt: ptm('uploadButton')
      });
      cancelButton = /*#__PURE__*/React__namespace.createElement(button.Button, {
        type: "button",
        label: cancelLabel,
        icon: cancelIcon,
        onClick: clear,
        disabled: cancelDisabled,
        style: cancelOptions.style,
        className: cancelOptions.className,
        pt: ptm('cancelButton')
      });
    }
    if (hasFiles) {
      filesList = createFiles();
      progressBar = createProgressBarContent();
    }
    if (hasUploadedFiles) {
      uplaodedFilesList = createUploadedFiles();
    }
    var buttonbarProps = utils.mergeProps({
      className: headerClassName,
      style: props.headerStyle
    }, ptm('buttonbar'));
    var header = /*#__PURE__*/React__namespace.createElement("div", buttonbarProps, chooseButton, uploadButton, cancelButton);
    if (props.headerTemplate) {
      var defaultContentOptions = {
        className: headerClassName,
        chooseButton: chooseButton,
        uploadButton: uploadButton,
        cancelButton: cancelButton,
        element: header,
        props: props
      };
      header = utils.ObjectUtils.getJSXElement(props.headerTemplate, defaultContentOptions);
    }
    var rootProps = utils.mergeProps({
      id: props.id,
      className: className,
      style: props.style
    }, FileUploadBase.getOtherProps(props), ptm('root'));
    var contentProps = utils.mergeProps({
      ref: contentRef,
      className: contentClassName,
      style: props.contentStyle,
      onDragEnter: function onDragEnter(e) {
        return _onDragEnter(e);
      },
      onDragOver: function onDragOver(e) {
        return _onDragOver(e);
      },
      onDragLeave: function onDragLeave(e) {
        return _onDragLeave(e);
      },
      onDrop: function onDrop(e) {
        return _onDrop(e);
      }
    }, ptm('content'));
    return /*#__PURE__*/React__namespace.createElement("div", rootProps, header, /*#__PURE__*/React__namespace.createElement("div", contentProps, progressBar, /*#__PURE__*/React__namespace.createElement(messages.Messages, {
      ref: messagesRef
    }), hasFiles ? filesList : null, hasUploadedFiles ? uplaodedFilesList : null, emptyContent));
  };
  var createBasic = function createBasic() {
    var chooseOptions = props.chooseOptions;
    var className = utils.classNames('p-fileupload p-fileupload-basic p-component', props.className);
    var buttonClassName = utils.classNames('p-button p-component p-fileupload-choose', {
      'p-fileupload-choose-selected': hasFiles,
      'p-disabled': disabled,
      'p-focus': focusedState
    }, chooseOptions.className);
    var labelClassName = 'p-button-label p-clickable';
    var labelProps = utils.mergeProps({
      className: labelClassName
    }, ptm('label'));
    var chooseLabel = chooseOptions.iconOnly ? /*#__PURE__*/React__namespace.createElement("span", _extends({}, labelProps, {
      dangerouslySetInnerHTML: {
        __html: '&nbsp;'
      }
    })) : /*#__PURE__*/React__namespace.createElement("span", labelProps, chooseButtonLabel);
    var label = props.auto ? chooseLabel : /*#__PURE__*/React__namespace.createElement("span", labelProps, hasFiles ? filesState[0].name : chooseLabel);
    var iconClassName = utils.classNames('p-button-icon', {
      'p-button-icon-left': !chooseOptions.iconOnly
    });
    var chooseIconProps = utils.mergeProps({
      className: iconClassName
    }, ptm('chooseIcon'));
    var icon = chooseOptions.icon ? chooseOptions.icon : !chooseOptions.icon && (!hasFiles || props.auto) ? /*#__PURE__*/React__namespace.createElement(plus.PlusIcon, chooseIconProps) : !chooseOptions.icon && hasFiles && !props.auto && /*#__PURE__*/React__namespace.createElement(upload.UploadIcon, chooseIconProps);
    var chooseIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread({}, chooseIconProps), {
      props: props,
      hasFiles: hasFiles
    });
    var inputProps = utils.mergeProps({
      ref: fileInputRef,
      type: 'file',
      onChange: function onChange(e) {
        return onFileSelect(e);
      },
      multiple: props.multiple,
      accept: props.accept,
      disabled: disabled
    }, ptm('input'));
    var input = !hasFiles && /*#__PURE__*/React__namespace.createElement("input", inputProps);
    var rootProps = utils.mergeProps({
      className: className,
      style: props.style
    }, FileUploadBase.getOtherProps(props), ptm('root'));
    var basicButtonProps = utils.mergeProps({
      className: buttonClassName,
      style: chooseOptions.style,
      tabIndex: 0,
      onMouseUp: onSimpleUploaderClick,
      onKeyDown: function onKeyDown(e) {
        return _onKeyDown(e);
      },
      onFocus: onFocus,
      onBlur: onBlur
    }, FileUploadBase.getOtherProps(props), ptm('basicButton'));
    return /*#__PURE__*/React__namespace.createElement("div", rootProps, /*#__PURE__*/React__namespace.createElement(messages.Messages, {
      ref: messagesRef,
      pt: ptm('message')
    }), /*#__PURE__*/React__namespace.createElement("span", basicButtonProps, chooseIcon, label, input, /*#__PURE__*/React__namespace.createElement(ripple.Ripple, null)));
  };
  if (props.mode === 'advanced') return createAdvanced();else if (props.mode === 'basic') return createBasic();
}));
FileUpload.displayName = 'FileUpload';

exports.p = FileUpload;


/***/ }),

/***/ 72035:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({ value: true }));

var React = __webpack_require__(18038);
var iconbase = __webpack_require__(76817);

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

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
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

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var ObjectUtils = /*#__PURE__*/function () {
  function ObjectUtils() {
    _classCallCheck(this, ObjectUtils);
  }
  _createClass(ObjectUtils, null, [{
    key: "equals",
    value: function equals(obj1, obj2, field) {
      if (field && obj1 && _typeof(obj1) === 'object' && obj2 && _typeof(obj2) === 'object') return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.deepEquals(obj1, obj2);
    }
  }, {
    key: "deepEquals",
    value: function deepEquals(a, b) {
      if (a === b) return true;
      if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
        var arrA = Array.isArray(a),
          arrB = Array.isArray(b),
          i,
          length,
          key;
        if (arrA && arrB) {
          length = a.length;
          if (length !== b.length) return false;
          for (i = length; i-- !== 0;) if (!this.deepEquals(a[i], b[i])) return false;
          return true;
        }
        if (arrA !== arrB) return false;
        var dateA = a instanceof Date,
          dateB = b instanceof Date;
        if (dateA !== dateB) return false;
        if (dateA && dateB) return a.getTime() === b.getTime();
        var regexpA = a instanceof RegExp,
          regexpB = b instanceof RegExp;
        if (regexpA !== regexpB) return false;
        if (regexpA && regexpB) return a.toString() === b.toString();
        var keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0;) {
          key = keys[i];
          if (!this.deepEquals(a[key], b[key])) return false;
        }
        return true;
      }

      /*eslint no-self-compare: "off"*/
      return a !== a && b !== b;
    }
  }, {
    key: "resolveFieldData",
    value: function resolveFieldData(data, field) {
      if (data && Object.keys(data).length && field) {
        if (this.isFunction(field)) {
          return field(data);
        } else if (ObjectUtils.isNotEmpty(data[field])) {
          return data[field];
        } else if (field.indexOf('.') === -1) {
          return data[field];
        } else {
          var fields = field.split('.');
          var value = data;
          for (var i = 0, len = fields.length; i < len; ++i) {
            if (value == null) {
              return null;
            }
            value = value[fields[i]];
          }
          return value;
        }
      } else {
        return null;
      }
    }
  }, {
    key: "isFunction",
    value: function isFunction(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    }
  }, {
    key: "isObject",
    value: function isObject(obj) {
      return obj !== null && obj instanceof Object && obj.constructor === Object;
    }
  }, {
    key: "isLetter",
    value: function isLetter(_char) {
      return _char && (_char.toUpperCase() != _char.toLowerCase() || _char.codePointAt(0) > 127);
    }
  }, {
    key: "findDiffKeys",
    value: function findDiffKeys(obj1, obj2) {
      if (!obj1 || !obj2) {
        return {};
      }
      return Object.keys(obj1).filter(function (key) {
        return !obj2.hasOwnProperty(key);
      }).reduce(function (result, current) {
        result[current] = obj1[current];
        return result;
      }, {});
    }

    /**
     * Removes keys from a JSON object that start with a string such as "data" to get all "data-id" type properties.
     *
     * @param {any} obj the JSON object to reduce
     * @param {string[]} startsWiths the string(s) to check if the property starts with this key
     * @returns the JSON object containing only the key/values that match the startsWith string
     */
  }, {
    key: "reduceKeys",
    value: function reduceKeys(obj, startsWiths) {
      var result = {};
      if (!obj || !startsWiths || startsWiths.length === 0) {
        return result;
      }
      Object.keys(obj).filter(function (key) {
        return startsWiths.some(function (value) {
          return key.startsWith(value);
        });
      }).forEach(function (key) {
        result[key] = obj[key];
        delete obj[key];
      });
      return result;
    }
  }, {
    key: "reorderArray",
    value: function reorderArray(value, from, to) {
      if (value && from !== to) {
        if (to >= value.length) {
          to %= value.length;
          from %= value.length;
        }
        value.splice(to, 0, value.splice(from, 1)[0]);
      }
    }
  }, {
    key: "findIndexInList",
    value: function findIndexInList(value, list, dataKey) {
      var _this = this;
      if (list) {
        return dataKey ? list.findIndex(function (item) {
          return _this.equals(item, value, dataKey);
        }) : list.findIndex(function (item) {
          return item === value;
        });
      }
      return -1;
    }
  }, {
    key: "getJSXElement",
    value: function getJSXElement(obj) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }
      return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
    }
  }, {
    key: "getProp",
    value: function getProp(props) {
      var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var value = props ? props[prop] : undefined;
      return value === undefined ? defaultProps[prop] : value;
    }
  }, {
    key: "getMergedProps",
    value: function getMergedProps(props, defaultProps) {
      return Object.assign({}, defaultProps, props);
    }
  }, {
    key: "getDiffProps",
    value: function getDiffProps(props, defaultProps) {
      return this.findDiffKeys(props, defaultProps);
    }
  }, {
    key: "getPropValue",
    value: function getPropValue(obj) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
    }
  }, {
    key: "getComponentProp",
    value: function getComponentProp(component) {
      var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.isNotEmpty(component) ? this.getProp(component.props, prop, defaultProps) : undefined;
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps(component, defaultProps) {
      return this.isNotEmpty(component) ? this.getMergedProps(component.props, defaultProps) : undefined;
    }
  }, {
    key: "getComponentDiffProps",
    value: function getComponentDiffProps(component, defaultProps) {
      return this.isNotEmpty(component) ? this.getDiffProps(component.props, defaultProps) : undefined;
    }
  }, {
    key: "isValidChild",
    value: function isValidChild(child, type, validTypes) {
      /* eslint-disable */
      if (child) {
        var childType = this.getComponentProp(child, '__TYPE') || (child.type ? child.type.displayName : undefined);
        var isValid = childType === type;
        try {
          var messageTypes; if (false) {}
        } catch (error) {
          // NOOP
        }
        return isValid;
      }
      return false;
      /* eslint-enable */
    }
  }, {
    key: "getRefElement",
    value: function getRefElement(ref) {
      if (ref) {
        return _typeof(ref) === 'object' && ref.hasOwnProperty('current') ? ref.current : ref;
      }
      return null;
    }
  }, {
    key: "combinedRefs",
    value: function combinedRefs(innerRef, forwardRef) {
      if (innerRef && forwardRef) {
        if (typeof forwardRef === 'function') {
          forwardRef(innerRef.current);
        } else {
          forwardRef.current = innerRef.current;
        }
      }
    }
  }, {
    key: "removeAccents",
    value: function removeAccents(str) {
      if (str && str.search(/[\xC0-\xFF]/g) > -1) {
        str = str.replace(/[\xC0-\xC5]/g, 'A').replace(/[\xC6]/g, 'AE').replace(/[\xC7]/g, 'C').replace(/[\xC8-\xCB]/g, 'E').replace(/[\xCC-\xCF]/g, 'I').replace(/[\xD0]/g, 'D').replace(/[\xD1]/g, 'N').replace(/[\xD2-\xD6\xD8]/g, 'O').replace(/[\xD9-\xDC]/g, 'U').replace(/[\xDD]/g, 'Y').replace(/[\xDE]/g, 'P').replace(/[\xE0-\xE5]/g, 'a').replace(/[\xE6]/g, 'ae').replace(/[\xE7]/g, 'c').replace(/[\xE8-\xEB]/g, 'e').replace(/[\xEC-\xEF]/g, 'i').replace(/[\xF1]/g, 'n').replace(/[\xF2-\xF6\xF8]/g, 'o').replace(/[\xF9-\xFC]/g, 'u').replace(/[\xFE]/g, 'p').replace(/[\xFD\xFF]/g, 'y');
      }
      return str;
    }
  }, {
    key: "convertToFlatCase",
    value: function convertToFlatCase(str) {
      // convert snake, kebab, camel and pascal cases to flat case
      return this.isNotEmpty(str) && typeof str === 'string' ? str.replace(/(-|_)/g, '').toLowerCase() : str;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return value === null || value === undefined || value === '' || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && _typeof(value) === 'object' && Object.keys(value).length === 0;
    }
  }, {
    key: "isNotEmpty",
    value: function isNotEmpty(value) {
      return !this.isEmpty(value);
    }
  }, {
    key: "sort",
    value: function sort(value1, value2) {
      var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var locale = arguments.length > 3 ? arguments[3] : undefined;
      var nullSortOrder = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var result = ObjectUtils.compare(value1, value2, locale, order);
      var finalSortOrder = order;

      // nullSortOrder == 1 means Excel like sort nulls at bottom
      if (ObjectUtils.isEmpty(value1) || ObjectUtils.isEmpty(value2)) {
        finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
      }
      return finalSortOrder * result;
    }
  }, {
    key: "compare",
    value: function compare(value1, value2, locale) {
      var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var result = -1;
      var emptyValue1 = ObjectUtils.isEmpty(value1);
      var emptyValue2 = ObjectUtils.isEmpty(value2);
      if (emptyValue1 && emptyValue2) result = 0;else if (emptyValue1) result = order;else if (emptyValue2) result = -order;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, locale, {
        numeric: true
      });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
      return result;
    }
  }]);
  return ObjectUtils;
}();

var lastId = 0;
function UniqueComponentId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pr_id_';
  lastId++;
  return "".concat(prefix).concat(lastId);
}

var UploadIcon = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
  var pti = iconbase.IconBase.getPTI(inProps);
  var _React$useState = React__namespace.useState(inProps.id),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    pathId = _React$useState2[0],
    setPathId = _React$useState2[1];
  React__namespace.useEffect(function () {
    if (ObjectUtils.isEmpty(pathId)) {
      setPathId(UniqueComponentId('pr_icon_clip_'));
    }
  }, [pathId]);
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    ref: ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#".concat(pathId, ")")
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",
    fill: "currentColor"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: pathId
  }, /*#__PURE__*/React__namespace.createElement("rect", {
    width: "14",
    height: "14",
    fill: "white"
  }))));
}));
UploadIcon.displayName = 'UploadIcon';

exports.UploadIcon = UploadIcon;


/***/ })

};
;