import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        mobile: '',
        duration: '',
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

        const { name, country, mobile, duration, message } = formData;
        if (!name || !country || !mobile || !duration || !message) {
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
                        <input type="text" name="country" placeholder="Location" value={formData.country} onChange={handleChange} />
                    </div>
                    <div className="row">
                        <input type="text" name="mobile" placeholder="Technology name" value={formData.mobile} onChange={handleChange} />
                        <input type="text" name="duration" placeholder="Duration" value={formData.email} onChange={handleChange} />
                    </div>
                    <textarea name="message" rows="6" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
           <div className="contact-cards">
  <div className="contact-card">
    <div className="icon-box phone-icon">
      <i className="fas fa-phone"></i>
    </div>
    <div className="text-box">
      <h3>Phone</h3>
      <p>+91 6360 330 726</p>
    </div>
  </div>

  <div className="contact-card">
    <div className="icon-box email-icon">
      <i className="fas fa-envelope"></i>
    </div>
    <div className="text-box">
      <h3>Email</h3>
      <p>jobsupportguru@gmail.com</p>
    </div>
  </div>
</div>


        </>

    );
}

export default Contact;
