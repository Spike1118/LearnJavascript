function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //步长值=(目标位置-现在的位置)/10，可实现走的步长慢慢变小，做成缓动动画
        var step = (target - obj.offsetLeft) / 10;
        //把我们步长值改为整数 不要出现小数的问题，若大于0，则往大了取整，否则往小了取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //回调函数要写在停止计时器里面
            // if (callback) {
            //     callback(); //调用callback函数
            // }
            callback && callback(); //短路运算，与运算，要全部为真，才执行
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
};