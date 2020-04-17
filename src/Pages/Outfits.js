import React, { Component } from "react";
import Fit from "../Components/Fit";

export default class Outfits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    }
    addFit() {

    }
    render() {
        return (
            <div className="outfits-wrapper">
                <h1>Outfits Page</h1>
                <Fit />
            </div>
        );
    }
}