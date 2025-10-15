// 🔧 View3D External Loader — Webflow-safe version
(async () => {
  console.log("🔄 Loading EGJS View3D...");

  const s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/@egjs/view3d/dist/view3d.pkgd.min.js";
  s.async = true;

  s.onload = () => {
    try {
      // EGJS uses UMD — expose it manually if needed
      if (window.eg === undefined && typeof eg !== "undefined") {
        window.eg = eg;
      }
      if (window.eg && window.eg.view3d) {
        console.log("✅ EGJS View3D dynamically loaded and attached");
        document.dispatchEvent(new CustomEvent("egjs-ready"));
      } else {
        console.error("❌ EGJS script loaded but no global export found");
        console.log("🧩 Attempting fallback global attach...");
        try {
          // fallback if 'eg' is nested under window.default
          if (window.default && window.default.eg) {
            window.eg = window.default.eg;
            document.dispatchEvent(new CustomEvent("egjs-ready"));
            console.log("✅ Fallback EGJS global attach successful");
          } else {
            console.error("❌ Fallback attach failed — no EGJS export found.");
          }
        } catch (err2) {
          console.error("❌ Secondary attach error:", err2);
        }
      }
    } catch (err) {
      console.error("❌ EGJS attach error:", err);
    }
  };

  s.onerror = (err) => {
    console.error("❌ Failed to load EGJS script:", err);
  };

  document.head.appendChild(s);
})();
