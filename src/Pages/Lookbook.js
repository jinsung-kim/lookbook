import React, { Component } from "react";
// import Fit from "../Components/Piece";
import Thumbnail from "../Components/Thumbnail";
import MainForm from "../Form/MainForm";

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

    dropDown(e) {
        e.preventDefault();
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <div className="outfits-wrapper">
                <h1>Pieces Saved</h1>
                <div onClick={ (e)=>this.dropDown(e) } className="header">
                    <p>Add a Piece</p></div>
                    {this.state.open ? (
                    <div className="content">
                        <MainForm />
                    </div>
                    ) : null}
                <div className="search-wrapper">
                    {/* <p>This is where the search will go</p> */}
                </div>
                <Container>
                 <h5> {this.state.name} </h5>
                <Row xs="4">
                    <Col>
                    <div className="item">
                    <Thumbnail title = "Golf Wang Fisheye Beanie"
                            imgSrc = "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400,fit:scale/output=quality:90/compress/https://cdn.fs.grailed.com/api/file/tX9JjZeqRmuPpBUip3t8"
                            link = "https://www.grailed.com/listings/14076385-golf-wang-golf-wang-fisheye-beanie"/>
                    </div>
                    </Col>
                    <Col>
                    <div className="item">
                    <Thumbnail title = "Golf Wang T Shirt"
                            imgSrc = "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400,fit:scale/output=quality:90/compress/https://cdn.fs.grailed.com/api/file/ETomFa3BQfi8K0J4DWlv"
                            link = "https://www.grailed.com/listings/14059811-golf-wang-golf-t-shirt"/>
                    </div>
                    </Col>
                    <Col>
                    <div className="item">
                    <Thumbnail title = "Rick Owens Creatch Cargo"
                            imgSrc = "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400,fit:scale/output=quality:90/compress/https://cdn.fs.grailed.com/api/file/MUPAwoiNSmm4923SCXqB"
                            link = "https://www.grailed.com/listings/14075955-rick-owens-creatch-cargo"/>
                    </div>
                    </Col>
                    <Col>
                    <div className="item">
                    <Thumbnail title = "Air Jordan 1 Yin Yang"
                            imgSrc = "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400,fit:scale/output=quality:90/compress/https://cdn.fs.grailed.com/api/file/rQtSxfPRIiLrjuUt9kBS"
                            link = "https://www.grailed.com/listings/14043508-jordan-brand-air-jordan-1-retro-high-og-premium-yin-yang"/>
                    </div>
                    </Col>
                    <Col>
                    <div className="item">
                    <Thumbnail title = "Ralph Lauren Topcoat"
                            imgSrc = "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400,fit:scale/output=quality:90/compress/https://cdn.fs.grailed.com/api/file/QiTlJPWS8K5HvogMxglR"
                            link = "https://www.grailed.com/listings/12553563-polo-ralph-lauren-polo-ralph-lauren-top-coat"/>
                    </div>
                    </Col>
                    <Col>
                    <div className="item">
                    <Thumbnail title = "Nike Sweatshirt"
                            imgSrc = "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400,fit:scale/output=quality:90/compress/https://cdn.fs.grailed.com/api/file/2mZKpFPgSmTQcilNz93H"
                            link = "https://www.grailed.com/listings/5750421-nike-sweatshirts"/>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}