(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  root.classList.add("js");

  // Theme toggle. Remembered per browser; falls back to the OS setting.
  var themeBtn = document.querySelector(".theme");
  themeBtn.addEventListener("click", function () {
    var current = root.dataset.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // The annotated clinical note: light up each span in turn.
  var spans = Array.prototype.slice.call(document.querySelectorAll("#note .ann"));
  var timers = [];
  function annotate() {
    timers.forEach(clearTimeout);
    timers = [];
    spans.forEach(function (s) { s.classList.remove("lit"); });
    if (reduce) { spans.forEach(function (s) { s.classList.add("lit"); }); return; }
    spans.forEach(function (s, i) {
      timers.push(setTimeout(function () { s.classList.add("lit"); }, 700 + i * 650));
    });
  }
  annotate();
  document.querySelector(".replay").addEventListener("click", annotate);

  // Photo lightbox for the snapshot wall.
  var box = document.querySelector(".lightbox");
  if (box && box.showModal) {
    var boxImg = box.querySelector("img"), boxCap = box.querySelector(".lb-cap");
    document.querySelectorAll(".snap button").forEach(function (b) {
      b.addEventListener("click", function () {
        var img = b.querySelector("img"), cap = b.parentNode.querySelector("figcaption");
        boxImg.src = img.src; boxImg.alt = img.alt;
        boxCap.textContent = cap ? cap.textContent.replace(/\s+/g, " ").trim() : "";
        box.showModal();
      });
    });
    box.addEventListener("click", function (e) { if (e.target === box) box.close(); });
  }

  // Reveal sections and fill metric bars as they scroll in.
  var blocks = document.querySelectorAll(".block");
  var metrics = document.querySelectorAll(".metric");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add(e.target.classList.contains("metric") ? "go" : "seen"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    blocks.forEach(function (b) { io.observe(b); });
    metrics.forEach(function (m) { io.observe(m); });

    // Highlight the current section in the sidebar.
    var links = {};
    document.querySelectorAll(".toc a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        Object.keys(links).forEach(function (k) { links[k].classList.toggle("on", k === e.target.id); });
      });
    }, { rootMargin: "-35% 0px -60% 0px" });
    blocks.forEach(function (b) { spy.observe(b); });
  } else {
    blocks.forEach(function (b) { b.classList.add("seen"); });
    metrics.forEach(function (m) { m.classList.add("go"); });
  }
})();
