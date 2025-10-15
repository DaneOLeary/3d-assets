// 🧠 Webflow-safe EGJS View3D loader — works with ESM-only builds
(async () => {
  console.log("🔄 Loading EGJS View3D (module bridge)...");

  try {
    const module = await import("https://cdn.jsdelivr.net/npm/@egjs/view3d/dist/view3d.esm.js");

    // Explicitly attach to window so Webflow scripts can access it
    if (module && module.View3D) {
      window.eg = { view3d: module };
      console.log("✅ EGJS View3D (ESM) imported and globally attached");
      document.dispatchEvent(new CustomEvent("egjs-ready"));
    } else {
      console.error("❌ ESM import succeeded but View3D not found in module:", module);
    }
  } catch (err) {
    console.error("❌ Failed to import EGJS View3D as module:", err);
  }
})();
