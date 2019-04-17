$(document).ready(function() {
    function within(section, position) {
        var sectionTop = section.position().top;
        var sectionHeight = section.height();
        var sectionBottom = sectionTop + sectionHeight;

        return (position >= sectionTop) && (position <= sectionBottom);
    }

    function manageDynamicLinkColors() {
        var position = $(document).scrollTop();
        var links = $('.header__nav__link')

        links.each(function(index, link) {
            var section = $($(link).attr('href'));

            $(link).toggleClass('header__nav__link--active', within(section, position));
        });
    }

    function manageDynamicNavigationBarColors() {
        var navigationBar = $('#header__nav')
        var position = $(document).scrollTop();

        navigationBar.toggleClass('opaque__nav', position > navigationBar.height());
    }

    $(document).scroll(function() {
      manageDynamicNavigationBarColors();
      manageDynamicLinkColors();
    });
})
