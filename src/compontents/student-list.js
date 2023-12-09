import Axios from "axios";
import { useEffect, useState } from "react";
import StudentListRow from "./studentlistrow";

function StudentList() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("https://crud-deployment-backend-n4ss.onrender.com/studentRoutes")
      .then((res) => {
        if (res.status === 200) setArr(res.data);
        else Promise.reject();
      })
      .catch((err) => alert(err));
  });

  const listItems = () => {
    return arr.map((val, ind) => {
        return <StudentListRow obj={val} />
    });
  };

  return (
    <table style = {{maxWidth: "60%", margin: "50px auto"}} class="table table-striped table-bordered table-success">
      <thead>
        <tr>
          <th class="text-center">Name</th>
          <th class="text-center">Email</th>
          <th class="text-center">RollNo</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {listItems()}
      </tbody>
    </table>
  );
}

export default StudentList;
