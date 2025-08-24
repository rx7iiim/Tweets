import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "This dashboard completely transformed how we analyze our business data. The insights we've gained have been invaluable.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      initials: "SJ",
    },
    {
      quote:
        "The user management features are exceptional. We've streamlined our operations significantly since implementing this platform.",
      author: "Michael Rodriguez",
      role: "Product Manager, InnovateCo",
      initials: "MR",
    },
    {
      quote:
        "The e-commerce tracking capabilities have helped us increase conversions by 32% in just three months.",
      author: "Amanda Lee",
      role: "E-commerce Director, StyleShop",
      initials: "AL",
    },
  ];

  return (
    <div className="py-16 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-purple-300 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Trusted by industry leaders
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-purple-200 italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonial.initials}
                  </span>
                </div>
                <div className="ml-3">
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-purple-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
