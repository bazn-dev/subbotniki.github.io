(function ($) {
    $(function () {
        window.onload = function () {
            setTimeout(function () {
                scrollTo(0, -1);
            }, 0);
        };

        $('.sidenav').sidenav();
        $('.parallax').parallax();
        $('.materialboxed').materialbox();

        $(window).on('load', function () {
            $(this).scrollTop(0);
            $("body").css("overflow-y", "hidden");
            $('.main-preloader-wrapper').delay(500).fadeOut();
            setTimeout(function () {
                $('.main-wrapper').css("opacity", "1");
                $('.parallax').parallax();
                $("body").css("overflow-y", "auto");
            }, 100);
        });

        $(".anchor-link").on("click", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 700);
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() >= $(window).height()) {
                $('.btn-up').addClass('active');
            } else {
                $('.btn-up').removeClass('active');
            }
        });

        $('.btn-up').on('click', function () {
            $('body,html').animate({scrollTop: 0}, 700);
        });

        $("#form-contact").submit(function (e) {
            e.preventDefault();
            var formData = $(this).serialize();
            $.ajax({
                url: "https://docs.google.com/forms/d/e/1FAIpQLSdPKY-KF0B6M1N98jKnQNVzSR6Qnak_WUwDN5D7xl89fwEnUg/formResponse", // слать надо сюда, строку с буковками надо заменить на вашу, это атрибут action формы
                data: formData,
                type: "POST",
                dataType: "xml",
                beforeSend: function () {
                    $(this).find('button').attr('disabled');
                },
                statusCode: {
                    0: function () {
                        $('#form-contact')[0].reset();
                        M.toast({html: 'Спасибо! Ваше сообщение отправлено!'});
                    },
                    200: function () {
                        $('#form-contact')[0].reset();
                        M.toast({html: 'Спасибо! Ваше сообщение отправлено!'});
                    }
                }
            });
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space
