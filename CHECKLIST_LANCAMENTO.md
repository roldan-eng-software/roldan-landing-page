# Checklist de Lançamento

## ✅ Antes do Deploy

### Conteúdo
- [ ] Substituir os 6 projetos placeholder pelos projetos reais
- [ ] Adicionar screenshots de todos os projetos (1280×720px, WebP)
- [ ] Verificar se todos os links dos projetos estão funcionando
- [ ] Verificar se todos os links do GitHub estão corretos (quando aplicável)
- [ ] Revisar textos e garantir que estão sem erros de português

### Links de Contato
- [ ] Testar link do WhatsApp: https://wa.me/5516981442301
- [ ] Testar link de e-mail: mailto:roldan.eng.software@gmail.com
- [ ] Testar link do LinkedIn
- [ ] Testar link do GitHub
- [ ] Testar link do Instagram

### SEO
- [ ] Verificar meta tags no `<head>`
- [ ] Verificar Schema.org (JSON-LD)
- [ ] Verificar robots.txt
- [ ] Verificar sitemap.xml
- [ ] Criar imagem Open Graph (1200×630px)
- [ ] Adicionar favicon (.ico, .png, .svg)

### Performance
- [ ] Otimizar todas as imagens em WebP
- [ ] Executar build: `npm run build`
- [ ] Testar com Lighthouse (Chrome DevTools)
- [ ] Garantir LCP < 2.5s
- [ ] Garantir CLS < 0.1

### Acessibilidade
- [ ] Verificar contraste de cores (mínimo 4.5:1)
- [ ] Verificar alt text em todas as imagens
- [ ] Verificar foco visível em links e botões
- [ ] Verificar hierarquia de headings (H1, H2, H3)
- [ ] Testar navegação por teclado
- [ ] Verificar aria-label em ícones de redes sociais

### Responsividade
- [ ] Testar em mobile (< 768px)
- [ ] Testar em tablet (768px – 1023px)
- [ ] Testar em desktop (≥ 1024px)
- [ ] Verificar menu hambúrguer no mobile
- [ ] Verificar grids responsivos
- [ ] Verificar botões com largura total no mobile

## ✅ Deploy

### GitHub Pages
- [ ] Instalar gh-pages: `npm install gh-pages --save-dev`
- [ ] Configurar package.json (homepage + scripts)
- [ ] Configurar next.config.ts (output: 'export')
- [ ] Executar deploy: `npm run deploy`
- [ ] Configurar GitHub Pages no repositório
- [ ] Verificar se o site está acessível

### Pós-Deploy
- [ ] Testar todos os links no site publicado
- [ ] Verificar SSL (HTTPS)
- [ ] Submeter sitemap ao Google Search Console
- [ ] Configurar Google Analytics (opcional)
- [ ] Compartilhar link nas redes sociais

## 📊 Métricas de Sucesso

Após o lançamento, acompanhar:
- [ ] Número de contatos via WhatsApp
- [ ] Número de e-mails recebidos
- [ ] Cliques nos links dos projetos
- [ ] Tempo médio na página
- [ ] Taxa de rejeição

---

**Data de Lançamento:** ___/___/_______

**Responsável:** Sandro Roldan

**Observações:**
_________________________________
_________________________________
_________________________________
