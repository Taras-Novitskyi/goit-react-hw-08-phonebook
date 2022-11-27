import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box/Box';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Fillter/Fillter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const newName = name;
    const dublicate = this.state.contacts.find(({ name }) => name === newName);

    if (dublicate) {
      alert(`${newName} is already in contacts.`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(prevContact => ({
        contacts: [contact, ...prevContact.contacts],
      }));
    }
  };

  onFind = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          p="30px"
          overflow="auto"
          borderRadius="4px"
          bg="rgb(249, 249, 249)"
        >
          <Section title="Phonebook">
            <ContactForm onSubmit={this.formSubmitHandler} />
          </Section>
          {this.state.contacts.length !== 0 && (
            <Section title="Contacts">
              <Filter onFind={this.onFind} value={this.state.filter} />
              <ContactsList
                contacts={visibleContacts}
                onDeleteContact={this.deleteContact}
              />
            </Section>
          )}
        </Box>
      </div>
    );
  }
}
