import PropTypes from 'prop-types';
import { Box } from '../Box/Box';
import { Button, Data } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Data>
        {name}: {number}
      </Data>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Box>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
