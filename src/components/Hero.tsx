import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
          alt="Cafe Interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/80 to-coffee-900/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6"
        >
          <Star size={14} className="text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium tracking-wide">4.6/5 from 428 Reviews</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-lg"
        >
          Spice Route Café
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-coffee-50 mb-10 font-light leading-relaxed drop-shadow-md"
        >
          A family-friendly haven serving Indian, Chinese, and Continental food with freshly brewed coffee, desserts, and quick snacks.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 bg-coffee-600 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-coffee-500 transition-colors"
          >
            Explore Menu
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-coffee-900 px-8 py-4 rounded-full text-base font-medium hover:bg-coffee-50 transition-colors"
          >
            Book a Table
          </a>
        </motion.div>
      </div>
    </section>
  );
}
