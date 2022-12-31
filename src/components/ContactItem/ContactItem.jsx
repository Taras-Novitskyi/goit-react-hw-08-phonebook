import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';
import { Box } from '../Box/Box';
import { Button, Data } from './ContactItem.styled';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  // const handleDelete = contactId => {
  //   dispatch(deleteContact(contactId));
  // };
  const handleDelete = () => dispatch(deleteContact(id));
  
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Data>
        {name}: {phone}
      </Data>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Box>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
