import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import Toast from "./Toast";

const ContactSection = () => {
  const [toast, setToast] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WHATSAPP_NUMBER = "918925393946";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const text = `Portfolio Inquiry\nName: ${form.name}\nMessage: ${form.message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      setToast({ title: "Success", description: "Opening WhatsApp..." });
    }, 800);
  };

  return (
    <>
      <Toast toast={toast} setToast={setToast} />

      <section id="contact" className="relative bg-[#050505] py-24 overflow-hidden">
        {/* Logo-inspired Background Glows */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 h-[500px] w-[500px] rounded-full bg-zinc-800/20 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Branding Side */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/5 px-4 py-1.5 text-sm font-medium text-red-500"
              >
                <ShieldCheck className="h-4 w-4" />
                Secure & Direct Communication
              </motion.div>

              <h2 className="text-5xl sm:text-7xl font-black text-white leading-tight">
                LET'S BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                  THE FUTURE.
                </span>
              </h2>

              <p className="text-zinc-400 text-lg max-w-md border-l-2 border-red-600 pl-6">
                Inspired by the precision of my brand, I deliver high-performance 
                digital solutions with a focus on impact and speed.
              </p>

              <div className="flex gap-6">
                <a href="https://github.com/SENTHILKUMAR-M25" className="text-zinc-500 hover:text-red-500 transition-colors"><Github size={28} /></a>
                <a href="https://www.linkedin.com/in/senthil-kumar-m-04048a2b0/" className="text-zinc-500 hover:text-red-500 transition-colors"><Linkedin size={28} /></a>
                <a href="mailto:senthil.kumar.m25@gmail.com" className="text-zinc-500 hover:text-red-500 transition-colors"><Mail size={28} /></a>
              </div>
            </div>

            {/* Form Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative group"
            >
              {/* Decorative "S" Curve Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-red-600 to-zinc-800 rounded-[2.5rem] opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative bg-[#0a0a0a] border border-white/5 p-8 sm:p-10 rounded-[2.5rem] backdrop-blur-3xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-2xl bg-zinc-900/50 border border-zinc-800 px-5 py-4 text-white focus:border-red-600 outline-none transition-all placeholder:text-zinc-600"
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-2xl bg-zinc-900/50 border border-zinc-800 px-5 py-4 text-white focus:border-red-600 outline-none transition-all placeholder:text-zinc-600"
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1">
                    <textarea
                      rows={4}
                      placeholder="Tell me about the mission..."
                      className="w-full rounded-2xl bg-zinc-900/50 border border-zinc-800 px-5 py-4 text-white focus:border-red-600 outline-none transition-all resize-none placeholder:text-zinc-600"
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group/btn relative overflow-hidden py-5 bg-red-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(220,38,38,0.2)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? "INITIATING..." : "SEND MESSAGE"}
                      <Send className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                </form>

                <div className="mt-8 flex justify-center">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-center gap-2 text-zinc-500 hover:text-red-400 transition-colors text-sm uppercase tracking-widest font-semibold">
                    Quick Chat <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;