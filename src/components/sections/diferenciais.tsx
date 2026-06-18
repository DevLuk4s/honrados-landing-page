"use client";

import { motion } from "framer-motion";
import {
  Award,
  Building2,
  Heart,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { diferenciais } from "@/data/content";

const icones: Record<string, LucideIcon> = {
  Award,
  Building2,
  Heart,
  TrendingUp,
};

export function Diferenciais() {
  return (
    <section className="py-24 px-6 bg-jj-white text-jj-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-jj-gold font-display uppercase tracking-[0.2em] text-sm mb-3">
            Diferenciais
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl">
            Por Que Treinar Aqui
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {diferenciais.map((dif, i) => {
            const Icone = icones[dif.icone];
            return (
              <motion.div
                key={dif.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-jj-black flex items-center justify-center mb-4">
                  <Icone className="text-jj-gold" size={26} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {dif.titulo}
                </h3>
                <p className="text-sm text-neutral-600">{dif.descricao}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
