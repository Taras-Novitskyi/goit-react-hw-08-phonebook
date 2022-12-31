import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { Button } from './ContactForm.styled';
import { Form } from './ContactForm.styled';
import { Input } from './ContactForm.styled';
import { addContact } from 'redux/operation';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const inputPhone = event.target.elements.number.value;
    const phone =
      inputPhone.substr(0, 3) +
      '-' +
      inputPhone.substr(3, 3) +
      '-' +
      inputPhone.substr(6, 4);

    const dublicateName = contacts.find(contact => contact.name === name);
    const dublicateNumber = contacts.find(contact => contact.phone === phone);

    if (dublicateName) {
      toast.error(`${name} is already in contacts.`);
      event.target.reset();
      return;
    }

    if (dublicateNumber) {
      toast.error(`Contact with number ${phone} is already in contacts.`);
      event.target.reset();
      return;
    }

    dispatch(addContact({ name, phone }));
    event.target.reset();
    toast.success(`Contact ${name} is added in contacts.`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          placeholder="Will Smith"
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
          placeholder="123-456-7890"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <Button type="submit" disabled={isLoading}>
        Add contact
      </Button>
    </Form>
  );
}
