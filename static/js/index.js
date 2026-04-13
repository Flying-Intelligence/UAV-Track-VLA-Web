
document.addEventListener('DOMContentLoaded', function() {
  // 加载 section.html
  fetch('section.html')
    .then(response => response.text())
    .then(data => {
      const placeholder = document.getElementById('section-placeholder');
      if (placeholder) {
        placeholder.innerHTML = data;
        
        // 动态加载内容后手动触发 MathJax 渲染
        if (window.MathJax && window.MathJax.typesetPromise) {
          window.MathJax.typesetPromise([placeholder]).catch((err) => console.log('MathJax typeset failed: ' + err.message));
        }

        // 如果 section.html 中有初始化逻辑，可以在这里调用
        if (typeof initVideoSwitching === 'function') {
          initVideoSwitching();
        }
      }
    })
    .catch(error => console.error('Error loading the section:', error));
});

