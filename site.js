(() => {
  const COPY = {
    zh: {
      meta: {
        title: 'Kai炌｜AI Coding · Agent · Skills',
        description: '把 AI 想法做成能运行、能验证、能继续迭代的真实成果。',
        socialTitle: 'Kai炌｜让 AI 不只停在聊天框里',
        socialDescription: 'AI Coding、Agent 与可复用 Skills 的真实实践。'
      },
      nav: { label: '主要导航', about: '关于', writing: '写作', build: '构建', contact: '联系' },
      hero: {
        kicker: 'AI 内容 × 构建者',
        line: '让 AI 不只停在聊天框里',
        text: '把模糊想法拆成流程，连接代码、浏览器、内容和素材，做成能运行、能验证、能继续迭代的真实成果。',
        primaryAction: '阅读作品 →',
        secondaryAction: '联系我 →'
      },
      about: {
        mark: '关于 / 01',
        heading: '关于我',
        text: '我是 Kai炌，专注 AI Coding、Agent 工作流和可复用 Skills。我关注的不是工具名有多新，而是一件事能不能从想法走到交付。',
        identityLabel: '个人 IP 信息',
        imageAlt: 'Kai炌个人 IP 角色',
        reusableSkill: '可复用 Skill',
        memory: '跨项目记忆',
        videoTitle: 'AI 工具效率',
        videoText: '教程与实验'
      },
      writing: {
        mark: '写作 / 02',
        heading: '写作',
        featureTitle: '当未来可以被模拟，我们离预知还有多远',
        featureText: '把复杂 AI 工具讲成人话，只分享亲手跑通、能展示结果的省时工作流。',
        more: '阅读更多 →',
        article1: '把想法拆成 Agent 能执行的步骤',
        article2: '让个人 IP 插图变成可复用 Skill',
        article3: '用 Obsidian 给项目保留当前基线'
      },
      build: {
        mark: '构建 / 03',
        heading: '构建',
        text: '这个网站本身就是一次 Codex 工作流实验：从内容文档、参考图、角色素材到前端复刻，每一步都可检查、复用与继续迭代。',
        link: '在 GitHub 看一个已公开项目 →',
        terminalLabel: '构建流程',
        log1: '整理网站内容与页面结构',
        log2: '对标参考图，确定视觉方向',
        log3: '单独生成个人 IP 角色素材',
        log4: '用代码复刻成真实网页'
      },
      contact: {
        mark: '联系 / 04',
        heading: '聊聊吧。',
        text: '聊聊 AI、内容，或者一起把一个想法落成事情。',
        repo: 'Skill 仓库 →',
        top: '回到顶部 ↑'
      }
    },
    en: {
      meta: {
        title: 'Kai炌 | AI Coding · Agent · Skills',
        description: 'Turning AI ideas into real outcomes that run, can be verified, and keep evolving.',
        socialTitle: 'Kai炌 | Take AI beyond the chat box',
        socialDescription: 'Real-world practice in AI Coding, Agents, and reusable Skills.'
      },
      nav: { label: 'Primary navigation', about: 'ABOUT', writing: 'WRITING', build: 'BUILD', contact: 'CONTACT' },
      hero: {
        kicker: 'AI media × builder',
        line: 'Take AI beyond the chat box',
        text: 'Turn fuzzy ideas into clear workflows, connecting code, browsers, content, and assets to build real outcomes that run, can be verified, and keep evolving.',
        primaryAction: 'Explore my work →',
        secondaryAction: 'Contact me →'
      },
      about: {
        mark: 'ABOUT / 01',
        heading: 'About me',
        text: 'I’m Kai炌, focused on AI Coding, Agent workflows, and reusable Skills. I care less about how new a tool sounds and more about whether an idea can make it all the way to delivery.',
        identityLabel: 'Personal IP profile',
        imageAlt: 'Kai炌 personal IP character',
        reusableSkill: 'Reusable Skill',
        memory: 'Cross-project memory',
        videoTitle: 'AI Tool Productivity',
        videoText: 'Tutorials and experiments'
      },
      writing: {
        mark: 'WRITING / 02',
        heading: 'Writing',
        featureTitle: 'If the future can be simulated, how far are we from prediction?',
        featureText: 'I explain complex AI tools in plain language and share only time-saving workflows I’ve personally tested and can demonstrate.',
        more: 'Read more →',
        article1: 'Break ideas into steps an Agent can execute',
        article2: 'Turn personal-IP illustrations into a reusable Skill',
        article3: 'Keep a current project baseline with Obsidian'
      },
      build: {
        mark: 'BUILD / 03',
        heading: 'Build',
        text: 'This site is itself a Codex workflow experiment: from content documents and visual references to character assets and front-end reconstruction, every step can be inspected, reused, and iterated.',
        link: 'View a public project on GitHub →',
        terminalLabel: 'Build process',
        log1: 'Organize site content and information architecture',
        log2: 'Benchmark references and set the visual direction',
        log3: 'Generate standalone personal-IP character assets',
        log4: 'Rebuild the design as a real website'
      },
      contact: {
        mark: 'GET IN TOUCH / 04',
        heading: 'Let’s talk.',
        text: 'Let’s talk about AI and content—or turn an idea into something real together.',
        repo: 'Skill repo →',
        top: 'Back to top ↑'
      }
    }
  };

  const STORAGE_KEY = 'kai-site-locale';
  const toggle = document.getElementById('languageToggle');
  const status = document.getElementById('languageStatus');

  const getValue = (source, path) => path.split('.').reduce((value, key) => value?.[key], source);
  const updateMeta = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.setAttribute('content', value);
  };

  const applyLocale = (locale, announce = false) => {
    const activeLocale = locale === 'en' ? 'en' : 'zh';
    const copy = COPY[activeLocale];

    document.documentElement.lang = activeLocale === 'en' ? 'en' : 'zh-CN';
    document.documentElement.dataset.locale = activeLocale;
    document.title = copy.meta.title;

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const value = getValue(copy, node.dataset.i18n);
      if (typeof value === 'string') node.textContent = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((node) => {
      const value = getValue(copy, node.dataset.i18nAria);
      if (typeof value === 'string') node.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((node) => {
      const value = getValue(copy, node.dataset.i18nAlt);
      if (typeof value === 'string') node.setAttribute('alt', value);
    });

    updateMeta('meta[name="description"]', copy.meta.description);
    updateMeta('meta[property="og:title"]', copy.meta.socialTitle);
    updateMeta('meta[property="og:description"]', copy.meta.socialDescription);
    updateMeta('meta[name="twitter:title"]', copy.meta.socialTitle);
    updateMeta('meta[name="twitter:description"]', copy.meta.socialDescription);

    if (toggle) {
      toggle.dataset.locale = activeLocale;
      toggle.setAttribute('aria-label', activeLocale === 'zh' ? 'Switch to English' : '切换到中文');
      toggle.setAttribute('title', activeLocale === 'zh' ? 'Switch to English' : '切换到中文');
      toggle.querySelectorAll('[data-lang-option]').forEach((node) => {
        node.classList.toggle('isActive', node.dataset.langOption === activeLocale);
      });
    }

    try { localStorage.setItem(STORAGE_KEY, activeLocale); } catch (_) {}
    if (announce && status) status.textContent = activeLocale === 'zh' ? '已切换为中文' : 'Language switched to English';
  };

  let initialLocale = 'zh';
  try {
    const savedLocale = localStorage.getItem(STORAGE_KEY);
    if (savedLocale === 'en' || savedLocale === 'zh') initialLocale = savedLocale;
  } catch (_) {}

  applyLocale(initialLocale);
  toggle?.addEventListener('click', () => applyLocale(document.documentElement.dataset.locale === 'en' ? 'zh' : 'en', true));
  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY && (event.newValue === 'en' || event.newValue === 'zh')) applyLocale(event.newValue);
  });
})();
