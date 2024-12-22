import React from "react";

function HomePage() {
  return (
    <div className="flex mt-8 font-serif w-screen">
      <div className="bg-gray-100 py-16 px-8 w-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Top Homestay</h2>
            <div className="flex justify-center">
            <ul className="list-disc pl-5">
              <li className="mb-4">Hotel Green View</li>
              <li className="mb-4">Mountain Breeze Homestay</li>
              <li className="mb-4">Riverfront Retreat</li>
            </ul>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Book Now</button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-8 w-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Featured Activities</h2>

          <div className="flex justify-center">
            <table className="table-auto border-collapse border border-gray-200 w-full max-w-md">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Activity</th>
                  <th className="border px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Trekking</td>
                  <td className="border px-4 py-2">Enjoy a scenic trek through the beautiful landscapes of Dantewada.</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Sightseeing</td>
                  <td className="border px-4 py-2">Explore the cultural and natural beauty of Dantewada with guided tours.</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Cultural Experiences</td>
                  <td className="border px-4 py-2">Engage in local traditions and cultural events to experience the local way of life.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Join Activity</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
