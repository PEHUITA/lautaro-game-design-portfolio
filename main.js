(function () {
  "use strict";

  // Los textos van duplicados en el HTML (data-lang="en" / data-lang="es"); el CSS oculta el idioma que no corresponde.
  // Acá solo quedan los textos que arma el JavaScript.
  var LABELS = {
    en: { caseStudy: "CASE STUDY", overview: "OVERVIEW", role: "MY ROLE", intent: "DESIGN INTENT", mechanics: "CORE MECHANICS", loop: "GAMEPLAY LOOP", decisions: "KEY DESIGN DECISIONS", development: "DEVELOPMENT STATUS", close: "CLOSE CASE STUDY ×", image: "Image", splash: "LOADING SYSTEMS" },
    es: { caseStudy: "CASO DE ESTUDIO", overview: "RESUMEN", role: "MI ROL", intent: "INTENCIÓN DE DISEÑO", mechanics: "MECÁNICAS CENTRALES", loop: "LOOP DE JUEGO", decisions: "DECISIONES CLAVE", development: "ESTADO DEL DESARROLLO", close: "CERRAR CASO ×", image: "Imagen", splash: "CARGANDO SISTEMAS" }
  };

  var $ = function (s, root) { return (root || document).querySelector(s); };
  var $$ = function (s, root) { return Array.prototype.slice.call((root || document).querySelectorAll(s)); };
  var language = "en";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function storage(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  function safe(fn, name) { try { fn(); } catch (e) { console.warn("[" + name + "]", e); } }

  // ---------------------------------------------------------------- idioma

  function setLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    var toggle = $(".lang-toggle");
    if (toggle) toggle.classList.toggle("is-es", next === "es");
    $$("[data-label]").forEach(function (el) { el.textContent = LABELS[next][el.dataset.label] || el.textContent; });
    storage("lm-language", next);
    document.dispatchEvent(new CustomEvent("languagechange"));
  }

  function initLanguage() {
    var saved = storage("lm-language");
    var browser = (navigator.language || "").toLowerCase().indexOf("es") === 0 ? "es" : "en";
    setLanguage(saved === "es" || saved === "en" ? saved : browser);
    var toggle = $(".lang-toggle");
    if (toggle) toggle.addEventListener("click", function () { setLanguage(language === "en" ? "es" : "en"); });
  }

  // ---------------------------------------------------------------- efectos

  function initReveals() {
    var items = $$(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.01, rootMargin: "0px 0px -4% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  function initCoords() {
    var cursor = $(".cursor-coords");
    if (!cursor || !window.matchMedia("(hover: hover)").matches) return;
    window.addEventListener("mousemove", function (e) {
      cursor.style.transform = "translate(" + (e.clientX + 12) + "px," + (e.clientY + 12) + "px)";
      cursor.textContent = "[" + String(e.clientX).padStart(3, "0") + ", " + String(e.clientY).padStart(3, "0") + "]";
      cursor.classList.add("is-ready");
    }, { passive: true });
  }

  function initSplash() {
    var splash = $(".splash");
    if (!splash) return;
    var label = splash.lastElementChild;
    if (label) label.textContent = LABELS[language].splash;
    // Solo en la primera visita de la sesión, y nunca con movimiento reducido.
    var seen = false;
    try { seen = sessionStorage.getItem("lm-splash") === "1"; sessionStorage.setItem("lm-splash", "1"); } catch (e) {}
    if (reduceMotion || seen) { splash.remove(); return; }
    splash.classList.add("is-playing");
    splash.addEventListener("animationend", function () { splash.remove(); });
    setTimeout(function () { if (splash.parentNode) splash.remove(); }, 2500);
  }

  function initYear() { $$(".year").forEach(function (el) { el.textContent = new Date().getFullYear(); }); }

  function initAnchors() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a || a.getAttribute("href").length < 2) return;
      var target = $(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      var header = $(".site-header");
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - (header ? header.offsetHeight : 0), behavior: reduceMotion ? "auto" : "smooth" });
      history.replaceState(null, "", a.getAttribute("href"));
    });
  }

  // Toda la tarjeta del proyecto abre su caso (el botón/enlace sigue siendo lo que se enfoca con teclado).
  function initProjectCards() {
    $$(".project").forEach(function (card) {
      var trigger = $(".project-trigger", card);
      if (!trigger) return;
      card.addEventListener("click", function (e) {
        if (e.target.closest("a, button") || (window.getSelection && String(window.getSelection()))) return;
        trigger.click();
      });
    });
  }

  // ---------------------------------------------------------------- modal de casos de estudio

  function initCaseModal() {
    var modal = $("#case-modal");
    var data = window.CASE_STUDIES;
    if (!modal || !data) return;

    var dialog = $(".case-modal-dialog", modal);
    var mainImage = $("#case-modal-image");
    var thumbs = $("#case-modal-thumbs");
    var current = null, imageIndex = 0, opener = null;

    function showImage(i) {
      var images = data[current].images;
      imageIndex = (i + images.length) % images.length;
      mainImage.src = images[imageIndex];
      mainImage.alt = (data[current][language] || data[current].en).title + " — " + LABELS[language].image + " " + (imageIndex + 1);
      $$(".case-modal-thumb", thumbs).forEach(function (b, n) {
        b.classList.toggle("is-active", n === imageIndex);
        b.setAttribute("aria-current", n === imageIndex ? "true" : "false");
      });
      modal.classList.toggle("has-single-image", images.length < 2);
    }

    function render() {
      var study = data[current];
      var content = study[language] || study.en;
      ["status", "title", "tagline", "overview", "role", "intent", "mechanics", "loop", "decisions", "development"].forEach(function (key) {
        $("#case-modal-" + key).textContent = content[key];
      });
      $("#case-modal-number").textContent = study.number;
      thumbs.innerHTML = "";
      study.images.forEach(function (src, n) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "case-modal-thumb";
        b.setAttribute("aria-label", LABELS[language].image + " " + (n + 1));
        var img = document.createElement("img");
        img.src = src; img.alt = ""; img.loading = "lazy";
        b.appendChild(img);
        b.addEventListener("click", function () { showImage(n); });
        thumbs.appendChild(b);
      });
      showImage(imageIndex);
    }

    function open(id, from) {
      if (!data[id]) return;
      current = id; imageIndex = 0; opener = from || document.activeElement;
      render();
      modal.hidden = false;
      document.body.classList.add("case-modal-open");
      requestAnimationFrame(function () { modal.classList.add("is-open"); dialog.scrollTop = 0; dialog.focus(); });
    }

    function close() {
      if (modal.hidden) return;
      modal.classList.remove("is-open");
      document.body.classList.remove("case-modal-open");
      setTimeout(function () { modal.hidden = true; }, reduceMotion ? 0 : 250);
      if (opener && opener.focus) opener.focus();
      current = null;
    }

    $$("[data-case]").forEach(function (b) { b.addEventListener("click", function () { open(b.dataset.case, b); }); });
    $$("[data-case-close]", modal).forEach(function (b) { b.addEventListener("click", close); });
    $$("[data-gallery]", modal).forEach(function (b) { b.addEventListener("click", function () { showImage(imageIndex + Number(b.dataset.gallery)); }); });

    document.addEventListener("keydown", function (e) {
      if (!current) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") showImage(imageIndex + 1);
      if (e.key === "ArrowLeft") showImage(imageIndex - 1);
      if (e.key === "Tab") { // el foco no sale del modal
        var focusables = $$("button, a[href]", dialog).filter(function (el) { return el.offsetParent !== null; });
        var first = focusables[0], last = focusables[focusables.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === dialog)) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    document.addEventListener("languagechange", function () { if (current) render(); });
  }

  // ---------------------------------------------------------------- galería con zoom (página de KIA)

  function initLightbox() {
    var box = $("#lightbox");
    if (!box) return;
    var img = $("img", box), caption = $("figcaption", box), opener = null;
    var items = $$("[data-zoom]");
    var index = 0;

    function show(i) {
      index = (i + items.length) % items.length;
      var source = items[index];
      var full = source.getAttribute("data-zoom") || source.currentSrc || source.src;
      img.src = full;
      img.alt = source.alt;
      var fig = source.closest("figure");
      var cap = fig && $("figcaption", fig);
      if (cap) caption.innerHTML = cap.innerHTML; else caption.textContent = source.alt;
    }
    function open(i) { opener = document.activeElement; show(i); box.hidden = false; document.body.classList.add("case-modal-open"); $(".lightbox-close", box).focus(); }
    function close() { box.hidden = true; img.src = "data:,"; document.body.classList.remove("case-modal-open"); if (opener) opener.focus(); }

    items.forEach(function (el, i) {
      el.setAttribute("tabindex", "0");
      el.setAttribute("role", "button");
      el.addEventListener("click", function () { open(i); });
      el.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(i); } });
    });
    $$("[data-lightbox-close]", box).forEach(function (b) { b.addEventListener("click", close); });
    $$("[data-lightbox-step]", box).forEach(function (b) { b.addEventListener("click", function () { show(index + Number(b.dataset.lightboxStep)); }); });
    document.addEventListener("keydown", function (e) {
      if (box.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(index + 1);
      if (e.key === "ArrowLeft") show(index - 1);
    });
  }

  // Medidor de fatiga interactivo (página de KIA): muestra qué pasa en cada nivel.
  function initFatigue() {
    var meter = $("#fatigue-meter");
    if (!meter) return;
    var range = $("input", meter);
    function update() {
      var v = Number(range.value);
      var level = v >= 10 ? "colapso" : v >= 6 ? "agotamiento" : v >= 3 ? "estres" : "lucido";
      meter.dataset.level = level;
      meter.style.setProperty("--fill", (v * 10) + "%");
      $$(".fatigue-state", meter).forEach(function (el) { el.classList.toggle("is-active", el.dataset.state === level); });
      $(".fatigue-value", meter).textContent = v + "/10";
    }
    range.addEventListener("input", update);
    update();
  }

  function boot() {
    safe(initLanguage, "language");
    safe(initSplash, "splash");
    safe(initReveals, "reveals");
    safe(initCoords, "coords");
    safe(initYear, "year");
    safe(initAnchors, "anchors");
    safe(initProjectCards, "projects");
    safe(initCaseModal, "case-modal");
    safe(initLightbox, "lightbox");
    safe(initFatigue, "fatigue");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
