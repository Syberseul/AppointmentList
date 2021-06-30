import React, { useState } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([{}]);
  /*
  Define state variables for 
  contacts and appointments 
  */
  const addContact = (name, phone, email) => {
    setContacts((prevContacts) => {
      const contact = {
        name,
        phone,
        email,
      };
      return [...prevContacts, contact];
    });
  };
  const addAppointment = (title, contact, date, time) => {
    setAppointments((prevAppointments) => {
      const appointment = {
        title,
        contact,
        date,
        time,
      };
      return [...prevAppointments, appointment];
    });
  };
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <Link to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </Link>
        <Link to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
