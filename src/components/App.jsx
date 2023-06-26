
import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    if (typeof name !== 'string' || name.trim() === "") {
      alert('Please enter a name');
      return
      }
    const isDuplicate = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert('This contact already exists in the phone book!');
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };
  deleteContact = (id) => {
    console.log('deleteContact')
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id!== id),
    }));
  }

  handleFilterChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList
          deleteContact={this.deleteContact}
          contacts={filteredContacts}
        />
      </div>
    );
  }
}

export default App;




// import React from 'react';
// import { nanoid } from 'nanoid';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';

// class App extends React.Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   addContact = (name, number) => {
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   handleFilterChange = event => {
//     this.setState({
//       filter: event.target.value,
//     });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm addContact={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter filter={filter} onChange={this.handleFilterChange} />
//         <ContactList contacts={filteredContacts} />
//       </div>
//     );
//   }
// }

// export default App;