const STORAGE_KEY = "facilita-he-data-v1";

const defaultData = {
  sessionEmail: "",
  settings: {
    appName: "Facilita - Gestao Inteligente de Horas Extras",
    description: "Sistema para lancamento, aprovacao, acompanhamento e relatorio de programacoes de horas extras.",
    intro: "Acompanhe e gerencie autorizacoes de horas extras com fluxo de aprovacao por Marllon e Jeferson.",
    about: "O Facilita centraliza programacoes de horas extras, aprovacoes, farol, historico e relatorios.",
    homeTitle: "Bem-vinda ao Facilita",
    homeSubtitle: "Controle diario criado por Michele Buril",
    homeDescription: "Este app nasceu de uma ideia da Michele Buril para organizar, em um so lugar, os controles diarios de horas extras, GRD, compras de agua, relatorios, farois e acompanhamentos importantes da rotina.",
    homeImage: "",
    showHomeImage: false,
    heActionPosition: "below",
    heActionSize: "normal",
    heActionColor: "primary",
    brandIcon: "F",
    topActionIcon1: "☼",
    topActionIcon2: "◷",
    defaultHeroImage: "",
    bgColor: "#f5f7fb",
    surfaceColor: "#ffffff",
    textColor: "#122033",
    mutedColor: "#637083",
    lineColor: "#d9e1ec",
    successColor: "#168a4a",
    warningColor: "#d89a00",
    dangerColor: "#d83636",
    navItems: [
      { key: "dashboard", label: "Inicio", order: 1, visible: true },
      { key: "heDashboard", label: "HE", order: 2, visible: true },
      { key: "grdDashboard", label: "GRD", order: 3, visible: true },
      { key: "waterDashboard", label: "Agua", order: 4, visible: true },
      { key: "reports", label: "Relatorios", order: 5, visible: true },
      { key: "approvals", label: "Aprovacoes", order: 6, visible: true },
      { key: "schedules", label: "Programacoes", order: 7, visible: true },
      { key: "settings", label: "Configuracoes", order: 8, visible: true },
      { key: "about", label: "Sobre", order: 9, visible: true }
    ],
    heChartMode: "status",
    heChartDate: "",
    heChartMonth: "",
    heChartStart: "",
    heChartEnd: "",
    project: "PDER - Tamandua",
    contractor: "ERG ENG ENGENHARIA",
    appVersion: "1.0 inicial",
    appAdmin: "Michele Buril",
    primary: "#0057b8",
    secondary: "#00a676",
    workdayLimit: "17:05",
    weekendLimit: "16:05",
    lunchMinutes: 60,
    lunchTolerance: 5,
    minDate: "2026-04-01",
    logoErg: "",
    logoVale: "",
    appSlug: "facilita-tamandua",
    recentTitle: "Farol recente",
    recentVisible: true,
    recentPosition: "after",
    dashboardCards: [
      { id: "monthHours", label: "Horas no mes", type: "monthHours", color: "yellow", icon: "◷", visible: true, order: 1 },
      { id: "yearHours", label: "Horas no ano", type: "yearHours", color: "green", icon: "▤", visible: true, order: 2 },
      { id: "totalHours", label: "Total geral", type: "totalHours", color: "green", icon: "▤", visible: true, order: 3 },
      { id: "hours50", label: "Horas 50%", type: "hours50", color: "yellow", icon: "50", visible: true, order: 4 },
      { id: "hours100", label: "Horas 100%", type: "hours100", color: "red", icon: "100", visible: true, order: 5 },
      { id: "approvedCount", label: "Aprovadas", type: "approvedCount", color: "green", icon: "✓", visible: true, order: 6 },
      { id: "waitingMarllon", label: "Aguard. Marllon", type: "waitingMarllon", color: "yellow", icon: "M", visible: true, order: 7 },
      { id: "waitingJeferson", label: "Aguard. Jeferson", type: "waitingJeferson", color: "yellow", icon: "J", visible: true, order: 8 },
      { id: "rejectedCount", label: "Reprovadas", type: "rejectedCount", color: "red", icon: "×", visible: true, order: 9 }
    ],
    scheduleCards: [
      { id: "schedule50", label: "Horas 50%", type: "hours50", color: "yellow", icon: "50", visible: true, order: 1 },
      { id: "schedule100", label: "Horas 100%", type: "hours100", color: "red", icon: "100", visible: true, order: 2 },
      { id: "scheduleTotal", label: "Total de horas", type: "totalHours", color: "green", icon: "Σ", visible: true, order: 3 },
      { id: "scheduleEmployees", label: "Funcionarios", type: "employees", color: "blue", icon: "□", visible: true, order: 4 }
    ],
    micheleEmail: "michele@empresa.com",
    marllonEmail: "marllon@empresa.com",
    jefersonEmail: "jeferson@empresa.com"
  },
  users: [
    { id: uid(), name: "Michele Buril", email: "michele@empresa.com", password: "123456", role: "admin", active: true },
    { id: uid(), name: "Marllon Rodrigues Soares", email: "marllon@empresa.com", password: "123456", role: "marllon", active: true },
    { id: uid(), name: "Jeferson", email: "jeferson@empresa.com", password: "123456", role: "jeferson", active: true },
    { id: uid(), name: "Visualizador", email: "viewer@empresa.com", password: "123456", role: "viewer", active: true }
  ],
  employees: employeeDefaults().map((item) => ({ id: uid(), ...item, active: true })),
  functions: [
    "Laboratorista",
    "Tecnico de Seguranca",
    "Tecnico de Laboratorio",
    "Auxiliar Administrativo",
    "Auxiliar de Laboratorio",
    "Engenheiro Geotecnico",
    "Motorista",
    "Assistente de Qualidade"
  ].map((name) => ({ id: uid(), name, active: true })),
  schedules: [],
  grds: []
};

let data = loadData();
let currentView = "dashboard";
let scheduleLaunchMode = "normal";
let toastTimer;

function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-5);
}

function employeeDefaults() {
  return [
    { name: "Andre Lima da Silva", defaultFunction: "Laboratorista" },
    { name: "Bruno Jhenef dos Reis", defaultFunction: "Tecnico de Seguranca" },
    { name: "Cleiton Vieira de Resende", defaultFunction: "Tecnico de Laboratorio" },
    { name: "David Henrique da Silva Costa", defaultFunction: "Laboratorista" },
    { name: "Gicele Ramos", defaultFunction: "Auxiliar Administrativo" },
    { name: "Hudson de Souza Vilela", defaultFunction: "Auxiliar de Laboratorio" },
    { name: "Iury Jesus Silva", defaultFunction: "Auxiliar de Laboratorio" },
    { name: "Joao Vitor Santos Leite", defaultFunction: "Auxiliar de Laboratorio" },
    { name: "Michele Alves Buril", defaultFunction: "Auxiliar Administrativo" },
    { name: "Marllon Rodrigues Soares", defaultFunction: "Engenheiro Geotecnico" },
    { name: "Ulisses Eduardo Stanley Souza", defaultFunction: "Auxiliar de Laboratorio" },
    { name: "Wanessa Cristina Dias", defaultFunction: "Motorista" },
    { name: "William Jorge Lopes Neri", defaultFunction: "Laboratorista" }
  ];
}

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return normalizeData(structuredClone(defaultData));
  try {
    return normalizeData(mergeData(structuredClone(defaultData), JSON.parse(saved)));
  } catch {
    return normalizeData(structuredClone(defaultData));
  }
}

function mergeData(base, saved) {
  return {
    ...base,
    ...saved,
    settings: { ...base.settings, ...(saved.settings || {}) }
  };
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function normalizeData(value) {
  value = repairStoredText(value);
  value.grds = value.grds || [];
  value.settings.scheduleCards = mergeConfigRows(defaultData.settings.scheduleCards, value.settings.scheduleCards || []);
  value.settings.dashboardCards = mergeConfigRows(defaultData.settings.dashboardCards, value.settings.dashboardCards || []);
  const defaultFunctionByName = Object.fromEntries(employeeDefaults().map((item) => [normalizeText(item.name), item.defaultFunction]));
  value.employees = (value.employees || []).map((employee) => {
    const current = typeof employee === "string" ? { id: uid(), name: employee, active: true } : employee;
    return {
      id: current.id || uid(),
      name: current.name || "",
      defaultFunction: current.defaultFunction || defaultFunctionByName[normalizeText(current.name)] || "",
      active: current.active !== false
    };
  });
  return value;
}

function mergeConfigRows(defaultRows, savedRows) {
  const rows = (savedRows || []).map((row) => ({ ...row }));
  const keys = new Set(rows.map((row) => row.id));
  defaultRows.forEach((row) => {
    if (!keys.has(row.id)) rows.push({ ...row });
  });
  return rows;
}

function repairStoredText(value) {
  if (typeof value === "string") return repairMojibakeText(value);
  if (Array.isArray(value)) return value.map(repairStoredText);
  if (value && typeof value === "object") {
    Object.keys(value).forEach((key) => {
      value[key] = repairStoredText(value[key]);
    });
  }
  return value;
}

function repairMojibakeText(text) {
  const map = {
    "OlÃ¡": "Olá",
    "estÃ¡": "está",
    "gestÃ£o": "gestão",
    "aprovaÃ§Ã£o": "aprovação",
    "aprovaÃ§Ãµes": "aprovações",
    "AprovaÃ§Ãµes": "Aprovações",
    "PendÃªncias": "Pendências",
    "relatÃ³rio": "relatório",
    "relatÃ³rios": "relatórios",
    "relatÃ³rio": "relatório",
    "ProgramaÃ§Ãµes": "Programações",
    "programaÃ§Ãµes": "programações",
    "decisÃµes": "decisões",
    "rÃ¡pidas": "rápidas",
    "sÃ³": "só",
    "MÃªs": "Mês",
    "ConfiguraÃ§Ãµes": "Configurações",
    "informaÃ§Ãµes": "informações",
    "InformaÃ§Ãµes": "Informações",
    "aparÃªncia": "aparência",
    "DescriÃ§Ã£o": "Descrição",
    "descriÃ§Ã£o": "descrição",
    "TÃ­tulo": "Título",
    "alteraÃ§Ãµes": "alterações",
    "sÃ£o": "são",
    "Ã§": "ç",
    "Ã£": "ã",
    "Ãµ": "õ",
    "Ã¡": "á",
    "Ã©": "é",
    "Ã­": "í",
    "Ã³": "ó",
    "Ãº": "ú",
    "Ãª": "ê",
    "Ã´": "ô",
    "Ã‡": "Ç",
    "Ã": "Á",
    "â˜¼": "☼",
    "â—·": "◷",
    "â–¤": "▤",
    "âœ“": "✓",
    "Ã—": "×",
    "Î£": "Σ",
    "â–¡": "□",
    "âŒ„": "⌄",
    "âŒ‚": "⌂",
    "â—«": "◫",
    "â™¢": "♢",
    "â–¥": "▥",
    "â˜‘": "☑",
    "â–£": "▣",
    "âš™": "⚙",
    "â“˜": "ⓘ",
    "â€¢": "•",
    "ðŸ‘‹": "👋",
    "ï¼‹": "＋",
    "â™™": "♙",
    "â†’": "→",
    "â‡ª": "⇪",
    "âœŽ": "✎",
    "â‡©": "⇩",
    "â™¡": "♡"
  };
  return Object.entries(map).reduce((acc, [bad, good]) => acc.split(bad).join(good), text);
}

function currentUser() {
  return data.users.find((u) => u.email === data.sessionEmail && u.active);
}

function roleLabel(role) {
  return {
    admin: "Administradora",
    marllon: "Aprovador Marllon",
    jeferson: "Aprovador Jeferson",
    viewer: "Visualizador"
  }[role] || role;
}

function canSee(view, user) {
  if (!user) return false;
  const map = {
    dashboard: ["admin", "marllon", "jeferson", "viewer"],
    heDashboard: ["admin", "marllon", "jeferson"],
    grdDashboard: ["admin", "marllon", "jeferson"],
    waterDashboard: ["admin"],
    newSchedule: ["admin"],
    approvals: ["marllon", "jeferson"],
    rejected: ["admin"],
    schedules: ["admin", "marllon", "jeferson", "viewer"],
    reports: ["admin", "marllon", "jeferson", "viewer"],
    employees: ["admin"],
    functions: ["admin"],
    users: ["admin"],
    settings: ["admin"],
    about: ["admin", "marllon", "jeferson", "viewer"]
  };
  return (map[view] || []).includes(user.role);
}

function setCssVars() {
  document.documentElement.style.setProperty("--primary", data.settings.primary || "#0057b8");
  document.documentElement.style.setProperty("--secondary", data.settings.secondary || "#00a676");
  document.documentElement.style.setProperty("--bg", data.settings.bgColor || "#f5f7fb");
  document.documentElement.style.setProperty("--surface", data.settings.surfaceColor || "#ffffff");
  document.documentElement.style.setProperty("--text", data.settings.textColor || "#122033");
  document.documentElement.style.setProperty("--muted", data.settings.mutedColor || "#637083");
  document.documentElement.style.setProperty("--line", data.settings.lineColor || "#d9e1ec");
  document.documentElement.style.setProperty("--success", data.settings.successColor || "#168a4a");
  document.documentElement.style.setProperty("--warning", data.settings.warningColor || "#d89a00");
  document.documentElement.style.setProperty("--danger", data.settings.dangerColor || "#d83636");
}

function render() {
  setCssVars();
  const user = currentUser();
  if (!user) {
    renderLogin();
    return;
  }
  if (!canSee(currentView, user)) currentView = "dashboard";
  renderApp(user);
}

function renderLogin() {
  document.getElementById("app").innerHTML = `
    <main class="login-shell">
      <section class="login-hero">
        <div class="brand"><span class="brand-mark">${renderIcon(data.settings.brandIcon || "F")}</span><span>${esc(data.settings.appName)}</span></div>
        <div>
          <h1>${esc(data.settings.appName)}</h1>
          <p>${esc(data.settings.intro)}</p>
        </div>
        <p>Usuarios de teste: michele@empresa.com, marllon@empresa.com, jeferson@empresa.com ou viewer@empresa.com. Senha: 123456.</p>
      </section>
      <section class="login-panel">
        <h2>Entrar</h2>
        <p class="muted">Use seu e-mail e senha para acessar o sistema.</p>
        <form id="loginForm" class="grid">
          <div class="field">
            <label for="email">E-mail</label>
            <input id="email" type="email" required value="michele@empresa.com" />
          </div>
          <div class="field">
            <label for="password">Senha</label>
            <input id="password" type="password" required value="123456" />
          </div>
          <button class="btn primary" type="submit">Entrar</button>
        </form>
      </section>
    </main>
  `;
  document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const found = data.users.find((u) => u.email === email && u.password === password && u.active);
    if (!found) {
      showToast("Login ou senha invalidos.");
      return;
    }
    data.sessionEmail = found.email;
    saveData();
    render();
  });
}

