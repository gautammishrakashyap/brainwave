// BackgroundPage.jsx
import React from 'react';

const BackgroundPage = () => {
  return (
    <div
      className="bg-cover bg-center h-screen w-screen"
      style={{ backgroundImage: "url('/images/mouse.jpg')" }} // Ensure path is correct
    >
      {/* Other content for the background page */}
    </div>
  );
};

export default BackgroundPage;
