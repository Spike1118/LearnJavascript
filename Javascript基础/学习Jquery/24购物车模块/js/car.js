$(function(){
    //1.将全选框的chencked的状态赋值给小复选框即可
    //采用事件change  可以获取全选按钮的状态改变
    $(".checkall").change(function(){
        // console.log($(this).prop("checked"));
        $(".j-checkbox,.checkall").prop("checked",$(this).prop("checked"));   //赋值 且用并集选择器让前后的全选框都同步变化
    })
    
    //2.当小复选框被选中的个数等于3时，全选框被选中，否则，全选框不被选中
    //(1):checked 被选中的表单元素
    $(".j-checkbox").change(function(){
        //$(".j-checkbox:checked").length是被选中的复选框个数
        //$(".j-checkbox").length是复选框个数
        if($(".j-checkbox:checked").length===$(".j-checkbox").length){
            $(".checkall").prop("checked",true);
        }
        else{
            $(".checkall").prop("checked",false);
        }
    })
    //3.购物车商品增减
    // (1)核心思路：首先声明一个变量，每次点击+(increment)时，就让这个变量加1，再把这个变量赋值给文本框
        //(2)将+的兄弟文本框的初始值用val()获取然后再赋值给n变量,并在每次点击的时候加1
        //(3)将n赋值给+的兄弟文本框
    $(".increment").click(function(){
        var n=$(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        //4.商品小计=商品单价*文本框的商品数量
        // var p=$(this).parent().parent().siblings(".p-price").html();
        //parents("指定的祖父元素") 可以选定指定的父级元素
        var p=$(this).parents(".p-num").siblings(".p-price").html();
        p=p.substr(1);  //把￥符号去掉再相乘 截取字符串 substr(1)
        // console.log(p);
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+(p*n).toFixed(2));
    })
    $(".decrement").click(function(){
        var n=$(this).siblings(".itxt").val();
        if(n==1){
            return false;   //如果n==1,就停止执行后面的代码
        }
        n--;
        $(this).siblings(".itxt").val(n);
        // var p=$(this).parent().parent().siblings(".p-price").html();
        var p=$(this).parents(".p-num").siblings(".p-price").html();
        p=p.substr(1);  //把￥符号去掉再相乘 截取字符串 substr(1)
        // console.log(p);
        //toFixed("想要保留的小数位数") 可以保留值的小数位数
        var price=(p*n).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+price);
    })
    //5.用户修改文本框的值，计算商品小计
    $(".itxt").change(function(){
        //获取修改的文本框的值
        var n=$(this).val();
        //当前商品的单价
        var p=$(this).parents(".p-num").siblings(".p-price").html();
         p=p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+(p*n).toFixed(2));
    })
})