function renderApp(user) {
  const defaultNavItems = defaultData.settings.navItems;
  const views = (data.settings.navItems || defaultNavItems)
    .filter((item) => item.visible !== false && canSee(item.key, user))
    .sort((a, b) => Number(a.order) - Number(b.order))
    .map((item) => [item.key, item.label]);

  document.getElementById("app").innerHTML = `
    <main class="app-shell">
      <aside class="app-sidebar">
        <div class="brand">
          <span class="brand-mark">${renderIcon(data.settings.brandIcon || "F")}</span>
          <span><strong>Facilita</strong><small>Gestao inteligente<br>de controles</small></span>
        </div>
        <nav class="nav">
          ${views.map(([key, label]) => `<button class="${currentView === key ? "active" : ""}" data-view="${key}"><span>${navIcon(key)}</span>${label}</button>`).join("")}
        </nav>
        <div class="user-box">
          <span class="avatar">${initials(user.name)}</span>
          <div><strong>${esc(user.name)}</strong><br><small>${roleLabel(user.role)}</small><br><button class="link-btn" id="logoutBtn">Sair</button></div>
        </div>
      </aside>
      <section class="main">
        <header class="top-actions"><button class="icon-btn" title="Tema">${renderIcon(data.settings.topActionIcon1 || "☼")}</button><span class="top-avatar">${initials(user.name)}</span><span class="top-caret">⌄</span></header>
        <div class="content" id="view"></div>
      </section>
    </main>
  `;
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      currentView = button.dataset.view;
      render();
    });
  });
  document.getElementById("logoutBtn").addEventListener("click", () => {
    data.sessionEmail = "";
    saveData();
    render();
  });
  renderView(user);
}

function navIcon(key) {
  const item = (data.settings.navItems || []).find((navItem) => navItem.key === key);
  if (item?.icon) return renderIcon(item.icon);
  return {
    dashboard: "⌂",
    heDashboard: "◫",
    grdDashboard: "□",
    waterDashboard: "♢",
    reports: "▥",
    approvals: "☑",
    schedules: "▣",
    settings: "⚙",
    about: "ⓘ"
  }[key] || "•";
}

function initials(name) {
  return String(name || "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "U";
}

function homeHeroVisual() {
  if (data.settings.showHomeImage && data.settings.homeImage) return `<img src="${esc(data.settings.homeImage)}" alt="Imagem inicial">`;
  if (data.settings.defaultHeroImage) return `<img src="${esc(data.settings.defaultHeroImage)}" alt="Imagem inicial">`;
  return `<div class="hero-illustration"><div class="clock-face">◷</div><div class="person"><span></span></div><div class="laptop"></div><div class="plant"></div></div>`;
}

function renderView(user) {
  const view = document.getElementById("view");
  const screens = {
    dashboard: renderDashboard,
    heDashboard: renderHeDashboard,
    grdDashboard: renderGrdManager,
    newGrd: renderGrdForm,
    waterDashboard: renderWaterDashboard,
    newSchedule: renderScheduleForm,
    approvals: renderApprovals,
    rejected: renderRejected,
    schedules: renderSchedules,
    reports: renderReports,
    employees: () => renderCatalog("employees", "Funcionarios", "Nome do funcionario"),
    functions: () => renderCatalog("functions", "Funcoes", "Nome da funcao"),
    users: renderUsers,
    settings: renderSettings,
    about: renderAbout
  };
  view.innerHTML = screens[currentView](user);
  bindViewEvents(user);
}

function bindViewEvents(user) {
  document.querySelectorAll("[data-action]").forEach((el) => {
    el.addEventListener("click", (event) => handleAction(event, el.dataset.action, el.dataset, user));
  });
  document.querySelectorAll("[data-settings-tab]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      history.replaceState(null, "", `#${el.dataset.settingsTab}`);
      render();
    });
  });
  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => handleForm(event, form.dataset.form, user));
  });
  document.querySelectorAll("[data-auto]").forEach((el) => {
    el.addEventListener("change", () => {
      if (el.dataset.auto === "report") render();
      if (el.dataset.auto === "reportFilter") {
        data.settings.reportFilterType = el.value;
        saveData();
        render();
      }
      if (el.dataset.auto === "heChart") {
        const form = document.getElementById("heChartControls");
        if (form) {
          const fd = new FormData(form);
          data.settings.heChartMode = fd.get("heChartMode");
          data.settings.heChartDate = fd.get("heChartDate");
          data.settings.heChartMonth = fd.get("heChartMonth");
          data.settings.heChartStart = fd.get("heChartStart");
          data.settings.heChartEnd = fd.get("heChartEnd");
          saveData();
          render();
        }
      }
      if (el.dataset.auto === "scheduleMetrics") {
        const form = document.getElementById("scheduleMetricControls");
        if (form) {
          const fd = new FormData(form);
          data.settings.scheduleMetricMode = fd.get("scheduleMetricMode");
          data.settings.scheduleMetricMonth = fd.get("scheduleMetricMonth");
          data.settings.scheduleMetricStart = fd.get("scheduleMetricStart");
          data.settings.scheduleMetricEnd = fd.get("scheduleMetricEnd");
          saveData();
          render();
        }
      }
    });
  });
  document.querySelectorAll("[data-file-setting]").forEach((el) => {
    el.addEventListener("change", () => handleSettingFile(el));
  });
  document.querySelectorAll("[data-card-icon-file]").forEach((el) => {
    el.addEventListener("change", () => handleCardIconFile(el));
  });
  document.querySelectorAll("[data-nav-icon-file]").forEach((el) => {
    el.addEventListener("change", () => handleInlineFile(el, '[name="navIcon"]', "[data-nav-item-row]"));
  });
  document.querySelectorAll("[data-pdf-retro]").forEach((el) => {
    el.addEventListener("change", () => handleRetroPdf(el));
  });
  document.querySelectorAll('[name="employeeName"]').forEach((el) => {
    el.addEventListener("change", () => applyDefaultFunction(el));
    applyDefaultFunction(el);
  });
  document.querySelectorAll("[data-day-type]").forEach((el) => {
    el.addEventListener("change", () => updateDayTypeFields(el.value));
    updateDayTypeFields(el.value);
  });
}

function updateDayTypeFields(dayType) {
  const isWorkday = dayType === "workday";
  document.querySelectorAll(".non-workday-field").forEach((field) => {
    field.classList.toggle("hidden-field", isWorkday);
    field.querySelectorAll("input").forEach((input) => {
      if (isWorkday) input.value = "";
    });
  });
  document.querySelectorAll(".workday-note").forEach((field) => field.classList.toggle("hidden-field", !isWorkday));
  document.querySelectorAll("[data-label-start]").forEach((label) => {
    label.textContent = isWorkday ? "Inicio extra" : "Inicio";
  });
}

function renderDashboard() {
  const user = currentUser();
  const items = allItems();
  const today = new Date().toISOString().slice(0, 10);
  const month = today.slice(0, 7);
  const pending = items.filter((item) => item.status.includes("waiting") || item.status.includes("rejected"));
  const dayTotal = minutesToHours(items.filter((item) => item.date === today).reduce((acc, item) => acc + item.totalMinutes, 0));
  const monthTotal = minutesToHours(items.filter((item) => item.date.startsWith(month)).reduce((acc, item) => acc + item.totalMinutes, 0));
  return `
    <section class="dashboard-welcome">
      <div>
        <h1>Olá, ${esc(firstName(user.name))}! <span>👋</span></h1>
        <p>Aqui está o resumo da sua gestão hoje.</p>
      </div>
    </section>
    <section class="quick-actions">
      ${quickAction("＋", "Registrar HE", "Nova hora extra", "goNew")}
      ${quickAction("☑", "Ver aprovações", "Pendências", "openView", "approvals")}
      ${quickAction("▤", "Gerar relatório", "Exportar dados", "openView", "reports")}
      ${quickAction("▣", "Programações", "Ver agenda", "openView", "schedules")}
    </section>
    <section class="home-hero dashboard-hero card">
      <div>
        <span class="badge blue">Bem-vinda!</span>
        <h1>Controle inteligente,<br>decisões mais rápidas.</h1>
        <p>Acompanhe horas extras, aprovações, programas, relatórios e indicadores em um só lugar.</p>
      </div>
      ${homeHeroVisual()}
    </section>
    <section class="daily-summary card">
      <div class="section-title"><h3>Resumo do dia</h3><span class="date-pill">${formatDate(today)} ▣</span></div>
      <div class="grid four">
        ${summaryCard("◷", "Hoje", dayTotal, "Total registrado", "blue")}
        ${summaryCard("▣", "Semana", "00:00", "Total registrado", "green")}
        ${summaryCard("▤", "Mês", monthTotal, "Total registrado", "yellow")}
        ${summaryCard("♙", "Pendentes", pending.length, "Aprovações", "purple")}
      </div>
    </section>
    <section class="grid two home-lists">
      <article class="card">
        <div class="section-title"><h3>Aprovações pendentes</h3><button class="btn ghost" data-action="openView" data-view="approvals">Ver todas</button></div>
        ${pendingList(pending)}
      </article>
      <article class="card">
        <div class="section-title"><h3>Atividades recentes</h3><button class="btn ghost" data-action="openView" data-view="heDashboard">Ver todas</button></div>
        ${activityList(items)}
      </article>
    </section>
  `;
}

function firstName(name) {
  return String(name || "Michele").split(" ")[0] || "Michele";
}

function quickAction(icon, title, subtitle, action, view = "") {
  return `<button class="quick-card card" data-action="${action}" ${view ? `data-view="${view}"` : ""}><span>${icon}</span><strong>${title}</strong><small>${subtitle}</small></button>`;
}

function summaryCard(icon, label, value, sub, color) {
  return `<article class="summary-card ${color}"><span>${icon}</span><div><small>${label}</small><strong>${value}</strong><em>${sub}</em></div></article>`;
}

function pendingList(items) {
  const sample = items.slice(0, 3);
  if (!sample.length) return `<p class="muted">Nenhuma aprovação pendente.</p>`;
  return `<div class="pending-list">${sample.map((item) => `<div><span class="avatar mini">${initials(item.employeeName)}</span><strong>${esc(item.employeeName)}</strong><small>${esc(item.functionName)}</small><b>${minutesToHours(item.totalMinutes)}</b><time>${formatDate(item.date)}</time><em>Pendente</em></div>`).join("")}</div><button class="btn ghost center" data-action="openView" data-view="approvals">Ver todas as aprovações →</button>`;
}

function activityList(items) {
  const sample = items.slice(-4).reverse();
  if (!sample.length) return `<p class="muted">Nenhuma atividade recente.</p>`;
  return `<div class="activity-list">${sample.map((item, index) => `<div><span>${["＋", "✓", "▤", "▣"][index % 4]}</span><time>${item.end || "--:--"}</time><strong>${statusLabel(item.status)}</strong><small>${esc(item.employeeName)} • ${minutesToHours(item.totalMinutes)}</small></div>`).join("")}</div>`;
}

function renderHeDashboard() {
  const items = allItems();
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const month = today.slice(0, 7);
  const year = today.slice(0, 4);
  const cards = (data.settings.dashboardCards || []).filter((card) => card.visible).sort((a, b) => a.order - b.order);
  const recentBlock = data.settings.recentVisible ? `
    <section class="card" style="margin-top:16px">
      <div class="section-title"><h3>${esc(data.settings.recentTitle || "Farol recente")}</h3><span class="muted">${items.length} itens</span></div>
      ${renderItemsTable(items.slice(-12).reverse(), true)}
    </section>
  ` : "";

  const heActions = `
    <div class="btn-row he-action-row ${data.settings.heActionPosition === "right" ? "align-right" : ""} size-${data.settings.heActionSize || "normal"} tone-${data.settings.heActionColor || "primary"}">
      ${currentUser().role === "admin" ? `<button class="btn" data-action="goRetro">Lancar retroativa</button><button class="btn primary" data-action="goNew">Nova autorizacao</button><button class="btn" data-action="openView" data-view="rejected">Reprovados</button>` : ""}
      ${currentUser().role === "marllon" || currentUser().role === "jeferson" ? `<button class="btn primary" data-action="openView" data-view="approvals">Aprovacoes</button>` : ""}
      <button class="btn" data-action="openView" data-view="schedules">Programacoes</button>
      <button class="btn" data-action="openView" data-view="reports">Relatorios</button>
    </div>
  `;
  return `
    <div class="page-head">
      <div>
        <h1>Horas Extras</h1>
        <p>${esc(data.settings.intro)}</p>
        ${data.settings.heActionPosition !== "right" ? heActions : ""}
      </div>
      ${currentUser().role === "admin" ? `<button class="btn" data-action="editLayout">Editar layout</button>` : ""}
      ${data.settings.heActionPosition === "right" ? heActions : ""}
    </div>
    ${renderHeCharts(items, month, year)}
    ${data.settings.recentPosition === "before" ? recentBlock : ""}
    <section class="grid three">
      ${cards.map((card) => metric(card.label, dashboardMetricValue(card, items, today, month, year), card.color, card.icon)).join("") || `<article class="card"><p class="muted">Nenhum card ativo. Edite em Configuracoes.</p></article>`}
    </section>
    ${data.settings.recentPosition !== "before" ? recentBlock : ""}
  `;
}

function renderHeCharts(items, month, year) {
  const mode = data.settings.heChartMode || "status";
  const chartDate = data.settings.heChartDate || new Date().toISOString().slice(0, 10);
  const chartMonth = data.settings.heChartMonth || month;
  const chartStart = data.settings.heChartStart || `${year}-01-01`;
  const chartEnd = data.settings.heChartEnd || new Date().toISOString().slice(0, 10);
  const filtered = filterHeChartItems(items, mode, chartDate, chartMonth, chartStart, chartEnd);
  const monthItems = items.filter((i) => i.date.startsWith(month));
  const approved = filtered.filter((i) => i.status === "approved" || i.status === "retro_approved").length;
  const waiting = filtered.filter((i) => i.status.includes("waiting")).length;
  const rejected = filtered.filter((i) => i.status.includes("rejected")).length;
  const totalStatus = Math.max(approved + waiting + rejected, 1);
  const minutes50 = filtered.reduce((acc, item) => acc + item.minutes50, 0);
  const minutes100 = filtered.reduce((acc, item) => acc + item.minutes100, 0);
  const maxHours = Math.max(minutes50, minutes100, 1);
  const grouped = groupHeChart(filtered, mode);
  return `
    <section class="card chart-controls">
      <form id="heChartControls" class="form-grid">
        <div class="field"><label>Grafico por</label><select name="heChartMode" data-auto="heChart"><option value="status" ${mode === "status" ? "selected" : ""}>Total geral</option><option value="employee" ${mode === "employee" ? "selected" : ""}>Funcionario</option><option value="month" ${mode === "month" ? "selected" : ""}>Mes</option><option value="date" ${mode === "date" ? "selected" : ""}>Data especifica</option><option value="period" ${mode === "period" ? "selected" : ""}>Periodo</option></select></div>
        <div class="field ${mode === "date" ? "" : "hidden-field"}"><label>Data</label><input name="heChartDate" type="date" value="${esc(chartDate)}" data-auto="heChart"></div>
        <div class="field ${mode === "month" ? "" : "hidden-field"}"><label>Mes</label><input name="heChartMonth" type="month" value="${esc(chartMonth)}" data-auto="heChart"></div>
        <div class="field ${mode === "period" || mode === "employee" ? "" : "hidden-field"}"><label>Inicio</label><input name="heChartStart" type="date" value="${esc(chartStart)}" data-auto="heChart"></div>
        <div class="field ${mode === "period" || mode === "employee" ? "" : "hidden-field"}"><label>Fim</label><input name="heChartEnd" type="date" value="${esc(chartEnd)}" data-auto="heChart"></div>
      </form>
    </section>
    <section class="grid two chart-row">
      ${barChart("Status das HE", [
        ["Aprovadas", approved, "green", totalStatus],
        ["Aguardando", waiting, "yellow", totalStatus],
        ["Reprovadas", rejected, "red", totalStatus]
      ])}
      ${barChart("Horas por tipo", [
        ["50%", Math.round(minutes50 / 60), "yellow", Math.max(Math.round(maxHours / 60), 1)],
        ["100%", Math.round(minutes100 / 60), "red", Math.max(Math.round(maxHours / 60), 1)],
        ["Itens no mes", monthItems.length, "green", Math.max(monthItems.length, 1)]
      ])}
      ${barChart(grouped.title, grouped.rows)}
    </section>
  `;
}

