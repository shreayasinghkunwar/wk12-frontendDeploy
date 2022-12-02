
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar';

import Addcontact from './components/Addcontact';
import Edit from './components/Edit';
import ViewDetails from './components/ViewDetails';
import Favorite from './components/Favorite';
import Welcome from './components/Welcome';
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import Search from './components/Search';
import Signin from './components/Signin';
import Login from './components/Login';
import UserPage from './components/UserPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<UserPage />} />

          <Route path="/register" element={<Addcontact />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view/:id" element={<ViewDetails />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/search/:name" element={<Search />} />
        </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;
