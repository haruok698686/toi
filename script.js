(function () {
  const drawer = document.getElementById("nav-drawer");
  const openBtn = document.getElementById("open-menu-btn");
  const closeBtn = document.getElementById("close-menu-btn");
  const backdrop = document.getElementById("nav-backdrop");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.remove("is-hidden");
    drawer.setAttribute("aria-hidden", "false");
    if (openBtn) openBtn.setAttribute("aria-expanded", "true");
    if (closeBtn) closeBtn.focus();
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.add("is-hidden");
    drawer.setAttribute("aria-hidden", "true");
    if (openBtn) {
      openBtn.setAttribute("aria-expanded", "false");
      openBtn.focus();
    }
  }

  if (openBtn) openBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  drawerLinks.forEach(function (link) {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      drawer &&
      !drawer.classList.contains("is-hidden")
    ) {
      closeDrawer();
    }
  });

  function bindToggle(btnId, panelId) {
    const btn = document.getElementById(btnId);
    const panel = document.getElementById(panelId);
    if (!btn || !panel) return;

    btn.addEventListener("click", function () {
      const isHidden = panel.classList.toggle("is-hidden");
      btn.setAttribute("aria-expanded", String(!isHidden));
    });
  }

  bindToggle("consult-btn", "consult-note");
  bindToggle("guarantee-btn", "guarantee-detail");
})();
