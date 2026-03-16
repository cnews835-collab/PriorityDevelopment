import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-lg border border-border p-2 z-10 relative">
              <img
                src={`${import.meta.env.BASE_URL}images/about-art.png`}
                alt="Priority Development team vibe"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/40 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground tracking-tight">
              Not a Company. <br className="hidden md:block" />
              Just a <span className="text-primary">Side Project.</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground">
              <p>
                Priority Development is a passion-driven side project built by a small group of developers and creators who love Roblox, Discord, and the web. No corporate fluff — just people who enjoy building cool things together.
              </p>
              <p>
                We work on Roblox games, GFX, modeling, Discord bots, community servers, and web tools whenever we get the chance. Everything we make comes from genuine interest, and we're always looking for likeminded people to collaborate with.
              </p>
            </div>

            {/* Founder Quote */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-8 relative bg-white border border-border rounded-2xl p-6 shadow-sm"
            >
              <Quote className="absolute top-4 right-5 w-8 h-8 text-primary/10" />
              <p className="text-foreground font-medium text-base leading-relaxed italic">
                "Not a company, a side project."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white shrink-0">
                  CK
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Cricketnews28</p>
                  <p className="text-xs text-muted-foreground">Founder, Priority Development</p>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 pt-8 border-t border-border flex items-center gap-6">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-primary flex items-center justify-center text-xs font-bold text-white shadow-sm">PD</div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-400 flex items-center justify-center text-xs font-bold text-white shadow-sm">RB</div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-cyan-400 flex items-center justify-center text-xs font-bold text-white shadow-sm">DC</div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-accent text-primary flex items-center justify-center text-xs font-bold z-10 shadow-sm">+</div>
              </div>
              <div className="text-sm font-medium">
                <span className="text-foreground font-bold">Small team, big ideas</span>
                <br />
                <span className="text-muted-foreground">Always open to collaborators</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
