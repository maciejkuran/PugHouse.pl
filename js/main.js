'use strict';

const nav = document.querySelector('.website-navigation');
const navHeight = nav.getBoundingClientRect().height;
const headerContainer = document.querySelector('.header-container');

////Setting 100vh on header home page
const setHeaderVh = () => {
  if (!headerContainer) return;
  headerContainer.style.minHeight = `calc(100vh - ${navHeight}px)`;
};
setHeaderVh();

////Changing theme
const themeBtns = document.querySelectorAll('.theme-btn');
let activeBtn;

const removeBorder = () => {
  themeBtns.forEach(btn => btn.classList.remove('active-theme'));
};

const changeTheme = () => {
  themeBtns.forEach((btn, i) => {
    const themeColor = btn.getAttribute('color');
    btn.addEventListener('click', () => {
      removeBorder();
      activeBtn = btn;
      btn.classList.remove('active-theme');
      document.querySelector('html').style.backgroundColor = themeColor;
      btn.classList.add('active-theme');

      saveThemeToLocalStorage(btn.getAttribute('color'));
    });
  });
};

changeTheme();

//Saving theme to local storage
const saveThemeToLocalStorage = theme => {
  let themes;
  if (localStorage.getItem('pughouse-theme') === null) {
    themes = [];
  } else {
    themes = JSON.parse(localStorage.getItem('pughouse-theme'));
  }

  themes.pop();
  themes.push(theme);
  localStorage.setItem('pughouse-theme', JSON.stringify(themes));
};

//Retreiving data from local storage
const getSavedTheme = () => {
  let themes;
  if (localStorage.getItem('pughouse-theme') === null) {
    themes = [];
  } else {
    themes = JSON.parse(localStorage.getItem('pughouse-theme'));
  }

  themes.forEach(theme => {
    document.querySelector('html').style.backgroundColor = theme;

    const themeBtnsArr = Array.from(themeBtns);

    themeBtnsArr.find(btn => btn.getAttribute('color') === theme);

    const button = themeBtnsArr.find(
      btn => btn.getAttribute('color') === theme
    );

    removeBorder();
    button.classList.add('active-theme');
  });
};

document.addEventListener('DOMContentLoaded', getSavedTheme);

////Thank you popup (after signup)
const joinGangBtn = document.querySelector('#mc-embedded-subscribe');
const signUpContainer = document.querySelector('.sign-up-to-gang-container');
const welcomeContainer = document.querySelector('.welcome-letter-container');

const welcomeGang = () => {
  const checkmark = document.querySelector('#gdpr_96662');
  const emailInput = document.querySelector('#mce-EMAIL');
  const nameInput = document.querySelector('#mce-FNAME');

  if (!joinGangBtn) return;

  joinGangBtn.addEventListener('click', e => {
    if (
      checkmark.checked &&
      emailInput.value.includes('@') &&
      nameInput.value !== ''
    ) {
      signUpContainer.classList.add('hide');
      welcomeContainer.classList.remove('hide');
    }
  });
};

welcomeGang();

////Mobile/tablet navigation
const hamburgerIcon = document.querySelector('.hamburger-icon');
const websiteNav = document.querySelector('.nav-wrapper');
const backgroundOverlay = document.querySelector('.full-background-overlay');

const showNav = () => {
  hamburgerIcon.addEventListener('click', e => {
    websiteNav.style.display = 'flex';
    backgroundOverlay.classList.remove('hide');
  });
};

showNav();

//Closing NAV
const mediaQuery = window.matchMedia('(max-width: 705.98px)');

const closeNav = () => {
  if (mediaQuery.matches) {
    websiteNav.style.display = 'none';
    backgroundOverlay.classList.add('hide');
  }
};

//Closing nav on close-btn click
const navCloseBtn = document.querySelector('.close-navigation-btn');
navCloseBtn.addEventListener('click', closeNav);

//Hiding / showing nav when resizing the window - eliminating bug
window.addEventListener('resize', () => {
  if (!mediaQuery.matches) {
    websiteNav.style.display = 'flex';
    backgroundOverlay.classList.add('hide');
  }
  if (mediaQuery.matches) {
    websiteNav.style.display = 'none';
  }
});

//Displaying sign-up popups
const allJoinGangBtns = document.querySelectorAll('.join-gang-btn');

allJoinGangBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    signUpContainer.classList.remove('hide');
    backgroundOverlay.classList.remove('hide');
  });
});

//Closing popups on background overlay click
const allPopups = document.querySelectorAll('.popup');

backgroundOverlay.addEventListener('click', () => {
  closeNav();

  allPopups.forEach(popup => {
    popup.classList.add('hide');
    backgroundOverlay.classList.add('hide');
  });
});

//Closing popups on close-btn
const closeBtns = document.querySelectorAll('.close-btn');

closeBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    allPopups.forEach(popup => {
      popup.classList.add('hide');
      backgroundOverlay.classList.add('hide');
    });
  });
});
