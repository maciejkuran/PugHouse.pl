'use strict';

//////CHANGING THEME
const themeBtns = document.querySelectorAll('.theme-btn');
let activeBtn;

const removeBorder = () => {
  themeBtns.forEach(btn => btn.classList.remove('active-theme'));
};

const changeTheme = e => {
  let target = e.target;
  const themeColor = target.getAttribute('color');
  removeBorder();
  activeBtn = target;

  document.querySelector('html').style.backgroundColor = themeColor;
  target.classList.add('active-theme');

  saveThemeToLocalStorage(target.getAttribute('color'));
};

themeBtns.forEach(btn => btn.addEventListener('click', changeTheme));

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

//////Thank you popup (after clicking signup)
const joinGangBtn = document.querySelector('#mc-embedded-subscribe');
const signUpContainer = document.querySelector('.sign-up-to-gang-container');
const welcomeContainer = document.querySelector('.welcome-letter-container');

const welcomeGang = () => {
  const checkmark = document.querySelector('#gdpr_96662');
  const emailInput = document.querySelector('#mce-EMAIL');
  const nameInput = document.querySelector('#mce-FNAME');

  if (!joinGangBtn) return;
  //prettier-ignore
  if (checkmark.checked && emailInput.value.includes('@') 
  && nameInput.value !== '') {
    signUpContainer.classList.add('hide');
    welcomeContainer.classList.remove('hide');
  }
};

joinGangBtn.addEventListener('click', welcomeGang);

//////NAVIGATION
////Mobile/tablet navigation
const hamburgerIcon = document.querySelector('.hamburger-icon');
const websiteNav = document.querySelector('.nav-wrapper');
const backgroundOverlay = document.querySelector('.full-background-overlay');
const navSticky = document.querySelector('.navigation-sticky-properties');

const mediaQuery = window.matchMedia('(max-width: 705.98px)');

const showNav = () => {
  websiteNav.style.display = 'flex';
  backgroundOverlay.classList.remove('hide');
  navSticky.style.zIndex = '3';
};

hamburgerIcon.addEventListener('click', showNav);

//Closing nav
const closeNav = () => {
  if (mediaQuery.matches && websiteNav.style.display === 'flex') {
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
  }
  if (mediaQuery.matches) {
    websiteNav.style.display = 'none';
  }
});

// Hide Navbar when scroll down, show when scroll up
const navbar = document.querySelector('.website-navigation');

let previousPosition;
const showOrHideNavbar = () => {
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
  //Preventing bounce effect on mobile browsers
  if (mediaQuery.matches && currentPosition < 20) {
    navbar.style.top = '0';
  }

  previousPosition = currentPosition;
};

window.addEventListener('scroll', showOrHideNavbar);

// Smooth scrolling to section when navbar element is clicked
const navElements = document.querySelectorAll('.nav-el');

const smoothScrollNav = e => {
  let attribute = e.target.getAttribute('href').slice(1);

  if (document.querySelector(`${attribute}`)) {
    e.preventDefault();
    document
      .querySelector(`${attribute}`)
      .scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href(`/${attribute}`);
  }
};

navElements.forEach(el => el.addEventListener('click', smoothScrollNav));

//////POPUPS
//Displaying sign-up popups
const allJoinGangBtns = document.querySelectorAll('.join-gang-btn');

const displaySignUpPopups = () => {
  signUpContainer.classList.remove('hide');
  backgroundOverlay.classList.remove('hide');
  navSticky.style.zIndex = '1';
};

allJoinGangBtns.forEach(btn =>
  btn.addEventListener('click', displaySignUpPopups)
);

//Displaying gang members popup
const gangMembersContainer = document.querySelector('.section-gang-members');
const gangMembersBtns = document.querySelectorAll('.gang-members-btn');

const displayGangMembers = e => {
  e.preventDefault();

  gangMembersContainer.classList.remove('hide');
  backgroundOverlay.classList.remove('hide');
  navSticky.style.zIndex = '1';

  if (mediaQuery.matches && !gangMembersContainer.classList.contains('hide')) {
    websiteNav.style.display = 'none';
  }
};

gangMembersBtns.forEach(btn =>
  btn.addEventListener('click', displayGangMembers)
);

//Closing popups on background overlay click
const allPopups = document.querySelectorAll('.popup');

const closePopupsOnOverlayClick = () => {
  closeNav();
  allPopups.forEach(popup => {
    if (!popup.classList.contains('hide')) {
      popup.classList.add('hide');
      backgroundOverlay.classList.add('hide');
    }
  });
};

backgroundOverlay.addEventListener('click', closePopupsOnOverlayClick);

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
//////IMPLEMENTING SMOOTH SCROLL INTO 1ST SECTION FROM HEADER HOME PAGE
const joinGangScrollToSectionBtn = document.querySelector('.join-to-gang-btn');
const section1 = document.querySelector('.section-1-home');

const scrollToSection1 = () => {
  section1.scrollIntoView({ behavior: 'smooth' });
};

joinGangScrollToSectionBtn?.addEventListener('click', scrollToSection1);

//////IMPLEMENTING SLIDER
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

nextSlideBtn?.addEventListener('click', nextSlide);

previousSlideBtn?.addEventListener('click', previousSlide);

//////ADDING TRANSITION WHEN USER SCROLLS TO EACH SECTION
const allSections = document.querySelectorAll('.section');

const observeSections = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  if (entry.isIntersecting) {
    entry.target.classList.remove('section-hidden');
  }

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(observeSections, {
  root: null,
  threshold: 0,
  rootMargin: '-100px',
});

allSections.forEach(section => {
  section.classList.add('section-hidden');
  sectionObserver.observe(section);
});

////Cookies popup
const cookiesAcceptBtn = document.querySelector('.cookies-accept-btn');
const cookiesContainer = document.querySelector('.cookies-container');

const showCookiesInfo = () => {
  if (localStorage.getItem('pughouse-cookies') === 'accepted') {
    cookiesContainer.classList.add('hide');
  } else {
    cookiesContainer.classList.remove('hide');
    backgroundOverlay.classList.remove('hide');
    cookiesStoreData();
  }
};

document.addEventListener('DOMContentLoaded', showCookiesInfo);

const cookiesStoreData = () => {
  localStorage.setItem('pughouse-cookies', 'accepted');
  cookiesContainer.classList.add('hide');
  backgroundOverlay.classList.add('hide');
};

cookiesAcceptBtn.addEventListener('click', cookiesStoreData);
