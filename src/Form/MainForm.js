import React, { Component } from "react";
import LinkDetails from "./LinkDetails";
import BasicDetails from "./BasicDetails";
import Success from "./Success";

// Backend call
import axios from "axios";

import "../Styles/MainForm.css";

export default class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            type: "Outerwear",
            link: "",
            imgLink: "",
            brand: "",
            name: "",
            size: "OS",
            tagString: "",
            tags: [],
            counter: 0,
            complete: false
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
    }

    handleTags() {
        var tagsSplit = this.state.tagString.split(/[\s,]+/);
        // Because asynchronous
        this.setState({ tags: tagsSplit }, () => console.log(this.state.tags));
        this.createAndSend();
    }

    createAndSend() {
        const newPiece = {
            name: this.state.name,
            brand: this.state.brand,
            size: this.state.size,
            type: this.state.type,
            tags: this.state.tags,
            link: this.state.link,
            imgLink: this.state.imgLink
        }

        console.log(newPiece);

        axios.post("http://localhost:5000/pieces/add", newPiece).then(res => console.log(res.data));

        // window.location = "/";
    }

    render() {
        const { step } = this.state;
        // Separate the tags
        if (this.state.complete === false && step === 2 && this.state.counter === 0) {
            this.setState({ 
                complete: true,
                counter: 1
            });
            this.handleTags();
        }
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