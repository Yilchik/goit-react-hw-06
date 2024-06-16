import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";
import { RiUser3Fill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <div className={css.container}>
            <div className={css.card}>
              <p>
                <RiUser3Fill className={css.myIcon} size={20} />
                {name}
              </p>
              <p>
                <BsTelephoneFill className={css.myIcon} size={20} />
                {number}
              </p>
            </div>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
