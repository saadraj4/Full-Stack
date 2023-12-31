import axios from "axios";
import React, { useEffect, useState } from "react";


function SearchList({ users }) {


  return (
    <>
      <h2>SearchList</h2>
      
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id}>

                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.location}</td>
              </tr>
            ))}
          </tbody>

        </table>
        
    </>
    
  );
  
}
export default SearchList;
/*
// {users.map((user) => {
        //   return (
        //     <div key={user._id}>
        //       {user.name + " " + user.age +" "+ user.location + " " + user.email}
        //     </div>
        //   );
        // })}
*/


