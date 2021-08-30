import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getLogIn } from "../redux/selector/selectors";
import { fetchAllContacts } from "../redux/slices/contacts";

import ContactList from "../components/contactList/ContactList";
import ContactForm from "../components/contactForm/ContactForm";

function ContactsView() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getLogIn);

  useEffect(() => dispatch(fetchAllContacts()), [dispatch]);

  return (
    <>
      {isLoggedIn && (
        <>
          <ContactForm />
          <ContactList />
        </>
      )}
    </>
  );
}

export default ContactsView;
