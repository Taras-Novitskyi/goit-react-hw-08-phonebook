import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';
import { Button } from './ContactForm.styled';
import { Form } from './ContactForm.styled';
import { Input } from './ContactForm.styled';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const userName = event.target.elements.name.value;
    const userNumber = event.target.elements.number.value;

    const dublicate = contacts.find(
      ({ name }) => name === userName
    );

      if (dublicate) {
        alert(`${userName} is already in contacts.`);
        event.target.reset();
        return
      } 

    dispatch(addContact(userName, userNumber));
    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}
