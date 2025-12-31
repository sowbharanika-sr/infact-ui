import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import "../Styling/ClassList.css";
const ClassList = () => {
  const navigate = useNavigate();
  const columns = ["Class", "Section"];

  const data = [
    { id: 1, class: "Class 1", section: "Section A" },
    { id: 2, class: "Class 2", section: "Section B" },
    { id: 3, class: "Class 3", section: "Section C" },
    { id: 4, class: "Class 4", section: "Section D" },
    { id: 5, class: "Class 5", section: "Section A" },
    { id: 6, class: "Class 6", section: "Section B" },
    { id: 7, class: "Class 7", section: "Section C" },
    { id: 8, class: "Class 7", section: "Section C" },
    { id: 9, class: "Class 7", section: "Section C" },
    { id: 10, class: "Class 7", section: "Section C" }
  ];
  const formattedData = data.map((item) => ({
    ...item,
    class: (
      <span
        className="clickable-cell"
        onClick={(e) => {
          e.stopPropagation(); 
          navigate(`/student-list/${item.id}`);
        }}
        
      >
        {item.class}
      </span>
    ),
  }));



  return (
    <Table
      title=" Class List"
      subtitle="You will find your data list below"
      columns={columns}
      data={formattedData}
    />
    
  );
};

export default ClassList;
