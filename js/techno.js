$(document).ready(function () {
    $(".humbger-menu").click(function () {
      $(".mobile-menu").show("slide, right, 500");
      $(".overlay").show("slide, right, 500");
    });
    $(".close, .overlay").click(function () {
      $(".mobile-menu").hide("slide, right, 500");
      $(".overlay").hide("slide, right, 500");
    });
    $(".menu-bar").click(function () {
      $(".home").toggle("slide, right, 500");
    });
    $(".search").click(function () {
      $(".search-input").show("slide, right, 400");
    });
    $(".input-search").click(function () {
      $(".search-detail").show("slide, right, 400");
    });
  });