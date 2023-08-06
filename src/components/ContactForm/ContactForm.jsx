import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
    state = {
        contacts: [],
        name: ''
    };
    
    handleChange = e => {
        this.setState({ name: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.createUser({...this.state})
    }

    render() {
        const { name } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                />
            
                <button type='submit'>Add contact</button>
            </form>
        );
    }
}