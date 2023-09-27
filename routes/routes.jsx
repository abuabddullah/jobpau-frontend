/* import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import Home from "../src/components/pages/Home/Home";
import Login from "../src/components/pages/LogReg/Login";
import Signup from "../src/components/pages/LogReg/Signup";

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
        element: <h1>Jobs</h1>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default routes;
 */

import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import Dashboard from "../src/components/Dashboard/Dashboard";
import AddJob from "../src/components/Dashboard/dashComponents/AddJob";
import Home from "../src/components/pages/Home/Home";
import AccountCreator from "../src/components/pages/LogReg/AccountCreator";
import Login from "../src/components/pages/LogReg/Login";
import Signup from "../src/components/pages/LogReg/Signup";
import JobDetails from "../src/components/pages/jobs/JobDetails";
import Jobs from "../src/components/pages/jobs/Jobs";
import EmployerDashboard from "../src/components/Dashboard/dashComponents/EmployerDashboard";
import CandidateDashboard from "../src/components/Dashboard/dashComponents/CandidateDashboard";

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
        element: <AccountCreator />,
      },
      {
        path: "/register/:type",
        element: <AccountCreator />,
      },
      /* {
        path: "/register",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
      {
        path: "/register/:type",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      }, */
    ],
  },
  {
    path: "/dashboard",
    element: (
        <Dashboard />
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
  /* {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
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
  }, */
]);

export default routes;
