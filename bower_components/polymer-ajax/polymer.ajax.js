var routes = {
  "home-link": {
    url: "/",
    area: ".home-page"
  },
  "presentations-link": {
    url: "/presentations",
    area: ".presentations-page"
  }
};

$(function () {
  setTimeout(function () {
    for (var route in routes) {
      $("." + route).off().on('click', function (e) {
        route = routes[$(e.target).attr("class").split(" ")[0]];
        $(route.area).html("<div fit layout vertical center center-justified fullbleed><paper-spinner class='filler-spinner' active></paper-spinner</div>");
        $.pjax({url: route.url, container: route.area, fragment: route.area});
      });
    }
  }, 1000);
});