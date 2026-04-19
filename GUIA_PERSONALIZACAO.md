# Guia de Personalização da Landing Page

## 📋 Índice
1. [Estrutura do Projeto](#estrutura-do-projeto)
2. [Personalizar Conteúdo](#personalizar-conteúdo)
3. [Adicionar Screenshots dos Projetos](#adicionar-screenshots-dos-projetos)
4. [Deploy no GitHub Pages](#deploy-no-github-pages)
5. [Otimizações de Performance](#otimizações-de-performance)

---

## Estrutura do Projeto

```
roldan-page/
├── app/
│   ├── layout.tsx          # Layout principal com SEO e metadados
│   ├── page.tsx            # Página principal com todas as seções
│   └── globals.css         # Estilos globais e variáveis CSS
├── components/
│   ├── Header.tsx          # Header com navegação
│   └── Footer.tsx          # Footer com links sociais
├── public/
│   ├── images/
│   │   └── projects/       # Screenshots dos projetos (1280×720px)
│   ├── robots.txt          # Configuração SEO para crawlers
│   └── sitemap.xml         # Sitemap para Google
└── package.json
```

---

## Personalizar Conteúdo

### 1. Atualizar Informações dos Projetos

Edite o arquivo `app/page.tsx` e localize o array `projects`. Substitua os dados placeholder:

```typescript
const projects = [
  {
    name: 'Nome do Projeto',
    description: 'Descrição objetiva em 1-2 frases.',
    technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
    projectUrl: 'https://url-do-projeto.com',
    githubUrl: 'https://github.com/org/projeto', // ou null se não disponível
    image: '/images/projects/projeto-01.webp',
  },
  // ... mais 5 projetos
];
```

### 2. Atualizar Links de Contato

Os links já estão configurados com:
- **WhatsApp:** +55 (16) 98144-2301
- **E-mail:** roldan.eng.software@gmail.com
- **LinkedIn:** linkedin.com/in/sandro-roldan-b8721a3b5/
- **GitHub:** github.com/roldan-eng-software
- **Instagram:** @roldan.eng.software

Para alterar, busque e substitua em:
- `app/page.tsx` (seções Hero e Contato)
- `components/Header.tsx` (botão WhatsApp)
- `components/Footer.tsx` (footer links)
- `app/layout.tsx` (Schema.org JSON-LD)

### 3. Adicionar/Remover Tecnologias

Edite o objeto `technologies` em `app/page.tsx`:

```typescript
const technologies = {
  frontend: [
    { name: 'HTML5', icon: '🌐' },
    // adicionar ou remover itens
  ],
  backend: [ /* ... */ ],
  infra: [ /* ... */ ],
};
```

### 4. Adicionar/Remover Serviços

Edite o array `services` em `app/page.tsx`. Cada serviço tem:
- `name`: Nome do serviço
- `description`: Descrição em 1 frase
- `icon`: Componente SVG do ícone

---

## Adicionar Screenshots dos Projetos

### Especificações das Imagens

- **Formato:** WebP (preferido) ou PNG
- **Dimensões:** 1280×720px (proporção 16:9)
- **Local:** `public/images/projects/`
- **Nomes:** `projeto-01.webp`, `projeto-02.webp`, etc.

### Como Criar Screenshots

1. Abra o projeto no Chrome
2. Pressione `F12` para abrir DevTools
3. Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac)
4. Digite "Capture full size screenshot"
5. Otimize a imagem em [Squoosh](https://squoosh.app/)
6. Salve em `public/images/projects/`

### Usar as Imagens nos Cards

Atualize o array `projects` em `app/page.tsx` com o caminho correto da imagem.

---

## Deploy no GitHub Pages

### 1. Instalar Dependência

```bash
npm install gh-pages --save-dev
```

### 2. Configurar package.json

Adicione em `package.json`:

```json
{
  "homepage": "https://roldan-eng-software.github.io/roldan-page",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d out"
  }
}
```

### 3. Configurar next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/roldan-page',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### 4. Deploy

```bash
npm run deploy
```

### 5. Configurar GitHub Pages

1. Vá em Settings > Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `/ (root)`
4. Save

---

## Otimizações de Performance

### Checklist Pré-Lançamento

- [ ] Todas as imagens otimizadas em WebP
- [ ] Screenshots com dimensões corretas (1280×720)
- [ ] Links de contato testados
- [ ] Links dos projetos verificados (sem 404)
- [ ] Meta tags atualizadas
- [ ] Schema.org configurado
- [ ] robots.txt e sitemap.xml presentes

### Métricas de Performance (Core Web Vitals)

Execute o Lighthouse:

```bash
npm run build
npx serve out/
```

Abra o Chrome DevTools > Lighthouse e execute o relatório.

Metas:
- **LCP:** < 2.5s
- **CLS:** < 0.1
- **FID:** < 100ms

---

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run start

# Verificar erros de lint
npm run lint
```

---

## Suporte

Para dúvidas ou problemas, consulte:
- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [Guia GitHub Pages](https://pages.github.com/)
