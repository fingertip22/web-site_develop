export default function smoothScroll() {
  const $targetLinks = document.querySelectorAll('a[href*="#"]'),
        $header = document.querySelector('[data-js_header]'),
        headerHeight = $header?.clientHeight;

  for(let i = 0; i < $targetLinks.length; i++) {
    $targetLinks[i].addEventListener('click', function(e){
      if($header?.classList.contains('is-active')) {
        document.querySelector<HTMLElement>('[data-js_nav_btn]')?.click();
      }
      const path = location.pathname,
            href = $targetLinks[i].getAttribute('href'),
            hrefPath = href?.replace(/#.*$/, ''),
            hash = href?.indexOf('#'),
            hrefHash = href?.slice(hash),
            targetElement = document.querySelector(hrefHash!),
            offset = window.scrollY,
            rect = targetElement?.getBoundingClientRect().top,
            gap = 16;

      if(hrefPath === path || href === hrefHash) {
        e.preventDefault();
        scroll();
      }else {
        scroll();
      }

      function scroll() {
        const target = rect! + offset! - headerHeight! - gap;
        window.scrollTo({
          top: target,
          behavior: 'smooth',
        });
      }
    });
  }
}
