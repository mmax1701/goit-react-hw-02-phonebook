import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ name }) => {
    return (
        <ul>
            <li>
                <p>{name}</p>
                <p></p>
            </li>
        </ul>
    )
}