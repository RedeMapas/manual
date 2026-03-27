# Levantamento do Projeto — Manual Rede das Artes

> **Data do levantamento:** 16 de março de 2026  
> **Repositório:** `redemapas/manual`  
> **URL de produção:** `https://manual.mapas.tec.br`

---

## 1. Visão Geral do Projeto

O **Manual da Rede das Artes** é um site de documentação interativo construído com **Next.js 16** e o framework de docs **Fumadocs**, voltado para dois públicos principais: **proponentes/usuários** da plataforma Rede das Artes (Mapas Culturais) e **gestores** institucionais (Funarte/MinC).

### Stack tecnológica

| Tecnologia | Versão | Função |
|---|---|---|
| Next.js | ^16.1.6 | Framework SSR/SSG |
| React | ^19.2.4 | UI |
| Fumadocs Core | ^16.6.16 | Motor de docs MDX |
| Fumadocs UI | ^16.6.16 | Componentes e temas |
| Fumadocs MDX | ^14.2.9 | Processamento MDX |
| Tailwind CSS | ^4.1.3 | Estilização |
| Mermaid | ^11.6.0 | Diagramas em MDX |
| next-themes | ^0.4.6 | Suporte dark/light mode |
| TypeScript | ^5.8.3 | Tipagem estática |

### Infraestrutura

| Camada | Tecnologia | Detalhes |
|---|---|---|
| Containerização | Docker (multi-stage) | Node 20 Alpine, output standalone |
| Orquestração | Kubernetes + Helm | Chart `helm/manual`, namespace `default` |
| Roteamento | Traefik | Ingress class `traefik`, entrypoints web/websecure |
| Registro de imagem | GitHub Container Registry | `ghcr.io/redemapas/manual` |
| CI/CD local | Skaffold v4beta13 | Build Docker + deploy Helm automatizado |
| Servidor de dev | — | `mapas.tec.br`, host final `manual.mapas.tec.br` |

---

## 2. Estrutura de Arquivos — Raiz

```
/
├── Dockerfile                  ← Build multi-stage (deps → builder → runner)
├── mdx-components.tsx          ← Registro global de componentes MDX
├── next-env.d.ts               ← Tipos automáticos do Next.js
├── next.config.mjs             ← Config Next.js + createMDX()
├── package.json                ← Dependências e scripts
├── postcss.config.mjs          ← Config PostCSS (Tailwind)
├── README.md                   ← README genérico (scaffold Fumadocs)
├── SECURITY_FIX_CVE-2025-55182.md  ← Registro de correção de segurança
├── skaffold.yaml               ← Config deploy local (Skaffold + Helm)
├── source.config.ts            ← Config da coleção de docs (Fumadocs)
├── tsconfig.json               ← Config TypeScript
├── app/                        ← Rotas e layouts Next.js App Router
├── components/                 ← Componentes React reutilizáveis
├── content/                    ← Conteúdo MDX das docs
├── helm/                       ← Helm chart para deploy Kubernetes
├── lib/                        ← Utilitários (source loader)
└── public/                     ← Assets estáticos
```

---

## 3. Conteúdo — `app/`

| Arquivo | Função |
|---|---|
| `app/layout.tsx` | Layout raiz: fonte Inter, `RootProvider` (Fumadocs), importa `global.css` |
| `app/global.css` | Tailwind + tema Ocean (Fumadocs UI), dark/light mode |
| `app/layout.config.tsx` | Config compartilhada: logo SVG claro/escuro "Rede das Artes", título, link GitHub |
| `app/(home)/layout.tsx` | Layout da home: `HomeLayout`; hack `useEffect` para traduzir "Search" → "Buscar" |
| `app/(home)/page.tsx` | Página inicial: compõe `HeroHome` + `FeaturedHome` + `Footer` |
| `app/docs/layout.tsx` | Layout de docs: `DocsLayout` com `source.pageTree` |
| `app/docs/[[...slug]]/page.tsx` | Página dinâmica de doc: renderiza MDX, botão "Edit on GitHub", metadados com título |
| `app/api/search/route.ts` | API de busca full-text (Fumadocs `createFromSource`) |

---

## 4. Componentes — `components/`

### `HeroHome.tsx`
Seção hero da página inicial:
- Fundo com imagem `/img/bg-home-hero.png`
- Título **"Rede das Artes"** e subtítulo descritivo da plataforma
- Botão "Introdução" → `/docs/usuarios/intro`
- Layout responsivo (mobile/desktop)

### `FeaturedHome.tsx`
Cards de papéis na página inicial:
- **Proponentes** → `/docs/usuarios/intro`
- **Gestores** → `/docs/gestores/intro`
- Cada card: imagem SVG, título, descrição e botão "Saiba mais"

### `Footer.tsx`
Rodapé institucional:
- Créditos: Funarte, Laboratório do Futuro/UFC, 2025
- Logo `SNC+PNAB+MinC+Gov.png`

