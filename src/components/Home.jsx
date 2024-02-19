import React from 'react'
import './HomeStyle.css';
import profile from '../assets/profile.png';


const Home = () => {
  return (
    <div className="home">
       <div className="header">
        <div className="header-title">MY Creative Space</div>
        <div className="connect">Connect with me</div>
       </div>

    <div className="home-main">
    <div className="home-about">
        <div className="home-title">BECOME A FREELANCE DESIGNER <br />
             WITH ZERO EXPERIENCE  </div>
        <div className="home-info">Learn Everything you need to know <br />
        for your first web project</div>
        <div className="home-access">Get Access Right Now</div>
        </div>

        <img className="pic" src={profile} alt="profile"  />
    </div>

    <div className="home-card">
<div className="home-card1">  <div className="card-title">Ansh Mehra</div>
<div className="card-info">''Dyniza has helped me a lot in my own business and I would highly recommend learning from her to anyone!''</div>
 </div>
<div className="home-card2"> 
<div className="card-title">Ansh Mehra</div>
<div className="card-info">''Dyniza has helped me a lot in my own business and I would highly recommend learning from her to anyone!''</div>
 </div>
<div className="home-card3"><div className="card-title">Ansh Mehra</div>
<div className="card-info">''Dyniza has helped me a lot in my own business and I would highly recommend learning from her to anyone!''</div>
</div>

    </div>

    </div>
  )
}

export default Home