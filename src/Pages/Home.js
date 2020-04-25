import React, { Component } from "react";

import "../Styles/Home.css";

const link1 = "https://i.imgur.com/NOjwBQn.png";
const link2 = "https://i.imgur.com/Q849Uhy.png";
const link3 = "https://www.retail-insight-network.com/wp-content/uploads/sites/20/2020/02/shutterstock_1083501086.jpg";

export default class Home extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <h1>Lookbook</h1>
                <h2>A virtual curated closet</h2>
                <div className="grid-container">
                    <div className="grid-item">
                        <h4>What is Lookbook?</h4>
                        <p>Lookbook is an application built on helping users explore fashion and find inspiration.</p>
                        <p>It is based on adding pieces to a closet, in which you can match with other pieces to create an outfit or test new colors.</p>
                    </div>
                    <div className="grid-item">
                        <img src={link1} alt="lookbook" height="350"/>
                    </div>
                    <div className="grid-item">
                        <img src={link2} alt="lookbook" width="550"/>
                    </div>
                    <div className="grid-item">
                        <h4>Why Use Lookbook?</h4>
                        <p>Lookbook uses an algorithm that helps expand one’s collection based on what they are interested in.</p>
                        <p>Lookbook holds all your pieces for you and suggests new brands and pieces you might be interested in.</p>
                        <p>Whether it's form or functionality or trying to find that perfect piece, Lookbook can help you curate your closet.</p>
                    </div>
                    <div className="grid-item">
                        <h4>Philosophy</h4>
                        <p>A means to reduce the impact of fast fashion, and the constant need to buy.</p>
                        <p>When we see something on sale, our immediate instinct is to purchase.</p>
                        <p>We end up with a closet in which we over consume.</p>
                        <p>Lookbook encourages sustainable fashion, and mindful purchasing, by pushing users to think deeper about what they want.</p>
                    </div>
                    <div className="grid-item">
                        <img src={link3} alt="lookbook" width="400"/>
                    </div>
                </div>
            </div>
        );
    }
}