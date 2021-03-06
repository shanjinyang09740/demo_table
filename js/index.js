$(function(){
    
    //添加
    $('#add-btn').click(function(){
        hideTr = $('#hide-tbody').children().first();
        newTr = hideTr.clone().show();
        $('#show-tbody').append(newTr);
    });

    //保存
    $('.save-btn').die('click').live('click', function(){
       var thisTr = $(this).parent().parent();
        thisTr.find('input[type="text"]').each(function(i, el){
            el = $(el);
            el.parent().text(el.val());
            el.remove();
        });
        $(this).hide();
        thisTr.find('.edit-btn').show();
    });

    //删除
    $('.del-btn').die('click').live('click', function(){
        $(this).parent().parent().remove();
    });

    //修改
    $('.edit-btn').die('click').live('click', function(){
        var thisTr = $(this).parent().parent();
        thisTr.find('td:not(".lastTd")').each(function(i, el){
            el = $(el);
            var html = '<input type="text" name="" value="'+el.text()+'">';
            el.html(html);
        });
        $(this).hide();
        thisTr.find('.save-btn').show();
    });

    //查询
    $('#search-btn').click(function(){
        var tr = $('#show-tbody').find('.trr');
        var keyText = $('.search-word').val();
        var keyWord = $('#show-tbody').find('.trr .num').text();
        for(var i=0, len=keyWord.length; i<len; i++){
            if(keyWord[i] == keyText[0]){
                tr.eq(i).show();
            }else{
                tr.eq(i).hide();
            }

        }
    });

    //返回
    $('#back-btn').click(function(){
        $('#show-tbody .trr').show();
    });

    //表格对应鼠标移入行高亮显示
    $('#show-tbody tr').mouseenter(function(){
        $(this).children('td').addClass('hoverer');
    });
    $('#show-tbody tr').mouseleave(function(){
        $(this).children('td').removeClass('hoverer');
    });

    //实现表格隔行变色
    $('.trr:even').children('td').css('backgroundColor', 'green');
    $('.trr:odd').children('td').css('backgroundColor', '#e5f1f4');

    //隐藏一行/一列
    /*$('#show-tbody tr:eq(3)').hide();*/ //隐藏一行
    /*$('#tab tr').each(function(){
        $('th:eq(2)', this).hide();
        $('td:eq(2)', this).hide();
    }); //隐藏一列*/
    /*$('#tab tr td:nth-child(2)').hide(); //隐藏一列*/

    //删除一行
    //1、删除除第一行外的所有行
    /*$('#tab tr:not(:last)').remove();*/
    $('#tab tr:eq(0)').remove(); //删除指定行

    //获取每一行指定的单元格的值
    var arr = [];
    $('#show-tbody tr td:nth-child(2)').each(function(key, value){
        arr.push($(this).html());
    });
    var result = arr.join(',');
    /*console.log(result);*/




});

//全选/反选
function checkAllClick() {
    /*$('#show-tbody tr').find('input[type="checkbox"]').each(function(i){
        if($(this).attr('checked')){
            $(this).attr('checked', false);
        }else{
            $(this).attr('checked', true);
        }
    });*/

    $('#show-tbody tr').find('input[type="checkbox"]').each(function(i){
        //获取当前复选框是否选中
        var isChecked = $(this).prop('checked');
        if(isChecked){
            //设置不选中
            $(this).attr('checked', false);
        }else{
            //设置选中
            $(this).attr('checked', true);
        }
    });
    



}