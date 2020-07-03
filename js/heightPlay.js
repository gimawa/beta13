        $(document).ready(function () {
            var navHeight = $('.navbar').height();
            var conHeight = $('body').height();
            var sHeight = conHeight - navHeight;

            $('#vidbutton').css('padding-top', ((sHeight-2) / 2) + 'px');
            $('#vidbutton').css('padding-bottom', ((sHeight-2) / 2) + 'px');
        });

        $(window).resize(function () {
            var navHeight = $('.navbar').height();
            var conHeight = $('body').height();
            var sHeight = conHeight - navHeight;

            $('#vidbutton').css('padding-top', ((sHeight-2) / 2) + 'px');
            $('#vidbutton').css('padding-bottom', ((sHeight-2) / 2) + 'px');
        });