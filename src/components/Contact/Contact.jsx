import React from "react";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <div>
        <div>
          {/* <FaUser  /> */}
          <p>{name}</p>
        </div>
        <div> 
          {/* <FaPhone  /> */}
          <p>{number}</p>
        </div>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};

export default Contact;