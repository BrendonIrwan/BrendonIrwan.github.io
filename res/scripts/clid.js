{
  let params = new URLSearchParams(location.search),
    element = document.querySelector("#front-matter"),
    prepend = (string) => {
      element.insertAdjacentHTML(
          "afterbegin", "<li class=\"no-margin\">" + string + "</li>");
    };
  if (params.has("fbclid"))
    prepend("Found Facebook click identifier (fbclid).");
  if (params.has("gclid"))
    prepend("Found Google click identifier (gclid).");
}
