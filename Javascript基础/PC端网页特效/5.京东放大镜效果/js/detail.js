window.addEventListener('load', function () {
    // 采用load是等页面加载完了再执行js
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function (e) {
        //(1)先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        //(2)再减去盒子高度 300 的一半，是150 就是mask的最终left和top的值
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        //(3)使mask层的范围在preview_img层盒子里，即mask最小移动距离为0，
        //(4)最大距离为
        var maskMaxX = preview_img.offsetWidth - mask.offsetWidth;
        // var maskMaxY = preview_img.offsetHeight - mask.offsetHeight;
        // if (maskX <= 0) {
        //     maskX = 0;
        // } else if (maskX >= maskMaxX) {
        //     maskX = maskMaxX;
        // }
        // if (maskY <= 0) {
        //     maskY = 0;
        // } else if (maskY >= maskMaxY) {
        //     maskY = maskMaxY;
        // }
        //条件运算符 简化if else if 语句
        maskX = (maskX <= 0) ? 0 : (maskX >= maskMaxX ? maskMaxX : maskX);
        maskY = (maskY <= 0) ? 0 : (maskY >= maskMaxX ? maskMaxX : maskY);
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        //3.大图移动的距离=mask移动的距离*大图移动的最大距离/mask移动的最大距离
        //大图
        var bigImg = document.querySelector('.bigImg');
        //大图移动的最大距离
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        //大图移动的距离
        var bigX = maskX * bigMax / maskMaxX;
        var bigY = maskY * bigMax / maskMaxX;
        //重要：切记要给bigImg图片设置绝对定位，才会移动
        //mask移动方向和bigImg移动相反，所以加负号
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    })
})