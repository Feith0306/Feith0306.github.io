(function () {
  function initBannerTitles() {
    const subtitle = document.querySelector('#subtitle');
    if (!subtitle) return;

    // 1) 主标题：只插一次
    let titleEl = document.querySelector('.banner-main-title');
    if (!titleEl) {
      titleEl = document.createElement('div');
      titleEl.className = 'banner-main-title';
      titleEl.textContent = "💥 Welcome to Feith's Blog"; // 主标题内容
      subtitle.parentNode.insertBefore(titleEl, subtitle);
    }

    // 2) 让 CSS 打字机知道字符数（用 steps 动画更像打字）
    const text = (titleEl.textContent || '').trim();
    titleEl.style.setProperty('--chars', String(text.length));

    // 3) 给副标题加 class，便于做渐变动画（只加一次）
    subtitle.classList.add('banner-subtitle-anim');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBannerTitles);
  } else {
    initBannerTitles();
  }
})();
