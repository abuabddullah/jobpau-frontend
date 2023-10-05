import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import Dashboard from "../src/components/Dashboard/Dashboard";
import AddJob from "../src/components/Dashboard/dashComponents/AddJob";
import CandidateDashboard from "../src/components/Dashboard/dashComponents/CandidateDashboard";
import EmployerDashboard from "../src/components/Dashboard/dashComponents/EmployerDashboard";
import Home from "../src/components/pages/Home/Home";
import AccountCreator from "../src/components/pages/LogReg/AccountCreator";
import Login from "../src/components/pages/LogReg/Login";
import Signup from "../src/components/pages/LogReg/Signup";
import JobDetails from "../src/components/pages/jobs/JobDetails";
import Jobs from "../src/components/pages/jobs/Jobs";
import ProtectedRoute from "../src/components/shared/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/register",
        element: (
          <ProtectedRoute>
            <AccountCreator />
          </ProtectedRoute>
        ),
      },
      {
        path: "/register/:type",
        element: (
          <ProtectedRoute>
            <AccountCreator />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "add-job",
        element: <AddJob />,
      },
      {
        path: "employer",
        element: <EmployerDashboard />,
      },
      {
        path: "candidate",
        element: <CandidateDashboard />,
      },
    ],
  },
]);

export default routes;
