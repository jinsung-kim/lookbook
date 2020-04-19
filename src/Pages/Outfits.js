import React, { Component } from "react";
import Fit from "../Components/Fit";

// https://www.youtube.com/watch?v=OlVkYnVXPl0

export default class Outfits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            open: false,
            link: null
        };

        this.addFit = this.addFit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addFit(e) {
        e.preventDefault();
        this.setState({
            open: !this.state.open
        });
    }

    handleSubmit(e) {
        this.setState({ link: e.target.value });
        alert('A name was submitted: ' + this.state.link);
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({ link: e.target.value });
    }

    render() {
        return (
            <div className="outfits-wrapper">
                <h1>Outfits Page</h1>
                <div onClick={ (e)=>this.addFit(e) } className="header">
                    <p>Add Fit</p></div>
                    {this.state.open ? (
                    <div className="content">
                    <p>This is now open</p>
                    <form onSubmit={ this.handleSubmit }>
                        <label>
                        Link:
                        <input type="text" value={this.state.link} onChange={ this.handleChange } />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    </div>
                    ) : null}
                <Fit />
            </div>
        );
    }
}