# Feature Specification: Portfolio Landing Refresh

**Feature Branch**: `001-portfolio-landing-refresh`

**Created**: 2026-06-04

**Status**: Draft

**Input**: User description: "Esta landing page deve divulgar meus trabalhos de
desenvolvedor fullstack. Revisar layout, cores, tipos de letras, grafia e
ortografia para retenção de clientes; incluir área para links de serviços já
realizados com print pequeno da página principal puxado diretamente da primeira
página de cada link; alcançar SEO excelente para buscas orgânicas; transmitir
criatividade, modernidade, eficiência e bom gosto; evitar qualquer aparência de
landing page padrão criada por IA."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Entender valor do desenvolvedor (Priority: P1)

Um visitante que chega pela busca orgânica ou por indicação deve entender nos
primeiros segundos que Sandro Roldan/Roldan Eng Software cria landing pages,
sistemas e aplicações fullstack com qualidade visual, técnica e comercial.

**Why this priority**: Sem percepção imediata de valor e confiança, o visitante
abandona a página antes de avaliar serviços ou entrar em contato.

**Independent Test**: Abrir a landing page em desktop e mobile e verificar se o
primeiro viewport comunica identidade, especialidade fullstack, prova de
criatividade e caminho claro para contato.

**Acceptance Scenarios**:

1. **Given** um visitante novo na página, **When** o primeiro viewport carrega,
   **Then** ele vê uma proposta de valor específica para desenvolvimento
   fullstack, com estética moderna e sem composição genérica de template.
2. **Given** um visitante avaliando confiança, **When** ele percorre a página,
   **Then** ele encontra mensagens consistentes sobre serviços, eficiência,
   qualidade técnica e resultados esperados.

---

### User Story 2 - Avaliar trabalhos realizados (Priority: P2)

Um potencial cliente deve conseguir ver serviços já realizados com link externo
e uma miniatura fiel da primeira página de cada projeto, para avaliar gosto
visual, tipo de entrega e credibilidade.

**Why this priority**: Portfólio visual reduz incerteza, prova capacidade real e
ajuda o visitante a decidir se vale entrar em contato.

**Independent Test**: Adicionar ao menos um projeto ao catálogo de trabalhos
realizados e confirmar que a seção exibe título, descrição, link, status da
captura e miniatura da página principal correspondente.

**Acceptance Scenarios**:

1. **Given** um projeto com URL pública válida, **When** a captura é atualizada,
   **Then** a landing exibe uma miniatura otimizada da primeira página e mantém
   o link acessível ao serviço realizado.
2. **Given** uma URL indisponível ou bloqueada para captura, **When** a seção é
   renderizada, **Then** a página mantém layout estável e exibe fallback visual
   profissional sem quebrar a experiência.

---

### User Story 3 - Ser encontrado organicamente (Priority: P3)

Um usuário pesquisando por desenvolvimento fullstack, landing pages, sistemas
web ou serviços digitais em São Carlos, São Paulo ou Brasil deve encontrar uma
página indexável, rápida, bem estruturada e com conteúdo útil.

**Why this priority**: Busca orgânica é um canal de aquisição essencial para uma
landing page institucional.

**Independent Test**: Inspecionar metadata, headings, conteúdo textual,
Schema.org, sitemap, robots, imagens e links internos/externos para confirmar
que buscadores conseguem rastrear e entender a página.

**Acceptance Scenarios**:

1. **Given** um crawler de busca, **When** ele acessa a página, **Then** encontra
   título, descrição, canonical, Open Graph, JSON-LD, sitemap e robots coerentes
   com a oferta e com a URL de produção.
2. **Given** um visitante vindo de busca, **When** ele lê o conteúdo, **Then** a
   página responde de forma útil o que é oferecido, para quem, onde atende,
   quais tipos de projetos entrega e como entrar em contato.

---

### Edge Cases

- URLs de projetos externos podem estar fora do ar, bloquear captura, carregar
  lentamente ou redirecionar; a página deve preservar layout e confiança.
- Miniaturas podem ficar antigas; a documentação deve definir como atualizar ou
  regenerar screenshots antes de publicação.
- Textos longos em português, nomes de tecnologias ou URLs não podem estourar
  cards, botões ou grids em mobile.
- Imagens de projetos devem ter texto alternativo descritivo e não podem ser a
  única fonte de informação sobre o serviço.
