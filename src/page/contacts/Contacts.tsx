import { useState } from "react";
import logo from "../../assets/logo.png";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/send-email", { // Replace with your actual API endpoint URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Email sent successfully!");
        } else {
          console.log("Failed to send email.");
        }
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  };

  return (
    <div className="py-5 md:py-24 flex flex-col items-center text-white px-5 md:px-14 lg:px-20">
      <div className="text-5xl text-center font-bold mb-20">Contacts</div>
      <div className="w-full h-full max-w-[1400px] flex flex-col justify-center">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center md:items-start text-center md:text-left gap-5 overflow-hidden">
          <div className="flex-col justify-evenly items-center md:items-start gap-y-10 ">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 border border-gray-300 rounded px-4 py-6"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="px-4 py-2 border border-gray-300 rounded text-black"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="px-4 py-2 border border-gray-300 rounded text-black"
                required
              />
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Contact Number"
                className="px-4 py-2 border border-gray-300 rounded text-black"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="px-4 py-2 border border-gray-300 rounded text-black"
                required
              ></textarea>
              <button
                type="submit"
                className="px-4 py-2 bg-gray-800 text-white rounded"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-evenly items-center md:items-start gap-y-4 ml-20">
            <div className="bg-gray-800 rounded-lg p-9">
              <img className="w-[200px] mb-6" src={logo} alt="Logo" />
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-gray-300 mt-4">Location: Your Location</p>
              <p className="text-gray-300">Phone: Your Phone Number</p>
              <p className="text-gray-300">Email: demo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;