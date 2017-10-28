$(function () {
    /*$('li option').bind('dblclick',function () {
        $(this).parents('li').siblings('li').children('select').append($(this));
    });*/
    $('#sel').bind('click',function (event) {
        event.stopPropagation();
        $('div ul').show();
        $(document).bind('click',function (e) {
            if($(e.target).closest($('div ul')).length == 0){
                $('div ul').hide();
            }
        })
    })
    $('input[type=checkbox]').bind('click',function () {
        var str='';
        $('input[type=checkbox]:checked').each(function (i) {
            str+=$(this).parent($('li')).children('span').html()+'，';
        })
        str=str.substring(0,str.length-1);
        $('#sel').val(str);
    })
})