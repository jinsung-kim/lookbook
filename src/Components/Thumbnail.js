import React, { Component } from "react";
// import { Link } from 'react-router-dom';

// UI CSS File
import "../Styles/Thumbnail.css"

export default class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            // All of the relevant tags used to curate more styles and search
            tags: [],
            // Image File link
            img: props.imgSrc,
            link: props.link
        };
        this.onLinkClick = this.onLinkClick.bind(this);
    }
    onLinkClick() {
        window.open(this.state.link);
    }
    render() {
        // Takes in an image and a description
        return (
            <div className="thumbnail-wrapper" style={{ textDecoration: 'none' }} onClick = {this.onLinkClick}>
                    <div className = "card text-center">
                        <div className = "overflow">
                            <img src = {this.state.img} 
                            alt = "placeholder" className= "card-img-top"/>
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">
                                {this.state.title}
                            </h4>
                        </div>
                    </div>
            </div>
        );
    }
}