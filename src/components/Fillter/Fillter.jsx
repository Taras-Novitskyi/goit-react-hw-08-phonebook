import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import { Input } from './Fillter.styled';

export const Filter = ({ onFind, value }) => {
  return (
    <Box display="flex" justifyContent="center" color="rgb(72, 106, 106)">
      <label>
        Find contacts by name
        <Input type="text" onChange={onFind} value={value} />
      </label>
    </Box>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFind: PropTypes.func.isRequired,
};
