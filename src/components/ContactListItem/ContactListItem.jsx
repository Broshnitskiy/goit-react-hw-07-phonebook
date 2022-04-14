import { useDeleteContactMutation } from '../../redux/contacts/contactSlice';
import PropTypes from 'prop-types';
import { ListItem } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ListItem>
      &#9742; {name}: {number};
      <button
        type="button"
        disabled={isDeleting}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
