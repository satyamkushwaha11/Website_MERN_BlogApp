import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import "./main.scss"
import Public_Routes from './routes/publicRoutes';
import Private_Routes from './routes/privateRoutes';
function App() {
  return (
    <Router>
      <Routes>
        {
          [...Public_Routes, ...Private_Routes].map(({ component: Cmp, ...route }, index) => 
            <Route
              key={'publicRoute' + index}
              {...route}
              element={<Cmp />}
            />
          )}

      </Routes>
    </Router>
  );
}

export default App;
