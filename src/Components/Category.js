import React, { Component } from "react";

import { Link } from 'react-router-dom';

import "../Styles/Category.css";

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            img: props.imgSrc,
            link: props.link,
        };
        this.onLinkClick = this.onLinkClick.bind(this);
    }

    onLinkClick() {
        window.open(this.state.link);
    }

    render() {
        // Takes in an image and a description
        return (
            <div>
                <Link className="redirect" to={ this.state.link } 
                    style={{ textDecoration: 'none' }}></Link>
                    <div className="category-wrapper" style={{ textDecoration: 'none' }} onClick = {this.onLinkClick}>
                            <div className = "card text-center">
                                <div className = "overflow">
                                    <img src = {this.state.img}
                                    alt = "placeholder" className= "card-img-top"/>
                                </div>
                            </div>
                    </div>
                <Link />
            </div>
        );
    }
}