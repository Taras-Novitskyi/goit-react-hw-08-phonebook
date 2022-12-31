import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Box } from 'components/Box/Box';
import { Input } from './Fillter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const query = event.target.value;

    dispatch(setFilter(query));
  };

  return (
    <Box display="flex" justifyContent="center" color="rgb(72, 106, 106)">
      <label>
        Find contacts by name
        <Input type="text" onChange={handleChange}/>
      </label>
    </Box>
  );
};
