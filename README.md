# Landing Page — Academia de Jiu Jitsu

Landing page mobile-first para captação de alunos, com aula experimental gratuita como CTA principal.

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animações)
- **shadcn/ui** (Button, Card, Input, Label — instalados manualmente, ver nota abaixo)
- **lucide-react** (ícones)

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Estrutura

```
src/
├── app/
│   ├── layout.tsx       # fontes (Montserrat + Inter) e metadata
│   ├── page.tsx         # monta todas as seções
│   └── globals.css      # tema preto/branco/dourado (Tailwind @theme)
├── components/
│   ├── ui/               # componentes shadcn (button, card, input, label)
│   └── sections/          # navbar, hero, modalidades, diferenciais,
│                           # galeria, depoimentos, localizacao,
│                           # formulario-aula, footer, whatsapp-float
└── data/
    └── content.ts        # TODO o conteúdo textual (edite aqui!)
```

## O que editar primeiro

1. **`src/data/content.ts`** — troque modalidades, depoimentos, horários e
   endereço pelos dados reais da academia (a logo e fotos já são reais ✅).
2. **Imagens** — já estão usando fotos reais em `public/img/`. Para trocar
   ou adicionar mais, basta colocar o arquivo em `public/img/` e referenciar
   como `/img/nome-do-arquivo.png` em `hero.tsx` ou `content.ts` (array
   `galeria`).
3. **WhatsApp/telefone** — busque por `5571999999999` no projeto (footer e
   botão flutuante) e troque pelo número real.
4. **Mapa** — em `src/components/sections/localizacao.tsx`, troque o `src`
   do iframe pelo embed real do Google Maps (Compartilhar > Incorporar mapa).
5. **Formulário** — em `src/components/sections/formulario-aula.tsx`, o
   envio hoje só mostra mensagem de sucesso (não envia de fato). Conecte a um
   serviço de e-mail (Resend, EmailJS) ou a uma API própria.

## shadcn/ui — nota importante

O CLI oficial do shadcn (`npx shadcn init`) baixa configuração e componentes
do registro `ui.shadcn.com`. Os componentes em `src/components/ui/` foram
criados manualmente seguindo exatamente o padrão que o CLI gera, então
funcionam normalmente — mas se quiser adicionar novos componentes do shadcn
(ex: Dialog, Select, Textarea), rode o CLI normalmente na sua máquina:

```bash
npx shadcn@latest add dialog
```

## Deploy

Recomendado: [Vercel](https://vercel.com) (mesma plataforma do seu portfólio
em Next.js). Basta conectar o repositório do GitHub.
# honrados-landing-page
# honrados-landing-page
