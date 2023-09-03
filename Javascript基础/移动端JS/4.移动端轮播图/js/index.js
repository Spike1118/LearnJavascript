window.addEventListener('load', function () {
    // alert('1');
    //1.获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var ol = focus.children[1];
    //2.获取focus的宽度
    var w = focus.offsetWidth;
    //3.定时器
    var index = 0;
    var timer = setInterval(function () {
        index++;
        var translatex = -index * w;
        //过渡：transition 使动画效果更平滑
        ul.style.transition = 'all .3s';
        //移动端移动：translateX
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000)
    //判断条件是要等到图片滚动完毕后再判断，即过渡完成后再判断
    ul.addEventListener('transitionend', function () {     //transitionend 检测过渡完成事件
        //4.无缝滚动
        if (index >= 3) {   //索引号等于3，即滚动到最后一张，此时索引号要复原为0
            index = 0;
            ul.style.transition = 'none';   //清除过渡，使ul快速滚动到指定位置
            var translatex = -index * w;    //利用最新的索引号乘以宽度 去滚动ul
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
        else if (index < 0) {
            index = 2     //索引号复原为2
            ul.style.transition = 'none';   //清除过渡，使ul快速滚动到指定位置
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
        //5.小圆点跟随变化
        //把ol里面li带有current类名的选出来去掉 remove
        ol.querySelector('li.current').classList.remove('current');
        //让当前索引号 的li加上current  add
        ol.children[index].classList.add('current');
    })
    //6.手指滑动轮播图
    //触摸元素 获取手指的坐标
    var startX = 0;
    var moveX = 0;    //后面要使用这个移动距离，所以定义一个全局变量
    ul.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        //手指触摸的时候就要停止定时器
        clearInterval(timer);
    })
    var flag = false;
    //移动手指：touchmove 计算手指的移动距离，并且移动盒子
    ul.addEventListener('touchmove', function (e) {
        //计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        //移动盒子: 盒子原来的位置+手指移动的距离
        var translatex = -index * w + moveX;
        //手指移动的时候，不需要过渡效果，所以清除transition
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true;  //如果用户手指移动过，再去判断，否则不做判断是回弹还是播放上一张或下一张
        e.preventDefault(); //阻止滚动屏幕的行为
    }
    )
    //手指离开，根据移动距离判断是回弹还是播放上一张或下一张
    ul.addEventListener('touchend', function () {
        if (flag) { //判断用户是否会移动
            //(1)如果移动距离大于50px,我们就播放上一张或下一张
            if (Math.abs(moveX) > 50) {
                if (moveX > 0) {    //手指右滑，图片播放上一张 moveX是正值
                    index--;
                } else {
                    //手指左滑，图片播放下一张 moveX是负值
                    index++;
                }
                var translatex = -index * w;
                //过渡：transition 使动画效果更平滑
                ul.style.transition = 'all .3s';
                //移动端移动：translateX
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
            //(2)如果移动距离小于50像素就回弹
            else {
                var translatex = -index * w;
                //过渡：transition 使动画效果更平滑
                ul.style.transition = 'all .1s';
                //移动端移动：translateX
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        //手指离开的时候就停止定时器
        clearInterval(timer);   //保证网页只有一个定时器运行
        timer = setInterval(function () {
            index++;
            var translatex = -index * w;
            //过渡：transition 使动画效果更平滑
            ul.style.transition = 'all .3s';
            //移动端移动：translateX
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    });
    // 返回顶部模块制作
    var goBack = document.querySelector('.goBack');
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    });
    goBack.addEventListener('click', function () {
        window.scroll(0, 0);
    })
})