$("[data-media]").on("click", function(e) {
    e.preventDefault();
    var $this = $(this);
    var videoUrl = $this.attr("data-media");
    var popup = $this.attr("href");
    var $popupIframe = $(popup).find("iframe");

    $popupIframe.attr("src", videoUrl);

    $this.closest(".content").addClass("show-popup");
});

$(".popup").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    var leg=$('#popup-vid').attr("src");
    $('#popup-vid').attr("src",leg);
    $(".content").removeClass("show-popup");
});

$(".popup > iframe").on("click", function(e) {
    e.stopPropagation();
});

$("#media-popup").on("hide",function(){
    var leg=$('#popup-vid').attr("src");
    $('#popup-vid').attr("src",leg);
});