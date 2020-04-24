import React, { Component } from "react";
import Thumbnail from "../Components/Thumbnail";
import MainForm from "../Form/MainForm";

import axios from "axios";

import { Container, Row, Col } from 'reactstrap';

// https://www.youtube.com/watch?v=OlVkYnVXPl0

export default class Lookbook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            open: false,
            // Closet refers to all of the pieces
            closet: []
        };
        this.dropDown = this.dropDown.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/pieces/')
      .then(response => {
        this.setState({ closet: response.data }, () => console.log(this.state.closet))
      })
      .catch((error) => {
        console.log(error);
      });
    }

    dropDown(e) {
        e.preventDefault();
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const pieces = this.state.closet.map((piece) => 
            <Col>
                <div className="item">
                    <Thumbnail title={piece.name}
                            imgSrc={piece.imgLink}
                            link={piece.link} />
                </div>
            </Col>
        )
        return (
            <div className="outfits-wrapper">
                <h1>Lookbook</h1>
                <div onClick={ (e)=>this.dropDown(e) } className="header">
                    <p>{(this.state.open) ? "Save Piece" : "Add a Piece"}</p></div>
                    {this.state.open ? (
                    <div className="content">
                        <MainForm />
                    </div>
                    ) : null}
                <Container>
                    <Row xs="4">
                        {pieces}
                    </Row>
                </Container>
            </div>
        );
    }
}