$(document).ready(function () {
  //   Hide and Show Events
  //   Window Click
  $(window).click(function (e) {
    // Check Hide Language Tab
    if (!e.target.closest(".header__action.language")) {
      let lgHiddenBar = $(".language__hidden");

      if (lgHiddenBar.hasClass("active")) {
        lgHiddenBar.removeClass("active");
        $(".language__arrow").removeClass("active");
      }
    }
  });

  // Show and Hide language
  $(".language__display").click(function (e) {
    $(".language__hidden").toggleClass("active");

    $(".language__arrow").toggleClass("active");
  });

  $(".header .menu__link").click(function (e) {
    $(".menu__link").removeClass("active");
    $(this).addClass("active");
  });

  //   Event
  $(".language__item").click(function (e) {
    let language = this.dataset.id;
    let lgImgMain = $(".language__img-main");
    let currentLanguage = lgImgMain.attr("data-id");

    if (language != currentLanguage) {
      $(".loading-page").addClass("active");
      $(".language__hidden").removeClass("active");
      $(".language__arrow").removeClass("active");

      setTimeout(() => {
        lgImgMain.attr("data-id", language);
        lgImgMain.attr("src", `./images/${language}-flag.png`);
        $(".loading-page").removeClass("active");
      }, 5000);
    }
  });
});
