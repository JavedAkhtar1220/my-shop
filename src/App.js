import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";

// Pages 
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";

// Components 
import PrivateRoutes from "./components/PrivateRoutes";
import PublicRoutes from "./components/PublicRoutes";
import Header from "./components/Header";

// Css 
import './App.css';


const App = () => {

  const IsUserLogin = useSelector(state => state.isLogin);

  return (
    <Router>

      <Header />
      <Routes>

        <Route exact path='/' element={<Home />} />

        <Route exact path='/about' element={<About />} />

        <Route exact path='/contact' element={<PrivateRoutes isAuthenticated={IsUserLogin} />}>
          <Route exact path='/contact' element={<Contact />} />
        </Route>

        <Route exact path='/profile' element={<PrivateRoutes isAuthenticated={IsUserLogin} />}>
          <Route exact path='/profile' element={<Profile />} />
        </Route>

        <Route exact path='/cart' element={<PrivateRoutes isAuthenticated={IsUserLogin} />}>
          <Route exact path='/cart' element={<Cart />} />
        </Route>

        <Route exact path='/wishlist' element={<PrivateRoutes isAuthenticated={IsUserLogin} />}>
          <Route exact path='/wishlist' element={<Wishlist />} />
        </Route>

        <Route exact path='/login' element={<PublicRoutes isAuthenticated={IsUserLogin} />}>
          <Route exact path='/login' element={<Login />} />
        </Route>

        <Route exact path='/register' element={<PublicRoutes isAuthenticated={IsUserLogin} />}>
          <Route exact path='/register' element={<Register />} />
        </Route>

        <Route exact path='/reset-password' element={<PublicRoutes isAuthenticated={IsUserLogin} />}>
          <Route exact path='/reset-password' element={<ForgetPassword />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>

    </Router>
  )
}

export default App;
