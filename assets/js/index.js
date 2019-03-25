$(document).ready(function() {
    var navBar = $('#header__nav');
    $(document).scroll(function() {
        navBar.toggleClass('opaque__nav', $(this).scrollTop() > navBar.height());
    })

})

