"use strict";
exports.id = 8991;
exports.ids = [8991];
exports.modules = {

/***/ 41774:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(18038);
var search = __webpack_require__(85583);
var spinner = __webpack_require__(71695);
var utils = __webpack_require__(7666);
var componentbase = __webpack_require__(87095);
var api = __webpack_require__(90284);
var check = __webpack_require__(15767);
var chevrondown = __webpack_require__(81399);
var chevronright = __webpack_require__(35665);
var minus = __webpack_require__(81620);
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

function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
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
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest();
}

var TreeBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'Tree',
    id: null,
    value: null,
    checkboxIcon: null,
    disabled: false,
    selectionMode: null,
    selectionKeys: null,
    onSelectionChange: null,
    contextMenuSelectionKey: null,
    onContextMenuSelectionChange: null,
    expandedKeys: null,
    style: null,
    className: null,
    contentStyle: null,
    contentClassName: null,
    metaKeySelection: true,
    propagateSelectionUp: true,
    propagateSelectionDown: true,
    loading: false,
    loadingIcon: null,
    expandIcon: null,
    collapseIcon: null,
    dragdropScope: null,
    header: null,
    footer: null,
    showHeader: true,
    filter: false,
    filterIcon: null,
    filterValue: null,
    filterBy: 'label',
    filterMode: 'lenient',
    filterPlaceholder: null,
    filterLocale: undefined,
    filterTemplate: null,
    nodeTemplate: null,
    togglerTemplate: null,
    onSelect: null,
    onUnselect: null,
    onExpand: null,
    onCollapse: null,
    onToggle: null,
    onDragDrop: null,
    onContextMenu: null,
    onFilterValueChange: null,
    onNodeClick: null,
    onNodeDoubleClick: null,
    children: undefined
  }
});

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var UITreeNode = /*#__PURE__*/React__namespace.memo(function (props) {
  var contentRef = React__namespace.useRef(null);
  var nodeTouched = React__namespace.useRef(false);
  var isLeaf = props.isNodeLeaf(props.node);
  var expanded = (props.expandedKeys ? props.expandedKeys[props.node.key] !== undefined : false) || props.node.expanded;
  var getPTOptions = function getPTOptions(key) {
    return props.ptm(key, {
      context: {
        selected: props.selected,
        expanded: expanded,
        checked: props.checked
      }
    });
  };
  var expand = function expand(event) {
    var expandedKeys = props.expandedKeys ? _objectSpread$1({}, props.expandedKeys) : {};
    expandedKeys[props.node.key] = true;
    props.onToggle({
      originalEvent: event,
      value: expandedKeys
    });
    invokeToggleEvents(event, true);
  };
  var collapse = function collapse(event) {
    var expandedKeys = _objectSpread$1({}, props.expandedKeys);
    delete expandedKeys[props.node.key];
    props.onToggle({
      originalEvent: event,
      value: expandedKeys
    });
    invokeToggleEvents(event, false);
  };
  var onTogglerClick = function onTogglerClick(event) {
    if (props.disabled) {
      return;
    }
    expanded ? collapse(event) : expand(event);
    event.preventDefault();
    event.stopPropagation();
  };
  var invokeToggleEvents = function invokeToggleEvents(event, isExpanded) {
    if (isExpanded) {
      if (props.onExpand) {
        props.onExpand({
          originalEvent: event,
          node: props.node
        });
      }
    } else {
      if (props.onCollapse) {
        props.onCollapse({
          originalEvent: event,
          node: props.node
        });
      }
    }
  };
  var onNodeKeyDown = function onNodeKeyDown(event) {
    if (props.disabled) {
      return;
    }
    var nodeElement = event.target.parentElement;
    if (!utils.DomHandler.hasClass(nodeElement, 'p-treenode')) {
      return;
    }
    switch (event.which) {
      //down arrow
      case 40:
        var listElement = nodeElement.children[1];
        if (listElement) {
          focusNode(listElement.children[0]);
        } else {
          var nextNodeElement = nodeElement.nextElementSibling;
          while (nextNodeElement) {
            if (!utils.DomHandler.hasClass(nextNodeElement, 'p-treenode-droppoint')) {
              break;
            }
            nextNodeElement = nextNodeElement.nextElementSibling;
          }
          if (nextNodeElement) {
            focusNode(nextNodeElement);
          } else {
            var nextSiblingAncestor = findNextSiblingOfAncestor(nodeElement);
            nextSiblingAncestor && focusNode(nextSiblingAncestor);
          }
        }
        event.preventDefault();
        break;

      //up arrow
      case 38:
        if (nodeElement.previousElementSibling) {
          focusNode(findLastVisibleDescendant(nodeElement.previousElementSibling));
        } else {
          var parentNodeElement = getParentNodeElement(nodeElement);
          parentNodeElement && focusNode(parentNodeElement);
        }
        event.preventDefault();
        break;

      //right arrow
      case 39:
        if (!expanded) {
          expand(event);
        }
        event.preventDefault();
        break;

      //left arrow
      case 37:
        if (expanded) {
          collapse(event);
        }
        event.preventDefault();
        break;

      //enter
      case 13:
        onClick(event);
        event.preventDefault();
        break;
    }
  };
  var findNextSiblingOfAncestor = function findNextSiblingOfAncestor(nodeElement) {
    var parentNodeElement = getParentNodeElement(nodeElement);
    return parentNodeElement ? parentNodeElement.nextElementSibling || findNextSiblingOfAncestor(parentNodeElement) : null;
  };
  var findLastVisibleDescendant = function findLastVisibleDescendant(nodeElement) {
    var childrenListElement = nodeElement.children[1];
    if (childrenListElement) {
      var lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
      return findLastVisibleDescendant(lastChildElement);
    } else {
      return nodeElement;
    }
  };
  var getParentNodeElement = function getParentNodeElement(nodeElement) {
    var parentNodeElement = nodeElement.parentElement.parentElement;
    return utils.DomHandler.hasClass(parentNodeElement, 'p-treenode') ? parentNodeElement : null;
  };
  var focusNode = function focusNode(element) {
    element && element.children[0] && element.children[0].focus();
  };
  var onClick = function onClick(event) {
    if (props.onClick) {
      props.onClick({
        originalEvent: event,
        node: props.node
      });
    }
    var targetNode = event.target.nodeName;
    if (props.disabled || targetNode === 'INPUT' || targetNode === 'BUTTON' || targetNode === 'A' || utils.DomHandler.hasClass(event.target, 'p-clickable')) {
      return;
    }
    if (props.selectionMode && props.node.selectable !== false) {
      var selectionKeys;
      if (isCheckboxSelectionMode()) {
        var checked = isChecked();
        selectionKeys = props.selectionKeys ? _objectSpread$1({}, props.selectionKeys) : {};
        if (checked) {
          if (props.propagateSelectionDown) propagateDown(props.node, false, selectionKeys);else delete selectionKeys[props.node.key];
          if (props.propagateSelectionUp && props.onPropagateUp) {
            props.onPropagateUp({
              originalEvent: event,
              check: false,
              selectionKeys: selectionKeys
            });
          }
          if (props.onUnselect) {
            props.onUnselect({
              originalEvent: event,
              node: props.node
            });
          }
        } else {
          if (props.propagateSelectionDown) propagateDown(props.node, true, selectionKeys);else selectionKeys[props.node.key] = {
            checked: true
          };
          if (props.propagateSelectionUp && props.onPropagateUp) {
            props.onPropagateUp({
              originalEvent: event,
              check: true,
              selectionKeys: selectionKeys
            });
          }
          if (props.onSelect) {
            props.onSelect({
              originalEvent: event,
              node: props.node
            });
          }
        }
      } else {
        var selected = isSelected();
        var metaSelection = nodeTouched.current ? false : props.metaKeySelection;
        if (metaSelection) {
          var metaKey = event.metaKey || event.ctrlKey;
          if (selected && metaKey) {
            if (isSingleSelectionMode()) {
              selectionKeys = null;
            } else {
              selectionKeys = _objectSpread$1({}, props.selectionKeys);
              delete selectionKeys[props.node.key];
            }
            if (props.onUnselect) {
              props.onUnselect({
                originalEvent: event,
                node: props.node
              });
            }
          } else {
            if (isSingleSelectionMode()) {
              selectionKeys = props.node.key;
            } else if (isMultipleSelectionMode()) {
              selectionKeys = !metaKey ? {} : props.selectionKeys ? _objectSpread$1({}, props.selectionKeys) : {};
              selectionKeys[props.node.key] = true;
            }
            if (props.onSelect) {
              props.onSelect({
                originalEvent: event,
                node: props.node
              });
            }
          }
        } else {
          if (isSingleSelectionMode()) {
            if (selected) {
              selectionKeys = null;
              if (props.onUnselect) {
                props.onUnselect({
                  originalEvent: event,
                  node: props.node
                });
              }
            } else {
              selectionKeys = props.node.key;
              if (props.onSelect) {
                props.onSelect({
                  originalEvent: event,
                  node: props.node
                });
              }
            }
          } else {
            if (selected) {
              selectionKeys = _objectSpread$1({}, props.selectionKeys);
              delete selectionKeys[props.node.key];
              if (props.onUnselect) {
                props.onUnselect({
                  originalEvent: event,
                  node: props.node
                });
              }
            } else {
              selectionKeys = props.selectionKeys ? _objectSpread$1({}, props.selectionKeys) : {};
              selectionKeys[props.node.key] = true;
              if (props.onSelect) {
                props.onSelect({
                  originalEvent: event,
                  node: props.node
                });
              }
            }
          }
        }
      }
      if (props.onSelectionChange) {
        props.onSelectionChange({
          originalEvent: event,
          value: selectionKeys
        });
      }
    }
    nodeTouched.current = false;
  };
  var onDoubleClick = function onDoubleClick(event) {
    if (props.onDoubleClick) {
      props.onDoubleClick({
        originalEvent: event,
        node: props.node
      });
    }
  };
  var onRightClick = function onRightClick(event) {
    if (props.disabled) {
      return;
    }
    utils.DomHandler.clearSelection();
    if (props.onContextMenuSelectionChange) {
      props.onContextMenuSelectionChange({
        originalEvent: event,
        value: props.node.key
      });
    }
    if (props.onContextMenu) {
      props.onContextMenu({
        originalEvent: event,
        node: props.node
      });
    }
  };
  var propagateUp = function propagateUp(event) {
    var check = event.check;
    var selectionKeys = event.selectionKeys;
    var checkedChildCount = 0;
    var childPartialSelected = false;
    var _iterator = _createForOfIteratorHelper$1(props.node.children),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;
        if (selectionKeys[child.key] && selectionKeys[child.key].checked) checkedChildCount++;else if (selectionKeys[child.key] && selectionKeys[child.key].partialChecked) childPartialSelected = true;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (check && checkedChildCount === props.node.children.length) {
      selectionKeys[props.node.key] = {
        checked: true,
        partialChecked: false
      };
    } else {
      if (!check) {
        delete selectionKeys[props.node.key];
      }
      if (childPartialSelected || checkedChildCount > 0 && checkedChildCount !== props.node.children.length) selectionKeys[props.node.key] = {
        checked: false,
        partialChecked: true
      };else delete selectionKeys[props.node.key];
    }
    if (props.propagateSelectionUp && props.onPropagateUp) {
      props.onPropagateUp(event);
    }
  };
  var propagateDown = function propagateDown(node, check, selectionKeys) {
    if (check) selectionKeys[node.key] = {
      checked: true,
      partialChecked: false
    };else delete selectionKeys[node.key];
    if (node.children && node.children.length) {
      for (var i = 0; i < node.children.length; i++) {
        propagateDown(node.children[i], check, selectionKeys);
      }
    }
  };
  var isSelected = function isSelected() {
    if (props.selectionMode && props.selectionKeys) return isSingleSelectionMode() ? props.selectionKeys === props.node.key : props.selectionKeys[props.node.key] !== undefined;else return false;
  };
  var isChecked = function isChecked() {
    return props.selectionKeys ? props.selectionKeys[props.node.key] && props.selectionKeys[props.node.key].checked : false;
  };
  var isPartialChecked = function isPartialChecked() {
    return props.selectionKeys ? props.selectionKeys[props.node.key] && props.selectionKeys[props.node.key].partialChecked : false;
  };
  var isSingleSelectionMode = function isSingleSelectionMode() {
    return props.selectionMode && props.selectionMode === 'single';
  };
  var isMultipleSelectionMode = function isMultipleSelectionMode() {
    return props.selectionMode && props.selectionMode === 'multiple';
  };
  var isCheckboxSelectionMode = function isCheckboxSelectionMode() {
    return props.selectionMode && props.selectionMode === 'checkbox';
  };
  var onTouchEnd = function onTouchEnd() {
    nodeTouched.current = true;
  };
  var onDropPoint = function onDropPoint(event, position) {
    event.preventDefault();
    if (props.node.droppable !== false) {
      utils.DomHandler.removeClass(event.target, 'p-treenode-droppoint-active');
      if (props.onDropPoint) {
        var dropIndex = position === -1 ? props.index : props.index + 1;
        props.onDropPoint({
          originalEvent: event,
          path: props.path,
          index: dropIndex,
          position: position
        });
      }
    }
  };
  var onDropPointDragOver = function onDropPointDragOver(event) {
    if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase()) {
      event.dataTransfer.dropEffect = 'move';
      event.preventDefault();
    }
  };
  var onDropPointDragEnter = function onDropPointDragEnter(event) {
    if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase()) {
      utils.DomHandler.addClass(event.target, 'p-treenode-droppoint-active');
    }
  };
  var onDropPointDragLeave = function onDropPointDragLeave(event) {
    if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase()) {
      utils.DomHandler.removeClass(event.target, 'p-treenode-droppoint-active');
    }
  };
  var onDrop = function onDrop(event) {
    if (props.dragdropScope && props.node.droppable !== false) {
      utils.DomHandler.removeClass(contentRef.current, 'p-treenode-dragover');
      event.preventDefault();
      event.stopPropagation();
      if (props.onDrop) {
        props.onDrop({
          originalEvent: event,
          path: props.path,
          index: props.index
        });
      }
    }
  };
  var onDragOver = function onDragOver(event) {
    if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase() && props.node.droppable !== false) {
      event.dataTransfer.dropEffect = 'move';
      event.preventDefault();
      event.stopPropagation();
    }
  };
  var onDragEnter = function onDragEnter(event) {
    if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase() && props.node.droppable !== false) {
      utils.DomHandler.addClass(contentRef.current, 'p-treenode-dragover');
    }
  };
  var onDragLeave = function onDragLeave(event) {
    if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase() && props.node.droppable !== false) {
      var rect = event.currentTarget.getBoundingClientRect();
      if (event.nativeEvent.x > rect.left + rect.width || event.nativeEvent.x < rect.left || event.nativeEvent.y >= Math.floor(rect.top + rect.height) || event.nativeEvent.y < rect.top) {
        utils.DomHandler.removeClass(contentRef.current, 'p-treenode-dragover');
      }
    }
  };
  var onDragStart = function onDragStart(event) {
    event.dataTransfer.setData('text', props.dragdropScope);
    event.dataTransfer.setData(props.dragdropScope, props.dragdropScope);
    if (props.onDragStart) {
      props.onDragStart({
        originalEvent: event,
        path: props.path,
        index: props.index
      });
    }
  };
  var onDragEnd = function onDragEnd(event) {
    if (props.onDragEnd) {
      props.onDragEnd({
        originalEvent: event
      });
    }
  };
  var createLabel = function createLabel() {
    var labelProps = utils.mergeProps({
      className: 'p-treenode-label'
    }, getPTOptions('label'));
    var content = /*#__PURE__*/React__namespace.createElement("span", labelProps, props.node.label);
    if (props.nodeTemplate) {
      var defaultContentOptions = {
        onTogglerClick: onTogglerClick,
        className: 'p-treenode-label',
        element: content,
        props: props,
        expanded: expanded
      };
      content = utils.ObjectUtils.getJSXElement(props.nodeTemplate, props.node, defaultContentOptions);
    }
    return content;
  };
  var createCheckbox = function createCheckbox() {
    if (isCheckboxSelectionMode() && props.node.selectable !== false) {
      var checked = isChecked();
      var partialChecked = isPartialChecked();
      var className = utils.classNames('p-checkbox-box', {
        'p-highlight': checked,
        'p-indeterminate': partialChecked,
        'p-disabled': props.disabled
      });
      var iconClassName = 'p-checkbox-icon p-c';
      var checkboxIconProps = utils.mergeProps({
        className: iconClassName
      }, getPTOptions('checkboxIcon'));
      var icon = checked ? props.checkboxIcon || /*#__PURE__*/React__namespace.createElement(check.CheckIcon, checkboxIconProps) : partialChecked ? props.checkboxIcon || /*#__PURE__*/React__namespace.createElement(minus.MinusIcon, checkboxIconProps) : null;
      var checkboxIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread$1({}, checkboxIconProps), props);
      var checkboxContainerProps = utils.mergeProps({
        className: 'p-checkbox p-component'
      }, getPTOptions('checkboxContainer'));
      var checkboxProps = utils.mergeProps({
        className: className,
        role: 'checkbox',
        'aria-checked': checked
      }, getPTOptions('checkbox'));
      return /*#__PURE__*/React__namespace.createElement("div", checkboxContainerProps, /*#__PURE__*/React__namespace.createElement("div", checkboxProps, checkboxIcon));
    }
    return null;
  };
  var createIcon = function createIcon() {
    var icon = props.node.icon || (expanded ? props.node.expandedIcon : props.node.collapsedIcon);
    if (icon) {
      var className = utils.classNames('p-treenode-icon', icon);
      var nodeIconProps = utils.mergeProps({
        className: className
      }, getPTOptions('nodeIcon'));
      return /*#__PURE__*/React__namespace.createElement("span", nodeIconProps);
    }
    return null;
  };
  var createToggler = function createToggler() {
    var label = expanded ? api.ariaLabel('collapseLabel') : api.ariaLabel('expandLabel');
    var iconProps = {
      className: 'p-tree-toggler-icon',
      'aria-hidden': true
    };
    var togglerIconProps = utils.mergeProps({
      className: iconProps
    }, getPTOptions('togglerIcon'));
    var icon = expanded ? props.collapseIcon || /*#__PURE__*/React__namespace.createElement(chevrondown.ChevronDownIcon, togglerIconProps) : props.expandIcon || /*#__PURE__*/React__namespace.createElement(chevronright.ChevronRightIcon, togglerIconProps);
    var togglerIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread$1({}, togglerIconProps), {
      props: props,
      expanded: expanded
    });
    var togglerProps = utils.mergeProps({
      type: 'button',
      className: 'p-tree-toggler p-link',
      tabIndex: -1,
      onClick: onTogglerClick,
      'aria-label': label
    }, getPTOptions('toggler'));
    var content = /*#__PURE__*/React__namespace.createElement("button", togglerProps, togglerIcon, /*#__PURE__*/React__namespace.createElement(ripple.Ripple, null));
    if (props.togglerTemplate) {
      var defaultContentOptions = {
        onClick: onTogglerClick,
        containerClassName: 'p-tree-toggler p-link',
        iconClassName: 'p-tree-toggler-icon',
        element: content,
        props: props,
        expanded: expanded
      };
      content = utils.ObjectUtils.getJSXElement(props.togglerTemplate, props.node, defaultContentOptions);
    }
    return content;
  };
  var createDropPoint = function createDropPoint(position) {
    if (props.dragdropScope) {
      var droppointProps = utils.mergeProps({
        className: 'p-treenode-droppoint',
        onDrop: function onDrop(event) {
          return onDropPoint(event, position);
        },
        onDragOver: onDropPointDragOver,
        onDragEnter: onDropPointDragEnter,
        onDragLeave: onDropPointDragLeave
      }, getPTOptions('droppoint'));
      return /*#__PURE__*/React__namespace.createElement("li", droppointProps);
    }
    return null;
  };
  var createContent = function createContent() {
    var selected = isSelected();
    var checked = isChecked();
    var className = utils.classNames('p-treenode-content', props.node.className, {
      'p-treenode-selectable': props.selectionMode && props.node.selectable !== false,
      'p-highlight': isCheckboxSelectionMode() ? checked : selected,
      'p-highlight-contextmenu': props.contextMenuSelectionKey && props.contextMenuSelectionKey === props.node.key,
      'p-disabled': props.disabled
    });
    var toggler = createToggler();
    var checkbox = createCheckbox();
    var icon = createIcon();
    var label = createLabel();
    var tabIndex = props.disabled ? undefined : 0;
    var contentProps = utils.mergeProps({
      ref: contentRef,
      className: className,
      style: props.node.style,
      onClick: onClick,
      onDoubleClick: onDoubleClick,
      onContextMenu: onRightClick,
      onTouchEnd: onTouchEnd,
      draggable: props.dragdropScope && props.node.draggable !== false && !props.disabled,
      onDrop: onDrop,
      onDragOver: onDragOver,
      onDragEnter: onDragEnter,
      onDragLeave: onDragLeave,
      onDragStart: onDragStart,
      onDragEnd: onDragEnd,
      tabIndex: tabIndex,
      onKeyDown: onNodeKeyDown,
      role: 'treeitem',
      'aria-posinset': props.index + 1,
      'aria-expanded': expanded,
      'aria-selected': checked || selected
    }, getPTOptions('content'));
    return /*#__PURE__*/React__namespace.createElement("div", contentProps, toggler, checkbox, icon, label);
  };
  var createChildren = function createChildren() {
    var subgroupProps = utils.mergeProps({
      className: 'p-treenode-children',
      role: 'group'
    }, getPTOptions('subgroup'));
    if (utils.ObjectUtils.isNotEmpty(props.node.children) && expanded) {
      return /*#__PURE__*/React__namespace.createElement("ul", subgroupProps, props.node.children.map(function (childNode, index) {
        return /*#__PURE__*/React__namespace.createElement(UITreeNode, {
          key: childNode.key || childNode.label,
          node: childNode,
          parent: props.node,
          index: index,
          last: index === props.node.children.length - 1,
          path: props.path + '-' + index,
          disabled: props.disabled,
          selectionMode: props.selectionMode,
          selectionKeys: props.selectionKeys,
          onSelectionChange: props.onSelectionChange,
          metaKeySelection: props.metaKeySelection,
          propagateSelectionDown: props.propagateSelectionDown,
          propagateSelectionUp: props.propagateSelectionUp,
          contextMenuSelectionKey: props.contextMenuSelectionKey,
          onContextMenuSelectionChange: props.onContextMenuSelectionChange,
          onContextMenu: props.onContextMenu,
          onExpand: props.onExpand,
          onCollapse: props.onCollapse,
          onSelect: props.onSelect,
          onUnselect: props.onUnselect,
          onClick: props.onClick,
          onDoubleClick: props.onDoubleClick,
          expandedKeys: props.expandedKeys,
          onToggle: props.onToggle,
          onPropagateUp: propagateUp,
          nodeTemplate: props.nodeTemplate,
          togglerTemplate: props.togglerTemplate,
          isNodeLeaf: props.isNodeLeaf,
          dragdropScope: props.dragdropScope,
          onDragStart: props.onDragStart,
          onDragEnd: props.onDragEnd,
          onDrop: props.onDrop,
          onDropPoint: props.onDropPoint,
          ptm: props.ptm
        });
      }));
    }
    return null;
  };
  var createNode = function createNode() {
    var className = utils.classNames('p-treenode', {
      'p-treenode-leaf': isLeaf
    }, props.node.className);
    var content = createContent();
    var children = createChildren();
    var nodeProps = utils.mergeProps({
      className: className,
      style: props.node.style
    }, getPTOptions('node'));
    return /*#__PURE__*/React__namespace.createElement("li", nodeProps, content, children);
  };
  var node = createNode();
  if (props.dragdropScope && !props.disabled) {
    var beforeDropPoint = createDropPoint(-1);
    var afterDropPoint = props.last ? createDropPoint(1) : null;
    return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, beforeDropPoint, node, afterDropPoint);
  }
  return node;
});
UITreeNode.displayName = 'UITreeNode';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var Tree = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
  var context = React__namespace.useContext(api.PrimeReactContext);
  var props = TreeBase.getProps(inProps, context);
  var _React$useState = React__namespace.useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    filterValueState = _React$useState2[0],
    setFilterValueState = _React$useState2[1];
  var _React$useState3 = React__namespace.useState(props.expandedKeys),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    expandedKeysState = _React$useState4[0],
    setExpandedKeysState = _React$useState4[1];
  var elementRef = React__namespace.useRef(null);
  var filteredNodes = React__namespace.useRef([]);
  var dragState = React__namespace.useRef(null);
  var filterChanged = React__namespace.useRef(false);
  var filteredValue = props.onFilterValueChange ? props.filterValue : filterValueState;
  var expandedKeys = props.onToggle ? props.expandedKeys : expandedKeysState;
  var _TreeBase$setMetaData = TreeBase.setMetaData({
      props: props,
      state: {
        filterValue: filteredValue,
        expandedKeys: expandedKeys
      }
    }),
    ptm = _TreeBase$setMetaData.ptm;
  var filterOptions = {
    filter: function filter(e) {
      return onFilterInputChange(e);
    },
    reset: function reset() {
      return resetFilter();
    }
  };
  var getRootNode = function getRootNode() {
    return props.filter && filteredNodes.current ? filteredNodes.current : props.value;
  };
  var onToggle = function onToggle(event) {
    if (props.onToggle) {
      props.onToggle(event);
    } else {
      setExpandedKeysState(event.value);
    }
  };
  var onDragStart = function onDragStart(event) {
    dragState.current = {
      path: event.path,
      index: event.index
    };
  };
  var onDragEnd = function onDragEnd() {
    dragState.current = null;
  };
  var onDrop = function onDrop(event) {
    if (validateDropNode(dragState.current.path, event.path)) {
      var value = JSON.parse(JSON.stringify(props.value));
      var dragPaths = dragState.current.path.split('-');
      dragPaths.pop();
      var dragNodeParent = findNode(value, dragPaths);
      var dragNode = dragNodeParent ? dragNodeParent.children[dragState.current.index] : value[dragState.current.index];
      var dropNode = findNode(value, event.path.split('-'));
      if (dropNode.children) dropNode.children.push(dragNode);else dropNode.children = [dragNode];
      if (dragNodeParent) dragNodeParent.children.splice(dragState.current.index, 1);else value.splice(dragState.current.index, 1);
      if (props.onDragDrop) {
        props.onDragDrop({
          originalEvent: event.originalEvent,
          value: value,
          dragNode: dragNode,
          dropNode: dropNode,
          dropIndex: event.index
        });
      }
    }
  };
  var onDropPoint = function onDropPoint(event) {
    if (validateDropPoint(event)) {
      var value = JSON.parse(JSON.stringify(props.value));
      var dragPaths = dragState.current.path.split('-');
      dragPaths.pop();
      var dropPaths = event.path.split('-');
      dropPaths.pop();
      var dragNodeParent = findNode(value, dragPaths);
      var dropNodeParent = findNode(value, dropPaths);
      var dragNode = dragNodeParent ? dragNodeParent.children[dragState.current.index] : value[dragState.current.index];
      var siblings = areSiblings(dragState.current.path, event.path);
      if (dragNodeParent) dragNodeParent.children.splice(dragState.current.index, 1);else value.splice(dragState.current.index, 1);
      if (event.position < 0) {
        var dropIndex = siblings ? dragState.current.index > event.index ? event.index : event.index - 1 : event.index;
        if (dropNodeParent) dropNodeParent.children.splice(dropIndex, 0, dragNode);else value.splice(dropIndex, 0, dragNode);
      } else {
        if (dropNodeParent) dropNodeParent.children.push(dragNode);else value.push(dragNode);
      }
      if (props.onDragDrop) {
        props.onDragDrop({
          originalEvent: event.originalEvent,
          value: value,
          dragNode: dragNode,
          dropNode: dropNodeParent,
          dropIndex: event.index
        });
      }
    }
  };
  var validateDrop = function validateDrop(dragPath, dropPath) {
    if (!dragPath) {
      return false;
    } else {
      //same node
      if (dragPath === dropPath) {
        return false;
      }

      //parent dropped on an descendant
      if (dropPath.indexOf(dragPath) === 0) {
        return false;
      }
      return true;
    }
  };
  var validateDropNode = function validateDropNode(dragPath, dropPath) {
    var _validateDrop = validateDrop(dragPath, dropPath);
    if (_validateDrop) {
      //child dropped on parent
      if (dragPath.indexOf('-') > 0 && dragPath.substring(0, dragPath.lastIndexOf('-')) === dropPath) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  };
  var validateDropPoint = function validateDropPoint(event) {
    var _validateDrop = validateDrop(dragState.current.path, event.path);
    if (_validateDrop) {
      //child dropped to next sibling's drop point
      if (event.position === -1 && areSiblings(dragState.current.path, event.path) && dragState.current.index + 1 === event.index) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  };
  var areSiblings = function areSiblings(path1, path2) {
    if (path1.length === 1 && path2.length === 1) return true;else return path1.substring(0, path1.lastIndexOf('-')) === path2.substring(0, path2.lastIndexOf('-'));
  };
  var findNode = function findNode(value, path) {
    if (path.length === 0) {
      return null;
    } else {
      var index = parseInt(path[0], 10);
      var nextSearchRoot = value.children ? value.children[index] : value[index];
      if (path.length === 1) {
        return nextSearchRoot;
      } else {
        path.shift();
        return findNode(nextSearchRoot, path);
      }
    }
  };
  var isNodeLeaf = function isNodeLeaf(node) {
    return node.leaf === false ? false : !(node.children && node.children.length);
  };
  var onFilterInputKeyDown = function onFilterInputKeyDown(event) {
    //enter
    if (event.which === 13) {
      event.preventDefault();
    }
  };
  var onFilterInputChange = function onFilterInputChange(event) {
    filterChanged.current = true;
    var value = event.target.value;
    if (props.onFilterValueChange) {
      props.onFilterValueChange({
        originalEvent: event,
        value: value
      });
    } else {
      setFilterValueState(value);
    }
  };
  var filter = function filter(value) {
    setFilterValueState(utils.ObjectUtils.isNotEmpty(value) ? value : '');
    _filter();
  };
  var _filter = function _filter() {
    if (!filterChanged.current) {
      return;
    }
    if (utils.ObjectUtils.isEmpty(filteredValue)) {
      filteredNodes.current = props.value;
    } else {
      filteredNodes.current = [];
      var searchFields = props.filterBy.split(',');
      var filterText = filteredValue.toLocaleLowerCase(props.filterLocale);
      var isStrictMode = props.filterMode === 'strict';
      var _iterator = _createForOfIteratorHelper(props.value),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var node = _step.value;
          var copyNode = _objectSpread({}, node);
          var paramsWithoutNode = {
            searchFields: searchFields,
            filterText: filterText,
            isStrictMode: isStrictMode
          };
          if (isStrictMode && (findFilteredNodes(copyNode, paramsWithoutNode) || isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && (isFilterMatched(copyNode, paramsWithoutNode) || findFilteredNodes(copyNode, paramsWithoutNode))) {
            filteredNodes.current.push(copyNode);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    filterChanged.current = false;
  };
  var findFilteredNodes = function findFilteredNodes(node, paramsWithoutNode) {
    if (node) {
      var matched = false;
      if (node.children) {
        var childNodes = _toConsumableArray(node.children);
        node.children = [];
        var _iterator2 = _createForOfIteratorHelper(childNodes),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var childNode = _step2.value;
            var copyChildNode = _objectSpread({}, childNode);
            if (isFilterMatched(copyChildNode, paramsWithoutNode)) {
              matched = true;
              node.children.push(copyChildNode);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      if (matched) {
        node.expanded = true;
        return true;
      }
    }
  };
  var isFilterMatched = function isFilterMatched(node, _ref) {
    var searchFields = _ref.searchFields,
      filterText = _ref.filterText,
      isStrictMode = _ref.isStrictMode;
    var matched = false;
    var _iterator3 = _createForOfIteratorHelper(searchFields),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var field = _step3.value;
        var fieldValue = String(utils.ObjectUtils.resolveFieldData(node, field)).toLocaleLowerCase(props.filterLocale);
        if (fieldValue.indexOf(filterText) > -1) {
          matched = true;
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (!matched || isStrictMode && !isNodeLeaf(node)) {
      matched = findFilteredNodes(node, {
        searchFields: searchFields,
        filterText: filterText,
        isStrictMode: isStrictMode
      }) || matched;
    }
    return matched;
  };
  var resetFilter = function resetFilter() {
    setFilterValueState('');
  };
  React__namespace.useImperativeHandle(ref, function () {
    return {
      props: props,
      filter: filter,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var createRootChild = function createRootChild(node, index, last) {
    return /*#__PURE__*/React__namespace.createElement(UITreeNode, {
      key: node.key || node.label,
      node: node,
      index: index,
      last: last,
      path: String(index),
      checkboxIcon: props.checkboxIcon,
      expandIcon: props.expandIcon,
      collapseIcon: props.collapseIcon,
      disabled: props.disabled,
      selectionMode: props.selectionMode,
      selectionKeys: props.selectionKeys,
      onSelectionChange: props.onSelectionChange,
      metaKeySelection: props.metaKeySelection,
      contextMenuSelectionKey: props.contextMenuSelectionKey,
      onContextMenuSelectionChange: props.onContextMenuSelectionChange,
      onContextMenu: props.onContextMenu,
      propagateSelectionDown: props.propagateSelectionDown,
      propagateSelectionUp: props.propagateSelectionUp,
      onExpand: props.onExpand,
      onCollapse: props.onCollapse,
      onSelect: props.onSelect,
      onUnselect: props.onUnselect,
      expandedKeys: expandedKeys,
      onToggle: onToggle,
      nodeTemplate: props.nodeTemplate,
      togglerTemplate: props.togglerTemplate,
      isNodeLeaf: isNodeLeaf,
      dragdropScope: props.dragdropScope,
      onDragStart: onDragStart,
      onDragEnd: onDragEnd,
      onDrop: onDrop,
      onDropPoint: onDropPoint,
      onClick: props.onNodeClick,
      onDoubleClick: props.onNodeDoubleClick,
      ptm: ptm
    });
  };
  var createRootChildren = function createRootChildren() {
    if (props.filter) {
      filterChanged.current = true;
      _filter();
    }
    var value = getRootNode();
    return value.map(function (node, index) {
      return createRootChild(node, index, index === value.length - 1);
    });
  };
  var createModel = function createModel() {
    if (props.value) {
      var rootNodes = createRootChildren();
      var contentClass = utils.classNames('p-tree-container', props.contentClassName);
      var containerProps = utils.mergeProps(_objectSpread({
        className: contentClass,
        role: 'tree',
        style: props.contentStyle
      }, ariaProps), ptm('container'));
      return /*#__PURE__*/React__namespace.createElement("ul", containerProps, rootNodes);
    }
    return null;
  };
  var createLoader = function createLoader() {
    if (props.loading) {
      var iconClassName = 'p-tree-loading-icon';
      var loadingIconProps = utils.mergeProps({
        className: iconClassName
      }, ptm('loadingIcon'));
      var icon = props.loadingIcon || /*#__PURE__*/React__namespace.createElement(spinner.SpinnerIcon, _extends({}, loadingIconProps, {
        spin: true
      }));
      var loadingIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread({}, loadingIconProps), {
        props: props
      });
      var loadingOverlayProps = utils.mergeProps({
        className: 'p-tree-loading-overlay p-component-overlay'
      }, ptm('loadingOverlay'));
      return /*#__PURE__*/React__namespace.createElement("div", loadingOverlayProps, loadingIcon);
    }
    return null;
  };
  var createFilter = function createFilter() {
    if (props.filter) {
      var value = utils.ObjectUtils.isNotEmpty(filteredValue) ? filteredValue : '';
      var iconClassName = 'p-tree-filter-icon';
      var searchIconProps = utils.mergeProps({
        className: iconClassName
      }, ptm('searchIcon'));
      var icon = props.filterIcon || /*#__PURE__*/React__namespace.createElement(search.SearchIcon, searchIconProps);
      var filterIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread({}, searchIconProps), {
        props: props
      });
      var filterContainerProps = utils.mergeProps({
        className: 'p-tree-filter-container'
      }, ptm('filterContainer'));
      var inputProps = utils.mergeProps({
        type: 'text',
        value: value,
        autoComplete: 'off',
        className: 'p-tree-filter p-inputtext p-component',
        placeholder: props.filterPlaceholder,
        onKeyDown: onFilterInputKeyDown,
        onChange: onFilterInputChange,
        disabled: props.disabled
      }, ptm('input'));
      var _content = /*#__PURE__*/React__namespace.createElement("div", filterContainerProps, /*#__PURE__*/React__namespace.createElement("input", inputProps), filterIcon);
      if (props.filterTemplate) {
        var defaultContentOptions = {
          className: 'p-tree-filter-container',
          element: _content,
          filterOptions: filterOptions,
          filterInputKeyDown: onFilterInputKeyDown,
          filterInputChange: onFilterInputChange,
          filterIconClassName: 'p-dropdown-filter-icon',
          props: props
        };
        _content = utils.ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
      }
      return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, _content);
    }
    return null;
  };
  var createHeader = function createHeader() {
    if (props.showHeader) {
      var filterElement = createFilter();
      var _content2 = filterElement;
      if (props.header) {
        var defaultContentOptions = {
          filterContainerClassName: 'p-tree-filter-container',
          filterIconClassName: 'p-tree-filter-icon',
          filterInput: {
            className: 'p-tree-filter p-inputtext p-component',
            onKeyDown: onFilterInputKeyDown,
            onChange: onFilterInputChange
          },
          filterElement: filterElement,
          element: _content2,
          props: props
        };
        _content2 = utils.ObjectUtils.getJSXElement(props.header, defaultContentOptions);
      }
      var headerProps = utils.mergeProps({
        className: 'p-tree-header'
      }, ptm('header'));
      return /*#__PURE__*/React__namespace.createElement("div", headerProps, _content2);
    }
    return null;
  };
  var createFooter = function createFooter() {
    var content = utils.ObjectUtils.getJSXElement(props.footer, props);
    var footerProps = utils.mergeProps({
      className: 'p-tree-footer'
    }, ptm('footer'));
    return /*#__PURE__*/React__namespace.createElement("div", footerProps, content);
  };
  var otherProps = TreeBase.getOtherProps(props);
  var ariaProps = utils.ObjectUtils.reduceKeys(otherProps, utils.DomHandler.ARIA_PROPS);
  var className = utils.classNames('p-tree p-component', props.className, {
    'p-tree-selectable': props.selectionMode,
    'p-tree-loading': props.loading,
    'p-disabled': props.disabled
  });
  var loader = createLoader();
  var content = createModel();
  var header = createHeader();
  var footer = createFooter();
  var rootProps = utils.mergeProps({
    ref: elementRef,
    className: className,
    style: props.style,
    id: props.id
  }, TreeBase.getOtherProps(props), ptm('root'));
  return /*#__PURE__*/React__namespace.createElement("div", rootProps, loader, header, content, footer);
}));
Tree.displayName = 'Tree';

exports.m = Tree;


/***/ }),

/***/ 6427:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(18038);
var PrimeReact = __webpack_require__(90284);
var componentbase = __webpack_require__(87095);
var utils = __webpack_require__(7666);
var hooks = __webpack_require__(85215);
var arrowdown = __webpack_require__(18677);
var arrowup = __webpack_require__(95781);
var spinner = __webpack_require__(71695);
var paginator = __webpack_require__(11003);
var ripple = __webpack_require__(26412);
var overlayservice = __webpack_require__(19232);
var chevrondown = __webpack_require__(81399);
var chevronright = __webpack_require__(35665);
var check = __webpack_require__(15767);
var minus = __webpack_require__(81620);
var inputtext = __webpack_require__(71785);
var tooltip = __webpack_require__(64935);
var sortalt = __webpack_require__(74482);
var sortamountdown = __webpack_require__(60554);
var sortamountupalt = __webpack_require__(86641);

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

function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$4(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$4(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableSpread();
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
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$4(arr, i) || _nonIterableRest();
}

var ColumnBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'Column',
    align: null,
    alignFrozen: 'left',
    alignHeader: null,
    body: null,
    bodyClassName: null,
    bodyStyle: null,
    cellEditValidator: null,
    cellEditValidatorEvent: 'click',
    className: null,
    colSpan: null,
    columnKey: null,
    dataType: 'text',
    editor: null,
    excludeGlobalFilter: false,
    expander: false,
    exportField: null,
    exportable: true,
    field: null,
    filter: false,
    filterApply: null,
    filterClear: null,
    filterElement: null,
    filterField: null,
    filterFooter: null,
    filterFunction: null,
    filterHeader: null,
    filterHeaderClassName: null,
    filterHeaderStyle: null,
    filterMatchMode: null,
    filterMatchModeOptions: null,
    filterMaxLength: null,
    filterMenuClassName: null,
    filterMenuStyle: null,
    filterPlaceholder: null,
    filterType: 'text',
    footer: null,
    footerClassName: null,
    footerStyle: null,
    frozen: false,
    header: null,
    headerClassName: null,
    headerStyle: null,
    headerTooltip: null,
    headerTooltipOptions: null,
    hidden: false,
    maxConstraints: 2,
    onBeforeCellEditHide: null,
    onBeforeCellEditShow: null,
    onCellEditCancel: null,
    onCellEditComplete: null,
    onCellEditInit: null,
    onFilterApplyClick: null,
    onFilterClear: null,
    onFilterConstraintAdd: null,
    onFilterConstraintRemove: null,
    onFilterMatchModeChange: null,
    onFilterOperatorChange: null,
    reorderable: true,
    resizeable: true,
    rowEditor: false,
    rowReorder: false,
    rowReorderIcon: null,
    rowSpan: null,
    selectionMode: null,
    showAddButton: true,
    showApplyButton: true,
    showClearButton: true,
    showFilterMatchModes: true,
    showFilterMenu: true,
    showFilterMenuOptions: true,
    showFilterOperator: true,
    sortField: null,
    sortFunction: null,
    sortable: false,
    sortableDisabled: false,
    style: null,
    children: undefined
  },
  getCProp: function getCProp(column, name) {
    return utils.ObjectUtils.getComponentProp(column, name, ColumnBase.defaultProps);
  },
  getCProps: function getCProps(column) {
    return utils.ObjectUtils.getComponentProps(column, ColumnBase.defaultProps);
  },
  getCOtherProps: function getCOtherProps(column) {
    return utils.ObjectUtils.getComponentDiffProps(column, ColumnBase.defaultProps);
  }
});

var TreeTableBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'TreeTable',
    alwaysShowPaginator: true,
    checkboxIcon: null,
    className: null,
    columnResizeMode: 'fit',
    contextMenuSelectionKey: null,
    currentPageReportTemplate: '({currentPage} of {totalPages})',
    defaultSortOrder: 1,
    emptyMessage: null,
    expandedKeys: null,
    filterDelay: 300,
    filterLocale: undefined,
    filterMode: 'lenient',
    filters: null,
    first: null,
    footer: null,
    footerColumnGroup: null,
    frozenFooterColumnGroup: null,
    frozenHeaderColumnGroup: null,
    frozenWidth: null,
    globalFilter: null,
    globalFilterMatchMode: PrimeReact.FilterMatchMode.CONTAINS,
    header: null,
    headerColumnGroup: null,
    id: null,
    lazy: false,
    loading: false,
    loadingIcon: null,
    metaKeySelection: true,
    multiSortMeta: null,
    onColReorder: null,
    onCollapse: null,
    onColumnResizeEnd: null,
    onContextMenu: null,
    onContextMenuSelectionChange: null,
    onExpand: null,
    onFilter: null,
    onPage: null,
    onRowClick: null,
    onRowMouseEnter: null,
    onRowMouseLeave: null,
    onSelect: null,
    onSelectionChange: null,
    onSort: null,
    onToggle: null,
    onUnselect: null,
    pageLinkSize: 5,
    paginator: false,
    paginatorClassName: null,
    paginatorDropdownAppendTo: null,
    paginatorLeft: null,
    paginatorPosition: 'bottom',
    paginatorRight: null,
    paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
    propagateSelectionDown: true,
    propagateSelectionUp: true,
    removableSort: false,
    reorderableColumns: false,
    reorderIndicatorDownIcon: null,
    reorderIndicatorUpIcon: null,
    resizableColumns: false,
    rowClassName: null,
    rowHover: false,
    rows: null,
    rowsPerPageOptions: null,
    scrollHeight: null,
    scrollable: false,
    selectOnEdit: true,
    selectionKeys: null,
    selectionMode: null,
    showGridlines: false,
    sortField: null,
    sortMode: 'single',
    sortIcon: null,
    sortOrder: null,
    stripedRows: false,
    style: null,
    tabIndex: 0,
    tableClassName: null,
    tableStyle: null,
    totalRecords: null,
    value: null,
    children: undefined
  }
});

