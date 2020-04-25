import React, { Component } from "react";

// Backend
// import axios from "axios";

export default class Success extends Component {

    create() {
        const newPiece = {
            name: this.props.name,
            brand: this.props.brand,
            size: this.props.size,
            type: this.props.type,
            tags: this.props.tags,
            link: this.props.link,
            imgLink: this.props.imgLink
        }
        console.log(newPiece);
        // axios.post("http://localhost:5000/pieces/add", newPiece).then(res => console.log(res.data));
    }

    componentDidMount() {
        this.create();
    }
    
    render() {
        return (
            <div>
                <h5>Saved Successfully</h5>
                <p>Refresh Page</p>
            </div>
        );
    }
}