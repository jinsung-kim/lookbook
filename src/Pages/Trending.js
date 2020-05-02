
import React, { Component } from "react";
import Snippet from "../Components/Snippet";

const titles = ["Sukami"];
const descriptions = [`Sukamii has emerged in the streetwear scene recently, heavily influenced by Japanese brands Bape and Takashi Murakumi.
                        It is typically recognized by cartoon characters as the primary design, and nothing else. Despite it's small
                        name, it continues to sell out`];

export default class Trending extends Component {
    render() {
        return (
            <div className="trending-wrapper">
                <h3>Trending Page</h3>
                <div>
                    <h4>Hot Styles</h4>
                    <Snippet    title={titles[0]}
                                body={descriptions[0]}
                                imgLink="https://d2lllwtzebgpl1.cloudfront.net/8ffbb7797f6bcf5a9c9ee2ea87c48b2c_listingImg_Jie2bxZ8Yh.jpg"
                                />
                    <Snippet />
                    <Snippet />
                </div>
                <div>
                    <h4>Spotlighted Brands</h4>
                    <Snippet />
                    <Snippet />
                    <Snippet />
                </div>
            </div>
        );
    }
}