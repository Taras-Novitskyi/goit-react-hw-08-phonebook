import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box/Box';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Fillter/Fillter';

const saveContacts = JSON.parse(localStorage.getItem('contacts'));

export function App() {
  const [contacts, setContact] = useState(() =>
    saveContacts ? saveContacts : []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const newName = name;
    const dublicate = contacts.find(({ name }) => name === newName);

    if (dublicate) {
      alert(`${newName} is already in contacts.`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      setContact(prevContacts => [contact, ...prevContacts]);
    }
  };

  const onFind = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContact = contactId => {
    setContact(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="320px"
        p="50px"
        overflow="auto"
        borderRadius="4px"
        bg="rgb(249, 249, 249)"
      >
        <Section title="Phonebook">
          <ContactForm onSubmit={formSubmitHandler} />
        </Section>
        {contacts.length !== 0 && (
          <Section title="Contacts">
            <Filter onFind={onFind} value={filter} />
            <ContactsList
              contacts={getVisibleContacts()}
              onDeleteContact={deleteContact}
            />
          </Section>
        )}
      </Box>
    </div>
  );
}
