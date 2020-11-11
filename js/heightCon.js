        $(document).ready(function () {
            setTimeout(function () {
                var winWidth = $(window).width();
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

                // GRÖSSENANPASSUNG INFO DIV

                if ((winWidth - (35.84 * 2)) >= 1700 && (sHeight - 35.84) >= 956.25) { // wenn absurd großer bildschirm
                    $('#info').css('height', 956.25 + 'px');
                    $('#info').css('width', 1700 + 'px');
                } else if ((winWidth - (35.84 * 2)) >= ((sHeight - 35.84) * (16 / 9))) { // wenn breit, orientier dich an höhe
                    if ((sHeight - 35.84) <= (1000 * (9 / 16))) { // wenn absurd breit, bleib breiter als bild
                        $('#info').css('height', sHeight - 35.84 + 'px');
                        $('#info').css('width', (winWidth - (35.84 * 2)) + 'px');
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

                var winWidth = $(window).width();
                var subTextHeight = $('#subText').height();
                var moverConHeight = $('#moverCon').height();
                var listPos = $('#list').offset();
                var textPos = $('#text').offset();
                var textWidth = $('#text').width();
                var tlWidth = $('#timelineR2').width;

                $('#buffer').css('height', (listHeight) + 'px');
                $('#buffer').css('width', (infoWidth - listWidth) - 200 + 'px');

                if ((subTextHeight + 80) >= (infoHeight - listHeight - moverConHeight)) {
                    $('#text').css('padding-bottom', (navHeight) + 'px');
                } else {
                    $('#text').css('padding-bottom', '0px');
                }

                // EXTRAS FÜR CONTACT

                $('#moverCon').css('width', infoWidth + 'px');

                if ((((infoHeight - listHeight) - subTextHeight - 80) * 0.382) >= 90) {
                    $('#moverCon').css('height', (((infoHeight - listHeight) - subTextHeight - 80) * 0.382) + 'px');
                } else {
                    if (((infoWidth - listWidth) + ((winWidth - infoWidth) / 2)) >= 1000) { //groß/rechenr
                        $('#moverCon').css('height', 90 + 'px');
                    } else if (winWidth >= 610) { //mittel/ipad
                        $('#moverCon').css('height', 90 + 'px');
                    } else { //klein/handy
                        $('#moverCon').css('height', 190 + 'px');
                    }
                }

                if (winWidth >= (900 * 0.467328138)) {
                    $('#timelineR2').css('height', 900 + 'px');
                } else {
                    $('#timelineR2').css('height', (winWidth * 2.1398240735) + 100 + 'px');
                }

                if (((infoWidth - listWidth) + ((winWidth - infoWidth) / 2)) >= 890) { //groß/rechenr
                    $('#me').css('top', listPos.top - 110 + 'px');
                    $('#me').css('left', listPos.left + 330 + 'px');
                    $('#me').css('right', 'auto');

                    $('#timelineHolder').css('display', 'block');
                    $('#timelineR0').css('display', 'none');
                    $('#timelineR1').css('display', 'none');
                    $('#timelineR2').css('display', 'none');

                    $('#timeline').css('top', listPos.top - 120 + 'px');
                    $('#timeline').css('left', listPos.left + 240 + 'px');
                } else if (winWidth >= 700) { //mittel/ipad
                    $('#me').css('top', listPos.top - 110 + 'px');
                    $('#me').css('left', listPos.left + 330 + 'px');
                    $('#me').css('right', 'auto');

                    $('#timelineHolder').css('display', 'none');
                    $('#timelineR0').css('display', 'block');
                    $('#timelineR1').css('display', 'none');
                    $('#timelineR2').css('display', 'block');

                    $('#timelineR0').css('top', listPos.top + 105 + 'px');
                    $('#timelineR0').css('left', listPos.left + 300 + 'px');
                    $('#timelineR2').css('top', textPos.top + textHeight + 45 + 'px');
                    $('#timelineR2').css('left', textPos.left + (textWidth * 0.67) + 'px');
                    $('#timelineR2').css('padding-bottom', navHeight + 'px');
                } else if (winWidth >= 610) { //mittel2/ipad
                    $('#me').css('top', listPos.top - 110 + 'px');
                    $('#me').css('left', listPos.left + 330 + 'px');
                    $('#me').css('right', 'auto');

                    $('#timelineHolder').css('display', 'none');
                    $('#timelineR0').css('display', 'none');
                    $('#timelineR1').css('display', 'block');
                    $('#timelineR2').css('display', 'block');

                    $('#timelineR1').css('top', listPos.top + 105 + 'px');
                    $('#timelineR1').css('left', listPos.left + 300 + 'px');
                    $('#timelineR2').css('top', textPos.top + textHeight + 45 + 'px');
                    $('#timelineR2').css('left', textPos.left + (textWidth * 0.5) + 'px');
                    $('#timelineR2').css('padding-bottom', navHeight + 'px');
                } else if (winWidth >= 421) { //klein4/handy
                    $('#me').css('top', listPos.top - 217 + 'px');
                    $('#me').css('left', 'auto');
                    $('#me').css('right', 30 + 'px');

                    $('#timelineHolder').css('display', 'none');
                    $('#timelineR0').css('display', 'none');
                    $('#timelineR1').css('display', 'block');
                    $('#timelineR2').css('display', 'block');

                    $('#timelineR1').css('top', listPos.top + 105 + 'px');
                    $('#timelineR1').css('left', listPos.left + 300 + 'px');
                    $('#timelineR2').css('top', textPos.top + textHeight + 45 + 'px');
                    $('#timelineR2').css('left', textPos.left + (textWidth * 0.5) + 'px');
                    $('#timelineR2').css('padding-bottom', navHeight + 'px');
                } else if (winWidth >= 404) { //klein3/handy
                    $('#me').css('top', listPos.top - 217 + 'px');
                    $('#me').css('left', 'auto');
                    $('#me').css('right', 30 + 'px');

                    $('#timelineHolder').css('display', 'none');
                    $('#timelineR0').css('display', 'none');
                    $('#timelineR1').css('display', 'block');
                    $('#timelineR2').css('display', 'block');

                    $('#timelineR1').css('top', listPos.top + 105 + 'px');
                    $('#timelineR1').css('left', listPos.left + 200 + 'px');
                    $('#timelineR2').css('top', textPos.top + textHeight + 45 + 'px');
                    $('#timelineR2').css('left', textPos.left + (textWidth * 0.5) + 'px');
                    $('#timelineR2').css('padding-bottom', navHeight + 'px');
                } else if (winWidth >= 391) { //klein2/handy
                    $('#me').css('top', listPos.top - 217 + 'px');
                    $('#me').css('left', 'auto');
                    $('#me').css('right', 30 + 'px');

                    $('#timelineHolder').css('display', 'none');
                    $('#timelineR0').css('display', 'none');
                    $('#timelineR1').css('display', 'block');
                    $('#timelineR2').css('display', 'block');

                    $('#timelineR1').css('top', listPos.top + 133 + 'px');
                    $('#timelineR1').css('left', listPos.left + 200 + 'px');
                    $('#timelineR2').css('top', textPos.top + textHeight + 45 + 'px');
                    $('#timelineR2').css('left', textPos.left + (textWidth * 0.5) + 'px');
                    $('#timelineR2').css('padding-bottom', navHeight + 'px');
                } else { //klein/minihandy
                    $('#me').css('top', listPos.top - 217 + 'px');
                    $('#me').css('left', 'auto');
                    $('#me').css('right', 30 + 'px');

                    $('#timelineHolder').css('display', 'none');
                    $('#timelineR0').css('display', 'none');
                    $('#timelineR1').css('display', 'block');
                    $('#timelineR2').css('display', 'block');

                    $('#timelineR1').css('top', listPos.top + 164 + 'px');
                    $('#timelineR1').css('left', listPos.left + 200 + 'px');
                    $('#timelineR2').css('top', textPos.top + textHeight + 45 + 'px');
                    $('#timelineR2').css('left', textPos.left + (textWidth * 0.5) + 'px');
                    $('#timelineR2').css('padding-bottom', navHeight + 'px');
                }
            }, 100);
        });

        $(window).resize(function () {
            setTimeout(function () {
                var winWidth = $(window).width();
                var winHeight = $(window).height();
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
                        $('#info').css('width', (winWidth - (35.84 * 2)) + 'px');
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
                var winWidth = $(window).width();
                var winHeight = $(window).height();
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
                        $('#info').css('width', (winWidth - (35.84 * 2)) + 'px');
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
