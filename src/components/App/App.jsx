import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import ContactList from '../ContactList/ContactList';
import { Form } from '../Form/Form';
import Filter from 'components/Filter/Filter';

export const App = () => {
  const [filterName, setFilterName] = useState('');
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const changeFilter = e => {
    setFilterName(e.target.value);
  };

  const filterVisible = () => {
    const normalizedFilter = filterName.toLowerCase();
    console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const formSubmitHandle = data => {
    const newContact = contacts.find(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );

    if (!newContact) {
      data = { ...data, id: uniqid() };
      return setContacts([...contacts, data]);
    }
    alert(`${data.name} is alredy in contacts`);
  };

  const deleteContact = id => {
    setContacts(prevContacts => {
      return (prevContacts = prevContacts.filter(contact => contact.id !== id));
    });
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div style={{ marginLeft: '100px' }}>
      <h1>Phonebook</h1>
      <Form onSubmitHandle={formSubmitHandle} />

      <h2>Contacts</h2>
      <Filter filter={filterName} onChange={changeFilter} />
      <ContactList
        filterVisible={filterVisible()}
        deleteContact={deleteContact}
      />
    </div>
  );
};

 