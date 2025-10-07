import React from 'react'

const About = () => {
  return (
<div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div className="bg-white text-gray-900 rounded-3xl flex flex-col md:flex-row items-center max-w-6xl p-8 shadow-2xl relative">

    {/* Profile Image */}
    <div className="relative w-60 h-80 rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://via.placeholder.com/300x400" // Replace with your profile image
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right Content */}
    <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left space-y-6">
      {/* Section Title */}
      <h3 className="text-sm text-blue-600 font-semibold tracking-widest uppercase">
        About Me
      </h3>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
        I'm <span className="text-blue-500">James Smith</span>, <br />
        a Passionate UI/UX Designer
      </h1>

      {/* Description */}
      <p className="text-gray-600 max-w-md text-sm leading-relaxed">
        With over 5 years of experience crafting intuitive and elegant interfaces, 
        I specialize in creating user-centered designs that drive engagement and solve real problems. 
        My expertise includes tools like Figma, Adobe XD, and Photoshop.
      </p>

      {/* Stats */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <div className="bg-gray-100 px-5 py-3 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">280+</h2>
          <p className="text-sm text-gray-500">Google Reviews</p>
        </div>
        <div className="bg-gray-100 px-5 py-3 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">5+</h2>
          <p className="text-sm text-gray-500">Years Experience</p>
        </div>
        <div className="bg-gray-100 px-5 py-3 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">15+</h2>
          <p className="text-sm text-gray-500">Projects Completed</p>
        </div>
      </div>

      {/* Call to Action */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all">
        Get In Touch
      </button>
    </div>
  </div>
</div>
  )
}

export default About