export const editorScript = `
(() => {
  const main = document.querySelector("main");
  if (!main) return;
  const style = document.createElement("style");
  style.textContent = [
    "[contenteditable=true]:focus{outline:2px solid #0f766e;outline-offset:3px}",
    ".cms-block{position:relative}",
    ".cms-block:hover{outline:1px dashed rgba(15,118,110,.55);outline-offset:6px}",
    ".cms-tools{position:absolute;top:8px;right:8px;z-index:20;display:flex;gap:6px;margin:0}",
    ".cms-tools button{font:600 12px/1 sans-serif;border:1px solid #d0d4da;background:#fff;border-radius:8px;padding:6px 10px;cursor:pointer;box-shadow:0 4px 12px rgba(16,24,40,.08)}",
    ".cms-tools [data-act=drag]{cursor:grab}",
    ".cms-block.cms-over{outline:2px solid #0f766e}",
    ".cms-item + .cms-item{margin-top:1.75rem}",
    ".cms-empty{border:1.5px dashed rgba(15,23,42,.18);border-radius:16px;color:#6b7280;text-align:center;padding:64px 24px;font-size:14px;line-height:1.6}",
    "[data-spacer]{background:repeating-linear-gradient(-45deg,rgba(15,23,42,.04),rgba(15,23,42,.04) 8px,transparent 8px,transparent 16px);border-radius:10px}",
    "figure[data-media]{margin:0}"
  ].join("");
  document.head.appendChild(style);

  const canvas = () => document.querySelector(".cms-canvas") || document.querySelector("article .prose-content") || document.querySelector("article .space-y-8") || document.querySelector("article") || main;
  const tag = (el) => { if (!el.dataset.cmsId) el.dataset.cmsId = "m" + Math.random().toString(36).slice(2, 8); return el.dataset.cmsId; };
  const textSel = "h1,h2,h3,h4,h5,h6,p,li,td,th,figcaption,a";
  const sizes = { H1: "40px", H2: "32px", H3: "26px", H4: "22px", H5: "18px", H6: "16px", P: "16px" };
  const cell = "border:1px solid rgba(15,23,42,.12);padding:10px 12px;text-align:left;vertical-align:top";
  let dragging = null;
  let activeEl = null;

  function closestText(node) {
    const el = node && (node.nodeType === 1 ? node : node.parentElement);
    return el && el.closest(textSel);
  }

  function bind(root) {
    root.querySelectorAll(textSel).forEach((el) => {
      if (el.closest(".cms-tools") || el.closest(".cms-empty")) return;
      el.contentEditable = "true";
      el.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" || el.tagName !== "LI") return;
        e.preventDefault();
        const li = document.createElement("li");
        li.textContent = "項目";
        el.after(li);
        bind(li.parentElement);
        li.focus();
      });
    });
    root.querySelectorAll("img,video,figure[data-media]").forEach((el) => {
      el.style.cursor = "pointer";
      el.onclick = (e) => { e.preventDefault(); e.stopPropagation(); parent.postMessage({ type: "cms-pick", id: tag(el) }, "*"); };
      el.ondragover = (e) => e.preventDefault();
      el.ondrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files && e.dataTransfer.files[0];
        if (file) parent.postMessage({ type: "cms-file", id: tag(el), file }, "*");
      };
    });
  }

  function tools(block) {
    if (!block || block.nodeType !== 1 || block.classList.contains("cms-tools") || block.classList.contains("cms-empty")) return;
    if (block.querySelector(":scope > .cms-tools")) return;
    block.classList.add("cms-block");
    const bar = document.createElement("div");
    bar.className = "cms-tools";
    bar.contentEditable = "false";
    const extra = block.querySelector("table") ? '<button type="button" data-act="row">加列</button><button type="button" data-act="col">加欄</button>' : "";
    bar.innerHTML = '<button type="button" data-act="drag" draggable="true">拖動</button><button type="button" data-act="del">移除</button>' + extra;
    bar.querySelector("[data-act=drag]").ondragstart = (e) => { dragging = block; e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("text/plain", "block"); };
    bar.querySelector("[data-act=drag]").ondragend = () => { dragging = null; canvas().querySelectorAll(".cms-over").forEach((n) => n.classList.remove("cms-over")); };
    bar.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const act = e.target.dataset.act;
      if (act === "del") { block.remove(); ensureHint(); }
      if (act === "row") addRow(block.querySelector("table"));
      if (act === "col") addCol(block.querySelector("table"));
    };
    block.ondragover = (e) => { if (!dragging || dragging === block) return; e.preventDefault(); block.classList.add("cms-over"); };
    block.ondragleave = () => block.classList.remove("cms-over");
    block.ondrop = (e) => {
      if (!dragging || dragging === block) return;
      e.preventDefault();
      block.classList.remove("cms-over");
      const after = e.clientY > block.getBoundingClientRect().top + block.getBoundingClientRect().height / 2;
      block.parentElement.insertBefore(dragging, after ? block.nextSibling : block);
    };
    block.prepend(bar);
  }

  function addRow(table) {
    if (!table) return;
    const cols = table.rows[0].cells.length;
    const tr = table.insertRow();
    for (let i = 0; i < cols; i++) {
      const td = tr.insertCell();
      td.setAttribute("style", cell);
      td.textContent = "內容";
    }
    bind(table);
  }

  function addCol(table) {
    if (!table) return;
    [...table.rows].forEach((row, index) => {
      const cellEl = index === 0 && row.parentElement.tagName === "THEAD" ? document.createElement("th") : document.createElement("td");
      cellEl.setAttribute("style", cell + (cellEl.tagName === "TH" ? ";font-weight:700;background:#f8fafc" : ""));
      cellEl.textContent = index === 0 && cellEl.tagName === "TH" ? "新欄" : "內容";
      row.appendChild(cellEl);
    });
    bind(table);
  }

  function ensureHint() {
    const host = canvas();
    const real = [...host.children].filter((n) => n.nodeType === 1 && !n.classList.contains("cms-empty"));
    const hint = host.querySelector(":scope > .cms-empty");
    if (real.length) { if (hint) hint.remove(); return; }
    if (hint) return;
    const el = document.createElement("div");
    el.className = "cms-empty";
    el.textContent = "從左側加入標題、段落、清單、表格或圖片";
    host.appendChild(el);
  }

  function markup(kind) {
    const head = (level, px, weight) => '<h' + level + ' style="font-size:' + px + ';font-weight:' + weight + ';line-height:1.3;margin:0;color:inherit">標題</h' + level + '>';
    if (kind === "h1") return head(1, "40px", 900);
    if (kind === "h2") return head(2, "32px", 800);
    if (kind === "h3") return head(3, "26px", 700);
    if (kind === "h4") return head(4, "22px", 700);
    if (kind === "h5") return head(5, "18px", 700);
    if (kind === "h6") return head(6, "16px", 700);
    if (kind === "ul") return '<ul style="margin:0;padding-left:1.25rem;line-height:1.75"><li>項目一</li><li>項目二</li></ul>';
    if (kind === "ol") return '<ol style="margin:0;padding-left:1.25rem;line-height:1.75"><li>項目一</li><li>項目二</li></ol>';
    if (kind === "hr") return '<hr style="border:0;border-top:1px solid rgba(17,24,39,.16);margin:8px 0">';
    if (kind === "spacer") return '<div data-spacer="1" style="height:56px"></div>';
    if (kind === "table") return '<table style="width:100%;border-collapse:collapse;font-size:15px"><thead><tr><th style="' + cell + ';font-weight:700;background:#f8fafc">欄一</th><th style="' + cell + ';font-weight:700;background:#f8fafc">欄二</th><th style="' + cell + ';font-weight:700;background:#f8fafc">欄三</th></tr></thead><tbody><tr><td style="' + cell + '">內容</td><td style="' + cell + '">內容</td><td style="' + cell + '">內容</td></tr><tr><td style="' + cell + '">內容</td><td style="' + cell + '">內容</td><td style="' + cell + '">內容</td></tr></tbody></table>';
    if (kind === "image") return '<figure data-media="image" style="min-height:200px;display:grid;place-items:center;border:1.5px dashed rgba(15,23,42,.18);border-radius:16px;background:#f8fafc;color:#6b7280">點擊上傳圖片</figure>';
    if (kind === "video") return '<figure data-media="video" style="min-height:200px;display:grid;place-items:center;border:1.5px dashed rgba(15,23,42,.18);border-radius:16px;background:#f8fafc;color:#6b7280">點擊上傳影片</figure>';
    return '<p style="font-size:16px;font-weight:400;line-height:1.75;margin:0;color:inherit">段落文字</p>';
  }

  function paintMedia(el, url, kind) {
    el.innerHTML = kind === "video"
      ? '<video controls style="width:100%;border-radius:16px;display:block" src="' + url + '"></video>'
      : '<img alt="" style="width:100%;border-radius:16px;display:block" src="' + url + '">';
    el.style.border = "0";
    el.style.minHeight = "0";
    el.style.background = "transparent";
    el.style.display = "block";
    bind(el);
  }

  function report() {
    const el = activeEl;
    if (!el || !el.isConnected) { parent.postMessage({ type: "cms-selection", active: false }, "*"); return; }
    const cs = getComputedStyle(el);
    const rgb = String(cs.color).match(/\\d+/g) || ["17", "24", "39"];
    const hex = "#" + rgb.slice(0, 3).map((n) => Number(n).toString(16).padStart(2, "0")).join("");
    parent.postMessage({
      type: "cms-selection",
      active: true,
      tag: el.tagName,
      weight: String(cs.fontWeight),
      size: Math.round(parseFloat(cs.fontSize) || 16) + "",
      color: hex,
      align: cs.textAlign || "left"
    }, "*");
  }

  function apply(msg) {
    const el = activeEl && activeEl.isConnected ? activeEl : closestText(document.getSelection() && document.getSelection().anchorNode);
    if (!el) return;
    if (msg.action === "block") {
      const next = document.createElement(msg.value);
      next.innerHTML = el.innerHTML;
      next.style.cssText = el.style.cssText;
      next.style.fontSize = sizes[msg.value] || "16px";
      next.style.fontWeight = msg.value === "P" ? "400" : "700";
      next.style.margin = "0";
      el.replaceWith(next);
      activeEl = next;
      bind(next.parentElement || canvas());
    } else if (msg.action === "weight") el.style.fontWeight = msg.value;
    else if (msg.action === "size") el.style.fontSize = msg.value + "px";
    else if (msg.action === "color") el.style.color = msg.value;
    else if (msg.action === "align") el.style.textAlign = msg.value;
    else if (msg.action === "bold") el.style.fontWeight = Number(getComputedStyle(el).fontWeight) >= 700 ? "400" : "700";
    report();
  }

  function clean() {
    const clone = main.cloneNode(true);
    clone.querySelectorAll(".cms-tools,.cms-empty").forEach((n) => n.remove());
    clone.querySelectorAll(".cms-block").forEach((n) => n.classList.remove("cms-block", "cms-over"));
    clone.querySelectorAll("[contenteditable]").forEach((n) => n.removeAttribute("contenteditable"));
    clone.querySelectorAll("[data-cms-id]").forEach((n) => n.removeAttribute("data-cms-id"));
    clone.querySelectorAll("figure[data-media]").forEach((n) => { if (!n.querySelector("img[src],video[src]")) n.remove(); });
    return clone.innerHTML.trim();
  }

  const root = canvas();
  [...root.children].forEach(tools);
  bind(root);
  ensureHint();
  document.addEventListener("selectionchange", () => {
    const found = closestText(document.getSelection() && document.getSelection().anchorNode);
    if (found) activeEl = found;
    report();
  });

  window.addEventListener("message", (ev) => {
    const msg = ev.data || {};
    if (msg.type === "cms-collect") parent.postMessage({ type: "cms-html", html: clean() }, "*");
    if (msg.type === "cms-format") apply(msg);
    if (msg.type === "cms-insert") {
      const host = canvas();
      const el = document.createElement("div");
      el.className = "cms-item";
      el.innerHTML = markup(msg.kind);
      host.appendChild(el);
      tools(el);
      bind(el);
      ensureHint();
      const text = el.querySelector(textSel);
      if (text) { activeEl = text; text.focus(); report(); }
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (msg.type === "cms-set-src") {
      const el = main.querySelector('[data-cms-id="' + msg.id + '"]');
      if (!el) return;
      if (el.tagName === "FIGURE") paintMedia(el, msg.url, msg.kind);
      else if (msg.kind === "video" && el.tagName !== "VIDEO") {
        const video = document.createElement("video");
        video.controls = true;
        video.style.width = "100%";
        video.src = msg.url;
        el.replaceWith(video);
        bind(video.parentElement || canvas());
      } else el.src = msg.url;
    }
  });
})();
`;
