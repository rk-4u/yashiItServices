import React from "react";
import { motion, useInView } from "framer-motion";

const TestimonialCard = ({ testimonial, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, delay: index * 0.1 } 
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="p-6 rounded-lg shadow-lg flex flex-col justify-between"
      style={{
        background: "rgba(255, 255, 255, 0.15)", // Light transparency
        backdropFilter: "blur(12px) saturate(180%)", // Frosted glass effect
        WebkitBackdropFilter: "blur(12px) saturate(180%)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <p className="text-white mb-4">"{testimonial.text}"</p>
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-3 object-cover"
        />
        <div className="leading-tight">
          <p className="text-gray-200 font-bold">{testimonial.name}</p>
          <p className="text-gray-300 text-sm">{testimonial.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    { id: 1, text: "The templates from this site have completely transformed my business website. They're sleek, modern, and easy to customize. I couldn't be happier with the results!", name: "Anna Willow", title: "Marketing Director", 
      avatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?crop=faces&fit=crop&w=100&h=100" },
    { id: 2, text: "Exceptional templates with a professional touch! My corporate website now looks fantastic, and I've received numerous compliments from clients and colleagues.", name: "Jacob Gray", title: "Creative Developer", 
      avatar: "https://images.unsplash.com/photo-1642364861013-2c33f2dcfbcf?q=80&w=2104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, text: "TThese templates are a game-changer! They helped me launch my blog in no time, and the mobile-friendly designs mean my site looks great on any device.", name: "Maria Phillips", title: "Lead Designer", 
      avatar: "https://images.unsplash.com/photo-1681500920181-0aff411f8cab?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, text: "The range of templates available is impressive. I found the perfect match for my e-commerce site, and the built-in e-commerce features have made managing my store a breeze.", name: "Tim Roberts", title: "Agency Owner",
      avatar: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?crop=faces&fit=crop&w=100&h=100" },
    { id: 5, text: "I was able to create a professional-looking website without any coding knowledge, thanks to the user-friendly templates. Highly recommended; my business is growing!", name: "Emily Patel", title: "Small Business Owner",
      avatar: "https://images.unsplash.com/photo-1696960181436-1b6d9576354e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, text: "Absolutely amazing! The templates are not only visually stunning but also SEO-friendly, which has significantly improved my site's traffic and engagement.", name: "Robert McKay", title: "Digital Marketer", 
      avatar: "https://images.unsplash.com/photo-1587404461093-8091fba7c4f7?crop=faces&fit=crop&w=100&h=100" },
    { id: 7, text: "TThese templates are amazing! My online store now looks incredibly polished, and my customers have commented on how professional it feels. 100% worth my money! Where do I sign up?!", name: "Taylor Green", title: "Photographer",
      avatar: "https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=faces&fit=crop&w=100&h=100" },
    { id: 8, text: "Really good product. Have been recommending MarketHub templates to all my peers and they loved it too. Looking forward to upcoming updates! Can't wait to see what's new.", name: "Rebecca Jones", title: "Blogger & Entrepreneur", 
      avatar: "https://plus.unsplash.com/premium_photo-1661508196384-333e4ebd90db?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 9, text: "These templates completely changed my portfolio! The clean, modern design has attracted more clients than ever. I love how easy they are to customize, and the responsiveness is fantastic. Highly recommended for any designer looking to showcase their work!", name: "Samuel Lee", title: "Freelance Designer",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=faces&fit=crop&w=100&h=100" }
];


  const titleRef = React.useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="testimonials"
      className="py-16 px-6"
      style={{
        background: "rgba(0, 0, 0, 0.4)", // Dark transparent background
        backdropFilter: "blur(18px) saturate(150%)",
        WebkitBackdropFilter: "blur(18px) saturate(150%)",
        padding: "4rem 1rem",
      }}
    >
      {/* Title */}
      <motion.h2 
        ref={titleRef}
        initial={{ opacity: 0, y: -20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-8 text-white"
      >
        What Our <span className="text-red-400">Customers</span> Say
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
