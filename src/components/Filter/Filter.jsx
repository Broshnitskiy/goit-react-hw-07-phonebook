// import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Label } from './Filter.styled';
// import contactsActions from '../../redux/contacts-actions';
// import { getFilter } from '../../redux/selectors';

export const Filter = () => {
  // const dispatch = useDispatch();
  // const filter = useSelector(getFilter);

  const [filter, setFilter] = useState('');

  const handleChange = e => {
    // dispatch(contactsActions.changeFilter(e.target.value));
    setFilter(e.target.value);
  };

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
