# Roldan Eng Software

Landing page institucional da Roldan Eng Software, criada para apresentar serviços de desenvolvimento fullstack, stack técnica, referências de projetos e canais de contato.

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Jest e React Testing Library

## Estrutura

```text
app/
  _components/        Componentes específicos da home
  __tests__/          Testes da página principal
  layout.tsx          Metadata, fontes e JSON-LD
  page.tsx            Composição da landing page
components/           Componentes compartilhados
public/               Assets estáticos, robots e sitemap
```

## Scripts

```bash
npm run dev      # inicia o servidor local
npm run lint     # executa ESLint
npm test         # executa Jest
npm run build    # gera build de produção
npm run start    # serve o build de produção
```

## Desenvolvimento

Instale as dependências e rode o servidor local:

```bash
npm install
npm run dev
```

A aplicação fica disponível em `http://localhost:3000`.

## Validação

Antes de publicar alterações, execute:

```bash
npm run lint
npm test
npm run build
```

## Conteúdo e SEO

Os metadados principais ficam em `app/layout.tsx`, incluindo Open Graph, robots e JSON-LD. O sitemap e o robots estáticos ficam em `public/sitemap.xml` e `public/robots.txt`.

Os componentes de seção da landing ficam colocalizados em `app/_components`, seguindo as regras do projeto para componentes usados apenas por uma rota.

## Decisões Técnicas

Shadcn UI e Radix UI não foram adicionados nesta fase porque a interface atual é uma landing page estática, composta por HTML semântico, links e estilos Tailwind. Eles devem ser introduzidos quando houver formulários, diálogos, menus, abas, popovers ou outros componentes interativos que se beneficiem dos padrões de acessibilidade dessas bibliotecas.

O `npm audit` reporta uma vulnerabilidade moderada em `postcss@8.4.31` trazida internamente por `next@16.2.4`. O pacote `postcss` usado diretamente pelo Tailwind já está em versão corrigida (`8.5.10`). A correção automática sugerida pelo npm exige `npm audit fix --force` e tenta trocar o Next para uma versão antiga e quebrável, então não deve ser aplicada. A pendência deve ser revisitada quando houver uma versão do Next que atualize essa dependência interna.
