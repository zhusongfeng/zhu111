
$(document).ready(function(){
 /*   //播放音乐
    function playMusic(path) {
        console.log(1111111111)
        var audioEle = document.getElementById("audio");
        // audioEle.src=path;
        // audioEle.load();
        if (audioEle.paused){ /!*如果已经暂停*!/
            console.log(222222222)
            audioEle.play();   //播放

        }else {
            console.log(333333)
            audioEle.pause();  //暂停
        }
    }
    setTimeout(time)
    var  time = setInterval(function () {
        playMusic('http://music.163.com/song/media/outer/url?id=504924216.mp3');
    },1000)*/
    // $('.wine-container').trigger("click");
    var i = 0;
    var audios = document.getElementById('audios');
    $('.wine-container').click(function () {
        console.log(5555555555)
        $("#audios").attr('src','http://music.163.com/song/media/outer/url?id=504924216.mp3');
        var seii = setInterval(function() {
            (i == 36000) ? i = 0 : i++;
            if(audios.paused) {
                clearInterval(seii)
            }
        }, 30);
        if(audios.paused) {
            audios.play();
        } else {
            audios.pause();
        }

    })


    /*//获取页面数据
    var ticket = 'sd-100';
    $.get("http://adv.qclike.cn/api/goods/info?ticket"+ticket, function(result){
        $("div").html(result);
    });

    $('.keyboard-cover').hide();
    //选择具体时间
    new Rolldate({
        el: '#endTime',
        format: 'hh:mm'
    });
    //选择日期
    new Rolldate({
        el: '#startTime',
        format: 'YYYY-MM-DD',
        beginYear: 2000,
        endYear: 2100,
        init: function() {
            console.log('插件开始触发');
        },
        moveEnd: function(scroll) {
            console.log(scroll)
            console.log('滚动结束');
        },
        confirm: function(date) {
            // $('#startTime').val(date)
            console.log('确定按钮触发');
        },
        cancel: function() {
            console.log('插件运行取消');
        }
    })

    //解决键盘遮挡
    $("input").focus(function(){
        document.querySelector('#name').scrollIntoView();
        $('.keyboard-cover').show();
    });
    $("input").blur(function(){
        $('.keyboard-cover').hide();

    });
    //点击提交
    $('#subbox').on('click',function () {
        var name = $('#name').val().replace(/(^\s*)|(\s*$)/g,"");
        var mobile = $('#mobile').val().replace(/(^\s*)|(\s*$)/g,"");
        var weChat = $('#weChat').val().replace(/(^\s*)|(\s*$)/g,"");
        var startTime = $('#startTime').val();
        var endTime = $('#endTime').val();
        if(!name){
            $('#warning').show();
            $('.error-message').text('请输入姓名');
            setTimeout(function () {
                $('#warning').hide();
            },1000)
            return
        }
        if(!mobile){
            $('#warning').show();
            $('.error-message').text('请输入手机号');
            setTimeout(function () {
                $('#warning').hide();
            },1000)
            return
        }else{
            if(!(/^1[3456789]\d{9}$/.test(mobile))){
                $('.error-message').text('请输入正确的手机号');
                setTimeout(function () {
                    $('#warning').hide();
                },1000)
                return false;
            }
        }
        if(!weChat){
            $('#warning').show();
            $('.error-message').text('请输入微信号');
            setTimeout(function () {
                $('#warning').hide();
            },1000)
            return ;
        }
        if(!startTime){
            $('#warning').show();
            $('.error-message').text('请选择日期');
            setTimeout(function () {
                $('#warning').hide();
            },1000)
            return ;
        }
        if(!endTime){
            $('#warning').show();
            $('.error-message').text('请选择具体时间');
            setTimeout(function () {
                $('#warning').hide();
            },1000)
            return ;
        }

        //实际应用中请提交ajax,模板定时器模拟提交效果
        setTimeout(()=>{
            $.post("",{

            },function(result){

            });

        },1000)

    })
*/
    $('.wine-container').trigger("click");

})



