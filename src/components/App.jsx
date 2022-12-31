import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from './Box/Box';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Fillter/Fillter';
import { fetchContacts } from 'redux/operation';
import { selectError, selectIsLoading, selectContacts } from 'redux/selectors';
import { Loader } from './Loader/Loader';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
        backgroundColor: 'rgb(100, 100, 100)'
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="480px"
        minHeight="100vh"
        p="50px"
        overflow="auto"
        borderRadius="4px"
        bg="rgb(249, 249, 249)"
      >
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          {isLoading && !error && <Loader />}
          {!isLoading && contacts.length !== 0 && <ContactsList />}
        </Section>
      </Box>
      <ToastContainer />
    </div>
  );
}
