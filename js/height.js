        $(document).ready(function () {
            setTimeout(function () {
                var winWidth = $('body').width();
                var winHeight = $('body').height();
                var navHeight = $('.navbar').height();
                var conHeight = $('body').height();
                var sHeight = conHeight - navHeight;

                $('.Container').css('height', winHeight + 'px');
                $('.subContainer').css('height', sHeight - 35.84 + 'px');
                $('.prev').css('padding-top', ((sHeight - 50) / 2) + 17.92 + 'px');
                $('.prev').css('padding-bottom', ((sHeight - 50) / 2) - 17.92 + 'px');
                $('.next').css('padding-top', ((sHeight - 50) / 2) + 17, 92 + 'px');
                $('.next').css('padding-bottom', ((sHeight - 50) / 2) - 17.92 + 'px');

                // GRÖSSENANPASSUNG INFO DIV

                if ((winWidth - (35.84 * 2)) >= 1700 && (sHeight - 35.84) >= 956.25) { // wenn absurd großer bildschirm
                    $('#info').css('height', 956.25 + 'px');
                    $('#info').css('width', 1700 + 'px');
                } else if ((winWidth - (35.84 * 2)) >= ((sHeight - 35.84) * (16 / 9))) { // wenn breit, orientier dich an höhe
                    if ((sHeight - 35.84) <= (1000 * (9 / 16))) { // wenn absurd breit, bleib breiter als bild
                        $('#info').css('height', sHeight - 35.84 + 'px');
                        $('#info').css('width', (winWidth - (35.84 * 2))  + 'px');
                    } else {
                        $('#info').css('height', sHeight - 35.84 + 'px');
                        $('#info').css('width', (sHeight - 35.84) * (16 / 9) + 'px');
                    }
                } else { // wenn schmal, orientier dich an breite
                    if ((sHeight - 35.84) <= (1700 * (9 / 16))) { // wenn absurd schmal, bleib höher als bild
                        $('#info').css('height', sHeight - 35.84 + 'px');
                        $('#info').css('width', (winWidth - (35.84 * 2)) + 'px');
                    } else {
                        $('#info').css('width', winWidth - (35.84 * 2) + 'px');
                        $('#info').css('height', (winWidth - (35.84 * 2)) * (9 / 16) + 'px');
                    }
                }
            }, 200);

            // GRÖSSENANPASSUNG BUFFER DIVs

            window.setInterval(function () {
                var listWidth = $('#list').width();
                var infoWidth = $('#info').width();
                var listHeight = $('#list').outerHeight();
                var infoHeight = $('#info').height();
                var textHeight = $('#text').height();
                var navHeight = $('.navbar').height();

                var winWidth = $('body').width();
                var subTextHeight = $('#subText').height();

                $('#buffer').css('height', (listHeight) + 'px');
                $('#buffer').css('width', (infoWidth - listWidth) - 200 + 'px');

                if ((textHeight + 80) >= (infoHeight - listHeight)) {
                    $('#text').css('padding-bottom', (navHeight) + 'px');
                } else {
                    $('#text').css('padding-bottom', '0px');
                }

                $('#mover').css('width', infoWidth + 'px');
                $('#mover').css('height', (((infoHeight - listHeight) - textHeight - 80) * 0.382) + 'px');
            }, 100);
        });

        $(window).resize(function () {
            setTimeout(function () {
                var winWidth = $('body').width();
                var winHeight = $('body').height();
                var navHeight = $('.navbar').height();
                var conHeight = $('body').height();
                var sHeight = conHeight - navHeight;
                var listWidth = $('#list').width();
                var infoWidth = $('#info').width();
                var listHeight = $('#list').outerHeight();
                var infoHeight = $('#info').height();

                $('#buffer').css('height', (listHeight) + 'px');
                $('#buffer').css('width', (infoWidth - listWidth) - 100 + 'px');
                $('.Container').css('height', winHeight + 'px');
                $('.subContainer').css('height', sHeight - 35.84 + 'px');
                $('.prev').css('padding-top', ((sHeight - 50) / 2) + 17.92 + 'px');
                $('.prev').css('padding-bottom', ((sHeight - 50) / 2) - 17.92 + 'px');
                $('.next').css('padding-top', ((sHeight - 50) / 2) + 17, 92 + 'px');
                $('.next').css('padding-bottom', ((sHeight - 50) / 2) - 17.92 + 'px');

                // GRÖSSENANPASSUNG INFO DIV

                if ((winWidth - (35.84 * 2)) >= 1700 && (sHeight - 35.84) >= 956.25) { // wenn absurd großer bildschirm
                    $('#info').css('height', 956.25 + 'px');
                    $('#info').css('width', 1700 + 'px');
                } else if ((winWidth - (35.84 * 2)) >= ((sHeight - 35.84) * (16 / 9))) { // wenn breit, orientier dich an höhe
                    if ((sHeight - 35.84) <= (1000 * (9 / 16))) { // wenn absurd breit, bleib breiter als bild
                        $('#info').css('height', sHeight - 35.84 + 'px');
                        $('#info').css('width', (winWidth - (35.84 * 2))  + 'px');
                    } else {
                        $('#info').css('height', sHeight - 35.84 + 'px');
                        $('#info').css('width', (sHeight - 35.84) * (16 / 9) + 'px');
                    }
                } else { // wenn schmal, orientier dich an breite
                    if ((sHeight - 35.84) <= (1700 * (9 / 16))) { // wenn absurd schmal, bleib höher als bild
                        $('#info').css('height', sHeight - 35.84 + 'px');
                        $('#info').css('width', (winWidth - (35.84 * 2)) + 'px');
                    } else {
                        $('#info').css('width', winWidth - (35.84 * 2) + 'px');
                        $('#info').css('height', (winWidth - (35.84 * 2)) * (9 / 16) + 'px');
                    }
                }

                if ((textHeight + 80) >= (infoHeight - listHeight)) {
                    $('#text').css('padding-bottom', (navHeight) + 'px');
                } else {
                    $('#text').css('padding-bottom', '0px');
                }

                $('#mover').css('width', infoWidth + 'px');
                $('#mover').css('height', (((infoHeight - listHeight) - textHeight - 80) * 0.5) + 'px');
            }, 200);
        });

        $(window).on("orientationchange", function () {
            setTimeout(function () {
                var winWidth = $('body').width();
                var winHeight = $('body').height();
                var navHeight = $('.navbar').height();
                var conHeight = $('body').height();
                var sHeight = conHeight - navHeight;
                var listWidth = $('#list').width();
                var infoWidth = $('#info').width();
                var listHeight = $('#list').outerHeight();
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

                // GRÖSSENANPASSUNG INFO DIV

                if ((winWidth - (35.84 * 2)) >= 1700 && (sHeight - 35.84) >= 956.25) { // wenn absurd großer bildschirm
                    $('#info').css('height', 956.25 + 'px');
                    $('#info').css('width', 1700 + 'px');
                } else if ((winWidth - (35.84 * 2)) >= ((sHeight - 35.84) * (16 / 9))) { // wenn breit, orientier dich an höhe
                    if ((sHeight - 35.84) <= (1000 * (9 / 16))) { // wenn absurd breit, bleib breiter als bild
                        $('#info').css('height', sHeight - 35.84 + 'px');
                        $('#info').css('width', (winWidth - (35.84 * 2))  + 'px');
                    } else {
                        $('#info').css('height', sHeight - 35.84 + 'px');
                        $('#info').css('width', (sHeight - 35.84) * (16 / 9) + 'px');
                    }
                } else { // wenn schmal, orientier dich an breite
                    if ((sHeight - 35.84) <= (1700 * (9 / 16))) { // wenn absurd schmal, bleib höher als bild
                        $('#info').css('height', sHeight - 35.84 + 'px');
                        $('#info').css('width', (winWidth - (35.84 * 2)) + 'px');
                    } else {
                        $('#info').css('width', winWidth - (35.84 * 2) + 'px');
                        $('#info').css('height', (winWidth - (35.84 * 2)) * (9 / 16) + 'px');
                    }
                }

                if ((textHeight + 80) >= (infoHeight - listHeight)) {
                    $('#text').css('padding-bottom', (navHeight) + 'px');
                } else {
                    $('#text').css('padding-bottom', '0px');
                }

                $('#mover').css('width', infoWidth + 'px');
                $('#mover').css('height', (((infoHeight - listHeight) - textHeight - 80) * 0.5) + 'px');
            }, 200);
        });
