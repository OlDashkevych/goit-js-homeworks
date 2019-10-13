import Thems from './utils/thems';

class Theme {
  constructor(el, mainTheme, altTheme) {
    this.refs = {
      el: document.querySelector(el),
      input: document.querySelector('.switch__input'),
    };
    this.mainTheme = mainTheme;
    this.altTheme = altTheme;
    this.setLastTheme();
    this.init();
  }
  init() {
    this.refs.el.addEventListener('change', this.changeTheme.bind(this));
  }
  setLastTheme() {
    if (localStorage.getItem('mainTheme') !== null) {
      this.refs.el.classList.add(localStorage.getItem('mainTheme'));
      this.mainTheme = localStorage.getItem('mainTheme');
      if (this.mainTheme === this.altTheme) {
        this.refs.input.checked = true;
      }
      this.altTheme = localStorage.getItem('altTheme');
    }
  }
  changeTheme() {
    this.refs.el.classList.add(this.altTheme);
    this.refs.el.classList.remove(this.mainTheme);
    localStorage.setItem('mainTheme', this.altTheme);
    localStorage.setItem('altTheme', this.mainTheme);
    this.altTheme = localStorage.getItem('altTheme');
    this.mainTheme = localStorage.getItem('mainTheme');
  }
}

new Theme('body', Thems.LIGHT, Thems.DARK);
