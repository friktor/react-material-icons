"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _svgMorpheus = require("svg-morpheus");

var _svgMorpheus2 = _interopRequireDefault(_svgMorpheus);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* */


/*
@name: MorphIcon
@desc: component for handle & actions
       for morph change icon effect.
*/

var MorphIcon = function (_React$Component) {
  _inherits(MorphIcon, _React$Component);

  function MorphIcon() {
    _classCallCheck(this, MorphIcon);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MorphIcon).call(this));

    _this.morph = _this.make.bind(_this);
    _this.make = _this.make.bind(_this);
    return _this;
  }

  _createClass(MorphIcon, [{
    key: "morph",
    value: function morph(icon) {
      /* morph to next status by ion */
      this.Morph.to(icon);
    }
  }, {
    key: "make",
    value: function make(shapes) {
      /* make path icons for morph actions (serealize) */
      var embedded = "";
      Object.keys(shapes).forEach(function (key) {
        return embedded += shapes[key];
      });
      return embedded;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      /* find target node */
      var props = this.props,
          container = _reactDom2.default.findDOMNode(this.refs.svgBox);
      /* calc options */
      var options = props.options ? props.options : {};
      /* make morph instance */
      this.Morph = new _svgMorpheus2.default(container, options);
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var make = this.make;
      /* make svg ions variantions */

      var icons = make(props.shapes);
      /* calc size */
      var size = props.size || 25;
      /* svg container props attrs */
      var attrs = {
        width: size, height: size,
        viewBox: "0 0 24 24",
        style: props.style,
        ref: "svgBox",
        // Set inner html shapes
        dangerouslySetInnerHTML: { __html: icons }
      };

      /* complete handled svg with morphs set */
      return _react2.default.createElement("svg", attrs);
    }
  }]);

  return MorphIcon;
}(_react2.default.Component);

MorphIcon.propTypes = {
  style: _react2.default.PropTypes.object,
  size: _react2.default.PropTypes.number
};
exports.default = MorphIcon;