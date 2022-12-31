import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { List, Item } from './ContactsList.styled';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/filterSlice';

const getVisibleContacts = (contacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  if (normalizeFilter === '') {
    return contacts;
  }

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  
  return (
    <>
      {visibleContacts.length > 0 && (
        <List>
          {visibleContacts.map(({ id, name, phone }) => {
            return (
              <Item key={id}>
                <ContactItem id={id} name={name} phone={phone} />
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
