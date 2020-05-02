import React, { Component } from "react";
import "../Styles/Snippet.css";

export default class Snippet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            body: props.body,
            imgLink: props.imgLink
        };
    }

    render() {
        return (
            <div className="thumbnail-wrapper" style={{ textDecoration: 'none' }} >
                        <div className = "card text-center">
                            <div className = "overflow">
                                <img src = {this.state.imgLink} 
                                alt = "placeholder" className= "card-img-top"/>
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">
                                    {this.state.title}
                                </h4>
                                <p>
                                    {this.state.body}
                                </p>
                            </div>
                        </div>
                </div>
        );
    }
}