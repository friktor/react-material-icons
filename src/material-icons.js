/* */
import SVGMorpheus from "svg-morpheus";
import ReactDOM from "react-dom";
import React from "react";

window.SVGMorpheus = SVGMorpheus;

/*
@name: MorphIcon
@desc: component for handle & actions
       for morph change icon effect.
*/

export default class MorphIcon extends React.Component {
  static propTypes = {
    style: React.PropTypes.object,
    size: React.PropTypes.number
  };

  constructor() {
    super();

    this.morph = this.morph.bind(this);
    this.make = this.make.bind(this);
  }

  morph(icon) {
    /* morph to next status by ion */
    console.log(this.Morph);
    this.Morph.to(icon);
  }

  make(shapes) {
    /* make path icons for morph actions (serealize) */
    var embedded = "";
    Object.keys(shapes).forEach(key => embedded += shapes[key]);
    return embedded;
  }

  componentDidMount() {
    /* find target node */
    var props = this.props, container = ReactDOM.findDOMNode(this.refs.svgBox);
    /* calc options */
    var options = props.options ? props.options : {};
    /* make morph instance */
    console.log(options);
    this.Morph = new SVGMorpheus(container, options);
  }

  render() {
    var {props, make} = this;
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
    return (
      <svg {...attrs}></svg>
    );
  }
}
