(function() {
  // Only load once
  if (window.eg && window.eg.view3d) {
    console.log("🟢 EGJS already loaded globally");
    return;
  }

  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/@egjs/view3d/dist/view3d.pkgd.min.js";
  script.onload = () => {
    // Force global binding for Webflow sandboxed scripts
    if (typeof eg !== "undefined") {
      window.eg = eg;
      window.eg.view3d = eg.view3d;
      console.log("✅ EGJS View3D dynamically loaded and globally bound");
    } else if (window.eg) {
      console.log("✅ EGJS View3D dynamically loaded (window.eg already exists)");
    } else {
      console.error("❌ EGJS loaded but could not bind to window.eg");
    }
  };
  script.onerror = () => console.error("❌ EGJS View3D failed to load dynamically");
  document.head.appendChild(script);
})();
