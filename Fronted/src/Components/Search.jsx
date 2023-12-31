import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import SearchList from "./SearchList";
import StudentsList from "./StudentsList";


const search = () => {

  const [users, setUsers] = useState([]);
    // data passing using request string  
    // const formik = useFormik({
    //     initialValues: {
    //       name: "",
    //       location: "",
    //     },
    //     onSubmit: (values, { resetForm }) => {
    //         let queryString = new URLSearchParams(values).toString();
    //         let requestURL = `http://localhost:8080/search?${queryString}`
          
    //         console.log('CHeck: ', values)
    //         axios
    //         .get(requestURL)
    //         .then((res) => {
    //           console.log(res.data);
    //           setUsers(res.data)
    //           resetForm();
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    
    //     },
    //   });
    const formik = useFormik({
        initialValues: {
          name: "",
          location: "",
        },
        onSubmit: (values, { resetForm }) => {
          axios
            .post("http://localhost:5000/search", values)
            .then((res) => {
              console.log(res.data);
              // Handle the response data as needed (e.g., setUsers(res.data))  
              setUsers(res.data)
              resetForm();
            })
            .catch((err) => {
              console.log(err);
            });
        },
      });

    return (
        <>
        <h1>Student List</h1>
        <StudentsList/>
        <h2>Search here</h2>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="Name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

                <label htmlFor="location">Location</label>
                <input
                    id="location"
                    name="location"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.location}
                />
                <button type="submit">Submit</button>
            </form>
            <SearchList users={users}/>
        </>
    )

} 

export default search;