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


    $('#header__nav__button').on("click", function(){
      $('#header__nav__links').slideToggle("slow", function () {
      });
    })
})

    function setUpTestimonials() {
        var testimonials = [
            {
              'id': '#jenny-smiths__image',
              'testimonial': 'I have no regrets! It fits my needs perfectly.',
              'name': 'Jenny Smiths'
            },
            {
              'id': '#andrew-beattie__image',
              'testimonial': 'Just eh... the best place to learn to code. I have been.',
              'name': 'Andrew Beattie'
            },
            {
              'id': '#mark-finch__image',
              'testimonial': 'I don\'t know what else to say.',
              'name': 'Mark Finch'
            },
            {
              'id': '#ayesha-couch__image',
              'testimonial': 'I just can\'t get enough of Code Co-Op. I want to get a T-Shirt with Code Co-Op on it so I can show it off to everyone.',
              'name': 'Ayesha Couch'
            },
            {
              'id': '#sheep__image',
              'testimonial': 'Baa. Baa. Baa.',
              'name': 'Sheep'
            }
        ];

        var defaultTestimonial = testimonials[2];

        function updateTestimonial(testimonial) {
            $('.faces__active').removeClass('faces__active');
            $('#testimonial__quote').text("“" + testimonial['testimonial'] + "”");
            $('#testimonial__footer').text('- ' + testimonial['name']);
            $(testimonial['id']).addClass('faces__active');
        }

        updateTestimonial(defaultTestimonial);

        testimonials.forEach(function (testimonial) {
            $(testimonial['id']).click(function () {
                updateTestimonial(testimonial);
            });
        });
    }

    setUpTestimonials();
});
