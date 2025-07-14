import React, { useState } from 'react';

const BookDemoForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: '',
    country: '',
    technology: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  const handleCancel = () => {
    setFormData({
      username: '',
      email: '',
      mobile: '',
      country: '',
      technology: '',
      date: ''
    });
  };

  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto shadow-xl rounded-lg overflow-hidden mt-10 border border-gray-300 bg-white">
      
      {/* Left Image Section */}
      <div className="md:w-1/2 w-full">
        <img
          src="https://www.jobsupportguru.com/images/book_a_demo.jpg"
          alt="Demo"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="md:w-1/2 w-full p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Book A Demo Now</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="text"
            name="technology"
            placeholder="Technology name"
            value={formData.technology}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookDemoForm;