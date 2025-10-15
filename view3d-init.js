// view3d-init.js
(async () => {
  const s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/@egjs/view3d/dist/view3d.pkgd.min.js";
  s.onload = () => {
    if (window.eg && window.eg.view3d) {
      console.log("✅ EGJS loaded externally");
      document.dispatchEvent(new CustomEvent("egjs-ready"));
    } else {
      console.error("❌ EGJS failed to attach");
    }
  };
  document.head.appendChild(s);
})();
