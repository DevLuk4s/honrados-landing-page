"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsappFloat() {
  return (
    <motion.a
      href="https://wa.me/557181653528"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-jj-gold text-jj-black shadow-[0_0_25px_rgba(212,175,55,0.4)]"
    >
      <MessageCircle size={26} />
    </motion.a>
  );
}
