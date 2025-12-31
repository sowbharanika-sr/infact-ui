import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import PrincipalDashboard from "./pages/PrincipalDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import ClassList from "./pages/ClassList";
import TeacherList from "./pages/TeacherList";
import StudentList from "./pages/StudentList";
/*import ChatWindow from "./pages/ChatWindow";*/
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/principal-dashboard" element={<PrincipalDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/class-list" element={<ClassList />} />
        <Route path="/teacher-list" element={<TeacherList />} />

        {/* ✅ FIXED */}
        <Route path="/student-list/:classId" element={<StudentList />} />
        <Route path="/chat-page/:studentId" element={<ChatPage />} />
      </Route>
    </Routes>
  );
}

export default App;
