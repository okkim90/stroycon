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


    var $tab_btn = $('.tab_set .tab_btns .tab_btn');
    $tab_btn.on('click',function(){
        var $idx = $(this).index();
        var $tab_cont = $(this).parents('.tab_set').find('.tab_cont');
        //console.log($idx);
        $(this).addClass('on').siblings('.tab_btn').removeClass('on');
        $tab_cont.eq($idx).addClass('on').siblings('.tab_cont').removeClass('on');
    });
});

function filebox(target){
    var $this = $(target);
    var $val = $this.val();
    $this.parents('.file_box').find('.file_box_txt').val($val);
    if($this.is('#upload_bg')){
        $('#btn_upload_bg').data('bg',$val);
    }
    if($this.is('#upload_cha')){
        $('#btn_upload_cha').data('chaImg',$val);
    }
}