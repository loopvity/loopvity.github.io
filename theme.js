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

    document.addEventListener('DOMContentLoaded', function () {
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
