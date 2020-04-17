import React, { Component } from "react";
import Thumbnail from "../Components/Thumbnail";

export default class Outfits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <div className="outfits-wrapper">
                <h1>Outfits Page</h1>
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
            </div>
        );
    }
}