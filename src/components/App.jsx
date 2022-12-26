import { useSelector } from 'react-redux';
import { Box } from './Box/Box';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Fillter/Fillter';

export function App() {
  const contacts = useSelector(state => state.contacts);

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
          <ContactForm />
        </Section>
        {contacts.length !== 0 && (
          <Section title="Contacts">
            <Filter />
            <ContactsList />
          </Section>
        )}
      </Box>
    </div>
  );
}
