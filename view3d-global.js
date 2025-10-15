(function () {
  // dynamically load EGJS and patch it into the global scope
  const s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/@egjs/view3d/dist/view3d.pkgd.min.js";
  s.onload = () => {
    try {
      // EGJS attaches to globalThis.eg in strict envs
      const egCandidate = window.eg || globalThis.eg;
      if (egCandidate && egCandidate.view3d) {
        window.eg = egCandidate;
        console.log("✅ EGJS View3D forced global attach succeeded");
      } else {
        console.error("❌ EGJS script loaded but no eg export found");
      }
    } catch (err) {
      console.error("❌ EGJS patch failed:", err);
    }
  };
  s.onerror = () => console.error("❌ EGJS View3D script failed to load");
  document.head.appendChild(s);
})();
