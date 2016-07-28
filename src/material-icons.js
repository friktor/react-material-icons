/* */
import SVGMorpheus from "svg-morpheus";
import ReactDOM from "react-dom";
import React from "react";


/*
@name: MorphIcon
@desc: component for handle & actions
       for morph change icon effect.
*/

export default class MorphIcon extends React.Component {
  static propTypes = {
    shapes: React.PropTypes.objectOf(React.PropTypes.string),
    style: React.PropTypes.object,
    size: React.PropTypes.number
  };

  constructor() {
    super();

    this.morph = this.make.bind(this);
    this.make = this.make.bind(this);
  }

  morph(icon) {
    /* morph to next status by ion */
    this.Morph.to(icon);
  }

  make(shapes) {
    /* make path icons for morph actions (serealize) */
    return this.props.icons.map((icon, i) => {
      /* attrs props for icon */
      var attrs = { id: icon, key: 'shape-icon-sd-'+i };
      return <g {...attrs}>{shapes[icon]}</g>;
    });
  }

  componentDidMount() {
    /* find target node */
    var props = this.props, container = ReactDOM.findDOMNode(this.refs.svgBox);
    /* calc options */
    var options = props.options ? props.options : {};
    /* make morph instance */
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
      ref: "svgBox"
    };

    /* complete handled svg with morphs set */
    return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...attrs}>
        {icons}
      </svg>
    );
  }
}
