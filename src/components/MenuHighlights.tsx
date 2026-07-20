import { motion } from 'motion/react';

export function MenuHighlights() {
  const menuItems = [
    { name: 'Masala Dosa', category: 'Indian', price: '₹140', desc: 'Crispy crepe served with sambar and chutneys.' },
    { name: 'Paneer Butter Masala', category: 'Indian', price: '₹280', desc: 'Cottage cheese cubes in a rich tomato and butter gravy.' },
    { name: 'Veg Biryani', category: 'Indian', price: '₹220', desc: 'Aromatic basmati rice cooked with mixed vegetables and spices.' },
    { name: 'Cheese Pizza', category: 'Continental', price: '₹350', desc: 'Classic hand-tossed pizza with a rich mozzarella blend.' },
    { name: 'Cold Coffee', category: 'Beverages', price: '₹120', desc: 'Creamy and refreshing blended iced coffee.' },
    { name: 'Chocolate Brownie', category: 'Dessert', price: '₹150', desc: 'Warm gooey brownie served with vanilla ice cream.' },
    { name: 'Fresh Lime Soda', category: 'Beverages', price: '₹80', desc: 'Sweet or salted refreshing lime drink.' },
  ];

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-coffee-600 uppercase mb-3">Our Menu</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 mb-6">
            Popular Delights
          </h3>
          <p className="text-coffee-800/80 text-lg">
            A curated selection of our most loved dishes. We offer a wide range of Indian, Chinese, and Continental cuisines.
          </p>
          <div className="mt-6 inline-block bg-coffee-50 border border-coffee-100 rounded-full px-6 py-2 text-coffee-800 font-medium">
            Average Cost: ₹700 for two people
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {menuItems.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex justify-between items-start group"
            >
              <div className="flex-1 pr-6">
                <div className="flex items-baseline justify-between mb-1">
                  <h4 className="text-xl font-bold text-coffee-900 group-hover:text-coffee-600 transition-colors">
                    {item.name}
                  </h4>
                  <span className="hidden sm:inline-block flex-1 mx-4 border-b border-dotted border-coffee-200"></span>
                  <span className="text-lg font-bold text-coffee-600">{item.price}</span>
                </div>
                <p className="text-sm text-coffee-600 font-medium mb-1">{item.category}</p>
                <p className="text-coffee-800/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <a
            href="#contact"
            className="inline-flex items-center justify-center bg-coffee-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-coffee-800 transition-colors"
          >
            View Full Menu at Cafe
          </a>
        </div>
      </div>
    </section>
  );
}