var TreeTableBodyCell = function TreeTableBodyCell(props) {
  var _React$useState = React__namespace.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    editingState = _React$useState2[0],
    setEditingState = _React$useState2[1];
  var elementRef = React__namespace.useRef(null);
  var keyHelperRef = React__namespace.useRef(null);
  var selfClick = React__namespace.useRef(false);
  var overlayEventListener = React__namespace.useRef(null);
  var tabIndexTimeout = React__namespace.useRef(null);
  var getColumnProp = function getColumnProp(name) {
    return ColumnBase.getCProp(props.column, name);
  };
  var getColumnProps = function getColumnProps(column) {
    return ColumnBase.getCProps(column);
  };
  var getColumnPTOptions = function getColumnPTOptions(key) {
    var cProps = getColumnProps(props.column);
    return props.ptCallbacks.ptmo(getColumnProp('pt'), key, {
      props: cProps,
      parent: props.metaData,
      state: {
        editing: editingState
      }
    });
  };
  var _useEventListener = hooks.useEventListener({
      type: 'click',
      listener: function listener(e) {
        if (!selfClick.current && isOutsideClicked(e.target)) {
          switchCellToViewMode(e);
        }
        selfClick.current = false;
      }
    }),
    _useEventListener2 = _slicedToArray(_useEventListener, 2),
    bindDocumentClickListener = _useEventListener2[0],
    unbindDocumentClickListener = _useEventListener2[1];
  var _onClick = function onClick() {
    if (props.editor && !editingState && (props.selectOnEdit || !props.selectOnEdit && props.selected)) {
      selfClick.current = true;
      setEditingState(true);
      bindDocumentClickListener();
      overlayEventListener.current = function (e) {
        if (!isOutsideClicked(e.target)) {
          selfClick.current = true;
        }
      };
      overlayservice.OverlayService.on('overlay-click', overlayEventListener.current);
    }
  };
  var _onKeyDown = function onKeyDown(event) {
    if (event.which === 13 || event.which === 9) {
      switchCellToViewMode(event);
    }
  };
  var isOutsideClicked = function isOutsideClicked(target) {
    return elementRef.current && !(elementRef.current.isSameNode(target) || elementRef.current.contains(target));
  };
  var closeCell = function closeCell() {
    /* When using the 'tab' key, the focus event of the next cell is not called in IE. */
    setTimeout(function () {
      setEditingState(false);
      unbindDocumentClickListener();
      overlayservice.OverlayService.off('overlay-click', overlayEventListener.current);
      overlayEventListener.current = null;
    }, 1);
  };
  var onEditorFocus = function onEditorFocus(event) {
    _onClick();
  };
  var switchCellToViewMode = function switchCellToViewMode(event) {
    if (props.cellEditValidator) {
      var valid = props.cellEditValidator({
        originalEvent: event,
        columnProps: props
      });
      if (valid) {
        closeCell();
      }
    } else {
      closeCell();
    }
  };
  React__namespace.useEffect(function () {
    if (elementRef.current && props.editor) {
      clearTimeout(tabIndexTimeout.current);
      if (editingState) {
        var focusable = utils.DomHandler.findSingle(elementRef.current, 'input');
        if (focusable && document.activeElement !== focusable && !focusable.hasAttribute('data-isCellEditing')) {
          focusable.setAttribute('data-isCellEditing', true);
          focusable.focus();
        }
        keyHelperRef.current.tabIndex = -1;
      } else {
        tabIndexTimeout.current = setTimeout(function () {
          if (keyHelperRef.current) {
            keyHelperRef.current.setAttribute('tabindex', 0);
          }
        }, 50);
      }
    }
  });
  hooks.useUnmountEffect(function () {
    if (overlayEventListener.current) {
      overlayservice.OverlayService.off('overlay-click', overlayEventListener.current);
      overlayEventListener.current = null;
    }
  });
  var bodyClassName = utils.ObjectUtils.getPropValue(props.bodyClassName, props.node.data, {
    field: props.field,
    rowIndex: props.rowIndex,
    props: props
  });
  var className = utils.classNames(bodyClassName || props.className, {
    'p-editable-column': props.editor,
    'p-cell-editing': props.editor ? editingState : false
  });
  var style = props.bodyStyle || props.style;
  var content;
  if (editingState) {
    if (props.editor) content = utils.ObjectUtils.getJSXElement(props.editor, {
      node: props.node,
      rowData: props.node.data,
      value: utils.ObjectUtils.resolveFieldData(props.node.data, props.field),
      field: props.field,
      rowIndex: props.rowIndex,
      props: props
    });else throw new Error('Editor is not found on column.');
  } else {
    if (props.body) content = utils.ObjectUtils.getJSXElement(props.body, props.node, {
      field: props.field,
      rowIndex: props.rowIndex,
      props: props
    });else content = utils.ObjectUtils.resolveFieldData(props.node.data, props.field);
  }
  var editorKeyHelperProps = utils.mergeProps({
    tabIndex: 0,
    ref: keyHelperRef,
    className: 'p-cell-editor-key-helper p-hidden-accessible',
    onFocus: function onFocus(e) {
      return onEditorFocus();
    }
  }, getColumnPTOptions('editorKeyHelperLabel'));
  var editorKeyHelperLabelProps = utils.mergeProps(getColumnPTOptions('editorKeyHelper'));
  /* eslint-disable */
  var editorKeyHelper = props.editor && /*#__PURE__*/React__namespace.createElement("a", editorKeyHelperProps, /*#__PURE__*/React__namespace.createElement("span", editorKeyHelperLabelProps));
  /* eslint-enable */
  var bodyCellProps = utils.mergeProps({
    ref: elementRef,
    className: className,
    style: style,
    onClick: function onClick(e) {
      return _onClick();
    },
    onKeyDown: function onKeyDown(e) {
      return _onKeyDown(e);
    }
  }, getColumnPTOptions('bodyCell'), getColumnPTOptions('root'));
  return /*#__PURE__*/React__namespace.createElement("td", bodyCellProps, props.children, editorKeyHelper, content);
};
TreeTableBodyCell.displayName = 'TreeTableBodyCell';

