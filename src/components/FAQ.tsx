import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: "Do you have parking available?",
      answer: "Yes, we provide dedicated parking space for all our customers visiting the café."
    },
    {
      question: "How can I make a reservation?",
      answer: "You can easily book a table using the 'Book a Table' form on our website, or call us directly at +91 98765 43210."
    },
    {
      question: "Do you offer vegetarian and dietary-friendly options?",
      answer: "Absolutely! We offer a wide variety of vegetarian dishes across our Indian, Chinese, and Continental menus. Please inform our staff about any specific dietary requirements."
    },
    {
      question: "Is your café wheelchair accessible?",
      answer: "Yes, our café is fully wheelchair accessible with clean washrooms to ensure a comfortable experience for all our guests."
    },
    {
      question: "Do you offer home delivery and takeaway?",
      answer: "Yes, we provide both takeaway and home delivery services. You can call us to place your order directly."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-coffee-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-coffee-600 uppercase mb-3">Questions & Answers</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 mb-6">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-coffee-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-coffee-50/50 transition-colors text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-coffee-900 text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-coffee-600 shrink-0 ml-4"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 pt-1 text-coffee-800/80 leading-relaxed border-t border-coffee-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
