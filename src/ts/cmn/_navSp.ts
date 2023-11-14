import MicroModal from 'micromodal';
export default function navSp() {
  const menuBtn = document.querySelector('[data-js_nav_btn]');

  MicroModal.init({
    openClass: 'is-open',
    disableScroll: true,
  });

  menuBtn?.addEventListener('click', () => {
    if (!menuBtn?.classList.contains('is-open')) {
      menuBtn.ariaExpanded = 'true';
      menuBtn.classList.add('is-open');
      MicroModal.show('nav-cnt', {
        disableScroll: true,
        onClose: () => {
          menuBtn.classList.remove('is-open');
        }
      });
    }else {
      menuBtn.ariaExpanded = 'false';
      menuBtn.classList.remove('is-open');
      MicroModal.close('nav-cnt');
    }
  });
}
