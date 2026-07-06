(function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-view");
        obs.unobserve(entry.target);
      });
    },
    { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
  );

  document.querySelectorAll(".js-observe").forEach((el) => observer.observe(el));
})();

(function initHamburger() {
  const btn = document.querySelector(".header__hamburger");
  const nav = document.querySelector(".header__nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
    document.body.classList.toggle("is-nav-open", !open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      btn.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("is-nav-open");
    });
  });
})();

(function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

(function initTabs() {
  const root = document.querySelector("[data-lab-tabs]");
  if (!root) return;

  const buttons = root.querySelectorAll(".lab-tabs__btn");
  const panels = root.querySelectorAll(".lab-tabs__panel");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-tab");
      if (!id) return;

      buttons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-selected", String(active));
      });

      panels.forEach((panel) => {
        const match = panel.id === "panel-" + id;
        panel.classList.toggle("is-active", match);
        panel.hidden = !match;
      });
    });

    btn.addEventListener("keydown", (e) => {
      const idx = Array.from(buttons).indexOf(btn);
      let next = -1;

      if (e.key === "ArrowRight") next = (idx + 1) % buttons.length;
      if (e.key === "ArrowLeft") next = (idx - 1 + buttons.length) % buttons.length;
      if (next >= 0) {
        e.preventDefault();
        buttons[next].click();
        buttons[next].focus();
      }
    });
  });
})();
