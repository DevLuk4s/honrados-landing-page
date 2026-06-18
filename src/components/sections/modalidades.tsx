"use client";

import { motion } from "framer-motion";
import { Dumbbell, Smile, Trophy, Zap, type LucideIcon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { modalidades } from "@/data/content";

const icones: Record<string, LucideIcon> = {
  Dumbbell,
  Smile,
  Trophy,
  Zap,
};

export function Modalidades() {
  return (
    <section id="modalidades" className="py-24 px-6 bg-jj-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-jj-gold font-display uppercase tracking-[0.2em] text-sm mb-3">
            Nossas Aulas
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-jj-white">
            Modalidades
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modalidades.map((mod, i) => {
            const Icone = icones[mod.icone];
            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="h-full hover:border-jj-gold/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-md bg-jj-gold/10 flex items-center justify-center mb-3">
                      <Icone className="text-jj-gold" size={24} />
                    </div>
                    <CardTitle>{mod.nome}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <CardDescription>{mod.descricao}</CardDescription>
                    <p className="text-xs font-medium text-jj-gold/80 uppercase tracking-wide">
                      {mod.horario}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
