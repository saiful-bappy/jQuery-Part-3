jQuery(document).ready(function () {
  jQuery(".menu-bar .bar").click(function () {
    return false;
  });

  jQuery(".menu-bar .bar i").click(function () {
    jQuery(".menu-bar ul").slideToggle(500);
    jQuery(window).resize(function () {
      var screenWidth = jQuery(window).width();
      if (screenWidth > 992) {
        jQuery(".menu-bar ul").show();
      }
    });
    return false;
  });

  var screenSize = jQuery(window).width();

  jQuery(window).resize(function () {
    var screenSize = jQuery(window).width();
    jQuery(".widthBox").text(screenSize).css({ fontSize: 26 });
  });

  jQuery(".widthBox").text(screenSize).css({ fontSize: 26 });

  var uporThekeDurotto = jQuery(window).scrollTop();
  jQuery(window).scroll(function () {
    var uporThekeDurotto = jQuery(window).scrollTop();
    jQuery(".heightBox").text(parseInt(uporThekeDurotto)).css({ fontSize: 26 });
  });
  jQuery(".heightBox").text(uporThekeDurotto).css({ fontSize: 26 });

  jQuery(".scrollToTop").click(function () {
    jQuery("html").animate({ scrollTop: "0" }, 1000);
    return false;
  });

  jQuery(window).scroll(function () {
    var headerTopHeight = jQuery(".header-top").outerHeight();
    var headerBottomHeight = jQuery(".header-bottom").outerHeight();

    var totalHeight = headerTopHeight + headerBottomHeight;

    var uporThekeDurotto = jQuery(window).scrollTop();

    if (uporThekeDurotto > totalHeight) {
      jQuery(".menu-bar").addClass("fixed");
    } else {
      jQuery(".menu-bar").removeClass("fixed");
    }

    if (uporThekeDurotto > 200) {
      jQuery(".scrollToTop").fadeIn(500);
    } else {
      jQuery(".scrollToTop").fadeOut(500);
    }
  });
});
