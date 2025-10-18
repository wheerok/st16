function waitForElement(selector, callback) {
    const el = document.querySelector(selector);
    if (el) return callback(el);
    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el) {
        observer.disconnect();
        callback(el);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  waitForElement('.ec-base-layer .wrap', function(scrollTarget) {
    const body = document.body;
  
    function handleScroll() {
      const scrollTop = scrollTarget.scrollTop;
      const scrollHeight = scrollTarget.scrollHeight;
      const clientHeight = scrollTarget.clientHeight;
  
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight;
  
      body.classList.toggle('scrollTop', !isAtTop);
      body.classList.toggle('scrollBottom', !isAtBottom);
    }
  
    scrollTarget.addEventListener('scroll', handleScroll);
    handleScroll();
  });