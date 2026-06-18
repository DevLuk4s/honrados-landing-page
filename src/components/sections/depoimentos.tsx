"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { depoimentos } from "@/data/content";

export function Depoimentos() {
  return (
    <section className="py-24 px-6 bg-jj-black-soft">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-jj-gold font-display uppercase tracking-[0.2em] text-sm mb-3">
            Depoimentos
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-jj-white">
            Quem Treina, Recomenda
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depoimentos.map((dep, i) => (
            <motion.div
              key={dep.nome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full bg-jj-black">
                <CardContent className="pt-6 flex flex-col gap-4">
                  <Quote className="text-jj-gold" size={28} />
                  <p className="text-jj-gray text-sm leading-relaxed">
                    {dep.texto}
                  </p>
                  <div className="pt-2 border-t border-jj-gold/10">
                    <p className="font-display font-bold text-jj-white">
                      {dep.nome}
                    </p>
                    <p className="text-xs text-jj-gold uppercase tracking-wide">
                      {dep.faixa}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
