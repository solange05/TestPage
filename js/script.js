$(document).ready(function() {
    $('a[data-bs-toggle="collapse"]').on('click', function() {
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: $('#accordion').offset().top -56
            }, 500); 
        }, 300); 
    });
});

$(document).ready(function() {
    $('button[data-bs-toggle="collapse"]').on('click', function() {
        var targetId = $(this).data('bs-target'); 
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: $(targetId).offset().top - 110 
            }, 500); 
        }, 300); 
    });
});