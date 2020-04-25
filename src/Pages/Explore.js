import React, { Component } from "react";
import Category from "../Components/Category";

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

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            styles: styles
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
        return (
            <div className="explore-wrapper">
                <h1>Discover a New Style</h1>
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