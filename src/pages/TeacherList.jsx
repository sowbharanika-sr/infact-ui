import React from "react";

import Table from "../components/Table";


<div >
  <h2>Teacher List </h2>
  <p>You will find your data list below</p>
</div>
const TeacherList = () => {
  const columns = ["Teacher Name", "Roll No", "Mobile Number"];

  const data = [
    { name: "Ariprashath", avatar:"/images/a1.png", roll: "INF101", mobile: "9843567843" },
    { name: "Albert Flores",avatar:"/images/a2.png", roll: "INF102", mobile: "9843567843" },
    { name: "Devon Lane", avatar:"/images/a3.png", roll: "INF103", mobile: "9843567843" },
    { name: "Cody Fisher",avatar:"/images/a4.png", roll: "INF104", mobile: "9843567843" },
    { name: "Dianne Russell",avatar:"/images/a5.png", roll: "INF105", mobile: "9843567843" },
    { name: "Theresa Webb",avatar:"/images/a6.png", roll: "INF106", mobile: "9843567843" },
    { name: "Darrell Steward",avatar:"/images/a7.png", roll: "INF107", mobile: "9843567843" },
    { name: "Bessie Cooper",avatar:"/images/a8.png", roll: "INF108", mobile: "9843567843" },
    { name: "Courtney Henry",avatar:"/images/a9.png", roll: "INF109", mobile: "9843567843" }
  ];

 

return (
 <Table
  title="Teacher List"
  subtitle=" You will find your data list below"
  columns={columns}
  data={data}
  
/>

);

};

export default TeacherList;
