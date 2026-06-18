"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { modalidades } from "@/data/content";

export function FormularioAula() {
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const telefone = (form.elements.namedItem("telefone") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)
      .value;

    if (!nome || !telefone || !email) {
      setErro("Preencha todos os campos obrigatórios.");
      return;
    }

    setErro("");
    // TODO: integrar com backend / serviço de e-mail / WhatsApp API
    setEnviado(true);
  }

  return (
    <section id="contato" className="py-24 px-6 bg-jj-black">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-jj-gold font-display uppercase tracking-[0.2em] text-sm mb-3">
            Comece Agora
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-jj-white">
            Aula Experimental Grátis
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-jj-black-soft border border-jj-gold/20 rounded-lg p-8"
        >
          {enviado ? (
            <div className="flex flex-col items-center text-center gap-3 py-8">
              <CheckCircle2 className="text-jj-gold" size={48} />
              <h3 className="font-display font-bold text-xl text-jj-white">
                Recebemos sua solicitação!
              </h3>
              <p className="text-jj-gray text-sm">
                Em breve nossa equipe vai entrar em contato para agendar sua
                aula experimental.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="nome">Nome completo</Label>
                <Input id="nome" name="nome" placeholder="Seu nome" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="telefone">WhatsApp</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="modalidade">Modalidade de interesse</Label>
                <select
                  id="modalidade"
                  name="modalidade"
                  className="h-11 w-full rounded-md border border-jj-gold/30 bg-jj-black px-4 text-sm text-jj-white outline-none focus-visible:border-jj-gold focus-visible:ring-1 focus-visible:ring-jj-gold"
                >
                  {modalidades.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.nome}
                    </option>
                  ))}
                </select>
              </div>

              {erro && <p className="text-sm text-red-400">{erro}</p>}

              <Button type="submit" size="lg" className="mt-2">
                Quero Agendar Minha Aula
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
