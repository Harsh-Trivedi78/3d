import React from "react";
import ProfilePicture from './assets/1731012965937.jpeg'

function Card() {
  return (
    <div className="card">
      {/* Add a valid source to the img tag */}
      <img className="card-image" src={ProfilePicture} width={200} height={200} alt="Profile" />
      <h2 className="card-title">Harsh</h2>
      <p className="card-text">
        I am a software developer with a passion for creating innovative
        solutions. I have a strong background in development.
      </p>
    </div>
  );
}

export default Card;
