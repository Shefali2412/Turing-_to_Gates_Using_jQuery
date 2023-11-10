$(document).ready(function() {
    $("img").on("click", function() {
        var currentSrc = $(this).attr("src");
        var altSrc = $(this).attr("alt-src");

        // Swap the image source with alt-src
        $(this).attr("src", altSrc);
        $(this).attr("alt-src", currentSrc);
    });
});
