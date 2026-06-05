# Roldan Eng Software

Landing page profissional da Roldan Eng Software, desenvolvida para apresentar
serviços de desenvolvimento fullstack, portfólio de projetos, tecnologias,
canais de contato e fundamentos de SEO.

## Tecnologias

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Jest e React Testing Library
- ESLint

## Como Rodar

Instale as dependências:

```bash
npm install
```

Inicie o ambiente local:

```bash
npm run dev
```

A aplicação fica disponível em `http://localhost:3000`.

## Scripts

```bash
npm run dev               # inicia o servidor de desenvolvimento
npm run build             # gera a build de produção
npm run start             # serve a build de produção
npm run lint              # executa a análise estática
npm test                  # executa os testes automatizados
npm run capture:projects  # atualiza screenshots do portfólio
```

## Estrutura

```text
app/
  _components/   Seções específicas da landing page
  __tests__/     Testes da home, SEO e portfólio
  layout.tsx     Metadados, fontes, analytics e dados estruturados
  page.tsx       Composição da página inicial
  robots.ts      Configuração de robots
  sitemap.ts     Configuração de sitemap
components/      Componentes compartilhados
lib/             Configurações de site, SEO, analytics e portfólio
public/          Assets estáticos, imagens de projetos e Open Graph
scripts/         Rotinas de manutenção
specs/           Documentação de planejamento da feature
```

## Conteúdo

Os principais dados do site ficam centralizados em:

- `lib/site.ts`: URL pública e canais de contato.
- `lib/seo.ts`: configuração de SEO, Open Graph e dados estruturados.
- `lib/analytics.ts`: configuração de analytics.
- `lib/portfolio.ts`: projetos exibidos no portfólio.

As seções visuais da landing page ficam em `app/_components`.

## Validação

Antes de publicar alterações, execute:

```bash
npm run lint
npm test
npm run build
```

Também revise links de contato, links dos projetos, responsividade, metadados,
sitemap, robots e imagem Open Graph quando houver alteração de conteúdo público.

## Deploy

O projeto é uma aplicação Next.js estática-friendly. A URL pública padrão é
configurada em `lib/site.ts` e pode ser sobrescrita com `NEXT_PUBLIC_SITE_URL`.

Para publicação, gere a build de produção com:

```bash
npm run build
```
