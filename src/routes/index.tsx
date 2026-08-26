import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Factory,
  Code2,
  Database,
  GraduationCap,
  Briefcase,
  Sparkles,
  Cpu,
  MessageCircle,
  Mail,
  Instagram,
  Linkedin,
  Github,
  BarChart3,
  Boxes,
  Wrench,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Giordana Stumm | Back-end Java & Programação de Produção" },
      {
        name: "description",
        content:
          "Desenvolvedora back-end Java e analista de Programação de Produção na Nestlé Carazinho/RS. APIs REST, bancos de dados, dados e indústria.",
      },
      { property: "og:title", content: "Giordana Stumm | Back-end Java & Produção" },
      {
        property: "og:description",
        content:
          "Tecnologia aplicada à indústria: back-end Java, APIs REST, dados e Programação de Produção na Nestlé Carazinho/RS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "servicos", label: "Serviços" },
  { id: "habilidades", label: "Habilidades" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
];

const WHATSAPP = "https://wa.me/5554999527071";

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

function Chip({ children, tone = "primary" }: { children: React.ReactNode; tone?: "primary" | "industry" }) {
  const cls =
    tone === "industry"
      ? "border-industry/40 bg-industry/10 text-industry"
      : "border-primary/30 bg-primary/10 text-primary";
  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${cls}`}>{children}</span>
  );
}

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-lg font-bold">
            Giordana<span className="text-primary">.dev</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open ? (
          <nav className="grid gap-1 border-t border-border/60 px-5 py-3 md:hidden">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      {/* HERO */}
      <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              <Chip tone="industry">Nestlé · Carazinho/RS</Chip>
              <Chip>Back-end Java</Chip>
            </div>
            <p className="eyebrow">Olá, eu sou</p>
            <h1 className="mt-3 text-5xl font-bold leading-[1.05] sm:text-6xl">
              Giordana <span className="text-gradient">Stumm</span>
            </h1>
            <p className="mt-5 font-display text-lg text-foreground/90 sm:text-xl">
              Programação de Produção na Nestlé · Desenvolvedora Back-end Java
            </p>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Atuo no setor de Programação de Produção da Nestlé em Carazinho/RS, planejando e
              organizando a produção com base em dados, indicadores e regras de negócio reais da
              indústria. Como Técnica em TI e desenvolvedora back-end, uno esses dois mundos:
              transformo processos produtivos em sistemas, automações e análises com Java, Python,
              SQL e APIs REST.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#projetos">Ver Projetos</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contato">Entrar em Contato</a>
              </Button>
            </div>
          </div>

          <div className="surface-card rounded-2xl p-6">
            <p className="eyebrow">Onde eu atuo hoje</p>
            <div className="mt-5 grid gap-4">
              {[
                {
                  icon: Factory,
                  title: "Indústria",
                  text: "Programação de produção, planejamento e rotinas de fábrica na Nestlé Carazinho/RS.",
                },
                {
                  icon: Code2,
                  title: "Software",
                  text: "Back-end em Java e Python, APIs REST e arquitetura em camadas.",
                },
                {
                  icon: BarChart3,
                  title: "Dados",
                  text: "SQL, indicadores de produção, análise de dados e Machine Learning.",
                },
              ].map((i) => (
                <div key={i.title} className="flex gap-4 rounded-xl bg-secondary/50 p-4">
                  <i.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-sm font-semibold">{i.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{i.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="Conheça"
          title="Sobre Mim"
          subtitle="Tecnologia com pé na realidade da produção: entendo o processo por dentro e sei como transformá-lo em sistema."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="surface-card rounded-2xl p-6">
            <p className="text-muted-foreground">
              Trabalho na Nestlé de Carazinho/RS, no setor de Programação de Produção, onde lido
              diariamente com planejamento, sequenciamento, controle de materiais e indicadores.
              Essa vivência industrial me deu algo que dificilmente se aprende só em código:
              entender de verdade a regra de negócio antes de escrevê-la.
            </p>
            <p className="mt-4 text-muted-foreground">
              Sou Técnica em Informática e desenvolvedora com foco em back-end. Desenvolvo com
              Java, Python, APIs REST, bancos de dados relacionais e Programação Orientada a
              Objetos, com base em Front-end (HTML, CSS e JavaScript) para integrar as camadas da
              aplicação. Também estudo Ciência de Dados, com Machine Learning e análise de dados
              aplicados a cenários produtivos.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Factory,
                title: "Atuação Atual",
                text: "Programação de Produção na Nestlé Carazinho/RS: planejamento, sequenciamento e acompanhamento de produção.",
              },
              {
                icon: GraduationCap,
                title: "Formação",
                text: "Técnica em Informática (Senac RS) e formação em Ciência de Dados com ênfase em Machine Learning.",
              },
              {
                icon: Briefcase,
                title: "Empreendedorismo",
                text: "Proprietária da Stack Solutions, com soluções em software, web e manutenção de computadores.",
              },
              {
                icon: Sparkles,
                title: "Diferencial",
                text: "União entre indústria e TI: dados de produção, automação de rotinas e visão analítica de processos.",
              },
            ].map((c) => (
              <div key={c.title} className="surface-card rounded-2xl p-5">
                <c.icon className="size-5 text-primary" />
                <h3 className="mt-4 font-display text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="Trajetória"
          title="Experiência Profissional"
          subtitle="Indústria e desenvolvimento caminhando juntos."
        />
        <div className="grid gap-6">
          <article className="surface-card rounded-2xl p-6">
            <div className="flex flex-wrap items-center gap-3">
              <Chip tone="industry">Atual</Chip>
              <span className="text-xs text-muted-foreground">Carazinho/RS</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">
              Programação de Produção — Nestlé
            </h3>
            <p className="mt-3 text-muted-foreground">
              Atuação no setor de Programação de Produção, apoiando o planejamento e a execução do
              plano produtivo da unidade.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <li>• Programação e sequenciamento de ordens de produção</li>
              <li>• Acompanhamento de demanda, materiais e capacidade das linhas</li>
              <li>• Controle e análise de indicadores de produção com planilhas e SQL</li>
              <li>• Comunicação direta com produção, qualidade e logística</li>
              <li>• Automação de rotinas e relatórios para ganho de tempo do time</li>
            </ul>
          </article>

          <article className="surface-card rounded-2xl p-6">
            <div className="flex flex-wrap items-center gap-3">
              <Chip>Paralelo</Chip>
            </div>
            <h3 className="mt-4 text-xl font-semibold">
              Proprietária e Desenvolvedora — Stack Solutions
            </h3>
            <p className="mt-3 text-muted-foreground">
              Fundadora e desenvolvedora principal, atuando em sistemas, aplicações web e soluções
              técnicas para pequenos negócios.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <li>• Desenvolvimento back-end e web com Java, Python, SQL e APIs REST</li>
              <li>• Sistemas orientados a regras de negócio e organização de código</li>
              <li>• Integração e modelagem de bancos de dados</li>
              <li>• Montagem e manutenção de hardware para clientes</li>
            </ul>
          </article>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="Meu Trabalho"
          title="Projetos"
          subtitle="Trabalhos de desenvolvimento e aplicações de tecnologia a processos reais."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              emoji: "🏭",
              title: "Painel de Indicadores de Produção",
              desc: "Estudo aplicado à rotina de programação de produção: consolidação de dados, cálculo de indicadores e visualização de desempenho das linhas.",
              tags: ["Python", "SQL", "Dados"],
            },
            {
              emoji: "📦",
              title: "Automação de Rotinas de Planejamento",
              desc: "Scripts para tratar planilhas, cruzar demanda e materiais e gerar relatórios de apoio à programação da produção.",
              tags: ["Python", "Excel", "Automação"],
            },
            {
              emoji: "🚀",
              title: "Site Stack Solutions",
              desc: "Website institucional moderno e responsivo, apresentando serviços, projetos e canais de contato.",
              tags: ["React", "TypeScript", "Tailwind"],
            },
            {
              emoji: "🎸",
              title: "Pedaleira Digital para Guitarras",
              desc: "Sistema em Python com processamento de áudio em tempo real, efeitos sonoros e lógica de negócio organizada.",
              tags: ["Python", "Qt Designer", "Áudio"],
            },
            {
              emoji: "🪐",
              title: "Planetário Interativo",
              desc: "Aplicação em Java com lógica matemática, simulação de sistemas e visualização interativa.",
              tags: ["Java", "POO", "Simulação"],
            },
            {
              emoji: "🛒",
              title: "E-commerce de Guitarras",
              desc: "Aplicação web com integração entre front-end e back-end, banco de dados e regras de negócio.",
              tags: ["HTML", "CSS", "JavaScript"],
            },
            {
              emoji: "💎",
              title: "Landing Page – Loja de Joias",
              desc: "Design elegante e responsivo, seção de benefícios e apresentação de produtos. Pacote Premium da Stack Solutions.",
              tags: ["HTML", "CSS", "JavaScript"],
            },
            {
              emoji: "👗",
              title: "Landing Page – Loja de Roupas",
              desc: "Foco em conversão e experiência do usuário, com destaques de coleção e área de contato. Pacote Profissional.",
              tags: ["HTML", "CSS", "JavaScript"],
            },
            {
              emoji: "🌱",
              title: "Site de Máquinas Agrícolas",
              desc: "Website institucional responsivo com foco em apresentação comercial e estrutura organizada.",
              tags: ["Web", "Database", "Admin"],
            },
          ].map((p) => (
            <article
              key={p.title}
              className="surface-card group rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="text-3xl">{p.emoji}</div>
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICOS */}
      <section id="servicos" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="Stack Solutions"
          title="Serviços"
          subtitle="Soluções em desenvolvimento de software, dados e suporte técnico."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            {
              icon: Database,
              title: "Desenvolvimento de Sistemas",
              items: ["Lógica de Negócio", "Banco de Dados", "APIs REST", "Código Organizado"],
              text: "Criação de sistemas e APIs com foco em organização, desempenho e escalabilidade.",
            },
            {
              icon: Boxes,
              title: "Automação & Dados",
              items: ["Planilhas", "Relatórios", "Indicadores", "Python + SQL"],
              text: "Automação de rotinas operacionais e relatórios para times de produção e planejamento.",
            },
            {
              icon: Code2,
              title: "Apps & Landing Pages",
              items: ["UX/UI", "Mobile First", "Performance", "Integração"],
              text: "Aplicações web e landing pages funcionais, rápidas e otimizadas.",
            },
            {
              icon: Wrench,
              title: "Manutenção de Computadores",
              items: ["Formatação", "Upgrade", "Limpeza", "Montagem"],
              text: "Serviços completos de hardware para o seu equipamento.",
            },
          ].map((s) => (
            <div key={s.title} className="surface-card rounded-2xl p-6">
              <s.icon className="size-5 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <Chip key={i}>{i}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          WhatsApp:{" "}
          <a className="text-primary hover:underline" href={WHATSAPP}>
            +55 54 99952-7071
          </a>
        </p>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="Tech Stack"
          title="Habilidades"
          subtitle="Tecnologias, ferramentas e competências que uso no dia a dia."
        />
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {[
            "Java",
            "Python",
            "SQL / MySQL",
            "Oracle PL/SQL",
            "APIs REST",
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "MongoDB",
            "Git",
            "Flask",
            "Qt Designer",
            "Excel Avançado",
          ].map((s) => (
            <div
              key={s}
              className="surface-card rounded-xl px-4 py-3 text-center text-sm font-medium"
            >
              {s}
            </div>
          ))}
        </div>

        <h3 className="mt-12 font-display text-lg font-semibold">Outras Competências</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Programação de Produção",
            "Planejamento & Sequenciamento",
            "Indicadores e KPIs",
            "Programação Orientada a Objetos",
            "Arquitetura em camadas",
            "Machine Learning",
            "Análise de Dados",
            "Montagem e Manutenção de Hardware",
            "Inglês Nível B2",
          ].map((s) => (
            <Chip key={s} tone="industry">
              {s}
            </Chip>
          ))}
        </div>
      </section>

      {/* FORMACAO */}
      <section id="formacao" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle eyebrow="Estudos" title="Formação & Certificações" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4">
            {[
              {
                title: "Técnico em Informática – Senac RS",
                period: "Mar 2024 – Dez 2025",
                text: "Desenvolvimento de software com projetos back-end e front-end: Python, MySQL, HTML, CSS e JavaScript.",
              },
              {
                title: "Ciência de Dados – Udemy",
                period: "Set 2025 – Atual",
                text: "Análise de dados e Machine Learning aplicados a problemas reais.",
              },
              {
                title: "Inglês – Básico ao Avançado – Senac RS",
                period: "Mar 2021 – Dez 2025",
                text: "Quatro anos de formação em inglês, nível B2.",
              },
              {
                title: "Ensino Médio – E.E.E.M Cônego João Batista Sorg",
                period: "Jan 2024 – Dez 2026",
                text: "",
              },
            ].map((f) => (
              <div key={f.title} className="surface-card rounded-2xl p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-semibold">{f.title}</h3>
                  <span className="text-xs text-muted-foreground">{f.period}</span>
                </div>
                {f.text ? (
                  <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                ) : null}
              </div>
            ))}
          </div>
          <div className="surface-card rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <Cpu className="size-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">Cursos & Certificações</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["Excel – Básico ao Avançado", "Senac RS"],
                ["Programação em Java", "Hora de Codar"],
                ["Conceitos Básicos de Redes", "Cisco"],
                ["Banco de Dados: Oracle PL/SQL", "IFSUL"],
                ["Estruturas de Dados com Java", "Udemy"],
                ["Introdução à Cibersegurança", "Cisco"],
                ["Algoritmos", "Curso em Vídeo"],
                ["Java Básico", "Curso em Vídeo"],
                ["Intro. Ciência de Dados", "Open Academy"],
              ].map(([c, org]) => (
                <div key={c} className="rounded-xl bg-secondary/50 p-3">
                  <p className="text-sm font-medium">{c}</p>
                  <p className="text-xs text-muted-foreground">{org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="Vamos conversar"
          title="Entre em Contato"
          subtitle="Vamos transformar ideias e processos em soluções de software."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: MessageCircle, label: "WhatsApp", value: "+55 54 99952-7071", href: WHATSAPP },
            {
              icon: Mail,
              label: "Email",
              value: "giordanastumm7@gmail.com",
              href: "mailto:giordanastumm7@gmail.com",
            },
            {
              icon: Instagram,
              label: "Instagram Profissional",
              value: "@stack__solutions",
              href: "https://instagram.com/stack__solutions",
            },
            {
              icon: Instagram,
              label: "Instagram Pessoal",
              value: "@giordana__stumm",
              href: "https://instagram.com/giordana__stumm",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "Giordana Stumm",
              href: "https://www.linkedin.com/in/giordana-stumm",
            },
            { icon: Github, label: "GitHub", value: "@gio0000", href: "https://github.com/gio0000" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <c.icon className="size-5 text-primary" />
              <div>
                <p className="font-display text-sm font-semibold">{c.label}</p>
                <p className="text-sm text-muted-foreground">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8">
          <Button variant="hero" size="lg" asChild>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              Fale comigo no WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-display text-base font-semibold">Stack Solutions</p>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Soluções em desenvolvimento de software, sistemas web, dados e manutenção de
            computadores.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            Desenvolvido por Giordana.dev · © 2026 Stack Solutions. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
