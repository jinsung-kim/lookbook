import React, { Component } from "react";

import "../Styles/Home.css";

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
                        <p>Image goes here</p>
                    </div>
                    <div className="grid-item">
                        <p>Image goes here</p>
                    </div>
                    <div className="grid-item">
                        <h4>Why Use Lookbook?</h4>
                        <p>Lookbook is an application built on helping users explore fashion and find inspiration.</p>
                        <p>It is based on adding pieces to a closet, in which you can match with other pieces to create an outfit or test new colors.</p>
                    </div>
                    <div className="grid-item">
                        <h4>Philosophy</h4>
                        <p>A means to reduce the impact of fast fashion, and the constant need to buy.</p>
                        <p>When we see something on sale, our immediate instinct is to purchase.</p>
                        <p>We end up with a closet in which we over consume.</p>
                        <p>Lookbook encourages sustainable fashion, and mindful purchasing, by pushing users to think deeper about what they want.</p>
                    </div>
                    <div className="grid-item">
                        <p>Image goes here</p>
                    </div>
                </div>
            </div>
        );
    }
}