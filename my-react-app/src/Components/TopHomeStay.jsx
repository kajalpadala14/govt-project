import React from "react";

function TopHome() {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Top Homestay</h2>
        <p className="text-lg text-gray-600 mb-8">
          Experience the best of Dantewada with our homestay offering comfort, scenic views, and a warm environment.
        </p>
        <div className="flex justify-center space-x-6">
          <div className="w-1/3 p-4">
            <img src="https://www.mekanagadde.com/wp-content/uploads/2023/07/homestay-in-Chikmagalur.webp" alt="Homestay Image" className="w-full rounded-lg shadow-lg"/>
          </div>
          <div className="w-1/3 p-4">
            <img src="https://www.mekanagadde.com/wp-content/uploads/2023/07/homestay-in-Chikmagalur.webp" alt="Homestay Image" className="w-full rounded-lg shadow-lg"/>
          </div>
          <div className="w-1/3 p-4">
            <img src="https://www.mekanagadde.com/wp-content/uploads/2023/07/homestay-in-Chikmagalur.webp" alt="Homestay Image" className="w-full rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHome;
