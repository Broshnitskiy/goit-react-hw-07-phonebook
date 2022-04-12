import { useFetchContactsQuery } from '../../redux/contacts/contactSlice';

import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
// import { useSelector } from 'react-redux';
// import { getContacts, getFilter } from '../../redux/selectors';

export const ContactList = () => {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);

  // const normalizedFilter = filter.toLowerCase();
  // const findContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );

  const { data: contacts, error, isLoading } = useFetchContactsQuery();
  console.log(contacts);
  return (
    contacts && (
      <List>
        {contacts.map(({ id, name, phone }) => (
          <ContactListItem key={id} id={id} name={name} number={phone} />
        ))}
      </List>
    )
  );
};
