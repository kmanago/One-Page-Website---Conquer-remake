$('.topnav a').on('click', function() {

    var link = $(this).attr('id');
    $('.topnav a.active').removeClass('active');
    $(this).attr('id').addClass('active');
    
})
