import { Route, Routes } from "react-router-dom";
import CreateStudent from "./Components/CreateStudent";
import StudentsList from "./Components/StudentsList";
import UpdateStudent from "./Components/UpdateStudent";
import Search from "./Components/Search";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<UsersList />} />
    //   <Route path="/user/new" element={<CreateUser />} />
    //   <Route path="/user/edit/:id" element={<UpdateUser />} />
    // </Routes>

    <>
      <Routes>
        <Route path="/" element={<StudentsList />} />
        <Route path="/student/new" element={<CreateStudent />} />
        <Route path="/student/:id/edit/" element={<UpdateStudent />} />
        <Route path="/student/search" element={<Search />} />
        
      </Routes>
    </>
  );
}

export default App;
