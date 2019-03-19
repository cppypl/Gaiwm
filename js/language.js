$(function(){
    // do something
    var script=document.createElement("script");
    script.type="text/javascript";
    script.src="js/translate.js";
    document.getElementsByTagName('head')[0].appendChild(script);
 
 
    var value = sessionStorage.getItem("language");
    document.onreadystatechange = function () {
        if (document.readyState == 'complete') {
            if(value==="1"){
                Microsoft.Translator.Widget.Translate('zh-CHS', 'en', onProgress, onError, onComplete, onRestoreOriginal, 2000);
            }
        }
    }
    function onProgress(value) {
    }
    function onError(error) {
    }
    function onComplete() {
        $("#WidgetFloaterPanels").hide();
    }
    function onRestoreOriginal() {
    }


    $('#toEnglish').click(function(){
        
        sessionStorage.setItem("language", "1");
    window.location.reload()
    })
    $('#toChinese').click(function(){
        sessionStorage.setItem("language", "0");
        window.location.reload()
    })


    var value = sessionStorage.getItem("language");
    if(value==="1"){
        $('#toEnglish').addClass('active')
    }else{
        $('#toChinese').addClass('active')
    }




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



//设置HTML的font-zise
(function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
      };
   
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);
  
  


