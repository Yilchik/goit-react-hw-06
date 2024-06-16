import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import ContactsForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";

const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
