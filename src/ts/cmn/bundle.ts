import navSp from "./_navSp";
import moveToHash from "./_moveToHash";
import smoothScroll from "./_smoothScroll";

window.addEventListener('DOMContentLoaded', () => {
  smoothScroll();
  navSp();
});

window.addEventListener('load', () => {
  moveToHash();
});
