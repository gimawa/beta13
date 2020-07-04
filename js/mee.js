        $(document).ready(function () {
            setTimeout(function () {
                var position = $(element).offset();

                $('#me').css(position);
            }, 200);
        });

        $(window).resize(function () {
            setTimeout(function () {
                var winHeight = $(window).height();
                var navHeight = $('.navbar').height();
                var conHeight = $('body').height();
                var sHeight = conHeight - navHeight;

                $('.Container').css('height', winHeight + 'px');
                $('.subContainer').css('height', sHeight - 35.84 + 'px');
                $('.prev').css('padding-top', ((sHeight - 50) / 2) + 17.92 + 'px');
                $('.prev').css('padding-bottom', ((sHeight - 50) / 2) - 17.92 + 'px');
                $('.next').css('padding-top', ((sHeight - 50) / 2) + 17, 92 + 'px');
                $('.next').css('padding-bottom', ((sHeight - 50) / 2) - 17.92 + 'px');
            }, 200);
        });

        $(window).on("orientationchange", function () {
            setTimeout(function () {
                var winHeight = $(window).height();
                var navHeight = $('.navbar').height();
                var conHeight = $('body').height();
                var sHeight = conHeight - navHeight;

                $('.Container').css('height', winHeight + 'px');
                $('.subContainer').css('height', sHeight - 35.84 + 'px');
                $('.prev').css('padding-top', ((sHeight - 50) / 2) + 17.92 + 'px');
                $('.prev').css('padding-bottom', ((sHeight - 50) / 2) - 17.92 + 'px');
                $('.next').css('padding-top', ((sHeight - 50) / 2) + 17, 92 + 'px');
                $('.next').css('padding-bottom', ((sHeight - 50) / 2) - 17.92 + 'px');
            }, 200);
        });
