import React, { useState } from "react";
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useParams, useLocation } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";


const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit the color from the parent */
`;
const RestaurantDetailsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Kumbh Sans';

`;

// const RestaurantDetailsHeader = styled.div`
//   height: 300px;
//   background-size: cover;
//   background-position: center;
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// `;

const FavoriteButton = styled.button`
  background-color: #fff;
  color: #e21b70;
  border: 2px solid #e21b70;
  border-radius: 10%;
  width: 180px;
  height: 50px;
  cursor: pointer;
  
  display: block;
  &:hover {
    background-color: #e21b70;
    color: #fff; /* Change text color to white on hover */
  }
`;


const RestaurantDetailsName = styled.h1`
  font-size: 24px;
  margin: 10px 0 0;
`;

const RestaurantDetailsInfo = styled.div`
  padding: 20px;
`;

const RestaurantDetailsInfoItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const RestaurantDetailsInfoLabel = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
  display: inline-block;
  width: 200px;
`;

const RestaurantDetailsInfoValue = styled.span`
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const GoogleLocationImage = styled.img`
  width: 340px;
  height: 150px;
  margin-top: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, filter 0.3s ease, cursor 0.3s ease; /* Add cursor transition */

  &:hover {
    transform: scale(1.1); /* Scale up the image on hover */
    filter: brightness(1.0); /* Adjust brightness on hover */
    cursor: pointer; /* Change cursor to hand on hover */
  }
`;

// const RestaurantDetailsButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   margin-top: 20px;
//   margin-right: 700px; /* Adjust the negative margin for closer spacing */
//   margin-left: 100px;
// `;


// const RestaurantDetailsButton = styled.div`
//   width: 250px;
//   height: 220px;
  
//   margin: 0 10px; /* Add margin to create space between pictures */
//   border-radius: 10px;
//   background-image: ${(props) => `url('${props.image}')`};
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: #fff;
//   text-align: center;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #555;
//   }

//   h3 {
//     margin-top: 10px;
//     font-size: 18px;
//   }
// `;


const ReviewContainer = styled.div`
  justify-content: center;
  margin-top: -50px;
  width: 82%; /* Adjust the width as needed */
  margin: 0 auto;
`;


const SeeAllReviewsButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #fff;
  color: gold;
  border: 2px solid gold;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease; /* Add color transition */

  &:hover {
    background-color: gold;
    color: #fff; /* Change text color to white on hover */
  }
`;

const ReviewCard = styled.div`
  padding: 10px;
  margin: 10px;
  width: 800px;
  align-items: center;
`;

const ReviewFormContainer = styled.div`
  margin-top: 30px;
  text-align: left; // Align the content to the left
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  align-items: flex-start; /* Align items to the start (left) */
`;

const OverallRatingLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  display: flex;
  margin-left:10px;
  margin-right:10px;
  align-items: center; /* Align items vertically in the flex container */
`;

const StarRatingContainer = styled.div`
  display: flex;
  align-items: center; /* Align items vertically in the center */
  margin-left: 20px; /* Adjust the margin as needed */
  margin-right: 20px;
`;

const StarIcon = styled.span`
  font-size: 30px;
  color: ${(props) => (props.selected ? "gold" : "#ddd")};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: gold;
  }
`;

const ReviewTextarea = styled.textarea`
  margin-bottom: 10px;
  border-radius: 15px;
  height: 190px;
  width: 550px; /* Adjust the width as needed */
  margin-left: 200px; /* Set margin-left to 0 to align with the left */
  background-color: #f0f0f0; /* Set the background color to grey */
`;

const WriteReviewButton = styled.button`
  width: 40%;
  height: 50px;
  margin-left: 300px;
  background-color: #e21b70;
  color: white;
  border-color:#e21b70;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const Star = styled.span`
  font-size: 20px;
  color: gold;
`;

const FeedbackTitle = styled.h2`
  background-color: gold;
  padding: 10px; /* Adjust the padding as needed for spacing */
  border-radius: 10px; /* Optional: Add rounded corners */
  color: white; /* Set the text color to ensure readability */
  display: flex; /* Use flex display */
  align-items: center; /* Vertically align items */
  width: 850px; /* Adjust the width as needed */
  height: 100px; 
  text-align: left; /* Align text to the left */
  margin-left: 180px; /* Set margin-left to 0 to align with the left */
`;

const FoodIcon = styled.img`
  width: 80px; // Adjust the width as needed
  height: 80px; // Adjust the height as needed
  margin-right: 10px; // Adjust the margin as needed
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 860px; /* Adjust the negative top value to move it up */
  margin-top: 10px;
  width: 22.5%;
  padding: 20px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 800px; /* Align to the right */
