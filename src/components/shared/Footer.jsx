import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container mx-auto text-center py-5">
        <p className="text-gray-400">
          &copy; {year} JobPau. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
