"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#modalidades", label: "Modalidades" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-jj-black/90 backdrop-blur-md border-b border-jj-gold/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/img/logo.jpg"
            alt="Honrados Academia de Esportes"
            width={40}
            height={40}
            className="rounded-full border border-jj-gold/40"
          />
          <span className="font-display font-extrabold text-lg tracking-wide text-jj-white leading-tight hidden sm:block">
            HONRADOS
            <span className="block text-[10px] text-jj-gold font-medium tracking-[0.15em]">
              ACADEMIA DE ESPORTES
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-jj-gray hover:text-jj-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#contato">Aula Experimental Grátis</a>
          </Button>
        </div>

        <button
          className="md:hidden text-jj-white"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-jj-black border-t border-jj-gold/10"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-jj-gray hover:text-jj-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild size="sm" className="w-full">
                <a href="#contato" onClick={() => setOpen(false)}>
                  Aula Experimental Grátis
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
