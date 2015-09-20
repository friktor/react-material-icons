import SVGMorpheus from "svg-morpheus";
import shapes from "./shapes";
import React from "react";


/*
@name: MorphIcon
@desc: component for handle & actions 
       for morph change icon effect.
*/

export default class MorphIcon extends React.Component {
  constructor() {
    /* set default shapes */
    this.shapes = shapes;
  }

  morph(icon) {
    /* morph to next status by ion */
    this.Morph.to(icon);
  }

  make(shapes) {
    /* make path icons for morph actions (serealize) */
    return this.props.icons.map((icon, i) => {
      /* attrs props for icon */
      var attrs = { id: icon, key: i, dangerouslySetInnerHTML: { __html: shapes[icon] } };
      return <g {...attrs}></g>;
    });
  }

  componentDidMount() {
    /* find target node */
    var props = this.props, container = this.findDOMNode(this.refs.svgBox);
    /* calc options */
    var options = props.options ? props.options : {};
    /* make morph instance */
    this.Morph = new SVGMorpheus(container, options);
  }

  render() {
    var props = this.props;
    /* make svg ions variantions */
    if (props.custom) var icons = this.make(props.shapes);
    else var icons = this.make(this.shapes);
    /* calc size */
    var size = this.props.size || 25;
    /* svg container props attrs */
    var attrs = {
      xmlns: "http://www.w3.org/2000/svg",
      width: size, height: size,
      viewBox: "0 0 24 24",
      style: props.style,
      ref: "svgBox",
    };

    /* complete handled svg with morphs set */
    return <svg {...attrs}>{icons}</svg>;
  }
}