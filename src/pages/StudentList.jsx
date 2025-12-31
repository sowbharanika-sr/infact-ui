import {  useNavigate } from "react-router-dom";
import Table from "../components/Table";
import "../Styling/StudentList.css";

const StudentList = () => {
  const navigate = useNavigate();

  const columns = ["Student Name", "Roll No", "Mobile Number"];
 
  const data = [
    {id: 1, name: "Ariprasath", avatar:"/images/a1.png", roll: "INF001", mobile: "9843567843" },
    {id: 2, name: "Albert Flores", avatar:"/images/a2.png", roll: "INF002", mobile: "9843567843" },
    {id: 3, name: "Devon Lane", avatar:"/images/a3.png", roll: "INF103", mobile: "9843567843" },
    {id: 4, name: "Cody Fisher",avatar:"/images/a4.png", roll: "INF104", mobile: "9843567843" },
    {id: 5, name: "Dianne Russell",avatar:"/images/a5.png", roll: "INF105", mobile: "9843567843" },
    {id: 6, name: "Theresa Webb",avatar:"/images/a6.png", roll: "INF106", mobile: "9843567843" },
    {id: 7, name: "Darrell Steward",avatar:"/images/a7.png", roll: "INF107", mobile: "9843567843" },
    {id: 8, name: "Bessie Cooper",avatar:"/images/a8.png", roll: "INF108", mobile: "9843567843" },
    {id: 9, name: "Courtney Henry",avatar:"/images/a9.png", roll: "INF109", mobile: "9843567843" }
  ];

   const formattedData = data.map((item) => ({
    ...item,
    name: (
      <span
        className="clickable-cell"
        onClick={(e) => {
          e.stopPropagation(); 
          navigate(`/chat-page/${item.id}`);
        }}
        
      >
        {item.name}
      </span>
    ),
  }));

  return (
    <>
      
    <Table
      
      title="Student List"
      subtitle="You will find your data list below"
      columns={columns}
      data={formattedData}
    />
    </>
  );
  };

export default StudentList;
