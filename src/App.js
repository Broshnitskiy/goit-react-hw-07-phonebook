import { useState } from 'react';
import { useFetchContactsQuery } from './redux/contacts/contactSlice';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
import { GlobalStyle } from './components/GlobalStyles';
import { Toaster } from 'react-hot-toast';

function App() {
  const [filter, setFilter] = useState('');
  const { data: contacts, error, isLoading } = useFetchContactsQuery();

  const handleChange = e => {
    setFilter(e.target.value);
  };
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <section style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>Phonebook</h1>
        <ContactForm contacts={contacts} />
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} handleChange={handleChange} />
          {contacts && <ContactList filter={filter} contacts={contacts} />}
        </div>
      </section>
    </>
  );
}

export default App;
