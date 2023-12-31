import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { BrowserRouter , Route ,Routes} from 'react-router-dom'; // Update this line
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';
import BrowseRestaurants from './pages/BrowseRestaurants';
import Favorites from './pages/Favorites';
import JoinUs from './pages/JoinUs';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import RestaurantDetails from './pages/RestaurantDetails';
import Reviews from './pages/Reviews';
import Menu from './pages/Menu';
import Food from './pages/Food';
import Ambience from './pages/Ambience';
import AboutUs from './pages/AboutUs';
import GetStarted from './pages/GetStarted';
import RestaurantProfile from './pages/RestaurantProfile';
import EditRestaurant from './pages/EditRestaurant';
import RestaurantOwnerLogin from './pages/RestaurantOwnerLogin'
import ForgotPasswordResto from './pages/ForgotPasswordResto';
import { App } from './pages/Rando';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<GetStarted/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/BrowseRestaurants" element={<BrowseRestaurants/>} />
        <Route path="/Favorites" element={<Favorites/>} />
        <Route path="/JoinUs" element={<JoinUs/>} />
        <Route exact path="/UserProfile/:userId" element={<UserProfile/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/ForgotPasswordResto" element={<ForgotPasswordResto/>} />
        <Route path="/RestaurantDetails/:restaurantId" element={<RestaurantDetails/>} />
        <Route path="/Reviews" element={<Reviews/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Food" element={<Food/>} />
        <Route path="/Ambience" element={<Ambience/>} /> 
        <Route path="/AboutUs" element={<AboutUs/>} /> 
        <Route path="/RestaurantProfile" element={<RestaurantProfile/>} /> 
        <Route path="/EditRestaurant/:restaurantId" element={<EditRestaurant/>} /> 
        <Route path="/GetStarted" element={<GetStarted/>} /> 
        <Route path="/RestaurantOwnerLogin" element={<RestaurantOwnerLogin/>}/> 
      </Routes> */}
      <App/>
      {/* <App/> */}
    </BrowserRouter>
  </React.StrictMode>
);
 
reportWebVitals();
