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
    roleAccess: {
      admin: ["dashboard", "heDashboard", "grdDashboard", "waterDashboard", "reports", "approvals", "schedules", "newSchedule", "rejected", "about"],
      marllon: ["dashboard", "grdDashboard", "grdView", "about"],
      jeferson: ["dashboard", "grdDashboard", "grdView", "about"],
      viewer: ["dashboard", "grdDashboard", "grdView", "about"]
    },
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
    homeSummaryTitle: "Resumo do mes",
    homeSummaryMode: "month",
    homeSummaryDate: "",
    homeSummaryMonth: "",
    homeSummaryCards: [
      { id: "periodHours", label: "Horas", type: "periodHours", color: "blue", icon: "◷", visible: true, order: 1 },
      { id: "heCount", label: "HE lancadas", type: "heCount", color: "green", icon: "▣", visible: true, order: 2 },
      { id: "grdCount", label: "GRDs", type: "grdCount", color: "yellow", icon: "▤", visible: true, order: 3 },
      { id: "pendingCount", label: "Pendentes", type: "pendingCount", color: "purple", icon: "♙", visible: true, order: 4 }
    ],
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
let currentGrdViewId = "";
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
  value.grds = value.grds.map((grd) => {
    const current = { ...grd };
    if (current.status === "waiting_marllon") current.status = "waiting_michele";
    current.entries = normalizeGrdEntriesV2(current);
    current.quantity = current.entries.length || current.quantity || 1;
    if (current.micheleSignedAt == null && current.marllonSignedAt) current.micheleSignedAt = current.marllonSignedAt;
    if (current.micheleComment == null && current.marllonComment) current.micheleComment = current.marllonComment;
    current.status = aggregateGrdStatus(current);
    return current;
  });
  value.settings.scheduleCards = mergeConfigRows(defaultData.settings.scheduleCards, value.settings.scheduleCards || []);
  value.settings.dashboardCards = mergeConfigRows(defaultData.settings.dashboardCards, value.settings.dashboardCards || []);
  value.settings.homeSummaryCards = mergeConfigRows(defaultData.settings.homeSummaryCards, value.settings.homeSummaryCards || []);
  value.settings.roleAccess = normalizeRoleAccess(value.settings.roleAccess || {});
  value.settings.homeSummaryMode = value.settings.homeSummaryMode || defaultData.settings.homeSummaryMode;
  value.settings.homeSummaryTitle = value.settings.homeSummaryTitle || defaultData.settings.homeSummaryTitle;
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

