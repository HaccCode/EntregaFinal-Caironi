/* eslint-disable react/prop-types */

import { useState } from "react";

const ContactForm = ({ createOrder }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} - ${value}`);
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name && userData.email && userData.phone) {
        console.log("Form submitted with data:", userData);

      createOrder(userData);
    } else {
      // Muestra un mensaje de error o maneja la validación según tus necesidades
      alert("Por favor, complete todos los campos requeridos.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'space-around', padding: '10px'}}>
      <label >
        Nombre:
        <input style={{marginLeft:'10px'}}
          type="text"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Teléfono:
        <input
          type="tel"
          name="phone"
          value={userData.phone}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Generar Orden</button>
    </form>
  );
};

export default ContactForm;
