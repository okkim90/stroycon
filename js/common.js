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


    $('.btn_setting').on('click',function(){
        var $setting_box = $(this).parent('.setting_set').find('.setting_box');
        if($setting_box.hasClass('on')){
            $setting_box.removeClass('on');
        }else{
            $setting_box.addClass('on');
        }
    });
});