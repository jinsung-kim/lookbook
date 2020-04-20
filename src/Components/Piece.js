import React, { Component } from "react";
import Thumbnail from "./Thumbnail";

export default class Piece extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            imgLink: props.imgLink,
            link: props.link,
            tags: props.tags,
            type: props.type,
            brand: props.brand,
            size: props.size
        }
    }
    render() {
        return (
            <div className="piece-wrapper">
                <Thumbnail  title={ this.state.name } imgSrc={ this.state.imgLink } 
                            link={ this.state.link } />
            </div>
        );
    }
}