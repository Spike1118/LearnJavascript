//添加load事件
window.addEventListener('load', function () {
    //1.获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    //2.当鼠标经过focus 就显示左右按钮
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            //手动调用点击事件
            arrow_r.click();
        }, 2000)
    })
    //3.动态生成小圆圈，有几张图片就生成几个小圆圈 
    var ol = focus.querySelector('.circle');
    var ul = focus.querySelector('ul');
    for (var i = 0; i < ul.children.length; i++) {
        //创建一个li
        var li = document.createElement('li');
        //记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute('index', i);
        //把小li插入ol
        ol.appendChild(li);
        //4.小圆圈的排他思想 可以在生成小圆圈的同时绑定点击事件
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            //5.点击小圆圈，移动图片，移动的是ul    ul需要定位
            //ul移动的距离：小圆圈的索引号 乘以 图片的宽度 注意是负值
            //当我们点击某个小li 就拿到当前小li的索引号
            var index = this.getAttribute('index');
            //当我们点击某个小li时，就把这个索引号赋值给num和circle
            num = circle = index;
            animate(ul, -index * focusWidth);
        })
    }
    //把ol里面的第一个小li类名设置为 current
    ol.children[0].className = 'current';
    //6复制第一张图到ul的最后面 为无缝滑动做准备
    //克隆ul第一个 li cloneNode() 加true 深克隆 复制里面的子节点 false 浅克隆
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //7.点击右侧按钮，图片滚动一张
    //设定变量num,每点击一次右侧按钮，num++,再用num的值乘以图片的宽度，得到的值就是ul移动的距离
    var num = 0;
    //控制小圆圈的播放
    var circle = 0;
    //flag 节流阀
    //防止轮播图按钮连续点击造成播放过快。
    // 节流阀目的：当上一个函数动画内容执行完毕，再去执行下一个函数动画，让事件无法连续触发。
    // 核心实现思路：利用回调函数，添加一个变量来控制，锁住函数和解锁函数。
    //  开始设置一个变量var flag = true;
    //  If(flag){ flag = false; do something} 关闭水龙头
    //  利用回调函数动画执行完毕， flag = true     打开水龙头
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;   //关闭节流阀
            //如果走到了最后复制的第一张，就快速复原ul的left值为0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;    //打开节流阀
            });
            //8.点击右侧按钮，小圆圈跟随一起变化   可以再声明一个变量控制小圆圈的播放
            circle++;
            //如果circle==ol.children.length-1,
            //说明走到最后我们克隆的这张图片了 我们就复原
            if (circle == ol.children.length) {
                circle = 0;
            }
            //调用circleChange函数
            circleChange()
        }
    })
    //9.点击左侧按钮，图片滚动一张
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;   //关闭节流阀
            //如果走到了第一张索引号为0，就将ul li的索引号变为ul.children.length - 1
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;    //打开节流阀
            });
            //点击左侧按钮，小圆圈跟随一起变化   可以再声明一个变量控制小圆圈的播放
            circle--;
            //如果circle<0,
            //说明走到第一张图片了 我们就circle = ol.children.length - 1
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            //调用circleChange函数
            circleChange()
        }
    })
    function circleChange() {
        //先清除所有小圆圈的类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        //再留下当前小圆圈的类名
        ol.children[circle].className = 'current';
    }
    //10. 自动播放轮播图 相当于点击右侧按钮
    var timer = setInterval(function () {
        //手动调用点击事件
        arrow_r.click();
    }, 2000)
})