### `components/mdx/mermaid.tsx`
Componente Mermaid para diagramas em MDX:
- Client component com integração `next-themes` (dark/light automático)
- Renderiza SVG via `mermaid.render()` com `securityLevel: 'loose'`

### `mdx-components.tsx`
Registro global de componentes disponíveis nos arquivos MDX:
- `Mermaid` — diagramas
- `ImageZoom` — zoom em imagens
- Links relativos entre páginas

### `lib/source.ts`
Loader de fonte do Fumadocs com `baseUrl: '/docs'`, alimentado pela coleção gerada pelo `@/.source`.

---

## 5. Conteúdo — Documentação MDX

### 5.1 Seção Usuários (`content/docs/usuarios/`)

**10 arquivos presentes.** Ordem de navegação definida em `meta.json`:  
`intro → home → agents → opportunities → projects → spaces → events → --- → duvidas-frequentes → referencias`

| Arquivo | Título | O que contempla |
|---|---|---|
| `welcome.mdx` | Bem-vindo | Apresentação geral do manual, estrutura das seções, como usar, convite para contribuição |
| `intro.mdx` | Introdução | O que é a Rede das Artes; o que é o Mapas (software livre); objetivos e benefícios; quem pode usar; histórico desde 2004 (Mapsys → Hacklab → versões 7.5/7.6/7.7); como usar o tutorial |
| `home.mdx` | Home | Navegação pela página inicial; abas (Agenda, Oportunidades, Agentes, Espaços); criar conta (passo a passo); editar perfil; Painel de Controle ("Minha Conta") |
| `agents.mdx` | Agentes | Tipos de perfil (Individual e Coletivo); visualizações (lista, mapa interativo, tabela); criar portfólio; editar perfil |
| `opportunities.mdx` | Oportunidades | Acessar oportunidades; filtros; fase recursal; inscrição (6 passos); acompanhar inscrições; resultados |
| `projects.mdx` | Iniciativas | Cadastro e gestão de iniciativas artísticas (festivais, formações, pesquisas, projetos comunitários); vinculação com agentes, espaços e eventos |
| `spaces.mdx` | Espaços | Cadastro e mapeamento de equipamentos culturais (teatros, museus, quilombos, terreiros); endereço, acessibilidade, fotos, capacidade |
| `events.mdx` | Eventos | Definição; circuitos artísticos; ocorrências; criar evento/circuito (6 passos); publicação |
| `duvidas-frequentes.mdx` | Dúvidas Frequentes | Onde obter ajuda; como contribuir com a comunidade; convite para módulo de gestores |
| `referencias.mdx` | Referências | Repos GitHub do Mapas; guias de instalação; API; tutoriais em vídeo; instâncias nacionais (SP, CE, BH, MinC) e internacionais (CO, UY, EC); legislação cultural |

---

### 5.2 Seção Gestores (`content/docs/gestores/`)

**5 arquivos presentes, 7 pendentes** listados no `meta.json` mas ainda não criados.

**Presentes:**

| Arquivo | Título | O que contempla |
|---|---|---|
| `intro.mdx` | Introdução | Apresentação da Funarte e do tutorial; funcionalidades do módulo gestor; link para a plataforma |
| `painel-controle.mdx` | Painel de Controle | Dashboard geral; criar oportunidade (pop-up); tipos de oportunidade; áreas de interesse; entidade vinculada; filtros avançados; notificações |
| `gerenciar-oportunidades.mdx` | Gerenciar Oportunidades | Gestão após criação; organização em 3 níveis (Abas → Seções → Campos); 4 abas principais (Informações, Config Fases, Inscrições/Resultados, Relatórios); ações rápidas (Arquivar, Excluir, Duplicar, Salvar Modelo, Salvar e Publicar) |
| `duvidas-frequentes.mdx` | Dúvidas Frequentes | Canais de ajuda (FAQ MinC, curso Rede das Artes em breve); como reportar problemas; como contribuir |
| `referencias.mdx` | Referências | Rede Mapas; Tutorial Mapa Cultural Ceará; IberCultura Viva; artigo UFG; SNIIC; Jornada do Usuário MinC; Relatório Acessibilidade UFPR; Portal Mapas Gov.br |

**Pendentes no `meta.json` (arquivos MDX não criados):**

| Arquivo esperado | Seção provável |
|---|---|
| `gerenciar-agentes.mdx` | Como gerir agentes na plataforma |
| `gerenciar-projetos.mdx` | Como gerir iniciativas/projetos |
| `gerenciar-espacos.mdx` | Como gerir espaços culturais |
| `gerenciar-eventos.mdx` | Como gerir eventos |
| `relatorios-metricas.mdx` | Relatórios e métricas |
| `configuracoes-plataforma.mdx` | Configurações gerais da plataforma |

---

## 6. Imagens presentes

### `content/docs/usuarios/img/`

