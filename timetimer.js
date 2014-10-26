function start() {
    var $timer = $(".timer").first();
    var $remaining = $timer.find(".remaining");
    var height = $remaining.height();

    var timing = window.setInterval(
            function() { 
                height = height - 1; 
                $remaining.height(height + "px");
            }, 6000)
}
