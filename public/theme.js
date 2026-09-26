(function () {
    const KEY = 'loopvity-theme';

    function currentTheme() {
        return document.documentElement.classList.contains('theme-dark') ? 'dark' : 'light';
    }

    function isChinese() {
        return (document.documentElement.lang || '').toLowerCase().startsWith('zh');
    }

    function applyTheme(theme) {
        document.documentElement.classList.toggle('theme-dark', theme === 'dark');
        try { localStorage.setItem(KEY, theme); } catch (e) {}
        document.querySelectorAll('[data-theme-toggle]').forEach(updateToggle);
    }

    function updateToggle(btn) {
        const isDark = currentTheme() === 'dark';
        const zh = isChinese();
        const label = zh
            ? (isDark ? '切換至淺色模式' : '切換至深色模式')
            : (isDark ? 'Switch to light mode' : 'Switch to dark mode');
        btn.setAttribute('aria-pressed', String(isDark));
        btn.setAttribute('aria-label', label);
        btn.setAttribute('title', label);
    }

    window.toggleLoopvityTheme = function () {
        applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    };

    function isCjk(ch) {
        return /[\u3400-\u9fff]/.test(ch);
    }

    function measureLines(el) {
        var range = document.createRange();
        var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
        var chars = [];
        var node;
        while ((node = walker.nextNode())) {
            var text = node.textContent;
            for (var i = 0; i < text.length; i++) {
                var ch = text[i];
                if (ch === '\n' || ch === '\r' || ch === '\u2060') continue;
                range.setStart(node, i);
                range.setEnd(node, i + 1);
                var rect = range.getClientRects()[0];
                if (!rect || (rect.width === 0 && rect.height === 0)) continue;
                chars.push({ ch: ch, top: Math.round(rect.top), left: rect.left, node: node, i: i });
            }
        }
        chars.sort(function (a, b) { return a.top - b.top || a.left - b.left; });
        var lines = [];
        var current = null;
        chars.forEach(function (c) {
            if (!current || Math.abs(c.top - current.top) > 4) {
                current = { top: c.top, items: [c] };
                lines.push(current);
            } else {
                current.items.push(c);
            }
        });
        return lines;
    }

    function glueBefore(item) {
        var node = item.node;
        var text = node.textContent;
        var at = item.i;
        if (at > 0 && text.charAt(at - 1) === '\u2060') return;
        if (at === 0 && text.charAt(0) === '\u2060') return;
        node.textContent = text.slice(0, at) + '\u2060' + text.slice(at);
    }

    function preventLoneCjk() {
        var root = document.querySelector('main') || document.body;
        root.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,summary,blockquote,figcaption,td,th,label,button,span,div').forEach(function (el) {
            if (el.closest('script,style,svg,select')) return;
            if (el.querySelector('p,li,h1,h2,h3,h4,div,ul,ol,section,article,table')) return;
            var lines = measureLines(el);
            if (lines.length < 2) return;
            for (var n = lines.length - 1; n >= 0; n--) {
                var glyphs = lines[n].items.filter(function (c) { return c.ch.trim(); });
                var cjk = glyphs.filter(function (c) { return isCjk(c.ch); });
                var latin = glyphs.some(function (c) { return /[A-Za-z0-9]/.test(c.ch); });
                if (cjk.length !== 1 || latin) continue;
                glueBefore(cjk[0]);
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        preventLoneCjk();
        document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
            updateToggle(btn);
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                window.toggleLoopvityTheme();
            });
        });
    });
})();
