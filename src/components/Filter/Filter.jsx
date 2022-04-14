// import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { Label } from './Filter.styled';
// import contactsActions from '../../redux/contacts-actions';
// import { getFilter } from '../../redux/selectors';

export const Filter = ({ filter, handleChange }) => {
  // const dispatch = useDispatch();
  // const filter = useSelector(getFilter);

  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="contact name"
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
