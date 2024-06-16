import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactsForm.module.css";

const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    dispatch(
      addContact({ id: Date.now(), name: name.value, number: number.value })
    );
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="tel" name="number" placeholder="Number" required />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactsForm;
