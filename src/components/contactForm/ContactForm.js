import React from "react";

export const ContactForm = (props) => {
  const handleNameChange = ({ target }) => {
    props.setName(target.value);
  };
  const handlePhoneChange = ({ target }) => {
    props.setPhone(target.value);
  };
  const handleEmailChange = ({ target }) => {
    props.setEmail(target.value);
  };
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={props.name}
        onChange={handleNameChange}
      />
      <input
        type="number"
        placeholder="Enter phone"
        value={props.phone}
        onChange={handlePhoneChange}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={props.email}
        onChange={handleEmailChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
