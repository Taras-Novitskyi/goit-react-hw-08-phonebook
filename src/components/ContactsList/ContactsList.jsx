import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ContactItem } from '../ContactItem/ContactItem';
import { Input } from './ContactsList.styled';

export const ContactsList = ({ contacts }) => {

  return (
    <>
      <label>
        Find contacts by name
        <Input type="text" />
      </label>
      <ul>
        {contacts.map(({ name, number }) => (
          <li key={nanoid()}>
            <ContactItem name={name} number={number} />
          </li>
        ))}
      </ul>
    </>
  );
};

Notification.propTypes = {
  massage: PropTypes.string,
};
