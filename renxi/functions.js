var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
    $.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html('');
            var timer = setInterval(function() {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 75);
        });
        return this;
    };
})(jQuery);

// Hàm tính thời gian từ ngày 30/1/2025 đến hiện tại
function timeElapse(startDate) {
            var current = new Date();
            var seconds = Math.floor((current - startDate) / 1000); // Tính giây

            var days = Math.floor(seconds / (3600 * 24)); // Tính ngày
            seconds = seconds % (3600 * 24); // Cập nhật lại giây sau khi trừ ngày

            var hours = Math.floor(seconds / 3600); // Tính giờ
            seconds = seconds % 3600; // Cập nhật lại giây sau khi trừ giờ

            var minutes = Math.floor(seconds / 60); // Tính phút
            seconds = seconds % 60; // Cập nhật lại giây sau khi trừ phút

            // Hiển thị kết quả
            var result = "<span class=\"digit\">" + days + "</span> ngày <span class=\"digit\">" + hours + "</span> giờ <span class=\"digit\">" + minutes + "</span> phút <span class=\"digit\">" + seconds + "</span> giây";
            $("#clock").html(result);
        }

        // Thời điểm bắt đầu từ ngày 30/1/2025
        var startDate = new Date(2025, 10, 8); // tháng 0 là tháng 1 (vì tháng bắt đầu từ 0)

        // Cập nhật đồng hồ mỗi giây
        setInterval(function() {
            timeElapse(startDate);
        }, 1000);  // Cập nhật mỗi giây
