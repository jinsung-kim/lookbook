import React, { Component } from "react";
import { Form, Button } from 'semantic-ui-react';

export default class BasicDetails extends Component {
    
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.alterTags();
        this.props.nextStep();
    }

    render() {
        return (
            <div>
                <Form >
                {/* <h1 className="ui centered">Enter User Details</h1> */}
                <Form.Field>
                    <label>Name</label>
                    <input
                    placeholder=''
                    onChange={this.props.handleChange('name')}
                    // defaultValue={values.link}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Brand</label>
                    <input
                    placeholder=''
                    onChange={this.props.handleChange('brand')}
                    // defaultValue={values.imgLink}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Tags</label>
                    <input
                    placeholder=''
                    onChange={this.props.handleChange('tags')}
                    // defaultValue={values.imgLink}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Type</label>
                    <select onChange={this.props.handleChange('type')}>
                        <option value="Hat">Hat</option>
                        <option value="Top">Top</option>
                        <option value="Pants">Pants</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Outerwear">Outerwear</option>
                        <option value="Accessory">Accessory</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Size</label>
                    <select onChange={this.props.handleChange('size')}>
                        <option value="Hat">OS</option>
                        <option value="Top">XS</option>
                        <option value="Pants">S</option>
                        <option value="Shoes">M</option>
                        <option value="Outerwear">L</option>
                        <option value="Accessory">XL</option>
                    </select>
                </Form.Field>
                <Button onClick={ this.saveAndContinue }> Add Piece </Button>
            </Form>
            </div>
        );
    }
}