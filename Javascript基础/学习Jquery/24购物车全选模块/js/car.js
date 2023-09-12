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
})