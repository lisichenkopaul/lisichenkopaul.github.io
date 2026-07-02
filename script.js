/* ============================================================
   Логика сайта. Обычно редактировать не нужно — меняй data.js.
   ============================================================ */
(function () {
  "use strict";

  var SOCIAL_ICONS = {
    youtube:
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.4 12 31 31 0 0 0 23 7.5ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z"/></svg>',
    twitter:
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.9 2H22l-7.3 8.3L23 22h-6.6l-5.2-6.8L5.3 22H2l7.8-8.9L1.5 2h6.8l4.7 6.2L18.9 2Zm-2.3 18h1.8L7.5 3.8H5.6L16.6 20Z"/></svg>',
    x:
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.9 2H22l-7.3 8.3L23 22h-6.6l-5.2-6.8L5.3 22H2l7.8-8.9L1.5 2h6.8l4.7 6.2L18.9 2Zm-2.3 18h1.8L7.5 3.8H5.6L16.6 20Z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.3 1.3-.4 2.3-.5C9 2 9.3 2 12 2Zm0 1.8c-2.7 0-3 0-4 .1-.8 0-1.2.2-1.5.3-.4.1-.6.3-.9.6-.3.3-.5.5-.6.9-.1.3-.3.7-.3 1.5-.1 1-.1 1.3-.1 4s0 3 .1 4c0 .8.2 1.2.3 1.5.1.4.3.6.6.9.3.3.5.5.9.6.3.1.7.3 1.5.3 1 .1 1.3.1 4 .1s3 0 4-.1c.8 0 1.2-.2 1.5-.3.4-.1.6-.3.9-.6.3-.3.5-.5.6-.9.1-.3.3-.7.3-1.5.1-1 .1-1.3.1-4s0-3-.1-4c0-.8-.2-1.2-.3-1.5-.1-.4-.3-.6-.6-.9-.3-.3-.5-.5-.9-.6-.3-.1-.7-.3-1.5-.3-1-.1-1.3-.1-4-.1Zm0 3.1a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2Zm0 1.8a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm5.3-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/></svg>',
    telegram:
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M21.9 4.3 18.7 19c-.2 1-.9 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-.9.5l.3-4.7 8.6-7.8c.4-.3-.1-.5-.6-.2L6.6 13 2 11.5c-1-.3-1-1 .2-1.5l18.3-7c.8-.3 1.6.2 1.4 1.3Z"/></svg>',
    website:
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 6h-3a15 15 0 0 0-1-3.5A8 8 0 0 1 18.9 8ZM12 4c.7 1 1.3 2.4 1.6 4h-3.2C10.7 6.4 11.3 5 12 4ZM4.3 14a8 8 0 0 1 0-4h3.3a17 17 0 0 0 0 4H4.3Zm.8 2h3a15 15 0 0 0 1 3.5A8 8 0 0 1 5.1 16Zm3-8h-3a8 8 0 0 1 4-3.5A15 15 0 0 0 8.1 8Zm3.9 12c-.7-1-1.3-2.4-1.6-4h3.2c-.3 1.6-.9 3-1.6 4Zm2-6h-4a15 15 0 0 1 0-4h4a15 15 0 0 1 0 4Zm.9 5.5a15 15 0 0 0 1-3.5h3a8 8 0 0 1-4 3.5Zm1.4-5.5a17 17 0 0 0 0-4h3.3a8 8 0 0 1 0 4h-3.3Z"/></svg>',
  };

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function tagHTML(t) {
    return '<span class="tag tag-' + (t.color || "gray") + '">' + esc(t.label) + "</span>";
  }
  function tagsHTML(list) {
    return (list || []).map(tagHTML).join("");
  }
  function bgStyle(obj) {
    if (!obj) return "background:linear-gradient(135deg,#2b2b2b,#3a3a3a);";
    if (obj.image) return 'background-image:url("' + esc(obj.image) + '");background-size:cover;background-position:center;';
    return "background:" + (obj.gradient || "linear-gradient(135deg,#2b2b2b,#3a3a3a)") + ";";
  }

  /* ---------- Header ---------- */
  function renderHeader() {
    document.getElementById("studioName").textContent = SITE.name;
    document.getElementById("topbarTitle").textContent = SITE.name;
    document.getElementById("footName").textContent = SITE.name;
    document.getElementById("studioDesc").textContent = SITE.tagline;
    document.getElementById("year").textContent = new Date().getFullYear();

    var btn = document.getElementById("contactBtn");
    if (SITE.contactEmail) btn.href = "mailto:" + SITE.contactEmail;

    var wrap = document.getElementById("socialLinks");
    wrap.innerHTML = "";
    (SITE.socials || []).forEach(function (s) {
      var icon = SOCIAL_ICONS[s.type] || SOCIAL_ICONS.website;
      var a = el("a", "social");
      a.href = s.url || "#";
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML = icon + "<span>" + esc(s.label) + " <b>" + esc(s.handle || "") + "</b></span>";
      wrap.appendChild(a);
    });
  }

  /* ---------- Cards ---------- */
  function renderCards(filter) {
    var grid = document.getElementById("grid");
    var empty = document.getElementById("emptyState");
    grid.innerHTML = "";
    var q = (filter || "").trim().toLowerCase();
    var shown = 0;

    SITE.projects.forEach(function (p) {
      if (q) {
        var hay = (p.title + " " + (p.tags || []).map(function (t) { return t.label; }).join(" ")).toLowerCase();
        if (hay.indexOf(q) === -1) return;
      }
      shown++;
      var card = el("button", "card");
      card.type = "button";
      card.setAttribute("aria-label", p.title);

      var thumb = el("div", "thumb");
      thumb.setAttribute("style", bgStyle(p.thumb));
      if (!(p.thumb && p.thumb.image)) {
        var lab = el("div", "thumb-label", esc(p.title));
        if (p.thumb && p.thumb.dark) lab.style.color = "#1a1a1a", lab.style.textShadow = "none";
        thumb.appendChild(lab);
      }
      card.appendChild(thumb);

      var body = el("div", "card-body");
      body.appendChild(el("div", "card-name", '<span class="ico">' + esc(p.icon || "") + "</span>" + esc(p.title)));
      body.appendChild(el("div", "tags", tagsHTML(p.tags)));
      card.appendChild(body);

      card.addEventListener("click", function () { openModal(p); });
      grid.appendChild(card);
    });

    empty.hidden = shown !== 0;
  }

  /* ---------- Modal ---------- */
  function videoHTML(b) {
    var src = "";
    if (b.provider === "youtube") src = "https://www.youtube.com/embed/" + encodeURIComponent(b.id);
    else if (b.provider === "vimeo") src = "https://player.vimeo.com/video/" + encodeURIComponent(b.id);

    var inner;
    if (b.provider === "file") {
      inner = '<video controls preload="metadata" style="width:100%;display:block;background:#000" src="' + esc(b.src) + '"></video>';
    } else {
      inner = '<div class="video-embed"><iframe src="' + src + '" title="video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    }

    var cap = "";
    if (b.caption) {
      var c = b.caption;
      var linkPart = c.url ? ' <a href="' + esc(c.url) + '" target="_blank" rel="noopener">' + esc(c.linkText || c.url) + "</a>" : "";
      cap = '<div class="video-cap">' + esc(c.text || "") + linkPart + "</div>";
    }
    return '<div class="video">' + inner + "</div>" + cap;
  }

  function blockHTML(b) {
    switch (b.type) {
      case "heading": return '<h2 class="blk-h">' + esc(b.text) + "</h2>";
      case "sub": return '<h3 class="blk-sub">' + esc(b.text) + "</h3>";
      case "text": return '<p class="blk-p">' + esc(b.text) + "</p>";
      case "video": return videoHTML(b);
      default: return "";
    }
  }

  function propRow(key, valHTML) {
    return '<div class="prop"><div class="prop-key">' + key + '</div><div class="prop-val">' + valHTML + "</div></div>";
  }

  function openModal(p) {
    var scroll = document.getElementById("modalScroll");
    var pr = p.props || {};

    var coverHTML;
    if (p.cover && p.cover.image) {
      coverHTML = '<img class="modal-cover" src="' + esc(p.cover.image) + '" alt="" />';
    } else {
      coverHTML = '<div class="modal-cover-fallback" style="' + bgStyle(p.cover || p.thumb) + '"></div>';
    }

    var linkVal = pr.link
      ? '<a href="' + esc(pr.link.url) + '" target="_blank" rel="noopener">' + esc(pr.link.text || pr.link.url) + "</a>"
      : '<span class="prop-empty">—</span>';

    var propsHTML = '<div class="props">' +
      propRow('📅 Дата', pr.date ? esc(pr.date) : '<span class="prop-empty">—</span>') +
      propRow('🔗 Ссылка', linkVal) +
      propRow('🏷️ Тип проекта', tagsHTML(pr.projectType) || '<span class="prop-empty">—</span>') +
      propRow('✅ Задачи', tagsHTML(pr.responsibilities) || '<span class="prop-empty">—</span>') +
      "</div>";

    var calloutHTML = p.callout
      ? '<div class="callout"><span class="c-ico">' + esc(p.callout.icon || "💡") + '</span><span>' + esc(p.callout.text) + "</span></div>"
      : "";

    var blocksHTML = (p.blocks || []).map(blockHTML).join("");

    scroll.innerHTML =
      coverHTML +
      '<div class="modal-inner">' +
        '<div class="modal-emoji">' + esc(p.icon || "") + "</div>" +
        '<h1 id="modalTitle">' + esc(p.title) + "</h1>" +
        propsHTML +
        calloutHTML +
        blocksHTML +
      "</div>";

    scroll.scrollTop = 0;
    var overlay = document.getElementById("modalOverlay");
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("modalClose").focus();
  }

  function closeModal() {
    var overlay = document.getElementById("modalOverlay");
    overlay.hidden = true;
    document.getElementById("modalScroll").innerHTML = ""; // останавливает видео
    document.body.style.overflow = "";
  }

  /* ---------- Init ---------- */
  function init() {
    renderHeader();
    renderCards("");

    document.getElementById("modalClose").addEventListener("click", closeModal);
    document.getElementById("modalOverlay").addEventListener("click", function (e) {
      if (e.target === this) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });

    var toggle = document.getElementById("searchToggle");
    var wrap = document.getElementById("searchWrap");
    var input = document.getElementById("searchInput");
    toggle.addEventListener("click", function () {
      wrap.hidden = !wrap.hidden;
      if (!wrap.hidden) input.focus();
      else { input.value = ""; renderCards(""); }
    });
    input.addEventListener("input", function () { renderCards(input.value); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
