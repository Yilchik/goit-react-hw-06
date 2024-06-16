import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";

const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <hr className={css.line}></hr>
      <SearchBox />
      <hr className={css.line}></hr>
      <h2>Contacts</h2>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
