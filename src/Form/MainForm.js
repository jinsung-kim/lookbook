import React, { Component } from "react";
import LinkDetails from "./LinkDetails";
import BasicDetails from "./BasicDetails";
import Success from "./Success";

import "../Styles/MainForm.css";

export default class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            type: "",
            link: "",
            imgLink: "",
            brand: "",
            name: "",
            size: "",
            tags: ""
        }

        this.nextStep = this.nextStep.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    // Next Step (Button)
    nextStep() {
        this.setState({ step: this.state.step + 1 });
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value });
        console.log(input);
        console.log(event.target.value);
    }

    render() {
        const { step } = this.state;
        switch(step) {
            case 0:
                return (
                    <div className="form-wrapper">
                        <LinkDetails 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        />
                    </div>
                );
            case 1:
                return (
                    <div className="form-wrapper">
                        <BasicDetails
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        />
                    </div>
                );
            case 2:
                return (
                    <div className="form-wrapper">
                        <Success />
                    </div>
                );
            default:
                return (
                    <div>
                        <p>This wasn't supposed to happen.</p>
                        <p>Try refreshing and starting again.</p>
                    </div>
                );
        }
    }
}

// Used to store each piece which will be passed down to the 
// class Piece {
//     constructor(name, brand, type, size, link, imgLink, tags) {
//         this.name = name;
//         this.brand = brand;
//         this.type = type;
//         this.size = size;
//         this.link = link;
//         this.imgLink = imgLink;
//         this.tags = tags;
//     }
// }