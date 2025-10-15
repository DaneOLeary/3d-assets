(function() {
  // Only load once
  if (window.eg && window.eg.view3d) return;

  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/@egjs/view3d/dist/view3d.pkgd.min.js";
  script.onload = () => console.log("✅ EGJS View3D dynamically loaded");
  script.onerror = () => console.error("❌ EGJS View3D failed to load dynamically");
  document.head.appendChild(script);
})();
