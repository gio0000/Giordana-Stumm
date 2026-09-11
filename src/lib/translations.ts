export type Language = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      sobre: "Sobre",
      experiencia: "Experiência",
      projetos: "Projetos",
      servicos: "Serviços",
      habilidades: "Habilidades",
      formacao: "Formação",
      contato: "Contato",
    },
    langToggle: {
      label: "Mudar idioma",
      pt: "PT",
      en: "EN",
    },
    hero: {
      tagNestle: "Nestlé · Carazinho/RS",
      tagBackend: "Back-end Java",
      eyebrow: "Olá, eu sou",
      name: "Giordana Stumm",
      role: "Programação de Produção na Nestlé · Desenvolvedora Back-end Java",
      description:
        "Atuo no setor de Programação de Produção da Nestlé em Carazinho/RS, planejando e organizando a produção com base em dados, indicadores e regras de negócio reais da indústria. Como Técnica em TI e desenvolvedora back-end, uno esses dois mundos: transformo processos produtivos em sistemas, automações e análises com Java, Python, SQL e APIs REST.",
      ctaProjects: "Ver Projetos",
      ctaContact: "Entrar em Contato",
      todayTitle: "Onde eu atuo hoje",
      todayCards: [
        {
          iconKey: "Factory",
          title: "Indústria",
          text: "Programação de produção, planejamento e rotinas de fábrica na Nestlé Carazinho/RS.",
        },
        {
          iconKey: "Code2",
          title: "Software",
          text: "Back-end em Java e Python, APIs REST e arquitetura em camadas.",
        },
        {
          iconKey: "BarChart3",
          title: "Dados",
          text: "SQL, indicadores de produção, análise de dados e Machine Learning.",
        },
      ] as const,
    },
    about: {
      eyebrow: "Conheça",
      title: "Sobre Mim",
      subtitle:
        "Tecnologia com pé na realidade da produção: entendo o processo por dentro e sei como transformá-lo em sistema.",
      text1:
        "Trabalho na Nestlé de Carazinho/RS, no setor de Programação de Produção, onde lido diariamente com planejamento, sequenciamento, controle de materiais e indicadores. Essa vivência industrial me deu algo que dificilmente se aprende só em código: entender de verdade a regra de negócio antes de escrevê-la.",
      text2:
        "Sou Técnica em Informática e desenvolvedora com foco em back-end. Desenvolvo com Java, Python, APIs REST, bancos de dados relacionais e Programação Orientada a Objetos, com base em Front-end (HTML, CSS e JavaScript) para integrar as camadas da aplicação. Também estudo Ciência de Dados, com Machine Learning e análise de dados aplicados a cenários produtivos.",
      cards: [
        {
          iconKey: "Factory",
          title: "Atuação Atual",
          text: "Programação de Produção na Nestlé Carazinho/RS: planejamento, sequenciamento e acompanhamento de produção.",
        },
        {
          iconKey: "GraduationCap",
          title: "Formação",
          text: "Técnica em Informática (Senac RS) e formação em Ciência de Dados com ênfase em Machine Learning.",
        },
        {
          iconKey: "Briefcase",
          title: "Empreendedorismo",
          text: "Proprietária da Stack Solutions, com soluções em software, web e manutenção de computadores.",
        },
        {
          iconKey: "Sparkles",
          title: "Diferencial",
          text: "União entre indústria e TI: dados de produção, automação de rotinas e visão analítica de processos.",
        },
      ] as const,
    },
    experience: {
      eyebrow: "Trajetória",
      title: "Experiência Profissional",
      subtitle: "Indústria e desenvolvimento caminhando juntos.",
      currentTag: "Atual",
      sideTag: "Paralelo",
      nestle: {
        title: "Programação de Produção — Nestlé",
        intro:
          "Atuação no setor de Programação de Produção, apoiando o planejamento e a execução do plano produtivo da unidade.",
        items: [
          "Programação e sequenciamento de ordens de produção",
          "Acompanhamento de demanda, materiais e capacidade das linhas",
          "Controle e análise de indicadores de produção com planilhas e SQL",
          "Comunicação direta com produção, qualidade e logística",
          "Automação de rotinas e relatórios para ganho de tempo do time",
        ],
      },
      stack: {
        title: "Proprietária e Desenvolvedora — Stack Solutions",
        intro:
          "Fundadora e desenvolvedora principal, atuando em sistemas, aplicações web e soluções técnicas para pequenos negócios.",
        items: [
          "Desenvolvimento back-end e web com Java, Python, SQL e APIs REST",
          "Sistemas orientados a regras de negócio e organização de código",
          "Integração e modelagem de bancos de dados",
          "Montagem e manutenção de hardware para clientes",
        ],
      },
    },
    projects: {
      eyebrow: "Meu Trabalho",
      title: "Projetos",
      subtitle: "Trabalhos de desenvolvimento e aplicações de tecnologia a processos reais.",
      items: [
        {
          emoji: "🛒",
          title: "E-commerce de Guitarras",
          desc: "Aplicação web com integração entre front-end e back-end, banco de dados e regras de negócio.",
          tags: ["HTML", "CSS", "JavaScript"],
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
          emoji: "⚙️",
          title: "API REST em Spring Boot",
          desc: "API robusta construída com Java e Spring Boot, com arquitetura em camadas, persistência de dados e endpoints RESTful.",
          tags: ["Java", "Spring Boot", "API REST"],
        },
      ],
    },
    services: {
      eyebrow: "Stack Solutions",
      title: "Serviços",
      subtitle: "Soluções em desenvolvimento de software, dados e suporte técnico.",
      whatsappLabel: "WhatsApp:",
      items: [
        {
          iconKey: "Database",
          title: "Desenvolvimento de Sistemas",
          items: ["Lógica de Negócio", "Banco de Dados", "APIs REST", "Código Organizado"],
          text: "Criação de sistemas e APIs com foco em organização, desempenho e escalabilidade.",
        },
        {
          iconKey: "Boxes",
          title: "Automação & Dados",
          items: ["Planilhas", "Relatórios", "Indicadores", "Python + SQL"],
          text: "Automação de rotinas operacionais e relatórios para times de produção e planejamento.",
        },
        {
          iconKey: "Code2",
          title: "Apps & Landing Pages",
          items: ["UX/UI", "Mobile First", "Performance", "Integração"],
          text: "Aplicações web e landing pages funcionais, rápidas e otimizadas.",
        },
        {
          iconKey: "Wrench",
          title: "Manutenção de Computadores",
          items: ["Formatação", "Upgrade", "Limpeza", "Montagem"],
          text: "Serviços completos de hardware para o seu equipamento.",
        },
      ],
    },
    skills: {
      eyebrow: "Tech Stack",
      title: "Habilidades",
      subtitle: "Tecnologias, ferramentas e competências que uso no dia a dia.",
      otherTitle: "Outras Competências",
      techList: [
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
      ],
      otherList: [
        "Programação de Produção",
        "Planejamento & Sequenciamento",
        "Indicadores e KPIs",
        "Programação Orientada a Objetos",
        "Arquitetura em camadas",
        "Machine Learning",
        "Análise de Dados",
        "Montagem e Manutenção de Hardware",
        "Inglês Nível B2",
      ],
    },
    formation: {
      eyebrow: "Estudos",
      title: "Formação & Certificações",
      education: [
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
      ],
      certificationsTitle: "Cursos & Certificações",
      certifications: [
        ["Excel – Básico ao Avançado", "Senac RS"],
        ["Programação em Java", "Hora de Codar"],
        ["Conceitos Básicos de Redes", "Cisco"],
        ["Banco de Dados: Oracle PL/SQL", "IFSUL"],
        ["Estruturas de Dados com Java", "Udemy"],
        ["Introdução à Cibersegurança", "Cisco"],
        ["Algoritmos", "Curso em Vídeo"],
        ["Java Básico", "Curso em Vídeo"],
        ["Intro. Ciência de Dados", "Open Academy"],
      ] as [string, string][],
    },
    contact: {
      eyebrow: "Vamos conversar",
      title: "Entre em Contato",
      subtitle: "Vamos transformar ideias e processos em soluções de software.",
      whatsapp: "WhatsApp",
      email: "Email",
      instagramPro: "Instagram Profissional",
      instagramPersonal: "Instagram Pessoal",
      linkedin: "LinkedIn",
      github: "GitHub",
      cta: "Fale comigo no WhatsApp",
    },
    footer: {
      company: "Stack Solutions",
      description:
        "Soluções em desenvolvimento de software, sistemas web, dados e manutenção de computadores.",
      copyright: "Desenvolvido por Giordana.dev · © 2026 Stack Solutions. Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      sobre: "About",
      experiencia: "Experience",
      projetos: "Projects",
      servicos: "Services",
      habilidades: "Skills",
      formacao: "Education",
      contato: "Contact",
    },
    langToggle: {
      label: "Change language",
      pt: "PT",
      en: "EN",
    },
    hero: {
      tagNestle: "Nestlé · Carazinho/RS",
      tagBackend: "Back-end Java",
      eyebrow: "Hi, I'm",
      name: "Giordana Stumm",
      role: "Production Planning at Nestlé · Back-end Java Developer",
      description:
        "I work in Production Planning at Nestlé in Carazinho/RS, planning and organizing production based on data, indicators and real industry business rules. As an IT Technician and back-end developer, I bring these two worlds together: I turn production processes into systems, automations and analysis using Java, Python, SQL and REST APIs.",
      ctaProjects: "See Projects",
      ctaContact: "Get in Touch",
      todayTitle: "Where I work today",
      todayCards: [
        {
          iconKey: "Factory",
          title: "Industry",
          text: "Production planning, scheduling and plant routines at Nestlé Carazinho/RS.",
        },
        {
          iconKey: "Code2",
          title: "Software",
          text: "Back-end with Java and Python, REST APIs and layered architecture.",
        },
        {
          iconKey: "BarChart3",
          title: "Data",
          text: "SQL, production indicators, data analysis and Machine Learning.",
        },
      ] as const,
    },
    about: {
      eyebrow: "Meet",
      title: "About Me",
      subtitle:
        "Technology grounded in real production: I understand the process from the inside and know how to turn it into a system.",
      text1:
        "I work at Nestlé in Carazinho/RS, in the Production Planning department, dealing daily with planning, sequencing, material control and indicators. This industry experience gave me something that is hard to learn just from code: truly understanding the business rule before writing it.",
      text2:
        "I'm an IT Technician and back-end focused developer. I build with Java, Python, REST APIs, relational databases and Object-Oriented Programming, with front-end foundations (HTML, CSS and JavaScript) to connect application layers. I also study Data Science, with Machine Learning and data analysis applied to production scenarios.",
      cards: [
        {
          iconKey: "Factory",
          title: "Current Role",
          text: "Production Planning at Nestlé Carazinho/RS: planning, sequencing and production follow-up.",
        },
        {
          iconKey: "GraduationCap",
          title: "Education",
          text: "IT Technician (Senac RS) and Data Science training with emphasis on Machine Learning.",
        },
        {
          iconKey: "Briefcase",
          title: "Entrepreneurship",
          text: "Owner of Stack Solutions, providing software, web and computer maintenance solutions.",
        },
        {
          iconKey: "Sparkles",
          title: "Edge",
          text: "Bridging industry and IT: production data, routine automation and analytical process vision.",
        },
      ] as const,
    },
    experience: {
      eyebrow: "Career",
      title: "Professional Experience",
      subtitle: "Industry and development working together.",
      currentTag: "Current",
      sideTag: "Side",
      nestle: {
        title: "Production Planning — Nestlé",
        intro:
          "Working in Production Planning, supporting the planning and execution of the unit's production plan.",
        items: [
          "Production order scheduling and sequencing",
          "Monitoring demand, materials and line capacity",
          "Control and analysis of production indicators with spreadsheets and SQL",
          "Direct communication with production, quality and logistics",
          "Automation of routines and reports to save the team time",
        ],
      },
      stack: {
        title: "Owner & Developer — Stack Solutions",
        intro:
          "Founder and lead developer, working on systems, web applications and technical solutions for small businesses.",
        items: [
          "Back-end and web development with Java, Python, SQL and REST APIs",
          "Systems oriented to business rules and organized code",
          "Database integration and modeling",
          "Hardware assembly and maintenance for clients",
        ],
      },
    },
    projects: {
      eyebrow: "My Work",
      title: "Projects",
      subtitle: "Development work and technology applied to real-world processes.",
      items: [
        {
          emoji: "🛒",
          title: "Guitar E-commerce",
          desc: "Web application integrating front-end and back-end, database and business rules.",
          tags: ["HTML", "CSS", "JavaScript"],
        },
        {
          emoji: "🎸",
          title: "Digital Guitar Pedalboard",
          desc: "Python system with real-time audio processing, sound effects and organized business logic.",
          tags: ["Python", "Qt Designer", "Audio"],
        },
        {
          emoji: "🪐",
          title: "Interactive Planetarium",
          desc: "Java application with mathematical logic, system simulation and interactive visualization.",
          tags: ["Java", "OOP", "Simulation"],
        },
        {
          emoji: "⚙️",
          title: "REST API with Spring Boot",
          desc: "Robust API built with Java and Spring Boot, layered architecture, data persistence and RESTful endpoints.",
          tags: ["Java", "Spring Boot", "REST API"],
        },
      ],
    },
    services: {
      eyebrow: "Stack Solutions",
      title: "Services",
      subtitle: "Software development, data and technical support solutions.",
      whatsappLabel: "WhatsApp:",
      items: [
        {
          iconKey: "Database",
          title: "System Development",
          items: ["Business Logic", "Database", "REST APIs", "Clean Code"],
          text: "Building systems and APIs focused on organization, performance and scalability.",
        },
        {
          iconKey: "Boxes",
          title: "Automation & Data",
          items: ["Spreadsheets", "Reports", "KPIs", "Python + SQL"],
          text: "Automation of operational routines and reports for production and planning teams.",
        },
        {
          iconKey: "Code2",
          title: "Apps & Landing Pages",
          items: ["UX/UI", "Mobile First", "Performance", "Integration"],
          text: "Functional, fast and optimized web applications and landing pages.",
        },
        {
          iconKey: "Wrench",
          title: "Computer Maintenance",
          items: ["Formatting", "Upgrade", "Cleaning", "Assembly"],
          text: "Complete hardware services for your equipment.",
        },
      ],
    },
    skills: {
      eyebrow: "Tech Stack",
      title: "Skills",
      subtitle: "Technologies, tools and competencies I use daily.",
      otherTitle: "Other Competencies",
      techList: [
        "Java",
        "Python",
        "SQL / MySQL",
        "Oracle PL/SQL",
        "REST APIs",
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "MongoDB",
        "Git",
        "Flask",
        "Qt Designer",
        "Advanced Excel",
      ],
      otherList: [
        "Production Planning",
        "Planning & Sequencing",
        "KPIs & Indicators",
        "Object-Oriented Programming",
        "Layered Architecture",
        "Machine Learning",
        "Data Analysis",
        "Hardware Assembly & Maintenance",
        "English B2 Level",
      ],
    },
    formation: {
      eyebrow: "Studies",
      title: "Education & Certifications",
      education: [
        {
          title: "IT Technician – Senac RS",
          period: "Mar 2024 – Dec 2025",
          text: "Software development with back-end and front-end projects: Python, MySQL, HTML, CSS and JavaScript.",
        },
        {
          title: "Data Science – Udemy",
          period: "Sep 2025 – Present",
          text: "Data analysis and Machine Learning applied to real problems.",
        },
        {
          title: "English – Beginner to Advanced – Senac RS",
          period: "Mar 2021 – Dec 2025",
          text: "Four years of English training, B2 level.",
        },
        {
          title: "High School – E.E.E.M Cônego João Batista Sorg",
          period: "Jan 2024 – Dec 2026",
          text: "",
        },
      ],
      certificationsTitle: "Courses & Certifications",
      certifications: [
        ["Excel – Beginner to Advanced", "Senac RS"],
        ["Java Programming", "Hora de Codar"],
        ["Basic Networking Concepts", "Cisco"],
        ["Database: Oracle PL/SQL", "IFSUL"],
        ["Data Structures with Java", "Udemy"],
        ["Introduction to Cybersecurity", "Cisco"],
        ["Algorithms", "Curso em Vídeo"],
        ["Basic Java", "Curso em Vídeo"],
        ["Intro. Data Science", "Open Academy"],
      ] as [string, string][],
    },
    contact: {
      eyebrow: "Let's talk",
      title: "Get in Touch",
      subtitle: "Let's turn ideas and processes into software solutions.",
      whatsapp: "WhatsApp",
      email: "Email",
      instagramPro: "Professional Instagram",
      instagramPersonal: "Personal Instagram",
      linkedin: "LinkedIn",
      github: "GitHub",
      cta: "Message me on WhatsApp",
    },
    footer: {
      company: "Stack Solutions",
      description:
        "Solutions in software development, web systems, data and computer maintenance.",
      copyright: "Built by Giordana.dev · © 2026 Stack Solutions. All rights reserved.",
    },
  },
} satisfies Record<Language, unknown>;

export type Translations = (typeof translations)["pt"];
