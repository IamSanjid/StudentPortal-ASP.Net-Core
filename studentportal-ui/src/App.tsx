import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '@/views/Home';
import { Details } from '@/views/Details';
import { Edit } from '@/views/Edit';
import { Add } from './views/Add';

function App() {
  return (<>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/add"
          element={<Add />}
        />

        <Route
          path="/details/:id"
          element={<Details />}
        />

        <Route
          path="/edit/:id"
          element={<Edit />}
        />

        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  </>
  );
}

export default App
