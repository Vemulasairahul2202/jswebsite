import React from 'react';
import footerlogo from './assets/footerlogo.svg';

const Footer = () => (
  <>
    <footer className="bg-[#0f022e] text-white flex flex-wrap justify-evenly gap-8 px-6 py-8">
      {/* Social Column */}
      <div className="flex flex-col items-center flex-1 min-w-[200px]">
        <img src={footerlogo} alt="Footer Logo" className="w-48 mb-4 rounded-sm" />
        <div className="flex gap-4 text-2xl">
          <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-black transition-transform hover:scale-125">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-black transition-transform hover:scale-125">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-black transition-transform hover:scale-125">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-black transition-transform hover:scale-125">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex-1 min-w-[200px]">
        <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
        <p className="mb-2 flex items-center gap-2">
          <i className="fa fa-phone"></i> +91 123456789
        </p>
        <p className="flex items-center gap-2">
          <i className="fa fa-envelope"></i> jobsupportguru@gmail.com
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex-1 min-w-[200px]">
        <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
        <a href="#" className="block text-gray-300 mb-1 hover:text-[#00bcd4] transition-colors">Home</a>
        <a href="#" className="block text-gray-300 mb-1 hover:text-[#00bcd4] transition-colors">Job Support</a>
        <a href="#" className="block text-gray-300 mb-1 hover:text-[#00bcd4] transition-colors">Join With Us</a>
        <a href="#" className="block text-gray-300 mb-1 hover:text-[#00bcd4] transition-colors">Contact Us</a>
        <a href="#" className="block text-gray-300 mb-1 hover:text-[#00bcd4] transition-colors">Internal Employees</a>
        <a href="#" className="block text-gray-300 mb-1 hover:text-[#00bcd4] transition-colors">Feedback Form</a>
        <a href="#" className="block text-gray-300 mb-1 hover:text-[#00bcd4] transition-colors">Requirement Form</a>
        <a href="#" className="block text-gray-300 mb-1 hover:text-[#00bcd4] transition-colors">Previous Home</a>
      </div>
    </footer>

    <div className="bg-black text-center py-2">
      <h5 className="text-xs font-light text-white">© JobSupportGuru 2022. All rights reserved</h5>
    </div>
  </>
);

export default Footer;
