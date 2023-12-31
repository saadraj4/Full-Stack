import React, { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateStudent = ({}) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      location: "",
      age: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:5000/students", values)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <>
      <h1>Create Student in MonogoBD</h1>
      <br />
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.location}
        />

        <br />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        <label htmlFor="Age">Age</label>
        <input
          id="age"
          name="age"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.age}
        />

        <br />
        {/* <label htmlFor="image">Image</label>
      <input
        id="image"
        name="image"
        type="file"
        onChange={handleImageChange}
        value={formik.values.preview}
      /> */}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateStudent;
