import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { List, Item } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
      <List>
        {contacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <ContactItem
                id={id}
                name={name}
                number={number}
                onDeleteContact={onDeleteContact}
              />
            </Item>
          );
        })}
      </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
