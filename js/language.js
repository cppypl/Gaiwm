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

});