- Conteúdo otimizado para SEO não pode parecer repetitivo, artificial ou escrito
  apenas para buscadores.
- Analytics ou scripts de terceiros não podem degradar performance sem
  justificativa comercial.
- Links de WhatsApp, e-mail, LinkedIn, GitHub e projetos devem permanecer
  funcionais após a reformulação.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The landing page MUST present a distinctive fullstack developer
  positioning focused on creativity, modern engineering, business outcomes, and
  trust.
- **FR-002**: The visual direction MUST avoid generic AI-template patterns,
  including vague gradients, filler copy, repetitive card grids without hierarchy,
  and decorative elements that do not support the message.
- **FR-003**: The page MUST include a curated completed-work section with project
  name, short result-oriented description, public link, technology/context tags
  when useful, and a thumbnail captured from the first page of each project URL.
- **FR-004**: The completed-work section MUST use stable fallback behavior when a
  screenshot cannot be captured or a project URL is temporarily unavailable.
- **FR-005**: The page MUST revise Portuguese spelling, grammar, punctuation,
  tone, and hierarchy so all visible copy reads as professional, clear and
  persuasive.
- **FR-006**: The design MUST include a modern typography system with readable
  body text, strong but controlled display text, and intentional use of mono/type
  accents for technical credibility.
- **FR-007**: The color system MUST feel creative and premium while preserving
  contrast, avoiding one-note palettes, and supporting clear calls to action.
- **FR-008**: The page MUST preserve or improve all contact paths, including
  WhatsApp, e-mail, LinkedIn, GitHub and any social/project links.
- **FR-009**: The page MUST provide semantic heading structure, descriptive link
  labels, visible focus states, keyboard navigation, and responsive layouts for
  mobile, tablet and desktop.
- **FR-010**: The page MUST improve SEO-critical content and metadata for
  relevant organic searches, including fullstack development, landing pages,
  systems, web applications, São Carlos, São Paulo, Brazil, React, Next.js and
  related service intent.
- **FR-011**: The page MUST preserve or intentionally update public metadata,
  canonical URLs, Open Graph, JSON-LD, robots, and sitemap entries when routes,
  branding, content, or deployment URLs change.
- **FR-012**: The page MUST keep images optimized for web delivery and include
  descriptive alt text or accessible names where images convey project context.
- **FR-013**: Release validation MUST include lint, tests, production build, and
  manual checks for responsive behavior, accessibility, SEO metadata, contact
  links and project links.

### Key Entities *(include if feature involves data)*

- **Portfolio Project**: A completed service to display on the landing page.
  Fields include name, public URL, short description, service type, optional
  technology tags, screenshot asset path, screenshot capture date, status and
  fallback label.
- **Screenshot Asset**: A generated image representing the first page of a
  portfolio project. Fields include source URL, output path, dimensions, format,
  capture timestamp and failure reason when applicable.
- **SEO Profile**: Search-facing content and metadata for the landing page.
  Fields include title, description, canonical URL, keywords/topics, Open Graph
  image, structured data, sitemap entry, robots behavior and local service area.
- **Contact Channel**: A visitor action that leads to contact or credibility.
  Fields include label, URL, channel type, accessibility label and validation
  status.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time visitor can identify the service offered, developer
  positioning and primary contact action within 5 seconds on mobile and desktop.
- **SC-002**: At least three completed-work slots can be rendered with stable
  layout, links and thumbnails or professional fallbacks.
- **SC-003**: All visible Portuguese copy passes manual spelling and grammar
  review with no known typo or awkward AI-like phrasing left unresolved.
- **SC-004**: The page receives a Lighthouse SEO score of 100 in local or preview
  validation, barring external network conditions outside the page's control.
- **SC-005**: Changed pages preserve the launch checklist targets of LCP below
  2.5s and CLS below 0.1 in Lighthouse or documented manual performance review.
- **SC-006**: Release validation passes with `npm run lint`, `npm test`, and
  `npm run build`.
- **SC-007**: All primary contact and portfolio links are manually verified
  before release.

## Assumptions

- The landing page remains a single public marketing page unless a later feature
  explicitly adds project detail routes.
- Project screenshots are generated as static assets during development or
  release preparation, not fetched live from visitors' browsers.
- The initial portfolio can be populated from a local configuration file and
  expanded as more service links are available.
- The current production URL behavior in `lib/site.ts` remains valid unless the
  deploy target changes.
- Google Analytics remains optional and must not block page rendering.
