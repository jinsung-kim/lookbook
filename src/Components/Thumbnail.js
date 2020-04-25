import React, { Component } from "react";

import axios from "axios";

// UI CSS File
import "../Styles/Thumbnail.css"

export default class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            img: props.imgSrc,
            link: props.link,
            id: props.id
        };
        this.onLinkClick = this.onLinkClick.bind(this);
        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.handleButtonRelease = this.handleButtonRelease.bind(this);
    }

    onLinkClick() {
        window.open(this.state.link);
    }

    handleButtonPress () {
        this.buttonPressTimer = setTimeout(() => this.deletePiece(), 1500);
    }
    
    handleButtonRelease () {
        clearTimeout(this.buttonPressTimer);
    }

    deletePiece() {
        alert(this.state.id + " has been deleted");
        axios.delete('http://localhost:5000/pieces/' + this.state.id)
        .then(response => { console.log(response.data)});
        console.log("Piece is being deleted");
    }

    render() {
        // Takes in an image and a description
        return (
            <div onTouchStart={this.handleButtonPress} 
                onTouchEnd={this.handleButtonRelease} 
                onMouseDown={this.handleButtonPress} 
                onMouseUp={this.handleButtonRelease} 
                onMouseLeave={this.handleButtonRelease} >
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
            </div>
        );
    }
}