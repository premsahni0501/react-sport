import React from 'react';

export const Div = (props) => { return (<div {...props}>{props.children}</div>) }

export const Nav = (props) => { return (<nav {...props}>{props.children}</nav>) }

export const A = (props) => { return (<a {...props}>{props.children}</a>) }

export const P = (props) => { return (<p {...props}>{props.children}</p>) }

export const Small = (props) => { return (<small {...props}>{props.children}</small>) }

export const Span = (props) => { return (<span {...props}>{props.children}</span>) }

export const Img = ({ alt, ...props }) => { return (<img {...props} alt="alt" />) }

export const Strong = (props) => { return (<strong {...props}></strong>) }

export const Button = (props) => { return (<button {...props}></button>) }

export const Input = (props) => { return (<input {...props} />) }
export const Label = (props) => { return (<label {...props}></label>) }

export const Select = (props) => { return (<select {...props}></select>) }
export const Option = (props) => { return (<option {...props}></option>) }

export const Htag = ({ tag, ...props }) => {
  const Heading = `h${tag}`;
  return (<Heading {...props}></Heading>)
}
export const List = ({ type, ...props }) => {
  const ListGroup = `${type}`;
  return (<ListGroup {...props}></ListGroup>)
}
export const ListItem = (props) => { return (<li {...props}></li>) }