`;

const RatingContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  margin-top: 0px;
  margin-left: 300px;
  height: 55%;
  width: 40%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const IconImage = styled.img`
  width: 340px; // Adjust the width and height as needed
  height: 100px;
  margin-right: 10px; // Adjust the margin as needed
`;

const SecondIconImage = styled.img`
  width: 20px; // Adjust the width as needed
  height: 20px; // Adjust the height as needed
  margin-right: 10px; // Adjust the margin as needed
`;

const RatingAndReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 680px;
`;

const imageMapping = {
  1: 'teahouse.jpg',
  2: 'samuel.jpg',
  3: 'sisignitatay.jpg',
  4: 'hazel.jpg',
  5: 'jason.jpg',
  6: 'db.png',
  7: 'noodles.png',
  8: 'mediterraneancover.jpg',
  9: 'sushihavencover.jpg',
  10: 'tandoorcover.jpg',
  11: 'seafoodcover.jpg',
  12: 'veggies.jpg',
  13: 'bbqjunc.jpg',
  14: 'frenchcover.jpg',
  15: 'burgercover.jpg',
  16: 'green.jpg',
  17: 'mex.jpg',
  18: 'cozycover.jpg',
  19: 'thaicover.png',
  20: 'mongolcover.jpg',
  // Add more mappings as needed
};

const googleMapLinkMapping = {
  1: 'https://maps.app.goo.gl/JwiwPzt3kMQw9EkNA',
  2: 'https://maps.app.goo.gl/E4F3tGEEjxCv22L36', 
  3: 'https://maps.app.goo.gl/5FMbnE2hZyNucyWg9',
  4: 'https://maps.app.goo.gl/dneAjgTohyEGhsmk6',
  5: 'https://maps.app.goo.gl/2F9NANeR4CYdjUHU9',
  6: 'https://maps.app.goo.gl/9Whk8xvShopuRo4X7',
  7: 'https://maps.app.goo.gl/yBkVZLwr7Nrao3eXA',
  8: 'https://maps.app.goo.gl/8HyXjK2DW8NNX7Uf8',
  9: 'https://maps.app.goo.gl/Jm4UeKPaaoPX1TvZA',
  10: 'https://maps.app.goo.gl/RMJszt3foNamQ2Hy8',
  11: 'https://maps.app.goo.gl/shQMz2bJk2dMsego9',
  12: 'https://maps.app.goo.gl/sMRbJy36ZvJQRcda9',
  13: 'https://maps.app.goo.gl/xHBYZMzRe4HQYFs16',
  14: 'https://maps.app.goo.gl/7QxFPg2Cqeapz7dQ7',
  15: 'https://maps.app.goo.gl/28ttYpESNs3UdFMv9',
  16: 'https://maps.app.goo.gl/LYfZSDofDe88M9Qe6',
  17: 'https://maps.app.goo.gl/YjgJHcgxV3eZgLx9A',
  18: 'https://maps.app.goo.gl/U11X2rJDCBcaBRT97',
  19: 'https://maps.app.goo.gl/Kee2bDuUxsQ8u57K8',
  20: 'https://maps.app.goo.gl/DWqDAXUPuXLNMNud9',
  // Add more mappings as needed
};


const MenuItemCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  div {
    padding: 15px;
  }

  h4 {
    color: #333;
    font-size: 1.2rem;
    margin: 10px 0;
  }

  p {
    color: #777;
    margin: 5px 0;
  }