| Pasta | Conteúdo |
|---|---|
| `01_intro/01_05/` | `01_05_eventos.jpg` |
| `02_home/02_01/` | Home, agenda, agentes, espaços, eventos, oportunidades, projetos, ícones (9 imgs) |
| `02_home/02_02/` | Fluxo de criação de conta: entrar, procurar conta, criar conta (5 imgs) |
| `02_home/02_04/` | Painel de controle, minha conta, preferências, privacidade (7 imgs) |
| `02_home/02_05/` | Busca (`02_05_busca.jpg`) |
| `03_opportunities/` | Ícone de oportunidades |
| `03_opportunities/03_01/` | Filtros, fases, listas de oportunidades (3 imgs) |
| `03_opportunities/03_02/` | Acessar, acompanhar, enviar formulário, inscrição (4 imgs) |
| `04_agents/` | Ícone de agentes |
| `04_agents/04_02/` | Visualizações lista, mapa, tabela, pin (6 imgs) |
| `04_agents/04_03/` | Editar agente, meu perfil, minha conta (4 imgs) |
| `05_events/` | Ícone + 9 imgs (criar evento, completar informações, redes sociais, acessibilidade, etc.) |
| `06_spaces/` | Ícone de espaços |
| `06_spaces/06_01/` | Tela espaço, criar, editar, endereço, acessibilidade, capacidade, gerenciamento (12 imgs) |
| `07_projects/` | Iniciativas lista, ícone, projetos, projetos por lista (4 imgs) |

### `content/docs/gestores/img/`

| Pasta | Conteúdo |
|---|---|
| `01_intro/` | `01_intro_icon.jpg` |
| `02_painel/` | Ícone + 8 imgs (dashboard, criar oportunidade, áreas de interesse, entidade vinculada, etc.) |
| `03_oportunidades/` | Ícone + **~87 imagens** distribuídas em 5 subpastas (`03_01` a `03_05`), cobrindo: rascunhos, abas, blocos, rodapé, período de inscrição, formulários, fases, avaliações, categorias, faixas, plano de metas, comissões, critérios, cotas, bônus, políticas afirmativas, publicação de resultados, exportar planilha, avaliação técnica, relatórios |

---

## 7. API Documentation pública (`public/api-docs/`)

Instalação estática do **apiDoc** servida em `/api-docs/`:

- `apidoc.json` — definição dos endpoints da API REST
- `header.md` / `footer.md` — conteúdo editorial da doc
- `index.html` — página principal da documentação
- `assets/` — CSS e JS compilados (Bootstrap, Prism)
- `template/` — template do apiDoc com suporte a 15 idiomas (incluindo `pt_br.js`)
- `vendor/` — jQuery, Bootstrap, Handlebars, Lodash, etc.

---

## 8. Segurança

### CVE-2025-55182 (corrigida em 23/02/2026)
- **Vulnerabilidade:** RCE em React Server Components
- **Versões afetadas:** react/react-dom 19.0–19.2.0
- **Correção aplicada:** Atualização para react/react-dom `19.2.4`
- **Demais correções:** js-yaml, lodash-es, mdast-util-to-hast, next.js via `npm audit fix`
- **Status atual:** 0 vulnerabilidades conhecidas
- **Ação recomendada:** Verificar logs do servidor entre 12/02/2026 e 23/02/2026

---

## 9. Resumo de cobertura atual

### O que está completo ✅

- [x] Setup completo do projeto (Next.js + Fumadocs + Tailwind + TypeScript)
- [x] Infraestrutura de deploy (Docker, Kubernetes/Helm, Skaffold)
- [x] Página inicial com hero, cards de papéis e rodapé institucional
- [x] Dark/light mode com tema Ocean
- [x] Busca full-text integrada
- [x] Suporte a diagramas Mermaid nos docs
- [x] Zoom em imagens nos docs
- [x] Botão "Edit on GitHub" nas páginas de doc
- [x] Documentação completa para **Usuários** (10 páginas)
- [x] Documentação parcial para **Gestores** (5 de 11 páginas previstas)
- [x] Documentação de API REST (apiDoc estático)
- [x] Registro de vulnerabilidades e correções aplicadas

### O que está pendente ⏳

- [ ] `gerenciar-agentes.mdx` — Gestores: gestão de agentes
- [ ] `gerenciar-projetos.mdx` — Gestores: gestão de projetos/iniciativas
- [ ] `gerenciar-espacos.mdx` — Gestores: gestão de espaços culturais
- [ ] `gerenciar-eventos.mdx` — Gestores: gestão de eventos
- [ ] `relatorios-metricas.mdx` — Gestores: relatórios e métricas
- [ ] `configuracoes-plataforma.mdx` — Gestores: configurações da plataforma
- [ ] README.md com conteúdo real do projeto (atualmente é o README genérico do scaffold)
- [ ] Imagens para as seções pendentes de gestores (pasta `03_oportunidades/` já tem ~87 imgs, mas outras seções ainda não têm pasta)
