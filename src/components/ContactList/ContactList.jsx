import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

export const ContactList = ({ filter, contacts }) => {
  const normalizedFilter = filter.toLowerCase();
  const findContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {findContacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} number={phone} />
      ))}
    </List>
  );
};
