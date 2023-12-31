import React, { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateStudent = () => {
  const { id } = useParams();
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
      console.log("values: ", values);
      axios
        .put("http://localhost:5000/students/" + id, values)
        .then((res) => {
          console.log("Response: ", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  useEffect(() => {
    axios.get("http://localhost:5000/students/" + id).then((res) => {
      const student = res.data;
      for (let key in student) {
        formik.setFieldValue(key, student[key]);
      }
    });
  }, []);

  return (
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
      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.age}
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

      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateStudent;
