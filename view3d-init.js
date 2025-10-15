// 🧠 Webflow-safe EGJS View3D Loader (via esm.sh)
(async () => {
  console.log("🔄 Loading EGJS View3D (esm.sh bridge)...");

  try {
    // esm.sh automatically rewrites bare imports for browser use
    const module = await import("https://esm.sh/@egjs/view3d@latest");

    if (module && module.View3D) {
      window.eg = { view3d: module };
      console.log("✅ EGJS View3D (ESM via esm.sh) imported and globally attached");
      document.dispatchEvent(new CustomEvent("egjs-ready"));
    } else {
      console.error("❌ ESM import succeeded but View3D not found in module:", module);
    }
  } catch (err) {
    console.error("❌ Failed to import EGJS View3D from esm.sh:", err);
  }
})();
