"use strict";

const source = document.body.querySelector(
  "li.headered.smaller > span:first-child"
);
const target = document.body.querySelector("#target");

function set() {
  target.href = "https://weather.gc.ca/city/pages/bc-88_metric_e.html";
  target.innerHTML = "Sandspit";
  source.removeEventListener("dblclick", set);
}

source.addEventListener("dblclick", set);
