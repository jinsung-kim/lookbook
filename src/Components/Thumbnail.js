import React, { Component } from "react";
import { Link } from 'react-router-dom';

// UI CSS File
import "../Styles/Thumbnail.css"

export default class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            // Image File link
            img: props.imgSrc,
            link: props.link
        };
    }
    render() {
        // Takes in an image and a description
        return (
            <div className="thumbnail-wrapper">
                    <Link className="redirect" to={ this.state.link } 
                    style={{ textDecoration: 'none' }}>
                    <div className = "card text-center">
                        <div className = "overflow">
                            <img src = {this.state.img} 
                            alt = "placeholder" className= "card-img-top"/>
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">
                                {this.state.title}
                            </h4>
                            <p className="card-text text-secondary">
                                {this.state.description}
                            </p>
                        </div>
                    </div>
                    </Link>
            </div>
        );
    }
}