function filterHeChartItems(items, mode, date, month, start, end) {
  if (mode === "date") return items.filter((item) => item.date === date);
  if (mode === "month") return items.filter((item) => item.date.startsWith(month));
  if (mode === "period" || mode === "employee") return items.filter((item) => item.date >= start && item.date <= end);
  return items;
}

function groupHeChart(items, mode) {
  if (mode === "employee") {
    return groupedRows("Horas por funcionario", items, (item) => item.employeeName);
  }
  if (mode === "month") {
    return groupedRows("Horas por mes", items, (item) => item.date.slice(0, 7));
  }
  if (mode === "date" || mode === "period") {
    return groupedRows("Horas por data", items, (item) => formatDate(item.date));
  }
  return groupedRows("Horas por funcionario", items, (item) => item.employeeName);
}

function groupedRows(title, items, keyFn) {
  const map = new Map();
  items.forEach((item) => {
    const key = keyFn(item) || "Sem informacao";
    map.set(key, (map.get(key) || 0) + Math.round(item.totalMinutes / 60));
  });
  const rows = [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
  const max = Math.max(...rows.map((row) => row[1]), 1);
  return { title, rows: (rows.length ? rows : [["Sem dados", 0, "gray", 1]]).map(([label, value]) => [label, value, "blue", max]) };
}

function renderGrdDashboard() {
  return renderModuleDashboard({
    title: "GRD",
    subtitle: "Controle de ensaios, assinaturas, pendencias, digitalizacao e arquivo fisico.",
    cards: [
      ["Itens recebidos", 0, "gray", "▤"],
      ["Aguard. Marllon", 0, "yellow", "M"],
      ["Aguard. Jeferson", 0, "yellow", "J"],
      ["Pendentes", 0, "red", "!"],
      ["Aguard. digitalizacao", 0, "blue", "⇪"],
      ["Concluidos", 0, "green", "✓"]
    ],
    charts: [
      ["Farol GRD", [["Recebidos", 0, "gray", 1], ["Jeferson", 0, "yellow", 1], ["Pendentes", 0, "red", 1], ["Concluidos", 0, "green", 1]]],
      ["Prazos", [["No prazo", 0, "green", 1], ["48h perto", 0, "yellow", 1], ["Vencidos", 0, "red", 1]]]
    ]
  });
}

function renderWaterDashboard() {
  return renderModuleDashboard({
    title: "Agua",
    subtitle: "Controle diario de compras de agua, comprovantes, fornecedores e destinacao.",
    cards: [
      ["Galoes no mes", 0, "green", "▤"],
      ["Valor no mes", "R$ 0,00", "yellow", "$"],
      ["Compras", 0, "green", "✓"],
      ["Sem comprovante", 0, "red", "!"]
    ],
    charts: [
      ["Compras por destinacao", [["Tamandua", 0, "green", 1], ["Cava", 0, "yellow", 1], ["Geral", 0, "gray", 1]]],
      ["Fornecedores", [["Chama Gas", 0, "green", 1], ["Super gas Bras", 0, "yellow", 1]]]
    ]
  });
}

function renderGrdManager() {
  const items = data.grds || [];
  const count = (status) => items.filter((item) => item.status === status).length;
  const pending = items.filter((item) => item.status === "pending").length;
  const waitingScan = items.filter((item) => item.status === "signed").length;
  const done = items.filter((item) => item.scanned && item.archived).length;
  const max = Math.max(items.length, 1);
  return `
    <div class="page-head">
      <div><h1>GRD</h1><p>Controle de ensaios, assinaturas, pendencias, digitalizacao e arquivo fisico.</p></div>
      <div class="btn-row">
        ${currentUser().role === "admin" ? `<button class="btn primary" data-action="goNewGrd">+ Lancar GRD</button><button class="btn" data-action="editLayout">Editar layout</button>` : ""}
      </div>
    </div>
    <section class="grid three">
      ${metric("Itens recebidos", items.length, "gray", "▤")}
      ${metric("Aguard. Marllon", count("waiting_marllon"), "yellow", "M")}
      ${metric("Aguard. Jeferson", count("waiting_jeferson"), "yellow", "J")}
      ${metric("Pendentes", pending, "red", "!")}
      ${metric("Aguard. digitalizacao", waitingScan, "blue", "⇪")}
      ${metric("Concluidos", done, "green", "✓")}
    </section>
    <section class="grid two chart-row">
      ${barChart("Farol GRD", [
        ["Recebidos", items.length, "gray", max],
        ["Marllon", count("waiting_marllon"), "yellow", max],
        ["Jeferson", count("waiting_jeferson"), "yellow", max],
        ["Pendentes", pending, "red", max],
        ["Concluidos", done, "green", max]
      ])}
      ${barChart("Prazos", grdDeadlineRows(items))}
    </section>
    <section class="card" style="margin-top:16px">
      <div class="section-title">
        <div><h3>Registros GRD</h3><span class="muted">OS, protocolo, tipo de ensaio e assinatura</span></div>
        ${currentUser().role === "admin" ? `<button class="btn primary" data-action="goNewGrd">Novo GRD</button>` : ""}
      </div>
      ${renderGrdTable(items)}
    </section>
  `;
}

function renderGrdForm() {
  const today = new Date().toISOString().slice(0, 10);
  return `
    <div class="page-head"><div><h1>Lancar GRD</h1><p>Informe os ensaios que serao enviados para assinatura.</p></div><button class="btn" data-action="openView" data-view="grdDashboard">Voltar</button></div>
    <section class="card">
      <form class="grid" data-form="grd">
        <div class="form-grid">
          ${input("receivedDate", "Data que chegou para Michele", today, "", "date")}
          ${input("sentDate", "Data enviada para assinatura", today, "", "date")}
          <div class="field">
            <label>Empresa</label>
            <select name="company">
              <option value="Salum">Salum</option>
              <option value="Fidens">Fidens</option>
              <option value="Outra">Outra</option>
            </select>
          </div>
          <div class="field">
            <label>Tipo de ensaio</label>
            <select name="testType">
              ${grdTestOptions().map((name) => `<option value="${esc(name)}">${esc(name)}</option>`).join("")}
            </select>
          </div>
          ${input("os", "Numero da OS", "")}
          ${input("protocol", "Protocolo (opcional para Caracterizacao)", "")}
          ${input("quantity", "Quantidade de documentos", 1, "", "number")}
          ${input("notes", "Observacao", "", "textarea")}
        </div>
        <div class="btn-row">
          <button class="btn primary" type="submit">Enviar para Marllon assinar</button>
          <button class="btn" type="button" data-action="openView" data-view="grdDashboard">Cancelar</button>
        </div>
      </form>
    </section>
  `;
}

function renderModuleDashboard({ title, subtitle, cards, charts }) {
  return `
    <div class="page-head"><div><h1>${title}</h1><p>${subtitle}</p></div>${currentUser().role === "admin" ? `<button class="btn" data-action="editLayout">Editar layout</button>` : ""}</div>
    <section class="grid three">
      ${cards.map(([label, value, color, icon]) => metric(label, value, color, icon)).join("")}
    </section>
    <section class="grid two chart-row">
      ${charts.map(([chartTitle, rows]) => barChart(chartTitle, rows)).join("")}
    </section>
    <section class="card" style="margin-top:16px">
      <div class="section-title"><h3>Farol ${title}</h3><span class="muted">Modulo pronto para receber registros</span></div>
      <p class="muted">Os registros desta area entram aqui quando o modulo for alimentado.</p>
    </section>
  `;
}

function renderGrdTable(items) {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Recebido</th><th>Empresa</th><th>Tipo</th><th>OS</th><th>Protocolo</th><th>Qtd</th><th>Status</th><th>Controle</th><th>Acoes</th></tr></thead>
        <tbody>
          ${items.map((item) => `<tr>
            <td>${formatDate(item.receivedDate)}</td>
            <td>${esc(item.company)}</td>
            <td>${esc(item.testType)}</td>
            <td>${esc(item.os)}</td>
            <td>${esc(item.protocol || "-")}</td>
            <td>${esc(item.quantity || 1)}</td>
            <td>${statusBadge(item.status)}</td>
            <td>
              Enviado: ${formatDate(item.sentDate)}<br>
              Retorno: ${formatDate(item.returnedDate) || "-"}<br>
              Escaneado: ${item.scanned ? "Sim" : "Nao"}<br>
              Arquivo fisico: ${item.archived ? "Sim" : "Nao"}
              ${item.pendingReason ? `<br><strong>Motivo:</strong> ${esc(item.pendingReason)}<br><strong>Verificar:</strong> Gicele/Cleiton` : ""}
            </td>
            <td class="btn-row">
              ${currentUser().role === "admin" ? `<button class="btn" data-action="editGrd" data-id="${item.id}">Editar</button>` : ""}
              ${currentUser().role === "marllon" && item.status === "waiting_marllon" ? `<button class="btn success" data-action="approveGrd" data-id="${item.id}">Assinar</button><button class="btn danger" data-action="pendGrd" data-id="${item.id}">Pendente</button>` : ""}
              ${currentUser().role === "jeferson" && item.status === "waiting_jeferson" ? `<button class="btn success" data-action="approveGrd" data-id="${item.id}">Assinar</button><button class="btn danger" data-action="pendGrd" data-id="${item.id}">Pendente</button>` : ""}
              ${currentUser().role === "admin" && item.status === "pending" ? `<button class="btn primary" data-action="resendGrd" data-id="${item.id}">Reenviar</button>` : ""}
              ${currentUser().role === "admin" && item.status === "signed" ? `<button class="btn" data-action="scanGrd" data-id="${item.id}">Escaneado</button>` : ""}
              ${currentUser().role === "admin" && item.scanned && !item.archived ? `<button class="btn" data-action="archiveGrd" data-id="${item.id}">Arquivado</button>` : ""}
            </td>
          </tr>`).join("") || `<tr><td colspan="9">Nenhum GRD cadastrado.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function grdDeadlineRows(items) {
  const now = new Date();
  const rows = { ok: 0, near: 0, late: 0 };
  items.filter((item) => !["archived", "done"].includes(item.status)).forEach((item) => {
    const base = item.sentDate ? new Date(`${item.sentDate}T00:00:00`) : new Date(item.createdAt || now);
    const diffHours = (now - base) / 36e5;
    if (diffHours > 72) rows.late += 1;
    else if (diffHours > 24) rows.near += 1;
    else rows.ok += 1;
  });
  const max = Math.max(rows.ok, rows.near, rows.late, 1);
  return [["No prazo", rows.ok, "green", max], ["48h perto", rows.near, "yellow", max], ["Vencidos", rows.late, "red", max]];
}

function grdTestOptions() {
  return [
    "Caracterizacao",
    "Acompanhamento de atividade",
    "Compactacao",
    "Compactidade Relativa",
    "Concreto",
    "Densidade da Areia Calibrada",
    "Frasco de areia",
    "Granulometria",
    "Granulometria de solos",
    "Penetrometro Dinamico Leve (PDL)",
    "Proctor",
    "Outro"
  ];
}

function barChart(title, rows) {
  return `
    <article class="card chart-card">
      <h3>${title}</h3>
      ${rows.map(([label, value, color, max]) => {
        const width = Math.max(3, Math.min(100, (Number(value) / Math.max(Number(max), 1)) * 100));
        return `<div class="bar-line"><span>${label}</span><div class="bar-track"><i class="bar-fill bar-${color}" style="width:${width}%"></i></div><strong>${value}</strong></div>`;
      }).join("")}
    </article>
  `;
}

function metric(label, value, color, icon = "") {
  return `<article class="card metric"><span class="metric-icon metric-${color}">${renderIcon(icon || metricIcon(label))}</span><div><strong>${value}</strong><span>${label}</span></div></article>`;
}

function renderIcon(icon) {
  const value = String(icon || "");
  if (value.startsWith("data:image") || value.startsWith("http")) return `<img src="${esc(value)}" alt="">`;
  return esc(value);
}

function metricIcon(label) {
  const text = String(label).toLowerCase();
  if (text.includes("marllon") || text.includes("jeferson") || text.includes("aguard")) return "◷";
  if (text.includes("aprov")) return "✓";
  if (text.includes("reprov") || text.includes("rejeit")) return "×";
  return "▤";
}

function dashboardMetricValue(card, items, today, month, year) {
  const sum = (list, type) => minutesToHours(list.reduce((acc, item) => acc + item[type], 0));
  const monthItems = items.filter((i) => i.date.startsWith(month));
  const yearItems = items.filter((i) => i.date.startsWith(year));
  const map = {
    monthHours: () => sum(monthItems, "totalMinutes"),
    yearHours: () => sum(yearItems, "totalMinutes"),
    totalHours: () => sum(items, "totalMinutes"),
    hours50: () => sum(items, "minutes50"),
    hours100: () => sum(items, "minutes100"),
    approvedCount: () => items.filter((i) => i.status === "approved" || i.status === "retro_approved").length,
    waitingMarllon: () => items.filter((i) => i.status === "waiting_marllon").length,
    waitingJeferson: () => items.filter((i) => i.status === "waiting_jeferson").length,
    rejectedCount: () => items.filter((i) => i.status.includes("rejected")).length,
    todayHours: () => sum(items.filter((i) => i.date === today), "totalMinutes"),
    custom: () => card.value || "0"
  };
  return (map[card.type] || map.custom)();
}

function renderScheduleForm() {
  const employees = employeeOptions();
  const functions = options(data.functions.filter((f) => f.active), "name");
  const isRetroMode = scheduleLaunchMode === "retro";
  const today = new Date();
  const yesterday = new Date(today.getTime() - 86400000).toISOString().slice(0, 10);
  return `
    <div class="page-head">
      <div><h1>${isRetroMode ? "Lancar hora extra retroativa" : "Nova autorizacao"}</h1><p>Lance a programacao por dia e adicione os colaboradores.</p></div>
    </div>
    <form class="grid" data-form="schedule">
      <section class="card">
        <div class="section-title"><h3>Dados da programacao</h3><span class="badge blue">Michele</span></div>
        <div class="form-grid">
          <div class="field"><label>Data autorizada</label><input name="date" type="date" min="${data.settings.minDate}" required value="${isRetroMode ? yesterday : today.toISOString().slice(0, 10)}"></div>
          <div class="field"><label>Lancamento retroativo</label><select name="retroactiveRequested"><option value="false" ${!isRetroMode ? "selected" : ""}>Nao</option><option value="true" ${isRetroMode ? "selected" : ""}>Sim, ja aprovado</option></select></div>
          <div class="field"><label>Tipo do dia</label><select name="dayType" data-day-type><option value="workday">Dia util</option><option value="saturday">Sabado</option><option value="sunday">Domingo</option><option value="holiday">Feriado</option></select></div>
          <div class="field"><label>Projeto</label><input name="project" value="${esc(data.settings.project)}" required></div>
          <div class="field"><label>Contratada</label><input name="contractor" value="${esc(data.settings.contractor)}" required></div>
          <div class="field full"><label>Justificativa${isRetroMode ? " (opcional)" : ""}</label><textarea name="reason" ${isRetroMode ? "" : "required"} placeholder="${isRetroMode ? "Opcional para lancamento retroativo" : "Descreva o motivo da hora extra"}"></textarea></div>
          ${isRetroMode ? `
            <div class="field full pdf-import-box">
              <label>PDF da aprovacao retroativa</label>
              <input type="file" accept="application/pdf,.pdf" data-pdf-retro>
              <input type="hidden" name="pdfSource" value="">
              <p class="muted" data-pdf-status>Insira o PDF para o app tentar puxar data, funcionario, funcao e horarios automaticamente.</p>
              <details>
                <summary>Texto encontrado no PDF</summary>
                <textarea name="pdfExtractedText" readonly placeholder="Depois de inserir o PDF, o texto encontrado aparece aqui."></textarea>
              </details>
            </div>
          ` : ""}
          <div class="field full"><label>Anexo opcional</label><input name="attachment" placeholder="Cole aqui o nome ou link do print do e-mail"></div>
        </div>
      </section>
      <section class="card">
        <div class="section-title">
          <h3>Colaboradores</h3>
          <button type="button" class="btn" data-action="addEmployeeBlock">Adicionar colaborador</button>
        </div>
        <div id="employeeBlocks">
          ${employeeBlock(0, employees, functions)}
        </div>
      </section>
      <div class="btn-row">
        <button class="btn" name="submitType" value="draft" type="submit">Salvar rascunho</button>
        <button class="btn primary" name="submitType" value="send" type="submit">Enviar para aprovacao</button>
      </div>
    </form>
  `;
}

function employeeBlock(index, employees, functions) {
  return `
    <div class="employee-card" data-employee-block>
      <div class="section-title">
        <h3>Colaborador ${index + 1}</h3>
        <button type="button" class="btn danger" data-action="removeEmployeeBlock">Remover</button>
      </div>
      <div class="form-grid">
        <div class="field"><label>Funcionario</label><select name="employeeName" required>${employees}</select></div>
        <div class="field"><label>Funcao</label><select name="functionName" required>${functions}</select></div>
        <div class="field"><label data-label-start>Inicio extra</label><input name="start" type="time"></div>
        <div class="field full workday-note"><span class="field-help">Dia util usa somente 2 batidas: inicio extra e saida extra. O sistema calcula apenas o que passar de ${esc(data.settings.workdayLimit)}.</span></div>
        <div class="field non-workday-field"><label>Inicio intervalo</label><input name="breakStart" type="time"></div>
        <div class="field non-workday-field"><label>Fim intervalo</label><input name="breakEnd" type="time"></div>
        <div class="field"><label>Saida extra</label><input name="end" type="time"></div>
      </div>
    </div>
  `;
}

function employeeOptions() {
  return data.employees
    .filter((employee) => employee.active)
    .map((employee) => `<option value="${esc(employee.name)}" data-function="${esc(employee.defaultFunction || "")}">${esc(employee.name)}</option>`)
    .join("");
}

function applyDefaultFunction(employeeSelect) {
  if (!employeeSelect) return;
  const block = employeeSelect.closest("[data-employee-block]");
  const functionSelect = block?.querySelector('[name="functionName"]');
  const functionName = employeeSelect.selectedOptions?.[0]?.dataset.function || "";
  if (!functionSelect || !functionName) return;
  setSelectValue(functionSelect, functionName);
}

function renderApprovals(user) {
  const status = user.role === "marllon" ? "waiting_marllon" : "waiting_jeferson";
  const items = allItems().filter((item) => item.status === status);
  return `
    <div class="page-head">
      <div><h1>Aprovacoes</h1><p>Itens aguardando sua validacao.</p></div>
      ${items.length ? `<div class="btn-row"><button class="btn success" data-action="approveAll">Aprovar todos</button><button class="btn danger" data-action="rejectAll">Reprovar todos</button></div>` : ""}
    </div>
    <section class="card">
      ${renderItemsTable(items, false, true)}
    </section>
  `;
}

function renderRejected() {
  const items = allItems().filter((item) => item.status.includes("rejected"));
  return `
    <div class="page-head">
      <div><h1>Reprovados</h1><p>Corrija os itens reprovados e envie novamente para Marllon.</p></div>
    </div>
    <section class="card">${renderItemsTable(items, false, false, true)}</section>
  `;
}

function renderSchedules() {
  const schedules = data.schedules.slice().reverse();
  const items = allItems();
  const now = new Date();
  const metricMode = data.settings.scheduleMetricMode || "total";
  const metricMonth = data.settings.scheduleMetricMonth || now.toISOString().slice(0, 7);
  const metricStart = data.settings.scheduleMetricStart || `${now.getFullYear()}-01-01`;
  const metricEnd = data.settings.scheduleMetricEnd || now.toISOString().slice(0, 10);
  const metricItems = filterMetricItems(items, metricMode, metricMonth, metricStart, metricEnd);
  const metric50 = metricItems.reduce((acc, item) => acc + item.minutes50, 0);
  const metric100 = metricItems.reduce((acc, item) => acc + item.minutes100, 0);
  const uniqueEmployees = new Set(metricItems.map((item) => item.employeeName)).size;
  const scheduleCardValues = {
    hours50: minutesToHours(metric50),
    hours100: minutesToHours(metric100),
    totalHours: minutesToHours(metric50 + metric100),
    employees: uniqueEmployees
  };
  const scheduleCards = (data.settings.scheduleCards || defaultData.settings.scheduleCards)
    .filter((card) => card.visible)
    .sort((a, b) => a.order - b.order);
  return `
    <div class="page-head">
      <div><h1>Programacoes</h1><p>Consulta geral de programacoes e status.</p></div>
      ${currentUser().role === "admin" ? `<button class="btn" data-action="editLayout">Editar layout</button>` : ""}
    </div>
    <section class="card chart-controls">
      <form id="scheduleMetricControls" class="form-grid">
        <div class="field"><label>Farol por</label><select name="scheduleMetricMode" data-auto="scheduleMetrics"><option value="total" ${metricMode === "total" ? "selected" : ""}>Total geral</option><option value="month" ${metricMode === "month" ? "selected" : ""}>Mes</option><option value="period" ${metricMode === "period" ? "selected" : ""}>Periodo</option></select></div>
        <div class="field ${metricMode === "month" ? "" : "hidden-field"}"><label>Mes</label><input name="scheduleMetricMonth" type="month" value="${esc(metricMonth)}" data-auto="scheduleMetrics"></div>
        <div class="field ${metricMode === "period" ? "" : "hidden-field"}"><label>Inicio</label><input name="scheduleMetricStart" type="date" value="${esc(metricStart)}" data-auto="scheduleMetrics"></div>
        <div class="field ${metricMode === "period" ? "" : "hidden-field"}"><label>Fim</label><input name="scheduleMetricEnd" type="date" value="${esc(metricEnd)}" data-auto="scheduleMetrics"></div>
      </form>
    </section>
    <section class="grid four">
      ${scheduleCards.map((card) => metric(card.label, scheduleCardValues[card.type] ?? "0", card.color, card.icon)).join("")}
    </section>
    <section class="card">
      <div class="table-wrap">
        <table>
          <thead><tr><th>Data</th><th>Projeto</th><th>Colaboradores</th><th>Horas 50%</th><th>Horas 100%</th><th>Total</th><th>Status</th><th>Acoes</th></tr></thead>
          <tbody>
            ${schedules.map((schedule) => {
              const minutes50 = schedule.items.reduce((a, b) => a + b.minutes50, 0);
              const minutes100 = schedule.items.reduce((a, b) => a + b.minutes100, 0);
              const total = minutes50 + minutes100;
              return `<tr>
                <td>${formatDate(schedule.date)} ${schedule.retroactive ? `<span class="badge blue">Retroativo</span>` : ""}</td>
                <td>${esc(schedule.project)}</td>
                <td>${schedule.items.length}</td>
                <td>${minutesToHours(minutes50)}</td>
                <td>${minutesToHours(minutes100)}</td>
                <td>${minutesToHours(total)}</td>
                <td>${scheduleStatusBadge(schedule)}</td>
                <td class="btn-row">
                  ${currentUser().role === "admin" && schedule.items.every((item) => item.status === "draft") ? `<button class="btn primary" data-action="sendDraft" data-id="${schedule.id}">Enviar</button>` : ""}
                  ${currentUser().role === "admin" ? `<button class="btn icon-action" title="Editar HE" data-action="editScheduleItem" data-id="${schedule.id}">✎ Editar HE</button>` : ""}
                  <button class="btn icon-action" title="Exportar" data-action="exportScheduleChoice" data-id="${schedule.id}">⇩ Exportar</button>
                </td>
              </tr>`;
            }).join("") || `<tr><td colspan="8">Nenhuma programacao cadastrada.</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderReports() {
  const filterType = data.settings.reportFilterType || "month";
  const employeeOptionsList = data.employees
    .filter((employee) => employee.active)
    .map((employee) => `<option value="${esc(employee.name)}">${esc(employee.name)}</option>`)
    .join("");
  return `
    <div class="page-head">
      <div><h1>Relatorios</h1><p>Gere relatorios em PDF e Excel com logos cadastradas.</p></div>
    </div>
    <section class="card">
      <form class="form-grid" data-form="report">
        <div class="field"><label>Tipo de relatorio</label><select name="reportType"><option value="summary">Somente contabilizacao de horas</option><option value="complete">Completo com aprovacoes</option></select></div>
        <div class="field"><label>Filtrar por</label><select name="filterType" data-auto="reportFilter"><option value="total" ${filterType === "total" ? "selected" : ""}>Total geral</option><option value="month" ${filterType === "month" ? "selected" : ""}>Mes</option><option value="day" ${filterType === "day" ? "selected" : ""}>Data especifica</option><option value="period" ${filterType === "period" ? "selected" : ""}>Periodo</option><option value="employee" ${filterType === "employee" ? "selected" : ""}>Funcionario</option><option value="year" ${filterType === "year" ? "selected" : ""}>Ano</option></select></div>
        <div class="field ${filterType === "day" ? "" : "hidden-field"}"><label>Data</label><input name="date" type="date" value="${new Date().toISOString().slice(0, 10)}"></div>
        <div class="field ${filterType === "month" ? "" : "hidden-field"}"><label>Mes</label><input name="month" type="month" value="${new Date().toISOString().slice(0, 7)}"></div>
        <div class="field ${filterType === "period" ? "" : "hidden-field"}"><label>Inicio</label><input name="start" type="date" value="${new Date().getFullYear()}-01-01"></div>
        <div class="field ${filterType === "period" ? "" : "hidden-field"}"><label>Fim</label><input name="end" type="date" value="${new Date().toISOString().slice(0, 10)}"></div>
        <div class="field ${filterType === "employee" ? "" : "hidden-field"}"><label>Funcionario</label><select name="employee"><option value="">Todos</option>${employeeOptionsList}</select></div>
        <div class="field ${filterType === "year" ? "" : "hidden-field"}"><label>Ano</label><input name="year" type="number" min="2026" value="${new Date().getFullYear()}"></div>
        <div class="field"><label>Formato</label><select name="format"><option value="pdf">PDF</option><option value="excel">Excel</option></select></div>
        <div class="field full"><button class="btn primary" type="submit">Gerar relatorio</button></div>
      </form>
    </section>
  `;
}

function renderCatalog(key, title, label) {
  const isEmployeeCatalog = key === "employees";
  return `
    <div class="page-head"><div><h1>${title}</h1><p>Cadastre, edite ou desative registros.</p></div></div>
    <section class="card">
      <form class="${isEmployeeCatalog ? "form-grid" : "btn-row"}" data-form="catalog" data-key="${key}">
        <input name="name" placeholder="${label}" required style="max-width:360px">
        ${isEmployeeCatalog ? `<select name="defaultFunction" required>${options(data.functions.filter((f) => f.active), "name")}</select>` : ""}
        <button class="btn primary" type="submit">Cadastrar</button>
      </form>
      <div class="table-wrap" style="margin-top:16px">
        <table>
          <thead><tr><th>Nome</th>${isEmployeeCatalog ? "<th>Funcao padrao</th>" : ""}<th>Status</th><th>Acoes</th></tr></thead>
          <tbody>
            ${data[key].map((item) => `<tr><td>${esc(item.name)}</td>${isEmployeeCatalog ? `<td>${esc(item.defaultFunction || "")}</td>` : ""}<td>${item.active ? "Ativo" : "Inativo"}</td><td class="btn-row"><button class="btn" data-action="toggleCatalog" data-key="${key}" data-id="${item.id}">${item.active ? "Desativar" : "Ativar"}</button><button class="btn" data-action="editCatalog" data-key="${key}" data-id="${item.id}">Editar</button></td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderUsers() {
  return `
    <div class="page-head"><div><h1>Usuarios</h1><p>Controle acessos, perfis e status.</p></div></div>
    <section class="card">
      <form class="form-grid" data-form="user">
        <div class="field"><label>Nome</label><input name="name" required></div>
        <div class="field"><label>E-mail</label><input name="email" type="email" required></div>
        <div class="field"><label>Senha</label><input name="password" value="123456" required></div>
        <div class="field"><label>Perfil</label><select name="role"><option value="viewer">Visualizador</option><option value="admin">Administradora</option><option value="marllon">Aprovador Marllon</option><option value="jeferson">Aprovador Jeferson</option></select></div>
        <div class="field full"><button class="btn primary" type="submit">Cadastrar usuario</button></div>
      </form>
      <div class="table-wrap" style="margin-top:16px">
        <table>
          <thead><tr><th>Nome</th><th>E-mail</th><th>Perfil</th><th>Status</th><th>Acoes</th></tr></thead>
          <tbody>${data.users.map((u) => `<tr><td>${esc(u.name)}</td><td>${esc(u.email)}</td><td>${roleLabel(u.role)}</td><td>${u.active ? "Ativo" : "Inativo"}</td><td><button class="btn" data-action="toggleUser" data-id="${u.id}">${u.active ? "Desativar" : "Ativar"}</button></td></tr>`).join("")}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderSettings() {
  const s = data.settings;
  const activeSection = activeSettingsSection();
  const tab = (id, label) => `<a href="#${id}" data-settings-tab="${id}" class="${activeSection === id ? "active" : ""}">${label}</a>`;
  const pageClass = (id, extra = "") => `card settings-card settings-page ${extra} ${activeSection === id ? "" : "hidden-field"}`;
  return `
    <div class="settings-shell">
      <div class="page-head settings-head"><div><h1>Configurações</h1><p>Personalize as informações e aparência do app.</p></div></div>
      <form class="grid settings-windows" data-form="settings">
        <div class="settings-tabs">
          ${tab("cfg-aparencia", "Aparencia e textos")}
          ${tab("cfg-logos", "Logos e imagens")}
          ${tab("cfg-cores", "Cores e tema")}
          ${tab("cfg-abas", "Abas")}
          ${tab("cfg-farol", "Farois")}
          ${tab("cfg-regras", "Regras")}
          ${tab("cfg-botoes-he", "Botoes HE")}
          ${tab("cfg-emails", "E-mails")}
        </div>
        <section class="${pageClass("cfg-aparencia", "settings-simple")}" id="cfg-aparencia">
          <div class="settings-section-head"><div><h3>Informações do app</h3><p class="muted">Edite os textos que aparecem no sistema.</p></div></div>
        <div class="form-grid">
          ${input("appName", "Nome do app", s.appName)}
          ${input("homeTitle", "Título da tela inicial", s.homeTitle)}
          ${input("homeSubtitle", "Subtitulo da tela inicial", s.homeSubtitle)}
          ${input("description", "Descrição do app", s.description, "textarea")}
          ${input("about", "Sobre o app", s.about, "textarea")}
          ${input("project", "Projeto", s.project)}
          ${input("contractor", "Contratada", s.contractor)}
          ${input("appVersion", "Versao", s.appVersion)}
          ${input("appAdmin", "Administradora", s.appAdmin)}
          ${input("intro", "Texto inicial", s.intro, "full")}
          <div class="field full hidden-field">${input("homeDescription", "Descrição da tela inicial", s.homeDescription)}</div>
        </div>
        <div class="settings-save inline"><button class="btn primary" type="submit">Salvar alteracoes</button></div>
        </section>
        <section class="${pageClass("cfg-logos")}" id="cfg-logos">
          <div class="section-title"><div><h3>Logos, imagens e simbolos</h3><p class="muted">Troque por texto, URL ou arquivo anexado</p></div></div>
          <div class="form-grid">
          ${fileSettingField("brandIcon", "Logo/simbolo do menu lateral", s.brandIcon, "Aparece no topo do menu lateral, ao lado do nome Facilita.")}
          ${fileSettingField("topActionIcon1", "Simbolo superior 1", s.topActionIcon1, "Aparece no canto superior direito, no primeiro botao redondo do cabecalho.")}
          ${fileSettingField("topActionIcon2", "Simbolo superior 2", s.topActionIcon2, "Reserva para o segundo simbolo superior quando usado no cabecalho.")}
          ${fileSettingField("defaultHeroImage", "Ilustracao padrao", s.defaultHeroImage, "Aparece no banner da tela inicial quando nao houver imagem inicial propria.")}
          <div class="field">
            <label>Imagem da tela inicial</label>
            <input type="file" accept="image/*" data-file-setting="homeImage">
            <input type="hidden" name="homeImage" value="${esc(s.homeImage)}">
            <span class="field-help">Aparece no banner de boas-vindas da tela Inicio.</span>
            <span class="muted">${s.homeImage ? "Imagem anexada." : "Nenhuma imagem anexada."}</span>
          </div>
          <div class="field">
            <label>Mostrar imagem na tela inicial</label>
            <select name="showHomeImage">
              <option value="false" ${!s.showHomeImage ? "selected" : ""}>Nao</option>
              <option value="true" ${s.showHomeImage ? "selected" : ""}>Sim</option>
            </select>
          </div>
          ${fileSettingField("logoErg", "Logo ERG dos relatorios", s.logoErg, "Aparece no canto esquerdo dos PDFs e relatorios impressos.")}
          ${fileSettingField("logoVale", "Logo Vale dos relatorios", s.logoVale, "Aparece no canto direito dos PDFs e relatorios impressos.")}
          </div>
        </section>
        <section class="${pageClass("cfg-cores")}" id="cfg-cores">
          <div class="section-title"><div><h3>Cores e tema</h3><p class="muted">Ajuste a paleta visual do aplicativo</p></div></div>
          <div class="form-grid color-grid">
          ${input("primary", "Cor principal", s.primary, "", "color")}
          ${input("secondary", "Cor secundaria", s.secondary, "", "color")}
          ${input("bgColor", "Cor do fundo", s.bgColor, "", "color")}
          ${input("surfaceColor", "Cor dos paineis", s.surfaceColor, "", "color")}
          ${input("textColor", "Cor dos textos", s.textColor, "", "color")}
          ${input("mutedColor", "Cor texto secundario", s.mutedColor, "", "color")}
          ${input("lineColor", "Cor das bordas", s.lineColor, "", "color")}
          ${input("successColor", "Cor verde", s.successColor, "", "color")}
          ${input("warningColor", "Cor amarela", s.warningColor, "", "color")}
          ${input("dangerColor", "Cor vermelha", s.dangerColor, "", "color")}
        </div>
      </section>
      <section class="${pageClass("cfg-abas")}" id="cfg-abas">
        <div class="section-title">
          <div><h3>Abas do app</h3><p class="muted">Altere nomes, simbolos e ordem de exibicao</p></div>
          <div class="btn-row">
            <button type="button" class="btn" data-action="openView" data-view="users">Usuarios</button>
            <button type="button" class="btn" data-action="openView" data-view="functions">Funcoes</button>
            <button type="button" class="btn" data-action="openView" data-view="employees">Funcionarios</button>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Ordem</th><th>Nome da aba</th><th>Simbolo/imagem</th><th>Tela</th><th>Mostrar</th></tr></thead>
            <tbody>
              ${renderNavItemRows()}
            </tbody>
          </table>
        </div>
      </section>
      <section class="${pageClass("cfg-farol")}" id="cfg-farol">
        <div class="section-title">
          <div><h3>Painel e farol</h3><p class="muted">Configure cards, icones e organizacao dos farois</p></div>
          <button type="button" class="btn" data-action="addDashboardCard">Adicionar card</button>
        </div>
        <div class="form-grid">
          ${input("recentTitle", "Nome do farol recente", s.recentTitle)}
          <div class="field">
            <label>Mostrar farol recente</label>
            <select name="recentVisible">
              <option value="true" ${s.recentVisible ? "selected" : ""}>Sim</option>
              <option value="false" ${!s.recentVisible ? "selected" : ""}>Nao</option>
            </select>
          </div>
          <div class="field">
            <label>Posicao do farol recente</label>
            <select name="recentPosition">
              <option value="after" ${s.recentPosition !== "before" ? "selected" : ""}>Depois dos cards</option>
              <option value="before" ${s.recentPosition === "before" ? "selected" : ""}>Antes dos cards</option>
            </select>
          </div>
        </div>
        <div class="table-wrap" style="margin-top:16px">
          <table>
            <thead><tr><th>Ordem</th><th>Nome</th><th>Icone</th><th>Tipo</th><th>Cor</th><th>Mostrar</th><th>Valor fixo</th><th>Acoes</th></tr></thead>
            <tbody id="dashboardCardRows">
              ${renderDashboardCardRows()}
            </tbody>
          </table>
        </div>
        <div class="section-title" style="margin-top:24px">
          <div><h3>Farois da pagina Programacoes</h3><p class="muted">Mude nome, simbolo, cor, ordem e visibilidade dos farois desta tela.</p></div>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Ordem</th><th>Nome</th><th>Icone</th><th>Tipo</th><th>Cor</th><th>Mostrar</th></tr></thead>
            <tbody>
              ${renderScheduleCardRows()}
            </tbody>
          </table>
        </div>
      </section>
      <section class="${pageClass("cfg-regras")}" id="cfg-regras">
        <div class="section-title"><div><h3>Regras e padroes</h3><p class="muted">Parametros gerais de calculo e operacao</p></div></div>
        <div class="form-grid">
          ${input("project", "Projeto padrao", s.project)}
          ${input("contractor", "Contratada padrao", s.contractor)}
          ${input("workdayLimit", "Limite dia util", s.workdayLimit, "", "time")}
          ${input("weekendLimit", "Limite sabado/feriado", s.weekendLimit, "", "time")}
          ${input("lunchMinutes", "Almoco padrao em minutos", s.lunchMinutes, "", "number")}
          ${input("lunchTolerance", "Tolerancia almoco em minutos", s.lunchTolerance, "", "number")}
          ${input("minDate", "Data minima", s.minDate, "", "date")}
        </div>
      </section>
      <section class="${pageClass("cfg-botoes-he")}" id="cfg-botoes-he">
        <div class="section-title"><div><h3>Botoes de HE</h3><p class="muted">Controle lugar, tamanho e cor dos botoes Lancar retroativa, Nova autorizacao e relatorios.</p></div></div>
        <div class="form-grid">
          <div class="field">
            <label>Lugar dos botoes</label>
            <select name="heActionPosition">
              <option value="below" ${s.heActionPosition !== "right" ? "selected" : ""}>Abaixo do texto</option>
              <option value="right" ${s.heActionPosition === "right" ? "selected" : ""}>Ao lado do titulo</option>
            </select>
          </div>
          <div class="field">
            <label>Tamanho dos botoes</label>
            <select name="heActionSize">
              <option value="small" ${s.heActionSize === "small" ? "selected" : ""}>Pequeno</option>
              <option value="normal" ${!s.heActionSize || s.heActionSize === "normal" ? "selected" : ""}>Normal</option>
              <option value="large" ${s.heActionSize === "large" ? "selected" : ""}>Grande</option>
            </select>
          </div>
          <div class="field">
            <label>Cor dos botoes principais</label>
            <select name="heActionColor">
              <option value="primary" ${!s.heActionColor || s.heActionColor === "primary" ? "selected" : ""}>Azul principal</option>
              <option value="secondary" ${s.heActionColor === "secondary" ? "selected" : ""}>Verde secundario</option>
              <option value="dark" ${s.heActionColor === "dark" ? "selected" : ""}>Escuro</option>
            </select>
          </div>
        </div>
      </section>
      <section class="${pageClass("cfg-emails")}" id="cfg-emails">
        <div class="section-title"><div><h3>E-mails</h3><p class="muted">Contatos usados nas notificacoes</p></div></div>
        <div class="form-grid">
          ${input("micheleEmail", "E-mail Michele", s.micheleEmail, "", "email")}
          ${input("marllonEmail", "E-mail Marllon", s.marllonEmail, "", "email")}
          ${input("jefersonEmail", "E-mail Jeferson", s.jefersonEmail, "", "email")}
        </div>
      </section>
      <div class="settings-save"><button class="btn primary" type="submit">Salvar alteracoes</button></div>
      <section class="settings-tip">
        <div><strong>♡ Dica</strong><br><span>As alterações são aplicadas automaticamente. Visualize o resultado no app.</span></div>
        <button type="button" class="btn" data-action="openView" data-view="dashboard">Abrir o app</button>
      </section>
    </form>
    </div>
  `;
}

function activeSettingsSection() {
  const allowed = ["cfg-aparencia", "cfg-logos", "cfg-cores", "cfg-abas", "cfg-farol", "cfg-regras", "cfg-botoes-he", "cfg-emails"];
  const current = String(location.hash || "").replace("#", "");
  return allowed.includes(current) ? current : "cfg-aparencia";
}

function input(name, label, value, extraClass = "", type = "text") {
  if (extraClass === "textarea") return `<div class="field"><label>${label}</label><textarea name="${name}">${esc(value)}</textarea></div>`;
  return `<div class="field ${extraClass}"><label>${label}</label><input name="${name}" type="${type}" value="${esc(value)}"></div>`;
}

function fileSettingField(name, label, value, help = "") {
  return `
    <div class="field">
      <label>${label}</label>
      <input name="${name}" value="${esc(value)}" placeholder="Texto, URL ou anexo">
      <input type="file" accept="image/*" data-file-setting="${name}">
      ${help ? `<span class="field-help">${esc(help)}</span>` : ""}
      <span class="muted">${value ? "Imagem/texto configurado." : "Nenhuma imagem configurada."}</span>
    </div>
  `;
}

function handleSettingFile(inputEl) {
  const file = inputEl.files?.[0];
  if (!file) return;
  const settingName = inputEl.dataset.fileSetting;
  const reader = new FileReader();
  reader.onload = () => {
    data.settings[settingName] = reader.result;
    saveData();
    showToast("Imagem anexada.");
    render();
  };
  reader.readAsDataURL(file);
}

function handleCardIconFile(inputEl) {
  const file = inputEl.files?.[0];
  if (!file) return;
  const row = inputEl.closest("[data-dashboard-card-row]");
  const iconInput = row?.querySelector('[name="cardIcon"]');
  if (!iconInput) return;
  const reader = new FileReader();
  reader.onload = () => {
    iconInput.value = reader.result;
    showToast("Icone anexado. Clique em Salvar configuracoes.");
  };
  reader.readAsDataURL(file);
}

function handleInlineFile(inputEl, targetSelector, rowSelector) {
  const file = inputEl.files?.[0];
  if (!file) return;
  const row = inputEl.closest(rowSelector);
  const target = row?.querySelector(targetSelector);
  if (!target) return;
  const reader = new FileReader();
  reader.onload = () => {
    target.value = reader.result;
    showToast("Imagem anexada. Clique em Salvar configuracoes.");
  };
  reader.readAsDataURL(file);
}

async function handleRetroPdf(inputEl) {
  const file = inputEl.files?.[0];
  if (!file) return;
  const form = inputEl.closest("form");
  const status = form?.querySelector("[data-pdf-status]");
  const setStatus = (message) => {
    if (status) status.textContent = message;
  };
  setStatus("Lendo PDF...");
  try {
    const text = await extractPdfText(file);
    const cleanText = text.replace(/\s+/g, " ").trim();
    const extracted = form.querySelector('[name="pdfExtractedText"]');
    const source = form.querySelector('[name="pdfSource"]');
    const attachment = form.querySelector('[name="attachment"]');
    if (extracted) extracted.value = cleanText || "Nao foi possivel encontrar texto no PDF.";
    if (source) source.value = file.name;
    if (attachment && !attachment.value) attachment.value = `PDF: ${file.name}`;
    if (!cleanText) {
      setStatus("PDF anexado, mas sem texto legivel. Se for escaneado como imagem, preencha manualmente.");
      return;
    }
    const parsed = parseRetroPdfText(cleanText);
    applyRetroPdfData(form, parsed);
    const found = [];
    if (parsed.date) found.push("data");
    if (parsed.employees.length) found.push(`${parsed.employees.length} funcionario(s)`);
    if (parsed.functionName) found.push("funcao");
    if (parsed.times.length) found.push("horarios");
    setStatus(found.length ? `PDF lido. Dados preenchidos: ${found.join(", ")}.` : "PDF lido, mas nao encontrei campos conhecidos. Confira o texto extraido.");
    showToast(found.length ? "Informacoes do PDF aplicadas ao lancamento." : "PDF lido. Confira o texto extraido.");
  } catch (error) {
    setStatus("Nao consegui ler esse PDF automaticamente. Tente outro PDF com texto selecionavel.");
    showToast("Nao foi possivel puxar dados do PDF.");
  }
}

async function extractPdfText(file) {
  const buffer = await file.arrayBuffer();
  if (window.pdfjsLib) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    const pdf = await window.pdfjsLib.getDocument({ data: buffer }).promise;
    const pages = [];
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();
      pages.push(content.items.map((item) => item.str).join(" "));
    }
    return pages.join("\n");
  }
  return fallbackPdfText(buffer);
}

function fallbackPdfText(buffer) {
  const raw = new TextDecoder("latin1").decode(buffer);
  return raw
    .replace(/\\[()\\]/g, " ")
    .replace(/[^\x20-\x7E\u00C0-\u00FF\n]/g, " ")
    .replace(/\s+/g, " ");
}

function parseRetroPdfText(text) {
  const normalized = normalizeText(text);
  const employees = data.employees
    .filter((employee) => employee.active && normalized.includes(normalizeText(employee.name)))
    .map((employee) => employee.name);
  const functionName = data.functions
    .filter((item) => item.active)
    .find((item) => normalized.includes(normalizeText(item.name)))?.name || "";
  const dateMatch = text.match(/\b(\d{1,2})[\/.-](\d{1,2})[\/.-](20\d{2})\b/) || text.match(/\b(20\d{2})-(\d{1,2})-(\d{1,2})\b/);
  const date = dateMatch ? normalizeDateMatch(dateMatch) : "";
  const times = [...text.matchAll(/\b([01]?\d|2[0-3])[:h]([0-5]\d)\b/gi)]
    .map((match) => `${String(match[1]).padStart(2, "0")}:${match[2]}`)
    .filter((time, index, list) => list.indexOf(time) === index);
  let dayType = "";
  if (normalized.includes("feriado")) dayType = "holiday";
  else if (normalized.includes("domingo")) dayType = "sunday";
  else if (normalized.includes("sabado")) dayType = "saturday";
  else if (normalized.includes("dia util") || normalized.includes("segunda") || normalized.includes("terca") || normalized.includes("quarta") || normalized.includes("quinta") || normalized.includes("sexta")) dayType = "workday";
  return { date, employees, functionName, times, dayType };
}

function normalizeDateMatch(match) {
  if (match[1].length === 4) {
    return `${match[1]}-${String(match[2]).padStart(2, "0")}-${String(match[3]).padStart(2, "0")}`;
  }
  return `${match[3]}-${String(match[2]).padStart(2, "0")}-${String(match[1]).padStart(2, "0")}`;
}

function applyRetroPdfData(form, parsed) {
  if (parsed.date) form.querySelector('[name="date"]').value = parsed.date;
  if (parsed.dayType) form.querySelector('[name="dayType"]').value = parsed.dayType;
  const employees = parsed.employees.length ? parsed.employees : [""];
  const wrap = form.querySelector("#employeeBlocks");
  while (wrap.children.length < employees.length) {
    wrap.insertAdjacentHTML("beforeend", employeeBlock(wrap.children.length, employeeOptions(), options(data.functions.filter((f) => f.active), "name")));
    applyDefaultFunction(wrap.lastElementChild?.querySelector('[name="employeeName"]'));
  }
  [...wrap.children].forEach((block, index) => {
    if (employees[index]) setSelectValue(block.querySelector('[name="employeeName"]'), employees[index]);
    if (parsed.functionName) setSelectValue(block.querySelector('[name="functionName"]'), parsed.functionName);
    applyTimesToBlock(block, parsed.times);
  });
}

function applyTimesToBlock(block, times) {
  if (!times.length) return;
  const fields = ["start", "breakStart", "breakEnd", "end"];
  const values = times.length >= 4 ? times.slice(0, 4) : [times[0], "", "", times[times.length - 1]];
  fields.forEach((name, index) => {
    if (values[index]) block.querySelector(`[name="${name}"]`).value = values[index];
  });
}

function setSelectValue(select, value) {
  if (!select || !value) return;
  const found = [...select.options].find((option) => normalizeText(option.value) === normalizeText(value));
  if (found) select.value = found.value;
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function renderDashboardCardRows() {
  return (data.settings.dashboardCards || [])
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((card) => `
      <tr data-dashboard-card-row data-id="${esc(card.id)}">
        <td><input name="cardOrder" type="number" min="1" value="${esc(card.order)}" style="width:82px"></td>
        <td><input name="cardLabel" value="${esc(card.label)}"></td>
        <td>
          <input name="cardIcon" value="${esc(card.icon || metricIcon(card.label))}" style="width:110px" placeholder="Texto/URL">
          <input type="file" accept="image/*" data-card-icon-file>
        </td>
        <td>
          <select name="cardType">
            ${dashboardTypeOptions(card.type)}
          </select>
        </td>
        <td>
          <select name="cardColor">
            ${dashboardColorOptions(card.color)}
          </select>
        </td>
        <td>
          <select name="cardVisible">
            <option value="true" ${card.visible ? "selected" : ""}>Sim</option>
            <option value="false" ${!card.visible ? "selected" : ""}>Nao</option>
          </select>
        </td>
        <td><input name="cardValue" value="${esc(card.value || "")}" placeholder="Para card manual"></td>
        <td><button type="button" class="btn danger" data-action="deleteDashboardCard" data-id="${esc(card.id)}">Apagar</button></td>
      </tr>
    `).join("");
}

function renderScheduleCardRows() {
  return (data.settings.scheduleCards || defaultData.settings.scheduleCards)
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((card) => `
      <tr data-schedule-card-row data-id="${esc(card.id)}">
        <td><input name="scheduleCardOrder" type="number" min="1" value="${esc(card.order)}" style="width:82px"></td>
        <td><input name="scheduleCardLabel" value="${esc(card.label)}"></td>
        <td><input name="scheduleCardIcon" value="${esc(card.icon || metricIcon(card.label))}" style="width:110px"></td>
        <td>
          <select name="scheduleCardType">
            <option value="hours50" ${card.type === "hours50" ? "selected" : ""}>Horas 50%</option>
            <option value="hours100" ${card.type === "hours100" ? "selected" : ""}>Horas 100%</option>
            <option value="totalHours" ${card.type === "totalHours" ? "selected" : ""}>Total de horas</option>
            <option value="employees" ${card.type === "employees" ? "selected" : ""}>Funcionarios</option>
          </select>
        </td>
        <td><select name="scheduleCardColor">${dashboardColorOptions(card.color)}</select></td>
        <td>
          <select name="scheduleCardVisible">
            <option value="true" ${card.visible ? "selected" : ""}>Sim</option>
            <option value="false" ${!card.visible ? "selected" : ""}>Nao</option>
          </select>
        </td>
      </tr>
    `).join("");
}

function renderNavItemRows() {
  const configured = data.settings.navItems || defaultData.settings.navItems;
  const keys = new Set(configured.map((item) => item.key));
  const merged = [
    ...configured,
    ...defaultData.settings.navItems.filter((item) => !keys.has(item.key))
  ];
  return merged
    .slice()
    .sort((a, b) => Number(a.order) - Number(b.order))
    .map((item) => `
      <tr data-nav-item-row data-key="${esc(item.key)}">
        <td><input name="navOrder" type="number" min="1" value="${esc(item.order)}" style="width:82px"></td>
        <td><input name="navLabel" value="${esc(item.label)}"></td>
        <td><input name="navIcon" value="${esc(item.icon || "")}" style="width:110px" placeholder="Texto/URL"><input type="file" accept="image/*" data-nav-icon-file></td>
        <td>${esc(navScreenLabel(item.key))}</td>
        <td><select name="navVisible"><option value="true" ${item.visible !== false ? "selected" : ""}>Sim</option><option value="false" ${item.visible === false ? "selected" : ""}>Nao</option></select></td>
      </tr>
    `).join("");
}

function navScreenLabel(key) {
  return {
    dashboard: "Tela inicial",
    heDashboard: "Horas extras",
    grdDashboard: "GRD",
    waterDashboard: "Agua",
    reports: "Relatorios",
    approvals: "Aprovacoes",
    schedules: "Programacoes",
    settings: "Configuracoes",
    about: "Sobre"
  }[key] || key;
}

function dashboardTypeOptions(selected) {
  const types = [
    ["monthHours", "Horas no mes"],
    ["yearHours", "Horas no ano"],
    ["totalHours", "Total geral"],
    ["hours50", "Horas 50%"],
    ["hours100", "Horas 100%"],
    ["approvedCount", "Aprovadas"],
    ["waitingMarllon", "Aguardando Marllon"],
    ["waitingJeferson", "Aguardando Jeferson"],
    ["rejectedCount", "Reprovadas"],
    ["todayHours", "Horas no dia"],
    ["custom", "Manual"]
  ];
  return types.map(([value, label]) => `<option value="${value}" ${selected === value ? "selected" : ""}>${label}</option>`).join("");
}

function dashboardColorOptions(selected) {
  const colors = [
    ["green", "Verde"],
    ["yellow", "Amarelo"],
    ["red", "Vermelho"]
  ];
  return colors.map(([value, label]) => `<option value="${value}" ${selected === value ? "selected" : ""}>${label}</option>`).join("");
}

function renderAbout() {
  return `
    <div class="page-head"><div><h1>Sobre</h1><p>Informacoes gerais do sistema.</p></div></div>
    <section class="card">
      <div class="report-header">
        ${logoSlot(data.settings.logoErg || "ERG")}
        <div><h2>${esc(data.settings.appName)}</h2><p>${esc(data.settings.description)}</p></div>
        ${logoSlot(data.settings.logoVale || "VALE")}
      </div>
      <p>${esc(data.settings.about)}</p>
      <p><strong>Projeto:</strong> ${esc(data.settings.project)}</p>
      <p><strong>Contratada:</strong> ${esc(data.settings.contractor)}</p>
      <p><strong>Versao:</strong> ${esc(data.settings.appVersion || "1.0 inicial")}</p>
      <p><strong>Administradora:</strong> ${esc(data.settings.appAdmin || "Michele Buril")}</p>
    </section>
  `;
}

function handleAction(event, action, dataset, user) {
  if (action === "openView") {
    currentView = dataset.view;
    render();
  }
  if (action === "goNew") {
    scheduleLaunchMode = "normal";
    currentView = "newSchedule";
    render();
  }
  if (action === "goRetro") {
    scheduleLaunchMode = "retro";
    currentView = "newSchedule";
    render();
  }
  if (action === "goNewGrd") {
    currentView = "newGrd";
    render();
  }
  if (action === "addEmployeeBlock") {
    const wrap = document.getElementById("employeeBlocks");
    wrap.insertAdjacentHTML("beforeend", employeeBlock(wrap.children.length, employeeOptions(), options(data.functions.filter((f) => f.active), "name")));
    applyDefaultFunction(wrap.lastElementChild?.querySelector('[name="employeeName"]'));
  }
  if (action === "removeEmployeeBlock") {
    const block = event.target.closest("[data-employee-block]");
    if (document.querySelectorAll("[data-employee-block]").length > 1) block.remove();
  }
  if (action === "approveItem") approveItem(dataset.scheduleId, dataset.itemId, user);
  if (action === "rejectItem") rejectItem(dataset.scheduleId, dataset.itemId, user);
  if (action === "approveAll") approveAll(user);
  if (action === "rejectAll") rejectAll(user);
  if (action === "fixItem") fixItem(dataset.scheduleId, dataset.itemId);
  if (action === "editHeItem") editHeItem(dataset.scheduleId, dataset.itemId);
  if (action === "editScheduleItem") editScheduleItem(dataset.id);
  if (action === "sendDraft") sendDraft(dataset.id);
  if (action === "toggleCatalog") toggleCatalog(dataset.key, dataset.id);
  if (action === "editCatalog") editCatalog(dataset.key, dataset.id);
  if (action === "toggleUser") toggleUser(dataset.id);
  if (action === "printSchedule") printSchedule(dataset.id);
  if (action === "exportSchedule") exportSchedule(dataset.id);
  if (action === "exportScheduleChoice") exportScheduleChoice(dataset.id);
  if (action === "exportHeItemChoice") exportHeItemChoice(dataset.scheduleId, dataset.itemId);
  if (action === "editLayout") {
    currentView = "settings";
    history.replaceState(null, "", "#cfg-farol");
    render();
  }
  if (action === "addDashboardCard") addDashboardCard();
  if (action === "deleteDashboardCard") deleteDashboardCard(dataset.id);
  if (action === "approveGrd") approveGrd(dataset.id, user);
  if (action === "pendGrd") pendGrd(dataset.id, user);
  if (action === "resendGrd") resendGrd(dataset.id);
  if (action === "scanGrd") scanGrd(dataset.id);
  if (action === "archiveGrd") archiveGrd(dataset.id);
  if (action === "editGrd") editGrd(dataset.id);
}

function handleForm(event, formName, user) {
  event.preventDefault();
  const form = event.target;
  const fd = new FormData(form);
  if (formName === "schedule") saveSchedule(form, fd, event.submitter?.value || "draft");
  if (formName === "catalog") addCatalog(form.dataset.key, fd);
  if (formName === "user") addUser(fd);
  if (formName === "settings") saveSettings(fd);
  if (formName === "report") generateReport(fd);
  if (formName === "grd") saveGrd(fd);
}

function saveSchedule(form, fd, submitType) {
  const date = fd.get("date");
  const today = new Date().toISOString().slice(0, 10);
  const retroactiveRequested = fd.get("retroactiveRequested") === "true";
  if (date < data.settings.minDate) {
    showToast(`Data minima permitida: ${formatDate(data.settings.minDate)}.`);
    return;
  }
  if (retroactiveRequested && date >= today) {
    showToast("Lancamento retroativo precisa ser de data passada.");
    return;
  }
  const dayType = fd.get("dayType");
  const retroactive = retroactiveRequested || date < today;
  const blocks = [...form.querySelectorAll("[data-employee-block]")];
  const items = [];
  for (const block of blocks) {
    const item = readEmployeeBlock(block, dayType, retroactive, submitType);
    if (item.error) {
      showToast(item.error);
      return;
    }
    items.push(item);
  }
  const schedule = {
    id: uid(),
    date,
    project: fd.get("project"),
    contractor: fd.get("contractor"),
    dayType,
    reason: fd.get("reason"),
    attachment: fd.get("attachment"),
    pdfSource: fd.get("pdfSource") || "",
    pdfExtractedText: fd.get("pdfExtractedText") || "",
    retroactive,
    createdAt: new Date().toISOString(),
    createdBy: currentUser().name,
    history: [
      historyLine(retroactive ? "Lancamento retroativo aprovado automaticamente" : submitType === "draft" ? "Rascunho criado" : "Enviado para aprovacao de Marllon")
    ],
    items
  };
  data.schedules.push(schedule);
  saveData();
  scheduleLaunchMode = "normal";
  showToast(retroactive ? "Programacao retroativa aprovada automaticamente." : submitType === "draft" ? "Rascunho salvo." : "Programacao enviada para Marllon.");
  currentView = "schedules";
  render();
}

function saveGrd(fd) {
  if (currentUser().role !== "admin") {
    showToast("Somente Michele/administradora pode lancar GRD.");
    return;
  }
  const os = String(fd.get("os") || "").trim();
  const testType = String(fd.get("testType") || "").trim();
  const protocol = String(fd.get("protocol") || "").trim();
  const quantity = Math.max(1, Number(fd.get("quantity") || 1));
  if (!os || !testType) {
    showToast("Informe OS e tipo de ensaio.");
    return;
  }
  if (testType !== "Caracterizacao" && !protocol) {
    showToast("Para ensaio comum, informe OS e protocolo.");
    return;
  }
  data.grds.push({
    id: uid(),
    company: fd.get("company"),
    testType,
    os,
    protocol,
    quantity,
    receivedDate: fd.get("receivedDate"),
    sentDate: fd.get("sentDate"),
    returnedDate: "",
    notes: fd.get("notes") || "",
    status: "waiting_marllon",
    scanned: false,
    archived: false,
    pendingReason: "",
    createdAt: new Date().toISOString(),
    createdBy: currentUser().name,
    history: [historyLine("GRD enviado para assinatura de Marllon")]
  });
  saveData();
  currentView = "grdDashboard";
  showToast("GRD lancado e enviado para Marllon assinar.");
  render();
}

function findGrd(id) {
  return (data.grds || []).find((item) => item.id === id);
}

function approveGrd(id, user) {
  const item = findGrd(id);
  if (!item) return;
  const comment = prompt("Comentario opcional da assinatura:") || "";
  if (user.role === "marllon" && item.status === "waiting_marllon") {
    item.status = "waiting_jeferson";
    item.marllonSignedAt = new Date().toISOString();
    item.marllonComment = comment;
    item.history.push(historyLine("GRD assinado por Marllon e enviado para Jeferson"));
    showToast("GRD assinado por Marllon e enviado para Jeferson.");
  } else if (user.role === "jeferson" && item.status === "waiting_jeferson") {
    item.status = "signed";
    item.jefersonSignedAt = new Date().toISOString();
    item.jefersonComment = comment;
    item.returnedDate = new Date().toISOString().slice(0, 10);
    item.history.push(historyLine("GRD assinado por Jeferson e devolvido para Michele"));
    showToast("GRD assinado por Jeferson. Agora falta escanear e arquivar.");
  }
  saveData();
  render();
}

function pendGrd(id, user) {
  const item = findGrd(id);
  if (!item) return;
  const reason = prompt("Motivo da pendencia:");
  if (!reason) {
    showToast("Motivo obrigatorio para pendencia.");
    return;
  }
  item.status = "pending";
  item.pendingReason = reason;
  item.pendingBy = user.name;
  item.pendingAt = new Date().toISOString();
  item.history.push(historyLine(`GRD pendente por ${user.name}. Motivo: ${reason}. Verificar com Gicele/Cleiton`));
  saveData();
  showToast("Pendencia registrada para Michele verificar com Gicele/Cleiton.");
  render();
}

function resendGrd(id) {
  const item = findGrd(id);
  if (!item) return;
  item.status = "waiting_marllon";
  item.pendingReason = "";
  item.history.push(historyLine("GRD corrigido e reenviado para Marllon"));
  saveData();
  showToast("GRD reenviado para Marllon.");
  render();
}

function scanGrd(id) {
  const item = findGrd(id);
  if (!item) return;
  item.scanned = true;
  item.scannedAt = new Date().toISOString();
  item.history.push(historyLine("GRD escaneado"));
  saveData();
  showToast("GRD marcado como escaneado.");
  render();
}

function archiveGrd(id) {
  const item = findGrd(id);
  if (!item) return;
  item.archived = true;
  item.archivedAt = new Date().toISOString();
  item.status = "archived";
  item.history.push(historyLine("GRD arquivado fisicamente"));
  saveData();
  showToast("GRD concluido e arquivado.");
  render();
}

function editGrd(id) {
  const item = findGrd(id);
  if (!item) return;
  const company = prompt("Empresa:", item.company);
  if (company === null) return;
  const testType = prompt("Tipo de ensaio:", item.testType);
  if (testType === null) return;
  const os = prompt("Numero da OS:", item.os);
  if (os === null) return;
  const protocol = prompt("Protocolo:", item.protocol || "");
  if (protocol === null) return;
  const quantity = prompt("Quantidade:", item.quantity || 1);
  if (quantity === null) return;
  item.company = company || item.company;
  item.testType = testType || item.testType;
  item.os = os || item.os;
  item.protocol = protocol || "";
  item.quantity = Math.max(1, Number(quantity || item.quantity || 1));
  item.history.push(historyLine("GRD editado por Michele"));
  saveData();
  showToast("GRD editado.");
  render();
}

function readEmployeeBlock(block, dayType, retroactive, submitType) {
  const get = (name) => block.querySelector(`[name="${name}"]`).value;
  const start = get("start");
  const breakStart = get("breakStart");
  const breakEnd = get("breakEnd");
  const end = get("end");
  const employeeName = get("employeeName");
  const functionName = get("functionName");
  const calc = calculateHours({ dayType, start, breakStart, breakEnd, end });
  return {
    id: uid(),
    employeeName,
    functionName,
    start,
    breakStart,
    breakEnd,
    end,
    minutes50: calc.minutes50 || 0,
    minutes100: calc.minutes100 || 0,
    totalMinutes: (calc.minutes50 || 0) + (calc.minutes100 || 0),
    status: retroactive ? "retro_approved" : submitType === "draft" ? "draft" : "waiting_marllon",
    comments: [],
    rejectedReason: ""
  };
}

function calculateHours({ dayType, start, breakStart, breakEnd, end }) {
  if (!end) return { minutes50: 0, minutes100: 0 };
  const endMin = toMin(end);
  if (dayType === "workday") {
    const limit = toMin(data.settings.workdayLimit);
    const startMin = start ? Math.max(toMin(start), limit) : limit;
    const minutes50 = Math.max(0, endMin - startMin);
    return { minutes50, minutes100: 0 };
  }
  if (!start || !end) return { minutes50: 0, minutes100: 0 };
  const lunch = breakStart && breakEnd ? Math.max(0, toMin(breakEnd) - toMin(breakStart)) : 0;
  const worked = Math.max(0, endMin - toMin(start) - lunch);
  if (dayType === "saturday") return { minutes50: worked, minutes100: 0 };
  return { minutes50: 0, minutes100: worked };
}

function approveItem(scheduleId, itemId, user) {
  const { schedule, item } = findItem(scheduleId, itemId);
  const comment = prompt("Comentario opcional de aprovacao:") || "";
  applyApproval(schedule, item, user, comment);
  saveData();
  showToast(user.role === "marllon" ? "Aprovado por Marllon. E-mail para Jeferson registrado." : "Aprovado por Jeferson.");
  render();
}

function applyApproval(schedule, item, user, comment = "") {
  if (user.role === "marllon") {
    item.status = "waiting_jeferson";
    item.marllonApprovedAt = new Date().toISOString();
    item.marllonComment = comment;
    schedule.history.push(historyLine(`Aprovado por Marllon: ${item.employeeName}`));
  } else {
    item.status = "approved";
    item.jefersonApprovedAt = new Date().toISOString();
    item.jefersonComment = comment;
    schedule.history.push(historyLine(`Aprovado por Jeferson: ${item.employeeName}`));
  }
}

function rejectItem(scheduleId, itemId, user) {
  const reason = prompt("Informe o motivo da reprovacao:");
  if (!reason) {
    showToast("Motivo obrigatorio para reprovar.");
    return;
  }
  const { schedule, item } = findItem(scheduleId, itemId);
  item.status = user.role === "marllon" ? "rejected_marllon" : "rejected_jeferson";
  item.rejectedReason = reason;
  item.rejectedBy = user.name;
  item.rejectedAt = new Date().toISOString();
  schedule.history.push(historyLine(`Reprovado por ${user.name}: ${item.employeeName}. Motivo: ${reason}`));
  saveData();
  showToast("Reprovacao registrada. E-mail para Michele registrado.");
  render();
}

function approveAll(user) {
  const targetStatus = user.role === "marllon" ? "waiting_marllon" : "waiting_jeferson";
  const comment = prompt("Comentario opcional para aprovacao em lote:") || "";
  let count = 0;
  data.schedules.forEach((schedule) => {
    schedule.items.filter((item) => item.status === targetStatus).forEach((item) => {
      applyApproval(schedule, item, user, comment);
      count += 1;
    });
  });
  saveData();
  showToast(`${count} item(ns) aprovado(s).`);
  render();
}

function rejectAll(user) {
  const reason = prompt("Informe o motivo da reprovacao em lote:");
  if (!reason) {
    showToast("Motivo obrigatorio para reprovar.");
    return;
  }
  const targetStatus = user.role === "marllon" ? "waiting_marllon" : "waiting_jeferson";
  let count = 0;
  data.schedules.forEach((schedule) => {
    schedule.items.filter((item) => item.status === targetStatus).forEach((item) => {
      item.status = user.role === "marllon" ? "rejected_marllon" : "rejected_jeferson";
      item.rejectedReason = reason;
      item.rejectedBy = user.name;
      item.rejectedAt = new Date().toISOString();
      schedule.history.push(historyLine(`Reprovado por ${user.name}: ${item.employeeName}. Motivo: ${reason}`));
      count += 1;
    });
  });
  saveData();
  showToast(`${count} item(ns) reprovado(s). E-mail para Michele registrado.`);
  render();
}

function sendDraft(scheduleId) {
  const schedule = data.schedules.find((s) => s.id === scheduleId);
  if (!schedule) return;
  schedule.items.forEach((item) => {
    if (item.status === "draft") item.status = "waiting_marllon";
  });
  schedule.history.push(historyLine("Rascunho enviado para aprovacao de Marllon"));
  saveData();
  showToast("Rascunho enviado para Marllon.");
  render();
}

function fixItem(scheduleId, itemId) {
  const { schedule, item } = findItem(scheduleId, itemId);
  const end = prompt("Nova saida:", item.end);
  if (!end) return;
  item.end = end;
  const calc = calculateHours({ dayType: schedule.dayType, start: item.start, breakStart: item.breakStart, breakEnd: item.breakEnd, end: item.end });
  if (calc.error) {
    showToast(calc.error);
    return;
  }
  item.minutes50 = calc.minutes50;
  item.minutes100 = calc.minutes100;
  item.totalMinutes = item.minutes50 + item.minutes100;
  item.status = "waiting_marllon";
  item.rejectedReason = "";
  schedule.history.push(historyLine(`Corrigido por Michele e reenviado para Marllon: ${item.employeeName}`));
  saveData();
  showToast("Item corrigido e reenviado para Marllon.");
  render();
}

function editHeItem(scheduleId, itemId) {
  const { schedule, item } = findItem(scheduleId, itemId);
  if (!schedule || !item) return;
  const employeeName = prompt("Funcionario:", item.employeeName);
  if (employeeName === null) return;
  const functionName = prompt("Funcao:", item.functionName);
  if (functionName === null) return;
  const start = prompt(schedule.dayType === "workday" ? "Inicio extra:" : "Inicio:", item.start || "");
  if (start === null) return;
  let breakStart = item.breakStart || "";
  let breakEnd = item.breakEnd || "";
  if (schedule.dayType !== "workday") {
    breakStart = prompt("Inicio intervalo:", item.breakStart || "");
    if (breakStart === null) return;
    breakEnd = prompt("Fim intervalo:", item.breakEnd || "");
    if (breakEnd === null) return;
  }
  const end = prompt(schedule.dayType === "workday" ? "Saida extra:" : "Saida:", item.end || "");
  if (end === null) return;
  item.employeeName = employeeName || item.employeeName;
  item.functionName = functionName || item.functionName;
  item.start = start || "";
  item.breakStart = schedule.dayType === "workday" ? "" : breakStart;
  item.breakEnd = schedule.dayType === "workday" ? "" : breakEnd;
  item.end = end || "";
  const calc = calculateHours({ dayType: schedule.dayType, start: item.start, breakStart: item.breakStart, breakEnd: item.breakEnd, end: item.end });
  item.minutes50 = calc.minutes50 || 0;
  item.minutes100 = calc.minutes100 || 0;
  item.totalMinutes = item.minutes50 + item.minutes100;
  schedule.history.push(historyLine(`HE editada por Michele: ${item.employeeName}`));
  saveData();
  showToast("Hora extra editada e recalculada.");
  render();
}

function editScheduleItem(scheduleId) {
  const schedule = data.schedules.find((s) => s.id === scheduleId);
  if (!schedule) return;
  if (schedule.items.length === 1) {
    editHeItem(schedule.id, schedule.items[0].id);
    return;
  }
  const list = schedule.items.map((item, index) => `${index + 1} - ${item.employeeName} (${minutesToHours(item.totalMinutes)})`).join("\n");
  const selected = Number(prompt(`Qual HE voce quer editar?\n${list}`));
  if (!selected || selected < 1 || selected > schedule.items.length) return;
  editHeItem(schedule.id, schedule.items[selected - 1].id);
}

function addCatalog(key, fd) {
  const name = String(fd.get("name") || "").trim();
  if (!name) return;
  const record = { id: uid(), name, active: true };
  if (key === "employees") record.defaultFunction = fd.get("defaultFunction") || "";
  data[key].push(record);
  saveData();
  showToast("Cadastro incluido.");
  render();
}

function toggleCatalog(key, id) {
  const item = data[key].find((i) => i.id === id);
  item.active = !item.active;
  saveData();
  render();
}

function editCatalog(key, id) {
  const item = data[key].find((i) => i.id === id);
  const name = prompt("Novo nome:", item.name);
  if (!name) return;
  item.name = name.trim();
  if (key === "employees") {
    const functionName = prompt("Funcao padrao:", item.defaultFunction || "");
    if (functionName !== null) item.defaultFunction = functionName.trim();
  }
  saveData();
  render();
}

function addUser(fd) {
  const email = fd.get("email").trim();
  if (data.users.some((u) => u.email === email)) {
    showToast("E-mail ja cadastrado.");
    return;
  }
  data.users.push({ id: uid(), name: fd.get("name"), email, password: fd.get("password"), role: fd.get("role"), active: true });
  saveData();
  showToast("Usuario cadastrado.");
  render();
}

function toggleUser(id) {
  const user = data.users.find((u) => u.id === id);
  user.active = !user.active;
  saveData();
  render();
}

function saveSettings(fd) {
  const simpleSettings = [
    "appName",
    "description",
    "intro",
    "about",
    "homeTitle",
    "homeSubtitle",
    "homeDescription",
    "homeImage",
    "heActionPosition",
    "heActionSize",
    "heActionColor",
    "brandIcon",
    "topActionIcon1",
    "topActionIcon2",
    "defaultHeroImage",
    "appSlug",
    "logoErg",
    "logoVale",
    "primary",
    "secondary",
    "bgColor",
    "surfaceColor",
    "textColor",
    "mutedColor",
    "lineColor",
    "successColor",
    "warningColor",
    "dangerColor",
    "project",
    "contractor",
    "workdayLimit",
    "weekendLimit",
    "lunchMinutes",
    "lunchTolerance",
    "minDate",
    "micheleEmail",
    "marllonEmail",
    "jefersonEmail",
    "recentTitle",
    "recentPosition"
  ];
  simpleSettings.forEach((key) => {
    if (fd.has(key)) data.settings[key] = fd.get(key);
  });
  data.settings.recentVisible = fd.get("recentVisible") === "true";
  data.settings.showHomeImage = fd.get("showHomeImage") === "true";
  data.settings.dashboardCards = [...document.querySelectorAll("[data-dashboard-card-row]")].map((row, index) => ({
    id: row.dataset.id || uid(),
    order: Number(row.querySelector('[name="cardOrder"]').value || index + 1),
    label: row.querySelector('[name="cardLabel"]').value.trim() || "Novo card",
    type: row.querySelector('[name="cardType"]').value,
    color: row.querySelector('[name="cardColor"]').value,
    icon: row.querySelector('[name="cardIcon"]').value.trim(),
    visible: row.querySelector('[name="cardVisible"]').value === "true",
    value: row.querySelector('[name="cardValue"]').value.trim()
  }));
  data.settings.scheduleCards = [...document.querySelectorAll("[data-schedule-card-row]")].map((row, index) => ({
    id: row.dataset.id || uid(),
    order: Number(row.querySelector('[name="scheduleCardOrder"]').value || index + 1),
    label: row.querySelector('[name="scheduleCardLabel"]').value.trim() || "Novo farol",
    type: row.querySelector('[name="scheduleCardType"]').value,
    color: row.querySelector('[name="scheduleCardColor"]').value,
    icon: row.querySelector('[name="scheduleCardIcon"]').value.trim(),
    visible: row.querySelector('[name="scheduleCardVisible"]').value === "true"
  }));
  data.settings.navItems = [...document.querySelectorAll("[data-nav-item-row]")].map((row, index) => ({
    key: row.dataset.key,
    order: Number(row.querySelector('[name="navOrder"]').value || index + 1),
    label: row.querySelector('[name="navLabel"]').value.trim() || navScreenLabel(row.dataset.key),
    icon: row.querySelector('[name="navIcon"]').value.trim(),
    visible: row.querySelector('[name="navVisible"]').value === "true"
  }));
  const settingsItem = data.settings.navItems.find((item) => item.key === "settings");
  if (settingsItem) settingsItem.visible = true;
  saveData();
  showToast("Configuracoes salvas.");
  render();
}

function addDashboardCard() {
  data.settings.dashboardCards = data.settings.dashboardCards || [];
  data.settings.dashboardCards.push({
    id: uid(),
    order: data.settings.dashboardCards.length + 1,
    label: "Novo card",
    type: "custom",
    color: "green",
    icon: "▤",
    visible: true,
    value: "0"
  });
  saveData();
  render();
}

function deleteDashboardCard(id) {
  data.settings.dashboardCards = (data.settings.dashboardCards || []).filter((card) => card.id !== id);
  saveData();
  render();
}

function generateReport(fd) {
  const items = filterItems(fd);
  if (fd.get("format") === "excel") {
    if (fd.get("reportType") === "summary") downloadSummaryCsv(items, `relatorio-horas-${Date.now()}.xls`);
    else downloadCsv(items, `relatorio-completo-${Date.now()}.xls`);
    return;
  }
  const html = reportHtml(items, fd.get("reportType"));
  const win = window.open("", "_blank");
  win.document.write(html);
  win.document.close();
  win.print();
}

function filterItems(fd) {
  const filterType = fd.get("filterType") || fd.get("period");
  const date = fd.get("date");
  const month = fd.get("month");
  const start = fd.get("start");
  const end = fd.get("end");
  const employee = fd.get("employee");
  const year = fd.get("year");
  return allItems().filter((item) => {
    if (filterType === "total") return true;
    if (filterType === "day") return item.date === date;
    if (filterType === "month") return item.date.startsWith(month);
    if (filterType === "period") return item.date >= start && item.date <= end;
    if (filterType === "employee") return !employee || item.employeeName === employee;
    return item.date.startsWith(String(year));
  });
}

function filterMetricItems(items, mode, month, start, end) {
  if (mode === "month") return items.filter((item) => item.date.startsWith(month));
  if (mode === "period") return items.filter((item) => item.date >= start && item.date <= end);
  return items;
}

function printSchedule(id) {
  const schedule = data.schedules.find((s) => s.id === id);
  const html = reportHtml(schedule.items.map((item) => ({ ...item, ...schedule, item })), "complete", schedule);
  const win = window.open("", "_blank");
  win.document.write(html);
  win.document.close();
  win.print();
}

function exportSchedule(id) {
  const schedule = data.schedules.find((s) => s.id === id);
  downloadCsv(schedule.items.map((item) => flatItem(schedule, item)), `programacao-${schedule.date}.xls`);
}

function exportScheduleChoice(id) {
  const option = prompt("Exportar como PDF ou Excel?", "PDF");
  if (!option) return;
  if (normalizeText(option).includes("excel") || normalizeText(option).includes("xls")) exportSchedule(id);
  else printSchedule(id);
}

function exportHeItemChoice(scheduleId, itemId) {
  const { schedule, item } = findItem(scheduleId, itemId);
  if (!schedule || !item) return;
  const option = prompt("Exportar esta HE como PDF ou Excel?", "PDF");
  if (!option) return;
  const row = { ...item, ...schedule, item };
  if (normalizeText(option).includes("excel") || normalizeText(option).includes("xls")) {
    downloadCsv([flatItem(schedule, item)], `he-${schedule.date}-${item.employeeName}.xls`);
    return;
  }
  const win = window.open("", "_blank");
  win.document.write(reportHtml([row], "complete", schedule));
  win.document.close();
  win.print();
}

function downloadCsv(items, filename) {
  const rows = [
    ["Data", "Funcionario", "Funcao", "Horas 50%", "Horas 100%", "Total", "Status"],
    ...items.map((item) => [item.date, item.employeeName, item.functionName, minutesToHours(item.minutes50), minutesToHours(item.minutes100), minutesToHours(item.totalMinutes), statusLabel(item.status)])
  ];
  const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(";")).join("\n");
  const blob = new Blob([csv], { type: "application/vnd.ms-excel;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function downloadSummaryCsv(items, filename) {
  const rows = [
    ["Funcionario", "Funcao", "Horas 50%", "Horas 100%", "Total", "Dias de extra", "Quantidade de dias"],
    ...summarizeByEmployee(items).map((row) => [row.employeeName, row.functionName, minutesToHours(row.minutes50), minutesToHours(row.minutes100), minutesToHours(row.totalMinutes), row.days.map(formatDate).join(", "), row.days.length])
  ];
  const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(";")).join("\n");
  const blob = new Blob([csv], { type: "application/vnd.ms-excel;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function summarizeByEmployee(items) {
  const map = new Map();
  items.forEach((item) => {
    if (!map.has(item.employeeName)) {
      map.set(item.employeeName, {
        employeeName: item.employeeName,
        functionName: item.functionName,
        minutes50: 0,
        minutes100: 0,
        totalMinutes: 0,
        days: new Set()
      });
    }
    const row = map.get(item.employeeName);
    row.minutes50 += Number(item.minutes50 || 0);
    row.minutes100 += Number(item.minutes100 || 0);
    row.totalMinutes += Number(item.totalMinutes || 0);
    if (item.totalMinutes > 0) row.days.add(item.date);
  });
  return [...map.values()]
    .map((row) => ({ ...row, days: [...row.days].sort() }))
    .sort((a, b) => a.employeeName.localeCompare(b.employeeName));
}

function reportHtml(items, type, schedule = null) {
  const title = type === "summary" ? "Relatorio de contabilizacao de horas" : "Relatorio completo de autorizacao";
  const total50 = items.reduce((a, i) => a + Number(i.minutes50 || i.item?.minutes50 || 0), 0);
  const total100 = items.reduce((a, i) => a + Number(i.minutes100 || i.item?.minutes100 || 0), 0);
  const summaryRows = summarizeByEmployee(items);
  const printCss = `
    body{font-family:Arial,sans-serif;color:#111;margin:0;padding:24px}
    .report-header{display:flex;align-items:center;justify-content:space-between;gap:16px;border-bottom:2px solid #111;padding-bottom:14px;margin-bottom:16px}
    .logo-slot{min-width:88px;min-height:44px;border:1px solid #bbb;display:grid;place-items:center;font-weight:700}
    table{width:100%;border-collapse:collapse;margin-top:16px}
    th,td{border:1px solid #ccc;padding:8px;text-align:left;font-size:12px}
    th{background:#f1f3f6}
  `;
  return `
    <!doctype html><html><head><meta charset="utf-8"><title>${title}</title><style>${printCss}</style></head>
    <body><main class="report-print">
      <div class="report-header">${logoSlot(data.settings.logoErg || "ERG")}<div><h1>${title}</h1><p>${esc(data.settings.project)} | ${esc(data.settings.contractor)}</p></div>${logoSlot(data.settings.logoVale || "VALE")}</div>
      <p><strong>Gerado em:</strong> ${new Date().toLocaleString("pt-BR")}</p>
      <p><strong>Horas 50%:</strong> ${minutesToHours(total50)} | <strong>Horas 100%:</strong> ${minutesToHours(total100)} | <strong>Total:</strong> ${minutesToHours(total50 + total100)}</p>
      ${schedule ? `<p><strong>Justificativa:</strong> ${esc(schedule.reason)}</p><p><strong>Historico:</strong><br>${schedule.history.map(esc).join("<br>")}</p>` : ""}
      ${type === "summary" ? `
        <table><thead><tr><th>Funcionario</th><th>Funcao</th><th>Horas 50%</th><th>Horas 100%</th><th>Total</th><th>Dias de extra</th><th>Qtd. dias</th></tr></thead>
        <tbody>${summaryRows.map((row) => `<tr><td>${esc(row.employeeName)}</td><td>${esc(row.functionName)}</td><td>${minutesToHours(row.minutes50)}</td><td>${minutesToHours(row.minutes100)}</td><td>${minutesToHours(row.totalMinutes)}</td><td>${row.days.map(formatDate).join(", ") || "-"}</td><td>${row.days.length}</td></tr>`).join("")}</tbody></table>
      ` : `
        <table><thead><tr><th>Data</th><th>Funcionario</th><th>Funcao</th><th>Inicio</th><th>Intervalo</th><th>Saida</th><th>50%</th><th>100%</th><th>Status</th></tr></thead>
      <tbody>${items.map((row) => {
        const item = row.item || row;
        return `<tr><td>${formatDate(row.date)}</td><td>${esc(item.employeeName)}</td><td>${esc(item.functionName)}</td><td>${item.start || "-"}</td><td>${item.breakStart || "-"} / ${item.breakEnd || "-"}</td><td>${item.end || "-"}</td><td>${minutesToHours(item.minutes50)}</td><td>${minutesToHours(item.minutes100)}</td><td>${statusLabel(item.status)}</td></tr>`;
      }).join("")}</tbody></table>
      `}
    </main></body></html>
  `;
}

function renderItemsTable(items, compact = false, approval = false, fix = false) {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Data</th><th>Funcionario</th><th>Funcao</th><th>Horas</th><th>Status</th>${compact ? "" : "<th>Justificativa</th>"}<th>Acoes</th></tr></thead>
        <tbody>
          ${items.map((item) => `<tr>
            <td>${formatDate(item.date)} ${item.retroactive ? `<span class="badge blue">Retroativo</span>` : ""}</td>
            <td>${esc(item.employeeName)}</td>
            <td>${esc(item.functionName)}</td>
            <td>50%: ${minutesToHours(item.minutes50)}<br>100%: ${minutesToHours(item.minutes100)}<br><strong>${minutesToHours(item.totalMinutes)}</strong></td>
            <td>${statusBadge(item.status)}</td>
            ${compact ? "" : `<td>${esc(item.reason || "")}${item.rejectedReason ? `<br><strong>Motivo:</strong> ${esc(item.rejectedReason)}` : ""}</td>`}
            <td class="btn-row">
              ${currentUser().role === "admin" ? `<button class="btn icon-action" title="Editar HE" data-action="editHeItem" data-schedule-id="${item.scheduleId}" data-item-id="${item.id}">✎ Editar</button>` : ""}
              <button class="btn icon-action" title="Exportar HE" data-action="exportHeItemChoice" data-schedule-id="${item.scheduleId}" data-item-id="${item.id}">⇩ Exportar</button>
              ${approval ? `<button class="btn success" data-action="approveItem" data-schedule-id="${item.scheduleId}" data-item-id="${item.id}">Aprovar</button><button class="btn danger" data-action="rejectItem" data-schedule-id="${item.scheduleId}" data-item-id="${item.id}">Reprovar</button>` : ""}
              ${fix ? `<button class="btn primary" data-action="fixItem" data-schedule-id="${item.scheduleId}" data-item-id="${item.id}">Corrigir</button>` : ""}
            </td>
          </tr>`).join("") || `<tr><td colspan="${compact ? 6 : 7}">Nenhum item encontrado.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function allItems() {
  return data.schedules.flatMap((schedule) => schedule.items.map((item) => flatItem(schedule, item)));
}

function flatItem(schedule, item) {
  return {
    ...item,
    scheduleId: schedule.id,
    date: schedule.date,
    project: schedule.project,
    contractor: schedule.contractor,
    reason: schedule.reason,
    retroactive: schedule.retroactive
  };
}

function findItem(scheduleId, itemId) {
  const schedule = data.schedules.find((s) => s.id === scheduleId);
  const item = schedule.items.find((i) => i.id === itemId);
  return { schedule, item };
}

function historyLine(text) {
  return `${new Date().toLocaleString("pt-BR")} - ${currentUser()?.name || "Sistema"} - ${text}`;
}

function scheduleStatusBadge(schedule) {
  const statuses = schedule.items.map((i) => i.status);
  if (statuses.every((s) => s === "approved" || s === "retro_approved")) return statusBadge(schedule.retroactive ? "retro_approved" : "approved");
  if (statuses.some((s) => s.includes("rejected"))) return statusBadge("part_rejected");
  if (statuses.every((s) => s === "draft")) return statusBadge("draft");
  return statusBadge("in_approval");
}

function statusBadge(status) {
  const color = status.includes("rejected") || status === "part_rejected" ? "red" : status.includes("waiting") || status === "in_approval" || status === "draft" ? "yellow" : "green";
  return `<span class="badge ${color}">${statusLabel(status)}</span>`;
}

function statusLabel(status) {
  return {
    draft: "Rascunho",
    waiting_marllon: "Aguardando Marllon",
    rejected_marllon: "Reprovado por Marllon",
    waiting_jeferson: "Aguardando Jeferson",
    rejected_jeferson: "Reprovado por Jeferson",
    approved: "Aprovado",
    retro_approved: "Retroativo aprovado",
    part_rejected: "Parcialmente reprovada",
    in_approval: "Em aprovacao",
    pending: "Pendente",
    signed: "Assinado",
    archived: "Arquivado"
  }[status] || status;
}

function options(list, labelKey) {
  return list.map((item) => `<option value="${esc(item[labelKey])}">${esc(item[labelKey])}</option>`).join("");
}

function logoSlot(value) {
  if (String(value).startsWith("http") || String(value).startsWith("data:")) return `<img src="${esc(value)}" alt="Logo" style="max-width:120px;max-height:58px">`;
  return `<div class="logo-slot">${esc(value)}</div>`;
}

function toMin(time) {
  if (!time) return 0;
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function minutesToHours(minutes) {
  if (typeof minutes === "number" && !Number.isInteger(minutes)) return minutes.toFixed(2);
  const total = Number(minutes || 0);
  const h = Math.floor(total / 60);
  const m = total % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function formatDate(date) {
  if (!date) return "";
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function showToast(message) {
  clearTimeout(toastTimer);
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toastTimer = setTimeout(() => toast.remove(), 3500);
}

render();



