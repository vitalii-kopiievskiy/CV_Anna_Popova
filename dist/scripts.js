(function($) {
  $(function() {
    $('ul.nav__menu').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
        .closest('div.container')
        .find('div.tabs__content')
        .removeClass('active')
        .eq($(this).index())
        .addClass('active');
    });
  });
})(jQuery);
