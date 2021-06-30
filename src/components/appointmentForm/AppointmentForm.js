import React from "react";
import { ContactPicker } from "./../contactPicker/ContactPicker.js";
export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const handleTitleChange = ({ target }) => {
    props.setTitle(target.value);
  };
  const handleDateChange = ({ target }) => {
    props.setDate(target.value);
  };
  const handleTimeChange = ({ target }) => {
    props.setTime(target.value);
  };
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Enter Title"
        value={props.title}
        onChange={handleTitleChange}
      />
      <ContactPicker contacts={props.contacts} setContact={props.setContact} />
      <input
        type="date"
        placeholder="Enter date"
        value={props.date}
        min={getTodayString}
        onChange={handleDateChange}
      />
      <input
        type="time"
        placeholder="Enter time"
        value={props.time}
        onChange={handleTimeChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
