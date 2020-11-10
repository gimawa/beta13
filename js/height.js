        $(document).ready(function () {
            setTimeout(function () {
                var winWidth = $('body').width();
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

                if ((sHeight - 35.84) <= (1700*(9/16))) {// rechts ist die Höhe (abgeleitet von der Breite) bei der der Text noch gut aussieht. sonst zerfällt die Seite
                    $('#info').css('height', sHeight - 35.84 + 'px');
                    $('#info').css('width', (sHeight - 35.84) * (16 / 9) + 'px');
                } else {
                    $('#info').css('height', 956.25 + 'px');
                    $('#info').css('width', 1700 + 'px');
                }
            }, 200);
            window.setInterval(function () {
                var listWidth = $('#list').width();
                var infoWidth = $('#info').width();
                var listHeight = $('#list').height();
                var infoHeight = $('#info').height();
                var textHeight = $('#text').height();
                var navHeight = $('.navbar').height();

                $('#buffer').css('height', (listHeight) + 'px');
                $('#buffer').css('width', (infoWidth - listWidth) - 200 + 'px');

                if ((textHeight + 80) >= (infoHeight - listHeight)) {
                    $('#text').css('padding-bottom', (navHeight) + 'px');
                } else {
                    $('#text').css('padding-bottom', '0px');
                }
            }, 100);
        });

        $(window).resize(function () {
            setTimeout(function () {
                var winWidth = $('body').width();
                var winHeight = $(window).height();
                var navHeight = $('.navbar').height();
                var conHeight = $('body').height();
                var sHeight = conHeight - navHeight;
                var listWidth = $('#list').width();
                var infoWidth = $('#info').width();
                var listHeight = $('#list').height();
                var infoHeight = $('#info').height();

                $('#buffer').css('height', (listHeight) + 'px');
                $('#buffer').css('width', (infoWidth - listWidth) - 100 + 'px');
                $('.Container').css('height', winHeight + 'px');
                $('.subContainer').css('height', sHeight - 35.84 + 'px');
                $('.prev').css('padding-top', ((sHeight - 50) / 2) + 17.92 + 'px');
                $('.prev').css('padding-bottom', ((sHeight - 50) / 2) - 17.92 + 'px');
                $('.next').css('padding-top', ((sHeight - 50) / 2) + 17, 92 + 'px');
                $('.next').css('padding-bottom', ((sHeight - 50) / 2) - 17.92 + 'px');

                if ((sHeight - 35.84) <= (1700*(9/16))) {// rechts ist die Höhe (abgeleitet von der Breite) bei der der Text noch gut aussieht. sonst zerfällt die Seite
                    $('#info').css('height', sHeight - 35.84 + 'px');
                    $('#info').css('width', (sHeight - 35.84) * (16 / 9) + 'px');
                } else {
                    $('#info').css('height', 956.25 + 'px');
                    $('#info').css('width', 1700 + 'px');
                }

                if ((textHeight + 80) >= (infoHeight - listHeight)) {
                    $('#text').css('padding-bottom', (navHeight) + 'px');
                } else {
                    $('#text').css('padding-bottom', '0px');
                }
            }, 200);
        });

        $(window).on("orientationchange", function () {
            setTimeout(function () {
                var winWidth = $('body').width();
                var winHeight = $(window).height();
                var navHeight = $('.navbar').height();
                var conHeight = $('body').height();
                var sHeight = conHeight - navHeight;
                var listWidth = $('#list').width();
                var infoWidth = $('#info').width();
                var listHeight = $('#list').height();
                var infoHeight = $('#info').height();

                $('#buffer').css('height', (listHeight) + 'px');
                $('#buffer').css('width', (infoWidth - listWidth) - 100 + 'px');
                $('.Container').css('height', winHeight + 'px');
                $('.subContainer').css('height', sHeight - 35.84 + 'px');
                $('#info').css('height', sHeight - 35.84 + 'px');
                $('#info').css('width', (sHeight - 35.84) * (16 / 9) + 'px');
                $('.prev').css('padding-top', ((sHeight - 50) / 2) + 17.92 + 'px');
                $('.prev').css('padding-bottom', ((sHeight - 50) / 2) - 17.92 + 'px');
                $('.next').css('padding-top', ((sHeight - 50) / 2) + 17, 92 + 'px');
                $('.next').css('padding-bottom', ((sHeight - 50) / 2) - 17.92 + 'px');

                if ((sHeight - 35.84) <= (1700*(9/16))) {// rechts ist die Höhe (abgeleitet von der Breite) bei der der Text noch gut aussieht. sonst zerfällt die Seite
                    $('#info').css('height', sHeight - 35.84 + 'px');
                    $('#info').css('width', (sHeight - 35.84) * (16 / 9) + 'px');
                } else {
                    $('#info').css('height', 956.25 + 'px');
                    $('#info').css('width', 1700 + 'px');
                }

                if ((textHeight + 80) >= (infoHeight - listHeight)) {
                    $('#text').css('padding-bottom', (navHeight) + 'px');
                } else {
                    $('#text').css('padding-bottom', '0px');
                }
            }, 200);
        });
