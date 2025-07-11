import React, { useEffect, useState } from "react";
import "./testimonialCarousel.css";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aarav Sharma",
    role: "Product Manager at Zenter",
    quote:
      "This tool transformed the way we launch features. Incredible UI and speed.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Riya Kapoor",
    role: "Founder of Bloom Co.",
    quote:
      "Our site conversions increased after embedding this component. Love it!",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Dev Mehta",
    role: "CTO at LoopStack",
    quote: "It’s simple, elegant, and highly reusable across our pages.",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <div
      className="testimonial-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="avatar">
        <img src={current.avatar} alt={current.name} />
      </div>
      <p className="quote">“{current.quote}”</p>
      <h4>{current.name}</h4>
      <span className="role">{current.role}</span>
    </div>
  );
};

export default TestimonialCarousel;
