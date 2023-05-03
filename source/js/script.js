// MENU

class App {
  init() {
    this.initMobileMenu();
    this.initLog();
  }

  initMobileMenu() {
    const $navMain = document.querySelector('.main-nav');
    const $navToggle = document.querySelector('.main-nav__toggle');

    const initJS = () => {
      $navMain.classList.remove('main-nav--nojs');
    }

    const closeOpen = () => {
      $navToggle.addEventListener('click', function () {
        if ($navMain.classList.contains('main-nav--closed')) {
          $navMain.classList.remove('main-nav--closed');
          $navMain.classList.add('main-nav--opened');
        } else {
          $navMain.classList.add('main-nav--closed');
          $navMain.classList.remove('main-nav--opened');
        }
      });
    }

    const linksClick = () => {
      const links = document.querySelectorAll('.main-nav__item');

      const navLinckHandleClick = () => {
        $navMain.classList.add('main-nav--closed');
        $navMain.classList.remove('main-nav--opened');
      }

      links.forEach(link => {
        link.addEventListener('click', navLinckHandleClick)
      })
    }

    initJS();
    closeOpen();
    linksClick();
  }

  initLog() {
    const log = () => {
      console.log('log')
    }

    log();
  }
}

const app = new App();
document.addEventListener('DOMContentLoaded', app.init());
