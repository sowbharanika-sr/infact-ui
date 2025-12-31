import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/Table.css";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
const Table = ({
  title,
  subtitle,
  columns,
  data,
  

  // 🔽 TOOLBAR PROPS
  searchValue,
  onSearchChange,
  onFilterClick,
  onAddClick,
  searchPlaceholder = "Search Class,Sections here",
  addLabel = "Add New", 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
const totalPages = 5;
  const navigate = useNavigate();

  return (
    <div className="table-page">
      
      {/* ================= HEADER + TOOLBAR ================= */}
      <div className="table-header">
        <div className="title-group">
          <h2 className="page-title">
           <span className="back-arrow" onClick={() => navigate(-1)}><KeyboardBackspaceRoundedIcon /></span> {title}</h2>
         <p className="page-subtitle">{subtitle}</p>
        </div>

        {/* TOOLBAR */}
        <div className="table-toolbar">
          <div className="search-box">
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
            />
            <img src="/images/search.png" alt="search" />
          </div>

          <div className="toolbar-actions">
            <button className="filter-btn" onClick={onFilterClick}>
              < FilterListRoundedIcon /> 
              Filter
            </button>

            <button className="add-btn" onClick={onAddClick}>
              <AddRoundedIcon className="btn-icon"
               /> {addLabel}
            </button>
          </div>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th className="checkbox-col">
                <input type="checkbox" />
              </th>
              <th>
  <div className="th-content">
    <span>S No</span>
    <img
      src="/images/updown.png"
      alt="sort"
      className="sort-icon"
    />
  </div>
</th>


              {columns.map((col, i) => (
                <th key={i}>
    <div className="th-content">
      <span>{col}</span>
      <img
        src="/images/updown.png"
        alt="sort"
        className="sort-icon"
      />
    </div>
  </th>
              ))}

              <th className="action-col">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id || index}
                className="table-row"
              
              >
                <td>
                  <input type="checkbox" />
                </td>

                <td>{String(index + 1).padStart(2, "0")}</td>

                {Object.keys(row)
                  .filter((key) => key !== "id" && key !== "avatar")
                  .map((key, i) => (
                    <td key={i}>
                      {key === "name" && row.avatar ? (
                        <div className="name-cell">
                          <img src={row.avatar} alt={row.name} />
                          {row.name}
                        </div>
                      ) : (
                        row[key]
                      )}
                    </td>
                  ))}

                <td className="actions">
                  <img
                    src="/images/pen.png"
                    alt="edit"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <img
                    src="/images/trash.png"
                    alt="delete"
                    onClick={(e) => e.stopPropagation()}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ================= PAGINATION ================= */}
    
        <div className="pagination pagination-right">
  {/* LEFT ARROW (ICON) */}
 <div className="pagination pagination-right">
  <KeyboardArrowLeftRoundedIcon
    className={`page-arrow ${currentPage === 1 ? "disabled" : ""}`}
    onClick={() => currentPage > 1 && setCurrentPage(p => p - 1)}
  />

  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
    <button
      key={page}
      className={`page-btn ${currentPage === page ? "active" : ""}`}
      onClick={() => setCurrentPage(page)}
    >
      {page}
    </button>
  ))}

  <ChevronRightRoundedIcon
    className={`page-arrow ${
      currentPage === totalPages ? "disabled" : ""
    }`}
    onClick={() => currentPage < totalPages && setCurrentPage(p => p + 1)}
  />
</div>
</div>

      </div>
    </div>
  );
};

export default Table;
