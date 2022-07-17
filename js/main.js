"use strict";

const nav = document.querySelector(".website-navigation");
const navHeight = nav.getBoundingClientRect().height;
const headerContainer = document.querySelector(".header-container");

//Setting 100vh on header home page
const setHeaderVh = () => {
  headerContainer.style.minHeight = `calc(100vh - ${navHeight}px)`;
};
setHeaderVh();

//FIXME: it doesn't work !!
