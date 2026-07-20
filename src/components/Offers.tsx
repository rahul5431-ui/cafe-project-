import { motion } from 'motion/react';
import { Tag, Cake, Users, Coffee } from 'lucide-react';

export function Offers() {
  const offers = [
    {
      title: '10% Student Discount',
      desc: 'Valid Monday to Friday on presentation of a valid student ID card.',
      icon: Tag,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Free Dessert',
      desc: 'Celebrate your birthday with us and get a complimentary dessert of your choice.',
      icon: Cake,
      color: 'bg-pink-50 text-pink-600',
    },
    {
      title: 'Weekend Family Combo',
      desc: 'Special curated meals for families at discounted rates every Saturday and Sunday.',
      icon: Users,
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Happy Hours',
      desc: 'Buy 1 Coffee, Get 1 Free. Available everyday between 4 PM and 6 PM.',
      icon: Coffee,
      color: 'bg-sky-50 text-sky-600',
    },
  ];

  return (
    <section id="offers" className="py-24 bg-coffee-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-coffee-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-coffee-800 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-coffee-500 uppercase mb-3">Specials</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Exclusive Offers
          </h3>
          <p className="text-coffee-100/80 text-lg">
            Make the most out of your visit with our special deals tailored just for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, idx) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-coffee-800/50 backdrop-blur-sm p-8 rounded-2xl border border-coffee-700/50 hover:bg-coffee-800 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${offer.color}`}>
                <offer.icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">{offer.title}</h4>
              <p className="text-coffee-200/80 text-sm leading-relaxed">{offer.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
