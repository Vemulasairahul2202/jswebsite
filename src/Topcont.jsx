import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {
  return (
    <>
      <div className="bg-[#378af7] w-full px-4 md:px-10 py-2">
        <ul className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-2 md:gap-3 text-white text-xs sm:text-sm">
          <li className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
            <i className="fa fa-phone text-lg transition-transform duration-300 ease-in-out hover:text-black hover:scale-125 hover:-translate-y-1"></i>
            <span>+91 1234567890</span>
          </li>
          <li className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
            <i className="fab fa-whatsapp text-lg transition-transform duration-300 ease-in-out hover:text-black hover:scale-125 hover:-translate-y-1"></i>
            <span>+91 0987654321</span>
          </li>
          <li className="hidden md:block" >
            <a
              href="#"
              aria-label="Facebook"
              className="text-lg transition-transform duration-300 ease-in-out hover:text-black hover:scale-125 hover:-translate-y-1"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li className="hidden md:block" >
            <a
              href="#"
              aria-label="Twitter"
              className="text-lg transition-transform duration-300 ease-in-out hover:text-black hover:scale-125 hover:-translate-y-1"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="hidden md:block" >
            <a
              href="#"
              aria-label="Instagram"
              className="text-lg transition-transform duration-300 ease-in-out hover:text-black hover:scale-125 hover:-translate-y-1"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Contact;
