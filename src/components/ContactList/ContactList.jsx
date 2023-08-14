import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contactList, deleteContact }) => {
    return (
        <ul>
            {contactList.map(
                ({id, name, number}) => (
                    <li key={id} className={css.list}>
                        <span>{name}: {number}</span>
                        <button type='button' onClick={() => { deleteContact(id) }}>Delete</button>
                    </li>
                )
            )}
        </ul>
        
    )
}

ContactList.propTypes = {
    contactList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    deleteContact: PropTypes.func.isRequired
}