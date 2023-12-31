// AboutUs.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from 'react-router';

const Member = ({ name, imageSrc }) => (
  <div style={{ textAlign: 'center', marginRight: '20px', marginBottom: '20px' }}>
    <img
      src={imageSrc}
      alt={name}
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '5px',
        border: '2px solid gold',
        margin:'50px'
      }}
    />
    <p style={{ margin: 0, color: 'maroon' }}>{name}</p>
  </div>
);

const WidePicture = ({ imageSrc, height }) => (
  <div style={{ marginBottom: '20px' }}>
    <img
      src={imageSrc}
      alt="About Us"
      style={{
        width: '100%',
        height: height || 'auto',
      }}
    />
  </div>
);

const AboutUs = ({loginHandler,restoLoginHandler}) => {

  const location = useLocation();

    return (
    <div> 
      <Header loginHandler={loginHandler} restoLoginHandler={restoLoginHandler} userId={location.state.userId} userType={location.state.userType} restaurantId={location.state.restaurantId} restaurantName={location.state.restaurantName}/>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,fontFamily: 'Kumbh Sans'}}>
      
      <WidePicture imageSrc="about.jpg" />
      <p style={{ color: 'black', textAlign: 'center', fontSize: '20px', marginTop: '20px',width:'1000px',fontWeight:'bold' }}>
        Welcome to CIT Eats our Campus Dining Guide!</p>
        
        <p style={{ color: 'black', textAlign: 'center', fontSize: '20px', marginTop: '20px',width:'1000px'}}>
        We are thrilled to introduce you to CIT Eats, a project that goes beyond the ordinary to redefine your dining experiences on campus. Whether you're a student, faculty member, or visitor, we believe that every meal is an adventure, and we're here to guide you through it.
      </p>
      <p style={{ color: 'black', fontStyle: 'italic', textAlign: 'center', maxWidth: '600px', margin: 'auto', fontSize: '18px' }}>
        "Exploring Tastes, Building Connections: Where Every Meal is an Adventure!"
      </p>
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto', color: 'maroon', fontSize: '20px' }}>
        <br/>
        <br/>
        <br/>
        <h1>About Us</h1>
        <p style={{ color: 'black', fontSize: '16px' }}>
          We are a team of dedicated individuals passionate about bringing the best dining experiences to your campus.
        </p>
      </div>
      <h2 style={{ color: 'maroon', marginTop: '20px', fontSize: '24px' }}>Members</h2>
      <div style={{ display: 'flex', justifyContent: 'center',padding:'10px' }}>
        <Member name="James Ruther I. Ilustrisimo" imageSrc="org1.png" />
        <Member name="Therese Marianne Leyva" imageSrc="org2.png" />
        <Member name="Mikkel Alphonse Y. Alfante" imageSrc="org3.png" />
        <Member name="Earl Joseph Claro" imageSrc="org4.png" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' ,textAlign:'center',padding:'5px'}}>
        <p style={{width:'200px',margin:'10px'}}>“When life gives you lemons, make lemonade.”</p>
        <p style={{width:'200px',margin:'10px'}}>“Life doesn't have to be perfect to be wonderful.”</p>
        <p style={{width:'200px',margin:'10px'}}>“The journey of a thousand miles begins with one step.” </p>
        <p style={{width:'200px',margin:'10px'}}>“All things are difficult before they are easy.”</p>
      </div>
      <p style={{ color: 'black', textAlign: 'center', fontSize: '18px', marginTop: '20px' ,width:'1000px'}}>
      <br/>
      <br/>
        Our team is made up of individuals who share a common goal – to enhance your dining journey. Get to know the faces behind the project, each bringing a unique flavor to the mix.
      </p>
      <br/>
      <br/>
      <div style={{ marginTop: '20px', width: '100%' }}>
        {/* Vision section */}
        <div style={{ backgroundColor: 'white', border: '2px solid gold', padding: '20px', textAlign: 'center', maxWidth: '600px', margin: 'auto', fontSize: '16px', borderRadius: '10px' }}>
          <h2 style={{ color: 'maroon' }}>VISION</h2>
          <div style={{ fontSize: '20px', padding: '10px', color: 'maroon', borderRadius: '5px' }}>
            <p>We envision to be a TOP Philippine University in 2025</p>
          </div>
          <div style={{ border: '2px solid gold', padding: '20px', textAlign: 'center', fontSize: '16px', marginTop: '20px', borderRadius: '10px' }}>
            <p style={{ color: 'maroon' }}>Trusted Education Provider</p>
          </div>
          <div style={{ border: '2px solid gold', padding: '20px', textAlign: 'center', fontSize: '16px', marginTop: '20px', borderRadius: '10px' }}>
            <p style={{ color: 'maroon' }}>Outcomes-based Institution of Research and Learning</p>
            <p style={{ color: 'maroon' }}>Institution of Research and Learning</p>
          </div>
          <div style={{ border: '2px solid gold', padding: '20px', textAlign: 'center', fontSize: '16px', marginTop: '20px', borderRadius: '10px' }}>
            <p style={{ color: 'maroon' }}>People-oriented Organization</p>
          </div>
        </div>
        <br/>
        <br/>
        <br/>

        {/* Mission section */}
        <div style={{ backgroundColor: 'white', border: '2px solid gold', padding: '20px', textAlign: 'center', maxWidth: '600px', margin: 'auto', fontSize: '16px', borderRadius: '10px', marginTop: '20px' }}>
          <h2 style={{ color: 'maroon' }}>MISSION</h2>
          <div style={{padding: '10px', color: 'maroon', borderRadius: '5px', fontSize: '20px' }}>
            <p>We GEAR for Life. CIT commits to:</p>
          </div>
          <div style={{ border: '2px solid gold', padding: '20px', textAlign: 'center', fontSize: '16px', marginTop: '20px', borderRadius: '10px' }}>
            <p style={{ color: 'maroon' }}>Guide learners to become industry-preferred and life-</p>
            <p style={{ color: 'maroon' }}>ready professionals</p>
          </div>
          <div style={{ border: '2px solid gold', padding: '20px', textAlign: 'center', fontSize: '16px', marginTop: '20px', borderRadius: '10px' }}>
            <p style={{ color: 'maroon' }}>Accelerate community development.</p>
          </div>
          <div style={{ border: '2px solid gold', padding: '20px', textAlign: 'center', fontSize: '16px', marginTop: '20px', borderRadius: '10px' }}>
            <p style={{ color: 'maroon' }}>Empower people for knowledge </p>
            <p style={{ color: 'maroon' }}>generation and creativity.</p>
          </div>
          <div style={{ border: '2px solid gold', padding: '20px', textAlign: 'center', fontSize: '16px', marginTop: '20px', borderRadius: '10px' }}>
            <p style={{ color: 'maroon' }}>Respond proactively to a fast-changing world.</p>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div style={{width:'1000px'}}>
      <p style={{ color: 'black', textAlign: 'center', fontSize: '18px', marginTop: '20px' }}>
        Explore our About Us page to learn more about our project, values, and the dedicated team that makes it all possible. Your feedback is invaluable as we embark on this culinary adventure together.
      </p>
      <p style={{ color: 'black', textAlign: 'center', fontSize: '18px' }}>
        Thank you for joining us on this exciting venture! Let's make every meal a memorable experience.
      </p>
      <p style={{ color: 'black', textAlign: 'center', fontSize: '18px' }}>
        Happy dining!
      </p>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      
    </div>
    
        <Footer/>
    </div>
   
  );
};

export default AboutUs;
