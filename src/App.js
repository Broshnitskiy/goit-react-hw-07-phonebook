import { useState } from 'react';
import { useFetchContactsQuery } from './redux/contacts/contactSlice';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
import { GlobalStyle } from './components/GlobalStyles';
import { Toaster } from 'react-hot-toast';
import { Spinner } from './components/Spinner/Spinner';

function App() {
  const [filter, setFilter] = useState('');
  const { data: contacts, isError, isFetching } = useFetchContactsQuery();

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
          {contacts?.length !== 0 ? (
            <>
              <h2>Contacts</h2>
              <Filter value={filter} handleChange={handleChange} />
            </>
          ) : (
            <p>No saved contacts</p>
          )}

          {isFetching && <Spinner />}
          {isError && <p>Something wrong</p>}
          {contacts && <ContactList filter={filter} contacts={contacts} />}
        </div>
      </section>
    </>
  );
}

export default App;
