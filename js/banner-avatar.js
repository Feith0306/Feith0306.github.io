(function () {
  function insertAvatar() {
    // Fluid 首页 Banner 的副标题通常带 id="subtitle"
    const subtitle = document.querySelector('#subtitle');
    if (!subtitle) return;

    // 避免重复插入
    if (document.querySelector('.banner-avatar')) return;

    const img = document.createElement('img');
    img.className = 'banner-avatar';
    img.src = '/img/avatar.png'; // 这里改成你的实际文件名
    img.alt = 'avatar';

    // 插到副标题前面（即“Every little helps”上方）
    subtitle.parentNode.insertBefore(img, subtitle);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertAvatar);
  } else {
    insertAvatar();
  }
})();
