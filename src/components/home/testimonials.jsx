import React, { useEffect } from "react";
import { motion, useAnimation, useScroll, useInView } from "framer-motion";

const TestimonialCard = ({ testimonial, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1 // stagger effect
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-between"
    >
      <p className="text-gray-800 mb-4">"{testimonial.text}"</p>
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="text-gray-700 font-bold">{testimonial.name}</p>
          <p className="text-gray-500 text-sm">{testimonial.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The templates from this site have completely transformed my business website. They're sleek, modern, and easy to customize. I couldn't be happier with the results!",
      name: "Anna Willow",
      title: "Marketing Director",
      avatar: "https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=1024x1024&w=is&k=20&c=3jNReWPZuYJ2v6FGU3-sYMTBnkGDKWN8oYGfNDD6E1Y=",
    },
    {
      id: 2,
      text: "Exceptional templates with a professional touch! My corporate website now looks fantastic, and I've received numerous compliments from clients and colleagues.",
      name: "Jacob Gray",
      title: "Creative Developer",
      avatar: "https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=1024x1024&w=is&k=20&c=3jNReWPZuYJ2v6FGU3-sYMTBnkGDKWN8oYGfNDD6E1Y=",
    },
    {
      id: 3,
      text: "These templates are a game-changer! They helped me launch my blog in no time, and the mobile-friendly designs mean my site looks great on any device.",
      name: "Maria Phillips",
      title: "Lead Designer",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 4,
      text: "The range of templates available is impressive. I found the perfect match for my e-commerce site, and the built-in e-commerce features have made managing my store a breeze.",
      name: "Tim Roberts",
      title: "Agency Owner",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 5,
      text: "I was able to create a professional-looking website without any coding knowledge, thanks to the user-friendly templates. Highly recommended; my business is growing!",
      name: "Emily Patel",
      title: "Small Business Owner",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 6,
      text: "Absolutely amazing! The templates are not only visually stunning but also SEO-friendly, which has significantly improved my site's traffic and engagement.",
      name: "Robert McKay",
      title: "Digital Marketer",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 7,
      text: "These templates are amazing! My online store now looks incredibly polished, and my customers have commented on how professional it feels. 100% worth my money! Where do I sign up?!",
      name: "Taylor Green",
      title: "Photographer",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 8,
      text: "Really good product. Have been recommending MarketHub templates to all my peers and they loved it too. Looking forward to upcoming updates! Can't wait to see what's new.",
      name: "Rebecca Jones",
      title: "Blogger & Entrepreneur",
      avatar: "/api/placeholder/40/40",
    },
  ];

  const titleRef = React.useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <div id="testimonials" className="bg-white pt-4 pb-16 px-4">
      <motion.h2 
        ref={titleRef}
        initial={{ opacity: 0, y: -20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10"
      >
        What Our <span className="text-red-600">Customers</span> Say
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
        {/* First 6 Testimonials */}
        {testimonials.slice(0, 6).map((testimonial, index) => (
          <TestimonialCard 
            key={testimonial.id} 
            testimonial={testimonial} 
            index={index}
          />
        ))}

        {/* 7th Testimonial */}
        <TestimonialCard 
          testimonial={testimonials[6]} 
          index={6}
        />

        {/* Smiley Icon */}
        <motion.div 
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-full h-full text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.25c5.376 0 9.75 4.374 9.75 9.75S17.376 21.75 12 21.75 2.25 17.376 2.25 12 6.624 2.25 12 2.25zm0 13.5c1.5 0 3-.75 3.75-1.5m-7.5 0c.75.75 2.25 1.5 3.75 1.5M9.75 10.5h.008v.008H9.75V10.5zm4.5 0h.008v.008h-.008V10.5z"
          />
        </svg>
          </div>
        </motion.div>

        {/* 8th Testimonial */}
        <TestimonialCard 
          testimonial={testimonials[7]} 
          index={8}
        />
      </div>
    </div>
  );
};

export default Testimonials;