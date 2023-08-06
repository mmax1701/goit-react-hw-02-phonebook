import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';





export const App = () => {
  return (
<div>
  <h1>Phonebook</h1>
  <ContactForm/>

  <h2>Contacts</h2>
  {/* <Filter ... />
  <ContactList ... /> */}
   <ContactList/>   
</div>
  );
};