function _createForOfIteratorHelper$3(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }
function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TreeTableRow = /*#__PURE__*/React__namespace.memo(function (props) {
  var elementRef = React__namespace.useRef(null);
  var checkboxRef = React__namespace.useRef(null);
  var checkboxBoxRef = React__namespace.useRef(null);
  var nodeTouched = React__namespace.useRef(false);
  var expanded = props.expandedKeys ? props.expandedKeys[props.node.key] !== undefined : false;
  var getColumnProps = function getColumnProps(column) {
    return ColumnBase.getCProps(column);
  };
  var getColumnPTOptions = function getColumnPTOptions(column, key) {
    return props.ptCallbacks.ptmo(ColumnBase.getCProp(column, 'pt'), key, {
      props: getColumnProps(column),
      parent: props.metaData
    });
  };
  var getColumnCheckboxPTOptions = function getColumnCheckboxPTOptions(column, key) {
    return props.ptCallbacks.ptmo(ColumnBase.getCProp(column, 'pt'), key, {
      props: getColumnProps(column),
      parent: props.metaData,
      context: {
        checked: isChecked(),
        partialChecked: isPartialChecked()
      }
    });
  };
  var getColumnProp = function getColumnProp(column, name) {
    return ColumnBase.getCProp(column, name);
  };
  var onTogglerClick = function onTogglerClick(event) {
    expanded ? collapse(event) : expand(event);
    event.preventDefault();
    event.stopPropagation();
  };
  var expand = function expand(event) {
    var expandedKeys = props.expandedKeys ? _objectSpread$2({}, props.expandedKeys) : {};
    expandedKeys[props.node.key] = true;
    props.onToggle({
      originalEvent: event,
      value: expandedKeys
    });
    invokeToggleEvents(event, true);
  };
  var collapse = function collapse(event) {
    var expandedKeys = _objectSpread$2({}, props.expandedKeys);
    delete expandedKeys[props.node.key];
    props.onToggle({
      originalEvent: event,
      value: expandedKeys
    });
    invokeToggleEvents(event, false);
  };
  var invokeToggleEvents = function invokeToggleEvents(event, expanded) {
    if (expanded) {
      if (props.onExpand) {
        props.onExpand({
          originalEvent: event,
          node: props.node
        });
      }
    } else {
      if (props.onCollapse) {
        props.onCollapse({
          originalEvent: event,
          node: props.node
        });
      }
    }
  };
  var _onClick = function onClick(event) {
    if (props.onRowClick) {
      props.onRowClick(event, props.node);
    }
    nodeTouched.current = false;
  };
  var _onTouchEnd = function onTouchEnd() {
    nodeTouched.current = true;
  };
  var _onMouseEnter = function onMouseEnter(event) {
    if (props.onRowMouseEnter) {
      props.onRowMouseEnter({
        originalEvent: event,
        node: props.node,
        index: props.rowIndex
      });
    }
  };
  var _onMouseLeave = function onMouseLeave(event) {
    if (props.onRowMouseLeave) {
      props.onRowMouseLeave({
        originalEvent: event,
        node: props.node,
        index: props.rowIndex
      });
    }
  };
  var onCheckboxChange = function onCheckboxChange(event) {
    var checked = isChecked();
    var selectionKeys = props.selectionKeys ? _objectSpread$2({}, props.selectionKeys) : {};
    if (checked) {
      if (props.propagateSelectionDown) propagateDown(props.node, false, selectionKeys);else delete selectionKeys[props.node.key];
      if (props.propagateSelectionUp && props.onPropagateUp) {
        props.onPropagateUp({
          originalEvent: event,
          check: false,
          selectionKeys: selectionKeys
        });
      }
      if (props.onUnselect) {
        props.onUnselect({
          originalEvent: event,
          node: props.node
        });
      }
    } else {
      if (props.propagateSelectionDown) propagateDown(props.node, true, selectionKeys);else selectionKeys[props.node.key] = {
        checked: true
      };
      if (props.propagateSelectionUp && props.onPropagateUp) {
        props.onPropagateUp({
          originalEvent: event,
          check: true,
          selectionKeys: selectionKeys
        });
      }
      if (props.onSelect) {
        props.onSelect({
          originalEvent: event,
          node: props.node
        });
      }
    }
    if (props.onSelectionChange) {
      props.onSelectionChange({
        originalEvent: event,
        value: selectionKeys
      });
    }
    utils.DomHandler.clearSelection();
  };
  var onCheckboxFocus = function onCheckboxFocus() {
    utils.DomHandler.addClass(checkboxBoxRef.current, 'p-focus');
    utils.DomHandler.addClass(checkboxRef.current, 'p-checkbox-focused');
  };
  var onCheckboxBlur = function onCheckboxBlur() {
    utils.DomHandler.removeClass(checkboxBoxRef.current, 'p-focus');
    utils.DomHandler.removeClass(checkboxRef.current, 'p-checkbox-focused');
  };
  var propagateUp = function propagateUp(event) {
    var check = event.check;
    var selectionKeys = event.selectionKeys;
    var checkedChildCount = 0;
    var childPartialSelected = false;
    var _iterator = _createForOfIteratorHelper$3(props.node.children),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;
        if (selectionKeys[child.key] && selectionKeys[child.key].checked) checkedChildCount++;else if (selectionKeys[child.key] && selectionKeys[child.key].partialChecked) childPartialSelected = true;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (check && checkedChildCount === props.node.children.length) {
      selectionKeys[props.node.key] = {
        checked: true,
        partialChecked: false
      };
    } else {
      if (!check) {
        delete selectionKeys[props.node.key];
      }
      if (childPartialSelected || checkedChildCount > 0 && checkedChildCount !== props.node.children.length) selectionKeys[props.node.key] = {
        checked: false,
        partialChecked: true
      };else selectionKeys[props.node.key] = {
        checked: false,
        partialChecked: false
      };
    }
    if (props.propagateSelectionUp && props.onPropagateUp) {
      props.onPropagateUp(event);
    }
  };
  var propagateDown = function propagateDown(node, check, selectionKeys) {
    if (check) selectionKeys[node.key] = {
      checked: true,
      partialChecked: false
    };else delete selectionKeys[node.key];
    if (node.children && node.children.length) {
      for (var i = 0; i < node.children.length; i++) {
        propagateDown(node.children[i], check, selectionKeys);
      }
    }
  };
  var onRightClick = function onRightClick(event) {
    utils.DomHandler.clearSelection();
    if (props.onContextMenuSelectionChange) {
      props.onContextMenuSelectionChange({
        originalEvent: event,
        value: props.node.key
      });
    }
    if (props.onContextMenu) {
      props.onContextMenu({
        originalEvent: event,
        node: props.node
      });
    }
  };
  var _onKeyDown = function onKeyDown(event) {
    if (event.target === elementRef.current) {
      var rowElement = event.currentTarget;
      switch (event.which) {
        //down arrow
        case 40:
          var nextRow = rowElement.nextElementSibling;
          if (nextRow) {
            nextRow.focus();
          }
          event.preventDefault();
          break;

        //up arrow
        case 38:
          var previousRow = rowElement.previousElementSibling;
          if (previousRow) {
            previousRow.focus();
          }
          event.preventDefault();
          break;

        //right arrow
        case 39:
          if (!expanded) {
            expand(event);
          }
          event.preventDefault();
          break;

        //left arrow
        case 37:
          if (expanded) {
            collapse(event);
          }
          event.preventDefault();
          break;

        //enter
        case 13:
          _onClick(event);
          event.preventDefault();
          break;
      }
    }
  };
  var isSelected = function isSelected() {
    if ((props.selectionMode === 'single' || props.selectionMode === 'multiple') && props.selectionKeys) return props.selectionMode === 'single' ? props.selectionKeys === props.node.key : props.selectionKeys[props.node.key] !== undefined;else return false;
  };
  var isChecked = function isChecked() {
    return props.selectionKeys ? props.selectionKeys[props.node.key] && props.selectionKeys[props.node.key].checked : false;
  };
  var isPartialChecked = function isPartialChecked() {
    return props.selectionKeys ? props.selectionKeys[props.node.key] && props.selectionKeys[props.node.key].partialChecked : false;
  };
  var createToggler = function createToggler(column) {
    var label = expanded ? PrimeReact.ariaLabel('collapseLabel') : PrimeReact.ariaLabel('expandLabel');
    var rowTogglerIconProps = utils.mergeProps({
      className: 'p-treetable-toggler-icon',
      'aria-hidden': true
    }, getColumnPTOptions(column, 'rowTogglerIcon'));
    var icon = expanded ? /*#__PURE__*/React__namespace.createElement(chevrondown.ChevronDownIcon, rowTogglerIconProps) : /*#__PURE__*/React__namespace.createElement(chevronright.ChevronRightIcon, rowTogglerIconProps);
    var togglerIcon = utils.IconUtils.getJSXIcon(props.togglerIcon || icon, _objectSpread$2({}, rowTogglerIconProps), {
      props: props
    });
    var style = {
      marginLeft: props.level * 16 + 'px',
      visibility: props.node.leaf === false || props.node.children && props.node.children.length ? 'visible' : 'hidden'
    };
    var rowTogglerProps = utils.mergeProps({
      type: 'button',
      className: 'p-treetable-toggler p-link p-unselectable-text',
      onClick: function onClick(e) {
        return onTogglerClick(e);
      },
      tabIndex: -1,
      style: style,
      'aria-label': label
    }, getColumnPTOptions(column, 'rowToggler'));
    var content = /*#__PURE__*/React__namespace.createElement("button", rowTogglerProps, togglerIcon, /*#__PURE__*/React__namespace.createElement(ripple.Ripple, null));
    if (props.togglerTemplate) {
      var defaultContentOptions = {
        onClick: onTogglerClick,
        containerClassName: 'p-treetable-toggler p-link',
        iconClassName: 'p-treetable-toggler-icon',
        element: content,
        props: props,
        expanded: expanded,
        buttonStyle: style
      };
      content = utils.ObjectUtils.getJSXElement(props.togglerTemplate, props.node, defaultContentOptions);
    }
    return content;
  };
  var createCheckbox = function createCheckbox(column) {
    if (props.selectionMode === 'checkbox' && props.node.selectable !== false) {
      var checked = isChecked();
      var partialChecked = isPartialChecked();
      var _className = utils.classNames('p-checkbox-box', {
        'p-highlight': checked,
        'p-indeterminate': partialChecked
      });
      var iconClassName = 'p-checkbox-icon p-c';
      var checboxIconProps = utils.mergeProps({
        className: iconClassName
      }, getColumnCheckboxPTOptions(column, 'checkboxIcon'));
      var icon = checked ? props.checkboxIcon || /*#__PURE__*/React__namespace.createElement(check.CheckIcon, checboxIconProps) : partialChecked ? props.checkboxIcon || /*#__PURE__*/React__namespace.createElement(minus.MinusIcon, checboxIconProps) : null;
      var checkIcon = utils.IconUtils.getJSXIcon(icon, {
        className: iconClassName
      }, {
        props: props,
        checked: checked,
        partialChecked: partialChecked
      });
      var hiddenInputProps = utils.mergeProps({
        type: 'checkbox',
        onFocus: function onFocus(e) {
          return onCheckboxFocus();
        },
        onBlur: function onBlur(e) {
          return onCheckboxBlur();
        }
      }, getColumnCheckboxPTOptions(column, 'hiddenInput'));
      var checkboxWrapperProps = utils.mergeProps({
        className: 'p-checkbox p-treetable-checkbox p-component',
        ref: checkboxRef,
        onClick: function onClick(e) {
          return onCheckboxChange(e);
        },
        role: 'checkbox',
        'aria-checked': checked
      }, getColumnCheckboxPTOptions(column, 'checkboxWrapper'));
      var hiddenInputWrapperProps = utils.mergeProps({
        className: 'p-hidden-accessible'
      }, getColumnCheckboxPTOptions(column, 'hiddenInputWrapper'));
      var checkboxProps = utils.mergeProps({
        className: _className,
        ref: checkboxBoxRef
      }, getColumnCheckboxPTOptions(column, 'checkbox'));
      return /*#__PURE__*/React__namespace.createElement("div", checkboxWrapperProps, /*#__PURE__*/React__namespace.createElement("div", hiddenInputWrapperProps, /*#__PURE__*/React__namespace.createElement("input", hiddenInputProps)), /*#__PURE__*/React__namespace.createElement("div", checkboxProps, checkIcon));
    } else {
      return null;
    }
  };
  var createCell = function createCell(column, index) {
    var toggler, checkbox;
    if (getColumnProp(column, 'expander')) {
      toggler = createToggler(column);
      checkbox = createCheckbox(column);
    }
    return /*#__PURE__*/React__namespace.createElement(TreeTableBodyCell, _extends({
      key: "".concat(getColumnProp(column, 'columnKey') || getColumnProp(column, 'field'), "_").concat(index)
    }, ColumnBase.getCProps(column), {
      column: column,
      selectOnEdit: props.selectOnEdit,
      selected: isSelected(),
      node: props.node,
      rowIndex: props.rowIndex,
      ptCallbacks: props.ptCallbacks,
      metaData: props.metaData
    }), toggler, checkbox);
  };
  var createChildren = function createChildren() {
    if (expanded && props.node.children) {
      return props.node.children.map(function (childNode, index) {
        return /*#__PURE__*/React__namespace.createElement(TreeTableRow, {
          key: "".concat(childNode.key || JSON.stringify(childNode.data), "_").concat(index),
          level: props.level + 1,
          rowIndex: props.rowIndex + '_' + index,
          node: childNode,
          checkboxIcon: props.checkboxIcon,
          columns: props.columns,
          expandedKeys: props.expandedKeys,
          selectOnEdit: props.selectOnEdit,
          onToggle: props.onToggle,
          togglerTemplate: props.togglerTemplate,
          onExpand: props.onExpand,
          onCollapse: props.onCollapse,
          selectionMode: props.selectionMode,
          selectionKeys: props.selectionKeys,
          onSelectionChange: props.onSelectionChange,
          metaKeySelection: props.metaKeySelection,
          onRowClick: props.onRowClick,
          onRowMouseEnter: props.onRowMouseEnter,
          onRowMouseLeave: props.onRowMouseLeave,
          onSelect: props.onSelect,
          onUnselect: props.onUnselect,
          propagateSelectionUp: props.propagateSelectionUp,
          propagateSelectionDown: props.propagateSelectionDown,
          onPropagateUp: propagateUp,
          rowClassName: props.rowClassName,
          contextMenuSelectionKey: props.contextMenuSelectionKey,
          onContextMenuSelectionChange: props.onContextMenuSelectionChange,
          onContextMenu: props.onContextMenu,
          ptCallbacks: props.ptCallbacks,
          metaData: props.metaData
        });
      });
    } else {
      return null;
    }
  };
  var cells = props.columns.map(createCell);
  var children = createChildren();
  var className = {
    'p-highlight': isSelected(),
    'p-highlight-contextmenu': props.contextMenuSelectionKey && props.contextMenuSelectionKey === props.node.key,
    'p-row-odd': props.rowIndex % 2 !== 0
  };
  if (props.rowClassName) {
    var rowClassName = props.rowClassName(props.node);
    className = _objectSpread$2(_objectSpread$2({}, className), rowClassName);
  }
  className = utils.classNames(className, props.node.className);
  var rowProps = utils.mergeProps({
    ref: elementRef,
    tabIndex: 0,
    className: className,
    style: props.node.style,
    onClick: function onClick(e) {
      return _onClick(e);
    },
    onTouchEnd: function onTouchEnd(e) {
      return _onTouchEnd();
    },
    onContextMenu: function onContextMenu(e) {
      return onRightClick(e);
    },
    onKeyDown: function onKeyDown(e) {
      return _onKeyDown(e);
    },
    onMouseEnter: function onMouseEnter(e) {
      return _onMouseEnter(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      return _onMouseLeave(e);
    }
  }, props.ptCallbacks.ptm('row'));
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("tr", rowProps, cells), children);
});
TreeTableRow.displayName = 'TreeTableRow';

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }
function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var TreeTableBody = /*#__PURE__*/React__namespace.memo(function (props) {
  var isSingleSelectionMode = props.selectionMode === 'single';
  var isMultipleSelectionMode = props.selectionMode === 'multiple';
  var flattenizeTree = function flattenizeTree(nodes) {
    var rows = [];
    nodes = nodes || props.value;
    var _iterator = _createForOfIteratorHelper$2(nodes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var node = _step.value;
        rows.push(node.key);
        if (isExpandedKey(node.key)) {
          rows = rows.concat(flattenizeTree(node.children));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return rows;
  };
  var isExpandedKey = function isExpandedKey(key) {
    return props.expandedKeys && !!props.expandedKeys[key];
  };
  var onRowClick = function onRowClick(event, node) {
    if (props.onRowClick) {
      props.onRowClick({
        originalEvent: event,
        node: node
      });
    }
    var targetNode = event.target.nodeName;
    if (targetNode === 'INPUT' || targetNode === 'BUTTON' || targetNode === 'A' || utils.DomHandler.hasClass(event.target, 'p-clickable')) {
      return;
    }
    if ((isSingleSelectionMode || isMultipleSelectionMode) && node.selectable !== false) {
      var selectionKeys;
      var selected = isSelected(node);
      var metaSelection = props.metaKeySelection;
      var flatKeys = flattenizeTree();
      var rowIndex = flatKeys.findIndex(function (key) {
        return key === node.key;
      });
      if (isMultipleSelectionMode && event.shiftKey) {
        utils.DomHandler.clearSelection();

        // find first selected row
        var anchorRowIndex = flatKeys.findIndex(function (key) {
          return props.selectionKeys[key];
        });
        var rangeStart = Math.min(rowIndex, anchorRowIndex);
        var rangeEnd = Math.max(rowIndex, anchorRowIndex);
        selectionKeys = _objectSpread$1({}, props.selectionKeys);
        for (var i = rangeStart; i <= rangeEnd; i++) {
          var rowKey = flatKeys[i];
          selectionKeys[rowKey] = true;
        }
      } else {
        //anchorRowIndex = rowIndex;

        if (metaSelection) {
          var metaKey = event.metaKey || event.ctrlKey;
          if (selected && metaKey) {
            if (isSingleSelectionMode) {
              selectionKeys = null;
            } else {
              selectionKeys = _objectSpread$1({}, props.selectionKeys);
              delete selectionKeys[node.key];
            }
            if (props.onUnselect) {
              props.onUnselect({
                originalEvent: event,
                node: node
              });
            }
          } else {
            if (isSingleSelectionMode) {
              selectionKeys = node.key;
            } else if (isMultipleSelectionMode) {
              selectionKeys = !metaKey ? {} : props.selectionKeys ? _objectSpread$1({}, props.selectionKeys) : {};
              selectionKeys[node.key] = true;
            }
            if (props.onSelect) {
              props.onSelect({
                originalEvent: event,
                node: node
              });
            }
          }
        } else {
          if (isSingleSelectionMode) {
            if (selected) {
              selectionKeys = null;
              if (props.onUnselect) {
                props.onUnselect({
                  originalEvent: event,
                  node: node
                });
              }
            } else {
              selectionKeys = node.key;
              if (props.onSelect) {
                props.onSelect({
                  originalEvent: event,
                  node: node
                });
              }
            }
          } else {
            if (selected) {
              selectionKeys = _objectSpread$1({}, props.selectionKeys);
              delete selectionKeys[node.key];
              if (props.onUnselect) {
                props.onUnselect({
                  originalEvent: event,
                  node: node
                });
              }
            } else {
              selectionKeys = props.selectionKeys ? _objectSpread$1({}, props.selectionKeys) : {};
              selectionKeys[node.key] = true;
              if (props.onSelect) {
                props.onSelect({
                  originalEvent: event,
                  node: node
                });
              }
            }
          }
        }
      }
      if (props.onSelectionChange) {
        props.onSelectionChange({
          originalEvent: event,
          value: selectionKeys
        });
      }
    }
  };
  var isSelected = function isSelected(node) {
    if ((isSingleSelectionMode || isMultipleSelectionMode) && props.selectionKeys) return isSingleSelectionMode ? props.selectionKeys === node.key : props.selectionKeys[node.key] !== undefined;else return false;
  };
  var createRow = function createRow(node, index) {
    return /*#__PURE__*/React__namespace.createElement(TreeTableRow, {
      key: "".concat(node.key || JSON.stringify(node.data), "_").concat(index),
      level: 0,
      rowIndex: index,
      selectOnEdit: props.selectOnEdit,
      node: node,
      checkboxIcon: props.checkboxIcon,
      columns: props.columns,
      expandedKeys: props.expandedKeys,
      onToggle: props.onToggle,
      togglerTemplate: props.togglerTemplate,
      onExpand: props.onExpand,
      onCollapse: props.onCollapse,
      selectionMode: props.selectionMode,
      selectionKeys: props.selectionKeys,
      onSelectionChange: props.onSelectionChange,
      metaKeySelection: props.metaKeySelection,
      onRowClick: onRowClick,
      onRowMouseEnter: props.onRowMouseEnter,
      onRowMouseLeave: props.onRowMouseLeave,
      onSelect: props.onSelect,
      onUnselect: props.onUnselect,
      propagateSelectionUp: props.propagateSelectionUp,
      propagateSelectionDown: props.propagateSelectionDown,
      rowClassName: props.rowClassName,
      contextMenuSelectionKey: props.contextMenuSelectionKey,
      onContextMenuSelectionChange: props.onContextMenuSelectionChange,
      onContextMenu: props.onContextMenu,
      ptCallbacks: props.ptCallbacks,
      metaData: props.metaData
    });
  };
  var createRows = function createRows() {
    if (props.paginator && !props.lazy) {
      var rpp = props.rows || 0;
      var startIndex = props.first || 0;
      var endIndex = startIndex + rpp;
      var rows = [];
      for (var i = startIndex; i < endIndex; i++) {
        var rowData = props.value[i];
        if (rowData) rows.push(createRow(props.value[i]));else break;
      }
      return rows;
    } else {
      return props.value.map(createRow);
    }
  };
  var createEmptyMessage = function createEmptyMessage() {
    if (props.loading) {
      return null;
    } else {
      var colSpan = props.columns ? props.columns.length : null;
      var _content = props.emptyMessage || PrimeReact.localeOption('emptyMessage');
      var emptyMessageProps = utils.mergeProps({
        className: 'p-treetable-emptymessage'
      }, props.ptCallbacks.ptm('emptyMessage'));
      var bodyCellProps = utils.mergeProps({
        colSpan: colSpan
      }, props.ptCallbacks.ptm('bodyCell'));
      return /*#__PURE__*/React__namespace.createElement("tr", emptyMessageProps, /*#__PURE__*/React__namespace.createElement("td", bodyCellProps, _content));
    }
  };
  var content = props.value && props.value.length ? createRows() : createEmptyMessage();
  var tbodyProps = utils.mergeProps({
    className: 'p-treetable-tbody'
  }, props.ptCallbacks.ptm('tbody'));
  return /*#__PURE__*/React__namespace.createElement("tbody", tbodyProps, content);
});
TreeTableBody.displayName = 'TreeTableBody';

var ColumnGroupBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'ColumnGroup',
    children: undefined
  },
  getCProp: function getCProp(group, name) {
    return utils.ObjectUtils.getComponentProp(group, name, ColumnGroupBase.defaultProps);
  },
  getCProps: function getCProps(group) {
    return utils.ObjectUtils.getComponentProps(group, ColumnGroupBase.defaultProps);
  }
});

var RowBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'Row',
    style: null,
    className: null,
    children: undefined
  },
  getCProp: function getCProp(row, name) {
    return utils.ObjectUtils.getComponentProp(row, name, RowBase.defaultProps);
  }
});

var TreeTableFooter = /*#__PURE__*/React__namespace.memo(function (props) {
  var getColumnProp = function getColumnProp(column, name) {
    return ColumnBase.getCProp(column, name);
  };
  var getColumnProps = function getColumnProps(column) {
    return props.ptCallbacks.ptmo(ColumnBase.getCProps(column));
  };
  var getColumnPTOptions = function getColumnPTOptions(column, key) {
    return props.ptCallbacks.ptmo(getColumnProp(column, 'pt'), key, {
      props: getColumnProps(column),
      parent: props.metaData
    });
  };
  var createFooterCell = function createFooterCell(column, index) {
    var footerCellProps = utils.mergeProps({
      key: column.field || index,
      className: getColumnProp(column, 'footerClassName') || getColumnProp(column, 'className'),
      style: getColumnProp(column, 'footerStyle') || getColumnProp(column, 'style'),
      rowSpan: getColumnProp(column, 'rowSpan'),
      colSpan: getColumnProp(column, 'colSpan')
    }, getColumnPTOptions(column, 'footerCell'));
    return /*#__PURE__*/React__namespace.createElement("td", footerCellProps, getColumnProp(column, 'footer'));
  };
  var createFooterRow = function createFooterRow(row, index) {
    var rowColumns = React__namespace.Children.toArray(RowBase.getCProp(row, 'children'));
    var rowFooterCells = rowColumns.map(createFooterCell);
    var footerRowProps = utils.mergeProps(props.ptCallbacks.ptm('footerRow'));
    return /*#__PURE__*/React__namespace.createElement("tr", _extends({}, footerRowProps, {
      key: index
    }), rowFooterCells);
  };
  var createColumnGroup = function createColumnGroup() {
    var rows = React__namespace.Children.toArray(ColumnGroupBase.getCProp(props.columnGroup, 'children'));
    return rows.map(createFooterRow);
  };
  var createColumns = function createColumns(columns) {
    if (columns) {
      var headerCells = columns.map(createFooterCell);
      var footerRowProps = utils.mergeProps(props.ptCallbacks.ptm('footerRow'));
      return /*#__PURE__*/React__namespace.createElement("tr", footerRowProps, headerCells);
    } else {
      return null;
    }
  };
  var hasFooter = function hasFooter() {
    if (props.columnGroup) {
      return true;
    } else {
      for (var i = 0; i < props.columns.length; i++) {
        if (getColumnProp(props.columns[i], 'footer')) {
          return true;
        }
      }
    }
    return false;
  };
  var content = props.columnGroup ? createColumnGroup() : createColumns(props.columns);
  if (hasFooter()) {
    var tfootProps = utils.mergeProps({
      className: 'p-treetable-tfoot'
    }, props.ptCallbacks.ptm('tfoot'));
    return /*#__PURE__*/React__namespace.createElement("tfoot", tfootProps, content);
  } else {
    return null;
  }
});
TreeTableFooter.displayName = 'TreeTableFooter';

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var TreeTableHeader = /*#__PURE__*/React__namespace.memo(function (props) {
  var filterTimeout = React__namespace.useRef(null);
  var getColumnProps = function getColumnProps(column) {
    return props.ptCallbacks.ptmo(ColumnBase.getCProps(column));
  };
  var getColumnPTOptions = function getColumnPTOptions(column, key) {
    return props.ptCallbacks.ptmo(ColumnBase.getCProp(column, 'pt'), key, {
      props: getColumnProps(column),
      parent: props.metaData
    });
  };
  var onHeaderClick = function onHeaderClick(event, column) {
    if (getColumnProp(column, 'sortable')) {
      var targetNode = event.target;
      if (utils.DomHandler.hasClass(targetNode, 'p-sortable-column') || utils.DomHandler.hasClass(targetNode, 'p-column-title') || utils.DomHandler.hasClass(targetNode, 'p-sortable-column-icon') || utils.DomHandler.hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {
        props.onSort({
          originalEvent: event,
          sortField: getColumnProp(column, 'sortField') || getColumnProp(column, 'field'),
          sortFunction: getColumnProp(column, 'sortFunction'),
          sortable: getColumnProp(column, 'sortable')
        });
        utils.DomHandler.clearSelection();
      }
    }
  };
  var onHeaderMouseDown = function onHeaderMouseDown(event, column) {
    if (props.reorderableColumns && getColumnProp(column, 'reorderable')) {
      if (event.target.nodeName !== 'INPUT') event.currentTarget.draggable = true;else if (event.target.nodeName === 'INPUT') event.currentTarget.draggable = false;
    }
  };
  var onHeaderKeyDown = function onHeaderKeyDown(event, column) {
    if (event.key === 'Enter') {
      onHeaderClick(event, column);
      event.preventDefault();
    }
  };
  var getMultiSortMetaDataIndex = function getMultiSortMetaDataIndex(column) {
    if (props.multiSortMeta) {
      for (var i = 0; i < props.multiSortMeta.length; i++) {
        if (props.multiSortMeta[i].field === getColumnProp(column, 'field')) {
          return i;
        }
      }
    }
    return -1;
  };
  var onResizerMouseDown = function onResizerMouseDown(event, column) {
    if (props.resizableColumns && props.onResizeStart) {
      props.onResizeStart({
        originalEvent: event,
        columnEl: event.target.parentElement,
        column: column
      });
    }
  };
  var _onDragStart = function onDragStart(event, column) {
    if (props.onDragStart) {
      props.onDragStart({
        originalEvent: event,
        column: column
      });
    }
  };
  var _onDragOver = function onDragOver(event, column) {
    if (props.onDragOver) {
      props.onDragOver({
        originalEvent: event,
        column: column
      });
    }
  };
  var _onDragLeave = function onDragLeave(event, column) {
    if (props.onDragLeave) {
      props.onDragLeave({
        originalEvent: event,
        column: column
      });
    }
  };
  var _onDrop = function onDrop(event, column) {
    if (props.onDrop) {
      props.onDrop({
        originalEvent: event,
        column: column
      });
    }
  };
  var onFilterInput = function onFilterInput(e, column) {
    if (getColumnProp(column, 'filter') && props.onFilter) {
      if (filterTimeout.current) {
        clearTimeout(filterTimeout.current);
      }
      var filterValue = e.target.value;
      filterTimeout.current = setTimeout(function () {
        props.onFilter({
          value: filterValue,
          field: getColumnProp(column, 'field'),
          matchMode: getColumnProp(column, 'filterMatchMode') || 'startsWith'
        });
        filterTimeout.current = null;
      }, props.filterDelay);
    }
  };
  var hasColumnFilter = function hasColumnFilter(columns) {
    if (columns) {
      var _iterator = _createForOfIteratorHelper$1(columns),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var col = _step.value;
          if (getColumnProp(col, 'filter')) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return false;
  };
  var getAriaSort = function getAriaSort(column, sorted, sortOrder) {
    if (getColumnProp(column, 'sortable')) {
      if (sorted && sortOrder < 0) return 'descending';else if (sorted && sortOrder > 0) return 'ascending';else return 'none';
    } else {
      return null;
    }
  };
  var getColumnProp = function getColumnProp(column) {
    return column ? typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'string' ? ColumnBase.getCProp(column, arguments.length <= 1 ? undefined : arguments[1]) : ColumnBase.getCProp((arguments.length <= 1 ? undefined : arguments[1]) || column, arguments.length <= 2 ? undefined : arguments[2]) : null;
  };
  var createSortIcon = function createSortIcon(column, sorted, sortOrder) {
    if (getColumnProp(column, 'sortable')) {
      var iconClassName = 'p-sortable-column-icon';
      var sortIconProps = utils.mergeProps({
        className: iconClassName
      }, getColumnPTOptions(column, 'sortIcon'));
      var icon = sorted ? sortOrder < 0 ? /*#__PURE__*/React__namespace.createElement(sortamountdown.SortAmountDownIcon, sortIconProps) : /*#__PURE__*/React__namespace.createElement(sortamountupalt.SortAmountUpAltIcon, sortIconProps) : /*#__PURE__*/React__namespace.createElement(sortalt.SortAltIcon, sortIconProps);
      var sortIcon = utils.IconUtils.getJSXIcon(props.sortIcon || icon, {
        className: iconClassName
      }, {
        props: props,
        sorted: sorted,
        sortOrder: sortOrder
      });
      return sortIcon;
    } else {
      return null;
    }
  };
  var createResizer = function createResizer(column) {
    if (props.resizableColumns) {
      var columnResizerProps = utils.mergeProps({
        className: 'p-column-resizer p-clickable',
        onMouseDown: function onMouseDown(e) {
          return onResizerMouseDown(e, column);
        }
      }, getColumnPTOptions(column, 'columnResizer'));
      return /*#__PURE__*/React__namespace.createElement("span", columnResizerProps);
    } else {
      return null;
    }
  };
  var createSortBadge = function createSortBadge(column, sortMetaDataIndex) {
    if (sortMetaDataIndex !== -1 && props.multiSortMeta && props.multiSortMeta.length > 1) {
      var sortBadgeProps = utils.mergeProps({
        className: 'p-sortable-column-badge'
      }, getColumnPTOptions(column, 'sortBadge'));
      return /*#__PURE__*/React__namespace.createElement("span", sortBadgeProps, sortMetaDataIndex + 1);
    }
    return null;
  };
  var createTitle = function createTitle(column, options) {
    var title = utils.ObjectUtils.getJSXElement(getColumnProp(column, 'header'), {
      props: options
    });
    var headerTitleProps = utils.mergeProps({
      className: 'p-column-title'
    }, getColumnPTOptions(column, 'headerTitle'));
    return /*#__PURE__*/React__namespace.createElement("span", headerTitleProps, title);
  };
  var createHeaderCell = function createHeaderCell(column, options) {
    var filterElement;
    if (getColumnProp(column, 'filter') && options.renderFilter) {
      filterElement = getColumnProp(column, 'filterElement') || /*#__PURE__*/React__namespace.createElement(inputtext.InputText, {
        onInput: function onInput(e) {
          return onFilterInput(e, column);
        },
        type: props.filterType,
        defaultValue: props.filters && props.filters[getColumnProp(column, 'field')] ? props.filters[getColumnProp(column, 'field')].value : null,
        className: "p-column-filter",
        placeholder: getColumnProp(column, 'filterPlaceholder'),
        maxLength: getColumnProp(column, 'filterMaxLength'),
        pt: getColumnPTOptions(column, 'filterInput')
      });
    }
    if (options.filterOnly) {
      var headerCellProps = utils.mergeProps({
        key: getColumnProp(column, 'columnKey') || getColumnProp(column, 'field') || options.index,
        className: utils.classNames('p-filter-column', getColumnProp(column, 'filterHeaderClassName')),
        style: getColumnProp(column, 'filterHeaderStyle') || getColumnProp(column, 'style'),
        rowSpan: getColumnProp(column, 'rowSpan'),
        colSpan: getColumnProp(column, 'colSpan')
      }, getColumnPTOptions(column, 'headerCell'), getColumnPTOptions(column, 'root'));
      return /*#__PURE__*/React__namespace.createElement("th", headerCellProps, filterElement);
    } else {
      var headerCellRef = /*#__PURE__*/React__namespace.createRef(null);
      var sortMetaDataIndex = getMultiSortMetaDataIndex(column);
      var multiSortMetaData = sortMetaDataIndex !== -1 ? props.multiSortMeta[sortMetaDataIndex] : null;
      var singleSorted = getColumnProp(column, 'field') === props.sortField;
      var multipleSorted = multiSortMetaData !== null;
      var sorted = getColumnProp(column, 'sortable') && (singleSorted || multipleSorted);
      var sortOrder = 0;
      if (singleSorted) sortOrder = props.sortOrder;else if (multipleSorted) sortOrder = multiSortMetaData.order;
      var sortIconElement = createSortIcon(column, sorted, sortOrder);
      var ariaSortData = getAriaSort(column, sorted, sortOrder);
      var sortBadge = createSortBadge(column, sortMetaDataIndex);
      var className = utils.classNames(getColumnProp(column, 'headerClassName') || getColumnProp(column, 'className'), {
        'p-sortable-column': getColumnProp(column, 'sortable'),
        'p-highlight': sorted,
        'p-resizable-column': props.resizableColumns && getColumnProp(column, 'resizeable')
      });
      var headerTooltip = getColumnProp(column, 'headerTooltip');
      var hasTooltip = utils.ObjectUtils.isNotEmpty(headerTooltip);
      var title = createTitle(column, options);
      var resizer = createResizer(column);
      var _headerCellProps = utils.mergeProps({
        ref: headerCellRef,
        className: className,
        style: getColumnProp(column, 'headerStyle') || getColumnProp(column, 'style'),
        tabIndex: getColumnProp(column, 'sortable') ? props.tabIndex : null,
        onClick: function onClick(e) {
          return onHeaderClick(e, column);
        },
        onMouseDown: function onMouseDown(e) {
          return onHeaderMouseDown(e, column);
        },
        onKeyDown: function onKeyDown(e) {
          return onHeaderKeyDown(e, column);
        },
        rowSpan: getColumnProp(column, 'rowSpan'),
        colSpan: getColumnProp(column, 'colSpan'),
        'aria-sort': ariaSortData,
        onDragStart: function onDragStart(e) {
          return _onDragStart(e, column);
        },
        onDragOver: function onDragOver(e) {
          return _onDragOver(e, column);
        },
        onDragLeave: function onDragLeave(e) {
          return _onDragLeave(e, column);
        },
        onDrop: function onDrop(e) {
          return _onDrop(e, column);
        }
      }, getColumnPTOptions(column, 'headerCell'), getColumnPTOptions(column, 'root'));
      return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, {
        key: column.columnKey || column.field || options.index
      }, /*#__PURE__*/React__namespace.createElement("th", _headerCellProps, resizer, title, sortIconElement, sortBadge, filterElement), hasTooltip && /*#__PURE__*/React__namespace.createElement(tooltip.Tooltip, _extends({
        target: headerCellRef,
        content: headerTooltip
      }, getColumnProp(column, 'headerTooltipOptions'))));
    }
  };
  var createHeaderRow = function createHeaderRow(row, index) {
    var rowColumns = React__namespace.Children.toArray(RowBase.getCProp(row, 'children'));
    var rowHeaderCells = rowColumns.map(function (col, i) {
      return createHeaderCell(col, {
        index: i,
        filterOnly: false,
        renderFilter: true
      });
    });
    var headerRowProps = utils.mergeProps(props.ptCallbacks.ptm('headerRow'));
    return /*#__PURE__*/React__namespace.createElement("tr", _extends({}, headerRowProps, {
      key: index
    }), rowHeaderCells);
  };
  var createColumnGroup = function createColumnGroup() {
    var rows = React__namespace.Children.toArray(ColumnGroupBase.getCProp(props.columnGroup, 'children'));
    return rows.map(createHeaderRow);
  };
  var createColumns = function createColumns(columns) {
    if (columns) {
      var headerRowProps = utils.mergeProps(props.ptCallbacks.ptm('headerRow'));
      if (hasColumnFilter(columns)) {
        return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("tr", headerRowProps, columns.map(function (col, i) {
          return createHeaderCell(col, {
            index: i,
            filterOnly: false,
            renderFilter: false
          });
        })), /*#__PURE__*/React__namespace.createElement("tr", headerRowProps, columns.map(function (col, i) {
          return createHeaderCell(col, {
            index: i,
            filterOnly: true,
            renderFilter: true
          });
        })));
      } else {
        return /*#__PURE__*/React__namespace.createElement("tr", headerRowProps, columns.map(function (col, i) {
          return createHeaderCell(col, {
            index: i,
            filterOnly: false,
            renderFilter: false
          });
        }));
      }
    } else {
      return null;
    }
  };
  var content = props.columnGroup ? createColumnGroup() : createColumns(props.columns);
  var theadProps = utils.mergeProps({
    className: 'p-treetable-thead'
  }, props.ptCallbacks.ptm('thead'));
  return /*#__PURE__*/React__namespace.createElement("thead", theadProps, content);
});
TreeTableHeader.displayName = 'TreeTableHeader';

