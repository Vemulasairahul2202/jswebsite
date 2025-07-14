import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(p => ({
      ...p,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, country, mobile, email, message } = formData;
    if (!name || !country || !mobile || !email || !message) {
      setError('All fields are required!');
      return;
    }

    setError('');
    alert('Form submitted successfully!');
  };

  return (
    <><div className="contact-wrapper">
      <div className="contact-content">
        <h1>We're here to help. Get in touch!</h1>
        <p>Let's get this conversation started.</p>

        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
          </div>
          <div className="row">
            <input type="text" name="mobile" placeholder="Mobile No" value={formData.mobile} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} />
          </div>
          <textarea name="message" rows="6" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 p-6 mt-10  ">
        <div className="flex flex-row   items-center text-center bg-white border border-blue-500 shadow-md  rounded-lg w-full lg:w-1/3 md:w-2/3 hover:shadow-lg transition">
          <div className="bg-blue-600 text-white p-4  h-full ">
            <i className="fas fa-phone text-xl"></i>
          </div >
          <div className='flex flex-col content-center text-center justify-center'>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-600 mt-2">+91 6360 330 726</p>
          </div>
        </div>

        <div className="flex flex-row   items-center text-center bg-white border border-blue-500 shadow-md  rounded-lg w-full lg:w-1/3 md:w-2/3 hover:shadow-lg transition">
          <div className="bg-blue-600 text-white p-4  h-full ">
            <i className="fas fa-envelope text-xl"></i>
          </div>
          <div className='flex flex-col content-center text-center  justify-center'>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600 mt-2">jobsupportguru@gmail.com</p>
          </div>
        </div>
      </div>


    </>

  );
}

export default Contact;
