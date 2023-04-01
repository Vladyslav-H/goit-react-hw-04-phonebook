import PropTypes from 'prop-types';
import { Button,ContactItem } from './ContactList.styled';

const ContactList = ({ filterVisible, deleteContact }) => {
  return (
    <ul>
      {filterVisible.map(({ id, name, number }) => (
        <ContactItem  key={id}>
          {name}: {number}
          <Button   type="button" onClick={()=>deleteContact(id)}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filterVisible: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
