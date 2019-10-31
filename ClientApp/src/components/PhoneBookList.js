import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Phonebook.css';

class PhoneBookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: [],
            loading: false,
            message: ''
        };

        fetch('api/PhoneBook/', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(resData => {
                this.setState({ loading: false, results: resData });
            });
    }
    fetchSearchResult = (query) => {

        fetch('api/PhoneBook/'+query, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(resData => {
                this.setState({ loading:false, results: resData });
            });

    }


    handleOnInputChange = (event) => {
        const query = event.target.value;
        if (!query) {
            fetch('api/PhoneBook/', {
                method: 'GET'
            })
                .then(response => response.json())
                .then(resData => {
                    this.setState({ loading: false, results: resData });
                });
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResult(query);
            });
        }

        event.preventDefault();
    };

    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <p>Search the phonebook.</p>
                <input
                    type="text"
                    class="form-control"
                    
                    id="search-input"
                    placeholder="Search..."
                    onChange={this.handleOnInputChange}
                />
                <div className={`search-loading ${this.state.loading ? 'show' : 'hide'}`} alt="loader">
                    LOADING...
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.results.map(result =>
                            <tr key={result.id}>
                                <td>{result.name}</td>
                                <td>{result.number}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect()(PhoneBookList);
