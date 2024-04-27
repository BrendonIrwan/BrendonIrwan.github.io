"use strict";

document.querySelector("#url-correction").href = location
  .toString()
  .toLowerCase()
  .replace("brendonirwan.git", "ed7n.git");
