import './Card.css';
import React from "react";

const Card = (props) => {
    const classes = 'card ' + props.className;
    // {props.children}は、このCardを他のComponentでopen tag, close tag使用するため設定
    return <div className={classes}>{props.children}</div>
}

export default Card;