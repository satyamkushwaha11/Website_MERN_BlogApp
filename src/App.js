import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import LoaderHoc from './hoc/loader';

import "./main.scss";
import Public_Routes from "./routes/publicRoutes";
import Private_Routes from "./routes/privateRoutes";
import { getLocalStorage } from "./lib/session";
function App() {
  const PrivateRoute = (props) => {
    if (!getLocalStorage("token")) {
      return <Navigate to="/" />;
    }
    return <Outlet />;
  };
  [...Public_Routes].map(({ component, ...route }, index) => {
    console.log(component, "kkkkkkkkkk");
  });

  return (
    <>
      <Router>
        <Routes>
          {[...Public_Routes].map(({ component: Cmp, ...route }, index) => (
            <Route key={"publicRoute" + index} {...route} element={<Cmp />} />
          ))}
          {[...Private_Routes].map(({ component: Cmp, ...route }, index) => (
            <Route
              key={"privateRoute" + index}
              {...route}
              element={<PrivateRoute />}
            >
              <Route {...route} element={<Cmp />} />
            </Route>
          ))}
        </Routes>
      </Router>
    
      <LoaderHoc />
    </>
  );
}

export default App;
