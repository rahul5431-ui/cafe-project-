import { motion } from 'motion/react';
import { Utensils, Wifi, Clock, Car, Accessibility, Wind, Users } from 'lucide-react';

export function About() {
  const facilities = [
    { icon: Utensils, label: 'Dine-in & Catering' },
    { icon: Wifi, label: 'Free Wi-Fi' },
    { icon: Car, label: 'Parking Available' },
    { icon: Users, label: 'Family Seating' },
    { icon: Wind, label: 'Air Conditioning' },
    { icon: Accessibility, label: 'Wheelchair Accessible' },
  ];

  return (
    <section id="about" className="py-24 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-coffee-600 uppercase mb-3">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 mb-6 leading-tight">
              A cozy corner established in 2024.
            </h3>
            <p className="text-coffee-800/80 text-lg leading-relaxed mb-6">
              Spice Route Café focuses on serving fresh, hygienic, and affordable meals in a comfortable environment. The café is known for its friendly staff, quick service, and quality food, making it a popular destination for casual dining and family gatherings.
            </p>
            <p className="text-coffee-800/80 text-lg leading-relaxed mb-8">
              Whether you're a student looking for a quiet study spot, an office worker grabbing a quick lunch, or a family enjoying a weekend dinner, we have something special for everyone.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {facilities.map((fac, idx) => (
                <div key={idx} className="flex items-center gap-3 text-coffee-900">
                  <div className="p-2 rounded-full bg-coffee-100 text-coffee-600">
                    <fac.icon size={18} />
                  </div>
                  <span className="font-medium text-sm">{fac.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10 shadow-2xl shadow-coffee-900/10">
              <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop" 
                alt="Cafe Food" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative blob/shape */}
            <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-coffee-100 rounded-full blur-3xl -z-10 opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
