import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from './Box/Box';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Fillter/Fillter';
import { fetchContacts } from 'redux/operation';
import { getError, getIsLoading, getContacts } from 'redux/selectors';

export function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  // const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
        width="480px"
        p="50px"
        overflow="auto"
        borderRadius="4px"
        bg="rgb(249, 249, 249)"
      >
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        {isLoading && !error && <b>Request in progress...</b>}
        {contacts.length !== 0 && (
          <Section title="Contacts">
            <Filter />
            <ContactsList />
          </Section>
        )}
      </Box>
    </div>
  );
 
  // return (
  //   <div>
  //     {isLoading && <b>Loading tasks...</b>}
  //     {error && <b>{error}</b>}
  //     <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
  //   </div>
  // );
}
