import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddToPhoneBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            number: ""
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
    
        const data = new FormData(event.target);

        let entry = {
            name: this.state.name,
            number: this.state.number
        }

        fetch('api/PhoneBook/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry)
        })
            .then(alert("New Entry Added"));

        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <h1>Add an Entry to the Phonebook</h1>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input class="form-control" id="name" name="name" onChange={this.handleChange} type="text" placeholder="Name" aria-label="Name" />
                    </div>
                    <div class="form-group">
                        <label for="number">Number</label>
                        <input class="form-control" id="number" name="number" onChange={this.handleChange} type="text" placeholder="Number" aria-label="Number" />
                        </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddToPhoneBook);