export default function moveToHash() {
  const hash = location.hash;
  if(hash) {
    window.scrollTo({top:0});
    const $header = document.querySelector('[data-js_header]'),
          headerHeight = $header?.clientHeight;
    const targetHash = document.querySelector(hash),
          gap = 16,
          targetPos = targetHash!.getBoundingClientRect().top - headerHeight! - gap;
    window.scrollTo({
      top: targetPos,
    });
  }
}
