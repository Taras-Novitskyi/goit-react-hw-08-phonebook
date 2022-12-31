import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/operation';
import { Box } from '../Box/Box';
import { Button, Data, Link } from './ContactItem.styled';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    toast.success(`Contact ${name} has been removed from the contacts.`);
    return dispatch(deleteContact(id));
  };

  const LinkTo = `tel:${phone}`;

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Data>
        {name}: <Link href={LinkTo}>{phone}</Link>
      </Data>
      <Button type="button" onClick={() => handleDelete(id)}>
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
