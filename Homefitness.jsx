import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../src/img/home.jpeg'; // Adjust the path based on your actual image location

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-900 text-white flex flex-col items-center justify-center">
      <div className="text-center max-w-2xl mx-auto p-6 bg-white bg-opacity-20 rounded-lg shadow-lg">
        
        {/* Header and Introduction Section */}
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Welcome to Your Fitness Journey
        </h1>
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
          Whether you're just starting or looking to take your fitness to the next level, our app is here to guide you every step of the way. 
          From personalized workout routines to diet plans and BMI tracking, you'll have all the tools you need to achieve your health goals.
        </p>
        
        {/* Image Section */}
        <div className="mb-8">
          <img
            src={homeImage} // Reference the imported image
            alt="Fitness"
            className="w-full h-56 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Key Features Section */}
        <div className="text-left text-white mb-8">
          <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
          <ul className="list-disc pl-8 space-y-2 text-lg">
            <li><strong>Track Workouts:</strong> Log your exercises and progress with ease.</li>
            <li><strong>BMI Calculator:</strong> Quickly calculate your BMI and track your health status.</li>
            <li><strong>Diet Plans:</strong> Get personalized meal plans based on your fitness goals.</li>
            <li><strong>Motivation:</strong> Stay motivated with tips, challenges, and more!</li>
          </ul>
        </div>

        {/* Call to Action Button */}
        <div className="mb-8">
          <Link
            to="/fitness"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Optional Motivational Quote */}
        <div className="mt-8 text-lg text-white italic">
          "The body achieves what the mind believes."
        </div>
      </div>
    </div>
  );
};

export default HomePage;
