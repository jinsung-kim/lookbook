import React, { Component } from "react";
// import Fit from "../Components/Piece";
import Thumbnail from "../Components/Thumbnail";

import { Container, Row, Col } from 'reactstrap';

// https://www.youtube.com/watch?v=OlVkYnVXPl0

export default class Pieces extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            open: false,
            link: "",
            type: "",
            // Closet refers to all of the pieces
            closet: []
        };

        this.addFit = this.addFit.bind(this);
        this.handleLinkChange = this.handleLinkChange.bind(this);
        this.handleLinkSubmit = this.handleLinkSubmit.bind(this);
    }

    addFit(e) {
        e.preventDefault();
        this.setState({
            open: !this.state.open
        });
    }

    // Link Related
    handleLinkSubmit(e) {
        this.setState({ link: e.target.value });
        alert('A link was submitted: ' + this.state.link);
        e.preventDefault();
    }

    handleLinkChange(e) {
        this.setState({ link: e.target.value });
    }

    render() {
        return (
            <div className="outfits-wrapper">
                <h1>Pieces Saved</h1>
                <div onClick={ (e)=>this.addFit(e) } className="header">
                    <p>Add a Piece</p></div>
                    {this.state.open ? (
                    <div className="content">
                    <form onSubmit={ this.handleLinkSubmit }>
                        <label>
                        Link:
                        <input type="text" value={ this.state.link } onChange={ this.handleLinkChange } />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    </div>
                    ) : null}
                <div className="search-wrapper">
                    <p>This is where the search will go</p>
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

// Used to store each piece which will be passed down to the 
class Piece {
    constructor() {
        
    }
}