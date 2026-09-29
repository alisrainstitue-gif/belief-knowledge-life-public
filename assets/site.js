/* Optional reading tools. Navigation and content also work without JavaScript. */
(() => {
  'use strict';
  const actions = document.querySelector('[data-reading-tools]');
  if (!actions) return;
  actions.hidden = false;
  const status = document.querySelector('[data-action-status]');
  const copy = document.querySelector('[data-copy-link]');
  const print = document.querySelector('[data-print]');
  if (print) print.addEventListener('click', () => window.print());
  if (copy) copy.addEventListener('click', async () => {
    const url = window.location.href.split('#')[0];
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(url);
      status.textContent = 'Link copied.';
    } catch (_) {
      status.textContent = 'Copy this page address: ' + url;
    }
  });
})();
