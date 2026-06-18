import Image from "next/image";
import { AtSign, MessageCircle, Phone } from "lucide-react";

const links = [
  { href: "#modalidades", label: "Modalidades" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-jj-black-soft border-t border-jj-gold/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <Image
            src="/img/logo.jpg"
            alt="Honrados Academia de Esportes"
            width={48}
            height={48}
            className="rounded-full border border-jj-gold/40"
          />
          <div className="text-center md:text-left">
            <p className="font-display font-extrabold text-lg tracking-wide text-jj-white">
              HONRADOS
            </p>
            <p className="text-jj-gray text-xs">Academia de Esportes</p>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-jj-gray hover:text-jj-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/honrados.bjj/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-jj-gray hover:text-jj-gold transition-colors"
          >
            <AtSign size={20} />
          </a>
          <a
            href="https://wa.me/557181653528"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-jj-gray hover:text-jj-gold transition-colors"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href="tel:+557181653528"
            aria-label="Telefone"
            className="text-jj-gray hover:text-jj-gold transition-colors"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-jj-gray/60 mt-10">
        © {new Date().getFullYear()} Honrados Academia de Esportes. Todos os
        direitos reservados.
      </p>
    </footer>
  );
}
