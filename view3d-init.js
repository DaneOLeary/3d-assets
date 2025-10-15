// 🧩 Webflow-safe EGJS View3D loader (esm.sh final bridge)
(async () => {
  console.log("🔄 Loading EGJS View3D (esm.sh bridge, final)...");

  try {
    // esm.sh rewrites internal dependencies automatically
    const module = await import("https://esm.sh/@egjs/view3d@latest");

    // Handle both default and named exports
    const View3D = module?.View3D || module?.default?.View3D || module?.default;
    if (View3D) {
      // Expose in Webflow-safe global format
      window.eg = { view3d: { View3D } };
      console.log("✅ EGJS View3D (ESM) imported and globally attached");
      document.dispatchEvent(new CustomEvent("egjs-ready"));
    } else {
      console.error("❌ ESM import succeeded but no View3D constructor found", module);
    }
  } catch (err) {
    console.error("❌ Failed to import EGJS View3D from esm.sh:", err);
  }
})();
