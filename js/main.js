"use strict";

const nav = document.querySelector(".website-navigation");
const navHeight = nav.getBoundingClientRect().height;
const headerContainer = document.querySelector(".header-container");

////Setting 100vh on header home page
const setHeaderVh = () => {
  headerContainer.style.minHeight = `calc(100vh - ${navHeight}px)`;
};
setHeaderVh();

////Welcome to gang info popup
const joinGangBtn = document.querySelector("#mc-embedded-subscribe");
const signUpContainer = document.querySelector(".sign-up-to-gang-container");
const welcomeContainer = document.querySelector(".welcome-letter-container");

const welcomeGang = () => {
  const checkmark = document.querySelector("#gdpr_96662");
  const emailInput = document.querySelector("#mce-EMAIL");
  const nameInput = document.querySelector("#mce-FNAME");

  joinGangBtn.addEventListener("click", (e) => {
    if (checkmark.checked && emailInput.value.includes("@") && nameInput.value !== "") {
      signUpContainer.classList.add("hide");
      welcomeContainer.classList.remove("hide");
    }
  });
};

welcomeGang();
