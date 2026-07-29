const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-button]');
const mobileMenu = document.querySelector<HTMLElement>('[data-mobile-menu]');
const menuLinks = document.querySelectorAll<HTMLElement>('[data-menu-link]');

const setMenuState = (isOpen: boolean) => {
  if (!menuButton || !mobileMenu) return;

  menuButton.classList.toggle('is-active', isOpen);
  mobileMenu.classList.toggle('is-active', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  document.body.classList.toggle('is-menu-open', isOpen);
};

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  setMenuState(isOpen);
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => setMenuState(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuState(false);
    menuButton?.focus();
  }
});

const desktopMedia = window.matchMedia('(min-width: 68.0625rem)');
desktopMedia.addEventListener('change', (event) => {
  if (event.matches) setMenuState(false);
});
