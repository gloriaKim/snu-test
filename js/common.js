$(document).ready(function(){

    $('.lnb-menu').click(function(e){
        console.log('ya')
        e.preventDefault();
        $(this).toggleClass('open');
        $('#gnb').toggleClass('on');
    });

    if($(window).width() <940) {
        

    }
});