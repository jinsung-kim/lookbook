import React, { Component } from "react";
import { Form, Button } from 'semantic-ui-react';

export default class BasicDetails extends Component {
    
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
            <div>
                <Form >
                <Form.Field>
                    <label>Name</label>
                    <input
                    placeholder=''
                    onChange={this.props.handleChange('name')}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Brand</label>
                    <input
                    placeholder=''
                    onChange={this.props.handleChange('brand')}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Tags</label>
                    <input
                    placeholder=''
                    onChange={this.props.handleChange('tagString')}
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
                    <input
                    placeholder=''
                    onChange={this.props.handleChange('size')}
                    />
                </Form.Field>
                <Button onClick={ this.saveAndContinue }> Add Piece </Button>
            </Form>
            </div>
        );
    }
}