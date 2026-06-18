"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Foto real da turma da Honrados Academia de Esportes */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/img/hero-grupo.png')",
          backgroundPosition: "center 25%",
        }}
      />
      <div className="absolute inset-0 bg-jj-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-jj-black via-transparent to-jj-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <p className="text-jj-gold font-display uppercase tracking-[0.2em] text-sm mb-4">
          Academia de Jiu Jitsu
        </p>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-tight text-jj-white mb-6">
          Domine a Arte Suave.
          <br />
          Transforme Seu <span className="text-jj-gold">Corpo</span> e Sua{" "}
          <span className="text-jj-gold">Mente</span>.
        </h1>
        <p className="text-jj-gray text-lg mb-10 max-w-xl mx-auto">
          Aulas para todos os níveis, com professores faixa-preta. Disciplina,
          autodefesa e evolução real — comece hoje sua jornada no tatame.
        </p>
        <Button asChild size="lg">
          <a href="#contato">Quero Minha Aula Experimental</a>
        </Button>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-jj-gold"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
