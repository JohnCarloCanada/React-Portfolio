import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <section className="flex flex-shrink-0 items-center">
        <span className="mx-2 text-2xl">JCCAN.</span>
      </section>
      <aside className="m-8 flex items-center justify-center gap-4 text-2xl">
        <button
          onClick={() =>
            handleRedirect("https://www.linkedin.com/in/johncarlocanada/")
          }
        >
          <FaLinkedin />
        </button>
        <button
          onClick={() => handleRedirect("https://github.com/JohnCarloCanada")}
        >
          <FaGithub />
        </button>
        <button
          onClick={() =>
            handleRedirect("https://www.facebook.com/thatjohncarlocanada4")
          }
        >
          <FaFacebook />
        </button>
        <button>
          <FaInstagram />
        </button>
      </aside>
    </nav>
  );
};

export default Navbar;
