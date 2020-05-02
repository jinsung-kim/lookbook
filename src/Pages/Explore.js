import React, { Component } from "react";
import Category from "../Components/Category";
import Piece from "../Components/Piece";

import { Container, Row, Col } from 'reactstrap';

const styles = [
    {
        title: "Streetwear",
        link: "/streetwear",
        imgLink: "https://images.ctfassets.net/bdvz0u6oqffk/5LUOscX5hEPyuNfZBBmQzV/8fc6b0eb699d7bb0643c4b628f9fe64b/Streetwear.jpg?fm=webp&h=490&w=780"
    }, {
        title: "Vintage",
        link: "/vintage",
        imgLink: "https://images.ctfassets.net/bdvz0u6oqffk/1hIBFy4IPrTtRQpi9XmqF9/5e5c8e86fea5e5df7e64e50d82a2a371/Vintage.jpg?fm=webp&h=490&w=780"
    }, {
        title: "Techwear",
        link: "/techwear",
        imgLink: "https://images.ctfassets.net/bdvz0u6oqffk/27DT3rnAiyBqhSJnynb8zG/a1c2b1be686b8034fb332305528c2bb1/tech_gear.jpg?fm=webp&h=490&w=780"
    }, {
        title: "Luxury",
        link: "/luxury",
        imgLink: "https://images.ctfassets.net/bdvz0u6oqffk/4p3UHBu7izvqBaDPy5Pexz/e1b63de80a617a0cdcf82260d07a9177/Luxury.jpg?fm=webp&h=490&w=780"
    }, {
        title: "Avant Garde",
        link: "/avantgarde",
        imgLink: "https://images.ctfassets.net/bdvz0u6oqffk/6BScyQVo2LkM7RRRrzIjsN/6d353ff6ae9af90fa9aaed82dd60629d/Avant_Garde.jpg?fm=webp&h=490&w=780"
    }, {
        title: "Minimalist",
        link: "/minimalist",
        imgLink: "https://images.ctfassets.net/bdvz0u6oqffk/6pZ0W6hhTRjbKgOcuor0y9/cc17173794cecd83f2c17fde3aecd5d2/Minimalist.jpg?fm=webp&h=490&w=780"
    }
]

const recommendations = [
    {
        title: "Raiders Varsity Jacket",
        link: "https://www.grailed.com/listings/14027521-nfl-x-oakland-raiders-x-varsity-jacket-oakland-raiders-varsity-jacket",
        imgLink: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:640,width:480,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/rh7r75qaRUG8gtv763Or"
    }, {
        title: "Nike Air Max 2019",
        link: "https://www.grailed.com/listings/14142572-nike-air-vapormax-2019-ghost-black-2019",
        imgLink: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:640,width:480,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/GwClP7KURxmNZkIN8jlk"
    }, {
        title: "Kapital Striped Shirt",
        link: "https://www.grailed.com/listings/13125455-kapital-kapital-stripes-sweatshirt",
        imgLink: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:640,width:480,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/vZBmyVTHQRmXqLOWbQs6"
    }, {
        title: "Bjork Debut Album T Shirt",
        link: "https://www.grailed.com/listings/14309238-band-tees-x-movie-rare-bjork-debut-album-winterland-t-shirt",
        imgLink: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:640,width:480,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/tSfOWPTQTniXnD91pYFz"
    }
]

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            styles: styles,
            recommendations: recommendations
        }
    }
    
    render() {
        const categories = this.state.styles.map((category) => 
            <Col>
                <div className="category">
                    <Category title={category.title}
                            imgSrc={category.imgLink}
                            link={category.link} />
                </div>
            </Col>
        );
        const algorithm = this.state.recommendations.map((item) => 
            <Col>
                <Piece  name={item.title}
                        imgLink={item.imgLink}
                        link={item.link} />
            </Col>  
        );
        return (
            <div className="explore-wrapper">
                <h3>Based on Your Lookbook...</h3>
                <div className="algorithm">
                    <Container>
                        <Row xs="4">
                            {algorithm}
                        </Row>
                    </Container>
                </div>
                <p></p>
                <h3>Discover a New Style</h3>
                <div className="categories">
                    <Container>
                        <Row xs="3">
                            {categories}
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}