$(function(){

    

    

    //_________________________________________________

    $('.menu_list').click(function(ev){
        $('nav ul').slideToggle()
        ev.stopPropagation();
    })

    $('.heimu').click(function(){
        $('.left_box').animate({'left':'-90%'})
        $('nav ul').slideUp()
        $('.heimu').fadeOut(333)
    })
    $('.m_head').click(function(ev){
        $('.heimu').fadeIn(333)
        $('.left_box').animate({'left':'0'})
        ev.stopPropagation();
        
    })

    $('.toRegister').click(function () {
        $('.login-form').hide()
        $('.register-form').show()
    })
    $('.toLogin').click(function () {
        $('.login-form').show()
        $('.register-form').hide()
    })
});


