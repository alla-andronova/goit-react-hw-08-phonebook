import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/slices/contacts";
import { getFilteredContacts } from "../../redux/selector/selectors";
import s from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              data-id={id}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={s.btn}
            >
              &#10060;
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ContactList;
