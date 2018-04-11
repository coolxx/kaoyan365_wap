$(function () {
    $('.zg_kyhead_nav em').toggle(function () {
        $('.zg_kyhead_navwrap').show()
    },function () {
        $('.zg_kyhead_navwrap').hide()
    })
    $('.zg_kyhead_btn').each(function (index) {
        $(this).click(function () {
            $('.zg_kyhead_btn').removeClass('act1').eq(index).addClass('act1');
            $('.zg_kyhead_show').hide().eq(index).show()
        })
    })

    $('.btn_box1 span').each(function (index) {
        $(this).click(function () {
            $('.btn_box1 span').removeClass('act2').eq(index).addClass('act2');
            $('.show_box1').hide().eq(index).show()
        })
    })
    $('.btn_box2 span').each(function (index) {
        $(this).click(function () {
            $('.btn_box2 span').removeClass('act2').eq(index).addClass('act2');
            $('.show_box2').hide().eq(index).show()
        })
    })

    $('#wx_open').click(function () {
        $('.mask').show()
        $('.zg_wxtk').show()
    })
    $('#wx_close').click(function () {
        $('.mask').hide()
        $('.zg_wxtk').hide()
    })

    $('#wb_open').click(function () {
        $('.mask').show()
        $('.zg_wbtk').show()
    })
    $('.zg_wbtk em').click(function () {
        $('.mask').hide()
        $('.zg_wbtk').hide()
    })
    $('#zg_kyappo').click(function () {
        $('.mask').show()
        $('.zg_kyappo').show()
    })
    $('.zg_kyappo em').click(function () {
        $('.mask').hide();
        $('.zg_kyappo').hide()
    })
    var n=0;
    setInterval(function () {
        n++;

        var index=n%2;
        if(index==0){
            $('#zx').css('width','0.46rem').attr('src','images/m5-0.png')
        }else{
            $('#zx').css('width','0.51rem').attr('src','images/m5-1.png')
        }
    },1000)
})