`;

const OverallRatingInput = ({ onChange }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (star) => {
    setSelectedStars(star);
    onChange && onChange(star);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' ,marginLeft:'-10px',fontFamily:'Kumbh Sans'}}>
      <OverallRatingLabel htmlFor="overallRating">Overall Rating</OverallRatingLabel>
      <StarRatingContainer>
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon
            key={star}
            selected={star <= selectedStars}
            onClick={() => handleStarClick(star)}
          >
            ★
          </StarIcon>
        ))}
      </StarRatingContainer>
    </div>
  );
};

const RestaurantDetails = ({loginHandler}) => {

  const [restaurant, setRestaurant] = useState({}); 
  const { restaurantId } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  const  location = useLocation();
  const [ratingDetails, setRatingDetails] = useState({});
  const [rating, setRating] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [userDetails, setUserDetails] = useState([]);

  const [comment, setComment] = useState("");
  const [star, setStar] = useState(0);
  const starHandler = (value) => {
    setStar(value)
  }

  const onCommentChange = (e) => {
    setComment(e.target.value)
    console.log(comment)
    console.log("para maiba "+ star)
  }

  const onWriteReview = async () => {
    const userId = location.state.userId;

    try {
      // TODO: CHANGE THIS INTO VARIABLES NA MAKUHA GIKAN SA LAST PAGE USING <LINK> PARAMETER PASSING
      // Replace with your actual userId // Replace with your actual restaurantId
  
      // Get the current date in ISO format
      const currentDate = new Date().toISOString();

  
      // Create the review data object
      const reviewData = {
        comment: comment,
        rating: star,
        userId: userId,
        restaurantId: restaurantId,
        // TODO: MAKE FUNCTION THAT GETS CURRENT DATE AND TIME AND CONVERT DATA TYPE SA API TO STRING
        datePosted: currentDate
      };
  
      // Make the POST request using Axios
      const response = await axios.post('http://localhost:8080/reviews/createReview', reviewData);

      
  
      console.log('Review submitted:', response.data);
      alert(`Review successfully submitted!`)
      // Handle success (you can perform further actions here)
    } catch (error) {
      console.error('Error submitting review:', error);
      // Handle error
    }
  };
  
  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/ratings/getRatingByRestaurant/${restaurantId}`);
        setRating(response.data.rating); // Assuming the rating is available in response.data.rating
      } catch (error) {
        console.error('Error fetching rating:', error);
      }
    };

    fetchRating();
  }, [restaurantId]);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const [restaurantResponse, ratingResponse] = await Promise.all([
          axios.get(`http://localhost:8080/restaurants/${restaurantId}`),
          axios.get(`http://localhost:8080/ratings/getRatingByRestaurant/${restaurantId}`)
        ]);
  
        console.log('Restaurant response:', restaurantResponse.data);
        console.log('Rating response:', ratingResponse.data);
  
        setRestaurant(restaurantResponse.data);
        setRatingDetails(ratingResponse.data);
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
      }
    };
  

    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/menuitems/getByRestaurantId/${restaurantId}`);

        if (Array.isArray(response.data)) {
          setMenuItems(response.data);
        } else {
          console.error('Invalid menu items data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/reviews/getReviewsByRestaurantId/${restaurantId}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchRestaurantDetails();
    fetchMenuItems();
    fetchReviews();
  }, [restaurantId]);

  

  const addToFavorites = async () => {
    try {
      // Fetch user's existing favorites
      const favoritesResponse = await axios.get(`http://localhost:8080/favorites/${location.state.userId}`);
      console.log('Favorites Response:', favoritesResponse);
  
      if (favoritesResponse.status === 200) {
        const userFavorites = favoritesResponse.data;
  
        // Check if the restaurant is already in favorites
        if (!userFavorites.find((fav) => fav.restaurantId === restaurant.restaurantId)) {
  
          // Fetch restaurant details including the name
          const restaurantDetailsResponse = await axios.get(`http://localhost:8080/restaurants/${restaurant.restaurantId}`);
          console.log('Restaurant Details Response:', restaurantDetailsResponse);
  
          if (restaurantDetailsResponse.status === 200) {
            const restaurantDetails = restaurantDetailsResponse.data;
  
            // Save the selected restaurant details for later use
            setSelectedRestaurant({
              restaurantId: restaurant.restaurantId,
              restaurantName: restaurantDetails.restaurantName,
              // Other details you may want to include
            });
  
            // Make a POST request to add the restaurant to favorites
            const addToFavoritesResponse = await axios.post(`http://localhost:8080/favorites/createFavorite`, {
              userId: location.state.userId,
              restaurantId: restaurant.restaurantId,
              name: restaurantDetails.restaurantName,
            });
            console.log('Add to Favorites Response:', addToFavoritesResponse);
  
            if (addToFavoritesResponse.status >= 200) {
              setFavorites([...userFavorites, restaurant]);

              alert('Restaurant added to Favorites!');
            } else {
              alert('Failed to add restaurant to Favorites. Please try again.');
            }
          } else {
            alert('Failed to fetch restaurant details. Please try again.');
          }
        } else {
          alert('Restaurant is already in Favorites!');
        }
      } else {
        alert('Failed to fetch user favorites. Please try again.');
      }
    } catch (error) {
      console.error('Error adding restaurant to Favorites:', error);
      alert('An error occurred. Please try again.');
    }
  };
  
  

  
  

  return (
    <div style={{ fontFamily: "Kumbh Sans" }}>
      <Header  loginHandler={loginHandler} userId={location.state.userId} restaurantId={location.state.restaurantId} restaurantName={location.state.restaurantName} />
      <br />
      <RestaurantDetailsContainer>
        {[restaurant].map((restaurant, index) => (
          <img
            key={restaurant.restaurantId}
            src={process.env.PUBLIC_URL + '/' + imageMapping[restaurant.restaurantId]}
            alt={`Restaurant ${index + 1}`}
            style={{ width: '1470px', height: '500px' }}
          />
        ))}

        <RestaurantDetailsName>{restaurant.restaurantName}</RestaurantDetailsName>
        <>
          <Star>★</Star> {restaurant.rating}
          <span style={{ color: 'grey' }}>({ratingDetails[0]?.numberOfRatings })</span></>
          <br/>
          <br/>
          <FavoriteButton onClick={addToFavorites}>Add to Favorites</FavoriteButton>
      </RestaurantDetailsContainer>
      
      <RestaurantDetailsInfo>
      <div style={{marginLeft:'300px'}}>
      <h4>Menu Items</h4>
      {menuItems.map((menuItem) => (
        <MenuItemCard key={menuItem.id}>
          <img src={`chickfront${menuItem.id}.jpg`} alt={menuItem.name} />
          <div>
            <p>{menuItem.name}</p>
            <p>P {menuItem.price}</p>
            <p style={{fontSize:'12px'}}>{menuItem.description}</p>
          </div>
        </MenuItemCard>
      ))}
      </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <RestaurantDetailsInfoItem>
  </RestaurantDetailsInfoItem>

<InfoContainer>
  <RestaurantDetailsInfoItem>
    <IconImage src="/locationicon.png" alt="Icon" />
    <RestaurantDetailsName>Restaurant Information</RestaurantDetailsName>
    <br></br>
    <br></br>
    <RestaurantDetailsInfoLabel><SecondIconImage src="/houricon.png" alt="Second Icon" />Opening Hours:</RestaurantDetailsInfoLabel>
    <RestaurantDetailsInfoValue>{restaurant.restaurantOpeningHours}</RestaurantDetailsInfoValue>
  </RestaurantDetailsInfoItem>

  <RestaurantDetailsInfoItem>
    <RestaurantDetailsInfoLabel><SecondIconImage src="/addressicon.png" alt="Second Icon" />Address:</RestaurantDetailsInfoLabel>
    <RestaurantDetailsInfoValue>{restaurant.address}</RestaurantDetailsInfoValue>
  </RestaurantDetailsInfoItem>

  <RestaurantDetailsInfoItem>
  <GoogleLocationImage
  src="/googlelocation.jpg"
  alt="Google Location"
  onClick={() => {
    const googleMapLink = googleMapLinkMapping[restaurant.restaurantId];
    window.open(googleMapLink, '_blank');
  }}
/>
  </RestaurantDetailsInfoItem>
  </InfoContainer>
      </RestaurantDetailsInfo>

      <ReviewContainer>
      <ReviewCard>
        {/* Review Highlights */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <RestaurantDetailsName>Review Highlights</RestaurantDetailsName>
          <p style={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}>
            
          </p>
        </div>

      <br/>
      
        {/* Dynamic Reviews */}
        {reviews.map((review) => (
          <div key={review.reviewId}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            
            <br/>
              <p style={{ color: 'black', position:'relative', left:'-97%'  }}>
                <Star>★</Star>
                {review.rating}
              </p>
            </div>
            <p style={{ color: 'grey' }}>{new Date(review.datePosted).toLocaleString()}</p>
            <p style={{ color: 'grey', borderBottom: '1px solid grey', paddingBottom: '5px' }}>
              {review.comment}
            </p>
          </div>
        ))}
      </ReviewCard>
    </ReviewContainer>

      <ReviewFormContainer>
        <FeedbackTitle><FoodIcon src="/pinkstar.png" alt="Food Icon" />Tell us about our food</FeedbackTitle>
        <ReviewForm>
        </ReviewForm>
      </ReviewFormContainer>
      
      <Container>
      <RatingAndReviewContainer>
      <ReviewForm>
        <ReviewTextarea 
        value = {comment}
        onChange={onCommentChange}
        placeholder="Write here your review..." />
      </ReviewForm>
      <Container>
        <RatingContainer>
        <OverallRatingInput
                starHandler={starHandler}
                onChange={(rating) => setStar(rating)}

              />
        </RatingContainer>
        <br></br>
        <WriteReviewButton onClick={onWriteReview}>Write Review</WriteReviewButton>
      </Container>
         </RatingAndReviewContainer>
      </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <Footer />
    </div>
  );
};

export default RestaurantDetails;