import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Map from "../../components/contactUs/map/map";
import axios from "axios";
import "./contactUs.css";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    phone: "",
    Message: "",
  });

  useEffect(() => {
    console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);
    const fetchContacts = async () => {
      try {
        const BACKEND_URL = "https://vercelbackend-cfcd.onrender.com";
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/getAllContacts`
        );

        if (response.data && Array.isArray(response.data.contacts)) {
          setContacts(response.data.contacts); // Ensure it's an array
        } else {
          console.log("Unexpected data format", response.data);
        }
      } catch (error) {
        console.log("Error fetching contacts:", error);
        setError("Failed to load contacts");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    // If the input is "phone", apply number validation
    if (name === "phone") {
      newValue = value.replace(/[^0-9\s\-()]/g, ""); // Allow only numbers, spaces, dashes, and parentheses
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
      const BACKEND_URL = "https://vercelbackend-cfcd.onrender.com"; // Base URL
  
      // Form data to be sent
      const requestData = {
        FirstName: formData.FirstName.trim(),
        LastName: formData.LastName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        Message: formData.Message.trim(),
      };
  
      console.log("Sending data:", requestData); // Debugging: Check the payload before sending
  
      // API request to the backend
      const response = await axios.post(`${BACKEND_URL}/users/register`, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Contact Created Successfully", response.data);
      alert("Thank you! Your message has been sent.");
  
      // Reset form fields
      setFormData({
        FirstName: "",
        LastName: "",
        email: "",
        phone: "",
        Message: "",
      });
    } catch (error) {
      console.error("Error response:", error.response);
      console.error("Error message:", error.message);
  
      let errorMessage = "Something went wrong. Please try again.";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
  
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const animationVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const heroVariants = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 125,
        damping: 10,
      },
    },
  };

  const inputGroupVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child's animation
      },
    },
  };

  const inputVariants = {
    initial: { opacity: 0, x: -20 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
        className="min-h-screen w-full"
      >
        {/* Hero Section */}
        <motion.div
          // variants={heroVariants}
          className="heroContact relative w-full mx-auto min-h-[100vh] sm:min-h-[100vh] md:min-h-[500px] lg:min-h-[550px] bg-cover bg-bottom"
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>

          <motion.div
            variants={animationVariants}
            className="relative flex flex-col justify-start items-center text-white px-4 sm:px-6 lg:px-8 pt-16 xs:pt-16 sm:pt-20 md:pt-20 lg:pt-28"
          >
            <motion.h2
              variants={animationVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-center"
            >
              We are here to help you
            </motion.h2>
            <motion.p
              variants={animationVariants}
              className="text-sm sm:text-base md:text-lg text-center max-w-base sm:max-w-lg md:max-w-2xl lg:max-w-2xl px-4"
            >
              Wave goodbye to tedious reports. Our new project management
              dashboards are easy to build and use, boost visibility, and offer
              instant actionable insights.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Consultation Section */}
        <motion.div
          variants={animationVariants}
          className="px-4 sm:px-6 lg:px-8 -mt-[30rem] 2xs:-mt-[32rem] sm:-mt-[30rem] md:-mt-52 lg:-mt-48 relative z-10"
        >
          <div className="max-w-[66rem] mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-normal p-4 sm:p-8 gap-12">
              {/* Image Section */}
              <motion.div variants={animationVariants} className="flex-1">
                <div className="h-full">
                  <img
                    src="https://cdn.prod.website-files.com/66e12353dccf8ffbcf7152ed/66e12353dccf8ffbcf71537a_contact-hero-p-500.webp"
                    alt="Customer service representative"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </motion.div>

              {/* Form Section */}
              <motion.div
                variants={animationVariants}
                className="w-full lg:w-1/2"
              >
                <div className="flex flex-col h-full">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                    Contact Us
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    className="flex-1 flex flex-col"
                  >
                    <motion.div
                      variants={inputGroupVariants}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4"
                    >
                      {/* First Name Input */}
                      <motion.div variants={inputVariants}>
                        <label className="block text-sm sm:text-base font-medium text-gray-700">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="FirstName"
                          value={formData.FirstName}
                          onChange={handleChange}
                          required
                          placeholder="First name"
                          className="mt-1 sm:mt-2 block w-full rounded-md border border-gray-400 bg-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 text-sm sm:text-base"
                        />
                      </motion.div>

                      {/* Last Name Input */}
                      <motion.div variants={inputVariants}>
                        <label className="block text-sm sm:text-base font-medium text-gray-700">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="LastName"
                          value={formData.LastName}
                          onChange={handleChange}
                          required
                          className="mt-1 sm:mt-2 block w-full rounded-md border border-gray-400 bg-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-2 py-1.5 text-sm sm:text-base"
                          placeholder="Last name"
                        />
                      </motion.div>
                    </motion.div>

                    {/* Email and Phone Inputs */}
                    <motion.div
                      variants={inputGroupVariants}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4"
                    >
                      {/* Email Input */}
                      <motion.div variants={inputVariants}>
                        <label className="block text-sm sm:text-base font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1 sm:mt-2 block w-full rounded-md border border-gray-400 bg-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-2 py-1.5 text-sm sm:text-base"
                          placeholder="Email address"
                        />
                      </motion.div>

                      {/* Phone Input */}
                      <motion.div variants={inputVariants}>
                        <label className="block text-sm sm:text-base font-medium text-gray-700">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="mt-1 sm:mt-2 block w-full rounded-md border border-gray-400 bg-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-2 py-1.5 text-sm sm:text-base"
                          placeholder="Phone number (e.g., +1 (123) 456-7890)"
                        />
                      </motion.div>
                    </motion.div>

                    {/* Message Textarea */}
                    <motion.div
                      variants={inputVariants}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true }}
                      className="mb-4 sm:mb-6 flex-1"
                    >
                      <label className="block text-sm sm:text-base font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        name="Message"
                        value={formData.Message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="mt-1 sm:mt-2 block w-full rounded-md border border-gray-400 bg-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-2 pt-1.5 pb-[3.375rem] text-sm sm:text-base"
                        placeholder="Your Message"
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      variants={inputVariants}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true }}
                      type="submit"
                      className="w-full py-2 sm:py-3 px-4 rounded-md text-white font-medium text-sm sm:text-base bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Query"}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Cards Section */}
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-6 py-8 my-8 sm:my-20"
      >
        <div className="grid md:grid-cols-3 gap-12 sm:gap-8">
          {/* Phone Contact Card */}
          <motion.div
            variants={cardVariants}
            className="relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100"
          >
            <div className="absolute -top-5 left-8">
              <div className="bg-orange-100 p-4 rounded-full">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Contact us
              </h2>
              <p className="text-gray-600 text-lg">+(990) - 887 -345 - 4556</p>
            </div>
          </motion.div>

          {/* Email Contact Card */}
          <motion.div
            variants={cardVariants}
            className="relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100"
          >
            <div className="absolute -top-5 left-8">
              <div className="bg-purple-100 p-4 rounded-full">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Email us
              </h2>
              <p className="text-gray-600 text-lg">Contact@adreach.com</p>
            </div>
          </motion.div>

          {/* Address Contact Card */}
          <motion.div
            variants={cardVariants}
            className="relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100"
          >
            <div className="absolute -top-5 left-8">
              <div className="bg-green-100 p-4 rounded-full">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Address</h2>
              <p className="text-gray-600 text-lg">
                915 Hilldale Lane Maryville,
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Map Component */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Map />
      </motion.div>
    </div>
  );
};

export default ContactUs;
