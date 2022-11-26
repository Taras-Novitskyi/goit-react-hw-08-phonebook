import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box
      display="flex"
    >
      {options.map(option => {
        return (
          <Button
            type="button"
            name={option}
            key={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </Button>
        );
      })}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};
