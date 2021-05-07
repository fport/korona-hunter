function locationHashChanged() {
  if (!getCurrentPage(location.hash)) {
    document.getElementById("root").innerHTML = "404 Not Found";
  }
}

function route(url, data) {
  window.location.hash = url;
  let currentPage = getCurrentPage(window.location.hash);
  if (currentPage) {
    document.getElementById("root").innerHTML = currentPage.html(data);
  } else {
    document.getElementById("root").innerHTML = "404 Not Found";
  }
}

function getCurrentPage(url) {
  return pages.find(
    (x) => x.url.toLocaleLowerCase() == url.toLocaleLowerCase()
  );
}
if (location.hash == "") {
  route(location.hash, {});
}
window.onhashchange = locationHashChanged;
window.onload = locationHashChanged;
