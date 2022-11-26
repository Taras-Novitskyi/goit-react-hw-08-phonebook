import PropTypes from 'prop-types';
// import { Item } from './ContactItem.styled';

export const ContactItem = ({ name, number }) => {
  return (
    <p>
      {name}: {number}
    </p>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
