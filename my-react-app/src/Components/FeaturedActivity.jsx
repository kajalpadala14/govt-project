import React from "react";

function FeaturedActivity() {
  return (
    <div className="bg-gray-100 py-16 px-8 font-serif h-screen">
      <div className="max-w-7xl mx-auto text-center h-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Activities</h2>
        <p className="text-lg text-gray-600 mb-8">
        Embark on a scenic trek through Dantewada, where lush forests and rolling hills offer breathtaking views. Experience the tranquility of nature as you explore hidden waterfalls and vibrant wildlife. Let the serene beauty of this untouched landscape rejuvenate your spirit.</p>
        <div className="flex justify-center space-x-6">
          <div className="w-1/3 p-4 h-full">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Trekking</h3>
              <p className="text-gray-600">Enjoy a scenic trek through the beautiful landscapes of Dantewada.</p>
              <button className="border-2 border-black text-black text-sm p-2 bg-white hover:bg-black hover:text-white transition-colors duration-300">Show More</button>
            </div>
          </div>
          <div className="w-1/3 p-4 h-full">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sightseeing</h3>
              <p className="text-gray-600">Explore the cultural and natural beauty of Dantewada with guided tours.</p>
              <button className="border-2 border-black text-black text-sm p-2 bg-white hover:bg-black hover:text-white transition-colors duration-300">Show More</button>
            </div>
          </div>
          <div className="w-1/3 p-4 h-full">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cultural Experiences</h3>
              <p className="text-gray-600">Engage in local traditions and cultural events to experience the local way of life.</p>
              <button className="border-2 border-black text-black text-sm p-2 bg-white hover:bg-black hover:text-white transition-colors duration-300">Show More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedActivity;
