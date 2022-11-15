import { gsap, Power2 } from "gsap"

import "../styles/style.scss";

const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const menu = document.querySelector(".menu");
const headline = document.querySelector(".headline");

const tl = gsap.timeline();

tl.fromTo(hero, { height: "0%", }, { height: "80%", ease: Power2.easeInOut, duration: 1 })
  .fromTo(hero, { width: "100%" }, { width: "80%", duration: 1.2, ease: Power2.easeInOut })
  .fromTo(slider, { y: "-100%" }, { y: "0", duration: 1.2, ease: Power2.easeInOut }, "-=1.2")
  .fromTo(logo, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.5 }, "-=0.5")
  .fromTo(menu, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.5 }, "-=0.5")
  .fromTo(headline, { opacity: 0, x: 0 }, { opacity: 1, x: 30, duration: 0.5 }, "-=0.5");
