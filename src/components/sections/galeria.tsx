"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galeria } from "@/data/content";

export function Galeria() {
  return (
    <section id="galeria" className="py-24 px-6 bg-jj-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-jj-gold font-display uppercase tracking-[0.2em] text-sm mb-3">
            Tatame
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-jj-white">
            Galeria
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galeria.map((img, i) => (
            <motion.div
              key={img.url}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                loading={i < 3 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-jj-gold/0 group-hover:bg-jj-gold/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
