        $(document).ready(function () {
            setTimeout(function () {
                var navHeight = $('.navbar').height();
                var conHeight = $('body').height();
                var sHeight = conHeight - navHeight;

                $('#vidbutton').css('padding-top', ((sHeight - 2) / 2) + 'px');
                $('#vidbutton').css('padding-bottom', ((sHeight - 2) / 2) + 'px');
            }, 10);
        });

        $(window).resize(function () {
            setTimeout(function () {
                var navHeight = $('.navbar').height();
                var conHeight = $('body').height();
                var sHeight = conHeight - navHeight;

                $('#vidbutton').css('padding-top', ((sHeight - 2) / 2) + 'px');
                $('#vidbutton').css('padding-bottom', ((sHeight - 2) / 2) + 'px');
            }, 10);
        });

        $(window).on("orientationchange", function () {
            setTimeout(function () {
                var navHeight = $('.navbar').height();
                var conHeight = $('body').height();
                var sHeight = conHeight - navHeight;

                $('#vidbutton').css('padding-top', ((sHeight - 2) / 2) + 'px');
                $('#vidbutton').css('padding-bottom', ((sHeight - 2) / 2) + 'px');
            }, 10);
        });