var TreeTableScrollableView = /*#__PURE__*/React__namespace.memo(function (props) {
  var elementRef = React__namespace.useRef(null);
  var scrollHeaderRef = React__namespace.useRef(null);
  var scrollHeaderBoxRef = React__namespace.useRef(null);
  var scrollBodyRef = React__namespace.useRef(null);
  var scrollTableRef = React__namespace.useRef(null);
  var scrollFooterRef = React__namespace.useRef(null);
  var scrollFooterBoxRef = React__namespace.useRef(null);
  var setScrollHeight = function setScrollHeight() {
    if (props.scrollHeight) {
      if (props.scrollHeight.indexOf('%') !== -1) {
        var datatableContainer = findDataTableContainer(elementRef.current);
        scrollBodyRef.current.style.visibility = 'hidden';
        scrollBodyRef.current.style.height = '100px'; //temporary height to calculate static height
        var containerHeight = utils.DomHandler.getOuterHeight(datatableContainer);
        var relativeHeight = utils.DomHandler.getOuterHeight(datatableContainer.parentElement) * parseInt(props.scrollHeight, 10) / 100;
        var staticHeight = containerHeight - 100; //total height of headers, footers, paginators
        var scrollBodyHeight = relativeHeight - staticHeight;
        scrollBodyRef.current.style.height = 'auto';
        scrollBodyRef.current.style.maxHeight = scrollBodyHeight + 'px';
        scrollBodyRef.current.style.visibility = 'visible';
      } else {
        scrollBodyRef.current.style.maxHeight = props.scrollHeight;
      }
    }
  };
  var findDataTableContainer = function findDataTableContainer(element) {
    if (element) {
      var el = element;
      while (el && !utils.DomHandler.hasClass(el, 'p-treetable')) {
        el = el.parentElement;
      }
      return el;
    } else {
      return null;
    }
  };
  var onHeaderScroll = function onHeaderScroll() {
    scrollHeaderRef.current.scrollLeft = 0;
  };
  var onBodyScroll = function onBodyScroll() {
    var frozenView = elementRef.current.previousElementSibling;
    var frozenScrollBody;
    if (frozenView) {
      frozenScrollBody = utils.DomHandler.findSingle(frozenView, '.p-treetable-scrollable-body');
    }
    scrollHeaderBoxRef.current.style.marginLeft = -1 * scrollBodyRef.current.scrollLeft + 'px';
    if (scrollFooterBoxRef.current) {
      scrollFooterBoxRef.current.style.marginLeft = -1 * scrollBodyRef.current.scrollLeft + 'px';
    }
    if (frozenScrollBody) {
      frozenScrollBody.scrollTop = scrollBodyRef.current.scrollTop;
    }
  };
  hooks.useMountEffect(function () {
    if (!props.frozen) {
      var scrollBarWidth = utils.DomHandler.calculateScrollbarWidth();
      scrollHeaderBoxRef.current.style.marginRight = scrollBarWidth + 'px';
      if (scrollFooterBoxRef.current) {
        scrollFooterBoxRef.current.style.marginRight = scrollBarWidth + 'px';
      }
    } else {
      scrollBodyRef.current.style.paddingBottom = utils.DomHandler.calculateScrollbarWidth() + 'px';
    }
  });
  React__namespace.useEffect(function () {
    setScrollHeight();
  });
  var createColGroup = function createColGroup() {
    if (utils.ObjectUtils.isNotEmpty(props.columns)) {
      var cols = props.columns.map(function (col, i) {
        return /*#__PURE__*/React__namespace.createElement("col", {
          key: col.field + '_' + i
        });
      });
      var scrollableColgroupProps = utils.mergeProps({
        className: 'p-treetable-scrollable-colgroup'
      }, props.ptCallbacks.ptm('scrollableColgroup'));
      return /*#__PURE__*/React__namespace.createElement("colgroup", scrollableColgroupProps, cols);
    } else {
      return null;
    }
  };
  var className = utils.classNames('p-treetable-scrollable-view', {
    'p-treetable-frozen-view': props.frozen,
    'p-treetable-unfrozen-view': !props.frozen && props.frozenWidth
  });
  var width = props.frozen ? props.frozenWidth : 'calc(100% - ' + props.frozenWidth + ')';
  var left = props.frozen ? null : props.frozenWidth;
  var colGroup = createColGroup();
  var scrollableBodyStyle = !props.frozen && props.scrollHeight ? {
    overflowY: 'scroll'
  } : null;
  var scrollableProps = utils.mergeProps({
    className: className,
    style: {
      width: width,
      left: left
    },
    ref: elementRef
  }, props.ptCallbacks.ptm('scrollable'));
  var scrollableHeaderProps = utils.mergeProps({
    className: 'p-treetable-scrollable-header',
    ref: scrollHeaderRef,
    onScroll: function onScroll(e) {
      return onHeaderScroll();
    }
  }, props.ptCallbacks.ptm('scrollableHeader'));
  var scrollableHeaderBoxProps = utils.mergeProps({
    className: 'p-treetable-scrollable-header-box',
    ref: scrollHeaderBoxRef
  }, props.ptCallbacks.ptm('scrollableHeaderBox'));
  var scrollableHeaderTableProps = utils.mergeProps({
    className: 'p-treetable-scrollable-header-table'
  }, props.ptCallbacks.ptm('scrollableHeaderTable'));
  var scrollableBodyProps = utils.mergeProps({
    className: 'p-treetable-scrollable-body',
    ref: scrollBodyRef,
    style: scrollableBodyStyle,
    onScroll: function onScroll(e) {
      return onBodyScroll();
    }
  }, props.ptCallbacks.ptm('scrollableBody'));
  var scrollableBodyTableProps = utils.mergeProps({
    ref: scrollTableRef,
    style: {
      top: '0'
    },
    className: 'p-treetable-scrollable-body-table'
  }, props.ptCallbacks.ptm('scrollableBodyTable'));
  var scrollableFooterProps = utils.mergeProps({
    className: 'p-treetable-scrollable-footer',
    ref: scrollFooterRef
  }, props.ptCallbacks.ptm('scrollableFooter'));
  var scrollableFooterBoxProps = utils.mergeProps({
    className: 'p-treetable-scrollable-footer-box',
    ref: scrollFooterBoxRef
  }, props.ptCallbacks.ptm('scrollableFooterBox'));
  var scrollableFooterTableProps = utils.mergeProps({
    className: 'p-treetable-scrollable-footer-table'
  }, props.ptCallbacks.ptm('scrollableFooterTable'));
  return /*#__PURE__*/React__namespace.createElement("div", scrollableProps, /*#__PURE__*/React__namespace.createElement("div", scrollableHeaderProps, /*#__PURE__*/React__namespace.createElement("div", scrollableHeaderBoxProps, /*#__PURE__*/React__namespace.createElement("table", scrollableHeaderTableProps, colGroup, props.header))), /*#__PURE__*/React__namespace.createElement("div", scrollableBodyProps, /*#__PURE__*/React__namespace.createElement("table", scrollableBodyTableProps, colGroup, props.body)), /*#__PURE__*/React__namespace.createElement("div", scrollableFooterProps, /*#__PURE__*/React__namespace.createElement("div", scrollableFooterBoxProps, /*#__PURE__*/React__namespace.createElement("table", scrollableFooterTableProps, colGroup, props.footer))));
});
TreeTableScrollableView.displayName = 'TreeTableScrollableView';

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TreeTable = /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
  var context = React__namespace.useContext(PrimeReact.PrimeReactContext);
  var props = TreeTableBase.getProps(inProps, context);
  var _React$useState = React__namespace.useState(props.expandedKeys),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    expandedKeysState = _React$useState2[0],
    setExpandedKeysState = _React$useState2[1];
  var _React$useState3 = React__namespace.useState(props.first),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    firstState = _React$useState4[0],
    setFirstState = _React$useState4[1];
  var _React$useState5 = React__namespace.useState(props.rows),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    rowsState = _React$useState6[0],
    setRowsState = _React$useState6[1];
  var _React$useState7 = React__namespace.useState(props.sortField),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    sortFieldState = _React$useState8[0],
    setSortFieldState = _React$useState8[1];
  var _React$useState9 = React__namespace.useState(props.sortOrder),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    sortOrderState = _React$useState10[0],
    setSortOrderState = _React$useState10[1];
  var _React$useState11 = React__namespace.useState(props.multiSortMeta),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    multiSortMetaState = _React$useState12[0],
    setMultiSortMetaState = _React$useState12[1];
  var _React$useState13 = React__namespace.useState(props.filters),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    filtersState = _React$useState14[0],
    setFiltersState = _React$useState14[1];
  var _React$useState15 = React__namespace.useState([]),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    columnOrderState = _React$useState16[0],
    setColumnOrderState = _React$useState16[1];
  var metaData = {
    props: props,
    state: {
      expandedKeys: expandedKeysState,
      first: firstState,
      rows: rowsState,
      sortField: sortFieldState,
      sortOrder: sortOrderState,
      multiSortMeta: multiSortMetaState,
      filters: filtersState,
      columnOrder: columnOrderState
    }
  };
  var ptCallbacks = TreeTableBase.setMetaData(metaData);
  var elementRef = React__namespace.useRef(null);
  var tableRef = React__namespace.useRef(null);
  var resizerHelperRef = React__namespace.useRef(null);
  var reorderIndicatorUpRef = React__namespace.useRef(null);
  var reorderIndicatorDownRef = React__namespace.useRef(null);
  var columnResizing = React__namespace.useRef(null);
  var resizeColumn = React__namespace.useRef(null);
  var resizeColumnProps = React__namespace.useRef(null);
  var lastResizerHelperX = React__namespace.useRef(0);
  var iconWidth = React__namespace.useRef(0);
  var iconHeight = React__namespace.useRef(0);
  var draggedColumnEl = React__namespace.useRef(null);
  var draggedColumn = React__namespace.useRef(null);
  var dropPosition = React__namespace.useRef(null);
  var columnSortable = React__namespace.useRef(null);
  var columnSortFunction = React__namespace.useRef(null);
  var columnField = React__namespace.useRef(null);
  var _useEventListener = hooks.useEventListener({
      type: 'mousemove',
      listener: function listener(event) {
        if (columnResizing.current) {
          onColumnResize(event);
        }
      }
    }),
    _useEventListener2 = _slicedToArray(_useEventListener, 2),
    bindDocumentMouseMoveListener = _useEventListener2[0],
    unbindDocumentMouseMoveListener = _useEventListener2[1];
  var _useEventListener3 = hooks.useEventListener({
      type: 'mouseup',
      listener: function listener(event) {
        if (columnResizing.current) {
          columnResizing.current = false;
          onColumnResizeEnd();
        }
      }
    }),
    _useEventListener4 = _slicedToArray(_useEventListener3, 2),
    bindDocumentMouseUpListener = _useEventListener4[0],
    unbindDocumentMouseUpListener = _useEventListener4[1];
  var onToggle = function onToggle(event) {
    if (props.onToggle) {
      props.onToggle(event);
    } else {
      setExpandedKeysState(event.value);
    }
  };
  var onPageChange = function onPageChange(event) {
    if (props.onPage) {
      props.onPage(event);
    } else {
      setFirstState(event.first);
      setRowsState(event.rows);
    }
  };
  var onSort = function onSort(event) {
    var sortField = event.sortField;
    var sortOrder = props.defaultSortOrder;
    var multiSortMeta;
    var eventMeta;
    columnSortable.current = event.sortable;
    columnSortFunction.current = event.sortFunction;
    columnField.current = event.sortField;
    if (props.sortMode === 'multiple') {
      var metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
      multiSortMeta = _toConsumableArray(getMultiSortMeta());
      if (multiSortMeta && multiSortMeta instanceof Array) {
        var sortMeta = multiSortMeta.find(function (sortMeta) {
          return sortMeta.field === sortField;
        });
        sortOrder = sortMeta ? getCalculatedSortOrder(sortMeta.order) : sortOrder;
      }
      var newMetaData = {
        field: sortField,
        order: sortOrder
      };
      if (sortOrder) {
        if (!multiSortMeta || !metaKey) {
          multiSortMeta = [];
        }
        addSortMeta(newMetaData, multiSortMeta);
      } else if (props.removableSort && multiSortMeta) {
        removeSortMeta(newMetaData, multiSortMeta);
      }
      eventMeta = {
        multiSortMeta: multiSortMeta
      };
    } else {
      sortOrder = getSortField() === sortField ? getCalculatedSortOrder(getSortOrder()) : sortOrder;
      if (props.removableSort) {
        sortField = sortOrder ? sortField : null;
      }
      eventMeta = {
        sortField: sortField,
        sortOrder: sortOrder
      };
    }
    if (props.onSort) {
      props.onSort(eventMeta);
    } else {
      setFirstState(0);
      setSortFieldState(eventMeta.sortField);
      setSortOrderState(eventMeta.sortOrder);
      setMultiSortMetaState(eventMeta.multiSortMeta);
    }
  };
  var getCalculatedSortOrder = function getCalculatedSortOrder(currentOrder) {
    return props.removableSort ? props.defaultSortOrder === currentOrder ? currentOrder * -1 : 0 : currentOrder * -1;
  };
  var addSortMeta = function addSortMeta(meta, multiSortMeta) {
    var index = -1;
    for (var i = 0; i < multiSortMeta.length; i++) {
      if (multiSortMeta[i].field === meta.field) {
        index = i;
        break;
      }
    }
    if (index >= 0) multiSortMeta[index] = meta;else multiSortMeta.push(meta);
  };
  var removeSortMeta = function removeSortMeta(meta, multiSortMeta) {
    var index = -1;
    for (var i = 0; i < multiSortMeta.length; i++) {
      if (multiSortMeta[i].field === meta.field) {
        index = i;
        break;
      }
    }
    if (index >= 0) {
      multiSortMeta.splice(index, 1);
    }
    multiSortMeta = multiSortMeta.length > 0 ? multiSortMeta : null;
  };
  var sortSingle = function sortSingle(data) {
    return sortNodes(data);
  };
  var sortNodes = function sortNodes(data) {
    var value = _toConsumableArray(data);
    if (columnSortable.current && columnSortable.current === 'custom' && columnSortFunction.current) {
      value = columnSortFunction.current({
        data: data,
        field: getSortField(),
        order: getSortOrder()
      });
    } else {
      value.sort(function (node1, node2) {
        var sortField = getSortField();
        var value1 = utils.ObjectUtils.resolveFieldData(node1.data, sortField);
        var value2 = utils.ObjectUtils.resolveFieldData(node2.data, sortField);
        return compareValuesOnSort(value1, value2, getSortOrder());
      });
      for (var i = 0; i < value.length; i++) {
        if (value[i].children && value[i].children.length) {
          value[i].children = sortNodes(value[i].children);
        }
      }
    }
    return value;
  };
  var sortMultiple = function sortMultiple(data) {
    var multiSortMeta = getMultiSortMeta();
    if (multiSortMeta) return sortMultipleNodes(data, multiSortMeta);else return data;
  };
  var sortMultipleNodes = function sortMultipleNodes(data, multiSortMeta) {
    var value = _toConsumableArray(data);
    value.sort(function (node1, node2) {
      return multisortField(node1, node2, multiSortMeta, 0);
    });
    for (var i = 0; i < value.length; i++) {
      if (value[i].children && value[i].children.length) {
        value[i].children = sortMultipleNodes(value[i].children, multiSortMeta);
      }
    }
    return value;
  };
  var multisortField = function multisortField(node1, node2, multiSortMeta, index) {
    var value1 = utils.ObjectUtils.resolveFieldData(node1.data, multiSortMeta[index].field);
    var value2 = utils.ObjectUtils.resolveFieldData(node2.data, multiSortMeta[index].field);

    // check if they are equal handling dates and locales
    if (utils.ObjectUtils.compare(value1, value2, context && context.locale || PrimeReact__default["default"].locale) === 0) {
      return multiSortMeta.length - 1 > index ? multisortField(node1, node2, multiSortMeta, index + 1) : 0;
    }
    return compareValuesOnSort(value1, value2, multiSortMeta[index].order);
  };
  var compareValuesOnSort = function compareValuesOnSort(value1, value2, order) {
    return utils.ObjectUtils.sort(value1, value2, order, context && context.locale || PrimeReact__default["default"].locale, context && context.nullSortOrder || PrimeReact__default["default"].nullSortOrder);
  };
  var filter = function filter(value, field, mode) {
    onFilter({
      value: value,
      field: field,
      matchMode: mode
    });
  };
  var onFilter = function onFilter(event) {
    var filters = getFilters();
    var newFilters = filters ? _objectSpread({}, filters) : {};
    if (!isFilterBlank(event.value)) newFilters[event.field] = {
      value: event.value,
      matchMode: event.matchMode
    };else if (newFilters[event.field]) delete newFilters[event.field];
    if (props.onFilter) {
      props.onFilter({
        filters: newFilters
      });
    } else {
      setFirstState(0);
      setFiltersState(newFilters);
    }
  };
  var isFilterBlank = function isFilterBlank(filter) {
    if (filter !== null && filter !== undefined) {
      if (typeof filter === 'string' && filter.trim().length === 0 || filter instanceof Array && filter.length === 0) return true;else return false;
    }
    return true;
  };
  var onColumnResizeStart = function onColumnResizeStart(event) {
    var containerLeft = utils.DomHandler.getOffset(elementRef.current).left;
    resizeColumn.current = event.columnEl;
    resizeColumnProps.current = event.column;
    columnResizing.current = true;
    lastResizerHelperX.current = event.originalEvent.pageX - containerLeft + elementRef.current.scrollLeft;
    bindColumnResizeEvents();
  };
  var onColumnResize = function onColumnResize(event) {
    var containerLeft = utils.DomHandler.getOffset(elementRef.current).left;
    utils.DomHandler.addClass(elementRef.current, 'p-unselectable-text');
    resizerHelperRef.current.style.height = elementRef.current.offsetHeight + 'px';
    resizerHelperRef.current.style.top = 0 + 'px';
    resizerHelperRef.current.style.left = event.pageX - containerLeft + elementRef.current.scrollLeft + 'px';
    resizerHelperRef.current.style.display = 'block';
  };
  var onColumnResizeEnd = function onColumnResizeEnd(event) {
    var delta = resizerHelperRef.current.offsetLeft - lastResizerHelperX.current;
    var columnWidth = resizeColumn.current.offsetWidth;
    var newColumnWidth = columnWidth + delta;
    var minWidth = resizeColumn.current.style.minWidth || 15;
    if (columnWidth + delta > parseInt(minWidth, 10)) {
      if (props.columnResizeMode === 'fit') {
        var nextColumn = resizeColumn.current.nextElementSibling;
        var nextColumnWidth = nextColumn.offsetWidth - delta;
        if (newColumnWidth > 15 && nextColumnWidth > 15) {
          if (props.scrollable) {
            var scrollableView = findParentScrollableView(resizeColumn.current);
            var scrollableBodyTable = utils.DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-body-table');
            var scrollableHeaderTable = utils.DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-header-table');
            var scrollableFooterTable = utils.DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-footer-table');
            var resizeColumnIndex = utils.DomHandler.index(resizeColumn.current);
            resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
            resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
            resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
          } else {
            resizeColumn.current.style.width = newColumnWidth + 'px';
            if (nextColumn) {
              nextColumn.style.width = nextColumnWidth + 'px';
            }
          }
        }
      } else if (props.columnResizeMode === 'expand') {
        if (props.scrollable) {
          var _scrollableView = findParentScrollableView(resizeColumn.current);
          var _scrollableBodyTable = utils.DomHandler.findSingle(_scrollableView, 'table.p-treetable-scrollable-body-table');
          var _scrollableHeaderTable = utils.DomHandler.findSingle(_scrollableView, 'table.p-treetable-scrollable-header-table');
          var _scrollableFooterTable = utils.DomHandler.findSingle(_scrollableView, 'table.p-treetable-scrollable-footer-table');
          _scrollableBodyTable.style.width = _scrollableBodyTable.offsetWidth + delta + 'px';
          _scrollableHeaderTable.style.width = _scrollableHeaderTable.offsetWidth + delta + 'px';
          if (_scrollableFooterTable) {
            _scrollableFooterTable.style.width = _scrollableHeaderTable.offsetWidth + delta + 'px';
          }
          var _resizeColumnIndex = utils.DomHandler.index(resizeColumn.current);
          resizeColGroup(_scrollableHeaderTable, _resizeColumnIndex, newColumnWidth, null);
          resizeColGroup(_scrollableBodyTable, _resizeColumnIndex, newColumnWidth, null);
          resizeColGroup(_scrollableFooterTable, _resizeColumnIndex, newColumnWidth, null);
        } else {
          tableRef.current.style.width = tableRef.current.offsetWidth + delta + 'px';
          resizeColumn.current.style.width = newColumnWidth + 'px';
        }
      }
      if (props.onColumnResizeEnd) {
        props.onColumnResizeEnd({
          element: resizeColumn.current,
          column: resizeColumnProps.current,
          delta: delta
        });
      }
    }
    resizerHelperRef.current.style.display = 'none';
    resizeColumn.current = null;
    resizeColumnProps.current = null;
    utils.DomHandler.removeClass(elementRef.current, 'p-unselectable-text');
    unbindColumnResizeEvents();
  };
  var findParentScrollableView = function findParentScrollableView(column) {
    if (column) {
      var parent = column.parentElement;
      while (parent && !utils.DomHandler.hasClass(parent, 'p-treetable-scrollable-view')) {
        parent = parent.parentElement;
      }
      return parent;
    } else {
      return null;
    }
  };
  var resizeColGroup = function resizeColGroup(table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
    if (table) {
      var colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
      if (colGroup) {
        var col = colGroup.children[resizeColumnIndex];
        var nextCol = col.nextElementSibling;
        col.style.width = newColumnWidth + 'px';
        if (nextCol && nextColumnWidth) {
          nextCol.style.width = nextColumnWidth + 'px';
        }
      } else {
        throw new Error('Scrollable tables require a colgroup to support resizable columns');
      }
    }
  };
  var bindColumnResizeEvents = function bindColumnResizeEvents() {
    bindDocumentMouseMoveListener();
    bindDocumentMouseUpListener();
  };
  var unbindColumnResizeEvents = function unbindColumnResizeEvents() {
    unbindDocumentMouseMoveListener();
    unbindDocumentMouseUpListener();
  };
  var onColumnDragStart = function onColumnDragStart(e) {
    var event = e.originalEvent,
      column = e.column;
    if (columnResizing.current) {
      event.preventDefault();
      return;
    }
    iconWidth.current = utils.DomHandler.getHiddenElementOuterWidth(reorderIndicatorUpRef.current);
    iconHeight.current = utils.DomHandler.getHiddenElementOuterHeight(reorderIndicatorUpRef.current);
    draggedColumnEl.current = findParentHeader(event.currentTarget);
    draggedColumn.current = column;
    event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
  };

  var onColumnDragOver = function onColumnDragOver(e) {
    var event = e.originalEvent;
    var dropHeader = findParentHeader(event.currentTarget);
    if (props.reorderableColumns && draggedColumnEl.current && dropHeader) {
      event.preventDefault();
      var containerOffset = utils.DomHandler.getOffset(elementRef.current);
      var dropHeaderOffset = utils.DomHandler.getOffset(dropHeader);
      if (draggedColumnEl.current !== dropHeader) {
        var targetLeft = dropHeaderOffset.left - containerOffset.left;
        //let targetTop =  containerOffset.top - dropHeaderOffset.top;
        var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
        reorderIndicatorUpRef.current.style.top = dropHeaderOffset.top - containerOffset.top - (iconHeight.current - 1) + 'px';
        reorderIndicatorDownRef.current.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
        if (event.pageX > columnCenter) {
          reorderIndicatorUpRef.current.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(iconWidth.current / 2) + 'px';
          reorderIndicatorDownRef.current.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(iconWidth.current / 2) + 'px';
          dropPosition.current = 1;
        } else {
          reorderIndicatorUpRef.current.style.left = targetLeft - Math.ceil(iconWidth.current / 2) + 'px';
          reorderIndicatorDownRef.current.style.left = targetLeft - Math.ceil(iconWidth.current / 2) + 'px';
          dropPosition.current = -1;
        }
        reorderIndicatorUpRef.current.style.display = 'block';
        reorderIndicatorDownRef.current.style.display = 'block';
      }
    }
  };
  var onColumnDragLeave = function onColumnDragLeave(e) {
    var event = e.originalEvent;
    if (props.reorderableColumns && draggedColumnEl.current) {
      event.preventDefault();
      reorderIndicatorUpRef.current.style.display = 'none';
      reorderIndicatorDownRef.current.style.display = 'none';
    }
  };
  var onColumnDrop = function onColumnDrop(e) {
    var event = e.originalEvent,
      column = e.column;
    event.preventDefault();
    if (draggedColumnEl.current) {
      var dragIndex = utils.DomHandler.index(draggedColumnEl.current);
      var dropIndex = utils.DomHandler.index(findParentHeader(event.currentTarget));
      var allowDrop = dragIndex !== dropIndex;
      if (allowDrop && (dropIndex - dragIndex === 1 && dropPosition.current === -1 || dragIndex - dropIndex === 1 && dropPosition.current === 1)) {
        allowDrop = false;
      }
      if (allowDrop) {
        var columns = columnOrderState ? getColumns() : React__namespace.Children.toArray(props.children);
        var isSameColumn = function isSameColumn(col1, col2) {
          return getColumnProp(col1, 'columnKey') || getColumnProp(col2, 'columnKey') ? utils.ObjectUtils.equals(col1, col2, 'props.columnKey') : utils.ObjectUtils.equals(col1, col2, 'props.field');
        };
        var dragColIndex = columns.findIndex(function (child) {
          return isSameColumn(child, draggedColumn.current);
        });
        var dropColIndex = columns.findIndex(function (child) {
          return isSameColumn(child, column);
        });
        if (dropColIndex < dragColIndex && dropPosition.current === 1) {
          dropColIndex++;
        }
        if (dropColIndex > dragColIndex && dropPosition.current === -1) {
          dropColIndex--;
        }
        utils.ObjectUtils.reorderArray(columns, dragColIndex, dropColIndex);
        var columnOrder = [];
        var _iterator = _createForOfIteratorHelper(columns),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _column = _step.value;
            columnOrder.push(getColumnProp(_column, 'columnKey') || getColumnProp(_column, 'field'));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        setColumnOrderState(columnOrder);
        if (props.onColReorder) {
          props.onColReorder({
            dragIndex: dragColIndex,
            dropIndex: dropColIndex,
            columns: columns
          });
        }
      }
      reorderIndicatorUpRef.current.style.display = 'none';
      reorderIndicatorDownRef.current.style.display = 'none';
      draggedColumnEl.current.draggable = false;
      draggedColumnEl.current = null;
      dropPosition.current = null;
    }
  };
  var findParentHeader = function findParentHeader(element) {
    if (element.nodeName === 'TH') {
      return element;
    } else {
      var parent = element.parentElement;
      while (parent.nodeName !== 'TH') {
        parent = parent.parentElement;
        if (!parent) break;
      }
      return parent;
    }
  };
  var getColumnProp = function getColumnProp(column, name) {
    return ColumnBase.getCProp(column, name);
  };
  var getExpandedKeys = function getExpandedKeys() {
    return props.onToggle ? props.expandedKeys : expandedKeysState;
  };
  var getFirst = function getFirst() {
    return props.onPage ? props.first : firstState;
  };
  var getRows = function getRows() {
    return props.onPage ? props.rows : rowsState;
  };
  var getSortField = function getSortField() {
    return props.onSort ? props.sortField : sortFieldState;
  };
  var getSortOrder = function getSortOrder() {
    return props.onSort ? props.sortOrder : sortOrderState;
  };
  var getMultiSortMeta = function getMultiSortMeta() {
    return (props.onSort ? props.multiSortMeta : multiSortMetaState) || [];
  };
  var getFilters = function getFilters() {
    return props.onFilter ? props.filters : filtersState;
  };
  var findColumnByKey = function findColumnByKey(columns, key) {
    if (columns && columns.length) {
      for (var i = 0; i < columns.length; i++) {
        var child = columns[i];
        if (getColumnProp(child, 'columnKey') === key || getColumnProp(child, 'field') === key) {
          return child;
        }
      }
    }
    return null;
  };
  var getColumns = function getColumns() {
    var columns = React__namespace.Children.toArray(props.children);
    if (columns && columns.length) {
      if (props.reorderableColumns && columnOrderState) {
        var orderedColumns = [];
        var _iterator2 = _createForOfIteratorHelper(columnOrderState),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var columnKey = _step2.value;
            var column = findColumnByKey(columns, columnKey);
            if (column) {
              orderedColumns.push(column);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return [].concat(orderedColumns, _toConsumableArray(columns.filter(function (item) {
          return orderedColumns.indexOf(item) < 0;
        })));
      } else {
        return columns;
      }
    }
    return null;
  };
  var getTotalRecords = function getTotalRecords(data) {
    return props.lazy ? props.totalRecords : data ? data.length : 0;
  };
  var isSingleSelectionMode = function isSingleSelectionMode() {
    return props.selectionMode && props.selectionMode === 'single';
  };
  var isMultipleSelectionMode = function isMultipleSelectionMode() {
    return props.selectionMode && props.selectionMode === 'multiple';
  };
  var isRowSelectionMode = function isRowSelectionMode() {
    return isSingleSelectionMode() || isMultipleSelectionMode();
  };
  var getFrozenColumns = function getFrozenColumns(columns) {
    var frozenColumns = null;
    var _iterator3 = _createForOfIteratorHelper(columns),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var col = _step3.value;
        if (getColumnProp(col, 'frozen')) {
          frozenColumns = frozenColumns || [];
          frozenColumns.push(col);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return frozenColumns;
  };
  var getScrollableColumns = function getScrollableColumns(columns) {
    var scrollableColumns = null;
    var _iterator4 = _createForOfIteratorHelper(columns),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var col = _step4.value;
        if (!getColumnProp(col, 'frozen')) {
          scrollableColumns = scrollableColumns || [];
          scrollableColumns.push(col);
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return scrollableColumns;
  };
  var filterLocal = function filterLocal(value) {
    var filteredNodes = [];
    var filters = getFilters();
    var columns = React__namespace.Children.toArray(props.children);
    var isStrictMode = props.filterMode === 'strict';
    var _iterator5 = _createForOfIteratorHelper(value),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var node = _step5.value;
        var copyNode = _objectSpread({}, node);
        var localMatch = true;
        var globalMatch = false;
        for (var j = 0; j < columns.length; j++) {
          var col = columns[j];
          var filterMeta = filters ? filters[getColumnProp(col, 'field')] : null;
          var filterField = getColumnProp(col, 'field');
          var filterValue = void 0,
            filterConstraint = void 0,
            paramsWithoutNode = void 0,
            options = void 0;

          //local
          if (filterMeta) {
            var filterMatchMode = filterMeta.matchMode || getColumnProp(col, 'filterMatchMode') || 'startsWith';
            filterValue = filterMeta.value;
            filterConstraint = filterMatchMode === 'custom' ? getColumnProp(col, 'filterFunction') : PrimeReact.FilterService.filters[filterMatchMode];
            options = {
              rowData: node,
              filters: filters,
              props: props,
              column: {
                filterMeta: filterMeta,
                filterField: filterField,
                props: ColumnBase.getCProps(col)
              }
            };
            paramsWithoutNode = {
              filterField: filterField,
              filterValue: filterValue,
              filterConstraint: filterConstraint,
              isStrictMode: isStrictMode,
              options: options
            };
            if (isStrictMode && !(findFilteredNodes(copyNode, paramsWithoutNode) || isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && !(isFilterMatched(copyNode, paramsWithoutNode) || findFilteredNodes(copyNode, paramsWithoutNode))) {
              localMatch = false;
            }
            if (!localMatch) {
              break;
            }
          }

          //global
          if (props.globalFilter && !globalMatch) {
            var copyNodeForGlobal = _objectSpread({}, copyNode);
            filterValue = props.globalFilter;
            filterConstraint = PrimeReact.FilterService.filters[props.globalFilterMatchMode];
            paramsWithoutNode = {
              filterField: filterField,
              filterValue: filterValue,
              filterConstraint: filterConstraint,
              isStrictMode: isStrictMode
            };
            if (isStrictMode && (findFilteredNodes(copyNodeForGlobal, paramsWithoutNode) || isFilterMatched(copyNodeForGlobal, paramsWithoutNode)) || !isStrictMode && (isFilterMatched(copyNodeForGlobal, paramsWithoutNode) || findFilteredNodes(copyNodeForGlobal, paramsWithoutNode))) {
              globalMatch = true;
              copyNode = copyNodeForGlobal;
            }
          }
        }
        var matches = localMatch;
        if (props.globalFilter) {
          matches = localMatch && globalMatch;
        }
        if (matches) {
          filteredNodes.push(copyNode);
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return filteredNodes;
  };
  var findFilteredNodes = function findFilteredNodes(node, paramsWithoutNode) {
    if (node) {
      var matched = false;
      if (node.children) {
        var childNodes = _toConsumableArray(node.children);
        node.children = [];
        var _iterator6 = _createForOfIteratorHelper(childNodes),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var childNode = _step6.value;
            var copyChildNode = _objectSpread({}, childNode);
            if (isFilterMatched(copyChildNode, paramsWithoutNode)) {
              matched = true;
              node.children.push(copyChildNode);
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
      if (matched) {
        return true;
      }
    }
  };
  var isFilterMatched = function isFilterMatched(node, _ref) {
    var filterField = _ref.filterField,
      filterValue = _ref.filterValue,
      filterConstraint = _ref.filterConstraint,
      isStrictMode = _ref.isStrictMode,
      options = _ref.options;
    var matched = false;
    var dataFieldValue = utils.ObjectUtils.resolveFieldData(node.data, filterField);
    if (filterConstraint(dataFieldValue, filterValue, props.filterLocale, options)) {
      matched = true;
    }
    if (!matched || isStrictMode && !isNodeLeaf(node)) {
      matched = findFilteredNodes(node, {
        filterField: filterField,
        filterValue: filterValue,
        filterConstraint: filterConstraint,
        isStrictMode: isStrictMode
      }) || matched;
    }
    return matched;
  };
  var isNodeLeaf = function isNodeLeaf(node) {
    return node.leaf === false ? false : !(node.children && node.children.length);
  };
  var processData = function processData() {
    var data = props.value || [];
    if (!props.lazy) {
      if (data && data.length) {
        var filters = getFilters();
        var sortField = getSortField();
        var multiSortMeta = getMultiSortMeta();
        if (utils.ObjectUtils.isNotEmpty(filters) || props.globalFilter) {
          data = filterLocal(data);
        }
        if (sortField || utils.ObjectUtils.isNotEmpty(multiSortMeta)) {
          if (props.sortMode === 'single') data = sortSingle(data);else if (props.sortMode === 'multiple') data = sortMultiple(data);
        }
      }
    }
    return data;
  };
  React__namespace.useImperativeHandle(ref, function () {
    return {
      props: props,
      filter: filter,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var createTableHeader = function createTableHeader(columns, columnGroup) {
    var sortField = getSortField();
    var sortOrder = getSortOrder();
    var multiSortMeta = _toConsumableArray(getMultiSortMeta());
    var filters = getFilters();
    return /*#__PURE__*/React__namespace.createElement(TreeTableHeader, {
      columns: columns,
      columnGroup: columnGroup,
      tabIndex: props.tabIndex,
      onSort: onSort,
      sortField: sortField,
      sortIcon: props.sortIcon,
      sortOrder: sortOrder,
      multiSortMeta: multiSortMeta,
      resizableColumns: props.resizableColumns,
      onResizeStart: onColumnResizeStart,
      reorderableColumns: props.reorderableColumns,
      onDragStart: onColumnDragStart,
      onDragOver: onColumnDragOver,
      onDragLeave: onColumnDragLeave,
      onDrop: onColumnDrop,
      onFilter: onFilter,
      filters: filters,
      filterDelay: props.filterDelay,
      ptCallbacks: ptCallbacks,
      metaData: metaData
    });
  };
  var createTableFooter = function createTableFooter(columns, columnGroup) {
    return /*#__PURE__*/React__namespace.createElement(TreeTableFooter, {
      columns: columns,
      columnGroup: columnGroup,
      ptCallbacks: ptCallbacks,
      metaData: metaData
    });
  };
  var createTableBody = function createTableBody(value, columns) {
    return /*#__PURE__*/React__namespace.createElement(TreeTableBody, {
      value: value,
      checkboxIcon: props.checkboxIcon,
      columns: columns,
      expandedKeys: getExpandedKeys(),
      selectOnEdit: props.selectOnEdit,
      onToggle: onToggle,
      togglerTemplate: props.togglerTemplate,
      onExpand: props.onExpand,
      onCollapse: props.onCollapse,
      paginator: props.paginator,
      first: getFirst(),
      rows: getRows(),
      selectionMode: props.selectionMode,
      selectionKeys: props.selectionKeys,
      onSelectionChange: props.onSelectionChange,
      metaKeySelection: props.metaKeySelection,
      onRowClick: props.onRowClick,
      onRowMouseEnter: props.onRowMouseEnter,
      onRowMouseLeave: props.onRowMouseLeave,
      onSelect: props.onSelect,
      onUnselect: props.onUnselect,
      propagateSelectionUp: props.propagateSelectionUp,
      propagateSelectionDown: props.propagateSelectionDown,
      lazy: props.lazy,
      rowClassName: props.rowClassName,
      emptyMessage: props.emptyMessage,
      loading: props.loading,
      contextMenuSelectionKey: props.contextMenuSelectionKey,
      onContextMenuSelectionChange: props.onContextMenuSelectionChange,
      onContextMenu: props.onContextMenu,
      ptCallbacks: ptCallbacks,
      metaData: metaData
    });
  };
  var createPaginator = function createPaginator(position, totalRecords) {
    var className = utils.classNames('p-paginator-' + position, props.paginatorClassName);
    return /*#__PURE__*/React__namespace.createElement(paginator.Paginator, {
      first: getFirst(),
      rows: getRows(),
      pageLinkSize: props.pageLinkSize,
      className: className,
      onPageChange: onPageChange,
      template: props.paginatorTemplate,
      totalRecords: totalRecords,
      rowsPerPageOptions: props.rowsPerPageOptions,
      currentPageReportTemplate: props.currentPageReportTemplate,
      leftContent: props.paginatorLeft,
      rightContent: props.paginatorRight,
      alwaysShow: props.alwaysShowPaginator,
      dropdownAppendTo: props.paginatorDropdownAppendTo,
      pt: ptCallbacks.ptm('paginator')
    });
  };
  var createScrollableView = function createScrollableView(value, columns, frozen, headerColumnGroup, footerColumnGroup) {
    var header = createTableHeader(columns, headerColumnGroup);
    var footer = createTableFooter(columns, footerColumnGroup);
    var body = createTableBody(value, columns);
    return /*#__PURE__*/React__namespace.createElement(TreeTableScrollableView, {
      columns: columns,
      header: header,
      body: body,
      footer: footer,
      scrollHeight: props.scrollHeight,
      frozen: frozen,
      frozenWidth: props.frozenWidth,
      ptCallbacks: ptCallbacks,
      metaData: metaData
    });
  };
  var createScrollableTable = function createScrollableTable(value) {
    var columns = getColumns();
    var frozenColumns = getFrozenColumns(columns);
    var scrollableColumns = frozenColumns ? getScrollableColumns(columns) : columns;
    var frozenView, scrollableView;
    if (frozenColumns) {
      frozenView = createScrollableView(value, frozenColumns, true, props.frozenHeaderColumnGroup, props.frozenFooterColumnGroup);
    }
    scrollableView = createScrollableView(value, scrollableColumns, false, props.headerColumnGroup, props.footerColumnGroup);
    var scrollableWrapper = utils.mergeProps({
      className: 'p-treetable-wrapper p-treetable-scrollable-wrapper'
    }, ptCallbacks.ptm('scrollableWrapper'));
    return /*#__PURE__*/React__namespace.createElement("div", scrollableWrapper, frozenView, scrollableView);
  };
  var createRegularTable = function createRegularTable(value) {
    var columns = getColumns();
    var header = createTableHeader(columns, props.headerColumnGroup);
    var footer = createTableFooter(columns, props.footerColumnGroup);
    var body = createTableBody(value, columns);
    var tableClassName = utils.classNames('p-treetable-table', {
      'p-treetable-scrollable-table': props.scrollable,
      'p-treetable-resizable-table': props.resizableColumns,
      'p-treetable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
    }, props.tableClassName);
    var wrapperProps = utils.mergeProps({
      className: 'p-treetable-wrapper'
    }, ptCallbacks.ptm('wrapper'));
    var tableProps = utils.mergeProps({
      ref: tableRef,
      style: props.tableStyle,
      className: tableClassName
    }, ptCallbacks.ptm('table'));
    return /*#__PURE__*/React__namespace.createElement("div", wrapperProps, /*#__PURE__*/React__namespace.createElement("table", tableProps, header, footer, body));
  };
  var createTable = function createTable(value) {
    return props.scrollable ? createScrollableTable(value) : createRegularTable(value);
  };
  var createLoader = function createLoader() {
    if (props.loading) {
      var iconClassName = 'p-treetable-loading-icon';
      var loadingIconProps = utils.mergeProps({
        className: iconClassName
      }, ptCallbacks.ptm('loadingIcon'));
      var icon = props.loadingIcon || /*#__PURE__*/React__namespace.createElement(spinner.SpinnerIcon, _extends({}, loadingIconProps, {
        spin: true
      }));
      var loadingIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread({}, loadingIconProps), {
        props: props
      });
      var loadingWrapperProps = utils.mergeProps({
        className: 'p-treetable-loading'
      }, ptCallbacks.ptm('loadingWrapper'));
      var loadingOverlayProps = utils.mergeProps({
        className: 'p-treetable-loading-overlay p-component-overlay'
      }, ptCallbacks.ptm('loadingOverlay'));
      return /*#__PURE__*/React__namespace.createElement("div", loadingWrapperProps, /*#__PURE__*/React__namespace.createElement("div", loadingOverlayProps, loadingIcon));
    }
    return null;
  };
  var data = processData();
  var className = utils.classNames('p-treetable p-component', {
    'p-treetable-hoverable-rows': props.rowHover,
    'p-treetable-selectable': isRowSelectionMode(),
    'p-treetable-resizable': props.resizableColumns,
    'p-treetable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
    'p-treetable-striped': props.stripedRows,
    'p-treetable-gridlines': props.showGridlines
  }, props.className);
  var table = createTable(data);
  var totalRecords = getTotalRecords(data);
  var headerProps = utils.mergeProps({
    className: 'p-treetable-header'
  }, ptCallbacks.ptm('header'));
  var footerProps = utils.mergeProps({
    className: 'p-treetable-footer'
  }, ptCallbacks.ptm('footer'));
  var resizeHelperProps = utils.mergeProps({
    ref: resizerHelperRef,
    className: 'p-column-resizer-helper',
    style: {
      display: 'none'
    }
  }, ptCallbacks.ptm('resizeHelper'));
  var headerFacet = props.header && /*#__PURE__*/React__namespace.createElement("div", headerProps, props.header);
  var footerFacet = props.footer && /*#__PURE__*/React__namespace.createElement("div", footerProps, props.footer);
  var paginatorTop = props.paginator && props.paginatorPosition !== 'bottom' && createPaginator('top', totalRecords);
  var paginatorBottom = props.paginator && props.paginatorPosition !== 'top' && createPaginator('bottom', totalRecords);
  var loader = createLoader();
  var resizeHelper = props.resizableColumns && /*#__PURE__*/React__namespace.createElement("div", resizeHelperProps);
  var style = {
    position: 'absolute',
    display: 'none'
  };
  var reorderIndicatorUpProps = utils.mergeProps({
    className: 'p-datatable-reorder-indicator-up',
    style: _objectSpread({}, style)
  }, ptCallbacks.ptm('reorderIndicatorUp'));
  var reorderIndicatorUpIconProps = utils.mergeProps(ptCallbacks.ptm('reorderIndicatorUpIcon'));
  var reorderIndicatorUpIcon = props.reorderableColumns && utils.IconUtils.getJSXIcon(props.reorderIndicatorUpIcon || /*#__PURE__*/React__namespace.createElement(arrowdown.ArrowDownIcon, reorderIndicatorUpIconProps), _objectSpread({}, reorderIndicatorUpIconProps), {
    props: props
  });
  var reorderIndicatorUp = props.reorderableColumns && /*#__PURE__*/React__namespace.createElement("span", _extends({
    ref: reorderIndicatorUpRef
  }, reorderIndicatorUpProps), reorderIndicatorUpIcon);
  var reorderIndicatorDownProps = {
    className: 'p-datatable-reorder-indicator-down',
    style: _objectSpread({}, style)
  };
  var reorderIndicatorDownIconProps = utils.mergeProps(ptCallbacks.ptm('reorderIndicatorDownIcon'));
  var reorderIndicatorDownIcon = utils.IconUtils.getJSXIcon(props.reorderIndicatorDownIcon || /*#__PURE__*/React__namespace.createElement(arrowup.ArrowUpIcon, reorderIndicatorDownIconProps), _objectSpread({}, reorderIndicatorDownIconProps), {
    props: props
  });
  var reorderIndicatorDown = props.reorderableColumns && /*#__PURE__*/React__namespace.createElement("span", _extends({
    ref: reorderIndicatorDownRef
  }, reorderIndicatorDownProps), reorderIndicatorDownIcon);
  var rootProps = utils.mergeProps({
    ref: elementRef,
    id: props.id,
    className: className,
    style: props.style,
    'data-scrollselectors': '.p-treetable-wrapper'
  }, utils.ObjectUtils.findDiffKeys(props, TreeTable.defaultProps), ptCallbacks.ptm('root'));
  return /*#__PURE__*/React__namespace.createElement("div", rootProps, loader, headerFacet, paginatorTop, table, paginatorBottom, footerFacet, resizeHelper, reorderIndicatorUp, reorderIndicatorDown);
});
TreeTable.displayName = 'TreeTable';

exports.i = TreeTable;


/***/ })

};
;