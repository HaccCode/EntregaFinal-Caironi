/* eslint-disable react/prop-types */

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "../ItemListContainer/ItemListContainer.module.css";

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
      toast.warning("Complete Todos los campos", {
        position: "bottom-center",
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "10px",
      }}
    >
      <label style={{ height: "20px", fontWeight: "bold", fontSize: "18px" }}>
        Nombre:
        <input
          style={{
            height: "20px",
            marginLeft: "10px",
            backgroundColor: "orange",
            fontWeight: "bold",
            fontSize: "15px",
          }}
          type="text"
          name="name"
          placeholder="Su Nombre Completo"
          value={userData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label style={{ height: "20px", fontWeight: "bold", fontSize: "18px" }}>
        Email:
        <input
          style={{
            height: "20px",
            marginLeft: "10px",
            backgroundColor: "orange",
            fontWeight: "bold",
            fontSize: "15px",
          }}
          type="email"
          name="email"
          placeholder="ejemplo@mail.com"
          value={userData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label style={{ height: "20px", fontWeight: "bold", fontSize: "18px" }}>
        Teléfono:
        <input
          style={{
            height: "20px",
            marginLeft: "10px",
            backgroundColor: "orange",
            fontWeight: "bold",
            fontSize: "15px",
          }}
          type="tel"
          name="phone"
          placeholder="Nro de Contacto"
          value={userData.phone}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit" className={classes.boton}>
        Generar Orden
      </button>
    </form>
  );
};

export default ContactForm;
