import { Route, Routes } from "react-router-dom";

import AdminLayout from "./components/shared/AdminLayout.jsx";
import PublicLayout from "./components/shared/PublicLayout.jsx";
import Home from "./pages/Home.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import AdminMessageDetails from "./pages/admin/AdminMessageDetails.jsx";
import AdminMessages from "./pages/admin/AdminMessages.jsx";
import AdminProjectForm from "./pages/admin/AdminProjectForm.jsx";
import AdminProjects from "./pages/admin/AdminProjects.jsx";
import AdminTechnologies from "./pages/admin/AdminTechnologies.jsx";

import ProtectedRoute from "./components/shared/ProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="projects/new" element={<AdminProjectForm />} />
          <Route path="projects/:id/edit" element={<AdminProjectForm />} />
          <Route path="technologies" element={<AdminTechnologies />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="messages/:id" element={<AdminMessageDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;