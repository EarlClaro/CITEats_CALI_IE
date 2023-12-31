import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Header from '../components/Header';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { LoginContext } from './Rando';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const FavoriteContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  font-family: Kumbh Sans;
  width: 400px;
  margin-left:490px;
  margin-right:490px;
`;

const FindFav = styled.button`
  background-color: white;
  color: gold;
  padding: 10px 20px;
  border-color: gold;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 15px;
`;

const RestaurantCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

const RestaurantImage = styled.img`
  width: 250px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const RestaurantName = styled.h4`
  color: maroon;
  font-weight: bold;
`;

const imageMapping = {
  1: "milkteahouse.jpg",
  2: "samueleatery.png",
  3: "tataysisig.png",
  4: "hazelbakery.jpg",
  5: "jasonlounge.jfif",
  6: "deliciousbite.jpg",
  7: "spicynoodlehouse.jfif",
  8: "mediterranean.jpg",
  9: "sushihaven.jpg",
  10: "tastytandoor.png",
  11: "seafood.jpg",
  12: "veggie.jpg",
  13: "bbqresto.jpg",
  14: "frenchbistro.webp",
  15: "burgerhaven.jpg",
  16: "healthtea.jpg",
  17: "Tex-Mex-Fiesta-Bake.jpg",
  18: "Cozy.jpg",
  19: "thai.jpg",
  20: "mongol.jpg",
};

const Favorites = ({restaurantId, restaurantName,loginHandler,restoLoginHandler}) => {
  const [userId, setUserId] = useState('');
  const [favoritesList, setFavoritesList] = useState([]);
  const location = useLocation();
  const [restaurants, setRestaurants] = useState([]);
  const loggedIn = useContext(LoginContext);
  const nav = useNavigate();

  useEffect(() => {
    if (!loggedIn.userLoggedIn) {
      alert('You must be logged in to enter this page');
      nav('/');
      return null; 
    }

    
    const fetchData = async () => {
      try {
        // Check if location is available before accessing location.state.userId
        const userIdFromLocation = location.state?.userId || '';
        setUserId(userIdFromLocation);

        const favoritesResponse = await axios.get(`http://localhost:8080/favorites/${userIdFromLocation}`);
        setFavoritesList(favoritesResponse.data);

        const restaurantsResponse = await axios.get(`http://localhost:8080/restaurants/getAllRestaurants`);
        setRestaurants(restaurantsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [location]);
  return (
    <div>
      <Header loginHandler={loginHandler} restoLoginHandler={restoLoginHandler} userId={location.state.userId} restaurantId={location.state.restaurantId} restaurantName={location.state.restaurantName}/>
      <FavoriteContainer>
        <h1 style={{color:'gold', textAlign:'left', padding:'0 110px',width:'200px'}}>My Favorites</h1>
     <br/>
        {favoritesList.length === 0 ? (
          <>
            <h2>No Favorites Saved</h2>
            <p>You will see all your favorites here</p>
            <FindFav><StyledLink to='/BrowseRestaurants' state={{ userId:userId }}>Let's find some favorites</StyledLink></FindFav>
          </>
        ) : (
        <div>
            {favoritesList.map((favorite, index) => (
              <RestaurantCard key={favorite.id}>
                <StyledLink to={`/RestaurantDetails/${favorite.restaurantId}`}
                 state={{
                  userId: location.state.userId,
                  restaurantId: favorite.restaurantId,
                  }}>
                  <RestaurantImage
                    src={process.env.PUBLIC_URL + "/" + imageMapping[favorite.restaurantId]}
                    alt={`Restaurant ${index + 1}`}
                  />
                  <RestaurantName>{favorite.name}</RestaurantName>
              
                </StyledLink>
              </RestaurantCard>
   
            ))}
            
            <FindFav><StyledLink to={`/BrowseRestaurants`} state={{ userId:userId, restaurantId:restaurantId, restaurantName:restaurantName  }}>Let's find some favorites</StyledLink></FindFav>
          </div>      
        )}
      </FavoriteContainer>
    </div>
  );
};

export default Favorites;