function normalizeRoleAccess(savedAccess) {
  const defaults = defaultData.settings.roleAccess || {};
  return Object.fromEntries(["admin", "marllon", "jeferson", "viewer"].map((role) => {
    const saved = Array.isArray(savedAccess[role]) ? savedAccess[role] : defaults[role] || [];
    const forced = role === "admin"
      ? ["dashboard", "grdDashboard", "settings", "users", "employees", "functions", "newGrd", "newSchedule", "grdView"]
      : ["dashboard", "grdDashboard", "grdView"];
    return [role, [...new Set([...saved, ...forced])]];
  }));
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
    grdDashboard: ["admin", "marllon", "jeferson", "viewer"],
    waterDashboard: ["admin"],
    newSchedule: ["admin"],
    newGrd: ["admin"],
    grdView: ["admin", "marllon", "jeferson", "viewer"],
    approvals: ["marllon", "jeferson"],
    rejected: ["admin"],
    schedules: ["admin", "marllon", "jeferson"],
    reports: ["admin", "marllon", "jeferson"],
    employees: ["admin"],
    functions: ["admin"],
    users: ["admin"],
    settings: ["admin"],
    about: ["admin", "marllon", "jeferson", "viewer"]
  };
  const access = normalizeRoleAccess(data.settings.roleAccess || {})[user.role] || [];
  if (["settings", "users", "employees", "functions", "newGrd", "newSchedule"].includes(view)) return (map[view] || []).includes(user.role);
  return access.includes(view);
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
    dashboard: renderGrdManagerV2,
    heDashboard: renderHeDashboard,
    grdDashboard: renderGrdManagerV2,
    newGrd: renderGrdForm,
    grdView: renderGrdViewer,
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
      if (el.dataset.auto === "homeSummary") {
        const form = document.getElementById("homeSummaryControls");
        if (form) {
          const fd = new FormData(form);
          data.settings.homeSummaryMode = fd.get("homeSummaryMode");
          data.settings.homeSummaryDate = fd.get("homeSummaryDate");
          data.settings.homeSummaryMonth = fd.get("homeSummaryMonth");
          saveData();
          render();
        }
      }
      if (el.dataset.auto === "grdFilters") {
        applyGrdFilters();
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

function renderDashboardV2() {
  const user = currentUser();
  const items = allItems();
  const pending = items.filter((item) => item.status.includes("waiting") || item.status.includes("rejected"));
  const summary = homeSummaryData(items, data.grds || []);
  return `
    <section class="dashboard-welcome">
      <div>
        <h1>Ola, ${esc(firstName(user.name))}!</h1>
        <p>Acompanhe os indicadores principais por mes ou por dia.</p>
      </div>
    </section>
    <section class="quick-actions">
      ${currentUser().role === "admin" ? quickAction("+", "Registrar HE", "Nova hora extra", "goNew") : ""}
      ${currentUser().role !== "admin" ? quickAction("◫", "HE", "Consultar horas extras", "openView", "heDashboard") : ""}
      ${quickAction("✓", "Ver aprovacoes", "Pendencias", "openView", "approvals")}
      ${currentUser().role === "admin" ? quickAction("▤", "Gerar relatorio", "Exportar dados", "openView", "reports") : ""}
      ${currentUser().role === "admin" ? quickAction("□", "Programacoes", "Ver agenda", "openView", "schedules") : ""}
    </section>
    <section class="home-hero dashboard-hero card">
      <div>
        <span class="badge blue">Bem-vinda!</span>
        <h1>Controle inteligente,<br>decisoes mais rapidas.</h1>
        <p>Acompanhe horas extras, GRD, aprovacoes, relatorios e indicadores em um so lugar.</p>
      </div>
      ${homeHeroVisual()}
    </section>
    <section class="daily-summary card">
      <div class="section-title">
        <h3>${esc(data.settings.homeSummaryTitle || "Resumo do mes")}</h3>
        <form id="homeSummaryControls" class="summary-controls">
          <select name="homeSummaryMode" data-auto="homeSummary">
            <option value="month" ${summary.mode === "month" ? "selected" : ""}>Resumo do mes</option>
            <option value="day" ${summary.mode === "day" ? "selected" : ""}>Resumo do dia</option>
          </select>
          <input class="${summary.mode === "day" ? "" : "hidden-field"}" name="homeSummaryDate" type="date" value="${esc(summary.date)}" data-auto="homeSummary">
          <input class="${summary.mode === "month" ? "" : "hidden-field"}" name="homeSummaryMonth" type="month" value="${esc(summary.month)}" data-auto="homeSummary">
        </form>
      </div>
      <div class="grid four">
        ${summary.cards.map((card) => summaryCard(card.icon, card.label, homeSummaryValue(card, summary), card.sub, card.color)).join("")}
      </div>
      <div class="grid two chart-row summary-chart-row">
        ${barChart("Grafico do resumo", [
          ["HE", summary.heCount, "blue", summary.max],
          ["GRD", summary.grdCount, "yellow", summary.max],
          ["Pendentes", summary.pendingCount, "red", summary.max],
          ["Concluidos", summary.doneCount, "green", summary.max]
        ])}
        ${barChart("Horas HE", [
          ["50%", Math.round(summary.minutes50 / 60), "yellow", summary.maxHours],
          ["100%", Math.round(summary.minutes100 / 60), "red", summary.maxHours],
          ["Total", Math.round(summary.totalMinutes / 60), "green", summary.maxHours]
        ])}
      </div>
    </section>
    <section class="grid two home-lists">
      <article class="card">
        <div class="section-title"><h3>Aprovacoes pendentes</h3><button class="btn ghost" data-action="openView" data-view="approvals">Ver todas</button></div>
        ${pendingList(pending)}
      </article>
      <article class="card">
        <div class="section-title"><h3>Atividades recentes</h3><button class="btn ghost" data-action="openView" data-view="heDashboard">Ver todas</button></div>
        ${activityList(items)}
      </article>
    </section>
  `;
}

function homeSummaryData(items, grds) {
  const today = new Date().toISOString().slice(0, 10);
  const currentMonth = today.slice(0, 7);
  const mode = data.settings.homeSummaryMode || "month";
  const date = data.settings.homeSummaryDate || today;
  const month = data.settings.homeSummaryMonth || currentMonth;
  const periodItems = mode === "day" ? items.filter((item) => item.date === date) : items.filter((item) => item.date.startsWith(month));
  const periodGrds = mode === "day"
    ? grds.filter((item) => String(item.receivedDate || item.createdAt || "").slice(0, 10) === date)
    : grds.filter((item) => String(item.receivedDate || item.createdAt || "").slice(0, 7) === month);
  const pendingCount = periodItems.filter((item) => item.status.includes("waiting") || item.status.includes("rejected")).length + periodGrds.filter((item) => ["waiting_michele", "waiting_jeferson", "pending", "signed"].includes(item.status)).length;
  const doneCount = periodItems.filter((item) => item.status === "approved" || item.status === "retro_approved").length + periodGrds.filter((item) => item.status === "archived").length;
  const minutes50 = periodItems.reduce((acc, item) => acc + (item.minutes50 || 0), 0);
  const minutes100 = periodItems.reduce((acc, item) => acc + (item.minutes100 || 0), 0);
  const cards = (data.settings.homeSummaryCards || defaultData.settings.homeSummaryCards)
    .filter((card) => card.visible !== false)
    .sort((a, b) => Number(a.order) - Number(b.order))
    .map((card) => ({ ...card, sub: mode === "day" ? formatDate(date) : month }));
  return {
    mode,
    date,
    month,
    cards,
    heCount: periodItems.length,
    grdCount: periodGrds.length,
    pendingCount,
    doneCount,
    minutes50,
    minutes100,
    totalMinutes: minutes50 + minutes100,
    max: Math.max(periodItems.length, periodGrds.length, pendingCount, doneCount, 1),
    maxHours: Math.max(Math.round((minutes50 + minutes100) / 60), Math.round(minutes50 / 60), Math.round(minutes100 / 60), 1)
  };
}

function homeSummaryValue(card, summary) {
  const map = {
    periodHours: minutesToHours(summary.totalMinutes),
    hours50: minutesToHours(summary.minutes50),
    hours100: minutesToHours(summary.minutes100),
    heCount: summary.heCount,
    grdCount: summary.grdCount,
    pendingCount: summary.pendingCount,
    doneCount: summary.doneCount
  };
  return map[card.type] ?? "0";
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
      ["Aguard. Michele", 0, "yellow", "M"],
      ["Aguard. Jeferson", 0, "yellow", "J"],
      ["Pendentes", 0, "red", "!"],
      ["Aguard. digitalizacao", 0, "blue", "⇪"],
      ["Concluidos", 0, "green", "✓"]
    ],
    charts: [
      ["Farol GRD", [["Recebidos", 0, "gray", 1], ["Michele", 0, "yellow", 1], ["Jeferson", 0, "yellow", 1], ["Pendentes", 0, "red", 1], ["Concluidos", 0, "green", 1]]],
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
  const tracked = items.filter((item) => item.tracked === true).length;
  const checked = items.filter((item) => item.checked === true).length;
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
      ${metric("Aguard. Michele", count("waiting_michele"), "yellow", "M")}
      ${metric("Aguard. Jeferson", count("waiting_jeferson"), "yellow", "J")}
      ${metric("Pendentes", pending, "red", "!")}
      ${metric("Aguard. digitalizacao", waitingScan, "blue", "⇪")}
      ${metric("Concluidos", done, "green", "✓")}
      ${metric("Rastreados", tracked, "blue", "R")}
      ${metric("Conferidos", checked, "green", "C")}
    </section>
    <section class="grid two chart-row">
      ${barChart("Farol GRD", [
        ["Recebidos", items.length, "gray", max],
        ["Michele", count("waiting_michele"), "yellow", max],
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

function renderGrdManagerV2() {
  const allRows = grdEntries();
  const rows = filteredGrdEntries();
  const holderCount = (holder) => rows.filter(({ entry }) => normalizeText(entry.currentHolder) === normalizeText(holder)).length;
  const pending = rows.filter(({ entry }) => String(entry.status).startsWith("pending")).length;
  const waitingScan = rows.filter(({ entry }) => entry.status === "validated_jeferson").length;
  const done = rows.filter(({ entry }) => entry.status === "done").length;
  const tracked = rows.filter(({ entry }) => entry.tracked === true).length;
  const checked = rows.filter(({ entry }) => entry.checked === true).length;
  const max = Math.max(rows.length, 1);
  return `
    <div class="page-head">
      <div><h1>GRD</h1><p>Fluxo por OS: recebimento, validacao, assinatura, digitalizacao, arquivo e gargalos.</p></div>
      <div class="btn-row">
        ${currentUser().role === "admin" ? `<button class="btn primary" data-action="goNewGrd">+ Lancar GRD</button><button class="btn" data-action="editLayout">Editar layout</button>` : ""}
      </div>
    </div>
    ${currentUser().role === "admin" ? `
      <section class="card admin-shortcuts">
        <div class="section-title">
          <div><h3>Acessos da Michele</h3><span class="muted">Atalhos administrativos fora do GRD.</span></div>
          <div class="btn-row">
            <button class="btn" data-action="openView" data-view="heDashboard">HE</button>
            <button class="btn" data-action="openView" data-view="waterDashboard">Agua</button>
            <button class="btn" data-action="openView" data-view="schedules">Programacoes</button>
            <button class="btn" data-action="openView" data-view="settings">Configuracoes</button>
          </div>
        </div>
      </section>
    ` : ""}
    ${renderGrdFilters(allRows.length, rows.length)}
    <section class="grid three">
      ${metric("OS filtradas", rows.length, "gray", "□")}
      ${metric("Com Michele", holderCount("Michele"), "yellow", "M")}
      ${metric("Com Marllon", holderCount("Marllon"), "yellow", "M")}
      ${metric("Com Jeferson", holderCount("Jeferson"), "yellow", "J")}
      ${metric("Pendentes", pending, "red", "!")}
      ${metric("Aguard. digitalizacao", waitingScan, "blue", "D")}
      ${metric("Concluidas", done, "green", "✓")}
      ${metric("Rastreadas", tracked, "blue", "R")}
      ${metric("Conferidas", checked, "green", "C")}
    </section>
    <section class="grid two chart-row">
      ${barChart("Farol por responsavel", [
        ["Michele", holderCount("Michele"), "yellow", max],
        ["Marllon", holderCount("Marllon"), "yellow", max],
        ["Jeferson", holderCount("Jeferson"), "yellow", max],
        ["Pendentes", pending, "red", max],
        ["Concluidas", done, "green", max]
      ])}
      ${barChart("Prazos", grdDeadlineRowsV2(rows))}
      ${barChart("Por tipo de ensaio", grdTypeRows(rows))}
    </section>
    <section class="card" style="margin-top:16px">
      <div class="section-title">
        <div><h3>Registros por OS</h3><span class="muted">Busca OS, protocolo, tipo de ensaio, responsavel e gargalo</span></div>
        ${currentUser().role === "admin" ? `<button class="btn primary" data-action="goNewGrd">Novo GRD</button>` : ""}
      </div>
      ${renderGrdTableV2(rows)}
    </section>
  `;
}

function renderGrdFilters(total, filtered) {
  const filters = currentGrdFilters();
  const periodFieldClass = (name) => filters.period === name ? "" : "hidden-field";
  const statusOptions = [
    ["all", "Todos os status"],
    ["with_michele", "Com Michele"],
    ["awaiting_marllon_receipt", "Aguard. recebimento Marllon"],
    ["with_marllon", "Com Marllon"],
    ["validated_marllon", "Validada por Marllon"],
    ["pending_marllon", "Pendencia Marllon"],
    ["awaiting_jeferson_receipt", "Aguard. recebimento Jeferson"],
    ["with_jeferson", "Com Jeferson"],
    ["validated_jeferson", "Validada por Jeferson"],
    ["pending_jeferson", "Pendencia Jeferson"],
    ["scanned", "Digitalizada"],
    ["done", "Concluida"]
  ];
  return `
    <section class="card grd-filters">
      <div class="section-title">
        <div><h3>Filtros e busca</h3><span class="muted">${filtered} de ${total} OS exibidas</span></div>
        <div class="btn-row">
          <button class="btn primary" data-action="applyGrdFilters">Aplicar filtros</button>
          <button class="btn" data-action="resetGrdFilters">Limpar</button>
        </div>
      </div>
      <div class="form-grid compact" id="grdFilters">
        <div class="field">
          <label>Periodo</label>
          <select name="grdFilterPeriod" data-auto="grdFilters">
            <option value="month" ${filters.period === "month" ? "selected" : ""}>Mes</option>
            <option value="day" ${filters.period === "day" ? "selected" : ""}>Dia</option>
            <option value="custom" ${filters.period === "custom" ? "selected" : ""}>Periodo especifico</option>
          </select>
        </div>
        <div class="field ${periodFieldClass("day")}"><label>Dia</label><input name="grdFilterDate" type="date" value="${esc(filters.date)}" data-auto="grdFilters"></div>
        <div class="field ${periodFieldClass("month")}"><label>Mes</label><input name="grdFilterMonth" type="month" value="${esc(filters.month)}" data-auto="grdFilters"></div>
        <div class="field ${periodFieldClass("custom")}"><label>Inicio</label><input name="grdFilterStart" type="date" value="${esc(filters.start)}" data-auto="grdFilters"></div>
        <div class="field ${periodFieldClass("custom")}"><label>Fim</label><input name="grdFilterEnd" type="date" value="${esc(filters.end)}" data-auto="grdFilters"></div>
        <div class="field">
          <label>Responsavel atual</label>
          <select name="grdFilterHolder" data-auto="grdFilters">
            ${[["all", "Todos"], ["Michele", "Michele"], ["Marllon", "Marllon"], ["Jeferson", "Jeferson"], ["Arquivo", "Arquivo"]].map(([value, label]) => `<option value="${value}" ${filters.holder === value ? "selected" : ""}>${label}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>Status</label>
          <select name="grdFilterStatus" data-auto="grdFilters">
            ${statusOptions.map(([value, label]) => `<option value="${value}" ${filters.status === value ? "selected" : ""}>${label}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>Tipo de ensaio</label>
          <select name="grdFilterTestType" data-auto="grdFilters">
            <option value="all">Todos</option>
            ${grdTestOptions().map((name) => `<option value="${esc(name)}" ${filters.testType === name ? "selected" : ""}>${esc(name)}</option>`).join("")}
          </select>
        </div>
        <div class="field"><label>Buscar OS, protocolo, GRD ou empresa</label><input name="grdFilterQuery" value="${esc(filters.query)}" data-auto="grdFilters"></div>
      </div>
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
            <label>Lancamento retroativo?</label>
            <select name="retroactiveGrd">
              <option value="false">Nao, seguir fluxo normal</option>
              <option value="true">Sim, ja validado/assinado</option>
            </select>
            <span class="field-help">Retroativo entra sem aprovacao e fica pronto para digitalizar.</span>
          </div>
          <div class="field full">
            <label>OS do GRD</label>
            <span class="field-help">Cadastre OS por OS dentro do mesmo GRD. Cada OS pode ter empresa, protocolo e tipo de ensaio diferentes.</span>
            <div id="grdOsRows" class="grd-os-editor">
              ${grdOsInputRow(0)}
            </div>
            <button class="btn" type="button" data-action="addGrdOsRow">Adicionar outra OS</button>
          </div>
          ${input("notes", "Observacao geral do GRD", "", "textarea")}
        </div>
        <div class="btn-row">
          <button class="btn primary" type="submit">Salvar e enviar para Michele assinar</button>
          <button class="btn" type="button" data-action="openView" data-view="grdDashboard">Cancelar</button>
        </div>
      </form>
    </section>
  `;
}

function grdOsInputRow(index, entry = {}) {
  return `
    <div class="grd-os-input-row" data-grd-os-row>
      <div class="field"><label>OS</label><input name="entryOs" value="${esc(entry.os || "")}" placeholder="OS 02" required></div>
      <div class="field"><label>Empresa</label><input name="entryCompany" value="${esc(entry.company || "")}" placeholder="FIE, Salum, Fidens..." required></div>
      <div class="field"><label>Protocolo</label><input name="entryProtocol" value="${esc(entry.protocol || "")}" placeholder="Opcional"></div>
      <div class="field">
        <label>Tipo de ensaio</label>
        <select name="entryTestType">
          ${grdTestOptions().map((name) => `<option value="${esc(name)}" ${entry.testType === name ? "selected" : ""}>${esc(name)}</option>`).join("")}
        </select>
      </div>
      <button class="btn danger" type="button" data-action="removeGrdOsRow">Remover</button>
    </div>
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
        <thead><tr><th>Recebido</th><th>Empresa</th><th>Resumo dos documentos</th><th>Qtd</th><th>Status</th><th>Controle</th><th>Acoes</th></tr></thead>
        <tbody>
          ${items.map((item) => {
            const entries = normalizeGrdEntries(item);
            const first = entries[0] || {};
            return `<tr>
            <td>${formatDate(item.receivedDate)}</td>
            <td>${esc(item.company)}</td>
            <td>${esc(first.os || item.os || "-")} | ${esc(first.protocol || item.protocol || "-")} | ${esc(first.testType || item.testType || "-")}${entries.length > 1 ? `<br><span class="muted">+ ${entries.length - 1} documento(s)</span>` : ""}</td>
            <td>${esc(entries.length || item.quantity || 1)}</td>
            <td>${statusBadge(item.status)}</td>
            <td>
              Enviado: ${formatDate(item.sentDate)}<br>
              Retorno: ${formatDate(item.returnedDate) || "-"}<br>
              Digitalizado: ${item.scanned ? "Sim" : "Nao"}<br>
              Arquivo fisico: ${item.archived ? "Sim" : "Nao"}<br>
              Rastreado: ${item.tracked === true ? "Sim" : item.tracked === false ? "Nao" : "-"}<br>
              Conferencia: ${item.checked === true ? "Sim" : item.checked === false ? "Nao" : "-"}
              ${item.pendingReason ? `<br><strong>Motivo:</strong> ${esc(item.pendingReason)}<br><strong>Verificar:</strong> Gicele/Cleiton` : ""}
            </td>
            <td class="btn-row">
              <button class="btn" data-action="viewGrd" data-id="${item.id}">Abrir</button>
              ${currentUser().role === "admin" ? `<button class="btn" data-action="editGrd" data-id="${item.id}">Editar</button>` : ""}
              ${currentUser().role === "admin" ? `<button class="btn danger" data-action="deleteGrd" data-id="${item.id}">Apagar</button>` : ""}
              ${currentUser().role === "admin" && item.status === "waiting_michele" ? `<button class="btn success" data-action="approveGrd" data-id="${item.id}">Assinar</button><button class="btn danger" data-action="pendGrd" data-id="${item.id}">Pendente</button>` : ""}
              ${currentUser().role === "jeferson" && item.status === "waiting_jeferson" ? `<button class="btn success" data-action="approveGrd" data-id="${item.id}">Assinar</button><button class="btn danger" data-action="pendGrd" data-id="${item.id}">Pendente</button>` : ""}
              ${currentUser().role === "admin" && item.status === "pending" ? `<button class="btn primary" data-action="resendGrd" data-id="${item.id}">Reenviar</button>` : ""}
              ${currentUser().role === "admin" && item.status === "signed" && !item.scanned ? `<button class="btn" data-action="scanGrd" data-id="${item.id}">Digitalizado</button>` : ""}
              ${currentUser().role === "admin" && item.status === "signed" && item.scanned && !item.archived ? `<button class="btn success" data-action="archiveGrd" data-id="${item.id}">Mover p/ concluido</button>` : ""}
            </td>
          </tr>`;
          }).join("") || `<tr><td colspan="7">Nenhum GRD cadastrado.</td></tr>`}
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

function renderGrdTableV2(rows) {
  return `
    <div class="table-wrap">
      <table class="grd-os-table">
        <thead><tr><th>GRD</th><th>OS</th><th>Empresa</th><th>Protocolo / ensaio</th><th>Responsavel</th><th>Status</th><th>Gargalo</th><th>Acoes</th></tr></thead>
        <tbody>
          ${rows.map(({ grd, entry }) => `
            <tr>
              <td>${formatDate(grd.receivedDate)}<br><span class="muted">${esc(grd.id.slice(-6).toUpperCase())}</span></td>
              <td><strong>${esc(entry.os || "-")}</strong></td>
              <td>${esc(entry.company || grd.company || "-")}</td>
              <td>${esc(entry.protocol || "-")}<br><span class="muted">${esc(entry.testType || "-")}</span></td>
              <td>${esc(entry.currentHolder || "-")}${entry.locationNote ? `<br><span class="muted">${esc(entry.locationNote)}</span>` : ""}</td>
              <td>${grdEntryBadge(entry.status)}${entry.pendingReason ? `<br><span class="muted">${esc(entry.pendingReason)}</span>` : ""}</td>
              <td>${daysInCurrentStep(entry, grd)} dia(s)<br><span class="muted">desde ${formatDate(String(grdStatusDate(entry) || grd.receivedDate || "").slice(0, 10)) || "-"}</span></td>
              <td class="btn-row"><button class="btn" data-action="viewGrd" data-id="${grd.id}">Abrir</button></td>
            </tr>
          `).join("") || `<tr><td colspan="8">Nenhuma OS encontrada para os filtros.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function grdDeadlineRowsV2(rows) {
  const counters = { ok: 0, near: 0, late: 0 };
  rows.filter(({ entry }) => entry.status !== "done").forEach(({ grd, entry }) => {
    const days = daysInCurrentStep(entry, grd);
    if (days >= 3) counters.late += 1;
    else if (days >= 1) counters.near += 1;
    else counters.ok += 1;
  });
  const max = Math.max(counters.ok, counters.near, counters.late, 1);
  return [["No prazo", counters.ok, "green", max], ["Atencao", counters.near, "yellow", max], ["Vencidas", counters.late, "red", max]];
}

function grdTypeRows(rows) {
  const totals = {};
  rows.forEach(({ entry }) => {
    const key = entry.testType || "Sem tipo";
    totals[key] = (totals[key] || 0) + 1;
  });
  const list = Object.entries(totals).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const max = Math.max(...list.map(([, value]) => value), 1);
  return list.length ? list.map(([label, value], index) => [label, value, ["green", "blue", "yellow", "red", "gray", "green"][index], max]) : [["Sem dados", 0, "gray", 1]];
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

function grdCourierNames() {
  return [
    "Michele Buril",
    "Andre Lima da Silva",
    "Cleiton Vieira de Resende",
    "Gicele Ramos",
    "Hudson de Souza Vilela",
    "Iury Jesus Silva",
    "Joao Vitor Santos Leite",
    "Ulisses Eduardo Stanley Souza",
    "Wanessa Cristina Dias",
    "Willian Jorge Lopes Neri"
  ];
}

function grdCourierOptions(selected = "Michele Buril") {
  return grdCourierNames().map((name) => `<option value="${esc(name)}" ${selected === name ? "selected" : ""}>${esc(name)}</option>`).join("");
}

function parseGrdEntries(text, fallback) {
  const lines = String(text || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (lines.length) {
    return lines.map((line, index) => {
      const match = line.match(/^(OS\s*)?([^-\s]+)\s*[-–]\s*(.+)$/i);
      return {
        id: uid(),
        os: match ? `OS ${match[2]}` : fallback.os || `Item ${index + 1}`,
        description: match ? match[3].trim() : line
      };
    });
  }
  const total = Math.max(1, Number(fallback.quantity || 1));
  return Array.from({ length: total }, (_, index) => ({
    id: uid(),
    os: fallback.os ? `${fallback.os}${total > 1 ? `.${index + 1}` : ""}` : `Item ${index + 1}`,
    description: fallback.protocol || fallback.testType || "-"
  }));
}

function normalizeGrdEntries(item) {
  if (Array.isArray(item.entries) && item.entries.length) {
    return item.entries.map((entry, index) => ({
      id: entry.id || uid(),
      os: entry.os || item.os || `Item ${index + 1}`,
      description: entry.description || entry.protocol || item.protocol || item.testType || "-"
    }));
  }
  return parseGrdEntries("", {
    os: item.os,
    protocol: item.protocol,
    testType: item.testType,
    quantity: item.quantity
  });
}

function parseGrdEntriesV2(text, fallback) {
  const lines = String(text || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (lines.length) {
    return lines.map((line, index) => {
      const parts = line.split("|").map((part) => part.trim());
      const legacyMatch = line.match(/^(OS\s*)?([^-\s]+)\s*[-–]\s*(.+)$/i);
      const os = parts.length >= 3 ? parts[0] : legacyMatch ? `OS ${legacyMatch[2]}` : fallback.os || `Item ${index + 1}`;
      const protocol = parts.length >= 3 ? parts[1] : fallback.protocol || "";
      const testType = parts.length >= 4 ? parts[2] : parts.length >= 3 ? parts.slice(2).join(" | ") : legacyMatch ? legacyMatch[3].trim() : fallback.testType || line;
      const company = parts.length >= 4 ? parts.slice(3).join(" | ") : fallback.company || "";
      return {
        id: uid(),
        os,
        company,
        protocol,
        testType,
        description: [company, protocol, testType].filter(Boolean).join(" - ") || "-"
      };
    });
  }
  return [{
    id: uid(),
    os: fallback.os || "",
    company: fallback.company || "",
    protocol: fallback.protocol || "",
    testType: fallback.testType || "",
    description: [fallback.protocol, fallback.testType].filter(Boolean).join(" - ") || "-"
  }];
}

function normalizeGrdEntriesV2(item) {
  const oldEntries = Array.isArray(item.entries) && item.entries.length ? item.entries : parseGrdEntriesV2("", item);
  return oldEntries.map((entry, index) => {
    const company = entry.company || item.company || "";
    const protocol = entry.protocol || item.protocol || "";
    const testType = entry.testType || entry.description || item.testType || "";
    const status = entry.status || legacyGrdEntryStatus(item);
    const holder = entry.currentHolder || grdHolderFromStatus(status);
    return {
      id: entry.id || uid(),
      os: entry.os || item.os || `Item ${index + 1}`,
      company,
      protocol,
      testType,
      description: [company, protocol, testType].filter(Boolean).join(" - ") || entry.description || "-",
      status,
      currentHolder: holder,
      locationNote: entry.locationNote || "",
      pendingReason: entry.pendingReason || "",
      marllonDeliveredAt: entry.marllonDeliveredAt || item.marllonDeliveredAt || "",
      marllonReceiptAt: entry.marllonReceiptAt || "",
      marllonReturnedAt: entry.marllonReturnedAt || item.marllonSignedAt || "",
      jefersonDeliveredAt: entry.jefersonDeliveredAt || item.jefersonDeliveredAt || "",
      jefersonReceiptAt: entry.jefersonReceiptAt || "",
      jefersonReturnedAt: entry.jefersonReturnedAt || item.jefersonSignedAt || "",
      scannedAt: entry.scannedAt || item.scannedAt || "",
      archivedAt: entry.archivedAt || item.archivedAt || "",
      tracked: entry.tracked ?? item.tracked ?? null,
      checked: entry.checked ?? item.checked ?? null,
      history: Array.isArray(entry.history) ? entry.history : []
    };
  });
}

parseGrdEntries = parseGrdEntriesV2;
normalizeGrdEntries = normalizeGrdEntriesV2;

function legacyGrdEntryStatus(item) {
  if (item.status === "archived" || item.archived) return "done";
  if (item.scanned) return "scanned";
  if (item.status === "signed") return "validated_jeferson";
  if (item.status === "waiting_jeferson") return "awaiting_jeferson_receipt";
  if (item.status === "pending") return item.pendingBy && String(item.pendingBy).toLowerCase().includes("jeferson") ? "pending_jeferson" : "pending_marllon";
  return "with_michele";
}

function grdHolderFromStatus(status) {
  if (String(status).includes("marllon")) return "Marllon";
  if (String(status).includes("jeferson")) return "Jeferson";
  if (["scanned", "done"].includes(status)) return "Arquivo";
  return "Michele";
}

function ensureGrdItem(item) {
  item.entries = normalizeGrdEntries(item);
  item.quantity = item.entries.length;
  item.status = aggregateGrdStatus(item);
  item.history = Array.isArray(item.history) ? item.history : [];
  return item;
}

function aggregateGrdStatus(item) {
  const statuses = normalizeGrdEntries(item).map((entry) => entry.status);
  if (!statuses.length) return "empty";
  if (statuses.every((status) => status === "done")) return "archived";
  if (statuses.some((status) => String(status).startsWith("pending"))) return "pending";
  if (statuses.some((status) => status === "with_jeferson" || status === "awaiting_jeferson_receipt")) return "waiting_jeferson";
  if (statuses.some((status) => status === "with_marllon" || status === "awaiting_marllon_receipt")) return "waiting_marllon";
  if (statuses.some((status) => status === "with_michele" || status === "validated_marllon")) return "waiting_michele";
  if (statuses.some((status) => status === "validated_jeferson")) return "signed";
  if (statuses.some((status) => status === "scanned")) return "signed";
  return statuses[0];
}

function grdEntries() {
  return (data.grds || []).flatMap((grd) => {
    ensureGrdItem(grd);
    return grd.entries.map((entry) => ({ grd, entry }));
  });
}

function grdEntryStatusLabel(status) {
  return {
    with_michele: "Com Michele",
    awaiting_marllon_receipt: "Aguard. recebimento Marllon",
    with_marllon: "Com Marllon",
    validated_marllon: "Validada por Marllon",
    pending_marllon: "Pendencia Marllon",
    awaiting_jeferson_receipt: "Aguard. recebimento Jeferson",
    with_jeferson: "Com Jeferson",
    validated_jeferson: "Validada por Jeferson",
    pending_jeferson: "Pendencia Jeferson",
    scanned: "Digitalizada",
    done: "Concluida"
  }[status] || statusLabel(status);
}

function grdEntryBadge(status) {
  const color = String(status).startsWith("pending") ? "red" : ["done", "scanned", "validated_jeferson"].includes(status) ? "green" : String(status).startsWith("awaiting") ? "blue" : "yellow";
  return `<span class="badge ${color}">${grdEntryStatusLabel(status)}</span>`;
}

function grdStatusDate(entry) {
  return entry.archivedAt || entry.scannedAt || entry.jefersonReturnedAt || entry.jefersonReceiptAt || entry.jefersonDeliveredAt || entry.marllonReturnedAt || entry.marllonReceiptAt || entry.marllonDeliveredAt || "";
}

function daysInCurrentStep(entry, grd) {
  const raw = grdStatusDate(entry) || grd.receivedDate || grd.createdAt;
  if (!raw) return 0;
  const date = new Date(String(raw).length <= 10 ? `${raw}T00:00:00` : raw);
  if (Number.isNaN(date.getTime())) return 0;
  return Math.max(0, Math.floor((new Date() - date) / 86400000));
}

function isGrdEntryInPeriod(grd, entry, filters) {
  const base = String(grd.receivedDate || grd.createdAt || "").slice(0, 10);
  if (!base) return true;
  if (filters.period === "day") return base === filters.date;
  if (filters.period === "month") return base.slice(0, 7) === filters.month;
  if (filters.period === "custom") return (!filters.start || base >= filters.start) && (!filters.end || base <= filters.end);
  return true;
}

function currentGrdFilters() {
  const now = new Date();
  return {
    period: data.settings.grdFilterPeriod || "month",
    date: data.settings.grdFilterDate || now.toISOString().slice(0, 10),
    month: data.settings.grdFilterMonth || now.toISOString().slice(0, 7),
    start: data.settings.grdFilterStart || `${now.getFullYear()}-01-01`,
    end: data.settings.grdFilterEnd || now.toISOString().slice(0, 10),
    holder: data.settings.grdFilterHolder || "all",
    status: data.settings.grdFilterStatus || "all",
    testType: data.settings.grdFilterTestType || "all",
    query: data.settings.grdFilterQuery || ""
  };
}

function filteredGrdEntries() {
  const filters = currentGrdFilters();
  const query = normalizeText(filters.query);
  return grdEntries().filter(({ grd, entry }) => {
    if (!isGrdEntryInPeriod(grd, entry, filters)) return false;
    if (filters.holder !== "all" && normalizeText(entry.currentHolder) !== normalizeText(filters.holder)) return false;
    if (filters.status !== "all" && entry.status !== filters.status) return false;
    if (filters.testType !== "all" && entry.testType !== filters.testType) return false;
    if (query) {
      const haystack = normalizeText([entry.os, entry.protocol, entry.testType, entry.company, grd.company, grd.id].join(" "));
      if (!haystack.includes(query)) return false;
    }
    return true;
  });
}

function renderGrdViewer() {
  const item = findGrd(currentGrdViewId);
  if (!item) {
    return `<div class="page-head"><div><h1>GRD nao encontrado</h1><p>O registro selecionado nao esta mais disponivel.</p></div><button class="btn" data-action="openView" data-view="grdDashboard">Voltar</button></div>`;
  }
  ensureGrdItem(item);
  const entries = normalizeGrdEntries(item);
  const pages = chunk(entries, 13);
  const companies = [...new Set(entries.map((entry) => entry.company).filter(Boolean))];
  return `
    <div class="page-head grd-view-head">
      <div><h1>Guia GRD</h1><p>${entries.length} OS - ${companies.length > 1 ? "empresas variadas" : esc(companies[0] || item.company || "sem empresa")}</p></div>
      <div class="btn-row">
        <button class="btn" data-action="openView" data-view="grdDashboard">Voltar</button>
        <button class="btn primary" data-action="printGrd">Imprimir A4</button>
      </div>
    </div>
    ${renderGrdFlowPanel(item)}
    ${renderGrdOsWorkPanel(item)}
    <div class="grd-print-wrap">
      ${pages.map((pageEntries, pageIndex) => renderGrdA4Page(item, pageEntries, pageIndex + 1, pages.length)).join("")}
    </div>
  `;
}

function renderGrdFlowPanel(item) {
  const entries = normalizeGrdEntries(item);
  const role = currentUser().role;
  const canAdmin = role === "admin";
  const canMarllon = role === "marllon";
  const canJeferson = role === "jeferson";
  return `
    <section class="card grd-flow-panel">
      <div class="section-title">
        <div><h3>Fluxo e evidencias</h3><span class="muted">Recebimento e devolucao ficam registrados com data e hora.</span></div>
      </div>
      <div class="flow-steps">
        ${["Michele", "Marllon", "Jeferson", "Digitalizacao", "Arquivo"].map((label) => `<span>${label}</span>`).join("")}
      </div>
      ${canAdmin ? `
        <div class="form-grid compact grd-courier-panel" id="grdCourierPanel">
          <div class="field">
            <label>Quem levou para mesa/entrega</label>
            <select name="grdDeliveredBy">${grdCourierOptions()}</select>
          </div>
          <div class="field">
            <label>Quem buscou na mesa</label>
            <select name="grdPickedUpBy">${grdCourierOptions()}</select>
          </div>
        </div>
      ` : ""}
      <div class="btn-row">
        ${canAdmin && entries.some((entry) => ["with_michele", "pending_marllon"].includes(entry.status)) ? `<button class="btn primary" data-action="deliverGrd" data-id="${item.id}" data-person="marllon" data-mode="presencial">Entregar p/ Marllon</button><button class="btn" data-action="deliverGrd" data-id="${item.id}" data-person="marllon" data-mode="mesa">Deixei na mesa Marllon</button>` : ""}
        ${canMarllon && entries.some((entry) => entry.status === "awaiting_marllon_receipt") ? `<button class="btn success" data-action="confirmGrdReceipt" data-id="${item.id}" data-person="marllon">Confirmo recebimento de todas</button>` : ""}
        ${canAdmin && entries.some((entry) => entry.status === "validated_marllon") ? `<button class="btn primary" data-action="deliverGrd" data-id="${item.id}" data-person="jeferson" data-mode="presencial">Entregar p/ Jeferson</button><button class="btn" data-action="deliverGrd" data-id="${item.id}" data-person="jeferson" data-mode="mesa">Deixei na mesa Jeferson</button>` : ""}
        ${canAdmin && entries.some((entry) => ["awaiting_marllon_receipt", "with_marllon"].includes(entry.status)) ? `<button class="btn" data-action="pickupGrdFromDesk" data-id="${item.id}" data-person="marllon">Busquei na mesa Marllon</button>` : ""}
        ${canAdmin && entries.some((entry) => ["awaiting_jeferson_receipt", "with_jeferson"].includes(entry.status)) ? `<button class="btn" data-action="pickupGrdFromDesk" data-id="${item.id}" data-person="jeferson">Busquei na mesa Jeferson</button>` : ""}
        ${canJeferson && entries.some((entry) => entry.status === "awaiting_jeferson_receipt") ? `<button class="btn success" data-action="confirmGrdReceipt" data-id="${item.id}" data-person="jeferson">Confirmo recebimento de todas</button>` : ""}
      </div>
      <div class="timeline compact-timeline">
        ${(item.history || []).slice(-8).reverse().map((line) => `<div>${esc(line)}</div>`).join("") || `<div>Nenhum evento registrado ainda.</div>`}
      </div>
    </section>
  `;
}

function renderGrdOsWorkPanel(item) {
  const entries = normalizeGrdEntries(item);
  const role = currentUser().role;
  const hasToScan = entries.some((entry) => entry.status === "validated_jeferson");
  const hasToArchive = entries.some((entry) => entry.status === "scanned");
  return `
    <section class="card grd-os-panel">
      <div class="section-title">
        <div><h3>OS do GRD</h3><span class="muted">Selecione todas ou apenas algumas para validar, apontar pendencia, digitalizar ou concluir.</span></div>
        <div class="btn-row"><button class="btn" data-action="selectAllGrdOs">Selecionar todas</button></div>
      </div>
      <div class="table-wrap">
        <table class="grd-os-table">
          <thead><tr><th></th><th>OS</th><th>Empresa</th><th>Protocolo</th><th>Tipo</th><th>Responsavel</th><th>Status</th><th>Datas</th></tr></thead>
          <tbody>
            ${entries.map((entry) => `
              <tr>
                <td><input type="checkbox" data-grd-os-select value="${esc(entry.id)}"></td>
                <td><strong>${esc(entry.os)}</strong></td>
                <td>${esc(entry.company || item.company || "-")}</td>
                <td>${esc(entry.protocol || "-")}</td>
                <td>${esc(entry.testType || "-")}</td>
                <td>${esc(entry.currentHolder || "-")}${entry.locationNote ? `<br><span class="muted">${esc(entry.locationNote)}</span>` : ""}</td>
                <td>${grdEntryBadge(entry.status)}${entry.pendingReason ? `<br><span class="muted">${esc(entry.pendingReason)}</span>` : ""}</td>
                <td>${renderGrdEntryDates(entry)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <div class="btn-row grd-actions">
        ${role === "marllon" ? `<button class="btn success" data-action="validateSelectedGrdOs" data-id="${item.id}" data-person="marllon">Validar selecionadas</button><button class="btn danger" data-action="pendSelectedGrdOs" data-id="${item.id}" data-person="marllon">Pendencia selecionadas</button>` : ""}
        ${role === "jeferson" ? `<button class="btn success" data-action="validateSelectedGrdOs" data-id="${item.id}" data-person="jeferson">Validar selecionadas</button><button class="btn danger" data-action="pendSelectedGrdOs" data-id="${item.id}" data-person="jeferson">Pendencia selecionadas</button>` : ""}
        ${role === "admin" && hasToScan ? `<button class="btn" data-action="scanSelectedGrdOs" data-id="${item.id}">Marcar digitalizadas</button>` : ""}
        ${role === "admin" && hasToArchive ? `<button class="btn success" data-action="archiveSelectedGrdOs" data-id="${item.id}">Arquivar/concluir selecionadas</button>` : ""}
      </div>
    </section>
  `;
}

function renderGrdEntryDates(entry) {
  const rows = [
    ["Marllon envio", entry.marllonDeliveredAt],
    ["Marllon recebeu", entry.marllonReceiptAt],
    ["Marllon devolveu", entry.marllonReturnedAt],
    ["Jeferson envio", entry.jefersonDeliveredAt],
    ["Jeferson recebeu", entry.jefersonReceiptAt],
    ["Jeferson devolveu", entry.jefersonReturnedAt],
    [entry.pickedUpBy ? `Buscado por ${entry.pickedUpBy}` : "Buscado", entry.pickedUpAt],
    ["Digitalizado", entry.scannedAt],
    ["Arquivado", entry.archivedAt]
  ].filter(([, value]) => value);
  return rows.length ? rows.map(([label, value]) => `<span class="date-chip">${label}: ${formatDateTime(value)}</span>`).join("") : `<span class="muted">Sem datas</span>`;
}

function renderGrdA4Page(item, entries, pageNumber, totalPages) {
  return `
    <section class="grd-a4">
      <header class="grd-a4-header">
        <div class="grd-logo">erg<span>engenharia<br>geotecnica</span></div>
        <h2>GRD - GUIA DE RECEBIMENTO DE DOCUMENTO</h2>
        <div class="grd-vale">VALE</div>
      </header>
      <div class="grd-a4-meta">
        <strong>Pagina: ${pageNumber}/${totalPages}</strong>
        <span><b>Data envio</b>${formatDate(item.sentDate)}</span>
        <span><b>Data devolucao</b>${formatDate(item.returnedDate) || "__/__/__"}</span>
      </div>
      <table class="grd-a4-table">
        <thead>
          <tr><th>OS</th><th>Empresa</th><th>Protocolo</th><th>Tipo de ensaio</th></tr>
        </thead>
        <tbody>
          ${entries.map((entry) => `
            <tr>
              <td>${esc(entry.os)}</td>
              <td>${esc(entry.company || item.company || "-")}</td>
              <td>${esc(entry.protocol || "-")}</td>
              <td>${esc(entry.testType || entry.description || "-")}</td>
            </tr>
          `).join("")}
          ${Array.from({ length: Math.max(0, 13 - entries.length) }, () => `<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>`).join("")}
        </tbody>
      </table>
      <div class="grd-observation">
        <strong>OBSERVACAO:</strong>
        <p>${esc(item.notes || "")}</p>
      </div>
      <p class="grd-confirm">Confirmo que recebi os ensaios mencionados acima.</p>
      <div class="grd-sign-title">ASSINATURA CONTRATADA:</div>
      <footer class="grd-signatures">
        <div><span></span><strong>ERG ENGENHARIA LTDA</strong></div>
        <div><span></span><strong>FISCALIZACAO DA OBRA (ITACTEBEL / VALE)</strong><small>(Assinar e Carimbar)</small></div>
      </footer>
    </section>
  `;
}

function chunk(list, size) {
  const chunks = [];
  for (let index = 0; index < list.length; index += size) chunks.push(list.slice(index, index + size));
  return chunks.length ? chunks : [[]];
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
                  ${currentUser().role === "admin" ? `<button class="btn danger" data-action="deleteSchedule" data-id="${schedule.id}">Apagar HE</button>` : ""}
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
          ${tab("cfg-acessos", "Acessos")}
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
      <section class="${pageClass("cfg-acessos")}" id="cfg-acessos">
        <div class="section-title">
          <div><h3>Acessos por perfil</h3><p class="muted">GRD fica sempre disponivel. Michele controla quais outras areas cada perfil pode ver.</p></div>
        </div>
        <div class="table-wrap role-access-wrap">
          <table>
            <thead><tr><th>Perfil</th><th>Areas liberadas</th></tr></thead>
            <tbody>
              ${renderRoleAccessRows()}
            </tbody>
          </table>
        </div>
      </section>
      <section class="${pageClass("cfg-farol")}" id="cfg-farol">
        <div class="section-title">
          <div><h3>Painel e farol</h3><p class="muted">Configure cards, icones e organizacao dos farois</p></div>
          <button type="button" class="btn" data-action="addDashboardCard">Adicionar card</button>
        </div>
        <div class="section-title" style="margin-top:10px">
          <div><h3>Resumo da tela inicial</h3><p class="muted">Altere titulo, periodo padrao e farois do resumo.</p></div>
        </div>
        <div class="form-grid">
          ${input("homeSummaryTitle", "Titulo do resumo", s.homeSummaryTitle || "Resumo do mes")}
          <div class="field">
            <label>Periodo padrao</label>
            <select name="homeSummaryMode">
              <option value="month" ${(s.homeSummaryMode || "month") === "month" ? "selected" : ""}>Mes</option>
              <option value="day" ${s.homeSummaryMode === "day" ? "selected" : ""}>Dia</option>
            </select>
          </div>
        </div>
        <div class="table-wrap" style="margin-top:16px">
          <table>
            <thead><tr><th>Ordem</th><th>Nome</th><th>Icone</th><th>Tipo</th><th>Cor</th><th>Mostrar</th></tr></thead>
            <tbody>
              ${renderHomeSummaryCardRows()}
            </tbody>
          </table>
        </div>
        <div class="section-title" style="margin-top:24px">
          <div><h3>Farol de HE</h3><p class="muted">Configure os cards da pagina HE.</p></div>
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
  const allowed = ["cfg-aparencia", "cfg-logos", "cfg-cores", "cfg-abas", "cfg-acessos", "cfg-farol", "cfg-regras", "cfg-botoes-he", "cfg-emails"];
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

function renderHomeSummaryCardRows() {
  return (data.settings.homeSummaryCards || defaultData.settings.homeSummaryCards)
    .slice()
    .sort((a, b) => Number(a.order) - Number(b.order))
    .map((card) => `
      <tr data-home-summary-card-row data-id="${esc(card.id)}">
        <td><input name="homeSummaryCardOrder" type="number" min="1" value="${esc(card.order)}" style="width:82px"></td>
        <td><input name="homeSummaryCardLabel" value="${esc(card.label)}"></td>
        <td><input name="homeSummaryCardIcon" value="${esc(card.icon || "")}" style="width:92px"></td>
        <td><select name="homeSummaryCardType">${homeSummaryTypeOptions(card.type)}</select></td>
        <td><select name="homeSummaryCardColor">${dashboardColorOptions(card.color)}</select></td>
        <td><select name="homeSummaryCardVisible"><option value="true" ${card.visible !== false ? "selected" : ""}>Sim</option><option value="false" ${card.visible === false ? "selected" : ""}>Nao</option></select></td>
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

function renderRoleAccessRows() {
  const access = normalizeRoleAccess(data.settings.roleAccess || {});
  const roles = [
    ["marllon", "Marllon"],
    ["jeferson", "Jeferson"],
    ["viewer", "Demais usuarios"]
  ];
  const areas = [
    ["heDashboard", "HE"],
    ["waterDashboard", "Agua"],
    ["reports", "Relatorios"],
    ["approvals", "Aprovacoes"],
    ["schedules", "Programacoes"],
    ["about", "Sobre"]
  ];
  return roles.map(([role, label]) => `
    <tr data-role-access-row data-role="${role}">
      <td><strong>${label}</strong><br><span class="muted">GRD sempre liberado</span></td>
      <td>
        <div class="check-grid">
          ${areas.map(([view, viewLabel]) => `
            <label>
              <input type="checkbox" name="roleAccessView" value="${view}" ${access[role]?.includes(view) ? "checked" : ""}>
              ${viewLabel}
            </label>
          `).join("")}
        </div>
      </td>
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

function homeSummaryTypeOptions(selected) {
  const types = [
    ["periodHours", "Horas no periodo"],
    ["hours50", "Horas 50%"],
    ["hours100", "Horas 100%"],
    ["heCount", "Qtd HE"],
    ["grdCount", "Qtd GRD"],
    ["pendingCount", "Pendentes"],
    ["doneCount", "Concluidos"]
  ];
  return types.map(([value, label]) => `<option value="${value}" ${selected === value ? "selected" : ""}>${label}</option>`).join("");
}

function dashboardColorOptions(selected) {
  const colors = [
    ["blue", "Azul"],
    ["green", "Verde"],
    ["yellow", "Amarelo"],
    ["red", "Vermelho"],
    ["purple", "Roxo"],
    ["gray", "Cinza"]
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
  if (action === "addGrdOsRow") {
    const wrap = document.getElementById("grdOsRows");
    if (wrap) wrap.insertAdjacentHTML("beforeend", grdOsInputRow(wrap.children.length));
  }
  if (action === "removeGrdOsRow") {
    const row = event.target.closest("[data-grd-os-row]");
    if (document.querySelectorAll("[data-grd-os-row]").length > 1) row?.remove();
    else showToast("Mantenha ao menos uma OS no GRD.");
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
  if (action === "deleteHeItem") deleteHeItem(dataset.scheduleId, dataset.itemId);
  if (action === "deleteSchedule") deleteSchedule(dataset.id);
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
  if (action === "deleteGrd") deleteGrd(dataset.id);
  if (action === "applyGrdFilters") applyGrdFilters();
  if (action === "resetGrdFilters") resetGrdFilters();
  if (action === "deliverGrd") deliverGrd(dataset.id, dataset.person, dataset.mode);
  if (action === "pickupGrdFromDesk") pickupGrdFromDesk(dataset.id, dataset.person);
  if (action === "confirmGrdReceipt") confirmGrdReceipt(dataset.id, dataset.person, user);
  if (action === "validateSelectedGrdOs") validateSelectedGrdOs(dataset.id, dataset.person, user);
  if (action === "pendSelectedGrdOs") pendSelectedGrdOs(dataset.id, dataset.person, user);
  if (action === "scanSelectedGrdOs") scanSelectedGrdOs(dataset.id);
  if (action === "archiveSelectedGrdOs") archiveSelectedGrdOs(dataset.id);
  if (action === "selectAllGrdOs") selectAllGrdOs();
  if (action === "viewGrd") {
    currentGrdViewId = dataset.id;
    currentView = "grdView";
    render();
  }
  if (action === "printGrd") window.print();
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
  const entries = readGrdEntryRows();
  if (!entries.length) {
    showToast("Informe ao menos uma OS com empresa e tipo de ensaio.");
    return;
  }
  const firstEntry = entries[0];
  const createdAt = new Date().toISOString();
  const isRetroactive = fd.get("retroactiveGrd") === "true";
  const preparedEntries = entries.map((entry) => ({
    ...entry,
    status: isRetroactive ? "validated_jeferson" : "with_michele",
    currentHolder: "Michele",
    locationNote: isRetroactive ? "Lancamento retroativo sem aprovacao" : "",
    pendingReason: "",
    marllonDeliveredAt: isRetroactive ? createdAt : "",
    marllonReceiptAt: isRetroactive ? createdAt : "",
    marllonReturnedAt: isRetroactive ? createdAt : "",
    jefersonDeliveredAt: isRetroactive ? createdAt : "",
    jefersonReceiptAt: isRetroactive ? createdAt : "",
    jefersonReturnedAt: isRetroactive ? createdAt : "",
    history: [historyLine(isRetroactive ? "OS lancada retroativa ja validada/assinada" : "OS recebida por Michele")]
  }));
  data.grds.push({
    id: uid(),
    company: firstEntry.company,
    testType: firstEntry.testType,
    os: firstEntry.os,
    protocol: firstEntry.protocol,
    quantity: entries.length,
    receivedDate: fd.get("receivedDate"),
    sentDate: fd.get("sentDate"),
    returnedDate: "",
    notes: fd.get("notes") || "",
    entries: preparedEntries,
    status: isRetroactive ? "signed" : "waiting_michele",
    scanned: false,
    archived: false,
    tracked: null,
    checked: null,
    pendingReason: "",
    createdAt,
    createdBy: currentUser().name,
    retroactive: isRetroactive,
    history: [historyLine(isRetroactive ? "GRD retroativo lancado sem necessidade de aprovacao" : "GRD enviado para assinatura de Michele")]
  });
  saveData();
  currentView = "grdDashboard";
  showToast(isRetroactive ? "GRD retroativo lancado. Pronto para digitalizar." : "GRD lancado e enviado para Michele assinar.");
  render();
}

function readGrdEntryRows() {
  const rows = [...document.querySelectorAll("[data-grd-os-row]")];
  if (rows.length) {
    return rows.map((row) => ({
      id: uid(),
      os: row.querySelector('[name="entryOs"]')?.value.trim() || "",
      company: row.querySelector('[name="entryCompany"]')?.value.trim() || "",
      protocol: row.querySelector('[name="entryProtocol"]')?.value.trim() || "",
      testType: row.querySelector('[name="entryTestType"]')?.value.trim() || "",
      description: ""
    })).filter((entry) => entry.os && entry.company && entry.testType);
  }
  return parseGrdEntries("", {});
}

function findGrd(id) {
  return (data.grds || []).find((item) => item.id === id);
}

function approveGrd(id, user) {
  const item = findGrd(id);
  if (!item) return;
  if (user.role === "admin" && item.status === "waiting_michele") {
    item.status = "waiting_jeferson";
    item.micheleSignedAt = new Date().toISOString();
    item.history.push(historyLine("GRD assinado por Michele e enviado para Jeferson"));
    showToast("GRD assinado por Michele e enviado para Jeferson.");
  } else if (user.role === "jeferson" && item.status === "waiting_jeferson") {
    item.status = "signed";
    item.jefersonSignedAt = new Date().toISOString();
    item.returnedDate = new Date().toISOString().slice(0, 10);
    item.history.push(historyLine("GRD assinado por Jeferson e devolvido para Michele"));
    showToast("GRD assinado por Jeferson. Agora falta escanear e arquivar.");
  } else {
    showToast("Este GRD nao esta aguardando assinatura deste usuario.");
    return;
  }
  saveData();
  render();
}

function pendGrd(id, user) {
  const item = findGrd(id);
  if (!item) return;
  const canPend = (user.role === "admin" && item.status === "waiting_michele") || (user.role === "jeferson" && item.status === "waiting_jeferson");
  if (!canPend) {
    showToast("Este GRD nao esta aguardando pendencia deste usuario.");
    return;
  }
  const reason = "Pendencia sinalizada pelo usuario";
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
  item.status = "waiting_michele";
  item.pendingReason = "";
  item.history.push(historyLine("GRD corrigido e reenviado para Michele"));
  saveData();
  showToast("GRD reenviado para Michele.");
  render();
}

function scanGrd(id) {
  const item = findGrd(id);
  if (!item) return;
  item.scanned = true;
  item.scannedAt = new Date().toISOString();
  item.history.push(historyLine("GRD digitalizado"));
  saveData();
  showToast("GRD marcado como digitalizado. Agora arquive e mova para concluido.");
  render();
}

function archiveGrd(id) {
  const item = findGrd(id);
  if (!item) return;
  if (!item.scanned) {
    showToast("Digitalize o GRD antes de mover para concluido.");
    return;
  }
  const tracked = confirm("Este GRD foi rastreado?");
  const checked = confirm("Voce fez a conferencia antes de concluir?");
  item.archived = true;
  item.archivedAt = new Date().toISOString();
  item.tracked = tracked;
  item.checked = checked;
  item.status = "archived";
  item.history.push(historyLine(`GRD arquivado fisicamente e movido para concluido. Rastreado: ${tracked ? "sim" : "nao"}. Conferencia: ${checked ? "sim" : "nao"}`));
  saveData();
  showToast("GRD concluido, arquivado e registrado com rastreio/conferencia.");
  render();
}

function editGrd(id) {
  const item = findGrd(id);
  if (!item) return;
  const oldEntries = normalizeGrdEntries(item);
  const currentEntries = oldEntries.map((entry) => `${entry.os} | ${entry.protocol || ""} | ${entry.testType || entry.description || ""} | ${entry.company || item.company || ""}`).join("\n");
  const entriesText = prompt("Documentos da GRD (OS | Protocolo | Tipo de ensaio | Empresa):", currentEntries);
  if (entriesText === null) return;
  const entries = parseGrdEntriesV2(entriesText, item).filter((entry) => entry.os && entry.testType && entry.company);
  if (!entries.length) {
    showToast("Informe ao menos um documento no formato: OS | Protocolo | Tipo de ensaio | Empresa.");
    return;
  }
  const oldByKey = Object.fromEntries(oldEntries.map((entry) => [normalizeText(`${entry.os}|${entry.protocol}|${entry.testType}`), entry]));
  const preparedEntries = entries.map((entry) => {
    const previous = oldByKey[normalizeText(`${entry.os}|${entry.protocol}|${entry.testType}`)];
    return previous ? { ...previous, ...entry, id: previous.id } : {
      ...entry,
      status: "with_michele",
      currentHolder: "Michele",
      locationNote: "",
      pendingReason: "",
      history: [historyLine("OS adicionada na edicao do GRD")]
    };
  });
  const firstEntry = entries[0];
  item.company = firstEntry.company;
  item.entries = preparedEntries;
  item.os = firstEntry.os;
  item.protocol = firstEntry.protocol;
  item.testType = firstEntry.testType;
  item.quantity = entries.length;
  item.history.push(historyLine("GRD editado por Michele"));
  saveData();
  showToast("GRD editado.");
  render();
}

function deleteGrd(id) {
  if (currentUser().role !== "admin") {
    showToast("Somente Michele pode apagar GRD.");
    return;
  }
  const item = findGrd(id);
  if (!item) return;
  if (!confirm(`Apagar o GRD ${item.os || item.protocol || ""}?`)) return;
  data.grds = (data.grds || []).filter((grd) => grd.id !== id);
  saveData();
  showToast("GRD apagado.");
  render();
}

function applyGrdFilters() {
  const wrap = document.getElementById("grdFilters");
  if (!wrap) return;
  const fd = new FormData();
  wrap.querySelectorAll("input, select").forEach((el) => fd.set(el.name, el.value));
  ["grdFilterPeriod", "grdFilterDate", "grdFilterMonth", "grdFilterStart", "grdFilterEnd", "grdFilterHolder", "grdFilterStatus", "grdFilterTestType", "grdFilterQuery"].forEach((key) => {
    data.settings[key] = fd.get(key) || "";
  });
  saveData();
  render();
}

function resetGrdFilters() {
  ["grdFilterPeriod", "grdFilterDate", "grdFilterMonth", "grdFilterStart", "grdFilterEnd", "grdFilterHolder", "grdFilterStatus", "grdFilterTestType", "grdFilterQuery"].forEach((key) => delete data.settings[key]);
  saveData();
  render();
}

function selectedGrdEntryIds() {
  return [...document.querySelectorAll("[data-grd-os-select]:checked")].map((input) => input.value);
}

function selectAllGrdOs() {
  document.querySelectorAll("[data-grd-os-select]").forEach((input) => {
    input.checked = true;
  });
}

function selectedOrAllEntries(item, allowedStatuses = []) {
  const selected = selectedGrdEntryIds();
  const entries = normalizeGrdEntries(item);
  const chosen = selected.length ? entries.filter((entry) => selected.includes(entry.id)) : entries;
  return allowedStatuses.length ? chosen.filter((entry) => allowedStatuses.includes(entry.status)) : chosen;
}

function updateGrdAfterEntries(item) {
  item.quantity = item.entries.length;
  item.status = aggregateGrdStatus(item);
  const first = item.entries[0] || {};
  item.os = first.os || item.os;
  item.protocol = first.protocol || item.protocol;
  item.testType = first.testType || item.testType;
}

function deliverGrd(id, person, mode) {
  if (currentUser().role !== "admin") {
    showToast("Somente Michele pode registrar entrega.");
    return;
  }
  const item = findGrd(id);
  if (!item) return;
  ensureGrdItem(item);
  const target = person === "jeferson" ? "Jeferson" : "Marllon";
  const toStatus = person === "jeferson" ? "awaiting_jeferson_receipt" : "awaiting_marllon_receipt";
  const allowed = person === "jeferson" ? ["validated_marllon"] : ["with_michele", "pending_marllon"];
  const now = new Date().toISOString();
  const deliveredBy = document.querySelector('[name="grdDeliveredBy"]')?.value || currentUser().name;
  let count = 0;
  item.entries.forEach((entry) => {
    if (!allowed.includes(entry.status)) return;
    entry.status = toStatus;
    entry.currentHolder = target;
    entry.locationNote = mode === "mesa" ? `Deixado na mesa de ${target} por ${deliveredBy}` : `Entrega presencial por ${deliveredBy}`;
    entry.deliveredBy = deliveredBy;
    entry.deliveredMode = mode;
    if (person === "jeferson") entry.jefersonDeliveredAt = now;
    else entry.marllonDeliveredAt = now;
    entry.history = entry.history || [];
    entry.history.push(historyLine(`${entry.os} entregue para ${target} por ${deliveredBy}: ${entry.locationNote}`));
    count += 1;
  });
  if (!count) {
    showToast(`Nao ha OS pronta para entregar para ${target}.`);
    return;
  }
  item.history.push(historyLine(`${count} OS entregues para ${target} por ${deliveredBy} (${mode === "mesa" ? "mesa" : "presencial"})`));
  updateGrdAfterEntries(item);
  saveData();
  showToast(`${count} OS aguardando confirmacao de recebimento por ${target}.`);
  render();
}

function pickupGrdFromDesk(id, person) {
  if (currentUser().role !== "admin") {
    showToast("Somente Michele pode registrar busca na mesa.");
    return;
  }
  const item = findGrd(id);
  if (!item) return;
  ensureGrdItem(item);
  const target = person === "jeferson" ? "Jeferson" : "Marllon";
  const pickedUpBy = document.querySelector('[name="grdPickedUpBy"]')?.value || currentUser().name;
  const statuses = person === "jeferson" ? ["awaiting_jeferson_receipt", "with_jeferson"] : ["awaiting_marllon_receipt", "with_marllon"];
  const now = new Date().toISOString();
  let count = 0;
  item.entries.forEach((entry) => {
    if (!statuses.includes(entry.status)) return;
    entry.pickedUpBy = pickedUpBy;
    entry.pickedUpAt = now;
    entry.locationNote = `Buscado na mesa de ${target} por ${pickedUpBy}`;
    entry.currentHolder = "Michele";
    if (person === "jeferson" && entry.status === "with_jeferson") {
      entry.status = "validated_jeferson";
      entry.jefersonReturnedAt = now;
    } else if (person === "marllon" && entry.status === "with_marllon") {
      entry.status = "validated_marllon";
      entry.marllonReturnedAt = now;
    }
    entry.history = entry.history || [];
    entry.history.push(historyLine(`${entry.os} buscada na mesa de ${target} por ${pickedUpBy}`));
    count += 1;
  });
  if (!count) {
    showToast(`Nao ha OS na mesa/com ${target} para buscar.`);
    return;
  }
  item.history.push(historyLine(`${count} OS buscadas na mesa de ${target} por ${pickedUpBy}`));
  updateGrdAfterEntries(item);
  saveData();
  showToast(`${count} OS registradas como buscadas na mesa de ${target}.`);
  render();
}

function confirmGrdReceipt(id, person, user) {
  const item = findGrd(id);
  if (!item) return;
  ensureGrdItem(item);
  const isMarllon = person === "marllon" && user.role === "marllon";
  const isJeferson = person === "jeferson" && user.role === "jeferson";
  if (!isMarllon && !isJeferson) {
    showToast("Este recebimento precisa ser confirmado pela pessoa correta.");
    return;
  }
  const fromStatus = person === "jeferson" ? "awaiting_jeferson_receipt" : "awaiting_marllon_receipt";
  const toStatus = person === "jeferson" ? "with_jeferson" : "with_marllon";
  const now = new Date().toISOString();
  let count = 0;
  item.entries.forEach((entry) => {
    if (entry.status !== fromStatus) return;
    entry.status = toStatus;
    entry.currentHolder = person === "jeferson" ? "Jeferson" : "Marllon";
    entry.locationNote = "";
    if (person === "jeferson") entry.jefersonReceiptAt = now;
    else entry.marllonReceiptAt = now;
    entry.history = entry.history || [];
    entry.history.push(historyLine(`${entry.os} recebida por ${user.name}`));
    count += 1;
  });
  if (!count) {
    showToast("Nao ha OS aguardando essa confirmacao.");
    return;
  }
  item.history.push(historyLine(`${user.name} confirmou recebimento de ${count} OS`));
  updateGrdAfterEntries(item);
  saveData();
  showToast(`Recebimento confirmado para ${count} OS.`);
  render();
}

function validateSelectedGrdOs(id, person, user) {
  const item = findGrd(id);
  if (!item) return;
  ensureGrdItem(item);
  const isMarllon = person === "marllon" && user.role === "marllon";
  const isJeferson = person === "jeferson" && user.role === "jeferson";
  if (!isMarllon && !isJeferson) {
    showToast("Somente o aprovador correto pode validar estas OS.");
    return;
  }
  const fromStatus = person === "jeferson" ? "with_jeferson" : "with_marllon";
  const toStatus = person === "jeferson" ? "validated_jeferson" : "validated_marllon";
  const now = new Date().toISOString();
  const selected = selectedOrAllEntries(item, [fromStatus]);
  if (!selected.length) {
    showToast("Selecione OS que estejam com voce para validar.");
    return;
  }
  selected.forEach((entry) => {
    entry.status = toStatus;
    entry.currentHolder = "Michele";
    entry.locationNote = "Devolvido validado";
    entry.pendingReason = "";
    if (person === "jeferson") entry.jefersonReturnedAt = now;
    else entry.marllonReturnedAt = now;
    entry.history = entry.history || [];
    entry.history.push(historyLine(`${entry.os} validada por ${user.name}`));
  });
  item.history.push(historyLine(`${selected.length} OS validadas por ${user.name}`));
  updateGrdAfterEntries(item);
  saveData();
  showToast(`${selected.length} OS validada(s) e devolvida(s) para Michele.`);
  render();
}

function pendSelectedGrdOs(id, person, user) {
  const item = findGrd(id);
  if (!item) return;
  ensureGrdItem(item);
  const isMarllon = person === "marllon" && user.role === "marllon";
  const isJeferson = person === "jeferson" && user.role === "jeferson";
  if (!isMarllon && !isJeferson) {
    showToast("Somente o aprovador correto pode apontar pendencia.");
    return;
  }
  const reason = prompt("Motivo da pendencia:");
  if (!reason) {
    showToast("Informe o motivo da pendencia.");
    return;
  }
  const fromStatus = person === "jeferson" ? "with_jeferson" : "with_marllon";
  const toStatus = person === "jeferson" ? "pending_jeferson" : "pending_marllon";
  const now = new Date().toISOString();
  const selected = selectedOrAllEntries(item, [fromStatus]);
  if (!selected.length) {
    showToast("Selecione OS que estejam com voce para apontar pendencia.");
    return;
  }
  selected.forEach((entry) => {
    entry.status = toStatus;
    entry.currentHolder = "Michele";
    entry.locationNote = "Devolvido com pendencia";
    entry.pendingReason = reason;
    if (person === "jeferson") entry.jefersonReturnedAt = now;
    else entry.marllonReturnedAt = now;
    entry.history = entry.history || [];
    entry.history.push(historyLine(`${entry.os} com pendencia por ${user.name}: ${reason}`));
  });
  item.pendingReason = reason;
  item.pendingBy = user.name;
  item.pendingAt = now;
  item.history.push(historyLine(`${selected.length} OS com pendencia por ${user.name}. Motivo: ${reason}`));
  updateGrdAfterEntries(item);
  saveData();
  showToast(`${selected.length} pendencia(s) registrada(s) para Michele verificar.`);
  render();
}

function scanSelectedGrdOs(id) {
  if (currentUser().role !== "admin") {
    showToast("Somente Michele pode marcar digitalizacao.");
    return;
  }
  const item = findGrd(id);
  if (!item) return;
  ensureGrdItem(item);
  const now = new Date().toISOString();
  const selected = selectedOrAllEntries(item, ["validated_jeferson"]);
  if (!selected.length) {
    showToast("Selecione OS validadas por Jeferson para digitalizar.");
    return;
  }
  selected.forEach((entry) => {
    entry.status = "scanned";
    entry.currentHolder = "Arquivo";
    entry.scannedAt = now;
    entry.history = entry.history || [];
    entry.history.push(historyLine(`${entry.os} digitalizada/escaneada`));
  });
  item.scanned = item.entries.every((entry) => ["scanned", "done"].includes(entry.status));
  item.scannedAt = now;
  item.history.push(historyLine(`${selected.length} OS digitalizadas`));
  updateGrdAfterEntries(item);
  saveData();
  showToast(`${selected.length} OS digitalizada(s).`);
  render();
}

function archiveSelectedGrdOs(id) {
  if (currentUser().role !== "admin") {
    showToast("Somente Michele pode concluir OS.");
    return;
  }
  const item = findGrd(id);
  if (!item) return;
  ensureGrdItem(item);
  const selected = selectedOrAllEntries(item, ["scanned"]);
  if (!selected.length) {
    showToast("Selecione OS digitalizadas para arquivar/concluir.");
    return;
  }
  const tracked = confirm("As OS selecionadas foram rastreadas?");
  const checked = confirm("Voce fez a conferencia antes de concluir?");
  const now = new Date().toISOString();
  selected.forEach((entry) => {
    entry.status = "done";
    entry.currentHolder = "Arquivo";
    entry.archivedAt = now;
    entry.tracked = tracked;
    entry.checked = checked;
    entry.history = entry.history || [];
    entry.history.push(historyLine(`${entry.os} arquivada e concluida. Rastreada: ${tracked ? "sim" : "nao"}. Conferencia: ${checked ? "sim" : "nao"}`));
  });
  item.archived = item.entries.every((entry) => entry.status === "done");
  item.archivedAt = now;
  item.tracked = item.entries.every((entry) => entry.tracked === true);
  item.checked = item.entries.every((entry) => entry.checked === true);
  item.history.push(historyLine(`${selected.length} OS arquivadas/concluidas`));
  updateGrdAfterEntries(item);
  saveData();
  showToast(`${selected.length} OS concluida(s).`);
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

function deleteSchedule(id) {
  if (currentUser().role !== "admin") {
    showToast("Somente Michele pode apagar HE.");
    return;
  }
  const schedule = data.schedules.find((item) => item.id === id);
  if (!schedule) return;
  if (!confirm(`Apagar a HE/programacao de ${formatDate(schedule.date)}?`)) return;
  data.schedules = data.schedules.filter((item) => item.id !== id);
  saveData();
  showToast("HE apagada.");
  render();
}

function deleteHeItem(scheduleId, itemId) {
  if (currentUser().role !== "admin") {
    showToast("Somente Michele pode apagar HE.");
    return;
  }
  const { schedule, item } = findItem(scheduleId, itemId);
  if (!schedule || !item) return;
  if (!confirm(`Apagar HE de ${item.employeeName}?`)) return;
  schedule.items = schedule.items.filter((entry) => entry.id !== itemId);
  if (!schedule.items.length) data.schedules = data.schedules.filter((entry) => entry.id !== scheduleId);
  else schedule.history.push(historyLine(`HE apagada: ${item.employeeName}`));
  saveData();
  showToast("Item de HE apagado.");
  render();
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
    "homeSummaryTitle",
    "homeSummaryMode",
    "recentTitle",
    "recentPosition"
  ];
  simpleSettings.forEach((key) => {
    if (fd.has(key)) data.settings[key] = fd.get(key);
  });
  data.settings.recentVisible = fd.get("recentVisible") === "true";
  data.settings.showHomeImage = fd.get("showHomeImage") === "true";
  data.settings.homeSummaryCards = [...document.querySelectorAll("[data-home-summary-card-row]")].map((row, index) => ({
    id: row.dataset.id || uid(),
    order: Number(row.querySelector('[name="homeSummaryCardOrder"]').value || index + 1),
    label: row.querySelector('[name="homeSummaryCardLabel"]').value.trim() || "Novo farol",
    type: row.querySelector('[name="homeSummaryCardType"]').value,
    color: row.querySelector('[name="homeSummaryCardColor"]').value,
    icon: row.querySelector('[name="homeSummaryCardIcon"]').value.trim(),
    visible: row.querySelector('[name="homeSummaryCardVisible"]').value === "true"
  }));
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
  data.settings.roleAccess = normalizeRoleAccess(Object.fromEntries([...document.querySelectorAll("[data-role-access-row]")].map((row) => [
    row.dataset.role,
    [...row.querySelectorAll('[name="roleAccessView"]:checked')].map((input) => input.value)
  ])));
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
              ${currentUser().role === "admin" ? `<button class="btn danger" data-action="deleteHeItem" data-schedule-id="${item.scheduleId}" data-item-id="${item.id}">Apagar</button>` : ""}
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
  const color = status.includes("rejected") || status === "part_rejected" || status === "pending" ? "red" : status.includes("waiting") || status === "in_approval" || status === "draft" ? "yellow" : "green";
  return `<span class="badge ${color}">${statusLabel(status)}</span>`;
}

function statusLabel(status) {
  return {
    draft: "Rascunho",
    waiting_michele: "Aguardando Michele",
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

function formatDateTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return formatDate(String(value).slice(0, 10));
  return date.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
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



