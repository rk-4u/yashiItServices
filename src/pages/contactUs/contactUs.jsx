import React, {  useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Map from "../../components/contactUs/map/map";
import axios from "axios";
import "./contactUs.css";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    phone: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "phone") {
      newValue = value.replace(/[^0-9\s\-()]/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const BACKEND_URL = "https://vercelbackend-cfcd.onrender.com";

      const requestData = {
        FirstName: formData.FirstName.trim(),
        LastName: formData.LastName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        Message: formData.Message.trim(),
      };
      console.log("Sending request to backend:", requestData);

      await axios.post(`${BACKEND_URL}/users/register`, requestData, {
        headers: { "Content-Type": "application/json" },
      });

      alert("Thank you! Your message has been sent.");

      setFormData({
        FirstName: "",
        LastName: "",
        email: "",
        phone: "",
        Message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="blur-background pt-0 mt-0"> {/* Background Blur Wrapper with no top space */}
      
      {/* Hero Section */}
      <motion.div className="heroContact relative w-full min-h-[55vh] flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <motion.h2 className="text-3xl sm:text-4xl font-bold text-white relative z-10">
          We are here to help you
        </motion.h2>
        <motion.p className="text-white text-sm sm:text-base max-w-lg mt-2 relative z-10">
          Wave goodbye to tedious reports. Our new project management
          dashboards are easy to build and use, boost visibility, and offer
          instant actionable insights.
        </motion.p>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div className="container max-w-[66rem] mx-auto -mt-[8rem] relative z-10 px-6">
        <div className="glass-effect rounded-lg shadow-xl overflow-hidden p-8 flex flex-col md:flex-row items-center gap-12">
          
          {/* Image Section */}
          <motion.div className="flex-1">
            <div className="h-full">
              <img
                src="/undraw_group-chat_4xw0.svg"
                alt="Customer service representative"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="FirstName"
                  value={formData.FirstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="glass-input"
                  required
                />
                <input
                  type="text"
                  name="LastName"
                  value={formData.LastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="glass-input"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="glass-input"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="glass-input"
                required
              />
              <textarea
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                placeholder="Your Message"
                className="glass-input"
                required
              />
              <button type="submit" className="glass-button" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Cards */}
      <div className="container max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-12">
        {[
          { icon: <Phone />, text: "Contact us", value: "+(990) - 887 -345 - 4556" },
          { icon: <Mail />, text: "Email us", value: "Contact@adreach.com" },
          { icon: <MapPin />, text: "Address", value: "915 Hilldale Lane Maryville" },
        ].map((item, index) => (
          <div key={index} className="glass-effect p-8 rounded-3xl text-center">
            <div className="bg-white p-4 rounded-full mx-auto w-max mb-4">
              {item.icon}
            </div>
            <h2 className="text-2xl font-bold text-white">{item.text}</h2>
            <p className="text-gray-200">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Map Component */}
      <Map />
    </div>
  );
};

export default ContactUs;
