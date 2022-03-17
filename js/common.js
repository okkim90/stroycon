$(function(){
    var $footer_policy = $('.footer_policy');
    $('.btn_policy').on('click',function(){
        if($footer_policy.hasClass('on')){
            $footer_policy.removeClass('on');
            $footer_policy.find('.txt_box').slideUp(200);
        }else{
            $footer_policy.addClass('on');
            $footer_policy.find('.txt_box').slideDown(200);
        }
    });
});