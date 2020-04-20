import React, { Component } from "react";
import { Form, Button } from 'semantic-ui-react';


export default class LinkDetails extends Component {
    
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
            <div>
                <Form >
                {/* <h1 className="ui centered">Enter User Details</h1> */}
                <Form.Field>
                    <label>Link to Item</label>
                    <input
                    placeholder=''
                    onChange={this.props.handleChange('link')}
                    // defaultValue={values.link}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Link to Image</label>
                    <input
                    placeholder=''
                    onChange={this.props.handleChange('imgLink')}
                    // defaultValue={values.imgLink}
                    />
                </Form.Field>
                <Button onClick={ this.saveAndContinue }> Save And Continue </Button>
            </Form>
            </div>
        );
    }
}