import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "We're just getting started — reviews from our community members will appear here soon.",
    author: "Review Pending",
    role: "Community Member"
  },
  {
    text: "Collaborator and contributor testimonials will be shared here as the project grows.",
    author: "Review Pending",
    role: "Collaborator"
  },
  {
    text: "More testimonials are on the way. If you've worked with us, we'd love to hear from you!",
    author: "Review Pending",
    role: "Discord Member"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground tracking-tight">
            What People <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Reviews from collaborators and community members — more coming soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl relative border border-border shadow-sm"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />
              <div className="flex gap-1 mb-4 text-primary">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="inline-block bg-accent text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
                Upcoming
              </span>
              <p className="text-base text-muted-foreground mb-8 relative z-10 leading-relaxed italic">
                "{item.text}"
              </p>
              <div>
                <div className="font-bold text-foreground font-display">{item.author}</div>
                <div className="text-sm text-primary font-medium">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
