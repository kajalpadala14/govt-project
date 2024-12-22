import React from "react";

function Contact() {
  return (
    <div id="contact" className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <p className="mb-8 text-center text-lg">
        We would love to hear from you! Whether you're looking to book a stay or have any questions, feel free to contact us.
      </p>

      <form action="#" method="POST" className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium">Your Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
