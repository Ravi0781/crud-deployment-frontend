import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {HashRouter, Routes, Route} from "react-router-dom"
import Nav from "./compontents/nav"
import CreateStudent from "./compontents/create-student"
import StudentList from "./compontents/student-list"
import EditStudent from './compontents/editStudent';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<CreateStudent/>} />
          <Route path="/create-student" element={<CreateStudent/>} />
          <Route path="/student-list" element={<StudentList/>} />
          <Route path="/edit-student/:id" element={<EditStudent/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
