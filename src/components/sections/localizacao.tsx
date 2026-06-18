"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, AtSign } from "lucide-react";
import { horariosFuncionamento } from "@/data/content";

export function Localizacao() {
  return (
    <section id="localizacao" className="py-24 px-6 bg-jj-white text-jj-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-jj-gold font-display uppercase tracking-[0.2em] text-sm mb-3">
            Onde Estamos
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-8">
            Localização e Horários
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-jj-gold mt-1 shrink-0" size={22} />
              <div>
                <p className="font-semibold">Endereço</p>
                <p className="text-neutral-600 text-sm">
                  Rua Jayme Vieira Lima, 68 E - 2° andar, Pau da Lima —
                  Salvador, BA
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-jj-gold mt-1 shrink-0" size={22} />
              <div className="w-full">
                <p className="font-semibold mb-1">Funcionamento</p>
                {horariosFuncionamento.map((h) => (
                  <div
                    key={h.dia}
                    className="flex justify-between text-sm text-neutral-600 max-w-xs"
                  >
                    <span>{h.dia}</span>
                    <span>{h.horario}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-jj-gold mt-1 shrink-0" size={22} />
              <div>
                <p className="font-semibold">Contato</p>
                <p className="text-neutral-600 text-sm">(+55) 71 8165-3528</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <AtSign className="text-jj-gold mt-1 shrink-0" size={22} />
              <div>
                <p className="font-semibold">Instagram</p>
                <p className="text-neutral-600 text-sm">@honrados.bjj</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full h-[400px] rounded-lg overflow-hidden border border-jj-gold/20"
        >
          {/* Substitua pelo embed real do Google Maps com o endereço da academia */}
          <iframe
            title="Mapa da Honrados Academia de Esportes"
            className="w-full h-full"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.818871059959!2d-38.445531926225094!3d-12.919360287391187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71610601dc38e21%3A0xf449220aaf5630d6!2sRua%20Jayme%20Vieira%20Lima%2C%2068e%20-%20Pau%20da%20Lima%2C%20Salvador%20-%20BA%2C%2041235-000!5e0!3m2!1spt-BR!2sbr!4v1781785255270!5m2!1spt-BR!2sbr"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
