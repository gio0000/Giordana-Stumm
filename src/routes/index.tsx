import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { translations, type Language } from "@/lib/translations";

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

const WHATSAPP = "https://wa.me/5554999527071";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  Code2,
  BarChart3,
  GraduationCap,
  Briefcase,
  Sparkles,
  Database,
  Boxes,
  Wrench,
  Cpu,
};

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

function LanguageButton({
  lang,
  toggleLang,
  t,
}: {
  lang: Language;
  toggleLang: () => void;
  t: (typeof translations)["pt"];
}) {
  return (
    <button
      onClick={toggleLang}
      aria-label={t.langToggle.label}
      className="flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
    >
      <Globe className="size-3.5" />
      <span className={lang === "pt" ? "text-primary" : ""}>{t.langToggle.pt}</span>
      <span className="text-border">/</span>
      <span className={lang === "en" ? "text-primary" : ""}>{t.langToggle.en}</span>
    </button>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Language>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("giordana-lang") as Language | null;
    if (saved === "pt" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("giordana-lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const t = translations[lang];
  const toggleLang = () => setLang((l) => (l === "pt" ? "en" : "pt"));

  const nav = [
    { id: "sobre", label: t.nav.sobre },
    { id: "experiencia", label: t.nav.experiencia },
    { id: "projetos", label: t.nav.projetos },
    { id: "servicos", label: t.nav.servicos },
    { id: "habilidades", label: t.nav.habilidades },
    { id: "formacao", label: t.nav.formacao },
    { id: "contato", label: t.nav.contato },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-lg font-bold">
            Giordana<span className="text-primary">.dev</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <LanguageButton lang={lang} toggleLang={toggleLang} t={t} />
          </nav>
          <div className="flex items-center gap-3 md:hidden">
            <LanguageButton lang={lang} toggleLang={toggleLang} t={t} />
            <button
              className="md:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <nav className="grid gap-1 border-t border-border/60 px-5 py-3 md:hidden">
            {nav.map((n) => (
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
              <Chip tone="industry">{t.hero.tagNestle}</Chip>
              <Chip>{t.hero.tagBackend}</Chip>
            </div>
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="mt-3 text-5xl font-bold leading-[1.05] sm:text-6xl">
              Giordana <span className="text-gradient">Stumm</span>
            </h1>
            <p className="mt-5 font-display text-lg text-foreground/90 sm:text-xl">{t.hero.role}</p>
            <p className="mt-5 max-w-xl text-muted-foreground">{t.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#projetos">{t.hero.ctaProjects}</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contato">{t.hero.ctaContact}</a>
              </Button>
            </div>
          </div>

          <div className="surface-card rounded-2xl p-6">
            <p className="eyebrow">{t.hero.todayTitle}</p>
            <div className="mt-5 grid gap-4">
              {t.hero.todayCards.map((i) => {
                const Icon = ICONS[i.iconKey];
                return (
                  <div key={i.title} className="flex gap-4 rounded-xl bg-secondary/50 p-4">
                    <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-display text-sm font-semibold">{i.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{i.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="surface-card rounded-2xl p-6">
            <p className="text-muted-foreground">{t.about.text1}</p>
            <p className="mt-4 text-muted-foreground">{t.about.text2}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.about.cards.map((c) => {
              const Icon = ICONS[c.iconKey];
              return (
                <div key={c.title} className="surface-card rounded-2xl p-5">
                  <Icon className="size-5 text-primary" />
                  <h3 className="mt-4 font-display text-base font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />
        <div className="grid gap-6">
          <article className="surface-card rounded-2xl p-6">
            <div className="flex flex-wrap items-center gap-3">
              <Chip tone="industry">{t.experience.currentTag}</Chip>
              <span className="text-xs text-muted-foreground">Carazinho/RS</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{t.experience.nestle.title}</h3>
            <p className="mt-3 text-muted-foreground">{t.experience.nestle.intro}</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {t.experience.nestle.items.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="surface-card rounded-2xl p-6">
            <div className="flex flex-wrap items-center gap-3">
              <Chip>{t.experience.sideTag}</Chip>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{t.experience.stack.title}</h3>
            <p className="mt-3 text-muted-foreground">{t.experience.stack.intro}</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {t.experience.stack.items.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((p) => (
            <article
              key={p.title}
              className="surface-card group rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="text-3xl">{p.emoji}</div>
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICOS */}
      <section id="servicos" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {t.services.items.map((s) => {
            const Icon = ICONS[s.iconKey];
            return (
              <div key={s.title} className="surface-card rounded-2xl p-6">
                <Icon className="size-5 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <Chip key={i}>{i}</Chip>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          {t.services.whatsappLabel}{" "}
          <a className="text-primary hover:underline" href={WHATSAPP}>
            +55 54 99952-7071
          </a>
        </p>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {t.skills.techList.map((s) => (
            <div
              key={s}
              className="surface-card rounded-xl px-4 py-3 text-center text-sm font-medium"
            >
              {s}
            </div>
          ))}
        </div>

        <h3 className="mt-12 font-display text-lg font-semibold">{t.skills.otherTitle}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {t.skills.otherList.map((s) => (
            <Chip key={s} tone="industry">
              {s}
            </Chip>
          ))}
        </div>
      </section>

      {/* FORMACAO */}
      <section id="formacao" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle eyebrow={t.formation.eyebrow} title={t.formation.title} />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4">
            {t.formation.education.map((f) => (
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
              <h3 className="font-display text-lg font-semibold">{t.formation.certificationsTitle}</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {t.formation.certifications.map(([c, org]) => (
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
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: MessageCircle,
              label: t.contact.whatsapp,
              value: "+55 54 99952-7071",
              href: WHATSAPP,
            },
            {
              icon: Mail,
              label: t.contact.email,
              value: "giordanastumm7@gmail.com",
              href: "mailto:giordanastumm7@gmail.com",
            },
            {
              icon: Instagram,
              label: t.contact.instagramPro,
              value: "@stack__solutions",
              href: "https://instagram.com/stack__solutions",
            },
            {
              icon: Instagram,
              label: t.contact.instagramPersonal,
              value: "@giordana__stumm",
              href: "https://instagram.com/giordana__stumm",
            },
            {
              icon: Linkedin,
              label: t.contact.linkedin,
              value: "Giordana Stumm",
              href: "https://www.linkedin.com/in/giordana-stumm",
            },
            {
              icon: Github,
              label: t.contact.github,
              value: "@gio0000",
              href: "https://github.com/gio0000",
            },
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
              {t.contact.cta}
            </a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-display text-base font-semibold">{t.footer.company}</p>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">{t.footer.description}</p>
          <p className="mt-6 text-xs text-muted-foreground">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
