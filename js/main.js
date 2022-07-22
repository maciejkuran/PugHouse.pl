'use strict';

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
const navSticky = document.querySelector('.navigation-sticky-properties');

const mediaQuery = window.matchMedia('(max-width: 705.98px)');

const showNav = () => {
  hamburgerIcon.addEventListener('click', e => {
    websiteNav.style.display = 'flex';
    backgroundOverlay.classList.remove('hide');
    navSticky.style.zIndex = '3';
  });
};

showNav();

//Closing NAV

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

//// Hide Navbar when scroll down, show when scroll up
const navbar = document.querySelector('.website-navigation');
let previousPosition;

window.addEventListener('scroll', e => {
  let currentPosition = window.pageYOffset;

  if (previousPosition > currentPosition) {
    navbar.style.top = '0';
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.872)';
  } else {
    navbar.style.top = '-125px';
  }

  if (currentPosition === 0) {
    navbar.style.backgroundColor = '';
  }

  previousPosition = currentPosition;
});

//Displaying sign-up popups
const allJoinGangBtns = document.querySelectorAll('.join-gang-btn');

allJoinGangBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    signUpContainer.classList.remove('hide');
    backgroundOverlay.classList.remove('hide');
    navSticky.style.zIndex = '1';
  });
});

//Displaying gang members popup
const gangMembersContainer = document.querySelector('.section-gang-members');
const gangMembersBtns = document.querySelectorAll('.gang-members-btn');

const displayGangMembers = () => {
  gangMembersBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      gangMembersContainer.classList.remove('hide');
      backgroundOverlay.classList.remove('hide');
      navSticky.style.zIndex = '1';

      if (
        mediaQuery.matches &&
        !gangMembersContainer.classList.contains('hide')
      ) {
        websiteNav.style.display = 'none';
      }
    });
  });
};

displayGangMembers();

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

//Implementing smooth scroll into 1st section from header home page
const joinGangScrollToSectionBtn = document.querySelector('.join-to-gang-btn');
const section1 = document.querySelector('.section-1-home');

const scrollToSection1 = () => {
  // const section1Coords = section1.getBoundingClientRect();
  joinGangScrollToSectionBtn.addEventListener('click', () => {
    section1.scrollIntoView({ behavior: 'smooth' });
    // window.scrollTo({
    //   top: section1Coords.top + window.pageXOffset,
    //   left: section1Coords.left + window.pageYOffset,
    //   behavior: 'smooth',
    // });
  });
};

scrollToSection1();

//Implementing slider
const slides = document.querySelectorAll('.slide');
const nextSlideBtn = document.querySelector('.next-slide-btn');
const previousSlideBtn = document.querySelector('.previous-slide-btn');

let currentSlide = 0;
const maxSlides = slides.length - 1;

const setSlide = slide => {
  slides.forEach((sl, i) => {
    sl.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

document.addEventListener;

setSlide(0);

const nextSlide = () => {
  if (currentSlide === maxSlides) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  setSlide(currentSlide);
};

const previousSlide = () => {
  if (currentSlide === 0) {
    currentSlide = maxSlides;
  } else {
    currentSlide--;
  }

  setSlide(currentSlide);
};

//Avoiding 'Cannot read properties of null (reading 'addEventListener')' in other documents if btn DOES NOT EXIST
const nextSlideAttachHandler = () => {
  if (nextSlideBtn) {
    nextSlideBtn.addEventListener('click', nextSlide);
  }
};

const previousSlideAttachHandler = () => {
  if (previousSlideBtn) {
    previousSlideBtn.addEventListener('click', previousSlide);
  }
};

nextSlideAttachHandler();
previousSlideAttachHandler();
