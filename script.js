$( document ).ready(function() {

    $(window).on('activate.bs.scrollspy', function (e, obj) {
      // console.log(obj.relatedTarget);
      // window.location.hash = obj.relatedTarget;
    });

    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        offset = -80

        $('html, body').animate({
            scrollTop: ($(hash).offset().top + offset)
        }, 1000, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
        });
        }
    });
});
