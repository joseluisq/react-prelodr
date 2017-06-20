'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _prelodr = require('prelodr');

var _prelodr2 = _interopRequireDefault(_prelodr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactPrelodr = function (_Component) {
  _inherits(ReactPrelodr, _Component);

  function ReactPrelodr() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactPrelodr);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactPrelodr.__proto__ || Object.getPrototypeOf(ReactPrelodr)).call.apply(_ref, [this].concat(args))), _this), _this.show = function (str) {
      return _this.prelodr.show(str);
    }, _this.hide = function () {
      return _this.prelodr.hide();
    }, _this.getPrelodr = function () {
      return _this.prelodr;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactPrelodr, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var Container = this.props.container;

      return _react2.default.createElement(Container, { ref: function ref(node) {
          return _this2.container = node;
        } });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.prelodr) {
        this.prelodr = (0, _prelodr2.default)({
          container: this.container,
          duration: this.props.duration,
          prefixClass: this.props.prefixClass,
          zIndex: this.props.zIndex,
          auto: this.props.auto,
          text: this.props.text
        });
      }

      this.addEventShown();
      this.addEventHidden();
    }
  }, {
    key: 'addEventShown',
    value: function addEventShown() {
      var _this3 = this;

      this.prelodr.on('shown', function () {
        _this3.setState({ active: true });

        if (_this3.props.onShown && typeof _this3.props.onShown === 'function') {
          _this3.props.onShown();
        }
      });
    }
  }, {
    key: 'addEventHidden',
    value: function addEventHidden() {
      var _this4 = this;

      this.prelodr.on('hidden', function () {
        _this4.setState({ active: false });

        if (_this4.props.onHidden && typeof _this4.props.onHidden === 'function') {
          _this4.props.onHidden();
        }
      });
    }
  }]);

  return ReactPrelodr;
}(_react.Component);

ReactPrelodr.propTypes = {
  container: _propTypes2.default.string,
  duration: _propTypes2.default.number,
  prefixClass: _propTypes2.default.string,
  zIndex: _propTypes2.default.number,
  auto: _propTypes2.default.bool,
  text: _propTypes2.default.string,
  onShown: _propTypes2.default.func,
  onHidden: _propTypes2.default.func
};
ReactPrelodr.defaultProps = {
  container: 'span',
  duration: 750,
  prefixClass: 'prelodr',
  zIndex: 100,
  auto: false,
  text: 'Loading...',
  onShown: null,
  onHidden: null
};
exports.default = ReactPrelodr;
